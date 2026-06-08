import { $Level_ } from "@package/net/minecraft/world/level";
import { $WorldlyContainer, $Container } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $LivingEntity, $EquipmentSlot$Type_ } from "@package/net/minecraft/world/entity";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/net/neoforged/neoforge/items/wrapper" {
    export class $PlayerOffhandInvWrapper extends $RangedWrapper {
        constructor(arg0: $Inventory);
    }
    export class $PlayerArmorInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(arg0: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    export class $EntityEquipmentInvWrapper implements $IItemHandlerModifiable {
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $EquipmentSlot$Type_);
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
    export class $PlayerInvWrapper extends $CombinedInvWrapper {
        constructor(arg0: $Inventory);
    }
    export class $ForwardingItemHandler implements $IItemHandler {
        getSlots(): number;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        constructor(arg0: $IItemHandler);
        constructor(arg0: $Supplier_<$IItemHandler>);
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
    export class $RangedWrapper implements $IItemHandlerModifiable {
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: number);
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
    export class $EntityArmorInvWrapper extends $EntityEquipmentInvWrapper {
        constructor(arg0: $LivingEntity);
    }
    export class $EmptyItemHandler implements $IItemHandlerModifiable {
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        static INSTANCE: $IItemHandler;
        constructor();
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
    export class $SidedInvWrapper implements $IItemHandlerModifiable {
        static getSlot(arg0: $WorldlyContainer, arg1: number, arg2: $Direction_): number;
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        constructor(arg0: $WorldlyContainer, arg1: $Direction_);
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
    export class $InvWrapper implements $IItemHandlerModifiable {
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getInv(): $Container;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        constructor(arg0: $Container);
        get inv(): $Container;
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
    export class $PlayerMainInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(arg0: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    export class $EntityHandsInvWrapper extends $EntityEquipmentInvWrapper {
        constructor(arg0: $LivingEntity);
    }
    export class $SidedInvWrapper$InsertLimit {
    }
    export interface $SidedInvWrapper$InsertLimit {
    }
    /**
     * Values that may be interpreted as {@link $SidedInvWrapper$InsertLimit}.
     */
    export type $SidedInvWrapper$InsertLimit_ = (() => void);
    export class $RecipeWrapper implements $RecipeInput {
        size(): number;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        self(): $RecipeInput;
        constructor(arg0: $IItemHandler);
        get empty(): boolean;
    }
    export class $CombinedInvWrapper implements $IItemHandlerModifiable {
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        constructor(...arg0: $IItemHandlerModifiable[]);
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
}
