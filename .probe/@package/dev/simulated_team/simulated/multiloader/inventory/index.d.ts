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
        getMaxStackSize(): number;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        populateFields(arg0: $ContainerSlot): void;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        get empty(): boolean;
        get maxStackSize(): number;
        get containerSize(): number;
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        setChanged(): void;
        getContainerSize(): number;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        populateFields(arg0: $ContainerSlot): void;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        clear(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        setChanged(): void;
        asContainer(): $Container;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        isEmpty(): boolean;
        find(match: $ItemPredicate_): number;
        find(): number;
        clear(match: $ItemPredicate_): void;
        count(): number;
        count(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get containerSize(): number;
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
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
        static generateFromInfo(arg0: $ItemInfoWrapper_): $ItemStack;
        static generateFromStack(arg0: $ItemStack_): $ItemInfoWrapper;
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
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
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
