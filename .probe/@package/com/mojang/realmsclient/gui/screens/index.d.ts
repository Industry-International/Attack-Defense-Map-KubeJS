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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsServer);
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
        constructor(arg0: $RealmCreationTask, arg1: number, arg2: number, arg3: $RealmsResetWorldScreen);
    }
    export class $RealmsPlayerScreen$Entry extends $ContainerObjectSelectionList$Entry<$RealmsPlayerScreen$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$RealmsPlayerScreen$Entry>;
    }
    export class $UploadResult$Builder {
        build(): $UploadResult;
        withStatusCode(arg0: number): $UploadResult$Builder;
        withErrorMessage(arg0: string): $UploadResult$Builder;
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
        constructor(arg0: $Screen);
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
        constructor(arg0: $Screen, arg1: $RealmsServer);
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
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_);
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsWorldOptions, arg2: $RealmsServer$WorldType_, arg3: number);
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
        static forEmptySlot(arg0: $Screen, arg1: number, arg2: $RealmsServer, arg3: $Runnable_): $RealmsResetWorldScreen;
        static forResetSlot(arg0: $Screen, arg1: $RealmsServer, arg2: $Runnable_): $RealmsResetWorldScreen;
        static forNewRealm(arg0: $Screen, arg1: $RealmsServer, arg2: $RealmCreationTask, arg3: $Runnable_): $RealmsResetWorldScreen;
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
        constructor(arg0: $Screen, arg1: $RealmsServer, arg2: number, arg3: $Component_, arg4: $Component_, arg5: number, arg6: $Component_, arg7: $RealmCreationTask, arg8: $Runnable_);
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
        constructor(arg0: $Screen, arg1: $RealmsServer, arg2: $Screen);
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
        constructor(arg0: $Screen);
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
        constructor(arg0: $Component_, arg1: $Component_, arg2: $Screen);
        constructor(arg0: $Component_, arg1: $Screen);
        constructor(arg0: $RealmsServiceException, arg1: $Screen);
    }
    export class $RealmsLongRunningMcoTaskScreen extends $RealmsScreen {
        setTitle(arg0: $Component_): void;
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
        constructor(arg0: $Screen, ...arg1: $LongRunningTask[]);
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
        constructor(arg0: $Screen, arg1: $Backup);
    }
    export class $AddRealmPopupScreen extends $RealmsScreen {
        static renderDiamond(arg0: $GuiGraphics, arg1: $Button): void;
        static updateCarouselImages(arg0: $ResourceManager): void;
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
        constructor(arg0: $Screen, arg1: boolean);
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $Screen, arg2: $RealmsServer);
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsServer);
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsServer, arg2: number);
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
        constructor(arg0: $Screen, arg1: $WorldDownload, arg2: string, arg3: $BooleanConsumer_);
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
        static warningAcknowledgePopupScreen(arg0: $Screen, arg1: $Component_, arg2: $Consumer_<$PopupScreen>): $PopupScreen;
        static infoPopupScreen(arg0: $Screen, arg1: $Component_, arg2: $Consumer_<$PopupScreen>): $PopupScreen;
        static warningPopupScreen(arg0: $Screen, arg1: $Component_, arg2: $Consumer_<$PopupScreen>): $PopupScreen;
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
        constructor(arg0: $RealmsMainScreen, arg1: $RealmsServer);
        constructor(arg0: $RealmsMainScreen, arg1: number);
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
        constructor(arg0: $Screen, arg1: $Component_);
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
        constructor(arg0: $Screen, arg1: $LongRunningTask);
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
        constructor(arg0: $Screen, arg1: number, arg2: boolean);
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
        constructor(arg0: $RealmCreationTask, arg1: number, arg2: number, arg3: $RealmsResetWorldScreen, arg4: $LevelSummary);
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
        getNewScreen(): $RealmsConfigureWorldScreen;
        stateChanged(): void;
        saveSettings(arg0: string, arg1: string): void;
        openTheWorld(arg0: boolean): void;
        saveSlotSettings(arg0: $RealmsWorldOptions): void;
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
        constructor(arg0: $RealmsMainScreen, arg1: number);
        get newScreen(): $RealmsConfigureWorldScreen;
    }
    export class $RealmsSelectWorldTemplateScreen extends $RealmsScreen {
        setWarning(...arg0: $Component_[]): void;
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
        constructor(arg0: $Component_, arg1: $Consumer_<$WorldTemplate>, arg2: $RealmsServer$WorldType_);
        constructor(arg0: $Component_, arg1: $Consumer_<$WorldTemplate>, arg2: $RealmsServer$WorldType_, arg3: $WorldTemplatePaginatedList);
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
        constructor(arg0: $Consumer_<$WorldGenerationInfo>, arg1: $Component_);
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
