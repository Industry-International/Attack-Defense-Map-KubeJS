import { $ModuleSession, $ModuleTransform } from "@package/xaero/hud/module";
import { $ModuleRenderContext } from "@package/xaero/hud/render/module";

declare module "@package/xaero/hud/compat" {
    export class $OldSystemCompatibility {
        convertTransform(arg0: $ModuleTransform, arg1: $ModuleSession<never>, arg2: $ModuleRenderContext): void;
        loadOldTransform(arg0: string[]): $ModuleTransform;
        constructor();
    }
}
