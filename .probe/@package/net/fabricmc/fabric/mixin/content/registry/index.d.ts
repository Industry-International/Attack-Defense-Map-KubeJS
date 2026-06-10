import { $Predicate, $Consumer } from "@package/java/util/function";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Set_, $List, $List_, $Map_, $Map, $Set } from "@package/java/util";
import { $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/content/registry" {
    export class $AxeItemAccessor {
        static setStrippedBlocks(arg0: $Map_<$Block_, $Block_>): void;
        static getStrippedBlocks(): $Map<$Block, $Block>;
    }
    export interface $AxeItemAccessor {
    }
    export class $ShovelItemAccessor {
        static getPathStates(): $Map<$Block, $BlockState>;
        static get pathStates(): $Map<$Block, $BlockState>;
    }
    export interface $ShovelItemAccessor {
    }
    export class $VillagerEntityAccessor {
        static fabric_getGatherableItems(): $Set<$Item>;
        static fabric_setGatherableItems(arg0: $Set_<$Item_>): void;
        static fabric_setItemFoodValues(arg0: $Map_<$Item_, number>): void;
    }
    export interface $VillagerEntityAccessor {
    }
    export class $HoeItemAccessor {
        static getTillingActions(): $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
        static get tillingActions(): $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
    }
    export interface $HoeItemAccessor {
    }
    export class $GiveGiftsToHeroTaskAccessor {
        static fabric_getGifts(): $Map<$VillagerProfession, $ResourceKey<$LootTable>>;
    }
    export interface $GiveGiftsToHeroTaskAccessor {
    }
    export class $FarmerWorkTaskAccessor {
        static fabric_setCompostables(arg0: $List_<$Item_>): void;
        static fabric_getCompostable(): $List<$Item>;
    }
    export interface $FarmerWorkTaskAccessor {
    }
}
