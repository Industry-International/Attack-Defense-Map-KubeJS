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
        constructor(name: string);
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
        changeActivityAt(duration: number, activity: $Activity_): $ScheduleBuilder;
        constructor(schedule: $Schedule_);
    }
    export interface $Activity extends RegistryMarked<RegistryTypes.ActivityTag, RegistryTypes.Activity> {}
    export class $Keyframe {
        getValue(): number;
        getTimeStamp(): number;
        constructor(timestamp: number, value: number);
        get value(): number;
        get timeStamp(): number;
    }
    export interface $Schedule extends RegistryMarked<RegistryTypes.ScheduleTag, RegistryTypes.Schedule> {}
    export class $Timeline {
        getValueAt(dayTime: number): number;
        addKeyframes(frames: $Collection_<$Keyframe>): $Timeline;
        addKeyframe(duration: number, active: number): $Timeline;
        getKeyframes(): $ImmutableList<$Keyframe>;
        constructor();
        get keyframes(): $ImmutableList<$Keyframe>;
    }
    export class $Schedule {
        ensureTimelineExistsFor(activity: $Activity_): void;
        getAllTimelinesExceptFor(activity: $Activity_): $List<$Timeline>;
        static register(key: string): $ScheduleBuilder;
        getTimelineFor(activity: $Activity_): $Timeline;
        getActivityAt(dayTime: number): $Activity;
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
