import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/dev/tr7zw/entityculling/access" {
    export class $EntityRendererInter<T extends $Entity> {
    }
    export interface $EntityRendererInter<T extends $Entity> {
        shadowShouldShowName(arg0: T): boolean;
        shadowRenderNameTag(arg0: T, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        entityCullingIgnoresCulling(arg0: T): boolean;
        entityCullingGetCullingBox(arg0: T): $AABB;
    }
}
