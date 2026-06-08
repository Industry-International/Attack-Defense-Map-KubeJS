import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $ILimitedGlobalStation } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ITrackBlock, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $UUID, $UUID_, $Map } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $WeakReference } from "@package/java/lang/ref";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $TrackNode, $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DoorControlBehaviour } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $MapDecoration } from "@package/net/minecraft/world/level/saveddata/maps";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $CPLGlobalStation, $StationChunkLoader } from "@package/com/hlysine/create_power_loader/content/trains";
import { $WorldAttached, $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/station" {
    export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        assemble(arg0: $UUID_): void;
        tryEnterAssemblyMode(): boolean;
        refreshAssemblyInfo(): void;
        isAssembling(): boolean;
        dropSchedule(arg0: $ServerPlayer, arg1: $Train): void;
        getStation(): $GlobalStation;
        tryDisassembleTrain(arg0: $ServerPlayer): boolean;
        attachPackagePort(arg0: $PackagePortBlockEntity): void;
        removePackagePort(arg0: $PackagePortBlockEntity): void;
        enterAssemblyMode(arg0: $ServerPlayer): boolean;
        exitAssemblyMode(): boolean;
        updateMapColor(arg0: number): void;
        isValidBogeyOffset(arg0: number): boolean;
        trackClicked(arg0: $Player, arg1: $InteractionHand_, arg2: $ITrackBlock, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        getAssemblyDirection(): $Direction;
        getAutoSchedule(): $ItemStack;
        updateName(arg0: string): boolean;
        resolveFlagAngle(): boolean;
        cancelAssembly(): void;
        worldPosition: $BlockPos;
        lastDisassembledTrainName: $Component;
        flag: $LerpedFloat;
        static assemblyAreas: $WorldAttached<$Map<$BlockPos, $BoundingBox>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        doorControls: $DoorControlBehaviour;
        lastDisassembledMapColorIndex: number;
        computerBehaviour: $AbstractComputerBehaviour;
        edgePoint: $TrackTargetingBehaviour<$GlobalStation>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get assembling(): boolean;
        get station(): $GlobalStation;
        get assemblyDirection(): $Direction;
        get autoSchedule(): $ItemStack;
    }
    export class $GlobalStation extends $SingleBlockEntityEdgePoint implements $CPLGlobalStation, $ILimitedGlobalStation {
        getLoader(): $StationChunkLoader;
        setLoader(arg0: $StationChunkLoader): void;
        reserveFor(arg0: $Train): void;
        getPresentTrain(): $Train;
        canApproachFrom(arg0: $TrackNode): boolean;
        getNearestTrain(): $Train;
        isLimitEnabled(): boolean;
        runMailTransfer(): void;
        getImminentTrain(): $Train;
        trainDeparted(arg0: $Train): void;
        isStationEnabled(): boolean;
        orDisablingTrain(arg0: $Train, arg1: $Train): $Train;
        cancelReservation(arg0: $Train): void;
        setLimitEnabled(arg0: boolean): void;
        getDisablingTrain(): $Train;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        cpl$chunkLoader: $StationChunkLoader;
        connectedPorts: $Map<$BlockPos, $GlobalPackagePort>;
        blockEntityDimension: $ResourceKey<$Level>;
        name: string;
        assembling: boolean;
        id: $UUID;
        position: number;
        nearestTrain: $WeakReference<$Train>;
        constructor();
        get presentTrain(): $Train;
        get imminentTrain(): $Train;
        get stationEnabled(): boolean;
        get disablingTrain(): $Train;
    }
    export class $GlobalPackagePort {
        restoreOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        saveOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        address: string;
        primed: boolean;
        offlineBuffer: $ItemStackHandler;
        constructor();
    }
    export class $StationMarker {
        getName(): $Component;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StationMarker;
        getId(): string;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        getTarget(): $BlockPos;
        getSource(): $BlockPos;
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $StationMarker;
        static createStationDecoration(arg0: number, arg1: number, arg2: ($Component_) | undefined): $MapDecoration;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Component_);
        get name(): $Component;
        get id(): string;
        get target(): $BlockPos;
        get source(): $BlockPos;
    }
    export class $StationMapData {
    }
    export interface $StationMapData {
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        addStationMarker(arg0: $StationMarker): void;
    }
}
