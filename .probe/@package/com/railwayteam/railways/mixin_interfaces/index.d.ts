import { $Level_ } from "@package/net/minecraft/world/level";
import { $TrackEdge, $TrackNode } from "@package/com/simibubi/create/content/trains/graph";
import { $MountedFluidStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $TrackSwitchBlock$SwitchState, $TrackSwitch } from "@package/com/railwayteam/railways/content/switches";
import { $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $SlabBlock } from "@package/net/minecraft/world/level/block";
import { $UUID, $List, $Map_, $Map, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/railwayteam/railways/mixin_interfaces" {
    export class $IDistanceTravelled {
    }
    export interface $IDistanceTravelled {
        railways$getDistanceTravelled(): number;
    }
    /**
     * Values that may be interpreted as {@link $IDistanceTravelled}.
     */
    export type $IDistanceTravelled_ = (() => number);
    export class $ICarriageBufferDistanceTracker {
    }
    export interface $ICarriageBufferDistanceTracker {
        railways$setLeadingDistance(arg0: number): void;
        railways$setTrailingDistance(arg0: number): void;
        railways$getTrailingDistance(): number;
        railways$getLeadingDistance(): number;
    }
    export class $IWaypointableNavigation {
    }
    export interface $IWaypointableNavigation {
        railways$isWaypointMode(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IWaypointableNavigation}.
     */
    export type $IWaypointableNavigation_ = (() => boolean);
    export class $IGenerallySearchableNavigation$PointTest {
    }
    export interface $IGenerallySearchableNavigation$PointTest {
        test(arg0: number, arg1: number, arg2: $Map_<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $TrackEdgePoint): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGenerallySearchableNavigation$PointTest}.
     */
    export type $IGenerallySearchableNavigation$PointTest_ = ((arg0: number, arg1: number, arg2: $Map<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $TrackEdgePoint) => boolean);
    export class $IFuelInventory {
    }
    export interface $IFuelInventory {
        railways$getFluidFuels(): $MountedFluidStorageWrapper;
    }
    /**
     * Values that may be interpreted as {@link $IFuelInventory}.
     */
    export type $IFuelInventory_ = (() => $MountedFluidStorageWrapper);
    export class $IPotentiallyInvisibleSpriteContents {
    }
    export interface $IPotentiallyInvisibleSpriteContents {
        railways$shouldDoInvisibility(): boolean;
        railways$uploadFrame(arg0: boolean): void;
        railways$isVisible(): boolean;
    }
    export class $IHasTrackCasing {
        static getTrackCasing(arg0: $Level_, arg1: $BlockPos_): $SlabBlock;
        static isAlternate(arg0: $Level_, arg1: $BlockPos_): boolean;
        static setAlternateModel(arg0: $Level_, arg1: $BlockPos_, arg2: boolean): boolean;
        static setTrackCasing(arg0: $Level_, arg1: $BlockPos_, arg2: $SlabBlock): void;
    }
    export interface $IHasTrackCasing {
        getTrackCasing(): $SlabBlock;
        isAlternate(): boolean;
        setTrackCasing(arg0: $SlabBlock): void;
        setAlternate(arg0: boolean): void;
    }
    export class $IPreAssembleCallback {
    }
    export interface $IPreAssembleCallback {
        railways$preAssemble(): void;
    }
    /**
     * Values that may be interpreted as {@link $IPreAssembleCallback}.
     */
    export type $IPreAssembleCallback_ = (() => void);
    export class $ISwitchDisabledEdge {
        static isEnabled(arg0: $TrackEdge): boolean;
        static isAutomatic(arg0: $TrackEdge): boolean;
        static isDisabled(arg0: $TrackEdge): boolean;
        static automaticallySelect(arg0: $TrackEdge): void;
    }
    export interface $ISwitchDisabledEdge {
        isEnabled(): boolean;
        isAutomatic(): boolean;
        setAutomatic(arg0: boolean): void;
        setEnabled(arg0: boolean): void;
        isAutomaticallySelected(): boolean;
        ackAutomaticSelection(): void;
        getAutomaticallySelectedPriority(): number;
        setAutomaticallySelected(): void;
        get automaticallySelectedPriority(): number;
    }
    export class $IMonorailBezier$MonorailAngles {
        beam: $PoseStack$Pose;
        lightPosition: $BlockPos;
        beamCaps: $Couple<$PoseStack$Pose>;
        constructor();
    }
    export class $IHandcarTrain {
    }
    export interface $IHandcarTrain {
        railways$setHandcar(arg0: boolean): void;
        railways$isHandcar(): boolean;
    }
    export class $IIndexedSchedule {
    }
    export interface $IIndexedSchedule {
        railways$getIndex(): number;
        railways$setIndex(arg0: number): void;
    }
    export class $IMonorailBezier {
    }
    export interface $IMonorailBezier {
        getBakedMonorails(): $IMonorailBezier$MonorailAngles[];
        get bakedMonorails(): $IMonorailBezier$MonorailAngles[];
    }
    /**
     * Values that may be interpreted as {@link $IMonorailBezier}.
     */
    export type $IMonorailBezier_ = (() => $IMonorailBezier$MonorailAngles[]);
    export class $IUpdateCount {
        static outOfSync(arg0: $IUpdateCount, arg1: $IUpdateCount): boolean;
    }
    export interface $IUpdateCount {
        railways$markUpdate(): void;
        railways$getUpdateCount(): number;
        railways$fromParent(arg0: $IUpdateCount): void;
    }
    export class $IBufferBlockedTrain {
    }
    export interface $IBufferBlockedTrain {
        railways$isControlBlocked(): boolean;
        railways$getBlockedSign(): number;
        railways$setControlBlocked(arg0: boolean, arg1: boolean): void;
    }
    export class $IGenerallySearchableNavigation {
    }
    export interface $IGenerallySearchableNavigation {
        railways$findNearestApproachableSwitch(arg0: boolean): $Pair<$TrackSwitch, $Pair<boolean, ($TrackSwitchBlock$SwitchState) | undefined>>;
        railways$searchGeneral(arg0: number, arg1: number, arg2: boolean, arg3: $IGenerallySearchableNavigation$PointTest_): void;
        railways$searchGeneral(arg0: number, arg1: boolean, arg2: $IGenerallySearchableNavigation$PointTest_): void;
    }
    export class $IContraptionFuel {
    }
    export interface $IContraptionFuel {
        railways$getFluidFuels(): $MountedFluidStorageWrapper;
    }
    /**
     * Values that may be interpreted as {@link $IContraptionFuel}.
     */
    export type $IContraptionFuel_ = (() => $MountedFluidStorageWrapper);
    export class $IStrictSignalTrain {
    }
    export interface $IStrictSignalTrain {
        railways$setStrictSignals(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IStrictSignalTrain}.
     */
    export type $IStrictSignalTrain_ = ((arg0: boolean) => void);
    export class $IOccupiedCouplers {
    }
    export interface $IOccupiedCouplers {
        railways$getOccupiedCouplers(): $Set<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $IOccupiedCouplers}.
     */
    export type $IOccupiedCouplers_ = (() => $Set_<$UUID_>);
    export class $IBufferBlockCheckableNavigation {
    }
    export interface $IBufferBlockCheckableNavigation {
        railways$updateControlsBlock(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IBufferBlockCheckableNavigation}.
     */
    export type $IBufferBlockCheckableNavigation_ = ((arg0: boolean) => void);
    export class $ICrashAdvancement {
    }
    export interface $ICrashAdvancement {
        railways$awardCrashAdvancements(): void;
    }
    /**
     * Values that may be interpreted as {@link $ICrashAdvancement}.
     */
    export type $ICrashAdvancement_ = (() => void);
    export class $ILimited {
    }
    export interface $ILimited {
        isLimitEnabled(): boolean;
        setLimitEnabled(arg0: boolean): void;
    }
    export class $AnimatedTextureDuck {
    }
    export interface $AnimatedTextureDuck {
        railways$uploadWithVisibility(): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimatedTextureDuck}.
     */
    export type $AnimatedTextureDuck_ = (() => void);
    export class $ILimitedGlobalStation {
    }
    export interface $ILimitedGlobalStation extends $ILimited {
        isStationEnabled(): boolean;
        orDisablingTrain(arg0: $Train, arg1: $Train): $Train;
        getDisablingTrain(): $Train;
        get stationEnabled(): boolean;
        get disablingTrain(): $Train;
    }
    export class $ICarriageConductors {
    }
    export interface $ICarriageConductors {
        railways$getControllingConductors(): $List<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $ICarriageConductors}.
     */
    export type $ICarriageConductors_ = (() => $List_<$UUID_>);
}
