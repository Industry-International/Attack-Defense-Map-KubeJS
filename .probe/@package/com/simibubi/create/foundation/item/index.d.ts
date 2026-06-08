import { $BiPredicate_, $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemHandlerContainer, $SyncedBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";

declare module "@package/com/simibubi/create/foundation/item" {
    export class $SmartInventory extends $ItemHandlerContainer implements $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
        getSlots(): number;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        whenContentsChanged(arg0: $Consumer_<number>): $SmartInventory;
        getStackLimit(arg0: number, arg1: $ItemStack_): number;
        forbidInsertion(): $SmartInventory;
        withMaxStackSize(arg0: number): $SmartInventory;
        forbidExtraction(): $SmartInventory;
        allowInsertion(): $SmartInventory;
        allowExtraction(): $SmartInventory;
        kjs$self(): $IItemHandler;
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean, arg4: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity);
        get slots(): number;
    }
}
