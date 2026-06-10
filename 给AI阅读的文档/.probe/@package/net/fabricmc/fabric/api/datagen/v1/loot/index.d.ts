import { $ResourceCondition } from "@package/net/fabricmc/fabric/api/resource/conditions/v1";
import { $BlockLootSubProvider } from "@package/net/minecraft/data/loot";

declare module "@package/net/fabricmc/fabric/api/datagen/v1/loot" {
    export class $FabricBlockLootTableGenerator {
    }
    export interface $FabricBlockLootTableGenerator {
        withConditions(...arg0: $ResourceCondition[]): $BlockLootSubProvider;
    }
}
