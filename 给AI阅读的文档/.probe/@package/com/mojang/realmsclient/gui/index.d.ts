import { $Consumer_ } from "@package/java/util/function";
import { $DataFetcher$Task, $DataFetcher } from "@package/com/mojang/realmsclient/gui/task";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $WidgetTooltipHolder, $ObjectSelectionList$Entry, $Button$OnPress_, $Button$CreateNarration, $WidgetSprites, $Button } from "@package/net/minecraft/client/gui/components";
import { $RealmsPersistence } from "@package/com/mojang/realmsclient/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $Record, $Iterable } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Spliterator, $Iterator, $List, $List_ } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $RealmsObjectSelectionList } from "@package/net/minecraft/realms";
import { $RealmsNews, $RealmsServer, $RealmsServerPlayerLists, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";
export * as screens from "@package/com/mojang/realmsclient/gui/screens";
export * as task from "@package/com/mojang/realmsclient/gui/task";

declare module "@package/com/mojang/realmsclient/gui" {
    export class $RealmsWorldSlotButton$Action extends $Enum<$RealmsWorldSlotButton$Action> {
        static values(): $RealmsWorldSlotButton$Action[];
        static valueOf(arg0: string): $RealmsWorldSlotButton$Action;
        static SWITCH_SLOT: $RealmsWorldSlotButton$Action;
        static JOIN: $RealmsWorldSlotButton$Action;
        static NOTHING: $RealmsWorldSlotButton$Action;
    }
    /**
     * Values that may be interpreted as {@link $RealmsWorldSlotButton$Action}.
     */
    export type $RealmsWorldSlotButton$Action_ = "nothing" | "switch_slot" | "join";
    export class $RealmsDataFetcher {
        getTasks(): $List<$DataFetcher$Task<never>>;
        dataFetcher: $DataFetcher;
        notificationsTask: $DataFetcher$Task<$List<$RealmsNotification>>;
        pendingInvitesTask: $DataFetcher$Task<number>;
        trialAvailabilityTask: $DataFetcher$Task<boolean>;
        newsTask: $DataFetcher$Task<$RealmsNews>;
        newsManager: $RealmsNewsManager;
        serverListUpdateTask: $DataFetcher$Task<$RealmsDataFetcher$ServerListData>;
        onlinePlayersTask: $DataFetcher$Task<$RealmsServerPlayerLists>;
        constructor(realmsClient: $RealmsClient);
        get tasks(): $List<$DataFetcher$Task<never>>;
    }
    export class $RealmsWorldSlotButton extends $Button {
        getState(): $RealmsWorldSlotButton$State;
        setServerData(serverData: $RealmsServer): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        static EMPTY_SLOT_LOCATION: $ResourceLocation;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static DEFAULT_WORLD_SLOT_2: $ResourceLocation;
        static BIG_WIDTH: number;
        static DEFAULT_WORLD_SLOT_3: $ResourceLocation;
        static DEFAULT_WORLD_SLOT_1: $ResourceLocation;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, slotIndex: number, onPress: $Button$OnPress_);
        get state(): $RealmsWorldSlotButton$State;
        set serverData(value: $RealmsServer);
    }
    export class $RowButton {
        getRight(): number;
        getBottom(): number;
        onClick(index: number): void;
        static rowButtonMouseClicked(list: $RealmsObjectSelectionList<never>, entry: $ObjectSelectionList$Entry<never>, buttons: $List_<$RowButton>, button: number, mouseX: number, arg5: number): void;
        static drawButtonsInRow(guiGraphics: $GuiGraphics, buttons: $List_<$RowButton>, pendingInvitations: $RealmsObjectSelectionList<never>, x: number, y: number, mouseX: number, mouseY: number): void;
        drawForRowAt(guiGraphics: $GuiGraphics, x: number, y: number, mouseX: number, mouseY: number): void;
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
        constructor(width: number, height: number, xOffset: number, yOffset: number);
        get right(): number;
        get bottom(): number;
    }
    export class $RealmsWorldSlotButton$State {
        minigame: boolean;
        action: $RealmsWorldSlotButton$Action;
        empty: boolean;
        constructor(server: $RealmsServer, slot: number);
    }
    export class $RealmsNewsManager {
        hasUnreadNews(): boolean;
        updateUnreadNews(realmsNews: $RealmsNews): void;
        newsLink(): string;
        constructor(newsLocalStorage: $RealmsPersistence);
    }
    export class $RealmsServerList implements $Iterable<$RealmsServer> {
        isEmpty(): boolean;
        iterator(): $Iterator<$RealmsServer>;
        removeItem(server: $RealmsServer): void;
        updateServersList(servers: $List_<$RealmsServer>): void;
        spliterator(): $Spliterator<$RealmsServer>;
        forEach(arg0: $Consumer_<$RealmsServer>): void;
        constructor(minecraft: $Minecraft);
        [Symbol.iterator](): Iterator<$RealmsServer>
        get empty(): boolean;
    }
    export class $RealmsDataFetcher$ServerListData extends $Record {
        serverList(): $List<$RealmsServer>;
        availableSnapshotServers(): $List<$RealmsServer>;
        constructor(arg0: $List_<$RealmsServer>, arg1: $List_<$RealmsServer>);
    }
}
