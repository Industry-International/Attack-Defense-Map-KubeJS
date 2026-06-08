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
        setToOutOfStock(): void;
        morejs$isDisabled(): boolean;
        isOutOfStock(): boolean;
        satisfiedBy(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        morejs$getOutput(): $ItemStack;
        morejs$setMaxUses(arg0: number): void;
        morejs$self(): $MerchantOffer;
        static createFromStream(arg0: $RegistryFriendlyByteBuf): $MerchantOffer;
        morejs$setDemand(arg0: number): void;
        morejs$setOutput(arg0: $ItemStack_): void;
        morejs$setDisabled(arg0: boolean): void;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        getPriceMultiplier(): number;
        updateDemand(): void;
        needsRestock(): boolean;
        getItemCostB(): ($ItemCost) | undefined;
        getItemCostA(): $ItemCost;
        increaseUses(): void;
        morejs$setVillagerExperience(arg0: number): void;
        static setCodec$morejs_$md$5bc4b9$0(arg0: $Codec<any>): void;
        getMaxUses(): number;
        getDemand(): number;
        getCostB(): $ItemStack;
        getCostA(): $ItemStack;
        assemble(): $ItemStack;
        getUses(): number;
        resetUses(): void;
        addToSpecialPriceDiff(arg0: number): void;
        resetSpecialPriceDiff(): void;
        morejs$setSecondCost(arg0: $ItemStack_): void;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(arg0: number): void;
        morejs$setFirstCost(arg0: $ItemStack_): void;
        morejs$getFirstCost(): $ItemStack;
        morejs$setPriceMultiplier(arg0: number): void;
        morejs$getSecondCost(): $ItemStack;
        morejs$setRewardExp(arg0: boolean): void;
        morejs$isRewardingExp(): boolean;
        getXp(): number;
        replaceEmeralds(arg0: $Item_): void;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $ItemCost_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        get result(): $ItemStack;
        get outOfStock(): boolean;
        get baseCostA(): $ItemStack;
        get priceMultiplier(): number;
        get itemCostB(): ($ItemCost) | undefined;
        get itemCostA(): $ItemCost;
        static set codec$morejs_$md$5bc4b9$0(value: $Codec<any>);
        get maxUses(): number;
        get demand(): number;
        get costB(): $ItemStack;
        get costA(): $ItemStack;
        get uses(): number;
        get xp(): number;
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
        getVillagerXp(): number;
        overrideOffers(arg0: $MerchantOffers): void;
        notifyTrade(arg0: $MerchantOffer): void;
        showProgressBar(): boolean;
        setTradingPlayer(arg0: $Player): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        getTradingPlayer(): $Player;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        isClientSide(): boolean;
        canRestock(): boolean;
        overrideXp(arg0: number): void;
        getNotifyTradeSound(): $SoundEvent;
        getOffers(): $MerchantOffers;
        get villagerXp(): number;
        get clientSide(): boolean;
        get notifyTradeSound(): $SoundEvent;
        get offers(): $MerchantOffers;
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
