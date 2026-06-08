import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag, $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Queue, $List, $List_, $Comparator } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $LevelChunkTicksExtension } from "@package/dev/ryanhcode/sable/mixinterface/plot/serialization";
import { $LongPredicate_, $BiConsumer_, $Supplier_, $Function_, $Consumer_, $Predicate_, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ISimpleTickScheduler, $IChunkTickScheduler } from "@package/com/ishland/c2me/base/mixin/access";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/ticks" {
    export class $ContainerSingleItem {
    }
    export interface $ContainerSingleItem extends $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        clearContent(): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        removeTheItem(): $ItemStack;
        splitTheItem(arg0: number): $ItemStack;
        setTheItem(arg0: $ItemStack_): void;
        getTheItem(): $ItemStack;
        get empty(): boolean;
        get containerSize(): number;
    }
    export class $ScheduledTick<T> extends $Record {
        priority(): $TickPriority;
        type(): T;
        pos(): $BlockPos;
        static probe<T>(arg0: T, arg1: $BlockPos_): $ScheduledTick<T>;
        triggerTick(): number;
        subTickOrder(): number;
        static INTRA_TICK_DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$ScheduledTick<never>>;
        static DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: number);
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_, arg4: number);
    }
    export class $LevelTicks<T> implements $LevelTickAccess<T> {
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        tick(arg0: number, arg1: number, arg2: $BiConsumer_<$BlockPos, T>): void;
        willTickThisTick(arg0: $BlockPos_, arg1: T): boolean;
        addContainer(arg0: $ChunkPos, arg1: $LevelChunkTicks<T>): void;
        removeContainer(arg0: $ChunkPos): void;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        copyArea(arg0: $BoundingBox, arg1: $Vec3i): void;
        clearArea(arg0: $BoundingBox): void;
        copyAreaFrom(arg0: $LevelTicks<T>, arg1: $BoundingBox, arg2: $Vec3i): void;
        constructor(arg0: $LongPredicate_, arg1: $Supplier_<$ProfilerFiller>);
    }
    export class $TickPriority extends $Enum<$TickPriority> {
        static values(): $TickPriority[];
        static valueOf(arg0: string): $TickPriority;
        getValue(): number;
        static byValue(arg0: number): $TickPriority;
        static EXTREMELY_LOW: $TickPriority;
        static VERY_HIGH: $TickPriority;
        static HIGH: $TickPriority;
        static LOW: $TickPriority;
        static VERY_LOW: $TickPriority;
        static EXTREMELY_HIGH: $TickPriority;
        static NORMAL: $TickPriority;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $TickPriority}.
     */
    export type $TickPriority_ = "extremely_high" | "very_high" | "high" | "normal" | "low" | "very_low" | "extremely_low";
    export class $LevelTicks$PosAndContainerConsumer<T> {
    }
    export interface $LevelTicks$PosAndContainerConsumer<T> {
    }
    /**
     * Values that may be interpreted as {@link $LevelTicks$PosAndContainerConsumer}.
     */
    export type $LevelTicks$PosAndContainerConsumer_<T> = (() => void);
    export class $TickAccess<T> {
    }
    export interface $TickAccess<T> {
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
    }
    export class $BlackholeTickAccess {
        static emptyLevelList<T>(): $LevelTickAccess<T>;
        static emptyContainer<T>(): $TickContainerAccess<T>;
        constructor();
    }
    export class $WorldGenTickAccess<T> implements $LevelTickAccess<T> {
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        willTickThisTick(arg0: $BlockPos_, arg1: T): boolean;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        constructor(arg0: $Function_<$BlockPos, $TickContainerAccess<T>>);
    }
    export class $LevelTickAccess<T> {
    }
    export interface $LevelTickAccess<T> extends $TickAccess<T> {
        willTickThisTick(arg0: $BlockPos_, arg1: T): boolean;
    }
    export class $LevelChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $LevelChunkTicksExtension<any>, $IChunkTickScheduler<any> {
        static load<T>(arg0: $ListTag_, arg1: $Function_<string, (T) | undefined>, arg2: $ChunkPos): $LevelChunkTicks<T>;
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        save(arg0: number, arg1: $Function_<T, string>): $ListTag;
        peek(): $ScheduledTick<T>;
        removeIf(arg0: $Predicate_<$ScheduledTick<T>>): void;
        poll(): $ScheduledTick<T>;
        getAll(): $Stream<$ScheduledTick<T>>;
        unpack(arg0: number): void;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        setOnTickAdded(arg0: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>>): void;
        sable$copy(arg0: $LevelChunkTicks<any>): void;
        getTicks(): $List<$SavedTick<T>>;
        getTickQueue(): $Queue<$ScheduledTick<T>>;
        constructor();
        constructor(arg0: $List_<$SavedTick_<T>>);
        get all(): $Stream<$ScheduledTick<T>>;
        set onTickAdded(value: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>>);
        get ticks(): $List<$SavedTick<T>>;
        get tickQueue(): $Queue<$ScheduledTick<T>>;
    }
    export class $TickContainerAccess<T> {
    }
    export interface $TickContainerAccess<T> extends $TickAccess<T> {
    }
    export class $SerializableTickContainer<T> {
    }
    export interface $SerializableTickContainer<T> {
        save(arg0: number, arg1: $Function_<T, string>): $Tag;
    }
    /**
     * Values that may be interpreted as {@link $SerializableTickContainer}.
     */
    export type $SerializableTickContainer_<T> = ((arg0: number, arg1: $Function<T, string>) => $Tag_);
    export class $ProtoChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $ISimpleTickScheduler<any> {
        static load<T>(arg0: $ListTag_, arg1: $Function_<string, (T) | undefined>, arg2: $ChunkPos): $ProtoChunkTicks<T>;
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        save(arg0: number, arg1: $Function_<T, string>): $Tag;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        scheduledTicks(): $List<$SavedTick<T>>;
        getScheduledTicks(): $List<$SavedTick<T>>;
        constructor();
    }
    export class $ContainerSingleItem$BlockContainerSingleItem {
    }
    export interface $ContainerSingleItem$BlockContainerSingleItem extends $ContainerSingleItem {
        stillValid(arg0: $Player): boolean;
        getContainerBlockEntity(): $BlockEntity;
        get containerBlockEntity(): $BlockEntity;
    }
    export class $SavedTick<T> extends $Record {
        priority(): $TickPriority;
        type(): T;
        delay(): number;
        save(arg0: $Function_<T, string>): $CompoundTag;
        pos(): $BlockPos;
        static probe<T>(arg0: T, arg1: $BlockPos_): $SavedTick<T>;
        unpack(arg0: number, arg1: number): $ScheduledTick<T>;
        static loadTickList<T>(arg0: $ListTag_, arg1: $Function_<string, (T) | undefined>, arg2: $ChunkPos, arg3: $Consumer_<$SavedTick<T>>): void;
        static loadTick<T>(arg0: $CompoundTag_, arg1: $Function_<string, (T) | undefined>): ($SavedTick<T>) | undefined;
        static saveTick<T>(arg0: $ScheduledTick_<T>, arg1: $Function_<T, string>, arg2: number): $CompoundTag;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$SavedTick<never>>;
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_);
    }
}
