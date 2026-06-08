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
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext, arg2: $ProblemReporter$Collector): void;
        getTables(): $List<$LootTableProvider$SubProviderEntry>;
        constructor(arg0: $PackOutput, arg1: $Set_<$ResourceKey_<$LootTable>>, arg2: $List_<$LootTableProvider$SubProviderEntry_>, arg3: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
        get tables(): $List<$LootTableProvider$SubProviderEntry>;
    }
    export class $BlockLootSubProvider implements $LootTableSubProvider, $BlockLootSubProviderAccessor, $BlockLootTableGeneratorAccessor, $FabricBlockLootTableGenerator {
        add(arg0: $Block_, arg1: $LootTable$Builder): void;
        add(arg0: $Block_, arg1: $Function_<$Block, $LootTable$Builder>): void;
        generate(): void;
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        dropOther(arg0: $Block_, arg1: $ItemLike_): void;
        createSilkTouchOrShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        hasSilkTouch(): $LootItemCondition$Builder;
        static createSelfDropDispatchTable(arg0: $Block_, arg1: $LootItemCondition$Builder_, arg2: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        doesNotHaveShearsOrSilkTouch(): $LootItemCondition$Builder;
        applyExplosionCondition<T extends $ConditionUserBuilder<T>>(arg0: $ItemLike_, arg1: $ConditionUserBuilder<T>): T;
        createShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_, arg1: $NumberProvider_): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createPotFlowerItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createSlabItemTable(arg0: $Block_): $LootTable$Builder;
        createShulkerBoxDrop(arg0: $Block_): $LootTable$Builder;
        createCopperOreDrops(arg0: $Block_): $LootTable$Builder;
        createLapisOreDrops(arg0: $Block_): $LootTable$Builder;
        createRedstoneOreDrops(arg0: $Block_): $LootTable$Builder;
        createSilkTouchOnlyTable(arg0: $ItemLike_): $LootTable$Builder;
        createMushroomBlockDrop(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createMultifaceBlockDrops(arg0: $Block_, arg1: $LootItemCondition$Builder_): $LootTable$Builder;
        applyExplosionDecay<T extends $FunctionUserBuilder<T>>(arg0: $ItemLike_, arg1: $FunctionUserBuilder<T>): T;
        createCaveVinesDrop(arg0: $Block_): $LootTable$Builder;
        static createShearsOnlyDrop(arg0: $ItemLike_): $LootTable$Builder;
        addNetherVinesDropTable(arg0: $Block_, arg1: $Block_): void;
        static createCandleCakeDrops(arg0: $Block_): $LootTable$Builder;
        createMangroveLeavesDrops(arg0: $Block_): $LootTable$Builder;
        createOakLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        dropSelf(arg0: $Block_): void;
        createSinglePropConditionTable<T extends $Comparable<T>>(arg0: $Block_, arg1: $Property<T>, arg2: T): $LootTable$Builder;
        doesNotHaveSilkTouch(): $LootItemCondition$Builder;
        createAttachedStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        dropWhenSilkTouch(arg0: $Block_): void;
        otherWhenSilkTouch(arg0: $Block_, arg1: $Block_): void;
        createBannerDrop(arg0: $Block_): $LootTable$Builder;
        createCandleDrops(arg0: $Block_): $LootTable$Builder;
        dropPottedContents(arg0: $Block_): void;
        createGrassDrops(arg0: $Block_): $LootTable$Builder;
        createLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        createBeeNestDrop(arg0: $Block_): $LootTable$Builder;
        createCropDrops(arg0: $Block_, arg1: $Item_, arg2: $Item_, arg3: $LootItemCondition$Builder_): $LootTable$Builder;
        createDoorTable(arg0: $Block_): $LootTable$Builder;
        createOreDrop(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        getKnownBlocks(): $Iterable<$Block>;
        createPetalsDrops(arg0: $Block_): $LootTable$Builder;
        createBeeHiveDrop(arg0: $Block_): $LootTable$Builder;
        static noDrop(): $LootTable$Builder;
        hasShearsOrSilkTouch(): $LootItemCondition$Builder;
        createDoublePlantWithSeedDrops(arg0: $Block_, arg1: $Block_): $LootTable$Builder;
        createDoublePlantShearsDrop(arg0: $Block_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_, arg2: $NumberProvider_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createNameableBlockEntityTable(arg0: $Block_): $LootTable$Builder;
        createSilkTouchDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        withConditions(...arg0: $ResourceCondition[]): $BlockLootSubProvider;
        getRegistries(): $HolderLookup$Provider;
        create$hasSilkTouch(): $LootItemCondition$Builder;
        enabledFeatures: $FeatureFlagSet;
        static HAS_SHEARS: $LootItemCondition$Builder;
        explosionResistant: $Set<$Item>;
        registries: $HolderLookup$Provider;
        map: $Map<$ResourceKey<$LootTable>, $LootTable$Builder>;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        constructor(arg0: $Set_<$Item_>, arg1: $FeatureFlagSet, arg2: $HolderLookup$Provider);
        constructor(arg0: $Set_<$Item_>, arg1: $FeatureFlagSet, arg2: $Map_<$ResourceKey_<$LootTable>, $LootTable$Builder>, arg3: $HolderLookup$Provider);
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
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootTableSubProvider}.
     */
    export type $LootTableSubProvider_ = ((arg0: $BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>) => void);
    export class $EntityLootSubProvider implements $LootTableSubProvider {
        add(arg0: $EntityType_<never>, arg1: $ResourceKey_<$LootTable>, arg2: $LootTable$Builder): void;
        add(arg0: $EntityType_<never>, arg1: $LootTable$Builder): void;
        generate(): void;
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        getKnownEntityTypes(): $Stream<$EntityType<never>>;
        killedByFrogVariant(arg0: $ResourceKey_<$FrogVariant>): $LootItemCondition$Builder;
        static createSheepTable(arg0: $ItemLike_): $LootTable$Builder;
        canHaveLootTable(arg0: $EntityType_<never>): boolean;
        killedByFrog(): $LootItemCondition$Builder;
        shouldSmeltLoot(): $AnyOfCondition$Builder;
        registries: $HolderLookup$Provider;
        constructor(arg0: $FeatureFlagSet, arg1: $FeatureFlagSet, arg2: $HolderLookup$Provider);
        constructor(arg0: $FeatureFlagSet, arg1: $HolderLookup$Provider);
        get knownEntityTypes(): $Stream<$EntityType<never>>;
    }
}
