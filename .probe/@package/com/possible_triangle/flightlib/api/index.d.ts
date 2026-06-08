import { $EnumEntries } from "@package/kotlin/enums";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/possible_triangle/flightlib/api" {
    export class $FlightKey extends $Enum<$FlightKey> implements $StringRepresentable {
        static values(): $FlightKey[];
        static valueOf(arg0: string): $FlightKey;
        getDefault(): boolean;
        static getEntries(): $EnumEntries<$FlightKey>;
        setBinding(arg0: ($KeyMapping) | undefined): void;
        getToggle(): boolean;
        isPressed(arg0: $LivingEntity): boolean;
        getSerializedName(): string;
        getBinding(): ($KeyMapping) | undefined;
        getDefaultKey(): number;
        getRemappedEnumConstantName(): string;
        static TOGGLE_ACTIVE: $FlightKey;
        static BACKWARD: $FlightKey;
        static LEFT: $FlightKey;
        static TOGGLE_HOVER: $FlightKey;
        binding: ($KeyMapping) | undefined;
        static RIGHT: $FlightKey;
        static FORWARD: $FlightKey;
        static UP: $FlightKey;
        get default(): boolean;
        static get entries(): $EnumEntries<$FlightKey>;
        get toggle(): boolean;
        get serializedName(): string;
        get defaultKey(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FlightKey}.
     */
    export type $FlightKey_ = "up" | "left" | "right" | "forward" | "backward" | "toggle_active" | "toggle_hover";
}
