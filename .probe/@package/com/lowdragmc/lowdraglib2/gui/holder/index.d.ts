import { $IUISyncManagerHolder, $UISyncManager } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IContainerUIHolder } from "@package/com/lowdragmc/lowdraglib2/gui/factory";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerListener, $Slot, $ContainerSynchronizer, $MenuType_, $AbstractContainerMenu, $MenuType } from "@package/net/minecraft/world/inventory";
import { $List, $Map, $Set } from "@package/java/util";
import { $ItemSlot } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";

declare module "@package/com/lowdragmc/lowdraglib2/gui/holder" {
    export class $IModularUIHolder {
    }
    export interface $IModularUIHolder extends $IUISyncManagerHolder {
        getModularUI(): $ModularUI;
        getSyncManager(): $UISyncManager;
        hasModularUI(): boolean;
        get modularUI(): $ModularUI;
        get syncManager(): $UISyncManager;
    }
    /**
     * Values that may be interpreted as {@link $IModularUIHolder}.
     */
    export type $IModularUIHolder_ = (() => $ModularUI);
    export class $ModularUIContainerMenu extends $AbstractContainerMenu {
        asModularUIHolderMenu(): $IModularUIHolderMenu;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        inventory: $Inventory;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        uiHolder: $IContainerUIHolder;
        modularUI: $ModularUI;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(arg0: $MenuType_<$ModularUIContainerMenu>, arg1: number, arg2: $Inventory, arg3: $IContainerUIHolder);
    }
    export class $IModularUIHolderMenu {
    }
    export interface $IModularUIHolderMenu extends $IModularUIHolder, $IItemSlotHolderMenu {
        addSlot(arg0: $ItemSlot): void;
        getModularUI(): $ModularUI;
        ldlib2$setModularUI(arg0: $ModularUI): void;
        ldlib2$getModularUI(): $ModularUI;
        setModularUI(arg0: $ModularUI): void;
        getItemSlot(arg0: $Slot): $ItemSlot;
        ldlib2$addSlot(arg0: $ItemSlot): void;
        ldlib2$getItemSlot(arg0: $Slot): $ItemSlot;
    }
    export class $IItemSlotHolderMenu {
    }
    export interface $IItemSlotHolderMenu {
        self(): $AbstractContainerMenu;
        isItemSlot(arg0: $Slot): boolean;
        addSlot(arg0: $ItemSlot): void;
        getItemSlot(arg0: $Slot): $ItemSlot;
    }
    /**
     * Values that may be interpreted as {@link $IItemSlotHolderMenu}.
     */
    export type $IItemSlotHolderMenu_ = ((arg0: $Slot) => $ItemSlot);
}
