import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $GlVertexAttributeBinding } from "@package/net/caffeinemc/mods/sodium/client/gl/attribute";
import { $GlBufferTarget, $GlBuffer, $GlBufferTarget_ } from "@package/net/caffeinemc/mods/sodium/client/gl/buffer";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/tessellation" {
    export class $TessellationBinding extends $Record {
        target(): $GlBufferTarget;
        buffer(): $GlBuffer;
        static forElementBuffer(arg0: $GlBuffer): $TessellationBinding;
        static forVertexBuffer(arg0: $GlBuffer, arg1: $GlVertexAttributeBinding[]): $TessellationBinding;
        attributeBindings(): $GlVertexAttributeBinding[];
        constructor(target: $GlBufferTarget_, buffer: $GlBuffer, attributeBindings: $GlVertexAttributeBinding[]);
    }
    export class $GlIndexType extends $Enum<$GlIndexType> {
        static values(): $GlIndexType[];
        static valueOf(arg0: string): $GlIndexType;
        getStride(): number;
        getFormatId(): number;
        static UNSIGNED_BYTE: $GlIndexType;
        static UNSIGNED_SHORT: $GlIndexType;
        static UNSIGNED_INT: $GlIndexType;
        get stride(): number;
        get formatId(): number;
    }
    /**
     * Values that may be interpreted as {@link $GlIndexType}.
     */
    export type $GlIndexType_ = "unsigned_byte" | "unsigned_short" | "unsigned_int";
    export class $GlTessellation {
    }
    export interface $GlTessellation {
        "delete"(arg0: $CommandList): void;
        bind(arg0: $CommandList): void;
        unbind(arg0: $CommandList): void;
        getPrimitiveType(): $GlPrimitiveType;
        get primitiveType(): $GlPrimitiveType;
    }
    export class $GlPrimitiveType extends $Enum<$GlPrimitiveType> {
        static values(): $GlPrimitiveType[];
        static valueOf(arg0: string): $GlPrimitiveType;
        getId(): number;
        static TRIANGLES: $GlPrimitiveType;
        static PATCHES: $GlPrimitiveType;
        static POINTS: $GlPrimitiveType;
        static LINES: $GlPrimitiveType;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $GlPrimitiveType}.
     */
    export type $GlPrimitiveType_ = "points" | "lines" | "triangles" | "patches";
}
