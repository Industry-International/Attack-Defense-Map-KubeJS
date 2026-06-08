import { $BlockPos_, $Position, $SectionPos } from "@package/net/minecraft/core";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $FrustumExtension } from "@package/foundry/veil/ext";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4fc, $Matrix4f, $Vector4fc, $Vector2dc, $Vector3dc, $Vector3ic, $Vector2fc, $Vector3fc, $FrustumIntersection } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $FrustumExtension, $CullFrustum, $ViewportProvider {
        getPosition(): $Vector3dc;
        prepare(arg0: number, arg1: number, arg2: number): void;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        cubeInFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        veil$setupFrustum(arg0: $Matrix4fc, arg1: $Matrix4fc): void;
        testLineSegment(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        isVisible(arg0: $AABB_): boolean;
        getViewVector(): $Vector3fc;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testAab(arg0: $AABB_): boolean;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        toFrustum(): $Frustum;
        getPlanes(): $Vector4fc[];
        sodium$createViewport(): $Viewport;
        handler$iog000$axiom$offsetToFullyIncludeCameraCube(i: number, cir: $CallbackInfoReturnable<any>): void;
        handler$cce000$vista$skipOffsetToFullyIncludeCameraCube(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        offsetToFullyIncludeCameraCube(arg0: number): $Frustum;
        getModelViewProjectionMatrix(): $Matrix4fc;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testSection(arg0: $SectionPos): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Position): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testBlock(arg0: $BlockPos_): boolean;
        camY: number;
        camZ: number;
        intersection: $FrustumIntersection;
        camX: number;
        static OFFSET_STEP: number;
        constructor(arg0: $Matrix4f, arg1: $Matrix4f);
        constructor(arg0: $Frustum);
        get position(): $Vector3dc;
        get viewVector(): $Vector3fc;
        get planes(): $Vector4fc[];
        get modelViewProjectionMatrix(): $Matrix4fc;
    }
}
