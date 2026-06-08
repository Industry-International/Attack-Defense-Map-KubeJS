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
        static setCodec$morejs_$md$6ffaf3$0(arg0: $Codec<any>): void;
        morejs$setVillagerExperience(arg0: number): void;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(arg0: number): void;
        morejs$getFirstCost(): $ItemStack;
        morejs$setFirstCost(arg0: $ItemStack_): void;
        morejs$setSecondCost(arg0: $ItemStack_): void;
        morejs$setPriceMultiplier(arg0: number): void;
        morejs$setRewardExp(arg0: boolean): void;
        morejs$isRewardingExp(): boolean;
        morejs$getSecondCost(): $ItemStack;
        assemble(): $ItemStack;
        getXp(): number;
        resetUses(): void;
        setToOutOfStock(): void;
        morejs$setDemand(arg0: number): void;
        morejs$getOutput(): $ItemStack;
        isOutOfStock(): boolean;
        satisfiedBy(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static createFromStream(arg0: $RegistryFriendlyByteBuf): $MerchantOffer;
        morejs$setDisabled(arg0: boolean): void;
        morejs$setOutput(arg0: $ItemStack_): void;
        morejs$isDisabled(): boolean;
        morejs$self(): $MerchantOffer;
        morejs$setMaxUses(arg0: number): void;
        getUses(): number;
        getCostA(): $ItemStack;
        getCostB(): $ItemStack;
        getDemand(): number;
        getMaxUses(): number;
        resetSpecialPriceDiff(): void;
        addToSpecialPriceDiff(arg0: number): void;
        getBaseCostA(): $ItemStack;
        needsRestock(): boolean;
        shouldRewardExp(): boolean;
        getPriceMultiplier(): number;
        updateDemand(): void;
        getItemCostA(): $ItemCost;
        getItemCostB(): ($ItemCost) | undefined;
        increaseUses(): void;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        replaceEmeralds(arg0: $Item_): void;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $ItemCost_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        get result(): $ItemStack;
        static set codec$morejs_$md$6ffaf3$0(value: $Codec<any>);
        get xp(): number;
        get outOfStock(): boolean;
        get uses(): number;
        get costA(): $ItemStack;
        get costB(): $ItemStack;
        get demand(): number;
        get maxUses(): number;
        get baseCostA(): $ItemStack;
        get priceMultiplier(): number;
        get itemCostA(): $ItemCost;
        get itemCostB(): ($ItemCost) | undefined;
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
        canRestock(): boolean;
        overrideXp(arg0: number): void;
        getOffers(): $MerchantOffers;
        getNotifyTradeSound(): $SoundEvent;
        getVillagerXp(): number;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        setTradingPlayer(arg0: $Player): void;
        getTradingPlayer(): $Player;
        showProgressBar(): boolean;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        notifyTrade(arg0: $MerchantOffer): void;
        overrideOffers(arg0: $MerchantOffers): void;
        get clientSide(): boolean;
        get offers(): $MerchantOffers;
        get notifyTradeSound(): $SoundEvent;
        get villagerXp(): number;
    }
    export class $ItemCost extends $Record {
        test(arg0: $ItemStack_): boolean;
        count(): number;
        item(): $Holder<$Item>;
        components(): $DataComponentPredicate;
        withComponents(arg0: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        itemStack(): $ItemStack;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate);
        constructor(arg0: $ItemLike_, arg1: number);
        constructor(arg0: $ItemLike_);
    }
}
