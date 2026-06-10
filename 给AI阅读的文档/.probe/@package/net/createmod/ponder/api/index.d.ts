import { $Enum } from "@package/java/lang";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
export * as element from "@package/net/createmod/ponder/api/element";
export * as scene from "@package/net/createmod/ponder/api/scene";
export * as registration from "@package/net/createmod/ponder/api/registration";
export * as level from "@package/net/createmod/ponder/api/level";

declare module "@package/net/createmod/ponder/api" {
    export class $PonderPalette extends $Enum<$PonderPalette> {
        static values(): $PonderPalette[];
        static valueOf(arg0: string): $PonderPalette;
        getColor(): number;
        getColorObject(): $Color;
        static RED: $PonderPalette;
        static WHITE: $PonderPalette;
        static INPUT: $PonderPalette;
        static MEDIUM: $PonderPalette;
        static BLUE: $PonderPalette;
        static OUTPUT: $PonderPalette;
        static SLOW: $PonderPalette;
        static BLACK: $PonderPalette;
        static FAST: $PonderPalette;
        static GREEN: $PonderPalette;
        get color(): number;
        get colorObject(): $Color;
    }
    /**
     * Values that may be interpreted as {@link $PonderPalette}.
     */
    export type $PonderPalette_ = "white" | "black" | "red" | "green" | "blue" | "slow" | "medium" | "fast" | "input" | "output";
    export class $VirtualBlockEntity {
    }
    export interface $VirtualBlockEntity {
        isVirtual(): boolean;
        markVirtual(): void;
        get virtual(): boolean;
    }
    export class $ParticleEmitter {
    }
    export interface $ParticleEmitter {
        create(arg0: $PonderLevel, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEmitter}.
     */
    export type $ParticleEmitter_ = ((arg0: $PonderLevel, arg1: number, arg2: number, arg3: number) => void);
}
