import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $IAcceleratedVertexConsumer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Matrix4f, $Matrix3f } from "@package/org/joml";
export * as colors from "@package/com/github/argon4w/acceleratedrendering/features/items/colors";
export * as mixins from "@package/com/github/argon4w/acceleratedrendering/features/items/mixins";
export * as contexts from "@package/com/github/argon4w/acceleratedrendering/features/items/contexts";

declare module "@package/com/github/argon4w/acceleratedrendering/features/items" {
    export class $IAcceleratedBakedModel {
    }
    export interface $IAcceleratedBakedModel {
        isAcceleratedInHand(): boolean;
        isAccelerated(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        getCustomColor(arg0: number, arg1: number): number;
        get acceleratedInHand(): boolean;
        get accelerated(): boolean;
        get acceleratedInGui(): boolean;
    }
    export class $IAcceleratedBakedQuad {
    }
    export interface $IAcceleratedBakedQuad {
        renderFast(arg0: $Matrix4f, arg1: $Matrix3f, arg2: $IAcceleratedVertexConsumer, arg3: number, arg4: number, arg5: number): void;
        getCustomColor(arg0: number): number;
    }
    export class $IAcceleratedGuiGraphics {
    }
    export interface $IAcceleratedGuiGraphics {
        flushItemBatching(): void;
    }
    /**
     * Values that may be interpreted as {@link $IAcceleratedGuiGraphics}.
     */
    export type $IAcceleratedGuiGraphics_ = (() => void);
}
