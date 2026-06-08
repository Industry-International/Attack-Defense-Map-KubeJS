import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CreativeModeTab_, $Item_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pattern } from "@package/java/util/regex";
import { $Set } from "@package/java/util";
import { $ItemStackSet, $ItemPredicate } from "@package/dev/latvian/mods/kubejs/item";
import { $Predicate, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $IngredientType, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/ingredient" {
    export class $NamespaceIngredient extends $Record implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        namespace(): string;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$NamespaceIngredient>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NamespaceIngredient>;
        constructor(namespace: string);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get stackArray(): $ItemStack[];
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
        get displayStacks(): $ItemStackSet;
    }
    export class $KubeJSIngredient {
    }
    export interface $KubeJSIngredient extends $ICustomIngredient, $ItemPredicate {
        test(stack: $ItemStack_): boolean;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
    }
    export class $KubeJSIngredients {
        static NAMESPACE: $Supplier<$IngredientType<$NamespaceIngredient>>;
        static WILDCARD: $Supplier<$IngredientType<$WildcardIngredient>>;
        static REGEX: $Supplier<$IngredientType<$RegExIngredient>>;
        static CREATIVE_TAB: $Supplier<$IngredientType<$CreativeTabIngredient>>;
        static REGISTRY: $DeferredRegister<$IngredientType<never>>;
    }
    export interface $KubeJSIngredients {
    }
    export class $CreativeTabIngredient extends $Record implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        tab(): $CreativeModeTab;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$CreativeTabIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CreativeTabIngredient>;
        constructor(tab: $CreativeModeTab_);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get stackArray(): $ItemStack[];
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
        get displayStacks(): $ItemStackSet;
    }
    export class $RegExIngredient extends $Record implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        pattern(): $Pattern;
        getType(): $IngredientType<never>;
        patternString(): string;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$RegExIngredient>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RegExIngredient>;
        constructor(pattern: $Pattern);
        constructor(pattern: $Pattern, patternString: string);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get stackArray(): $ItemStack[];
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
        get displayStacks(): $ItemStackSet;
    }
    export class $WildcardIngredient implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getItemStream(): $Stream<$Item>;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        isWildcard(): boolean;
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$WildcardIngredient>;
        static INSTANCE: $WildcardIngredient;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WildcardIngredient>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get stackArray(): $ItemStack[];
        get first(): $ItemStack;
        get itemStream(): $Stream<$Item>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get wildcard(): boolean;
        get displayStacks(): $ItemStackSet;
    }
}
