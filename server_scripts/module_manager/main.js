// ============================================================
// 模块管理器 - 核心逻辑
//
// 依赖：a_registry.js（MODULE_REGISTRY）
//
// 通过 /module <模块id> <on|off> 命令控制各模块功能启用/停用。
// 数据包只需执行对应命令即可启用对应模块功能。
//
// 命令：
//   /module <id> on     — 启用指定模块
//   /module <id> off    — 停用指定模块
//   /module list        — 列出所有模块状态
//
// 全局 API（供其他脚本调用）：
//   isModuleEnabled(server, moduleId)  — 判断模块是否启用
//   setModuleEnabled(server, moduleId, enabled) — 设置模块状态
// ============================================================

if (typeof MODULE_REGISTRY === 'undefined') {
  console.error('[模块管理器] 错误：未找到 MODULE_REGISTRY！请确保 a_registry.js 已正确加载。')
}

var $StringArgument = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')

const MODULE_FLAG_PREFIX = 'module_'

// ========== 查找辅助 ==========

/** 按 ID 查找模块注册记录 */
function findModule(id) {
  for (var i = 0; i < MODULE_REGISTRY.length; i++) {
    if (MODULE_REGISTRY[i].id === id) return MODULE_REGISTRY[i]
  }
  return null
}

// ========== 核心 API ==========

/**
 * 判断指定模块是否已启用
 * @param {object} server - 服务器实例
 * @param {string} moduleId - 模块ID（如 "team_revive"）
 * @returns {boolean}
 */
function isModuleEnabled(server, moduleId) {
  try {
    return server.persistentData.getBoolean(MODULE_FLAG_PREFIX + moduleId) === true
  } catch(e) {
    return false
  }
}

/**
 * 设置模块启用状态
 * @param {object} server
 * @param {string} moduleId
 * @param {boolean} enabled
 */
function setModuleEnabled(server, moduleId, enabled) {
  server.persistentData.putBoolean(MODULE_FLAG_PREFIX + moduleId, enabled)
  console.log('[模块管理器] ' + moduleId + ' 已' + (enabled ? '启用' : '停用'))
}

// ========== 命令注册 ==========

ServerEvents.commandRegistry(event => {
  let cmd = event.commands
  let args = event.arguments

  function executeOn(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let moduleId = $StringArgument.getString(ctx, 'module')
    var mod = findModule(moduleId)
    if (!mod) {
      source.sendFailure(Component.literal('§c未知模块: ' + moduleId))
      return 0
    }
    setModuleEnabled(server, moduleId, true)
    source.sendSuccess(Component.literal('§a✔ 模块 [' + mod.name + '] 已启用'), true)
    return 1
  }

  function executeOff(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let moduleId = $StringArgument.getString(ctx, 'module')
    var mod = findModule(moduleId)
    if (!mod) {
      source.sendFailure(Component.literal('§c未知模块: ' + moduleId))
      return 0
    }
    setModuleEnabled(server, moduleId, false)
    source.sendSuccess(Component.literal('§c✖ 模块 [' + mod.name + '] 已停用'), true)
    return 1
  }

  function executeList(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    var text = '§6=== 模块状态 ==='
    for (var i = 0; i < MODULE_REGISTRY.length; i++) {
      var mod = MODULE_REGISTRY[i]
      var enabled = isModuleEnabled(server, mod.id)
      text += '\n' + (enabled ? '§a✔' : '§c✖') + ' §7' + mod.name + ' §8(' + mod.id + ')'
    }
    source.sendSuccess(Component.literal(text), false)
    return 1
  }

  event.register(
    cmd.literal('module')
      .requires(function(s) { return s.hasPermission(2) })

      // ---- module <id> on ----
      .then(
        cmd.argument('module', args.STRING.create(event))
          .then(
            cmd.literal('on')
              .executes(executeOn)
          )
          // ---- module <id> off ----
          .then(
            cmd.literal('off')
              .executes(executeOff)
          )
      )

      // ---- module list ----
      .then(
        cmd.literal('list')
          .executes(executeList)
      )

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        let source = ctx.getSource()
        source.sendFailure(Component.literal('§c用法: /module <模块id> <on|off> 或 /module list'))
        return 0
      })
  )
})
