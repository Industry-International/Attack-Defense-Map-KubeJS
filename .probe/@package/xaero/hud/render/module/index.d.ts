import { $ModuleSession } from "@package/xaero/hud/module";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/hud/render/module" {
    export class $IModuleRenderer<MS extends $ModuleSession<MS>> {
    }
    export interface $IModuleRenderer<MS extends $ModuleSession<MS>> {
        render(arg0: MS, arg1: $ModuleRenderContext, arg2: $GuiGraphics, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IModuleRenderer}.
     */
    export type $IModuleRenderer_<MS> = ((arg0: MS, arg1: $ModuleRenderContext, arg2: $GuiGraphics, arg3: number) => void);
    export class $ModuleRenderContext {
        screenWidth: number;
        screenScale: number;
        flippedHorizontally: boolean;
        flippedVertically: boolean;
        w: number;
        screenHeight: number;
        x: number;
        h: number;
        y: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
}
