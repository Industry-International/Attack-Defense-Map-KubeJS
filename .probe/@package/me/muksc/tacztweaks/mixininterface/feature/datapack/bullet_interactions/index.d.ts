import { $BlockBehaviour } from "@package/net/minecraft/world/level/block/state";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/datapack/bullet_interactions" {
    export class $DestroySpeedModifiableBlock {
        static of(arg0: $BlockBehaviour): $DestroySpeedModifiableBlock;
    }
    export interface $DestroySpeedModifiableBlock {
        tacztweaks$setDestroySpeedMultiplier(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DestroySpeedModifiableBlock}.
     */
    export type $DestroySpeedModifiableBlock_ = ((arg0: number) => void);
}
