import { $EntityModel } from "@package/net/minecraft/client/model";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BiMap } from "@package/com/google/common/collect";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Set } from "@package/java/util";
import { $SpriteSourceType } from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/fabricmc/fabric/mixin/client/rendering" {
    export class $AtlasSourceManagerAccessor {
        static getSourceTypeById(): $BiMap<$ResourceLocation, $SpriteSourceType>;
        static get sourceTypeById(): $BiMap<$ResourceLocation, $SpriteSourceType>;
    }
    export interface $AtlasSourceManagerAccessor {
    }
    export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
        callAddFeature(arg0: $RenderLayer<T, M>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_<T, M> = ((arg0: $RenderLayer<T, M>) => boolean);
    export class $EntityModelLayersAccessor {
        static getLayers(): $Set<$ModelLayerLocation>;
        static get layers(): $Set<$ModelLayerLocation>;
    }
    export interface $EntityModelLayersAccessor {
    }
    export class $DimensionEffectsAccessor {
        static getIdentifierMap(): $Object2ObjectMap<$ResourceLocation, $DimensionSpecialEffects>;
        static get identifierMap(): $Object2ObjectMap<$ResourceLocation, $DimensionSpecialEffects>;
    }
    export interface $DimensionEffectsAccessor {
    }
}
