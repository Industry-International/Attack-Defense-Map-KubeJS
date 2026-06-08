import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $Vector2f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as interpolate from "@package/com/lowdragmc/lowdraglib2/math/interpolate";

declare module "@package/com/lowdragmc/lowdraglib2/math" {
    export class $Position {
        getY(): number;
        getX(): number;
        add(arg0: $Position): $Position;
        add(arg0: $Size): $Position;
        add(arg0: number, arg1: number): $Position;
        static of(arg0: number, arg1: number): $Position;
        subtract(arg0: $Position): $Position;
        vector2f(): $Vector2f;
        addX(arg0: number): $Position;
        addY(arg0: number): $Position;
        vec2(): $Vec2;
        static ORIGIN: $Position;
        static CODEC: $Codec<$Position>;
        x: number;
        y: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Position>;
    }
    export class $PositionedRect {
        getPosition(): $Position;
        static of(arg0: $Position, arg1: $Size): $PositionedRect;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        static of(arg0: $Position, arg1: $Position): $PositionedRect;
        getSize(): $Size;
        intersects(arg0: $PositionedRect): boolean;
        intersects(arg0: $Position): boolean;
        size: $Size;
        position: $Position;
    }
    export class $Size {
        add(arg0: $Size): $Size;
        static add(arg0: $Position): $Size;
        add(arg0: number, arg1: number): $Size;
        static of(arg0: number, arg1: number): $Size;
        subtract(arg0: $Size): $Size;
        getWidth(): number;
        addWidth(arg0: number): $Size;
        addHeight(arg0: number): $Size;
        getHeight(): number;
        static ZERO: $Size;
        static CODEC: $Codec<$Size>;
        width: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Size>;
        height: number;
    }
    export class $Rect {
        expand(arg0: number, arg1: number): $Rect;
        expand(arg0: number): $Rect;
        static of(arg0: $Position, arg1: $Size): $Rect;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        move(arg0: $Position): $Rect;
        move(arg0: $Size): $Rect;
        move(arg0: number, arg1: number): $Rect;
        getLeft(): number;
        getRight(): number;
        intersects(arg0: $Rect): $Rect;
        getWidth(): number;
        getHeight(): number;
        unions(arg0: $Rect): $Rect;
        leftAnd(arg0: number): $Position;
        withUp(arg0: number): $Rect;
        toLeftDown(): $Position;
        static ofAbsolute(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        rightAnd(arg0: number): $Position;
        downAnd(arg0: number): $Position;
        upAnd(arg0: number): $Position;
        toUpCenter(): $Position;
        static ofRelative(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        expandUp(arg0: number): $Rect;
        expandLeft(arg0: number): $Rect;
        toRightUp(): $Position;
        withDown(arg0: number): $Rect;
        toLeftUp(): $Position;
        expandDown(arg0: number): $Rect;
        isCollide(arg0: $Rect): boolean;
        getUp(): number;
        getDown(): number;
        withRight(arg0: number): $Rect;
        withDownFixedHeight(arg0: number): $Rect;
        withRightFixedWidth(arg0: number): $Rect;
        withLeft(arg0: number): $Rect;
        toLeftCenter(): $Position;
        toRightDown(): $Position;
        withUpFixedHeight(arg0: number): $Rect;
        toRightCenter(): $Position;
        toDownCenter(): $Position;
        getWidthCenter(): number;
        moveVertical(arg0: number): $Rect;
        verticalExpand(arg0: number): $Rect;
        verticalExpand(arg0: number, arg1: number): $Rect;
        moveHorizontal(arg0: number): $Rect;
        withLeftFixedWidth(arg0: number): $Rect;
        getHeightCenter(): number;
        expandRight(arg0: number): $Rect;
        horizontalExpand(arg0: number): $Rect;
        horizontalExpand(arg0: number, arg1: number): $Rect;
        static ZERO: $Rect;
        left: number;
        up: number;
        right: number;
        down: number;
        get width(): number;
        get height(): number;
        get widthCenter(): number;
        get heightCenter(): number;
    }
}
