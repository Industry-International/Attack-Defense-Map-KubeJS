import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $IFocusGroup } from "@package/mezz/jei/api/recipe";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IRecipeSlotsView_, $ICraftingGridHelper } from "@package/mezz/jei/api/gui/ingredient";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List_, $List } from "@package/java/util";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
export * as vanilla from "@package/mezz/jei/api/recipe/category/extensions/vanilla";

declare module "@package/mezz/jei/api/recipe/category/extensions" {
    export class $IRecipeCategoryDecorator<T> {
    }
    export interface $IRecipeCategoryDecorator<T> {
        draw(arg0: T, arg1: $IRecipeCategory<T>, arg2: $IRecipeSlotsView_, arg3: $GuiGraphics, arg4: number, arg5: number): void;
        decorateTooltips(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeCategory<T>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): void;
        /**
         * @deprecated
         */
        decorateExistingTooltips(arg0: $List_<$Component_>, arg1: T, arg2: $IRecipeCategory<T>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): $List<$Component>;
    }
    export class $IRecipeCategoryExtension<T> {
    }
    export interface $IRecipeCategoryExtension<T> {
        /**
         * @deprecated
         */
        drawInfo(arg0: number, arg1: number, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        drawInfo(arg0: T, arg1: number, arg2: number, arg3: $GuiGraphics, arg4: number, arg5: number): void;
        isHandled(arg0: T): boolean;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: T, arg1: number, arg2: number): $List<$Component>;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: number, arg1: number): $List<$Component>;
        createRecipeExtras(arg0: T, arg1: $IRecipeExtrasBuilder, arg2: $ICraftingGridHelper, arg3: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: T, arg1: $IRecipeExtrasBuilder, arg2: $IRecipeSlotsView_, arg3: $ICraftingGridHelper, arg4: $IFocusGroup): void;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        handleInput(arg0: number, arg1: number, arg2: $InputConstants$Key): boolean;
        /**
         * @deprecated
         */
        handleInput(arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
    }
}
