import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $TextureUploadPool$Compressed, $TextureUploadPool$Normal, $TextureUploadPool$BranchUpdate, $TextureUploadPool$BranchDownload, $TextureUploadPool$SubsequentNormal, $PoolUnit } from "@package/xaero/map/pool";
import { $BranchTextureRenderer } from "@package/xaero/map/region/texture";
import { $Object } from "@package/java/lang";
export * as renderer from "@package/xaero/map/graphics/renderer";

declare module "@package/xaero/map/graphics" {
    export class $TextureUpload$Normal extends $TextureUpload {
        constructor(arg0: number);
        constructor(...arg0: $Object[]);
    }
    export class $TextureUploadBenchmark {
        pre(): void;
        post(arg0: number): void;
        getAverage(arg0: number): number;
        isFinished(arg0: number): boolean;
        isFinished(): boolean;
        getTotalsString(): string;
        constructor(...arg0: number[]);
        get totalsString(): string;
    }
    export class $TextureUpload$Compressed extends $TextureUpload {
        constructor(...arg0: $Object[]);
    }
    export class $TextureUpload$BranchUpdate extends $TextureUpload {
        constructor(arg0: number);
        constructor(...arg0: $Object[]);
    }
    export class $TextureUpload implements $PoolUnit {
        run(): void;
        create(...arg0: $Object[]): void;
        getUploadType(): number;
        constructor();
        get uploadType(): number;
    }
    export class $TextureUploader {
        uploadTextures(): void;
        requestCompressed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): number;
        requestNormal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): number;
        finishNewestRequestImmediately(): void;
        requestUpload(arg0: $TextureUpload): number;
        requestSubsequentNormal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): number;
        requestBranchUpdate(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: $BranchTextureRenderer, arg17: number, arg18: number): number;
        requestBranchDownload(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static BRANCHUPDATE_ALLOCATE: number;
        static BRANCHDOWNLOAD: number;
        static SUBSEQUENT_NORMAL: number;
        static NORMALDOWNLOAD: number;
        static COMPRESSED: number;
        static BRANCHUPDATE: number;
        static NORMAL: number;
        constructor(arg0: $TextureUploadPool$Normal, arg1: $TextureUploadPool$Compressed, arg2: $TextureUploadPool$BranchUpdate, arg3: $TextureUploadPool$BranchUpdate, arg4: $TextureUploadPool$BranchDownload, arg5: $TextureUploadPool$SubsequentNormal, arg6: $TextureUploadBenchmark);
    }
    export class $CustomVertexConsumers {
        getRenderTypeBuffers(): $MultiBufferSource$BufferSource;
        constructor();
        get renderTypeBuffers(): $MultiBufferSource$BufferSource;
    }
    export class $TextureUpload$BranchDownload extends $TextureUpload {
        constructor(arg0: number);
        constructor(...arg0: $Object[]);
    }
    export class $TextureUpload$SubsequentNormal extends $TextureUpload {
        constructor(arg0: number);
        constructor(...arg0: $Object[]);
    }
}
