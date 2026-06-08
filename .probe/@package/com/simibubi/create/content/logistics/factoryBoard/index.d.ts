import { $Codec } from "@package/com/mojang/serialization";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $EnumMap, $UUID_, $Map, $Set } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $WeakReference } from "@package/java/lang/ref";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_ } from "@package/java/util/function";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $PackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $RequestPromiseQueue } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/factoryBoard" {
    export class $FactoryPanelBlockEntity extends $SmartBlockEntity {
        getShape(): $VoxelShape;
        addPanel(arg0: $FactoryPanelBlock$PanelSlot_, arg1: $UUID_): boolean;
        getRestockedPackager(): $PackagerBlockEntity;
        activePanels(): number;
        removePanel(arg0: $FactoryPanelBlock$PanelSlot_): boolean;
        redraw: boolean;
        worldPosition: $BlockPos;
        advancements: $AdvancementBehaviour;
        level: $Level;
        panels: $EnumMap<$FactoryPanelBlock$PanelSlot, $FactoryPanelBehaviour>;
        restocker: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        lastShape: $VoxelShape;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get shape(): $VoxelShape;
        get restockedPackager(): $PackagerBlockEntity;
    }
    export class $FactoryPanelBehaviour extends $FilteringBehaviour implements $MenuProvider {
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelBehaviour;
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelBehaviour;
        enable(): void;
        getDisplayName(): $Component;
        moveTo(arg0: $FactoryPanelPosition_, arg1: $ServerPlayer): void;
        disable(): void;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelSupportBehaviour;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelSupportBehaviour;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getIngredientStatusColor(): number;
        setNetwork(arg0: $UUID_): void;
        isMissingAddress(): boolean;
        disconnectAll(): void;
        getPanelPosition(): $FactoryPanelPosition;
        displayScreen(arg0: $Player): void;
        disconnectAllLinks(): void;
        getLevelInStorage(): number;
        getPromised(): number;
        addConnection(arg0: $FactoryPanelPosition_): void;
        resetTimer(): void;
        panelBE(): $FactoryPanelBlockEntity;
        static getTypeForSlot(arg0: $FactoryPanelBlock$PanelSlot_): $BehaviourType<never>;
        resetTimerSlightly(): void;
        getFrogAddress(): string;
        getUnloadedLinks(): number;
        checkForRedstoneInput(): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        static TOP_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        upTo: boolean;
        static BOTTOM_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        restockerPromises: $RequestPromiseQueue;
        slot: $FactoryPanelBlock$PanelSlot;
        activeCraftingArrangement: $List<$ItemStack>;
        network: $UUID;
        recipeAddress: string;
        targeting: $Set<$FactoryPanelPosition>;
        redstonePowered: boolean;
        blockEntity: $SmartBlockEntity;
        static TOP_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        promisedSatisfied: boolean;
        static BOTTOM_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        forceClearPromises: boolean;
        waitingForNetwork: boolean;
        satisfied: boolean;
        targetedByLinks: $Map<$BlockPos, $FactoryPanelConnection>;
        bulb: $LerpedFloat;
        count: number;
        active: boolean;
        targetedBy: $Map<$FactoryPanelPosition, $FactoryPanelConnection>;
        recipeOutput: number;
        customLabel: $MutableComponent;
        promiseClearingInterval: number;
        constructor(arg0: $FactoryPanelBlockEntity, arg1: $FactoryPanelBlock$PanelSlot_);
        get displayName(): $Component;
        get ingredientStatusColor(): number;
        get missingAddress(): boolean;
        get panelPosition(): $FactoryPanelPosition;
        get levelInStorage(): number;
        get promised(): number;
        get frogAddress(): string;
        get unloadedLinks(): number;
    }
    export class $FactoryPanelBlock$PanelSlot extends $Enum<$FactoryPanelBlock$PanelSlot> implements $StringRepresentable {
        static values(): $FactoryPanelBlock$PanelSlot[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelSlot;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOP_LEFT: $FactoryPanelBlock$PanelSlot;
        yOffset: number;
        static CODEC: $Codec<$FactoryPanelBlock$PanelSlot>;
        xOffset: number;
        static BOTTOM_RIGHT: $FactoryPanelBlock$PanelSlot;
        static TOP_RIGHT: $FactoryPanelBlock$PanelSlot;
        static BOTTOM_LEFT: $FactoryPanelBlock$PanelSlot;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelBlock$PanelSlot>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelSlot}.
     */
    export type $FactoryPanelBlock$PanelSlot_ = "top_left" | "top_right" | "bottom_left" | "bottom_right";
    export class $FactoryPanelConnection {
        getPath(arg0: $Level_, arg1: $BlockState_, arg2: $FactoryPanelPosition_): $List<$Direction>;
        calculatePathDiff(arg0: $BlockState_, arg1: $FactoryPanelPosition_): $Vec3;
        path: $List<$Direction>;
        amount: number;
        static CODEC: $Codec<$FactoryPanelConnection>;
        cachedSource: $WeakReference<$Object>;
        success: boolean;
        from: $FactoryPanelPosition;
        arrowBendMode: number;
        constructor(arg0: $FactoryPanelPosition_, arg1: number);
        constructor(arg0: $FactoryPanelPosition_, arg1: number, arg2: number);
    }
    export class $FactoryPanelPosition extends $Record {
        slot(): $FactoryPanelBlock$PanelSlot;
        pos(): $BlockPos;
        static CODEC: $Codec<$FactoryPanelPosition>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelPosition>;
        constructor(pos: $BlockPos_, slot: $FactoryPanelBlock$PanelSlot_);
    }
    export class $FactoryPanelSupportBehaviour extends $BlockEntityBehaviour {
        connect(arg0: $FactoryPanelBehaviour): void;
        disconnect(arg0: $FactoryPanelBehaviour): void;
        notifyPanels(): void;
        getLinkedPanels(): $List<$FactoryPanelPosition>;
        shouldBePoweredTristate(): boolean;
        isOutput(): boolean;
        notifyLink(): void;
        shouldPanelBePowered(): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$FactoryPanelSupportBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $Supplier_<boolean>, arg2: $Supplier_<boolean>, arg3: $Runnable_);
        get linkedPanels(): $List<$FactoryPanelPosition>;
        get output(): boolean;
    }
}
