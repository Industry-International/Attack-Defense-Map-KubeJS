import { $Duration_ } from "@package/java/time";
import { $Consumer_ } from "@package/java/util/function";
import { $Callable_, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $Record } from "@package/java/lang";
import { $TimeSource_ } from "@package/net/minecraft/util";

declare module "@package/com/mojang/realmsclient/gui/task" {
    export class $DataFetcher$Subscription {
        reset(): void;
        tick(): void;
        subscribe<T>(arg0: $DataFetcher$Task<T>, arg1: $Consumer_<T>): void;
        forceUpdate(): void;
        constructor(arg0: $DataFetcher);
    }
    export class $DataFetcher {
        createTask<T>(arg0: string, arg1: $Callable_<T>, arg2: $Duration_, arg3: $RepeatedDelayStrategy): $DataFetcher$Task<T>;
        createSubscription(): $DataFetcher$Subscription;
        constructor(arg0: $Executor_, arg1: $TimeUnit_, arg2: $TimeSource_);
    }
    export class $DataFetcher$SuccessfulComputationResult<T> extends $Record {
    }
    export class $DataFetcher$ComputationResult<T> extends $Record {
    }
    export class $DataFetcher$SubscribedTask<T> {
    }
    export class $RepeatedDelayStrategy {
        static exponentialBackoff(arg0: number): $RepeatedDelayStrategy;
        static CONSTANT: $RepeatedDelayStrategy;
    }
    export interface $RepeatedDelayStrategy {
        delayCyclesAfterFailure(): number;
        delayCyclesAfterSuccess(): number;
    }
    export class $DataFetcher$Task<T> {
        reset(): void;
    }
}
