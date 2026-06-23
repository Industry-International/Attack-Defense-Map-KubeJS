// ============================================================
// SBW 载具 - 模块入口 / 整合层
//
// 子模块：
//   config.js     — 配置数据（勿动）
//   tools.js      — 工具函数库（日志、持久化、实体查找、部署、状态查询等）
//   command.js    — 命令注册（start/stop/deploy/redeploy/reset/clear/status）
//   replenish.js  — 自动补员系统
//
// main.js 职能：
//   1. 声明全局常量（VEHICLE_CFG, SBW_PREFIX）
//   2. 校验配置加载
//   3. 注册 EntityEvents 等事件监听
//   4. 提供模块结构总览
//
// 所有工具函数统一放在 tools.js 中，子模块通过全局函数调用。
// ============================================================

// ========== 配置校验 ==========

if (typeof SBW_VEHICLE_CONFIG === 'undefined') {
  console.error('[SBW载具] 错误：未找到配置！请确保 config.js 已正确加载。')
}

// ========== 全局常量 ==========

/** SBW_VEHICLE_CONFIG 的快捷引用 */
const VEHICLE_CFG = SBW_VEHICLE_CONFIG

/** 日志前缀 */
const SBW_PREFIX = '[SBW载具]'

// ========== 事件监听 ==========

/**
 * 载具实体死亡事件
 * 仅记录日志，实际补员处理由 replenish.js 的定时循环驱动。
 */
EntityEvents.death(event => {
  let entity = event.entity
  let server = event.server
  if (!isSystemActive(server)) return
  let vid = extractVehicleIdFromEntity(entity)
  if (vid) sbwLog('载具实体死亡 [' + vid + ']（补员由定时循环检测处理）')
})
