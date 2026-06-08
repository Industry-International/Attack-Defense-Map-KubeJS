import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeInput, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $Iterator } from "@package/java/util";

declare module "@package/net/minecraft/recipebook" {
    export class $PlaceRecipe<T> {
    }
    export interface $PlaceRecipe<T> {
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<T>, arg5: number): void;
        addItemToSlot(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PlaceRecipe}.
     */
    export type $PlaceRecipe_<T> = ((arg0: T, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $ServerPlaceRecipe<I extends $RecipeInput, R extends $Recipe<I>> implements $PlaceRecipe<number> {
        moveItemToGrid(arg0: $Slot, arg1: $ItemStack_, arg2: number): number;
        getStackSize(arg0: boolean, arg1: number, arg2: boolean): number;
        addItemToSlot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        recipeClicked(arg0: $ServerPlayer, arg1: $RecipeHolder_<R>, arg2: boolean): void;
        clearGrid(): void;
        handleRecipeClicked(arg0: $RecipeHolder_<R>, arg1: boolean): void;
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<number>, arg5: number): void;
        stackedContents: $StackedContents;
        inventory: $Inventory;
        menu: $RecipeBookMenu<I, R>;
        constructor(arg0: $RecipeBookMenu<I, R>);
    }
}
