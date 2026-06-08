import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $EntityType_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleType_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $RegisterClientExtensionsEvent } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $DynamicItemTooltipsKubeEvent, $ItemTintFunction, $ItemTintFunction_ } from "@package/dev/latvian/mods/kubejs/item";
import { $KubeEvent, $EventTargetType } from "@package/dev/latvian/mods/kubejs/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ScreenEvent$Render$Post, $ClientPlayerNetworkEvent$LoggingOut, $RegisterKeyMappingsEvent, $ClientPlayerNetworkEvent$LoggingIn, $RenderLevelStageEvent, $RegisterParticleProvidersEvent, $RegisterColorHandlersEvent$Block, $RenderGuiEvent$Post, $RegisterMenuScreensEvent, $ScreenEvent$Opening, $RegisterShadersEvent, $EntityRenderersEvent$RegisterRenderers, $RegisterClientCommandsEvent, $ScreenEvent$Init$Post, $ClientTickEvent$Pre, $CustomizeGuiOverlayEvent$DebugText, $RegisterColorHandlersEvent$Item } from "@package/net/neoforged/neoforge/client/event";
import { $ClientLevel, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $FMLClientSetupEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $ScheduledEvents$ScheduledEvent, $BaseProperties, $ScheduledEvents, $NotificationToastData_ } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $ScriptType_, $ConsoleJS, $ScriptType, $ScriptPack, $KubeJSContextFactory, $ScriptManager, $ConsoleLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SpriteSet, $Particle, $ParticleProvider_, $ParticleProvider, $SimpleAnimatedParticle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $GeneratedDataStage, $VirtualAssetPack } from "@package/dev/latvian/mods/kubejs/script/data";
import { $Float2IntFunction_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $RepositorySource, $Pack } from "@package/net/minecraft/server/packs/repository";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonObject_, $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $TooltipRequirements_, $ItemTooltipData } from "@package/dev/latvian/mods/kubejs/text/tooltip";
import { $KeyConflictContext_, $KeyModifier_ } from "@package/net/neoforged/neoforge/client/settings";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $Map, $List, $Map_, $List_, $Calendar } from "@package/java/util";
import { $KubeServerData_ } from "@package/dev/latvian/mods/kubejs/net";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $ItemTooltipEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $RegistryAccess, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $Object } from "@package/java/lang";
import { $File_ } from "@package/java/io";
import { $BlockAndTintGetter, $Level } from "@package/net/minecraft/world/level";
import { $BlockTintFunction, $BlockTintFunction_ } from "@package/dev/latvian/mods/kubejs/block";
import { $EntityRendererProvider_ } from "@package/net/minecraft/client/renderer/entity";
import { $Toast$Visibility, $Toast, $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $AbstractSelectionList, $ObjectSelectionList, $Renderable, $CycleButton, $WidgetTooltipHolder, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $TagsUpdatedEvent, $AddPackFindersEvent } from "@package/net/neoforged/neoforge/event";
import { $Pattern } from "@package/java/util/regex";
import { $InputConstants$Type_ } from "@package/com/mojang/blaze3d/platform";
import { $BufferedImage } from "@package/java/awt/image";
import { $RecipeViewerData } from "@package/dev/latvian/mods/kubejs/recipe/viewer/server";
import { $MenuScreens$ScreenConstructor_, $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $KubeJSCommon } from "@package/dev/latvian/mods/kubejs";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as icon from "@package/dev/latvian/mods/kubejs/client/icon";
export * as highlight from "@package/dev/latvian/mods/kubejs/client/highlight";
export * as editor from "@package/dev/latvian/mods/kubejs/client/editor";

declare module "@package/dev/latvian/mods/kubejs/client" {
    export class $KeybindRegistryKubeEvent$Builder {
        modifier(modifier: $KeyModifier_): $KeybindRegistryKubeEvent$Builder;
        category(category: string): $KeybindRegistryKubeEvent$Builder;
        inputType(inputType: $InputConstants$Type_): $KeybindRegistryKubeEvent$Builder;
        inGame(): $KeybindRegistryKubeEvent$Builder;
        conflictContext(keyConflictContext: $KeyConflictContext_): $KeybindRegistryKubeEvent$Builder;
        gui(): $KeybindRegistryKubeEvent$Builder;
        defaultKey(keyName: string): $KeybindRegistryKubeEvent$Builder;
        mouseInputType(): $KeybindRegistryKubeEvent$Builder;
        scanCodeInputType(): $KeybindRegistryKubeEvent$Builder;
    }
    export class $ClientAssetPacks {
        inject(original: $List_<$PackResources>): $List<$PackResources>;
        internalAssetPack: $VirtualAssetPack;
        virtualPacks: $Map<$GeneratedDataStage, $VirtualAssetPack>;
        static INSTANCE: $ClientAssetPacks;
        constructor();
    }
    export class $MultipartBlockStateGenerator {
        part(when: string, model: $ResourceLocation_): void;
        part(when: string, consumer: $Consumer_<$MultipartBlockStateGenerator$Part>): void;
        toJson(): $JsonObject;
        constructor();
    }
    export class $KubeJSResourcePackFinder implements $RepositorySource {
        loadPacks(nameToPackMap: $Consumer_<$Pack>): void;
        constructor();
    }
    export class $BlockTintFunctionWrapper extends $Record implements $BlockColor {
        "function"(): $BlockTintFunction;
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): number;
        constructor(arg0: $BlockTintFunction_);
    }
    export class $ModelGenerator$Override {
        predicate(property: $ResourceLocation_, value: number): void;
        toJson(): $JsonObject;
        constructor(model: $ResourceLocation_);
    }
    export class $ItemTintFunctionWrapper extends $Record implements $ItemColor {
        "function"(): $ItemTintFunction;
        getColor(stack: $ItemStack_, index: number): number;
        constructor(arg0: $ItemTintFunction_);
    }
    export class $KubeAnimatedParticle extends $SimpleAnimatedParticle {
        getY(): number;
        getX(): number;
        setColor(color: $KubeColor_, alpha: boolean): void;
        setColor(color: $KubeColor_): void;
        getLevel(): $ClientLevel;
        /**
         * Sets teh friction of the particle, the particle's motion is multiplied by this value every tick
         */
        setFriction(f: number): void;
        setPhysicality(hasPhysics: boolean): void;
        setLightColor(arg0: $Float2IntFunction_): void;
        setGravity(g: number): void;
        getYSpeed(): number;
        getZSpeed(): number;
        getXSpeed(): number;
        getZ(): number;
        getSpriteSet(): $SpriteSet;
        onTick(tick: $Consumer_<$KubeAnimatedParticle>): void;
        getRandom(): $RandomSource;
        setSpeed(speed: $Vec3_): void;
        setFasterWhenYMotionBlocked(b: boolean): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet);
        set physicality(value: boolean);
        set lightColor(value: $Float2IntFunction_);
        get YSpeed(): number;
        get ZSpeed(): number;
        get XSpeed(): number;
        get spriteSet(): $SpriteSet;
        set speed(value: $Vec3_);
        set fasterWhenYMotionBlocked(value: boolean);
    }
    export class $LangKubeEvent extends $Record implements $KubeEvent {
        add(namespace: string, key: string, value: string): void;
        add(key: string, value: string): void;
        map(): $Map<$LangKubeEvent$Key, string>;
        addAll(map: $Map_<string, string>): void;
        addAll(namespace: string, map: $Map_<string, string>): void;
        lang(): string;
        renameBlock(block: $Block_, name: string): void;
        painting(paintingId: $ResourceLocation_, title: string, author: string): void;
        renameItem(item: $ItemStack_, name: string): void;
        renameBiome(id: $ResourceLocation_, name: string): void;
        renameEntity(id: $ResourceLocation_, name: string): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        static PATTERN: $Pattern;
        constructor(lang: string, map: $Map_<$LangKubeEvent$Key_, string>);
    }
    export class $EntityRendererRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $EntityType_<never>, renderer: $EntityRendererProvider_<any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $EntityRenderersEvent$RegisterRenderers);
        get client(): $Minecraft;
    }
    export class $ParticleProviderRegistryKubeEvent implements $ClientKubeEvent {
        register<T extends $ParticleOptions>(type: $ParticleType_<T>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>, particle: $Consumer_<$KubeAnimatedParticle>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>, spriteProvider: $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider_<T>): void;
        registerSpecial<T extends $ParticleOptions>(type: $ParticleType_<T>, provider: $ParticleProvider_<T>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $RegisterParticleProvidersEvent);
        get client(): $Minecraft;
    }
    export class $SoundsGenerator {
        toJson(): $JsonObject;
        addSound(path: string, consumer: $Consumer_<$SoundsGenerator$SoundGen>, overlayExisting: boolean): void;
        addSound(path: string, consumer: $Consumer_<$SoundsGenerator$SoundGen>): void;
        constructor();
    }
    export class $LoadedTexture {
        toBytes(): number[];
        static load(id: $ResourceLocation_): $LoadedTexture;
        copy(): $LoadedTexture;
        resize(newWidth: number, newHeight: number): $LoadedTexture;
        tint(tint: $KubeColor_): $LoadedTexture;
        remap(remap: $Map_<$KubeColor_, $KubeColor_>): $LoadedTexture;
        pixels: number[];
        width: number;
        static EMPTY: $LoadedTexture;
        mcmeta: number[];
        height: number;
        constructor(img: $BufferedImage, mcmeta: number[]);
        constructor(width: number, height: number, pixels: number[], mcmeta: number[]);
    }
    export class $ModelGenerator$OverridePredicate extends $Record {
        value(): number;
        property(): $ResourceLocation;
        toJson(json: $JsonObject_): void;
        constructor(property: $ResourceLocation_, value: number);
    }
    export class $VariantBlockStateGenerator$Model {
        x(x: number): $VariantBlockStateGenerator$Model;
        y(y: number): $VariantBlockStateGenerator$Model;
        toJson(): $JsonObject;
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        uvlock(): $VariantBlockStateGenerator$Model;
        constructor();
    }
    export class $LangKubeEvent$Key extends $Record {
        key(): string;
        lang(): string;
        namespace(): string;
        constructor(namespace: string, lang: string, key: string);
    }
    export class $BlockEntityRendererRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $BlockEntityType_<never>, renderer: $BlockEntityRendererProvider_<any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $EntityRenderersEvent$RegisterRenderers);
        get client(): $Minecraft;
    }
    export class $KubeJSKeybinds$KubeKey {
        id: string;
        constructor(id: string);
    }
    export class $NotificationToast implements $Toast {
        width(): number;
        render(graphics: $GuiGraphics, toastComponent: $ToastComponent, l: number): $Toast$Visibility;
        height(): number;
        slotCount(): number;
        getToken(): $Object;
        constructor(mc: $Minecraft, notification: $NotificationToastData_);
        get token(): $Object;
    }
    export class $KubeJSErrorScreen$ErrorList extends $ObjectSelectionList<$KubeJSErrorScreen$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        screen: $KubeJSErrorScreen;
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
        hovered: $KubeJSErrorScreen$Entry;
        lines: $List<$ConsoleLine>;
        height: number;
        constructor(screen: $KubeJSErrorScreen, minecraft: $Minecraft, width: number, height: number, top: number, bottom: number, lines: $List_<$ConsoleLine>);
    }
    export class $ScheduledClientEvent extends $ScheduledEvents$ScheduledEvent {
        getClient(): $Minecraft;
        timer: number;
        static EVENTS: $ScheduledEvents;
        repeating: boolean;
        scheduledEvents: $ScheduledEvents;
        id: number;
        endTime: number;
        ofTicks: boolean;
        constructor();
        get client(): $Minecraft;
    }
    export class $KubeJSKeybinds {
        static getOrCreate(id: string): $KubeJSKeybinds$KubeKey;
        static get(id: string): $KubeJSKeybinds$KubeKey;
        static generateLang(event: $LangKubeEvent_): void;
        static triggerKeyEvents(client: $Minecraft): void;
        static triggerReload(): void;
        static TARGET: $EventTargetType<$KubeJSKeybinds$KubeKey>;
        constructor();
    }
    export class $ClientKubeEvent {
    }
    export interface $ClientKubeEvent extends $KubeEvent {
        getClient(): $Minecraft;
        get client(): $Minecraft;
    }
    export class $ModelGenerator {
        parent(s: $ResourceLocation_): void;
        override(model: $ResourceLocation_, override: $Consumer_<$ModelGenerator$Override>): void;
        element(consumer: $Consumer_<$ModelGenerator$Element>): void;
        toJson(): $JsonObject;
        custom(json: $Consumer_<$JsonObject>): void;
        textures(map: $Map_<string, string>): void;
        texture(name: string[], texture: string): void;
        constructor();
    }
    export class $SoundsGenerator$SoundGen {
        replace(): $SoundsGenerator$SoundGen;
        replace(b: boolean): $SoundsGenerator$SoundGen;
        toJson(): $JsonObject;
        sound(file: string, consumer: $Consumer_<$SoundsGenerator$SoundInstance>): $SoundsGenerator$SoundGen;
        sound(file: string): $SoundsGenerator$SoundGen;
        subtitle(subtitle: string): $SoundsGenerator$SoundGen;
        sounds(...sounds: string[]): $SoundsGenerator$SoundGen;
        constructor();
    }
    export class $KeybindRegistryKubeEvent implements $ClientKubeEvent {
        register(id: string, defaultKey: string): $KeybindRegistryKubeEvent$Builder;
        register(id: string): $KeybindRegistryKubeEvent$Builder;
        getClient(): $Minecraft;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
        get client(): $Minecraft;
    }
    export class $ModelGenerator$Face {
        toJson(): $JsonObject;
        uv(u0: number, v0: number, u1: number, v1: number): $ModelGenerator$Face;
        tex(t: string): $ModelGenerator$Face;
        tintindex(i: number): $ModelGenerator$Face;
        cull(): $ModelGenerator$Face;
        cull(d: $Direction_): $ModelGenerator$Face;
        side: $Direction;
        constructor(side: $Direction_);
    }
    export class $ClientPlayerKubeEvent implements $KubePlayerEvent, $ClientKubeEvent {
        getPlayer(): $LocalPlayer;
        getClient(): $Minecraft;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        getEntity(): $LivingEntity;
        constructor(player: $LocalPlayer);
        get player(): $LocalPlayer;
        get client(): $Minecraft;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $AtlasSpriteRegistryKubeEvent implements $KubeEvent {
        register(id: $ResourceLocation_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(registry: $Consumer_<$ResourceLocation>);
    }
    export class $MenuScreenRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $MenuType_<never>, arg1: $MenuScreens$ScreenConstructor_<any, any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $RegisterMenuScreensEvent);
        get client(): $Minecraft;
    }
    export class $DebugInfoKubeEvent extends $ClientPlayerKubeEvent {
        /**
         * The lines of debug info. Mutating this list will change the debug info.
         */
        getLines(): $List<string>;
        /**
         * Whether the debug info should be rendered.
         */
        getShowDebug(): boolean;
        constructor(player: $LocalPlayer, l: $List_<string>);
        get lines(): $List<string>;
        get showDebug(): boolean;
    }
    export class $VariantBlockStateGenerator$Variant {
        toJson(): $JsonElement;
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        constructor();
    }
    export class $KubeJSClient extends $KubeJSCommon {
        static formatNumber(count: number): string;
        static copyDefaultOptionsFile(optionsFile: $File_): void;
        static resizePostChains(width: number, height: number): void;
        static loadPostChains(mc: $Minecraft): void;
        static drawStackSize(graphics: $GuiGraphics, font: $Font, size: number, x: number, y: number, color: number, dropShadow: boolean): number;
        static reloadClientScripts(): void;
        static CLIENT_PACKS: $Map<$GeneratedDataStage, $VirtualAssetPack>;
        static WHITE_TEXTURE: $ResourceLocation;
        static clientItemTooltips: $List<$ItemTooltipData>;
        static RECIPE_BUTTON_TEXTURE: $ResourceLocation;
        constructor();
    }
    export class $KubeJSErrorScreen$Entry extends $ObjectSelectionList$Entry<$KubeJSErrorScreen$Entry> {
        open(): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$KubeJSErrorScreen$Entry>;
        constructor(errorList: $KubeJSErrorScreen$ErrorList, minecraft: $Minecraft, index: number, line: $ConsoleLine, calendar: $Calendar);
    }
    export class $KubeJSClientEventHandler {
        static itemColors(event: $RegisterColorHandlersEvent$Item): void;
        static blockColors(event: $RegisterColorHandlersEvent$Block): void;
        static setScreen(screen: $Screen): $Screen;
        static registerClientExtensions(event: $RegisterClientExtensionsEvent): void;
        static tagsUpdated(event: $TagsUpdatedEvent): void;
        static setupClient(event: $FMLClientSetupEvent): void;
        static hudPostDraw(event: $RenderGuiEvent$Post): void;
        static screenPostDraw(event: $ScreenEvent$Render$Post): void;
        static testRequirements(mc: $Minecraft, event: $DynamicItemTooltipsKubeEvent, r: $TooltipRequirements_): boolean;
        static worldRender(event: $RenderLevelStageEvent): void;
        static openScreenEvent(event: $ScreenEvent$Opening): void;
        static addClientPacks(event: $AddPackFindersEvent): void;
        static guiPostInit(event: $ScreenEvent$Init$Post): void;
        static registerCoreShaders(event: $RegisterShadersEvent): void;
        static registerRenderers(event: $EntityRenderersEvent$RegisterRenderers): void;
        static debugInfo(event: $CustomizeGuiOverlayEvent$DebugText): void;
        static clientTick(event: $ClientTickEvent$Pre): void;
        static onItemTooltip(event: $ItemTooltipEvent): void;
        static registerParticleProviders(event: $RegisterParticleProvidersEvent): void;
        static onRegisterClientCommands(event: $RegisterClientCommandsEvent): void;
        static registerMenuScreens(event: $RegisterMenuScreensEvent): void;
        static registerKeyMappings(event: $RegisterKeyMappingsEvent): void;
        static loggingIn(event: $ClientPlayerNetworkEvent$LoggingIn): void;
        static loggingOut(event: $ClientPlayerNetworkEvent$LoggingOut): void;
        static COMPONENT_ERROR: $Pattern;
        constructor();
        static set screen(value: $Screen);
        static set upClient(value: $FMLClientSetupEvent);
    }
    export class $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider<T extends $ParticleOptions> extends $ParticleEngine$SpriteParticleRegistration<T> {
        create(type: T, clientLevel: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet, xSpeed: number, ySpeed: number, zSpeed: number): $Particle;
        create(sprites: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider}.
     */
    export type $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider_<T> = ((type: T, clientLevel: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet, xSpeed: number, ySpeed: number, zSpeed: number) => $Particle);
    export class $SoundsGenerator$SoundInstance {
        stream(): $SoundsGenerator$SoundInstance;
        stream(b: boolean): $SoundsGenerator$SoundInstance;
        toJson(): $JsonElement;
        weight(i: number): $SoundsGenerator$SoundInstance;
        attenuationDistance(i: number): $SoundsGenerator$SoundInstance;
        preload(): $SoundsGenerator$SoundInstance;
        preload(b: boolean): $SoundsGenerator$SoundInstance;
        pitch(f: number): $SoundsGenerator$SoundInstance;
        volume(f: number): $SoundsGenerator$SoundInstance;
        asReferenceToEvent(): $SoundsGenerator$SoundInstance;
        constructor(fileLocation: string);
    }
    export class $KubeSessionData {
        static of(mc: $Minecraft): $KubeSessionData;
        static of(listener: $ClientPacketListener): $KubeSessionData;
        sync(data: $KubeServerData_): void;
        activePostShader: $ResourceLocation;
        itemTooltips: $List<$ItemTooltipData>;
        recipeViewerData: $RecipeViewerData;
        constructor();
    }
    export class $ClientScriptManager extends $ScriptManager {
        scriptType: $ScriptType;
        canListenEvents: boolean;
        packs: $Map<string, $ScriptPack>;
        contextFactory: $KubeJSContextFactory;
        constructor();
    }
    export class $VariantBlockStateGenerator {
        variant(key: string, consumer: $Consumer_<$VariantBlockStateGenerator$Variant>): void;
        toJson(): $JsonObject;
        simpleVariant(key: string, model: $ResourceLocation_): void;
        constructor();
    }
    export class $ParticleGenerator {
        toJson(): $JsonObject;
        textures(textures: $List_<string>): $ParticleGenerator;
        texture(texture: string): $ParticleGenerator;
        constructor();
    }
    export class $EditorExt {
        static openFile(path: $Path_, line: number, column: number): void;
        static isKnownVSCode(): boolean;
        static VSCODE_OSS: string;
        static VSCODE: string;
        static VSCODIUM: string;
        constructor();
        static get knownVSCode(): boolean;
    }
    export class $MultipartBlockStateGenerator$Part {
        toJson(): $JsonObject;
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        constructor();
    }
    export class $ModelGenerator$Element {
        size(b: $AABB_): $ModelGenerator$Element;
        toJson(): $JsonObject;
        allFaces(face: $Consumer_<$ModelGenerator$Face>): void;
        faces(sides: $Direction_[], face: $Consumer_<$ModelGenerator$Face>): void;
        constructor();
    }
    export class $KubeJSKeybinds$TickingKeyEvent extends $KubeJSKeybinds$KeyEvent {
        getTicks(): number;
        constructor(player: $LocalPlayer, key: $KubeJSKeybinds$KubeKey);
        get ticks(): number;
    }
    export class $KubeJSKeybinds$KeyEvent extends $ClientPlayerKubeEvent {
        constructor(player: $LocalPlayer, key: $KubeJSKeybinds$KubeKey);
    }
    export class $KubeJSErrorScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        lastScreen: $Screen;
        title: $Component;
        viewing: $List<$ConsoleLine>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        canClose: boolean;
        warnings: $List<$ConsoleLine>;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        scriptType: $ScriptType;
        logFile: $Path;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        errors: $List<$ConsoleLine>;
        font: $Font;
        constructor(lastScreen: $Screen, scriptType: $ScriptType_, logFile: $Path_, errors: $List_<$ConsoleLine>, warnings: $List_<$ConsoleLine>, canClose: boolean);
        constructor(lastScreen: $Screen, console: $ConsoleJS, canClose: boolean);
    }
    export class $ClientProperties extends $BaseProperties {
        static get(): $ClientProperties;
        static reload(): void;
        exportAtlases: boolean;
        blurScaledPackIcon: boolean;
        customStackSizeText: boolean;
        shrinkStackSizeText: boolean;
        windowTitle: string;
        disableRecipeBook: boolean;
    }
}
