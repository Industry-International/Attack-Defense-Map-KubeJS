import { $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $SubLevelRenderSectionManager } from "@package/dev/ryanhcode/sable/sublevel/render/sodium";

declare module "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/sodium" {
    export class $SodiumWorldRendererExtension {
    }
    export interface $SodiumWorldRendererExtension {
        sable$freeRenderSectionManager(arg0: $ClientSubLevel): void;
        sable$getSubLevelRenderSectionManager(arg0: $ClientSubLevel): $SubLevelRenderSectionManager;
    }
}
