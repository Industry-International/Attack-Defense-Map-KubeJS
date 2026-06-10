import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $Vec2i_, $Vec2i } from "@package/net/mehvahdjukaar/moonlight/api/util/math";
import { $IntAnimationState } from "@package/net/mehvahdjukaar/vista/common/tv";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/mehvahdjukaar/vista/client/video_source" {
    export class $IVideoSource {
        static create(arg0: $ItemStack_): $IVideoSource;
        static NO_ENERGY: $IVideoSource;
        static EMPTY: $IVideoSource;
    }
    export interface $IVideoSource {
        getVideoSound(): $SoundEvent;
        getVideoDuration(): number;
        getVideoFrameBuilder(arg0: number, arg1: $MultiBufferSource_, arg2: boolean, arg3: $Vec2i_, arg4: $Vec2i_, arg5: number, arg6: boolean, arg7: $IntAnimationState, arg8: $IntAnimationState, arg9: boolean): $VertexConsumer;
        get videoSound(): $SoundEvent;
        get videoDuration(): number;
    }
    /**
     * Values that may be interpreted as {@link $IVideoSource}.
     */
    export type $IVideoSource_ = ((arg0: number, arg1: $MultiBufferSource, arg2: boolean, arg3: $Vec2i, arg4: $Vec2i, arg5: number, arg6: boolean, arg7: $IntAnimationState, arg8: $IntAnimationState, arg9: boolean) => $VertexConsumer);
}
