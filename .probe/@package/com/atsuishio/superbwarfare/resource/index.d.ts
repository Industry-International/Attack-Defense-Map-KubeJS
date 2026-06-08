import { $ResourceLocation } from "@package/net/minecraft/resources";
export * as gun from "@package/com/atsuishio/superbwarfare/resource/gun";

declare module "@package/com/atsuishio/superbwarfare/resource" {
    export class $ModelResource {
        hasLOD(): boolean;
        getLODTexture(arg0: number): $ResourceLocation;
        getLODModel(arg0: number): $ResourceLocation;
        texture: $ResourceLocation;
        model: $ResourceLocation;
        animation: $ResourceLocation;
        constructor();
    }
}
