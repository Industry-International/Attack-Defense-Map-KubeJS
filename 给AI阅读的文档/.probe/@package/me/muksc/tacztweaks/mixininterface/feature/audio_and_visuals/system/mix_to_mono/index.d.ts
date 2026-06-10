import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/audio_and_visuals/system/mix_to_mono" {
    export class $MonoObject {
        static of(arg0: $ResourceLocation_): $MonoObject;
        static of(arg0: $Object): $MonoObject;
    }
    export interface $MonoObject {
        tacztweaks$getMono(): boolean;
        tacztweaks$setMono(arg0: boolean): void;
    }
}
