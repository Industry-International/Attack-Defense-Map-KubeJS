import { $Closeable } from "@package/java/io";
import { $RenderRegionCache } from "@package/net/minecraft/client/renderer/chunk";
import { $PrioritizeChunkUpdates_, $Camera } from "@package/net/minecraft/client";
import { $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Matrix4f, $Vector3d } from "@package/org/joml";
export * as sodium from "@package/dev/ryanhcode/sable/sublevel/render/sodium";

declare module "@package/dev/ryanhcode/sable/sublevel/render" {
    export class $SubLevelRenderData {
    }
    export interface $SubLevelRenderData extends $Closeable {
        close(): void;
        setDirty(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getSubLevel(): $ClientSubLevel;
        compileSections(arg0: $PrioritizeChunkUpdates_, arg1: $RenderRegionCache, arg2: $Camera): void;
        isSectionCompiled(arg0: number, arg1: number, arg2: number): boolean;
        getTransformation(arg0: number, arg1: number, arg2: number, arg3: $Matrix4f): $Matrix4f;
        getTransformation(arg0: number, arg1: number, arg2: number): $Matrix4f;
        rebuild(): void;
        getChunkOffset(arg0: $Vector3d): $Vector3d;
        getChunkOffset(): $Vector3d;
        get subLevel(): $ClientSubLevel;
    }
}
