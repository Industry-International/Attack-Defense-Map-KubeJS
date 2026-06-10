import { $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $NeoForgeRegistriesSetupAccessor, $DataPackRegistriesHooksAccessor } from "@package/org/sinytra/connector/mod/mixin/registries";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Map, $Set, $Spliterator, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AttachmentType } from "@package/net/neoforged/neoforge/attachment";
import { $FluidIngredientType } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $Consumer_, $Predicate_, $Function_, $UnaryOperator_, $Supplier } from "@package/java/util/function";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$RegistryLookup, $RegistryAccess, $Registry, $Holder$Reference, $HolderOwner, $Holder_, $Holder$Kind, $Holder, $IdMap, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryDataMapSyncPayload_, $KnownRegistryDataMapsReplyPayload_, $KnownRegistryDataMapsPayload_, $FrozenRegistryPayload } from "@package/net/neoforged/neoforge/network/payload";
import { $BaseMappedRegistryAccessor } from "@package/net/fabricmc/fabric/mixin/attachment";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ICondition$IContext_, $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $DataComponentType, $DataComponentType$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable, $Record, $Class, $Object } from "@package/java/lang";
import { $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $AddCallback, $RegistryCallback, $BakeCallback_, $AddCallback_, $ClearCallback, $ClearCallback_, $BakeCallback } from "@package/net/neoforged/neoforge/registries/callback";
import { $IngredientType } from "@package/net/neoforged/neoforge/common/crafting";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $Int2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemLike } from "@package/net/minecraft/world/level";
import { $AttributeKey } from "@package/io/netty/util";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $DeferredRegisterUndeferrer } from "@package/dev/yumi/mc/core/impl/neoforge";
import { $Item, $Item$Properties, $BlockItem, $ItemStack } from "@package/net/minecraft/world/item";
import { $IEventBus, $Event } from "@package/net/neoforged/bus/api";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $DeferredRegisterExtensions } from "@package/foundry/veil/forge/ext";
import { $RegisterEventAccessor } from "@package/dev/yumi/mc/core/mixin/neoforge";
import { $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $Stream } from "@package/java/util/stream";
import { $BaseMappedRegistryAccessor as $BaseMappedRegistryAccessor$1, $RegistryManagerAccessor } from "@package/net/fabricmc/fabric/mixin/registry/sync";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $RegistryDataLoader$RegistryData, $ResourceLocation_, $RegistryDataLoader$RegistryData_ } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $StructureModifier, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as datamaps from "@package/net/neoforged/neoforge/registries/datamaps";
export * as holdersets from "@package/net/neoforged/neoforge/registries/holdersets";
export * as callback from "@package/net/neoforged/neoforge/registries/callback";

declare module "@package/net/neoforged/neoforge/registries" {
    /**
     * @deprecated
     */
    export class $IdMappingEvent extends $Event {
        isFrozen(): boolean;
        getRegistries(): $ImmutableSet<$ResourceLocation>;
        getRemaps(arg0: $ResourceLocation_): $ImmutableList<$IdMappingEvent$ModRemapping>;
        constructor(arg0: $Map_<$ResourceLocation_, $Map_<$ResourceLocation_, $IdMappingEvent$IdRemapping_>>, arg1: boolean);
        get frozen(): boolean;
        get registries(): $ImmutableSet<$ResourceLocation>;
    }
    export class $DataMapLoader implements $PreparableReloadListener {
        apply(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        static getFolderLocation(arg0: $ResourceLocation_): string;
        getName(): string;
        static PATH: string;
        constructor(arg0: $ICondition$IContext_, arg1: $RegistryAccess);
        get name(): string;
    }
    export class $DataPackRegistryEvent$NewRegistry extends $DataPackRegistryEvent {
        dataPackRegistry<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>): void;
        dataPackRegistry<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>, arg2: $Codec<T>, arg3: $Consumer_<$RegistryBuilder<T>>): void;
        dataPackRegistry<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>, arg2: $Codec<T>): void;
        constructor();
    }
    export class $RegistryManager$SnapshotType extends $Enum<$RegistryManager$SnapshotType> {
        static values(): $RegistryManager$SnapshotType[];
        static valueOf(arg0: string): $RegistryManager$SnapshotType;
        static SYNC_TO_CLIENT: $RegistryManager$SnapshotType;
        static FULL: $RegistryManager$SnapshotType;
    }
    /**
     * Values that may be interpreted as {@link $RegistryManager$SnapshotType}.
     */
    export type $RegistryManager$SnapshotType_ = "sync_to_client" | "full";
    export class $DeferredHolder<R, T extends R> implements $Holder<R>, $Supplier<T> {
        get(): R;
        value(): R;
        getKey(): $ResourceKey<R>;
        kind(): $Holder$Kind;
        getId(): $ResourceLocation;
        static create<R, T extends R>(arg0: $ResourceKey_<$Registry<R>>, arg1: $ResourceLocation_): $DeferredHolder<R, T>;
        static create<R, T extends R>(arg0: $ResourceKey_<R>): $DeferredHolder<R, T>;
        static create<R, T extends R>(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $DeferredHolder<R, T>;
        unwrap(): $Either<$ResourceKey<R>, R>;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Predicate_<$ResourceKey<R>>): boolean;
        tags(): $Stream<$TagKey<R>>;
        getData<Z>(arg0: $DataMapType<R, Z>): Z;
        getDelegate(): $Holder<R>;
        unwrapKey(): ($ResourceKey<R>) | undefined;
        canSerializeIn(arg0: $HolderOwner<R>): boolean;
        isBound(): boolean;
        asOptional(): (R) | undefined;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        unwrapLookup(): $HolderLookup$RegistryLookup<R>;
        get key(): $ResourceKey<R>;
        get id(): $ResourceLocation;
        get delegate(): $Holder<R>;
        get bound(): boolean;
        get registeredName(): string;
    }
    export class $NeoForgeRegistryCallbacks$ItemCallbacks implements $AddCallback<$Item>, $ClearCallback<$Item> {
    }
    export class $DeferredRegister$Items extends $DeferredRegister<$Item> {
        registerSimpleBlockItem(arg0: string, arg1: $Supplier_<$Block>, arg2: $Item$Properties): $DeferredItem<$BlockItem>;
        registerSimpleBlockItem(arg0: string, arg1: $Supplier_<$Block>): $DeferredItem<$BlockItem>;
        registerSimpleBlockItem(arg0: $Holder_<$Block>, arg1: $Item$Properties): $DeferredItem<$BlockItem>;
        registerSimpleBlockItem(arg0: $Holder_<$Block>): $DeferredItem<$BlockItem>;
        registerItem<I extends $Item>(arg0: string, arg1: $Function_<$Item$Properties, I>, arg2: $Item$Properties): $DeferredItem<I>;
        registerItem<I extends $Item>(arg0: string, arg1: $Function_<$Item$Properties, I>): $DeferredItem<I>;
        registerSimpleItem(arg0: string, arg1: $Item$Properties): $DeferredItem<$Item>;
        registerSimpleItem(arg0: string): $DeferredItem<$Item>;
    }
    export class $DeferredRegister$Blocks extends $DeferredRegister<$Block> {
        registerSimpleBlock(arg0: string): $DeferredBlock<$Block>;
        registerSimpleBlock(arg0: string, arg1: $BlockBehaviour$Properties): $DeferredBlock<$Block>;
        registerBlock<B extends $Block>(arg0: string, arg1: $Function_<$BlockBehaviour$Properties, B>): $DeferredBlock<B>;
        registerBlock<B extends $Block>(arg0: string, arg1: $Function_<$BlockBehaviour$Properties, B>, arg2: $BlockBehaviour$Properties): $DeferredBlock<B>;
    }
    export class $RegisterEvent extends $Event implements $IModBusEvent, $RegisterEventAccessor {
        register<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Consumer_<$RegisterEvent$RegisterHelper<T>>): void;
        register<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $ResourceLocation_, arg2: $Supplier_<T>): void;
        static yumi$init$yumi_mc_core_$md$9aa1a5$0(arg0: $ResourceKey_<any>, arg1: $Registry<any>): $RegisterEvent;
        getRegistryKey(): $ResourceKey<$Registry<never>>;
        getRegistry<T>(arg0: $ResourceKey_<$Registry<T>>): $Registry<T>;
        getRegistry(): $Registry<never>;
        get registryKey(): $ResourceKey<$Registry<never>>;
    }
    export class $NeoForgeRegistryCallbacks$PoiTypeCallbacks implements $AddCallback<$PoiType>, $ClearCallback<$PoiType> {
    }
    export class $DataPackRegistryEvent extends $Event implements $IModBusEvent {
        constructor();
    }
    export class $RegisterEvent$RegisterHelper<T> {
    }
    export interface $RegisterEvent$RegisterHelper<T> {
        register(arg0: $ResourceKey_<T>, arg1: T): void;
        register(arg0: $ResourceLocation_, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterEvent$RegisterHelper}.
     */
    export type $RegisterEvent$RegisterHelper_<T> = ((arg0: $ResourceLocation, arg1: T) => void);
    export class $DataPackRegistriesHooks implements $DataPackRegistriesHooksAccessor {
        static getDataPackRegistriesWithDimensions(): $Stream<$RegistryDataLoader$RegistryData<never>>;
        static grabNetworkableRegistries(arg0: $List_<$RegistryDataLoader$RegistryData_<never>>): $List<$RegistryDataLoader$RegistryData<never>>;
        static getDataPackRegistries(): $List<$RegistryDataLoader$RegistryData<never>>;
        static getSyncedRegistry<T>(arg0: $ResourceKey_<$Registry<T>>): $RegistryDataLoader$RegistryData<T>;
        static set_DATA_PACK_REGISTRIES$connector_$md$9aa1a5$0(arg0: $List_<any>): void;
        static set_DATA_PACK_REGISTRIES_VIEW$connector_$md$9aa1a5$1(arg0: $List_<any>): void;
        static getSyncedCustomRegistries(): $Set<$ResourceKey<$Registry<never>>>;
        static get dataPackRegistriesWithDimensions(): $Stream<$RegistryDataLoader$RegistryData<never>>;
        static get dataPackRegistries(): $List<$RegistryDataLoader$RegistryData<never>>;
        static set _DATA_PACK_REGISTRIES$connector_$md$9aa1a5$0(value: $List_<any>);
        static set _DATA_PACK_REGISTRIES_VIEW$connector_$md$9aa1a5$1(value: $List_<any>);
        static get syncedCustomRegistries(): $Set<$ResourceKey<$Registry<never>>>;
    }
    export class $GameData {
        static getBlockStatePointOfInterestTypeMap(): $Map<$BlockState, $Holder<$PoiType>>;
        static getBlockItemMap(): $Map<$Block, $Item>;
        static getBlockStateIDMap(): $IdMapper<$BlockState>;
        static unfreezeData(): void;
        static postRegisterEvents(): void;
        static vanillaSnapshot(): void;
        static freezeData(): void;
        static getRegistrationOrder(): $Set<$ResourceLocation>;
        constructor();
        static get blockStatePointOfInterestTypeMap(): $Map<$BlockState, $Holder<$PoiType>>;
        static get blockItemMap(): $Map<$Block, $Item>;
        static get blockStateIDMap(): $IdMapper<$BlockState>;
        static get registrationOrder(): $Set<$ResourceLocation>;
    }
    export class $DeferredItem<T extends $Item> extends $DeferredHolder<$Item, T> implements $ItemLike {
        asItem(): $Item;
        static createItem<T extends $Item>(arg0: $ResourceKey_<$Item>): $DeferredItem<T>;
        static createItem<T extends $Item>(arg0: $ResourceLocation_): $DeferredItem<T>;
        toStack(arg0: number): $ItemStack;
        toStack(): $ItemStack;
    }
    export class $NeoForgeRegistriesSetup implements $NeoForgeRegistriesSetupAccessor {
        static setup(arg0: $IEventBus): void;
        static invokeModifyRegistries$connector_$md$9aa1a5$0(arg0: $ModifyRegistriesEvent): void;
        constructor();
        static set up(value: $IEventBus);
    }
    export class $DataPackRegistryEvent$DataPackRegistryData<T> extends $Record {
    }
    export class $IRegistryExtension<T> {
    }
    export interface $IRegistryExtension<T> {
        resolve(arg0: $ResourceLocation_): $ResourceLocation;
        resolve(arg0: $ResourceKey_<T>): $ResourceKey<T>;
        getId(arg0: $ResourceKey_<T>): number;
        getId(arg0: $ResourceLocation_): number;
        containsValue(arg0: T): boolean;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        addAlias(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        getMaxId(): number;
        doesSync(): boolean;
        getDataMap<A>(arg0: $DataMapType<T, A>): $Map<$ResourceKey<T>, A>;
        addCallback(arg0: $RegistryCallback<T>): void;
        addCallback<C extends $RegistryCallback<T>>(arg0: $Class<C>, arg1: C): void;
        getKeyOrNull(arg0: T): $ResourceLocation;
        get maxId(): number;
    }
    export class $DataMapLoader$LoadResult<T> extends $Record {
    }
    export class $RegistryManager implements $RegistryManagerAccessor {
        static takeSnapshot(arg0: $RegistryManager$SnapshotType_): $Map<$ResourceLocation, $RegistrySnapshot>;
        static postNewRegistryEvent(): void;
        static getDataMap<R>(arg0: $ResourceKey_<$Registry<R>>, arg1: $ResourceLocation_): $DataMapType<R, never>;
        static invokeTrackModdedRegistry$fabric_registry_sync_v0_$md$9aa1a5$0(arg0: $ResourceLocation_): void;
        static getRegistryNamesForSyncToClient(): $List<$ResourceLocation>;
        static isNonSyncedBuiltInRegistry(arg0: $Registry<never>): boolean;
        static getVanillaRegistryKeys(): $Set<$ResourceLocation>;
        static generateRegistryPackets(arg0: boolean): $List<$FrozenRegistryPayload>;
        static handleKnownDataMapsReply(arg0: $KnownRegistryDataMapsReplyPayload_, arg1: $IPayloadContext): void;
        static revertToFrozen(): void;
        static getDataMaps(): $Map<$ResourceKey<$Registry<never>>, $Map<$ResourceLocation, $DataMapType<never, never>>>;
        static revertToVanilla(): void;
        static applySnapshot(arg0: $Map_<$ResourceLocation_, $RegistrySnapshot>, arg1: boolean): $Set<$ResourceKey<never>>;
        static initDataMaps(): void;
        static ATTRIBUTE_KNOWN_DATA_MAPS: $AttributeKey<$Map<$ResourceKey<$Registry<never>>, $Collection<$ResourceLocation>>>;
        constructor();
        static get registryNamesForSyncToClient(): $List<$ResourceLocation>;
        static get vanillaRegistryKeys(): $Set<$ResourceLocation>;
        static get dataMaps(): $Map<$ResourceKey<$Registry<never>>, $Map<$ResourceLocation, $DataMapType<never, never>>>;
    }
    export class $BaseMappedRegistry<T> implements $Registry<T>, $BaseMappedRegistryAccessor$1, $BaseMappedRegistryAccessor {
        resolve(arg0: $ResourceLocation_): $ResourceLocation;
        resolve(arg0: $ResourceKey_<T>): $ResourceKey<T>;
        getId(arg0: $ResourceLocation_): number;
        getId(arg0: $ResourceKey_<T>): number;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        addAlias(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        getMaxId(): number;
        doesSync(): boolean;
        getDataMap<A>(arg0: $DataMapType<T, A>): $Map<$ResourceKey<T>, A>;
        addCallback(arg0: $RegistryCallback<T>): void;
        stream(): $Stream<T>;
        keys<U>(arg0: $DynamicOps<U>): $Stream<U>;
        getOptional(arg0: $ResourceLocation_): (T) | undefined;
        getOptional(arg0: $ResourceKey_<T>): (T) | undefined;
        asHolderIdMap(): $IdMap<$Holder<T>>;
        byNameCodec(): $Codec<T>;
        getOrThrow(arg0: $ResourceKey_<T>): T;
        holderByNameCodec(): $Codec<$Holder<T>>;
        asTagAddingLookup(): $HolderLookup$RegistryLookup<T>;
        getRandomElementOf(arg0: $TagKey_<T>, arg1: $RandomSource): ($Holder<T>) | undefined;
        getTagOrEmpty(arg0: $TagKey_<T>): $Iterable<$Holder<T>>;
        getHolderOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
        byIdOrThrow(arg0: number): T;
        getIdOrThrow(arg0: T): number;
        addCallback<C extends $RegistryCallback<T>>(arg0: $Class<C>, arg1: C): void;
        getKeyOrNull(arg0: T): $ResourceLocation;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        setSync(arg0: boolean): void;
        invokeUnfreeze(): void;
        constructor();
        get maxId(): number;
        set sync(value: boolean);
    }
    export class $RegistryBuilder<T> {
        create(): $Registry<T>;
        sync(arg0: boolean): $RegistryBuilder<T>;
        /**
         * @deprecated
         */
        withIntrusiveHolders(): $RegistryBuilder<T>;
        defaultKey(arg0: $ResourceLocation_): $RegistryBuilder<T>;
        defaultKey(arg0: $ResourceKey_<T>): $RegistryBuilder<T>;
        maxId(arg0: number): $RegistryBuilder<T>;
        onBake(arg0: $BakeCallback_<T>): $RegistryBuilder<T>;
        onAdd(arg0: $AddCallback_<T>): $RegistryBuilder<T>;
        onClear(arg0: $ClearCallback_<T>): $RegistryBuilder<T>;
        callback(arg0: $RegistryCallback<T>): $RegistryBuilder<T>;
        disableRegistrationCheck(): $RegistryBuilder<T>;
        constructor(arg0: $ResourceKey_<$Registry<T>>);
    }
    export class $DeferredRegister<T> implements $DeferredRegisterExtensions<any>, $DeferredRegisterUndeferrer {
        register(arg0: $ResourceLocation_, arg1: $Function_<any, any>): $DeferredHolder<any, any>;
        register<I extends T>(arg0: string, arg1: $Function_<$ResourceLocation, I>): $DeferredHolder<$Object, I>;
        register<I extends T>(arg0: string, arg1: $Supplier_<I>): $DeferredHolder<$Object, I>;
        register(arg0: $IEventBus): void;
        static create<T>(arg0: $Registry<T>, arg1: string): $DeferredRegister<T>;
        static create<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: string): $DeferredRegister<T>;
        static create<B>(arg0: $ResourceLocation_, arg1: string): $DeferredRegister<B>;
        getEntries(): $Collection<$DeferredHolder<$Object, $Object>>;
        addAlias(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        getNamespace(): string;
        getRegistryKey(): $ResourceKey<$Registry<$Object>>;
        makeRegistry(arg0: $Consumer_<$RegistryBuilder<$Object>>): $Registry<$Object>;
        getRegistry(): $Supplier<$Registry<$Object>>;
        yumi$registerNow(): void;
        /**
         * @deprecated
         */
        static createDataComponents(arg0: string): $DeferredRegister$DataComponents;
        static createDataComponents(arg0: $ResourceKey_<$Registry<$DataComponentType<never>>>, arg1: string): $DeferredRegister$DataComponents;
        createTagKey(arg0: $ResourceLocation_): $TagKey<$Object>;
        createTagKey(arg0: string): $TagKey<$Object>;
        static createItems(arg0: string): $DeferredRegister$Items;
        static createBlocks(arg0: string): $DeferredRegister$Blocks;
        getRegistryName(): $ResourceLocation;
        register<I extends T>(arg0: $ResourceLocation_, arg1: $Supplier_<I>): $DeferredHolder<$Object, I>;
        get entries(): $Collection<$DeferredHolder<$Object, $Object>>;
        get namespace(): string;
        get registryKey(): $ResourceKey<$Registry<$Object>>;
        get registry(): $Supplier<$Registry<$Object>>;
        get registryName(): $ResourceLocation;
    }
    export class $DataMapLoader$1WithSource<T, R> extends $Record {
    }
    export class $NeoForgeRegistryCallbacks$BlockCallbacks implements $AddCallback<$Block>, $ClearCallback<$Block>, $BakeCallback<$Block> {
    }
    export class $IdMappingEvent$IdRemapping extends $Record {
        currId(): number;
        newId(): number;
        constructor(currId: number, newId: number);
    }
    export class $NeoForgeRegistries$Keys {
        static GLOBAL_LOOT_MODIFIER_SERIALIZERS: $ResourceKey<$Registry<$MapCodec<$IGlobalLootModifier>>>;
        static BIOME_MODIFIER_SERIALIZERS: $ResourceKey<$Registry<$MapCodec<$BiomeModifier>>>;
        static FLUID_INGREDIENT_TYPES: $ResourceKey<$Registry<$FluidIngredientType<never>>>;
        static ATTACHMENT_TYPES: $ResourceKey<$Registry<$AttachmentType<never>>>;
        static INGREDIENT_TYPES: $ResourceKey<$Registry<$IngredientType<never>>>;
        static FLUID_TYPES: $ResourceKey<$Registry<$FluidType>>;
        static BIOME_MODIFIERS: $ResourceKey<$Registry<$BiomeModifier>>;
        static ENTITY_DATA_SERIALIZERS: $ResourceKey<$Registry<$EntityDataSerializer<never>>>;
        static STRUCTURE_MODIFIERS: $ResourceKey<$Registry<$StructureModifier>>;
        static HOLDER_SET_TYPES: $ResourceKey<$Registry<$HolderSetType>>;
        static CONDITION_CODECS: $ResourceKey<$Registry<$MapCodec<$ICondition>>>;
        static STRUCTURE_MODIFIER_SERIALIZERS: $ResourceKey<$Registry<$MapCodec<$StructureModifier>>>;
        constructor();
    }
    export class $NewRegistryEvent extends $Event implements $IModBusEvent {
        register<T>(arg0: $Registry<T>): void;
        create<T>(arg0: $RegistryBuilder<T>): $Registry<T>;
    }
    export class $NeoForgeRegistries {
        static GLOBAL_LOOT_MODIFIER_SERIALIZERS: $Registry<$MapCodec<$IGlobalLootModifier>>;
        static BIOME_MODIFIER_SERIALIZERS: $Registry<$MapCodec<$BiomeModifier>>;
        static FLUID_INGREDIENT_TYPES: $Registry<$FluidIngredientType<never>>;
        static ATTACHMENT_TYPES: $Registry<$AttachmentType<never>>;
        static INGREDIENT_TYPES: $Registry<$IngredientType<never>>;
        static FLUID_TYPES: $Registry<$FluidType>;
        static ENTITY_DATA_SERIALIZERS: $Registry<$EntityDataSerializer<never>>;
        static HOLDER_SET_TYPES: $Registry<$HolderSetType>;
        static STRUCTURE_MODIFIER_SERIALIZERS: $Registry<$MapCodec<$StructureModifier>>;
        static CONDITION_SERIALIZERS: $Registry<$MapCodec<$ICondition>>;
        constructor();
    }
    export class $DeferredRegister$RegistryHolder<V> implements $Supplier<$Registry<V>> {
    }
    export class $NeoForgeRegistryCallbacks {
    }
    export class $ModifyRegistriesEvent extends $Event implements $IModBusEvent {
        getRegistries(): $Iterable<$Registry<never>>;
        getRegistry<T>(arg0: $ResourceKey_<$Registry<T>>): $Registry<T>;
        get registries(): $Iterable<$Registry<never>>;
    }
    export class $DeferredBlock<T extends $Block> extends $DeferredHolder<$Block, T> implements $ItemLike {
        static createBlock<T extends $Block>(arg0: $ResourceLocation_): $DeferredBlock<T>;
        static createBlock<T extends $Block>(arg0: $ResourceKey_<$Block>): $DeferredBlock<T>;
        asItem(): $Item;
        toStack(arg0: number): $ItemStack;
        toStack(): $ItemStack;
    }
    export class $RegistrySnapshot {
        getAliases(): $Map<$ResourceLocation, $ResourceLocation>;
        getFullBackup<T>(): $Registry<T>;
        getIds(): $Int2ObjectSortedMap<$ResourceLocation>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $RegistrySnapshot>;
        constructor<T>(arg0: $Registry<T>, arg1: boolean);
        get aliases(): $Map<$ResourceLocation, $ResourceLocation>;
        get fullBackup(): $Registry<T>;
        get ids(): $Int2ObjectSortedMap<$ResourceLocation>;
    }
    export class $DeferredRegister$DataComponents extends $DeferredRegister<$DataComponentType<never>> {
        registerComponentType<D>(arg0: string, arg1: $UnaryOperator_<$DataComponentType$Builder<D>>): $DeferredHolder<$DataComponentType<never>, $DataComponentType<D>>;
    }
    export class $NeoForgeRegistryCallbacks$BlockCallbacks$ClearableObjectIntIdentityMap<T> extends $IdMapper<T> {
        tToId: $Reference2IntMap<T>;
        nextId: number;
        idToT: $List<T>;
    }
    export class $ClientRegistryManager$1MandatoryEntry extends $Record {
    }
    export class $IdMappingEvent$ModRemapping {
        registry: $ResourceLocation;
        newId: number;
        oldId: number;
        key: $ResourceLocation;
    }
    export class $ClientRegistryManager {
        static handleKnownDataMaps(arg0: $KnownRegistryDataMapsPayload_, arg1: $IPayloadContext): void;
        static handleDataMapSync<R>(arg0: $RegistryDataMapSyncPayload_<R>, arg1: $IPayloadContext): void;
        constructor();
    }
    export class $NeoForgeRegistryCallbacks$AttributeCallbacks implements $BakeCallback<$Attribute> {
    }
}
