// ============================================================
// 队伍复活券系统 - 核心逻辑
//
// 功能：
//   1. 复活券模型：队伍拥有复活券池，死亡消耗 1 张
//   2. 券归零时调用数据包函数淘汰队伍（只触发一次）
//   3. 可通过命令 /team_revive add <数量> 为进攻方增加复活券
//   4. 可通过命令 /team_revive reset 重置所有队伍
//   5. 公开全局函数 addTeamTickets() 供其他 KubeJS 脚本调用
//   6. 通过 /game start /game stop 命令控制是否启用
//   7. 自动读取原版 /team 命令创建的所有队伍
// ============================================================

if (typeof TEAM_REVIVE_CONFIG === 'undefined') {
  console.error('[队伍复活券] 错误：未找到配置！请确保 config.js 已正确加载。')
}

const CFG = TEAM_REVIVE_CONFIG
const PREFIX = '[队伍复活券]'

// ========== Brigadier 参数类型（专用静态方法，参考 profequip_cmd.js $EntityArgument 模式）==========
var $StringArgument = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')
var $IntegerArgument = Java.loadClass('com.mojang.brigadier.arguments.IntegerArgumentType')

// ========== 日志工具 ==========

function log() { console.log(PREFIX, Array.prototype.join.call(arguments, ' ')) }
function warn() { console.warn(PREFIX, Array.prototype.join.call(arguments, ' ')) }
function error() { console.error(PREFIX, Array.prototype.join.call(arguments, ' ')) }

// ========== 配置工具 ==========

/**
 * 获取指定队伍的复活券配置
 * @param {string} teamName - 队伍名
 * @returns {object|null} { max, initial } 或 null（未配置的队伍）
 */
function getTeamConfig(teamName) {
  return CFG.teams[teamName.toLowerCase()] || null
}

// ========== 持久化数据工具 ==========

/**
 * 读取复活券数据（JSON 序列化，参考 profession_backpack.js）
 */
function getTicketsStore(server) {
  let raw = server.persistentData.getString(CFG.persistKey)
  if (!raw || raw === '') return {}
  try { return JSON.parse(raw) } catch(e) { return {} }
}

/**
 * 保存复活券数据（JSON 序列化）
 */
function saveTicketsStore(server, data) {
  server.persistentData.putString(CFG.persistKey, JSON.stringify(data))
}

/**
 * 获取淘汰标记的存储引用
 */
function getEliminatedStore(server) {
  let root = server.persistentData
  if (!root[CFG.eliminatedKey]) root[CFG.eliminatedKey] = {}
  return root[CFG.eliminatedKey]
}

/**
 * 获取指定队伍的当前复活券数
 */
function getTeamTickets(server, teamName) {
  let key = teamName.toLowerCase()
  let store = getTicketsStore(server)
  // 如果还没有数据，用初始值
  if (store[key] === undefined) {
    let cfg = getTeamConfig(key)
    if (cfg) {
      store[key] = cfg.initial
      saveTicketsStore(server, store)
    }
  }
  return store[key] !== undefined ? Number(store[key]) : null
}

/**
 * 检查队伍是否已被淘汰
 */
function isTeamEliminated(server, teamName) {
  return getEliminatedStore(server)[teamName.toLowerCase()] === true
}

/**
 * 标记队伍为已淘汰
 */
function markEliminated(server, teamName) {
  getEliminatedStore(server)[teamName.toLowerCase()] = true
}

// ========== 核心操作 ==========

/**
 * 为指定队伍增加复活券（公开函数，其他脚本可直接调用）
 *
 * @param {object} server - 服务器实例（从事件或命令上下文中获取）
 * @param {string} teamName - 队伍名
 * @param {number} amount - 增加的数量
 * @returns {number} 增加后的实际复活券数
 *
 * 示例（在事件中调用）：
 *   addTeamTickets(event.server, 'attack', 50)
 */
function addTeamTickets(server, teamName, amount) {
  let key = teamName.toLowerCase()
  let cfg = getTeamConfig(key)
  if (!cfg) {
    warn('队伍 [' + teamName + '] 未配置复活券系统，忽略')
    return -1
  }

  let store = getTicketsStore(server)
  let current = store[key] !== undefined ? Number(store[key]) : cfg.initial
  let before = current
  current = Math.min(current + amount, cfg.max)
  current = Math.max(0, current)
  store[key] = current
  saveTicketsStore(server, store)

  let actualAdded = current - before
  log('队伍 [' + teamName + '] 复活券: ' + before + ' → ' + current + ' (尝试增加 ' + amount + '，实际增加 ' + actualAdded + ')')
  return current
}

/**
 * 消耗 1 张复活券。券归零时触发淘汰。
 * @returns {boolean} true=还有剩余券, false=已归零淘汰
 */
function consumeTicket(server, teamName) {
  let key = teamName.toLowerCase()
  let store = getTicketsStore(server)

  let current = store[key] !== undefined ? Number(store[key]) : getTeamConfig(key).initial
  if (current <= 0) {
    // 已无券可用，如果还没标记淘汰则立即触发淘汰
    if (!isTeamEliminated(server, key)) {
      eliminateTeam(server, teamName)
    }
    return false
  }

  current = current - 1
  store[key] = current
  saveTicketsStore(server, store)

  if (current <= 0) {
    eliminateTeam(server, teamName)
    return false
  }
  return true
}

/**
 * 重置所有队伍的复活券到初始值，清除淘汰标记
 */
function resetAll(server) {
  // 重置复活券
  let store = getTicketsStore(server)
  for (let teamKey in CFG.teams) {
    if (CFG.teams.hasOwnProperty(teamKey)) {
      store[teamKey] = CFG.teams[teamKey].initial
    }
  }
  saveTicketsStore(server, store)
  // 清除淘汰标记
  server.persistentData[CFG.eliminatedKey] = {}
  log('所有队伍的复活券已重置')
}

// ========== 队伍淘汰处理 ==========

/**
 * 执行队伍淘汰逻辑：调用数据包函数 + 全局广播
 */
function eliminateTeam(server, teamName) {
  let key = teamName.toLowerCase()
  if (isTeamEliminated(server, key)) {
    return // 已触发过淘汰，防止重复
  }
  markEliminated(server, key)

  // 执行固定淘汰函数（进攻方专用）
  server.runCommandSilent('function ' + CFG.functionPath)
  log('队伍 [' + teamName + '] 已被淘汰 → 调用函数: ' + CFG.functionPath)

  // 全局广播淘汰消息
  let msg = Text.translate('msg.kubejs.team_revive.eliminated', teamName)
  let allPlayers = server.players
  let iter = allPlayers.iterator()
  while (iter.hasNext()) {
    iter.next().tell(msg)
  }
}

// ========== 玩家死亡事件 ==========

EntityEvents.death(event => {
  let entity = event.entity
  let server = event.server

  // 仅处理玩家
  if (!entity.isPlayer()) return

  let player = entity
  let playerName = player.getName().getString()

  // 检查模块是否启用
  if (!isModuleEnabled(server, 'team_revive')) {
    log('游戏未开启，跳过 [' + playerName + '] 的死亡统计')
    return
  }

  // 检查玩家是否属于某个队伍
  let team = player.getTeam()
  if (!team) {
    log('玩家 [' + playerName + '] 不属于任何队伍，不统计')
    return
  }

  let teamName = team.getName()

  // 检查该队伍是否配置了复活券系统
  let cfg = getTeamConfig(teamName)
  if (!cfg) {
    log('队伍 [' + teamName + '] 未配置复活券系统，跳过')
    return
  }

  let key = teamName.toLowerCase()

  // 如果队伍已被淘汰，不再消耗
  if (isTeamEliminated(server, key)) {
    log('队伍 [' + teamName + '] 已被淘汰，[' + playerName + '] 的死亡不再消耗复活券')
    return
  }

  // 消耗 1 张复活券
  let remaining = consumeTicket(server, teamName)

  // 如果 consumeTicket 返回 false，表示券已归零且已触发淘汰，直接返回
  if (!remaining) {
    log('玩家 [' + playerName + '] 死亡，队伍 [' + teamName + '] 的复活券已归零淘汰')
    return
  }

  // 获取更新后的券数
  let currentTickets = getTeamTickets(server, teamName)
  log('玩家 [' + playerName + '] 死亡 | 队伍 [' + teamName + '] 剩余复活券: ' + currentTickets)

  // 向该队伍成员广播当前复活券数（可选）
  if (CFG.broadcastDeathCount) {
    let msg = Text.translate(
      'msg.kubejs.team_revive.tickets_left',
      teamName,
      String(currentTickets),
      String(cfg.max)
    )
    let allPlayers = server.players
    let iter = allPlayers.iterator()
    while (iter.hasNext()) {
      let p = iter.next()
      let pTeam = p.getTeam()
      if (pTeam && pTeam.getName() === teamName) {
        p.tell(msg)
      }
    }
  }
})

// ========== 管理员命令（Brigadier 模式）==========

ServerEvents.commandRegistry(event => {
  let cmd = event.commands
  let args = event.arguments

  /**
   * 执行 /team_revive add <数量> - 给进攻方增加复活券
   */
  function executeAdd(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let amount = $IntegerArgument.getInteger(ctx, 'amount')

    // 自动取配置中第一个队伍（进攻方专用）
    let teamName = null
    for (let t in CFG.teams) {
      if (CFG.teams.hasOwnProperty(t)) { teamName = t; break }
    }
    if (!teamName) {
      source.sendFailure(Component.translatable('msg.kubejs.team_revive.no_config', ''))
      return 0
    }

    let cfg = getTeamConfig(teamName)
    let store = getTicketsStore(server)
    let key = teamName.toLowerCase()
    let current = store[key] !== undefined ? Number(store[key]) : cfg.initial
    let before = current
    current = Math.min(current + amount, cfg.max)
    current = Math.max(0, current)
    store[key] = current
    saveTicketsStore(server, store)
    let actualAdded = current - before

    source.sendSuccess(Component.translatable(
      'msg.kubejs.team_revive.add_done',
      teamName,
      String(current),
      String(cfg.max),
      String(actualAdded)
    ), true)
    return 1
  }

  /**
   * 执行 /team_revive remove <数量> - 给进攻方削减复活券（测试用）
   */
  function executeRemove(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let amount = $IntegerArgument.getInteger(ctx, 'amount')

    // 自动取配置中第一个队伍（进攻方专用）
    let teamName = null
    for (let t in CFG.teams) {
      if (CFG.teams.hasOwnProperty(t)) { teamName = t; break }
    }
    if (!teamName) {
      source.sendFailure(Component.translatable('msg.kubejs.team_revive.no_config', ''))
      return 0
    }

    let cfg = getTeamConfig(teamName)
    let store = getTicketsStore(server)
    let key = teamName.toLowerCase()
    let current = store[key] !== undefined ? Number(store[key]) : cfg.initial
    let before = current
    current = Math.max(0, current - amount)  // 削减，下限为 0
    store[key] = current
    saveTicketsStore(server, store)
    let actualRemoved = before - current

    // 如果券归零了且队伍尚未淘汰，触发淘汰
    if (current <= 0 && !isTeamEliminated(server, key)) {
      eliminateTeam(server, teamName)
    }

    source.sendSuccess(Component.translatable(
      'msg.kubejs.team_revive.remove_done',
      teamName,
      String(current),
      String(cfg.max),
      String(actualRemoved)
    ), true)
    return 1
  }

  /**
   * 执行 /team_revive reset - 重置所有队伍复活券
   */
  function executeReset(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    resetAll(server)
    source.sendSuccess(Component.translatable('msg.kubejs.team_revive.reset_done'), true)
    return 1
  }

  /**
   * 执行 /team_revive status [队伍] - 查看复活券状态
   */
  function executeStatusAll(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let store = getTicketsStore(server)
    let msg = Component.translatable('msg.kubejs.team_revive.status_header')
    let hasData = false

    for (let teamKey in CFG.teams) {
      if (!CFG.teams.hasOwnProperty(teamKey)) continue
      hasData = true
      let cfg = CFG.teams[teamKey]
      let current = store[teamKey] !== undefined ? Number(store[teamKey]) : cfg.initial
      let eliminated = isTeamEliminated(server, teamKey)
      let status = eliminated ? '§c✗ 已淘汰' : '§a✓ 存活'
      msg = msg.append('\n').append(Component.translatable(
        'msg.kubejs.team_revive.status_line',
        teamKey,
        String(current),
        String(cfg.max),
        status
      ))
    }

    if (!hasData) {
      msg = msg.append('\n').append(Component.translatable('msg.kubejs.team_revive.status_empty'))
    }
    source.sendSuccess(msg, false)
    return 1
  }

  function executeStatusSingle(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let teamName = $StringArgument.getString(ctx, 'team')
    let cfg = getTeamConfig(teamName)
    if (!cfg) {
      source.sendFailure(Component.translatable('msg.kubejs.team_revive.no_config', teamName))
      return 0
    }
    let store = getTicketsStore(server)
    let key = teamName.toLowerCase()
    let current = store[key] !== undefined ? Number(store[key]) : cfg.initial
    let eliminated = isTeamEliminated(server, key)
    source.sendSuccess(Component.translatable(
      'msg.kubejs.team_revive.status_single',
      teamName,
      String(current),
      String(cfg.max),
      eliminated ? '§c已淘汰' : '§a存活'
    ), false)
    return 1
  }

  // ===== 注册 /team_revive 命令 =====
  event.register(
    cmd.literal('team_revive')
      .requires(function(s) { return s.hasPermission(2) })

      // ---- add <amount> ----
      .then(
        cmd.literal('add')
          .then(
            cmd.argument('amount', args.INTEGER.create(event))
              .executes(executeAdd)
          )
      )

      // ---- remove <amount> ----
      .then(
        cmd.literal('remove')
          .then(
            cmd.argument('amount', args.INTEGER.create(event))
              .executes(executeRemove)
          )
      )

      // ---- reset ----
      .then(
        cmd.literal('reset')
          .executes(executeReset)
      )

      // ---- status [<team>] ----
      .then(
        cmd.literal('status')
          .executes(executeStatusAll)
          .then(
            cmd.argument('team', args.STRING.create(event))
              .executes(executeStatusSingle)
          )
      )

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        let source = ctx.getSource()
        source.sendFailure(Component.translatable('msg.kubejs.team_revive.usage'))
        return 0
      })
  )
})
