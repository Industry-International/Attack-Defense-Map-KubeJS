import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffect_ } from "@package/net/minecraft/world/effect";
import { $VillagerTrades$ItemListing } from "@package/net/minecraft/world/entity/npc";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Holder_, $HolderSet_ } from "@package/net/minecraft/core";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TradeItem } from "@package/com/almostreliable/morejs/features/villager";
import { $BlockPosFinder_ } from "@package/com/almostreliable/morejs/util";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";

declare module "@package/com/almostreliable/morejs/features/villager/trades" {
    export class $EnchantedItemTrade extends $TransformableTrade<$EnchantedItemTrade> {
        levels(arg0: $IntProvider_): $EnchantedItemTrade;
        constructor(arg0: $TradeItem[], arg1: $ItemStack_, arg2: $TagKey_<$Enchantment>);
        constructor(arg0: $TradeItem[], arg1: $ItemStack_, arg2: $HolderSet_<$Enchantment>);
    }
    export class $TreasureMapTrade extends $TransformableTrade<$TreasureMapTrade> {
        scale(arg0: number): $TreasureMapTrade;
        displayName(arg0: $Component_): $TreasureMapTrade;
        marker(arg0: $Holder_<$MapDecorationType>): $TreasureMapTrade;
        noPreview(): $TreasureMapTrade;
        constructor(arg0: $TradeItem[], arg1: $BlockPosFinder_);
    }
    export class $PotionTrade extends $TransformableTrade<$PotionTrade> {
        item(arg0: $Item_): $PotionTrade;
        onlyBrewablePotion(): $PotionTrade;
        noBrewablePotion(): $PotionTrade;
        potions(...arg0: $Potion_[]): $PotionTrade;
        constructor(arg0: $TradeItem[]);
    }
    export class $TransformableTrade$Transformer {
    }
    export interface $TransformableTrade$Transformer {
        accept(arg0: $MerchantOffer, arg1: $Entity, arg2: $RandomSource): void;
    }
    /**
     * Values that may be interpreted as {@link $TransformableTrade$Transformer}.
     */
    export type $TransformableTrade$Transformer_ = ((arg0: $MerchantOffer, arg1: $Entity, arg2: $RandomSource) => void);
    export class $CustomTrade implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $TransformableTrade$Transformer_);
    }
    export class $SimpleTrade extends $TransformableTrade<$SimpleTrade> {
        getOutput(): $TradeItem;
        constructor(arg0: $TradeItem[], arg1: $TradeItem);
        get output(): $TradeItem;
    }
    export class $TransformableTrade<T extends $VillagerTrades$ItemListing> implements $VillagerTrades$ItemListing {
        transform(arg0: $TransformableTrade$Transformer_): T;
        priceMultiplier(arg0: number): T;
        getFirstInput(): $TradeItem;
        getSecondInput(): $TradeItem;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        villagerExperience(arg0: number): T;
        maxUses(arg0: number): T;
        constructor(arg0: $TradeItem[]);
        get firstInput(): $TradeItem;
        get secondInput(): $TradeItem;
    }
    export class $StewTrade extends $TransformableTrade<$StewTrade> {
        addEffect(arg0: $MobEffect_, arg1: number): $StewTrade;
        constructor(arg0: $TradeItem[]);
    }
}
