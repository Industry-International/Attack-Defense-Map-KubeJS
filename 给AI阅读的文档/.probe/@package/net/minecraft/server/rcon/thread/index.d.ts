import { $ServerInterface } from "@package/net/minecraft/server";
import { $Socket } from "@package/java/net";
import { $Runnable, $Thread } from "@package/java/lang";

declare module "@package/net/minecraft/server/rcon/thread" {
    export class $RconThread extends $GenericThread {
        static create(arg0: $ServerInterface): $RconThread;
        running: boolean;
        name: string;
        thread: $Thread;
    }
    export class $RconClient extends $GenericThread {
        running: boolean;
        name: string;
        thread: $Thread;
        constructor(arg0: $ServerInterface, arg1: string, arg2: $Socket);
    }
    export class $QueryThreadGs4 extends $GenericThread {
        static create(arg0: $ServerInterface): $QueryThreadGs4;
        running: boolean;
        name: string;
        thread: $Thread;
    }
    export class $GenericThread implements $Runnable {
        start(): boolean;
        stop(): void;
        isRunning(): boolean;
        running: boolean;
        name: string;
        thread: $Thread;
        constructor(arg0: string);
    }
    export class $QueryThreadGs4$RequestChallenge {
    }
}
