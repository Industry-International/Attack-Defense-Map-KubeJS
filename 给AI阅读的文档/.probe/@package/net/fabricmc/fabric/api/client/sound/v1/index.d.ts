import { $AudioStream, $SoundBufferLibrary } from "@package/net/minecraft/client/sounds";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/net/fabricmc/fabric/api/client/sound/v1" {
    export class $FabricSoundInstance {
        static EMPTY_SOUND: $ResourceLocation;
    }
    export interface $FabricSoundInstance {
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
    }
}
