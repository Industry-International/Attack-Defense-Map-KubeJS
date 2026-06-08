import { $RegistryAccess, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $PotionBrewing$Builder } from "@package/net/minecraft/world/item/alchemy";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/net/neoforged/neoforge/event/brewing" {
    export class $PotionBrewEvent extends $Event {
        getLength(): number;
        getItem(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        get length(): number;
    }
    export class $PlayerBrewedPotionEvent extends $PlayerEvent {
        getStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get stack(): $ItemStack;
    }
    export class $RegisterBrewingRecipesEvent extends $Event {
        getBuilder(): $PotionBrewing$Builder;
        getRegistryAccess(): $RegistryAccess;
        constructor(arg0: $PotionBrewing$Builder, arg1: $RegistryAccess);
        get builder(): $PotionBrewing$Builder;
        get registryAccess(): $RegistryAccess;
    }
    export class $PotionBrewEvent$Post extends $PotionBrewEvent {
        constructor(arg0: $NonNullList<$ItemStack_>);
    }
    export class $PotionBrewEvent$Pre extends $PotionBrewEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $NonNullList<$ItemStack_>);
    }
}
