import { $ServerInterface } from "@package/net/minecraft/server";
import { $Socket } from "@package/java/net";
import { $Runnable, $Thread } from "@package/java/lang";

declare module "@package/net/minecraft/server/rcon/thread" {
    export class $RconThread extends $GenericThread {
        static create(serverInterface: $ServerInterface): $RconThread;
        running: boolean;
        name: string;
        thread: $Thread;
    }
    export class $RconClient extends $GenericThread {
        running: boolean;
        name: string;
        thread: $Thread;
        constructor(serverInterface: $ServerInterface, rconPassword: string, client: $Socket);
    }
    export class $QueryThreadGs4 extends $GenericThread {
        static create(serverInterface: $ServerInterface): $QueryThreadGs4;
        running: boolean;
        name: string;
        thread: $Thread;
    }
    export class $GenericThread implements $Runnable {
        /**
         * Returns `true` if the Thread is running, `false` otherwise.
         */
        start(): boolean;
        stop(): void;
        /**
         * Returns `true` if the Thread is running, `false` otherwise.
         */
        isRunning(): boolean;
        running: boolean;
        name: string;
        thread: $Thread;
        constructor(name: string);
    }
    export class $QueryThreadGs4$RequestChallenge {
    }
}
