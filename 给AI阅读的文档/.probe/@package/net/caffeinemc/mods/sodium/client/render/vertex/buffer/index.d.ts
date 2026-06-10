import { $VertexBufferWriter } from "@package/net/caffeinemc/mods/sodium/api/vertex/buffer";

declare module "@package/net/caffeinemc/mods/sodium/client/render/vertex/buffer" {
    export class $BufferBuilderExtension {
    }
    export interface $BufferBuilderExtension extends $VertexBufferWriter {
        sodium$duplicateVertex(): void;
    }
}
