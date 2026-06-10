import { $BiConsumer_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $FramedBlockEntity } from "@package/xfacthd/framedblocks/api/block/blockentity";

declare module "@package/xfacthd/framedblocks/api/render/debug" {
    export class $AttachDebugRenderersEvent extends $Event implements $IModBusEvent {
        attach<RT extends $FramedBlockEntity, BT extends RT>(arg0: $BlockEntityType_<BT>, arg1: $BlockDebugRenderer<RT>): void;
        constructor(arg0: $BiConsumer_<$BlockEntityType<$FramedBlockEntity>, $BlockDebugRenderer<never>>);
    }
    export class $BlockDebugRenderer<T extends $FramedBlockEntity> {
    }
    export interface $BlockDebugRenderer<T extends $FramedBlockEntity> {
        isEnabled(): boolean;
        render(arg0: T, arg1: $BlockHitResult, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number): void;
        get enabled(): boolean;
    }
}
