import { $JsonObject_, $JsonElement_ } from "@package/com/google/gson";
import { $TagManager, $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $Decoder, $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $MapCodec, $Encoder, $Decoder$Terminal, $MapDecoder } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $RegistryOps$RegistryInfoLookup, $RegistryOps, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/common/conditions" {
    export class $OrCondition extends $Record implements $ICondition {
        values(): $List<$ICondition>;
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$OrCondition>;
        constructor(values: $List_<$ICondition>);
    }
    export class $WithConditions$Builder<T> {
        build(): $WithConditions<T>;
        addCondition(...arg0: $ICondition[]): $WithConditions$Builder<T>;
        addCondition(arg0: $Collection_<$ICondition>): $WithConditions$Builder<T>;
        withCarrier(arg0: T): $WithConditions$Builder<T>;
        constructor();
    }
    export class $TagEmptyCondition extends $Record implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        tag(): $TagKey<$Item>;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$TagEmptyCondition>;
        constructor(tag: $TagKey_<$Item>);
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: string, arg1: string);
        constructor(arg0: string);
    }
    export class $ConditionalOps$ConditionalEncoder<A> implements $Encoder<($WithConditions<A>) | undefined> {
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: ($WithConditions_<A>) | undefined): $DataResult<T>;
        withLifecycle(arg0: $Lifecycle): $Encoder<($WithConditions<A>) | undefined>;
        comap<B>(arg0: $Function_<B, ($WithConditions<A>) | undefined>): $Encoder<B>;
        fieldOf(arg0: string): $MapEncoder<($WithConditions<A>) | undefined>;
        flatComap<B>(arg0: $Function_<B, $DataResult<($WithConditions<A>) | undefined>>): $Encoder<B>;
    }
    export class $FalseCondition implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$FalseCondition>;
        static INSTANCE: $FalseCondition;
    }
    export class $ConditionalOps<T> extends $RegistryOps<T> {
        static createConditionalCodecWithConditions<T>(arg0: $Codec<T>, arg1: string): $Codec<($WithConditions<T>) | undefined>;
        static createConditionalCodecWithConditions<T>(arg0: $Codec<T>): $Codec<($WithConditions<T>) | undefined>;
        static createConditionalCodec<T>(arg0: $Codec<T>, arg1: string): $Codec<(T) | undefined>;
        static createConditionalCodec<T>(arg0: $Codec<T>): $Codec<(T) | undefined>;
        static retrieveContext(): $MapCodec<$ICondition$IContext>;
        static decodeListWithElementConditions<T>(arg0: $Codec<T>): $Codec<$List<T>>;
        delegate: $DynamicOps<T>;
        static DEFAULT_CONDITIONS_KEY: string;
        lookupProvider: $RegistryOps$RegistryInfoLookup;
        static CONDITIONAL_VALUE_KEY: string;
        constructor(arg0: $RegistryOps<T>, arg1: $ICondition$IContext_);
    }
    export class $WithConditions<A> extends $Record {
        static builder<A>(arg0: A): $WithConditions$Builder<A>;
        carrier(): A;
        conditions(): $List<$ICondition>;
        constructor(conditions: $List_<$ICondition>, carrier: A);
        constructor(arg0: A);
        constructor(arg0: A, ...arg1: $ICondition[]);
    }
    export class $ConditionalOps$ConditionalDecoder<A> implements $Decoder<($WithConditions<A>) | undefined> {
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<($WithConditions<A>) | undefined, T>>;
        map<B>(arg0: $Function_<($WithConditions<A>) | undefined, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<($WithConditions<A>) | undefined, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<($WithConditions<A>) | undefined>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<($WithConditions<A>) | undefined>;
        boxed(): $Decoder$Boxed<($WithConditions<A>) | undefined>;
        terminal(): $Decoder$Terminal<($WithConditions<A>) | undefined>;
        withLifecycle(arg0: $Lifecycle): $Decoder<($WithConditions<A>) | undefined>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<($WithConditions<A>) | undefined>;
        fieldOf(arg0: string): $MapDecoder<($WithConditions<A>) | undefined>;
        simple(): $Decoder$Simple<($WithConditions<A>) | undefined>;
    }
    export class $NotCondition extends $Record implements $ICondition {
        value(): $ICondition;
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$NotCondition>;
        constructor(value: $ICondition);
    }
    export class $ICondition {
        static getWithConditionalCodec<V, T>(arg0: $Codec<(T) | undefined>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static getWithWithConditionsCodec<V, T>(arg0: $Codec<($WithConditions_<T>) | undefined>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static getConditionally<V, T>(arg0: $Codec<T>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static writeConditions(arg0: $DynamicOps<$JsonElement_>, arg1: $JsonObject_, arg2: $List_<$ICondition>): void;
        static writeConditions(arg0: $HolderLookup$Provider, arg1: $JsonObject_, ...arg2: $ICondition[]): void;
        static writeConditions(arg0: $HolderLookup$Provider, arg1: $JsonObject_, arg2: $List_<$ICondition>): void;
        static conditionsMatched<V>(arg0: $DynamicOps<V>, arg1: V): boolean;
        static CODEC: $Codec<$ICondition>;
        static LIST_CODEC: $Codec<$List<$ICondition>>;
    }
    export interface $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
    }
    export class $ConditionContext implements $ICondition$IContext {
        getAllTags<T>(arg0: $ResourceKey_<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        getTag<T>(arg0: $TagKey_<T>): $Collection<$Holder<T>>;
        constructor(arg0: $TagManager);
    }
    export class $ItemExistsCondition implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        getItem(): $ResourceLocation;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$ItemExistsCondition>;
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: string, arg1: string);
        constructor(arg0: string);
        get item(): $ResourceLocation;
    }
    export class $ICondition$IContext {
        static TAGS_INVALID: $ICondition$IContext;
        static EMPTY: $ICondition$IContext;
    }
    export interface $ICondition$IContext {
        getTag<T>(arg0: $TagKey_<T>): $Collection<$Holder<T>>;
        getAllTags<T>(arg0: $ResourceKey_<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
    }
    /**
     * Values that may be interpreted as {@link $ICondition$IContext}.
     */
    export type $ICondition$IContext_ = ((arg0: $ResourceKey<$Registry<any>>) => $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>);
    export class $ModLoadedCondition extends $Record implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        modid(): string;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$ModLoadedCondition>;
        constructor(modid: string);
    }
    export class $TrueCondition implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$TrueCondition>;
        static INSTANCE: $TrueCondition;
    }
    export class $AndCondition extends $Record implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        children(): $List<$ICondition>;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$AndCondition>;
        constructor(children: $List_<$ICondition>);
    }
    export class $IConditionBuilder {
    }
    export interface $IConditionBuilder {
        TRUE(): $ICondition;
        FALSE(): $ICondition;
        or(...arg0: $ICondition[]): $ICondition;
        and(...arg0: $ICondition[]): $ICondition;
        not(arg0: $ICondition): $ICondition;
        modLoaded(arg0: string): $ICondition;
        itemExists(arg0: string, arg1: string): $ICondition;
        tagEmpty(arg0: $TagKey_<$Item>): $ICondition;
    }
}
