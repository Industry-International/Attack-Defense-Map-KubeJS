import { $VanillaCooldownExtension, $SyncedDataView, $BetterAsyncExtension, $ShooterStates, $RangefinderExtension } from "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2/content";
import { $AbstractCommonScriptingExtension } from "@package/mod/chloeprime/gunsmithlib/common";
import { $Object } from "@package/java/lang";
import { $LuaValue } from "@package/org/luaj/vm2";
export * as content from "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2/content";

declare module "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2" {
    export class $GunsmithLibCommonScriptExtension implements $VanillaCooldownExtension, $RangefinderExtension, $BetterAsyncExtension {
        ternary_op<T>(arg0: boolean, arg1: T, arg2: T): T;
        get_gun_id(): string;
        synced_data(): $SyncedDataView;
        async_run_delayed(arg0: $LuaValue, arg1: number, ...arg2: $Object[]): void;
        async_run_cycled(arg0: $LuaValue, arg1: number, arg2: number, ...arg3: $Object[]): void;
        /**
         * @deprecated
         */
        get_charge_time(): number;
        shooter_states(): $ShooterStates;
        get_cooldown_seconds(): number;
        get_estimated_range(arg0: number): number;
        get_estimated_range(): number;
        get_cooldown_percent(): number;
        constructor(arg0: $AbstractCommonScriptingExtension);
        get _gun_id(): string;
        get _charge_time(): number;
        get _cooldown_seconds(): number;
        get _cooldown_percent(): number;
    }
}
