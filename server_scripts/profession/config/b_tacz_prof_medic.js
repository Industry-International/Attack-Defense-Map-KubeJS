// ============================================================
// 医疗兵（Medic）武器配置
// 主打：中近距离火力支援、紧凑可靠
// ============================================================

// ========== TACZ 枪械配置 ==========
var PROF_MEDIC_GUNS = {
  primary: {
    // HK MP5A5 — 9mm 冲锋枪，全自动/连发，30发
    hk_mp5a5: {
      gunId: 'tacz:hk_mp5a5',
      GunFireMode: 'AUTO',
      GunCurrentAmmoCount: 30,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:9mm', main: 210, level: 1 },
      attachments: {
        scope: [
          { id: 'tacz:sight_t1' },
          { id: 'tacz:sight_t2' },
          { id: 'tacz:sight_552' },
          { id: 'tacz:scope_reflex' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
          { id: 'tacz:muzzle_brake_pioneer' },
        ],
        stock: [
          { id: 'tacz:stock_heavy' },
          { id: 'tacz:stock_light' },
          { id: 'tacz:stock_tactical' },
          { id: 'tacz:stock_hk_slim_line' },
        ],
        extended_mag: [
          { id: 'tacz:extended_mag_1' },
          { id: 'tacz:extended_mag_2' },
          { id: 'tacz:extended_mag_3' },
        ],
        grip: [
          { id: 'tacz:grip_vertical_military' },
          { id: 'tacz:grip_rk0' },
          { id: 'tacz:grip_cqr' },
        ],
        laser: [
          { id: 'tacz:laser_compact' },
          { id: 'tacz:laser_lopro' },
          { id: 'tacz:laser_nightstick' },
        ],
      },
    },
    // AUG — 5.56mm 无托突击步枪，全自动/半自动，30发
    aug: {
      gunId: 'tacz:aug',
      GunFireMode: 'AUTO',
      GunCurrentAmmoCount: 30,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
      attachments: {
        scope: [
          { id: 'tacz:scope_aug_default' },
          { id: 'tacz:scope_reflex' },
          { id: 'tacz:scope_uh1' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
          { id: 'tacz:muzzle_brake_cthulhu' },
          { id: 'tacz:muzzle_compensator_trident' },
        ],
        stock: [
          { id: 'tacz:stock_heavy' },
          { id: 'tacz:stock_light' },
          { id: 'tacz:stock_tactical' },
        ],
        extended_mag: [
          { id: 'tacz:extended_mag_1' },
          { id: 'tacz:extended_mag_2' },
          { id: 'tacz:extended_mag_3' },
        ],
        grip: [
          { id: 'tacz:grip_vertical_military' },
          { id: 'tacz:grip_rk0' },
          { id: 'tacz:grip_magpul_afg_2' },
        ],
        laser: [
          { id: 'tacz:laser_compact' },
          { id: 'tacz:laser_lopro' },
        ],
      },
    },
  },
  secondary: {
    // Glock 17 — 9mm 半自动手枪，17发
    glock_17: {
      gunId: 'tacz:glock_17',
      GunFireMode: 'SEMI',
      GunCurrentAmmoCount: 17,
      ammo: { ammoId: 'tacz:9mm', offhand: 50, level: 1 },
      attachments: {
        scope: [
          { id: 'tacz:sight_rmr_dot' },
          { id: 'tacz:sight_acro_pistol' },
          { id: 'tacz:sight_fastfire_pistol' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
        ],
        extended_mag: [
          { id: 'tacz:extended_mag_1' },
          { id: 'tacz:extended_mag_2' },
        ],
        laser: [
          { id: 'tacz:laser_compact' },
          { id: 'tacz:laser_lopro' },
          { id: 'tacz:laser_nightstick' },
        ],
      },
    },
  },
}

// ========== GUI 可用武器列表（仅 ID）==========
var PROF_MEDIC_WEAPONS = {
  primary: [
    'hk_mp5a5',
    'aug',
  ],
  secondary: [
    'glock_17',
  ],
}
