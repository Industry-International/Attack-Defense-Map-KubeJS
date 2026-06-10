import { $MapProcessor } from "@package/xaero/map";

declare module "@package/xaero/map/task" {
    export class $MapRunnerTask {
        run(arg0: $MapProcessor): void;
        constructor();
    }
}
