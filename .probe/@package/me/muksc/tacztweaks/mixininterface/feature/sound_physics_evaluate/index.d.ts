import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/sound_physics_evaluate" {
    export class $ChannelExtraContext {
        static of(arg0: $Channel): $ChannelExtraContext;
    }
    export interface $ChannelExtraContext {
        tacztweaks$getSoundInstance(): $SoundInstance;
        tacztweaks$setSoundInstance(arg0: $SoundInstance): void;
    }
}
