import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Map, $Set } from "@package/java/util";
import { $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTableSubProvider, $LootTableProvider, $BlockLootSubProvider, $EntityLootSubProvider } from "@package/net/minecraft/data/loot";
import { $LootItemCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Record } from "@package/java/lang";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
import { $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/data/loot/packs" {
    export class $VanillaEntityLoot extends $EntityLootSubProvider {
        elderGuardianLootTable(): $LootTable$Builder;
        registries: $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaLootTableProvider {
        static create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
        constructor();
    }
    export class $VanillaPiglinBarterLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaEquipmentLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        static trialChamberEquipment(arg0: $Item_, arg1: $Item_, arg2: $ArmorTrim, arg3: $HolderLookup$RegistryLookup<$Enchantment_>): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $TradeRebalanceLootTableProvider {
        static create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
        constructor();
    }
    export class $VanillaArchaeologyLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaBlockLoot extends $BlockLootSubProvider {
        enabledFeatures: $FeatureFlagSet;
        static HAS_SHEARS: $LootItemCondition$Builder;
        explosionResistant: $Set<$Item>;
        registries: $HolderLookup$Provider;
        map: $Map<$ResourceKey<$LootTable>, $LootTable$Builder>;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaShearingLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaFishingLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        static fishingFishLootTable(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaChestLoot extends $Record implements $LootTableSubProvider {
        spawnerLootTables(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        bastionHoglinStableLootTable(): $LootTable$Builder;
        strongholdCorridorLootTable(): $LootTable$Builder;
        bastionOtherLootTable(): $LootTable$Builder;
        bastionTreasureLootTable(): $LootTable$Builder;
        woodlandMansionLootTable(): $LootTable$Builder;
        netherBridgeLootTable(): $LootTable$Builder;
        endCityTreasureLootTable(): $LootTable$Builder;
        shipwreckMapLootTable(): $LootTable$Builder;
        strongholdLibraryLootTable(): $LootTable$Builder;
        jungleTempleLootTable(): $LootTable$Builder;
        shipwreckTreasureLootTable(): $LootTable$Builder;
        bastionBridgeLootTable(): $LootTable$Builder;
        ancientCityLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        shipwreckSupplyLootTable(): $LootTable$Builder;
        desertPyramidLootTable(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $TradeRebalanceChestLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        jungleTempleLootTable(): $LootTable$Builder;
        ancientCityLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        desertPyramidLootTable(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaGiftLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
}
