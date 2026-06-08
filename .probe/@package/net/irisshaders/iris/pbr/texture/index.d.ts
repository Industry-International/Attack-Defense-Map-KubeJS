import { $AtlasPBRLoader$PBRTextureAtlasSprite } from "@package/net/irisshaders/iris/pbr/loader";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContents$Ticker, $Dumpable, $TextureAtlasSprite, $AbstractTexture, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/pbr/texture" {
    export class $PBRAtlasHolder {
        setSpecularAtlas(arg0: $PBRAtlasTexture): void;
        getSpecularAtlas(): $PBRAtlasTexture;
        getNormalAtlas(): $PBRAtlasTexture;
        setNormalAtlas(arg0: $PBRAtlasTexture): void;
        cycleAnimationFrames(): void;
        constructor();
    }
    export class $PBRSpriteHolder {
        close(): void;
        getNormalSprite(): $TextureAtlasSprite;
        getSpecularSprite(): $TextureAtlasSprite;
        setNormalSprite(arg0: $TextureAtlasSprite): void;
        setSpecularSprite(arg0: $TextureAtlasSprite): void;
        constructor();
    }
    export class $PBRAtlasTexture extends $AbstractTexture implements $PBRDumpable {
        clear(): void;
        getType(): $PBRType;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        upload(arg0: number, arg1: number, arg2: number): void;
        getSprite(arg0: $ResourceLocation_): $AtlasPBRLoader$PBRTextureAtlasSprite;
        getDefaultDumpLocation(): $ResourceLocation;
        cycleAnimationFrames(): void;
        tryUpload(arg0: number, arg1: number, arg2: number): boolean;
        addSprite(arg0: $AtlasPBRLoader$PBRTextureAtlasSprite): void;
        static syncAnimation(arg0: $SpriteContents$Ticker, arg1: $SpriteContents$Ticker): void;
        getAtlasId(): $ResourceLocation;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(arg0: $TextureAtlas, arg1: $PBRType_);
        get type(): $PBRType;
        get defaultDumpLocation(): $ResourceLocation;
        get atlasId(): $ResourceLocation;
    }
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        getPBRHolder(): $PBRSpriteHolder;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        get PBRHolder(): $PBRSpriteHolder;
        get orCreatePBRHolder(): $PBRSpriteHolder;
    }
    export class $TextureAtlasExtension {
    }
    export interface $TextureAtlasExtension {
        getPBRHolder(): $PBRAtlasHolder;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        get PBRHolder(): $PBRAtlasHolder;
        get orCreatePBRHolder(): $PBRAtlasHolder;
    }
    export class $PBRType extends $Enum<$PBRType> {
        static values(): $PBRType[];
        static valueOf(arg0: string): $PBRType;
        getDefaultValue(): number;
        appendSuffix(arg0: string): string;
        getSuffix(): string;
        static removeSuffix(arg0: string): string;
        static fromFileLocation(arg0: string): $PBRType;
        static SPECULAR: $PBRType;
        static NORMAL: $PBRType;
        get defaultValue(): number;
        get suffix(): string;
    }
    /**
     * Values that may be interpreted as {@link $PBRType}.
     */
    export type $PBRType_ = "normal" | "specular";
    export class $PBRDumpable {
    }
    export interface $PBRDumpable extends $Dumpable {
        getDefaultDumpLocation(): $ResourceLocation;
        get defaultDumpLocation(): $ResourceLocation;
    }
}
