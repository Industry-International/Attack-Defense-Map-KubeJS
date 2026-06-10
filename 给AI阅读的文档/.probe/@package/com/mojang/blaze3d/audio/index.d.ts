import { $ChannelExtraContext } from "@package/me/muksc/tacztweaks/mixininterface/feature/sound_physics_evaluate";
import { $ChannelAccessor as $ChannelAccessor$1 } from "@package/dev/ryanhcode/sable/mixin/sublevel_sounds";
import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $ChannelAccessor } from "@package/com/sonicether/soundphysics/mixin";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $OptionalInt } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $SoundBufferAccessor } from "@package/me/muksc/tacztweaks/mixin/accessor";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Blaze3DAudioChannelAccessor } from "@package/rbasamoyai/createbigcannons/mixin/client";

declare module "@package/com/mojang/blaze3d/audio" {
    export class $Library$CountingChannelPool implements $Library$ChannelPool {
    }
    export class $ListenerTransform extends $Record {
        position(): $Vec3;
        right(): $Vec3;
        up(): $Vec3;
        forward(): $Vec3;
        static INITIAL: $ListenerTransform;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
    }
    export class $Library {
        init(arg0: string, arg1: boolean): void;
        cleanup(): void;
        getListener(): $Listener;
        getAvailableSoundDevices(): $List<string>;
        getCurrentDeviceName(): string;
        hasDefaultDeviceChanged(): boolean;
        static getDefaultDeviceName(): string;
        getDebugString(): string;
        isCurrentDeviceDisconnected(): boolean;
        acquireChannel(arg0: $Library$Pool_): $Channel;
        releaseChannel(arg0: $Channel): void;
        staticChannels: $Library$ChannelPool;
        constructor();
        get listener(): $Listener;
        get availableSoundDevices(): $List<string>;
        get currentDeviceName(): string;
        static get defaultDeviceName(): string;
        get debugString(): string;
        get currentDeviceDisconnected(): boolean;
    }
    export class $Library$Pool extends $Enum<$Library$Pool> {
        static values(): $Library$Pool[];
        static valueOf(arg0: string): $Library$Pool;
        static STREAMING: $Library$Pool;
        static STATIC: $Library$Pool;
    }
    /**
     * Values that may be interpreted as {@link $Library$Pool}.
     */
    export type $Library$Pool_ = "static" | "streaming";
    export class $Library$ChannelPool {
    }
    export interface $Library$ChannelPool {
        release(arg0: $Channel): boolean;
        cleanup(): void;
        acquire(): $Channel;
        getUsedCount(): number;
        getMaxCount(): number;
        get usedCount(): number;
        get maxCount(): number;
    }
    export class $Listener {
        reset(): void;
        getTransform(): $ListenerTransform;
        setGain(arg0: number): void;
        getGain(): number;
        setTransform(arg0: $ListenerTransform_): void;
        constructor();
    }
    export class $OpenAlUtil {
        constructor();
    }
    export class $Channel implements $Blaze3DAudioChannelAccessor, $ChannelAccessor$1, $ChannelExtraContext, $ChannelAccessor {
        stop(): void;
        destroy(): void;
        stopped(): boolean;
        unpause(): void;
        play(): void;
        playing(): boolean;
        setLooping(arg0: boolean): void;
        setPitch(arg0: number): void;
        setVolume(arg0: number): void;
        pause(): void;
        setRelative(arg0: boolean): void;
        tacztweaks$getSoundInstance(): $SoundInstance;
        tacztweaks$setSoundInstance(arg0: $SoundInstance): void;
        linearAttenuation(arg0: number): void;
        setSelfPosition(arg0: $Vec3_): void;
        attachBufferStream(arg0: $AudioStream): void;
        attachStaticBuffer(arg0: $SoundBuffer): void;
        disableAttenuation(): void;
        updateStream(): void;
        getSource(): number;
        static BUFFER_DURATION_SECONDS: number;
        set looping(value: boolean);
        set pitch(value: number);
        set volume(value: number);
        set relative(value: boolean);
        set selfPosition(value: $Vec3_);
        get source(): number;
    }
    export class $SoundBuffer implements $SoundBufferAccessor {
        discardAlBuffer(): void;
        releaseAlBuffer(): $OptionalInt;
        tacztweaks$getFormat(): $AudioFormat;
        tacztweaks$getData(): $ByteBuffer;
        constructor(arg0: $ByteBuffer, arg1: $AudioFormat);
    }
}
