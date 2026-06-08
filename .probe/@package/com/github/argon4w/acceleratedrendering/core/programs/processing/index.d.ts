import { $UnaryOperator_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $VertexFormat$Mode_, $VertexFormat$Mode, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $IPolygonProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs/processing" {
    export class $IPolygonProcessor {
    }
    export interface $IPolygonProcessor {
        select(arg0: $VertexFormat$Mode_): $IPolygonProgramDispatcher;
    }
    /**
     * Values that may be interpreted as {@link $IPolygonProcessor}.
     */
    export type $IPolygonProcessor_ = ((arg0: $VertexFormat$Mode) => $IPolygonProgramDispatcher);
    export class $LoadPolygonProcessorEvent extends $Event implements $IModBusEvent {
        getProcessor(): $IPolygonProcessor;
        loadFor(arg0: $VertexFormat, arg1: $UnaryOperator_<$IPolygonProcessor>): void;
        constructor(arg0: $VertexFormat);
        get processor(): $IPolygonProcessor;
    }
}
