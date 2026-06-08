import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/replaymod/core/versions/scheduler" {
    export class $Scheduler {
    }
    export interface $Scheduler {
        runPostStartup(arg0: $Runnable_): void;
        runLaterWithoutLock(arg0: $Runnable_): void;
        runSync(arg0: $Runnable_): void;
        runTasks(): void;
        runLater(arg0: $Runnable_): void;
    }
}
