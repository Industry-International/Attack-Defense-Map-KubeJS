// MCSP 附属模组载具弹药映射
// 格式：VEHICLE_AMMO_MAP['实体注册名'] = ['弹药短名', ...]
// 弹药短名对应 a_config.js 中 AMMO_ID_MAP 的 key
//
// 数据来源：反编译模组 JAR 中 data/mcsp/sbw/vehicles/*.json
// 核对时间：2026-06-26

// ─── 苏系主战坦克（T-80 / T-90 / ZTZ-99A）───
// 武器：Cannon(mcsp:125mm_ap/he) + MachineGun(mcsp:bullet762) + PassengerMachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:t80u_green']      = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t80u_camo']       = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t80u_pixel']      = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t80bv_green']     = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t80bv_camo']      = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t80bv_pixel']     = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t90a_green']      = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t90a_tricolor']   = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:ztz99a_sand']     = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']

// Kantemir（坎捷米尔）变体：Cannon 额外支持 mcsp:tow_2 炮射导弹
VEHICLE_AMMO_MAP['mcsp:t80u_kantemir']    = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:t80bv_kantemir']   = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_tow_2','mcsp_bullet762']

// ─── 美系主战坦克（M1A2）───
// 武器：Cannon(mcsp:120mm_bulletmortar) + MachineGun(mcsp:bullet762) + PassengerMachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:m1a2']          = ['mcsp_120mm_bulletmortar','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m1a2_sand']     = ['mcsp_120mm_bulletmortar','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m1a2_sep']      = ['mcsp_120mm_bulletmortar','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m1a2_sep_sand'] = ['mcsp_120mm_bulletmortar','mcsp_bullet762']

// ─── 步兵战车 ───
// M3A3 Bradley：Cannon(mcsp:25mm_ap) + MachineGun(mcsp:bullet762) + Missile(mcsp:tow_2)
VEHICLE_AMMO_MAP['mcsp:m3a3_bradley']               = ['mcsp_25mm_ap','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m3a3_bradley_sand']          = ['mcsp_25mm_ap','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m3a3_bradley_busk_ii']       = ['mcsp_25mm_ap','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m3a3_bradley_busk_ii_sand']  = ['mcsp_25mm_ap','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m3a3_bradley_busk_iii']      = ['mcsp_25mm_ap','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:m3a3_bradley_busk_iii_sand'] = ['mcsp_25mm_ap','mcsp_tow_2','mcsp_bullet762']

// BMD-4：Cannon(mcsp:30mm_ap) + Missile(mcsp:tow_2) + MachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:bmd_4']      = ['mcsp_30mm_ap','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:bmd_4_camo'] = ['mcsp_30mm_ap','mcsp_tow_2','mcsp_bullet762']

// ZBD-04A：Cannon(mcsp:30mm_ap) + Missile(mcsp:tow_2) + MachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:zbd04a_green'] = ['mcsp_30mm_ap','mcsp_tow_2','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:zbd04a_sand']  = ['mcsp_30mm_ap','mcsp_tow_2','mcsp_bullet762']

// Sprut-SD（章鱼自行反坦克炮）：Cannon(mcsp:125mm_ap/he) + MachineGun(mcsp:bullet762) + PassengerMachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:sprut']      = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:sprut_camo'] = ['mcsp_125mm_ap','mcsp_125mm_he','mcsp_bullet762']

// ─── 火箭炮 ───
// TOS-1A：mlrs_shells
VEHICLE_AMMO_MAP['mcsp:tos_1a_green']    = ['mcsp_mlrs_shells']
VEHICLE_AMMO_MAP['mcsp:tos_1a_tricolor'] = ['mcsp_mlrs_shells']

// ─── 轮式装甲车 ───
// Typhoon-K（台风）：Cannon(mcsp:30mm_ap) + MachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:typhoon_30']          = ['mcsp_30mm_ap','mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:typhoon_tricolor_30'] = ['mcsp_30mm_ap','mcsp_bullet762']

// ─── 运输卡车 ───
// Ural（乌拉尔）：MachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:ural_green']    = ['mcsp_bullet762']
VEHICLE_AMMO_MAP['mcsp:ural_tricolor'] = ['mcsp_bullet762']

// ─── 悍马 ───
// 标准型/货运型/沙地型：MachineGun(mcsp:bullet762)
VEHICLE_AMMO_MAP['mcsp:humvee_standart_camo'] = ['mcsp_bullet762','mcsp_smallarmscartridge']
VEHICLE_AMMO_MAP['mcsp:humvee_carc']          = ['mcsp_bullet762','mcsp_smallarmscartridge']
VEHICLE_AMMO_MAP['mcsp:humvee_sand']          = ['mcsp_bullet762','mcsp_smallarmscartridge']
// MK19 榴弹型：Grenade(mcsp:40mm_explosive) + Smoke(mcsp:40mm_smoke)
VEHICLE_AMMO_MAP['mcsp:humvee_mk19']          = ['mcsp_40mm_explosive','mcsp_40mm_smoke']
