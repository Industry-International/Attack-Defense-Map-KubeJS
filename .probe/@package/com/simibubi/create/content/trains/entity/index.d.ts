import { $IWaypointableNavigation, $IHandcarTrain, $ICarriageConductors, $ICrashAdvancement, $IUpdateCount, $IStrictSignalTrain, $IOccupiedCouplers, $IBufferBlockCheckableNavigation, $IIndexedSchedule, $IDistanceTravelled, $IBufferBlockedTrain, $ICarriageBufferDistanceTracker, $IGenerallySearchableNavigation, $IGenerallySearchableNavigation$PointTest_ } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $UUID_, $ArrayList, $Map, $Map$Entry, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $AccessorCarriageBogey, $AccessorCarriage, $AccessorTrain, $AccessorCarriageContraptionEntity, $AccessorNavigation } from "@package/com/railwayteam/railways/mixin";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $BiFunction, $Predicate, $BiConsumer, $BiConsumer_, $BiPredicate } from "@package/java/util/function";
import { $Object2DoubleMap, $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $AbstractContraptionEntity, $Contraption, $OrientedContraptionEntity, $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";
import { $DimensionPalette, $TrackNode, $TrackNodeLocation, $TrackEdge, $TrackGraph, $DiscoveredPath, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $OBB$Part } from "@package/com/atsuishio/superbwarfare/tools";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $TrainChunkLoader, $CPLTrain } from "@package/com/hlysine/create_power_loader/content/trains";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $TrainCargoManager } from "@package/com/simibubi/create/content/contraptions/minecart";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $BogeySizes$BogeySize, $BogeyStyle, $AbstractBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/entity" {
    export class $CarriageContraptionEntity extends $OrientedContraptionEntity implements $AccessorCarriageContraptionEntity, $IUpdateCount, $IDistanceTravelled {
        static create(arg0: $Level_, arg1: $CarriageContraption): $CarriageContraptionEntity;
        railways$getDistanceTravelled(): number;
        railways$markUpdate(): void;
        railways$getUpdateCount(): number;
        railways$fromParent(arg0: $IUpdateCount): void;
        updateRenderedPortalCutoff(): void;
        setServerSidePrevPosition(): void;
        getCarriage(): $Carriage;
        hasSchedule(): boolean;
        getCarriageData(): $CarriageSyncData;
        checkConductors(): $Couple<boolean>;
        syncCarriage(): void;
        isLocalCoordWithin(arg0: $BlockPos_, arg1: number, arg2: number): boolean;
        setCarriage(arg0: $Carriage): void;
        railways$getCarriage(): $Carriage;
        railways$setCarriage(arg0: $Carriage): void;
        railways$bindCarriage(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        carriageIndex: number;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        pitch: number;
        particles: $CarriageParticles;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        trainId: $UUID;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        prevYaw: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        movingBackwards: boolean;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        leftTickingChunks: boolean;
        entityData: $SynchedEntityData;
        staleTicks: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        prevPitch: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        sounds: $CarriageSounds;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yaw: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        firstPositionUpdate: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        validForRender: boolean;
        nonDamageTicks: number;
        targetYaw: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get carriageData(): $CarriageSyncData;
    }
    export class $Navigation$StationTest {
    }
    export interface $Navigation$StationTest {
        test(arg0: number, arg1: number, arg2: $Map_<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Navigation$StationTest}.
     */
    export type $Navigation$StationTest_ = ((arg0: number, arg1: number, arg2: $Map<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation) => boolean);
    export class $Carriage$DimensionalCarriageEntity {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        discardPivot(): void;
        updateCutoff(arg0: boolean): void;
        updateRenderedCutoff(): void;
        trailingAnchor(): $Vec3;
        leadingAnchor(): $Vec3;
        alignEntity(arg0: $CarriageContraptionEntity): void;
        maxAllowedLocalCoord(): number;
        minAllowedLocalCoord(): number;
        updatePassengerLoadout(): void;
        findPivot(arg0: $ResourceKey_<$Level>, arg1: boolean): $TrackNodeLocation;
        pointsInitialised: boolean;
        pivot: $TrackNodeLocation;
        rotationAnchors: $Couple<$Vec3>;
        cutoff: number;
        positionAnchor: $Vec3;
        entity: $WeakReference<$CarriageContraptionEntity>;
        constructor(arg0: $Carriage);
    }
    export class $TrainIconType {
        static getDefault(): $TrainIconType;
        static register(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number): void;
        getId(): $ResourceLocation;
        render(arg0: number, arg1: $GuiGraphics, arg2: number, arg3: number): number;
        getIconOffset(arg0: number): number;
        static byId(arg0: $ResourceLocation_): $TrainIconType;
        getIconWidth(arg0: number): number;
        static FLIPPED_ENGINE: number;
        static ENGINE: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainIconType>;
        static REGISTRY: $Map<$ResourceLocation, $TrainIconType>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number);
        static get default(): $TrainIconType;
        get id(): $ResourceLocation;
    }
    export class $TrainStatus {
        tick(arg0: $Level_): void;
        addMessage(arg0: $TrainStatus$StatusMessage_): void;
        crash(): void;
        failedMigration(): void;
        doublePortal(): void;
        failedPackageNoTarget(arg0: string): void;
        failedNavigationNoTarget(arg0: string): void;
        manualControls(): void;
        foundConductor(): void;
        successfulMigration(): void;
        endOfTrack(): void;
        highStress(): void;
        trackOK(): void;
        missingConductor(): void;
        failedNavigation(): void;
        newSchedule(): void;
        displayInformation(arg0: string, arg1: boolean, ...arg2: $Object[]): void;
        missingCorrectConductor(): void;
        successfulNavigation(): void;
        navigation: boolean;
        track: boolean;
        conductor: boolean;
        constructor(arg0: $Train);
    }
    export class $Carriage implements $AccessorCarriage, $ICarriageConductors, $ICarriageBufferDistanceTracker {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $TrackGraph, arg3: $DimensionPalette): $Carriage;
        manageEntities(arg0: $Level_): void;
        railways$setLeadingDistance(arg0: number): void;
        railways$setTrailingDistance(arg0: number): void;
        railways$getTrailingDistance(): number;
        travel(arg0: $Level_, arg1: $TrackGraph, arg2: number, arg3: $TravellingPoint, arg4: $TravellingPoint, arg5: number): number;
        railways$getControllingConductors(): $List<any>;
        getLeadingPoint(): $TravellingPoint;
        trailingBogey(): $CarriageBogey;
        getTrailingPoint(): $TravellingPoint;
        leadingBogey(): $CarriageBogey;
        updateContraptionAnchors(): void;
        forEachPresentEntity(arg0: $Consumer_<$CarriageContraptionEntity>): void;
        railways$getLeadingDistance(): number;
        getAnchorDiff(): number;
        setContraption(arg0: $Level_, arg1: $CarriageContraption): void;
        setTrain(arg0: $Train): void;
        anyAvailableEntity(): $CarriageContraptionEntity;
        getDimensional(arg0: $Level_): $Carriage$DimensionalCarriageEntity;
        getDimensional(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        alignEntity(arg0: $Level_): void;
        isOnTwoBogeys(): boolean;
        isOnIncompatibleTrack(): boolean;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        getDimensionalIfPresent(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        updateConductors(): void;
        anyAvailableDimensionalCarriage(): $Pair<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>;
        presentInMultipleDimensions(): boolean;
        getSerialisedPassengers(): $Map<number, $CompoundTag>;
        presentConductors: $Couple<boolean>;
        bogeys: $Couple<$CarriageBogey>;
        blocked: boolean;
        stalled: boolean;
        static netIdGenerator: $AtomicInteger;
        id: number;
        bogeySpacing: number;
        storage: $TrainCargoManager;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Carriage>;
        train: $Train;
        constructor(arg0: $CarriageBogey, arg1: $CarriageBogey, arg2: number);
        get leadingPoint(): $TravellingPoint;
        get trailingPoint(): $TravellingPoint;
        get anchorDiff(): number;
        get onTwoBogeys(): boolean;
        get onIncompatibleTrack(): boolean;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get serialisedPassengers(): $Map<number, $CompoundTag>;
    }
    export class $CarriageParticles {
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $ArrivalSoundQueue {
        add(arg0: number, arg1: $BlockPos_): void;
        tick(arg0: $CarriageContraptionEntity, arg1: number, arg2: boolean): boolean;
        static play(arg0: $CarriageContraptionEntity, arg1: $StructureTemplate$StructureBlockInfo_): void;
        deserialize(arg0: $CompoundTag_): void;
        serialize(arg0: $CompoundTag_): void;
        getFirstWhistle(arg0: $CarriageContraptionEntity): $Pair<boolean, number>;
        firstTick(): number;
        lastTick(): number;
        static isPlayable(arg0: $BlockState_): boolean;
        offset: number;
        constructor();
    }
    export class $Navigation implements $AccessorNavigation, $IGenerallySearchableNavigation, $IBufferBlockCheckableNavigation, $IWaypointableNavigation {
        write(arg0: $DimensionPalette): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): void;
        search(arg0: number, arg1: number, arg2: boolean, arg3: $ArrayList<$GlobalStation>, arg4: $Navigation$StationTest_): void;
        search(arg0: number, arg1: boolean, arg2: $ArrayList<$GlobalStation>, arg3: $Navigation$StationTest_): void;
        isActive(): boolean;
        tick(arg0: $Level_): void;
        control(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        railways$updateControlsBlock(arg0: boolean): void;
        findPathTo(arg0: $GlobalStation, arg1: number): $DiscoveredPath;
        findPathTo(arg0: $ArrayList<$GlobalStation>, arg1: number): $DiscoveredPath;
        findNearestApproachable(arg0: boolean): $GlobalStation;
        railways$findNearestApproachableSwitch(arg0: boolean): $Pair<any, any>;
        cancelNavigation(): void;
        startNavigation(arg0: $DiscoveredPath): number;
        controlSignalScout(): $TravellingPoint$ITrackSelector;
        railways$isWaypointMode(): boolean;
        railways$searchGeneral(arg0: number, arg1: boolean, arg2: $IGenerallySearchableNavigation$PointTest_): void;
        railways$searchGeneral(arg0: number, arg1: number, arg2: boolean, arg3: $IGenerallySearchableNavigation$PointTest_): void;
        getCurrentPath(): $List<$Couple<$TrackNode>>;
        distanceToDestination: number;
        destination: $GlobalStation;
        announceArrival: boolean;
        ticksWaitingForSignal: number;
        waitingForSignal: $Pair<$UUID, boolean>;
        distanceStartedAt: number;
        destinationBehindTrain: boolean;
        distanceToSignal: number;
        train: $Train;
        constructor(arg0: $Train);
        get active(): boolean;
        get currentPath(): $List<$Couple<$TrackNode>>;
    }
    export class $TravellingPoint$ITrackSelector {
    }
    export interface $TravellingPoint$ITrackSelector extends $BiFunction<$TrackGraph, $Pair<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, $Map$Entry<$TrackNode, $TrackEdge>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITrackSelector}.
     */
    export type $TravellingPoint$ITrackSelector_ = (() => void);
    export class $TravellingPoint$SteerDirection extends $Enum<$TravellingPoint$SteerDirection> {
        static values(): $TravellingPoint$SteerDirection[];
        static valueOf(arg0: string): $TravellingPoint$SteerDirection;
        static LEFT: $TravellingPoint$SteerDirection;
        static RIGHT: $TravellingPoint$SteerDirection;
        static NONE: $TravellingPoint$SteerDirection;
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$SteerDirection}.
     */
    export type $TravellingPoint$SteerDirection_ = "none" | "left" | "right";
    export class $TrainStatus$StatusMessage extends $Record {
        messages(): $Component[];
        displayToPlayer(arg0: $Player): void;
        constructor(...messages: $Component_[]);
    }
    export class $TravellingPoint$IEdgePointListener {
    }
    export interface $TravellingPoint$IEdgePointListener extends $BiPredicate<number, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IEdgePointListener}.
     */
    export type $TravellingPoint$IEdgePointListener_ = (() => void);
    export class $CarriageContraption extends $Contraption {
        atSeam(arg0: $BlockPos_): boolean;
        atSeam(arg0: number): boolean;
        swapStorageAfterAssembly(arg0: $CarriageContraptionEntity): void;
        hasBackwardControls(): boolean;
        setSoundQueueOffset(arg0: number): void;
        inControl(arg0: $BlockPos_, arg1: $Direction_): boolean;
        notInPortal(): boolean;
        getAssemblyDirection(): $Direction;
        isHiddenInPortal(arg0: number): boolean;
        withinVisible(arg0: number): boolean;
        withinVisible(arg0: $BlockPos_): boolean;
        getSecondBogeyPos(): $BlockPos;
        hasForwardControls(): boolean;
        returnStorageForDisassembly(arg0: $MountedStorageManager): void;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        conductorSeats: $Map<$BlockPos, $Couple<boolean>>;
        portalCutoffMax: number;
        simplifiedEntityColliders: $CollisionList;
        soundQueue: $ArrivalSoundQueue;
        blockConductors: $Couple<boolean>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        portalCutoffMin: number;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: $Direction_);
        set soundQueueOffset(value: number);
        get assemblyDirection(): $Direction;
        get secondBogeyPos(): $BlockPos;
    }
    export class $CarriageBogey implements $AccessorCarriageBogey {
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $CarriageBogey;
        getSize(): $BogeySizes$BogeySize;
        getDimension(): $ResourceKey<$Level>;
        trailing(): $TravellingPoint;
        leading(): $TravellingPoint;
        getAnchorPosition(): $Vec3;
        getAnchorPosition(arg0: boolean): $Vec3;
        getStyle(): $BogeyStyle;
        isUpsideDown(): boolean;
        updateAngles(arg0: $CarriageContraptionEntity, arg1: number): void;
        updateCouplingAnchor(arg0: $Vec3_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        getStress(): number;
        getType(): $AbstractBogeyBlock<never>;
        bogeyData: $CompoundTag;
        carriage: $Carriage;
        static UPSIDE_DOWN_KEY: string;
        couplingAnchors: $Couple<$Vec3>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CarriageBogey>;
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_);
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_, arg3: $TravellingPoint, arg4: $TravellingPoint);
        get size(): $BogeySizes$BogeySize;
        get dimension(): $ResourceKey<$Level>;
        get style(): $BogeyStyle;
        get upsideDown(): boolean;
        get stress(): number;
        get type(): $AbstractBogeyBlock<never>;
    }
    export class $TravellingPoint$IPortalListener {
    }
    export interface $TravellingPoint$IPortalListener extends $Predicate<$Couple<$TrackNodeLocation>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IPortalListener}.
     */
    export type $TravellingPoint$IPortalListener_ = (() => void);
    export class $CarriageSyncData {
        update(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        apply(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $CarriageSyncData;
        isDirty(): boolean;
        setDirty(arg0: boolean): void;
        approach(arg0: $CarriageContraptionEntity, arg1: $Carriage, arg2: number): void;
        getDistanceTo(arg0: $TrackGraph, arg1: $TravellingPoint, arg2: $TravellingPoint, arg3: number, arg4: boolean): number;
        distanceToDestination: number;
        leadingCarriage: boolean;
        wheelLocations: $List<$Pair<$Couple<number>, number>>;
        fallbackLocations: $Pair<$Vec3, $Couple<$Vec3>>;
        constructor();
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $Train implements $CPLTrain, $AccessorTrain, $IStrictSignalTrain, $IIndexedSchedule, $IBufferBlockedTrain, $ICrashAdvancement, $IHandcarTrain, $IOccupiedCouplers {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Map_<$UUID_, $TrackGraph>, arg3: $DimensionPalette): $Train;
        getOwner(arg0: $Level_): $LivingEntity;
        getLoader(): $TrainChunkLoader;
        tick(arg0: $Level_): void;
        maxSpeed(): number;
        crash(): void;
        getEndpointEdges(): $Couple<$Couple<$TrackNode>>;
        railways$getIndex(): number;
        leaveStation(): void;
        isTravellingOn(arg0: $TrackNode): boolean;
        detachFromTracks(): void;
        findCollidingTrain(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ResourceKey_<$Level>): $Pair<$Train, $Vec3>;
        earlyTick(arg0: $Level_): void;
        cancelStall(): void;
        setLoader(arg0: $TrainChunkLoader): void;
        railways$setHandcar(arg0: boolean): void;
        collectInitiallyOccupiedSignalBlocks(): void;
        disassemble(arg0: $Direction_, arg1: $BlockPos_): boolean;
        acceleration(): number;
        getTotalLength(): number;
        countPlayerPassengers(): number;
        burnFuel(): void;
        canDisassemble(): boolean;
        shouldCarriageSyncThisTick(arg0: number, arg1: number): boolean;
        approachTargetSpeed(arg0: number): void;
        railways$isControlBlocked(): boolean;
        railways$getBlockedSign(): number;
        determineHonk(arg0: $Level_): void;
        backSignalListener(): $TravellingPoint$IEdgePointListener;
        reattachToTracks(arg0: $Level_): void;
        setCurrentStation(arg0: $GlobalStation): void;
        railways$setIndex(arg0: number): void;
        hasForwardConductor(): boolean;
        hasBackwardConductor(): boolean;
        getCurrentStation(): $GlobalStation;
        maxTurnSpeed(): number;
        railways$isHandcar(): boolean;
        getNavigationPenalty(): number;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        frontSignalListener(): $TravellingPoint$IEdgePointListener;
        distanceToLocationSqr(arg0: $Level_, arg1: $Vec3_): number;
        railways$setControlBlocked(arg0: boolean, arg1: boolean): void;
        railways$setStrictSignals(arg0: boolean): void;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        forEachTravellingPoint(arg0: $Consumer_<$TravellingPoint>): void;
        arriveAt(arg0: $GlobalStation): void;
        railways$getOccupiedCouplers(): $Set<any>;
        handler$eln000$railways$maxTurnSpeed(arg0: $CallbackInfoReturnable<any>): void;
        handler$eln000$railways$acceleration(arg0: $CallbackInfoReturnable<any>): void;
        railways$awardCrashAdvancements(): void;
        handler$eln000$railways$maxSpeed(arg0: $CallbackInfoReturnable<any>): void;
        forEachTravellingPointBackwards(arg0: $BiConsumer_<$TravellingPoint, number>): void;
        railways$getStress(): number[];
        railways$setStress(arg0: number[]): void;
        throttle: number;
        lowHonk: boolean;
        speedBeforeStall: number;
        icon: $TrainIconType;
        doubleEnded: boolean;
        backwardsDriver: $Player;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Train>;
        speed: number;
        manualTick: boolean;
        currentlyBackwards: boolean;
        honkPitch: number;
        railways$occupiedCouplers: $Set<any>;
        navigation: $Navigation;
        carriages: $List<$Carriage>;
        currentStation: $UUID;
        honkTicks: number;
        id: $UUID;
        owner: $UUID;
        targetSpeed: number;
        occupiedSignalBlocks: $Map<$UUID, $UUID>;
        carriageWaitingForChunks: number;
        accumulatedSteamRelease: number;
        reservedSignalBlocks: $Set<$UUID>;
        updateSignalBlocks: boolean;
        migrationCooldown: number;
        runtime: $ScheduleRuntime;
        occupiedObservers: $Set<$UUID>;
        derailed: boolean;
        carriageSpacing: $List<number>;
        graph: $TrackGraph;
        cachedObserverFiltering: $Map<$UUID, $Pair<number, boolean>>;
        cpl$chunkLoader: $TrainChunkLoader;
        honk: boolean;
        mapColorIndex: number;
        name: $Component;
        invalid: boolean;
        status: $TrainStatus;
        manualSteer: $TravellingPoint$SteerDirection;
        fuelTicks: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: $Component_, arg7: $TrainIconType, arg8: number);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: number);
        get endpointEdges(): $Couple<$Couple<$TrackNode>>;
        get totalLength(): number;
        get navigationPenalty(): number;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
    }
    export class $CarriageSounds {
        stop(): void;
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        finalizeSharedVolume(arg0: number): void;
        submitSharedSoundVolume(arg0: $Vec3_, arg1: number): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $TravellingPoint$ITurnListener {
    }
    export interface $TravellingPoint$ITurnListener extends $BiConsumer<number, $TrackEdge> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITurnListener}.
     */
    export type $TravellingPoint$ITurnListener_ = (() => void);
    export class $TravellingPoint {
        reverse(arg0: $TrackGraph): void;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $TravellingPoint;
        random(): $TravellingPoint$ITrackSelector;
        follow(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        follow(arg0: $TravellingPoint, arg1: $Consumer_<boolean>): $TravellingPoint$ITrackSelector;
        getPosition(arg0: $TrackGraph, arg1: boolean): $Vec3;
        getPosition(arg0: $TrackGraph): $Vec3;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_, arg5: $TravellingPoint$IPortalListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_): number;
        steer(arg0: $TravellingPoint$SteerDirection_, arg1: $Vec3_): $TravellingPoint$ITrackSelector;
        migrateTo(arg0: $List_<$TrackGraphLocation>): void;
        ignoreEdgePoints(): $TravellingPoint$IEdgePointListener;
        ignorePortals(): $TravellingPoint$IPortalListener;
        ignoreTurns(): $TravellingPoint$ITurnListener;
        getPositionWithOffset(arg0: $TrackGraph, arg1: number, arg2: boolean): $Vec3;
        node2: $TrackNode;
        edge: $TrackEdge;
        blocked: boolean;
        position: number;
        node1: $TrackNode;
        upsideDown: boolean;
        constructor();
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: number, arg4: boolean);
    }
}
