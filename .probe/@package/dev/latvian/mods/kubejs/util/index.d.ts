import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $DataResult, $DynamicOps, $Codec, $MapCodec, $MapLike } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $TagType, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $KubeIcon_, $KubeIcon } from "@package/dev/latvian/mods/kubejs/client/icon";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Type } from "@package/java/lang/reflect";
import { $CustomJavaToJsWrapper } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $ScriptType_, $ScriptType, $ScriptTypePredicate, $BindingRegistry_ } from "@package/dev/latvian/mods/kubejs/script";
import { $Item_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $RegistryWrapper } from "@package/dev/latvian/mods/kubejs/plugin/builtin/wrapper";
import { $Duration_, $Duration } from "@package/java/time";
import { $CachedTagLookup, $CachedItemTagLookup, $CachedTagLookup$Entry } from "@package/dev/latvian/mods/kubejs/recipe";
import { $LegacyError } from "@package/dev/latvian/mods/kubejs/error";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Mutable } from "@package/org/apache/commons/lang3/mutable";
import { $RegistryObjectKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $JsonObject, $JsonElement_, $JsonArray, $JsonElement, $JsonPrimitive } from "@package/com/google/gson";
import { $Annotation } from "@package/java/lang/annotation";
import { $HashMap, $UUID_, $Map, $Map$Entry, $Set, $UUID, $List, $Map_, $LinkedList, $Collection_, $List_, $Collection, $Calendar } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Supplier_, $Consumer_, $Predicate_, $UnaryOperator, $Predicate, $BiConsumer, $BiConsumer_, $Function_, $UnaryOperator_, $BiFunction_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $Object2LongMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $RegistryAccess, $Registry, $Holder_, $RegistryAccess$Frozen, $Holder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $StringBuilder, $Comparable, $Record, $Class, $Object } from "@package/java/lang";
import { $PrintStream, $DataOutputStream } from "@package/java/io";
import { $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Pattern } from "@package/java/util/regex";
import { $TemporalAmount, $TemporalAmount_, $Temporal, $TemporalUnit } from "@package/java/time/temporal";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $NativeJavaMap, $Scriptable, $BaseFunction } from "@package/dev/latvian/mods/rhino";
import { $DamageSources } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as registrypredicate from "@package/dev/latvian/mods/kubejs/util/registrypredicate";

declare module "@package/dev/latvian/mods/kubejs/util" {
    export class $RegistryOpsContainer extends $OpsContainer {
        nbt(): $RegistryOps<$Tag>;
        static DEFAULT: $OpsContainer;
        constructor(nbt: $RegistryOps<$Tag_>, json: $RegistryOps<$JsonElement_>, java: $RegistryOps<$Object>);
    }
    export class $StringReaderFunction<T> {
    }
    export interface $StringReaderFunction<T> {
        read(reader: $StringReader): T;
    }
    /**
     * Values that may be interpreted as {@link $StringReaderFunction}.
     */
    export type $StringReaderFunction_<T> = ((reader: $StringReader) => T);
    export class $TinyMap<K, V> extends $Record {
        isEmpty(): boolean;
        toMap(): $Map<K, V>;
        entries(): $TinyMap$Entry<K, V>[];
        static ofMap<K, V>(map: $Map_<K, V>): $TinyMap<K, V>;
        constructor(entries: $TinyMap$Entry_<K, V>[]);
        constructor(map: $TinyMap_<K, V>);
        constructor(collection: $Collection_<$TinyMap$Entry_<K, V>>);
        get empty(): boolean;
    }
    export class $NameProvider$Registry<K, T> {
    }
    export interface $NameProvider$Registry<K, T> {
        register(key: K, provider: $NameProvider_<T>): void;
        register(keys: $List_<K>, provider: $NameProvider_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $NameProvider$Registry}.
     */
    export type $NameProvider$Registry_<K, T> = ((key: K, provider: $NameProvider<T>) => void);
    export class $ClassWrapper<T> extends $Record implements $CustomJavaToJsWrapper {
        convertJavaToJs(scope: $Scriptable, staticType: $TypeInfo_): $Scriptable;
        wrappedClass(): $Class<T>;
        constructor(wrappedClass: $Class<T>);
    }
    export class $TickDuration extends $Record implements $TemporalAmount {
        get(unit: $TemporalUnit): number;
        static wrap(from: $Object): $TickDuration;
        static of(ticks: number): $TickDuration;
        getUnits(): $List<$TemporalUnit>;
        addTo(temporal: $Temporal): $Temporal;
        subtractFrom(temporal: $Temporal): $Temporal;
        ticks(): number;
        intTicks(): number;
        static ZERO: $TickDuration;
        static CODEC: $Codec<$TickDuration>;
        static SECONDS_CODEC: $Codec<$TickDuration>;
        static MINUTES_CODEC: $Codec<$TickDuration>;
        static TYPE_INFO: $TypeInfo;
        static HOURS_CODEC: $Codec<$TickDuration>;
        constructor(ticks: number);
        get units(): $List<$TemporalUnit>;
    }
    /**
     * Values that may be interpreted as {@link $TickDuration}.
     */
    export type $TickDuration_ = number;
    export class $RecordDefaults {
        static init(): void;
        constructor();
    }
    export class $JsonIO {
        static toString(json: $JsonElement_): string;
        static toArray(element: $JsonElement_): $JsonArray;
        static write(path: $Path_, json: $JsonElement_): void;
        static read(path: $Path_): $Map<never, never>;
        static parse(string: string): $Object;
        static readString(path: $Path_): string;
        static toObject(json: $JsonElement_): $Object;
        static parseRaw(string: string): $JsonElement;
        static toPrettyString(json: $JsonElement_): string;
        static toPrimitive(element: $JsonElement_): $Object;
        static readJson(path: $Path_): $JsonElement;
        static getJsonHashString(json: $JsonElement_): string;
        static writeJsonHash(stream: $DataOutputStream, element: $JsonElement_): void;
        static getJsonHashBytes(json: $JsonElement_): number[];
        constructor();
    }
    export class $WrappedJS {
    }
    export interface $WrappedJS {
    }
    export class $ModResourceBindings {
        readBindings(modId: string, mod: $IModFile): void;
        addBindings(event: $BindingRegistry_): void;
        constructor();
    }
    export class $JSObjectType extends $Enum<$JSObjectType> {
        static values(): $JSObjectType[];
        static valueOf(name: string): $JSObjectType;
        checkList(): boolean;
        checkMap(): boolean;
        static ANY: $JSObjectType;
        static MAP: $JSObjectType;
        static LIST: $JSObjectType;
    }
    /**
     * Values that may be interpreted as {@link $JSObjectType}.
     */
    export type $JSObjectType_ = "any" | "map" | "list";
    export class $RotationAxis$Func {
    }
    export interface $RotationAxis$Func {
    }
    /**
     * Values that may be interpreted as {@link $RotationAxis$Func}.
     */
    export type $RotationAxis$Func_ = (() => void);
    export class $GlobalUnmodifiableMap<K, V> implements $Map<K, V>, $CustomJavaToJsWrapper {
        remove(key: $Object): V;
        remove(key: $Object): V;
        size(): number;
        get(key: $Object): V;
        put(key: K, value: V): V;
        put(key: K, value: V): V;
        values(): $Collection<V>;
        clear(): void;
        clear(): void;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(m: $Map_<K, V>): void;
        putAll(m: $Map_<K, V>): void;
        containsKey(key: $Object): boolean;
        keySet(): $Set<K>;
        containsValue(value: $Object): boolean;
        convertJavaToJs(scope: $Scriptable, staticType: $TypeInfo_): $Scriptable;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        constructor(map: $Map_<K, V>);
        get empty(): boolean;
    }
    export class $CachedComponentObject<T extends $RegistryObjectKJS<T>, S> extends $Record {
        stack(): S;
        value(): T;
        static of<T extends $RegistryObjectKJS<T>, S>(value: T, stack: S, components: $DataComponentPatch_): $CachedComponentObject<T, S>;
        cacheKey(): $UUID;
        components(): $DataComponentPatch;
        static writeCacheKey<T extends $RegistryObjectKJS<T>>(buf: $FriendlyByteBuf, value: T, components: $DataComponentPatch_): void;
        iconPath(): $Mutable<string>;
        static ofFluidStack(stack: $FluidStack_, visual: boolean): $CachedComponentObject<$Fluid, $FluidStack>;
        static ofItemStack(stack: $ItemStack_, visual: boolean): $CachedComponentObject<$Item, $ItemStack>;
        constructor(cacheKey: $UUID_, value: T, stack: S, components: $DataComponentPatch_, iconPath: $Mutable<string>);
    }
    export class $LogType extends $Enum<$LogType> {
        static values(): $LogType[];
        static valueOf(name: string): $LogType;
        static INIT: $LogType;
        callback: $BiConsumer<$Logger, string>;
        static ERROR: $LogType;
        static VALUES: $LogType[];
        id: string;
        static INFO: $LogType;
        static DEBUG: $LogType;
        static WARN: $LogType;
    }
    /**
     * Values that may be interpreted as {@link $LogType}.
     */
    export type $LogType_ = "init" | "debug" | "info" | "warn" | "error";
    export class $RegistryAccessContainer extends $RegistryOpsContainer implements $ICondition$IContext {
        static of(): $RegistryAccessContainer;
        access(): $RegistryAccess$Frozen;
        damageSources(): $DamageSources;
        getAllTags<T>(key: $ResourceKey_<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        wrapRegistry(id: $ResourceLocation_): $RegistryWrapper<never>;
        cacheTags<T>(registry: $Registry<T>, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        itemStackParseCache(): $Map<string, $ItemStack>;
        getTag<T>(arg0: $TagKey_<T>): $Collection<$Holder<T>>;
        static current: $RegistryAccessContainer;
        cachedBlockTags: $CachedTagLookup<$Block>;
        cachedFluidTags: $CachedTagLookup<$Fluid>;
        cachedItemTags: $CachedItemTagLookup;
        static BUILTIN: $RegistryAccessContainer;
        cachedRegistryTags: $Map<$ResourceKey<never>, $CachedTagLookup$Entry<never>>;
        static DEFAULT: $OpsContainer;
        constructor(access: $RegistryAccess$Frozen);
    }
    export class $NBTIOWrapper {
        static write(path: $Path_, nbt: $CompoundTag_): void;
        static read(path: $Path_): $CompoundTag;
    }
    export interface $NBTIOWrapper {
    }
    export class $TimeJS {
        static appendTimestamp(builder: $StringBuilder, calendar: $Calendar): void;
        static msToString(ms: number): string;
        static wrapTemporalAmount(o: $Object): $TemporalAmount;
        static readDuration(s: string): $DataResult<$Duration>;
        static wrapDuration(o: $Object): $Duration;
    }
    export interface $TimeJS {
    }
    export class $OrderedCompoundTag extends $CompoundTag {
        static CODEC: $Codec<$CompoundTag>;
        tagMap: $Map<string, $Tag>;
        static TYPE: $TagType<$CompoundTag>;
        tags: $Map<string, $Tag>;
        constructor(map: $Map_<string, $Tag_>);
        constructor();
    }
    export class $IngredientSupplier {
    }
    export interface $IngredientSupplier extends $Supplier<$Ingredient> {
        get(): $Ingredient;
    }
    /**
     * Values that may be interpreted as {@link $IngredientSupplier}.
     */
    export type $IngredientSupplier_ = (() => $Ingredient_);
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        toNBT(): $Tag;
    }
    /**
     * Values that may be interpreted as {@link $NBTSerializable}.
     */
    export type $NBTSerializable_ = (() => $Tag_);
    export class $NotificationToastData extends $Record {
        duration(): $Duration;
        text(): $Component;
        textShadow(): boolean;
        backgroundColor(): ($KubeColor) | undefined;
        icon(): ($KubeIcon) | undefined;
        outlineColor(): ($KubeColor) | undefined;
        static ofTitle(title: $Component_, text: $Component_): $NotificationToastData;
        iconSize(): number;
        static ofText(text: $Component_): $NotificationToastData;
        borderColor(): ($KubeColor) | undefined;
        static CODEC: $MapCodec<$NotificationToastData>;
        static DEFAULT_BORDER_COLOR: $KubeColor;
        static DEFAULT_BACKGROUND_COLOR: $KubeColor;
        static DEFAULT_DURATION: $Duration;
        static DEFAULT_OUTLINE_COLOR: $KubeColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $NotificationToastData>;
        constructor(duration: $Duration_, text: $Component_, icon: ($KubeIcon_) | undefined, iconSize: number, outlineColor: ($KubeColor_) | undefined, borderColor: ($KubeColor_) | undefined, backgroundColor: ($KubeColor_) | undefined, textShadow: boolean);
    }
    export class $WrappedJSObjectChangeListener<T> {
    }
    export interface $WrappedJSObjectChangeListener<T> {
        onChanged(o: T): void;
    }
    /**
     * Values that may be interpreted as {@link $WrappedJSObjectChangeListener}.
     */
    export type $WrappedJSObjectChangeListener_<T> = ((o: T) => void);
    export class $NativeJavaReadonlyMap extends $NativeJavaMap {
        mapValueType: $TypeInfo;
        mapKeyType: $TypeInfo;
        map: $Map<any, any>;
        constructor(scope: $Scriptable, jo: $Object, map: $Map_<any, any>, type: $TypeInfo_, errorMessage: string);
    }
    export class $RotationAxis extends $Enum<$RotationAxis> {
        static values(): $RotationAxis[];
        static valueOf(name: string): $RotationAxis;
        rad(f: number): $Quaternionf;
        deg(f: number): $Quaternionf;
        static ZN: $RotationAxis;
        static YN: $RotationAxis;
        vec: $Vector3f;
        static XN: $RotationAxis;
        static ZP: $RotationAxis;
        static YP: $RotationAxis;
        static XP: $RotationAxis;
    }
    /**
     * Values that may be interpreted as {@link $RotationAxis}.
     */
    export type $RotationAxis_ = "xn" | "xp" | "yn" | "yp" | "zn" | "zp";
    export class $NonnullByDefault implements $Annotation {
    }
    export class $Lazy<T> implements $Supplier<T> {
        get(): T;
        static map<K, V>(supplier: $Consumer_<$Map<K, V>>): $Lazy<$Map<K, V>>;
        static of<T>(supplier: $Supplier_<T>): $Lazy<T>;
        static of<T>(supplier: $Supplier_<T>, expires: $Duration_): $Lazy<T>;
        forget(): void;
        static serviceLoader<T>(type: $Class<T>): $Lazy<T>;
        static identityMap<K, V>(supplier: $Consumer_<$Map<K, V>>): $Lazy<$Map<K, V>>;
    }
    export class $KubeResourceLocation extends $Record {
        static wrap(from: $Object): $ResourceLocation_;
        wrapped(): $ResourceLocation;
        withPath(path: string): $ResourceLocation_;
        withPath(path: $UnaryOperator_<string>): $ResourceLocation_;
        static CODEC: $Codec<$ResourceLocation_>;
        constructor(wrapped: $ResourceLocation_);
    }
    export class $ErrorStack {
        push(parent: $Object): void;
        pop(): void;
        setKey(key: $Object): void;
        setKey(index: number): void;
        atString(): string;
        stringAt(): string;
        static NONE: $ErrorStack;
        constructor();
    }
    export class $Cast {
        static to<T>(o: $Object): T;
    }
    export interface $Cast {
    }
    export class $StackTraceCollector extends $PrintStream {
        constructor(stackTrace: $Collection_<string>, exitPattern: $Pattern, reduce: $Function_<string, string>);
    }
    export class $ListJS {
        static of(array: number[]): $List<number>;
        static of(array: number[]): $List<number>;
        static of(array: number[]): $List<number>;
        static of(array: number[]): $List<number>;
        static of(array: string[]): $List<string>;
        static of(o: $Object): $List<never>;
        static of(array: number[]): $List<number>;
        static of(array: number[]): $List<number>;
        static ofArray(array: $Object): $List<never>;
        static ofSet(o: $Object): $Set<never>;
        static orSelf(o: $Object): $List<never>;
    }
    export interface $ListJS {
    }
    export class $IntBounds extends $Record {
        min(): number;
        max(): number;
        static of(min: number, max: number): $IntBounds;
        static OPTIONAL: $IntBounds;
        static CODEC: $Codec<$IntBounds>;
        static MAP_CODEC: $MapCodec<$IntBounds>;
        static DEFAULT: $IntBounds;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $IntBounds>;
        constructor(min: number, max: number);
    }
    export class $BaseProperties {
        remove(key: string): void;
        get(key: string, def: boolean): boolean;
        get(key: string, def: number): number;
        get(key: string, def: number): number;
        get(key: string): $JsonElement;
        get(key: string, def: string): string;
        get(key: string, def: $JsonElement_): $JsonElement;
        set(key: string, json: $JsonElement_): void;
        save(): void;
        constructor(path: $Path_, name: string);
    }
    export class $JsonSerializable {
    }
    export interface $JsonSerializable {
        toJson(): $JsonElement;
    }
    /**
     * Values that may be interpreted as {@link $JsonSerializable}.
     */
    export type $JsonSerializable_ = (() => $JsonElement_);
    export class $FluidAmounts {
        static B: number;
        static METAL_BLOCK: number;
        static MB: number;
        static BOTTLE: number;
        static BUCKET: number;
        static MILLIBUCKET: number;
        static INGOT: number;
        static NUGGET: number;
    }
    export interface $FluidAmounts {
    }
    export class $ScheduledEvents$ScheduledEvent {
        clear(): void;
        reschedule(): $ScheduledEvents$ScheduledEvent;
        reschedule(timer: number): $ScheduledEvents$ScheduledEvent;
        timer: number;
        repeating: boolean;
        scheduledEvents: $ScheduledEvents;
        id: number;
        endTime: number;
        ofTicks: boolean;
        constructor();
    }
    export class $Tags {
        static block(id: $ResourceLocation_): $TagKey<$Block>;
        static item(id: $ResourceLocation_): $TagKey<$Item>;
        static forType<T>(object: T, registry: $Registry<T>): $Stream<$TagKey<T>>;
        static byEntity(entity: $Entity): $Stream<$TagKey<$EntityType<never>>>;
        static byFluid(fluid: $Fluid_): $Stream<$TagKey<$Fluid>>;
        static byBlock(block: $Block_): $Stream<$TagKey<$Block>>;
        static entityType(id: $ResourceLocation_): $TagKey<$EntityType<never>>;
        static byItem(item: $Item_): $Stream<$TagKey<$Item>>;
        static fluid(id: $ResourceLocation_): $TagKey<$Fluid>;
        static biome(id: $ResourceLocation_): $TagKey<$Biome>;
        static byItemStack(stack: $ItemStack_): $Stream<$TagKey<$Item>>;
        static byEntityType(entityType: $EntityType_<never>): $Stream<$TagKey<$EntityType<never>>>;
        static byBlockState(state: $BlockState_): $Stream<$TagKey<$Block>>;
        constructor();
    }
    export class $ModResourceBindings$InvokeBindingProvider extends $Record implements $ModResourceBindings$BindingProvider {
        getValidTypes(): $List<$ScriptType>;
        or(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        negate(): $Predicate<$ScriptType>;
        and(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        test(type: $ScriptType_): boolean;
        get validTypes(): $List<$ScriptType>;
    }
    export class $Object2LongEntry implements $Comparable<$Object2LongEntry> {
        compareTo(o: $Object2LongEntry): number;
        value: number;
        key: $Object;
        constructor(k: $Object, v: number);
        constructor(entry: $Object2LongMap$Entry<$Object>);
    }
    export class $LegacyCodeHandler extends $BaseFunction {
        makeError(): $LegacyError;
        code: string;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(code: string);
    }
    export class $JsonUtils {
        static toString(json: $JsonElement_): string;
        static of(o: $Object): $JsonElement;
        static copy(element: $JsonElement_): $JsonElement;
        static fromString(string: string): $JsonElement;
        static toObject(json: $JsonElement_): $Object;
        static arrayOf(array: $Object): $JsonArray;
        static toPrettyString(json: $JsonElement_): string;
        static toPrimitive(element: $JsonElement_): $Object;
        static primitiveOf(o: $Object): $JsonPrimitive;
        static objectOf(map: $Object): $JsonObject;
        static MAP_LIKE: $MapLike<$JsonElement>;
    }
    export interface $JsonUtils {
    }
    export class $TinyMap$Entry<K, V> extends $Record {
        value(): V;
        key(): K;
        constructor(key: K, value: V);
    }
    export class $ModResourceBindings$ClassBindingProvider extends $Record implements $ModResourceBindings$BindingProvider {
        getValidTypes(): $List<$ScriptType>;
        or(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        negate(): $Predicate<$ScriptType>;
        and(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        test(type: $ScriptType_): boolean;
        get validTypes(): $List<$ScriptType>;
    }
    export class $SlotFilter extends $Record {
        index(): number;
        static wrap(o: $Object, target: $TypeInfo_): $SlotFilter;
        static of(ingredient: $Ingredient_, index: number): $SlotFilter;
        item(): $Ingredient;
        checkFilter(index: number, stack: $ItemStack_): boolean;
        static CODEC: $Codec<$SlotFilter>;
        static TYPE_INFO: $TypeInfo;
        static EMPTY: $SlotFilter;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SlotFilter>;
        constructor(item: $Ingredient_, index: number);
    }
    export class $AttachedData<T> extends $HashMap<string, $Object> {
        add(key: string, data: $Object): void;
        getParent(): T;
        constructor(p: T);
        get parent(): T;
    }
    export class $ScheduledEvents {
        clear(id: number): void;
        schedule(timer: $TemporalAmount_, repeating: boolean, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: number, ofTicks: boolean, repeating: boolean, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        tickAll(nowTicks: number): void;
        currentTick: number;
        factory: $Supplier<$ScheduledEvents$ScheduledEvent>;
        nextId: $AtomicInteger;
        currentMillis: number;
        events: $LinkedList<$ScheduledEvents$ScheduledEvent>;
        futureEvents: $LinkedList<$ScheduledEvents$ScheduledEvent>;
        constructor(factory: $Supplier_<$ScheduledEvents$ScheduledEvent>);
    }
    export class $StringBuilderAppendable {
    }
    export interface $StringBuilderAppendable {
        appendString(builder: $StringBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $StringBuilderAppendable}.
     */
    export type $StringBuilderAppendable_ = ((builder: $StringBuilder) => void);
    export class $MutedError {
    }
    export interface $MutedError {
        isMuted(): boolean;
        get muted(): boolean;
    }
    export class $ModResourceBindings$InstanceBindingProvider extends $Record implements $ModResourceBindings$BindingProvider {
        getValidTypes(): $List<$ScriptType>;
        or(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        negate(): $Predicate<$ScriptType>;
        and(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        test(type: $ScriptType_): boolean;
        get validTypes(): $List<$ScriptType>;
    }
    export class $NBTUtils {
        static read(buf: $FriendlyByteBuf): $OrderedCompoundTag;
        static convertType(tagType: $TagType<never>): $TagType<never>;
        static toJson(t: $Tag_): $JsonElement;
        static quoteAndEscape(stringBuilder: $StringBuilder, string: string): void;
        static accessTagMap(tag: $CompoundTag_): $Map<string, $Tag>;
        static COMPOUND_TYPE: $TagType<$OrderedCompoundTag>;
        static LIST_TYPE: $TagType<$ListTag>;
    }
    export interface $NBTUtils {
    }
    export class $ID {
        static of(o: $Object, preferKJS: boolean): $ResourceLocation;
        static url(id: $ResourceLocation_): string;
        static read(reader: $StringReader): $DataResult<$ResourceLocation>;
        static mc(o: $Object): $ResourceLocation;
        static path(s: string): string;
        static reduce(id: $ResourceLocation_): string;
        static string(id: string): string;
        static isKey(from: $Object): boolean;
        static namespace(s: string): string;
        static resourcePath(id: $ResourceLocation_): string;
        static reduceKjs(id: $ResourceLocation_): string;
        static kjs(o: $Object): $ResourceLocation;
        static kjsString(id: string): string;
        static ITEM: $UnaryOperator<string>;
        static PNG_TEXTURE_MCMETA: $UnaryOperator<string>;
        static PARTICLE: $UnaryOperator<string>;
        static BLOCK_MODEL: $UnaryOperator<string>;
        static BLOCKSTATE: $UnaryOperator<string>;
        static BLOCK: $UnaryOperator<string>;
        static ITEM_MODEL: $UnaryOperator<string>;
        static PNG_TEXTURE: $UnaryOperator<string>;
        static AIR: $ResourceLocation;
        static BLOCK_LOOT_TABLE: $UnaryOperator<string>;
        static UNKNOWN: $ResourceLocation;
        static MODEL: $UnaryOperator<string>;
    }
    export interface $ID {
    }
    export class $TickTemporalUnit implements $TemporalUnit {
        between(temporal1Inclusive: $Temporal, temporal2Exclusive: $Temporal): number;
        isDurationEstimated(): boolean;
        getDuration(): $Duration;
        addTo<R extends $Temporal>(temporal: R, amount: number): R;
        isTimeBased(): boolean;
        isDateBased(): boolean;
        isSupportedBy(arg0: $Temporal): boolean;
        static INSTANCE: $TickTemporalUnit;
        static DURATION: $Duration;
        constructor();
        get durationEstimated(): boolean;
        get duration(): $Duration;
        get timeBased(): boolean;
        get dateBased(): boolean;
    }
    export class $NameProvider<T> {
        static create<K, T>(registry: $Consumer_<$NameProvider$Registry<K, T>>): $Map<K, $NameProvider<T>>;
    }
    export interface $NameProvider<T> {
        getName(registries: $RegistryAccess, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $NameProvider}.
     */
    export type $NameProvider_<T> = ((registries: $RegistryAccess, value: T) => $Component_);
    export class $MobEffectUtil {
        /**
         * Creates an instance for the given effect, duration and amplifier
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_, amplifier: number): $MobEffectInstance;
        /**
         * Creates an instance for the given effect, duration, amplifier, ambient, and visible to the HUD
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_, amplifier: number, ambient: boolean, visible: boolean): $MobEffectInstance;
        /**
         * Creates an instance for the given effect, duration, amplifier, ambient, visible to the HUD, and to show the icon on the sceen
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean): $MobEffectInstance;
        /**
         * Creates an instance for the given effect and duration (in ticks)
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_): $MobEffectInstance;
        /**
         * Creates an instance for the given effect. Default duration and amplifier is 0
         */
        static of(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        /**
         * Copies an existing MobEffectInstance
         */
        static of(oldInstance: $MobEffectInstance): $MobEffectInstance;
        constructor();
    }
    export class $CountingMap {
        get(key: $Object): number;
        clear(): void;
        add(key: $Object, value: number): number;
        set(key: $Object, value: number): number;
        forEach(forEach: $Consumer_<$Object2LongEntry>): void;
        getSize(): number;
        getEntries(): $List<$Object2LongEntry>;
        getKeys(): $Set<$Object>;
        getValues(): $Collection<number>;
        getTotalCount(): number;
        constructor();
        get size(): number;
        get entries(): $List<$Object2LongEntry>;
        get keys(): $Set<$Object>;
        get values(): $Collection<number>;
        get totalCount(): number;
    }
    export class $WithCodec {
    }
    export interface $WithCodec extends $NBTSerializable, $JsonSerializable {
        getCodec(): $Codec<never>;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $WithCodec}.
     */
    export type $WithCodec_ = (() => $Codec<never>);
    export class $ModResourceBindings$BindingProvider {
    }
    export interface $ModResourceBindings$BindingProvider extends $ScriptTypePredicate {
    }
    export class $UtilsJS {
        static wrap(o: $Object, type: $JSObjectType_): $Object;
        static findCreativeTab(id: $ResourceLocation_): $CreativeModeTab;
        static toMappedTypeString(type: $Type): string;
        static onMatchDo<T>(predicate: $Predicate_<T>, onMatch: $Consumer_<T>): $Predicate<T>;
        static postModificationEvents(): void;
        static ALWAYS_TRUE: $Predicate<$Object>;
        static EMPTY_OBJECT_ARRAY: $Object[];
        static RANDOM: $RandomSource;
        constructor();
    }
    export class $ScheduledEvents$TimeoutJSFunction extends $BaseFunction {
        static DONTENUM: number;
        static CONST: number;
        scheduledEvents: $ScheduledEvents;
        clear: boolean;
        static UNINITIALIZED_CONST: number;
        interval: boolean;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(scheduledEvents: $ScheduledEvents, clear: boolean, interval: boolean);
    }
    export class $Tristate extends $Enum<$Tristate> implements $StringRepresentable {
        static values(): $Tristate[];
        test(enabled: boolean): boolean;
        test(enabled: $BooleanSupplier_): boolean;
        static valueOf(name: string): $Tristate;
        static wrap(from: $Object): $Tristate;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Tristate>;
        static TRUE: $Tristate;
        static FALSE: $Tristate;
        static VALUES: $Tristate[];
        static DEFAULT: $Tristate;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Tristate>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Tristate}.
     */
    export type $Tristate_ = "false" | "true" | "default";
    export class $OpsContainer {
        decode<T>(codec: $Codec<T>, o: $Object): T;
        java(): $DynamicOps<$Object>;
        json(): $DynamicOps<$JsonElement>;
        nbt(): $DynamicOps<$Tag>;
        decodeMap<T>(codec: $MapCodec_<T>, o: $Object): T;
        static DEFAULT: $OpsContainer;
        constructor(nbt: $DynamicOps<$Tag_>, json: $DynamicOps<$JsonElement_>, java: $DynamicOps<$Object>);
    }
    export class $RegExpKJS {
        static wrap(o: $Object): $Pattern;
        static read(reader: $StringReader): $Pattern;
        static getFlags(f: string): number;
        static tryRead(reader: $StringReader): $DataResult<$Pattern>;
        static ofString(string: string): $Pattern;
        static isValidFlag(c: string): boolean;
        static toRegExpString(pattern: $Pattern): string;
        static CODEC: $Codec<$Pattern>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pattern>;
    }
    export interface $RegExpKJS {
    }
    export class $ScheduledEvents$Callback {
        static TYPE_INFO: $TypeInfo;
    }
    export interface $ScheduledEvents$Callback {
        onCallback(event: $ScheduledEvents$ScheduledEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ScheduledEvents$Callback}.
     */
    export type $ScheduledEvents$Callback_ = ((event: $ScheduledEvents$ScheduledEvent) => void);
}
