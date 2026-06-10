import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Matrix4f, $Matrix3f } from "@package/org/joml";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers" {
    export class $IBufferDecorator {
    }
    export interface $IBufferDecorator {
        decorate(arg0: $VertexConsumer): $VertexConsumer;
    }
    /**
     * Values that may be interpreted as {@link $IBufferDecorator}.
     */
    export type $IBufferDecorator_ = ((arg0: $VertexConsumer) => $VertexConsumer);
    export class $IAcceleratedRenderer<T> {
    }
    export interface $IAcceleratedRenderer<T> {
        render(arg0: $VertexConsumer, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IAcceleratedRenderer}.
     */
    export type $IAcceleratedRenderer_<T> = ((arg0: $VertexConsumer, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number) => void);
}
