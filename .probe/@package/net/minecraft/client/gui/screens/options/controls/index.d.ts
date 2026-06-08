import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $WidgetTooltipHolder, $AbstractSelectionList, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $OptionsList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus, $KeyMapping, $Options } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List } from "@package/java/util";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge } from "@package/com/blamejared/controlling/mixin";

declare module "@package/net/minecraft/client/gui/screens/options/controls" {
    export class $KeyBindsList extends $ContainerObjectSelectionList<$KeyBindsList$Entry> {
        static access$100(arg0: $KeyBindsList): $Minecraft;
        static access$000(arg0: $KeyBindsList): $Minecraft;
        static access$300(arg0: $KeyBindsList): number;
        static access$200(arg0: $KeyBindsList): number;
        static access$500(arg0: $KeyBindsList): $Minecraft;
        static access$400(arg0: $KeyBindsList): $Minecraft;
        static access$600(arg0: $KeyBindsList): $Minecraft;
        resetMappingAndUpdateButtons(): void;
        refreshEntries(): void;
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        keyBindsScreen: $KeyBindsScreen;
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
        hovered: $KeyBindsList$Entry;
        height: number;
        constructor(arg0: $KeyBindsScreen, arg1: $Minecraft);
    }
    export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
        refreshEntry(): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$KeyBindsList$Entry>;
        constructor();
    }
    export class $ControlsScreen extends $OptionsSubScreen {
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
        constructor(arg0: $Screen, arg1: $Options);
    }
    export class $KeyBindsList$CategoryEntry extends $KeyBindsList$Entry {
        this$0: $KeyBindsList;
        name: $Component;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$KeyBindsList$Entry>;
        constructor(arg0: $KeyBindsList, arg1: $Component_);
    }
    export class $KeyBindsList$KeyEntry extends $KeyBindsList$Entry {
        this$0: $KeyBindsList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$KeyBindsList$Entry>;
        constructor(arg0: $KeyBindsList, arg1: $KeyMapping, arg2: $Component_);
    }
    export class $KeyBindsScreen extends $OptionsSubScreen implements $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge {
        controlling$getResetButton(): $Button;
        isIsLastModifierHeldDown(): boolean;
        setLastPressedModifier(arg0: $InputConstants$Key): void;
        controlling$setResetButton(arg0: $Button): void;
        getLastPressedModifier(): $InputConstants$Key;
        isIsLastKeyHeldDown(): boolean;
        setIsLastModifierHeldDown(arg0: boolean): void;
        setIsLastKeyHeldDown(arg0: boolean): void;
        controlling$getKeyBindsList(): $KeyBindsList;
        controlling$setKeyBindsList(arg0: $KeyBindsList): void;
        getLastPressedKey(): $InputConstants$Key;
        setLastPressedKey(arg0: $InputConstants$Key): void;
        selectedKey: $KeyMapping;
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
        lastKeySelection: number;
        options: $Options;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Options);
    }
}
