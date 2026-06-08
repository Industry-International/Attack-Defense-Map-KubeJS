import { $LevelReader } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LoadingCache, $CacheLoader } from "@package/com/google/common/cache";

declare module "@package/net/minecraft/world/level/block/state/pattern" {
    export class $BlockPattern$BlockCacheLoader extends $CacheLoader<$BlockPos, $BlockInWorld> {
    }
    export class $BlockPatternBuilder {
        static start(): $BlockPatternBuilder;
        build(): $BlockPattern;
        where(arg0: string, arg1: $Predicate_<$BlockInWorld>): $BlockPatternBuilder;
        aisle(...arg0: string[]): $BlockPatternBuilder;
    }
    export class $BlockInWorld {
        getState(): $BlockState;
        getLevel(): $LevelReader;
        getEntity(): $BlockEntity;
        getPos(): $BlockPos;
        static hasState(arg0: $Predicate_<$BlockState>): $Predicate<$BlockInWorld>;
        constructor(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean);
        get state(): $BlockState;
        get level(): $LevelReader;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
    }
    export class $BlockPattern {
        matches(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_): $BlockPattern$BlockPatternMatch;
        find(arg0: $LevelReader, arg1: $BlockPos_): $BlockPattern$BlockPatternMatch;
        getPattern(): $Predicate<$BlockInWorld>[][][];
        static translateAndRotate(arg0: $BlockPos_, arg1: $Direction_, arg2: $Direction_, arg3: number, arg4: number, arg5: number): $BlockPos;
        getWidth(): number;
        getDepth(): number;
        getHeight(): number;
        static createLevelCache(arg0: $LevelReader, arg1: boolean): $LoadingCache<$BlockPos, $BlockInWorld>;
        constructor(arg0: $Predicate_<$BlockInWorld>[][][]);
        get pattern(): $Predicate<$BlockInWorld>[][][];
        get width(): number;
        get depth(): number;
        get height(): number;
    }
    export class $BlockPattern$BlockPatternMatch {
        getUp(): $Direction;
        getWidth(): number;
        getDepth(): number;
        getBlock(arg0: number, arg1: number, arg2: number): $BlockInWorld;
        getFrontTopLeft(): $BlockPos;
        getHeight(): number;
        getForwards(): $Direction;
        constructor(arg0: $BlockPos_, arg1: $Direction_, arg2: $Direction_, arg3: $LoadingCache<$BlockPos_, $BlockInWorld>, arg4: number, arg5: number, arg6: number);
        get up(): $Direction;
        get width(): number;
        get depth(): number;
        get frontTopLeft(): $BlockPos;
        get height(): number;
        get forwards(): $Direction;
    }
}
