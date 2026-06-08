import { $Hud } from "@package/xaero/hud";
import { $PushboxHandler } from "@package/xaero/hud/pushbox";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as module from "@package/xaero/hud/render/module";

declare module "@package/xaero/hud/render" {
    export class $HudRenderer {
        getCustomVertexConsumers(): $CustomVertexConsumers;
        render(arg0: $Hud, arg1: $GuiGraphics, arg2: number): void;
        getPushboxHandler(): $PushboxHandler;
        constructor(arg0: $PushboxHandler);
        get customVertexConsumers(): $CustomVertexConsumers;
        get pushboxHandler(): $PushboxHandler;
    }
}
