import { $IRecipeCategoryExtension } from "@package/mezz/jei/api/recipe/category/extensions";
import { $IRecipeLayoutBuilder } from "@package/mezz/jei/api/gui/builder";
import { $RecipeHolder, $RecipeHolder_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $IFocusGroup } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICraftingGridHelper, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $Class } from "@package/java/lang";
import { $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/category/extensions/vanilla/crafting" {
    export class $IExtendableCraftingRecipeCategory {
    }
    export interface $IExtendableCraftingRecipeCategory {
        addExtension<R extends $CraftingRecipe>(arg0: $Class<R>, arg1: $ICraftingCategoryExtension<R>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendableCraftingRecipeCategory}.
     */
    export type $IExtendableCraftingRecipeCategory_ = ((arg0: $Class<any>, arg1: $ICraftingCategoryExtension<any>) => void);
    export class $ICraftingCategoryExtension<R extends $CraftingRecipe> {
    }
    export interface $ICraftingCategoryExtension<R extends $CraftingRecipe> extends $IRecipeCategoryExtension<$RecipeHolder<R>> {
        onDisplayedIngredientsUpdate(arg0: $RecipeHolder_<R>, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getWidth(): number;
        getWidth(arg0: $RecipeHolder_<R>): number;
        setRecipe(arg0: $RecipeHolder_<R>, arg1: $IRecipeLayoutBuilder, arg2: $ICraftingGridHelper, arg3: $IFocusGroup): void;
        /**
         * @deprecated
         */
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $ICraftingGridHelper, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getRegistryName(arg0: $RecipeHolder_<R>): ($ResourceLocation) | undefined;
        /**
         * @deprecated
         */
        getRegistryName(): $ResourceLocation;
        getHeight(arg0: $RecipeHolder_<R>): number;
        /**
         * @deprecated
         */
        getHeight(): number;
    }
}
