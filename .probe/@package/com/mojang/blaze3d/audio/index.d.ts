import { $ChannelAccessor as $ChannelAccessor$1 } from "@package/dev/ryanhcode/sable/mixin/sublevel_sounds";
import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $ChannelAccessor } from "@package/com/sonicether/soundphysics/mixin";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $OptionalInt } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
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
        isCurrentDeviceDisconnected(): boolean;
        getAvailableSoundDevices(): $List<string>;
        getDebugString(): string;
        getCurrentDeviceName(): string;
        static getDefaultDeviceName(): string;
        hasDefaultDeviceChanged(): boolean;
        acquireChannel(arg0: $Library$Pool_): $Channel;
        releaseChannel(arg0: $Channel): void;
        staticChannels: $Library$ChannelPool;
        constructor();
        get listener(): $Listener;
        get currentDeviceDisconnected(): boolean;
        get availableSoundDevices(): $List<string>;
        get debugString(): string;
        get currentDeviceName(): string;
        static get defaultDeviceName(): string;
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
        getMaxCount(): number;
        getUsedCount(): number;
        get maxCount(): number;
        get usedCount(): number;
    }
    export class $Listener {
        reset(): void;
        getTransform(): $ListenerTransform;
        setTransform(arg0: $ListenerTransform_): void;
        setGain(arg0: number): void;
        getGain(): number;
        constructor();
    }
    export class $OpenAlUtil {
        constructor();
    }
    export class $Channel implements $Blaze3DAudioChannelAccessor, $ChannelAccessor$1, $ChannelAccessor {
        stop(): void;
        destroy(): void;
        play(): void;
        setPitch(arg0: number): void;
        setVolume(arg0: number): void;
        stopped(): boolean;
        playing(): boolean;
        pause(): void;
        unpause(): void;
        setRelative(arg0: boolean): void;
        attachStaticBuffer(arg0: $SoundBuffer): void;
        setLooping(arg0: boolean): void;
        attachBufferStream(arg0: $AudioStream): void;
        linearAttenuation(arg0: number): void;
        disableAttenuation(): void;
        setSelfPosition(arg0: $Vec3_): void;
        updateStream(): void;
        getSource(): number;
        static BUFFER_DURATION_SECONDS: number;
        set pitch(value: number);
        set volume(value: number);
        set relative(value: boolean);
        set looping(value: boolean);
        set selfPosition(value: $Vec3_);
        get source(): number;
    }
    export class $SoundBuffer {
        releaseAlBuffer(): $OptionalInt;
        discardAlBuffer(): void;
        constructor(arg0: $ByteBuffer, arg1: $AudioFormat);
    }
}
