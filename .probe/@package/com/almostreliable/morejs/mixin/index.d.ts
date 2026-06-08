import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $IBrewingRecipe } from "@package/net/neoforged/neoforge/common/brewing";
import { $Item } from "@package/net/minecraft/world/item";
import { $Potion, $PotionBrewing$Mix } from "@package/net/minecraft/world/item/alchemy";
import { $List } from "@package/java/util";
export * as villager from "@package/com/almostreliable/morejs/mixin/villager";

declare module "@package/com/almostreliable/morejs/mixin" {
    export class $PotionBrewingBuilderAccessor {
    }
    export interface $PotionBrewingBuilderAccessor {
        morejs$getRecipes(): $List<$IBrewingRecipe>;
        morejs$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
        morejs$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        morejs$getContainers(): $List<$Ingredient>;
    }
}
