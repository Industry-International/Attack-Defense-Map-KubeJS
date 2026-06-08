import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $RenderMaterial } from "@package/net/fabricmc/fabric/api/renderer/v1/material";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $Vector2f, $Vector3f, $Vector2fc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/fabricmc/fabric/api/renderer/v1/mesh" {
    export class $QuadEmitter {
        static CULL_FACE_EPSILON: number;
    }
    export interface $QuadEmitter extends $MutableQuadView {
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $QuadEmitter;
        uvUnitSquare(): $QuadEmitter;
        /**
         * @deprecated
         */
        spriteUnitSquare(arg0: number): $QuadEmitter;
        nominalFace(arg0: $Direction_): $QuadEmitter;
        color(arg0: number, arg1: number): $QuadEmitter;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $QuadEmitter;
        square(arg0: $Direction_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $QuadEmitter;
        emit(): $QuadEmitter;
        uv(arg0: number, arg1: $Vector2f): $QuadEmitter;
        uv(arg0: number, arg1: number, arg2: number): $QuadEmitter;
        cullFace(arg0: $Direction_): $QuadEmitter;
        fromVanilla(arg0: $BakedQuad, arg1: $RenderMaterial, arg2: $Direction_): $QuadEmitter;
        material(arg0: $RenderMaterial): $QuadEmitter;
        colorIndex(arg0: number): $QuadEmitter;
        /**
         * @deprecated
         */
        spriteBake(arg0: number, arg1: $TextureAtlasSprite, arg2: number): $QuadEmitter;
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        tag(arg0: number): $MutableQuadView;
        copyFrom(arg0: $QuadView): $MutableQuadView;
        lightmap(arg0: number, arg1: number): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: $Vec2): $MutableQuadView;
        fromVanilla(arg0: number[], arg1: number): $MutableQuadView;
        spriteBake(arg0: $TextureAtlasSprite, arg1: number): $MutableQuadView;
    }
    export class $Mesh {
    }
    export interface $Mesh {
        forEach(arg0: $Consumer_<$QuadView>): void;
        outputTo(arg0: $QuadEmitter): void;
    }
    /**
     * Values that may be interpreted as {@link $Mesh}.
     */
    export type $Mesh_ = ((arg0: $Consumer<$QuadView>) => void);
    export class $MutableQuadView {
        static BAKE_LOCK_UV: number;
        static BAKE_NORMALIZED: number;
        static BAKE_FLIP_V: number;
        static BAKE_ROTATE_90: number;
        static BAKE_FLIP_U: number;
        static BAKE_ROTATE_NONE: number;
        static BAKE_ROTATE_180: number;
        static BAKE_ROTATE_270: number;
    }
    export interface $MutableQuadView extends $QuadView {
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $MutableQuadView;
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        nominalFace(arg0: $Direction_): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3f): $MutableQuadView;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        color(arg0: number, arg1: number): $MutableQuadView;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        tag(arg0: number): $MutableQuadView;
        copyFrom(arg0: $QuadView): $MutableQuadView;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2f): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2fc): $MutableQuadView;
        cullFace(arg0: $Direction_): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        lightmap(arg0: number, arg1: number): $MutableQuadView;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: $Vec2): $MutableQuadView;
        /**
         * @deprecated
         */
        fromVanilla(arg0: number[], arg1: number, arg2: boolean): $MutableQuadView;
        fromVanilla(arg0: $BakedQuad, arg1: $RenderMaterial, arg2: $Direction_): $MutableQuadView;
        fromVanilla(arg0: number[], arg1: number): $MutableQuadView;
        material(arg0: $RenderMaterial): $MutableQuadView;
        colorIndex(arg0: number): $MutableQuadView;
        /**
         * @deprecated
         */
        spriteBake(arg0: number, arg1: $TextureAtlasSprite, arg2: number): $MutableQuadView;
        spriteBake(arg0: $TextureAtlasSprite, arg1: number): $MutableQuadView;
    }
    export class $QuadView {
        static VANILLA_QUAD_STRIDE: number;
        static VANILLA_VERTEX_STRIDE: number;
    }
    export interface $QuadView {
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number): number;
        nominalFace(): $Direction;
        faceNormal(): $Vector3f;
        x(arg0: number): number;
        v(arg0: number): number;
        z(arg0: number): number;
        u(arg0: number): number;
        y(arg0: number): number;
        color(arg0: number): number;
        tag(): number;
        normalX(arg0: number): number;
        normalY(arg0: number): number;
        /**
         * @deprecated
         */
        copyTo(arg0: $MutableQuadView): void;
        cullFace(): $Direction;
        lightmap(arg0: number): number;
        hasNormal(arg0: number): boolean;
        normalZ(arg0: number): number;
        /**
         * @deprecated
         */
        toVanilla(arg0: number, arg1: number[], arg2: number, arg3: boolean): void;
        toVanilla(arg0: number[], arg1: number): void;
        /**
         * @deprecated
         */
        toBakedQuad(arg0: number, arg1: $TextureAtlasSprite, arg2: boolean): $BakedQuad;
        toBakedQuad(arg0: $TextureAtlasSprite): $BakedQuad;
        lightFace(): $Direction;
        material(): $RenderMaterial;
        copyPos(arg0: number, arg1: $Vector3f): $Vector3f;
        colorIndex(): number;
        /**
         * @deprecated
         */
        spriteU(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        spriteV(arg0: number, arg1: number): number;
        posByIndex(arg0: number, arg1: number): number;
        copyUv(arg0: number, arg1: $Vector2f): $Vector2f;
        copyNormal(arg0: number, arg1: $Vector3f): $Vector3f;
    }
}
