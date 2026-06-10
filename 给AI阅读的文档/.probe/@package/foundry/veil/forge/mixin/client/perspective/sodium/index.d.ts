import { $ChunkUpdateType, $RenderSection, $ChunkUpdateType_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $SortedRenderLists } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $ArrayDeque, $Map_, $Map } from "@package/java/util";

declare module "@package/foundry/veil/forge/mixin/client/perspective/sodium" {
    export class $RenderSectionManagerAccessor {
    }
    export interface $RenderSectionManagerAccessor {
        getTaskLists(): $Map<$ChunkUpdateType, $ArrayDeque<$RenderSection>>;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$ChunkUpdateType_, $ArrayDeque<$RenderSection>>): void;
        set renderLists(value: $SortedRenderLists);
    }
}
