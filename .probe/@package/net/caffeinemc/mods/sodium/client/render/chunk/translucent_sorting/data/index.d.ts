import { $IntConsumer, $IntConsumer_ } from "@package/java/util/function";
import { $SectionPos } from "@package/net/minecraft/core";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $SortType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $IntBuffer } from "@package/java/nio";
import { $Vector3dc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data" {
    export class $TranslucentData {
        prepareTrigger(arg0: boolean): void;
        getSortType(): $SortType;
        static quadCountToIndexBytes(arg0: number): number;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number[]): void;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number): void;
        static vertexCountToQuadCount(arg0: number): number;
        static indexBytesToQuadCount(arg0: number): number;
        static VERTICES_PER_QUAD: number;
        static BYTES_PER_QUAD: number;
        static BYTES_PER_INDEX: number;
        static INDICES_PER_QUAD: number;
        sectionPos: $SectionPos;
        get sortType(): $SortType;
    }
    export class $PresentSortData {
    }
    export interface $PresentSortData {
        getIntBuffer(): $IntBuffer;
        getIndexBuffer(): $NativeBuffer;
        get intBuffer(): $IntBuffer;
        get indexBuffer(): $NativeBuffer;
    }
    /**
     * Values that may be interpreted as {@link $PresentSortData}.
     */
    export type $PresentSortData_ = (() => $NativeBuffer);
    export class $CombinedCameraPos {
    }
    export interface $CombinedCameraPos {
        getAbsoluteCameraPos(): $Vector3dc;
        getRelativeCameraPos(): $Vector3fc;
        get absoluteCameraPos(): $Vector3dc;
        get relativeCameraPos(): $Vector3fc;
    }
    export class $SortData {
    }
    export interface $SortData extends $PresentSortData {
        isReusingUploadedIndexData(): boolean;
        get reusingUploadedIndexData(): boolean;
    }
    export class $DynamicTopoData$DynamicTopoSorter extends $DynamicSorter implements $IntConsumer {
        accept(arg0: number): void;
        andThen(arg0: $IntConsumer_): $IntConsumer;
    }
    export class $Sorter implements $PresentSortData {
        getIndexBuffer(): $NativeBuffer;
        writeIndexBuffer(arg0: $CombinedCameraPos, arg1: boolean): void;
        getIntBuffer(): $IntBuffer;
        constructor();
        get indexBuffer(): $NativeBuffer;
        get intBuffer(): $IntBuffer;
    }
}
