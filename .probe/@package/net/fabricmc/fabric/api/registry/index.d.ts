import { $Holder_ } from "@package/net/minecraft/core";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $PotionBrewing$Builder, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Event } from "@package/net/fabricmc/fabric/api/event";

declare module "@package/net/fabricmc/fabric/api/registry" {
    export class $FlammableBlockRegistry$Entry {
        getBurnChance(): number;
        getSpreadChance(): number;
        constructor(arg0: number, arg1: number);
        get burnChance(): number;
        get spreadChance(): number;
    }
    export class $FabricBrewingRecipeRegistryBuilder$BuildCallback {
    }
    export interface $FabricBrewingRecipeRegistryBuilder$BuildCallback {
        build(arg0: $PotionBrewing$Builder): void;
    }
    /**
     * Values that may be interpreted as {@link $FabricBrewingRecipeRegistryBuilder$BuildCallback}.
     */
    export type $FabricBrewingRecipeRegistryBuilder$BuildCallback_ = ((arg0: $PotionBrewing$Builder) => void);
    export class $FabricBrewingRecipeRegistryBuilder {
        static BUILD: $Event<$FabricBrewingRecipeRegistryBuilder$BuildCallback>;
    }
    export interface $FabricBrewingRecipeRegistryBuilder {
        registerRecipes(arg0: $Ingredient_, arg1: $Holder_<$Potion>): void;
        registerPotionRecipe(arg0: $Holder_<$Potion>, arg1: $Ingredient_, arg2: $Holder_<$Potion>): void;
        registerItemRecipe(arg0: $Item_, arg1: $Ingredient_, arg2: $Item_): void;
        getEnabledFeatures(): $FeatureFlagSet;
        get enabledFeatures(): $FeatureFlagSet;
    }
}
