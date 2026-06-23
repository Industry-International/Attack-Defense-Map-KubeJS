import { $MinecraftServer } from "@package/net/minecraft/server";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/server/chase" {
    export class $ChaseServer {
        start(): void;
        stop(): void;
        constructor(serverBindAddress: string, serverPort: number, playerList: $PlayerList, broadcastIntervalMs: number);
    }
    export class $ChaseClient {
        run(): void;
        start(): void;
        stop(): void;
        constructor(serverHost: string, serverPort: number, server: $MinecraftServer);
    }
    export class $ChaseClient$TeleportTarget extends $Record {
    }
    export class $ChaseServer$PlayerPosition extends $Record {
    }
}
