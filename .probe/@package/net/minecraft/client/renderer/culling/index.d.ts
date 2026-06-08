import { $BlockPos_, $Position, $SectionPos } from "@package/net/minecraft/core";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $FrustumExtension } from "@package/foundry/veil/ext";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Vector4fc, $Vector2dc, $Matrix4fc, $Matrix4f, $Vector3dc, $Vector3ic, $Vector2fc, $Vector3fc, $FrustumIntersection } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $FrustumExtension, $CullFrustum, $ViewportProvider {
        prepare(arg0: number, arg1: number, arg2: number): void;
        sodium$createViewport(): $Viewport;
        offsetToFullyIncludeCameraCube(arg0: number): $Frustum;
        getModelViewProjectionMatrix(): $Matrix4fc;
        toFrustum(): $Frustum;
        getPlanes(): $Vector4fc[];
        isVisible(arg0: $AABB_): boolean;
        getPosition(): $Vector3dc;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        veil$setupFrustum(arg0: $Matrix4fc, arg1: $Matrix4fc): void;
        cubeInFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testLineSegment(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        handler$ccf000$vista$skipOffsetToFullyIncludeCameraCube(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$inl000$axiom$offsetToFullyIncludeCameraCube(i: number, cir: $CallbackInfoReturnable<any>): void;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testAab(arg0: $AABB_): boolean;
        getViewVector(): $Vector3fc;
        testBlock(arg0: $BlockPos_): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testSection(arg0: $SectionPos): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Position): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        camY: number;
        camZ: number;
        intersection: $FrustumIntersection;
        camX: number;
        static OFFSET_STEP: number;
        constructor(arg0: $Matrix4f, arg1: $Matrix4f);
        constructor(arg0: $Frustum);
        get modelViewProjectionMatrix(): $Matrix4fc;
        get planes(): $Vector4fc[];
        get position(): $Vector3dc;
        get viewVector(): $Vector3fc;
    }
}
