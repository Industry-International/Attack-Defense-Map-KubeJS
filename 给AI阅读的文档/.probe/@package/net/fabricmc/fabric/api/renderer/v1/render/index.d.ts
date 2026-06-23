import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Consumer } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $TriState_, $TriState } from "@package/net/fabricmc/fabric/api/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $QuadEmitter, $MutableQuadView, $Mesh } from "@package/net/fabricmc/fabric/api/renderer/v1/mesh";

declare module "@package/net/fabricmc/fabric/api/renderer/v1/render" {
    export class $RenderContext$QuadTransform {
    }
    export interface $RenderContext$QuadTransform {
        transform(arg0: $MutableQuadView): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderContext$QuadTransform}.
     */
    export type $RenderContext$QuadTransform_ = ((arg0: $MutableQuadView) => boolean);
    export class $RenderContext {
    }
    export interface $RenderContext {
        hasTransform(): boolean;
        getModelData(): $ModelData;
        getRenderType(): $RenderType;
        getEmitter(): $QuadEmitter;
        usesAmbientOcclusion(): $TriState;
        itemTransformationMode(): $ItemDisplayContext;
        setUsesAmbientOcclusion(arg0: $TriState_): void;
        pushTransform(arg0: $RenderContext$QuadTransform_): void;
        /**
         * @deprecated
         */
        meshConsumer(): $Consumer<$Mesh>;
        pushModelData(arg0: $ModelData): void;
        popTransform(): void;
        popModelData(): void;
        /**
         * @deprecated
         */
        fallbackConsumer(): $Consumer<$BakedModel>;
        isFaceCulled(arg0: $Direction_): boolean;
        /**
         * @deprecated
         */
        bakedModelConsumer(): $RenderContext$BakedModelConsumer;
        get modelData(): $ModelData;
        get renderType(): $RenderType;
        get emitter(): $QuadEmitter;
    }
    /**
     * @deprecated
     */
    export class $RenderContext$BakedModelConsumer {
    }
    export interface $RenderContext$BakedModelConsumer extends $Consumer<$BakedModel> {
        accept(arg0: $BakedModel): void;
        accept(arg0: $BakedModel, arg1: $BlockState_): void;
    }
}
