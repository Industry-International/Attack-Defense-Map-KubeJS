import { $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List } from "@package/java/util";
import { $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/loot" {
    export class $LootPoolAccessor {
    }
    export interface $LootPoolAccessor {
        fabric_getRolls(): $NumberProvider;
        fabric_getEntries(): $List<$LootPoolEntryContainer>;
        fabric_getBonusRolls(): $NumberProvider;
        fabric_getFunctions(): $List<$LootItemFunction>;
        fabric_getConditions(): $List<$LootItemCondition>;
    }
    export class $LootTableAccessor {
    }
    export interface $LootTableAccessor {
        fabric_getPools(): $List<$LootPool>;
        fabric_getRandomSequenceId(): ($ResourceLocation) | undefined;
        fabric_getFunctions(): $List<$LootItemFunction>;
    }
}
