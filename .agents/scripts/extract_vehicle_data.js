/**
 * ============================================================
 * 卓越前线 - 载具数据提取脚本
 *
 * 功能：
 *   从 SBW 和 MCSP 模组的 JAR 文件中提取所有载具配置，
 *   解析为结构化数据库，供 KubeJS 的 GUI 和部署逻辑使用。
 *
 * 使用方法：
 *   node extract_vehicle_data.js
 *
 * 输出：
 *   ../generated_data/sbw_vehicle_db.json
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
const OUTPUT_DIR = path.join(KUBEJS_DIR, 'data');
const TEMP_DIR = path.join(KUBEJS_DIR, '.vehicle_extract');

// 模组 JAR 文件名（含通配符匹配）
const MOD_JARS = {
  superbwarfare: { pattern: /superbwarfare.*\.jar$/i, prefix: 'superbwarfare' },
  mcsp: { pattern: /MCSP.*\.jar$/i, prefix: 'mcsp' }
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
  const result = require('child_process').execSync(
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

  // string: 直接使用
  if (typeof ammoType === 'string') {
    const resolved = AMMO_ALIAS[ammoType] || ammoType;
    return [resolved];
  }

  // array: 遍历每个元素
  if (Array.isArray(ammoType)) {
    const results = [];
    for (const item of ammoType) {
      if (typeof item === 'string') {
        const resolved = AMMO_ALIAS[item] || item;
        results.push(resolved);
      } else if (item && typeof item === 'object' && item.Ammo) {
        results.push(item.Ammo);
      }
    }
    return results;
  }

  return [];
}

// ══════════════════════════════════════════════════════════════
//  构建部件列表（从 OBB 或默认模板推导）
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
  // 确保始终有 wheels
  const hasWheelLeft = obb.some(e => e.Part === 'WheelLeft');
  const hasWheelRight = obb.some(e => e.Part === 'WheelRight');
  if (hasWheelLeft) parts.unshift('WheelLeft');
  if (hasWheelRight) parts.unshift('WheelRight');
  return parts;
}

// ══════════════════════════════════════════════════════════════
//  为 MBT/坦克生成 NBT 模板
// ══════════════════════════════════════════════════════════════

/**
 * 根据车辆 JSON 配置生成部署用的 NBT 模板
 */
function generateNbtTemplate(vehicleId, vehicleData) {
  const health = vehicleData.MaxHealth || 500;
  const energy = vehicleData.MaxEnergy || 10000000;
  const weapons = vehicleData.Weapons || {};
  const parts = extractParts(vehicleData.OBB);
  const hasDecoy = vehicleData.HasDecoy !== false; // 默认 true

  // ── 基本属性 ──
  const template = {
    Energy: energy,
    Health: health,
    Invulnerable: 0,
    IsWreck: 0,
    Power: 0.0,
    DecoyReady: hasDecoy ? 1 : 0,
    ChargeProgress: 0.0,
  };

  // ── 部件健康度 ──
  for (const part of parts) {
    const defaultHealth = PART_HEALTH_DEFAULTS[part] || 100;
    template[part + 'Health'] = defaultHealth;
    template[part + 'Damaged'] = 0;
  }
  // Turret 额外字段
  if (parts.includes('Turret')) {
    template.TurretBurned = 0;
    template.TurretBurnTimer = 0;
  }

  // ── 武器状态 ──
  const weaponState = {};
  for (const [weaponKey, weaponCfg] of Object.entries(weapons)) {
    // 跳过 @ 开头的特殊武器 key
    const wKey = weaponKey.startsWith('@') ? weaponKey.substring(1) : weaponKey;
    const magSize = weaponCfg.Magazine || 1;
    weaponState[wKey] = {
      components: {
        'minecraft:custom_data': {
          GunData: {
            Ammo: Math.min(magSize, 1) // 预装 1 发
          }
        }
      }
    };
  }

  if (Object.keys(weaponState).length > 0) {
    template.WeaponState = weaponState;
  }

  // ── 弹药库存（自动计算合理默认值） ──
  const inventoryItems = [];
  let slotIndex = 0;
  const usedAmmo = new Set();

  for (const [, weaponCfg] of Object.entries(weapons)) {
    const ammoTypes = resolveAmmoTypes(weaponCfg.AmmoType);
    for (const ammoId of ammoTypes) {
      if (usedAmmo.has(ammoId)) continue;
      usedAmmo.add(ammoId);

      // 根据弹药类型决定默认携带量
      let defaultCount = 64;
      if (ammoId.includes('missile') || ammoId.includes('rocket')) defaultCount = 16;
      if (ammoId.includes('bomb')) defaultCount = 8;
      if (ammoId.includes('mortar')) defaultCount = 32;
      if (ammoId.includes('shell_ap') || ammoId.includes('shell_he') || ammoId.includes('shell_gs')) defaultCount = 32;
      if (ammoId.includes('shell_aa')) defaultCount = 64;
      if (ammoId.includes('rifle_ammo')) defaultCount = 192;
      if (ammoId.includes('heavy_ammo')) defaultCount = 128;

      inventoryItems.push({
        Slot: slotIndex++,
        count: defaultCount,
        id: ammoId
      });
    }
  }

  if (inventoryItems.length > 0) {
    template.Inventory = { Items: inventoryItems };
  }

  return template;
}

// ══════════════════════════════════════════════════════════════
//  主流程
// ══════════════════════════════════════════════════════════════

function main() {
  console.log('=== 卓越前线 载具数据提取 ===');
  console.log('游戏目录:', GAME_DIR);
  console.log('模组目录:', MODS_DIR);

  // ── 创建临时目录 ──
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const allVehicles = {};
  const families = {};
  const allAmmo = {};

  // ── 遍历每个模组 ──
  for (const [modKey, modInfo] of Object.entries(MOD_JARS)) {
    const jarPath = findJar(modInfo.pattern);
    if (!jarPath) {
      console.log(`[${modKey}] 未找到 JAR 文件`);
      continue;
    }
    console.log(`[${modKey}] 找到 JAR: ${path.basename(jarPath)}`);

    // 提取车辆数据
    const extractPath = `data/${modInfo.prefix}/sbw/vehicles/`;
    try {
      extractJarData(jarPath, extractPath);
      console.log(`[${modKey}] 提取完成`);
    } catch (e) {
      console.log(`[${modKey}] 提取失败: ${e.message}`);
      continue;
    }

    // 读取并解析
    const vehicleDir = path.join(TEMP_DIR, extractPath);
    const rawVehicles = readJsonDir(vehicleDir);

    console.log(`[${modKey}] 读取到 ${Object.keys(rawVehicles).length} 个载具`);

    for (const [name, data] of Object.entries(rawVehicles)) {
      const entityId = `${modInfo.prefix}:${name}`;

      // 跳过非载具实体（如 assembling_table）
      if (name === 'vehicle_assembling_table') continue;

      const weapons = data.Weapons || {};
      const weaponList = [];

      for (const [wKey, wCfg] of Object.entries(weapons)) {
        // 处理 @ 前缀的 key
        const cleanKey = wKey.startsWith('@') ? wKey.substring(1) : wKey;
        const ammoTypes = resolveAmmoTypes(wCfg.AmmoType);

        // 记录到弹药库
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
          displayKey: wKey, // 保留原始 key（含 @ 前缀）
          ammoTypes: ammoTypes,
          magazine: wCfg.Magazine || 1,
          rpm: wCfg.RPM || null,
          damage: wCfg.Damage || null,
          hasOverride: Array.isArray(wCfg.AmmoType) && wCfg.AmmoType.some(a => typeof a === 'object')
        });
      }

      // 构建全量车辆信息
      const vehicleInfo = {
        id: entityId,
        mod: modKey,
        baseName: name,
        displayType: data.Type || 'Unknown',
        maxHealth: data.MaxHealth || 500,
        maxEnergy: data.MaxEnergy || 10000000,
        hasDecoy: data.HasDecoy === true,
        engineType: data.EngineType || null,
        mass: data.Mass || null,
        upStep: data.UpStep || 0,
        containerType: data.VehicleContainerType || null,
        hudType: data.HudType || null,

        // 部件
        parts: extractParts(data.OBB),

        // 乘员位数量
        seatCount: Array.isArray(data.Seats) ? data.Seats.length : 0,

        // 武器
        weapons: weaponList,

        // 部署 NBT 模板
        nbtTemplate: generateNbtTemplate(entityId, data),
      };

      allVehicles[entityId] = vehicleInfo;
    }
  }

  // ── 生成族系分组（用于 GUI 下拉分组） ──
  // 按照 baseName 去前缀分组 MCSP 的涂装变体
  const variantGroups = {};
  for (const [id, info] of Object.entries(allVehicles)) {
    if (info.mod === 'mcsp') {
      // 提取基础名（去掉 _camo, _sand, _green 等后缀）
      let base = info.baseName;
      base = base.replace(/_(camo|sand|green|pixel|kantemir|tricolor|standart_camo)$/, '');
      if (!variantGroups[base]) variantGroups[base] = [];
      variantGroups[base].push(id);
    }
  }

  // 只有变体数 > 1 才创建 family
  for (const [base, ids] of Object.entries(variantGroups)) {
    if (ids.length > 1) {
      // 找到原始非涂装名
      const baseExact = `${allVehicles[ids[0]].mod}:${base}`;
      const defaultVariant = allVehicles[baseExact] ? baseExact : ids[0];
      families[base] = {
        name: base,
        variants: ids,
        defaultVariant: defaultVariant
      };
    }
  }

  // ── 输出 ──
  const output = {
    _meta: {
      version: '1.0',
      generated: new Date().toISOString(),
      mods: Object.keys(MOD_JARS),
      vehicleCount: Object.keys(allVehicles).length,
      ammoCount: Object.keys(allAmmo).length,
      families: Object.keys(families).length,
    },
    vehicles: allVehicles,
    families: families,
    ammoLibrary: allAmmo,
  };

  const outputPath = path.join(OUTPUT_DIR, 'sbw_vehicle_db.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');
  console.log(`\n✓ 已输出到: ${outputPath}`);
  console.log(`  载具: ${Object.keys(allVehicles).length} 种`);
  console.log(`  弹药: ${Object.keys(allAmmo).length} 种`);
  console.log(`  变体系列: ${Object.keys(families).length} 组`);

  // ── 清理临时文件（无论如何都要执行） ──
  try {
    if (fs.existsSync(TEMP_DIR)) {
      require('child_process').execSync(
        process.platform === 'win32'
          ? `rmdir /s /q "${TEMP_DIR}"`
          : `rm -rf "${TEMP_DIR}"`,
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
