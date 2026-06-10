import { $Consumer_ } from "@package/java/util/function";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture, $CompletionStage, $Executor } from "@package/java/util/concurrent";
import { $Object, $IllegalStateException, $Throwable, $Runnable_, $Runnable } from "@package/java/lang";
import { $Completable, $Scheduler } from "@package/io/reactivex/rxjava3/core";

declare module "@package/com/ishland/flowsched/scheduler" {
    export class $ItemHolder<K, V, Ctx, UserData> {
        isOpen(): boolean;
        getKey(): K;
        getFlags(): number;
        getItem(): $AtomicReference<V>;
        getUserData(): $AtomicReference<UserData>;
        getStatus(): $ItemStatus<K, V, Ctx>;
        clearFlag(flag: number): void;
        setFlag(flag: number): void;
        getDependencies(status: $ItemStatus<K, V, Ctx>): $KeyStatusPair<K, V, Ctx>[];
        setDependencies(status: $ItemStatus<K, V, Ctx>, dependencies: $KeyStatusPair<K, V, Ctx>[]): void;
        removeTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        markDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        addTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        setStatus(status: $ItemStatus<K, V, Ctx>, isCancellation: boolean): boolean;
        tryCancelUpgradeAction(): void;
        addDependencyTicket(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>, key: K, status: $ItemStatus<K, V, Ctx>, callback: $Runnable_): void;
        submitUpgradeAction(signaller: $CancellationSignaller, status: $ItemStatus<K, V, Ctx>): void;
        consolidateMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        removeDependencyTicket(key: K, status: $ItemStatus<K, V, Ctx>): void;
        getCriticalSectionExecutor(): $Executor;
        getFutureForStatus0(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        cleanupDependencies(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        submitOpListener(runnable: $Runnable_): void;
        getFutureForStatus(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        holdsDependency(): boolean;
        subscribeOp(op: $Completable): void;
        isDependencyDirty(): boolean;
        tryMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): boolean;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        upgradingStatusTo(): $ItemStatus<K, V, Ctx>;
        getOpFuture(): $CompletableFuture<void>;
        getCriticalSectionScheduler(): $Scheduler;
        isBusy(): boolean;
        submitOp(op: $CompletionStage<void>): void;
        executeCriticalSectionAndBusy(command: $Runnable_): void;
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
        get dependencyDirty(): boolean;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get opFuture(): $CompletableFuture<void>;
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
        getDependenciesToRemove(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getDependenciesToAdd(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        postUpgradeToThis(arg0: Ctx): $Completable;
        upgradeToThis(arg0: Ctx, arg1: $Cancellable): $Completable;
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
        getHolder(key: K): $ItemHolder<K, V, Ctx, UserData>;
        itemCount(): number;
        removeTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>): void;
        removeTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>): void;
        addTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
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
