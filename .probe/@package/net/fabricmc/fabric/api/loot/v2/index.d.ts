import { $Consumer_ } from "@package/java/util/function";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $Collection_ } from "@package/java/util";
import { $LootPool$Builder, $LootTable$Builder, $LootTable, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/api/loot/v2" {
    /**
     * @deprecated
     */
    export class $FabricLootPoolBuilder {
        /**
         * @deprecated
         */
        static copyOf(arg0: $LootPool): $LootPool$Builder;
    }
    export interface $FabricLootPoolBuilder {
        /**
         * @deprecated
         */
        apply(arg0: $LootItemFunction): $LootPool$Builder;
        /**
         * @deprecated
         */
        apply(arg0: $Collection_<$LootItemFunction>): $LootPool$Builder;
        /**
         * @deprecated
         */
        "with"(arg0: $LootPoolEntryContainer): $LootPool$Builder;
        /**
         * @deprecated
         */
        "with"(arg0: $Collection_<$LootPoolEntryContainer>): $LootPool$Builder;
        /**
         * @deprecated
         */
        conditionally(arg0: $LootItemCondition): $LootPool$Builder;
        /**
         * @deprecated
         */
        conditionally(arg0: $Collection_<$LootItemCondition>): $LootPool$Builder;
    }
    /**
     * @deprecated
     */
    export class $FabricLootTableBuilder {
        /**
         * @deprecated
         */
        static copyOf(arg0: $LootTable): $LootTable$Builder;
    }
    export interface $FabricLootTableBuilder {
        /**
         * @deprecated
         */
        apply(arg0: $Collection_<$LootItemFunction>): $LootTable$Builder;
        /**
         * @deprecated
         */
        apply(arg0: $LootItemFunction): $LootTable$Builder;
        /**
         * @deprecated
         */
        pool(arg0: $LootPool): $LootTable$Builder;
        /**
         * @deprecated
         */
        pools(arg0: $Collection_<$LootPool>): $LootTable$Builder;
        /**
         * @deprecated
         */
        modifyPools(arg0: $Consumer_<$LootPool$Builder>): $LootTable$Builder;
    }
}
