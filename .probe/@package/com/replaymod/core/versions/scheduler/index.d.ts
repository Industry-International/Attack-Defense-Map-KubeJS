import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/replaymod/core/versions/scheduler" {
    export class $Scheduler {
    }
    export interface $Scheduler {
        runLaterWithoutLock(arg0: $Runnable_): void;
        runLater(arg0: $Runnable_): void;
        runTasks(): void;
        runSync(arg0: $Runnable_): void;
        runPostStartup(arg0: $Runnable_): void;
    }
}
