import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Set, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/vista/common/chunk_tracking" {
    export class $ILevelRendererExt {
    }
    export interface $ILevelRendererExt {
        vista$refreshPinnedSections(): void;
    }
    /**
     * Values that may be interpreted as {@link $ILevelRendererExt}.
     */
    export type $ILevelRendererExt_ = (() => void);
    export class $ExtraChunkViewData$Zone extends $Record {
        contains(arg0: number, arg1: number): boolean;
        center(): $ChunkPos;
        chunks(): $Set<$ChunkPos>;
        radius(): number;
        static CODEC: $Codec<$ExtraChunkViewData$Zone>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExtraChunkViewData$Zone>;
        constructor(center: $ChunkPos, radius: number);
    }
    export class $IPinnableRenderSection {
    }
    export interface $IPinnableRenderSection {
        vista$isPinned(): boolean;
        vista$setPinned(arg0: boolean): void;
    }
    export class $IChunkViewWithZones {
    }
    export interface $IChunkViewWithZones {
        vista$setExtraZones(arg0: $ExtraChunkViewData): void;
        vista$getExtraZones(): $ExtraChunkViewData;
    }
    export class $ExtraChunkViewData {
        getZones(): $List<$ExtraChunkViewData$Zone>;
        addZone(arg0: $ChunkPos, arg1: number): void;
        removeZone(arg0: $ChunkPos): void;
        clearZones(): void;
        containsChunk(arg0: number, arg1: number): boolean;
        getAllChunks(): $Set<$ChunkPos>;
        static CODEC: $Codec<$ExtraChunkViewData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExtraChunkViewData>;
        constructor();
        get zones(): $List<$ExtraChunkViewData$Zone>;
        get allChunks(): $Set<$ChunkPos>;
    }
    export class $IViewAreaExt {
    }
    export interface $IViewAreaExt {
        vista$rebuildPinnedSections(): void;
    }
    /**
     * Values that may be interpreted as {@link $IViewAreaExt}.
     */
    export type $IViewAreaExt_ = (() => void);
}
