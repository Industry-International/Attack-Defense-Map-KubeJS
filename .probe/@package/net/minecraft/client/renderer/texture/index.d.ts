import { $AnimatedTextureDuck, $IPotentiallyInvisibleSpriteContents } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor as $SpriteContentsTickerAccessor$1, $SpriteContentsAccessor as $SpriteContentsAccessor$1, $TextureAtlasAccessor as $TextureAtlasAccessor$1, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$2 } from "@package/net/irisshaders/iris/mixin/texture";
import { $SpriteContentsExtension as $SpriteContentsExtension$4, $TextureAtlasSpriteExtension } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $TextureMetadataSection } from "@package/net/minecraft/client/resources/metadata/texture";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SpriteContentsExt } from "@package/com/moulberry/axiom/hooks";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ITextureSize } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $PBRAtlasHolder, $PBRSpriteHolder, $SpriteContentsExtension, $TextureAtlasExtension as $TextureAtlasExtension$1 } from "@package/net/irisshaders/iris/pbr/texture";
import { $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor as $SpriteContentsAnimatedTextureAccessor$1, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $RuntimeException, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $TextureLocationSettable } from "@package/dzwdz/chat_heads/mixininterface";
import { $File_, $IOException, $Closeable } from "@package/java/io";
import { $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/irisshaders/iris/pbr";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Darkness$DynamicTextureHook } from "@package/me/srrapero720/chloride/impl";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $TickerExtension, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(arg0: $Stitcher$Entry, arg1: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getWidth(): number;
        stitch(): void;
        getHeight(): number;
        registerSprite(arg0: T): void;
        gatherSprites(arg0: $Stitcher$SpriteLoader_<T>): void;
        static smallestFittingMinTexel(arg0: number, arg1: number): number;
        constructor(arg0: number, arg1: number, arg2: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(arg0: number, arg1: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        reset(arg0: $TextureManager, arg1: $ResourceManager, arg2: $ResourceLocation_, arg3: $Executor_): void;
        load(arg0: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(arg0: boolean, arg1: boolean): void;
        handler$bkm000$veil$bind(arg0: $CallbackInfo): void;
        restoreLastBlurMipmap(): void;
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        handler$bkm000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        releaseId(): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor();
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(arg0: boolean): number;
        close(): void;
        static u(arg0: number): number;
        static pack(arg0: number, arg1: boolean): number;
        static pack(arg0: number, arg1: number): number;
        teardownOverlayColor(): void;
        setupOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $TextureLocationSettable {
        handler$boo000$chat_heads$chatheads$registerBlendedHeadTexture(image: $NativeImage, ci: $CallbackInfo): void;
        chatheads$setTextureLocation(textureLocation: $ResourceLocation_): void;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(arg0: $File_, arg1: string, arg2: $ResourceLocation_, arg3: boolean, arg4: $Runnable_);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        handler$ddk000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
        uploadInterpolatedFrame(arg0: number, arg1: number, arg2: $SpriteContents$Ticker): void;
        this$0: $SpriteContents;
        constructor(arg0: $SpriteContents);
    }
    export class $SpriteLoader$Preparations extends $Record {
        width(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        height(): number;
        missing(): $TextureAtlasSprite;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(arg0: T, arg1: number);
        constructor(entry: T, width: number, height: number);
    }
    export class $SpriteLoader {
        static create(arg0: $TextureAtlas): $SpriteLoader;
        stitch(arg0: $List_<$SpriteContents>, arg1: number, arg2: $Executor_): $SpriteLoader$Preparations;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_, arg4: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        static runSpriteSuppliers(arg0: $SpriteResourceLoader_, arg1: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, arg2: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(arg0: T, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$2, $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
        constructor(arg0: number, arg1: number);
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor$1, $SpriteContentsTickerAccessor, $TickerExtension {
        close(): void;
        handler$ddj000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        tickAndUpload(arg0: number, arg1: number): void;
        simulated$setPlaying(arg0: boolean): void;
        simulated$isPlaying(): boolean;
        getFrameIndex(): number;
        setFrame(arg0: number): void;
        getFrame(): number;
        getFrameTicks(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getSubFrame(): number;
        subFrame: number;
        animationInfo: $SpriteContents$AnimatedTexture;
        frame: number;
        constructor(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData);
        get frameIndex(): number;
        get frameTicks(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$3, $SpriteContentsAccessor$1, $SpriteContentsExtension, $SpriteContentsInvoker, $SpriteContentsExtension$1, $SpriteContentsAccessor, $SpriteContentsExtension$4, $SpriteContentsExtension$2, $IPotentiallyInvisibleSpriteContents, $SpriteContentsExt {
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        metadata(): $ResourceMetadata;
        height(): number;
        sodium$hasTranslucentPixels(): boolean;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        getFrameCount(): number;
        sodium$hasTransparentPixels(): boolean;
        getUniqueFrames(): $IntStream;
        uploadFirstFrame(arg0: number, arg1: number): void;
        getPBRHolder(): $PBRSpriteHolder;
        axiom$setOpacity(opacity: number, x: number, y: number): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
        createTicker(): $SpriteTicker;
        railways$shouldDoInvisibility(): boolean;
        isTransparent(arg0: number, arg1: number, arg2: number): boolean;
        getOriginalImage(): $NativeImage;
        sodium$setActive(arg0: boolean): void;
        sodium$isActive(): boolean;
        getCreatedTicker(): $SpriteContents$Ticker;
        railways$isVisible(): boolean;
        increaseMipLevel(arg0: number): void;
        simulated$getTicker(): $SpriteContents$Ticker;
        sodium$hasAnimation(): boolean;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        railways$uploadFrame(arg0: boolean): void;
        getImages(): $NativeImage[];
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(arg0: $ResourceLocation_, arg1: $FrameSize_, arg2: $NativeImage, arg3: $ResourceMetadata_);
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get frameCount(): number;
        get uniqueFrames(): $IntStream;
        get PBRHolder(): $PBRSpriteHolder;
        get createdTicker(): $SpriteContents$Ticker;
        get images(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $Darkness$DynamicTextureHook {
        chloride$enableDarkness(): void;
        wrapOperation$goi000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_<any>): void;
        wrapOperation$goi000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        getPixels(): $NativeImage;
        setPixels(arg0: $NativeImage): void;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        upload(): void;
        static NOT_ASSIGNED: number;
        pixels: $NativeImage;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(arg0: $NativeImage);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor$1, $AnimatedTextureDuck {
        getUniqueFrames(): $IntStream;
        uploadFirstFrame(arg0: number, arg1: number): void;
        createTicker(): $SpriteTicker;
        railways$uploadWithVisibility(): void;
        getFrameY(arg0: number): number;
        getFrameX(arg0: number): number;
        uploadFrame(arg0: number, arg1: number, arg2: number): void;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        invokeUploadFrame(arg0: number, arg1: number, arg2: number): void;
        frames: $List<$SpriteContents$FrameInfo>;
        this$0: $SpriteContents;
        get uniqueFrames(): $IntStream;
        get frameRowSize(): number;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor$1, $TextureAtlasExtension$1, $ResourceTextureAtlasAccessor, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess {
        location(): $ResourceLocation;
        tick(): void;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        fabric_spriteFinder(): $SpriteFinderImpl;
        maxSupportedTextureSize(): number;
        cycleAnimationFrames(): void;
        handler$jih001$axiom$cycleAnimationFrames(ci: $CallbackInfo): void;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        updateFilter(arg0: $SpriteLoader$Preparations_): void;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        getPBRHolder(): $PBRAtlasHolder;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        clearTextureData(): void;
        upload(arg0: $SpriteLoader$Preparations_): void;
        getWidth(): number;
        getHeight(): number;
        callGetWidth(): number;
        callGetHeight(): number;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getMipLevel(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        blur: boolean;
        id: number;
        constructor(arg0: $ResourceLocation_);
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get PBRHolder(): $PBRAtlasHolder;
        get width(): number;
        get height(): number;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        add(arg0: $Stitcher$Holder_<T>): boolean;
        walk(arg0: $Stitcher$SpriteLoader_<T>): void;
        getY(): number;
        getX(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor, $ITextureSize {
        getTextureImage(arg0: $ResourceManager): $SimpleTexture$TextureImage;
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
        getWidth(): number;
        getHeight(): number;
        getLocation(): $ResourceLocation;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(arg0: $ResourceLocation_);
        get width(): number;
        get height(): number;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $TextureManagerExtension, $IdentifiableResourceReloadListener {
        register(arg0: string, arg1: $DynamicTexture): $ResourceLocation;
        register(arg0: $ResourceLocation_, arg1: $AbstractTexture): void;
        close(): void;
        release(arg0: $ResourceLocation_): void;
        tick(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        bindForSetup(arg0: $ResourceLocation_): void;
        getTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture): $AbstractTexture;
        getTexture(arg0: $ResourceLocation_): $AbstractTexture;
        getFabricDependencies(): $Collection<any>;
        handler$bkc000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        getFabricId(): $ResourceLocation;
        preload(arg0: $ResourceLocation_, arg1: $Executor_): $CompletableFuture<void>;
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        dumpAllSheets(arg0: $Path_): void;
        modify$blj000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(arg0: $ResourceManager);
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension {
        wrap(arg0: $VertexConsumer): $VertexConsumer;
        contents(): $SpriteContents;
        getY(): number;
        getX(): number;
        uvShrinkRatio(): number;
        atlasLocation(): $ResourceLocation;
        getU1(): number;
        getV0(): number;
        getV1(): number;
        getU0(): number;
        getV(arg0: number): number;
        getU(arg0: number): number;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        uploadFirstFrame(): void;
        createTicker(): $TextureAtlasSprite$Ticker;
        sodium$hasUnknownImageContents(): boolean;
        getUOffset(arg0: number): number;
        getVOffset(arg0: number): number;
        x: number;
        y: number;
        constructor(arg0: $ResourceLocation_, arg1: $SpriteContents, arg2: number, arg3: number, arg4: number, arg5: number);
        get u1(): number;
        get v0(): number;
        get v1(): number;
        get u0(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
        static load(arg0: $ResourceManager, arg1: $ResourceLocation_): $SimpleTexture$TextureImage;
        close(): void;
        getTextureMetadata(): $TextureMetadataSection;
        throwIfError(): void;
        getImage(): $NativeImage;
        constructor(arg0: $IOException);
        constructor(arg0: $TextureMetadataSection, arg1: $NativeImage);
        get textureMetadata(): $TextureMetadataSection;
        get image(): $NativeImage;
    }
    export class $MipmapGenerator {
        static generateMipLevels(arg0: $NativeImage[], arg1: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
