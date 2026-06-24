// ============================================================
// 模块注册表
//
// 所有受 /module 命令管理的模块在此注册。
// 新增模块只需在 MODULE_REGISTRY 中添加一条记录。
//
// 每条记录格式：
//   id:       模块标识符（/module <id> on/off 时使用）
//   name:     显示名称（/module list 时显示）
//   default:  默认状态（true=默认启用, false=默认停用）
// ============================================================

const MODULE_REGISTRY = [
  { id: 'team_revive', name: '队伍复活券', default: false },
  { id: 'team',        name: '队伍选择器', default: false }
]
