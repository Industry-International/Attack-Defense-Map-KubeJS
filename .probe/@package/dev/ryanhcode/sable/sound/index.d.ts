import { $SoundSource } from "@package/net/minecraft/sounds";
import { $WeighedSoundEvents, $AudioStream, $SoundBufferLibrary, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundInstance$Attenuation, $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sound" {
    export class $SoundInstanceDelegated {
    }
    export interface $SoundInstanceDelegated {
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        getDelegate(): $MovingSoundInstanceDelegate;
    }
    export class $MovingSoundInstanceDelegate implements $SoundInstance, $TickableSoundInstance {
        getY(): number;
        getX(): number;
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        isRelative(): boolean;
        unload(arg0: $Channel): void;
        tick(): void;
        getSource(): $SoundSource;
        isStopped(): boolean;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        getDelay(): number;
        getZ(): number;
        canPlaySound(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        canStartSilent(): boolean;
        tickWithChannel(arg0: $Channel): void;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Sound;
        isLooping(): boolean;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get y(): number;
        get x(): number;
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get stopped(): boolean;
        get delay(): number;
        get z(): number;
        get attenuation(): $SoundInstance$Attenuation;
        get volume(): number;
        get pitch(): number;
        get sound(): $Sound;
        get looping(): boolean;
    }
}
