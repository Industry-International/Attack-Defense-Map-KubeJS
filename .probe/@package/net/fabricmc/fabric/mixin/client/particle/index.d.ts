import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/mixin/client/particle" {
    export class $ParticleManagerAccessor$SimpleSpriteProviderAccessor {
    }
    export interface $ParticleManagerAccessor$SimpleSpriteProviderAccessor {
        getSprites(): $List<$TextureAtlasSprite>;
        get sprites(): $List<$TextureAtlasSprite>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleManagerAccessor$SimpleSpriteProviderAccessor}.
     */
    export type $ParticleManagerAccessor$SimpleSpriteProviderAccessor_ = (() => $List_<$TextureAtlasSprite>);
    export class $ParticleManagerAccessor {
    }
    export interface $ParticleManagerAccessor {
        getParticleAtlasTexture(): $TextureAtlas;
        get particleAtlasTexture(): $TextureAtlas;
    }
    /**
     * Values that may be interpreted as {@link $ParticleManagerAccessor}.
     */
    export type $ParticleManagerAccessor_ = (() => $TextureAtlas);
}
