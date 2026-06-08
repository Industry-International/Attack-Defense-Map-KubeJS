import { $Supplier_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
import { $FlexDirection_, $TaffyDimension, $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";

declare module "@package/dev/vfyjxf/taffy/geometry" {
    export class $TaffyRect<T> {
        add(arg0: $TaffyRect<number>): $TaffyRect<number>;
        map<R>(arg0: $Function_<T, R>): $TaffyRect<R>;
        static of<T>(arg0: T, arg1: T, arg2: T, arg3: T): $TaffyRect<T>;
        copy(): $TaffyRect<T>;
        static zero(): $TaffyRect<number>;
        static all<T>(arg0: T): $TaffyRect<T>;
        getLeft(): T;
        getRight(): T;
        static auto<T>(arg0: $Supplier_<T>): $TaffyRect<T>;
        static hv<T>(arg0: T, arg1: T): $TaffyRect<T>;
        getBottom(): T;
        getTop(): T;
        resolveOrZero(arg0: number): $TaffyRect<number>;
        resolveOrZero(arg0: number): $TaffyRect<number>;
        resolveOrZero(arg0: $FloatSize): $TaffyRect<number>;
        resolveOrZero(arg0: $TaffySize<number>): $TaffyRect<number>;
        verticalAxisSum(): number;
        gridAxisSum(arg0: $AbsoluteAxis_): number;
        static fromPercent(arg0: number): $TaffyRect<$TaffyDimension>;
        mainAxisSum(arg0: $FlexDirection_): number;
        verticalComponents(): $TaffyLine<T>;
        crossAxisSum(arg0: $FlexDirection_): number;
        horizontalAxisSum(): number;
        static fromLength(arg0: number): $TaffyRect<$TaffyDimension>;
        static ltrb<T>(arg0: T, arg1: T, arg2: T, arg3: T): $TaffyRect<T>;
        zipSize<U, R>(arg0: $TaffySize<U>, arg1: $BiFunction_<T, U, R>): $TaffyRect<R>;
        mainEnd(arg0: $FlexDirection_): T;
        crossStart(arg0: $FlexDirection_): T;
        sumAxes(): $TaffySize<number>;
        mainStart(arg0: $FlexDirection_): T;
        crossEnd(arg0: $FlexDirection_): T;
        horizontalComponents(): $TaffyLine<T>;
        static ZERO: $TaffyRect<number>;
        top: T;
        left: T;
        bottom: T;
        right: T;
        constructor(arg0: T, arg1: T, arg2: T, arg3: T);
    }
    export class $TaffyPoint<T> {
        main(arg0: $FlexDirection_): T;
        get(arg0: $AbsoluteAxis_): T;
        map<R>(arg0: $Function_<T, R>): $TaffyPoint<R>;
        set(arg0: $AbsoluteAxis_, arg1: T): void;
        copy(): $TaffyPoint<T>;
        static zero(): $TaffyPoint<number>;
        static all<T>(arg0: T): $TaffyPoint<T>;
        static none(): $TaffyPoint<number>;
        transpose(): $TaffyPoint<T>;
        zipWith<U, R>(arg0: $TaffyPoint<U>, arg1: $BiFunction_<T, U, R>): $TaffyPoint<R>;
        setCross(arg0: $FlexDirection_, arg1: T): void;
        setMain(arg0: $FlexDirection_, arg1: T): void;
        cross(arg0: $FlexDirection_): T;
        static fromMainCross<T>(arg0: $FlexDirection_, arg1: T, arg2: T): $TaffyPoint<T>;
        static ZERO: $TaffyPoint<number>;
        x: T;
        y: T;
        constructor(arg0: T, arg1: T);
    }
    export class $TaffySize<T> {
        main(arg0: $FlexDirection_): T;
        get(arg0: $AbsoluteAxis_): T;
        map<R>(arg0: $Function_<T, R>): $TaffySize<R>;
        static of<T>(arg0: T, arg1: T): $TaffySize<T>;
        set(arg0: $AbsoluteAxis_, arg1: T): void;
        copy(): $TaffySize<T>;
        static zero(): $TaffySize<number>;
        static all<T>(arg0: T): $TaffySize<T>;
        getWidth(): T;
        static minContent(): $TaffySize<$AvailableSpace>;
        static maxContent(): $TaffySize<$AvailableSpace>;
        static none<T>(): $TaffySize<T>;
        static auto<T>(arg0: $Supplier_<T>): $TaffySize<T>;
        getHeight(): T;
        zipWith<U, R>(arg0: $TaffySize<U>, arg1: $BiFunction_<T, U, R>): $TaffySize<R>;
        setCross(arg0: $FlexDirection_, arg1: T): void;
        setMain(arg0: $FlexDirection_, arg1: T): void;
        static fromCross<T>(arg0: $FlexDirection_, arg1: T): $TaffySize<T>;
        isBoth(): boolean;
        cross(arg0: $FlexDirection_): T;
        isNone(): boolean;
        maybeResolve(arg0: $FloatSize): $FloatSize;
        static fromMainCross<T>(arg0: $FlexDirection_, arg1: T, arg2: T): $TaffySize<T>;
        static ZERO: $TaffySize<number>;
        width: T;
        height: T;
        constructor(arg0: T, arg1: T);
        get both(): boolean;
    }
    export class $FloatSize {
        main(arg0: $FlexDirection_): number;
        get(arg0: $AbsoluteAxis_): number;
        static of(arg0: number, arg1: number): $FloatSize;
        set(arg0: $AbsoluteAxis_, arg1: number): void;
        copy(): $FloatSize;
        static zero(): $FloatSize;
        static all(arg0: number): $FloatSize;
        isZero(): boolean;
        getWidth(): number;
        static minContent(): $TaffySize<$AvailableSpace>;
        static maxContent(): $TaffySize<$AvailableSpace>;
        static none(): $FloatSize;
        static auto(arg0: $FloatSupplier_): $FloatSize;
        getHeight(): number;
        cross(arg0: $FlexDirection_): number;
        isNone(): boolean;
        static ZERO: $FloatSize;
        width: number;
        static NONE: $FloatSize;
        height: number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number);
    }
    export class $FloatRect {
        add(arg0: $FloatRect): $FloatRect;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $FloatRect;
        copy(): $FloatRect;
        static zero(): $FloatRect;
        static all(arg0: number): $FloatRect;
        getLeft(): number;
        getRight(): number;
        static auto(arg0: $FloatSupplier_): $FloatRect;
        static hv(arg0: number, arg1: number): $FloatRect;
        getBottom(): number;
        getTop(): number;
        verticalAxisSum(): number;
        gridAxisSum(arg0: $AbsoluteAxis_): number;
        static fromPercent(arg0: number): $TaffyRect<$TaffyDimension>;
        mainAxisSum(arg0: $FlexDirection_): number;
        verticalComponents(): $FloatLine;
        crossAxisSum(arg0: $FlexDirection_): number;
        horizontalAxisSum(): number;
        static fromLength(arg0: number): $TaffyRect<$TaffyDimension>;
        static ltrb(arg0: number, arg1: number, arg2: number, arg3: number): $FloatRect;
        mainEnd(arg0: $FlexDirection_): number;
        crossStart(arg0: $FlexDirection_): number;
        sumAxes(): $FloatSize;
        mainStart(arg0: $FlexDirection_): number;
        crossEnd(arg0: $FlexDirection_): number;
        horizontalComponents(): $FloatLine;
        static ZERO: $FloatRect;
        top: number;
        left: number;
        bottom: number;
        right: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $TaffyLine<T> {
        map<R>(arg0: $Function_<T, R>): $TaffyLine<R>;
        copy(): $TaffyLine<T>;
        sum(): number;
        static all<T>(arg0: T): $TaffyLine<T>;
        start: T;
        static TRUE: $TaffyLine<boolean>;
        end: T;
        static FALSE: $TaffyLine<boolean>;
        constructor(arg0: T, arg1: T);
    }
    export class $FloatSupplier {
    }
    export interface $FloatSupplier {
        get(): number;
    }
    /**
     * Values that may be interpreted as {@link $FloatSupplier}.
     */
    export type $FloatSupplier_ = (() => number);
    export class $AbsoluteAxis extends $Enum<$AbsoluteAxis> {
        static values(): $AbsoluteAxis[];
        static valueOf(arg0: string): $AbsoluteAxis;
        other(): $AbsoluteAxis;
        static VERTICAL: $AbsoluteAxis;
        static HORIZONTAL: $AbsoluteAxis;
    }
    /**
     * Values that may be interpreted as {@link $AbsoluteAxis}.
     */
    export type $AbsoluteAxis_ = "horizontal" | "vertical";
    export class $FloatPoint {
        main(arg0: $FlexDirection_): number;
        get(arg0: $AbsoluteAxis_): number;
        set(arg0: $AbsoluteAxis_, arg1: number): void;
        copy(): $FloatPoint;
        static zero(): $FloatPoint;
        static all(arg0: number): $FloatPoint;
        static none(): $FloatPoint;
        transpose(): $FloatPoint;
        setCross(arg0: $FlexDirection_, arg1: number): void;
        setMain(arg0: $FlexDirection_, arg1: number): void;
        cross(arg0: $FlexDirection_): number;
        static fromMainCross(arg0: $FlexDirection_, arg1: number, arg2: number): $FloatPoint;
        static ZERO: $FloatPoint;
        x: number;
        y: number;
        constructor(arg0: number, arg1: number);
    }
    export class $FloatLine {
        copy(): $FloatLine;
        sum(): number;
        static all(arg0: number): $FloatLine;
        start: number;
        end: number;
        constructor(arg0: number, arg1: number);
    }
}
