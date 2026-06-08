import { $DynamicOps } from "@package/com/mojang/serialization";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $UnbakedModel, $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map } from "@package/java/util";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBufferBuilder$Result, $VertexFormatElement, $VertexFormatElement_ } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Uniform, $Program$Type, $Program, $Program$Type_ } from "@package/com/mojang/blaze3d/shaders";
import { $Object } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector4f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor" {
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        getActiveButton(): number;
        get activeButton(): number;
    }
    /**
     * Values that may be interpreted as {@link $MouseHandlerAccessor}.
     */
    export type $MouseHandlerAccessor_ = (() => number);
    export class $ModelBakeryAccessor {
    }
    export interface $ModelBakeryAccessor {
        invokeGetModel(arg0: $ResourceLocation_): $UnbakedModel;
        getTopLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        get topLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
    }
    export class $ProgramTypeAccessor {
        static ldlib2$createProgramType(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
    }
    export interface $ProgramTypeAccessor {
    }
    export class $ObjModelAccessor {
    }
    export interface $ObjModelAccessor {
        invokeMakeQuad(arg0: number[][], arg1: number, arg2: $Vector4f, arg3: $Vector4f, arg4: $TextureAtlasSprite, arg5: $Transformation): $Pair<$BakedQuad, $Direction>;
    }
    /**
     * Values that may be interpreted as {@link $ObjModelAccessor}.
     */
    export type $ObjModelAccessor_ = ((arg0: number[][], arg1: number, arg2: $Vector4f, arg3: $Vector4f, arg4: $TextureAtlasSprite, arg5: $Transformation) => $Pair<$BakedQuad, $Direction_>);
    export class $BufferBuilderAccessor {
    }
    export interface $BufferBuilderAccessor {
        invokeBeginElement(arg0: $VertexFormatElement_): number;
    }
    /**
     * Values that may be interpreted as {@link $BufferBuilderAccessor}.
     */
    export type $BufferBuilderAccessor_ = ((arg0: $VertexFormatElement) => number);
    export class $MeshDataAccessor {
    }
    export interface $MeshDataAccessor {
        getIndexBuffer(): $ByteBufferBuilder$Result;
        setIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
    }
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        getY(): number;
        getX(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
    }
    export class $DelegatingOpsAccessor<T> {
    }
    export interface $DelegatingOpsAccessor<T> {
        getDelegate(): $DynamicOps<T>;
        get delegate(): $DynamicOps<T>;
    }
    /**
     * Values that may be interpreted as {@link $DelegatingOpsAccessor}.
     */
    export type $DelegatingOpsAccessor_<T> = (() => $DynamicOps<T>);
    export class $ShaderInstanceAccessor {
        static invokeGetOrCreate(arg0: $ResourceProvider_, arg1: $Program$Type_, arg2: string): $Program;
    }
    export interface $ShaderInstanceAccessor {
        getUniformMap(): $Map<string, $Uniform>;
        getSamplerMap(): $Map<string, $Object>;
        getSamplerNames(): $List<string>;
        get uniformMap(): $Map<string, $Uniform>;
        get samplerMap(): $Map<string, $Object>;
        get samplerNames(): $List<string>;
    }
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        ldlib2$getClientTickCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = (() => number);
}
