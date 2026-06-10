import { $MultiBufferSource_, $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $BakedModel, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $List_ } from "@package/java/util";
import { $RandomSource, $Unit } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $Vector4f, $Matrix4f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/model/renderable" {
    export class $CompositeRenderable implements $IRenderable<$CompositeRenderable$Transforms> {
        static builder(): $CompositeRenderable$Builder;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $ITextureRenderTypeLookup_, arg3: number, arg4: number, arg5: number, arg6: $CompositeRenderable$Transforms): void;
        withContext(arg0: $CompositeRenderable$Transforms): $IRenderable<$Unit>;
    }
    export class $CompositeRenderable$PartBuilder<T> {
        end(): T;
        child(arg0: string): $CompositeRenderable$PartBuilder<$CompositeRenderable$PartBuilder<T>>;
        addMesh(arg0: $ResourceLocation_, arg1: $List_<$BakedQuad>): $CompositeRenderable$PartBuilder<T>;
    }
    export class $BakedModelRenderable$Context extends $Record {
        data(): $ModelData;
        state(): $BlockState;
        seed(): number;
        faces(): $Direction[];
        randomSource(): $RandomSource;
        tint(): $Vector4f;
        constructor(arg0: $ModelData);
        constructor(state: $BlockState_, faces: $Direction_[], randomSource: $RandomSource, seed: number, data: $ModelData, tint: $Vector4f);
    }
    export class $CompositeRenderable$Mesh {
    }
    export class $IRenderable<T> {
    }
    export interface $IRenderable<T> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $ITextureRenderTypeLookup_, arg3: number, arg4: number, arg5: number, arg6: T): void;
        withContext(arg0: T): $IRenderable<$Unit>;
    }
    /**
     * Values that may be interpreted as {@link $IRenderable}.
     */
    export type $IRenderable_<T> = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: $ITextureRenderTypeLookup, arg3: number, arg4: number, arg5: number, arg6: T) => void);
    export class $CompositeRenderable$Builder {
        get(): $CompositeRenderable;
        child(arg0: string): $CompositeRenderable$PartBuilder<$CompositeRenderable$Builder>;
    }
    export class $CompositeRenderable$Transforms {
        static of(arg0: $ImmutableMap<string, $Matrix4f>): $CompositeRenderable$Transforms;
        getTransform(arg0: string): $Matrix4f;
        static EMPTY: $CompositeRenderable$Transforms;
    }
    export class $BakedModelRenderable implements $IRenderable<$BakedModelRenderable$Context> {
        static of(arg0: $ModelResourceLocation_): $BakedModelRenderable;
        static of(arg0: $BakedModel): $BakedModelRenderable;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $ITextureRenderTypeLookup_, arg3: number, arg4: number, arg5: number, arg6: $BakedModelRenderable$Context_): void;
        withModelDataContext(): $IRenderable<$ModelData>;
        withContext(arg0: $ModelData): $IRenderable<$Unit>;
        withContext(arg0: $BakedModelRenderable$Context_): $IRenderable<$Unit>;
    }
    export class $CompositeRenderable$Component {
    }
    export class $ITextureRenderTypeLookup {
    }
    export interface $ITextureRenderTypeLookup {
        get(arg0: $ResourceLocation_): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $ITextureRenderTypeLookup}.
     */
    export type $ITextureRenderTypeLookup_ = ((arg0: $ResourceLocation) => $RenderType);
}
