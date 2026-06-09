// ============================================================
// 支援兵（Support）武器配置
// 主打：重火力压制、大弹容量
// ============================================================

// ========== TACZ 枪械配置 ==========
var PROF_SUPPORT_GUNS = {
  primary: {
    // M249 — 5.56mm 轻机枪，全自动，75发弹链
    m249: {
      gunId: 'tacz:m249',
      GunFireMode: 'AUTO',
      GunCurrentAmmoCount: 75,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:556x45', main: 525, level: 3 },
      attachments: {
        scope: [
          { id: 'tacz:sight_t1' },
          { id: 'tacz:sight_t2' },
          { id: 'tacz:sight_552' },
          { id: 'tacz:scope_reflex' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_brake_cthulhu' },
          { id: 'tacz:muzzle_brake_cyclone_d2' },
          { id: 'tacz:muzzle_brake_pioneer' },
          { id: 'tacz:muzzle_compensator_trident' },
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
      },
    },
    // RPK — 7.62mm 轻机枪，全自动，40发
    rpk: {
      gunId: 'tacz:rpk',
      GunFireMode: 'AUTO',
      GunCurrentAmmoCount: 40,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:762x39', main: 280, level: 3 },
      attachments: {
        scope: [
          { id: 'tacz:sight_t1' },
          { id: 'tacz:scope_reflex' },
          { id: 'tacz:scope_uh1' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_brake_cthulhu' },
          { id: 'tacz:muzzle_brake_cyclone_d2' },
          { id: 'tacz:muzzle_brake_pioneer' },
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
      },
    },
  },
  secondary: {
    // Desert Eagle — .50AE 半自动手枪，7发
    deagle: {
      gunId: 'tacz:deagle',
      GunFireMode: 'SEMI',
      GunCurrentAmmoCount: 7,
      ammo: { ammoId: 'tacz:50ae', offhand: 30, level: 2 },
      attachments: {
        scope: [
          { id: 'tacz:sight_rmr_dot' },
          { id: 'tacz:sight_acro_pistol' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_brake_trex' },
        ],
        extended_mag: [
          { id: 'tacz:extended_mag_1' },
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
var PROF_SUPPORT_WEAPONS = {
  primary: [
    'm249',
    'rpk',
  ],
  secondary: [
    'deagle',
  ],
}
