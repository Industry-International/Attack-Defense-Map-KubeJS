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
        color(arg0: number, arg1: number): $QuadEmitter;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $QuadEmitter;
        normal(arg0: number, arg1: $Vector3f): $QuadEmitter;
        normal(arg0: number, arg1: $Vector3fc): $QuadEmitter;
        square(arg0: $Direction_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $QuadEmitter;
        tag(arg0: number): $QuadEmitter;
        copyFrom(arg0: $QuadView): $QuadEmitter;
        emit(): $QuadEmitter;
        /**
         * @deprecated
         */
        fromVanilla(arg0: number[], arg1: number, arg2: boolean): $QuadEmitter;
        uvUnitSquare(): $QuadEmitter;
        /**
         * @deprecated
         */
        spriteUnitSquare(arg0: number): $QuadEmitter;
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $QuadEmitter;
        lightmap(arg0: number, arg1: number): $QuadEmitter;
        cullFace(arg0: $Direction_): $QuadEmitter;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: number, arg3: number): $QuadEmitter;
        pos(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        fromVanilla(arg0: number[], arg1: number): $MutableQuadView;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2fc): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2fc): $MutableQuadView;
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        nominalFace(arg0: $Direction_): $MutableQuadView;
        material(arg0: $RenderMaterial): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: $Vec2): $MutableQuadView;
        colorIndex(arg0: number): $MutableQuadView;
        /**
         * @deprecated
         */
        spriteBake(arg0: number, arg1: $TextureAtlasSprite, arg2: number): $MutableQuadView;
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
        pos(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3f): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        color(arg0: number, arg1: number): $MutableQuadView;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3fc): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        tag(arg0: number): $MutableQuadView;
        copyFrom(arg0: $QuadView): $MutableQuadView;
        /**
         * @deprecated
         */
        fromVanilla(arg0: number[], arg1: number, arg2: boolean): $MutableQuadView;
        fromVanilla(arg0: $BakedQuad, arg1: $RenderMaterial, arg2: $Direction_): $MutableQuadView;
        fromVanilla(arg0: number[], arg1: number): $MutableQuadView;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2fc): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2f): $MutableQuadView;
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $MutableQuadView;
        nominalFace(arg0: $Direction_): $MutableQuadView;
        material(arg0: $RenderMaterial): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        lightmap(arg0: number, arg1: number): $MutableQuadView;
        cullFace(arg0: $Direction_): $MutableQuadView;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: $Vec2): $MutableQuadView;
        /**
         * @deprecated
         */
        sprite(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
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
        /**
         * @deprecated
         */
        spriteColor(arg0: number, arg1: number): number;
        nominalFace(): $Direction;
        /**
         * @deprecated
         */
        toVanilla(arg0: number, arg1: number[], arg2: number, arg3: boolean): void;
        toVanilla(arg0: number[], arg1: number): void;
        material(): $RenderMaterial;
        lightmap(arg0: number): number;
        hasNormal(arg0: number): boolean;
        cullFace(): $Direction;
        normalZ(arg0: number): number;
        copyPos(arg0: number, arg1: $Vector3f): $Vector3f;
        colorIndex(): number;
        copyUv(arg0: number, arg1: $Vector2f): $Vector2f;
        posByIndex(arg0: number, arg1: number): number;
        copyNormal(arg0: number, arg1: $Vector3f): $Vector3f;
        /**
         * @deprecated
         */
        spriteU(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        spriteV(arg0: number, arg1: number): number;
        faceNormal(): $Vector3f;
        /**
         * @deprecated
         */
        toBakedQuad(arg0: number, arg1: $TextureAtlasSprite, arg2: boolean): $BakedQuad;
        toBakedQuad(arg0: $TextureAtlasSprite): $BakedQuad;
        lightFace(): $Direction;
    }
}
