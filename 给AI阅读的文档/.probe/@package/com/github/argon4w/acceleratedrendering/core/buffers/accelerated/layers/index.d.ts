import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Enum, $Record } from "@package/java/lang";
export * as storage from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/storage";
export * as functions from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/functions";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers" {
    export class $LayerKey extends $Record {
        layer(): number;
        renderType(): $RenderType;
        constructor(layer: number, renderType: $RenderType);
    }
    export class $LayerDrawType extends $Enum<$LayerDrawType> {
        static values(): $LayerDrawType[];
        static valueOf(arg0: string): $LayerDrawType;
        static ALL: $LayerDrawType;
        static OPAQUE: $LayerDrawType;
        static TRANSLUCENT: $LayerDrawType;
    }
    /**
     * Values that may be interpreted as {@link $LayerDrawType}.
     */
    export type $LayerDrawType_ = "translucent" | "opaque" | "all";
}
