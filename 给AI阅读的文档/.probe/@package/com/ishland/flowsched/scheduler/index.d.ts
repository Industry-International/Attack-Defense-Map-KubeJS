import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture, $CompletionStage, $Executor } from "@package/java/util/concurrent";
import { $Object, $IllegalStateException, $Runnable_, $Runnable } from "@package/java/lang";
import { $Completable, $Scheduler } from "@package/io/reactivex/rxjava3/core";

declare module "@package/com/ishland/flowsched/scheduler" {
    export class $ItemHolder<K, V, Ctx, UserData> {
        isOpen(): boolean;
        getKey(): K;
        getFlags(): number;
        getItem(): $AtomicReference<V>;
        getStatus(): $ItemStatus<K, V, Ctx>;
        addTicket(targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        getUserData(): $AtomicReference<UserData>;
        getDependencies(status: $ItemStatus<K, V, Ctx>): $KeyStatusPair<K, V, Ctx>[];
        setDependencies(status: $ItemStatus<K, V, Ctx>, dependencies: $KeyStatusPair<K, V, Ctx>[]): void;
        getFutureForStatus0(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        clearFlag(flag: number): void;
        setFlag(flag: number): void;
        removeTicket(targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        scheduleFlushDependencyCache(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        executeCriticalSectionAndBusy(command: $Runnable_): void;
        markDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        getCriticalSectionExecutor(): $Executor;
        removeDependencyTicket(key: K, status: $ItemStatus<K, V, Ctx>): void;
        consolidateMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        addDependencyTicket(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>, key: K, status: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        setStatus(status: $ItemStatus<K, V, Ctx>, isCancellation: boolean): boolean;
        submitOpListener(runnable: $Runnable_): void;
        isBusy(): boolean;
        submitOp(op: $CompletionStage<void>): void;
        swapTicket(origStatus: $ItemStatus<K, V, Ctx>, orig: $ItemTicket, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        getFutureForStatus(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        changingStatusTo(): $ItemStatus<K, V, Ctx>;
        tryCancelAction(): void;
        subscribeOp(op: $Completable): void;
        holdsDependency(): boolean;
        isDependencyDirty(): boolean;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        submitAction(cancellation: $Cancellable, status: $ItemStatus<K, V, Ctx>): void;
        tryMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): boolean;
        getOpFuture(): $CompletableFuture<void>;
        finishAction(): void;
        getCriticalSectionScheduler(): $Scheduler;
        flushDependencyCache0(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        static FLAG_HAVE_RETRIED: number;
        static UNLOADED_EXCEPTION: $IllegalStateException;
        static FLAG_REMOVED: number;
        static FLAG_BROKEN: number;
        get open(): boolean;
        get key(): K;
        get flags(): number;
        get item(): $AtomicReference<V>;
        get userData(): $AtomicReference<UserData>;
        set flag(value: number);
        get criticalSectionExecutor(): $Executor;
        get busy(): boolean;
        get dependencyDirty(): boolean;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get opFuture(): $CompletableFuture<void>;
        get criticalSectionScheduler(): $Scheduler;
    }
    export class $ItemStatus<K, V, Ctx> {
        static EMPTY_DEPENDENCIES: $KeyStatusPair<any, any, any>[];
    }
    export interface $ItemStatus<K, V, Ctx> {
        ordinal(): number;
        getNext(): $ItemStatus<K, V, Ctx>;
        getDependencies(arg0: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getPrev(): $ItemStatus<K, V, Ctx>;
        getDependenciesToRemove(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getDependenciesToAdd(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        preDowngradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        upgradeToThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        postUpgradeToThis(arg0: Ctx): $Completable;
        downgradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        getAllStatuses(): $ItemStatus<K, V, Ctx>[];
        get next(): $ItemStatus<K, V, Ctx>;
        get prev(): $ItemStatus<K, V, Ctx>;
        get allStatuses(): $ItemStatus<K, V, Ctx>[];
    }
    export class $ItemTicket$TicketType {
        getDescription(): string;
        static DEPENDENCY: $ItemTicket$TicketType;
        static EXTERNAL: $ItemTicket$TicketType;
        constructor(description: string);
        get description(): string;
    }
    export class $StatusAdvancingScheduler<K, V, Ctx, UserData> {
        addTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        getHolder(key: K): $ItemHolder<K, V, Ctx, UserData>;
        removeTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>): void;
        removeTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>): void;
        itemCount(): number;
        addTicket0(key: K, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): $ItemHolder<K, V, Ctx, UserData>;
        swapTicket(key: K, origStatus: $ItemStatus<K, V, Ctx>, orig: $ItemTicket, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        removeTicket0(key: K, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        static NO_OP: $Runnable;
    }
    export class $ItemTicket {
        getType(): $ItemTicket$TicketType;
        getSource(): $Object;
        consumeCallback(): void;
        constructor(type: $ItemTicket$TicketType, source: $Object, callback: $Runnable_);
        constructor(type: $ItemTicket$TicketType, source: $Object, callback: $Runnable_, consumptions: number);
        get type(): $ItemTicket$TicketType;
        get source(): $Object;
    }
    export class $Cancellable {
        setup(onCancel: $Runnable_): void;
        cancel(): boolean;
        complete(): boolean;
        isCancelled(): boolean;
        isCompleted(): boolean;
        constructor();
        set up(value: $Runnable_);
        get cancelled(): boolean;
        get completed(): boolean;
    }
    export class $KeyStatusPair<K, V, Ctx> {
        key(): K;
        status(): $ItemStatus<K, V, Ctx>;
        constructor(key: K, status: $ItemStatus<K, V, Ctx>);
    }
}
