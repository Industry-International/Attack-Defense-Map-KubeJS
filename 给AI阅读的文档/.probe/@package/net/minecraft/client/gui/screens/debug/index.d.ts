import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractWidget, $CycleButton, $WidgetTooltipHolder, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/debug" {
    export class $GameModeSwitcherScreen$GameModeIcon extends $Enum<$GameModeSwitcherScreen$GameModeIcon> {
    }
    /**
     * Values that may be interpreted as {@link $GameModeSwitcherScreen$GameModeIcon}.
     */
    export type $GameModeSwitcherScreen$GameModeIcon_ = "creative" | "survival" | "adventure" | "spectator";
    export class $GameModeSwitcherScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        renderables: $List<$Renderable>;
        static SELECTION_SPRITE: $ResourceLocation;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $GameModeSwitcherScreen$GameModeSlot extends $AbstractWidget {
        setSelected(isSelected: boolean): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        icon: $GameModeSwitcherScreen$GameModeIcon;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(icon: $GameModeSwitcherScreen, x: $GameModeSwitcherScreen$GameModeIcon_, y: number, arg3: number);
        set selected(value: boolean);
    }
}
