import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/foundry/veil/mixin/dynamicbuffer/accessor" {
    export class $DynamicBufferProgramAccessor {
    }
    export interface $DynamicBufferProgramAccessor {
        getId(): number;
        setId(arg0: number): void;
    }
    export class $DynamicBufferGameRendererAccessor {
    }
    export interface $DynamicBufferGameRendererAccessor {
        getShaders(): $Map<string, $ShaderInstance>;
        get shaders(): $Map<string, $ShaderInstance>;
    }
    /**
     * Values that may be interpreted as {@link $DynamicBufferGameRendererAccessor}.
     */
    export type $DynamicBufferGameRendererAccessor_ = (() => $Map_<string, $ShaderInstance>);
}
