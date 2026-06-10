import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Position } from "@package/com/sighs/apricityui/style";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Document } from "@package/com/sighs/apricityui/init";
import { $RenderLevelStageEvent } from "@package/net/neoforged/neoforge/client/event";
export * as container from "@package/com/sighs/apricityui/instance/container";
export * as network from "@package/com/sighs/apricityui/instance/network";

declare module "@package/com/sighs/apricityui/instance" {
    export class $FollowFacingWorldWindow extends $WorldWindow {
        document: $Document;
        constructor(arg0: string, arg1: $Vec3_, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $WorldWindow {
        getWidth(): number;
        static clear(): void;
        setScale(arg0: number): void;
        render(arg0: $PoseStack): void;
        setRotation(arg0: number, arg1: number): void;
        static addWindow(arg0: $WorldWindow): void;
        setDynamicDepthStep(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setPosition(arg0: $Vec3_): void;
        getHeight(): number;
        getRealPos(): $Position;
        static onRenderWorld(arg0: $RenderLevelStageEvent): void;
        static removeWindow(arg0: $WorldWindow): void;
        document: $Document;
        constructor(arg0: string, arg1: $Vec3_, arg2: number, arg3: number, arg4: number);
        get width(): number;
        set scale(value: number);
        set position(value: $Vec3_);
        get height(): number;
        get realPos(): $Position;
    }
}
