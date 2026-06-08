import { $Consumer_ } from "@package/java/util/function";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $Collection_ } from "@package/java/util";
import { $LootPool$Builder, $LootTable$Builder, $LootTable, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/api/loot/v3" {
    export class $FabricLootPoolBuilder {
        static copyOf(arg0: $LootPool): $LootPool$Builder;
    }
    export interface $FabricLootPoolBuilder {
        apply(arg0: $LootItemFunction): $LootPool$Builder;
        apply(arg0: $Collection_<$LootItemFunction>): $LootPool$Builder;
        "with"(arg0: $LootPoolEntryContainer): $LootPool$Builder;
        "with"(arg0: $Collection_<$LootPoolEntryContainer>): $LootPool$Builder;
        conditionally(arg0: $LootItemCondition): $LootPool$Builder;
        conditionally(arg0: $Collection_<$LootItemCondition>): $LootPool$Builder;
    }
    export class $FabricLootTableBuilder {
        static copyOf(arg0: $LootTable): $LootTable$Builder;
    }
    export interface $FabricLootTableBuilder {
        apply(arg0: $Collection_<$LootItemFunction>): $LootTable$Builder;
        apply(arg0: $LootItemFunction): $LootTable$Builder;
        pool(arg0: $LootPool): $LootTable$Builder;
        pools(arg0: $Collection_<$LootPool>): $LootTable$Builder;
        modifyPools(arg0: $Consumer_<$LootPool$Builder>): $LootTable$Builder;
    }
}
