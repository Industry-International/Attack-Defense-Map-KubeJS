import { $Event } from "@package/net/neoforged/bus/api";
import { $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/client/event/sound" {
    export class $SoundEvent$SoundSourceEvent extends $SoundEvent {
        getName(): string;
        getChannel(): $Channel;
        getSound(): $SoundInstance;
        get name(): string;
        get channel(): $Channel;
        get sound(): $SoundInstance;
    }
    export class $PlaySoundSourceEvent extends $SoundEvent$SoundSourceEvent {
        constructor(arg0: $SoundEngine, arg1: $SoundInstance, arg2: $Channel);
    }
    export class $SoundEngineLoadEvent extends $SoundEvent implements $IModBusEvent {
        constructor(arg0: $SoundEngine);
    }
    export class $SoundEvent extends $Event {
        getEngine(): $SoundEngine;
        get engine(): $SoundEngine;
    }
    export class $PlaySoundEvent extends $SoundEvent {
        getName(): string;
        getSound(): $SoundInstance;
        getOriginalSound(): $SoundInstance;
        setSound(arg0: $SoundInstance): void;
        constructor(arg0: $SoundEngine, arg1: $SoundInstance);
        get name(): string;
        get originalSound(): $SoundInstance;
    }
    export class $PlayStreamingSourceEvent extends $SoundEvent$SoundSourceEvent {
        constructor(arg0: $SoundEngine, arg1: $SoundInstance, arg2: $Channel);
    }
}
