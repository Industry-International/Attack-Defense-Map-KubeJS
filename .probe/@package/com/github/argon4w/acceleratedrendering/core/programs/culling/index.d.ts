import { $UnaryOperator_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Event } from "@package/net/neoforged/bus/api";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs/culling" {
    export class $ICullingProgramSelector {
    }
    export interface $ICullingProgramSelector {
        select(arg0: $RenderType): $ICullingProgramDispatcher;
    }
    /**
     * Values that may be interpreted as {@link $ICullingProgramSelector}.
     */
    export type $ICullingProgramSelector_ = ((arg0: $RenderType) => $ICullingProgramDispatcher);
    export class $ICullingProgramDispatcher {
    }
    export interface $ICullingProgramDispatcher {
        shouldCull(): boolean;
        dispatch(arg0: $AcceleratedBufferBuilder): number;
    }
    export class $LoadCullingProgramSelectorEvent extends $Event implements $IModBusEvent {
        loadFor(arg0: $VertexFormat, arg1: $UnaryOperator_<$ICullingProgramSelector>): void;
        getSelector(): $ICullingProgramSelector;
        constructor(arg0: $VertexFormat);
        get selector(): $ICullingProgramSelector;
    }
}
