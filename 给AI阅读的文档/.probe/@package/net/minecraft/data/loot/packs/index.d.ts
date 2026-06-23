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
        constructor(registries: $HolderLookup$Provider);
    }
    export class $VanillaLootTableProvider {
        static create(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
        constructor();
    }
    export class $VanillaPiglinBarterLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaEquipmentLoot extends $Record implements $LootTableSubProvider {
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        static trialChamberEquipment(helmet: $Item_, chestplate: $Item_, trim: $ArmorTrim, enchantments: $HolderLookup$RegistryLookup<$Enchantment_>): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $TradeRebalanceLootTableProvider {
        static create(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
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
        constructor(registries: $HolderLookup$Provider);
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
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        strongholdCorridorLootTable(): $LootTable$Builder;
        bastionHoglinStableLootTable(): $LootTable$Builder;
        shipwreckTreasureLootTable(): $LootTable$Builder;
        bastionTreasureLootTable(): $LootTable$Builder;
        shipwreckSupplyLootTable(): $LootTable$Builder;
        netherBridgeLootTable(): $LootTable$Builder;
        ancientCityLootTable(): $LootTable$Builder;
        strongholdLibraryLootTable(): $LootTable$Builder;
        jungleTempleLootTable(): $LootTable$Builder;
        woodlandMansionLootTable(): $LootTable$Builder;
        shipwreckMapLootTable(): $LootTable$Builder;
        bastionBridgeLootTable(): $LootTable$Builder;
        desertPyramidLootTable(): $LootTable$Builder;
        bastionOtherLootTable(): $LootTable$Builder;
        endCityTreasureLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        spawnerLootTables(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $TradeRebalanceChestLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        ancientCityLootTable(): $LootTable$Builder;
        jungleTempleLootTable(): $LootTable$Builder;
        desertPyramidLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaGiftLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
}
