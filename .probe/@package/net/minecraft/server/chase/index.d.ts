import { $MinecraftServer } from "@package/net/minecraft/server";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/server/chase" {
    export class $ChaseServer {
        start(): void;
        stop(): void;
        constructor(arg0: string, arg1: number, arg2: $PlayerList, arg3: number);
    }
    export class $ChaseClient {
        run(): void;
        start(): void;
        stop(): void;
        constructor(arg0: string, arg1: number, arg2: $MinecraftServer);
    }
    export class $ChaseClient$TeleportTarget extends $Record {
    }
    export class $ChaseServer$PlayerPosition extends $Record {
    }
}
