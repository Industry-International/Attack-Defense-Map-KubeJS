import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $IFunctionalRenderer, $BedrockGunModel } from "@package/com/tacz/guns/client/model";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/model/functional" {
    export class $ShellRender implements $IFunctionalRenderer {
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $ItemDisplayContext_, arg3: number, arg4: number): void;
        addShell(arg0: $Vector3f): void;
        static isSelf: boolean;
        constructor(arg0: $BedrockGunModel);
    }
}
