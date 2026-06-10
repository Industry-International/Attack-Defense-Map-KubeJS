import { $Object } from "@package/java/lang";
import { $LuaValue } from "@package/org/luaj/vm2";
import { $Vector3d, $Vector2f } from "@package/org/joml";

declare module "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2/content" {
    export class $VanillaCooldownExtension {
    }
    export interface $VanillaCooldownExtension {
        get_cooldown_seconds(): number;
        get_cooldown_percent(): number;
        get _cooldown_seconds(): number;
        get _cooldown_percent(): number;
    }
    export class $RangefinderExtension {
    }
    export interface $RangefinderExtension {
        get_estimated_range(): number;
        get_estimated_range(arg0: number): number;
    }
    export class $ShooterStates {
    }
    export interface $ShooterStates extends $EntityStates {
        is_bolting(): boolean;
        is_aiming(): boolean;
        aiming_progress(): number;
        reload_state(): string;
        sprint_time(): number;
        get_health(): number;
        get_armor(): number;
        get_scale(): number;
        get_elytra_flying_time_seconds(): number;
        is_baby(): boolean;
        get_potion_effect(arg0: string): $PotionEffectInstanceView;
        get_movement_input(): $Vector3d;
        get_max_health(): number;
        is_on_climbable(): boolean;
        get_head_rotation(): $Vector2f;
        get_body_rotation(): $Vector2f;
        is_elytra_flying(): boolean;
        get_movement_speed(): number;
        get_armor_toughness(): number;
        melee_cooldown_millis(): number;
        draw_cooldown_millis(): number;
        get_attribute_base_value(arg0: string): number;
        get_elytra_flying_ticks(): number;
        shoot_cooldown_millis(): number;
        get_attribute_value(arg0: string): number;
        reload_countdown_millis(): number;
        get _bolting(): boolean;
        get _aiming(): boolean;
        get _health(): number;
        get _armor(): number;
        get _scale(): number;
        get _elytra_flying_time_seconds(): number;
        get _baby(): boolean;
        get _movement_input(): $Vector3d;
        get _max_health(): number;
        get _on_climbable(): boolean;
        get _head_rotation(): $Vector2f;
        get _body_rotation(): $Vector2f;
        get _elytra_flying(): boolean;
        get _movement_speed(): number;
        get _armor_toughness(): number;
        get _elytra_flying_ticks(): number;
    }
    export class $SyncedDataView {
    }
    export interface $SyncedDataView {
        get_number(arg0: string): number;
        get_int(arg0: string): number;
        get_string(arg0: string): string;
        optional_get_int(arg0: string): number;
        optional_get_string(arg0: string): string;
        optional_get_number(arg0: string): number;
    }
    export class $BetterAsyncExtension {
    }
    export interface $BetterAsyncExtension {
        async_run_delayed(arg0: $LuaValue, arg1: number, ...arg2: $Object[]): void;
        async_run_cycled(arg0: $LuaValue, arg1: number, arg2: number, ...arg3: $Object[]): void;
    }
}
