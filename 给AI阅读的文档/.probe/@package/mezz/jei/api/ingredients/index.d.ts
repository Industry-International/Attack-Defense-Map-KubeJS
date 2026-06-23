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
        renderBatch(arg0: $GuiGraphics, arg1: $List_<$BatchRenderElement_<T>>): void;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $TooltipFlag): void;
        getTooltip(arg0: T, arg1: $TooltipFlag): $List<$Component>;
        getHeight(): number;
        getFontRenderer(arg0: $Minecraft, arg1: T): $Font;
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
        cast<V>(arg0: $IIngredientType_<V>): $ITypedIngredient<V>;
        getType(): $IIngredientType<T>;
        getBaseIngredient<B>(arg0: $IIngredientTypeWithSubtypes<B, T>): B;
        getCastIngredient<V>(arg0: $IIngredientType_<V>): V;
        getItemStack(): ($ItemStack) | undefined;
        getIngredient<V>(arg0: $IIngredientType_<V>): (V) | undefined;
        getIngredient(): T;
        castToItemStackType(): $ITypedIngredient<$ItemStack>;
        get type(): $IIngredientType<T>;
        get itemStack(): ($ItemStack) | undefined;
    }
    export class $IIngredientTypeWithSubtypes<B, I> {
    }
    export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<I> {
        getBase(arg0: I): B;
        getIngredientBaseClass(): $Class<B>;
        getIngredientClass(): $Class<I>;
        getDefaultIngredient(arg0: B): I;
        get ingredientBaseClass(): $Class<B>;
        get ingredientClass(): $Class<I>;
    }
    export class $IIngredientType<T> {
    }
    export interface $IIngredientType<T> {
        getUid(): string;
        getCastIngredient(arg0: $Object): T;
        castIngredient(arg0: $Object): (T) | undefined;
        getIngredientClass(): $Class<T>;
        get uid(): string;
        get ingredientClass(): $Class<T>;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientType}.
     */
    export type $IIngredientType_<T> = (() => $Class<T>);
    export class $IIngredientHelper<V> {
    }
    export interface $IIngredientHelper<V> {
        getDisplayName(arg0: V): string;
        getResourceLocation(arg0: V): $ResourceLocation;
        getUid(arg0: $ITypedIngredient<V>, arg1: $UidContext_): $Object;
        getUid(arg0: V, arg1: $UidContext_): $Object;
        copyWithAmount(arg0: V, arg1: number): V;
        /**
         * @deprecated
         */
        getTagEquivalent(arg0: $Collection_<V>): ($ResourceLocation) | undefined;
        /**
         * @deprecated
         */
        getWildcardId(arg0: V): string;
        hasSubtypes(arg0: V): boolean;
        getGroupingUid(arg0: $ITypedIngredient<V>): $Object;
        getGroupingUid(arg0: V): $Object;
        getTagStream(arg0: V): $Stream<$ResourceLocation>;
        getIngredientType(): $IIngredientType<V>;
        copyIngredient(arg0: V): V;
        isValidIngredient(arg0: V): boolean;
        isIngredientOnServer(arg0: V): boolean;
        normalizeIngredient(arg0: V): V;
        getTagKeyEquivalent(arg0: $Collection_<V>): ($TagKey<never>) | undefined;
        getAmount(arg0: V): number;
        getColors(arg0: V): $Iterable<number>;
        getErrorInfo(arg0: V): string;
        getDisplayModId(arg0: V): string;
        getCheatItemStack(arg0: V): $ItemStack;
        isHiddenFromRecipeViewersByTags(arg0: V): boolean;
        isHiddenFromRecipeViewersByTags(arg0: $ITypedIngredient<V>): boolean;
        /**
         * @deprecated
         */
        getUniqueId(arg0: V, arg1: $UidContext_): string;
        get ingredientType(): $IIngredientType<V>;
    }
}
