import { $Slot, $ClickType_ } from "@package/net/minecraft/world/inventory";

declare module "@package/yalter/mousetweaks/mixin" {
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        mousetweaks$invokeFindSlot(arg0: number, arg1: number): $Slot;
        mousetweaks$getIsQuickCrafting(): boolean;
        mousetweaks$setSkipNextRelease(arg0: boolean): void;
        mousetweaks$getQuickCraftingButton(): number;
        mousetweaks$invokeSlotClicked(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_): void;
        mousetweaks$setIsQuickCrafting(arg0: boolean): void;
    }
}
