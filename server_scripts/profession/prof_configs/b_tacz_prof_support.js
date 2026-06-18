// ============================================================
// 支援兵 Support — 重火力压制 大弹容量
// 槽位: scope muzzle stock grip laser extended_mag bayonet ammo_mod
// m249:  ●     ●     ○    ●    ○      ●            ○      ○
// rpk:   ●     ●     ●    ○    ○      ●            ○      ○
// deagle:●     ●     ○    ○    ●      ●            ○      ○
// mg42:  ●     ○     ○    ●    ○      ●            ○      ○
// chauchat:●   ●     ○    ●    ○      ●            ○      ○
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
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'}],
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
          scope: [{id:'tacz:sight_t1'}],
          muzzle: [{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'}],
          stock: [{id:'tacz:oem_stock_heavy'},{id:'tacz:oem_stock_light'},{id:'tacz:oem_stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
        },
      },
      bf1lewis: {
        gunId: 'bf1:lewis', GunFireMode: 'AUTO', GunCurrentAmmoCount: 50,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x54', main: 350, level: 3 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},{id:'lavender:scope_lmgs_x2'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_cqr'}],
        },
      },
      // MG42 通用机枪
      mg42: {
        gunId: 'bf1:mg42', GunFireMode: 'AUTO', GunCurrentAmmoCount: 75,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x54', main: 525, level: 3 },
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
          // === 握把（机枪兼容）===
          grip: [
            {id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_magpul_afg_2'},{id:'tacz:grip_cqr'},
            {id:'tacz:grip_cobra'},{id:'tacz:grip_osovets_black'},{id:'tacz:grip_rk1_b25u'},{id:'tacz:grip_rk6'},
            {id:'tacz:grip_se_5'},{id:'tacz:grip_td'},{id:'tacz:grip_vertical_ranger'},{id:'tacz:grip_vertical_talon'},
            {id:'bf1:grip_light_bipods'},{id:'bf1:grip_trench_bipods'},
            {id:'lavender:sniper_bracket'},
          ],
          // === 扩容弹匣（全兼容）===
          extended_mag: [
            {id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'},
            {id:'tacz:light_extended_mag_1'},{id:'tacz:light_extended_mag_2'},{id:'tacz:light_extended_mag_3'},
            {id:'tacz:shotgun_extended_mag_1'},{id:'tacz:shotgun_extended_mag_2'},{id:'tacz:shotgun_extended_mag_3'},
            {id:'tacz:sniper_extended_mag_1'},{id:'tacz:sniper_extended_mag_2'},{id:'tacz:sniper_extended_mag_3'},
          ],
        },
      },
      // 绍沙轻机枪 (Chauchat)
      chauchat: {
        gunId: 'lavender:chauchat', GunFireMode: 'AUTO', GunCurrentAmmoCount: 20,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'lavender:lebel8x50', main: 200, level: 2 },
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
          // === 握把（机枪兼容）===
          grip: [
            {id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_magpul_afg_2'},{id:'tacz:grip_cqr'},
            {id:'tacz:grip_cobra'},{id:'tacz:grip_osovets_black'},{id:'tacz:grip_rk1_b25u'},{id:'tacz:grip_rk6'},
            {id:'tacz:grip_se_5'},{id:'tacz:grip_td'},{id:'tacz:grip_vertical_ranger'},{id:'tacz:grip_vertical_talon'},
            {id:'bf1:grip_light_bipods'},{id:'bf1:grip_trench_bipods'},
            {id:'lavender:sniper_bracket'},
          ],
          // === 枪口（机枪兼容）===
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
          // === 扩容弹匣（全兼容）===
          extended_mag: [
            {id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'},
            {id:'tacz:light_extended_mag_1'},{id:'tacz:light_extended_mag_2'},{id:'tacz:light_extended_mag_3'},
            {id:'tacz:shotgun_extended_mag_1'},{id:'tacz:shotgun_extended_mag_2'},{id:'tacz:shotgun_extended_mag_3'},
            {id:'tacz:sniper_extended_mag_1'},{id:'tacz:sniper_extended_mag_2'},{id:'tacz:sniper_extended_mag_3'},
          ],
        },
      },
      lavendermg0815: {
        gunId: 'lavender:mg0815', GunFireMode: 'AUTO', GunCurrentAmmoCount: 200,
        ammo: { ammoId: 'lavender:mauser7.92x57', main: 600, level: 2 },
        attachments: {
          scope: [{id:'lavender:scope_lmgs_x2'}],
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
  weapons: { primary: ['m249','rpk','bf1lewis','mg42','chauchat','lavendermg0815'], secondary: ['deagle'], tertiary: ['snowball'] },

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
