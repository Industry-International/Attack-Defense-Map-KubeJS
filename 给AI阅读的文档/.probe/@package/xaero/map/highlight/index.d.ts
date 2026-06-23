import { $Level } from "@package/net/minecraft/world/level";
import { $MapDimension } from "@package/xaero/map/world";
import { $MapRegion } from "@package/xaero/map/region";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";
import { $PoolTextureDirectBufferUnit } from "@package/xaero/map/pool/buffer";

declare module "@package/xaero/map/highlight" {
    export class $AbstractHighlighter {
        calculateRegionHash(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): number;
        addMinimapBlockHighlightTooltips(arg0: $List_<$Component_>, arg1: $ResourceKey_<$Level>, arg2: number, arg3: number, arg4: number): void;
        isCoveringOutsideDiscovered(): boolean;
        chunkIsHighlit(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): boolean;
        getBlockHighlightBluntTooltip(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): $Component;
        getBlockHighlightSubtleTooltip(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): $Component;
        regionHasHighlights(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): boolean;
        getChunkHighlitColor(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): number[];
        get coveringOutsideDiscovered(): boolean;
    }
    export class $DimensionHighlighterHandler {
        static getKey(arg0: number, arg1: number): number;
        shouldApplyTileChunkHighlights(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
        applyChunkHighlightColors(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $PoolTextureDirectBufferUnit, arg5: $PoolTextureDirectBufferUnit, arg6: boolean, arg7: boolean, arg8: boolean): $PoolTextureDirectBufferUnit;
        clearCachedHashes(): void;
        clearCachedHash(arg0: number, arg1: number): void;
        static getXFromKey(arg0: number): number;
        static getZFromKey(arg0: number): number;
        getRegionHash(arg0: number, arg1: number): number;
        shouldApplyRegionHighlights(arg0: number, arg1: number, arg2: boolean): boolean;
        getBlockHighlightBluntTooltip(arg0: number, arg1: number, arg2: boolean): $Component;
        getBlockHighlightSubtleTooltip(arg0: number, arg1: number, arg2: boolean): $Component;
        constructor(arg0: $MapDimension, arg1: $ResourceKey_<$Level>, arg2: $HighlighterRegistry);
    }
    export class $HighlighterRegistry {
        end(): void;
        register(arg0: $AbstractHighlighter): void;
        getHighlighters(): $List<$AbstractHighlighter>;
        constructor();
        get highlighters(): $List<$AbstractHighlighter>;
    }
    export class $MapRegionHighlightsPreparer {
        prepare(arg0: $MapRegion, arg1: number, arg2: number, arg3: boolean): void;
        prepare(arg0: $MapRegion, arg1: boolean): void;
        constructor();
    }
}
