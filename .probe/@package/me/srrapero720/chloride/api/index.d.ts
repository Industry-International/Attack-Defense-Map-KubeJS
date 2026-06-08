import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
export * as events from "@package/me/srrapero720/chloride/api/events";

declare module "@package/me/srrapero720/chloride/api" {
    export class $IRenderableEntity {
    }
    export interface $IRenderableEntity {
        chloride$whitelisted(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRenderableEntity}.
     */
    export type $IRenderableEntity_ = (() => boolean);
    export class $IParticleTypeData {
    }
    export interface $IParticleTypeData {
        getId(): $ResourceLocation;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IParticleTypeData}.
     */
    export type $IParticleTypeData_ = (() => $ResourceLocation_);
    export class $IGameLeaves {
    }
    export interface $IGameLeaves {
        chloride$getRL(): $ResourceLocation;
        chloride$neighborCount(): number;
    }
}
