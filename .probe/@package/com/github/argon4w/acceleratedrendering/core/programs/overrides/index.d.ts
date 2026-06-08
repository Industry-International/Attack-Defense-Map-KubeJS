import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Event } from "@package/net/neoforged/bus/api";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides" {
    export class $IShaderProgramOverrides {
    }
    export interface $IShaderProgramOverrides {
        getUploadingOverrides(): $Map<$RenderType, $IUploadingShaderProgramOverride>;
        getTransformOverrides(): $Map<$RenderType, $ITransformShaderProgramOverride>;
        get uploadingOverrides(): $Map<$RenderType, $IUploadingShaderProgramOverride>;
        get transformOverrides(): $Map<$RenderType, $ITransformShaderProgramOverride>;
    }
    export class $ITransformShaderProgramOverride {
    }
    export interface $ITransformShaderProgramOverride extends $IShaderProgramOverride {
        dispatchTransform(arg0: number, arg1: number, arg2: number): number;
        getVaryingSize(): number;
        uploadVarying(arg0: number, arg1: number): void;
        get varyingSize(): number;
    }
    export class $IUploadingShaderProgramOverride {
    }
    export interface $IUploadingShaderProgramOverride extends $IShaderProgramOverride {
        dispatchUploading(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        uploadMeshInfo(arg0: number, arg1: number): void;
        getMeshInfoSize(): number;
        get meshInfoSize(): number;
    }
    export class $IShaderProgramOverride {
    }
    export interface $IShaderProgramOverride {
        useProgram(): void;
        setupProgram(): void;
    }
    export class $LoadShaderProgramOverridesEvent extends $Event implements $IModBusEvent {
        getOverrides(arg0: $ITransformShaderProgramOverride, arg1: $IUploadingShaderProgramOverride): $IShaderProgramOverrides;
        loadFor(arg0: $VertexFormat, arg1: $RenderType, arg2: $IShaderProgramOverride): void;
        constructor(arg0: $VertexFormat);
    }
}
