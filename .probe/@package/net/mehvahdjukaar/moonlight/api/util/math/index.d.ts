import { $Direction_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/mehvahdjukaar/moonlight/api/util/math" {
    export class $Vec2i extends $Record {
        length(): number;
        min(): number;
        max(): number;
        scale(arg0: number): $Vec2i;
        add(arg0: $Vec2i_): $Vec2i;
        offset(arg0: $Direction2D_): $Vec2i;
        x(): number;
        y(): number;
        multiply(arg0: number): $Vec2i;
        subtract(arg0: $Vec2i_): $Vec2i;
        lengthSquared(): number;
        manhattanLength(): number;
        manhattanDistance(arg0: $Vec2i_): number;
        static ZERO: $Vec2i;
        static CODEC: $Codec<$Vec2i>;
        static ONE: $Vec2i;
        constructor(x: number, y: number);
    }
    export class $Direction2D extends $Enum<$Direction2D> implements $StringRepresentable {
        static values(): $Direction2D[];
        static valueOf(arg0: string): $Direction2D;
        getSerializedName(): string;
        getStep(): $Vec2i;
        counterClockwise(): $Direction2D;
        static from3D(arg0: $Direction_, arg1: $Rotation_): $Direction2D;
        getOpposite(): $Direction2D;
        static closest(arg0: $Vec2i_): $Direction2D;
        static closest(arg0: $Vec2): $Direction2D;
        clockwise(): $Direction2D;
        getRemappedEnumConstantName(): string;
        static DOWN: $Direction2D;
        static CODEC: $Codec<$Direction2D>;
        static LEFT: $Direction2D;
        static RIGHT: $Direction2D;
        static UP: $Direction2D;
        get serializedName(): string;
        get step(): $Vec2i;
        get opposite(): $Direction2D;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction2D}.
     */
    export type $Direction2D_ = "up" | "down" | "right" | "left";
}
