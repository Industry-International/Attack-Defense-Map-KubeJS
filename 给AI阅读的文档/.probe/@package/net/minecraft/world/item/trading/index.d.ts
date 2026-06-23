import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $MerchantOfferAccessor } from "@package/com/almostreliable/morejs/mixin/villager";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ArrayList, $SequencedCollection } from "@package/java/util";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $OfferExtension } from "@package/com/almostreliable/morejs/features/villager";
import { $DataComponentPredicate, $DataComponentPredicate$Builder } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/trading" {
    export class $MerchantOffer implements $MerchantOfferAccessor, $OfferExtension {
        copy(): $MerchantOffer;
        take(playerOfferA: $ItemStack_, playerOfferB: $ItemStack_): boolean;
        getResult(): $ItemStack;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        resetUses(): void;
        isOutOfStock(): boolean;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        setToOutOfStock(): void;
        satisfiedBy(playerOfferA: $ItemStack_, playerOfferB: $ItemStack_): boolean;
        static createFromStream(buffer: $RegistryFriendlyByteBuf): $MerchantOffer;
        morejs$self(): $MerchantOffer;
        morejs$setDisabled(arg0: boolean): void;
        morejs$getOutput(): $ItemStack;
        morejs$setDemand(add: number): void;
        morejs$setOutput(arg0: $ItemStack_): void;
        morejs$setMaxUses(add: number): void;
        morejs$isDisabled(): boolean;
        getXp(): number;
        getDemand(): number;
        getCostA(): $ItemStack;
        getMaxUses(): number;
        getCostB(): $ItemStack;
        morejs$setPriceMultiplier(arg0: number): void;
        morejs$getSecondCost(): $ItemStack;
        morejs$setSecondCost(arg0: $ItemStack_): void;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(add: number): void;
        morejs$setRewardExp(arg0: boolean): void;
        morejs$isRewardingExp(): boolean;
        morejs$setFirstCost(arg0: $ItemStack_): void;
        morejs$getFirstCost(): $ItemStack;
        morejs$setVillagerExperience(add: number): void;
        static setCodec$morejs_$md$dd6cb9$0(arg0: $Codec<any>): void;
        getUses(): number;
        shouldRewardExp(): boolean;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        updateDemand(): void;
        getBaseCostA(): $ItemStack;
        getPriceMultiplier(): number;
        needsRestock(): boolean;
        getItemCostA(): $ItemCost;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        increaseUses(): void;
        getItemCostB(): ($ItemCost) | undefined;
        assemble(): $ItemStack;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        resetSpecialPriceDiff(): void;
        addToSpecialPriceDiff(add: number): void;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        replaceEmeralds(arg0: $Item_): void;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, uses: number, maxUses: number, xp: number, priceMultiplier: number, demand: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, uses: number, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, result: $ItemStack_, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, maxUses: number, xp: number, priceMultiplier: number);
        get result(): $ItemStack;
        get outOfStock(): boolean;
        get xp(): number;
        get demand(): number;
        get costA(): $ItemStack;
        get maxUses(): number;
        get costB(): $ItemStack;
        static set codec$morejs_$md$dd6cb9$0(value: $Codec<any>);
        get uses(): number;
        get baseCostA(): $ItemStack;
        get priceMultiplier(): number;
        get itemCostA(): $ItemCost;
        get itemCostB(): ($ItemCost) | undefined;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        copy(): $MerchantOffers;
        getRecipeFor(stackA: $ItemStack_, stackB: $ItemStack_, index: number): $MerchantOffer;
        reversed(): $SequencedCollection<$MerchantOffer>;
        static CODEC: $Codec<$MerchantOffers>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffers>;
        constructor();
    }
    export class $Merchant {
    }
    export interface $Merchant {
        getOffers(): $MerchantOffers;
        canRestock(): boolean;
        overrideXp(xp: number): void;
        getVillagerXp(): number;
        setTradingPlayer(tradingPlayer: $Player | null): void;
        openTradingScreen(player: $Player, displayName: $Component_, level: number): void;
        showProgressBar(): boolean;
        getTradingPlayer(): $Player;
        notifyTrade(offer: $MerchantOffer): void;
        /**
         * Notifies the merchant of a possible merchant recipe being fulfilled or not. Usually, this is just a sound byte being played depending on whether the suggested `ItemStack` is not empty.
         */
        notifyTradeUpdated(stack: $ItemStack_): void;
        overrideOffers(offers: $MerchantOffers): void;
        isClientSide(): boolean;
        getNotifyTradeSound(): $SoundEvent;
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get clientSide(): boolean;
        get notifyTradeSound(): $SoundEvent;
    }
    export class $ItemCost extends $Record {
        test(stack: $ItemStack_): boolean;
        count(): number;
        item(): $Holder<$Item>;
        components(): $DataComponentPredicate;
        itemStack(): $ItemStack;
        withComponents(components: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
        constructor(item: $Holder_<$Item>, count: number, componentPredicate: $DataComponentPredicate);
        constructor(item: $ItemLike_, count: number);
        constructor(item: $ItemLike_);
    }
}
