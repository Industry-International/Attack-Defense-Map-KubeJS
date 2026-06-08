import { $Enum } from "@package/java/lang";

declare module "@package/net/irisshaders/batchedentityrendering/impl" {
    export class $BlendingStateHolder {
    }
    export interface $BlendingStateHolder {
        setTransparencyType(arg0: $TransparencyType_): void;
        getTransparencyType(): $TransparencyType;
    }
    export class $MemoryTrackingRenderBuffers {
    }
    export interface $MemoryTrackingRenderBuffers {
        getEntityBufferAllocatedSize(): number;
        freeAndDeleteBuffers(): void;
        getMiscBufferAllocatedSize(): number;
        getMaxBegins(): number;
        get entityBufferAllocatedSize(): number;
        get miscBufferAllocatedSize(): number;
        get maxBegins(): number;
    }
    export class $MemoryTrackingBuffer {
    }
    export interface $MemoryTrackingBuffer {
        freeAndDeleteBuffer(): void;
        getAllocatedSize(): number;
        getUsedSize(): number;
        get allocatedSize(): number;
        get usedSize(): number;
    }
    export class $BufferBuilderExt {
    }
    export interface $BufferBuilderExt {
        splitStrip(): void;
    }
    /**
     * Values that may be interpreted as {@link $BufferBuilderExt}.
     */
    export type $BufferBuilderExt_ = (() => void);
    export class $DrawCallTrackingRenderBuffers {
    }
    export interface $DrawCallTrackingRenderBuffers {
        getRenderTypes(): number;
        getDrawCalls(): number;
        resetDrawCounts(): void;
        get renderTypes(): number;
        get drawCalls(): number;
    }
    export class $TransparencyType extends $Enum<$TransparencyType> {
        static values(): $TransparencyType[];
        static valueOf(arg0: string): $TransparencyType;
        static DECAL: $TransparencyType;
        static GENERAL_TRANSPARENT: $TransparencyType;
        static OPAQUE: $TransparencyType;
        static WATER_MASK: $TransparencyType;
        static OPAQUE_DECAL: $TransparencyType;
        static LINES: $TransparencyType;
    }
    /**
     * Values that may be interpreted as {@link $TransparencyType}.
     */
    export type $TransparencyType_ = "opaque" | "opaque_decal" | "general_transparent" | "decal" | "water_mask" | "lines";
    export class $RenderBuffersExt {
    }
    export interface $RenderBuffersExt {
        beginLevelRendering(): void;
        endLevelRendering(): void;
    }
}
