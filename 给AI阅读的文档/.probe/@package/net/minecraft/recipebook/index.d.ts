import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeInput, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $Inventory, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $Iterator } from "@package/java/util";

declare module "@package/net/minecraft/recipebook" {
    export class $PlaceRecipe<T> {
    }
    export interface $PlaceRecipe<T> {
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<T>, maxAmount: number): void;
        addItemToSlot(item: T, slot: number, maxAmount: number, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PlaceRecipe}.
     */
    export type $PlaceRecipe_<T> = ((arg0: T, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $ServerPlaceRecipe<I extends $RecipeInput, R extends $Recipe<I>> implements $PlaceRecipe<number> {
        getStackSize(placeAll: boolean, maxPossible: number, recipeMatches: boolean): number;
        addItemToSlot(item: number, slot: number, maxAmount: number, x: number, y: number): void;
        recipeClicked(player: $ServerPlayer, recipe: $RecipeHolder_<R> | null, placeAll: boolean): void;
        handleRecipeClicked(recipe: $RecipeHolder_<R>, placeAll: boolean): void;
        moveItemToGrid(slot: $Slot, stack: $ItemStack_, maxAmount: number): number;
        clearGrid(): void;
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<number>, maxAmount: number): void;
        stackedContents: $StackedContents;
        inventory: $Inventory;
        menu: $RecipeBookMenu<I, R>;
        constructor(menu: $RecipeBookMenu<I, R>);
    }
}
