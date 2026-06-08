import { $IRecipeLayoutBuilder, $IIngredientConsumer, $ITooltipBuilder, $IRecipeSlotBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IIngredientType_, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $RecipeIngredientRole, $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/gui/ingredient" {
    export class $IRecipeSlotView {
    }
    export interface $IRecipeSlotView {
        isEmpty(): boolean;
        drawHighlight(arg0: $GuiGraphics, arg1: number): void;
        getSlotName(): (string) | undefined;
        getAllIngredients(): $Stream<$ITypedIngredient<never>>;
        getRole(): $RecipeIngredientRole;
        getDisplayedItemStack(): ($ItemStack) | undefined;
        getDisplayedIngredient(): ($ITypedIngredient<never>) | undefined;
        getDisplayedIngredient<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        getAllIngredientsList(): $List<$ITypedIngredient<never>>;
        getItemStacks(): $Stream<$ItemStack>;
        getIngredients<T>(arg0: $IIngredientType_<T>): $Stream<T>;
        get empty(): boolean;
        get slotName(): (string) | undefined;
        get allIngredients(): $Stream<$ITypedIngredient<never>>;
        get role(): $RecipeIngredientRole;
        get displayedItemStack(): ($ItemStack) | undefined;
        get allIngredientsList(): $List<$ITypedIngredient<never>>;
        get itemStacks(): $Stream<$ItemStack>;
    }
    export class $IRecipeSlotRichTooltipCallback {
    }
    export interface $IRecipeSlotRichTooltipCallback {
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotRichTooltipCallback}.
     */
    export type $IRecipeSlotRichTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $ITooltipBuilder) => void);
    export class $IRecipeSlotsView {
    }
    export interface $IRecipeSlotsView {
        getSlotViews(): $List<$IRecipeSlotView>;
        getSlotViews(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotView>;
        findSlotByName(arg0: string): ($IRecipeSlotView) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotsView}.
     */
    export type $IRecipeSlotsView_ = (() => $List_<$IRecipeSlotView>);
    export class $IRecipeSlotDrawable {
    }
    export interface $IRecipeSlotDrawable extends $IRecipeSlotView {
        draw(arg0: $GuiGraphics): void;
        /**
         * @deprecated
         */
        addTooltipCallback(arg0: $IRecipeSlotTooltipCallback_): void;
        drawHoverOverlays(arg0: $GuiGraphics): void;
        drawTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        setPosition(arg0: number, arg1: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        getRect(): $Rect2i;
        clearDisplayOverrides(): void;
        createDisplayOverrides(): $IIngredientConsumer;
        getAreaIncludingBackground(): $Rect2i;
        /**
         * @deprecated
         */
        getTooltip(arg0: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        getTooltip(): $List<$Component>;
        get rect(): $Rect2i;
        get areaIncludingBackground(): $Rect2i;
    }
    export class $IRecipeSlotDrawablesView {
    }
    export interface $IRecipeSlotDrawablesView {
        getSlots(): $List<$IRecipeSlotDrawable>;
        getSlots(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotDrawable>;
        findSlotByName(arg0: string): ($IRecipeSlotDrawable) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotDrawablesView}.
     */
    export type $IRecipeSlotDrawablesView_ = (() => $List_<$IRecipeSlotDrawable>);
    export class $ICraftingGridHelper {
    }
    export interface $ICraftingGridHelper {
        createAndSetNamedInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $List_<$ItemStack_>>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetNamedInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$Pair<string, $List_<T>>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
        createAndSetOutputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$ItemStack_>): $IRecipeSlotBuilder;
        createAndSetOutputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<T>): $IRecipeSlotBuilder;
        createAndSetIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Ingredient_>, arg2: number, arg3: number): void;
        createAndSetNamedIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $Ingredient_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        setInputs<T>(arg0: $List_<$IRecipeSlotBuilder>, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): void;
        createAndSetInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$List_<$ItemStack_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
    }
    /**
     * @deprecated
     */
    export class $IRecipeSlotTooltipCallback {
    }
    export interface $IRecipeSlotTooltipCallback {
        /**
         * @deprecated
         */
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        onTooltip(arg0: $IRecipeSlotView, arg1: $List_<$Component_>): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotTooltipCallback}.
     */
    export type $IRecipeSlotTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $List<$Component>) => void);
}
