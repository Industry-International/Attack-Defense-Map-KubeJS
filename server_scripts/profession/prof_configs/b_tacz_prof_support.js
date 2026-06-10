// ============================================================
// 支援兵 Support — 重火力压制 大弹容量
// 槽位: scope muzzle stock grip laser extended_mag bayonet ammo_mod
// m249:  ●     ●     ○    ●    ○      ●            ○      ○
// rpk:   ●     ●     ●    ○    ○      ●            ○      ○
// deagle:●     ●     ○    ○    ●      ●            ○      ○
// ============================================================
  // scope：瞄具
  // muzzle：枪口
  // stock：枪托
  // grip：握把
  // laser：激光
  // extended_mag：弹匣
  // bayonet：刺刀
  // ammo_mod：弹药
PROF_CONFIGS.support = {
  guns: {
    primary: {
      m249: {
        gunId: 'tacz:m249', GunFireMode: 'AUTO', GunCurrentAmmoCount: 75,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 525, level: 3 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},{id:'tacz:scope_reflex'}],
          muzzle: [{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_cqr'}],
        },
      },
      rpk: {
        gunId: 'tacz:rpk', GunFireMode: 'AUTO', GunCurrentAmmoCount: 40,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x39', main: 280, level: 3 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'}],
          stock: [{id:'tacz:oem_stock_heavy'},{id:'tacz:oem_stock_light'},{id:'tacz:oem_stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
        },
      },
    },
    secondary: {
      deagle: {
        gunId: 'tacz:deagle', GunFireMode: 'SEMI', GunCurrentAmmoCount: 7,
        ammo: { ammoId: 'tacz:50ae', offhand: 30, level: 2 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'}],
          muzzle: [{id:'tacz:muzzle_brake_trex'}],
          extended_mag: [{id:'tacz:extended_mag_1'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'}],
        },
      },
    },
    tertiary: {},
  },
  weapons: { primary: ['m249','rpk'], secondary: ['deagle'], tertiary: ['snowball'] },

  // ===== 非 TACZ 武器 =====
  nonTaczDisplay: {
    snowball: { item: 'minecraft:snowball', i18n: true },
  },
  nonTaczAmmo: {
    snowball: { item: 'minecraft:snowball', count: 16 },
  },

  // ===== 护甲 =====
  armor: [
    'minecraft:chainmail_boots',
    'minecraft:chainmail_leggings',
    'minecraft:diamond_chestplate',
    'minecraft:chainmail_helmet',
  ],

  // ===== 额外物品 =====
  extras: [
    { item: 'minecraft:cooked_beef', count: 32 },
  ],
}
