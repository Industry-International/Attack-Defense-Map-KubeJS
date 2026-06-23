import { $GameType } from "@package/net/minecraft/world/level";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $AbstractSliderButton, $WidgetTooltipHolder, $AbstractSelectionList, $ContainerObjectSelectionList, $PopupScreen, $Button, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $Button$CreateNarration, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $WorldGenerationInfo } from "@package/com/mojang/realmsclient/util";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $RowButton } from "@package/com/mojang/realmsclient/gui";
import { $LevelSummary } from "@package/net/minecraft/world/level/storage";
import { $List } from "@package/java/util";
import { $RealmsServiceException } from "@package/com/mojang/realmsclient/exception";
import { $WorldTemplate, $Backup, $RealmsServer, $RealmsWorldOptions, $WorldTemplatePaginatedList, $WorldDownload, $RealmsServer$WorldType_ } from "@package/com/mojang/realmsclient/dto";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RealmsMainScreen } from "@package/com/mojang/realmsclient";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Record, $Runnable_ } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $LongRunningTask, $RealmCreationTask } from "@package/com/mojang/realmsclient/util/task";
import { $RealmsScreen, $RealmsObjectSelectionList } from "@package/net/minecraft/realms";

declare module "@package/com/mojang/realmsclient/gui/screens" {
    export class $RealmsSettingsScreen extends $RealmsScreen {
        save(): void;
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
        constructor(configureWorldScreen: $RealmsConfigureWorldScreen, serverData: $RealmsServer);
    }
    export class $RealmsResetWorldScreen$FrameButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
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
    export class $RealmsSelectFileToUploadScreen extends $RealmsScreen {
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
        static TITLE: $Component;
        screenExecutor: $Executor;
        static COLOR_LINK: number;
        font: $Font;
        constructor(realmCreationTask: $RealmCreationTask | null, realmId: number, arg2: number, slotId: $RealmsResetWorldScreen);
    }
    export class $RealmsPlayerScreen$Entry extends $ContainerObjectSelectionList$Entry<$RealmsPlayerScreen$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsPlayerScreen$Entry>;
    }
    export class $UploadResult$Builder {
        build(): $UploadResult;
        withErrorMessage(errorMessage: string | null): $UploadResult$Builder;
        withStatusCode(statusCode: number): $UploadResult$Builder;
        constructor();
    }
    export class $RealmsGenericErrorScreen$ErrorMessage extends $Record {
    }
    export class $RealmsParentalConsentScreen extends $RealmsScreen {
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
        constructor(nextScreen: $Screen);
    }
    export class $RealmsTermsScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, realmsServer: $RealmsServer);
    }
    export class $RealmsConfirmScreen extends $RealmsScreen {
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
        constructor(callback: $BooleanConsumer_, title1: $Component_, title2: $Component_);
    }
    export class $RealmsNotificationsScreen extends $RealmsScreen {
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
        constructor();
    }
    export class $RealmsSlotOptionsScreen extends $RealmsScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static GAME_MODES: $List<$GameType>;
        static SKIN_FACE_SIZE: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static DIFFICULTIES: $List<$Difficulty>;
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
        constructor(parent: $RealmsConfigureWorldScreen, options: $RealmsWorldOptions, worldType: $RealmsServer$WorldType_, activeSlot: number);
    }
    export class $RealmsSelectWorldTemplateScreen$WorldTemplateList extends $RealmsObjectSelectionList<$RealmsSelectWorldTemplateScreen$Entry> {
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
        hovered: $RealmsSelectWorldTemplateScreen$Entry;
        height: number;
    }
    export class $RealmsResetWorldScreen extends $RealmsScreen {
        static forResetSlot(lastScreen: $Screen, serverData: $RealmsServer, resetWorldRunnable: $Runnable_): $RealmsResetWorldScreen;
        static forEmptySlot(lastScreen: $Screen, slot: number, serverData: $RealmsServer, resetWorldRunnable: $Runnable_): $RealmsResetWorldScreen;
        static forNewRealm(lastScreen: $Screen, serverData: $RealmsServer, realmCreationTask: $RealmCreationTask, resetWorldRunnable: $Runnable_): $RealmsResetWorldScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SKIN_FACE_SIZE: number;
        static CUBE_MAP: $CubeMap;
        slot: number;
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
        static CREATE_WORLD_RESET_TASK_TITLE: $Component;
        static COLOR_MEDIUM_GRAY: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static EXPIRATION_NOTIFICATION_DAYS: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        static COLOR_LINK: number;
        font: $Font;
        constructor(lastScreen: $Screen, serverData: $RealmsServer, slot: number, title: $Component_, subtitle: $Component_, subtitleColor: number, resetTaskTitle: $Component_, realmCreationTask: $RealmCreationTask | null, resetWorldRunnable: $Runnable_);
    }
    export class $RealmsSubscriptionInfoScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, serverData: $RealmsServer, mainScreen: $Screen);
    }
    export class $RealmsClientOutdatedScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen);
    }
    export class $RealmsGenericErrorScreen extends $RealmsScreen {
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
        constructor(title: $Component_, line2: $Component_, message: $Screen);
        constructor(message: $Component_, nextScreen: $Screen);
        constructor(serviceException: $RealmsServiceException, nextScreen: $Screen);
    }
    export class $RealmsLongRunningMcoTaskScreen extends $RealmsScreen {
        setTitle(title: $Component_): void;
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
        constructor(lastScreen: $Screen, ...queuedTasks: $LongRunningTask[]);
    }
    export class $RealmsBackupInfoScreen$BackupInfoList extends $ObjectSelectionList<$RealmsBackupInfoScreen$BackupInfoListEntry> {
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
        hovered: $RealmsBackupInfoScreen$BackupInfoListEntry;
        height: number;
    }
    export class $RealmsSlotOptionsScreen$SettingsSlider extends $AbstractSliderButton {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        value: number;
        static TEXT_MARGIN: number;
        height: number;
    }
    export class $RealmsPendingInvitesScreen$Entry extends $ObjectSelectionList$Entry<$RealmsPendingInvitesScreen$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsPendingInvitesScreen$Entry>;
    }
    export class $RealmsBackupInfoScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, backup: $Backup);
    }
    export class $AddRealmPopupScreen extends $RealmsScreen {
        static renderDiamond(guiGraphics: $GuiGraphics, button: $Button): void;
        static updateCarouselImages(resourceManager: $ResourceManager): void;
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
        constructor(backgroundScreen: $Screen, trialAvailable: boolean);
    }
    export class $RealmsSelectFileToUploadScreen$Entry extends $ObjectSelectionList$Entry<$RealmsSelectFileToUploadScreen$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsSelectFileToUploadScreen$Entry>;
    }
    export class $RealmsInviteScreen extends $RealmsScreen {
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
        constructor(configureScreen: $RealmsConfigureWorldScreen, lastScreen: $Screen, serverData: $RealmsServer);
    }
    export class $RealmsPlayerScreen extends $RealmsScreen {
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
        constructor(lastScreen: $RealmsConfigureWorldScreen, serverData: $RealmsServer);
    }
    export class $RealmsBackupScreen extends $RealmsScreen {
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
        constructor(lastScreen: $RealmsConfigureWorldScreen, serverData: $RealmsServer, slotId: number);
    }
    export class $RealmsDownloadLatestWorldScreen$DownloadStatus {
        bytesWritten: number;
        totalBytes: number;
        constructor();
    }
    export class $RealmsDownloadLatestWorldScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, worldDownload: $WorldDownload, worldName: string, callback: $BooleanConsumer_);
    }
    export class $RealmsPendingInvitesScreen$Entry$AcceptRowButton extends $RowButton {
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
    }
    export class $RealmsBackupScreen$BackupObjectSelectionList extends $ContainerObjectSelectionList<$RealmsBackupScreen$Entry> {
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
        hovered: $RealmsBackupScreen$Entry;
        height: number;
    }
    export class $RealmsPopups {
        static infoPopupScreen(backgroundScreen: $Screen, message: $Component_, onContinue: $Consumer_<$PopupScreen>): $PopupScreen;
        static warningAcknowledgePopupScreen(backgroundScreen: $Screen, message: $Component_, onContinue: $Consumer_<$PopupScreen>): $PopupScreen;
        static warningPopupScreen(backgroundScreen: $Screen, message: $Component_, onContinue: $Consumer_<$PopupScreen>): $PopupScreen;
        constructor();
    }
    export class $UploadResult {
        errorMessage: string;
        statusCode: number;
    }
    export class $RealmsBackupInfoScreen$BackupInfoListEntry extends $ObjectSelectionList$Entry<$RealmsBackupInfoScreen$BackupInfoListEntry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsBackupInfoScreen$BackupInfoListEntry>;
    }
    export class $RealmsBackupScreen$Entry extends $ContainerObjectSelectionList$Entry<$RealmsBackupScreen$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsBackupScreen$Entry>;
    }
    export class $RealmsPlayerScreen$InvitedObjectSelectionList extends $ContainerObjectSelectionList<$RealmsPlayerScreen$Entry> {
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
        hovered: $RealmsPlayerScreen$Entry;
        height: number;
    }
    export class $RealmsPendingInvitesScreen$Entry$RejectRowButton extends $RowButton {
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
    }
    export class $RealmsSelectWorldTemplateScreen$Entry extends $ObjectSelectionList$Entry<$RealmsSelectWorldTemplateScreen$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsSelectWorldTemplateScreen$Entry>;
    }
    export class $RealmsCreateRealmScreen extends $RealmsScreen {
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
        constructor(lastScreen: $RealmsMainScreen, realmsServer: $RealmsServer);
        constructor(lastScreen: $RealmsMainScreen, parentId: number);
    }
    export class $RealmsPendingInvitesScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, title: $Component_);
    }
    export class $RealmsLongRunningMcoTickTaskScreen extends $RealmsLongRunningMcoTaskScreen {
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
        constructor(lastScreen: $Screen, task: $LongRunningTask);
    }
    export class $RealmsBrokenWorldScreen extends $RealmsScreen {
        doSwitchOrReset(): void;
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
        constructor(lastScreen: $Screen, serverId: number, arg2: boolean);
    }
    export class $RealmsUploadScreen extends $RealmsScreen {
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
        constructor(realmCreationTask: $RealmCreationTask | null, realmId: number, arg2: number, slotId: $RealmsResetWorldScreen, lastScreen: $LevelSummary);
    }
    export class $RealmsPendingInvitesScreen$PendingInvitationSelectionList extends $RealmsObjectSelectionList<$RealmsPendingInvitesScreen$Entry> {
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
        hovered: $RealmsPendingInvitesScreen$Entry;
        height: number;
    }
    export class $RealmsNotificationsScreen$DataFetcherConfiguration {
    }
    export interface $RealmsNotificationsScreen$DataFetcherConfiguration {
    }
    export class $RealmsConfigureWorldScreen extends $RealmsScreen {
        saveSlotSettings(worldOptions: $RealmsWorldOptions): void;
        openTheWorld(join: boolean): void;
        saveSettings(key: string, value: string): void;
        stateChanged(): void;
        getNewScreen(): $RealmsConfigureWorldScreen;
        closeTheWorld(): void;
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
        constructor(lastScreen: $RealmsMainScreen, serverId: number);
        get newScreen(): $RealmsConfigureWorldScreen;
    }
    export class $RealmsSelectWorldTemplateScreen extends $RealmsScreen {
        setWarning(...warning: $Component_[]): void;
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
        constructor(title: $Component_, callback: $Consumer_<$WorldTemplate>, worldType: $RealmsServer$WorldType_);
        constructor(title: $Component_, callback: $Consumer_<$WorldTemplate>, worldType: $RealmsServer$WorldType_, worldTemplatePaginatedList: $WorldTemplatePaginatedList | null);
        set warning(value: $Component_[]);
    }
    export class $RealmsResetNormalWorldScreen extends $RealmsScreen {
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
        static TITLE: $Component;
        screenExecutor: $Executor;
        static COLOR_LINK: number;
        font: $Font;
        constructor(callback: $Consumer_<$WorldGenerationInfo>, buttonTitle: $Component_);
    }
    export class $RealmsSelectFileToUploadScreen$WorldSelectionList extends $RealmsObjectSelectionList<$RealmsSelectFileToUploadScreen$Entry> {
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
        hovered: $RealmsSelectFileToUploadScreen$Entry;
        height: number;
    }
}
