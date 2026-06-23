import { $Level } from "@package/net/minecraft/world/level";
import { $InfoDisplayCompiler } from "@package/xaero/hud/minimap/info/render/compile";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";

declare module "@package/xaero/common/minimap/highlight" {
    export class $DimensionHighlighterHandler {
        getVersion(): number;
        requestRefresh(): void;
        requestRefresh(arg0: number, arg1: number): void;
        addBlockHighlightTooltips(arg0: $InfoDisplayCompiler, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        shouldApplyTileChunkHighlights(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
        applyChunkHighlightColors(arg0: number, arg1: number): number[];
        shouldApplyRegionHighlights(arg0: number, arg1: number, arg2: boolean): boolean;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $HighlighterRegistry, arg2: $MinimapWriter);
        get version(): number;
    }
    export class $HighlighterRegistry {
        end(): void;
        register(arg0: $AbstractHighlighter): void;
        getHighlighters(): $List<$AbstractHighlighter>;
        constructor();
        get highlighters(): $List<$AbstractHighlighter>;
    }
    export class $AbstractHighlighter {
        addBlockHighlightTooltips(arg0: $InfoDisplayCompiler, arg1: $ResourceKey_<$Level>, arg2: number, arg3: number, arg4: number): void;
        isCoveringOutsideDiscovered(): boolean;
        chunkIsHighlit(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): boolean;
        regionHasHighlights(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): boolean;
        getChunkHighlitColor(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number): number[];
        get coveringOutsideDiscovered(): boolean;
    }
}
