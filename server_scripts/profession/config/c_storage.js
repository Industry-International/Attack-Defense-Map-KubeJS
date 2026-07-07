// ============================================================
// 职业玩家数据 — 第三方全局存储（定时备份 + 登录恢复）
// 目录结构:
//   data/kubejs/db/profession_playerdata_db/
//     ├── config.json              ← 开关状态备份
//     └── playerdata/<uuid>.json   ← 玩家数据
// ============================================================
// 启用后:
//   ① config.json 双保险: server.persistentData + 文件各存一份
//   ② 每 5 分钟自动备份所有在线玩家的职业数据
//   ③ 玩家登录时对比外部文件，不一致则恢复
//   ④ 管理员可通过 /kubejsadmin 手动触发备份/恢复
// 不启用: 什么都不做，原逻辑照旧
// ============================================================

const PROF_PLAYERDATA_DIR     = 'kubejs/data/kubejs/db/profession_playerdata_db'
const PROF_PLAYERDATA_SUBDIR  = PROF_PLAYERDATA_DIR + '/playerdata'
const PROF_CONFIG_PATH        = PROF_PLAYERDATA_DIR + '/config.json'

// ========== 开关管理（双保险：server.persistentData + config.json）==========

/**
 * 从 config.json 读取开关状态
 * @returns {boolean|null} 有文件返回 true/false，无文件返回 null
 */
function readStorageConfig() {
  var cfg = JsonIO.read(PROF_CONFIG_PATH)
  if (cfg && cfg.enabled !== undefined) return cfg.enabled === true
  return null
}

/** 写入开关状态到 config.json */
function writeStorageConfig(enabled) {
  JsonIO.write(PROF_CONFIG_PATH, { enabled: !!enabled })
}

/**
 * 同步 config.json → server.persistentData（config.json 为权威源）
 * 如果 config.json 有值而 server.persistentData 不一致，用文件覆盖
 */
function syncStorageConfig(server) {
  var fileEnabled = readStorageConfig()
  if (fileEnabled === null) {
    // config.json 不存在 → 以 server.persistentData 为准，写回文件
    var cur = server.persistentData.profession_useExternal === true
    writeStorageConfig(cur)
    return cur
  }
  // config.json 存在 → 以文件为准，同步到 server
  if (server.persistentData.profession_useExternal !== fileEnabled) {
    server.persistentData.profession_useExternal = fileEnabled
    console.log('[职业存储] config.json 同步开关状态: ' + (fileEnabled ? '启用' : '禁用'))
  }
  return fileEnabled
}

/**
 * 判断是否启用第三方全局存储（优先伺服器，首次会从 config.json 同步）
 * @param {Internal.Server} server
 */
function isExternalStorageEnabled(server) {
  // 首次调用时同步 config.json 到 server.persistentData
  // $synced 标记确保只同步一次
  if (!isExternalStorageEnabled.$synced) {
    isExternalStorageEnabled.$synced = true
    syncStorageConfig(server)
  }
  return server.persistentData.profession_useExternal === true
}

/**
 * 设置第三方全局存储开关（双保险：写两处）
 * @param {Internal.Server} server
 * @param {boolean} enabled
 */
function setExternalStorageEnabled(server, enabled) {
  enabled = !!enabled
  // 写入 server.persistentData
  server.persistentData.profession_useExternal = enabled
  // 写入 config.json
  writeStorageConfig(enabled)
  console.log('[职业存储] 第三方全局存储已' + (enabled ? '§a启用' : '§c禁用'))
  // 启用时自动启动定时器，禁用时停止
  if (enabled) {
    startBackupTimer(server)
  } else {
    stopBackupTimer()
  }
}

// ========== 玩家数据文件读写 ==========

/** 获取外部玩家数据文件路径 */
function getExternalFilePath(uuid) {
  return PROF_PLAYERDATA_SUBDIR + '/' + uuid + '.json'
}

/** 读取外部玩家数据 */
function readExternalData(uuid) {
  return JsonIO.read(getExternalFilePath(uuid)) || null
}

/** 写入外部玩家数据（全量覆写） */
function writeExternalData(uuid, data) {
  JsonIO.write(getExternalFilePath(uuid), data)
}

// ========== 数据收集 ==========

/** 收集玩家职业模块的关键 persistentData */
function collectPlayerData(player) {
  return {
    profession:          player.persistentData.getString('profession') || '',
    mainWeapon:          player.persistentData.getString('mainWeapon') || '',
    offhandWeapon:       player.persistentData.getString('offhandWeapon') || '',
    specialWeapon:       player.persistentData.getString('specialWeapon') || '',
    taczAttachments:     player.persistentData.getString('taczAttachments') || '',
    professionBackpack:  player.persistentData.getString('professionBackpack') || '',
    _savedAt:            new Date().toISOString(),
  }
}

// ========== 备份 ==========

/**
 * 备份单个玩家到外部文件
 * @param {Internal.ServerPlayer} player
 * @returns {boolean} 是否成功
 */
function backupPlayer(player) {
  if (!player) return false
  try {
    var uuid = player.uuid.toString()
    var data = collectPlayerData(player)
    writeExternalData(uuid, data)
    return true
  } catch (e) {
    console.error('[职业存储] 备份失败: ' + player.getName().getString() + ' - ' + e)
    return false
  }
}

/**
 * 备份所有在线玩家
 * @param {Internal.Server} server
 * @returns {number} 成功备份的玩家数
 */
function backupAllOnline(server) {
  var players = server.getPlayers()
  var count = 0
  for (var i = 0; i < players.size(); i++) {
    if (backupPlayer(players.get(i))) count++
  }
  return count
}

// ========== 恢复 ==========

/**
 * 从外部文件恢复单个玩家
 * 对比每个字段，仅当外部有值且与当前不一致时覆盖
 * @param {Internal.ServerPlayer} player
 * @returns {boolean} 是否执行了恢复操作
 */
function restorePlayer(player) {
  if (!player) return false
  var uuid = player.uuid.toString()
  var external = readExternalData(uuid)
  if (!external) return false  // 无外部备份，跳过

  var restored = false

  // 字符串字段（直接属性访问）
  var strFields = ['profession', 'mainWeapon', 'offhandWeapon', 'specialWeapon']
  for (var i = 0; i < strFields.length; i++) {
    var key = strFields[i]
    var extVal = external[key]
    if (extVal) {
      var curVal = player.persistentData[key] || ''
      if (extVal !== curVal) {
        player.persistentData[key] = extVal
        restored = true
      }
    }
  }

  // taczAttachments（getString 访问）
  var attExt = external.taczAttachments
  if (attExt) {
    var attCur = player.persistentData.getString('taczAttachments') || ''
    if (attExt !== attCur) {
      player.persistentData.putString('taczAttachments', attExt)
      restored = true
    }
  }

  // professionBackpack（getString 访问）
  var bpExt = external.professionBackpack
  if (bpExt) {
    var bpCur = player.persistentData.getString('professionBackpack') || ''
    if (bpExt !== bpCur) {
      player.persistentData.putString('professionBackpack', bpExt)
      restored = true
    }
  }

  if (restored) {
    console.log('[职业存储] 已恢复玩家数据: ' + player.getName().getString())
    player.tell(Component.string('§a[职业存储] 已从备份恢复你的职业数据'))
  }

  return restored
}

/**
 * 恢复所有在线玩家
 * @param {Internal.Server} server
 * @returns {number} 成功恢复的玩家数
 */
function restoreAllOnline(server) {
  var players = server.getPlayers()
  var count = 0
  for (var i = 0; i < players.size(); i++) {
    if (restorePlayer(players.get(i))) count++
  }
  return count
}

// ========== 定时备份循环（每 5 分钟 = 6000 ticks）==========

var $backupTimerActive = false

/** 递归调度下一次备份 */
function scheduleNextBackup(server) {
  if (!$backupTimerActive) return
  server.scheduleInTicks(6000, function() {
    if (!$backupTimerActive) return
    if (!isExternalStorageEnabled(server)) {
      // 开关已关闭 → 停止循环
      $backupTimerActive = false
      return
    }
    var count = backupAllOnline(server)
    if (count > 0) {
      console.log('[职业存储] 定时备份完成: ' + count + ' 名玩家')
    }
    scheduleNextBackup(server)
  })
}

/** 启动定时备份 */
function startBackupTimer(server) {
  if ($backupTimerActive) return
  $backupTimerActive = true
  scheduleNextBackup(server)
  console.log('[职业存储] 定时备份已启动（每5分钟）')
}

/** 停止定时备份 */
function stopBackupTimer() {
  $backupTimerActive = false
  console.log('[职业存储] 定时备份已停止')
}

// ========== 状态查询 ==========

/**
 * 获取存储状态统计
 * @param {Internal.Server} server
 * @returns {{ enabled: boolean, onlineCount: number, backedCount: number, fileConfig: boolean|null }}
 */
function getExternalStorageStats(server) {
  var enabled = isExternalStorageEnabled(server)
  var fileEnabled = readStorageConfig()
  var players = server.getPlayers()
  var onlineCount = players.size()
  var backedCount = 0
  for (var i = 0; i < players.size(); i++) {
    var uuid = players.get(i).uuid.toString()
    if (readExternalData(uuid)) backedCount++
  }
  return {
    enabled: enabled,
    fileConfig: fileEnabled,
    onlineCount: onlineCount,
    backedCount: backedCount,
  }
}

// ========== 服务端启动时自动启动 ==========

ServerEvents.loaded(function(event) {
  var server = event.getServer()
  // 同步 config.json → server.persistentData（config.json 优先）
  var actualEnabled = syncStorageConfig(server)
  if (actualEnabled) {
    console.log('[职业存储] 检测到第三方全局存储已启用，自动启动定时备份')
    startBackupTimer(server)
  }
})
