import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $User } from "@package/net/minecraft/client";
import { $ResourceManager, $SimplePreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $UUID, $List, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $PaintingVariant_ } from "@package/net/minecraft/world/entity/decoration";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Supplier } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MapDecoration_ } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Property_, $Property } from "@package/com/mojang/authlib/properties";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $SplashRenderer } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Splitter } from "@package/com/google/common/base";
import { $TextureAtlasExtension } from "@package/foundry/veil/ext";
import { $BuiltInPackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecraftProfileTextures_, $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as model from "@package/net/minecraft/client/resources/model";
export * as metadata from "@package/net/minecraft/client/resources/metadata";
export * as sounds from "@package/net/minecraft/client/resources/sounds";
export * as server from "@package/net/minecraft/client/resources/server";
export * as language from "@package/net/minecraft/client/resources/language";

declare module "@package/net/minecraft/client/resources" {
    export class $PlayerSkin$Model extends $Enum<$PlayerSkin$Model> {
        static values(): $PlayerSkin$Model[];
        static valueOf(arg0: string): $PlayerSkin$Model;
        id(): string;
        static byName(arg0: string): $PlayerSkin$Model;
        static SLIM: $PlayerSkin$Model;
        static WIDE: $PlayerSkin$Model;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin$Model}.
     */
    export type $PlayerSkin$Model_ = "slim" | "wide";
    export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> {
        apply(arg0: $List_<string>, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        getSplash(): $SplashRenderer;
        static SPLASHES_LOCATION: $ResourceLocation;
        constructor(arg0: $User);
        get splash(): $SplashRenderer;
    }
    export class $GrassColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        apply(arg0: number[], arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        prepare(arg0: $ResourceManager, arg1: $ProfilerFiller): number[];
        constructor();
    }
    export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable, $TextureAtlasExtension {
        close(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        getName(): string;
        textureAtlas: $TextureAtlas;
        constructor(arg0: $TextureManager, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
        constructor(arg0: $TextureManager, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $Set_<$MetadataSectionSerializer<never>>);
        get name(): string;
    }
    export class $IndexedAssetSource {
        static createIndexFs(arg0: $Path_, arg1: string): $Path;
        static PATH_SPLITTER: $Splitter;
        constructor();
    }
    export class $SkinManager$TextureCache {
    }
    export class $MobEffectTextureManager extends $TextureAtlasHolder {
        get(arg0: $Holder_<$MobEffect>): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(arg0: $TextureManager);
    }
    export class $PaintingTextureManager extends $TextureAtlasHolder {
        get(arg0: $PaintingVariant_): $TextureAtlasSprite;
        getBackSprite(): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(arg0: $TextureManager);
        get backSprite(): $TextureAtlasSprite;
    }
    export class $FoliageColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        apply(arg0: number[], arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        prepare(arg0: $ResourceManager, arg1: $ProfilerFiller): number[];
        constructor();
    }
    export class $LegacyStuffWrapper {
        /**
         * @deprecated
         */
        static getPixels(arg0: $ResourceManager, arg1: $ResourceLocation_): number[];
        constructor();
    }
    export class $MapDecorationTextureManager extends $TextureAtlasHolder {
        get(arg0: $MapDecoration_): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(arg0: $TextureManager);
    }
    export class $SkinManager$CacheKey extends $Record {
        profileId(): $UUID;
        packedTextures(): $Property;
        constructor(arg0: $UUID_, arg1: $Property_);
    }
    export class $DefaultPlayerSkin {
        static get(arg0: $GameProfile): $PlayerSkin;
        static get(arg0: $UUID_): $PlayerSkin;
        static getDefaultTexture(): $ResourceLocation;
        constructor();
        static get defaultTexture(): $ResourceLocation;
    }
    export class $PlayerSkin extends $Record {
        texture(): $ResourceLocation;
        model(): $PlayerSkin$Model;
        secure(): boolean;
        textureUrl(): string;
        elytraTexture(): $ResourceLocation;
        capeTexture(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $PlayerSkin$Model_, arg5: boolean);
    }
    export class $SkinManager {
        registerTextures(arg0: $UUID_, arg1: $MinecraftProfileTextures_): $CompletableFuture<$PlayerSkin>;
        getOrLoad(arg0: $GameProfile): $CompletableFuture<$PlayerSkin>;
        getInsecureSkin(arg0: $GameProfile): $PlayerSkin;
        lookupInsecure(arg0: $GameProfile): $Supplier<$PlayerSkin>;
        static LOGGER: $Logger;
        constructor(arg0: $TextureManager, arg1: $Path_, arg2: $MinecraftSessionService, arg3: $Executor_);
    }
    export class $ClientPackSource extends $BuiltInPackSource {
        static createVanillaPackSource(arg0: $Path_): $VanillaPackResources;
        static HIGH_CONTRAST_PACK: string;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(arg0: $Path_, arg1: $DirectoryValidator);
    }
}
