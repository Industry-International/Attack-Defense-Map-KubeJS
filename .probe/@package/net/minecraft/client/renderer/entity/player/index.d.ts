import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $EntityRenderDispatcher, $EntityRendererProvider$Context, $LivingEntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/entity/player" {
    export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
        scale(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number): void;
        render(arg0: $AbstractClientPlayer, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getTextureLocation(arg0: $AbstractClientPlayer): $ResourceLocation;
        getRenderOffset(arg0: $AbstractClientPlayer, arg1: number): $Vec3;
        setupRotations(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderRightHand(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer): void;
        renderLeftHand(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer): void;
        renderNameTag(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>>;
        shadowStrength: number;
        model: $PlayerModel<$AbstractClientPlayer>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: boolean);
    }
}
