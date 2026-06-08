import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $HolderSet_ } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $TradeItem, $IntRange } from "@package/com/almostreliable/morejs/features/villager";
import { $Object } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $WeightedList$Builder, $WeightedList } from "@package/com/almostreliable/morejs/util";
export * as features from "@package/com/almostreliable/morejs/features";
export * as util from "@package/com/almostreliable/morejs/util";
export * as mixin from "@package/com/almostreliable/morejs/mixin";

declare module "@package/com/almostreliable/morejs" {
    export class $MoreJSBinding {
        static range(arg0: $Object): $IntRange;
        static weightedList(): $WeightedList$Builder<$Object>;
        static findStructure(arg0: $BlockPos_, arg1: $ServerLevel, arg2: $HolderSet_<$Structure>, arg3: number): $BlockPos;
        static findBiome(arg0: $BlockPos_, arg1: $ServerLevel, arg2: $HolderSet_<$Biome>, arg3: number): $BlockPos;
        static ofWeightedList(arg0: $Object): $WeightedList<$Object>;
        static ofTradeItem(arg1: $Object): $TradeItem;
        constructor();
    }
}
