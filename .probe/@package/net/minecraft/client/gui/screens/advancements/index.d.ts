import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener {
        renderWindow(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        onAdvancementsCleared(): void;
        onRemoveAdvancementRoot(arg0: $AdvancementNode): void;
        onRemoveAdvancementTask(arg0: $AdvancementNode): void;
        onAddAdvancementTask(arg0: $AdvancementNode): void;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
        getAdvancementWidget(arg0: $AdvancementNode): $AdvancementWidget;
        onAddAdvancementRoot(arg0: $AdvancementNode): void;
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static WINDOW_HEIGHT: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor(arg0: $ClientAdvancements);
        constructor(arg0: $ClientAdvancements, arg1: $Screen);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        frameSprite(arg0: $AdvancementType_): $ResourceLocation;
        boxSprite(): $ResourceLocation;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab {
        getType(): $AdvancementTabType;
        static create(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: number, arg3: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        getRootNode(): $AdvancementNode;
        getWidget(arg0: $AdvancementHolder_): $AdvancementWidget;
        getTitle(): $Component;
        drawTooltips(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawContents(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        addAdvancement(arg0: $AdvancementNode): void;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getPage(): number;
        drawTab(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        drawIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        scroll(arg0: number, arg1: number): void;
        getDisplay(): $DisplayInfo;
        getScreen(): $AdvancementsScreen;
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: $AdvancementNode, arg5: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get type(): $AdvancementTabType;
        get index(): number;
        get rootNode(): $AdvancementNode;
        get title(): $Component;
        get page(): number;
        get display(): $DisplayInfo;
        get screen(): $AdvancementsScreen;
    }
    export class $AdvancementWidget {
        addChild(arg0: $AdvancementWidget): void;
        drawConnectivity(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        attachToParent(): void;
        getWidth(): number;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getY(): number;
        getX(): number;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setProgress(arg0: $AdvancementProgress): void;
        drawHover(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        constructor(arg0: $AdvancementTab, arg1: $Minecraft, arg2: $AdvancementNode, arg3: $DisplayInfo);
        get width(): number;
        get y(): number;
        get x(): number;
        set progress(value: $AdvancementProgress);
    }
}
