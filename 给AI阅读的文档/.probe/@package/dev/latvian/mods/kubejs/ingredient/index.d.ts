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
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        getItemTypes(): $Set<$Item>;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemIds(): $Set<string>;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$NamespaceIngredient>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NamespaceIngredient>;
        constructor(namespace: string);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get displayStacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemIds(): $Set<string>;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get wildcard(): boolean;
    }
    export class $KubeJSIngredient {
    }
    export interface $KubeJSIngredient extends $ICustomIngredient, $ItemPredicate {
        isSimple(): boolean;
        test(stack: $ItemStack_): boolean;
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
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        getItemTypes(): $Set<$Item>;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemIds(): $Set<string>;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$CreativeTabIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CreativeTabIngredient>;
        constructor(tab: $CreativeModeTab_);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get displayStacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemIds(): $Set<string>;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get wildcard(): boolean;
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
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        getItemTypes(): $Set<$Item>;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemIds(): $Set<string>;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        isWildcard(): boolean;
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
        get displayStacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemIds(): $Set<string>;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get wildcard(): boolean;
    }
    export class $WildcardIngredient implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        getDisplayStacks(): $ItemStackSet;
        asIngredient(): $Ingredient;
        getItemTypes(): $Set<$Item>;
        testItem(item: $Item_): boolean;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        getItemIds(): $Set<string>;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$WildcardIngredient>;
        static INSTANCE: $WildcardIngredient;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WildcardIngredient>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get displayStacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get itemIds(): $Set<string>;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get wildcard(): boolean;
    }
}
