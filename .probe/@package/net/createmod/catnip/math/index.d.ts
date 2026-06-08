import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/createmod/catnip/math" {
    export class $Pointing extends $Enum<$Pointing> implements $StringRepresentable {
        static values(): $Pointing[];
        static valueOf(arg0: string): $Pointing;
        getSerializedName(): string;
        getXRotation(): number;
        getCombinedDirection(arg0: $Direction_): $Direction;
        getRemappedEnumConstantName(): string;
        static DOWN: $Pointing;
        static LEFT: $Pointing;
        static RIGHT: $Pointing;
        static UP: $Pointing;
        get serializedName(): string;
        get XRotation(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Pointing}.
     */
    export type $Pointing_ = "up" | "left" | "down" | "right";
}
