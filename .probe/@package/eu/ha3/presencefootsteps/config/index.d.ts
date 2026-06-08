import { $Reader } from "@package/java/io";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";

declare module "@package/eu/ha3/presencefootsteps/config" {
    export class $Variator extends $JsonFile {
        DISTANCE_LADDER: number;
        LAND_HARD_DISTANCE_MIN: number;
        HUGEFALL_LANDING_DISTANCE_MAX: number;
        EVENT_ON_JUMP: boolean;
        WING_SPEED_NORMAL: number;
        WING_SPEED_RAPID: number;
        MIN_MOTION_Y: number;
        MIN_COAST_MOTION: number;
        HUGEFALL_LANDING_DISTANCE_MIN: number;
        PLAY_WANDER: boolean;
        SPEED_TO_RUN: number;
        WING_SPEED_IDLE: number;
        FLIGHT_TRANSITION_TIME: number;
        MIN_MOTION_HOR: number;
        IMMOBILE_DURATION: number;
        DISTANCE_HUMAN: number;
        MIN_DASH_MOTION: number;
        RUNNING_RAMPUP_END: number;
        DISTANCE_STAIR: number;
        WING_SPEED_COAST: number;
        IMOBILE_INTERVAL_MAX: number;
        SPEED_TO_JUMP_AS_MULTIFOOT: number;
        RUNNING_RAMPUP_BEGIN: number;
        WING_IMMOBILE_FADE_START: number;
        IMOBILE_INTERVAL_MIN: number;
        WING_JUMPING_REST_TIME: number;
        WING_IMMOBILE_FADE_DURATION: number;
        constructor();
    }
    export class $JsonFile {
        load(arg0: $Reader): void;
        load(): void;
        save(): void;
        constructor(arg0: $Path_);
    }
    export class $VolumeOption {
        get(): number;
        set(arg0: number): number;
        getPercentage(): number;
        constructor(arg0: $JsonFile, arg1: number);
        get percentage(): number;
    }
    export class $EntitySelector extends $Enum<$EntitySelector> implements $Predicate<$Entity> {
        static values(): $EntitySelector[];
        static valueOf(arg0: string): $EntitySelector;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        static ALL: $EntitySelector;
        static PLAYERS_ONLY: $EntitySelector;
        static PLAYERS_AND_HOSTILES: $EntitySelector;
        static VALUES: $EntitySelector[];
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = "all" | "players_and_hostiles" | "players_only";
}
