import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Function7_ } from "@package/com/mojang/datafixers/util";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec, $StreamCodec$CodecOperation_ } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/network/codec" {
    export class $NeoForgeStreamCodecs$LazyStreamCodec<B, V> implements $StreamCodec<B, V> {
        dispatch<U>(arg0: $Function_<U, V>, arg1: $Function_<V, $StreamCodec<B, U>>): $StreamCodec<B, U>;
        cast<S extends B>(): $StreamCodec<S, V>;
        apply<O>(arg0: $StreamCodec$CodecOperation_<B, V, O>): $StreamCodec<B, O>;
        map<O>(arg0: $Function_<V, O>, arg1: $Function_<O, V>): $StreamCodec<B, O>;
        mapStream<O extends $ByteBuf>(arg0: $Function_<O, B>): $StreamCodec<O, V>;
    }
    export class $NeoForgeStreamCodecs {
        static lazy<B, V>(arg0: $Supplier_<$StreamCodec<B, V>>): $StreamCodec<B, V>;
        static composite<B, C, T1, T2, T3, T4, T5, T6, T7>(arg0: $StreamCodec<B, T1>, arg1: $Function_<C, T1>, arg2: $StreamCodec<B, T2>, arg3: $Function_<C, T2>, arg4: $StreamCodec<B, T3>, arg5: $Function_<C, T3>, arg6: $StreamCodec<B, T4>, arg7: $Function_<C, T4>, arg8: $StreamCodec<B, T5>, arg9: $Function_<C, T5>, arg10: $StreamCodec<B, T6>, arg11: $Function_<C, T6>, arg12: $StreamCodec<B, T7>, arg13: $Function_<C, T7>, arg14: $Function7_<T1, T2, T3, T4, T5, T6, T7, C>): $StreamCodec<B, C>;
        static uncheckedUnit<B, V>(arg0: V): $StreamCodec<B, V>;
        static connectionAware<V>(arg0: $StreamCodec<$RegistryFriendlyByteBuf, V>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, V>): $StreamCodec<$RegistryFriendlyByteBuf, V>;
        static registryKey<B extends $FriendlyByteBuf>(): $StreamCodec<B, $ResourceKey<$Registry<never>>>;
        static enumCodec<B extends $FriendlyByteBuf, V extends $Enum<V>>(arg0: $Class<V>): $StreamCodec<B, V>;
        static CHUNK_POS: $StreamCodec<$FriendlyByteBuf, $ChunkPos>;
        static UNBOUNDED_BYTE_ARRAY: $StreamCodec<$FriendlyByteBuf, number[]>;
        constructor();
    }
}
