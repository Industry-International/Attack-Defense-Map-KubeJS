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
        take(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getResult(): $ItemStack;
        resetSpecialPriceDiff(): void;
        addToSpecialPriceDiff(arg0: number): void;
        getUses(): number;
        assemble(): $ItemStack;
        resetUses(): void;
        needsRestock(): boolean;
        increaseUses(): void;
        getPriceMultiplier(): number;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        getItemCostA(): $ItemCost;
        getItemCostB(): ($ItemCost) | undefined;
        updateDemand(): void;
        getXp(): number;
        setToOutOfStock(): void;
        satisfiedBy(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        morejs$setOutput(arg0: $ItemStack_): void;
        static createFromStream(arg0: $RegistryFriendlyByteBuf): $MerchantOffer;
        morejs$self(): $MerchantOffer;
        morejs$isDisabled(): boolean;
        morejs$setDemand(arg0: number): void;
        isOutOfStock(): boolean;
        morejs$setDisabled(arg0: boolean): void;
        morejs$getOutput(): $ItemStack;
        morejs$setMaxUses(arg0: number): void;
        static setCodec$morejs_$md$d64506$0(arg0: $Codec<any>): void;
        morejs$setVillagerExperience(arg0: number): void;
        morejs$getSecondCost(): $ItemStack;
        morejs$setSecondCost(arg0: $ItemStack_): void;
        morejs$isRewardingExp(): boolean;
        morejs$setRewardExp(arg0: boolean): void;
        getSpecialPriceDiff(): number;
        morejs$getFirstCost(): $ItemStack;
        setSpecialPriceDiff(arg0: number): void;
        morejs$setFirstCost(arg0: $ItemStack_): void;
        morejs$setPriceMultiplier(arg0: number): void;
        getDemand(): number;
        getCostA(): $ItemStack;
        getMaxUses(): number;
        getCostB(): $ItemStack;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        replaceEmeralds(arg0: $Item_): void;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $ItemCost_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        get result(): $ItemStack;
        get uses(): number;
        get priceMultiplier(): number;
        get baseCostA(): $ItemStack;
        get itemCostA(): $ItemCost;
        get itemCostB(): ($ItemCost) | undefined;
        get xp(): number;
        get outOfStock(): boolean;
        static set codec$morejs_$md$d64506$0(value: $Codec<any>);
        get demand(): number;
        get costA(): $ItemStack;
        get maxUses(): number;
        get costB(): $ItemStack;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        copy(): $MerchantOffers;
        getRecipeFor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): $MerchantOffer;
        reversed(): $SequencedCollection<$MerchantOffer>;
        static CODEC: $Codec<$MerchantOffers>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffers>;
        constructor();
    }
    export class $Merchant {
    }
    export interface $Merchant {
        isClientSide(): boolean;
        getNotifyTradeSound(): $SoundEvent;
        getOffers(): $MerchantOffers;
        canRestock(): boolean;
        overrideXp(arg0: number): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        notifyTrade(arg0: $MerchantOffer): void;
        overrideOffers(arg0: $MerchantOffers): void;
        getVillagerXp(): number;
        setTradingPlayer(arg0: $Player): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        showProgressBar(): boolean;
        getTradingPlayer(): $Player;
        get clientSide(): boolean;
        get notifyTradeSound(): $SoundEvent;
        get offers(): $MerchantOffers;
        get villagerXp(): number;
    }
    export class $ItemCost extends $Record {
        test(arg0: $ItemStack_): boolean;
        count(): number;
        item(): $Holder<$Item>;
        components(): $DataComponentPredicate;
        itemStack(): $ItemStack;
        withComponents(arg0: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate);
        constructor(arg0: $ItemLike_, arg1: number);
        constructor(arg0: $ItemLike_);
    }
}
