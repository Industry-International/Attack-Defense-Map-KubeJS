import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Record } from "@package/java/lang";
import { $Set_, $List, $Set } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/dev/simulated_team/simulated/multiloader/inventory" {
    export class $AbstractContainer {
    }
    export interface $AbstractContainer extends $NBTSerializable, $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        populateFields(arg0: $ContainerSlot): void;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        clearContent(): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        setChanged(): void;
        stillValid(arg0: $Player): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        get empty(): boolean;
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get containerSize(): number;
        get maxStackSize(): number;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        clearContent(): void;
        getContainerSize(): number;
        getMaxStackSize(): number;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        populateFields(arg0: $ContainerSlot): void;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getBlock(level: $Level_): $LevelBlock;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlotLimit(slot: number): number;
        getHeight(): number;
        setChanged(): void;
        getWidth(): number;
        asContainer(): $Container;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        self(): $Container;
        clear(): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get containerSize(): number;
        get height(): number;
        get width(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
    }
    export class $ItemInfoWrapper extends $Record {
        type(): $Item;
        static generateFromStack(arg0: $ItemStack_): $ItemInfoWrapper;
        static generateFromInfo(arg0: $ItemInfoWrapper_): $ItemStack;
        patchMap(): $DataComponentPatch;
        constructor(type: $Item_, patchMap: $DataComponentPatch_);
    }
    export class $ContainerSlot implements $NBTSerializable {
        clear(): void;
        isEmpty(): boolean;
        static of(arg0: number, arg1: $Item_, arg2: $AbstractContainer): $ContainerSlot;
        static of(arg0: number, arg1: $ItemStack_, arg2: $AbstractContainer): $ContainerSlot;
        getParent(): $AbstractContainer;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getType(): $Item;
        getIndex(): number;
        getStack(): $ItemStack;
        shrink(arg0: number): void;
        setStack(arg0: $ItemStack_): void;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canExtract(): boolean;
        canInsert(arg0: $ItemInfoWrapper_): boolean;
        static EMPTY: $ContainerSlot;
        constructor();
        constructor(arg0: number, arg1: $ItemStack_, arg2: $Item_, arg3: $AbstractContainer);
        get empty(): boolean;
        get parent(): $AbstractContainer;
        get type(): $Item;
        get index(): number;
    }
}
