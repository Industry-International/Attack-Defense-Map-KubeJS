import { $BlockPos } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/moulberry/axiomclientapi/regions" {
    export class $BlockRegion {
    }
    export interface $BlockRegion {
        min(): $BlockPos;
        max(): $BlockPos;
        clear(): void;
        isEmpty(): boolean;
        count(): number;
        render(arg0: $Camera, arg1: $Vec3_, arg2: $PoseStack, arg3: $Matrix4f, arg4: number, arg5: number): void;
        addBlock(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): void;
        addBlockIfNotPresent(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): void;
        get empty(): boolean;
    }
}
