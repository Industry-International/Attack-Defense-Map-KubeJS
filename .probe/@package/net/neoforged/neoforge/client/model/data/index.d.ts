import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Long2ObjectFunction, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $BitSet, $List_, $Set } from "@package/java/util";
import { $ChunkEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $SodiumModelData } from "@package/net/caffeinemc/mods/sodium/client/services";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/neoforged/neoforge/client/model/data" {
    export class $ModelDataManager {
        static onChunkUnload(arg0: $ChunkEvent$Unload): void;
        getAt(arg0: $SectionPos): $Long2ObjectMap<$ModelData>;
        getAt(arg0: $BlockPos_): $ModelData;
        requestRefresh(arg0: $BlockEntity): void;
        snapshotSectionRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Long2ObjectFunction<$ModelData>;
        static EMPTY_SNAPSHOT: $Long2ObjectFunction<$ModelData>;
        constructor(arg0: $Level_);
    }
    export class $MultipartModelData {
        static resolve(arg0: $ModelData, arg1: $BakedModel): $ModelData;
        static create(arg0: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>, arg1: $BitSet, arg2: $BlockAndTintGetter, arg3: $BlockPos_, arg4: $BlockState_, arg5: $ModelData): $ModelData;
        constructor();
    }
    export class $ModelData implements $SodiumModelData {
        get<T>(arg0: $ModelProperty<T>): T;
        static of<T>(arg0: $ModelProperty<T>, arg1: T): $ModelData;
        static builder(): $ModelData$Builder;
        getProperties(): $Set<$ModelProperty<never>>;
        has(arg0: $ModelProperty<never>): boolean;
        derive(): $ModelData$Builder;
        static EMPTY: $ModelData;
        get properties(): $Set<$ModelProperty<never>>;
    }
    export class $ModelData$Builder {
        "with"<T>(arg0: $ModelProperty<T>, arg1: T): $ModelData$Builder;
        build(): $ModelData;
    }
    export class $ModelProperty<T> implements $Predicate<T> {
        test(arg0: T): boolean;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor();
        constructor(arg0: $Predicate_<T>);
    }
}
