import { $IMemoryInterface } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";

declare module "@package/com/github/argon4w/acceleratedrendering/compat/iris/interfaces" {
    export class $IIrisAcceleratedBufferBuilder {
    }
    export interface $IIrisAcceleratedBufferBuilder {
        getEntityOffset(): $IMemoryInterface;
        getEntityIdOffset(): $IMemoryInterface;
        get entityOffset(): $IMemoryInterface;
        get entityIdOffset(): $IMemoryInterface;
    }
}
