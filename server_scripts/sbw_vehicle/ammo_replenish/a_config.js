// ============================================================
// SBW 载具 - 弹药补充模块 配置文件
//
// 依赖：父模块的 config.js（VEHICLE_CFG / SBW_VEHICLE_CONFIG）
//
// 功能：
//   在弹药补给箱（kubejs:ammo_crate）周围扫描 SBW 载具，
//   自动补充其弹药库存（基于父配置中 deployNBT 的标准）。
//
// 补充逻辑：
//   1. 扫描范围内带有 sbw_vehicle_ 标签的实体
//   2. 通过标签提取 vehicleId，查找父配置中的 deployNBT
//   3. 对比载具当前 Inventory 和 WeaponState 与 deployNBT 的差异
//   4. 若缺少弹药 → 直接将 Inventory.Items 和 WeaponState 设定为 deployNBT 的值
//
// 弹药类型参考（superbwarfare）：
//   rifle_ammo       步枪弹（机枪用）
//   heavy_ammo       重弹
//   large_shell_ap   大口径AP弹（穿甲弹）
//   large_shell_he   大口径HE弹（高爆弹）
//   small_shell_ap   小口径AP弹
//   small_shell_he   小口径HE弹
//   missile          导弹
//   rocket           火箭弹
// ============================================================

const AMMO_REPLENISH_CONFIG = {
  // ======== 扫描参数 ========

  /** 弹药补给箱的扫描半径（方块），以此方块为中心检测范围内的载具 */
  scanRange: 12,

  /** 
   * 检测间隔（tick）
   * 每 N tick 执行一次自动扫描，0 或负数 = 仅手动触发（右键方块）
   * 建议值：0（仅手动）或 100（5秒自动一次）
   */
  autoScanInterval: 0,

  // ======== 补充参数 ========

  /**
   * 需要补充弹药的阈值百分比（0~100）
   * 当载具当前弹药数量低于 deployNBT 标准值的此百分比时触发补充。
   * 100 = 任何弹药不满就补
   * 0  = 永远不补（手动模式）
   * 50 = 弹药低于一半时才补
   */
  replenishThreshold: 100,

  /**
   * 武器弹药阈值（整数）
   * 武器预装弹（GunData.Ammo）低于此值时触发补充。
   * 0 = 只补充完全空仓的武器
   */
  weaponAmmoThreshold: 1,

  // ======== 白名单/黑名单 ========

  /**
   * 目标载具ID白名单（空数组 = 所有载具均可被补充）
   * 例如：['attack_tank_1', 'defense_tank_1']
   * 若配置此项，则只有列表中的载具会被扫描和补充
   */
  targetVehicleIds: ['attack_tank_1', 'defense_tank_1'],

  /**
   * 排除的载具ID黑名单
   * 即使在扫描范围内也跳过这些载具
   */
  excludeVehicleIds: [],

  // ======== 消息提示 ========

  /** 补充弹药时是否向附近玩家发送消息 */
  notifyPlayers: true,

  /** 消息发送范围（方块），仅 notifyPlayers=true 时生效 */
  notifyRange: 12
}
