import { $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityKineticBullet } from "@package/com/tacz/guns/entity";
export * as bullet_interactions from "@package/me/muksc/tacztweaks/mixininterface/feature/datapack/bullet_interactions";
export * as shield from "@package/me/muksc/tacztweaks/mixininterface/feature/datapack/shield";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/datapack" {
    export class $TaCZTweaksBullet {
        static of(arg0: $EntityKineticBullet): $TaCZTweaksBullet;
    }
    export interface $TaCZTweaksBullet {
        tacztweaks$getEntityPierce(): number;
        tacztweaks$setBurstIndex(arg0: number): void;
        tacztweaks$getBurstIndex(): number;
        tacztweaks$setEntityPierce(arg0: number): void;
        tacztweaks$modifyDamage(arg0: number, arg1: number): void;
        tacztweaks$getGunStack(): $ItemStack;
        tacztweaks$setPelletIndex(arg0: number): void;
        tacztweaks$getPelletIndex(): number;
        tacztweaks$setBlockPierce(arg0: number): void;
        tacztweaks$getBlockPierce(): number;
        tacztweaks$modifyEntityHitDamage(arg0: number, arg1: number): void;
    }
}
