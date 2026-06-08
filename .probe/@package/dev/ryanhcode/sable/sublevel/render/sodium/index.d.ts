import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RenderSectionManager, $ChunkRenderMatrices_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/render/sodium" {
    export class $SubLevelRenderSectionManager extends $RenderSectionManager {
        apply(arg0: $ChunkRenderMatrices_, arg1: number, arg2: number, arg3: number): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $RenderType, arg2: number, arg3: number, arg4: number): void;
        shouldDisableOcclusionCulling(): boolean;
        constructor(arg0: $ClientSubLevel, arg1: $ClientLevel, arg2: number, arg3: $CommandList);
    }
}
