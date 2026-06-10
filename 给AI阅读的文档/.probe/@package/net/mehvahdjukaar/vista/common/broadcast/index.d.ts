import { $Level_ } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $GlobalPos } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IBroadcastSource } from "@package/net/mehvahdjukaar/vista/common/cassette";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/vista/common/broadcast" {
    export class $TriResult<T> {
        getValue(): T;
        isEmpty(): boolean;
        static empty<T>(): $TriResult<T>;
        static valid<T>(arg0: T): $TriResult<T>;
        ifPresent(arg0: $Consumer_<T>): void;
        static invalid<T>(): $TriResult<T>;
        isValid(): boolean;
        ifValid(arg0: $Consumer_<T>): void;
        constructor();
        get value(): T;
    }
    export class $IBroadcastLocation {
        static CODEC: $Codec<$IBroadcastLocation>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IBroadcastLocation>;
    }
    export interface $IBroadcastLocation {
        get(arg0: boolean): $TriResult<$IBroadcastSource>;
        type(): $BroadcastLocationType;
        getTooltipComponent(arg0: $Level_): $MutableComponent;
        getChunkSendPosition(): $GlobalPos;
        get chunkSendPosition(): $GlobalPos;
    }
    export class $BroadcastLocationType extends $Record {
        codec(): $MapCodec<$IBroadcastLocation>;
        streamCodec(): $StreamCodec<$ByteBuf, $IBroadcastLocation>;
        constructor(codec: $MapCodec_<$IBroadcastLocation>, streamCodec: $StreamCodec<$ByteBuf, $IBroadcastLocation>);
    }
    /**
     * Values that may be interpreted as {@link $BroadcastLocationType}.
     */
    export type $BroadcastLocationType_ = RegistryTypes.VistaBroadcastLocation;
    export interface $BroadcastLocationType extends RegistryMarked<RegistryTypes.VistaBroadcastLocationTag, RegistryTypes.VistaBroadcastLocation> {}
}
