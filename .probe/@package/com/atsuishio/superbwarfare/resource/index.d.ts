import { $ResourceLocation } from "@package/net/minecraft/resources";
export * as gun from "@package/com/atsuishio/superbwarfare/resource/gun";

declare module "@package/com/atsuishio/superbwarfare/resource" {
    export class $ModelResource {
        getLODModel(arg0: number): $ResourceLocation;
        getLODTexture(arg0: number): $ResourceLocation;
        hasLOD(): boolean;
        texture: $ResourceLocation;
        model: $ResourceLocation;
        animation: $ResourceLocation;
        constructor();
    }
}
