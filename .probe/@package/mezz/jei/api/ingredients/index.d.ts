import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Collection_, $List, $List_ } from "@package/java/util";
import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $RecipeIngredientRole, $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BatchRenderElement_ } from "@package/mezz/jei/api/ingredients/rendering";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object, $Iterable, $Class } from "@package/java/lang";
export * as subtypes from "@package/mezz/jei/api/ingredients/subtypes";
export * as rendering from "@package/mezz/jei/api/ingredients/rendering";

declare module "@package/mezz/jei/api/ingredients" {
    export class $IIngredientRenderer<T> {
    }
    export interface $IIngredientRenderer<T> {
        getWidth(): number;
        render(arg0: $GuiGraphics, arg1: T, arg2: number, arg3: number): void;
        render(arg0: $GuiGraphics, arg1: T): void;
        getFontRenderer(arg0: $Minecraft, arg1: T): $Font;
        renderBatch(arg0: $GuiGraphics, arg1: $List_<$BatchRenderElement_<T>>): void;
        getHeight(): number;
        getTooltip(arg0: T, arg1: $TooltipFlag): $List<$Component>;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $TooltipFlag): void;
        get width(): number;
        get height(): number;
    }
    export class $IIngredientSupplier {
    }
    export interface $IIngredientSupplier {
        getIngredients(arg0: $RecipeIngredientRole_): $List<$ITypedIngredient<never>>;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientSupplier}.
     */
    export type $IIngredientSupplier_ = ((arg0: $RecipeIngredientRole) => $List_<$ITypedIngredient<never>>);
    export class $ITypedIngredient<T> {
    }
    export interface $ITypedIngredient<T> {
        castToItemStackType(): $ITypedIngredient<$ItemStack>;
        cast<V>(arg0: $IIngredientType_<V>): $ITypedIngredient<V>;
        getType(): $IIngredientType<T>;
        getCastIngredient<V>(arg0: $IIngredientType_<V>): V;
        getBaseIngredient<B>(arg0: $IIngredientTypeWithSubtypes<B, T>): B;
        getIngredient(): T;
        getIngredient<V>(arg0: $IIngredientType_<V>): (V) | undefined;
        getItemStack(): ($ItemStack) | undefined;
        get type(): $IIngredientType<T>;
        get itemStack(): ($ItemStack) | undefined;
    }
    export class $IIngredientTypeWithSubtypes<B, I> {
    }
    export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<I> {
        getBase(arg0: I): B;
        getIngredientClass(): $Class<I>;
        getDefaultIngredient(arg0: B): I;
        getIngredientBaseClass(): $Class<B>;
        get ingredientClass(): $Class<I>;
        get ingredientBaseClass(): $Class<B>;
    }
    export class $IIngredientType<T> {
    }
    export interface $IIngredientType<T> {
        getIngredientClass(): $Class<T>;
        castIngredient(arg0: $Object): (T) | undefined;
        getCastIngredient(arg0: $Object): T;
        getUid(): string;
        get ingredientClass(): $Class<T>;
        get uid(): string;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientType}.
     */
    export type $IIngredientType_<T> = (() => $Class<T>);
    export class $IIngredientHelper<V> {
    }
    export interface $IIngredientHelper<V> {
        getDisplayName(arg0: V): string;
        getDisplayModId(arg0: V): string;
        getErrorInfo(arg0: V): string;
        /**
         * @deprecated
         */
        getWildcardId(arg0: V): string;
        getGroupingUid(arg0: V): $Object;
        getGroupingUid(arg0: $ITypedIngredient<V>): $Object;
        hasSubtypes(arg0: V): boolean;
        isValidIngredient(arg0: V): boolean;
        copyWithAmount(arg0: V, arg1: number): V;
        /**
         * @deprecated
         */
        getTagEquivalent(arg0: $Collection_<V>): ($ResourceLocation) | undefined;
        getTagStream(arg0: V): $Stream<$ResourceLocation>;
        copyIngredient(arg0: V): V;
        getIngredientType(): $IIngredientType<V>;
        getCheatItemStack(arg0: V): $ItemStack;
        getColors(arg0: V): $Iterable<number>;
        getTagKeyEquivalent(arg0: $Collection_<V>): ($TagKey<never>) | undefined;
        normalizeIngredient(arg0: V): V;
        isIngredientOnServer(arg0: V): boolean;
        isHiddenFromRecipeViewersByTags(arg0: $ITypedIngredient<V>): boolean;
        isHiddenFromRecipeViewersByTags(arg0: V): boolean;
        getUid(arg0: V, arg1: $UidContext_): $Object;
        getUid(arg0: $ITypedIngredient<V>, arg1: $UidContext_): $Object;
        getResourceLocation(arg0: V): $ResourceLocation;
        /**
         * @deprecated
         */
        getUniqueId(arg0: V, arg1: $UidContext_): string;
        getAmount(arg0: V): number;
        get ingredientType(): $IIngredientType<V>;
    }
}
