import { $Particle } from "@package/net/minecraft/client/particle";
import { $StoryBoardEntry } from "@package/net/createmod/ponder/api/registration";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Multimap } from "@package/com/google/common/collect";

declare module "@package/com/almostreliable/ponderjs/mixin" {
    export class $PonderWorldAccessor {
    }
    export interface $PonderWorldAccessor {
        ponderjs$makeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $PonderWorldAccessor}.
     */
    export type $PonderWorldAccessor_ = ((arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => $Particle);
    export class $PonderSceneRegistryAccessor {
    }
    export interface $PonderSceneRegistryAccessor {
        ponderjs$scenes(): $Multimap<$ResourceLocation, $StoryBoardEntry>;
    }
    /**
     * Values that may be interpreted as {@link $PonderSceneRegistryAccessor}.
     */
    export type $PonderSceneRegistryAccessor_ = (() => $Multimap<$ResourceLocation_, $StoryBoardEntry>);
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        ponderjs$setHasPhysics(arg0: boolean): void;
        ponderjs$setGravity(arg0: number): void;
        ponderjs$setFriction(arg0: number): void;
        ponderjs$setLifetime(arg0: number): void;
        ponderjs$setAlpha(arg0: number): void;
        ponderjs$setRoll(arg0: number): void;
        ponderjs$setStoppedByCollision(arg0: boolean): void;
    }
}
