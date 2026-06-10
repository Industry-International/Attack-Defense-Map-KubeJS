import { $ILayerColors, $ILayerColors_ } from "@package/com/github/argon4w/acceleratedrendering/features/items/colors";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/github/argon4w/acceleratedrendering/features/items/contexts" {
    export class $AcceleratedModelRenderContext extends $Record {
        randomSource(): $RandomSource;
        layerColors(): $ILayerColors;
        constructor(randomSource: $RandomSource, layerColors: $ILayerColors_);
    }
}
