import { $BlockPos, $BlockPos_, $Vec3i, $Direction$Axis_, $Direction_, $Direction, $Position } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AABBMixin } from "@package/dev/simulated_team/simulated/mixin/aabb";
import { $Iterable_, $Enum } from "@package/java/lang";
import { $EnumSet } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vector3f } from "@package/org/joml";
import { $RandomSource } from "@package/net/minecraft/util";
export * as shapes from "@package/net/minecraft/world/phys/shapes";

declare module "@package/net/minecraft/world/phys" {
    export class $AABB implements $AABBMixin {
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        deflate(value: number): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that has been contracted by the given amount, with positive changes decreasing max values and negative changes increasing min values.
         * 
         * If the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see last sample).
         * 
         * ### Samples:
         * 
         * | Input | Result |
         * |---|---|
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(2, 2, 2)` | `box[0.0, 0.0, 0.0 -> 2.0, 2.0, 2.0]` |
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(-2, -2, -2)` | `box[2.0, 2.0, 2.0 -> 4.0, 4.0, 4.0]` |
         * | `new AxisAlignedBB(5, 5, 5, 7, 7, 7).contract(0, 1, -1)` | `box[5.0, 5.0, 6.0 -> 7.0, 6.0, 7.0]` |
         * | `new AxisAlignedBB(-2, -2, -2, 2, 2, 2).contract(4, -4, 0)` | `box[-8.0, 2.0, -2.0 -> -2.0, 8.0, 2.0]` |
         * 
         * ### See Also:
         * 
         * - `#expand(double, double, double)` - like this, except for expanding.
         * - `#grow(double, double, double)` and `#grow(double)` - expands in all directions.
         * - `#shrink(double)` - contracts in all directions (like `#grow(double)`)
         * 
         * @return A new modified bounding box.
         */
        deflate(x: number, arg1: number, y: number): $AABB;
        min(axis: $Direction$Axis_): number;
        max(axis: $Direction$Axis_): number;
        isInfinite(): boolean;
        /**
         * Creates a new `AxisAlignedBB` that has been contracted by the given amount, with positive changes decreasing max values and negative changes increasing min values.
         * 
         * If the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see last sample).
         * 
         * ### Samples:
         * 
         * | Input | Result |
         * |---|---|
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(2, 2, 2)` | `box[0.0, 0.0, 0.0 -> 2.0, 2.0, 2.0]` |
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(-2, -2, -2)` | `box[2.0, 2.0, 2.0 -> 4.0, 4.0, 4.0]` |
         * | `new AxisAlignedBB(5, 5, 5, 7, 7, 7).contract(0, 1, -1)` | `box[5.0, 5.0, 6.0 -> 7.0, 6.0, 7.0]` |
         * | `new AxisAlignedBB(-2, -2, -2, 2, 2, 2).contract(4, -4, 0)` | `box[-8.0, 2.0, -2.0 -> -2.0, 8.0, 2.0]` |
         * 
         * ### See Also:
         * 
         * - `#expand(double, double, double)` - like this, except for expanding.
         * - `#grow(double, double, double)` and `#grow(double)` - expands in all directions.
         * - `#shrink(double)` - contracts in all directions (like `#grow(double)`)
         * 
         * @return A new modified bounding box.
         */
        inflate(x: number, arg1: number, y: number): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        inflate(value: number): $AABB;
        static of(mutableBox: $BoundingBox): $AABB;
        contains(x: number, arg1: number, y: number): boolean;
        /**
         * Returns if the supplied Vec3D is completely inside the bounding box
         */
        contains(vec: $Vec3_): boolean;
        /**
         * Returns the average length of the edges of the bounding box.
         */
        getSize(): number;
        /**
         * Creates a new `AxisAlignedBB` that has been contracted by the given amount, with positive changes decreasing max values and negative changes increasing min values.
         * 
         * If the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see last sample).
         * 
         * ### Samples:
         * 
         * | Input | Result |
         * |---|---|
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(2, 2, 2)` | `box[0.0, 0.0, 0.0 -> 2.0, 2.0, 2.0]` |
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(-2, -2, -2)` | `box[2.0, 2.0, 2.0 -> 4.0, 4.0, 4.0]` |
         * | `new AxisAlignedBB(5, 5, 5, 7, 7, 7).contract(0, 1, -1)` | `box[5.0, 5.0, 6.0 -> 7.0, 6.0, 7.0]` |
         * | `new AxisAlignedBB(-2, -2, -2, 2, 2, 2).contract(4, -4, 0)` | `box[-8.0, 2.0, -2.0 -> -2.0, 8.0, 2.0]` |
         * 
         * ### See Also:
         * 
         * - `#expand(double, double, double)` - like this, except for expanding.
         * - `#grow(double, double, double)` and `#grow(double)` - expands in all directions.
         * - `#shrink(double)` - contracts in all directions (like `#grow(double)`)
         * 
         * @return A new modified bounding box.
         */
        move(x: number, arg1: number, y: number): $AABB;
        move(pos: $BlockPos_): $AABB;
        move(vector: $Vec3_): $AABB;
        move(vec: $Vector3f): $AABB;
        /**
         * Checks if the bounding box intersects with another.
         */
        intersects(other: $AABB_): boolean;
        intersects(x1: number, arg1: number, y1: number, arg3: number, z1: number, arg5: number): boolean;
        intersects(min: $Vec3_, max: $Vec3_): boolean;
        static encapsulatingFullBlocks(startPos: $BlockPos_, endPos: $BlockPos_): $AABB;
        static invokeGetDirection$simulated_$md$dd6cb9$0(aabb: $AABB_, start: $Vec3_, minDistance: number[], facing: $Direction_, deltaX: number, arg5: number, deltaY: number): $Direction;
        /**
         * Returns the average length of the edges of the bounding box.
         */
        getXsize(): number;
        /**
         * Returns the average length of the edges of the bounding box.
         */
        getZsize(): number;
        static unitCubeFromLowerCorner(vector: $Vec3_): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that has been contracted by the given amount, with positive changes decreasing max values and negative changes increasing min values.
         * 
         * If the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see last sample).
         * 
         * ### Samples:
         * 
         * | Input | Result |
         * |---|---|
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(2, 2, 2)` | `box[0.0, 0.0, 0.0 -> 2.0, 2.0, 2.0]` |
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(-2, -2, -2)` | `box[2.0, 2.0, 2.0 -> 4.0, 4.0, 4.0]` |
         * | `new AxisAlignedBB(5, 5, 5, 7, 7, 7).contract(0, 1, -1)` | `box[5.0, 5.0, 6.0 -> 7.0, 6.0, 7.0]` |
         * | `new AxisAlignedBB(-2, -2, -2, 2, 2, 2).contract(4, -4, 0)` | `box[-8.0, 2.0, -2.0 -> -2.0, 8.0, 2.0]` |
         * 
         * ### See Also:
         * 
         * - `#expand(double, double, double)` - like this, except for expanding.
         * - `#grow(double, double, double)` and `#grow(double)` - expands in all directions.
         * - `#shrink(double)` - contracts in all directions (like `#grow(double)`)
         * 
         * @return A new modified bounding box.
         */
        expandTowards(x: number, arg1: number, y: number): $AABB;
        expandTowards(vector: $Vec3_): $AABB;
        distanceToSqr(vec: $Vec3_): number;
        getCenter(): $Vec3;
        static ofSize(center: $Vec3_, xSize: number, arg2: number, ySize: number): $AABB;
        minmax(other: $AABB_): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        setMinY(value: number): $AABB;
        static clip(boxes: $Iterable_<$AABB>, start: $Vec3_, end: $Vec3_, pos: $BlockPos_): $BlockHitResult;
        clip(from: $Vec3_, to: $Vec3_): ($Vec3) | undefined;
        intersect(other: $AABB_): $AABB;
        /**
         * Returns the average length of the edges of the bounding box.
         */
        getYsize(): number;
        getBottomCenter(): $Vec3;
        /**
         * Creates a new `AxisAlignedBB` that has been contracted by the given amount, with positive changes decreasing max values and negative changes increasing min values.
         * 
         * If the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see last sample).
         * 
         * ### Samples:
         * 
         * | Input | Result |
         * |---|---|
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(2, 2, 2)` | `box[0.0, 0.0, 0.0 -> 2.0, 2.0, 2.0]` |
         * | `new AxisAlignedBB(0, 0, 0, 4, 4, 4).contract(-2, -2, -2)` | `box[2.0, 2.0, 2.0 -> 4.0, 4.0, 4.0]` |
         * | `new AxisAlignedBB(5, 5, 5, 7, 7, 7).contract(0, 1, -1)` | `box[5.0, 5.0, 6.0 -> 7.0, 6.0, 7.0]` |
         * | `new AxisAlignedBB(-2, -2, -2, 2, 2, 2).contract(4, -4, 0)` | `box[-8.0, 2.0, -2.0 -> -2.0, 8.0, 2.0]` |
         * 
         * ### See Also:
         * 
         * - `#expand(double, double, double)` - like this, except for expanding.
         * - `#grow(double, double, double)` and `#grow(double)` - expands in all directions.
         * - `#shrink(double)` - contracts in all directions (like `#grow(double)`)
         * 
         * @return A new modified bounding box.
         */
        contract(x: number, arg1: number, y: number): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        setMaxY(value: number): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        setMaxX(value: number): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        setMinX(value: number): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        setMaxZ(value: number): $AABB;
        /**
         * Creates a new `AxisAlignedBB` that is expanded by the given value in all directions. Equivalent to `#grow(double)` with value set to the negative of the value provided here. Passing a negative value to this method values will grow the AABB.
         * 
         * Side lengths will be decreased by 2 times the value of the parameter, since both min and max are changed.
         * 
         * If contracting and the amount to contract by is larger than the length of a side, then the side will wrap (still creating a valid AABB - see samples on `#grow(double, double, double)`).
         * 
         * @return A modified AABB.
         */
        setMinZ(value: number): $AABB;
        hasNaN(): boolean;
        getMinPosition(): $Vec3;
        getMaxPosition(): $Vec3;
        minY: number;
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        static INFINITE: $AABB;
        constructor(x1: number, arg1: number, y1: number, arg3: number, z1: number, arg5: number);
        constructor(pos: $BlockPos_);
        constructor(start: $Vec3_, end: $Vec3_);
        get infinite(): boolean;
        get size(): number;
        get xsize(): number;
        get zsize(): number;
        get center(): $Vec3;
        get ysize(): number;
        get bottomCenter(): $Vec3;
        get minPosition(): $Vec3;
        get maxPosition(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $AABB}.
     */
    export type $AABB_ = [] | [x: number, y: number, z: number, ] | [x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ];
    export class $HitResult$Type extends $Enum<$HitResult$Type> {
        static values(): $HitResult$Type[];
        static valueOf(arg0: string): $HitResult$Type;
        static ENTITY: $HitResult$Type;
        static MISS: $HitResult$Type;
        static BLOCK: $HitResult$Type;
    }
    /**
     * Values that may be interpreted as {@link $HitResult$Type}.
     */
    export type $HitResult$Type_ = "miss" | "block" | "entity";
    export class $EntityHitResult extends $HitResult {
        getEntity(): $Entity;
        location: $Vec3;
        constructor(entity: $Entity);
        constructor(entity: $Entity, location: $Vec3_);
        get entity(): $Entity;
    }
    export class $Vec3 implements $Position {
        get(axis: $Direction$Axis_): number;
        /**
         * Returns the length of the vector.
         */
        length(): number;
        /**
         * Normalizes the vector to a length of 1 (except if it is the zero vector)
         */
        reverse(): $Vec3;
        scale(factor: number): $Vec3;
        add(vec: $Vec3_): $Vec3;
        /**
         * Adds the specified x,y,z vector components to this vector and returns the resulting vector. Does not change this vector.
         */
        add(x: number, arg1: number, y: number): $Vec3;
        /**
         * Returns the length of the vector.
         */
        x(): number;
        /**
         * Euclidean distance between this and the specified vector, returned as double.
         */
        dot(vec: $Vec3_): number;
        "with"(axis: $Direction$Axis_, length: number): $Vec3;
        /**
         * Returns the length of the vector.
         */
        z(): number;
        /**
         * Returns the length of the vector.
         */
        y(): number;
        /**
         * Adds the specified x,y,z vector components to this vector and returns the resulting vector. Does not change this vector.
         */
        multiply(x: number, arg1: number, y: number): $Vec3;
        multiply(vec: $Vec3_): $Vec3;
        /**
         * Normalizes the vector to a length of 1 (except if it is the zero vector)
         */
        normalize(): $Vec3;
        subtract(vec: $Vec3_): $Vec3;
        /**
         * Adds the specified x,y,z vector components to this vector and returns the resulting vector. Does not change this vector.
         */
        subtract(x: number, arg1: number, y: number): $Vec3;
        relative(direction: $Direction_, length: number): $Vec3;
        /**
         * Copies the coordinates of an int vector and centers them horizontally (x and z)
         */
        static atCenterOf(toCopy: $Vec3i): $Vec3;
        align(axes: $EnumSet<$Direction$Axis_>): $Vec3;
        cross(vec: $Vec3_): $Vec3;
        /**
         * Lerps between this vector and the given vector.
         * @see net.minecraft.util.Mth#lerp(double, double, double)
         */
        lerp(to: $Vec3_, delta: number): $Vec3;
        static fromRGB24(packed: number): $Vec3;
        static atLowerCornerWithOffset(toCopy: $Vec3i, offsetX: number, arg2: number, offsetY: number): $Vec3;
        zRot(pitch: number): $Vec3;
        /**
         * Euclidean distance between this and the specified vector, returned as double.
         */
        distanceToSqr(vec: $Vec3_): number;
        distanceToSqr(x: number, arg1: number, y: number): number;
        /**
         * Copies the coordinates of an int vector and centers them horizontally (x and z)
         */
        static atBottomCenterOf(toCopy: $Vec3i): $Vec3;
        /**
         * Copies the coordinates of an int vector and centers them horizontally and applies a vertical offset.
         */
        static upFromBottomCenterOf(toCopy: $Vec3i, verticalOffset: number): $Vec3;
        /**
         * Copies the coordinates of an int vector and centers them horizontally (x and z)
         */
        static atLowerCornerOf(toCopy: $Vec3i): $Vec3;
        offsetRandom(random: $RandomSource, factor: number): $Vec3;
        /**
         * Euclidean distance between this and the specified vector, returned as double.
         */
        distanceTo(vec: $Vec3_): number;
        xRot(pitch: number): $Vec3;
        yRot(pitch: number): $Vec3;
        vectorTo(vec: $Vec3_): $Vec3;
        closerThan(pos: $Vec3_, horizontalDistance: number, arg2: number): boolean;
        /**
         * Checks if a position is within a certain distance of the coordinates.
         */
        closerThan(pos: $Position, distance: number): boolean;
        /**
         * Returns the length of the vector.
         */
        lengthSqr(): number;
        /**
         * Returns the length of the vector.
         */
        horizontalDistanceSqr(): number;
        /**
         * Returns a `Vec3` from the given pitch and yaw degrees.
         */
        static directionFromRotation(pitch: number, yaw: number): $Vec3;
        /**
         * Returns a `Vec3` from the given pitch and yaw degrees as `Vec2`.
         */
        static directionFromRotation(vec: $Vec2): $Vec3;
        toVector3f(): $Vector3f;
        /**
         * Returns the length of the vector.
         */
        horizontalDistance(): number;
        static ZERO: $Vec3;
        static CODEC: $Codec<$Vec3>;
        constructor(x: number, arg1: number, y: number);
        constructor(vector: $Vector3f);
    }
    /**
     * Values that may be interpreted as {@link $Vec3}.
     */
    export type $Vec3_ = [x: number, y: number, z: number, ];
    export class $Vec2 {
        equals(other: $Vec2): boolean;
        length(): number;
        scale(value: number): $Vec2;
        add(value: number): $Vec2;
        add(other: $Vec2): $Vec2;
        dot(other: $Vec2): number;
        normalized(): $Vec2;
        negated(): $Vec2;
        distanceToSqr(other: $Vec2): number;
        lengthSquared(): number;
        static ZERO: $Vec2;
        static NEG_UNIT_Y: $Vec2;
        static NEG_UNIT_X: $Vec2;
        static MIN: $Vec2;
        static UNIT_X: $Vec2;
        static MAX: $Vec2;
        static ONE: $Vec2;
        static UNIT_Y: $Vec2;
        x: number;
        y: number;
        constructor(x: number, y: number);
    }
    export class $HitResult {
        /**
         * Returns the hit position of the raycast, in absolute world coordinates
         */
        getLocation(): $Vec3;
        getType(): $HitResult$Type;
        distanceTo(entity: $Entity): number;
        location: $Vec3;
        constructor(location: $Vec3_);
        get type(): $HitResult$Type;
    }
    export class $BlockHitResult extends $HitResult {
        /**
         * @return `true` if the player's head is inside a block (used by scaffolding)
         */
        isInside(): boolean;
        /**
         * Creates a new BlockRayTraceResult marked as a miss.
         */
        static miss(location: $Vec3_, direction: $Direction_, pos: $BlockPos_): $BlockHitResult;
        /**
         * Gets the face of the block that was clicked
         */
        getDirection(): $Direction;
        /**
         * Creates a new BlockRayTraceResult, with the clicked face replaced with the given one
         */
        withDirection(newFace: $Direction_): $BlockHitResult;
        getBlockPos(): $BlockPos;
        withPosition(pos: $BlockPos_): $BlockHitResult;
        location: $Vec3;
        constructor(location: $Vec3_, direction: $Direction_, blockPos: $BlockPos_, inside: boolean);
        get inside(): boolean;
        get direction(): $Direction;
        get blockPos(): $BlockPos;
    }
}
