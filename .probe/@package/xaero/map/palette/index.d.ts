
declare module "@package/xaero/map/palette" {
    export class $FastPalette<T> {
        remove(arg0: number): void;
        get(arg0: number): T;
        append(arg0: T, arg1: number): number;
        replace(arg0: T, arg1: T): boolean;
        replace(arg0: number, arg1: T): boolean;
        add(arg0: T, arg1: number): number;
        add(arg0: T): number;
        count(arg0: number, arg1: boolean): number;
        getCount(arg0: number): number;
        getSize(): number;
        getIndex(arg0: T): number;
        addNull(): void;
        getNonNullCount(): number;
        get size(): number;
        get nonNullCount(): number;
    }
}
