import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $GuiSettings } from "@package/xaero/lib/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ConfigOptionScreenEntry } from "@package/xaero/lib/client/config/option/ui";
import { $MapProcessor } from "@package/xaero/map";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PNGExportResult } from "@package/xaero/map/file/export";
import { $Font } from "@package/net/minecraft/client/gui";
export * as message from "@package/xaero/map/gui/message";

declare module "@package/xaero/map/gui" {
    export class $MapTileSelection {
        getLeft(): number;
        getRight(): number;
        getBottom(): number;
        getTop(): number;
        getEndX(): number;
        getEndZ(): number;
        getStartZ(): number;
        setEnd(arg0: number, arg1: number): void;
        getStartX(): number;
        constructor(arg0: number, arg1: number);
        get left(): number;
        get right(): number;
        get bottom(): number;
        get top(): number;
        get endX(): number;
        get endZ(): number;
        get startZ(): number;
        get startX(): number;
    }
    export class $ExportScreen extends $GuiSettings {
        primaryOptionEntry<T>(arg0: $ConfigOption<T>): $ConfigOptionScreenEntry<T>;
        getSelection(): $MapTileSelection;
        onExportDone(arg0: $PNGExportResult): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        fullExport: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $MapTileSelection);
        get selection(): $MapTileSelection;
    }
}
