// ============================================================
// 侦察兵（Scout）武器配置
// 主打：精准射击、中远距离、高机动
// ============================================================

// ========== TACZ 枪械配置 ==========
var PROF_SCOUT_GUNS = {
  primary: {
    // M4A1 — 5.56mm 通用突击步枪，全自动/半自动，30发
    m4a1: {
      gunId: 'tacz:m4a1',
      GunFireMode: 'AUTO',
      GunCurrentAmmoCount: 30,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
      attachments: {
        scope: [
          { id: 'tacz:sight_t1' },
          { id: 'tacz:sight_t2' },
          { id: 'tacz:sight_552' },
          { id: 'tacz:scope_acog_ta31' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
          { id: 'tacz:muzzle_silencer_phantom_s1' },
          { id: 'tacz:muzzle_brake_pioneer' },
          { id: 'tacz:muzzle_compensator_trident' },
        ],
        stock: [
          { id: 'tacz:stock_heavy' },
          { id: 'tacz:stock_light' },
          { id: 'tacz:stock_tactical' },
          { id: 'tacz:stock_m4ss' },
          { id: 'tacz:stock_moe' },
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
          { id: 'tacz:grip_cqr' },
        ],
        laser: [
          { id: 'tacz:laser_compact' },
          { id: 'tacz:laser_nightstick' },
          { id: 'tacz:laser_lopro' },
          { id: 'tacz:laser_peq15' },
        ],
      },
    },
    // SKS Tactical — 7.62mm 精确射手步枪，半自动，20发
    sks_tactical: {
      gunId: 'tacz:sks_tactical',
      GunFireMode: 'SEMI',
      GunCurrentAmmoCount: 20,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:762x39', main: 140, level: 2 },
      attachments: {
        scope: [
          { id: 'tacz:scope_lpvo_1_6' },
          { id: 'tacz:scope_acog_ta31' },
          { id: 'tacz:scope_elcan_4x' },
          { id: 'tacz:scope_mk5hd' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
          { id: 'tacz:muzzle_brake_cthulhu' },
          { id: 'tacz:muzzle_brake_pioneer' },
        ],
        stock: [
          { id: 'tacz:stock_heavy' },
          { id: 'tacz:stock_light' },
          { id: 'tacz:stock_tactical' },
        ],
        extended_mag: [
          { id: 'tacz:extended_mag_1' },
          { id: 'tacz:extended_mag_2' },
        ],
        grip: [
          { id: 'tacz:grip_vertical_military' },
          { id: 'tacz:grip_rk0' },
          { id: 'tacz:grip_cqr' },
        ],
      },
    },
  },
  secondary: {
    // P320 — .45ACP 半自动手枪，12发
    p320: {
      gunId: 'tacz:p320',
      GunFireMode: 'SEMI',
      GunCurrentAmmoCount: 12,
      ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 1 },
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
        ],
      },
    },
  },
}

// ========== GUI 可用武器列表（仅 ID）==========
var PROF_SCOUT_WEAPONS = {
  primary: [
    'm4a1',
    'sks_tactical',
  ],
  secondary: [
    'p320',
  ],
}
