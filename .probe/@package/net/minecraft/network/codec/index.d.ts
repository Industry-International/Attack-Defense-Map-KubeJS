import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $NbtAccounter, $Tag } from "@package/net/minecraft/nbt";
import { $Function4_, $Function6_, $Function5_, $Function3_, $Either } from "@package/com/mojang/datafixers/util";
import { $List, $Map, $List_, $Collection } from "@package/java/util";
import { $UnaryOperator_, $IntFunction_, $Supplier_, $Function_, $BiFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $Registry, $HolderSet, $IdMap, $Holder } from "@package/net/minecraft/core";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/network/codec" {
    export class $StreamCodec<B, V> {
        static of<B, V>(arg0: $StreamEncoder_<B, V>, arg1: $StreamDecoder_<B, V>): $StreamCodec<B, V>;
        static unit<B, V>(arg0: V): $StreamCodec<B, V>;
        static recursive<B, T>(arg0: $UnaryOperator_<$StreamCodec<B, T>>): $StreamCodec<B, T>;
        static composite<B, C, T1, T2, T3, T4, T5>(arg0: $StreamCodec<B, T1>, arg1: $Function_<C, T1>, arg2: $StreamCodec<B, T2>, arg3: $Function_<C, T2>, arg4: $StreamCodec<B, T3>, arg5: $Function_<C, T3>, arg6: $StreamCodec<B, T4>, arg7: $Function_<C, T4>, arg8: $StreamCodec<B, T5>, arg9: $Function_<C, T5>, arg10: $Function5_<T1, T2, T3, T4, T5, C>): $StreamCodec<B, C>;
        static composite<B, C, T1>(arg0: $StreamCodec<B, T1>, arg1: $Function_<C, T1>, arg2: $Function_<T1, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3, T4, T5, T6>(arg0: $StreamCodec<B, T1>, arg1: $Function_<C, T1>, arg2: $StreamCodec<B, T2>, arg3: $Function_<C, T2>, arg4: $StreamCodec<B, T3>, arg5: $Function_<C, T3>, arg6: $StreamCodec<B, T4>, arg7: $Function_<C, T4>, arg8: $StreamCodec<B, T5>, arg9: $Function_<C, T5>, arg10: $StreamCodec<B, T6>, arg11: $Function_<C, T6>, arg12: $Function6_<T1, T2, T3, T4, T5, T6, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3>(arg0: $StreamCodec<B, T1>, arg1: $Function_<C, T1>, arg2: $StreamCodec<B, T2>, arg3: $Function_<C, T2>, arg4: $StreamCodec<B, T3>, arg5: $Function_<C, T3>, arg6: $Function3_<T1, T2, T3, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2>(arg0: $StreamCodec<B, T1>, arg1: $Function_<C, T1>, arg2: $StreamCodec<B, T2>, arg3: $Function_<C, T2>, arg4: $BiFunction_<T1, T2, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3, T4>(arg0: $StreamCodec<B, T1>, arg1: $Function_<C, T1>, arg2: $StreamCodec<B, T2>, arg3: $Function_<C, T2>, arg4: $StreamCodec<B, T3>, arg5: $Function_<C, T3>, arg6: $StreamCodec<B, T4>, arg7: $Function_<C, T4>, arg8: $Function4_<T1, T2, T3, T4, C>): $StreamCodec<B, C>;
        static ofMember<B, V>(arg0: $StreamMemberEncoder_<B, V>, arg1: $StreamDecoder_<B, V>): $StreamCodec<B, V>;
    }
    export interface $StreamCodec<B, V> extends $StreamDecoder<B, V>, $StreamEncoder<B, V> {
        dispatch<U>(arg0: $Function_<U, V>, arg1: $Function_<V, $StreamCodec<B, U>>): $StreamCodec<B, U>;
        cast<S extends B>(): $StreamCodec<S, V>;
        apply<O>(arg0: $StreamCodec$CodecOperation_<B, V, O>): $StreamCodec<B, O>;
        map<O>(arg0: $Function_<V, O>, arg1: $Function_<O, V>): $StreamCodec<B, O>;
        mapStream<O extends $ByteBuf>(arg0: $Function_<O, B>): $StreamCodec<O, V>;
    }
    export class $IdDispatchCodec$Builder<B extends $ByteBuf, V, T> {
        add(arg0: T, arg1: $StreamCodec<B, V>): $IdDispatchCodec$Builder<B, V, T>;
        build(): $IdDispatchCodec<B, V, T>;
        constructor(arg0: $Function_<V, T>);
    }
    export class $StreamMemberEncoder<O, T> {
    }
    export interface $StreamMemberEncoder<O, T> {
        encode(arg0: T, arg1: O): void;
    }
    /**
     * Values that may be interpreted as {@link $StreamMemberEncoder}.
     */
    export type $StreamMemberEncoder_<O, T> = ((arg0: T, arg1: O) => void);
    export class $StreamEncoder<O, T> {
    }
    export interface $StreamEncoder<O, T> {
        encode(arg0: O, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $StreamEncoder}.
     */
    export type $StreamEncoder_<O, T> = ((arg0: O, arg1: T) => void);
    export class $IdDispatchCodec$Entry<B, V, T> extends $Record {
        type(): T;
        serializer(): $StreamCodec<B, V>;
        constructor(arg0: $StreamCodec<B, V>, arg1: T);
    }
    export class $IdDispatchCodec<B extends $ByteBuf, V, T> implements $StreamCodec<B, V> {
        decode(arg0: B): V;
        encode(arg0: B, arg1: V): void;
        static builder<B extends $ByteBuf, V, T>(arg0: $Function_<V, T>): $IdDispatchCodec$Builder<B, V, T>;
        dispatch<U>(arg0: $Function_<U, V>, arg1: $Function_<V, $StreamCodec<B, U>>): $StreamCodec<B, U>;
        cast<S extends B>(): $StreamCodec<S, V>;
        apply<O>(arg0: $StreamCodec$CodecOperation_<B, V, O>): $StreamCodec<B, O>;
        map<O>(arg0: $Function_<V, O>, arg1: $Function_<O, V>): $StreamCodec<B, O>;
        mapStream<O extends $ByteBuf>(arg0: $Function_<O, B>): $StreamCodec<O, V>;
        byId: $List<$IdDispatchCodec$Entry<B, V, V>>;
        constructor(arg0: $Function_<V, V>, arg1: $List_<$IdDispatchCodec$Entry_<B, V, V>>, arg2: $Object2IntMap<V>);
    }
    export class $StreamDecoder<I, T> {
    }
    export interface $StreamDecoder<I, T> {
        decode(arg0: I): T;
    }
    /**
     * Values that may be interpreted as {@link $StreamDecoder}.
     */
    export type $StreamDecoder_<I, T> = ((arg0: I) => T);
    export class $StreamCodec$CodecOperation<B, S, T> {
    }
    export interface $StreamCodec$CodecOperation<B, S, T> {
        apply(arg0: $StreamCodec<B, S>): $StreamCodec<B, T>;
    }
    /**
     * Values that may be interpreted as {@link $StreamCodec$CodecOperation}.
     */
    export type $StreamCodec$CodecOperation_<B, S, T> = ((arg0: $StreamCodec<B, S>) => $StreamCodec<B, T>);
    export class $ByteBufCodecs {
        static map<B extends $ByteBuf, K, V, M extends $Map<K, V>>(arg0: $IntFunction_<M>, arg1: $StreamCodec<B, K>, arg2: $StreamCodec<B, V>): $StreamCodec<B, M>;
        static map<B extends $ByteBuf, K, V, M extends $Map<K, V>>(arg0: $IntFunction_<M>, arg1: $StreamCodec<B, K>, arg2: $StreamCodec<B, V>, arg3: number): $StreamCodec<B, M>;
        static list<B extends $ByteBuf, V>(arg0: number): $StreamCodec$CodecOperation<B, V, $List<V>>;
        static list<B extends $ByteBuf, V>(): $StreamCodec$CodecOperation<B, V, $List<V>>;
        static holder<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>): $StreamCodec<$RegistryFriendlyByteBuf, $Holder<T>>;
        static optional<B extends $ByteBuf, V>(arg0: $StreamCodec<B, V>): $StreamCodec<B, (V) | undefined>;
        static byteArray(arg0: number): $StreamCodec<$ByteBuf, number[]>;
        static collection<B extends $ByteBuf, V, C extends $Collection<V>>(arg0: $IntFunction_<C>): $StreamCodec$CodecOperation<B, V, C>;
        static collection<B extends $ByteBuf, V, C extends $Collection<V>>(arg0: $IntFunction_<C>, arg1: $StreamCodec<B, V>): $StreamCodec<B, C>;
        static collection<B extends $ByteBuf, V, C extends $Collection<V>>(arg0: $IntFunction_<C>, arg1: $StreamCodec<B, V>, arg2: number): $StreamCodec<B, C>;
        static readCount(arg0: $ByteBuf, arg1: number): number;
        static registry<T>(arg0: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static either<B extends $ByteBuf, L, R>(arg0: $StreamCodec<B, L>, arg1: $StreamCodec<B, R>): $StreamCodec<B, $Either<L, R>>;
        static fromCodecTrusted<T>(arg0: $Codec<T>): $StreamCodec<$ByteBuf, T>;
        static compoundTagCodec(arg0: $Supplier_<$NbtAccounter>): $StreamCodec<$ByteBuf, $CompoundTag>;
        static holderRegistry<T>(arg0: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $Holder<T>>;
        static fromCodec<T>(arg0: $Codec<T>, arg1: $Supplier_<$NbtAccounter>): $StreamCodec<$ByteBuf, T>;
        static fromCodec<T>(arg0: $Codec<T>): $StreamCodec<$ByteBuf, T>;
        static writeCount(arg0: $ByteBuf, arg1: number, arg2: number): void;
        static stringUtf8(arg0: number): $StreamCodec<$ByteBuf, string>;
        static tagCodec(arg0: $Supplier_<$NbtAccounter>): $StreamCodec<$ByteBuf, $Tag>;
        static idMapper<T>(arg0: $IdMap<T>): $StreamCodec<$ByteBuf, T>;
        static idMapper<T>(arg0: $IntFunction_<T>, arg1: $ToIntFunction_<T>): $StreamCodec<$ByteBuf, T>;
        static holderSet<T>(arg0: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $HolderSet<T>>;
        static fromCodecWithRegistries<T>(arg0: $Codec<T>, arg1: $Supplier_<$NbtAccounter>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static fromCodecWithRegistries<T>(arg0: $Codec<T>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static fromCodecWithRegistriesTrusted<T>(arg0: $Codec<T>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static FLOAT: $StreamCodec<$ByteBuf, number>;
        static QUATERNIONF: $StreamCodec<$ByteBuf, $Quaternionf>;
        static BYTE_ARRAY: $StreamCodec<$ByteBuf, number[]>;
        static VAR_INT: $StreamCodec<$ByteBuf, number>;
        static TRUSTED_TAG: $StreamCodec<$ByteBuf, $Tag>;
        static INT: $StreamCodec<$ByteBuf, number>;
        static STRING_UTF8: $StreamCodec<$ByteBuf, string>;
        static SHORT: $StreamCodec<$ByteBuf, number>;
        static VAR_LONG: $StreamCodec<$ByteBuf, number>;
        static UNSIGNED_SHORT: $StreamCodec<$ByteBuf, number>;
        static OPTIONAL_COMPOUND_TAG: $StreamCodec<$ByteBuf, ($CompoundTag) | undefined>;
        static GAME_PROFILE: $StreamCodec<$ByteBuf, $GameProfile>;
        static MAX_INITIAL_COLLECTION_SIZE: number;
        static BOOL: $StreamCodec<$ByteBuf, boolean>;
        static TRUSTED_COMPOUND_TAG: $StreamCodec<$ByteBuf, $CompoundTag>;
        static BYTE: $StreamCodec<$ByteBuf, number>;
        static COMPOUND_TAG: $StreamCodec<$ByteBuf, $CompoundTag>;
        static GAME_PROFILE_PROPERTIES: $StreamCodec<$ByteBuf, $PropertyMap>;
        static VECTOR3F: $StreamCodec<$ByteBuf, $Vector3f>;
        static DOUBLE: $StreamCodec<$ByteBuf, number>;
        static TAG: $StreamCodec<$ByteBuf, $Tag>;
    }
    export interface $ByteBufCodecs {
    }
}
