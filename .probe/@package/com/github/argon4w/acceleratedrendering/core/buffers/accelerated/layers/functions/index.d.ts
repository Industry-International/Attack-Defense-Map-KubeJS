import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/functions" {
    export class $ILayerFunction {
    }
    export interface $ILayerFunction {
        runBefore(): void;
        runAfter(): void;
        reset(): void;
        addAfter(arg0: $Runnable_): void;
        addBefore(arg0: $Runnable_): void;
    }
}
