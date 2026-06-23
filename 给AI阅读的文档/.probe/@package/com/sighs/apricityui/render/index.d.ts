import { $Consumer_ } from "@package/java/util/function";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum, $Record } from "@package/java/lang";
import { $Size_, $Size, $Position, $Background, $Box } from "@package/com/sighs/apricityui/style";
import { $Element } from "@package/com/sighs/apricityui/init";

declare module "@package/com/sighs/apricityui/render" {
    export class $Rect {
        static of(arg0: $Element): $Rect;
        drawBorder(arg0: $PoseStack): void;
        drawBody(arg0: $PoseStack): void;
        drawBody(arg0: $PoseStack, arg1: $Size_): void;
        getBodyRectPosition(): $Position;
        getContentPosition(): $Position;
        getBodyRectSize(): $Size;
        getBodyRadius(): number[];
        drawShadow(arg0: $PoseStack): void;
        getVisualBounds(): $AABB;
        getShadowSize(): $Size;
        getShadowPosition(): $Position;
        background: $Background;
        box: $Box;
        position: $Position;
        documentPath: string;
        constructor(arg0: $Element);
        get bodyRectPosition(): $Position;
        get contentPosition(): $Position;
        get bodyRectSize(): $Size;
        get bodyRadius(): number[];
        get visualBounds(): $AABB;
        get shadowSize(): $Size;
        get shadowPosition(): $Position;
    }
    export class $Base$RenderPhase extends $Enum<$Base$RenderPhase> {
        static values(): $Base$RenderPhase[];
        static valueOf(arg0: string): $Base$RenderPhase;
        static BORDER: $Base$RenderPhase;
        static SHADOW: $Base$RenderPhase;
        static BODY: $Base$RenderPhase;
    }
    /**
     * Values that may be interpreted as {@link $Base$RenderPhase}.
     */
    export type $Base$RenderPhase_ = "shadow" | "body" | "border";
    export class $RenderNode {
        static shouldSkip(arg0: $Element): boolean;
        static applyWithTransform(arg0: $PoseStack, arg1: $Element, arg2: $Consumer_<$Rect>): void;
    }
    export interface $RenderNode {
        render(arg0: $PoseStack): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderNode}.
     */
    export type $RenderNode_ = ((arg0: $PoseStack) => void);
    export class $AABB extends $Record {
        x(): number;
        y(): number;
        width(): number;
        isValid(): boolean;
        intersects(arg0: $AABB_): boolean;
        height(): number;
        maxY(): number;
        intersection(arg0: $AABB_): $AABB;
        maxX(): number;
        constructor(x: number, y: number, width: number, height: number);
        get valid(): boolean;
    }
}
