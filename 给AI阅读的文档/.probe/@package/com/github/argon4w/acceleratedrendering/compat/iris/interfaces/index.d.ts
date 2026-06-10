import { $IMemoryInterface } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";

declare module "@package/com/github/argon4w/acceleratedrendering/compat/iris/interfaces" {
    export class $IIrisAcceleratedBufferBuilder {
    }
    export interface $IIrisAcceleratedBufferBuilder {
        getEntityIdOffset(): $IMemoryInterface;
        getEntityOffset(): $IMemoryInterface;
        get entityIdOffset(): $IMemoryInterface;
        get entityOffset(): $IMemoryInterface;
    }
}
