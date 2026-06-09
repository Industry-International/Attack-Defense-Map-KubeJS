// ============================================================
// 突击兵（Assault）武器配置
// TACZ 枪械配置 + GUI 可用武器列表
// ============================================================

// ========== TACZ 枪械配置 ==========
var PROF_ASSAULT_GUNS = {
  primary: {
    ak47: {
      gunId: 'tacz:ak47',
      GunFireMode: 'AUTO',
      GunCurrentAmmoCount: 30,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:762x39', main: 210, level: 2 },
      attachments: {
        scope: [
          { id: 'lavender:scope_rifles_x4' },
          { id: 'lavender:scope_rifles_x2' },
          { id: 'tacz:scope_reflex' },
          { id: 'tacz:scope_uh1' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
          { id: 'tacz:muzzle_brake_cthulhu' },
          { id: 'tacz:muzzle_brake_cyclone_d2' },
          { id: 'tacz:muzzle_brake_pioneer' },
          { id: 'tacz:muzzle_compensator_trident' },
          { id: 'tacz:muzzle_brake_trex' },
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
        laser: [
          { id: 'tacz:laser_compact' },
          { id: 'tacz:laser_nightstick' },
          { id: 'tacz:laser_lopro' },
        ],
      },
    },
    scar_l: {
      gunId: 'tacz:scar_l',
      GunFireMode: 'AUTO',
      GunCurrentAmmoCount: 30,
      HasBulletInBarrel: $ByteTag.valueOf(1),
      ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
      attachments: {
        scope: [
          { id: 'tacz:scope_reflex' },
          { id: 'tacz:scope_uh1' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
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
        laser: [
          { id: 'tacz:laser_compact' },
          { id: 'tacz:laser_nightstick' },
          { id: 'tacz:laser_lopro' },
        ],
      },
    },
  },
  secondary: {
    mars: {
      gunId: 'lavender:mars',
      GunFireMode: 'SEMI',
      GunCurrentAmmoCount: 7,
      ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 2 },
      attachments: {
        scope: [
          { id: 'tacz:scope_reflex' },
          { id: 'tacz:scope_uh1' },
        ],
        muzzle: [
          { id: 'tacz:muzzle_silencer_knight_qd' },
          { id: 'tacz:muzzle_silencer_mirage' },
        ],
      },
    },
  },
}

// ========== GUI 可用武器列表（仅 ID，由 merge 文件自动构建展示项）==========
// TACZ 武器的 tag 由 merge 文件从 PROF_ASSAULT_GUNS 自动补全
// 非 TACZ 武器从 VANILLA_WEAPON_DISPLAY 自动查找展示物品
var PROF_ASSAULT_WEAPONS = {
  primary: [
    'ak47',
    'scar_l',
    // 以下为非 TACZ 过渡武器，后续替换为枪械
    'sword',
    'bow',
    'crossbow',
    'trident',
  ],
  secondary: [
    'mars',
    // 以下为非 TACZ 过渡武器，后续替换为枪械
    'shield',
    'totem',
  ],
}
