import { $CollisionGetter, $PathNavigationRegion, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $PathExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/pathfinding";
import { $BlockPos, $BlockPos_, $Direction_, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set, $Set_, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/pathfinder" {
    export class $BinaryHeap {
        remove(arg0: $Node): void;
        size(): number;
        insert(arg0: $Node): $Node;
        clear(): void;
        isEmpty(): boolean;
        peek(): $Node;
        pop(): $Node;
        getHeap(): $Node[];
        changeCost(arg0: $Node, arg1: number): void;
        constructor();
        get empty(): boolean;
        get heap(): $Node[];
    }
    export class $Path$DebugData extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $Path$DebugData;
        targetNodes(): $Set<$Target>;
        openSet(): $Node[];
        closedSet(): $Node[];
        constructor(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>);
    }
    export class $AmphibiousNodeEvaluator extends $WalkNodeEvaluator {
        mob: $Mob;
        entityHeight: number;
        entityDepth: number;
        nodes: $Int2ObjectMap<$Node>;
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        entityWidth: number;
        constructor(arg0: boolean);
    }
    export class $PathComputationType extends $Enum<$PathComputationType> {
        static values(): $PathComputationType[];
        static valueOf(arg0: string): $PathComputationType;
        static LAND: $PathComputationType;
        static AIR: $PathComputationType;
        static WATER: $PathComputationType;
    }
    /**
     * Values that may be interpreted as {@link $PathComputationType}.
     */
    export type $PathComputationType_ = "land" | "water" | "air";
    export class $Target extends $Node {
        isReached(): boolean;
        setReached(): void;
        updateBest(arg0: number, arg1: $Node): void;
        static createFromStream(arg0: $FriendlyByteBuf): $Target;
        getBestNode(): $Node;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(arg0: $Node);
        constructor(arg0: number, arg1: number, arg2: number);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        invalidate(arg0: $BlockPos_): void;
        getOrCompute(arg0: $BlockGetter, arg1: $BlockPos_): $PathType;
        constructor();
    }
    export class $PathfindingContext {
        level(): $CollisionGetter;
        getBlockState(arg0: $BlockPos_): $BlockState;
        mobPosition(): $BlockPos;
        currentEvalPos(): $BlockPos;
        getPathTypeFromState(arg0: number, arg1: number, arg2: number): $PathType;
        constructor(arg0: $CollisionGetter, arg1: $Mob);
    }
    export class $PathFinder {
        distance(arg0: $Node, arg1: $Node): number;
        findPath(arg0: $PathNavigationRegion, arg1: $Mob, arg2: $Set_<$BlockPos_>, arg3: number, arg4: number, arg5: number): $Path;
        constructor(arg0: $NodeEvaluator, arg1: number);
    }
    export class $NodeEvaluator {
        done(): void;
        prepare(arg0: $PathNavigationRegion, arg1: $Mob): void;
        getTarget(arg0: number, arg1: number, arg2: number): $Target;
        getNode(arg0: number, arg1: number, arg2: number): $Node;
        getNode(arg0: $BlockPos_): $Node;
        static isBurningBlock(arg0: $BlockState_): boolean;
        canPassDoors(): boolean;
        canOpenDoors(): boolean;
        getPathType(arg0: $Mob, arg1: $BlockPos_): $PathType;
        getPathType(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number): $PathType;
        getStart(): $Node;
        setCanWalkOverFences(arg0: boolean): void;
        getNeighbors(arg0: $Node[], arg1: $Node): number;
        canFloat(): boolean;
        setCanPassDoors(arg0: boolean): void;
        setCanOpenDoors(arg0: boolean): void;
        setCanFloat(arg0: boolean): void;
        getTargetNodeAt(arg0: number, arg1: number, arg2: number): $Target;
        canWalkOverFences(): boolean;
        getPathTypeOfMob(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: $Mob): $PathType;
        mob: $Mob;
        entityHeight: number;
        entityDepth: number;
        nodes: $Int2ObjectMap<$Node>;
        currentContext: $PathfindingContext;
        entityWidth: number;
        constructor();
        get start(): $Node;
    }
    export class $PathType extends $Enum<$PathType> {
        static values(): $PathType[];
        static valueOf(arg0: string): $PathType;
        getMalus(): number;
        static LAVA: $PathType;
        static DANGER_POWDER_SNOW: $PathType;
        static LEAVES: $PathType;
        static BLOCKED: $PathType;
        static WALKABLE: $PathType;
        static TRAPDOOR: $PathType;
        static BREACH: $PathType;
        static POWDER_SNOW: $PathType;
        static DOOR_WOOD_CLOSED: $PathType;
        static DANGER_TRAPDOOR: $PathType;
        static DANGER_FIRE: $PathType;
        static DAMAGE_FIRE: $PathType;
        static WATER: $PathType;
        static WATER_BORDER: $PathType;
        static WALKABLE_DOOR: $PathType;
        static DOOR_IRON_CLOSED: $PathType;
        static FENCE: $PathType;
        static OPEN: $PathType;
        static RAIL: $PathType;
        static DAMAGE_OTHER: $PathType;
        static DOOR_OPEN: $PathType;
        static UNPASSABLE_RAIL: $PathType;
        static COCOA: $PathType;
        static DANGER_OTHER: $PathType;
        static STICKY_HONEY: $PathType;
        static DAMAGE_CAUTIOUS: $PathType;
        get malus(): number;
    }
    /**
     * Values that may be interpreted as {@link $PathType}.
     */
    export type $PathType_ = "blocked" | "open" | "walkable" | "walkable_door" | "trapdoor" | "powder_snow" | "danger_powder_snow" | "fence" | "lava" | "water" | "water_border" | "rail" | "unpassable_rail" | "danger_fire" | "damage_fire" | "danger_other" | "damage_other" | "door_open" | "door_wood_closed" | "door_iron_closed" | "breach" | "leaves" | "sticky_honey" | "cocoa" | "damage_cautious" | "danger_trapdoor";
    export class $SwimNodeEvaluator extends $NodeEvaluator {
        findAcceptedNode(arg0: number, arg1: number, arg2: number): $Node;
        getCachedBlockType(arg0: number, arg1: number, arg2: number): $PathType;
        isNodeValid(arg0: $Node): boolean;
        mob: $Mob;
        entityHeight: number;
        entityDepth: number;
        nodes: $Int2ObjectMap<$Node>;
        currentContext: $PathfindingContext;
        entityWidth: number;
        constructor(arg0: boolean);
    }
    export class $Node {
        static readContents(arg0: $FriendlyByteBuf, arg1: $Node): void;
        cloneAndMove(arg0: number, arg1: number, arg2: number): $Node;
        distanceTo(arg0: $Node): number;
        distanceTo(arg0: $BlockPos_): number;
        distanceToSqr(arg0: $Node): number;
        distanceToSqr(arg0: $BlockPos_): number;
        asVec3(): $Vec3;
        inOpenSet(): boolean;
        static createFromStream(arg0: $FriendlyByteBuf): $Node;
        writeToStream(arg0: $FriendlyByteBuf): void;
        asBlockPos(): $BlockPos;
        distanceToXZ(arg0: $Node): number;
        distanceManhattan(arg0: $BlockPos_): number;
        distanceManhattan(arg0: $Node): number;
        static createHash(arg0: number, arg1: number, arg2: number): number;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $FlyNodeEvaluator extends $WalkNodeEvaluator {
        findAcceptedNode(arg0: number, arg1: number, arg2: number): $Node;
        mob: $Mob;
        entityHeight: number;
        entityDepth: number;
        nodes: $Int2ObjectMap<$Node>;
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        entityWidth: number;
        constructor();
    }
    export class $WalkNodeEvaluator extends $NodeEvaluator {
        getFloorLevel(arg0: $BlockPos_): number;
        static getFloorLevel(arg0: $BlockGetter, arg1: $BlockPos_): number;
        canStartAt(arg0: $BlockPos_): boolean;
        static getPathTypeStatic(arg0: $Mob, arg1: $BlockPos_): $PathType;
        static getPathTypeStatic(arg0: $PathfindingContext, arg1: $BlockPos$MutableBlockPos): $PathType;
        isAmphibious(): boolean;
        getCachedPathType(arg0: number, arg1: number, arg2: number): $PathType;
        isNeighborValid(arg0: $Node, arg1: $Node): boolean;
        getStartNode(arg0: $BlockPos_): $Node;
        findAcceptedNode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: $PathType_): $Node;
        isDiagonalValid(arg0: $Node): boolean;
        isDiagonalValid(arg0: $Node, arg1: $Node, arg2: $Node): boolean;
        getPathTypeWithinMobBB(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number): $Set<$PathType>;
        static checkNeighbourBlocks(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: $PathType_): $PathType;
        static getPathTypeFromState(arg0: $BlockGetter, arg1: $BlockPos_): $PathType;
        mob: $Mob;
        entityHeight: number;
        entityDepth: number;
        nodes: $Int2ObjectMap<$Node>;
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        entityWidth: number;
        constructor();
        get amphibious(): boolean;
    }
    export class $Path implements $PathExtension {
        isDone(): boolean;
        copy(): $Path;
        getTarget(): $BlockPos;
        advance(): void;
        replaceNode(arg0: number, arg1: $Node): void;
        getNode(arg0: number): $Node;
        debugData(): $Path$DebugData;
        getNodeCount(): number;
        truncateNodes(arg0: number): void;
        getNextEntityPos(arg0: $Entity): $Vec3;
        sable$setLocalPath(arg0: $Level_, arg1: boolean): void;
        getNextNode(): $Node;
        getNextNodePos(): $BlockPos;
        getNextNodeIndex(): number;
        sameAs(arg0: $Path): boolean;
        getNodePos(arg0: number): $BlockPos;
        getEndNode(): $Node;
        canReach(): boolean;
        setDebug(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>): void;
        static createFromStream(arg0: $FriendlyByteBuf): $Path;
        writeToStream(arg0: $FriendlyByteBuf): void;
        getDistToTarget(): number;
        getEntityPosAtNode(arg0: $Entity, arg1: number): $Vec3;
        static writeNodeArray(arg0: $FriendlyByteBuf, arg1: $Node[]): void;
        static readNodeArray(arg0: $FriendlyByteBuf): $Node[];
        getPreviousNode(): $Node;
        setNextNodeIndex(arg0: number): void;
        notStarted(): boolean;
        constructor(arg0: $List_<$Node>, arg1: $BlockPos_, arg2: boolean);
        get done(): boolean;
        get target(): $BlockPos;
        get nodeCount(): number;
        get nextNode(): $Node;
        get nextNodePos(): $BlockPos;
        get endNode(): $Node;
        get distToTarget(): number;
        get previousNode(): $Node;
    }
}
