import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $BuilderTaskOutput, $ChunkBuildOutput, $ChunkBuildContext, $ChunkSortOutput } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $ChunkRenderContext } from "@package/net/caffeinemc/mods/sodium/client/world/cloned";
import { $Sorter, $CombinedCameraPos } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $Vector3dc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks" {
    export class $ChunkBuilderSortingTask extends $ChunkBuilderTask<$ChunkSortOutput> {
        static createTask(arg0: $RenderSection, arg1: number, arg2: $Vector3dc): $ChunkBuilderSortingTask;
        constructor(arg0: $RenderSection, arg1: number, arg2: $Vector3dc, arg3: $Sorter);
    }
    export class $ChunkBuilderMeshingTask extends $ChunkBuilderTask<$ChunkBuildOutput> {
        constructor(arg0: $RenderSection, arg1: number, arg2: $Vector3dc, arg3: $ChunkRenderContext);
    }
    export class $ChunkBuilderTask<OUTPUT extends $BuilderTaskOutput> implements $CombinedCameraPos {
        execute(arg0: $ChunkBuildContext, arg1: $CancellationToken): OUTPUT;
        getRelativeCameraPos(): $Vector3fc;
        getAbsoluteCameraPos(): $Vector3dc;
        getEffort(): number;
        constructor(arg0: $RenderSection, arg1: number, arg2: $Vector3dc);
        get relativeCameraPos(): $Vector3fc;
        get absoluteCameraPos(): $Vector3dc;
        get effort(): number;
    }
}
