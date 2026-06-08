import { $Level_ } from "@package/net/minecraft/world/level";
import { $ScheduleWaitCondition } from "@package/com/simibubi/create/content/trains/schedule/condition";
import { $GlobalTrainDisplayData$TrainDeparturePrediction } from "@package/com/simibubi/create/content/trains/display";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $ScheduleInstruction } from "@package/com/simibubi/create/content/trains/schedule/destination";
import { $List, $List_, $Collection } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $AccessorScheduleRuntime } from "@package/com/railwayteam/railways/mixin";
import { $Supplier } from "@package/java/util/function";
import { $DiscoveredPath } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as destination from "@package/com/simibubi/create/content/trains/schedule/destination";
export * as condition from "@package/com/simibubi/create/content/trains/schedule/condition";

declare module "@package/com/simibubi/create/content/trains/schedule" {
    export class $ScheduleRuntime$State extends $Enum<$ScheduleRuntime$State> {
        static values(): $ScheduleRuntime$State[];
        static valueOf(arg0: string): $ScheduleRuntime$State;
        static IN_TRANSIT: $ScheduleRuntime$State;
        static PRE_TRANSIT: $ScheduleRuntime$State;
        static POST_TRANSIT: $ScheduleRuntime$State;
    }
    /**
     * Values that may be interpreted as {@link $ScheduleRuntime$State}.
     */
    export type $ScheduleRuntime$State_ = "pre_transit" | "in_transit" | "post_transit";
    export class $ScheduleEntry {
        clone(arg0: $HolderLookup$Provider): $ScheduleEntry;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleEntry;
        instruction: $ScheduleInstruction;
        conditions: $List<$List<$ScheduleWaitCondition>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleEntry>;
        constructor();
        constructor(arg0: $ScheduleInstruction, arg1: $List_<$List_<$ScheduleWaitCondition>>);
    }
    export class $Schedule {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Schedule;
        static getTypeOptions<T>(arg0: $List_<$Pair<$ResourceLocation_, T>>): $List<$Component>;
        entries: $List<$ScheduleEntry>;
        static CONDITION_TYPES: $List<$Pair<$ResourceLocation, $Supplier<$ScheduleWaitCondition>>>;
        static INSTRUCTION_TYPES: $List<$Pair<$ResourceLocation, $Supplier<$ScheduleInstruction>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Schedule>;
        cyclic: boolean;
        savedProgress: number;
        constructor(arg0: $List_<$ScheduleEntry>, arg1: boolean, arg2: number);
        constructor();
    }
    export class $ScheduleRuntime implements $AccessorScheduleRuntime {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        tick(arg0: $Level_): void;
        submitPredictions(): $Collection<$GlobalTrainDisplayData$TrainDeparturePrediction>;
        getSchedule(): $Schedule;
        setSchedulePresentClientside(arg0: boolean): void;
        destinationReached(): void;
        setSchedule(arg0: $Schedule, arg1: boolean): void;
        startCurrentInstruction(arg0: $Level_): $DiscoveredPath;
        getWaitingStatus(arg0: $Level_): $MutableComponent;
        returnSchedule(arg0: $HolderLookup$Provider): $ItemStack;
        discardSchedule(): void;
        startCooldown(): void;
        transitInterrupted(): void;
        tickConditions(arg0: $Level_): void;
        setCooldown(arg0: number): void;
        getTrain(): $Train;
        paused: boolean;
        predictionTicks: $List<number>;
        currentEntry: number;
        completed: boolean;
        displayLinkUpdateRequested: boolean;
        schedule: $Schedule;
        currentTitle: string;
        conditionContext: $List<$CompoundTag>;
        isAutoSchedule: boolean;
        state: $ScheduleRuntime$State;
        conditionProgress: $List<number>;
        train: $Train;
        ticksInTransit: number;
        constructor(arg0: $Train);
        set schedulePresentClientside(value: boolean);
        set cooldown(value: number);
    }
}
