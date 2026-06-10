import { $Predicate_, $Supplier_, $ToDoubleFunction_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Mob, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/entity/ai/util" {
    export class $AirAndWaterRandomPos {
        static getPos(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Vec3;
        static generateRandomPos(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): $BlockPos;
        constructor();
    }
    export class $AirRandomPos {
        static getPosTowards(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: $Vec3_, arg5: number): $Vec3;
        constructor();
    }
    export class $GoalUtils {
        static isSolid(arg0: $PathfinderMob, arg1: $BlockPos_): boolean;
        static isRestricted(arg0: boolean, arg1: $PathfinderMob, arg2: $BlockPos_): boolean;
        static isWater(arg0: $PathfinderMob, arg1: $BlockPos_): boolean;
        static hasGroundPathNavigation(arg0: $Mob): boolean;
        static isOutsideLimits(arg0: $BlockPos_, arg1: $PathfinderMob): boolean;
        static mobRestricted(arg0: $PathfinderMob, arg1: number): boolean;
        static isNotStable(arg0: $PathNavigation, arg1: $BlockPos_): boolean;
        static hasMalus(arg0: $PathfinderMob, arg1: $BlockPos_): boolean;
        constructor();
    }
    export class $DefaultRandomPos {
        static getPos(arg0: $PathfinderMob, arg1: number, arg2: number): $Vec3;
        static getPosAway(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: $Vec3_): $Vec3;
        static getPosTowards(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: $Vec3_, arg4: number): $Vec3;
        constructor();
    }
    export class $LandRandomPos {
        static getPos(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: $ToDoubleFunction_<$BlockPos>): $Vec3;
        static getPos(arg0: $PathfinderMob, arg1: number, arg2: number): $Vec3;
        static getPosAway(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: $Vec3_): $Vec3;
        static getPosTowards(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: $Vec3_): $Vec3;
        static generateRandomPosTowardDirection(arg0: $PathfinderMob, arg1: number, arg2: boolean, arg3: $BlockPos_): $BlockPos;
        static movePosUpOutOfSolid(arg0: $PathfinderMob, arg1: $BlockPos_): $BlockPos;
        constructor();
    }
    export class $RandomPos {
        static moveUpToAboveSolid(arg0: $BlockPos_, arg1: number, arg2: number, arg3: $Predicate_<$BlockPos>): $BlockPos;
        static generateRandomDirectionWithinRadians(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $BlockPos;
        static moveUpOutOfSolid(arg0: $BlockPos_, arg1: number, arg2: $Predicate_<$BlockPos>): $BlockPos;
        static generateRandomPos(arg0: $PathfinderMob, arg1: $Supplier_<$BlockPos>): $Vec3;
        static generateRandomPos(arg0: $Supplier_<$BlockPos>, arg1: $ToDoubleFunction_<$BlockPos>): $Vec3;
        static generateRandomPosTowardDirection(arg0: $PathfinderMob, arg1: number, arg2: $RandomSource, arg3: $BlockPos_): $BlockPos;
        static generateRandomDirection(arg0: $RandomSource, arg1: number, arg2: number): $BlockPos;
        constructor();
    }
    export class $HoverRandomPos {
        static getPos(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Vec3;
        constructor();
    }
}
