import { $LongSupplier } from "@package/java/util/function";
import { $IMemoryInterface } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ServerMesh_, $ServerMesh } from "@package/com/github/argon4w/acceleratedrendering/core/meshes";
import { $IUploadingShaderProgramOverride } from "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes" {
    export class $IMeshInfoCache {
    }
    export interface $IMeshInfoCache {
        reset(): void;
        setup(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        "delete"(): void;
        getSharing(arg0: number): number;
        getColor(arg0: number): number;
        getMeshCount(): number;
        getShouldCull(arg0: number): number;
        getOverlay(arg0: number): number;
        getLight(arg0: number): number;
        get meshCount(): number;
    }
    export class $MeshUploaderPool$MeshUploader implements $LongSupplier {
        addUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$cha000$acceleratedrendering$uploadIrisData(arg0: $CallbackInfo, arg1: number, arg2: number): void;
        reset(): void;
        "delete"(): void;
        getAsLong(): number;
        upload(): void;
        getUploadingOverride(): $IUploadingShaderProgramOverride;
        setUploadingOverride(arg0: $IUploadingShaderProgramOverride): void;
        bindBuffers(): void;
        setServerMesh(arg0: $ServerMesh_): void;
        getMeshInfos(): $IMeshInfoCache;
        getServerMesh(): $ServerMesh;
        meshInfoLight: $IMemoryInterface;
        meshInfoSharing: $IMemoryInterface;
        meshInfoColor: $IMemoryInterface;
        meshInfoOverlay: $IMemoryInterface;
        static MESH_INFO_BUFFER_INDEX: number;
        meshInfoNoCull: $IMemoryInterface;
        constructor();
        get asLong(): number;
        get meshInfos(): $IMeshInfoCache;
    }
}
