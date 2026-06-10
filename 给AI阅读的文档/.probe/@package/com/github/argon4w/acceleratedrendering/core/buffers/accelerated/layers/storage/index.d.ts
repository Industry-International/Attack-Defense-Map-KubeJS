import { $LayerDrawType_ } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers";
import { $Iterable } from "@package/java/lang";
import { $DrawContextPool$DrawContext } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/storage" {
    export class $ILayerContexts {
    }
    export interface $ILayerContexts extends $Iterable<$DrawContextPool$DrawContext> {
        reset(): void;
        isEmpty(): boolean;
        add(arg0: $DrawContextPool$DrawContext): void;
        prepare(): void;
        get empty(): boolean;
    }
    export class $ILayerStorage {
    }
    export interface $ILayerStorage {
        reset(): void;
        get(arg0: $LayerDrawType_): $ILayerContexts;
    }
}
