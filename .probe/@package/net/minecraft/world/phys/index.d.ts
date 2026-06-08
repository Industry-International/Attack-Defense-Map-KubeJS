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
        min(arg0: $Direction$Axis_): number;
        max(arg0: $Direction$Axis_): number;
        isInfinite(): boolean;
        inflate(arg0: number): $AABB;
        inflate(arg0: number, arg1: number, arg2: number): $AABB;
        static of(arg0: $BoundingBox): $AABB;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Vec3_): boolean;
        getSize(): number;
        move(arg0: $Vector3f): $AABB;
        move(arg0: number, arg1: number, arg2: number): $AABB;
        move(arg0: $BlockPos_): $AABB;
        move(arg0: $Vec3_): $AABB;
        deflate(arg0: number): $AABB;
        deflate(arg0: number, arg1: number, arg2: number): $AABB;
        intersect(arg0: $AABB_): $AABB;
        expandTowards(arg0: number, arg1: number, arg2: number): $AABB;
        expandTowards(arg0: $Vec3_): $AABB;
        distanceToSqr(arg0: $Vec3_): number;
        getBottomCenter(): $Vec3;
        intersects(arg0: $Vec3_, arg1: $Vec3_): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        intersects(arg0: $AABB_): boolean;
        clip(arg0: $Vec3_, arg1: $Vec3_): ($Vec3) | undefined;
        static clip(arg0: $Iterable_<$AABB>, arg1: $Vec3_, arg2: $Vec3_, arg3: $BlockPos_): $BlockHitResult;
        getXsize(): number;
        getZsize(): number;
        setMinY(arg0: number): $AABB;
        minmax(arg0: $AABB_): $AABB;
        getYsize(): number;
        getCenter(): $Vec3;
        static ofSize(arg0: $Vec3_, arg1: number, arg2: number, arg3: number): $AABB;
        static encapsulatingFullBlocks(arg0: $BlockPos_, arg1: $BlockPos_): $AABB;
        static invokeGetDirection$simulated_$md$5bc4b9$0(arg0: $AABB_, arg1: $Vec3_, arg2: number[], arg3: $Direction_, arg4: number, arg5: number, arg6: number): $Direction;
        static unitCubeFromLowerCorner(arg0: $Vec3_): $AABB;
        getMinPosition(): $Vec3;
        getMaxPosition(): $Vec3;
        setMaxY(arg0: number): $AABB;
        setMinX(arg0: number): $AABB;
        setMinZ(arg0: number): $AABB;
        setMaxX(arg0: number): $AABB;
        contract(arg0: number, arg1: number, arg2: number): $AABB;
        setMaxZ(arg0: number): $AABB;
        hasNaN(): boolean;
        minY: number;
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        static INFINITE: $AABB;
        constructor(arg0: $Vec3_, arg1: $Vec3_);
        constructor(arg0: $BlockPos_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get infinite(): boolean;
        get size(): number;
        get bottomCenter(): $Vec3;
        get xsize(): number;
        get zsize(): number;
        get ysize(): number;
        get center(): $Vec3;
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
        constructor(arg0: $Entity);
        constructor(arg0: $Entity, arg1: $Vec3_);
        get entity(): $Entity;
    }
    export class $Vec3 implements $Position {
        get(arg0: $Direction$Axis_): number;
        length(): number;
        reverse(): $Vec3;
        scale(arg0: number): $Vec3;
        add(arg0: $Vec3_): $Vec3;
        add(arg0: number, arg1: number, arg2: number): $Vec3;
        x(): number;
        dot(arg0: $Vec3_): number;
        "with"(arg0: $Direction$Axis_, arg1: number): $Vec3;
        z(): number;
        y(): number;
        multiply(arg0: number, arg1: number, arg2: number): $Vec3;
        multiply(arg0: $Vec3_): $Vec3;
        normalize(): $Vec3;
        subtract(arg0: $Vec3_): $Vec3;
        subtract(arg0: number, arg1: number, arg2: number): $Vec3;
        relative(arg0: $Direction_, arg1: number): $Vec3;
        static atCenterOf(arg0: $Vec3i): $Vec3;
        align(arg0: $EnumSet<$Direction$Axis_>): $Vec3;
        static atBottomCenterOf(arg0: $Vec3i): $Vec3;
        distanceToSqr(arg0: $Vec3_): number;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        zRot(arg0: number): $Vec3;
        static upFromBottomCenterOf(arg0: $Vec3i, arg1: number): $Vec3;
        horizontalDistanceSqr(): number;
        static directionFromRotation(arg0: number, arg1: number): $Vec3;
        static directionFromRotation(arg0: $Vec2): $Vec3;
        vectorTo(arg0: $Vec3_): $Vec3;
        distanceTo(arg0: $Vec3_): number;
        yRot(arg0: number): $Vec3;
        xRot(arg0: number): $Vec3;
        closerThan(arg0: $Vec3_, arg1: number, arg2: number): boolean;
        closerThan(arg0: $Position, arg1: number): boolean;
        lengthSqr(): number;
        toVector3f(): $Vector3f;
        lerp(arg0: $Vec3_, arg1: number): $Vec3;
        cross(arg0: $Vec3_): $Vec3;
        horizontalDistance(): number;
        static fromRGB24(arg0: number): $Vec3;
        static atLowerCornerOf(arg0: $Vec3i): $Vec3;
        offsetRandom(arg0: $RandomSource, arg1: number): $Vec3;
        static atLowerCornerWithOffset(arg0: $Vec3i, arg1: number, arg2: number, arg3: number): $Vec3;
        static ZERO: $Vec3;
        static CODEC: $Codec<$Vec3>;
        constructor(arg0: $Vector3f);
        constructor(arg0: number, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $Vec3}.
     */
    export type $Vec3_ = [x: number, y: number, z: number, ];
    export class $Vec2 {
        equals(arg0: $Vec2): boolean;
        length(): number;
        scale(arg0: number): $Vec2;
        add(arg0: number): $Vec2;
        add(arg0: $Vec2): $Vec2;
        dot(arg0: $Vec2): number;
        normalized(): $Vec2;
        negated(): $Vec2;
        distanceToSqr(arg0: $Vec2): number;
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
        constructor(arg0: number, arg1: number);
    }
    export class $HitResult {
        getLocation(): $Vec3;
        getType(): $HitResult$Type;
        distanceTo(arg0: $Entity): number;
        location: $Vec3;
        constructor(arg0: $Vec3_);
        get type(): $HitResult$Type;
    }
    export class $BlockHitResult extends $HitResult {
        getDirection(): $Direction;
        getBlockPos(): $BlockPos;
        static miss(arg0: $Vec3_, arg1: $Direction_, arg2: $BlockPos_): $BlockHitResult;
        withDirection(arg0: $Direction_): $BlockHitResult;
        withPosition(arg0: $BlockPos_): $BlockHitResult;
        isInside(): boolean;
        location: $Vec3;
        constructor(arg0: $Vec3_, arg1: $Direction_, arg2: $BlockPos_, arg3: boolean);
        get direction(): $Direction;
        get blockPos(): $BlockPos;
        get inside(): boolean;
    }
}
