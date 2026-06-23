import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $Codec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $ScrollPanel, $ModListWidget$ModEntry } from "@package/net/neoforged/neoforge/client/gui/widget";
import { $OptionInstance, $NarratorStatus, $OptionInstance$TooltipSupplier_, $Minecraft, $DeltaTracker, $OptionInstance$ValueSet, $Options } from "@package/net/minecraft/client";
import { $Set_, $Comparator, $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $IExtensionPoint, $ModLoadingIssue_, $ModContainer } from "@package/net/neoforged/fml";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $Consumer_, $Function, $Consumer, $ToDoubleFunction_, $Function_, $BooleanSupplier_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $ExperimentsScreen } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Enum, $Comparable, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $ModConfigSpec$ListValueSpec, $ModConfigSpec$RestartType, $ModConfigSpec$ConfigValue, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
import { $File_ } from "@package/java/io";
import { $UnmodifiableConfig$Entry } from "@package/com/electronwill/nightconfig/core";
import { $CreativeModeTab, $CreativeModeTab_ } from "@package/net/minecraft/world/item";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractSelectionList, $OptionsList, $AbstractWidget, $AbstractContainerWidget, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $Renderable, $CycleButton, $WidgetTooltipHolder, $ContainerObjectSelectionList, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $PropertyDispatch$QuadFunction_ } from "@package/net/minecraft/data/models/blockstates";
import { $PackRepository, $Pack } from "@package/net/minecraft/server/packs/repository";
import { $ConfirmScreen, $Screen, $ErrorScreen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Font, $LayeredDraw$Layer_, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModConfig$Type_, $ModConfig, $ModConfig$Type } from "@package/net/neoforged/fml/config";
import { $Matrix4f } from "@package/org/joml";
export * as map from "@package/net/neoforged/neoforge/client/gui/map";
export * as widget from "@package/net/neoforged/neoforge/client/gui/widget";

declare module "@package/net/neoforged/neoforge/client/gui" {
    export class $ModMismatchDisconnectedScreen extends $Screen {
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
        constructor(parentScreen: $Screen, reason: $Component_, mismatchedChannelData: $Map_<$ResourceLocation_, $Component_>);
    }
    export class $ConfigurationScreen$TranslationChecker {
        finish(): void;
        check(arg0: string): string;
        check(arg0: string, arg1: string): string;
        optional(arg0: $Component_, arg1: string, ...arg2: $ChatFormatting_[]): $Component;
        existsWithFallback(arg0: string): boolean;
        constructor();
    }
    /**
     * Register an instance to `ModContainer#registerExtensionPoint(Class, Supplier)`
     * to supply a config screen for your mod.
     * 
     * The config screen will be accessible from the mod list menu.
     */
    export class $IConfigScreenFactory {
        static getForMod(selectedMod: $IModInfo): ($IConfigScreenFactory) | undefined;
    }
    export interface $IConfigScreenFactory extends $IExtensionPoint {
        /**
         * Creates a new config screen. The `modListScreen` parameter can be used for a "back" button.
         */
        createScreen(container: $ModContainer, modListScreen: $Screen): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $IConfigScreenFactory}.
     */
    export type $IConfigScreenFactory_ = ((arg0: $ModContainer, arg1: $Screen) => $Screen);
    export class $GuiLayerManager$NamedLayer extends $Record {
        name(): $ResourceLocation;
        layer(): $LayeredDraw$Layer;
        constructor(name: $ResourceLocation_, layer: $LayeredDraw$Layer_);
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen extends $OptionsSubScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        lastScreen: $Screen;
        list: $OptionsList;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        options: $Options;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: $Screen, arg2: $Map_<string, $Object>, arg3: string, arg4: $Set_<$UnmodifiableConfig$Entry>, arg5: $Component_);
        constructor(arg0: $Screen, arg1: $ModConfig$Type_, arg2: $ModConfig, arg3: $Component_, arg4: $ConfigurationScreen$ConfigurationSectionScreen$Filter_);
        constructor(arg0: $Screen, arg1: $ModConfig$Type_, arg2: $ModConfig, arg3: $Component_);
    }
    export class $ModListScreen extends $Screen {
        setSelected(entry: $ModListWidget$ModEntry): void;
        getMinecraftInstance(): $Minecraft;
        buildModList<T extends $ObjectSelectionList$Entry<T>>(modListViewConsumer: $Consumer_<T>, newEntry: $Function_<$ModContainer, T>): void;
        getFontRenderer(): $Font;
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
        constructor(parentScreen: $Screen);
        set selected(value: $ModListWidget$ModEntry);
        get minecraftInstance(): $Minecraft;
        get fontRenderer(): $Font;
    }
    /**
     * Adaptation of `LayeredDraw` that is used for `Gui` rendering specifically,
     * to give layers a name and fire appropriate events.
     * 
     * Overlays can be registered using the `RegisterGuiLayersEvent` event.
     */
    export class $GuiLayerManager {
        add(child: $GuiLayerManager, shouldRender: $BooleanSupplier_): $GuiLayerManager;
        add(name: $ResourceLocation_, layer: $LayeredDraw$Layer_): $GuiLayerManager;
        render(guiGraphics: $GuiGraphics, partialTick: $DeltaTracker): void;
        initModdedLayers(): void;
        getLayerCount(): number;
        static Z_SEPARATION: number;
        constructor();
        get layerCount(): number;
    }
    export class $LoadingErrorScreen$FormattedIssue extends $Record {
    }
    export class $LoadingErrorScreen extends $ErrorScreen {
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
        constructor(issues: $List_<$ModLoadingIssue_>, dumpedLocation: $File_, nextScreenTask: $Runnable_);
    }
    export class $ModMismatchDisconnectedScreen$MismatchInfoPanel extends $ScrollPanel {
    }
    export class $ModListScreen$InfoPanel extends $ScrollPanel {
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Element extends $Record {
        name(): $Component;
        option(): $OptionInstance<never>;
        any(): $Object;
        widget(): $AbstractWidget;
        tooltip(): $Component;
        getWidget(arg0: $Options): $AbstractWidget;
        undoable(): boolean;
        constructor(arg0: $Component_, arg1: $Component_, arg2: $OptionInstance<never>, arg3: boolean);
        constructor(arg0: $Component_, arg1: $Component_, arg2: $OptionInstance<never>);
        constructor(arg0: $Component_, arg1: $Component_, arg2: $AbstractWidget, arg3: boolean);
        constructor(arg0: $Component_, arg1: $Component_, arg2: $AbstractWidget);
        constructor(name: $Component_, tooltip: $Component_, widget: $AbstractWidget, option: $OptionInstance<never>, undoable: boolean);
    }
    export class $ConfigurationScreen extends $OptionsSubScreen {
        translatableConfig(arg0: $ModConfig, arg1: string, arg2: string): $Component;
        static LONG_STRING: $Component;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static GAME_RESTART_YES: $Component;
        static MOVE_LIST_ELEMENT_UP: $Component;
        static UNDO: $Component;
        static REMOVE_LIST_ELEMENT: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static RESTART_NO: $Component;
        static CUBE_MAP: $CubeMap;
        static RESET: $Component;
        lastScreen: $Screen;
        title: $Component;
        static UNSUPPORTED_ELEMENT: $Component;
        static NEW_LIST_ELEMENT: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static RESTART_NO_TOOLTIP: $Component;
        options: $Options;
        static PANORAMA: $PanoramaRenderer;
        static BIG_BUTTON_WIDTH: number;
        static TOOLTIP_CANNOT_EDIT_NOT_LOADED: $Component;
        static GAME_RESTART_MESSAGE: $Component;
        static CRUMB_SEPARATOR: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static MOVE_LIST_ELEMENT_DOWN: $Component;
        static TOOLTIP_CANNOT_EDIT_THIS_WHILE_OPEN_TO_LAN: $Component;
        static SAVING_LEVEL: $Component;
        static TOOLTIP_CANNOT_EDIT_THIS_WHILE_ONLINE: $Component;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static RETURN_TO_MENU: $Component;
        list: $OptionsList;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static GAME_RESTART_TITLE: $Component;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SERVER_RESTART_TITLE: $Component;
        static RESET_TOOLTIP: $Component;
        static SERVER_RESTART_MESSAGE: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        static UNDO_TOOLTIP: $Component;
        screenExecutor: $Executor;
        needsRestart: $ModConfigSpec$RestartType;
        font: $Font;
        constructor(arg0: $ModContainer, arg1: $Screen, arg2: $PropertyDispatch$QuadFunction_<$ConfigurationScreen, $ModConfig$Type, $ModConfig, $Component, $Screen>);
        constructor(arg0: $ModContainer, arg1: $Screen, arg2: $ConfigurationScreen$ConfigurationSectionScreen$Filter_);
        constructor(arg0: $ModContainer, arg1: $Screen);
    }
    export class $ConfigurationScreen$ConfigurationListScreen$ListLabelWidget extends $AbstractContainerWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
        constructor(arg0: $ConfigurationScreen$ConfigurationListScreen<any>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: number);
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Filter {
    }
    export interface $ConfigurationScreen$ConfigurationSectionScreen$Filter {
        filterEntry(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: string, arg2: $ConfigurationScreen$ConfigurationSectionScreen$Element_): $ConfigurationScreen$ConfigurationSectionScreen$Element;
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationScreen$ConfigurationSectionScreen$Filter}.
     */
    export type $ConfigurationScreen$ConfigurationSectionScreen$Filter_ = ((arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context, arg1: string, arg2: $ConfigurationScreen$ConfigurationSectionScreen$Element) => $ConfigurationScreen$ConfigurationSectionScreen$Element_);
    export class $ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry extends $ContainerObjectSelectionList$Entry<$ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry>;
    }
    export class $ScrollableExperimentsScreen$ExperimentSelectionList extends $ContainerObjectSelectionList<$ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry;
        height: number;
    }
    export class $CreativeTabsScreenPage {
        getColumn(tab: $CreativeModeTab_): number;
        getDefaultTab(): $CreativeModeTab;
        isTop(tab: $CreativeModeTab_): boolean;
        getVisibleTabs(): $List<$CreativeModeTab>;
        constructor(tabs: $List_<$CreativeModeTab_>);
        get defaultTab(): $CreativeModeTab;
        get visibleTabs(): $List<$CreativeModeTab>;
    }
    export class $ConfigurationScreen$TooltipConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    /**
     * @deprecated
     * This class provides several methods and constants used by the Config GUI classes.
     */
    export class $ScreenUtils {
        /**
         * @deprecated
         */
        static drawGradientRect(mat: $Matrix4f, zLevel: number, left: number, top: number, right: number, bottom: number, startColor: number, endColor: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. It is assumed that the desired texture ResourceLocation object has been bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, topBorder: number, bottomBorder: number, leftBorder: number, rightBorder: number, zLevel: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. The provided ResourceLocation object will be bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, res: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, topBorder: number, bottomBorder: number, leftBorder: number, rightBorder: number, zLevel: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. It is assumed that the desired texture ResourceLocation object has been bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, borderSize: number, zLevel: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. The provided ResourceLocation object will be bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, res: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, borderSize: number, zLevel: number): void;
        static blitInscribed(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number, centerX: boolean, centerY: boolean): void;
        static blitInscribed(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number): void;
        static getColorFromFormattingCharacter(c: string, isLighter: boolean): number;
        /**
         * @deprecated
         */
        static drawTexturedModalRect(guiGraphics: $GuiGraphics, x: number, y: number, u: number, v: number, width: number, height: number, zLevel: number): void;
        static DEFAULT_BORDER_COLOR_START: number;
        static TEXT_COLOR_CODES: number[];
        static UNDO_CHAR: string;
        static DEFAULT_BACKGROUND_COLOR: number;
        static VALID: string;
        static DEFAULT_BORDER_COLOR_END: number;
        static INVALID: string;
        static RESET_CHAR: string;
        constructor();
    }
    export class $LoadingErrorScreen$LoadingEntryList extends $ObjectSelectionList<$LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry;
        height: number;
    }
    /**
     * Identifiers for the vanilla `Layer`, in the order that they render.
     * 
     * The corresponding rendering code can be found in the source code of `Gui`.
     */
    export class $VanillaGuiLayers {
        static FOOD_LEVEL: $ResourceLocation;
        static JUMP_METER: $ResourceLocation;
        static SPECTATOR_TOOLTIP: $ResourceLocation;
        static EXPERIENCE_LEVEL: $ResourceLocation;
        static CHAT: $ResourceLocation;
        static SCOREBOARD_SIDEBAR: $ResourceLocation;
        static DEMO_OVERLAY: $ResourceLocation;
        static AIR_LEVEL: $ResourceLocation;
        static ARMOR_LEVEL: $ResourceLocation;
        static OVERLAY_MESSAGE: $ResourceLocation;
        static SUBTITLE_OVERLAY: $ResourceLocation;
        static VEHICLE_HEALTH: $ResourceLocation;
        static EFFECTS: $ResourceLocation;
        static CROSSHAIR: $ResourceLocation;
        static PLAYER_HEALTH: $ResourceLocation;
        static CAMERA_OVERLAYS: $ResourceLocation;
        static BOSS_OVERLAY: $ResourceLocation;
        static SLEEP_OVERLAY: $ResourceLocation;
        static DEBUG_OVERLAY: $ResourceLocation;
        static SELECTED_ITEM_NAME: $ResourceLocation;
        static EXPERIENCE_BAR: $ResourceLocation;
        static TITLE: $ResourceLocation;
        static HOTBAR: $ResourceLocation;
        static SAVING_INDICATOR: $ResourceLocation;
        static TAB_LIST: $ResourceLocation;
        constructor();
    }
    export class $ConfigurationScreen$UndoManager$Step<T> extends $Record {
        undo(): $Consumer<T>;
        run(): $Consumer<T>;
        oldValue(): T;
        newValue(): T;
        constructor(run: $Consumer_<T>, newValue: T, undo: $Consumer_<T>, oldValue: T);
    }
    export class $ModListScreen$SortType extends $Enum<$ModListScreen$SortType> implements $Comparator<$ModContainer> {
        reversed(): $Comparator<$ModContainer>;
        thenComparing<U>(arg0: $Function_<$ModContainer, U>, arg1: $Comparator<U>): $Comparator<$ModContainer>;
        thenComparing(arg0: $Comparator<$ModContainer>): $Comparator<$ModContainer>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$ModContainer, U>): $Comparator<$ModContainer>;
        thenComparingInt(arg0: $ToIntFunction_<$ModContainer>): $Comparator<$ModContainer>;
        thenComparingLong(arg0: $ToLongFunction_<$ModContainer>): $Comparator<$ModContainer>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$ModContainer>): $Comparator<$ModContainer>;
    }
    /**
     * Values that may be interpreted as {@link $ModListScreen$SortType}.
     */
    export type $ModListScreen$SortType_ = "normal" | "a_to_z" | "z_to_a";
    export class $ScrollableExperimentsScreen extends $ExperimentsScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static INFO: $Component;
        title: $Component;
        packs: $Object2BooleanMap<$Pack>;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MAIN_CONTENT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static TITLE: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $Screen, packRepository: $PackRepository, output: $Consumer_<$PackRepository>);
    }
    /**
     * Manager for `ClientTooltipComponent` factories.
     * 
     * Provides a lookup.
     */
    export class $ClientTooltipComponentManager {
        static init(): void;
        /**
         * Creates a client component for the given argument, or null if unsupported.
         */
        static createClientTooltipComponent(component: $TooltipComponent): $ClientTooltipComponent;
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Context extends $Record {
        parent(): $Screen;
        static list(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: $Screen): $ConfigurationScreen$ConfigurationSectionScreen$Context;
        filter(): $ConfigurationScreen$ConfigurationSectionScreen$Filter;
        entries(): $Set<$UnmodifiableConfig$Entry>;
        static top(arg0: string, arg1: $Screen, arg2: $ModConfig, arg3: $ConfigurationScreen$ConfigurationSectionScreen$Filter_): $ConfigurationScreen$ConfigurationSectionScreen$Context;
        static section(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: $Screen, arg2: $Set_<$UnmodifiableConfig$Entry>, arg3: $Map_<string, $Object>, arg4: string): $ConfigurationScreen$ConfigurationSectionScreen$Context;
        modId(): string;
        modConfig(): $ModConfig;
        modSpec(): $ModConfigSpec;
        valueSpecs(): $Map<string, $Object>;
        keylist(): $List<string>;
        constructor(modId: string, parent: $Screen, modConfig: $ModConfig, modSpec: $ModConfigSpec, entries: $Set_<$UnmodifiableConfig$Entry>, valueSpecs: $Map_<string, $Object>, keylist: $List_<string>, filter: $ConfigurationScreen$ConfigurationSectionScreen$Filter_);
    }
    export class $ConfigurationScreen$ConfigurationListScreen<T> extends $ConfigurationScreen$ConfigurationSectionScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        lastScreen: $Screen;
        list: $OptionsList;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        options: $Options;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: string, arg2: $Component_, arg3: $ModConfigSpec$ListValueSpec, arg4: $ModConfigSpec$ConfigValue<$List_<T>>);
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Custom<T> extends $Record implements $OptionInstance$ValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        codec(): $Codec<T>;
        static BOOLEAN_VALUES_NO_PREFIX: $ConfigurationScreen$ConfigurationSectionScreen$Custom<boolean>;
        constructor(values: $List_<T>);
    }
    export class $ConfigurationScreen$UndoManager {
        undo(): void;
        add<T>(arg0: $Consumer_<T>, arg1: T, arg2: $Consumer_<T>, arg3: T): void;
        add(...arg0: $ConfigurationScreen$UndoManager$Step_<never>[]): void;
        add(arg0: $List_<$ConfigurationScreen$UndoManager$Step_<never>>): void;
        step<T>(arg0: $Consumer_<T>, arg1: T, arg2: $Consumer_<T>, arg3: T): $ConfigurationScreen$UndoManager$Step<T>;
        addNoExecute<T>(arg0: $Consumer_<T>, arg1: T, arg2: $Consumer_<T>, arg3: T): void;
        redo(): void;
        canUndo(): boolean;
        canRedo(): boolean;
        constructor();
    }
    export class $ModMismatchDisconnectedScreen$MismatchInfoPanel$1Row extends $Record {
    }
    export class $LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry extends $ObjectSelectionList$Entry<$LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry>;
    }
}
