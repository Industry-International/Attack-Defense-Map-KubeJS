import { $SectionPos } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $ByteIterator } from "@package/net/caffeinemc/mods/sodium/client/util/iterator";
import { $SortedRenderListsAccessor } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $Iterator } from "@package/java/util";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists" {
    export class $ChunkRenderListIterable {
    }
    export interface $ChunkRenderListIterable {
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
        iterator(): $Iterator<$ChunkRenderList>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderListIterable}.
     */
    export type $ChunkRenderListIterable_ = ((arg0: boolean) => $Iterator<$ChunkRenderList>);
    export class $SortedRenderLists implements $ChunkRenderListIterable, $SortedRenderListsAccessor {
        static empty(): $SortedRenderLists;
        static init$veil_$md$d64506$0(arg0: $ObjectArrayList<any>): $SortedRenderLists;
        iterator(): $Iterator<$ChunkRenderList>;
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
    }
    export class $ChunkRenderList {
        size(): number;
        reset(arg0: number): void;
        add(arg0: $RenderSection): void;
        getRegion(): $RenderRegion;
        getLastVisibleFrame(): number;
        sortSections(arg0: $SectionPos, arg1: number[]): void;
        sectionsWithEntitiesIterator(): $ByteIterator;
        sectionsWithSpritesIterator(): $ByteIterator;
        getSectionsWithGeometryCount(): number;
        getSectionsWithSpritesCount(): number;
        getSectionsWithEntitiesCount(): number;
        sectionsWithGeometryIterator(arg0: boolean): $ByteIterator;
        constructor(arg0: $RenderRegion);
        get region(): $RenderRegion;
        get lastVisibleFrame(): number;
        get sectionsWithGeometryCount(): number;
        get sectionsWithSpritesCount(): number;
        get sectionsWithEntitiesCount(): number;
    }
}
