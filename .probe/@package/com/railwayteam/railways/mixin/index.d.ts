import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $CreativeModeTab$ItemDisplayParameters_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient$TagValue, $Ingredient$Value, $Ingredient$Value_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $BezierTrackPointLocation_, $BezierTrackPointLocation } from "@package/com/simibubi/create/content/trains/track";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $UUID, $List, $Map_, $Map, $Set, $UUID_, $Set_, $List_, $WeakHashMap } from "@package/java/util";
import { $Carriage, $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $TrackNode } from "@package/com/simibubi/create/content/trains/graph";
import { $AbstractContraptionEntity, $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Direction$AxisDirection, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $ToolboxInventory } from "@package/com/simibubi/create/content/equipment/toolbox";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Couple } from "@package/net/createmod/catnip/data";
export * as client from "@package/com/railwayteam/railways/mixin/client";
export * as conductor_possession from "@package/com/railwayteam/railways/mixin/conductor_possession";

declare module "@package/com/railwayteam/railways/mixin" {
    export class $AccessorAbstractContraptionEntity {
    }
    export interface $AccessorAbstractContraptionEntity {
        railways$setSkipActorStop(arg0: boolean): void;
        railways$moveCollidedEntitiesOnDisassembly(arg0: $StructureTransform): void;
    }
    export class $AccessorScheduleRuntime {
    }
    export interface $AccessorScheduleRuntime {
        setCooldown(arg0: number): void;
        getTrain(): $Train;
        set cooldown(value: number);
        get train(): $Train;
    }
    export class $AccessorToolboxInventory {
    }
    export interface $AccessorToolboxInventory {
        getFilters(): $List<$ItemStack>;
        get filters(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorToolboxInventory}.
     */
    export type $AccessorToolboxInventory_ = (() => $List_<$ItemStack_>);
    export class $AccessorCreativeModeTabs {
        static setCACHED_PARAMETERS(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
        static set CACHED_PARAMETERS(value: $CreativeModeTab$ItemDisplayParameters_);
    }
    export interface $AccessorCreativeModeTabs {
    }
    export class $AccessorTrackTargetingBehavior {
    }
    export interface $AccessorTrackTargetingBehavior {
        getId(): $UUID;
        getTargetTrack(): $BlockPos;
        setEdgePoint(arg0: $TrackEdgePoint): void;
        setId(arg0: $UUID_): void;
        getPrevDirection(): $Vec3;
        setPrevDirection(arg0: $Vec3_): void;
        getTargetBezier(): $BezierTrackPointLocation;
        getMigrationData(): $CompoundTag;
        setMigrationData(arg0: $CompoundTag_): void;
        setTargetBezier(arg0: $BezierTrackPointLocation_): void;
        setOrthogonal(arg0: boolean): void;
        setRotatedDirection(arg0: $Vec3_): void;
        getRotatedDirection(): $Vec3;
        isOrthogonal(): boolean;
        setTargetTrack(arg0: $BlockPos_): void;
        setTargetDirection(arg0: $Direction$AxisDirection_): void;
        getTargetDirection(): $Direction$AxisDirection;
        set edgePoint(value: $TrackEdgePoint);
    }
    export class $AccessorCarriageBogey {
    }
    export interface $AccessorCarriageBogey {
        getType(): $AbstractBogeyBlock<never>;
        get type(): $AbstractBogeyBlock<never>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorCarriageBogey}.
     */
    export type $AccessorCarriageBogey_ = (() => $AbstractBogeyBlock<never>);
    export class $AccessorNavigation {
    }
    export interface $AccessorNavigation {
        getCurrentPath(): $List<$Couple<$TrackNode>>;
        get currentPath(): $List<$Couple<$TrackNode>>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorNavigation}.
     */
    export type $AccessorNavigation_ = (() => $List_<$Couple<$TrackNode>>);
    export class $AccessorIngredient$TagValue {
        static railways$create(arg0: $TagKey_<$Item>): $Ingredient$TagValue;
    }
    export interface $AccessorIngredient$TagValue {
        getTag(): $TagKey<$Item>;
        get tag(): $TagKey<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorIngredient$TagValue}.
     */
    export type $AccessorIngredient$TagValue_ = (() => $TagKey_<$Item>);
    export class $AccessorIngredient {
    }
    export interface $AccessorIngredient {
        getValues(): $Ingredient$Value[];
        get values(): $Ingredient$Value[];
    }
    /**
     * Values that may be interpreted as {@link $AccessorIngredient}.
     */
    export type $AccessorIngredient_ = (() => $Ingredient$Value_[]);
    export class $AccessorCarriageContraptionEntity {
    }
    export interface $AccessorCarriageContraptionEntity {
        railways$setCarriage(arg0: $Carriage): void;
        railways$getCarriage(): $Carriage;
        railways$bindCarriage(): void;
    }
    export class $AccessorContraption {
    }
    export interface $AccessorContraption {
        railways$getEntity(): $AbstractContraptionEntity;
    }
    /**
     * Values that may be interpreted as {@link $AccessorContraption}.
     */
    export type $AccessorContraption_ = (() => $AbstractContraptionEntity);
    export class $AccessorBlockEntityType {
    }
    export interface $AccessorBlockEntityType {
        setValidBlocks(arg0: $Set_<$Block_>): void;
        getValidBlocks(): $Set<$Block>;
    }
    export class $AccessorTrain {
    }
    export interface $AccessorTrain {
        railways$setStress(arg0: number[]): void;
        railways$getStress(): number[];
    }
    export class $AccessorCarriage {
    }
    export interface $AccessorCarriage {
        getSerialisedPassengers(): $Map<number, $CompoundTag>;
        get serialisedPassengers(): $Map<number, $CompoundTag>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorCarriage}.
     */
    export type $AccessorCarriage_ = (() => $Map_<number, $CompoundTag_>);
    export class $AccessorToolboxBlockEntity {
    }
    export interface $AccessorToolboxBlockEntity {
        getInventory(): $ToolboxInventory;
        getConnectedPlayers(): $Map<number, $WeakHashMap<$Player, number>>;
        get inventory(): $ToolboxInventory;
        get connectedPlayers(): $Map<number, $WeakHashMap<$Player, number>>;
    }
    export class $AccessorBlockEntity {
    }
    export interface $AccessorBlockEntity {
        setWorldPosition(arg0: $BlockPos_): void;
        set worldPosition(value: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $AccessorBlockEntity}.
     */
    export type $AccessorBlockEntity_ = ((arg0: $BlockPos) => void);
}
