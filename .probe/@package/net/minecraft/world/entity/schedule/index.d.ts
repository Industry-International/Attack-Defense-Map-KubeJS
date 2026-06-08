import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Collection_, $List } from "@package/java/util";

declare module "@package/net/minecraft/world/entity/schedule" {
    export class $Activity {
        getName(): string;
        static CORE: $Activity;
        static ROAR: $Activity;
        static FIGHT: $Activity;
        static TONGUE: $Activity;
        static PLAY: $Activity;
        static PANIC: $Activity;
        static INVESTIGATE: $Activity;
        static CELEBRATE: $Activity;
        static RIDE: $Activity;
        static MEET: $Activity;
        static HIDE: $Activity;
        static DIG: $Activity;
        static PLAY_DEAD: $Activity;
        static LONG_JUMP: $Activity;
        static AVOID: $Activity;
        static RAID: $Activity;
        static SWIM: $Activity;
        static EMERGE: $Activity;
        static REST: $Activity;
        static IDLE: $Activity;
        static SNIFF: $Activity;
        static WORK: $Activity;
        static ADMIRE_ITEM: $Activity;
        static PRE_RAID: $Activity;
        static LAY_SPAWN: $Activity;
        static RAM: $Activity;
        constructor(arg0: string);
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $Activity}.
     */
    export type $Activity_ = RegistryTypes.Activity;
    export class $ScheduleBuilder$ActivityTransition {
    }
    export class $ScheduleBuilder {
        build(): $Schedule;
        changeActivityAt(arg0: number, arg1: $Activity_): $ScheduleBuilder;
        constructor(arg0: $Schedule_);
    }
    export interface $Activity extends RegistryMarked<RegistryTypes.ActivityTag, RegistryTypes.Activity> {}
    export class $Keyframe {
        getValue(): number;
        getTimeStamp(): number;
        constructor(arg0: number, arg1: number);
        get value(): number;
        get timeStamp(): number;
    }
    export interface $Schedule extends RegistryMarked<RegistryTypes.ScheduleTag, RegistryTypes.Schedule> {}
    export class $Timeline {
        getValueAt(arg0: number): number;
        addKeyframes(arg0: $Collection_<$Keyframe>): $Timeline;
        addKeyframe(arg0: number, arg1: number): $Timeline;
        getKeyframes(): $ImmutableList<$Keyframe>;
        constructor();
        get keyframes(): $ImmutableList<$Keyframe>;
    }
    export class $Schedule {
        static register(arg0: string): $ScheduleBuilder;
        ensureTimelineExistsFor(arg0: $Activity_): void;
        getAllTimelinesExceptFor(arg0: $Activity_): $List<$Timeline>;
        getActivityAt(arg0: number): $Activity;
        getTimelineFor(arg0: $Activity_): $Timeline;
        static WORK_START_TIME: number;
        static VILLAGER_DEFAULT: $Schedule;
        static VILLAGER_BABY: $Schedule;
        static SIMPLE: $Schedule;
        static TOTAL_WORK_TIME: number;
        static EMPTY: $Schedule;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Schedule}.
     */
    export type $Schedule_ = RegistryTypes.Schedule;
}
