import { $MinimapElementRendererHandler } from "@package/xaero/hud/minimap/element/render";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/xaero/hud/minimap/element/render/world" {
    export class $MinimapElementWorldRendererHandler extends $MinimapElementRendererHandler {
        prepareRender(arg0: $Matrix4f, arg1: $Matrix4f): void;
    }
}
