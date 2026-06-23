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
import { $TreasureMapTrade, $SimpleTrade, $CustomTrade, $EnchantedItemTrade, $PotionTrade, $StewTrade, $TransformableTrade$Transformer_ } from "@package/com/almostreliable/morejs/features/villager/trades";
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
        notify(arg0: $ItemStack_, arg1: $ItemStack_ | null, arg2: $ItemStack_): void;
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
        matchMerchantLevel(arg0: number): boolean;
        matchProfession(arg0: $VillagerProfession_): boolean;
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
        professions(): ($HolderSet<$VillagerProfession>) | undefined;
        secondCount(): ($IntRange) | undefined;
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
        static createCustomMapTrade(arg0: $TradeItem[], arg1: $BlockPosFinder_): $TreasureMapTrade;
        static isVanillaTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static createStructureMapTrade(arg0: $TradeItem[], arg1: $HolderSet_<$Structure>): $TreasureMapTrade;
        static createBiomeMapTrade(arg0: $TradeItem[], arg1: $HolderSet_<$Biome>): $TreasureMapTrade;
        static getRandomWandererTrade(arg0: number): $VillagerTrades$ItemListing;
        static getRandomVillagerTrade(arg0: $VillagerProfession_): $VillagerTrades$ItemListing;
        static getRandomVillagerTrade(arg0: $VillagerProfession_, arg1: number): $VillagerTrades$ItemListing;
        static createEnchantedItemTrade(arg0: $TradeItem[], arg1: $ItemStack_, arg2: $HolderSet_<$Enchantment>): $EnchantedItemTrade;
        static createEnchantedItemTrade(arg0: $TradeItem[], arg1: $ItemStack_): $EnchantedItemTrade;
        static getProfession(arg0: $ResourceLocation_): $VillagerProfession;
        static createPotionTrade(arg0: $TradeItem[]): $PotionTrade;
        static setAbstractTrades(arg0: $Map_<number, $VillagerTrades$ItemListing_[]>, arg1: number, arg2: $List_<$VillagerTrades$ItemListing_>): void;
        static getVillagerTrades(arg0: $VillagerProfession_, arg1: number): $List<$VillagerTrades$ItemListing>;
        static getVillagerTrades(arg0: $VillagerProfession_): $List<$VillagerTrades$ItemListing>;
        static getProfessions(): $Collection<$VillagerProfession>;
        static createStewTrade(arg0: $TradeItem[]): $StewTrade;
        static isCustomTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static getWandererTrades(arg0: number): $List<$VillagerTrades$ItemListing>;
        static createCustomTrade(arg0: $TransformableTrade$Transformer_): $CustomTrade;
        static isModdedTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static getAbstractTrades(arg0: $Map_<number, $VillagerTrades$ItemListing_[]>, arg1: number): $List<$VillagerTrades$ItemListing>;
        static createSimpleTrade(arg0: $TradeItem[], arg1: $TradeItem): $SimpleTrade;
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
        constructor(arg0: $ItemStack_, arg1: $IntRange | null);
        get empty(): boolean;
        get itemStack(): $ItemStack;
        get countRange(): $IntRange;
    }
    export class $OfferExtension {
    }
    export interface $OfferExtension {
        self(): $MerchantOffer;
        setDisabled(arg0: boolean): void;
        getOutput(): $ItemStack;
        setDemand(arg0: number): void;
        setOutput(arg0: $ItemStack_): void;
        setMaxUses(arg0: number): void;
        isDisabled(): boolean;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        replaceEmeralds(arg0: $Item_): void;
        setPriceMultiplier(arg0: number): void;
        getSecondCost(): $ItemStack;
        setSecondCost(arg0: $ItemStack_): void;
        setRewardExp(arg0: boolean): void;
        isRewardingExp(): boolean;
        setFirstCost(arg0: $ItemStack_): void;
        getFirstCost(): $ItemStack;
        setVillagerExperience(arg0: number): void;
        set demand(value: number);
        set maxUses(value: number);
        set priceMultiplier(value: number);
        set rewardExp(value: boolean);
        get rewardingExp(): boolean;
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
