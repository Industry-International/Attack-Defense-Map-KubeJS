import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Lifecycle, $Decoder, $Dynamic, $Decoder$Simple, $Codec$ResultFunction, $DataResult, $MapEncoder, $MapCodec, $DynamicOps, $Encoder, $Decoder$Terminal, $Codec, $Decoder$Boxed } from "@package/com/mojang/serialization";
import { $Pair, $Function8_, $Function9_ } from "@package/com/mojang/datafixers/util";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $List, $Map, $List_ } from "@package/java/util";
import { $Duration } from "@package/java/time";
import { $Consumer_, $UnaryOperator_, $Predicate_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $EnumTypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Registry } from "@package/net/minecraft/core";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Throwable, $Enum, $Record, $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/codec" {
    export class $OrCodec<V> extends $Record implements $Codec<V> {
        decode<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Pair<V, T>>;
        encode<T>(input: V, ops: $DynamicOps<T>, prefix: T): $DataResult<T>;
        codecs(): $List<$Codec<V>>;
        dispatch<E>(arg0: string, arg1: $Function_<E, V>, arg2: $Function_<V, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<V, $DataResult<V>>): $Codec<V>;
        orElse(arg0: $UnaryOperator_<string>, arg1: V): $Codec<V>;
        orElse(arg0: V): $Codec<V>;
        orElse(arg0: $Consumer_<string>, arg1: V): $Codec<V>;
        orElseGet(arg0: $Supplier_<V>): $Codec<V>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<V>): $Codec<V>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<V>): $Codec<V>;
        listOf(): $Codec<$List<V>>;
        listOf(arg0: number, arg1: number): $Codec<$List<V>>;
        deprecated(arg0: number): $Codec<V>;
        mapResult(arg0: $Codec$ResultFunction<V>): $Codec<V>;
        flatXmap<S>(arg0: $Function_<V, $DataResult<S>>, arg1: $Function_<S, $DataResult<V>>): $Codec<S>;
        xmap<S>(arg0: $Function_<V, S>, arg1: $Function_<S, V>): $Codec<S>;
        stable(): $Codec<V>;
        lenientOptionalFieldOf(arg0: string, arg1: V): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string, arg1: V, arg2: $Lifecycle): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: V, arg3: $Lifecycle): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(V) | undefined>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, V>, arg2: $Function_<V, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $MapCodec<E>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<V>>, arg2: $Function_<V, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchStable<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $Codec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<V>>;
        flatComapMap<S>(arg0: $Function_<V, S>, arg1: $Function_<S, $DataResult<V>>): $Codec<S>;
        comapFlatMap<S>(arg0: $Function_<V, $DataResult<S>>, arg1: $Function_<S, V>): $Codec<S>;
        withLifecycle(arg0: $Lifecycle): $Codec<V>;
        optionalFieldOf(arg0: string, arg1: V, arg2: $Lifecycle): $MapCodec<V>;
        optionalFieldOf(arg0: string, arg1: V): $MapCodec<V>;
        optionalFieldOf(arg0: string): $MapCodec<(V) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: V, arg3: $Lifecycle): $MapCodec<V>;
        comap<B>(arg0: $Function_<B, V>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<V>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: V): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<V, T>>;
        map<B>(arg0: $Function_<V, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<V, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<V>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<V>;
        boxed(): $Decoder$Boxed<V>;
        terminal(): $Decoder$Terminal<V>;
        simple(): $Decoder$Simple<V>;
        fieldOf(arg0: string): $MapEncoder<V>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<V>;
        constructor(codecs: $List_<$Codec<V>>);
    }
    export class $KubeJSCodecs {
        static filter<T>(result: $DataResult<T>, ifSuccess: $Predicate_<T>, orElse: boolean): boolean;
        static filter<T>(result: $DataResult<T>, ifSuccess: $Predicate_<T>): boolean;
        static or<V>(first: $Codec<V>, second: $Codec<V>): $Codec<V>;
        static or<V>(codecs: $List_<$Codec<V>>): $Codec<V>;
        static byName<E extends $Enum<E>>(codec: $Codec<E>, s: string): E;
        static stringResolverCodec<E>(toStringFunction: $Function_<E, string>, fromStringFunction: $Function_<string, E>): $Codec<E>;
        static longRangeWithMessage(min: number, max: number, errorMessage: $Function_<number, string>): $Codec<number>;
        static fromJsonOrThrow<E>(json: $JsonElement_, codec: $Codec<E>): E;
        static fromJsonOrThrow<E, X extends $Throwable>(json: $JsonElement_, codec: $Codec<E>, onError: $Function_<string, X>): E;
        static listOfOrSelf<T>(codec: $Codec<T>): $Codec<$List<T>>;
        static listOfOrSelf<T>(listCodec: $Codec<$List_<T>>, codec: $Codec<T>): $Codec<$List<T>>;
        static toJsonOrThrow<E, X extends $Throwable>(value: E, codec: $Codec<E>, onError: $Function_<string, X>): $JsonElement;
        static toJsonOrThrow<E>(value: E, codec: $Codec<E>): $JsonElement;
        static numberProviderJson(gen: $NumberProvider_): $JsonElement;
        static getUniqueId<T>(input: T, codec: $Codec<T>): string;
        static KUBEJS_ID: $Codec<$ResourceLocation>;
        static NON_NEGATIVE_DOUBLE: $Codec<number>;
        static POSITIVE_FLOAT: $Codec<number>;
        static ENUM_CLASS: $Codec<$Class<never>>;
        static POSITIVE_INT: $Codec<number>;
        static NON_NEGATIVE_FLOAT: $Codec<number>;
        static REGISTRY_KEY: $Codec<$ResourceKey<$Registry<never>>>;
        static REGISTRY_KEY_CODEC: $Codec<$ResourceKey<$Registry<never>>>;
        static JSON_MAP: $Codec<$Map<string, $JsonElement>>;
        static ENTITY_TYPE_FIELD: $MapCodec<$EntityType<never>>;
        static ENUM_TYPE_INFO: $Codec<$EnumTypeInfo>;
        static NON_NEGATIVE_INT: $Codec<number>;
        static POSITIVE_LONG: $Codec<number>;
        static NON_NEGATIVE_LONG: $Codec<number>;
        static CHARACTER: $Codec<string>;
        static POSITIVE_DOUBLE: $Codec<number>;
        static DURATION: $Codec<$Duration>;
    }
    export interface $KubeJSCodecs {
    }
    export class $KubeJSStreamCodecs {
        static composite<B, C, T1, T2, T3, T4, T5, T6, T7, T8, T9>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, codec5: $StreamCodec<B, T5>, getter5: $Function_<C, T5>, codec6: $StreamCodec<B, T6>, getter6: $Function_<C, T6>, codec7: $StreamCodec<B, T7>, getter7: $Function_<C, T7>, codec8: $StreamCodec<B, T8>, getter8: $Function_<C, T8>, codec9: $StreamCodec<B, T9>, getter9: $Function_<C, T9>, func: $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3, T4, T5, T6, T7, T8>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, codec5: $StreamCodec<B, T5>, getter5: $Function_<C, T5>, codec6: $StreamCodec<B, T6>, getter6: $Function_<C, T6>, codec7: $StreamCodec<B, T7>, getter7: $Function_<C, T7>, codec8: $StreamCodec<B, T8>, getter8: $Function_<C, T8>, func: $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, C>): $StreamCodec<B, C>;
        static KUBEJS_ID: $StreamCodec<$RegistryFriendlyByteBuf, $ResourceLocation>;
        static JSON_ELEMENT: $StreamCodec<$ByteBuf, $JsonElement>;
        static DURATION: $StreamCodec<$ByteBuf, $Duration>;
        static INT_PROVIDER: $StreamCodec<$RegistryFriendlyByteBuf, $IntProvider>;
    }
    export interface $KubeJSStreamCodecs {
    }
}
