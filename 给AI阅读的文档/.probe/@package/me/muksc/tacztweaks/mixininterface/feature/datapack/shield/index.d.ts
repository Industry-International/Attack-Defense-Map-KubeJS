import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CustomShieldResult } from "@package/me/muksc/tacztweaks/feature/datapack/shield";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/datapack/shield" {
    export class $CustomShieldEntity {
        static of(arg0: $LivingEntity): $CustomShieldEntity;
    }
    export interface $CustomShieldEntity {
        tacztweaks$setShieldResult(arg0: $CustomShieldResult): void;
        tacztweaks$getShieldResult(): $CustomShieldResult;
    }
}
