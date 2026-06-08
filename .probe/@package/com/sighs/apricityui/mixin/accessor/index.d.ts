import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Set } from "@package/java/util";

declare module "@package/com/sighs/apricityui/mixin/accessor" {
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        apricityui$isQuickCrafting(): boolean;
        apricityui$getDraggingItem(): $ItemStack;
        apricityui$getClickedSlot(): $Slot;
        apricityui$getQuickCraftingType(): number;
        apricityui$isSplittingStack(): boolean;
        apricityui$getQuickCraftSlots(): $Set<$Slot>;
    }
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        setY(arg0: number): void;
        setX(arg0: number): void;
        set y(value: number);
        set x(value: number);
    }
}
