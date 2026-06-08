import { $LongFunction_ } from "@package/java/util/function";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";

declare module "@package/com/moulberry/axiom/collections" {
    export class $PositionConsumer<T> {
    }
    export interface $PositionConsumer<T> {
        accept(arg0: number, arg1: number, arg2: number, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $PositionConsumer}.
     */
    export type $PositionConsumer_<T> = ((arg0: number, arg1: number, arg2: number, arg3: T) => void);
    export class $Position2ObjectMap<T> {
        getOrCreate(x: number, y: number, z: number): T;
        get(x: number, y: number, z: number): T;
        put(x: number, y: number, z: number, v: T): void;
        clear(): void;
        copy(): $Position2ObjectMap<T>;
        forEachEntry(consumer: $PositionConsumer_<T>): void;
        forEachChunk(consumer: $PositionConsumer_<T[]>): void;
        removeChunk(pos: number): T[];
        removeChunk(xC: number, yC: number, zC: number): T[];
        getOrCreateChunk(xC: number, yC: number, zC: number): T[];
        getOrCreateChunk(pos: number): T[];
        chunkKeySet(): $LongSet;
        calculateChunksChanged(other: $Position2ObjectMap<T>): $LongSet;
        mergeAllFrom(other: $Position2ObjectMap<T>, keys: $LongSet): void;
        getAndPut(x: number, y: number, z: number, v: T): T;
        putChunk(pos: number, array: T[]): void;
        putChunk(xC: number, yC: number, zC: number, array: T[]): void;
        getChunk(xC: number, yC: number, zC: number): T[];
        getChunk(pos: number): T[];
        constructor(defaultChunkSupplier: $LongFunction_<T[]>);
    }
}
