import { $ViewArea } from "@package/net/minecraft/client/renderer";
import { $Future } from "@package/java/util/concurrent";

declare module "@package/com/replaymod/render/mixin" {
    export class $ChunkRenderingDataPreparerAccessor {
    }
    export interface $ChunkRenderingDataPreparerAccessor {
        fullUpdateFuture(): $Future<never>;
        builtChunkStorage(): $ViewArea;
        shouldUpdate(): boolean;
    }
    export class $WorldRendererAccessor {
    }
    export interface $WorldRendererAccessor {
    }
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        setRenderHand(arg0: boolean): void;
        getRenderHand(): boolean;
    }
    export class $MainWindowAccessor {
    }
    export interface $MainWindowAccessor {
        invokeOnFramebufferResize(arg0: number, arg1: number, arg2: number): void;
        setFramebufferHeight(arg0: number): void;
        getFramebufferWidth(): number;
        setFramebufferWidth(arg0: number): void;
        getFramebufferHeight(): number;
    }
}
