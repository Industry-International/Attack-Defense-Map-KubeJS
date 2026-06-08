import { $IMixinKeyBinding } from "@package/org/anti_ad/mc/ipnext/mixin";
import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MinecraftExt } from "@package/com/moulberry/axiom/hooks";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $KeyBindingAccessor as $KeyBindingAccessor$2 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $MouseHandlerAccessor as $MouseHandlerAccessor$2 } from "@package/com/verr1/synaxis/mixin/accessor";
import { $IFakeMinecraft } from "@package/customskinloader/fake/itf";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TimerAccessor as $TimerAccessor$2 } from "@package/net/createmod/ponder/mixin/accessor";
import { $AccessorKeyMapping } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $HeadRenderable } from "@package/dzwdz/chat_heads/mixininterface";
import { $MinecraftAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $CameraAccessorMixin } from "@package/com/pedrorok/hypertube/mixin/core";
import { $ISimpleOption } from "@package/com/ishland/c2me/client/uncapvd/mixin";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $VirtualWindow } from "@package/com/replaymod/render/gui/progress";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $RecipeBookCategoriesAccessor } from "@package/org/sinytra/connector/mod/mixin/recipebook";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $KeyboardHandlerAccessor } from "@package/io/github/reserveword/imblocker/mixin";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $SimpleOptionAccessor, $TimerAccessor as $TimerAccessor$1, $KeyBindingAccessor, $MinecraftAccessor as $MinecraftAccessor$3 } from "@package/com/replaymod/core/mixin";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ICustomCamera } from "@package/com/atsuishio/superbwarfare/client";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor as $MinecraftAccessor$2, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $Map_, $List_, $Collection, $Queue, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $KeyMappingAccessor as $KeyMappingAccessor$1, $MouseHandlerAccessor as $MouseHandlerAccessor$3 } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $MinecraftAccessor as $MinecraftAccessor$1 } from "@package/ru/vidtu/ias/mixins";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Thread, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $AccessOptions } from "@package/icyllis/modernui/mc/mixin";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $MinecraftClientExt } from "@package/com/replaymod/render/hooks";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftClientAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecraftAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $KeyMappingAccessor } from "@package/net/blay09/mods/kuma/mixin";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $MCVer$MinecraftMethodAccessor } from "@package/com/replaymod/core/versions";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $Inventory, $ChatVisiblity } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $UserApiService$UserProperties_, $MinecraftSessionService, $BanDetails, $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $Gson } from "@package/com/google/gson";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $IntFunction_, $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $ToIntFunction_, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ProfileResult_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$3, $MouseHandlerAccessor$1, $MouseHandlerAccessor, $MouseHandlerAccessor$2 {
        setup(arg0: number): void;
        handler$ion000$axiom$onTurnPlayer(ci: $CallbackInfo): void;
        handler$ion000$axiom$releaseMouse(ci: $CallbackInfo): void;
        handler$ion000$axiom$grabMouse(ci: $CallbackInfo): void;
        ypos(): number;
        xpos(): number;
        handler$ion000$axiom$isMouseGrabbed(cir: $CallbackInfoReturnable<any>): void;
        wrapWithCondition$cck000$vista$onMoveMouse(arg0: $LocalPlayer, arg1: number, arg2: number): boolean;
        grabMouse(): void;
        handleAccumulatedMovement(): void;
        isMouseGrabbed(): boolean;
        setIgnoreFirstMove(): void;
        cursorEntered(): void;
        releaseMouse(): void;
        wrapOperation$icd000$tacz$reduceSensitivity(arg0: $LocalPlayer, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        isLeftPressed(): boolean;
        isMiddlePressed(): boolean;
        getXVelocity(): number;
        getYVelocity(): number;
        isRightPressed(): boolean;
        synaxis$getXpos(): number;
        create$setXPos(arg0: number): void;
        create$setYPos(arg0: number): void;
        getActiveButton(): number;
        synaxis$getYpos(): number;
        getMouseX(): number;
        getMouseY(): number;
        synaxis$setMiddlePressed(arg0: boolean): void;
        synaxis$setLeftPressed(arg0: boolean): void;
        synaxis$setRightPressed(arg0: boolean): void;
        constructor(arg0: $Minecraft);
        set up(value: number);
        get mouseGrabbed(): boolean;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get XVelocity(): number;
        get YVelocity(): number;
        get rightPressed(): boolean;
        get activeButton(): number;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getProfileId(): $UUID;
        getAccessToken(): string;
        getSessionId(): string;
        getXuid(): (string) | undefined;
        getClientId(): (string) | undefined;
        constructor(arg0: string, arg1: $UUID_, arg2: string, arg3: (string) | undefined, arg4: (string) | undefined, arg5: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get profileId(): $UUID;
        get accessToken(): string;
        get sessionId(): string;
        get xuid(): (string) | undefined;
        get clientId(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollection(arg0: $RecipeBookCategories_): $List<$RecipeCollection>;
        getCollections(): $List<$RecipeCollection>;
        setupCollections(arg0: $Iterable_<$RecipeHolder<never>>, arg1: $RegistryAccess): void;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        options: $Options;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        value: number;
        static TEXT_MARGIN: number;
        height: number;
        constructor(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $OptionInstance<N>, arg6: $OptionInstance$SliderableValueSet<N>, arg7: $OptionInstance$TooltipSupplier_<N>, arg8: $Consumer_<N>, arg9: boolean);
    }
    export class $HotbarManager {
        get(arg0: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(arg0: $Path_, arg1: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(arg0: number, arg1: number, arg2: string, arg3: string);
    }
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        addRegion(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static grab(arg0: $File_, arg1: string, arg2: $RenderTarget, arg3: $Consumer_<$Component>): void;
        static grab(arg0: $File_, arg1: $RenderTarget, arg2: $Consumer_<$Component>): void;
        saveRow(): void;
        static takeScreenshot(arg0: $RenderTarget): $NativeImage;
        static SCREENSHOT_DIR: string;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        maxInclusive(): number;
        minInclusive(): number;
        fromSliderValue(arg0: number): $Object;
        toSliderValue(arg0: number): number;
    }
    export class $Options implements $AccessOptions {
        load(): void;
        load(arg0: boolean): void;
        save(): void;
        getFile(): $File;
        static isFalse(arg0: string): boolean;
        static isTrue(arg0: string): boolean;
        chatLinks(): $OptionInstance<boolean>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        setKey(arg0: $KeyMapping, arg1: $InputConstants$Key): void;
        gamma(): $OptionInstance<number>;
        glintSpeed(): $OptionInstance<number>;
        getCloudsType(): $CloudStatus;
        simulationDistance(): $OptionInstance<number>;
        narrator(): $OptionInstance<$NarratorStatus>;
        fullscreen(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        guiScale(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        chatOpacity(): $OptionInstance<number>;
        dumpOptionsForReport(): string;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        textBackgroundOpacity(): $OptionInstance<number>;
        getCameraType(): $CameraType;
        setCameraType(arg0: $CameraType_): void;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        renderDistance(): $OptionInstance<number>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        getBackgroundColor(arg0: number): number;
        getBackgroundColor(arg0: number): number;
        framerateLimit(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        mipmapLevels(): $OptionInstance<number>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        enableVsync(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        getMenuBackgroundBlurriness(): number;
        loadSelectedResourcePacks(arg0: $PackRepository): void;
        hideLightningFlash(): $OptionInstance<boolean>;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        hideSplashTexts(): $OptionInstance<boolean>;
        fov(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        autoJump(): $OptionInstance<boolean>;
        onboardingAccessibilityFinished(): void;
        screenEffectScale(): $OptionInstance<number>;
        touchscreen(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        invertYMouse(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        highContrast(): $OptionInstance<boolean>;
        chatHeightFocused(): $OptionInstance<number>;
        showSubtitles(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        toggleSprint(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        useNativeTransport(): boolean;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        directionalAudio(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        panoramaSpeed(): $OptionInstance<number>;
        entityShadows(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        hideMatchedNames(): $OptionInstance<boolean>;
        autoSuggestions(): $OptionInstance<boolean>;
        isModelPartEnabled(arg0: $PlayerModelPart_): boolean;
        toggleModelPart(arg0: $PlayerModelPart_, arg1: boolean): void;
        broadcastOptions(): void;
        static genericValueLabel(arg0: $Component_, arg1: number): $Component;
        static genericValueLabel(arg0: $Component_, arg1: $Component_): $Component;
        setServerRenderDistance(arg0: number): void;
        fovEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        chatHeightUnfocused(): $OptionInstance<number>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        static genericValueOrOffLabel(arg0: $Component_, arg1: number): $Component;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        updateResourcePacks(arg0: $PackRepository): void;
        darknessEffectScale(): $OptionInstance<number>;
        getSoundSourceVolume(arg0: $SoundSource_): number;
        mouseWheelSensitivity(): $OptionInstance<number>;
        entityDistanceScaling(): $OptionInstance<number>;
        buildPlayerInformation(): $ClientInformation;
        getBackgroundOpacity(arg0: number): number;
        getSoundSourceOptionInstance(arg0: $SoundSource_): $OptionInstance<number>;
        handler$iop000$axiom$getCameraType(cir: $CallbackInfoReturnable<any>): void;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        notificationDisplayTime(): $OptionInstance<number>;
        setGuiScale(arg0: $OptionInstance<number>): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        static LOGGER: $Logger;
        keyMappings: $KeyMapping[];
        minecraft: $Minecraft;
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        static GSON: $Gson;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(arg0: $Minecraft, arg1: $File_);
        get file(): $File;
        get cloudsType(): $CloudStatus;
        get effectiveRenderDistance(): number;
        set serverRenderDistance(value: number);
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        validateValue(arg0: number): (number) | undefined;
        codec(): $Codec<number>;
        maxInclusive(): number;
        minInclusive(): number;
        applyValueImmediately(): boolean;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        fromSliderValue(arg0: number): $Object;
        toSliderValue(arg0: number): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $ToggleKeyMapping extends $KeyMapping {
        reset(): void;
        modifyReturnValue$dkl000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: number, arg2: string, arg3: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(arg0: number): (number) | undefined;
        xmap<R>(arg0: $DoubleFunction_<R>, arg1: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        codec(): $Codec<number>;
        fromSliderValue(arg0: number): $Object;
        toSliderValue(arg0: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor$2, $TimerAccessor {
        getGameTimeDeltaTicks(): number;
        updatePauseState(arg0: boolean): void;
        updateFrozenState(arg0: boolean): void;
        advanceTime(arg0: number, arg1: boolean): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getRealtimeDeltaTicks(): number;
        setTickLength(arg0: number): void;
        getTickLength(): number;
        getDeltaTickResidual(): number;
        catnip$getDeltaTickResidual(): number;
        constructor(arg0: number, arg1: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record implements $HeadRenderable {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        chatheads$getHeadData(): $HeadData;
        addedTime(): number;
        endOfEntry(): boolean;
        handler$bon000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_, arg3: boolean);
    }
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        sayNow(arg0: $Component_): void;
        sayNow(arg0: string): void;
        updateNarratorStatus(arg0: $NarratorStatus_): void;
        checkStatus(arg0: boolean): void;
        say(arg0: $Component_): void;
        sayChat(arg0: $Component_): void;
        static NO_TITLE: $Component;
        constructor(arg0: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        validateValue(arg0: number): (number) | undefined;
        codec(): $Codec<number>;
        maxInclusive(): number;
        minInclusive(): number;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        createCycleButton(): boolean;
        maxSupplier(): $IntSupplier;
        encodableMaxInclusive(): number;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        fromSliderValue(arg0: number): $Object;
        toSliderValue(arg0: number): number;
        createButton(arg0: $OptionInstance$TooltipSupplier_<number>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        icon(): $GuiMessageTag$Icon;
        static systemSinglePlayer(): $GuiMessageTag;
        indicatorColor(): number;
        logTag(): string;
        static chatError(): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        static chatModified(arg0: string): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_, arg2: $Component_, arg3: string);
    }
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        apply(arg0: $Map_<string, $List_<$PeriodicNotificationManager$Notification_>>, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        close(): void;
        constructor(arg0: $ResourceLocation_, arg1: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $HeadRenderable {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        icon(): $GuiMessageTag$Icon;
        chatheads$getHeadData(): $HeadData;
        chatheads$setHeadData(headData: $HeadData_): void;
        addedTime(): number;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_, arg3: $GuiMessageTag_);
    }
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        static getCategories(arg0: $RecipeBookType_): $List<$RecipeBookCategories>;
        getIconItems(): $List<$ItemStack>;
        static setAGGREGATE_CATEGORIES$connector_$md$5bc4b9$0(arg0: $Map_<any, any>): void;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
        static set AGGREGATE_CATEGORIES$connector_$md$5bc4b9$0(value: $Map_<any, any>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(arg0: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        history(): $Collection<string>;
        addCommand(arg0: string): void;
        constructor(arg0: $Path_);
    }
    export class $Camera implements $ICustomCamera, $CameraAccessorMixin, $CameraZoomExtension, $CameraWaterOcclusionExtension {
        reset(): void;
        setup(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number): void;
        move(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        getPosition(): $Vec3;
        rotation(): $Quaternionf;
        getEntity(): $Entity;
        isInitialized(): boolean;
        handler$ehh000$superbwarfare$superbWarfare$setup(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        getUpVector(): $Vector3f;
        getBlockPosition(): $BlockPos;
        setRotation(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        setRotation(arg0: number, arg1: number): void;
        getXRot(): number;
        getYRot(): number;
        sable$setZoomAmount(arg0: number): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vec3_): void;
        createHypertube$setDetachedExternal(arg0: boolean): void;
        handler$hgn000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$hie001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        sable$isOccluded(): boolean;
        handler$hnc000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$ino000$axiom$getMaxZoom(d: number, cir: $CallbackInfoReturnable<any>): void;
        sable$isIgnoreOcclusion(): boolean;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        superbwarfare$getRotation(): $Quaternionf;
        handler$cbj000$vista$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        getMaxZoom(arg0: number): number;
        getRoll(): number;
        isDetached(): boolean;
        getPartialTickTime(): number;
        getLookVector(): $Vector3f;
        getNearPlane(): $Camera$NearPlane;
        getFluidInCamera(): $FogType;
        sable$getZoomAmount(): number;
        createHypertube$callSetRotation(arg0: number, arg1: number): void;
        createHypertube$callGetMaxZoom(arg0: number): number;
        createHypertube$callSetPosition(arg0: number, arg1: number, arg2: number): void;
        createHypertube$callMove(arg0: number, arg1: number, arg2: number): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        level: $BlockGetter;
        eyeHeight: number;
        initialized: boolean;
        static $assertionsDisabled: boolean;
        entity: $Entity;
        constructor();
        get upVector(): $Vector3f;
        get blockPosition(): $BlockPos;
        get XRot(): number;
        get YRot(): number;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get roll(): number;
        get detached(): boolean;
        get partialTickTime(): number;
        get lookVector(): $Vector3f;
        get nearPlane(): $Camera$NearPlane;
        get fluidInCamera(): $FogType;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(arg0: $Style, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(arg0: string): $User$Type;
        static byName(arg0: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        realmsClient(): $RealmsClient;
        quickPlayData(): $GameConfig$QuickPlayData;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    export class $OptionInstance<T> implements $SimpleOptionAccessor<any>, $ISimpleOption<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(arg0: $Object): void;
        codec(): $Codec<$Object>;
        static createBoolean(arg0: string, arg1: boolean, arg2: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: $OptionInstance$CaptionBasedToString_<boolean>, arg3: boolean, arg4: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean, arg3: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: boolean): $OptionInstance<boolean>;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number): $AbstractWidget;
        createButton(arg0: $Options): $AbstractWidget;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: $Consumer_<$Object>): $AbstractWidget;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        static cachedConstantTooltip<T>(arg0: $Component_): $OptionInstance$TooltipSupplier<T>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        setRawValue(arg0: $Object): void;
        setCallbacks(arg0: $OptionInstance$ValueSet<$Object>): void;
        setCodec(arg0: $Codec<$Object>): void;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: $Object;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Codec<$Object>, arg5: $Object, arg6: $Consumer_<$Object>);
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Object, arg5: $Consumer_<$Object>);
        set rawValue(value: $Object);
        set callbacks(value: $OptionInstance$ValueSet<$Object>);
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MCVer$MinecraftMethodAccessor, $MinecraftAccessor$3, $MinecraftClientExt, $MinecraftAccessor, $MinecraftAccessor$1, $MinecraftAccess, $IXaeroMinimapMinecraftClient, $IWorldMapMinecraftClient, $MinecraftClientAccessor, $MinecraftClientKJS, $MinecraftAccessor$2, $MinecraftExt, $IFakeMinecraft {
        run(): void;
        static getInstance(): $Minecraft;
        stop(): void;
        destroy(): void;
        tick(): void;
        setLevel(arg0: $ClientLevel, arg1: $ReceivingLevelScreen$Reason_): void;
        getConnection(): $ClientPacketListener;
        handler$iom000$axiom$pickBlock(ci: $CallbackInfo): void;
        setScreen(arg0: $Screen): void;
        getUser(): $User;
        disconnect(): void;
        disconnect(arg0: $Screen): void;
        disconnect(arg0: $Screen, arg1: boolean): void;
        clearDownloadedResourcePacks(): void;
        handler$iol000$axiom$setLevel(ci: $CallbackInfo): void;
        static crash(arg0: $Minecraft, arg1: $File_, arg2: $CrashReport): void;
        isRunning(): boolean;
        getWindow(): $Window;
        getTimer(): $DeltaTracker;
        getTextureManager(): $TextureManager;
        getResourcePackDirectory(): $Path;
        getProfiler(): $ProfilerFiller;
        getResourceManager(): $ResourceManager;
        fillReport(arg0: $CrashReport): $CrashReport;
        static fillReport(arg0: $Minecraft, arg1: $LanguageManager, arg2: string, arg3: $Options, arg4: $CrashReport): void;
        delayCrash(arg0: $CrashReport): void;
        getToasts(): $ToastComponent;
        getFps(): number;
        pauseGame(arg0: boolean): void;
        isDemo(): boolean;
        isBlocked(arg0: $UUID_): boolean;
        isPaused(): boolean;
        getOverlay(): $Overlay;
        handler$cgd000$acceleratedrendering$setDebugContext(arg0: $GameConfig, arg1: $CallbackInfo): void;
        wrapOperation$iol000$axiom$handleKeybinds_setScreen(instance: $Minecraft, screen: $Screen, original: $Operation_<any>): void;
        wrapWithCondition$iol000$axiom$handleKeybindsSendPacket(instance: $ClientPacketListener, packet: $Packet<any>): boolean;
        handler$fhc000$inventoryprofilesnext$handleInputEvents(arg0: $CallbackInfo): void;
        handler$ilm000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        handler$bmg002$veil$close(arg0: $CallbackInfo): void;
        debugClientMetricsStart(arg0: $Consumer_<$Component>): boolean;
        getMainRenderTarget(): $RenderTarget;
        getSingleplayerServer(): $IntegratedServer;
        clearResourcePacksOnError(arg0: $Throwable, arg1: $Component_, arg2: $Minecraft$GameLoadCookie_): void;
        debugFpsMeterKeyPress(arg0: number): void;
        hasSingleplayerServer(): boolean;
        reloadResourcePacks(): $CompletableFuture<void>;
        handler$bnp000$balm$run(arg0: $CallbackInfo): void;
        emergencySaveAndCrash(arg0: $CrashReport): void;
        getTelemetryManager(): $ClientTelemetryManager;
        static useAmbientOcclusion(): boolean;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        getDownloadedPackSource(): $DownloadedPackSource;
        shouldEntityAppearGlowing(arg0: $Entity): boolean;
        showOnlyReducedInfo(): boolean;
        getPaintingTextures(): $PaintingTextureManager;
        getMobEffectTextures(): $MobEffectTextureManager;
        extraTelemetryAvailable(): boolean;
        telemetryOptInExtra(): boolean;
        createWorldOpenFlows(): $WorldOpenFlows;
        getMinecraftSessionService(): $MinecraftSessionService;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        grabPanoramixScreenshot(arg0: $File_, arg1: number, arg2: number): $Component;
        getResourcePackRepository(): $PackRepository;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        getProgressListener(): $StoringChunkProgressListener;
        static useShaderTransparency(): boolean;
        getPlayerSocialManager(): $PlayerSocialManager;
        isTextFilteringEnabled(): boolean;
        updateReportEnvironment(arg0: $ReportEnvironment_): void;
        getSituationalMusic(): $Music;
        replayModProcessKeyBinds(): void;
        getXaeroMinimap_fps(): number;
        axiom$popMainRenderTarget(): void;
        getXaeroWorldMap_fps(): number;
        getReportingContext(): $ReportingContext;
        replayModExecuteTaskQueue(): void;
        getScheduledEvents(): $ScheduledEvents;
        axiom$setRightClickDelay(rightClickDelay: number): void;
        axiom$getRightClickDelay(): number;
        canValidateProfileKeys(): boolean;
        axiom$pushMainRenderTarget(renderTarget: $RenderTarget): void;
        axiom$addCustomNbtData(itemStack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        prepareForMultiplayer(): void;
        localvar$ilm000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        handler$iol000$axiom$onRightClick(ci: $CallbackInfo): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        handler$ikg000$imblocker$recordGameRenderStartTime(arg0: boolean, arg1: $CallbackInfo): void;
        handler$ecd000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$ikg000$imblocker$captureGameRenderEnd(arg0: boolean, arg1: $CallbackInfo): void;
        handler$beh000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$ikg000$imblocker$onWindowFocusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        setOverlay(arg0: $Overlay): void;
        doWorldLoad(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $PackRepository, arg2: $WorldStem_, arg3: boolean): void;
        clearClientLevel(arg0: $Screen): void;
        getCameraEntity(): $Entity;
        getGpuUtilization(): number;
        forceSetScreen(arg0: $Screen): void;
        allowsTelemetry(): boolean;
        static useFancyGraphics(): boolean;
        delayTextureReload(): $CompletableFuture<void>;
        isSingleplayer(): boolean;
        getGameProfile(): $GameProfile;
        getTextureAtlas(arg0: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getSoundManager(): $SoundManager;
        getLanguageManager(): $LanguageManager;
        static renderNames(): boolean;
        static getLauncherBrand(): string;
        isNameBanned(): boolean;
        allowsRealms(): boolean;
        isLocalPlayer(arg0: $UUID_): boolean;
        addCustomNbtData(arg0: $ItemStack_, arg1: $BlockEntity, arg2: $RegistryAccess): void;
        getChatListener(): $ChatListener;
        getFixerUpper(): $DataFixer;
        isWindowActive(): boolean;
        getItemColors(): $ItemColors;
        updateMaxMipLevel(arg0: number): void;
        getBlockColors(): $BlockColors;
        getEntityModels(): $EntityModelSet;
        setCameraEntity(arg0: $Entity): void;
        getTutorial(): $Tutorial;
        getSplashManager(): $SplashManager;
        getHotbarManager(): $HotbarManager;
        getSkinManager(): $SkinManager;
        getLastInputType(): $InputType;
        getNarrator(): $GameNarrator;
        getTitle(): string;
        setWindowDelegate(window: $VirtualWindow): void;
        getVanillaPackResources(): $VanillaPackResources;
        handler$gkl003$distanthorizons$close(ci: $CallbackInfo): void;
        handler$iol000$axiom$continueAttack(attacking: boolean, ci: $CallbackInfo): void;
        handler$ikg000$imblocker$runPreRenderTasks(arg0: boolean, arg1: $CallbackInfo): void;
        redirect$iol000$axiom$updateSelectedSlot(instance: $Inventory, value: number): void;
        handler$iol000$axiom$handleKeyboards(ci: $CallbackInfo): void;
        modify$ecd000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$ikg000$imblocker$onScreenChanged(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$hfi000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        handler$iol000$axiom$getMainRenderTarget(cir: $CallbackInfoReturnable<any>): void;
        handler$iol000$axiom$pickBlockInfinite(ci: $CallbackInfo): void;
        handler$cfp000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        getGuiSprites(): $GuiSpriteManager;
        getItemRenderer(): $ItemRenderer;
        allowsMultiplayer(): boolean;
        renderBuffers(): $RenderBuffers;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        isLocalServer(): boolean;
        commandHistory(): $CommandHistory;
        getBlockRenderer(): $BlockRenderDispatcher;
        setWindowActive(arg0: boolean): void;
        directoryValidator(): $DirectoryValidator;
        updateFontOptions(): void;
        static checkModStatus(): $ModCheck;
        delayCrashRaw(arg0: $CrashReport): void;
        multiplayerBan(): $BanDetails;
        isEnforceUnicode(): boolean;
        updateTitle(): void;
        resizeDisplay(): void;
        getLaunchedVersion(): string;
        getVersionType(): string;
        getDebugOverlay(): $DebugScreenOverlay;
        isGameLoadFinished(): boolean;
        getChatStatus(): $Minecraft$ChatStatus;
        getLevelSource(): $LevelStorageSource;
        cursorEntered(): void;
        getFrameTimeNs(): number;
        getModelManager(): $ModelManager;
        setLastInputType(arg0: $InputType_): void;
        startUseItem(): void;
        getMusicManager(): $MusicManager;
        handler$iol000$axiom$startAttack(ci: $CallbackInfoReturnable<any>): void;
        handler$ble000$veil$beginFrame(arg0: $CallbackInfo): void;
        handler$iol000$axiom$afterMainBlit(ci: $CallbackInfo): void;
        handler$iol000$axiom$setScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$iol000$axiom$startUseItem(ci: $CallbackInfo): void;
        handler$ble000$veil$endFrame(arg0: $CallbackInfo): void;
        handler$iol000$axiom$resizeDisplay(ci: $CallbackInfo): void;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getCurrentServer(): $ServerData;
        getProxy(): $Proxy;
        getLocale(): $Locale;
        pushGuiLayer(arg0: $Screen): void;
        popGuiLayer(): void;
        self(): $Minecraft;
        tell(message: $Component_): void;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getCurrentScreen(): $Screen;
        setStatusMessage(message: $Component_): void;
        isKeyMappingDown(key: $KeyMapping): boolean;
        setCurrentScreen(gui: $Screen): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getKeyBindPressedTicks(id: string): number;
        getCurrentWorldName(): string;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        setTitle(t: string): void;
        isKeyBindDown(id: string): boolean;
        isShiftDown(): boolean;
        getName(): $Component;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isCtrlDown(): boolean;
        isAltDown(): boolean;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        ias$user(user: $User): void;
        setTimer(arg0: $DeltaTracker$Timer): void;
        ldlib2$getClientTickCount(): number;
        ias$profileKeyPairManager(manager: $ProfileKeyPairManager): void;
        ias$userPropertiesFuture(future: $CompletableFuture<$UserApiService$UserProperties_>): void;
        ias$telemetryManager(manager: $ClientTelemetryManager): void;
        ias$playerSocialManager(manager: $PlayerSocialManager): void;
        ias$authenticationService(): $YggdrasilAuthenticationService;
        ias$reportingContext(context: $ReportingContext): void;
        setConnection(arg0: $Connection): void;
        getProgressTasks(): $Queue<$Runnable>;
        setPendingReload(arg0: $CompletableFuture<void>): void;
        getFontManager(): $FontManager;
        getPendingReload(): $CompletableFuture<void>;
        ias$profileFuture(future: $CompletableFuture<$ProfileResult_>): void;
        getCrashReporter(): $Supplier<$CrashReport>;
        ias$userApiService(service: $UserApiService): void;
        create$setMissTime(arg0: number): void;
        static instance: $Minecraft;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        mainRenderTarget: $RenderTarget;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        static fps: number;
        gameThread: $Thread;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(arg0: $GameConfig);
        get user(): $User;
        get running(): boolean;
        get window(): $Window;
        get textureManager(): $TextureManager;
        get resourcePackDirectory(): $Path;
        get profiler(): $ProfilerFiller;
        get resourceManager(): $ResourceManager;
        get toasts(): $ToastComponent;
        get demo(): boolean;
        get paused(): boolean;
        get singleplayerServer(): $IntegratedServer;
        get telemetryManager(): $ClientTelemetryManager;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get downloadedPackSource(): $DownloadedPackSource;
        get paintingTextures(): $PaintingTextureManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get minecraftSessionService(): $MinecraftSessionService;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get resourcePackRepository(): $PackRepository;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get progressListener(): $StoringChunkProgressListener;
        get playerSocialManager(): $PlayerSocialManager;
        get textFilteringEnabled(): boolean;
        get situationalMusic(): $Music;
        get xaeroMinimap_fps(): number;
        get xaeroWorldMap_fps(): number;
        get reportingContext(): $ReportingContext;
        get scheduledEvents(): $ScheduledEvents;
        get profileKeySignatureValidator(): $SignatureValidator;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get gpuUtilization(): number;
        get singleplayer(): boolean;
        get gameProfile(): $GameProfile;
        get soundManager(): $SoundManager;
        get languageManager(): $LanguageManager;
        static get launcherBrand(): string;
        get nameBanned(): boolean;
        get chatListener(): $ChatListener;
        get fixerUpper(): $DataFixer;
        get itemColors(): $ItemColors;
        get blockColors(): $BlockColors;
        get entityModels(): $EntityModelSet;
        get tutorial(): $Tutorial;
        get splashManager(): $SplashManager;
        get hotbarManager(): $HotbarManager;
        get skinManager(): $SkinManager;
        get narrator(): $GameNarrator;
        set windowDelegate(value: $VirtualWindow);
        get vanillaPackResources(): $VanillaPackResources;
        get guiSprites(): $GuiSpriteManager;
        get itemRenderer(): $ItemRenderer;
        get localServer(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get enforceUnicode(): boolean;
        get launchedVersion(): string;
        get versionType(): string;
        get debugOverlay(): $DebugScreenOverlay;
        get gameLoadFinished(): boolean;
        get chatStatus(): $Minecraft$ChatStatus;
        get levelSource(): $LevelStorageSource;
        get frameTimeNs(): number;
        get modelManager(): $ModelManager;
        get musicManager(): $MusicManager;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get currentServer(): $ServerData;
        get proxy(): $Proxy;
        get locale(): $Locale;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get currentWorldName(): string;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get altDown(): boolean;
        get displayName(): $Component;
        get progressTasks(): $Queue<$Runnable>;
        get crashReporter(): $Supplier<$CrashReport>;
    }
    export class $Camera$NearPlane {
        getPointOnPlane(arg0: number, arg1: number): $Vec3;
        getBottomLeft(): $Vec3;
        getTopRight(): $Vec3;
        getBottomRight(): $Vec3;
        getTopLeft(): $Vec3;
        forward: $Vec3;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
        get bottomLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomRight(): $Vec3;
        get topLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static create$nochatreports_$md$5bc4b9$0(arg0: string, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $GuiMessageTag$Icon;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified" | "chat_ncr_encrypted";
    export class $KeyboardHandler implements $KeyboardHandlerAccessor {
        setup(arg0: number): void;
        tick(): void;
        handler$bjo000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$bjo000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        setClipboard(arg0: string): void;
        handler$cch000$vista$supp$onKeyPressCancellable(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        getClipboard(): string;
        keyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$gcf000$chloride$redirect$handleFullScreenToggle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        invokeCharTyped(arg0: number, arg1: number, arg2: number): void;
        static DEBUG_CRASH_TIME: number;
        constructor(arg0: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(arg0: number, arg1: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        fillCrashReport(arg0: $CrashReport): void;
        finishReload(): void;
        startReload(arg0: $ResourceLoadStateTracker$ReloadReason_, arg1: $List_<$PackResources>): void;
        startRecovery(arg0: $Throwable): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        createCycleButton(): boolean;
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(arg0: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altCondition(): $BooleanSupplier;
        altValues(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: $Style, arg3: boolean, arg4: $StringSplitter$LinePosConsumer_): void;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $FormattedText): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $BiConsumer_<$FormattedText, boolean>): void;
        stringWidth(arg0: $FormattedText): number;
        stringWidth(arg0: $FormattedCharSequence_): number;
        stringWidth(arg0: string): number;
        componentStyleAtWidth(arg0: $FormattedCharSequence_, arg1: number): $Style;
        componentStyleAtWidth(arg0: $FormattedText, arg1: number): $Style;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        plainTailByWidth(arg0: string, arg1: number, arg2: $Style): string;
        plainHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        headByWidth(arg0: $FormattedText, arg1: number, arg2: $Style): $FormattedText;
        formattedHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        formattedIndexByWidth(arg0: string, arg1: number, arg2: $Style): number;
        findLineBreak(arg0: string, arg1: number, arg2: $Style): number;
        plainIndexAtWidth(arg0: string, arg1: number, arg2: $Style): number;
        widthProvider: $StringSplitter$WidthProvider;
        constructor(arg0: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyBindingAccessor, $KeyMappingAccessor$1, $KeyMappingAccessor, $AccessKeyMapping, $KeyMappingsAccessor, $AccessorKeyMapping, $IMixinKeyBinding, $KeyBindingAccessor$1, $KeyBindingAccessor$2 {
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(arg0: number, arg1: number): boolean;
        static set(arg0: $InputConstants$Key, arg1: boolean): void;
        isDefault(): boolean;
        static setAll(): void;
        getCategory(): string;
        setKey(arg0: $InputConstants$Key): void;
        static releaseAll(): void;
        isDown(): boolean;
        isUnbound(): boolean;
        same(arg0: $KeyMapping): boolean;
        consumeClick(): boolean;
        matchesMouse(arg0: number): boolean;
        static createNameSupplier(arg0: string): $Supplier<$Component>;
        static resetToggleKeys(): void;
        handler$eia000$superbwarfare$consumeClick(arg0: $CallbackInfoReturnable<any>): void;
        getDefaultKey(): $InputConstants$Key;
        static click(arg0: $InputConstants$Key): void;
        handler$ioj000$axiom$isDown(cir: $CallbackInfoReturnable<any>): void;
        handler$ioj000$axiom$isPressed(cir: $CallbackInfoReturnable<any>): void;
        static resetMapping(): void;
        getKeyModifier(): $KeyModifier;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$5bc4b9$2(): $Map<any, any>;
        setKeyModifierAndCode(arg0: $KeyModifier_, arg1: $InputConstants$Key): void;
        setKeyConflictContext(arg0: $IKeyConflictContext): void;
        getDefaultKeyModifier(): $KeyModifier;
        getKeyConflictContext(): $IKeyConflictContext;
        getTranslatedKeyMessage(): $Component;
        saveString(): string;
        setDown(arg0: boolean): void;
        getDisplayName(): $Component;
        setToDefault(): void;
        isConflictContextAndModifierActive(): boolean;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        hasKeyModifierConflict(arg0: $KeyMapping): boolean;
        getKey(): $InputConstants$Key;
        getKeyCode(): $InputConstants$Key;
        setPressed(arg0: boolean): void;
        fabric_getTimesPressed(): number;
        getTimesPressed(): number;
        setTimesPressed(arg0: number): void;
        getPressTime(): number;
        fabric_getBoundKey(): $InputConstants$Key;
        setPressTime(arg0: number): void;
        controlling$getKey(): $InputConstants$Key;
        getPressed(): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: number, arg2: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $InputConstants$Type_, arg2: number, arg3: string);
        get name(): string;
        get default(): boolean;
        get category(): string;
        get unbound(): boolean;
        get defaultKey(): $InputConstants$Key;
        get keyModifier(): $KeyModifier;
        get defaultKeyModifier(): $KeyModifier;
        get translatedKeyMessage(): $Component;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get keyCode(): $InputConstants$Key;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getRealtimeDeltaTicks(): number;
        constructor(arg0: number);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(arg0: string, arg1: T, arg2: $Function_<string, T>, arg3: $Function_<T, string>): T;
        process(arg0: string, arg1: number): number;
        process(arg0: string, arg1: string): string;
        process(arg0: string, arg1: boolean): boolean;
        process(arg0: string, arg1: number): number;
    }
    export class $DebugQueryHandler {
        queryEntityTag(arg0: number, arg1: $Consumer_<$CompoundTag>): void;
        handleResponse(arg0: number, arg1: $CompoundTag_): boolean;
        queryBlockEntityTag(arg0: $BlockPos_, arg1: $Consumer_<$CompoundTag>): void;
        constructor(arg0: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        static byId(arg0: number): $NarratorStatus;
        shouldNarrateChat(): boolean;
        shouldNarrateSystem(): boolean;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(arg0: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static INFO_DISABLED_BY_PROFILE: $Component;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(arg0: $Component_, arg1: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(arg0: $OptionInstance<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
