import { $PermissionGatherEvent$Nodes } from "@package/net/neoforged/neoforge/server/permission/events";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $MapLike, $Decoder$Boxed, $Lifecycle, $Encoder, $Dynamic, $MapCodec, $Decoder, $Codec$ResultFunction, $RecordBuilder, $Decoder$Terminal } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $Entity, $EquipmentSlot_, $EntityType, $LivingEntity, $Mob, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $RandomSource, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand_, $Difficulty_, $Container } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $FMLLoadCompleteEvent, $FMLCommonSetupEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { DataComponentTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AnvilMenu, $RecipeBookType, $ContainerLevelAccess_, $ClickAction_, $RecipeBookType_, $Slot } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentHolder_, $DataComponentHolder, $DataComponentType_, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";
import { $DifferenceIngredient, $IngredientType, $BlockTagIngredient, $CompoundIngredient, $IntersectionIngredient, $DataComponentIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $DataMapsUpdatedEvent } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $PermissionNode } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $CommentedConfig, $EnumGetMethod_, $Config, $UnmodifiableCommentedConfig, $UnmodifiableConfig, $ConfigSpec$CorrectionListener_ } from "@package/com/electronwill/nightconfig/core";
import { $Item, $Tiers_, $CreativeModeTab_, $Tier, $SpawnEggItem, $CreativeModeTab, $Item$Properties, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ChatDecorator, $Component_, $TextColor, $Component } from "@package/net/minecraft/network/chat";
import { $Biome$ClimateSettings, $BiomeSpecialEffects, $MobSpawnSettings, $Biome, $Biome$ClimateSettings_, $Biome_, $BiomeGenerationSettings } from "@package/net/minecraft/world/level/biome";
import { $PiglinCurrencyItemPredicate, $PiglinNeutralArmorEntityPredicate, $SnowBootsEntityPredicate, $ItemAbilityPredicate } from "@package/net/neoforged/neoforge/common/advancements/critereon";
import { $MobEffectInstance, $MobEffect, $MobEffect_ } from "@package/net/minecraft/world/effect";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WorldData, $LevelStorageSource$LevelDirectory_ } from "@package/net/minecraft/world/level/storage";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
import { $EntityJoinLevelEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $TradeMatcher_, $TradeMatcher$Filterable } from "@package/com/almostreliable/morejs/features/villager";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult, $HitResult, $AABB } from "@package/net/minecraft/world/phys";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $StructuresBecomeConfiguredFix$Conversion } from "@package/net/minecraft/util/datafix/fixes";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $RangedAttribute, $AttributeSupplier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $PlayerInteractEvent$RightClickBlock, $CriticalHitEvent, $PlayerInteractEvent$LeftClickBlock, $SweepAttackEvent, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $EmptyFluidIngredient, $IntersectionFluidIngredient, $TagFluidIngredient, $DifferenceFluidIngredient, $FluidIngredientType, $DataComponentFluidIngredient, $CompoundFluidIngredient, $SingleFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $BiConsumer_, $LongSupplier, $UnaryOperator_, $Supplier, $DoubleSupplier, $Consumer_, $Predicate_, $Predicate, $IntSupplier, $Function_, $BooleanSupplier, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $HolderLookup$RegistryLookup, $BlockPos_, $HolderLookup$Provider, $Holder, $Direction_, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $EnchantmentInstance, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $SimpleTicket, $AABBTicket } from "@package/net/neoforged/neoforge/common/ticket";
import { $WeightedEntry, $Weight } from "@package/net/minecraft/util/random";
import { $ItemExistsCondition, $TagEmptyCondition, $TrueCondition, $FalseCondition, $OrCondition, $ModLoadedCondition, $AndCondition, $ICondition, $NotCondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Comparable, $Thread, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $LootContext, $LootPool } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelEvent$Unload, $BlockEvent$BreakEvent, $ChunkEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $RegisterEvent, $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $OutputStream } from "@package/java/io";
import { $LevelAccessor, $ChunkPos, $Level_, $GameType, $LevelReader, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $BlockSource_ } from "@package/net/minecraft/core/dispenser";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $ItemAttributeModifiers_, $Tool } from "@package/net/minecraft/world/item/component";
import { $ModConfigEvent$Reloading, $ModConfigEvent$Loading } from "@package/net/neoforged/fml/event/config";
import { $OnDatapackSyncEvent, $AddReloadListenerEvent, $TagsUpdatedEvent, $RegisterCommandsEvent } from "@package/net/neoforged/neoforge/event";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerboundPlayerActionPacket$Action_ } from "@package/net/minecraft/network/protocol/game";
import { $Villager, $VillagerTrades$ItemListing } from "@package/net/minecraft/world/entity/npc";
import { $EntitySubPredicate, $ItemSubPredicate$Type } from "@package/net/minecraft/advancements/critereon";
import { $ServerTickEvent$Post, $ServerTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $EntityDataSerializer, $EntityDataSerializer_ } from "@package/net/minecraft/network/syncher";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AddTableLootModifier, $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $MutableDataComponentHolderFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BaseMapCodec } from "@package/com/mojang/serialization/codecs";
import { $LivingKnockBackEvent, $LivingChangeTargetEvent$ILivingTargetType, $LivingSwapItemsEvent$Hands, $LivingChangeTargetEvent, $LivingShieldBlockEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StructureModifiers$ClearSpawnsStructureModifier, $BiomeModifiers$AddCarversBiomeModifier, $StructureModifiers$AddSpawnsStructureModifier, $BiomeModifiers$AddSpawnsBiomeModifier, $BiomeModifiers$RemoveFeaturesBiomeModifier, $BiomeModifiers$RemoveCarversBiomeModifier, $BiomeModifiers$AddFeaturesBiomeModifier, $StructureModifier, $BiomeModifiers$RemoveSpawnsBiomeModifier, $NoneStructureModifier, $BiomeModifiers$RemoveSpawnCostsBiomeModifier, $NoneBiomeModifier, $StructureModifiers$RemoveSpawnsStructureModifier, $BiomeModifiers$AddSpawnCostsBiomeModifier, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $ModConfig, $IConfigSpec, $IConfigSpec$ILoadedConfig } from "@package/net/neoforged/fml/config";
import { $ServerStoppingEvent } from "@package/net/neoforged/neoforge/event/server";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageType, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as crafting from "@package/net/neoforged/neoforge/common/crafting";
export * as world from "@package/net/neoforged/neoforge/common/world";
export * as extensions from "@package/net/neoforged/neoforge/common/extensions";
export * as data from "@package/net/neoforged/neoforge/common/data";
export * as conditions from "@package/net/neoforged/neoforge/common/conditions";
export * as util from "@package/net/neoforged/neoforge/common/util";
export * as enums from "@package/net/neoforged/neoforge/common/enums";
export * as brewing from "@package/net/neoforged/neoforge/common/brewing";
export * as loot from "@package/net/neoforged/neoforge/common/loot";
export * as damagesource from "@package/net/neoforged/neoforge/common/damagesource";
export * as advancements from "@package/net/neoforged/neoforge/common/advancements";
export * as command from "@package/net/neoforged/neoforge/common/command";
export * as ticket from "@package/net/neoforged/neoforge/common/ticket";
export * as property from "@package/net/neoforged/neoforge/common/property";

declare module "@package/net/neoforged/neoforge/common" {
    export class $TagConventionLogWarning$LogWarningMode extends $Enum<$TagConventionLogWarning$LogWarningMode> {
        static values(): $TagConventionLogWarning$LogWarningMode[];
        static valueOf(arg0: string): $TagConventionLogWarning$LogWarningMode;
        static DEV_SHORT: $TagConventionLogWarning$LogWarningMode;
        static PROD_SHORT: $TagConventionLogWarning$LogWarningMode;
        static DEV_VERBOSE: $TagConventionLogWarning$LogWarningMode;
        static SILENCED: $TagConventionLogWarning$LogWarningMode;
        static PROD_VERBOSE: $TagConventionLogWarning$LogWarningMode;
    }
    /**
     * Values that may be interpreted as {@link $TagConventionLogWarning$LogWarningMode}.
     */
    export type $TagConventionLogWarning$LogWarningMode_ = "silenced" | "dev_short" | "dev_verbose" | "prod_short" | "prod_verbose";
    export class $DeferredSpawnEggItem$CommonHandler {
    }
    export class $IOUtilities$WriteCallback {
    }
    export interface $IOUtilities$WriteCallback {
        write(arg0: $OutputStream): void;
    }
    /**
     * Values that may be interpreted as {@link $IOUtilities$WriteCallback}.
     */
    export type $IOUtilities$WriteCallback_ = ((arg0: $OutputStream) => void);
    export class $ModConfigSpec$Builder {
        comment(arg0: string): $ModConfigSpec$Builder;
        comment(...arg0: string[]): $ModConfigSpec$Builder;
        build(): $ModConfigSpec;
        push(arg0: string): $ModConfigSpec$Builder;
        push(arg0: $List_<string>): $ModConfigSpec$Builder;
        pop(): $ModConfigSpec$Builder;
        pop(arg0: number): $ModConfigSpec$Builder;
        configure<T>(arg0: $Function_<$ModConfigSpec$Builder, T>): $Pair<T, $ModConfigSpec>;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange<V extends $Comparable<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: string, arg1: $Supplier_<V>, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: $List_<string>, arg1: V, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: string, arg1: V, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInList<T>(arg0: string, arg1: T, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: string, arg1: $Supplier_<T>, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: $List_<string>, arg1: T, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        define(arg0: $List_<string>, arg1: boolean): $ModConfigSpec$BooleanValue;
        define<T>(arg0: $List_<string>, arg1: $ModConfigSpec$ValueSpec, arg2: $Supplier_<T>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>, arg3: $Class<never>): $ModConfigSpec$ConfigValue<T>;
        define(arg0: $List_<string>, arg1: $Supplier_<boolean>): $ModConfigSpec$BooleanValue;
        define(arg0: string, arg1: $Supplier_<boolean>): $ModConfigSpec$BooleanValue;
        define<T>(arg0: $List_<string>, arg1: T, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: string, arg1: T, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: T): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: string, arg1: T): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define(arg0: string, arg1: boolean): $ModConfigSpec$BooleanValue;
        define<T>(arg0: string, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        defineList<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: string, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: string, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>, arg4: $ModConfigSpec$Range<number>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: $Supplier_<V>, arg2: $Predicate_<$Object>, arg3: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>, arg4: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, ...arg3: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, ...arg2: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, ...arg3: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, arg3: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, ...arg2: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: $Predicate_<$Object>, arg3: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: $Supplier_<V>, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>, arg4: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, arg3: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        translation(arg0: string): $ModConfigSpec$Builder;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: string, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: string, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        worldRestart(): $ModConfigSpec$Builder;
        gameRestart(): $ModConfigSpec$Builder;
        constructor();
    }
    export class $Tags$Biomes {
        static IS_DEEP_OCEAN: $TagKey<$Biome>;
        static IS_TEMPERATE_NETHER: $TagKey<$Biome>;
        static IS_TEMPERATE_END: $TagKey<$Biome>;
        static IS_SHALLOW_OCEAN: $TagKey<$Biome>;
        static IS_MAGICAL: $TagKey<$Biome>;
        static IS_RIVER: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION: $TagKey<$Biome>;
        static IS_AQUATIC_ICY: $TagKey<$Biome>;
        static IS_NETHER: $TagKey<$Biome>;
        static IS_MOUNTAIN_SLOPE: $TagKey<$Biome>;
        static IS_HILL: $TagKey<$Biome>;
        static IS_TEMPERATE: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION_END: $TagKey<$Biome>;
        static IS_HOT_END: $TagKey<$Biome>;
        static IS_HOT_OVERWORLD: $TagKey<$Biome>;
        static IS_MUSHROOM: $TagKey<$Biome>;
        static IS_PLATEAU: $TagKey<$Biome>;
        static IS_JUNGLE_TREE: $TagKey<$Biome>;
        static IS_CAVE: $TagKey<$Biome>;
        static IS_OUTER_END_ISLAND: $TagKey<$Biome>;
        static IS_VOID: $TagKey<$Biome>;
        static IS_HOT_NETHER: $TagKey<$Biome>;
        static IS_ICY: $TagKey<$Biome>;
        static IS_SANDY: $TagKey<$Biome>;
        static IS_DRY_END: $TagKey<$Biome>;
        static IS_MOUNTAIN_PEAK: $TagKey<$Biome>;
        static IS_MOUNTAIN: $TagKey<$Biome>;
        static HIDDEN_FROM_LOCATOR_SELECTION: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION_NETHER: $TagKey<$Biome>;
        static IS_FLOWER_FOREST: $TagKey<$Biome>;
        static IS_TAIGA: $TagKey<$Biome>;
        static IS_LUSH: $TagKey<$Biome>;
        static IS_COLD_OVERWORLD: $TagKey<$Biome>;
        static IS_CONIFEROUS_TREE: $TagKey<$Biome>;
        static IS_AQUATIC: $TagKey<$Biome>;
        static IS_COLD_NETHER: $TagKey<$Biome>;
        static IS_WINDSWEPT: $TagKey<$Biome>;
        static IS_DRY: $TagKey<$Biome>;
        static IS_DRY_OVERWORLD: $TagKey<$Biome>;
        static IS_FOREST: $TagKey<$Biome>;
        static IS_DESERT: $TagKey<$Biome>;
        static IS_WET_NETHER: $TagKey<$Biome>;
        static IS_BADLANDS: $TagKey<$Biome>;
        static IS_RARE: $TagKey<$Biome>;
        static IS_SPOOKY: $TagKey<$Biome>;
        static IS_DRY_NETHER: $TagKey<$Biome>;
        static NO_DEFAULT_MONSTERS: $TagKey<$Biome>;
        static IS_SAVANNA: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION_END: $TagKey<$Biome>;
        static IS_SNOWY: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION_OVERWORLD: $TagKey<$Biome>;
        static IS_UNDERGROUND: $TagKey<$Biome>;
        static IS_SNOWY_PLAINS: $TagKey<$Biome>;
        static IS_COLD_END: $TagKey<$Biome>;
        static IS_WET_END: $TagKey<$Biome>;
        static IS_SAVANNA_TREE: $TagKey<$Biome>;
        static IS_HOT: $TagKey<$Biome>;
        static IS_BEACH: $TagKey<$Biome>;
        static IS_DECIDUOUS_TREE: $TagKey<$Biome>;
        static IS_PLAINS: $TagKey<$Biome>;
        static IS_SWAMP: $TagKey<$Biome>;
        /**
         * @deprecated
         */
        static IS_MODIFIED: $TagKey<$Biome>;
        static IS_BIRCH_FOREST: $TagKey<$Biome>;
        static IS_TEMPERATE_OVERWORLD: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION: $TagKey<$Biome>;
        static IS_END: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION_OVERWORLD: $TagKey<$Biome>;
        static IS_OLD_GROWTH: $TagKey<$Biome>;
        static IS_NETHER_FOREST: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION_NETHER: $TagKey<$Biome>;
        static IS_OVERWORLD: $TagKey<$Biome>;
        static IS_FLORAL: $TagKey<$Biome>;
        static IS_STONY_SHORES: $TagKey<$Biome>;
        static IS_OCEAN: $TagKey<$Biome>;
        static IS_WASTELAND: $TagKey<$Biome>;
        static IS_COLD: $TagKey<$Biome>;
        static IS_DEAD: $TagKey<$Biome>;
        static IS_WET_OVERWORLD: $TagKey<$Biome>;
        static IS_JUNGLE: $TagKey<$Biome>;
        static IS_WET: $TagKey<$Biome>;
        constructor();
    }
    export class $PercentageAttribute extends $RangedAttribute {
        static MERGED_GRAY: $TextColor;
        static MERGED_RED: $TextColor;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static MERGED_BLUE: $TextColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
    }
    export class $SimpleTier implements $Tier {
        getEnchantmentValue(): number;
        getSpeed(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getAttackDamageBonus(): number;
        getUses(): number;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        constructor(arg0: $TagKey_<$Block>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Supplier_<$Ingredient>);
        get enchantmentValue(): number;
        get speed(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get attackDamageBonus(): number;
        get uses(): number;
    }
    export class $SoundActions {
        static BUCKET_FILL: $SoundAction;
        static BUCKET_EMPTY: $SoundAction;
        static FLUID_VAPORIZE: $SoundAction;
        static CAULDRON_DRIP: $SoundAction;
    }
    export class $IOUtilities {
        static writeNbtCompressed(arg0: $CompoundTag_, arg1: $Path_): void;
        static withIOWorker(arg0: $Runnable_): void;
        static writeNbt(arg0: $CompoundTag_, arg1: $Path_): void;
        static waitUntilIOWorkerComplete(): void;
        static atomicWrite(arg0: $Path_, arg1: $IOUtilities$WriteCallback_): void;
        /**
         * @deprecated
         */
        static cleanupTempFiles(arg0: $Path_, arg1: string): void;
        static tryCleanupTempFiles(arg0: $Path_, arg1: string): void;
    }
    export class $Tags$DamageTypes {
        static IS_PHYSICAL: $TagKey<$DamageType>;
        static IS_ENVIRONMENT: $TagKey<$DamageType>;
        static NO_FLINCH: $TagKey<$DamageType>;
        static IS_TECHNICAL: $TagKey<$DamageType>;
        static IS_POISON: $TagKey<$DamageType>;
        static IS_MAGIC: $TagKey<$DamageType>;
        static IS_WITHER: $TagKey<$DamageType>;
        constructor();
    }
    export class $WorldWorkerManager$IWorker {
    }
    export interface $WorldWorkerManager$IWorker {
        hasWork(): boolean;
        doWork(): boolean;
    }
    export class $NeoForgeMod {
        gatherData(arg0: $GatherDataEvent): void;
        static enableMilkFluid(): void;
        static enableProperFilenameValidation(): void;
        static enableMergedAttributeTooltips(): void;
        static shouldMergeAttributeTooltips(): boolean;
        static getProperFilenameValidation(): boolean;
        registerLootData(arg0: $RegisterEvent): void;
        loadComplete(arg0: $FMLLoadCompleteEvent): void;
        serverStopping(arg0: $ServerStoppingEvent): void;
        registerFluids(arg0: $RegisterEvent): void;
        preInit(arg0: $FMLCommonSetupEvent): void;
        static isPRBuild(): boolean;
        registerPermissionNodes(arg0: $PermissionGatherEvent$Nodes): void;
        static REMOVE_SPAWNS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveSpawnsBiomeModifier>>;
        static NAMETAG_DISTANCE: $Holder<$Attribute>;
        static VERSION_CHECK_CAT: string;
        static EMPTY_TYPE: $Holder<$FluidType>;
        static OR_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$OrCondition>>;
        static PIGLIN_CURRENCY_PREDICATE: $DeferredHolder<$ItemSubPredicate$Type<never>, $ItemSubPredicate$Type<$PiglinCurrencyItemPredicate>>;
        static ANY_HOLDER_SET: $Holder<$HolderSetType>;
        static ADD_SPAWN_COSTS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddSpawnCostsBiomeModifier>>;
        static WATER_TYPE: $Holder<$FluidType>;
        static SNOW_BOOTS_PREDICATE: $DeferredHolder<$MapCodec<$EntitySubPredicate>, $MapCodec<$SnowBootsEntityPredicate>>;
        static DATA_COMPONENT_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$DataComponentIngredient>>;
        static LAVA_TYPE: $Holder<$FluidType>;
        static DIFFERENCE_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$DifferenceIngredient>>;
        static ADD_TABLE_LOOT_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$IGlobalLootModifier>, $MapCodec<$AddTableLootModifier>>;
        static NOT_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$NotCondition>>;
        static BUCKET_FILL_MILK: $DeferredHolder<$SoundEvent, $SoundEvent>;
        static CLEAR_SPAWNS_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$StructureModifiers$ClearSpawnsStructureModifier>>;
        static ADD_FEATURES_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddFeaturesBiomeModifier>>;
        static MOD_LOADED_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$ModLoadedCondition>>;
        static POISON_DAMAGE: $ResourceKey<$DamageType>;
        static REMOVE_FEATURES_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveFeaturesBiomeModifier>>;
        static MILK: $DeferredHolder<$Fluid, $Fluid>;
        static SINGLE_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$SingleFluidIngredient>>;
        static BUCKET_EMPTY_MILK: $DeferredHolder<$SoundEvent, $SoundEvent>;
        static CREATIVE_FLIGHT: $Holder<$Attribute>;
        static COMPOUND_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$CompoundIngredient>>;
        static TAG_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$TagFluidIngredient>>;
        static AND_HOLDER_SET: $Holder<$HolderSetType>;
        static REMOVE_SPAWN_COSTS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveSpawnCostsBiomeModifier>>;
        static ADD_SPAWNS_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$StructureModifiers$AddSpawnsStructureModifier>>;
        static INTERSECTION_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$IntersectionFluidIngredient>>;
        static FALSE_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$FalseCondition>>;
        static INTERSECTION_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$IntersectionIngredient>>;
        static NONE_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$NoneBiomeModifier>>;
        static ITEM_ABILITY_PREDICATE: $DeferredHolder<$ItemSubPredicate$Type<never>, $ItemSubPredicate$Type<$ItemAbilityPredicate>>;
        static AND_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$AndCondition>>;
        static EMPTY_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$EmptyFluidIngredient>>;
        static DATA_COMPONENT_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$DataComponentFluidIngredient>>;
        static NOT_HOLDER_SET: $Holder<$HolderSetType>;
        static MILK_TYPE: $DeferredHolder<$FluidType, $FluidType>;
        static NONE_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$NoneStructureModifier>>;
        static FLOWING_MILK: $DeferredHolder<$Fluid, $Fluid>;
        static OR_HOLDER_SET: $Holder<$HolderSetType>;
        static PIGLIN_NEUTRAL_ARMOR_PREDICATE: $DeferredHolder<$MapCodec<$EntitySubPredicate>, $MapCodec<$PiglinNeutralArmorEntityPredicate>>;
        static SWIM_SPEED: $Holder<$Attribute>;
        static COMPOUND_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$CompoundFluidIngredient>>;
        static TRUE_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$TrueCondition>>;
        static ADD_SPAWNS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddSpawnsBiomeModifier>>;
        static TAG_EMPTY_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$TagEmptyCondition>>;
        static ADD_CARVERS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddCarversBiomeModifier>>;
        static REMOVE_SPAWNS_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$StructureModifiers$RemoveSpawnsStructureModifier>>;
        static BLOCK_TAG_INGREDIENT: $DeferredHolder<$IngredientType<never>, $IngredientType<$BlockTagIngredient>>;
        static USE_SELECTORS_PERMISSION: $PermissionNode<boolean>;
        static REMOVE_CARVERS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveCarversBiomeModifier>>;
        static DIFFERENCE_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$DifferenceFluidIngredient>>;
        static ITEM_EXISTS_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$ItemExistsCondition>>;
        constructor(arg0: $IEventBus, arg1: $Dist_, arg2: $ModContainer);
        static get properFilenameValidation(): boolean;
        static get PRBuild(): boolean;
    }
    export class $EffectCures {
        static HONEY: $EffectCure;
        static PROTECTED_BY_TOTEM: $EffectCure;
        static MILK: $EffectCure;
        static DEFAULT_CURES: $Set<$EffectCure>;
        constructor();
    }
    export class $BasicItemListing implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(arg0: number, arg1: $ItemStack_, arg2: number, arg3: number);
        constructor(arg0: number, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
    }
    export class $ModConfigSpec$IntValue extends $ModConfigSpec$ConfigValue<number> implements $IntSupplier {
        getAsInt(): number;
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<number>): number;
        get asInt(): number;
    }
    export class $LenientUnboundedMapCodec<K, V> implements $BaseMapCodec<K, V>, $Codec<$Map<K, V>> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair$1<$Map<K, V>, T>>;
        decode<T>(arg0: $DynamicOps<T>, arg1: $MapLike<T>): $DataResult<$Map<K, V>>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        keyCodec(): $Codec<K>;
        elementCodec(): $Codec<V>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Map<K, V>, $DataResult<$Map<K, V>>>): $Codec<$Map<K, V>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Consumer_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        listOf(): $Codec<$List<$Map<K, V>>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Map<K, V>>>;
        xmap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        flatXmap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        mapResult(arg0: $Codec$ResultFunction<$Map_<K, V>>): $Codec<$Map<K, V>>;
        stable(): $Codec<$Map<K, V>>;
        deprecated(arg0: number): $Codec<$Map<K, V>>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Map<K, V>>>, arg2: $Function_<$Map<K, V>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        comapFlatMap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Map<K, V>>>;
        dispatchStable<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        flatComapMap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        comap<B>(arg0: $Function_<B, $Map<K, V>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Map<K, V>>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $Map_<K, V>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair$1<$Map<K, V>, T>>;
        map<B>(arg0: $Function_<$Map<K, V>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Map<K, V>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Map<K, V>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Map<K, V>>;
        boxed(): $Decoder$Boxed<$Map<K, V>>;
        terminal(): $Decoder$Terminal<$Map<K, V>>;
        simple(): $Decoder$Simple<$Map<K, V>>;
        fieldOf(arg0: string): $MapEncoder<$Map<K, V>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$Map<K, V>>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<$Map<K, V>>;
        constructor(arg0: $Codec<K>, arg1: $Codec<V>);
    }
    export class $NeoForgeConfig$Common {
        attributeAdvancedTooltipDebugInfo: $ModConfigSpec$BooleanValue;
        logLegacyTagWarnings: $ModConfigSpec$EnumValue<$TagConventionLogWarning$LogWarningMode>;
        logUntranslatedItemTagWarnings: $ModConfigSpec$EnumValue<$TagConventionLogWarning$LogWarningMode>;
    }
    export class $VillagerTradingManager {
        constructor();
    }
    export class $IMinecartCollisionHandler {
    }
    export interface $IMinecartCollisionHandler {
        getBoundingBox(arg0: $AbstractMinecart): $AABB;
        onEntityCollision(arg0: $AbstractMinecart, arg1: $Entity): void;
        getMinecartCollisionBox(arg0: $AbstractMinecart): $AABB;
        getCollisionBox(arg0: $AbstractMinecart, arg1: $Entity): $AABB;
    }
    export class $CreativeModeTabRegistry {
        static getName(arg0: $CreativeModeTab_): $ResourceLocation;
        static getTab(arg0: $ResourceLocation_): $CreativeModeTab;
        static sortTabs(): void;
        static getDefaultTabs(): $List<$CreativeModeTab>;
        static getSortedCreativeModeTabs(): $List<$CreativeModeTab>;
        constructor();
        static get defaultTabs(): $List<$CreativeModeTab>;
        static get sortedCreativeModeTabs(): $List<$CreativeModeTab>;
    }
    export class $ItemAbility {
        name(): string;
        static get(arg0: string): $ItemAbility;
        static getActions(): $Collection<$ItemAbility>;
        static CODEC: $Codec<$ItemAbility>;
        static get actions(): $Collection<$ItemAbility>;
    }
    /**
     * Values that may be interpreted as {@link $ItemAbility}.
     */
    export type $ItemAbility_ = "shield_block" | "sword_sweep" | "till" | "pickaxe_dig" | "axe_strip" | "axe_scrape" | "shears_dig" | "shears_trim" | "brush_brush" | "spyglass_scope" | "axe_wax_off" | "shovel_flatten" | "shovel_dig" | "shovel_douse" | "create:extinguish_flame" | "trident_throw" | "wirecutter_dig" | "wrench_configure" | "axe_dig" | "hoe_dig" | "shears_remove_armor" | "sword_dig" | "shears_disarm" | "fishing_rod_cast" | "wrench_rotate" | "shears_harvest" | "shears_carve" | "firestarter_light" | "wrench_empty";
    export class $ModConfigSpec$ValueSpec {
        test(arg0: $Object): boolean;
        getDefault(): $Object;
        getComment(): string;
        correct(arg0: $Object): $Object;
        getRange<V extends $Comparable<V>>(): $ModConfigSpec$Range<V>;
        getClazz(): $Class<never>;
        restartType(): $ModConfigSpec$RestartType;
        getTranslationKey(): string;
        get default(): $Object;
        get comment(): string;
        get range(): $ModConfigSpec$Range<V>;
        get clazz(): $Class<never>;
        get translationKey(): string;
    }
    export class $Tags$Blocks {
        static COBBLESTONES_MOSSY: $TagKey<$Block>;
        static DYED_BROWN: $TagKey<$Block>;
        static SANDSTONE_STAIRS: $TagKey<$Block>;
        static PUMPKINS_JACK_O_LANTERNS: $TagKey<$Block>;
        static STORAGE_BLOCKS_IRON: $TagKey<$Block>;
        static FENCES: $TagKey<$Block>;
        static ORE_RATES_SPARSE: $TagKey<$Block>;
        static SANDSTONE_UNCOLORED_SLABS: $TagKey<$Block>;
        static ROPES: $TagKey<$Block>;
        static DYED_PINK: $TagKey<$Block>;
        static ORES_COAL: $TagKey<$Block>;
        static CHESTS_TRAPPED: $TagKey<$Block>;
        static SANDSTONE_RED_BLOCKS: $TagKey<$Block>;
        static NEEDS_GOLD_TOOL: $TagKey<$Block>;
        static NEEDS_WOOD_TOOL: $TagKey<$Block>;
        static BOOKSHELVES: $TagKey<$Block>;
        static OBSIDIANS: $TagKey<$Block>;
        static DYED_BLUE: $TagKey<$Block>;
        static DYED_RED: $TagKey<$Block>;
        static DYED_GRAY: $TagKey<$Block>;
        static GLASS_BLOCKS_COLORLESS: $TagKey<$Block>;
        static PLAYER_WORKSTATIONS_CRAFTING_TABLES: $TagKey<$Block>;
        static SANDSTONE_RED_SLABS: $TagKey<$Block>;
        static STORAGE_BLOCKS_WHEAT: $TagKey<$Block>;
        static BARRELS_WOODEN: $TagKey<$Block>;
        static STORAGE_BLOCKS_LAPIS: $TagKey<$Block>;
        static DYED_PURPLE: $TagKey<$Block>;
        static STORAGE_BLOCKS_REDSTONE: $TagKey<$Block>;
        static RELOCATION_NOT_SUPPORTED: $TagKey<$Block>;
        static SANDSTONE_UNCOLORED_BLOCKS: $TagKey<$Block>;
        static STORAGE_BLOCKS_COAL: $TagKey<$Block>;
        static BUDS: $TagKey<$Block>;
        static ORES_IRON: $TagKey<$Block>;
        static ORES_REDSTONE: $TagKey<$Block>;
        static ENDERMAN_PLACE_ON_BLACKLIST: $TagKey<$Block>;
        static ORES_GOLD: $TagKey<$Block>;
        static STORAGE_BLOCKS: $TagKey<$Block>;
        static COBBLESTONES_INFESTED: $TagKey<$Block>;
        static SANDS_COLORLESS: $TagKey<$Block>;
        static OBSIDIANS_CRYING: $TagKey<$Block>;
        static VILLAGER_JOB_SITES: $TagKey<$Block>;
        static DYED_MAGENTA: $TagKey<$Block>;
        static STORAGE_BLOCKS_BONE_MEAL: $TagKey<$Block>;
        static SKULLS: $TagKey<$Block>;
        static PUMPKINS_NORMAL: $TagKey<$Block>;
        static OBSIDIANS_NORMAL: $TagKey<$Block>;
        static DYED_CYAN: $TagKey<$Block>;
        static STORAGE_BLOCKS_GOLD: $TagKey<$Block>;
        static GLAZED_TERRACOTTAS: $TagKey<$Block>;
        static FENCE_GATES: $TagKey<$Block>;
        static STORAGE_BLOCKS_RAW_GOLD: $TagKey<$Block>;
        static STORAGE_BLOCKS_DRIED_KELP: $TagKey<$Block>;
        static FENCE_GATES_WOODEN: $TagKey<$Block>;
        static DYED_GREEN: $TagKey<$Block>;
        static ORES_EMERALD: $TagKey<$Block>;
        static ORES_COPPER: $TagKey<$Block>;
        static PUMPKINS_CARVED: $TagKey<$Block>;
        static ORE_RATES_DENSE: $TagKey<$Block>;
        static STORAGE_BLOCKS_NETHERITE: $TagKey<$Block>;
        static BARRELS: $TagKey<$Block>;
        static ORES_LAPIS: $TagKey<$Block>;
        static GLASS_PANES_COLORLESS: $TagKey<$Block>;
        static STORAGE_BLOCKS_COPPER: $TagKey<$Block>;
        static ORE_BEARING_GROUND_STONE: $TagKey<$Block>;
        static ORES_IN_GROUND_STONE: $TagKey<$Block>;
        static DYED_LIME: $TagKey<$Block>;
        static GLASS_BLOCKS_TINTED: $TagKey<$Block>;
        static GLASS_PANES: $TagKey<$Block>;
        static GLASS_BLOCKS: $TagKey<$Block>;
        static PLAYER_WORKSTATIONS_FURNACES: $TagKey<$Block>;
        static GRAVELS: $TagKey<$Block>;
        static COBBLESTONES_NORMAL: $TagKey<$Block>;
        static DYED_ORANGE: $TagKey<$Block>;
        static SANDSTONE_SLABS: $TagKey<$Block>;
        static CLUSTERS: $TagKey<$Block>;
        static PUMPKINS: $TagKey<$Block>;
        static STORAGE_BLOCKS_DIAMOND: $TagKey<$Block>;
        static BUDDING_BLOCKS: $TagKey<$Block>;
        static CHAINS: $TagKey<$Block>;
        static STRIPPED_WOODS: $TagKey<$Block>;
        static FENCES_NETHER_BRICK: $TagKey<$Block>;
        static STORAGE_BLOCKS_RAW_IRON: $TagKey<$Block>;
        static ORES_QUARTZ: $TagKey<$Block>;
        static STONES: $TagKey<$Block>;
        static SANDS_RED: $TagKey<$Block>;
        static DYED_LIGHT_GRAY: $TagKey<$Block>;
        static SANDSTONE_UNCOLORED_STAIRS: $TagKey<$Block>;
        static GLASS_BLOCKS_CHEAP: $TagKey<$Block>;
        static DYED_BLACK: $TagKey<$Block>;
        static DYED_WHITE: $TagKey<$Block>;
        static DYED: $TagKey<$Block>;
        static DYED_LIGHT_BLUE: $TagKey<$Block>;
        static ORES_DIAMOND: $TagKey<$Block>;
        static DYED_YELLOW: $TagKey<$Block>;
        static ORES_IN_GROUND_DEEPSLATE: $TagKey<$Block>;
        static SANDSTONE_BLOCKS: $TagKey<$Block>;
        static STORAGE_BLOCKS_RAW_COPPER: $TagKey<$Block>;
        static STRIPPED_LOGS: $TagKey<$Block>;
        static CHESTS_ENDER: $TagKey<$Block>;
        static SANDSTONE_RED_STAIRS: $TagKey<$Block>;
        static VILLAGER_FARMLANDS: $TagKey<$Block>;
        static STORAGE_BLOCKS_SLIME: $TagKey<$Block>;
        static COBBLESTONES: $TagKey<$Block>;
        static FENCES_WOODEN: $TagKey<$Block>;
        static NETHERRACKS: $TagKey<$Block>;
        static ORES_IN_GROUND_NETHERRACK: $TagKey<$Block>;
        static COBBLESTONES_DEEPSLATE: $TagKey<$Block>;
        static NEEDS_NETHERITE_TOOL: $TagKey<$Block>;
        static CONCRETES: $TagKey<$Block>;
        static ORES_NETHERITE_SCRAP: $TagKey<$Block>;
        static CHESTS_WOODEN: $TagKey<$Block>;
        static HIDDEN_FROM_RECIPE_VIEWERS: $TagKey<$Block>;
        static ORE_RATES_SINGULAR: $TagKey<$Block>;
        static STORAGE_BLOCKS_EMERALD: $TagKey<$Block>;
        static ORES: $TagKey<$Block>;
        static ORE_BEARING_GROUND_DEEPSLATE: $TagKey<$Block>;
        static ORE_BEARING_GROUND_NETHERRACK: $TagKey<$Block>;
        static CHESTS: $TagKey<$Block>;
        static END_STONES: $TagKey<$Block>;
        static SANDS: $TagKey<$Block>;
        constructor();
    }
    export class $NeoForge {
        static EVENT_BUS: $IEventBus;
        constructor();
    }
    export class $MonsterRoomHooks$MobEntry extends $Record implements $WeightedEntry {
        type(): $EntityType<never>;
        weight(): $Weight;
        getWeight(): $Weight;
        constructor(type: $EntityType_<never>, weight: $Weight);
    }
    export class $DataMapHooks {
        static getBlockUnwaxed(arg0: $Block_): $Block;
        static getBlockWaxed(arg0: $Block_): $Block;
        static getPreviousOxidizedStage(arg0: $Block_): $Block;
        static getNextOxidizedStage(arg0: $Block_): $Block;
        static INVERSE_WAXABLES_DATAMAP: $Map<$Block, $Block>;
        static didHaveToFallbackToVanillaMaps: boolean;
        static INVERSE_OXIDIZABLES_DATAMAP: $Map<$Block, $Block>;
        constructor();
    }
    export class $TagConventionLogWarning {
    }
    export class $Tags$Enchantments {
        static ENTITY_AUXILIARY_MOVEMENT_ENHANCEMENTS: $TagKey<$Enchantment>;
        static INCREASE_ENTITY_DROPS: $TagKey<$Enchantment>;
        static ENTITY_DEFENSE_ENHANCEMENTS: $TagKey<$Enchantment>;
        static WEAPON_DAMAGE_ENHANCEMENTS: $TagKey<$Enchantment>;
        static INCREASE_BLOCK_DROPS: $TagKey<$Enchantment>;
        static ENTITY_SPEED_ENHANCEMENTS: $TagKey<$Enchantment>;
        constructor();
    }
    export class $Tags$EntityTypes {
        static BOATS: $TagKey<$EntityType<never>>;
        static CAPTURING_NOT_SUPPORTED: $TagKey<$EntityType<never>>;
        static BOSSES: $TagKey<$EntityType<never>>;
        static TELEPORTING_NOT_SUPPORTED: $TagKey<$EntityType<never>>;
        static MINECARTS: $TagKey<$EntityType<never>>;
        constructor();
    }
    export class $SoundAction {
        name(): string;
        static get(arg0: string): $SoundAction;
    }
    export class $ModConfigSpec$DoubleValue extends $ModConfigSpec$ConfigValue<number> implements $DoubleSupplier {
        getAsDouble(): number;
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<number>): number;
        get asDouble(): number;
    }
    export class $ModConfigSpec implements $IConfigSpec {
        isEmpty(): boolean;
        save(): void;
        isLoaded(): boolean;
        correct(arg0: $CommentedConfig): void;
        correct(arg0: $CommentedConfig, arg1: $ConfigSpec$CorrectionListener_, arg2: $ConfigSpec$CorrectionListener_): number;
        correct(arg0: $CommentedConfig, arg1: $ConfigSpec$CorrectionListener_): number;
        isCorrect(arg0: $UnmodifiableCommentedConfig): boolean;
        validateSpec(arg0: $ModConfig): void;
        acceptConfig(arg0: $IConfigSpec$ILoadedConfig): void;
        getValues(): $UnmodifiableConfig;
        afterReload(): void;
        getLevelComment(arg0: $List_<string>): string;
        resetCaches(arg0: $ModConfigSpec$RestartType_): void;
        getSpec(): $UnmodifiableConfig;
        getLevelTranslationKey(arg0: $List_<string>): string;
        get empty(): boolean;
        get loaded(): boolean;
        get values(): $UnmodifiableConfig;
        get spec(): $UnmodifiableConfig;
    }
    export class $WorldWorkerManager {
        static clear(): void;
        static tick(arg0: boolean): void;
        static addWorker(arg0: $WorldWorkerManager$IWorker): void;
        constructor();
    }
    export class $DeferredSpawnEggItem$ColorRegisterHandler {
    }
    export class $CommonHooks {
        static getEntityVisibilityMultiplier(arg0: $LivingEntity, arg1: $Entity, arg2: number): number;
        static canEntityDestroy(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        static handleBlockDrops(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $List_<$ItemEntity>, arg5: $Entity, arg6: $ItemStack_): void;
        static onChangeGameType(arg0: $Player, arg1: $GameType_, arg2: $GameType_): $GameType;
        static onVanillaGameEvent(arg0: $Level_, arg1: $Holder_<$GameEvent>, arg2: $Vec3_, arg3: $GameEvent$Context_): boolean;
        /**
         * @deprecated
         */
        static modifyAttributes(): void;
        static getVanillaFluidType(arg0: $Fluid_): $FluidType;
        static getCraftingRemainingItem(arg0: $ItemStack_): $ItemStack;
        static getDefaultCreatorModId(arg0: $ItemStack_): string;
        static newChatWithLinks(arg0: string, arg1: boolean): $Component;
        static newChatWithLinks(arg0: string): $Component;
        static fireBlockBreak(arg0: $Level_, arg1: $GameType_, arg2: $ServerPlayer, arg3: $BlockPos_, arg4: $BlockState_): $BlockEvent$BreakEvent;
        static onDifficultyChange(arg0: $Difficulty_, arg1: $Difficulty_): void;
        static setCraftingPlayer(arg0: $Player): void;
        static onLeftClickBlock(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $ServerboundPlayerActionPacket$Action_): $PlayerInteractEvent$LeftClickBlock;
        /**
         * @deprecated
         */
        static onGrindstoneTake(arg0: $Container, arg1: $ContainerLevelAccess_, arg2: $Function_<$Level, number>): boolean;
        static onGrindstoneTake(arg0: $Container, arg1: $ContainerLevelAccess_, arg2: $Player, arg3: $Function_<$Level, number>): boolean;
        static onRightClickBlock(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $BlockHitResult): $PlayerInteractEvent$RightClickBlock;
        static lootPoolsCodec(arg0: $BiConsumer_<$LootPool, string>): $Codec<$List<$LootPool>>;
        static getModDataPacks(): $List<string>;
        static getSerializer(arg0: number, arg1: $CrudeIncrementalIntIdentityHashBiMap<$EntityDataSerializer_<never>>): $EntityDataSerializer<never>;
        static getSerializerId(arg0: $EntityDataSerializer_<never>, arg1: $CrudeIncrementalIntIdentityHashBiMap<$EntityDataSerializer_<never>>): number;
        static parseLifecycle(arg0: string): $Lifecycle;
        static loadMobEffect(arg0: $CompoundTag_, arg1: string, arg2: $MobEffect_): $MobEffect;
        static onClientMineHold(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_): $PlayerInteractEvent$LeftClickBlock;
        static getCraftingPlayer(): $Player;
        static encodeLifecycle(arg0: $Lifecycle): string;
        static wrapRegistryLookup<T>(arg0: $HolderLookup$RegistryLookup<T>): $HolderLookup$RegistryLookup<T>;
        /**
         * @deprecated
         */
        static getAttributesView(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static onItemRightClick(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        static onInteractEntityAt(arg0: $Player, arg1: $Entity, arg2: $Vec3_, arg3: $InteractionHand_): $InteractionResult;
        static onInteractEntityAt(arg0: $Player, arg1: $Entity, arg2: $HitResult, arg3: $InteractionHand_): $InteractionResult;
        static saveMobEffect(arg0: $CompoundTag_, arg1: string, arg2: $MobEffect_): void;
        static onChunkUnload(arg0: $PoiManager, arg1: $ChunkAccess): void;
        static resolveLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        static onEntityIncomingDamage(arg0: $LivingEntity, arg1: $DamageContainer): boolean;
        /**
         * @deprecated
         */
        static canMobEffectBeApplied(arg0: $LivingEntity, arg1: $MobEffectInstance): boolean;
        static canMobEffectBeApplied(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $Entity): boolean;
        static onLivingSwapHandItems(arg0: $LivingEntity): $LivingSwapItemsEvent$Hands;
        static onTravelToDimension(arg0: $Entity, arg1: $ResourceKey_<$Level>): boolean;
        static isEntityInvulnerableTo(arg0: $Entity, arg1: $DamageSource_, arg2: boolean): boolean;
        static onPlayerTossEvent(arg0: $Player, arg1: $ItemStack_, arg2: boolean): $ItemEntity;
        static onInteractEntity(arg0: $Player, arg1: $Entity, arg2: $InteractionHand_): $InteractionResult;
        static fireSweepAttack(arg0: $Player, arg1: $Entity, arg2: boolean): $SweepAttackEvent;
        static fireCriticalHit(arg0: $Player, arg1: $Entity, arg2: boolean, arg3: number): $CriticalHitEvent;
        static getStructureConversion(arg0: string): $StructuresBecomeConfiguredFix$Conversion;
        static checkStructureNamespace(arg0: string): boolean;
        static onLivingDamagePre(arg0: $LivingEntity, arg1: $DamageContainer): number;
        static onLivingDamagePost(arg0: $LivingEntity, arg1: $DamageContainer): void;
        static onLivingFall(arg0: $LivingEntity, arg1: number, arg2: number): number[];
        static isLivingOnLadder(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $LivingEntity): ($BlockPos) | undefined;
        static onLivingKnockBack(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number): $LivingKnockBackEvent;
        static onArmorHurt(arg0: $DamageSource_, arg1: $EquipmentSlot_[], arg2: number, arg3: $LivingEntity): void;
        static onLivingJump(arg0: $LivingEntity): void;
        static canContinueUsing(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static getProjectile(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemStack_): $ItemStack;
        static onLivingBreathe(arg0: $LivingEntity, arg1: number, arg2: number): void;
        static onDamageBlock(arg0: $LivingEntity, arg1: $DamageContainer, arg2: boolean): $LivingShieldBlockEvent;
        static onLivingDeath(arg0: $LivingEntity, arg1: $DamageSource_): boolean;
        static onLivingUseTotem(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $ItemStack_, arg3: $InteractionHand_): boolean;
        static onLivingDrops(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $Collection_<$ItemEntity>, arg3: boolean): boolean;
        static onEmptyLeftClick(arg0: $Player): void;
        static onEmptyClick(arg0: $Player, arg1: $InteractionHand_): void;
        static onPlayerEnchantItem(arg0: $Player, arg1: $ItemStack_, arg2: $List_<$EnchantmentInstance>): void;
        static onPlaceItemIntoWorld(arg0: $UseOnContext): $InteractionResult;
        static computeModifiedAttributes(arg0: $ItemStack_, arg1: $ItemAttributeModifiers_): $ItemAttributeModifiers;
        static onAnvilChange(arg0: $AnvilMenu, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $Container, arg4: string, arg5: number, arg6: $Player): boolean;
        static onAnvilRepair(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_): number;
        static onGrindstoneChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Container, arg3: number): number;
        static validateComponent(arg0: $Object): void;
        static prefixNamespace(arg0: $ResourceLocation_): string;
        static onPlayerAttackTarget(arg0: $Player, arg1: $Entity): boolean;
        static extractLookupProvider(arg0: $RegistryOps<never>): $HolderLookup$Provider;
        static dispenseUseOnContext(arg0: $BlockSource_, arg1: $ItemStack_): $UseOnContext;
        static getTagFromVanillaTier(arg0: $Tiers_): $TagKey<$Block>;
        static onCheckCreativeTabs(...arg0: $CreativeModeTab_[]): $Collection<$CreativeModeTab>;
        static getModDataPacksWithVanilla(): $List<string>;
        static canUseEntitySelectors(arg0: $SharedSuggestionProvider): boolean;
        static onEntityEnterSection(arg0: $Entity, arg1: number, arg2: number): void;
        static markComponentClassAsValid(arg0: $Class<never>): void;
        static onServerChatSubmittedEvent(arg0: $ServerPlayer, arg1: string, arg2: $Component_): $Component;
        static onLivingChangeTarget(arg0: $LivingEntity, arg1: $LivingEntity, arg2: $LivingChangeTargetEvent$ILivingTargetType): $LivingChangeTargetEvent;
        static onItemStackedOn(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Slot, arg3: $ClickAction_, arg4: $Player, arg5: $SlotAccess): boolean;
        static onNoteChange(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number): number;
        static canCropGrow(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): boolean;
        static fireCropGrowPost(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        static onFarmlandTrample(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: $Entity): boolean;
        static tryDispenseShearsHarvestBlock(arg0: $BlockSource_, arg1: $ItemStack_, arg2: $ServerLevel, arg3: $BlockPos_): boolean;
        static getFilteredRecipeBookTypeValues(): $RecipeBookType[];
        static getServerChatSubmittedDecorator(): $ChatDecorator;
        static buildRecipeBookTypeTagFields(arg0: $Map_<$RecipeBookType_, $Pair$1<string, string>>): $Map<$RecipeBookType, $Pair$1<string, string>>;
        static readAdditionalLevelSaveData(arg0: $CompoundTag_, arg1: $LevelStorageSource$LevelDirectory_): void;
        static shouldSuppressEnderManAnger(arg0: $EnderMan, arg1: $Player, arg2: $ItemStack_): boolean;
        static writeAdditionalLevelSaveData(arg0: $WorldData, arg1: $CompoundTag_): void;
        static modifyLoot(arg0: $ResourceLocation_, arg1: $ObjectArrayList<$ItemStack_>, arg2: $LootContext): $ObjectArrayList<$ItemStack>;
        /**
         * @deprecated
         */
        static modifyLoot(arg0: $List_<$ItemStack_>, arg1: $LootContext): $List<$ItemStack>;
        static VANILLA_SERIALIZER_LIMIT: number;
        constructor();
        static get modDataPacks(): $List<string>;
        static get attributesView(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get modDataPacksWithVanilla(): $List<string>;
        static get filteredRecipeBookTypeValues(): $RecipeBookType[];
        static get serverChatSubmittedDecorator(): $ChatDecorator;
    }
    export class $Tags {
        static getTagTranslationKey(arg0: $TagKey_<never>): string;
        constructor();
    }
    export class $NeoForgeEventHandler {
        resourceReloadListeners(arg0: $AddReloadListenerEvent): void;
        playerLogin(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        onResourceReload(arg0: $AddReloadListenerEvent): void;
        onChunkUnload(arg0: $ChunkEvent$Unload): void;
        onEntityJoinWorld(arg0: $EntityJoinLevelEvent): void;
        preServerTick(arg0: $ServerTickEvent$Pre): void;
        postServerTick(arg0: $ServerTickEvent$Post): void;
        onCommandsRegister(arg0: $RegisterCommandsEvent): void;
        onDimensionUnload(arg0: $LevelEvent$Unload): void;
        tagsUpdated(arg0: $TagsUpdatedEvent): void;
        onDpSync(arg0: $OnDatapackSyncEvent): void;
        builtinMobSpawnBlocker(arg0: $EntityJoinLevelEvent): void;
        constructor();
    }
    export class $ModConfigSpec$RestartType extends $Enum<$ModConfigSpec$RestartType> {
        static values(): $ModConfigSpec$RestartType[];
        static valueOf(arg0: string): $ModConfigSpec$RestartType;
        "with"(arg0: $ModConfigSpec$RestartType_): $ModConfigSpec$RestartType;
        static GAME: $ModConfigSpec$RestartType;
        static NONE: $ModConfigSpec$RestartType;
        static WORLD: $ModConfigSpec$RestartType;
    }
    /**
     * Values that may be interpreted as {@link $ModConfigSpec$RestartType}.
     */
    export type $ModConfigSpec$RestartType_ = "none" | "world" | "game";
    export class $ItemAbilities {
        static DEFAULT_SWORD_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_PICKAXE_ACTIONS: $Set<$ItemAbility>;
        static AXE_DIG: $ItemAbility;
        static HOE_DIG: $ItemAbility;
        static AXE_STRIP: $ItemAbility;
        static TRIDENT_THROW: $ItemAbility;
        static SHEARS_CARVE: $ItemAbility;
        static DEFAULT_FLINT_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_FISHING_ROD_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_SHOVEL_ACTIONS: $Set<$ItemAbility>;
        static SPYGLASS_SCOPE: $ItemAbility;
        static SWORD_DIG: $ItemAbility;
        static DEFAULT_SPYGLASS_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_SHEARS_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_TRIDENT_ACTIONS: $Set<$ItemAbility>;
        static AXE_SCRAPE: $ItemAbility;
        static SHEARS_REMOVE_ARMOR: $ItemAbility;
        static SHEARS_TRIM: $ItemAbility;
        static DEFAULT_FIRECHARGE_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_AXE_ACTIONS: $Set<$ItemAbility>;
        static SHIELD_BLOCK: $ItemAbility;
        static DEFAULT_HOE_ACTIONS: $Set<$ItemAbility>;
        static BRUSH_BRUSH: $ItemAbility;
        static DEFAULT_SHIELD_ACTIONS: $Set<$ItemAbility>;
        static FISHING_ROD_CAST: $ItemAbility;
        static SHEARS_HARVEST: $ItemAbility;
        static DEFAULT_BRUSH_ACTIONS: $Set<$ItemAbility>;
        static PICKAXE_DIG: $ItemAbility;
        static AXE_WAX_OFF: $ItemAbility;
        static SWORD_SWEEP: $ItemAbility;
        static SHEARS_DIG: $ItemAbility;
        static SHEARS_DISARM: $ItemAbility;
        static HOE_TILL: $ItemAbility;
        static FIRESTARTER_LIGHT: $ItemAbility;
        static SHOVEL_DIG: $ItemAbility;
        static SHOVEL_FLATTEN: $ItemAbility;
        static SHOVEL_DOUSE: $ItemAbility;
        constructor();
    }
    export class $UsernameCache$SaveThread extends $Thread {
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
    }
    export class $NeoForgeConfig$Server {
        permissionHandler: $ModConfigSpec$ConfigValue<string>;
        removeErroringEntities: $ModConfigSpec$BooleanValue;
        advertiseDedicatedServerToLan: $ModConfigSpec$BooleanValue;
        fullBoundingBoxLadders: $ModConfigSpec$BooleanValue;
        removeErroringBlockEntities: $ModConfigSpec$BooleanValue;
    }
    export class $MonsterRoomHooks {
        static getRandomMonsterRoomMob(arg0: $RandomSource): $EntityType<never>;
        static onDataMapsUpdated(arg0: $DataMapsUpdatedEvent): void;
        constructor();
    }
    export class $BooleanAttribute extends $Attribute {
        static MERGED_GRAY: $TextColor;
        static MERGED_RED: $TextColor;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static MERGED_BLUE: $TextColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(arg0: string, arg1: boolean);
    }
    export class $CommonHooks$BiomeCallbackFunction {
    }
    export interface $CommonHooks$BiomeCallbackFunction {
        apply(arg0: $Biome$ClimateSettings_, arg1: $BiomeSpecialEffects, arg2: $BiomeGenerationSettings, arg3: $MobSpawnSettings): $Biome;
    }
    /**
     * Values that may be interpreted as {@link $CommonHooks$BiomeCallbackFunction}.
     */
    export type $CommonHooks$BiomeCallbackFunction_ = ((arg0: $Biome$ClimateSettings, arg1: $BiomeSpecialEffects, arg2: $BiomeGenerationSettings, arg3: $MobSpawnSettings) => $Biome_);
    export class $FarmlandWaterManager {
        static hasBlockWaterTicket(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        static addAABBTicket(arg0: $Level_, arg1: $AABB_): $AABBTicket;
        static addCustomTicket<T extends $SimpleTicket<$Vec3>>(arg0: $Level_, arg1: T, arg2: $ChunkPos, ...arg3: $ChunkPos[]): T;
        constructor();
    }
    export class $SpecialPlantable {
    }
    export interface $SpecialPlantable {
        villagerCanPlantItem(arg0: $Villager): boolean;
        spawnPlantAtPosition(arg0: $ItemStack_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $Direction_): void;
        canPlacePlantAtPosition(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction_): boolean;
    }
    export class $ModConfigSpec$EnumValue<T extends $Enum<T>> extends $ModConfigSpec$ConfigValue<T> {
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<T>): T;
    }
    export class $ModConfigSpec$BuilderContext {
    }
    export class $NeoForgeConfig$Client {
        logUntranslatedConfigurationWarnings: $ModConfigSpec$BooleanValue;
        experimentalForgeLightPipelineEnabled: $ModConfigSpec$BooleanValue;
        showLoadWarnings: $ModConfigSpec$BooleanValue;
        useCombinedDepthStencilAttachment: $ModConfigSpec$BooleanValue;
    }
    export class $ModConfigSpec$LongValue extends $ModConfigSpec$ConfigValue<number> implements $LongSupplier {
        getAsLong(): number;
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<number>): number;
        get asLong(): number;
    }
    export class $ModConfigSpec$ListValueSpec extends $ModConfigSpec$ValueSpec {
        testElement(arg0: $Object): boolean;
        getSizeRange(): $ModConfigSpec$Range<number>;
        getNewElementSupplier(): $Supplier<never>;
        get sizeRange(): $ModConfigSpec$Range<number>;
        get newElementSupplier(): $Supplier<never>;
    }
    export class $Tags$Items {
        static SANDSTONE_STAIRS: $TagKey<$Item>;
        static PUMPKINS_JACK_O_LANTERNS: $TagKey<$Item>;
        static NUGGETS: $TagKey<$Item>;
        static ORE_RATES_SPARSE: $TagKey<$Item>;
        static SANDSTONE_UNCOLORED_SLABS: $TagKey<$Item>;
        static DUSTS: $TagKey<$Item>;
        static FOODS_FRUIT: $TagKey<$Item>;
        static DYED_PINK: $TagKey<$Item>;
        static CHESTS_TRAPPED: $TagKey<$Item>;
        static DRINK_CONTAINING_BOTTLE: $TagKey<$Item>;
        static CONCRETE_POWDERS: $TagKey<$Item>;
        static CROPS_PUMPKIN: $TagKey<$Item>;
        static CROPS: $TagKey<$Item>;
        static DYES_LIME: $TagKey<$Item>;
        static BOOKSHELVES: $TagKey<$Item>;
        static FOODS_COOKED_MEAT: $TagKey<$Item>;
        static TOOLS_SHEAR: $TagKey<$Item>;
        static SEEDS_BEETROOT: $TagKey<$Item>;
        static DYES: $TagKey<$Item>;
        static DYED_RED: $TagKey<$Item>;
        static DRINKS_MILK: $TagKey<$Item>;
        static CROPS_COCOA_BEAN: $TagKey<$Item>;
        static GLASS_BLOCKS_COLORLESS: $TagKey<$Item>;
        static PLAYER_WORKSTATIONS_CRAFTING_TABLES: $TagKey<$Item>;
        static SANDSTONE_RED_SLABS: $TagKey<$Item>;
        static BARRELS_WOODEN: $TagKey<$Item>;
        static FOODS_RAW_FISH: $TagKey<$Item>;
        static STORAGE_BLOCKS_COAL: $TagKey<$Item>;
        static BUDS: $TagKey<$Item>;
        static ORES_IRON: $TagKey<$Item>;
        static ORES_REDSTONE: $TagKey<$Item>;
        static ANIMAL_FOODS: $TagKey<$Item>;
        static FOODS_DOUGH: $TagKey<$Item>;
        static TOOLS_FISHING_ROD: $TagKey<$Item>;
        static BUCKETS_ENTITY_WATER: $TagKey<$Item>;
        static ORES_GOLD: $TagKey<$Item>;
        static FOODS: $TagKey<$Item>;
        static DRINKS_WATER: $TagKey<$Item>;
        static VILLAGER_JOB_SITES: $TagKey<$Item>;
        static DYED_MAGENTA: $TagKey<$Item>;
        static INGOTS_NETHERITE: $TagKey<$Item>;
        static RODS_WOODEN: $TagKey<$Item>;
        static STORAGE_BLOCKS_BONE_MEAL: $TagKey<$Item>;
        static DYES_BROWN: $TagKey<$Item>;
        static RAW_MATERIALS_IRON: $TagKey<$Item>;
        static DYES_RED: $TagKey<$Item>;
        static PUMPKINS_NORMAL: $TagKey<$Item>;
        static OBSIDIANS_NORMAL: $TagKey<$Item>;
        static DYED_CYAN: $TagKey<$Item>;
        static DYES_WHITE: $TagKey<$Item>;
        static DYES_GREEN: $TagKey<$Item>;
        static FOODS_COOKIE: $TagKey<$Item>;
        static CROPS_CACTUS: $TagKey<$Item>;
        static DRINKS_OMINOUS: $TagKey<$Item>;
        static GEMS_LAPIS: $TagKey<$Item>;
        static GLAZED_TERRACOTTAS: $TagKey<$Item>;
        static GEMS_QUARTZ: $TagKey<$Item>;
        static DRINKS: $TagKey<$Item>;
        static FENCE_GATES: $TagKey<$Item>;
        static MUSIC_DISCS: $TagKey<$Item>;
        static DYES_ORANGE: $TagKey<$Item>;
        static DRINK_CONTAINING_BUCKET: $TagKey<$Item>;
        static MUSHROOMS: $TagKey<$Item>;
        static INGOTS_IRON: $TagKey<$Item>;
        static ARMORS: $TagKey<$Item>;
        static BUCKETS_LAVA: $TagKey<$Item>;
        static DYED_GREEN: $TagKey<$Item>;
        static FOODS_VEGETABLE: $TagKey<$Item>;
        static ORES_EMERALD: $TagKey<$Item>;
        /**
         * @deprecated
         */
        static SLIMEBALLS: $TagKey<$Item>;
        static STORAGE_BLOCKS_NETHERITE: $TagKey<$Item>;
        static ORES_LAPIS: $TagKey<$Item>;
        static POTIONS: $TagKey<$Item>;
        static STORAGE_BLOCKS_COPPER: $TagKey<$Item>;
        static DRINKS_HONEY: $TagKey<$Item>;
        static ORE_BEARING_GROUND_STONE: $TagKey<$Item>;
        static SEEDS_PUMPKIN: $TagKey<$Item>;
        static TOOLS_IGNITER: $TagKey<$Item>;
        static CROPS_NETHER_WART: $TagKey<$Item>;
        static DYES_LIGHT_GRAY: $TagKey<$Item>;
        static GLASS_PANES: $TagKey<$Item>;
        static GLASS_BLOCKS: $TagKey<$Item>;
        static COBBLESTONES_NORMAL: $TagKey<$Item>;
        static SEEDS: $TagKey<$Item>;
        static SANDSTONE_SLABS: $TagKey<$Item>;
        static DYES_PINK: $TagKey<$Item>;
        static PUMPKINS: $TagKey<$Item>;
        static STORAGE_BLOCKS_DIAMOND: $TagKey<$Item>;
        static BUDDING_BLOCKS: $TagKey<$Item>;
        static STRINGS: $TagKey<$Item>;
        static BUCKETS_POWDER_SNOW: $TagKey<$Item>;
        static FENCES_NETHER_BRICK: $TagKey<$Item>;
        static STORAGE_BLOCKS_RAW_IRON: $TagKey<$Item>;
        static GUNPOWDERS: $TagKey<$Item>;
        static GEMS_DIAMOND: $TagKey<$Item>;
        static STONES: $TagKey<$Item>;
        static DYED_LIGHT_GRAY: $TagKey<$Item>;
        static GLASS_BLOCKS_CHEAP: $TagKey<$Item>;
        static GEMS_PRISMARINE: $TagKey<$Item>;
        static DYED_WHITE: $TagKey<$Item>;
        static RODS_BLAZE: $TagKey<$Item>;
        static DYED_LIGHT_BLUE: $TagKey<$Item>;
        static DYED_YELLOW: $TagKey<$Item>;
        static TOOLS_CROSSBOW: $TagKey<$Item>;
        static SANDSTONE_RED_STAIRS: $TagKey<$Item>;
        static DRINKS_WATERY: $TagKey<$Item>;
        static DUSTS_GLOWSTONE: $TagKey<$Item>;
        static DYES_LIGHT_BLUE: $TagKey<$Item>;
        static STORAGE_BLOCKS_SLIME: $TagKey<$Item>;
        static COBBLESTONES: $TagKey<$Item>;
        static FENCES_WOODEN: $TagKey<$Item>;
        static INGOTS_COPPER: $TagKey<$Item>;
        static RODS_BREEZE: $TagKey<$Item>;
        static NETHERRACKS: $TagKey<$Item>;
        static FOODS_PIE: $TagKey<$Item>;
        static ORES_IN_GROUND_NETHERRACK: $TagKey<$Item>;
        static ENDER_PEARLS: $TagKey<$Item>;
        static CROPS_MELON: $TagKey<$Item>;
        static ORES_NETHERITE_SCRAP: $TagKey<$Item>;
        static DRINKS_JUICE: $TagKey<$Item>;
        static ORE_RATES_SINGULAR: $TagKey<$Item>;
        static INGOTS: $TagKey<$Item>;
        static NETHER_STARS: $TagKey<$Item>;
        static ORE_BEARING_GROUND_NETHERRACK: $TagKey<$Item>;
        static POTION_BOTTLE: $TagKey<$Item>;
        static DYES_PURPLE: $TagKey<$Item>;
        static END_STONES: $TagKey<$Item>;
        static SANDS: $TagKey<$Item>;
        static COBBLESTONES_MOSSY: $TagKey<$Item>;
        static DYED_BROWN: $TagKey<$Item>;
        static STORAGE_BLOCKS_IRON: $TagKey<$Item>;
        static FENCES: $TagKey<$Item>;
        static ROPES: $TagKey<$Item>;
        static ORES_COAL: $TagKey<$Item>;
        static SANDSTONE_RED_BLOCKS: $TagKey<$Item>;
        static TOOLS_SPEAR: $TagKey<$Item>;
        static BRICKS: $TagKey<$Item>;
        static OBSIDIANS: $TagKey<$Item>;
        static CROPS_SUGAR_CANE: $TagKey<$Item>;
        static DUSTS_REDSTONE: $TagKey<$Item>;
        static DYED_BLUE: $TagKey<$Item>;
        static GEMS: $TagKey<$Item>;
        static DYED_GRAY: $TagKey<$Item>;
        static DYES_BLACK: $TagKey<$Item>;
        static SHULKER_BOXES: $TagKey<$Item>;
        static INGOTS_GOLD: $TagKey<$Item>;
        static RAW_MATERIALS: $TagKey<$Item>;
        static EGGS: $TagKey<$Item>;
        static NUGGETS_IRON: $TagKey<$Item>;
        static STORAGE_BLOCKS_WHEAT: $TagKey<$Item>;
        static CROPS_BEETROOT: $TagKey<$Item>;
        static CROPS_CARROT: $TagKey<$Item>;
        static STORAGE_BLOCKS_LAPIS: $TagKey<$Item>;
        static DYED_PURPLE: $TagKey<$Item>;
        static STORAGE_BLOCKS_REDSTONE: $TagKey<$Item>;
        static SANDSTONE_UNCOLORED_BLOCKS: $TagKey<$Item>;
        static DYES_MAGENTA: $TagKey<$Item>;
        static BUCKETS_EMPTY: $TagKey<$Item>;
        static RANGED_WEAPON_TOOLS: $TagKey<$Item>;
        static BRICKS_NORMAL: $TagKey<$Item>;
        static SEEDS_MELON: $TagKey<$Item>;
        static STORAGE_BLOCKS: $TagKey<$Item>;
        static COBBLESTONES_INFESTED: $TagKey<$Item>;
        static SANDS_COLORLESS: $TagKey<$Item>;
        static FOODS_BERRY: $TagKey<$Item>;
        static GEMS_AMETHYST: $TagKey<$Item>;
        static BRICKS_NETHER: $TagKey<$Item>;
        static OBSIDIANS_CRYING: $TagKey<$Item>;
        static TOOLS_BOW: $TagKey<$Item>;
        static TOOLS_WRENCH: $TagKey<$Item>;
        static DYES_CYAN: $TagKey<$Item>;
        static CROPS_POTATO: $TagKey<$Item>;
        static FOODS_BREAD: $TagKey<$Item>;
        static MINING_TOOL_TOOLS: $TagKey<$Item>;
        static TOOLS_SHIELD: $TagKey<$Item>;
        static FOODS_EDIBLE_WHEN_PLACED: $TagKey<$Item>;
        static STORAGE_BLOCKS_GOLD: $TagKey<$Item>;
        static LOOM_PATTERNS: $TagKey<$Item>;
        static DRINKS_MAGIC: $TagKey<$Item>;
        static FERTILIZERS: $TagKey<$Item>;
        static STORAGE_BLOCKS_RAW_GOLD: $TagKey<$Item>;
        static FEATHERS: $TagKey<$Item>;
        static STORAGE_BLOCKS_DRIED_KELP: $TagKey<$Item>;
        static TOOLS: $TagKey<$Item>;
        static NUGGETS_GOLD: $TagKey<$Item>;
        static FENCE_GATES_WOODEN: $TagKey<$Item>;
        static FOODS_CANDY: $TagKey<$Item>;
        static ENCHANTING_FUELS: $TagKey<$Item>;
        static BUCKETS: $TagKey<$Item>;
        static SEEDS_TORCHFLOWER: $TagKey<$Item>;
        static DYES_BLUE: $TagKey<$Item>;
        static ORES_COPPER: $TagKey<$Item>;
        static PUMPKINS_CARVED: $TagKey<$Item>;
        static FOODS_SOUP: $TagKey<$Item>;
        static RAW_MATERIALS_GOLD: $TagKey<$Item>;
        static ORE_RATES_DENSE: $TagKey<$Item>;
        static BARRELS: $TagKey<$Item>;
        static DYES_GRAY: $TagKey<$Item>;
        static TOOLS_BRUSH: $TagKey<$Item>;
        static GLASS_PANES_COLORLESS: $TagKey<$Item>;
        static FOODS_RAW_MEAT: $TagKey<$Item>;
        static ORES_IN_GROUND_STONE: $TagKey<$Item>;
        static RODS: $TagKey<$Item>;
        static SEEDS_WHEAT: $TagKey<$Item>;
        static DYED_LIME: $TagKey<$Item>;
        static GLASS_BLOCKS_TINTED: $TagKey<$Item>;
        static FOODS_COOKED_FISH: $TagKey<$Item>;
        static PLAYER_WORKSTATIONS_FURNACES: $TagKey<$Item>;
        static GRAVELS: $TagKey<$Item>;
        static DYED_ORANGE: $TagKey<$Item>;
        static CLUSTERS: $TagKey<$Item>;
        static CHAINS: $TagKey<$Item>;
        static RAW_MATERIALS_COPPER: $TagKey<$Item>;
        static BUCKETS_WATER: $TagKey<$Item>;
        static STRIPPED_WOODS: $TagKey<$Item>;
        static CROPS_WHEAT: $TagKey<$Item>;
        static SLIME_BALLS: $TagKey<$Item>;
        static ENCHANTABLES: $TagKey<$Item>;
        static FOODS_GOLDEN: $TagKey<$Item>;
        static BONES: $TagKey<$Item>;
        static ORES_QUARTZ: $TagKey<$Item>;
        static DYES_YELLOW: $TagKey<$Item>;
        static SANDS_RED: $TagKey<$Item>;
        static BUCKETS_MILK: $TagKey<$Item>;
        static SANDSTONE_UNCOLORED_STAIRS: $TagKey<$Item>;
        static DYED_BLACK: $TagKey<$Item>;
        static DYED: $TagKey<$Item>;
        static ORES_DIAMOND: $TagKey<$Item>;
        static ORES_IN_GROUND_DEEPSLATE: $TagKey<$Item>;
        static SANDSTONE_BLOCKS: $TagKey<$Item>;
        static STORAGE_BLOCKS_RAW_COPPER: $TagKey<$Item>;
        static STRIPPED_LOGS: $TagKey<$Item>;
        static CHESTS_ENDER: $TagKey<$Item>;
        static FOODS_FOOD_POISONING: $TagKey<$Item>;
        static COBBLESTONES_DEEPSLATE: $TagKey<$Item>;
        static CONCRETES: $TagKey<$Item>;
        static GEMS_EMERALD: $TagKey<$Item>;
        static CHESTS_WOODEN: $TagKey<$Item>;
        static HIDDEN_FROM_RECIPE_VIEWERS: $TagKey<$Item>;
        static STORAGE_BLOCKS_EMERALD: $TagKey<$Item>;
        static MELEE_WEAPON_TOOLS: $TagKey<$Item>;
        static ORES: $TagKey<$Item>;
        static TOOLS_MACE: $TagKey<$Item>;
        static ORE_BEARING_GROUND_DEEPSLATE: $TagKey<$Item>;
        static CHESTS: $TagKey<$Item>;
        static LEATHERS: $TagKey<$Item>;
        constructor();
    }
    export class $ModConfigSpec$Range<V extends $Comparable<V>> implements $Predicate<$Object> {
        test(arg0: $Object): boolean;
        static of(arg0: number, arg1: number): $ModConfigSpec$Range<number>;
        getMin(): V;
        getMax(): V;
        correct(arg0: $Object, arg1: $Object): $Object;
        getClazz(): $Class<V>;
        or(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        negate(): $Predicate<$Object>;
        and(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        get min(): V;
        get max(): V;
        get clazz(): $Class<V>;
    }
    export class $DeferredSpawnEggItem extends $SpawnEggItem {
        static deferredOnlyById(arg0: $EntityType_<never>): $SpawnEggItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static BY_ID: $Map<$EntityType<$Mob>, $SpawnEggItem>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        defaultType: $EntityType<never>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Supplier_<$EntityType<$Mob>>, arg1: number, arg2: number, arg3: $Item$Properties);
    }
    export class $ModConfigSpec$ConfigValue<T> implements $Supplier<T> {
        get(): T;
        next(): $ModConfigSpec$Builder;
        getDefault(): T;
        set(arg0: T): void;
        save(): void;
        getPath(): $List<string>;
        clearCache(): void;
        getRaw(): T;
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<T>): T;
        getSpec(): $ModConfigSpec$ValueSpec;
        get default(): T;
        get path(): $List<string>;
        get spec(): $ModConfigSpec$ValueSpec;
    }
    export class $TranslatableEnum {
    }
    export interface $TranslatableEnum {
        getTranslatedName(): $Component;
        get translatedName(): $Component;
    }
    export class $ModConfigSpec$BooleanValue extends $ModConfigSpec$ConfigValue<boolean> implements $BooleanSupplier {
        getAsBoolean(): boolean;
        isFalse(): boolean;
        isTrue(): boolean;
        get asBoolean(): boolean;
        get false(): boolean;
        get true(): boolean;
    }
    export class $Tags$Structures {
        static HIDDEN_FROM_LOCATOR_SELECTION: $TagKey<$Structure>;
        static HIDDEN_FROM_DISPLAYERS: $TagKey<$Structure>;
        constructor();
    }
    export class $MutableDataComponentHolder {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $MutableDataComponentHolder extends $DataComponentHolder, $MutableDataComponentHolderFunctions {
        update<T>(arg0: $DataComponentType_<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        update<T, U>(arg0: $DataComponentType_<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export class $IShearable {
    }
    export interface $IShearable {
        onSheared(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): $List<$ItemStack>;
        isShearable(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_): boolean;
        spawnShearedDrop(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
    }
    export class $Tags$Fluids {
        static HONEY: $TagKey<$Fluid>;
        static RABBIT_STEW: $TagKey<$Fluid>;
        static BEETROOT_SOUP: $TagKey<$Fluid>;
        static LAVA: $TagKey<$Fluid>;
        static MUSHROOM_STEW: $TagKey<$Fluid>;
        static GASEOUS: $TagKey<$Fluid>;
        static POTION: $TagKey<$Fluid>;
        static EXPERIENCE: $TagKey<$Fluid>;
        static HIDDEN_FROM_RECIPE_VIEWERS: $TagKey<$Fluid>;
        static SUSPICIOUS_STEW: $TagKey<$Fluid>;
        static WATER: $TagKey<$Fluid>;
        static MILK: $TagKey<$Fluid>;
        constructor();
    }
    export class $NeoForgeConfig {
        static onLoad(arg0: $ModConfigEvent$Loading): void;
        static onFileChange(arg0: $ModConfigEvent$Reloading): void;
        static SERVER: $NeoForgeConfig$Server;
        static COMMON: $NeoForgeConfig$Common;
        static CLIENT: $NeoForgeConfig$Client;
        constructor();
    }
    export class $UsernameCache {
        static getMap(): $Map<$UUID, string>;
        static containsUUID(arg0: $UUID_): boolean;
        static getLastKnownUsername(arg0: $UUID_): string;
        static get map(): $Map<$UUID, string>;
    }
    export class $EffectCure {
        name(): string;
        static get(arg0: string): $EffectCure;
        static getAllCures(): $Collection<$EffectCure>;
        static CODEC: $Codec<$EffectCure>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EffectCure>;
        static get allCures(): $Collection<$EffectCure>;
    }
}
