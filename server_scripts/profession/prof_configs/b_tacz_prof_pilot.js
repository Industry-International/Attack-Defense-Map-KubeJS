// ============================================================
// 飞行员 Pilot — 手枪配装 轻甲机动
// 槽位: scope muzzle stock grip laser extended_mag bayonet ammo_mod
// p320:    ●     ●     ○    ○    ●      ●            ○      ○
// cz75:    ●     ○     ○    ○    ○      ●            ○      ○
// ============================================================
  // scope：瞄具
  // muzzle：枪口
  // stock：枪托
  // grip：握把
  // laser：激光
  // extended_mag：弹匣
  // bayonet：刺刀
  // ammo_mod：弹药
PROF_CONFIGS.pilot = {
  guns: {
    primary: {
      p320: {
        gunId: 'tacz:p320', GunFireMode: 'SEMI', GunCurrentAmmoCount: 12,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:45acp', main: 70, level: 2 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'}],
        },
      },
      cz75: {
        gunId: 'tacz:cz75', GunFireMode: 'SEMI', GunCurrentAmmoCount: 12,
        ammo: { ammoId: 'tacz:9mm', main: 100, level: 1 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
        },
      },
    },
    secondary: {},
    tertiary: {},
  },
  weapons: { primary: ['p320','cz75'], secondary: ['snowball'], tertiary: ['snowball'] },

  // ===== 非 TACZ 武器 =====
  nonTaczDisplay: {
    snowball: { item: 'minecraft:snowball', i18n: true },
  },
  nonTaczAmmo: {
    snowball: { item: 'minecraft:snowball', count: 16 },
  },

  // ===== 护甲 =====
  armor: [
    'minecraft:leather_boots',
    'minecraft:leather_leggings',
    'minecraft:leather_chestplate',
    'minecraft:leather_helmet',
  ],

  // ===== 额外物品 =====
  extras: [
    { item: 'minecraft:cooked_beef', count: 16 },
    { item: 'kubejs:spawn_selector', count: 1 },
  ],
}
