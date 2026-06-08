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
        get(x: number, y: number, z: number): T;
        put(x: number, y: number, z: number, v: T): void;
        clear(): void;
        copy(): $Position2ObjectMap<T>;
        forEachEntry(consumer: $PositionConsumer_<T>): void;
        getOrCreate(x: number, y: number, z: number): T;
        getChunk(xC: number, yC: number, zC: number): T[];
        getChunk(pos: number): T[];
        getAndPut(x: number, y: number, z: number, v: T): T;
        putChunk(pos: number, array: T[]): void;
        putChunk(xC: number, yC: number, zC: number, array: T[]): void;
        forEachChunk(consumer: $PositionConsumer_<T[]>): void;
        removeChunk(xC: number, yC: number, zC: number): T[];
        removeChunk(pos: number): T[];
        chunkKeySet(): $LongSet;
        getOrCreateChunk(pos: number): T[];
        getOrCreateChunk(xC: number, yC: number, zC: number): T[];
        mergeAllFrom(other: $Position2ObjectMap<T>, keys: $LongSet): void;
        calculateChunksChanged(other: $Position2ObjectMap<T>): $LongSet;
        constructor(defaultChunkSupplier: $LongFunction_<T[]>);
    }
}
