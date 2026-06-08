import { $Level_ } from "@package/net/minecraft/world/level";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $IBlockType } from "@package/xfacthd/framedblocks/api/type";
import { $Quaternionf } from "@package/org/joml";
export * as debug from "@package/xfacthd/framedblocks/api/render/debug";

declare module "@package/xfacthd/framedblocks/api/render" {
    export class $RegisterOutlineRenderersEvent extends $Event implements $IModBusEvent {
        register(arg0: $IBlockType, arg1: $OutlineRenderer_): void;
        constructor(arg0: $BiConsumer_<$IBlockType, $OutlineRenderer>);
    }
    export class $OutlineRenderer {
        static drawLine(arg0: $VertexConsumer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static mirrorHorizontally(arg0: $PoseStack, arg1: boolean): void;
        static makeQuaternionArray(): $Quaternionf[];
        static YN_DIR: $Quaternionf[];
    }
    export interface $OutlineRenderer {
        draw(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $PoseStack, arg4: $VertexConsumer): void;
        draw(arg0: $BlockState_, arg1: $PoseStack, arg2: $VertexConsumer): void;
        rotateMatrix(arg0: $PoseStack, arg1: $BlockState_): void;
        getRotationDir(arg0: $BlockState_): $Direction;
    }
    /**
     * Values that may be interpreted as {@link $OutlineRenderer}.
     */
    export type $OutlineRenderer_ = ((arg0: $BlockState, arg1: $PoseStack, arg2: $VertexConsumer) => void);
}
