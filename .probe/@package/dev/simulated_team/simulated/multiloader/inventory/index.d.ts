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
        clearContent(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getMaxStackSize(): number;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        populateFields(arg0: $ContainerSlot): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        get empty(): boolean;
        get maxStackSize(): number;
        get containerSize(): number;
        get populatedSlots(): $Set<$ContainerSlot>;
        get inventoryAsList(): $List<$ContainerSlot>;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        clearContent(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getMaxStackSize(): number;
        getContainerSize(): number;
        setChanged(): void;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        getInventoryAsList(): $List<$ContainerSlot>;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        populateFields(arg0: $ContainerSlot): void;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        asContainer(): $Container;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get containerSize(): number;
        get populatedSlots(): $Set<$ContainerSlot>;
        get inventoryAsList(): $List<$ContainerSlot>;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
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
        setStack(arg0: $ItemStack_): void;
        shrink(arg0: number): void;
        canExtract(): boolean;
        canInsert(arg0: $ItemInfoWrapper_): boolean;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        static EMPTY: $ContainerSlot;
        constructor();
        constructor(arg0: number, arg1: $ItemStack_, arg2: $Item_, arg3: $AbstractContainer);
        get empty(): boolean;
        get parent(): $AbstractContainer;
        get type(): $Item;
        get index(): number;
    }
}
