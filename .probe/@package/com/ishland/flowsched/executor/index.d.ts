import { $Throwable, $Runnable_ } from "@package/java/lang";

declare module "@package/com/ishland/flowsched/executor" {
    export class $Task {
    }
    export interface $Task {
        priority(): number;
        run(arg0: $Runnable_): void;
        propagateException(arg0: $Throwable): void;
        lockTokens(): $LockToken[];
    }
    export class $LockToken {
    }
    export interface $LockToken {
    }
}
