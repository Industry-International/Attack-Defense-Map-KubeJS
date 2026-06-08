import { $IngredientActionHolder_, $IngredientActionHolder } from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ShapedRecipe, $RecipeSerializer, $Ingredient, $CraftingBookCategory_, $Recipe, $ShapedRecipePattern, $CraftingInput, $CraftingRecipe, $ShapelessRecipe } from "@package/net/minecraft/world/item/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/recipe/special" {
    export class $ShapelessKubeJSRecipe extends $ShapelessRecipe implements $KubeJSCraftingRecipe {
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        kjs$getIngredientActions(): $List<$IngredientActionHolder>;
        kjs$getModifyResult(): string;
        kjs$assemble(input: $CraftingInput, registryAccess: $HolderLookup$Provider): $ItemStack;
        kjs$getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        result: $ItemStack;
        ingredients: $NonNullList<$Ingredient>;
        group: string;
        constructor(original: $ShapelessRecipe, ingredientActions: $List_<$IngredientActionHolder_>, modifyResult: string);
    }
    export class $SpecialRecipeSerializerManager implements $KubeEvent {
        reset(): void;
        isSpecial(recipe: $Recipe<never>): boolean;
        ignoreSpecialMod(modid: string): void;
        addSpecialMod(modid: string): void;
        ignoreSpecialFlag(id: $ResourceLocation_): void;
        addSpecialFlag(id: $ResourceLocation_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        static INSTANCE: $SpecialRecipeSerializerManager;
        constructor();
    }
    export class $SpecialRecipeSerializerManager$AfterPost extends $Event {
        constructor();
    }
    export class $ShapedKubeJSRecipe extends $ShapedRecipe implements $KubeJSCraftingRecipe {
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        kjs$getMirror(): boolean;
        kjs$getIngredientActions(): $List<$IngredientActionHolder>;
        kjs$getModifyResult(): string;
        kjs$assemble(input: $CraftingInput, registryAccess: $HolderLookup$Provider): $ItemStack;
        kjs$getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        group: string;
        constructor(group: string, category: $CraftingBookCategory_, pattern: $ShapedRecipePattern, result: $ItemStack_, showNotification: boolean, mirror: boolean, ingredientActions: $List_<$IngredientActionHolder_>, modifyResult: string);
    }
    export class $KubeJSCraftingRecipe {
        static MIRROR_KEY: string;
        static INGREDIENT_ACTIONS_KEY: string;
        static MODIFY_RESULT_KEY: string;
    }
    export interface $KubeJSCraftingRecipe extends $CraftingRecipe {
        kjs$assemble(input: $CraftingInput, registryAccess: $HolderLookup$Provider): $ItemStack;
        kjs$getIngredientActions(): $List<$IngredientActionHolder>;
        kjs$getModifyResult(): string;
        kjs$getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
    }
    export class $ShapelessKubeJSRecipe$SerializerKJS implements $RecipeSerializer<$ShapelessKubeJSRecipe> {
        codec(): $MapCodec<$ShapelessKubeJSRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessKubeJSRecipe>;
        static CODEC: $MapCodec<$ShapelessKubeJSRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessKubeJSRecipe>;
        constructor();
    }
    export class $RecipeFlags {
        static INGREDIENT_ACTIONS: number;
        static STAGE: number;
        static MIRROR: number;
    }
    export interface $RecipeFlags {
    }
    export class $ShapedKubeJSRecipe$SerializerKJS implements $RecipeSerializer<$ShapedKubeJSRecipe> {
        codec(): $MapCodec<$ShapedKubeJSRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapedKubeJSRecipe>;
        static CODEC: $MapCodec<$ShapedKubeJSRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedKubeJSRecipe>;
        constructor();
    }
}
