import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Runnable_, $Number, $Runnable } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/math/interpolate" {
    export class $Interpolator {
        reset(): void;
        update(arg0: number): void;
        getTime(): number;
        getStartTime(): number;
        isFinished(): boolean;
        getNormalizedTime(): number;
        duration: number;
        ease: $IEase;
        onFinished: $Runnable;
        range: number;
        interpolate: $Consumer<$Number>;
        from: number;
        to: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $IEase_, arg4: $Consumer_<$Number>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $IEase_, arg4: $Consumer_<$Number>, arg5: $Runnable_);
        get time(): number;
        get startTime(): number;
        get finished(): boolean;
        get normalizedTime(): number;
    }
    export class $IEase {
        static CODEC: $Codec<$IEase>;
    }
    export interface $IEase {
        interpolate(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IEase}.
     */
    export type $IEase_ = ((arg0: number) => number);
}
