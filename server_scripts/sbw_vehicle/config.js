// ============================================================
// SBW 卓越前线 - 载具自动部署系统 配置文件
//
// 功能：
//   1. 自动部署：游戏开始时（game_state == 1）自动部署配置的载具
//   2. 标签管理：每辆载具携带唯一标签，存活期间不重复生成
//   3. 自动重生：载具被摧毁后，按配置延迟自动重新生成
//   4. 手动命令：支持管理员手动部署/重置
// ============================================================

const SBW_VEHICLE_CONFIG = {
  // ======== 游戏状态检测（复用现有计分板） ========

  /** 用于检测游戏状态的虚拟玩家名 */
  scoreHolder: 'state',
  /** 游戏状态计分板目标名 */
  scoreObjective: 'game_state',
  /** 表示"游戏进行中"的分数值 */
  activeValue: 1,

  // ======== 持久化数据键 ========

  /** KubeJS persistentData 中使用的根键名 */
  persistKey: 'sbw_vehicle',
  /** 标签前缀 */
  tagPrefix: 'sbw_vehicle_',

  // ======== 重生配置 ========

  /**
   * 队伍载具配置
   * 键：队伍名（小写）
   * 值：{ vehicles: [...] }
   *
   * 每辆载具配置项：
   *   id            - 唯一标识符（用于标签和追踪，如 "defense_tank_1"）
   *   entityType    - SBW Container 实体类型（固定为 "superbwarfare:container"）
   *   vehicleType   - 实际载具类型（如 "superbwarfare:ztz_99a"）
   *   pos           - 生成坐标 [x, y, z, yaw, pitch]（yaw/pitch 可选）
   *   respawnDelay  - 重生延迟（tick，20 tick = 1 秒）
   */
  teams: {
    // 进攻方载具配置
    attack: {
      vehicles: [
        {
          id: 'attack_tank_1',
          entityType: 'superbwarfare:t_90a',
          vehicleType: 'superbwarfare:ztz_99a',
          pos: [0.5, 64, 0.5],
          respawnDelay: 1200 // 60 秒
        }
      ]
    },
    // 防守方载具配置
    defense: {
      vehicles: [
        {
          id: 'defense_tank_1',
          entityType: 'superbwarfare:t_90a',
          vehicleType: 'superbwarfare:ztz_99a',
          pos: [-651.19, 113.00, -10.94], 
          respawnDelay: 1200 // 60 秒
        }
      ]
    }
  }
}
