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
        constructor(triggerTime: number, arg1: $UnsignedLong, sequentialId: string, id: $TimerCallback_<T>);
    }
    export class $TimerCallback$Serializer<T, C extends $TimerCallback<T>> {
        getId(): $ResourceLocation;
        serialize(tag: $CompoundTag_, callback: C): void;
        deserialize(tag: $CompoundTag_): C;
        getCls(): $Class<never>;
        constructor(id: $ResourceLocation_, cls: $Class<never>);
        get id(): $ResourceLocation;
        get cls(): $Class<never>;
    }
    export class $FunctionCallback implements $TimerCallback<$MinecraftServer> {
        handle(obj: $MinecraftServer, manager: $TimerQueue<$MinecraftServer>, gameTime: number): void;
        functionId: $ResourceLocation;
        constructor(functionId: $ResourceLocation_);
    }
    export class $FunctionCallback$Serializer extends $TimerCallback$Serializer<$MinecraftServer, $FunctionCallback> {
        serialize(arg0: $CompoundTag_, arg1: $FunctionCallback): void;
        constructor();
    }
    export class $TimerQueue<T> {
        remove(eventId: string): number;
        store(): $ListTag;
        schedule(id: string, triggerTime: number, arg2: $TimerCallback_<T>): void;
        tick(obj: T, gameTime: number): void;
        getEventsIds(): $Set<string>;
        constructor(callbacksRegistry: $TimerCallbacks<T>, scheduledEventsDynamic: $Stream<$Dynamic<never>>);
        constructor(callbacksRegistry: $TimerCallbacks<T>);
        get eventsIds(): $Set<string>;
    }
    export class $TimerCallbacks<C> {
        register(serializer: $TimerCallback$Serializer<C, never>): $TimerCallbacks<C>;
        serialize<T extends $TimerCallback<C>>(callback: T): $CompoundTag;
        deserialize(tag: $CompoundTag_): $TimerCallback<C>;
        static SERVER_CALLBACKS: $TimerCallbacks<$MinecraftServer>;
        constructor();
    }
    export class $TimerCallback<T> {
    }
    export interface $TimerCallback<T> {
        handle(obj: T, manager: $TimerQueue<T>, gameTime: number): void;
    }
    /**
     * Values that may be interpreted as {@link $TimerCallback}.
     */
    export type $TimerCallback_<T> = ((arg0: T, arg1: $TimerQueue<T>, arg2: number) => void);
    export class $FunctionTagCallback implements $TimerCallback<$MinecraftServer> {
        handle(obj: $MinecraftServer, manager: $TimerQueue<$MinecraftServer>, gameTime: number): void;
        tagId: $ResourceLocation;
        constructor(tagId: $ResourceLocation_);
    }
    export class $FunctionTagCallback$Serializer extends $TimerCallback$Serializer<$MinecraftServer, $FunctionTagCallback> {
        serialize(arg0: $CompoundTag_, arg1: $FunctionTagCallback): void;
        constructor();
    }
}
