import { $Consumer_ } from "@package/java/util/function";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Stack } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $Rect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Matrix4f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering" {
    export class $EnhancedPoseStack {
        clear(): boolean;
        scale(arg0: number, arg1: number, arg2: number): void;
        last(): $PoseStack$Pose;
        setOnTransform(arg0: $Runnable_): $EnhancedPoseStack;
        setIdentity(): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        pushPose(): void;
        popPose(): void;
        rotateAround(arg0: $Quaternionf, arg1: number, arg2: number, arg3: number): void;
        mulPose(arg0: $Quaternionf): void;
        mulPose(arg0: $Matrix4f): void;
        pushTransformation(arg0: $Transformation): void;
        pose: $PoseStack;
        constructor(arg0: $PoseStack);
        set onTransform(value: $Runnable_);
    }
    export class $UIVisualLayer {
        clear(): void;
        release(): void;
        bind(arg0: $GUIContext): void;
        unbind(): void;
        textureId(): number;
        draw(arg0: $GUIContext): void;
        constructor(arg0: $UIElement);
    }
    export class $GUIContext {
        static of(arg0: $ModularUI, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): $GUIContext;
        callPostRendering(): void;
        refreshLocalMouse(): void;
        postRendering(arg0: $Consumer_<$GUIContext>): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Matrix4f): void;
        disableScissor(): void;
        pushVisualLayer(arg0: $UIVisualLayer): void;
        popVisualLayer(): void;
        setElementColor(arg0: number): void;
        resetElementColor(): void;
        drawTexture(arg0: $IGuiTexture_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        mouseX: number;
        visualLayers: $Stack<$UIVisualLayer>;
        modularUI: $ModularUI;
        pose: $EnhancedPoseStack;
        mouseY: number;
        localMouseY: number;
        scissorStack: $Stack<$Rect>;
        graphics: $GuiGraphics;
        localMouseX: number;
        elementColor: number;
        partialTick: number;
        mc: $Minecraft;
        constructor();
    }
}
