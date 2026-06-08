import { $MapTile } from "@package/xaero/map/region";
import { $TextureUpload$Normal, $TextureUpload$BranchUpdate, $TextureUpload$BranchDownload, $TextureUpload, $TextureUpload$SubsequentNormal, $TextureUpload$Compressed } from "@package/xaero/map/graphics";
import { $BranchTextureRenderer } from "@package/xaero/map/region/texture";
import { $Object } from "@package/java/lang";
export * as buffer from "@package/xaero/map/pool/buffer";

declare module "@package/xaero/map/pool" {
    export class $TextureUploadPool$BranchDownload extends $TextureUploadPool<$TextureUpload$BranchDownload> {
        get(arg0: number, arg1: number, arg2: number, arg3: number): $TextureUpload$BranchDownload;
        constructor(arg0: number);
    }
    export class $PoolUnit {
    }
    export interface $PoolUnit {
        create(...arg0: $Object[]): void;
    }
    /**
     * Values that may be interpreted as {@link $PoolUnit}.
     */
    export type $PoolUnit_ = ((arg0: $Object[]) => void);
    export class $TextureUploadPool<T extends $TextureUpload> extends $MapPool<T> {
        constructor(arg0: number);
    }
    export class $TextureUploadPool$SubsequentNormal extends $TextureUploadPool<$TextureUpload$SubsequentNormal> {
        get(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): $TextureUpload$SubsequentNormal;
        constructor(arg0: number);
    }
    export class $TextureUploadPool$Normal extends $TextureUploadPool<$TextureUpload$Normal> {
        get(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): $TextureUpload$Normal;
        constructor(arg0: number);
    }
    export class $MapPool<T extends $PoolUnit> {
        size(): number;
        addToPool(arg0: T): boolean;
        constructor(arg0: number);
    }
    export class $TextureUploadPool$BranchUpdate extends $TextureUploadPool<$TextureUpload$BranchUpdate> {
        get(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: $BranchTextureRenderer, arg16: number, arg17: number): $TextureUpload$BranchUpdate;
        constructor(arg0: number, arg1: boolean);
    }
    export class $TextureUploadPool$Compressed extends $TextureUploadPool<$TextureUpload$Compressed> {
        get(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): $TextureUpload$Compressed;
        constructor(arg0: number);
    }
    export class $MapTilePool extends $MapPool<$MapTile> {
        get(arg0: string, arg1: number, arg2: number): $MapTile;
        constructor();
    }
}
