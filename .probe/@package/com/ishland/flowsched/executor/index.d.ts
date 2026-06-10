import { $Throwable, $Runnable_ } from "@package/java/lang";

declare module "@package/com/ishland/flowsched/executor" {
    export class $Task {
    }
    export interface $Task {
        priority(): number;
        run(arg0: $Runnable_): void;
        lockTokens(): $LockToken[];
        propagateException(arg0: $Throwable): void;
    }
    export class $LockToken {
    }
    export interface $LockToken {
    }
}
