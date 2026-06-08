import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $FrameSize_, $FrameSize } from "@package/net/minecraft/client/resources/metadata/animation";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceManager, $ResourceMetadata, $ResourceMetadata_ } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $SpriteSource, $SpriteSource$Output, $SpriteSourceType } from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/neoforged/neoforge/client/textures" {
    export class $UnitTextureAtlasSprite extends $TextureAtlasSprite {
        static LOCATION: $ResourceLocation;
        x: number;
        static INSTANCE: $UnitTextureAtlasSprite;
        y: number;
    }
    export class $NamespacedDirectoryLister extends $Record implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        sourcePath(): string;
        namespace(): string;
        idPrefix(): string;
        static ID: $ResourceLocation;
        static TYPE: $SpriteSourceType;
        constructor(namespace: string, sourcePath: string, idPrefix: string);
    }
    export class $SpriteContentsConstructor {
    }
    export interface $SpriteContentsConstructor {
        create(arg0: $ResourceLocation_, arg1: $FrameSize_, arg2: $NativeImage, arg3: $ResourceMetadata_): $SpriteContents;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsConstructor}.
     */
    export type $SpriteContentsConstructor_ = ((arg0: $ResourceLocation, arg1: $FrameSize, arg2: $NativeImage, arg3: $ResourceMetadata) => $SpriteContents);
    export class $FluidSpriteCache {
        static reload(): void;
        static getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        static getFluidSprites(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): $TextureAtlasSprite[];
    }
}
