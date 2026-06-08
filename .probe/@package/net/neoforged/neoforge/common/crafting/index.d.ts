import { $JsonElement } from "@package/com/google/gson";
import { $ItemLike_, $ItemLike } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Recipe, $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $List, $List_, $Set } from "@package/java/util";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $AdvancementHolder_, $Advancement$Builder } from "@package/net/minecraft/advancements";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate, $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CraftingContainer, $ResultContainer } from "@package/net/minecraft/world/inventory";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $DataComponentPredicate, $DataComponentType_, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $SizedIngredientKJS, $CustomIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Iterable_, $Record, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/common/crafting" {
    export class $DifferenceIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        base(): $Ingredient;
        test(arg0: $ItemStack_): boolean;
        static of(arg0: $Ingredient_, arg1: $Ingredient_): $Ingredient;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        subtracted(): $Ingredient;
        toVanilla(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$DifferenceIngredient>;
        constructor(base: $Ingredient_, subtracted: $Ingredient_);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
    }
    export class $CraftingHelper {
        static makeIngredientCodec(arg0: boolean): $Codec<$Ingredient>;
        static makeIngredientMapCodec(): $MapCodec<$Ingredient>;
        constructor();
    }
    export class $ConditionalRecipeOutput implements $RecipeOutput {
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): void;
        advancement(): $Advancement$Builder;
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_): void;
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
        getRecipeIdentifier(arg0: $ResourceLocation_): $ResourceLocation;
        constructor(arg0: $RecipeOutput, arg1: $ICondition[]);
    }
    export class $BlockTagIngredient implements $ICustomIngredient {
        test(arg0: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        getTag(): $TagKey<$Block>;
        isSimple(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        kjs$asIngredient(): $Ingredient;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$BlockTagIngredient>;
        constructor(arg0: $TagKey_<$Block>);
        get type(): $IngredientType<never>;
        get tag(): $TagKey<$Block>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
    }
    export class $IntersectionIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        test(arg0: $ItemStack_): boolean;
        static of(...arg0: $Ingredient_[]): $Ingredient;
        getType(): $IngredientType<never>;
        children(): $List<$Ingredient>;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$IntersectionIngredient>;
        constructor(children: $List_<$Ingredient_>);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
    }
    export class $DataComponentIngredient implements $ICustomIngredient {
        test(arg0: $ItemStack_): boolean;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Holder_<$Item>[]): $Ingredient;
        static of<T>(arg0: boolean, arg1: $Supplier_<$DataComponentType<T>>, arg2: T, ...arg3: $ItemLike_[]): $Ingredient;
        static of<T>(arg0: boolean, arg1: $DataComponentType_<T>, arg2: T, ...arg3: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, arg2: $HolderSet_<$Item>): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Holder_<$Item>[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, arg2: $HolderSet_<$Item>): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $ItemStack_): $Ingredient;
        getType(): $IngredientType<never>;
        isStrict(): boolean;
        isSimple(): boolean;
        items(): $HolderSet<$Item>;
        components(): $DataComponentPredicate;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        kjs$asIngredient(): $Ingredient;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$DataComponentIngredient>;
        constructor(arg0: $HolderSet_<$Item>, arg1: $DataComponentPredicate, arg2: boolean);
        get type(): $IngredientType<never>;
        get strict(): boolean;
        get simple(): boolean;
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
    }
    export class $CompoundIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        test(arg0: $ItemStack_): boolean;
        static of(...arg0: $Ingredient_[]): $Ingredient;
        getType(): $IngredientType<never>;
        children(): $List<$Ingredient>;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$CompoundIngredient>;
        constructor(children: $List_<$Ingredient_>);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
    }
    export class $ICustomIngredient {
    }
    export interface $ICustomIngredient extends $CustomIngredientKJS {
        test(arg0: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getItems(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
    }
    export class $SizedIngredient implements $SizedIngredientKJS {
        test(arg0: $ItemStack_): boolean;
        static of(arg0: $ItemLike_, arg1: number): $SizedIngredient;
        static of(arg0: $TagKey_<$Item>, arg1: number): $SizedIngredient;
        count(): number;
        ingredient(): $Ingredient;
        getItems(): $ItemStack[];
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        kjs$asIngredient(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$self(): $SizedIngredient;
        kjs$toNestedJson(): $JsonElement;
        kjs$toFlatJson(): $JsonElement;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        static NESTED_CODEC: $Codec<$SizedIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedIngredient>;
        static FLAT_CODEC: $Codec<$SizedIngredient>;
        constructor(arg0: $Ingredient_, arg1: number);
        get items(): $ItemStack[];
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredient}.
     */
    export type $SizedIngredient_ = $ItemStack_ | $Ingredient_;
    export class $IngredientType<T extends $ICustomIngredient> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $IngredientType}.
     */
    export type $IngredientType_<T> = RegistryTypes.NeoforgeIngredientSerializer;
    export interface $IngredientType extends RegistryMarked<RegistryTypes.NeoforgeIngredientSerializerTag, RegistryTypes.NeoforgeIngredientSerializer> {}
    export class $IRecipeContainer {
    }
    export interface $IRecipeContainer {
        getCraftMatrix(): $CraftingContainer;
        getCraftResult(): $ResultContainer;
        get craftMatrix(): $CraftingContainer;
        get craftResult(): $ResultContainer;
    }
}
