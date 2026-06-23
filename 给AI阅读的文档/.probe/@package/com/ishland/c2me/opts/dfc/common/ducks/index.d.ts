import { $ArrayCache } from "@package/com/ishland/c2me/opts/dfc/common/util";
import { $NoiseRouter_, $DensityFunction, $DensityFunction_, $NoiseRouter } from "@package/net/minecraft/world/level/levelgen";
import { $EvalType_ } from "@package/com/ishland/c2me/opts/dfc/common/ast";

declare module "@package/com/ishland/c2me/opts/dfc/common/ducks" {
    export class $IFastCacheLike {
        static CACHE_MISS_NAN_BITS: number;
    }
    export interface $IFastCacheLike extends $DensityFunction {
        c2me$getCached(arg0: number, arg1: number, arg2: number, arg3: $EvalType_): number;
        c2me$getCached(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: $EvalType_): boolean;
        c2me$isActualCache(): boolean;
        c2me$withDelegate(arg0: $DensityFunction_): $DensityFunction;
        c2me$getDelegate(): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(arg0: number, arg1: number, arg2: number, arg3: $EvalType_, arg4: number): void;
        c2me$cache(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: $EvalType_): void;
    }
    export class $IPreloadedCoordinates {
    }
    export interface $IPreloadedCoordinates {
        c2me$getYArray(): number[];
        c2me$getZArray(): number[];
        c2me$getXArray(): number[];
    }
    export class $IArrayCacheCapable {
    }
    export interface $IArrayCacheCapable {
        c2me$getArrayCache(): $ArrayCache;
    }
    /**
     * Values that may be interpreted as {@link $IArrayCacheCapable}.
     */
    export type $IArrayCacheCapable_ = (() => $ArrayCache);
    export class $NoiseRouterExtension {
    }
    export interface $NoiseRouterExtension {
        c2me$setOriginalNoiseRouter(arg0: $NoiseRouter_): void;
        c2me$getOriginalNoiseRouter(): $NoiseRouter;
        c2me$setFinalFinalDensity(arg0: $DensityFunction_): void;
        c2me$getFinalFinalDensity(): $DensityFunction;
    }
    export class $ICoordinatesFilling {
    }
    export interface $ICoordinatesFilling {
        c2me$fillCoordinates(arg0: number[], arg1: number[], arg2: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $ICoordinatesFilling}.
     */
    export type $ICoordinatesFilling_ = ((arg0: number[], arg1: number[], arg2: number[]) => void);
}
