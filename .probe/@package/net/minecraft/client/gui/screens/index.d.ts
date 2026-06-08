import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ReloadInstance } from "@package/net/minecraft/server/packs/resources";
import { $NarratorStatus, $Minecraft, $Options } from "@package/net/minecraft/client";
import { $FormattedCharSequence_, $ProgressListener } from "@package/net/minecraft/util";
import { $TransferState_, $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $Music } from "@package/net/minecraft/sounds";
import { $CreateWorldScreen, $WorldCreationContext_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $URI } from "@package/java/net";
import { $Connection, $DisconnectionDetails_ } from "@package/net/minecraft/network";
import { $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $BooleanConsumer_, $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $StructureSet_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GridLayout$RowHelper } from "@package/net/minecraft/client/gui/layouts";
import { $ScreenAccessor as $ScreenAccessor$2 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $MutableComponent, $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $ScreenButtonExtension } from "@package/com/replaymod/replay";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $GuiScreenAccessor } from "@package/com/replaymod/core/mixin";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BanDetails_ } from "@package/com/mojang/authlib/minecraft";
import { $GuiEventListener, $AbstractContainerEventHandler, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $List, $List_ } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
import { $ScreenAccessor as $ScreenAccessor$3 } from "@package/net/blay09/mods/balm/mixin";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Consumer_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Registry, $HolderGetter, $Holder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $AddServerScreenAccessor } from "@package/com/replaymod/recording/mixin";
import { $SimpleTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Throwable, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $GameType, $GameType_ } from "@package/net/minecraft/world/level";
import { $OpenToLanScreenEx, $IShareToLanScreenParamAccessor } from "@package/rikka/lanserverproperties";
import { $Logger } from "@package/org/slf4j";
import { $ScreenExtensions } from "@package/net/fabricmc/fabric/impl/client/screen";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarratableEntry$NarrationPriority_ } from "@package/net/minecraft/client/gui/narration";
import { $CommandSuggestions, $Tooltip, $EditBox, $AbstractSelectionList, $ObjectSelectionList, $Renderable, $CycleButton, $WidgetTooltipHolder, $LogoRenderer, $Button$OnPress, $Button, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $ScreenExt } from "@package/de/johni0702/minecraft/gui/versions";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ScreenAccessor as $ScreenAccessor$1 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ScreenAccessor } from "@package/net/fabricmc/fabric/mixin/screen";
import { $ChannelFuture } from "@package/io/netty/channel";
import { $ConnectScreenAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as options from "@package/net/minecraft/client/gui/screens/options";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as reporting from "@package/net/minecraft/client/gui/screens/reporting";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as achievement from "@package/net/minecraft/client/gui/screens/achievement";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as packs from "@package/net/minecraft/client/gui/screens/packs";
export * as advancements from "@package/net/minecraft/client/gui/screens/advancements";
export * as telemetry from "@package/net/minecraft/client/gui/screens/telemetry";
export * as multiplayer from "@package/net/minecraft/client/gui/screens/multiplayer";
export * as social from "@package/net/minecraft/client/gui/screens/social";
export * as debug from "@package/net/minecraft/client/gui/screens/debug";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $LoadingOverlay extends $Overlay {
        static registerTextures(arg0: $Minecraft): void;
        static FADE_OUT_TIME: number;
        static MOJANG_STUDIOS_LOGO_LOCATION: $ResourceLocation;
        static FADE_IN_TIME: number;
        constructor(arg0: $Minecraft, arg1: $ReloadInstance, arg2: $Consumer_<($Throwable) | undefined>, arg3: boolean);
    }
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        create(arg0: T, arg1: $Inventory, arg2: $Component_): U;
        fromPacket(arg0: $Component_, arg1: $MenuType_<T>, arg2: $Minecraft, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen {
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
        constructor(arg0: $BooleanSupplier_, arg1: $ReceivingLevelScreen$Reason_);
    }
    export class $DatapackLoadFailureScreen extends $Screen {
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
        constructor(arg0: $Runnable_, arg1: $Runnable_);
    }
    export class $CreateBuffetWorldScreen extends $Screen {
        updateButtonValidity(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        biomes: $Registry<$Biome>;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        biome: $Holder<$Biome>;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $WorldCreationContext_, arg2: $Consumer_<$Holder<$Biome>>);
    }
    export class $OutOfMemoryScreen extends $Screen {
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
        constructor();
    }
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $PresetFlatWorldScreen$PresetsList$Entry extends $ObjectSelectionList$Entry<$PresetFlatWorldScreen$PresetsList$Entry> {
        select(): void;
        this$1: $PresetFlatWorldScreen$PresetsList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$PresetFlatWorldScreen$PresetsList$Entry>;
    }
    export class $ProgressScreen extends $Screen implements $ProgressListener {
        stop(): void;
        progressStart(arg0: $Component_): void;
        progressStartNoAbort(arg0: $Component_): void;
        progressStage(arg0: $Component_): void;
        progressStagePercentage(arg0: number): void;
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
        constructor(arg0: boolean);
    }
    export class $ConnectScreen extends $Screen implements $ConnectScreenAccessor {
        static startConnecting(arg0: $Screen, arg1: $Minecraft, arg2: $ServerAddress, arg3: $ServerData, arg4: boolean, arg5: $TransferState_): void;
        getConnection(): $Connection;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static UNKNOWN_HOST_MESSAGE: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        aborted: boolean;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static PANORAMA: $PanoramaRenderer;
        connection: $Connection;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        channelFuture: $ChannelFuture;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static ABORT_CONNECTION: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        static LOGGER: $Logger;
        connectFailedTitle: $Component;
        screenExecutor: $Executor;
        font: $Font;
    }
    export class $ErrorScreen extends $Screen {
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
        constructor(arg0: $Component_, arg1: $Component_);
    }
    export class $DirectJoinServerScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $BooleanConsumer_, arg2: $ServerData);
    }
    export class $CreateBuffetWorldScreen$BiomeList$Entry extends $ObjectSelectionList$Entry<$CreateBuffetWorldScreen$BiomeList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry>;
    }
    export class $CreateFlatWorldScreen extends $Screen {
        settings(): $FlatLevelGeneratorSettings;
        updateButtonValidity(): void;
        setConfig(arg0: $FlatLevelGeneratorSettings): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $CreateWorldScreen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        generator: $FlatLevelGeneratorSettings;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $CreateWorldScreen, arg1: $Consumer_<$FlatLevelGeneratorSettings>, arg2: $FlatLevelGeneratorSettings);
        set config(value: $FlatLevelGeneratorSettings);
    }
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenExtensions, $GuiScreenAccessor, $ScreenExt, $ScreenButtonExtension, $ScreenAccessor$3, $ScreenAccessor, $GuiEventListener, $ContainerEventHandler, $ScreenAccessor$1, $ScreenAccessor$2 {
        init(): void;
        init(arg0: $Minecraft, arg1: number, arg2: number): void;
        added(): void;
        removed(): void;
        resize(arg0: $Minecraft, arg1: number, arg2: number): void;
        onClose(): void;
        tick(): void;
        fabric_getRemoveEvent(): $Event<any>;
        fabric_getAfterRenderEvent(): $Event<any>;
        triggerImmediateNarration(arg0: boolean): void;
        handleComponentClicked(arg0: $Style): boolean;
        renderMenuBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderMenuBackground(arg0: $GuiGraphics): void;
        renderBlurredBackground(arg0: number): void;
        afterKeyboardAction(): void;
        addRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
        updateNarratedWidget(arg0: $NarrationElementOutput): void;
        shouldNarrateNavigation(): boolean;
        fabric_getAfterTickEvent(): $Event<any>;
        static findNarratableWidget(arg0: $List_<$NarratableEntry>, arg1: $NarratableEntry): $Screen$NarratableSearchResult;
        handleDelayedNarration(): void;
        updateNarrationState(arg0: $NarrationElementOutput): void;
        fabric_getBeforeTickEvent(): $Event<any>;
        isValidCharacterForName(arg0: string, arg1: string, arg2: number): boolean;
        getNarrationMessage(): $Component;
        updateNarratorStatus(arg0: boolean): void;
        getTitle(): $Component;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static isCopy(arg0: number): boolean;
        static isPaste(arg0: number): boolean;
        static isCut(arg0: number): boolean;
        addWidget<T extends $GuiEventListener>(arg0: T): T;
        insertText(arg0: string, arg1: boolean): void;
        static hasAltDown(): boolean;
        clearFocus(): void;
        fabric_getBeforeRenderEvent(): $Event<any>;
        fabric_getAllowKeyReleaseEvent(): $Event<any>;
        fabric_getAllowMouseClickEvent(): $Event<any>;
        fabric_getAfterMouseReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseReleaseEvent(): $Event<any>;
        fabric_getAfterMouseScrollEvent(): $Event<any>;
        fabric_getAllowKeyPressEvent(): $Event<any>;
        fabric_getAfterKeyReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseScrollEvent(): $Event<any>;
        fabric_getAllowMouseReleaseEvent(): $Event<any>;
        fabric_getBeforeKeyPressEvent(): $Event<any>;
        fabric_getAllowMouseScrollEvent(): $Event<any>;
        fabric_getBeforeKeyReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseClickEvent(): $Event<any>;
        fabric_getAfterKeyPressEvent(): $Event<any>;
        fabric_getAfterMouseClickEvent(): $Event<any>;
        renderTransparentBackground(arg0: $GuiGraphics): void;
        clearTooltipForNextRenderPass(): void;
        setTooltipForNextRenderPass(arg0: $Component_): void;
        setTooltipForNextRenderPass(arg0: $Tooltip, arg1: $ClientTooltipPositioner_, arg2: boolean): void;
        setTooltipForNextRenderPass(arg0: $List_<$FormattedCharSequence_>, arg1: $ClientTooltipPositioner_, arg2: boolean): void;
        setTooltipForNextRenderPass(arg0: $List_<$FormattedCharSequence_>): void;
        static renderMenuBackgroundTexture(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        isPauseScreen(): boolean;
        static hasControlDown(): boolean;
        static wrapScreenError(arg0: $Runnable_, arg1: string, arg2: string): void;
        static getTooltipFromItem(arg0: $Minecraft, arg1: $ItemStack_): $List<$Component>;
        getBackgroundMusic(): $Music;
        doesPassEvents(): boolean;
        static hasShiftDown(): boolean;
        renderWithTooltip(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        renderBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        shouldCloseOnEsc(): boolean;
        setInitialFocus(): void;
        setInitialFocus(arg0: $GuiEventListener): void;
        renderPanorama(arg0: $GuiGraphics, arg1: number): void;
        rebuildWidgets(): void;
        setPassEvents(passEvents: boolean): void;
        afterMouseMove(): void;
        static isSelectAll(arg0: number): boolean;
        removeWidget(arg0: $GuiEventListener): void;
        changeFocus(arg0: $ComponentPath): void;
        repositionElements(): void;
        replay_getButtons(): $List<any>;
        afterMouseAction(): void;
        clearWidgets(): void;
        getUsageNarration(): $Component;
        addRenderableOnly<T extends $Renderable>(arg0: T): T;
        onFilesDrop(arg0: $List_<$Path_>): void;
        fabric_getButtons(): $List<any>;
        balm_getNarratables(): $List<$NarratableEntry>;
        balm_getRenderables(): $List<$Renderable>;
        balm$addRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
        catnip$getRenderables(): $List<$Renderable>;
        getFont(): $Font;
        libgui$getChildren(): $List<$GuiEventListener>;
        getMinecraft(): $Minecraft;
        balm_getChildren(): $List<$GuiEventListener>;
        invokeAddButton<T extends $GuiEventListener>(arg0: T): T;
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
        constructor(arg0: $Component_);
        get narrationMessage(): $Component;
        get pauseScreen(): boolean;
        get backgroundMusic(): $Music;
        set passEvents(value: boolean);
        get usageNarration(): $Component;
    }
    export class $CreateFlatWorldScreen$DetailsList$Entry extends $ObjectSelectionList$Entry<$CreateFlatWorldScreen$DetailsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$CreateFlatWorldScreen$DetailsList$Entry>;
    }
    export class $MenuScreens {
        static getConstructor<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>): $MenuScreens$ScreenConstructor<T, never>;
        /**
         * @deprecated
         */
        static register<M extends $AbstractContainerMenu, U extends $Screen>(arg0: $MenuType_<M>, arg1: $MenuScreens$ScreenConstructor_<M, U>): void;
        static init(): void;
        static create<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>, arg1: $Minecraft, arg2: number, arg3: $Component_): void;
        static getScreenFactory<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>): ($MenuScreens$ScreenConstructor<T, never>) | undefined;
        static selfTest(): boolean;
        constructor();
    }
    export class $DemoIntroScreen extends $Screen {
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
        constructor();
    }
    export class $LevelLoadingScreen extends $Screen {
        static renderChunks(arg0: $GuiGraphics, arg1: $StoringChunkProgressListener, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $StoringChunkProgressListener);
    }
    export class $RecoverWorldDataScreen extends $Screen {
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
        constructor(arg0: $Minecraft, arg1: $BooleanConsumer_, arg2: $LevelStorageSource$LevelStorageAccess);
    }
    export class $EditServerScreen extends $Screen implements $AddServerScreenAccessor {
        getServerData(): $ServerData;
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
        constructor(arg0: $Screen, arg1: $BooleanConsumer_, arg2: $ServerData);
        get serverData(): $ServerData;
    }
    export class $TitleScreen extends $Screen {
        static preloadResources(arg0: $TextureManager, arg1: $Executor_): $CompletableFuture<void>;
        handler$bff000$iris$firstInit(arg0: $CallbackInfo): void;
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
        constructor(arg0: boolean, arg1: $LogoRenderer);
        constructor(arg0: boolean);
        constructor();
    }
    export class $GenericMessageScreen extends $Screen {
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
        constructor(arg0: $Component_);
    }
    export class $GenericWaitingScreen extends $Screen {
        static createCompleted(arg0: $Component_, arg1: $Component_, arg2: $Component_, arg3: $Runnable_): $GenericWaitingScreen;
        static createWaiting(arg0: $Component_, arg1: $Component_, arg2: $Runnable_): $GenericWaitingScreen;
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
        constructor(arg0: $Component_, arg1: $Component_, arg2: $Component_, arg3: $Runnable_, arg4: number);
    }
    export class $ConfirmScreen extends $Screen {
        setDelay(arg0: number): void;
        addButtons(arg0: number): void;
        addExitButton(arg0: $Button): void;
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
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
        set delay(value: number);
    }
    export class $LoadingDotsText {
        static get(arg0: number): string;
        constructor();
    }
    export class $NoticeWithLinkScreen extends $Screen {
        static createWorldSymlinkWarningScreen(arg0: $Runnable_): $Screen;
        static createPackSymlinkWarningScreen(arg0: $Runnable_): $Screen;
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
        constructor(arg0: $Component_, arg1: $Component_, arg2: $URI, arg3: $Runnable_);
    }
    export class $ChatScreen extends $Screen {
        handler$dgo000$nochatreports$onBeforeMessage(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        moveInHistory(arg0: number): void;
        handleChatInput(arg0: string, arg1: boolean): void;
        normalizeChatMessage(arg0: string): string;
        handler$ike000$imblocker$updateChatState(arg0: string, arg1: $CallbackInfo): void;
        handler$ike000$imblocker$initChatState(arg0: $CallbackInfo): void;
        handler$ike000$imblocker$removeChatState(arg0: $CallbackInfo): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        input: $EditBox;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: string);
    }
    export class $PauseScreen$FeedbackSubScreen extends $Screen {
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
    }
    export class $CreateBuffetWorldScreen$BiomeList extends $ObjectSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry> {
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
        hovered: $CreateBuffetWorldScreen$BiomeList$Entry;
        height: number;
    }
    export class $DisconnectedScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $Component_, arg2: $DisconnectionDetails_, arg3: $Component_);
        constructor(arg0: $Screen, arg1: $Component_, arg2: $DisconnectionDetails_);
        constructor(arg0: $Screen, arg1: $Component_, arg2: $Component_, arg3: $Component_);
        constructor(arg0: $Screen, arg1: $Component_, arg2: $Component_);
    }
    export class $ConfirmLinkScreen extends $ConfirmScreen {
        static confirmMessage(arg0: boolean, arg1: string): $MutableComponent;
        static confirmMessage(arg0: boolean): $MutableComponent;
        static confirmLink(arg0: $Screen, arg1: string): $Button$OnPress;
        static confirmLink(arg0: $Screen, arg1: string, arg2: boolean): $Button$OnPress;
        static confirmLink(arg0: $Screen, arg1: $URI, arg2: boolean): $Button$OnPress;
        static confirmLink(arg0: $Screen, arg1: $URI): $Button$OnPress;
        copyToClipboard(): void;
        static confirmLinkNow(arg0: $Screen, arg1: string): void;
        static confirmLinkNow(arg0: $Screen, arg1: string, arg2: boolean): void;
        static confirmLinkNow(arg0: $Screen, arg1: $URI): void;
        static confirmLinkNow(arg0: $Screen, arg1: $URI, arg2: boolean): void;
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
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: string, arg4: $Component_, arg5: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $URI, arg4: $Component_, arg5: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $URI, arg3: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: string, arg3: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: string, arg2: boolean);
    }
    export class $ShareToLanScreen extends $Screen implements $IShareToLanScreenParamAccessor {
        getPort(): number;
        setPort(arg0: number): void;
        getLastScreen(): $Screen;
        getLSPData(): $OpenToLanScreenEx;
        getGameType(): $GameType;
        setGameType(arg0: $GameType_): void;
        isCommandEnabled(): boolean;
        movePortEditBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setCommandEnabled(arg0: boolean): void;
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
        constructor(arg0: $Screen);
        get lastScreen(): $Screen;
        get LSPData(): $OpenToLanScreenEx;
    }
    export class $DeathScreen$TitleConfirmScreen extends $ConfirmScreen {
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
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
    }
    export class $BackupConfirmScreen extends $Screen {
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
        id: number;
        screenExecutor: $Executor;
        onProceed: $BackupConfirmScreen$Listener;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Runnable_, arg1: $BackupConfirmScreen$Listener_, arg2: $Component_, arg3: $Component_, arg4: boolean);
    }
    export class $BackupConfirmScreen$Listener {
    }
    export interface $BackupConfirmScreen$Listener {
        proceed(arg0: boolean, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BackupConfirmScreen$Listener}.
     */
    export type $BackupConfirmScreen$Listener_ = ((arg0: boolean, arg1: boolean) => void);
    export class $FaviconTexture implements $AutoCloseable {
        clear(): void;
        close(): void;
        static forServer(arg0: $TextureManager, arg1: string): $FaviconTexture;
        upload(arg0: $NativeImage): void;
        textureLocation(): $ResourceLocation;
        static forWorld(arg0: $TextureManager, arg1: string): $FaviconTexture;
    }
    export class $PresetFlatWorldScreen extends $Screen {
        static fromString(arg0: $HolderGetter<$Block_>, arg1: $HolderGetter<$Biome_>, arg2: $HolderGetter<$StructureSet_>, arg3: $HolderGetter<$PlacedFeature_>, arg4: string, arg5: $FlatLevelGeneratorSettings): $FlatLevelGeneratorSettings;
        static save(arg0: $FlatLevelGeneratorSettings): string;
        updateButtonValidity(arg0: boolean): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        settings: $FlatLevelGeneratorSettings;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static LOGGER: $Logger;
        screenExecutor: $Executor;
        static UNKNOWN_PRESET: $Component;
        "export": $EditBox;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $CreateFlatWorldScreen);
    }
    export class $PauseScreen extends $Screen {
        showsPauseMenu(): boolean;
        static addFeedbackButtons(arg0: $Screen, arg1: $GridLayout$RowHelper): void;
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
        constructor(arg0: boolean);
    }
    export class $WinScreen$CreditsReader {
    }
    export interface $WinScreen$CreditsReader {
    }
    /**
     * Values that may be interpreted as {@link $WinScreen$CreditsReader}.
     */
    export type $WinScreen$CreditsReader_ = (() => void);
    export class $Screen$DeferredTooltipRendering extends $Record {
    }
    export class $AccessibilityOnboardingScreen extends $Screen {
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
        constructor(arg0: $Options, arg1: $Runnable_);
    }
    export class $InBedChatScreen extends $ChatScreen {
        onPlayerWokeUp(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        input: $EditBox;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $CreditsAndAttributionScreen extends $Screen {
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
        constructor(arg0: $Screen);
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $LoadingOverlay$LogoTexture extends $SimpleTexture {
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
    }
    export class $CreateFlatWorldScreen$DetailsList extends $ObjectSelectionList<$CreateFlatWorldScreen$DetailsList$Entry> {
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
        hovered: $CreateFlatWorldScreen$DetailsList$Entry;
        height: number;
    }
    export class $PresetFlatWorldScreen$PresetsList extends $ObjectSelectionList<$PresetFlatWorldScreen$PresetsList$Entry> {
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
        hovered: $PresetFlatWorldScreen$PresetsList$Entry;
        height: number;
    }
    export class $AlertScreen extends $Screen {
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
        constructor(arg0: $Runnable_, arg1: $Component_, arg2: $Component_);
        constructor(arg0: $Runnable_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: boolean);
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(arg0: $NarratableEntry, arg1: number, arg2: $NarratableEntry$NarrationPriority_);
    }
    export class $DeathScreen extends $Screen {
        static renderDeathBackground(arg0: $GuiGraphics, arg1: number, arg2: number): void;
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
        constructor(arg0: $Component_, arg1: boolean);
    }
    export class $WinScreen extends $Screen {
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
        constructor(arg0: boolean, arg1: $Runnable_);
    }
    export class $BanNoticeScreens {
        static create(arg0: $BooleanConsumer_, arg1: $BanDetails_): $ConfirmLinkScreen;
        static createNameBan(arg0: string, arg1: $Runnable_): $ConfirmLinkScreen;
        static createSkinBan(arg0: $Runnable_): $ConfirmLinkScreen;
        static NAME_BAN_TITLE: $Component;
        constructor();
    }
}
