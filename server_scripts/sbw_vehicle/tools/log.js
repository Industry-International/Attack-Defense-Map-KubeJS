// ============================================================
// 载具部署台 - 日志工具
// ============================================================

var $SBW_LOG_PREFIX = '[载具部署台]'
function sbwLog() { console.log($SBW_LOG_PREFIX + ' ' + Array.prototype.join.call(arguments, ' ')) }
function sbwWarn() { console.warn($SBW_LOG_PREFIX + ' ' + Array.prototype.join.call(arguments, ' ')) }
function sbwError() { console.error($SBW_LOG_PREFIX + ' ' + Array.prototype.join.call(arguments, ' ')) }
