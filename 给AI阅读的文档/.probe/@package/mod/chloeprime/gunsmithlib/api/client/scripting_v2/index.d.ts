import { $GunAnimationStateContext } from "@package/com/tacz/guns/client/animation/statemachine";
import { $ClientShootStates } from "@package/mod/chloeprime/gunsmithlib/api/client/scripting_v2/content";
import { $GunsmithLibCommonScriptExtension } from "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2";
export * as content from "@package/mod/chloeprime/gunsmithlib/api/client/scripting_v2/content";

declare module "@package/mod/chloeprime/gunsmithlib/api/client/scripting_v2" {
    export class $GunsmithLibAnimationStateMachineScriptExtension extends $GunsmithLibCommonScriptExtension {
        get_previous_ammo_amount(): number;
        get_previous_gun_id(): string;
        has_previous_gun_id(): boolean;
        get_previous_total_ammo_amount(): number;
        get_previous_has_bullet_in_barrel(): boolean;
        shooter_states(): $ClientShootStates;
        constructor(arg0: $GunAnimationStateContext);
        get _previous_ammo_amount(): number;
        get _previous_gun_id(): string;
        get _previous_total_ammo_amount(): number;
        get _previous_has_bullet_in_barrel(): boolean;
    }
}
