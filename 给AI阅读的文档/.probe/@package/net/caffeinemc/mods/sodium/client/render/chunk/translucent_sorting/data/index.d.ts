import { $IntConsumer_, $IntConsumer } from "@package/java/util/function";
import { $SectionPos } from "@package/net/minecraft/core";
import { $TQuad } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $UpdatedQuadsList } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree";
import { $SortType_, $TranslucentGeometryCollector, $SortType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $IntBuffer } from "@package/java/nio";
import { $Vector3dc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data" {
    export class $TranslucentData {
        prepareTrigger(arg0: boolean): void;
        getSortType(): $SortType;
        getUpdatedQuads(): $UpdatedQuadsList;
        meshesWereModified(): boolean;
        oldDataMatches(arg0: $TranslucentGeometryCollector, arg1: $SortType_, arg2: $TQuad[]): boolean;
        static quadCountToVertexCount(arg0: number): number;
        static quadCountToIndexBytes(arg0: number): number;
        static vertexCountToQuadCount(arg0: number): number;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number): void;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number[]): void;
        static VERTICES_PER_QUAD: number;
        static BYTES_PER_QUAD: number;
        static BYTES_PER_INDEX: number;
        static INDICES_PER_QUAD: number;
        sectionPos: $SectionPos;
        get sortType(): $SortType;
        get updatedQuads(): $UpdatedQuadsList;
    }
    export class $CombinedCameraPos {
    }
    export interface $CombinedCameraPos {
        getAbsoluteCameraPos(): $Vector3dc;
        getRelativeCameraPos(): $Vector3fc;
        get absoluteCameraPos(): $Vector3dc;
        get relativeCameraPos(): $Vector3fc;
    }
    export class $DynamicSorter extends $PresentSorter {
        getResultSize(): number;
        getQuadCount(): number;
        get resultSize(): number;
        get quadCount(): number;
    }
    export class $PresentSorter implements $Sorter {
        destroy(): void;
        getIndexBuffer(): $NativeBuffer;
        getIntBuffer(): $IntBuffer;
        constructor();
        get indexBuffer(): $NativeBuffer;
        get intBuffer(): $IntBuffer;
    }
    export class $DynamicTopoData$DynamicTopoSorter extends $DynamicSorter implements $IntConsumer {
        accept(arg0: number): void;
        andThen(arg0: $IntConsumer_): $IntConsumer;
    }
    export class $Sorter {
    }
    export interface $Sorter extends $PresentSortData {
        destroy(): void;
        writeIndexBuffer(arg0: $CombinedCameraPos, arg1: boolean): void;
    }
}
