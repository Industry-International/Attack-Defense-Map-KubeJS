// ============================================================
// 突击兵 Assault — CQB 高机动 全自动压制
// 槽位: scope muzzle stock grip laser extended_mag bayonet ammo_mod
// ak47:    ●     ●     ●    ○    ●      ●            ○      ○
// scar_l:  ●     ●     ●    ○    ●      ●            ○      ○
// mars:    ●     ●     ○    ○    ○      ○            ○      ○
// ============================================================
  // scope：瞄具
  // muzzle：枪口
  // stock：枪托
  // grip：握把
  // laser：激光
  // extended_mag：弹匣
  // bayonet：刺刀
  // ammo_mod：弹药
PROF_CONFIGS.assault = {
  guns: {
    primary: {
      ak47: {
        gunId: 'tacz:ak47', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x39', main: 210, level: 2 },
        attachments: {
          scope: [{id:'lavender:scope_rifles_x4'},{id:'lavender:scope_rifles_x2'},{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'},{id:'tacz:muzzle_brake_trex'}],
          // AK47 允许 #tacz:oem_stock（原厂枪托）和 #tacz:stock（通用枪托）
          stock: [{id:'tacz:oem_stock_heavy'},{id:'tacz:oem_stock_light'},{id:'tacz:oem_stock_tactical'},{id:'tacz:stock_carbon_bone_c5'},{id:'tacz:stock_tactical_ar'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_nightstick'},{id:'tacz:laser_lopro'}],
        },
      },
      scar_l: {
        gunId: 'tacz:scar_l', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
          stock: [{id:'tacz:stock_carbon_bone_c5'},{id:'tacz:stock_militech_b5'},{id:'tacz:stock_tactical_ar'},{id:'tacz:stock_sba3'},{id:'tacz:stock_hk_slim_line'},{id:'tacz:stock_moe'},{id:'tacz:stock_m4ss'},{id:'tacz:stock_ripstock'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_nightstick'},{id:'tacz:laser_lopro'}],
        },
      },
    },
    secondary: {
      mars: {
        gunId: 'lavender:mars', GunFireMode: 'SEMI', GunCurrentAmmoCount: 7,
        ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
        },
      },
    },
    tertiary: {},
  },
  weapons: { primary: ['ak47','scar_l'], secondary: ['mars'], tertiary: ['snowball'] },

  // ===== 非 TACZ 武器 =====
  nonTaczDisplay: {
    snowball: { item: 'minecraft:snowball', i18n: true },
  },
  nonTaczAmmo: {
    snowball: { item: 'minecraft:snowball', count: 16 },
  },

  // ===== 护甲 =====
  armor: [
    'minecraft:iron_boots',
    'minecraft:iron_leggings',
    'minecraft:iron_chestplate',
    'minecraft:iron_helmet',
  ],

  // ===== 额外物品 =====
  extras: [
    { item: 'minecraft:cooked_beef', count: 32 },
  ],
}
