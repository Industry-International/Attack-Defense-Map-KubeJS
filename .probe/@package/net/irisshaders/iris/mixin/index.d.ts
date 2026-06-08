import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $RenderType, $RenderBuffers, $MultiBufferSource_, $PostChain } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $GlStateManager$BlendState, $GlStateManager$DepthState, $GlStateManager$ColorMask, $GlStateManager$TextureState } from "@package/com/mojang/blaze3d/platform";
import { $SortedSet, $OptionalLong } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockDestructionProgress } from "@package/net/minecraft/server/level";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $DynamicTexture } from "@package/net/minecraft/client/renderer/texture";
import { $Program$Type } from "@package/com/mojang/blaze3d/shaders";
import { $Matrix4f } from "@package/org/joml";
export * as texture from "@package/net/irisshaders/iris/mixin/texture";
export * as rendertype from "@package/net/irisshaders/iris/mixin/rendertype";
export * as statelisteners from "@package/net/irisshaders/iris/mixin/statelisteners";

declare module "@package/net/irisshaders/iris/mixin" {
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        getLevel(): $ClientLevel;
        invokeDoesMobEffectBlockSky(arg0: $Camera): boolean;
        invokeSetupRender(arg0: $Camera, arg1: $Frustum, arg2: boolean, arg3: boolean): void;
        invokeRenderEntity(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $PoseStack, arg6: $MultiBufferSource_): void;
        setRenderBuffers(arg0: $RenderBuffers): void;
        getRenderBuffers(): $RenderBuffers;
        setShouldRegenerateClouds(arg0: boolean): void;
        getDestructionProgress(): $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>;
        invokeRenderSectionLayer(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: $Matrix4f, arg5: $Matrix4f): void;
        shouldRegenerateClouds(): boolean;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        get level(): $ClientLevel;
        get destructionProgress(): $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
    }
    export class $GlStateManagerAccessor {
        static getBLEND(): $GlStateManager$BlendState;
        static getDEPTH(): $GlStateManager$DepthState;
        static getTEXTURES(): $GlStateManager$TextureState[];
        static getActiveTexture(): number;
        static getCOLOR_MASK(): $GlStateManager$ColorMask;
        static get BLEND(): $GlStateManager$BlendState;
        static get DEPTH(): $GlStateManager$DepthState;
        static get TEXTURES(): $GlStateManager$TextureState[];
        static get activeTexture(): number;
        static get COLOR_MASK(): $GlStateManager$ColorMask;
    }
    export interface $GlStateManagerAccessor {
    }
    export class $DimensionTypeAccessor {
    }
    export interface $DimensionTypeAccessor {
        getFixedTime(): $OptionalLong;
        getAmbientLight(): number;
        get fixedTime(): $OptionalLong;
        get ambientLight(): number;
    }
    export class $LightTextureAccessor {
    }
    export interface $LightTextureAccessor {
        getLightTexture(): $DynamicTexture;
        get lightTexture(): $DynamicTexture;
    }
    /**
     * Values that may be interpreted as {@link $LightTextureAccessor}.
     */
    export type $LightTextureAccessor_ = (() => $DynamicTexture);
    export class $ProgramTypeAccessor {
        static createProgramType(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
    }
    export interface $ProgramTypeAccessor {
    }
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        shouldRenderBlockOutlineA(): boolean;
        invokeBobView(arg0: $PoseStack, arg1: number): void;
        getRenderHand(): boolean;
        invokeGetFov(arg0: $Camera, arg1: number, arg2: boolean): number;
        invokeBobHurt(arg0: $PoseStack, arg1: number): void;
        getPanoramicMode(): boolean;
        getBlurEffect(): $PostChain;
        get renderHand(): boolean;
        get panoramicMode(): boolean;
        get blurEffect(): $PostChain;
    }
}
