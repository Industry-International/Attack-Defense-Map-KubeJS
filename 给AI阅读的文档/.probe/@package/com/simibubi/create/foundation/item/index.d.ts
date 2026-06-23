import { $BiPredicate_, $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemHandlerContainer, $SyncedBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";

declare module "@package/com/simibubi/create/foundation/item" {
    export class $SmartInventory extends $ItemHandlerContainer implements $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        allowExtraction(): $SmartInventory;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        forbidExtraction(): $SmartInventory;
        allowInsertion(): $SmartInventory;
        withMaxStackSize(arg0: number): $SmartInventory;
        forbidInsertion(): $SmartInventory;
        getStackLimit(arg0: number, arg1: $ItemStack_): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        whenContentsChanged(arg0: $Consumer_<number>): $SmartInventory;
        kjs$self(): $IItemHandler;
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean, arg4: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity);
        get slots(): number;
    }
}
