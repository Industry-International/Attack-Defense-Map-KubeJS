import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";

declare module "@package/snownee/jade/mixin" {
    export class $AbstractFurnaceBlockEntityAccess {
    }
    export interface $AbstractFurnaceBlockEntityAccess {
        getCookingProgress(): number;
        getCookingTotalTime(): number;
        get cookingProgress(): number;
        get cookingTotalTime(): number;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        callGetTypeName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccess}.
     */
    export type $EntityAccess_ = (() => $Component_);
    export class $CanItemPerformAbilityAccess {
    }
    export interface $CanItemPerformAbilityAccess {
        getAbility(): $ItemAbility;
        get ability(): $ItemAbility;
    }
    /**
     * Values that may be interpreted as {@link $CanItemPerformAbilityAccess}.
     */
    export type $CanItemPerformAbilityAccess_ = (() => $ItemAbility_);
}
