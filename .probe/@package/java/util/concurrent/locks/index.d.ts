import { $Serializable } from "@package/java/io";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Thread } from "@package/java/lang";
import { $Date } from "@package/java/util";

declare module "@package/java/util/concurrent/locks" {
    export class $ReentrantLock implements $Lock, $Serializable {
        lock(): void;
        unlock(): void;
        newCondition(): $Condition;
        lockInterruptibly(): void;
        tryLock(): boolean;
        tryLock(arg0: number, arg1: $TimeUnit_): boolean;
        getHoldCount(): number;
        isLocked(): boolean;
        hasQueuedThreads(): boolean;
        getQueueLength(): number;
        hasWaiters(arg0: $Condition): boolean;
        getWaitQueueLength(arg0: $Condition): number;
        isHeldByCurrentThread(): boolean;
        isFair(): boolean;
        hasQueuedThread(arg0: $Thread): boolean;
        constructor();
        constructor(arg0: boolean);
        get holdCount(): number;
        get locked(): boolean;
        get queueLength(): number;
        get heldByCurrentThread(): boolean;
        get fair(): boolean;
    }
    export class $Condition {
    }
    export interface $Condition {
        await(arg0: number, arg1: $TimeUnit_): boolean;
        await(): void;
        signal(): void;
        signalAll(): void;
        awaitUninterruptibly(): void;
        awaitNanos(arg0: number): number;
        awaitUntil(arg0: $Date): boolean;
    }
    export class $Lock {
    }
    export interface $Lock {
        lock(): void;
        unlock(): void;
        newCondition(): $Condition;
        lockInterruptibly(): void;
        tryLock(): boolean;
        tryLock(arg0: number, arg1: $TimeUnit_): boolean;
    }
}
