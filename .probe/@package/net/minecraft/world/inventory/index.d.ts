import { $UISyncManager } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $IModularUIHolderMenu } from "@package/com/lowdragmc/lowdraglib2/gui/holder";
import { $Codec } from "@package/com/mojang/serialization";
import { $SmithingRecipe, $RecipeType_, $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set_, $Map, $Set, $OptionalInt, $List, $List_, $Optional } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $SlotAccessor as $SlotAccessor$1 } from "@package/net/blay09/mods/balm/mixin";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $SlotAccessor } from "@package/com/sighs/apricityui/mixin/accessor";
import { $Enum, $Record, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $MerchantOffer, $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $SlotAccessor as $SlotAccessor$2 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CraftingContainerAccess, $ContainerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $ItemSlot } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Stream } from "@package/java/util/stream";
import { $ContainerLevelAccessMixin } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $EnchantmentMenuExtension } from "@package/com/almostreliable/morejs/features/enchantment";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessorTransientCraftingContainer } from "@package/xfacthd/framedblocks/mixin";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(arg0: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $AbstractFurnaceMenu, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> {
        getCraftSlots(): $CraftingContainer;
        static isHotbarSlot(arg0: number): boolean;
        quickcraftSlots: $Set<$Slot>;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static CONTAINER_ID: number;
        constructor(arg0: $Inventory, arg1: boolean, arg2: $Player);
        get craftSlots(): $CraftingContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $Merchant, arg2: $MerchantContainer, arg3: number, arg4: number, arg5: number);
    }
    export class $SlotRanges {
        static allNames(): $Stream<string>;
        static singleSlotNames(): $Stream<string>;
        static nameToIds(arg0: string): $SlotRange;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $ResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $CraftingContainer, arg2: $Container, arg3: number, arg4: number, arg5: number);
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $AbstractHorse, arg4: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        selectedRecipe: $RecipeHolder<$SmithingRecipe>;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        resultSlotIndex: number;
        static TEMPLATE_SLOT: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        static BASE_SLOT: number;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        create(arg0: number, arg1: $Inventory): T;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getKey(): $ResourceKey<any>;
        kjs$getId(): string;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(arg0: $MenuType$MenuSupplier_<T>, arg1: $FeatureFlagSet);
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        clearContent(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        getFutureXp(): number;
        updateSellItem(): void;
        setSelectionHint(arg0: number): void;
        getActiveOffer(): $MerchantOffer;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
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
        constructor(arg0: $Merchant);
        get containerSize(): number;
        get futureXp(): number;
        set selectionHint(value: number);
        get activeOffer(): $MerchantOffer;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        getLevels(): number;
        hasPayment(): boolean;
        getPrimaryEffect(): $Holder<$MobEffect>;
        getSecondaryEffect(): $Holder<$MobEffect>;
        static encodeEffect(arg0: $Holder_<$MobEffect>): number;
        static decodeEffect(arg0: number): $Holder<$MobEffect>;
        updateEffects(arg0: ($Holder_<$MobEffect>) | undefined, arg1: ($Holder_<$MobEffect>) | undefined): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Container);
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData, arg3: $ContainerLevelAccess_);
        get levels(): number;
        get primaryEffect(): $Holder<$MobEffect>;
        get secondaryEffect(): $Holder<$MobEffect>;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> {
        static slotChangedCraftingGrid(arg0: $AbstractContainerMenu, arg1: $Level_, arg2: $Player, arg3: $CraftingContainer, arg4: $ResultContainer, arg5: $RecipeHolder_<$CraftingRecipe>): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number, arg4: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        getContainer(): $Container;
        getRowCount(): number;
        static threeRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static threeRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        static oneRow(arg0: number, arg1: $Inventory): $ChestMenu;
        static fiveRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static fourRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static twoRows(arg0: number, arg1: $Inventory): $ChestMenu;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $Container, arg4: number);
        get container(): $Container;
        get rowCount(): number;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getFuel(): number;
        getBrewingTicks(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
        get fuel(): number;
        get brewingTicks(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(arg0: number, arg1: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getBook(): $ItemStack;
        getPage(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static BUTTON_PREV_PAGE: number;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData);
        get book(): $ItemStack;
        get page(): number;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getWidth(): number;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        getHeight(): number;
        getItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get items(): $List<$ItemStack>;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        registerUpdateListener(arg0: $Runnable_): void;
        getSelectedBannerPatternIndex(): number;
        getResultSlot(): $Slot;
        getBannerSlot(): $Slot;
        getPatternSlot(): $Slot;
        getDyeSlot(): $Slot;
        quickcraftSlots: $Set<$Slot>;
        slotUpdateListener: $Runnable;
        lastSoundTime: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        bannerSlot: $Slot;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        lastSlots: $NonNullList<$ItemStack>;
        dyeSlot: $Slot;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        selectedBannerPatternIndex: $DataSlot;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
        get resultSlot(): $Slot;
        get patternSlot(): $Slot;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(arg0: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        setActiveChest(arg0: $EnderChestBlockEntity): void;
        isActiveChest(arg0: $EnderChestBlockEntity): boolean;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getSlot(arg0: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        hasSlot(arg0: number): boolean;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        getResultSlotIndex(): number;
        getNumOfInputSlots(): number;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getInputSlotIndexes(): $List<number>;
        constructor(arg0: $List_<$ItemCombinerMenuSlotDefinition$SlotDefinition_>, arg1: $ItemCombinerMenuSlotDefinition$SlotDefinition_);
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        get resultSlotIndex(): number;
        get numOfInputSlots(): number;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get inputSlotIndexes(): $List<number>;
    }
    export class $SlotRange {
        static of(arg0: string, arg1: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu implements $EnchantmentMenuExtension {
        getEnchantmentSeed(): number;
        getGoldCount(): number;
        morejs$getRandom(): $RandomSource;
        morejs$getState(): $Optional<any>;
        morejs$getCosts(): number[];
        morejs$getEnchantmentClues(): number[];
        morejs$getContainer(): $Container;
        morejs$getLevelClues(): number[];
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        costs: number[];
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
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
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get enchantmentSeed(): number;
        get goldCount(): number;
    }
    export class $ContainerLevelAccess {
        static create(arg0: $Level_, arg1: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess extends $ContainerLevelAccessMixin {
        execute(arg0: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>, arg1: T): T;
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        static ADDITIONAL_SLOT: number;
        lastSoundTime: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        createInputSlots(arg0: $ItemCombinerMenuSlotDefinition): void;
        isValidBlock(arg0: $BlockState_): boolean;
        createContainer(arg0: number): $SimpleContainer;
        createResult(): void;
        getResultSlot(): number;
        createResultSlot(arg0: $ItemCombinerMenuSlotDefinition): void;
        mayPickup(arg0: $Player, arg1: boolean): boolean;
        onTake(arg0: $Player, arg1: $ItemStack_): void;
        createInputSlotDefinitions(): $ItemCombinerMenuSlotDefinition;
        canMoveIntoInputSlots(arg0: $ItemStack_): boolean;
        getSlotToQuickMoveTo(arg0: $ItemStack_): number;
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        resultSlotIndex: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
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
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        clearContent(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
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
        constructor();
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> {
        isFuel(arg0: $ItemStack_): boolean;
        isLit(): boolean;
        canSmelt(arg0: $ItemStack_): boolean;
        getLitProgress(): number;
        getBurnProgress(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(arg0: $MenuType_<never>, arg1: $RecipeType_<$AbstractCookingRecipe>, arg2: $RecipeBookType_, arg3: number, arg4: $Inventory);
        constructor(arg0: $MenuType_<never>, arg1: $RecipeType_<$AbstractCookingRecipe>, arg2: $RecipeBookType_, arg3: number, arg4: $Inventory, arg5: $Container, arg6: $ContainerData);
        get lit(): boolean;
        get litProgress(): number;
        get burnProgress(): number;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        static CONTAINER_SIZE: number;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        constructor(arg0: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu {
        registerUpdateListener(arg0: $Runnable_): void;
        getSelectedRecipeIndex(): number;
        getNumRecipes(): number;
        hasInputItem(): boolean;
        setupResultSlot(): void;
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        lastSoundTime: number;
        slotUpdateListener: $Runnable;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        resultSlot: $Slot;
        ldlib2$itemSlotMap: $Map<any, any>;
        inputSlot: $Slot;
        resultContainer: $ResultContainer;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static INPUT_SLOT: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
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
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get selectedRecipeIndex(): number;
        get numRecipes(): number;
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
    }
    export class $AbstractContainerMenu implements $IModularUIHolderMenu, $ContainerAccess {
        getType(): $MenuType<never>;
        getSlot(arg0: number): $Slot;
        removed(arg0: $Player): void;
        setData(arg0: number, arg1: number): void;
        broadcastChanges(): void;
        findSlot(arg0: $Container, arg1: number): $OptionalInt;
        setItem(arg0: number, arg1: number, arg2: $ItemStack_): void;
        static checkContainerSize(arg0: $Container, arg1: number): void;
        isValidSlotIndex(arg0: number): boolean;
        addDataSlot(arg0: $DataSlot): $DataSlot;
        addDataSlots(arg0: $ContainerData): void;
        quickMoveStack(arg0: $Player, arg1: number): $ItemStack;
        initializeContents(arg0: number, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): void;
        setRemoteCarried(arg0: $ItemStack_): void;
        clearContainer(arg0: $Player, arg1: $Container): void;
        ldlib2$addSlot(arg0: $ItemSlot): void;
        broadcastFullState(): void;
        slotsChanged(arg0: $Container): void;
        incrementStateId(): number;
        ldlib2$getItemSlot(arg0: $Slot): $ItemSlot;
        removeSlotListener(arg0: $ContainerListener): void;
        clickMenuButton(arg0: $Player, arg1: number): boolean;
        moveItemStackTo(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        resetQuickCraft(): void;
        static getQuickcraftType(arg0: number): number;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        stillValid(arg0: $Player): boolean;
        static stillValid(arg0: $ContainerLevelAccess_, arg1: $Player, arg2: $Block_): boolean;
        getCarried(): $ItemStack;
        setCarried(arg0: $ItemStack_): void;
        static getRedstoneSignalFromBlockEntity(arg0: $BlockEntity): number;
        static getRedstoneSignalFromContainer(arg0: $Container): number;
        addSlotListener(arg0: $ContainerListener): void;
        setSynchronizer(arg0: $ContainerSynchronizer): void;
        transferState(arg0: $AbstractContainerMenu): void;
        setRemoteSlot(arg0: number, arg1: $ItemStack_): void;
        wrapOperation$dpm000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        addSlot(arg0: $Slot): $Slot;
        clicked(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player): void;
        doClick(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player): void;
        canDragTo(arg0: $Slot): boolean;
        getStateId(): number;
        sendAllDataToRemote(): void;
        setRemoteSlotNoCopy(arg0: number, arg1: $ItemStack_): void;
        static getQuickcraftHeader(arg0: number): number;
        static checkContainerDataCount(arg0: $ContainerData, arg1: number): void;
        suppressRemoteUpdates(): void;
        synchronizeCarriedToRemote(): void;
        static isValidQuickcraftType(arg0: number, arg1: $Player): boolean;
        static getQuickCraftPlaceCount(arg0: $Set_<$Slot>, arg1: number, arg2: $ItemStack_): number;
        canTakeItemForPickAll(arg0: $ItemStack_, arg1: $Slot): boolean;
        createCarriedSlotAccess(): $SlotAccess;
        static canItemQuickReplace(arg0: $Slot, arg1: $ItemStack_, arg2: boolean): boolean;
        ldlib2$setModularUI(arg0: $ModularUI): void;
        resumeRemoteUpdates(): void;
        ldlib2$getModularUI(): $ModularUI;
        getItems(): $NonNullList<$ItemStack>;
        wrapOperation$dpm000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$dpm000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        setModularUI(arg0: $ModularUI): void;
        getItemSlot(arg0: $Slot): $ItemSlot;
        getModularUI(): $ModularUI;
        addSlot(arg0: $ItemSlot): void;
        hasModularUI(): boolean;
        getSyncManager(): $UISyncManager;
        self(): $AbstractContainerMenu;
        isItemSlot(arg0: $Slot): boolean;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        getRemoteSlots(): $NonNullList<$ItemStack>;
        getLastSlots(): $NonNullList<$ItemStack>;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number);
        get type(): $MenuType<never>;
        get stateId(): number;
        get items(): $NonNullList<$ItemStack>;
        get syncManager(): $UISyncManager;
    }
    export class $Slot implements $SlotAccessor, $SlotAccessor$1, $SlotAccessor$2 {
        remove(arg0: number): $ItemStack;
        set(arg0: $ItemStack_): void;
        isActive(): boolean;
        getItem(): $ItemStack;
        hasItem(): boolean;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        onQuickCraft(arg0: $ItemStack_, arg1: $ItemStack_): void;
        onQuickCraft(arg0: $ItemStack_, arg1: number): void;
        setByPlayer(arg0: $ItemStack_, arg1: $ItemStack_): void;
        setByPlayer(arg0: $ItemStack_): void;
        onSwapCraft(arg0: number): void;
        getContainerSlot(): number;
        setChanged(): void;
        mayPlace(arg0: $ItemStack_): boolean;
        tryRemove(arg0: number, arg1: number, arg2: $Player): ($ItemStack) | undefined;
        safeTake(arg0: number, arg1: number, arg2: $Player): $ItemStack;
        mayPickup(arg0: $Player): boolean;
        safeInsert(arg0: $ItemStack_, arg1: number): $ItemStack;
        safeInsert(arg0: $ItemStack_): $ItemStack;
        onTake(arg0: $Player, arg1: $ItemStack_): void;
        allowModification(arg0: $Player): boolean;
        isFake(): boolean;
        checkTakeAchievements(arg0: $ItemStack_): void;
        isHighlightable(): boolean;
        isSameInventory(arg0: $Slot): boolean;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        getSlotIndex(): number;
        getY(): number;
        getX(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
        get active(): boolean;
        get item(): $ItemStack;
        get containerSlot(): number;
        get fake(): boolean;
        get highlightable(): boolean;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get slotIndex(): number;
    }
    export class $DataSlot {
        get(): number;
        set(arg0: number): void;
        static shared(arg0: number[], arg1: number): $DataSlot;
        static standalone(): $DataSlot;
        static forContainer(arg0: $ContainerData, arg1: number): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        x(): number;
        y(): number;
        slotIndex(): number;
        mayPlace(): $Predicate<$ItemStack>;
        static EMPTY: $ItemCombinerMenuSlotDefinition$SlotDefinition;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer, $CraftingContainerAccess, $AccessorTransientCraftingContainer {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        getWidth(): number;
        removeItem(arg0: number, arg1: number): $ItemStack;
        clearContent(): void;
        getHeight(): number;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        fillStackedContents(arg0: $StackedContents): void;
        getItems(): $List<$ItemStack>;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
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
        framedblocks$getItems(): $NonNullList<$ItemStack>;
        setItems(arg0: $NonNullList<$ItemStack_>): void;
        menu: $AbstractContainerMenu;
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number);
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number, arg3: $NonNullList<$ItemStack_>);
        get containerSize(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendInitialData(arg0: $AbstractContainerMenu, arg1: $NonNullList<$ItemStack_>, arg2: $ItemStack_, arg3: number[]): void;
        sendCarriedChange(arg0: $AbstractContainerMenu, arg1: $ItemStack_): void;
        sendSlotChange(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        sendDataChange(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu {
        tryMoveItems(arg0: number): void;
        setXp(arg0: number): void;
        canRestock(): boolean;
        getOffers(): $MerchantOffers;
        setOffers(arg0: $MerchantOffers): void;
        handler$ebc000$morejs$invokeOpenTradeEvent(arg0: number, arg1: $Inventory, arg2: $Merchant, arg3: $CallbackInfo): void;
        showProgressBar(): boolean;
        getTraderLevel(): number;
        getFutureTraderXp(): number;
        getTraderXp(): number;
        setSelectionHint(arg0: number): void;
        setCanRestock(arg0: boolean): void;
        setShowProgressBar(arg0: boolean): void;
        setMerchantLevel(arg0: number): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static PAYMENT1_SLOT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static PAYMENT2_SLOT: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
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
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Merchant);
        set xp(value: number);
        get traderLevel(): number;
        get futureTraderXp(): number;
        get traderXp(): number;
        set selectionHint(value: number);
        set merchantLevel(value: number);
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        quickcraftSlots: $Set<$Slot>;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static INPUT_SLOT: number;
        repairSlots: $Container;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static RESULT_SLOT: number;
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
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        getSize(): number;
        fillCraftSlotsStackedContents(arg0: $StackedContents): void;
        recipeMatches(arg0: $RecipeHolder_<R>): boolean;
        getResultSlotIndex(): number;
        getGridWidth(): number;
        getGridHeight(): number;
        beginPlacingRecipe(): void;
        getRecipeBookType(): $RecipeBookType;
        handlePlacement(arg0: boolean, arg1: $RecipeHolder_<never>, arg2: $ServerPlayer): void;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        shouldMoveToInventory(arg0: number): boolean;
        finishPlacingRecipe(arg0: $RecipeHolder_<R>): void;
        clearCraftingContent(): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number);
        get size(): number;
        get resultSlotIndex(): number;
        get gridWidth(): number;
        get gridHeight(): number;
        get recipeBookType(): $RecipeBookType;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener {
        getContainer(): $Container;
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        isSlotDisabled(arg0: number): boolean;
        setSlotState(arg0: number, arg1: boolean): void;
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        isPowered(): boolean;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $CraftingContainer, arg3: $ContainerData);
        get container(): $Container;
        get powered(): boolean;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        setItemName(arg0: string): boolean;
        setMaximumCost(arg0: number): void;
        handler$fgp000$inventoryprofilesnext$onTakeOutputPre(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        handler$fgp000$inventoryprofilesnext$onTakeOutputPost(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        getCost(): number;
        static calculateIncreasedRepairCost(arg0: number): number;
        quickcraftSlots: $Set<$Slot>;
        repairItemCountCost: number;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        itemName: string;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        static INPUT_SLOT: number;
        resultSlotIndex: number;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        inputSlots: $Container;
        static RESULT_SLOT: number;
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
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        set maximumCost(value: number);
        get cost(): number;
    }
    export interface $MenuType extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        build(): $ItemCombinerMenuSlotDefinition;
        withResultSlot(arg0: number, arg1: number, arg2: number): $ItemCombinerMenuSlotDefinition$Builder;
        withSlot(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        constructor();
    }
}
