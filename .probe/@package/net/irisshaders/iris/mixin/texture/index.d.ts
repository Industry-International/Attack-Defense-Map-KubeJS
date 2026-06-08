import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $SpriteContents$FrameInfo, $SpriteContents$AnimatedTexture } from "@package/net/minecraft/client/renderer/texture";
import { $Map, $List } from "@package/java/util";

declare module "@package/net/irisshaders/iris/mixin/texture" {
    export class $SimpleTextureAccessor {
    }
    export interface $SimpleTextureAccessor {
        getLocation(): $ResourceLocation;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $SimpleTextureAccessor}.
     */
    export type $SimpleTextureAccessor_ = (() => $ResourceLocation_);
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        get animatedTexture(): $SpriteContents$AnimatedTexture;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAccessor}.
     */
    export type $SpriteContentsAccessor_ = (() => $SpriteContents$AnimatedTexture);
    export class $SpriteContentsAnimatedTextureAccessor {
    }
    export interface $SpriteContentsAnimatedTextureAccessor {
        getFrames(): $List<$SpriteContents$FrameInfo>;
        invokeUploadFrame(arg0: number, arg1: number, arg2: number): void;
        get frames(): $List<$SpriteContents$FrameInfo>;
    }
    export class $SpriteContentsFrameInfoAccessor {
    }
    export interface $SpriteContentsFrameInfoAccessor {
        getIndex(): number;
        getTime(): number;
        get index(): number;
        get time(): number;
    }
    export class $AnimationMetadataSectionAccessor {
    }
    export interface $AnimationMetadataSectionAccessor {
        getFrameWidth(): number;
        setFrameWidth(arg0: number): void;
        setFrameHeight(arg0: number): void;
        getFrameHeight(): number;
    }
    export class $TextureAtlasAccessor {
    }
    export interface $TextureAtlasAccessor {
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        callGetWidth(): number;
        getMipLevel(): number;
        callGetHeight(): number;
        get texturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get mipLevel(): number;
    }
    export class $SpriteContentsTickerAccessor {
    }
    export interface $SpriteContentsTickerAccessor {
        setFrame(arg0: number): void;
        getFrame(): number;
        getSubFrame(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        setSubFrame(arg0: number): void;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
}
