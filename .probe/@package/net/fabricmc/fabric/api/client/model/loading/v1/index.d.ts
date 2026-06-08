import { $Function } from "@package/java/util/function";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelResourceLocation, $ModelBakery, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Collection_ } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";

declare module "@package/net/fabricmc/fabric/api/client/model/loading/v1" {
    export class $ModelModifier$BeforeBake$Context {
    }
    export interface $ModelModifier$BeforeBake$Context {
        loader(): $ModelBakery;
        settings(): $ModelState;
        baker(): $ModelBaker;
        textureGetter(): $Function<$Material, $TextureAtlasSprite>;
        resourceId(): $ResourceLocation;
        topLevelId(): $ModelResourceLocation;
    }
    export class $ModelModifier$OnLoad$Context {
    }
    export interface $ModelModifier$OnLoad$Context {
        loader(): $ModelBakery;
        getOrLoadModel(arg0: $ResourceLocation_): $UnbakedModel;
        resourceId(): $ResourceLocation;
        topLevelId(): $ModelResourceLocation;
    }
    export class $ModelLoadingPlugin {
        static register(arg0: $ModelLoadingPlugin_): void;
    }
    export interface $ModelLoadingPlugin {
        onInitializeModelLoader(arg0: $ModelLoadingPlugin$Context): void;
    }
    /**
     * Values that may be interpreted as {@link $ModelLoadingPlugin}.
     */
    export type $ModelLoadingPlugin_ = ((arg0: $ModelLoadingPlugin$Context) => void);
    export class $ModelModifier$AfterBake {
    }
    export interface $ModelModifier$AfterBake {
        modifyModelAfterBake(arg0: $BakedModel, arg1: $ModelModifier$AfterBake$Context): $BakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelModifier$AfterBake}.
     */
    export type $ModelModifier$AfterBake_ = ((arg0: $BakedModel, arg1: $ModelModifier$AfterBake$Context) => $BakedModel);
    export class $ModelModifier$AfterBake$Context {
    }
    export interface $ModelModifier$AfterBake$Context {
        loader(): $ModelBakery;
        settings(): $ModelState;
        baker(): $ModelBaker;
        textureGetter(): $Function<$Material, $TextureAtlasSprite>;
        sourceModel(): $UnbakedModel;
        resourceId(): $ResourceLocation;
        topLevelId(): $ModelResourceLocation;
    }
    export class $ModelResolver {
    }
    export interface $ModelResolver {
        resolveModel(arg0: $ModelResolver$Context): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelResolver}.
     */
    export type $ModelResolver_ = ((arg0: $ModelResolver$Context) => $UnbakedModel);
    export class $ModelResolver$Context {
    }
    export interface $ModelResolver$Context {
        loader(): $ModelBakery;
        id(): $ResourceLocation;
        getOrLoadModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    export class $ModelModifier$OnLoad {
    }
    export interface $ModelModifier$OnLoad {
        modifyModelOnLoad(arg0: $UnbakedModel, arg1: $ModelModifier$OnLoad$Context): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelModifier$OnLoad}.
     */
    export type $ModelModifier$OnLoad_ = ((arg0: $UnbakedModel, arg1: $ModelModifier$OnLoad$Context) => $UnbakedModel);
    export class $BlockStateResolver$Context {
    }
    export interface $BlockStateResolver$Context {
        loader(): $ModelBakery;
        block(): $Block;
        getOrLoadModel(arg0: $ResourceLocation_): $UnbakedModel;
        setModel(arg0: $BlockState_, arg1: $UnbakedModel): void;
    }
    export class $BlockStateResolver {
    }
    export interface $BlockStateResolver {
        resolveBlockStates(arg0: $BlockStateResolver$Context): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockStateResolver}.
     */
    export type $BlockStateResolver_ = ((arg0: $BlockStateResolver$Context) => void);
    export class $ModelLoadingPlugin$Context {
    }
    export interface $ModelLoadingPlugin$Context {
        addModels(...arg0: $ResourceLocation_[]): void;
        addModels(arg0: $Collection_<$ResourceLocation_>): void;
        modifyModelAfterBake(): $Event<$ModelModifier$AfterBake>;
        modifyModelBeforeBake(): $Event<$ModelModifier$BeforeBake>;
        resolveModel(): $Event<$ModelResolver>;
        modifyModelOnLoad(): $Event<$ModelModifier$OnLoad>;
        registerBlockStateResolver(arg0: $Block_, arg1: $BlockStateResolver_): void;
    }
    export class $FabricBakedModelManager {
    }
    export interface $FabricBakedModelManager {
        getModel(arg0: $ResourceLocation_): $BakedModel;
    }
    export class $ModelModifier$BeforeBake {
    }
    export interface $ModelModifier$BeforeBake {
        modifyModelBeforeBake(arg0: $UnbakedModel, arg1: $ModelModifier$BeforeBake$Context): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelModifier$BeforeBake}.
     */
    export type $ModelModifier$BeforeBake_ = ((arg0: $UnbakedModel, arg1: $ModelModifier$BeforeBake$Context) => $UnbakedModel);
}
