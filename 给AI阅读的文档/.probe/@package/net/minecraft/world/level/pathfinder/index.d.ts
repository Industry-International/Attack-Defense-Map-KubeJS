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
        remove(node: $Node): void;
        size(): number;
        /**
         * Adds a point to the path
         */
        insert(point: $Node): $Node;
        /**
         * Clears the path
         */
        clear(): void;
        /**
         * Returns `true` if this path contains no points
         */
        isEmpty(): boolean;
        /**
         * Returns and removes the first point in the path
         */
        peek(): $Node;
        /**
         * Returns and removes the first point in the path
         */
        pop(): $Node;
        /**
         * Changes the provided point's total cost if costIn is smaller
         */
        changeCost(point: $Node, cost: number): void;
        getHeap(): $Node[];
        constructor();
        get empty(): boolean;
        get heap(): $Node[];
    }
    export class $Path$DebugData extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $Path$DebugData;
        openSet(): $Node[];
        closedSet(): $Node[];
        targetNodes(): $Set<$Target>;
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
        constructor(prefersShallowSwimming: boolean);
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
        /**
         * Gets the nearest path point of the path that is constructed
         */
        getBestNode(): $Node;
        static createFromStream(buffer: $FriendlyByteBuf): $Target;
        setReached(): void;
        updateBest(heuristic: number, node: $Node): void;
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        isReached(): boolean;
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
        constructor(node: $Node);
        constructor(x: number, y: number, z: number);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        invalidate(pos: $BlockPos_): void;
        getOrCompute(level: $BlockGetter, pos: $BlockPos_): $PathType;
        constructor();
    }
    export class $PathfindingContext {
        level(): $CollisionGetter;
        mobPosition(): $BlockPos;
        currentEvalPos(): $BlockPos;
        getBlockState(pos: $BlockPos_): $BlockState;
        getPathTypeFromState(x: number, y: number, z: number): $PathType;
        constructor(level: $CollisionGetter, mob: $Mob);
    }
    export class $PathFinder {
        distance(first: $Node, second: $Node): number;
        /**
         * Finds a path to one of the specified positions and post-processes it or returns null if no path could be found within given accuracy
         */
        findPath(region: $PathNavigationRegion, mob: $Mob, targetPositions: $Set_<$BlockPos_>, maxRange: number, accuracy: number, searchDepthMultiplier: number): $Path;
        constructor(nodeEvaluator: $NodeEvaluator, maxVisitedNodes: number);
    }
    export class $NodeEvaluator {
        /**
         * This method is called when all nodes have been processed and PathEntity is created.
         */
        done(): void;
        prepare(level: $PathNavigationRegion, mob: $Mob): void;
        getTarget(x: number, arg1: number, y: number): $Target;
        /**
         * Returns a mapped point or creates and adds one
         */
        getNode(x: number, y: number, z: number): $Node;
        getNode(pos: $BlockPos_): $Node;
        getStart(): $Node;
        getTargetNodeAt(x: number, arg1: number, y: number): $Target;
        getPathTypeOfMob(context: $PathfindingContext, x: number, y: number, z: number, mob: $Mob): $PathType;
        canWalkOverFences(): boolean;
        getNeighbors(outputArray: $Node[], node: $Node): number;
        static isBurningBlock(state: $BlockState_): boolean;
        canFloat(): boolean;
        canPassDoors(): boolean;
        canOpenDoors(): boolean;
        getPathType(mob: $Mob, pos: $BlockPos_): $PathType;
        getPathType(context: $PathfindingContext, x: number, y: number, z: number): $PathType;
        setCanWalkOverFences(canFloat: boolean): void;
        setCanPassDoors(canFloat: boolean): void;
        setCanOpenDoors(canFloat: boolean): void;
        setCanFloat(canFloat: boolean): void;
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
        findAcceptedNode(x: number, y: number, z: number): $Node;
        isNodeValid(node: $Node | null): boolean;
        getCachedBlockType(x: number, y: number, z: number): $PathType;
        mob: $Mob;
        entityHeight: number;
        entityDepth: number;
        nodes: $Int2ObjectMap<$Node>;
        currentContext: $PathfindingContext;
        entityWidth: number;
        constructor(allowBreaching: boolean);
    }
    export class $Node {
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        inOpenSet(): boolean;
        static readContents(buffer: $FriendlyByteBuf, node: $Node): void;
        writeToStream(buffer: $FriendlyByteBuf): void;
        static createFromStream(buffer: $FriendlyByteBuf): $Node;
        distanceToSqr(point: $Node): number;
        distanceToSqr(pos: $BlockPos_): number;
        asBlockPos(): $BlockPos;
        distanceTo(pos: $BlockPos_): number;
        distanceTo(point: $Node): number;
        cloneAndMove(x: number, y: number, z: number): $Node;
        distanceManhattan(pos: $BlockPos_): number;
        distanceManhattan(point: $Node): number;
        distanceToXZ(point: $Node): number;
        static createHash(x: number, y: number, z: number): number;
        asVec3(): $Vec3;
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
        constructor(x: number, y: number, z: number);
    }
    export class $FlyNodeEvaluator extends $WalkNodeEvaluator {
        findAcceptedNode(x: number, y: number, z: number): $Node;
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
        canStartAt(pos: $BlockPos_): boolean;
        findAcceptedNode(x: number, y: number, z: number, verticalDeltaLimit: number, nodeFloorLevel: number, arg5: $Direction_, direction: $PathType_): $Node;
        getStartNode(pos: $BlockPos_): $Node;
        getCachedPathType(x: number, y: number, z: number): $PathType;
        isDiagonalValid(node: $Node | null): boolean;
        isDiagonalValid(root: $Node, xNode: $Node | null, zNode: $Node | null): boolean;
        isNeighborValid(neighbor: $Node | null, node: $Node): boolean;
        isAmphibious(): boolean;
        getFloorLevel(pos: $BlockPos_): number;
        static getFloorLevel(level: $BlockGetter, pos: $BlockPos_): number;
        static getPathTypeStatic(mob: $Mob, pos: $BlockPos_): $PathType;
        static getPathTypeStatic(context: $PathfindingContext, pos: $BlockPos$MutableBlockPos): $PathType;
        static getPathTypeFromState(level: $BlockGetter, pos: $BlockPos_): $PathType;
        static checkNeighbourBlocks(context: $PathfindingContext, x: number, y: number, z: number, pathType: $PathType_): $PathType;
        getPathTypeWithinMobBB(context: $PathfindingContext, x: number, y: number, z: number): $Set<$PathType>;
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
        /**
         * Returns `true` if this path has reached the end
         */
        isDone(): boolean;
        copy(): $Path;
        getTarget(): $BlockPos;
        /**
         * Directs this path to the next point in its array
         */
        advance(): void;
        replaceNode(index: number, point: $Node): void;
        /**
         * Returns the `Node` located at the specified index, usually the current one.
         */
        getNode(index: number): $Node;
        writeToStream(buffer: $FriendlyByteBuf): void;
        static createFromStream(buf: $FriendlyByteBuf): $Path;
        /**
         * Gets the vector of the `Node` associated with the given index.
         */
        getEntityPosAtNode(entity: $Entity, index: number): $Vec3;
        setNextNodeIndex(currentPathIndex: number): void;
        getNodePos(index: number): $BlockPos;
        /**
         * Returns `true` if the EntityPath are the same. Non instance related equals.
         */
        sameAs(pathentity: $Path | null): boolean;
        /**
         * Returns the last `Node` of the Array.
         */
        getEndNode(): $Node;
        debugData(): $Path$DebugData;
        getNodeCount(): number;
        getNextNodePos(): $BlockPos;
        truncateNodes(currentPathIndex: number): void;
        /**
         * @return the current `PathEntity` target node as a `Vec3D`
         */
        getNextEntityPos(entity: $Entity): $Vec3;
        getNextNodeIndex(): number;
        /**
         * Returns the last `Node` of the Array.
         */
        getNextNode(): $Node;
        sable$setLocalPath(arg0: $Level_, arg1: boolean): void;
        setDebug(openSet: $Node[], closedSet: $Node[], targetNodes: $Set_<$Target>): void;
        /**
         * Returns `true` if this path has reached the end
         */
        canReach(): boolean;
        static writeNodeArray(buffer: $FriendlyByteBuf, nodeArray: $Node[]): void;
        static readNodeArray(buffer: $FriendlyByteBuf): $Node[];
        getDistToTarget(): number;
        /**
         * Returns `true` if this path has reached the end
         */
        notStarted(): boolean;
        /**
         * Returns the last `Node` of the Array.
         */
        getPreviousNode(): $Node;
        constructor(nodes: $List_<$Node>, target: $BlockPos_, reached: boolean);
        get done(): boolean;
        get target(): $BlockPos;
        get endNode(): $Node;
        get nodeCount(): number;
        get nextNodePos(): $BlockPos;
        get nextNode(): $Node;
        get distToTarget(): number;
        get previousNode(): $Node;
    }
}
