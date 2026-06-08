import { $ShaderInstance, $PostPass, $PostChain } from "@package/net/minecraft/client/renderer";
import { $List_, $Map, $List } from "@package/java/util";

declare module "@package/foundry/veil/mixin/debug/accessor" {
    export class $DebugPostChainAccessor {
    }
    export interface $DebugPostChainAccessor {
        getPasses(): $List<$PostPass>;
        get passes(): $List<$PostPass>;
    }
    /**
     * Values that may be interpreted as {@link $DebugPostChainAccessor}.
     */
    export type $DebugPostChainAccessor_ = (() => $List_<$PostPass>);
    export class $DebugLevelRendererAccessor {
    }
    export interface $DebugLevelRendererAccessor {
        getTransparencyChain(): $PostChain;
        getEntityEffect(): $PostChain;
        get transparencyChain(): $PostChain;
        get entityEffect(): $PostChain;
    }
    export class $DebugGameRendererAccessor {
    }
    export interface $DebugGameRendererAccessor {
        getPostEffect(): $PostChain;
        getBlitShader(): $ShaderInstance;
        getShaders(): $Map<string, $ShaderInstance>;
        get postEffect(): $PostChain;
        get blitShader(): $ShaderInstance;
        get shaders(): $Map<string, $ShaderInstance>;
    }
}
