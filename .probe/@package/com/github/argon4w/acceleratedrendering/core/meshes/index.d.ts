import { $IServerBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers";
import { $Record } from "@package/java/lang";
import { $IAcceleratedVertexConsumer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";

declare module "@package/com/github/argon4w/acceleratedrendering/core/meshes" {
    export class $IMesh {
    }
    export interface $IMesh {
        write(arg0: $IAcceleratedVertexConsumer, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IMesh}.
     */
    export type $IMesh_ = ((arg0: $IAcceleratedVertexConsumer, arg1: number, arg2: number, arg3: number) => void);
    export class $ServerMesh extends $Record implements $IMesh {
        size(): number;
        offset(): number;
        write(arg0: $IAcceleratedVertexConsumer, arg1: number, arg2: number, arg3: number): void;
        forceDense(): boolean;
        meshBuffer(): $IServerBuffer;
        constructor(size: number, offset: number, forceDense: boolean, meshBuffer: $IServerBuffer);
    }
}
