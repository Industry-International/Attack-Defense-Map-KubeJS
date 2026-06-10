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
        getColor(arg0: number): number;
        getLight(arg0: number): number;
        getShouldCull(arg0: number): number;
        getMeshCount(): number;
        getOverlay(arg0: number): number;
        getSharing(arg0: number): number;
        get meshCount(): number;
    }
    export class $MeshUploaderPool$MeshUploader implements $LongSupplier {
        reset(): void;
        "delete"(): void;
        getAsLong(): number;
        handler$cha000$acceleratedrendering$uploadIrisData(arg0: $CallbackInfo, arg1: number, arg2: number): void;
        upload(): void;
        getServerMesh(): $ServerMesh;
        getMeshInfos(): $IMeshInfoCache;
        bindBuffers(): void;
        setServerMesh(arg0: $ServerMesh_): void;
        addUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getUploadingOverride(): $IUploadingShaderProgramOverride;
        setUploadingOverride(arg0: $IUploadingShaderProgramOverride): void;
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
