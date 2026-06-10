
declare module "@package/com/replaymod/replaystudio/util" {
    export class $IOSupplier<T> {
    }
    export interface $IOSupplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $IOSupplier}.
     */
    export type $IOSupplier_<T> = (() => T);
    export class $IOConsumer<T> {
    }
    export interface $IOConsumer<T> {
        consume(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $IOConsumer}.
     */
    export type $IOConsumer_<T> = ((arg0: T) => void);
    export class $IPosition {
        getY(): number;
        getX(): number;
        getZ(): number;
        static NULL: $IPosition;
        constructor(x: number, y: number, z: number);
        get y(): number;
        get x(): number;
        get z(): number;
    }
    export class $IGlobalPosition {
        getDimension(): string;
        getPosition(): $IPosition;
        constructor(dimension: string, position: $IPosition);
        get dimension(): string;
        get position(): $IPosition;
    }
}
