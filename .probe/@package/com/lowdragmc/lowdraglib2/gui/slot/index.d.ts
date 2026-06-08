import { $Container } from "@package/net/minecraft/world";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/gui/slot" {
    export class $LocalSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor();
    }
    export class $ItemHandlerSlot extends $Slot {
        setCanTake(arg0: $Predicate_<$Player>): $ItemHandlerSlot;
        getCanTake(): $Predicate<$Player>;
        getItemHandler(): $IItemHandlerModifiable;
        getCanPlace(): $Predicate<$ItemStack>;
        addChangeListener(arg0: $Runnable_): $ItemHandlerSlot;
        setCanPlace(arg0: $Predicate_<$ItemStack>): $ItemHandlerSlot;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $IItemHandlerModifiable, arg1: number);
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: number, arg3: number);
        get itemHandler(): $IItemHandlerModifiable;
    }
}
