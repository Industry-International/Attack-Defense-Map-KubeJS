import { $DoubleConsumer_ } from "@package/java/util/function";
import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CycleButton, $WidgetTooltipHolder, $Renderable, $AbstractScrollWidget } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $Options, $NarratorStatus } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/telemetry" {
    export class $TelemetryInfoScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Options);
    }
    export class $TelemetryEventWidget extends $AbstractScrollWidget {
        updateLayout(): void;
        setOnScrolledListener(arg0: $DoubleConsumer_): void;
        onOptInChanged(arg0: boolean): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Font);
        set onScrolledListener(value: $DoubleConsumer_);
    }
    export class $TelemetryEventWidget$ContentBuilder {
    }
    export class $TelemetryEventWidget$Content extends $Record {
    }
}
