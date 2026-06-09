// ============================================================
// 侦察兵（Scout）武器配置
// TACZ 枪械配置 + GUI 可用武器列表
// ============================================================
// TODO: 在此添加侦察兵专属的武器配置

// ========== TACZ 枪械配置 ==========
var PROF_SCOUT_GUNS = {
  primary: {
    // 示例：侦察兵可用的主武器
    // scar_l: {
    //   gunId: 'tacz:scar_l',
    //   GunFireMode: 'AUTO',
    //   GunCurrentAmmoCount: 30,
    //   ... 请参考突击兵的配置格式填充完整
    // },
  },
  secondary: {
    // 示例：侦察兵可用的副武器
    // mars: { ... },
  },
}

// ========== GUI 可用武器列表（仅 ID）==========
var PROF_SCOUT_WEAPONS = {
  primary: [
    // 示例: 'scar_l',
    // 非 TACZ 过渡武器（后续替换）:
    // 'sword', 'bow',
  ],
  secondary: [
    // 示例: 'mars',
    // 非 TACZ 过渡武器:
    // 'shield',
  ],
}
