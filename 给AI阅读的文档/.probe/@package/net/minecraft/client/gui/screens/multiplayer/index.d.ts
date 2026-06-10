import { $Logger } from "@package/org/slf4j";
import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $HeaderAndFooterLayout, $Layout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ThreadPoolExecutor, $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $WidgetTooltipHolder, $ObjectSelectionList, $AbstractSelectionList, $Checkbox, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $ContainerObjectSelectionList, $AbstractSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AutoCloseable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $LanServer;
        getServerNarration(): $Component;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        serverData: $LanServer;
        constructor(arg0: $JoinMultiplayerScreen, arg1: $LanServer);
        get serverNarration(): $Component;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen {
        setSelected(arg0: $ServerSelectionList$Entry): void;
        joinSelectedServer(): void;
        onSelectedChange(): void;
        getPinger(): $ServerStatusPinger;
        getServers(): $ServerList;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        serverSelectionList: $ServerSelectionList;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
        set selected(value: $ServerSelectionList$Entry);
        get pinger(): $ServerStatusPinger;
        get servers(): $ServerList;
    }
    export class $SafetyScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        message: $Component;
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
        constructor(arg0: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
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
        constructor(arg0: $Component_, arg1: $Connection);
    }
    export class $WarningScreen extends $Screen {
        addFooterButtons(): $Layout;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        message: $Component;
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
        constructor(arg0: $Component_, arg1: $Component_, arg2: $Component_);
        constructor(arg0: $Component_, arg1: $Component_, arg2: $Component_, arg3: $Component_);
    }
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerLinksScreen$LinkListEntry>;
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> {
        removed(): void;
        setSelected(arg0: $ServerSelectionList$Entry): void;
        static access$000(arg0: $ServerSelectionList, arg1: $AbstractSelectionList$Entry<any>): void;
        static access$100(arg0: $ServerSelectionList, arg1: number): number;
        updateOnlineServers(arg0: $ServerList): void;
        updateNetworkServers(arg0: $List_<$LanServer>): void;
        minecraft: $Minecraft;
        static PINGING_2_SPRITE: $ResourceLocation;
        static PING_1_SPRITE: $ResourceLocation;
        static PINGING_1_SPRITE: $ResourceLocation;
        static PINGING_3_SPRITE: $ResourceLocation;
        static SCANNING_LABEL: $Component;
        itemHeight: number;
        static CANT_CONNECT_TEXT: $Component;
        static PINGING_STATUS: $Component;
        tooltip: $WidgetTooltipHolder;
        static MOVE_UP_HIGHLIGHTED_SPRITE: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static MOVE_UP_SPRITE: $ResourceLocation;
        alpha: number;
        scrollAmount: number;
        static THREAD_POOL: $ThreadPoolExecutor;
        static ONLINE_STATUS: $Component;
        height: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        static INCOMPATIBLE_SPRITE: $ResourceLocation;
        static JOIN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static MOVE_DOWN_SPRITE: $ResourceLocation;
        static INCOMPATIBLE_STATUS: $Component;
        static UNREACHABLE_SPRITE: $ResourceLocation;
        static CANT_RESOLVE_TEXT: $Component;
        static PING_4_SPRITE: $ResourceLocation;
        static SCROLLER_SPRITE: $ResourceLocation;
        static PING_3_SPRITE: $ResourceLocation;
        static PING_5_SPRITE: $ResourceLocation;
        static PINGING_4_SPRITE: $ResourceLocation;
        static PINGING_5_SPRITE: $ResourceLocation;
        static NO_CONNECTION_STATUS: $Component;
        centerListVertically: boolean;
        width: number;
        static PING_2_SPRITE: $ResourceLocation;
        static LOGGER: $Logger;
        headerHeight: number;
        hovered: $ServerSelectionList$Entry;
        static MOVE_DOWN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static JOIN_SPRITE: $ResourceLocation;
        constructor(arg0: $JoinMultiplayerScreen, arg1: $Minecraft, arg2: number, arg3: number, arg4: number, arg5: number);
        set selected(value: $ServerSelectionList$Entry);
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $ServerData;
        drawIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $ResourceLocation_): void;
        updateServerList(): void;
        this$0: $ServerSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor(arg0: $ServerSelectionList, arg1: $JoinMultiplayerScreen, arg2: $ServerData);
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
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
        hovered: $ServerLinksScreen$LinkListEntry;
        height: number;
    }
    export class $ServerLinksScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        links: $ServerLinks;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ServerLinks_);
    }
}
