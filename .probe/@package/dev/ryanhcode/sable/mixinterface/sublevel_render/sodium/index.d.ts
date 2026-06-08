import { $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $SubLevelRenderSectionManager } from "@package/dev/ryanhcode/sable/sublevel/render/sodium";

declare module "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/sodium" {
    export class $SodiumWorldRendererExtension {
    }
    export interface $SodiumWorldRendererExtension {
        sable$getSubLevelRenderSectionManager(arg0: $ClientSubLevel): $SubLevelRenderSectionManager;
        sable$freeRenderSectionManager(arg0: $ClientSubLevel): void;
    }
}
