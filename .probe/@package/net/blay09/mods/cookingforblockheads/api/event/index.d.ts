import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $RegistryAccess, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";

declare module "@package/net/blay09/mods/cookingforblockheads/api/event" {
    export class $OvenItemSmeltedEvent extends $BalmEvent {
        getLevel(): $Level;
        getPos(): $BlockPos;
        getPlayer(): $Player;
        getResultItem(): $ItemStack;
        constructor(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_);
        get level(): $Level;
        get pos(): $BlockPos;
        get player(): $Player;
        get resultItem(): $ItemStack;
    }
    export class $OvenCookedEvent extends $BalmEvent {
        getLevel(): $Level;
        getPos(): $BlockPos;
        getResultItem(): $ItemStack;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_);
        get level(): $Level;
        get pos(): $BlockPos;
        get resultItem(): $ItemStack;
    }
    export class $PopulateCookingRegistryEvent extends $BalmEvent {
        getRecipeManager(): $RecipeManager;
        getRegistryAccess(): $RegistryAccess;
        constructor(arg0: $RecipeManager, arg1: $RegistryAccess);
        get recipeManager(): $RecipeManager;
        get registryAccess(): $RegistryAccess;
    }
}
