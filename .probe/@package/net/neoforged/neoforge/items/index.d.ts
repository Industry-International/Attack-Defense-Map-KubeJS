import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemContainerContents } from "@package/net/minecraft/world/item/component";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemStackHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Container } from "@package/net/minecraft/world";
import { $InvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $DispenserBlockEntity, $CrafterBlockEntity, $Hopper, $HopperBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as wrapper from "@package/net/neoforged/neoforge/items/wrapper";

declare module "@package/net/neoforged/neoforge/items" {
    export class $ItemHandlerCopySlot extends $StackCopySlot {
        getItemHandler(): $IItemHandler;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $IItemHandler, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $SlotItemHandler);
        get itemHandler(): $IItemHandler;
    }
    export class $ItemHandlerHelper {
        static insertItemStacked(arg0: $IItemHandler, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        static insertItem(arg0: $IItemHandler, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        static giveItemToPlayer(arg0: $Player, arg1: $ItemStack_, arg2: number): void;
        static giveItemToPlayer(arg0: $Player, arg1: $ItemStack_): void;
        static calcRedstoneFromInventory(arg0: $IItemHandler): number;
        constructor();
    }
    export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<$CompoundTag>, $ItemStackHandlerAccessor {
        setSize(arg0: number): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        isEmpty(): boolean;
        find(match: $ItemPredicate_): number;
        find(): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        count(): number;
        count(match: $ItemPredicate_): number;
        getWidth(): number;
        getAllItems(): $List<$ItemStack>;
        setChanged(): void;
        asContainer(): $Container;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        create$getStacks(): $NonNullList<$ItemStack>;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        constructor(arg0: $NonNullList<$ItemStack_>);
        constructor(arg0: number);
        constructor();
        set size(value: number);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $StackCopySlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: number, arg1: number);
    }
    export class $IItemHandler {
    }
    export interface $IItemHandler extends $InventoryKJS {
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        kjs$isMutable(): boolean;
        getStackInSlot(arg0: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
    }
    export class $SlotItemHandler extends $Slot {
        initialize(arg0: $ItemStack_): void;
        getItemHandler(): $IItemHandler;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $IItemHandler, arg1: number, arg2: number, arg3: number);
        get itemHandler(): $IItemHandler;
    }
    export class $ComponentItemHandler implements $IItemHandlerModifiable {
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        isEmpty(): boolean;
        find(match: $ItemPredicate_): number;
        find(): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        count(): number;
        count(match: $ItemPredicate_): number;
        getWidth(): number;
        getAllItems(): $List<$ItemStack>;
        setChanged(): void;
        asContainer(): $Container;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<$ItemContainerContents>, arg2: number);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $IItemHandlerModifiable {
    }
    export interface $IItemHandlerModifiable extends $IItemHandler {
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
    }
    export class $VanillaHopperItemHandler extends $InvWrapper {
        constructor(arg0: $HopperBlockEntity);
    }
    export class $VanillaInventoryCodeHooks {
        static insertHook(arg0: $HopperBlockEntity): boolean;
        static extractHook(arg0: $Level_, arg1: $Hopper): boolean;
        static dropperInsertHook(arg0: $Level_, arg1: $BlockPos_, arg2: $DispenserBlockEntity, arg3: number, arg4: $ItemStack_): boolean;
        static insertCrafterOutput(arg0: $Level_, arg1: $BlockPos_, arg2: $CrafterBlockEntity, arg3: $ItemStack_): $ItemStack;
        constructor();
    }
}
