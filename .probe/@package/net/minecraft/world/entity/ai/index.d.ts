import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType, $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Logger } from "@package/org/slf4j";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $BrainAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $Object } from "@package/java/lang";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> implements $BrainAccessor<any> {
        static provider<E extends $LivingEntity>(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(arg0: $MemoryModuleType_<U>, arg1: (U) | undefined): void;
        setMemory<U>(arg0: $MemoryModuleType_<U>, arg1: U): void;
        isActive(arg0: $Activity_): boolean;
        setMemoryInternal<U>(arg0: $MemoryModuleType_<U>, arg1: ($ExpirableValue<never>) | undefined): void;
        tick(arg0: $ServerLevel, arg1: $Object): void;
        getSchedule(): $Schedule;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        static codec<E extends $LivingEntity>(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        addActivityAndRemoveMemoriesWhenStopped(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, arg2: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, arg3: $Set_<$MemoryModuleType_<never>>): void;
        hasMemoryValue(arg0: $MemoryModuleType_<never>): boolean;
        removeAllBehaviors(): void;
        clearMemories(): void;
        serializeStart<T>(arg0: $DynamicOps<T>): $DataResult<T>;
        getMemory<U>(arg0: $MemoryModuleType_<U>): (U) | undefined;
        memories(): $Stream<$Brain$MemoryValue<never>>;
        getTimeUntilExpiry<U>(arg0: $MemoryModuleType_<U>): number;
        eraseMemory<U>(arg0: $MemoryModuleType_<U>): void;
        checkMemory(arg0: $MemoryModuleType_<never>, arg1: $MemoryStatus_): boolean;
        setActiveActivityToFirstValid(arg0: $List_<$Activity_>): void;
        setActiveActivityIfPossible(arg0: $Activity_): void;
        isMemoryValue<U>(arg0: $MemoryModuleType_<U>, arg1: U): boolean;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<$BehaviorControl<$Object>>;
        createPriorityPairs(arg0: number, arg1: $ImmutableList<$BehaviorControl<$Object>>): $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>;
        getMemoryInternal<U>(arg0: $MemoryModuleType_<U>): (U) | undefined;
        stopAll(arg0: $ServerLevel, arg1: $Object): void;
        addActivityAndRemoveMemoryWhenStopped(arg0: $Activity_, arg1: number, arg2: $ImmutableList<$BehaviorControl<$Object>>, arg3: $MemoryModuleType_<never>): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        setMemoryWithExpiry<U>(arg0: $MemoryModuleType_<U>, arg1: U, arg2: number): void;
        addActivityWithConditions(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, arg2: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        copyWithoutBehaviors(): $Brain<$Object>;
        updateActivityFromSchedule(arg0: number, arg1: number): void;
        addActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>): void;
        addActivity(arg0: $Activity_, arg1: number, arg2: $ImmutableList<$BehaviorControl<$Object>>): void;
        setDefaultActivity(arg0: $Activity_): void;
        setCoreActivities(arg0: $Set_<$Activity_>): void;
        useDefaultActivity(): void;
        setSchedule(arg0: $Schedule_): void;
        getSensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
        static LOGGER: $Logger;
        constructor(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<$Object>>>, arg2: $ImmutableList<$Brain$MemoryValue<never>>, arg3: $Supplier_<$Codec<$Brain<$Object>>>);
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        set activeActivityIfPossible(value: $Activity_);
        get activeActivities(): $Set<$Activity>;
        get runningBehaviors(): $List<$BehaviorControl<$Object>>;
        get activeNonCoreActivity(): ($Activity) | undefined;
        set defaultActivity(value: $Activity_);
        set coreActivities(value: $Set_<$Activity_>);
        get sensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        get availableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(arg0: $Dynamic<never>): $Brain<E>;
        constructor(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>);
    }
}
