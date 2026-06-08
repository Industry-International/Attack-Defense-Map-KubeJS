import { $Level } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $UUID_, $WeakHashMap } from "@package/java/util";
import { $AccessorToolboxBlockEntity, $AccessorToolboxInventory } from "@package/com/railwayteam/railways/mixin";
import { $Consumer_ } from "@package/java/util/function";
import { $MenuProvider, $Nameable } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/toolbox" {
    export class $ToolboxBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Nameable, $AccessorToolboxBlockEntity {
        getName(): $Component;
        getDisplayName(): $Component;
        getColor(): $DyeColor;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        getUniqueId(): $UUID;
        hasCustomName(): boolean;
        setUniqueId(arg0: $UUID_): void;
        unequip(arg0: number, arg1: $Player, arg2: number, arg3: boolean): void;
        isFullyInitialized(): boolean;
        connectPlayer(arg0: number, arg1: $Player, arg2: number): void;
        readInventory(arg0: $ToolboxInventory): void;
        unequipTracked(): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        getConnectedPlayers(): $Map<number, $WeakHashMap<$Player, number>>;
        getInventory(): $ToolboxInventory;
        worldPosition: $BlockPos;
        drawers: $LerpedFloat;
        level: $Level;
        lid: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get color(): $DyeColor;
        get fullyInitialized(): boolean;
        get connectedPlayers(): $Map<number, $WeakHashMap<$Player, number>>;
        get inventory(): $ToolboxInventory;
    }
    export class $ToolboxInventory extends $ItemStackHandler implements $AccessorToolboxInventory {
        static cleanItemNBT(arg0: $ItemStack_): $ItemStack;
        inLimitedMode(arg0: $Consumer_<$ToolboxInventory>): void;
        static canItemsShareCompartment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        takeFromCompartment(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        distributeToCompartment(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        settle(arg0: number): void;
        getFilters(): $List<$ItemStack>;
        /**
         * @deprecated
         */
        static BACKWARDS_COMPAT_CODEC: $Codec<$ToolboxInventory>;
        static CODEC: $Codec<$ToolboxInventory>;
        static STACKS_PER_COMPARTMENT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ToolboxInventory>;
        constructor(arg0: $ToolboxBlockEntity);
        set tle(value: number);
        get filters(): $List<$ItemStack>;
    }
}
