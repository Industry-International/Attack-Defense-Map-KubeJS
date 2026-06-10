import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $JsonDeserializationContext_, $JsonDeserializer, $JsonElement_ } from "@package/com/google/gson";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SoundInstanceDelegated, $MovingSoundInstanceDelegate } from "@package/dev/ryanhcode/sable/sound";
import { $List, $List_ } from "@package/java/util";
import { $FabricSoundInstance } from "@package/net/fabricmc/fabric/api/client/sound/v1";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Bee } from "@package/net/minecraft/world/entity/animal";
import { $BiomeAmbienceInterface } from "@package/net/irisshaders/iris/mixinterface";
import { $Holder_, $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent, $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $SoundBufferLibrary, $SoundEngine, $Weighted, $WeighedSoundEvents, $AudioStream, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $SampledFloat_, $SampledFloat } from "@package/net/minecraft/util/valueproviders";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $Guardian } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";

declare module "@package/net/minecraft/client/resources/sounds" {
    export class $TickableSoundInstance {
    }
    export interface $TickableSoundInstance extends $SoundInstance {
        tick(): void;
        isStopped(): boolean;
        get stopped(): boolean;
    }
    export class $SoundEventRegistrationSerializer implements $JsonDeserializer<$SoundEventRegistration> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $SoundEventRegistration;
        constructor();
    }
    export class $Sound implements $Weighted<$Sound> {
        getLocation(): $ResourceLocation;
        getType(): $Sound$Type;
        getPath(): $ResourceLocation;
        getVolume(): $SampledFloat;
        getPitch(): $SampledFloat;
        getWeight(): number;
        getAttenuationDistance(): number;
        shouldStream(): boolean;
        shouldPreload(): boolean;
        preloadIfRequired(arg0: $SoundEngine): void;
        getSound(arg0: $RandomSource): $Sound;
        static SOUND_LISTER: $FileToIdConverter;
        constructor(arg0: $ResourceLocation_, arg1: $SampledFloat_, arg2: $SampledFloat_, arg3: number, arg4: $Sound$Type_, arg5: boolean, arg6: boolean, arg7: number);
        get location(): $ResourceLocation;
        get type(): $Sound$Type;
        get path(): $ResourceLocation;
        get volume(): $SampledFloat;
        get pitch(): $SampledFloat;
        get weight(): number;
        get attenuationDistance(): number;
    }
    export class $AbstractSoundInstance implements $SoundInstance, $SoundInstanceDelegated {
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        isRelative(): boolean;
        getSource(): $SoundSource;
        getDelegate(): $MovingSoundInstanceDelegate;
        getDelay(): number;
        getY(): number;
        getX(): number;
        getZ(): number;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Sound;
        isLooping(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        canStartSilent(): boolean;
        canPlaySound(): boolean;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: $RandomSource);
        constructor(arg0: $ResourceLocation_, arg1: $SoundSource_, arg2: $RandomSource);
    }
    export class $EntityBoundSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: number, arg3: number, arg4: $Entity, arg5: number);
    }
    export class $BiomeAmbientSoundsHandler implements $AmbientSoundHandler, $BiomeAmbienceInterface {
        tick(): void;
        getMoodiness(): number;
        getConstantMood(): number;
        constructor(arg0: $LocalPlayer, arg1: $SoundManager, arg2: $BiomeManager);
        get moodiness(): number;
        get constantMood(): number;
    }
    export class $SimpleSoundInstance extends $AbstractSoundInstance {
        static forUI(arg0: $Holder_<$SoundEvent>, arg1: number): $SimpleSoundInstance;
        static forUI(arg0: $SoundEvent_, arg1: number): $SimpleSoundInstance;
        static forUI(arg0: $SoundEvent_, arg1: number, arg2: number): $SimpleSoundInstance;
        static forJukeboxSong(arg0: $SoundEvent_, arg1: $Vec3_): $SimpleSoundInstance;
        static forLocalAmbience(arg0: $SoundEvent_, arg1: number, arg2: number): $SimpleSoundInstance;
        static forAmbientMood(arg0: $SoundEvent_, arg1: $RandomSource, arg2: number, arg3: number, arg4: number): $SimpleSoundInstance;
        static forAmbientAddition(arg0: $SoundEvent_): $SimpleSoundInstance;
        static forMusic(arg0: $SoundEvent_): $SimpleSoundInstance;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: number, arg3: number, arg4: $RandomSource, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ResourceLocation_, arg1: $SoundSource_, arg2: number, arg3: number, arg4: $RandomSource, arg5: boolean, arg6: number, arg7: $SoundInstance$Attenuation_, arg8: number, arg9: number, arg10: number, arg11: boolean);
        constructor(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: number, arg3: number, arg4: $RandomSource, arg5: $BlockPos_);
    }
    export class $UnderwaterAmbientSoundInstances {
        constructor();
    }
    export class $BeeSoundInstance extends $AbstractTickableSoundInstance {
        shouldSwitchSounds(): boolean;
        getAlternativeSoundInstance(): $AbstractTickableSoundInstance;
        bee: $Bee;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $Bee, arg1: $SoundEvent_, arg2: $SoundSource_);
        get alternativeSoundInstance(): $AbstractTickableSoundInstance;
    }
    export class $Sound$Type extends $Enum<$Sound$Type> {
        static values(): $Sound$Type[];
        static valueOf(arg0: string): $Sound$Type;
        static getByName(arg0: string): $Sound$Type;
        static SOUND_EVENT: $Sound$Type;
        static FILE: $Sound$Type;
    }
    /**
     * Values that may be interpreted as {@link $Sound$Type}.
     */
    export type $Sound$Type_ = "file" | "sound_event";
    export class $MinecartSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $AbstractMinecart);
    }
    export class $SoundEventRegistration {
        getSounds(): $List<$Sound>;
        isReplace(): boolean;
        getSubtitle(): string;
        constructor(arg0: $List_<$Sound>, arg1: boolean, arg2: string);
        get sounds(): $List<$Sound>;
        get replace(): boolean;
        get subtitle(): string;
    }
    export class $UnderwaterAmbientSoundInstances$UnderwaterAmbientSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        static FADE_DURATION: number;
        relative: boolean;
        constructor(arg0: $LocalPlayer);
    }
    export class $BubbleColumnAmbientSoundHandler implements $AmbientSoundHandler {
        tick(): void;
        constructor(arg0: $LocalPlayer);
    }
    export class $AmbientSoundHandler {
    }
    export interface $AmbientSoundHandler {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $AmbientSoundHandler}.
     */
    export type $AmbientSoundHandler_ = (() => void);
    export class $UnderwaterAmbientSoundHandler implements $AmbientSoundHandler {
        tick(): void;
        static CHANCE_PER_TICK: number;
        static ULTRA_RARE_CHANCE_PER_TICK: number;
        static RARE_CHANCE_PER_TICK: number;
        constructor(arg0: $LocalPlayer, arg1: $SoundManager);
    }
    export class $BiomeAmbientSoundsHandler$LoopSoundInstance extends $AbstractTickableSoundInstance {
        fadeIn(): void;
        fadeOut(): void;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $SoundEvent_);
    }
    export class $AbstractTickableSoundInstance extends $AbstractSoundInstance implements $TickableSoundInstance {
        stop(): void;
        isStopped(): boolean;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: $RandomSource);
        get stopped(): boolean;
    }
    export class $GuardianAttackSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $Guardian);
    }
    export class $RidingMinecartSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $Player, arg1: $AbstractMinecart, arg2: boolean);
    }
    export class $SoundInstance {
        static createUnseededRandom(): $RandomSource;
    }
    export interface $SoundInstance extends $FabricSoundInstance {
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        isRelative(): boolean;
        getSource(): $SoundSource;
        getDelay(): number;
        getY(): number;
        getX(): number;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        getZ(): number;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Sound;
        isLooping(): boolean;
        canStartSilent(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        canPlaySound(): boolean;
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get delay(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get volume(): number;
        get pitch(): number;
        get sound(): $Sound;
        get looping(): boolean;
        get attenuation(): $SoundInstance$Attenuation;
    }
    export class $BeeFlyingSoundInstance extends $BeeSoundInstance {
        bee: $Bee;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $Bee);
    }
    export class $SoundInstance$Attenuation extends $Enum<$SoundInstance$Attenuation> {
        static values(): $SoundInstance$Attenuation[];
        static valueOf(arg0: string): $SoundInstance$Attenuation;
        static NONE: $SoundInstance$Attenuation;
        static LINEAR: $SoundInstance$Attenuation;
    }
    /**
     * Values that may be interpreted as {@link $SoundInstance$Attenuation}.
     */
    export type $SoundInstance$Attenuation_ = "none" | "linear";
    export class $ElytraOnPlayerSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        static DELAY: number;
        relative: boolean;
        constructor(arg0: $LocalPlayer);
    }
    export class $BeeAggressiveSoundInstance extends $BeeSoundInstance {
        bee: $Bee;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $Bee);
    }
    export class $UnderwaterAmbientSoundInstances$SubSound extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $LocalPlayer, arg1: $SoundEvent_);
    }
    export class $SnifferSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $Sniffer);
    }
}
