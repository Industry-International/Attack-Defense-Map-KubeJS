import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Set } from "@package/java/util";

declare module "@package/com/sighs/apricityui/mixin/accessor" {
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        apricityui$getClickedSlot(): $Slot;
        apricityui$getDraggingItem(): $ItemStack;
        apricityui$isQuickCrafting(): boolean;
        apricityui$getQuickCraftingType(): number;
        apricityui$isSplittingStack(): boolean;
        apricityui$getQuickCraftSlots(): $Set<$Slot>;
    }
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        setX(arg0: number): void;
        setY(arg0: number): void;
        set x(value: number);
        set y(value: number);
    }
}
