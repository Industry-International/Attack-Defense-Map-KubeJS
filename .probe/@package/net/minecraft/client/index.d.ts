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
        isRightPressed(): boolean;
        ypos(): number;
        xpos(): number;
        isLeftPressed(): boolean;
        isMiddlePressed(): boolean;
        getYVelocity(): number;
        getXVelocity(): number;
        grabMouse(): void;
        wrapOperation$ibj000$tacz$reduceSensitivity(arg0: $LocalPlayer, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        handleAccumulatedMovement(): void;
        setIgnoreFirstMove(): void;
        cursorEntered(): void;
        isMouseGrabbed(): boolean;
        releaseMouse(): void;
        handler$ioc000$axiom$grabMouse(ci: $CallbackInfo): void;
        handler$ioc000$axiom$onTurnPlayer(ci: $CallbackInfo): void;
        handler$ioc000$axiom$releaseMouse(ci: $CallbackInfo): void;
        handler$ioc000$axiom$isMouseGrabbed(cir: $CallbackInfoReturnable<any>): void;
        wrapWithCondition$ccl000$vista$onMoveMouse(arg0: $LocalPlayer, arg1: number, arg2: number): boolean;
        synaxis$setLeftPressed(arg0: boolean): void;
        synaxis$setRightPressed(arg0: boolean): void;
        synaxis$setMiddlePressed(arg0: boolean): void;
        synaxis$getXpos(): number;
        synaxis$getYpos(): number;
        create$setXPos(arg0: number): void;
        create$setYPos(arg0: number): void;
        getActiveButton(): number;
        getMouseY(): number;
        getMouseX(): number;
        constructor(arg0: $Minecraft);
        set up(value: number);
        get rightPressed(): boolean;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get YVelocity(): number;
        get XVelocity(): number;
        get mouseGrabbed(): boolean;
        get activeButton(): number;
        get mouseY(): number;
        get mouseX(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getAccessToken(): string;
        getXuid(): (string) | undefined;
        getSessionId(): string;
        getProfileId(): $UUID;
        getClientId(): (string) | undefined;
        constructor(arg0: string, arg1: $UUID_, arg2: string, arg3: (string) | undefined, arg4: (string) | undefined, arg5: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get accessToken(): string;
        get xuid(): (string) | undefined;
        get sessionId(): string;
        get profileId(): $UUID;
        get clientId(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollections(): $List<$RecipeCollection>;
        setupCollections(arg0: $Iterable_<$RecipeHolder<never>>, arg1: $RegistryAccess): void;
        getCollection(arg0: $RecipeBookCategories_): $List<$RecipeCollection>;
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
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getGameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        static takeScreenshot(arg0: $RenderTarget): $NativeImage;
        addRegion(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        saveRow(): void;
        static grab(arg0: $File_, arg1: string, arg2: $RenderTarget, arg3: $Consumer_<$Component>): void;
        static grab(arg0: $File_, arg1: $RenderTarget, arg2: $Consumer_<$Component>): void;
        static SCREENSHOT_DIR: string;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
        minInclusive(): number;
        maxInclusive(): number;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        toSliderValue(arg0: number): number;
        fromSliderValue(arg0: number): $Object;
    }
    export class $Options implements $AccessOptions {
        load(): void;
        load(arg0: boolean): void;
        save(): void;
        getFile(): $File;
        static isTrue(arg0: string): boolean;
        damageTiltStrength(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        screenEffectScale(): $OptionInstance<number>;
        touchscreen(): $OptionInstance<boolean>;
        setKey(arg0: $KeyMapping, arg1: $InputConstants$Key): void;
        static isFalse(arg0: string): boolean;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        glintSpeed(): $OptionInstance<number>;
        gamma(): $OptionInstance<number>;
        guiScale(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        chatWidth(): $OptionInstance<number>;
        chatScale(): $OptionInstance<number>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        chatColors(): $OptionInstance<boolean>;
        mipmapLevels(): $OptionInstance<number>;
        enableVsync(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        glintStrength(): $OptionInstance<number>;
        framerateLimit(): $OptionInstance<number>;
        fullscreen(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        narrator(): $OptionInstance<$NarratorStatus>;
        notificationDisplayTime(): $OptionInstance<number>;
        simulationDistance(): $OptionInstance<number>;
        onboardingAccessibilityFinished(): void;
        getBackgroundColor(arg0: number): number;
        getBackgroundColor(arg0: number): number;
        chatOpacity(): $OptionInstance<number>;
        hideSplashTexts(): $OptionInstance<boolean>;
        getCloudsType(): $CloudStatus;
        chatLinks(): $OptionInstance<boolean>;
        hideLightningFlash(): $OptionInstance<boolean>;
        getMenuBackgroundBlurriness(): number;
        setServerRenderDistance(arg0: number): void;
        getSoundSourceOptionInstance(arg0: $SoundSource_): $OptionInstance<number>;
        handler$ioe000$axiom$getCameraType(cir: $CallbackInfoReturnable<any>): void;
        autoJump(): $OptionInstance<boolean>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        loadSelectedResourcePacks(arg0: $PackRepository): void;
        dumpOptionsForReport(): string;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        particles(): $OptionInstance<$ParticleStatus>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        textBackgroundOpacity(): $OptionInstance<number>;
        getCameraType(): $CameraType;
        setCameraType(arg0: $CameraType_): void;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        renderDistance(): $OptionInstance<number>;
        ambientOcclusion(): $OptionInstance<boolean>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        biomeBlendRadius(): $OptionInstance<number>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        useNativeTransport(): boolean;
        showSubtitles(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        sensitivity(): $OptionInstance<number>;
        narratorHotkey(): $OptionInstance<boolean>;
        panoramaSpeed(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        hideMatchedNames(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        autoSuggestions(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        chatHeightFocused(): $OptionInstance<number>;
        invertYMouse(): $OptionInstance<boolean>;
        static genericValueLabel(arg0: $Component_, arg1: $Component_): $Component;
        static genericValueLabel(arg0: $Component_, arg1: number): $Component;
        broadcastOptions(): void;
        toggleModelPart(arg0: $PlayerModelPart_, arg1: boolean): void;
        isModelPartEnabled(arg0: $PlayerModelPart_): boolean;
        updateResourcePacks(arg0: $PackRepository): void;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        getSoundSourceVolume(arg0: $SoundSource_): number;
        mouseWheelSensitivity(): $OptionInstance<number>;
        darknessEffectScale(): $OptionInstance<number>;
        chatHeightUnfocused(): $OptionInstance<number>;
        static genericValueOrOffLabel(arg0: $Component_, arg1: number): $Component;
        entityDistanceScaling(): $OptionInstance<number>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        buildPlayerInformation(): $ClientInformation;
        getBackgroundOpacity(arg0: number): number;
        fov(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
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
        set serverRenderDistance(value: number);
        get effectiveRenderDistance(): number;
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        validateValue(arg0: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        applyValueImmediately(): boolean;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        toSliderValue(arg0: number): number;
        fromSliderValue(arg0: number): $Object;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $ToggleKeyMapping extends $KeyMapping {
        reset(): void;
        modifyReturnValue$dkm000$xaerominimap$onIsDown(arg0: boolean): boolean;
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
        toSliderValue(arg0: number): number;
        fromSliderValue(arg0: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor$2, $TimerAccessor {
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        updateFrozenState(arg0: boolean): void;
        advanceTime(arg0: number, arg1: boolean): number;
        updatePauseState(arg0: boolean): void;
        getGameTimeDeltaTicks(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        getTickLength(): number;
        setTickLength(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: $FloatUnaryOperator_);
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
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
        handler$boo000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        addedTime(): number;
        endOfEntry(): boolean;
        chatheads$getHeadData(): $HeadData;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_, arg3: boolean);
    }
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        checkStatus(arg0: boolean): void;
        sayNow(arg0: string): void;
        sayNow(arg0: $Component_): void;
        say(arg0: $Component_): void;
        updateNarratorStatus(arg0: $NarratorStatus_): void;
        sayChat(arg0: $Component_): void;
        static NO_TITLE: $Component;
        constructor(arg0: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        validateValue(arg0: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        maxSupplier(): $IntSupplier;
        createCycleButton(): boolean;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        encodableMaxInclusive(): number;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        toSliderValue(arg0: number): number;
        fromSliderValue(arg0: number): $Object;
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
        indicatorColor(): number;
        static systemSinglePlayer(): $GuiMessageTag;
        logTag(): string;
        static chatError(): $GuiMessageTag;
        static chatModified(arg0: string): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
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
        addedTime(): number;
        chatheads$setHeadData(headData: $HeadData_): void;
        chatheads$getHeadData(): $HeadData;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_, arg3: $GuiMessageTag_);
    }
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        static getCategories(arg0: $RecipeBookType_): $List<$RecipeBookCategories>;
        static setAGGREGATE_CATEGORIES$connector_$md$d64506$0(arg0: $Map_<any, any>): void;
        getIconItems(): $List<$ItemStack>;
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
        static set AGGREGATE_CATEGORIES$connector_$md$d64506$0(value: $Map_<any, any>);
        get iconItems(): $List<$ItemStack>;
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
        getPartialTickTime(): number;
        getFluidInCamera(): $FogType;
        getEntity(): $Entity;
        isInitialized(): boolean;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vec3_): void;
        setRotation(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        setRotation(arg0: number, arg1: number): void;
        sable$getZoomAmount(): number;
        handler$ehh000$superbwarfare$superbWarfare$setup(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        getUpVector(): $Vector3f;
        sable$isOccluded(): boolean;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        handler$ind000$axiom$getMaxZoom(d: number, cir: $CallbackInfoReturnable<any>): void;
        handler$hmi000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        getMaxZoom(arg0: number): number;
        rotation(): $Quaternionf;
        getPosition(): $Vec3;
        getBlockPosition(): $BlockPos;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        handler$cbk000$vista$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        handler$hgd000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$hhk001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        createHypertube$setDetachedExternal(arg0: boolean): void;
        getRoll(): number;
        isDetached(): boolean;
        sable$setZoomAmount(arg0: number): void;
        getYRot(): number;
        getXRot(): number;
        getLookVector(): $Vector3f;
        getNearPlane(): $Camera$NearPlane;
        superbwarfare$getRotation(): $Quaternionf;
        createHypertube$callSetPosition(arg0: number, arg1: number, arg2: number): void;
        createHypertube$callSetRotation(arg0: number, arg1: number): void;
        createHypertube$callGetMaxZoom(arg0: number): number;
        createHypertube$callMove(arg0: number, arg1: number, arg2: number): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        level: $BlockGetter;
        eyeHeight: number;
        initialized: boolean;
        static $assertionsDisabled: boolean;
        entity: $Entity;
        constructor();
        get partialTickTime(): number;
        get fluidInCamera(): $FogType;
        get upVector(): $Vector3f;
        get blockPosition(): $BlockPos;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get roll(): number;
        get detached(): boolean;
        get YRot(): number;
        get XRot(): number;
        get lookVector(): $Vector3f;
        get nearPlane(): $Camera$NearPlane;
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
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    export class $OptionInstance<T> implements $SimpleOptionAccessor<any>, $ISimpleOption<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(arg0: $Object): void;
        static createBoolean(arg0: string, arg1: boolean, arg2: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: boolean): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: $OptionInstance$CaptionBasedToString_<boolean>, arg3: boolean, arg4: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean, arg3: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean): $OptionInstance<boolean>;
        codec(): $Codec<$Object>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number): $AbstractWidget;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: $Consumer_<$Object>): $AbstractWidget;
        createButton(arg0: $Options): $AbstractWidget;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        static cachedConstantTooltip<T>(arg0: $Component_): $OptionInstance$TooltipSupplier<T>;
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
        setOverlay(arg0: $Overlay): void;
        disconnect(): void;
        disconnect(arg0: $Screen): void;
        disconnect(arg0: $Screen, arg1: boolean): void;
        getFps(): number;
        getTextureManager(): $TextureManager;
        handler$ioa000$axiom$handleKeyboards(ci: $CallbackInfo): void;
        handler$heo000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        isRunning(): boolean;
        redirect$ioa000$axiom$updateSelectedSlot(instance: $Inventory, value: number): void;
        static crash(arg0: $Minecraft, arg1: $File_, arg2: $CrashReport): void;
        handler$ecd000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$ijl000$imblocker$captureGameRenderEnd(arg0: boolean, arg1: $CallbackInfo): void;
        handler$ijl000$imblocker$recordGameRenderStartTime(arg0: boolean, arg1: $CallbackInfo): void;
        getProfiler(): $ProfilerFiller;
        getLaunchedVersion(): string;
        getVersionType(): string;
        delayCrashRaw(arg0: $CrashReport): void;
        isGameLoadFinished(): boolean;
        static checkModStatus(): $ModCheck;
        resizeDisplay(): void;
        updateTitle(): void;
        getBlockRenderer(): $BlockRenderDispatcher;
        updateFontOptions(): void;
        getDebugOverlay(): $DebugScreenOverlay;
        multiplayerBan(): $BanDetails;
        allowsMultiplayer(): boolean;
        renderBuffers(): $RenderBuffers;
        commandHistory(): $CommandHistory;
        setWindowActive(arg0: boolean): void;
        isLocalServer(): boolean;
        realmsDataFetcher(): $RealmsDataFetcher;
        directoryValidator(): $DirectoryValidator;
        quickPlayLog(): $QuickPlayLog;
        getToasts(): $ToastComponent;
        static fillReport(arg0: $Minecraft, arg1: $LanguageManager, arg2: string, arg3: $Options, arg4: $CrashReport): void;
        fillReport(arg0: $CrashReport): $CrashReport;
        delayCrash(arg0: $CrashReport): void;
        getCurrentServer(): $ServerData;
        getResourceManager(): $ResourceManager;
        handler$ioa000$axiom$setLevel(ci: $CallbackInfo): void;
        handler$blf000$veil$endFrame(arg0: $CallbackInfo): void;
        clearDownloadedResourcePacks(): void;
        handler$ioa000$axiom$startUseItem(ci: $CallbackInfo): void;
        handler$ioa000$axiom$setScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$ioa000$axiom$startAttack(ci: $CallbackInfoReturnable<any>): void;
        handler$ioa000$axiom$onRightClick(ci: $CallbackInfo): void;
        handler$ioa000$axiom$resizeDisplay(ci: $CallbackInfo): void;
        handler$iob000$axiom$pickBlock(ci: $CallbackInfo): void;
        handler$blf000$veil$beginFrame(arg0: $CallbackInfo): void;
        handler$ioa000$axiom$afterMainBlit(ci: $CallbackInfo): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        localvar$ilb000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        handler$cge000$acceleratedrendering$setDebugContext(arg0: $GameConfig, arg1: $CallbackInfo): void;
        getResourcePackDirectory(): $Path;
        getWindow(): $Window;
        getConnection(): $ClientPacketListener;
        getGuiSprites(): $GuiSpriteManager;
        setScreen(arg0: $Screen): void;
        getUser(): $User;
        getProxy(): $Proxy;
        handler$bei000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$ijl000$imblocker$onWindowFocusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        wrapWithCondition$ioa000$axiom$handleKeybindsSendPacket(instance: $ClientPacketListener, packet: $Packet<any>): boolean;
        handler$ilb000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        wrapOperation$ioa000$axiom$handleKeybinds_setScreen(instance: $Minecraft, screen: $Screen, original: $Operation_<any>): void;
        handler$fhc000$inventoryprofilesnext$handleInputEvents(arg0: $CallbackInfo): void;
        getItemRenderer(): $ItemRenderer;
        isWindowActive(): boolean;
        getTutorial(): $Tutorial;
        getNarrator(): $GameNarrator;
        isLocalPlayer(arg0: $UUID_): boolean;
        getSkinManager(): $SkinManager;
        getBlockColors(): $BlockColors;
        getFixerUpper(): $DataFixer;
        getTextureAtlas(arg0: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getEntityModels(): $EntityModelSet;
        getSplashManager(): $SplashManager;
        updateMaxMipLevel(arg0: number): void;
        getItemColors(): $ItemColors;
        setCameraEntity(arg0: $Entity): void;
        getHotbarManager(): $HotbarManager;
        getLanguageManager(): $LanguageManager;
        getSoundManager(): $SoundManager;
        getLastInputType(): $InputType;
        getGameProfile(): $GameProfile;
        getChatListener(): $ChatListener;
        setWindowDelegate(window: $VirtualWindow): void;
        getTitle(): string;
        reloadResourcePacks(): $CompletableFuture<void>;
        emergencySaveAndCrash(arg0: $CrashReport): void;
        getMainRenderTarget(): $RenderTarget;
        clearResourcePacksOnError(arg0: $Throwable, arg1: $Component_, arg2: $Minecraft$GameLoadCookie_): void;
        handler$boa000$balm$run(arg0: $CallbackInfo): void;
        hasSingleplayerServer(): boolean;
        handler$bmh002$veil$close(arg0: $CallbackInfo): void;
        debugClientMetricsStart(arg0: $Consumer_<$Component>): boolean;
        getSingleplayerServer(): $IntegratedServer;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        static useShaderTransparency(): boolean;
        telemetryOptInExtra(): boolean;
        extraTelemetryAvailable(): boolean;
        debugFpsMeterKeyPress(arg0: number): void;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        static useAmbientOcclusion(): boolean;
        getResourcePackRepository(): $PackRepository;
        updateReportEnvironment(arg0: $ReportEnvironment_): void;
        getTelemetryManager(): $ClientTelemetryManager;
        createWorldOpenFlows(): $WorldOpenFlows;
        replayModProcessKeyBinds(): void;
        getProgressListener(): $StoringChunkProgressListener;
        replayModExecuteTaskQueue(): void;
        shouldEntityAppearGlowing(arg0: $Entity): boolean;
        getMinecraftSessionService(): $MinecraftSessionService;
        getPaintingTextures(): $PaintingTextureManager;
        getScheduledEvents(): $ScheduledEvents;
        getPlayerSocialManager(): $PlayerSocialManager;
        canValidateProfileKeys(): boolean;
        getDownloadedPackSource(): $DownloadedPackSource;
        getSituationalMusic(): $Music;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        prepareForMultiplayer(): void;
        grabPanoramixScreenshot(arg0: $File_, arg1: number, arg2: number): $Component;
        getXaeroMinimap_fps(): number;
        getXaeroWorldMap_fps(): number;
        showOnlyReducedInfo(): boolean;
        isTextFilteringEnabled(): boolean;
        getMobEffectTextures(): $MobEffectTextureManager;
        getReportingContext(): $ReportingContext;
        axiom$addCustomNbtData(itemStack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        axiom$pushMainRenderTarget(renderTarget: $RenderTarget): void;
        axiom$popMainRenderTarget(): void;
        axiom$setRightClickDelay(rightClickDelay: number): void;
        axiom$getRightClickDelay(): number;
        handler$ioa000$axiom$pickBlockInfinite(ci: $CallbackInfo): void;
        handler$cga000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        getVanillaPackResources(): $VanillaPackResources;
        pauseGame(arg0: boolean): void;
        isPaused(): boolean;
        isBlocked(arg0: $UUID_): boolean;
        isDemo(): boolean;
        getOverlay(): $Overlay;
        handler$ijl000$imblocker$onScreenChanged(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$gkl003$distanthorizons$close(ci: $CallbackInfo): void;
        handler$ioa000$axiom$getMainRenderTarget(cir: $CallbackInfoReturnable<any>): void;
        modify$ecd000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$ijl000$imblocker$runPreRenderTasks(arg0: boolean, arg1: $CallbackInfo): void;
        handler$ioa000$axiom$continueAttack(attacking: boolean, ci: $CallbackInfo): void;
        startUseItem(): void;
        getFrameTimeNs(): number;
        cursorEntered(): void;
        getMusicManager(): $MusicManager;
        getGpuUtilization(): number;
        doWorldLoad(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $PackRepository, arg2: $WorldStem_, arg3: boolean): void;
        getCameraEntity(): $Entity;
        clearClientLevel(arg0: $Screen): void;
        allowsRealms(): boolean;
        allowsTelemetry(): boolean;
        forceSetScreen(arg0: $Screen): void;
        delayTextureReload(): $CompletableFuture<void>;
        isSingleplayer(): boolean;
        static useFancyGraphics(): boolean;
        isNameBanned(): boolean;
        addCustomNbtData(arg0: $ItemStack_, arg1: $BlockEntity, arg2: $RegistryAccess): void;
        static getLauncherBrand(): string;
        static renderNames(): boolean;
        getLevelSource(): $LevelStorageSource;
        getModelManager(): $ModelManager;
        getChatStatus(): $Minecraft$ChatStatus;
        isEnforceUnicode(): boolean;
        setLastInputType(arg0: $InputType_): void;
        getLocale(): $Locale;
        popGuiLayer(): void;
        pushGuiLayer(arg0: $Screen): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        setTitle(t: string): void;
        isShiftDown(): boolean;
        isCtrlDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        isKeyBindDown(id: string): boolean;
        isAltDown(): boolean;
        getCurrentScreen(): $Screen;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setCurrentScreen(gui: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyMappingDown(key: $KeyMapping): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getCurrentWorldName(): string;
        self(): $Minecraft;
        tell(message: $Component_): void;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getTimer(): $DeltaTracker$Timer;
        getProgressTasks(): $Queue<$Runnable>;
        getFontManager(): $FontManager;
        getPendingReload(): $CompletableFuture<void>;
        create$setMissTime(arg0: number): void;
        setPendingReload(arg0: $CompletableFuture<void>): void;
        ias$userApiService(service: $UserApiService): void;
        setConnection(arg0: $Connection): void;
        ias$profileFuture(future: $CompletableFuture<$ProfileResult_>): void;
        getCrashReporter(): $Supplier<$CrashReport>;
        ias$playerSocialManager(manager: $PlayerSocialManager): void;
        ias$userPropertiesFuture(future: $CompletableFuture<$UserApiService$UserProperties_>): void;
        ias$reportingContext(context: $ReportingContext): void;
        ias$telemetryManager(manager: $ClientTelemetryManager): void;
        ldlib2$getClientTickCount(): number;
        ias$authenticationService(): $YggdrasilAuthenticationService;
        ias$profileKeyPairManager(manager: $ProfileKeyPairManager): void;
        ias$user(user: $User): void;
        setTimer(arg0: $DeltaTracker$Timer): void;
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
        get textureManager(): $TextureManager;
        get running(): boolean;
        get profiler(): $ProfilerFiller;
        get launchedVersion(): string;
        get versionType(): string;
        get gameLoadFinished(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get debugOverlay(): $DebugScreenOverlay;
        get localServer(): boolean;
        get toasts(): $ToastComponent;
        get currentServer(): $ServerData;
        get resourceManager(): $ResourceManager;
        get profileKeySignatureValidator(): $SignatureValidator;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get resourcePackDirectory(): $Path;
        get window(): $Window;
        get guiSprites(): $GuiSpriteManager;
        get user(): $User;
        get proxy(): $Proxy;
        get itemRenderer(): $ItemRenderer;
        get tutorial(): $Tutorial;
        get narrator(): $GameNarrator;
        get skinManager(): $SkinManager;
        get blockColors(): $BlockColors;
        get fixerUpper(): $DataFixer;
        get entityModels(): $EntityModelSet;
        get splashManager(): $SplashManager;
        get itemColors(): $ItemColors;
        get hotbarManager(): $HotbarManager;
        get languageManager(): $LanguageManager;
        get soundManager(): $SoundManager;
        get gameProfile(): $GameProfile;
        get chatListener(): $ChatListener;
        set windowDelegate(value: $VirtualWindow);
        get singleplayerServer(): $IntegratedServer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get resourcePackRepository(): $PackRepository;
        get telemetryManager(): $ClientTelemetryManager;
        get progressListener(): $StoringChunkProgressListener;
        get minecraftSessionService(): $MinecraftSessionService;
        get paintingTextures(): $PaintingTextureManager;
        get scheduledEvents(): $ScheduledEvents;
        get playerSocialManager(): $PlayerSocialManager;
        get downloadedPackSource(): $DownloadedPackSource;
        get situationalMusic(): $Music;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get xaeroMinimap_fps(): number;
        get xaeroWorldMap_fps(): number;
        get textFilteringEnabled(): boolean;
        get mobEffectTextures(): $MobEffectTextureManager;
        get reportingContext(): $ReportingContext;
        get vanillaPackResources(): $VanillaPackResources;
        get paused(): boolean;
        get demo(): boolean;
        get frameTimeNs(): number;
        get musicManager(): $MusicManager;
        get gpuUtilization(): number;
        get singleplayer(): boolean;
        get nameBanned(): boolean;
        static get launcherBrand(): string;
        get levelSource(): $LevelStorageSource;
        get modelManager(): $ModelManager;
        get chatStatus(): $Minecraft$ChatStatus;
        get enforceUnicode(): boolean;
        get locale(): $Locale;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get altDown(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get currentWorldName(): string;
        get displayName(): $Component;
        get progressTasks(): $Queue<$Runnable>;
        get crashReporter(): $Supplier<$CrashReport>;
    }
    export class $Camera$NearPlane {
        getTopLeft(): $Vec3;
        getTopRight(): $Vec3;
        getBottomRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getPointOnPlane(arg0: number, arg1: number): $Vec3;
        forward: $Vec3;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
        get topLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomRight(): $Vec3;
        get bottomLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static create$nochatreports_$md$d64506$0(arg0: string, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $GuiMessageTag$Icon;
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
        handler$cci000$vista$supp$onKeyPressCancellable(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$gcf000$chloride$redirect$handleFullScreenToggle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        setClipboard(arg0: string): void;
        keyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getClipboard(): string;
        handler$bjp000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$bjp000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
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
        startRecovery(arg0: $Throwable): void;
        startReload(arg0: $ResourceLoadStateTracker$ReloadReason_, arg1: $List_<$PackResources>): void;
        finishReload(): void;
        fillCrashReport(arg0: $CrashReport): void;
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
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altCondition(): $BooleanSupplier;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        altValues(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        splitLines(arg0: string, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: $Style, arg3: boolean, arg4: $StringSplitter$LinePosConsumer_): void;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $FormattedText): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $BiConsumer_<$FormattedText, boolean>): void;
        stringWidth(arg0: $FormattedText): number;
        stringWidth(arg0: string): number;
        stringWidth(arg0: $FormattedCharSequence_): number;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        headByWidth(arg0: $FormattedText, arg1: number, arg2: $Style): $FormattedText;
        plainHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        plainTailByWidth(arg0: string, arg1: number, arg2: $Style): string;
        componentStyleAtWidth(arg0: $FormattedCharSequence_, arg1: number): $Style;
        componentStyleAtWidth(arg0: $FormattedText, arg1: number): $Style;
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
        static resetToggleKeys(): void;
        static createNameSupplier(arg0: string): $Supplier<$Component>;
        getDefaultKeyModifier(): $KeyModifier;
        setKeyConflictContext(arg0: $IKeyConflictContext): void;
        setKeyModifierAndCode(arg0: $KeyModifier_, arg1: $InputConstants$Key): void;
        getKeyConflictContext(): $IKeyConflictContext;
        getTranslatedKeyMessage(): $Component;
        getKeyModifier(): $KeyModifier;
        static resetMapping(): void;
        static releaseAll(): void;
        same(arg0: $KeyMapping): boolean;
        isDown(): boolean;
        isUnbound(): boolean;
        static click(arg0: $InputConstants$Key): void;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$d64506$2(): $Map<any, any>;
        setDown(arg0: boolean): void;
        saveString(): string;
        handler$eia000$superbwarfare$consumeClick(arg0: $CallbackInfoReturnable<any>): void;
        getDefaultKey(): $InputConstants$Key;
        consumeClick(): boolean;
        handler$ino000$axiom$isPressed(cir: $CallbackInfoReturnable<any>): void;
        handler$ino000$axiom$isDown(cir: $CallbackInfoReturnable<any>): void;
        matchesMouse(arg0: number): boolean;
        getDisplayName(): $Component;
        setToDefault(): void;
        hasKeyModifierConflict(arg0: $KeyMapping): boolean;
        isConflictContextAndModifierActive(): boolean;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        getKey(): $InputConstants$Key;
        getPressTime(): number;
        setPressTime(arg0: number): void;
        controlling$getKey(): $InputConstants$Key;
        fabric_getBoundKey(): $InputConstants$Key;
        setPressed(arg0: boolean): void;
        getKeyCode(): $InputConstants$Key;
        getTimesPressed(): number;
        setTimesPressed(arg0: number): void;
        fabric_getTimesPressed(): number;
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
        constructor(arg0: string, arg1: $InputConstants$Type_, arg2: number, arg3: string);
        constructor(arg0: string, arg1: number, arg2: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        get name(): string;
        get default(): boolean;
        get category(): string;
        get defaultKeyModifier(): $KeyModifier;
        get translatedKeyMessage(): $Component;
        get keyModifier(): $KeyModifier;
        get unbound(): boolean;
        get defaultKey(): $InputConstants$Key;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get keyCode(): $InputConstants$Key;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getGameTimeDeltaTicks(): number;
        constructor(arg0: number);
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
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
        queryBlockEntityTag(arg0: $BlockPos_, arg1: $Consumer_<$CompoundTag>): void;
        queryEntityTag(arg0: number, arg1: $Consumer_<$CompoundTag>): void;
        handleResponse(arg0: number, arg1: $CompoundTag_): boolean;
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
