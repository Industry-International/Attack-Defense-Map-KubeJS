// ============================================================
// 侦察兵 Scout — 精准射击 中远距离 高机动
// 槽位: scope muzzle stock grip laser extended_mag bayonet ammo_mod
// m4a1:         ●     ●     ●    ●    ●      ●            ○      ○
// sks_tactical: ●     ●     ●    ●    ○      ●            ○      ○
// p320:         ●     ●     ○    ○    ●      ●            ○      ○
// lee_enfield:  ●     ●     ○    ●    ○      ○            ○      ○
// kar98k:       ●     ●     ○    ○    ○      ○            ○      ○
// ============================================================
  // scope：瞄具
  // muzzle：枪口
  // stock：枪托
  // grip：握把
  // laser：激光
  // extended_mag：弹匣
  // bayonet：刺刀
  // ammo_mod：弹药
PROF_CONFIGS.scout = {
  guns: {
    primary: {
      m4a1: {
        gunId: 'tacz:m4a1', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},{id:'tacz:scope_acog_ta31'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_silencer_phantom_s1'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'}],
          stock: [{id:'tacz:oem_stock_heavy'},{id:'tacz:oem_stock_light'},{id:'tacz:oem_stock_tactical'},{id:'tacz:stock_carbon_bone_c5'},{id:'tacz:stock_tactical_ar'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_magpul_afg_2'},{id:'tacz:grip_cqr'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_nightstick'},{id:'tacz:laser_lopro'},{id:'tacz:laser_peq15'}],
        },
      },
      sks_tactical: {
        gunId: 'tacz:sks_tactical', GunFireMode: 'SEMI', GunCurrentAmmoCount: 20,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x39', main: 140, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_lpvo_1_6'},{id:'tacz:scope_acog_ta31'},{id:'tacz:scope_elcan_4x'},{id:'tacz:scope_mk5hd'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_pioneer'}],
          stock: [{id:'tacz:oem_stock_heavy'},{id:'tacz:oem_stock_light'},{id:'tacz:oem_stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_cqr'}],
        },
      },
      // 李恩菲尔德步枪 (Lee-Enfield)
      lee_enfield: {
        gunId: 'lavender:smle_iii', GunFireMode: 'SEMI', GunCurrentAmmoCount: 10,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'lavender:british0x303', main: 140, level: 2 },
        attachments: {
          // === 瞄具（所有瞄具）===
          scope: [
            {id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},
            {id:'tacz:scope_acog_ta31'},{id:'tacz:scope_lpvo_1_6'},{id:'tacz:scope_elcan_4x'},{id:'tacz:scope_mk5hd'},
            {id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'},
            {id:'tacz:sight_coyote'},{id:'tacz:sight_deltapoint_pistol'},{id:'tacz:sight_deltapoint_rifle'},
            {id:'tacz:sight_exp3'},{id:'tacz:sight_fastfire_rifle'},{id:'tacz:sight_okp7'},{id:'tacz:sight_p90'},
            {id:'tacz:sight_pk06_pistol'},{id:'tacz:sight_pk06_rifle'},{id:'tacz:sight_sro_dot'},{id:'tacz:sight_srs_02'},
            {id:'tacz:scope_1873_6x'},{id:'tacz:scope_contender'},{id:'tacz:scope_hamr'},{id:'tacz:scope_qmk152'},
            {id:'tacz:scope_retro_2x'},{id:'tacz:scope_standard_8x'},{id:'tacz:scope_vudu'},{id:'tacz:scope_aug_default'},
            {id:'lavender:scope_lmgs_x2'},{id:'lavender:scope_rifles_x3'},{id:'lavender:scope_rifles_x3_2'},
            {id:'lavender:scope_rifles_x4'},{id:'lavender:scope_rifles_x4_2'},
            {id:'lavender:scope_rifles_x6_2'},{id:'lavender:scope_rifles_x8_2'},
            {id:'lavender:semi_rifles_scope_x2'},
            {id:'bf1:marksman_scope'},{id:'bf1:scope_nvk_nxt'},{id:'bf1:sight_fusion_holo'},
            {id:'bf1:sight_nydar'},{id:'bf1:sight_okp8'},{id:'bf1:sight_reflector'},{id:'bf1:sniper_scope'},
          ],
          // === 枪口（步枪兼容）===
          muzzle: [
            {id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_silencer_phantom_s1'},
            {id:'tacz:muzzle_silencer_ptilopsis'},{id:'tacz:muzzle_silencer_sg'},{id:'tacz:muzzle_silencer_ursus'},{id:'tacz:muzzle_silencer_vulture'},
            {id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_mastiff_sg'},{id:'tacz:muzzle_brake_pioneer'},
            {id:'tacz:muzzle_brake_timeless50'},{id:'tacz:muzzle_brake_trex'},
            {id:'tacz:muzzle_compensator_trident'},{id:'tacz:muzzle_choke_sg'},
            {id:'tacz:bayonet_6h3'},{id:'tacz:bayonet_m9'},{id:'tacz:deagle_golden_long_barrel'},
            {id:'lavender:carcano_bayonet'},{id:'lavender:g98_bayonet'},{id:'lavender:lebel_bayonet'},
            {id:'lavender:mannlicher_bayonet'},{id:'lavender:martini_bayonet'},{id:'lavender:mosin_bayonet'},
            {id:'lavender:mp18_bayonet'},{id:'lavender:smle_bayonet'},
            {id:'bf1:oem_muzzle_choke'},{id:'bf1:bayonet_general'},
          ],
          // === 握把（步枪兼容）===
          grip: [
            {id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_magpul_afg_2'},{id:'tacz:grip_cqr'},
            {id:'tacz:grip_cobra'},{id:'tacz:grip_osovets_black'},{id:'tacz:grip_rk1_b25u'},{id:'tacz:grip_rk6'},
            {id:'tacz:grip_se_5'},{id:'tacz:grip_td'},{id:'tacz:grip_vertical_ranger'},{id:'tacz:grip_vertical_talon'},
            {id:'bf1:grip_light_bipods'},{id:'bf1:grip_trench_bipods'},
            {id:'lavender:sniper_bracket'},
          ],
        },
      },
      // 毛瑟98k (Kar98k)
      man_m95: {
        gunId: 'bf1:man_m95', GunFireMode: 'SEMI', GunCurrentAmmoCount: 5,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'lavender:lebel8x50', main: 100, level: 2 },
        attachments: {
          // === 瞄具（所有瞄具）===
          scope: [
            {id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},
            {id:'tacz:scope_acog_ta31'},{id:'tacz:scope_lpvo_1_6'},{id:'tacz:scope_elcan_4x'},{id:'tacz:scope_mk5hd'},
            {id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'},
            {id:'tacz:sight_coyote'},{id:'tacz:sight_deltapoint_pistol'},{id:'tacz:sight_deltapoint_rifle'},
            {id:'tacz:sight_exp3'},{id:'tacz:sight_fastfire_rifle'},{id:'tacz:sight_okp7'},{id:'tacz:sight_p90'},
            {id:'tacz:sight_pk06_pistol'},{id:'tacz:sight_pk06_rifle'},{id:'tacz:sight_sro_dot'},{id:'tacz:sight_srs_02'},
            {id:'tacz:scope_1873_6x'},{id:'tacz:scope_contender'},{id:'tacz:scope_hamr'},{id:'tacz:scope_qmk152'},
            {id:'tacz:scope_retro_2x'},{id:'tacz:scope_standard_8x'},{id:'tacz:scope_vudu'},{id:'tacz:scope_aug_default'},
            {id:'lavender:scope_lmgs_x2'},{id:'lavender:scope_rifles_x3'},{id:'lavender:scope_rifles_x3_2'},
            {id:'lavender:scope_rifles_x4'},{id:'lavender:scope_rifles_x4_2'},
            {id:'lavender:scope_rifles_x6_2'},{id:'lavender:scope_rifles_x8_2'},
            {id:'lavender:semi_rifles_scope_x2'},
            {id:'bf1:marksman_scope'},{id:'bf1:scope_nvk_nxt'},{id:'bf1:sight_fusion_holo'},
            {id:'bf1:sight_nydar'},{id:'bf1:sight_okp8'},{id:'bf1:sight_reflector'},{id:'bf1:sniper_scope'},
          ],
          // === 枪口（步枪兼容）===
          muzzle: [
            {id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_silencer_phantom_s1'},
            {id:'tacz:muzzle_silencer_ptilopsis'},{id:'tacz:muzzle_silencer_sg'},{id:'tacz:muzzle_silencer_ursus'},{id:'tacz:muzzle_silencer_vulture'},
            {id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_mastiff_sg'},{id:'tacz:muzzle_brake_pioneer'},
            {id:'tacz:muzzle_brake_timeless50'},{id:'tacz:muzzle_brake_trex'},
            {id:'tacz:muzzle_compensator_trident'},{id:'tacz:muzzle_choke_sg'},
            {id:'tacz:bayonet_6h3'},{id:'tacz:bayonet_m9'},{id:'tacz:deagle_golden_long_barrel'},
            {id:'lavender:carcano_bayonet'},{id:'lavender:g98_bayonet'},{id:'lavender:lebel_bayonet'},
            {id:'lavender:mannlicher_bayonet'},{id:'lavender:martini_bayonet'},{id:'lavender:mosin_bayonet'},
            {id:'lavender:mp18_bayonet'},{id:'lavender:smle_bayonet'},
            {id:'bf1:oem_muzzle_choke'},{id:'bf1:bayonet_general'},
          ],
        },
      },
      //毛瑟c98半自动步枪
      selbstladerc98: {
        gunId: 'lavender:selbstladerc98', GunFireMode: 'SEMI', GunCurrentAmmoCount: 8,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'lavender:mauser7.92x57', main: 180, level: 2 },
        attachments: {
          scope: [{id:'lavender:scope_rifles_x3'}],
          grip: [{id:'lavender:sniper_bracket'}],
        },
      },
      // 莫辛-纳甘1891步枪
      lavendermosin1891: {
        gunId: 'lavender:mosin1891', GunFireMode: 'SEMI', GunCurrentAmmoCount: 5,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'lavender:russia7.62x54r', main: 180, level: 2 },
        attachments: {
          scope: [{id:'lavender:scope_rifles_x4_2'}],
        },
      },
    },
    secondary: {
      p320: {
        gunId: 'tacz:p320', GunFireMode: 'SEMI', GunCurrentAmmoCount: 12,
        ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 1 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'}],
        },
      },
    },
    tertiary: {},
  },
  weapons: { primary: ['m4a1','sks_tactical','lee_enfield','man_m95',`selbstladerc98`,`lavendermosin1891`], secondary: ['p320'], tertiary: ['snowball'] },

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
  ],
}
