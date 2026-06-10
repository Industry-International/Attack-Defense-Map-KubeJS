import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $List, $Map_, $Map, $Set, $List_, $Collection } from "@package/java/util";
import { $VillagerTrades$ItemListing, $VillagerProfession, $VillagerTrades$ItemListing_, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $RandomSource } from "@package/net/minecraft/util";
import { $IntPredicate, $IntPredicate_ } from "@package/java/util/function";
import { $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TreasureMapTrade, $SimpleTrade, $EnchantedItemTrade, $CustomTrade, $PotionTrade, $StewTrade, $TransformableTrade$Transformer_ } from "@package/com/almostreliable/morejs/features/villager/trades";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BlockPosFinder_ } from "@package/com/almostreliable/morejs/util";
import { $ItemCost, $MerchantOffer, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
export * as trades from "@package/com/almostreliable/morejs/features/villager/trades";
export * as events from "@package/com/almostreliable/morejs/features/villager/events";

declare module "@package/com/almostreliable/morejs/features/villager" {
    export class $TradeMatcher$OnMatch {
    }
    export interface $TradeMatcher$OnMatch {
        notify(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $TradeMatcher$OnMatch}.
     */
    export type $TradeMatcher$OnMatch_ = ((arg0: $ItemStack, arg1: $ItemStack, arg2: $ItemStack) => void);
    export class $TradeMatcher extends $Record {
        filter(): $TradeFilter;
        match(arg0: $ItemStack_, arg1: $ItemCost_, arg2: $ItemStack_, arg3: $TradeTypes_): boolean;
        match(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: $TradeTypes_): boolean;
        match(arg0: $ItemCost_, arg1: $ItemStack_, arg2: $TradeTypes_): boolean;
        match(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $TradeTypes_): boolean;
        match(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $TradeTypes_): boolean;
        onMatch(): $TradeMatcher$OnMatch;
        matchType(arg0: $TradeTypes_): boolean;
        matchProfession(arg0: $VillagerProfession_): boolean;
        matchMerchantLevel(arg0: number): boolean;
        constructor(filter: $TradeFilter_, onMatch: $TradeMatcher$OnMatch_);
    }
    export class $TradeFilter extends $Record {
        first(): ($Ingredient) | undefined;
        second(): ($Ingredient) | undefined;
        types(): ($List<$TradeTypes>) | undefined;
        level(): ($IntRange) | undefined;
        output(): ($Ingredient) | undefined;
        outputCount(): ($IntRange) | undefined;
        firstCount(): ($IntRange) | undefined;
        secondCount(): ($IntRange) | undefined;
        professions(): ($HolderSet<$VillagerProfession>) | undefined;
        constructor(first: ($Ingredient_) | undefined, second: ($Ingredient_) | undefined, output: ($Ingredient_) | undefined, firstCount: ($IntRange) | undefined, secondCount: ($IntRange) | undefined, outputCount: ($IntRange) | undefined, level: ($IntRange) | undefined, types: ($List_<$TradeTypes_>) | undefined, professions: ($HolderSet_<$VillagerProfession>) | undefined);
    }
    export class $IntRange implements $IntPredicate {
        test(arg0: number): boolean;
        static all(): $IntRange;
        getMin(): number;
        getMax(): number;
        getRandom(arg0: $RandomSource): number;
        or(arg0: $IntPredicate_): $IntPredicate;
        negate(): $IntPredicate;
        and(arg0: $IntPredicate_): $IntPredicate;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        get min(): number;
        get max(): number;
    }
    export class $VillagerUtils {
        static getProfession(arg0: $ResourceLocation_): $VillagerProfession;
        static createEnchantedItemTrade(arg0: $TradeItem[], arg1: $ItemStack_): $EnchantedItemTrade;
        static createEnchantedItemTrade(arg0: $TradeItem[], arg1: $ItemStack_, arg2: $HolderSet_<$Enchantment>): $EnchantedItemTrade;
        static getRandomWandererTrade(arg0: number): $VillagerTrades$ItemListing;
        static getRandomVillagerTrade(arg0: $VillagerProfession_): $VillagerTrades$ItemListing;
        static getRandomVillagerTrade(arg0: $VillagerProfession_, arg1: number): $VillagerTrades$ItemListing;
        static createBiomeMapTrade(arg0: $TradeItem[], arg1: $HolderSet_<$Biome>): $TreasureMapTrade;
        static createCustomMapTrade(arg0: $TradeItem[], arg1: $BlockPosFinder_): $TreasureMapTrade;
        static createStructureMapTrade(arg0: $TradeItem[], arg1: $HolderSet_<$Structure>): $TreasureMapTrade;
        static isVanillaTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static createStewTrade(arg0: $TradeItem[]): $StewTrade;
        static getWandererTrades(arg0: number): $List<$VillagerTrades$ItemListing>;
        static isModdedTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static createSimpleTrade(arg0: $TradeItem[], arg1: $TradeItem): $SimpleTrade;
        static isCustomTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static getVillagerTrades(arg0: $VillagerProfession_, arg1: number): $List<$VillagerTrades$ItemListing>;
        static getVillagerTrades(arg0: $VillagerProfession_): $List<$VillagerTrades$ItemListing>;
        static getProfessions(): $Collection<$VillagerProfession>;
        static createCustomTrade(arg0: $TransformableTrade$Transformer_): $CustomTrade;
        static getAbstractTrades(arg0: $Map_<number, $VillagerTrades$ItemListing_[]>, arg1: number): $List<$VillagerTrades$ItemListing>;
        static createPotionTrade(arg0: $TradeItem[]): $PotionTrade;
        static setAbstractTrades(arg0: $Map_<number, $VillagerTrades$ItemListing_[]>, arg1: number, arg2: $List_<$VillagerTrades$ItemListing_>): void;
        static CACHED_PROFESSION_TRADES: $Map<$VillagerProfession, $List<$VillagerTrades$ItemListing>>;
        static VANILLA_TRADE_TYPES: $Set<$Class<$VillagerTrades$ItemListing>>;
        constructor();
        static get professions(): $Collection<$VillagerProfession>;
    }
    export class $TradeMatcher$Filterable {
    }
    export interface $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
    }
    export class $TradeItem {
        isEmpty(): boolean;
        static of(arg0: $ItemStack_): $TradeItem;
        static of(arg0: $ItemStack_, arg1: number): $TradeItem;
        static of(arg0: $ItemStack_, arg1: number, arg2: number): $TradeItem;
        createItemStack(arg0: $RandomSource): $ItemStack;
        getItemStack(): $ItemStack;
        createItemCost(arg0: $RandomSource): $ItemCost;
        getCountRange(): $IntRange;
        static EMPTY: $TradeItem;
        constructor(arg0: $ItemStack_, arg1: $IntRange);
        get empty(): boolean;
        get itemStack(): $ItemStack;
        get countRange(): $IntRange;
    }
    export class $OfferExtension {
    }
    export interface $OfferExtension {
        setFirstCost(arg0: $ItemStack_): void;
        getSecondCost(): $ItemStack;
        setPriceMultiplier(arg0: number): void;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        setSecondCost(arg0: $ItemStack_): void;
        getFirstCost(): $ItemStack;
        setRewardExp(arg0: boolean): void;
        isRewardingExp(): boolean;
        replaceEmeralds(arg0: $Item_): void;
        setDisabled(arg0: boolean): void;
        setDemand(arg0: number): void;
        isDisabled(): boolean;
        self(): $MerchantOffer;
        setMaxUses(arg0: number): void;
        getOutput(): $ItemStack;
        setOutput(arg0: $ItemStack_): void;
        setVillagerExperience(arg0: number): void;
        set priceMultiplier(value: number);
        set rewardExp(value: boolean);
        get rewardingExp(): boolean;
        set demand(value: number);
        set maxUses(value: number);
        set villagerExperience(value: number);
    }
    export class $TradeTypes extends $Enum<$TradeTypes> {
        static values(): $TradeTypes[];
        static valueOf(arg0: string): $TradeTypes;
        static TreasureMapForEmeralds: $TradeTypes;
        static EnchantedItemForEmeralds: $TradeTypes;
        static ItemsForEmeralds: $TradeTypes;
        static ForgeBasic: $TradeTypes;
        static EmeraldsForVillagerTypeItem: $TradeTypes;
        static SuspiciousStewForEmeralds: $TradeTypes;
        static TippedArrowForItemsAndEmeralds: $TradeTypes;
        static DyedArmorForEmeralds: $TradeTypes;
        static EmeraldForItems: $TradeTypes;
        static EnchantBookForEmeralds: $TradeTypes;
        static ItemsAndEmeraldsToItems: $TradeTypes;
    }
    /**
     * Values that may be interpreted as {@link $TradeTypes}.
     */
    export type $TradeTypes_ = "dyedarmorforemeralds" | "enchantbookforemeralds" | "enchanteditemforemeralds" | "itemsforemeralds" | "itemsandemeraldstoitems" | "emeraldforitems" | "tippedarrowforitemsandemeralds" | "suspiciousstewforemeralds" | "treasuremapforemeralds" | "emeraldsforvillagertypeitem" | "forgebasic";
}
