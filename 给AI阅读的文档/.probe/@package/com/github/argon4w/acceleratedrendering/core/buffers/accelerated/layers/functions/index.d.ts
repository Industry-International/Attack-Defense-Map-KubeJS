import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/functions" {
    export class $ILayerFunction {
    }
    export interface $ILayerFunction {
        reset(): void;
        addBefore(arg0: $Runnable_): void;
        addAfter(arg0: $Runnable_): void;
        runBefore(): void;
        runAfter(): void;
    }
}
