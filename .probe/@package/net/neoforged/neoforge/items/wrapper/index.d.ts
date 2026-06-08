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
        constructor(arg0: $LivingEntity, arg1: $EquipmentSlot$Type_);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $PlayerInvWrapper extends $CombinedInvWrapper {
        constructor(arg0: $Inventory);
    }
    export class $ForwardingItemHandler implements $IItemHandler {
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
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
        constructor(arg0: $IItemHandler);
        constructor(arg0: $Supplier_<$IItemHandler>);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $RangedWrapper implements $IItemHandlerModifiable {
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
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: number);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $EntityArmorInvWrapper extends $EntityEquipmentInvWrapper {
        constructor(arg0: $LivingEntity);
    }
    export class $EmptyItemHandler implements $IItemHandlerModifiable {
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
        static INSTANCE: $IItemHandler;
        constructor();
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $SidedInvWrapper implements $IItemHandlerModifiable {
        static getSlot(arg0: $WorldlyContainer, arg1: number, arg2: $Direction_): number;
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
        constructor(arg0: $WorldlyContainer, arg1: $Direction_);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $InvWrapper implements $IItemHandlerModifiable {
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getStackInSlot(arg0: number): $ItemStack;
        getInv(): $Container;
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
        constructor(arg0: $Container);
        get inv(): $Container;
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
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
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(arg0: $IItemHandler);
        get empty(): boolean;
    }
    export class $CombinedInvWrapper implements $IItemHandlerModifiable {
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
        constructor(...arg0: $IItemHandlerModifiable[]);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
}
