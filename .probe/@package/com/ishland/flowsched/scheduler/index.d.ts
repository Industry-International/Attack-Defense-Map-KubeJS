import { $Consumer_ } from "@package/java/util/function";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture, $CompletionStage, $Executor } from "@package/java/util/concurrent";
import { $Object, $IllegalStateException, $Throwable, $Runnable_, $Runnable } from "@package/java/lang";
import { $Completable, $Scheduler } from "@package/io/reactivex/rxjava3/core";

declare module "@package/com/ishland/flowsched/scheduler" {
    export class $ItemHolder<K, V, Ctx, UserData> {
        executeCriticalSectionAndBusy(command: $Runnable_): void;
        isOpen(): boolean;
        getKey(): K;
        getFlags(): number;
        getItem(): $AtomicReference<V>;
        getUserData(): $AtomicReference<UserData>;
        setDependencies(status: $ItemStatus<K, V, Ctx>, dependencies: $KeyStatusPair<K, V, Ctx>[]): void;
        getStatus(): $ItemStatus<K, V, Ctx>;
        getDependencies(status: $ItemStatus<K, V, Ctx>): $KeyStatusPair<K, V, Ctx>[];
        setStatus(status: $ItemStatus<K, V, Ctx>, isCancellation: boolean): boolean;
        setFlag(flag: number): void;
        clearFlag(flag: number): void;
        markDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        addTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        removeTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        getFutureForStatus0(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        cleanupDependencies(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        submitOpListener(runnable: $Runnable_): void;
        consolidateMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        tryCancelUpgradeAction(): void;
        getFutureForStatus(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        holdsDependency(): boolean;
        isDependencyDirty(): boolean;
        upgradingStatusTo(): $ItemStatus<K, V, Ctx>;
        subscribeOp(op: $Completable): void;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        tryMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): boolean;
        getOpFuture(): $CompletableFuture<void>;
        submitUpgradeAction(signaller: $CancellationSignaller, status: $ItemStatus<K, V, Ctx>): void;
        addDependencyTicket(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>, key: K, status: $ItemStatus<K, V, Ctx>, callback: $Runnable_): void;
        removeDependencyTicket(key: K, status: $ItemStatus<K, V, Ctx>): void;
        getCriticalSectionExecutor(): $Executor;
        getCriticalSectionScheduler(): $Scheduler;
        isBusy(): boolean;
        submitOp(op: $CompletionStage<void>): void;
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
        get dependencyDirty(): boolean;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get opFuture(): $CompletableFuture<void>;
        get criticalSectionExecutor(): $Executor;
        get criticalSectionScheduler(): $Scheduler;
        get busy(): boolean;
    }
    export class $ItemStatus<K, V, Ctx> {
        static EMPTY_DEPENDENCIES: $KeyStatusPair<any, any, any>[];
    }
    export interface $ItemStatus<K, V, Ctx> {
        ordinal(): number;
        getNext(): $ItemStatus<K, V, Ctx>;
        getDependencies(arg0: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getPrev(): $ItemStatus<K, V, Ctx>;
        preDowngradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        getDependenciesToAdd(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getDependenciesToRemove(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getAllStatuses(): $ItemStatus<K, V, Ctx>[];
        upgradeToThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        postUpgradeToThis(arg0: Ctx): $Completable;
        downgradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
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
        getHolder(key: K): $ItemHolder<K, V, Ctx, UserData>;
        itemCount(): number;
        addTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        removeTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>): void;
        removeTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>): void;
        static NO_OP: $Runnable;
    }
    export class $ItemTicket<K, V, Ctx> {
        getType(): $ItemTicket$TicketType;
        getSource(): $Object;
        consumeCallback(): void;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        constructor(type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_);
        get type(): $ItemTicket$TicketType;
        get source(): $Object;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
    }
    export class $CancellationSignaller {
        cancel(): void;
        addListener(callback: $Consumer_<$Throwable>): void;
        fireComplete(throwable: $Throwable): void;
        static COMPLETED: $CancellationSignaller;
        constructor(cancel: $Consumer_<$CancellationSignaller>);
    }
    export class $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        constructor();
        get cancelled(): boolean;
    }
    export class $KeyStatusPair<K, V, Ctx> {
        key(): K;
        status(): $ItemStatus<K, V, Ctx>;
        constructor(key: K, status: $ItemStatus<K, V, Ctx>);
    }
}
