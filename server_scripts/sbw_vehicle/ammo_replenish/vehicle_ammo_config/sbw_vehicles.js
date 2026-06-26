// SBW 卓越前线载具弹药映射
// 格式：VEHICLE_AMMO_MAP['实体注册名'] = ['弹药短名', ...]
// 弹药短名对应 a_config.js 中 AMMO_ID_MAP 的 key
//
// 数据来源：反编译模组 JAR 中 data/superbwarfare/sbw/vehicles/*.json
// 核对时间：2026-06-26

// ─── 主战坦克 ───
// 武器：Cannon(large_shell_ap/he/gs) + MachineGun(@RifleAmmo) + PassengerMachineGun(@HeavyAmmo)
VEHICLE_AMMO_MAP['superbwarfare:t_90a']       = ['large_shell_ap','large_shell_he','large_shell_gs','rifle_ammo','heavy_ammo']
VEHICLE_AMMO_MAP['superbwarfare:yx_100']      = ['large_shell_ap','large_shell_he','large_shell_gs','rifle_ammo','heavy_ammo']
VEHICLE_AMMO_MAP['superbwarfare:ztz_99a']     = ['large_shell_ap','large_shell_he','large_shell_gs','rifle_ammo','heavy_ammo']
VEHICLE_AMMO_MAP['superbwarfare:m1_a2']       = ['large_shell_ap','large_shell_he','large_shell_gs','rifle_ammo','heavy_ammo']
// KV-16（武直）：MachineGun(@HeavyAmmo) + Bomb(mortar_shell)
VEHICLE_AMMO_MAP['superbwarfare:kv_16']       = ['heavy_ammo','mortar_shell']
// prism_tank：FE 能量武器，无需弹药
VEHICLE_AMMO_MAP['superbwarfare:prism_tank']  = []

// ─── 步兵战车 / 装甲车 ───
// BMP-2：Cannon(small_shell_ap/he/gs) + MainMachineGun(@RifleAmmo) + Missile(medium_anti_ground_missile) + 乘员机枪×6(@RifleAmmo)
VEHICLE_AMMO_MAP['superbwarfare:bmp_2']       = ['small_shell_ap','small_shell_he','small_shell_gs','medium_anti_ground_missile','rifle_ammo']
// Bradley：Cannon(small_shell_ap/he/gs) + MainMachineGun(@RifleAmmo) + Missile(medium_anti_ground_missile) + 乘员机枪×2(@RifleAmmo)
VEHICLE_AMMO_MAP['superbwarfare:bradley']     = ['small_shell_ap','small_shell_he','small_shell_gs','medium_anti_ground_missile','rifle_ammo']
// LAV-25：Cannon(small_shell_ap/he/gs) + MachineGun(@RifleAmmo)
VEHICLE_AMMO_MAP['superbwarfare:lav_25']      = ['small_shell_ap','small_shell_he','small_shell_gs','rifle_ammo']
// LAV-150：Cannon(small_shell_ap/he/gs) + MachineGun(@RifleAmmo)
VEHICLE_AMMO_MAP['superbwarfare:lav_150']     = ['small_shell_ap','small_shell_he','small_shell_gs','rifle_ammo']
// LAV-AD（防空车）：Cannon(small_shell_aa) + Missile(medium_anti_air_missile)
VEHICLE_AMMO_MAP['superbwarfare:lav_ad']      = ['small_shell_aa','medium_anti_air_missile']

// ─── 火炮/自行火炮 ───
// 武器：Cannon(large_shell_ap/he/gs)
VEHICLE_AMMO_MAP['superbwarfare:artillery']   = ['large_shell_ap','large_shell_he','large_shell_gs']
VEHICLE_AMMO_MAP['superbwarfare:plz_05']      = ['large_shell_ap','large_shell_he','large_shell_gs']
VEHICLE_AMMO_MAP['superbwarfare:mk_42']       = ['large_shell_ap','large_shell_he','large_shell_gs']
VEHICLE_AMMO_MAP['superbwarfare:mle_1934']    = ['large_shell_ap','large_shell_he','large_shell_gs']
VEHICLE_AMMO_MAP['superbwarfare:bl_132']      = ['large_shell_ap','large_shell_he','large_shell_gs']

// ─── 火箭炮/迫击炮 ───
// 63式自行火箭炮：无 AmmoType（内置火箭弹，无需补充弹药）
VEHICLE_AMMO_MAP['superbwarfare:type_63']     = []
// 迫击炮：无 AmmoType（内置弹药）
VEHICLE_AMMO_MAP['superbwarfare:mortar']      = []

// ─── 直升机 ───
// AH-6：Cannon(small_shell_he) + Rocket(small_rocket)
VEHICLE_AMMO_MAP['superbwarfare:ah_6']        = ['small_shell_he','small_rocket']
// MI-28：Cannon(small_shell_ap/he) + Rocket(small_rocket)
VEHICLE_AMMO_MAP['superbwarfare:mi_28']       = ['small_shell_ap','small_shell_he','small_rocket']

// ─── 固定翼飞机 ───
// A-10A：Cannon(small_shell_ap) + Rocket(small_rocket) + Bomb(medium_aerial_bomb) + Missile(large_anti_ground_missile)
VEHICLE_AMMO_MAP['superbwarfare:a_10a']       = ['small_shell_ap','small_rocket','medium_aerial_bomb','large_anti_ground_missile']

// ─── 无人/固定防御 ───
// Annihilator：FE 能量武器
VEHICLE_AMMO_MAP['superbwarfare:annihilator']    = []
// Laser Tower：FE 能量武器
VEHICLE_AMMO_MAP['superbwarfare:laser_tower']    = []
// Waveforce Tower：FE 能量武器
VEHICLE_AMMO_MAP['superbwarfare:waveforce_tower'] = []
// 无人机：无武器
VEHICLE_AMMO_MAP['superbwarfare:drone']          = []

// ─── 水上载具 ───
// Speedboat：MachineGun(@HeavyAmmo)
VEHICLE_AMMO_MAP['superbwarfare:speedboat']       = ['heavy_ammo']
// Tiny Speedboat：无武器
VEHICLE_AMMO_MAP['superbwarfare:tiny_speedboat']  = []

// ─── 民用/特种 ───
// Wheel Chair：外观件，无武器
VEHICLE_AMMO_MAP['superbwarfare:wheel_chair']    = []
// そだよPICKUP（皮卡）：无武器（仅载客）
VEHICLE_AMMO_MAP['superbwarfare:sodayo_pick_up']        = []
// そだよPICKUP 机枪型：MachineGun(@HeavyAmmo)
VEHICLE_AMMO_MAP['superbwarfare:sodayo_pick_up_hmg']    = ['heavy_ammo']
// そだよPICKUP 火箭型：内置火箭弹，无 AmmoType
VEHICLE_AMMO_MAP['superbwarfare:sodayo_pick_up_rocket'] = []
// そだよPICKUP TOW型：Missile(medium_anti_ground_missile)
VEHICLE_AMMO_MAP['superbwarfare:sodayo_pick_up_tow']    = ['medium_anti_ground_missile']

// ─── 补给/拖曳 ───
// Truck：无武器
VEHICLE_AMMO_MAP['superbwarfare:truck'] = []
// TOW 导弹架：medium_anti_ground_missile
VEHICLE_AMMO_MAP['superbwarfare:tow']   = ['medium_anti_ground_missile']

// ─── 其他 ───
// HPJ-11（反直升机炮）：Cannon(small_shell_ap)
VEHICLE_AMMO_MAP['superbwarfare:hpj_11'] = ['small_shell_ap']
// JU-87（斯图卡）：MachineGun(@RifleAmmo) + Bomb(medium_aerial_bomb + small_aerial_bomb)
VEHICLE_AMMO_MAP['superbwarfare:ju_87'] = ['rifle_ammo','medium_aerial_bomb','small_aerial_bomb']
