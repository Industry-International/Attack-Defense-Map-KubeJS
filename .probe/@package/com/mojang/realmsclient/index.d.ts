import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $WidgetTooltipHolder, $ImageButton, $AbstractSelectionList, $ObjectSelectionList$Entry, $Button$CreateNarration, $WidgetSprites, $Renderable, $SpriteIconButton$CenteredIcon } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $RealmsServiceException } from "@package/com/mojang/realmsclient/exception";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $RealmsScreen, $RealmsObjectSelectionList } from "@package/net/minecraft/realms";
export * as gui from "@package/com/mojang/realmsclient/gui";
export * as dto from "@package/com/mojang/realmsclient/dto";
export * as util from "@package/com/mojang/realmsclient/util";
export * as client from "@package/com/mojang/realmsclient/client";
export * as exception from "@package/com/mojang/realmsclient/exception";

declare module "@package/com/mojang/realmsclient" {
    export class $RealmsMainScreen$EmptyEntry extends $RealmsMainScreen$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsMainScreen$Entry>;
    }
    export class $RealmsMainScreen$ButtonEntry extends $RealmsMainScreen$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsMainScreen$Entry>;
    }
    export class $RealmsAvailability$Result extends $Record {
        type(): $RealmsAvailability$Type;
        exception(): $RealmsServiceException;
        createErrorScreen(arg0: $Screen): $Screen;
        constructor(arg0: $RealmsAvailability$Type_, arg1: $RealmsServiceException);
        constructor(arg0: $RealmsServiceException);
        constructor(arg0: $RealmsAvailability$Type_);
    }
    export class $RealmsMainScreen$RealmsCall<T> {
    }
    export interface $RealmsMainScreen$RealmsCall<T> {
    }
    /**
     * Values that may be interpreted as {@link $RealmsMainScreen$RealmsCall}.
     */
    export type $RealmsMainScreen$RealmsCall_<T> = (() => void);
    export class $RealmsAvailability {
        static get(): $CompletableFuture<$RealmsAvailability$Result>;
        constructor();
    }
    export class $RealmsMainScreen$NotificationButton extends $SpriteIconButton$CenteredIcon {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $RealmsMainScreen$ServerEntry extends $RealmsMainScreen$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsMainScreen$Entry>;
    }
    export class $RealmsMainScreen$CrossButton extends $ImageButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $RealmsMainScreen$Entry extends $ObjectSelectionList$Entry<$RealmsMainScreen$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsMainScreen$Entry>;
    }
    export class $RealmsMainScreen$AvailableSnapshotEntry extends $RealmsMainScreen$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsMainScreen$Entry>;
    }
    export class $RealmsAvailability$Type extends $Enum<$RealmsAvailability$Type> {
        static values(): $RealmsAvailability$Type[];
        static valueOf(arg0: string): $RealmsAvailability$Type;
        static SUCCESS: $RealmsAvailability$Type;
        static AUTHENTICATION_ERROR: $RealmsAvailability$Type;
        static NEEDS_PARENTAL_CONSENT: $RealmsAvailability$Type;
        static INCOMPATIBLE_CLIENT: $RealmsAvailability$Type;
        static UNEXPECTED_ERROR: $RealmsAvailability$Type;
    }
    /**
     * Values that may be interpreted as {@link $RealmsAvailability$Type}.
     */
    export type $RealmsAvailability$Type_ = "success" | "incompatible_client" | "needs_parental_consent" | "authentication_error" | "unexpected_error";
    export class $RealmsMainScreen$NotificationMessageEntry extends $RealmsMainScreen$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsMainScreen$Entry>;
    }
    export class $Unit extends $Enum<$Unit> {
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static getLargest(arg0: number): $Unit;
        static convertTo(arg0: number, arg1: $Unit_): number;
        static humanReadable(arg0: number): string;
        static humanReadable(arg0: number, arg1: $Unit_): string;
        static B: $Unit;
        static MB: $Unit;
        static KB: $Unit;
        static GB: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "b" | "kb" | "mb" | "gb";
    export class $RealmsMainScreen$LayoutState extends $Enum<$RealmsMainScreen$LayoutState> {
    }
    /**
     * Values that may be interpreted as {@link $RealmsMainScreen$LayoutState}.
     */
    export type $RealmsMainScreen$LayoutState_ = "loading" | "no_realms" | "list";
    export class $RealmsMainScreen extends $RealmsScreen {
        static getVersionComponent(arg0: string, arg1: number): $Component;
        static getVersionComponent(arg0: string, arg1: boolean): $Component;
        static isSnapshot(): boolean;
        static refreshPendingInvites(): void;
        static refreshServerList(): void;
        resetScreen(): void;
        static play(arg0: $RealmsServer, arg1: $Screen, arg2: boolean): void;
        static play(arg0: $RealmsServer, arg1: $Screen): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SKIN_FACE_SIZE: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static COLOR_LINK_HOVER: number;
        static COLOR_DARK_GRAY: number;
        static TITLE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static COLOR_GREEN: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static SIZE_LIMIT: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static COLOR_MEDIUM_GRAY: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static EXPIRATION_NOTIFICATION_DAYS: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static COLOR_LINK: number;
        font: $Font;
        constructor(arg0: $Screen);
        static get snapshot(): boolean;
    }
    export class $RealmsMainScreen$ParentEntry extends $RealmsMainScreen$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsMainScreen$Entry>;
    }
    export class $RealmsMainScreen$RealmSelectionList extends $RealmsObjectSelectionList<$RealmsMainScreen$Entry> {
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
        hovered: $RealmsMainScreen$Entry;
        height: number;
    }
}
