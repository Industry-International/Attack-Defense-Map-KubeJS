// ============================================================
// 载具部署台 - 日志工具
// ============================================================

var $SBW_LOG_PREFIX = '[载具部署台]'

/**
 * 统一日志开关（硬编码配置）
 * true  = 输出所有日志
 * false = 关闭所有 sbwLog/sbwWarn/sbwError 输出
 */
var $DEPLOYER_LOG_ENABLED = false

function sbwLog() {
  if (!$DEPLOYER_LOG_ENABLED) return
  console.log($SBW_LOG_PREFIX + ' ' + Array.prototype.join.call(arguments, ' '))
}
function sbwWarn() {
  if (!$DEPLOYER_LOG_ENABLED) return
  console.warn($SBW_LOG_PREFIX + ' ' + Array.prototype.join.call(arguments, ' '))
}
function sbwError() {
  // 错误日志一般保留，但遵循统一开关
  if (!$DEPLOYER_LOG_ENABLED) return
  console.error($SBW_LOG_PREFIX + ' ' + Array.prototype.join.call(arguments, ' '))
}
