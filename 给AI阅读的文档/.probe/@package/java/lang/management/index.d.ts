import { $CompositeData } from "@package/javax/management/openmbean";
import { $Thread$State, $StackTraceElement } from "@package/java/lang";

declare module "@package/java/lang/management" {
    export class $MonitorInfo extends $LockInfo {
        static from(arg0: $CompositeData): $MonitorInfo;
        getLockedStackDepth(): number;
        getLockedStackFrame(): $StackTraceElement;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $StackTraceElement);
        get lockedStackDepth(): number;
        get lockedStackFrame(): $StackTraceElement;
    }
    export class $LockInfo {
        static from(arg0: $CompositeData): $LockInfo;
        getClassName(): string;
        getIdentityHashCode(): number;
        constructor(arg0: string, arg1: number);
        get className(): string;
        get identityHashCode(): number;
    }
    export class $ThreadInfo {
        getStackTrace(): $StackTraceElement[];
        static from(arg0: $CompositeData): $ThreadInfo;
        getPriority(): number;
        isDaemon(): boolean;
        getThreadId(): number;
        getThreadName(): string;
        getThreadState(): $Thread$State;
        getLockName(): string;
        getLockOwnerName(): string;
        getLockOwnerId(): number;
        isSuspended(): boolean;
        isInNative(): boolean;
        getLockInfo(): $LockInfo;
        getLockedSynchronizers(): $LockInfo[];
        getBlockedTime(): number;
        getBlockedCount(): number;
        getWaitedTime(): number;
        getWaitedCount(): number;
        getLockedMonitors(): $MonitorInfo[];
        get stackTrace(): $StackTraceElement[];
        get priority(): number;
        get daemon(): boolean;
        get threadId(): number;
        get threadName(): string;
        get threadState(): $Thread$State;
        get lockName(): string;
        get lockOwnerName(): string;
        get lockOwnerId(): number;
        get suspended(): boolean;
        get inNative(): boolean;
        get lockInfo(): $LockInfo;
        get lockedSynchronizers(): $LockInfo[];
        get blockedTime(): number;
        get blockedCount(): number;
        get waitedTime(): number;
        get waitedCount(): number;
        get lockedMonitors(): $MonitorInfo[];
    }
}
