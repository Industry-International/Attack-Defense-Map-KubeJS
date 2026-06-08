import { $Function_, $Consumer_, $Function } from "@package/java/util/function";
import { $ModelLoadingPlugin_ } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $BlockState_, $StateDefinition, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBakery, $ModelResourceLocation_, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $List_ } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/impl/client/model/loading" {
    export class $ModelLoadingEventDispatcher {
        loadBlockStateModels(arg0: $ResourceLocation_, arg1: $StateDefinition<$Block_, $BlockState_>): boolean;
        modifyModelAfterBake(arg0: $BakedModel, arg1: $ResourceLocation_, arg2: $ModelResourceLocation_, arg3: $UnbakedModel, arg4: $Function_<$Material, $TextureAtlasSprite>, arg5: $ModelState, arg6: $ModelBaker): $BakedModel;
        modifyModelBeforeBake(arg0: $UnbakedModel, arg1: $ResourceLocation_, arg2: $ModelResourceLocation_, arg3: $Function_<$Material, $TextureAtlasSprite>, arg4: $ModelState, arg5: $ModelBaker): $UnbakedModel;
        modifyModelOnLoad(arg0: $UnbakedModel, arg1: $ResourceLocation_, arg2: $ModelResourceLocation_): $UnbakedModel;
        addExtraModels(arg0: $Consumer_<$ResourceLocation>): void;
        resolveModel(arg0: $ResourceLocation_): $UnbakedModel;
        constructor(arg0: $ModelBakery, arg1: $List_<$ModelLoadingPlugin_>);
    }
    export class $BlockStatesLoaderHooks {
    }
    export interface $BlockStatesLoaderHooks {
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatesLoaderHooks}.
     */
    export type $BlockStatesLoaderHooks_ = ((arg0: $BlockStatesLoaderHooks$LoadingOverride) => void);
    export class $BlockStatesLoaderHooks$LoadingOverride {
    }
    export interface $BlockStatesLoaderHooks$LoadingOverride {
        loadBlockStates(arg0: $ResourceLocation_, arg1: $StateDefinition<$Block_, $BlockState_>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatesLoaderHooks$LoadingOverride}.
     */
    export type $BlockStatesLoaderHooks$LoadingOverride_ = ((arg0: $ResourceLocation, arg1: $StateDefinition<$Block, $BlockState>) => boolean);
    export class $ModelLoaderHooks {
    }
    export interface $ModelLoaderHooks {
        fabric_add(arg0: $ModelResourceLocation_, arg1: $UnbakedModel): void;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        fabric_getOrLoadModel(arg0: $ResourceLocation_): $UnbakedModel;
        fabric_getMissingModel(): $UnbakedModel;
    }
    export class $BakerImplHooks {
    }
    export interface $BakerImplHooks {
        fabric_getTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    /**
     * Values that may be interpreted as {@link $BakerImplHooks}.
     */
    export type $BakerImplHooks_ = (() => $Function_<$Material, $TextureAtlasSprite>);
}
