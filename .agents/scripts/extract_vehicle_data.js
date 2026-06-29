/**
 * ============================================================
 * 卓越前线 - 载具数据提取脚本 (v2 — 数据包格式)
 *
 * 功能：
 *   从 SBW 和 MCSP 模组的 JAR 文件中提取所有载具配置，
 *   解析为分类数据包目录结构，供 KubeJS 运行时自动发现使用。
 *
 * 使用方法：
 *   cd kubejs/.agents/scripts/
 *   node extract_vehicle_data.js
 *
 * 输出：
 *   kubejs/data/sbw_vehicle_db/
 *   ├── _registry.json                   ← 注册声明文件
 *   ├── main_battle_tank/                ← 分类目录
 *   │   ├── superbwarfare--t_90a.json    ← 单辆载具
 *   │   └── ...
 *   ├── infantry_fighting_vehicle/
 *   ├── artillery/
 *   └── ...
 * ============================================================
 */

const fs = require('fs');
const path = require('path');

// ── 路径配置 ──

// 脚本在 kubejs/.agents/scripts/，上三级是游戏版本目录
const GAME_DIR = path.resolve(__dirname, '..', '..', '..');
// GAME_DIR = d:/WDSJ/我的世界/.minecraft/versions/1.21.1-NeoForge_21.1.233航空学攻防战-15/
const MODS_DIR = path.join(GAME_DIR, 'mods');
const KUBEJS_DIR = path.join(GAME_DIR, 'kubejs');
const DB_ROOT = path.join(KUBEJS_DIR, 'data', 'sbw_vehicle_db');
const TEMP_DIR = path.join(KUBEJS_DIR, '.vehicle_extract');

// 模组 JAR 文件名（含通配符匹配）
const MOD_JARS = {
  superbwarfare: { pattern: /superbwarfare.*\.jar$/i, prefix: 'superbwarfare' },
  mcsp: { pattern: /MCSP.*\.jar$/i, prefix: 'mcsp' }
};

/**
 * displayType → category 映射表
 * 这是唯一需要维护分类逻辑的地方，JS 运行时不再做二次分类。
 */
const DISPLAY_TYPE_CATEGORY = {
  'Tank':        'main_battle_tank',
  'APC':         'infantry_fighting_vehicle',
  'Car':         'utility_vehicle',
  'Artillery':   'artillery',
  'Airplane':    'aircraft',
  'Defense':     'defense_turret',
  'Boat':        'naval',
  'Helicopter':  'helicopter',
  'AA':          'air_defense',
  'Drone':       'drone',
};

/** 分类 → 显示名（中文） */
const CATEGORY_DISPLAY = {
  main_battle_tank:           '主战坦克',
  infantry_fighting_vehicle:  '步兵战车/装甲车',
  utility_vehicle:            '多功能车/运输车',
  artillery:                  '火炮/火箭炮',
  aircraft:                   '固定翼飞机',
  defense_turret:             '固定防御',
  naval:                      '水上载具',
  helicopter:                 '直升机',
  air_defense:                '防空单位',
  drone:                      '无人机',
};

/** 分类 → 描述 */
const CATEGORY_DESC = {
  main_battle_tank:           'Main Battle Tanks',
  infantry_fighting_vehicle:  'Infantry Fighting Vehicles & APCs',
  utility_vehicle:            'Utility Vehicles & Trucks',
  artillery:                  'Artillery & Rocket Artillery',
  aircraft:                   'Fixed-wing Aircraft',
  defense_turret:             'Fixed Defense Turrets',
  naval:                      'Naval Vehicles',
  helicopter:                 'Helicopters',
  air_defense:                'Air Defense Units',
  drone:                      'Drones',
};

// ══════════════════════════════════════════════════════════════
//  工具函数
// ══════════════════════════════════════════════════════════════

/** 安全解析 JSON，失败返回 null */
function safeParse(text) {
  try { return JSON.parse(text); } catch (e) { return null; }
}

/** 查找匹配的 JAR 文件 */
function findJar(pattern) {
  const files = fs.readdirSync(MODS_DIR);
  for (const f of files) {
    if (pattern.test(f)) return path.join(MODS_DIR, f);
  }
  return null;
}

/** 提取 JAR 中的指定路径到临时目录 */
function extractJarData(jarPath, extractPath) {
  require('child_process').execSync(
    `jar xf "${jarPath}" "${extractPath}"`,
    { cwd: TEMP_DIR, stdio: 'pipe' }
  );
}

/** 读取目录下所有 JSON 文件 */
function readJsonDir(dirPath) {
  const results = {};
  if (!fs.existsSync(dirPath)) return results;
  const files = fs.readdirSync(dirPath);
  for (const f of files) {
    if (!f.endsWith('.json') || f.includes('example')) continue;
    const fullPath = path.join(dirPath, f);
    const data = safeParse(fs.readFileSync(fullPath, 'utf8'));
    if (data) {
      const name = f.replace('.json', '');
      results[name] = data;
    }
  }
  return results;
}

/** 安全清理目录（先删再建） */
function cleanDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
  fs.mkdirSync(dirPath, { recursive: true });
}

// ══════════════════════════════════════════════════════════════
//  @RifleAmmo / @HeavyAmmo 映射表
// ══════════════════════════════════════════════════════════════

const AMMO_ALIAS = {
  '@RifleAmmo': 'superbwarfare:rifle_ammo',
  '@HeavyAmmo': 'superbwarfare:heavy_ammo',
};

/**
 * 展开 AmmoType 字段为纯物品 ID 列表
 */
function resolveAmmoTypes(ammoType) {
  if (!ammoType) return [];

  // string: 直接使用或查别名
  if (typeof ammoType === 'string') {
    return [AMMO_ALIAS[ammoType] || ammoType];
  }

  // array: 遍历每个元素
  if (Array.isArray(ammoType)) {
    const results = [];
    for (const item of ammoType) {
      if (typeof item === 'string') {
        results.push(AMMO_ALIAS[item] || item);
      } else if (item && typeof item === 'object' && item.Ammo) {
        results.push(item.Ammo);
      }
    }
    return results;
  }

  return [];
}

// ══════════════════════════════════════════════════════════════
//  部件健康度默认值
// ══════════════════════════════════════════════════════════════

const PART_HEALTH_DEFAULTS = {
  WheelLeft: 100,
  WheelRight: 100,
  MainEngine: 150,
  SubEngine: 150,
  Turret: 100,
};

/**
 * 从 OBB 中提取部件类型
 */
function extractParts(obb) {
  if (!obb || !Array.isArray(obb)) return ['Turret', 'MainEngine'];
  const parts = [];
  for (const entry of obb) {
    if (entry.Part && entry.Part !== 'WheelLeft' && entry.Part !== 'WheelRight') {
      if (!parts.includes(entry.Part)) parts.push(entry.Part);
    }
  }
  const hasWheelLeft = obb.some(e => e.Part === 'WheelLeft');
  const hasWheelRight = obb.some(e => e.Part === 'WheelRight');
  if (hasWheelLeft) parts.unshift('WheelLeft');
  if (hasWheelRight) parts.unshift('WheelRight');
  return parts;
}

/**
 * 根据弹药 ID 推断默认携带/补给量
 */
function getDefaultAmmoCount(ammoId) {
  if (ammoId === 'FE') return 0;
  if (ammoId.includes('missile') || ammoId.includes('rocket')) return 16;
  if (ammoId.includes('bomb')) return 8;
  if (ammoId.includes('mortar')) return 32;
  if (ammoId.includes('shell_ap') || ammoId.includes('shell_he') || ammoId.includes('shell_gs')) return 32;
  if (ammoId.includes('shell_aa')) return 64;
  if (ammoId.includes('rifle_ammo')) return 192;
  if (ammoId.includes('heavy_ammo')) return 128;
  if (ammoId.includes('tow')) return 16;
  if (ammoId.includes('mlrs')) return 32;
  if (ammoId.includes('bullet')) return 256;
  if (ammoId.includes('cartridge')) return 256;
  if (ammoId.includes('25mm') || ammoId.includes('30mm')) return 128;
  if (ammoId.includes('40mm')) return 64;
  if (ammoId.includes('smoke')) return 32;
  return 64;
}

// ══════════════════════════════════════════════════════════════
//  为车辆生成 NBT 模板
// ══════════════════════════════════════════════════════════════

function generateNbtTemplate(vehicleId, vehicleData) {
  const health = vehicleData.MaxHealth || 500;
  const energy = vehicleData.MaxEnergy || 10000000;
  const weapons = vehicleData.Weapons || {};
  const parts = extractParts(vehicleData.OBB);
  const hasDecoy = vehicleData.HasDecoy !== false;

  const template = {
    Energy: energy,
    Health: health,
    Invulnerable: 0,
    IsWreck: 0,
    Power: 0.0,
    DecoyReady: hasDecoy ? 1 : 0,
    ChargeProgress: 0.0,
  };

  for (const part of parts) {
    const defaultHealth = PART_HEALTH_DEFAULTS[part] || 100;
    template[part + 'Health'] = defaultHealth;
    template[part + 'Damaged'] = 0;
  }
  if (parts.includes('Turret')) {
    template.TurretBurned = 0;
    template.TurretBurnTimer = 0;
  }

  const weaponState = {};
  for (const [weaponKey, weaponCfg] of Object.entries(weapons)) {
    const wKey = weaponKey.startsWith('@') ? weaponKey.substring(1) : weaponKey;
    const magSize = weaponCfg.Magazine || 1;
    weaponState[wKey] = {
      components: {
        'minecraft:custom_data': {
          GunData: {
            Ammo: Math.min(magSize, 1)
          }
        }
      }
    };
  }

  if (Object.keys(weaponState).length > 0) {
    template.WeaponState = weaponState;
  }

  // 弹药库存
  const inventoryItems = [];
  let slotIndex = 0;
  const usedAmmo = new Set();

  for (const [, weaponCfg] of Object.entries(weapons)) {
    const ammoTypes = resolveAmmoTypes(weaponCfg.AmmoType);
    for (const ammoId of ammoTypes) {
      if (ammoId === 'FE' || usedAmmo.has(ammoId)) continue;
      usedAmmo.add(ammoId);
      inventoryItems.push({
        Slot: slotIndex++,
        count: getDefaultAmmoCount(ammoId),
        id: ammoId
      });
    }
  }

  if (inventoryItems.length > 0) {
    template.Inventory = { Items: inventoryItems };
  }

  return template;
}

/**
 * 为车辆生成弹药补给配置（每种子弹 → 最大补给量）
 * 从 weapons 的 ammoTypes 自动推导
 */
function generateAmmoSlots(weapons) {
  const slots = {};
  for (const [, weaponCfg] of Object.entries(weapons)) {
    const ammoTypes = resolveAmmoTypes(weaponCfg.AmmoType);
    for (const ammoId of ammoTypes) {
      if (ammoId === 'FE') continue;
      // 使用完整的 item ID 作为 key
      if (!slots[ammoId] || getDefaultAmmoCount(ammoId) > slots[ammoId]) {
        slots[ammoId] = getDefaultAmmoCount(ammoId);
      }
    }
  }
  return slots;
}

// ══════════════════════════════════════════════════════════════
//  生成 _registry.json
// ══════════════════════════════════════════════════════════════

function buildRegistry(categoriesUsed, categoryFiles) {
  const categories = {};
  for (const catKey of categoriesUsed.sort()) {
    categories[catKey] = {
      enabled: true,
      displayName: CATEGORY_DISPLAY[catKey] || catKey,
      description: CATEGORY_DESC[catKey] || '',
      files: categoryFiles[catKey] || []
    };
  }

  return {
    version: 2,
    _comment: 'SBW 载具数据库注册文件 — 在此声明允许使用的分类目录。每个分类下的 files 列表供 KubeJS 自动加载器读取。添加新分类只需在此注册并创建同名目录即可。',
    categories: categories
  };
}

// ══════════════════════════════════════════════════════════════
//  写入单辆载具 JSON 文件
// ══════════════════════════════════════════════════════════════

function writeVehicleFile(catDir, entityId, vehicleInfo) {
  // 文件名格式: mod--basename.json （避免命名空间冲突）
  const filename = entityId.replace(':', '--') + '.json';
  const filePath = path.join(catDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(vehicleInfo, null, 2), 'utf8');
  return filename;
}

// ══════════════════════════════════════════════════════════════
//  主流程
// ══════════════════════════════════════════════════════════════

function main() {
  console.log('=== 卓越前线 载具数据提取 (v2 数据包格式) ===');
  console.log('游戏目录:', GAME_DIR);
  console.log('输出目录:', DB_ROOT);

  // ── 创建临时目录 ──
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  // ── 清空并重建数据包根目录 ──
  cleanDir(DB_ROOT);

  const allVehicles = {};        // entityId → vehicleInfo
  const categoriesUsed = new Set();
  const categoryFiles = {};      // category → [filename, ...]  (for registry)
  const allAmmo = {};
  const categoryVehicleCount = {};

  // ── 遍历每个模组 ──
  for (const [modKey, modInfo] of Object.entries(MOD_JARS)) {
    const jarPath = findJar(modInfo.pattern);
    if (!jarPath) {
      console.log(`[${modKey}] 未找到 JAR 文件`);
      continue;
    }
    console.log(`[${modKey}] 找到 JAR: ${path.basename(jarPath)}`);

    const extractPath = `data/${modInfo.prefix}/sbw/vehicles/`;
    try {
      extractJarData(jarPath, extractPath);
      console.log(`[${modKey}] 提取完成`);
    } catch (e) {
      console.log(`[${modKey}] 提取失败: ${e.message}`);
      continue;
    }

    const vehicleDir = path.join(TEMP_DIR, extractPath);
    const rawVehicles = readJsonDir(vehicleDir);
    console.log(`[${modKey}] 读取到 ${Object.keys(rawVehicles).length} 个载具`);

    for (const [name, data] of Object.entries(rawVehicles)) {
      const entityId = `${modInfo.prefix}:${name}`;
      if (name === 'vehicle_assembling_table') continue;

      // ── 确定分类 ──
      const displayType = data.Type || 'Unknown';
      const category = DISPLAY_TYPE_CATEGORY[displayType] || 'uncategorized';
      categoriesUsed.add(category);

      const weapons = data.Weapons || {};
      const weaponList = [];

      for (const [wKey, wCfg] of Object.entries(weapons)) {
        const cleanKey = wKey.startsWith('@') ? wKey.substring(1) : wKey;
        const ammoTypes = resolveAmmoTypes(wCfg.AmmoType);

        // 记录弹药库
        for (const ammoId of ammoTypes) {
          if (!allAmmo[ammoId]) {
            const shortName = ammoId.split(':').pop();
            allAmmo[ammoId] = {
              id: ammoId,
              shortName: shortName,
              mod: ammoId.startsWith('mcsp:') ? 'mcsp' : 'superbwarfare'
            };
          }
        }

        weaponList.push({
          key: cleanKey,
          displayKey: wKey,
          ammoTypes: ammoTypes,
          magazine: wCfg.Magazine || 1,
          rpm: wCfg.RPM || null,
          damage: wCfg.Damage || null,
          hasOverride: Array.isArray(wCfg.AmmoType) && wCfg.AmmoType.some(a => typeof a === 'object')
        });
      }

      // ── 构建自包含的载具信息 ──
      const vehicleInfo = {
        vehicleId: entityId,
        mod: modKey,
        category: category,
        baseName: name,

        // 模组数据
        displayType: displayType,
        maxHealth: data.MaxHealth || 500,
        maxEnergy: data.MaxEnergy || 10000000,
        hasDecoy: data.HasDecoy === true,
        engineType: data.EngineType || null,
        mass: data.Mass || null,
        upStep: data.UpStep || 0,
        containerType: data.VehicleContainerType || null,
        hudType: data.HudType || null,
        parts: extractParts(data.OBB),
        seatCount: Array.isArray(data.Seats) ? data.Seats.length : 0,
        weapons: weaponList,

        // 部署 NBT 模板
        nbtTemplate: generateNbtTemplate(entityId, data),

        // 弹药补给配置（自动从武器弹药类型推导）
        // key = 物品完整 ID, value = 最大补给量
        ammoSlots: generateAmmoSlots(weapons),
      };

      allVehicles[entityId] = vehicleInfo;

      // ── 写入分类目录 ──
      const catDir = path.join(DB_ROOT, category);
      if (!fs.existsSync(catDir)) {
        fs.mkdirSync(catDir, { recursive: true });
      }
      const writtenFile = writeVehicleFile(catDir, entityId, vehicleInfo);
      if (!categoryFiles[category]) categoryFiles[category] = [];
      categoryFiles[category].push(writtenFile);

      categoryVehicleCount[category] = (categoryVehicleCount[category] || 0) + 1;
    }
  }

  // ── 输出 _registry.json（含文件列表供 KubeJS 加载器使用）──
  const registry = buildRegistry([...categoriesUsed], categoryFiles);
  const registryPath = path.join(DB_ROOT, '_registry.json');
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf8');

  // ── 输出汇总信息 ──
  console.log('\n=== 生成完成 ===');
  console.log('数据包根目录: ' + DB_ROOT);
  console.log('分类数: ' + Object.keys(registry.categories).length);
  const sortedCats = Object.entries(categoryVehicleCount).sort();
  for (const [cat, count] of sortedCats) {
    const display = CATEGORY_DISPLAY[cat] || cat;
    console.log('  ' + display + ' (' + cat + '/): ' + count + ' 辆');
  }
  console.log('总载具数: ' + Object.keys(allVehicles).length + ' 种');

  // ── 清理临时文件 ──
  try {
    if (fs.existsSync(TEMP_DIR)) {
      require('child_process').execSync(
        process.platform === 'win32'
          ? 'rmdir /s /q "' + TEMP_DIR + '"'
          : 'rm -rf "' + TEMP_DIR + '"',
        { stdio: 'pipe' }
      );
      console.log('临时文件已清理');
    }
  } catch(e) {
    console.log('临时文件清理失败: ' + e.message);
  }
  console.log('=== 完成 ===');
}

main();
