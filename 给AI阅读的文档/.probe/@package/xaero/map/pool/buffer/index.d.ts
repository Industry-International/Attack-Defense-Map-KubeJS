import { $PoolUnit } from "@package/xaero/map/pool";
import { $Object } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/xaero/map/pool/buffer" {
    export class $PoolTextureDirectBufferUnit implements $PoolUnit {
        reset(): void;
        create(...arg0: $Object[]): void;
        static createBuffer(): $ByteBuffer;
        getDirectBuffer(): $ByteBuffer;
        constructor(...arg0: $Object[]);
        get directBuffer(): $ByteBuffer;
    }
}
