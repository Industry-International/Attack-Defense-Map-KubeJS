// ============================================================
// SBW 卓越前线 - 载具自动部署系统 配置文件
//
// 功能：
//   1. 自动部署：由数据包调用 /sbw_vehicle deploy 触发
//   2. 标签管理：每辆载具携带唯一标签，存活期间不重复生成
//   3. 自动重生：载具被摧毁后，按配置延迟自动重新生成
//   4. 手动命令：支持管理员手动部署/重置
//
// ─── 模板化部署说明 ───
// 每辆载具通过 deployNBT 字段定义其部署时的初始 NBT 数据。
// deployNBT 中写的字段会合并到召唤命令的 NBT 中。
// 如果不写 deployNBT（或设为 null），则该载具以白板状态生成。
// ============================================================

const SBW_VEHICLE_CONFIG = {
  // ======== 持久化数据键 ========

  /** KubeJS persistentData 中使用的根键名 */
  persistKey: 'sbw_vehicle',
  /** 标签前缀（用于实体标签追踪） */
  tagPrefix: 'sbw_vehicle_',

  // ======== 系统参数 ========

  /** 补员检测频率（单位：次/秒）
   *  每秒钟执行此次数全量检测：
   *    遍历所有补员ID → 检查存活数 → 管理状态机
   *  值越大精度越高但性能消耗略大。
   *  建议值：1（1次/秒，每20tick）或 2（2次/秒，每10tick）
   *  当前值 1 表示每秒检测1次，精度足够且性能友好 */
  checkInterval: 20,

  // ==========================================================
  //  deployNBT 字段参考手册
  //  ─────────────────────────────────────────────────────────
  //  在每辆载具的 deployNBT 中写以下字段来自定义部署状态。
  //  数值后的标记表示 NBT 类型：int=整数, float=小数, byte=0/1,
  //  short=短整数, string=文本, list=列表, compound=复合标签
  // ==========================================================

  // ─── 核心属性 ───
  //
  //   Energy: 10000000               // [int]      载具能量/电力。影响武器可用性，0=没电
  //   Health: 500.0                  // [float]    载具总生命值。默认500，归零则摧毁
  //   Invulnerable: 0               // [byte/0|1] 无敌模式。1=无法被伤害
  //   IsWreck: 0                    // [byte/0|1] 是否残骸状态。1=已报废形态
  //   Power: 0.0                    // [float]    动力输出。影响移动速度
  //
  // ─── 部件健康度 ───
  //   每个部件都有 Health 和 Damaged 两个字段。
  //   当 Health 归零时部件损坏，Damaged 自动变为1。
  //
  //   LeftWheelHealth: 100.0        // [float]    左轮健康度（100=满）
  //   LeftWheelDamaged: 0           // [byte/0|1] 左轮是否损坏
  //   RightWheelHealth: 100.0       // [float]    右轮健康度
  //   RightWheelDamaged: 0          // [byte/0|1] 右轮是否损坏
  //   MainEngineHealth: 150.0       // [float]    主引擎健康度
  //   MainEngineDamaged: 0          // [byte/0|1] 主引擎是否损坏
  //   SubEngineHealth: 150.0        // [float]    副引擎健康度
  //   SubEngineDamaged: 0           // [byte/0|1] 副引擎是否损坏
  //   TurretHealth: 100.0           // [float]    炮塔健康度
  //   TurretDamaged: 0              // [byte/0|1] 炮塔是否损坏
  //   TurretBurned: 0               // [byte/0|1] 炮塔是否烧毁
  //   TurretBurnTimer: 0            // [int]      炮塔燃烧计时（tick）
  //
  // ─── 武器系统 ───
  //
  //   DecoyReady: 1                 // [byte/0|1] 诱饵弹是否装填就绪
  //   ChargeProgress: 0.0           // [float]    特殊武器充能进度（0.0~1.0）
  //   SelectedWeapon: { __nbt_type: "int", value: 0 }  // 如果用int数组需要特殊处理，一般保持默认
  //
  //   WeaponState:                  // [compound] 各武器的详细状态
  //     Cannon:                     //   [compound] 主炮
  //       components:               //     [compound] 组件数据（固定名称不可改）
  //         "minecraft:custom_data": //    [compound] 自定义数据
  //           GunData:               //      [compound] SBW 武器数据
  //             Ammo: 1              //        [int]  当前装填的炮弹数（1=预装1发）
  //
  //     MachineGun:                 //   [compound] 同轴机枪
  //       components: { "minecraft:custom_data": { GunData: { Ammo: 200 } } }
  //
  //     PassengerMachineGun:        //   [compound] 乘客机枪
  //       components: { "minecraft:custom_data": { GunData: { Ammo: 200 } } }
  //
  //   ─── 武器弹药类型参考 ───
  //   superbwarfare:rifle_ammo     步枪弹（机枪用）
  //   superbwarfare:heavy_ammo     重弹
  //   superbwarfare:large_shell_ap 大口径AP弹（穿甲弹）
  //   superbwarfare:large_shell_he 大口径HE弹（高爆弹）
  //   superbwarfare:small_shell_ap 小口径AP弹
  //   superbwarfare:small_shell_he 小口径HE弹
  //   superbwarfare:missile        导弹
  //   superbwarfare:rocket         火箭弹
  //
  // ─── 载具库存 ───
  //
  //   Inventory:                    // [compound] 载具物品栏
  //     Items: [                    //   [list] 物品列表
  //       {                         //     [compound] 单个物品
  //         Slot: 0,                //       [int]    槽位编号（0~53，共54格）
  //         count: 64,              //       [int]    数量
  //         id: "superbwarfare:..." //       [string] 物品ID
  //       }
  //     ]
  //
  // ─── 其它 ───
  //
  //   Fire: -1                      // [short]   着火剩余时间（-1=不烧，>=1=燃烧中）
  //   FallDistance: 0.0             // [float]   累积坠落距离
  //   Motion: [0.0, 0.0, 0.0]      // [list]    速度向量 [x,y,z]（部署时保持静止）
  //   GearUp: 0                     // [byte/0|1] 起落架收起
  //   GearRot: 0.0                  // [float]    起落架/齿轮旋转角度

  // ==========================================================
  //  队伍载具配置
  //  ─────────────────
  //  键 = 队伍名（小写）
  //  值 = { vehicles: [...] }
  //
  //  每辆载具配置项：
  //    id            - 唯一标识符（用于标签和追踪）
  //    vehicleType   - 实际载具类型（如 "superbwarfare:t_90a"）
  //    pos           - 生成坐标 [x, y, z, yaw, pitch]
  //                       yaw=水平朝向(度), pitch=俯仰(度)，可选
  //    respawnDelay  - 重生延迟（tick，20tick=1秒）
  //    maxCount      - （可选）最大同时存活数，默认无限制
  //                      例如 maxCount: 1 表示此ID最多1辆存活
  //    deployNBT     - 部署时应用的初始NBT（见上方参考手册）
  //                      不填=null=白板生成
  // ==========================================================

  teams: {
    // ═══════════ 进攻方 ═══════════
    attack: {
      vehicles: [
        // ───── 进攻方 一号坦克（ZTZ-99A） ─────
        {
          id: 'attack_tank_1',
          vehicleType: 'superbwarfare:t_90a',
          pos: [-240.65, 107.00,-96.85],  
          respawnDelay: 600, // 1 秒
          maxCount: 1,        // 该ID最多同时存在1辆
          // ↓↓↓ 部署时应用的初始NBT ↓↓↓
          deployNBT: {
            // ─── 核心属性 ───
            Energy: 10000000,           // 满能量
            Health: 500.0,              // 满血
            Invulnerable: 0,            // 非无敌
            IsWreck: 0,                 // 非残骸
            Power: 0.0,                 // 动力

            // ─── 部件状态 ───
            LeftWheelHealth: 100.0,
            LeftWheelDamaged: 0,
            RightWheelHealth: 100.0,
            RightWheelDamaged: 0,
            MainEngineHealth: 150.0,
            MainEngineDamaged: 0,
            SubEngineHealth: 150.0,
            SubEngineDamaged: 0,
            TurretHealth: 100.0,
            TurretDamaged: 0,
            TurretBurned: 0,
            TurretBurnTimer: 0,

            // ─── 武器就绪 ───
            DecoyReady: 1,               // 诱饵弹就绪
            ChargeProgress: 0.0,         // 特殊武器未充能

            // ─── 弹药库存（Inventory 是复合标签，内含 Items 列表） ───
            Inventory: {
              Items: [
                // 0: AP弹 63发
                { Slot: 0,  count: 63, id: 'superbwarfare:large_shell_ap' },
                // 1: HE弹 64发
                { Slot: 1,  count: 64, id: 'superbwarfare:large_shell_he' },
                // 2~12: 步枪弹 ×11组
                { Slot: 2,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 3,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 4,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 5,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 6,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 7,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 8,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 9,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 10, count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 11, count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 12, count: 64, id: 'superbwarfare:rifle_ammo' },
                // 13~17: 重弹 ×5组
                { Slot: 13, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 14, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 15, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 16, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 17, count: 64, id: 'superbwarfare:heavy_ammo' }
              ]
            },

            // ─── 武器预装填 ───
            WeaponState: {
              Cannon: {                   // 主炮 — 预装1发AP弹
                components: {
                  'minecraft:custom_data': {
                    GunData: { Ammo: 1 }
                  }
                }
              },
              MachineGun: {               // 同轴机枪 — 未装填
                components: {}
              },
              PassengerMachineGun: {      // 乘客机枪 — 未装填
                components: {}
              }
            }
          }
        }
      ]
    },

    // ═══════════ 防守方 ═══════════
    defense: {
      vehicles: [
        // ───── 防守方 一号坦克（ZTZ-99A） ─────
        {
          id: 'defense_tank_1',
          vehicleType: 'superbwarfare:t_90a',
          pos: [-651.19, 113.00, -10.94],
          respawnDelay: 600, // 10 秒
          maxCount: 1,        // 该ID最多同时存在1辆
          deployNBT: {
            // ─── 核心属性 ───
            Energy: 10000000,           // 满能量
            Health: 500.0,              // 满血
            Invulnerable: 0,            // 非无敌
            IsWreck: 0,                 // 非残骸
            Power: 0.0,                 // 动力

            // ─── 部件状态 ───
            LeftWheelHealth: 100.0,
            LeftWheelDamaged: 0,
            RightWheelHealth: 100.0,
            RightWheelDamaged: 0,
            MainEngineHealth: 150.0,
            MainEngineDamaged: 0,
            SubEngineHealth: 150.0,
            SubEngineDamaged: 0,
            TurretHealth: 100.0,
            TurretDamaged: 0,
            TurretBurned: 0,
            TurretBurnTimer: 0,

            // ─── 武器就绪 ───
            DecoyReady: 1,               // 诱饵弹就绪
            ChargeProgress: 0.0,         // 特殊武器未充能

            // ─── 弹药库存（Inventory 是复合标签，内含 Items 列表） ───
            Inventory: {
              Items: [
                // 0: AP弹 63发
                { Slot: 0,  count: 63, id: 'superbwarfare:large_shell_ap' },
                // 1: HE弹 64发
                { Slot: 1,  count: 64, id: 'superbwarfare:large_shell_he' },
                // 2~12: 步枪弹 ×11组
                { Slot: 2,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 3,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 4,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 5,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 6,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 7,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 8,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 9,  count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 10, count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 11, count: 64, id: 'superbwarfare:rifle_ammo' },
                { Slot: 12, count: 64, id: 'superbwarfare:rifle_ammo' },
                // 13~17: 重弹 ×5组
                { Slot: 13, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 14, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 15, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 16, count: 64, id: 'superbwarfare:heavy_ammo' },
                { Slot: 17, count: 64, id: 'superbwarfare:heavy_ammo' }
              ]
            },

            // ─── 武器预装填 ───
            WeaponState: {
              Cannon: {                   // 主炮 — 预装1发AP弹
                components: {
                  'minecraft:custom_data': {
                    GunData: { Ammo: 1 }
                  }
                }
              },
              MachineGun: {               // 同轴机枪 — 未装填
                components: {}
              },
              PassengerMachineGun: {      // 乘客机枪 — 未装填
                components: {}
              }
            }
          }
        }
      ]
    }
  }
}
