import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix4fc, $Quaternionfc } from "@package/org/joml";
export * as regions from "@package/com/moulberry/axiom/render/regions";

declare module "@package/com/moulberry/axiom/render" {
    export class $AxiomWorldRenderContext extends $Record {
        nanos(): number;
        position(): $Vec3;
        x(): number;
        z(): number;
        y(): number;
        projection(): $Matrix4fc;
        rotation(): $Quaternionfc;
        poseStack(): $PoseStack;
        blockPosition(): $BlockPos;
        partialTick(): number;
        xRot(): number;
        yRot(): number;
        rawCameraDontUse(): $Camera;
        constructor(camera: $Camera, tickDelta: number, poseStack: $PoseStack, projection: $Matrix4fc);
        constructor(rawCameraDontUse: $Camera, poseStack: $PoseStack, partialTick: number, nanos: number, position: $Vec3_, blockPosition: $BlockPos_, xRot: number, yRot: number, rotation: $Quaternionfc, projection: $Matrix4fc);
    }
}
