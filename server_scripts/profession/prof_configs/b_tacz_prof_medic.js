// ============================================================
// 医疗兵 Medic — 中近距离火力支援 紧凑可靠
// 槽位: scope muzzle stock grip laser extended_mag bayonet ammo_mod
// hk_mp5a5: ●     ●     ●    ●    ●      ●            ○      ○
// aug:      ●     ●     ●    ●    ●      ●            ○      ○
// glock_17: ●     ●     ○    ○    ●      ●            ○      ○
// ============================================================
  // scope：瞄具
  // muzzle：枪口
  // stock：枪托
  // grip：握把
  // laser：激光
  // extended_mag：弹匣
  // bayonet：刺刀
  // ammo_mod：弹药
PROF_CONFIGS.medic = {
  guns: {
    primary: {
      hk_mp5a5: {
        gunId: 'tacz:hk_mp5a5', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:9mm', main: 210, level: 1 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_brake_pioneer'}],
          stock: [{id:'tacz:stock_hk_slim_line'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
        },
      },
      aug: {
        gunId: 'tacz:aug', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_aug_default'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'}],
        },
      },
      bf1liu: {
        gunId: 'bf1:liu', GunFireMode: 'SEMI', GunCurrentAmmoCount: 23,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x54', main: 210, level: 2 },
        attachments: {
          muzzle: [{id:'bf1:bayonet_general'}],
        },
      },
      lavenderhowell: {
        gunId: 'lavender:howell', GunFireMode: 'SEMI', GunCurrentAmmoCount: 21,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'lavender:british0x303', main: 180, level: 2 },
        attachments: {
          scope: [{id:'lavender:scope_rifles_x3_2'}],
        },
      }
    },
    secondary: {
      glock_17: {
        gunId: 'tacz:glock_17', GunFireMode: 'SEMI', GunCurrentAmmoCount: 17,
        ammo: { ammoId: 'tacz:9mm', offhand: 50, level: 1 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'},{id:'tacz:laser_nightstick'}],
        },
      },
    },
    tertiary: {},
  },
  weapons: { primary: ['hk_mp5a5','aug','bf1liu','lavenderhowell'], secondary: ['glock_17'], tertiary: ['snowball'] },

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
    'minecraft:chainmail_chestplate',
    'minecraft:golden_helmet',
  ],

  // ===== 额外物品 =====
  extras: [
    { item: 'minecraft:cooked_beef', count: 16 },
    { item: 'minecraft:splash_potion', count: 6, tag: { 'minecraft:potion_contents': { potion: 'minecraft:healing' } } },
    { item: 'minecraft:potion',        count: 3, tag: { 'minecraft:potion_contents': { potion: 'minecraft:regeneration' } } },
  ],
}
