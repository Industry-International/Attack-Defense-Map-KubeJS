import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $CycleButton, $WidgetTooltipHolder, $EditBox, $AbstractSelectionList, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $UUID, $List, $Set, $UUID_, $Collection_ } from "@package/java/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $SocialInteractionsScreen$Page extends $Enum<$SocialInteractionsScreen$Page> {
        static values(): $SocialInteractionsScreen$Page[];
        static valueOf(arg0: string): $SocialInteractionsScreen$Page;
        static ALL: $SocialInteractionsScreen$Page;
        static BLOCKED: $SocialInteractionsScreen$Page;
        static HIDDEN: $SocialInteractionsScreen$Page;
    }
    /**
     * Values that may be interpreted as {@link $SocialInteractionsScreen$Page}.
     */
    export type $SocialInteractionsScreen$Page_ = "all" | "hidden" | "blocked";
    export class $PlayerEntry extends $ContainerObjectSelectionList$Entry<$PlayerEntry> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isRemoved(): boolean;
        setRemoved(hasRecentMessages: boolean): void;
        getPlayerId(): $UUID;
        getPlayerName(): string;
        getEntryNarationMessage(component: $MutableComponent_): $MutableComponent;
        setHasRecentMessages(hasRecentMessages: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        hasRecentMessages(): boolean;
        getSkinGetter(): $Supplier<$PlayerSkin>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isChatReportable(): boolean;
        static BG_FILL: number;
        static PLAYERNAME_COLOR: number;
        static BG_FILL_REMOVED: number;
        static SKIN_SHADE: number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$PlayerEntry>;
        static PLAYER_STATUS_COLOR: number;
        constructor(minecraft: $Minecraft, socialInteractionsScreen: $SocialInteractionsScreen, id: $UUID_, playerName: string, skinGetter: $Supplier_<$PlayerSkin>, playerReportable: boolean);
        get playerId(): $UUID;
        get playerName(): string;
        get skinGetter(): $Supplier<$PlayerSkin>;
        get chatReportable(): boolean;
    }
    export class $SocialInteractionsScreen extends $Screen {
        onRemovePlayer(id: $UUID_): void;
        onAddPlayer(playerInfo: $PlayerInfo): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static EMPTY_SEARCH: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static LIST_START: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static SEARCH_START: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        socialInteractionsPlayerList: $SocialInteractionsPlayerList;
        searchBox: $EditBox;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(lastScreen: $Screen | null);
    }
    export class $SocialInteractionsPlayerList extends $ContainerObjectSelectionList<$PlayerEntry> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isEmpty(): boolean;
        setFilter(filter: string): void;
        addPlayer(playerInfo: $PlayerInfo, page: $SocialInteractionsScreen$Page_): void;
        updatePlayerList(ids: $Collection_<$UUID_>, scrollAmount: number, arg2: boolean): void;
        removePlayer(id: $UUID_): void;
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
        hovered: $PlayerEntry;
        height: number;
        constructor(socialInteractionsScreen: $SocialInteractionsScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get empty(): boolean;
        set filter(value: string);
    }
    export class $PlayerSocialManager {
        isHidden(id: $UUID_): boolean;
        addPlayer(playerInfo: $PlayerInfo): void;
        getHiddenPlayers(): $Set<$UUID>;
        shouldHideMessageFrom(id: $UUID_): boolean;
        stopOnlineMode(): void;
        startOnlineMode(): void;
        isBlocked(id: $UUID_): boolean;
        getDiscoveredUUID(uuid: string): $UUID;
        removePlayer(id: $UUID_): void;
        showPlayer(id: $UUID_): void;
        hidePlayer(id: $UUID_): void;
        constructor(minecraft: $Minecraft, service: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
