import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $BlockRenderCache } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $BuiltSectionMeshParts, $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $Map_, $Map } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";
import { $Sorter, $TranslucentData, $DynamicTopoData$DynamicTopoSorter, $SortData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
export * as tasks from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
export * as executor from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
export * as pipeline from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile" {
    export class $ChunkSortOutput extends $BuilderTaskOutput implements $SortData {
        getIndexBuffer(): $NativeBuffer;
        getTopoSorter(): $DynamicTopoData$DynamicTopoSorter;
        isReusingUploadedIndexData(): boolean;
        copyResultFrom(arg0: $Sorter): void;
        markAsReusingUploadedData(): void;
        getIntBuffer(): $IntBuffer;
        submitTime: number;
        render: $RenderSection;
        constructor(arg0: $RenderSection, arg1: number);
        constructor(arg0: $RenderSection, arg1: number, arg2: $Sorter);
        get indexBuffer(): $NativeBuffer;
        get topoSorter(): $DynamicTopoData$DynamicTopoSorter;
        get reusingUploadedIndexData(): boolean;
        get intBuffer(): $IntBuffer;
    }
    export class $BuilderTaskOutput {
        destroy(): void;
        submitTime: number;
        render: $RenderSection;
        constructor(arg0: $RenderSection, arg1: number);
    }
    export class $ChunkBuildContext {
        cleanup(): void;
        cache: $BlockRenderCache;
        buffers: $ChunkBuildBuffers;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
    }
    export class $ChunkBuildOutput extends $ChunkSortOutput {
        getMesh(arg0: $TerrainRenderPass): $BuiltSectionMeshParts;
        submitTime: number;
        translucentData: $TranslucentData;
        render: $RenderSection;
        meshes: $Map<$TerrainRenderPass, $BuiltSectionMeshParts>;
        info: $BuiltSectionInfo;
        constructor(arg0: $RenderSection, arg1: number, arg2: $TranslucentData, arg3: $BuiltSectionInfo, arg4: $Map_<$TerrainRenderPass, $BuiltSectionMeshParts>);
    }
}
