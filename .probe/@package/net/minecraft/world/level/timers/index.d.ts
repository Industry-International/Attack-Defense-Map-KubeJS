import { $Stream } from "@package/java/util/stream";
import { $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UnsignedLong } from "@package/com/google/common/primitives";
import { $Set } from "@package/java/util";
import { $Class } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/timers" {
    export class $TimerQueue$Event<T> {
        callback: $TimerCallback<T>;
        id: string;
        triggerTime: number;
        sequentialId: $UnsignedLong;
        constructor(arg0: number, arg1: $UnsignedLong, arg2: string, arg3: $TimerCallback_<T>);
    }
    export class $TimerCallback$Serializer<T, C extends $TimerCallback<T>> {
        getId(): $ResourceLocation;
        deserialize(arg0: $CompoundTag_): C;
        serialize(arg0: $CompoundTag_, arg1: C): void;
        getCls(): $Class<never>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<never>);
        get id(): $ResourceLocation;
        get cls(): $Class<never>;
    }
    export class $FunctionCallback implements $TimerCallback<$MinecraftServer> {
        handle(arg0: $MinecraftServer, arg1: $TimerQueue<$MinecraftServer>, arg2: number): void;
        functionId: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FunctionCallback$Serializer extends $TimerCallback$Serializer<$MinecraftServer, $FunctionCallback> {
        serialize(arg0: $CompoundTag_, arg1: $FunctionCallback): void;
        constructor();
    }
    export class $TimerQueue<T> {
        remove(arg0: string): number;
        store(): $ListTag;
        schedule(arg0: string, arg1: number, arg2: $TimerCallback_<T>): void;
        tick(arg0: T, arg1: number): void;
        getEventsIds(): $Set<string>;
        constructor(arg0: $TimerCallbacks<T>, arg1: $Stream<$Dynamic<never>>);
        constructor(arg0: $TimerCallbacks<T>);
        get eventsIds(): $Set<string>;
    }
    export class $TimerCallbacks<C> {
        register(arg0: $TimerCallback$Serializer<C, never>): $TimerCallbacks<C>;
        deserialize(arg0: $CompoundTag_): $TimerCallback<C>;
        serialize<T extends $TimerCallback<C>>(arg0: T): $CompoundTag;
        static SERVER_CALLBACKS: $TimerCallbacks<$MinecraftServer>;
        constructor();
    }
    export class $TimerCallback<T> {
    }
    export interface $TimerCallback<T> {
        handle(arg0: T, arg1: $TimerQueue<T>, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $TimerCallback}.
     */
    export type $TimerCallback_<T> = ((arg0: T, arg1: $TimerQueue<T>, arg2: number) => void);
    export class $FunctionTagCallback implements $TimerCallback<$MinecraftServer> {
        handle(arg0: $MinecraftServer, arg1: $TimerQueue<$MinecraftServer>, arg2: number): void;
        tagId: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FunctionTagCallback$Serializer extends $TimerCallback$Serializer<$MinecraftServer, $FunctionTagCallback> {
        serialize(arg0: $CompoundTag_, arg1: $FunctionTagCallback): void;
        constructor();
    }
}
