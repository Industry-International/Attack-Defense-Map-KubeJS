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
        getDelegate(): $MovingSoundInstanceDelegate;
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
    }
    export class $MovingSoundInstanceDelegate implements $SoundInstance, $TickableSoundInstance {
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        isRelative(): boolean;
        unload(arg0: $Channel): void;
        tick(): void;
        getSource(): $SoundSource;
        getY(): number;
        getDelay(): number;
        isStopped(): boolean;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        isLooping(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        canStartSilent(): boolean;
        canPlaySound(): boolean;
        getPitch(): number;
        getVolume(): number;
        getZ(): number;
        getX(): number;
        getSound(): $Sound;
        tickWithChannel(arg0: $Channel): void;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get y(): number;
        get delay(): number;
        get stopped(): boolean;
        get looping(): boolean;
        get attenuation(): $SoundInstance$Attenuation;
        get pitch(): number;
        get volume(): number;
        get z(): number;
        get x(): number;
        get sound(): $Sound;
    }
}
