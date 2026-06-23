import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $BlockLootTableGeneratorAccessor } from "@package/net/fabricmc/fabric/mixin/datagen/loot";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $BlockLootSubProviderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $FabricBlockLootTableGenerator } from "@package/net/fabricmc/fabric/api/datagen/v1/loot";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $ProblemReporter$Collector } from "@package/net/minecraft/util";
import { $DataProvider, $PackOutput, $CachedOutput_ } from "@package/net/minecraft/data";
import { $FrogVariant } from "@package/net/minecraft/world/entity/animal";
import { $ResourceCondition } from "@package/net/fabricmc/fabric/api/resource/conditions/v1";
import { $BiConsumer, $BiConsumer_, $Function_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $WritableRegistry } from "@package/net/minecraft/core";
import { $Record, $Comparable, $Iterable } from "@package/java/lang";
import { $ValidationContext, $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $FunctionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $AnyOfCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as packs from "@package/net/minecraft/data/loot/packs";

declare module "@package/net/minecraft/data/loot" {
    export class $LootTableProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext, arg2: $ProblemReporter$Collector): void;
        getTables(): $List<$LootTableProvider$SubProviderEntry>;
        constructor(output: $PackOutput, requiredTables: $Set_<$ResourceKey_<$LootTable>>, subProviders: $List_<$LootTableProvider$SubProviderEntry_>, registries: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
        get tables(): $List<$LootTableProvider$SubProviderEntry>;
    }
    export class $BlockLootSubProvider implements $LootTableSubProvider, $BlockLootSubProviderAccessor, $BlockLootTableGeneratorAccessor, $FabricBlockLootTableGenerator {
        add(block: $Block_, builder: $LootTable$Builder): void;
        add(block: $Block_, factory: $Function_<$Block, $LootTable$Builder>): void;
        generate(): void;
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        createCandleDrops(block: $Block_): $LootTable$Builder;
        createBannerDrop(block: $Block_): $LootTable$Builder;
        createBeeNestDrop(block: $Block_): $LootTable$Builder;
        createOreDrop(block: $Block_, item: $Item_): $LootTable$Builder;
        /**
         * Used for all leaves, drops self with silk touch, otherwise drops the second Block param with the passed chances for fortune levels, adding in sticks.
         */
        createLeavesDrops(leavesBlock: $Block_, saplingBlock: $Block_, ...chances: number[]): $LootTable$Builder;
        createBeeHiveDrop(block: $Block_): $LootTable$Builder;
        createGrassDrops(block: $Block_): $LootTable$Builder;
        /**
         * If `dropGrownCropCondition` fails (i.e. crop is not ready), drops 1 `seedsItem`.
         * If `dropGrownCropCondition` succeeds (i.e. crop is ready), drops 1 `grownCropItem`, and 0-3 `seedsItem` with fortune applied.
         */
        createCropDrops(cropBlock: $Block_, grownCropItem: $Item_, seedsItem: $Item_, dropGrownCropCondition: $LootItemCondition$Builder_): $LootTable$Builder;
        dropSelf(flowerPot: $Block_): void;
        static noDrop(): $LootTable$Builder;
        createSinglePropConditionTable<T extends $Comparable<T>>(block: $Block_, property: $Property<T>, value: T): $LootTable$Builder;
        /**
         * If the condition from `conditionBuilder` succeeds, drops 1 `block`.
         * Otherwise, drops loot specified by `alternativeBuilder`.
         */
        static createSelfDropDispatchTable(block: $Block_, conditionBuilder: $LootItemCondition$Builder_, alternativeBuilder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        doesNotHaveShearsOrSilkTouch(): $LootItemCondition$Builder;
        /**
         * If the block is mined with Shears, drops 1 `block`.
         * Otherwise, drops loot specified by `builder`.
         */
        createSilkTouchOrShearsDispatchTable(block: $Block_, builder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        otherWhenSilkTouch(vines: $Block_, plant: $Block_): void;
        dropPottedContents(flowerPot: $Block_): void;
        createPetalsDrops(block: $Block_): $LootTable$Builder;
        createDoorTable(block: $Block_): $LootTable$Builder;
        getKnownBlocks(): $Iterable<$Block>;
        /**
         * If the block is mined with Shears, drops 1 `block`.
         * Otherwise, drops loot specified by `builder`.
         */
        createSilkTouchDispatchTable(block: $Block_, builder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createDoublePlantShearsDrop(block: $Block_): $LootTable$Builder;
        createDoublePlantWithSeedDrops(block: $Block_, sheared: $Block_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(block: $Block_, item: $ItemLike_, count: $NumberProvider_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(block: $Block_, item: $ItemLike_): $LootTable$Builder;
        createNameableBlockEntityTable(block: $Block_): $LootTable$Builder;
        applyExplosionCondition<T extends $ConditionUserBuilder<T>>(item: $ItemLike_, conditionBuilder: $ConditionUserBuilder<T>): T;
        /**
         * Used for all leaves, drops self with silk touch, otherwise drops the second Block param with the passed chances for fortune levels, adding in sticks.
         */
        createOakLeavesDrops(leavesBlock: $Block_, saplingBlock: $Block_, ...chances: number[]): $LootTable$Builder;
        createMangroveLeavesDrops(block: $Block_): $LootTable$Builder;
        static createCandleCakeDrops(block: $Block_): $LootTable$Builder;
        addNetherVinesDropTable(vines: $Block_, plant: $Block_): void;
        createPotFlowerItemTable(item: $ItemLike_): $LootTable$Builder;
        createCaveVinesDrop(block: $Block_): $LootTable$Builder;
        createSlabItemTable(block: $Block_): $LootTable$Builder;
        createShulkerBoxDrop(block: $Block_): $LootTable$Builder;
        createSilkTouchOnlyTable(item: $ItemLike_): $LootTable$Builder;
        /**
         * If the block is mined with Shears, drops 1 `block`.
         * Otherwise, drops loot specified by `builder`.
         */
        createShearsDispatchTable(block: $Block_, builder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createRedstoneOreDrops(block: $Block_): $LootTable$Builder;
        createMushroomBlockDrop(block: $Block_, item: $ItemLike_): $LootTable$Builder;
        createSingleItemTable(item: $ItemLike_): $LootTable$Builder;
        createSingleItemTable(item: $ItemLike_, count: $NumberProvider_): $LootTable$Builder;
        createCopperOreDrops(block: $Block_): $LootTable$Builder;
        applyExplosionDecay<T extends $FunctionUserBuilder<T>>(item: $ItemLike_, functionBuilder: $FunctionUserBuilder<T>): T;
        createLapisOreDrops(block: $Block_): $LootTable$Builder;
        createMultifaceBlockDrops(block: $Block_, builder: $LootItemCondition$Builder_): $LootTable$Builder;
        static createShearsOnlyDrop(item: $ItemLike_): $LootTable$Builder;
        dropWhenSilkTouch(flowerPot: $Block_): void;
        dropOther(block: $Block_, item: $ItemLike_): void;
        createAttachedStemDrops(block: $Block_, item: $Item_): $LootTable$Builder;
        doesNotHaveSilkTouch(): $LootItemCondition$Builder;
        hasShearsOrSilkTouch(): $LootItemCondition$Builder;
        hasSilkTouch(): $LootItemCondition$Builder;
        createStemDrops(block: $Block_, item: $Item_): $LootTable$Builder;
        withConditions(...arg0: $ResourceCondition[]): $BlockLootSubProvider;
        getRegistries(): $HolderLookup$Provider;
        create$hasSilkTouch(): $LootItemCondition$Builder;
        enabledFeatures: $FeatureFlagSet;
        static HAS_SHEARS: $LootItemCondition$Builder;
        explosionResistant: $Set<$Item>;
        registries: $HolderLookup$Provider;
        map: $Map<$ResourceKey<$LootTable>, $LootTable$Builder>;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        constructor(explosionResistant: $Set_<$Item_>, enabledFeatures: $FeatureFlagSet, registries: $HolderLookup$Provider);
        constructor(explosionResistant: $Set_<$Item_>, enabledFeatures: $FeatureFlagSet, map: $Map_<$ResourceKey_<$LootTable>, $LootTable$Builder>, registries: $HolderLookup$Provider);
        get knownBlocks(): $Iterable<$Block>;
    }
    export class $LootTableProvider$SubProviderEntry extends $Record {
        provider(): $Function<$HolderLookup$Provider, $LootTableSubProvider>;
        paramSet(): $LootContextParamSet;
        constructor(provider: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet: $LootContextParamSet);
    }
    export class $LootTableSubProvider {
    }
    export interface $LootTableSubProvider {
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootTableSubProvider}.
     */
    export type $LootTableSubProvider_ = ((arg0: $BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>) => void);
    export class $EntityLootSubProvider implements $LootTableSubProvider {
        add(entityType: $EntityType_<never>, defaultLootTable: $ResourceKey_<$LootTable>, builder: $LootTable$Builder): void;
        add(entityType: $EntityType_<never>, builder: $LootTable$Builder): void;
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        generate(): void;
        killedByFrog(): $LootItemCondition$Builder;
        static createSheepTable(woolItem: $ItemLike_): $LootTable$Builder;
        canHaveLootTable(entityType: $EntityType_<never>): boolean;
        shouldSmeltLoot(): $AnyOfCondition$Builder;
        getKnownEntityTypes(): $Stream<$EntityType<never>>;
        killedByFrogVariant(frogVariant: $ResourceKey_<$FrogVariant>): $LootItemCondition$Builder;
        registries: $HolderLookup$Provider;
        constructor(allowed: $FeatureFlagSet, required: $FeatureFlagSet, registries: $HolderLookup$Provider);
        constructor(required: $FeatureFlagSet, registries: $HolderLookup$Provider);
        get knownEntityTypes(): $Stream<$EntityType<never>>;
    }
}
