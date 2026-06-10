import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $Runnable, $Thread } from "@package/java/lang";

declare module "@package/xaero/map/executor" {
    export class $Executor extends $BlockableEventLoop<$Runnable> {
        constructor(arg0: string, arg1: $Thread);
    }
}
