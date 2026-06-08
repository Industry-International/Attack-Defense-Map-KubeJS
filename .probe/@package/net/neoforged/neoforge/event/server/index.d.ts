import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/net/neoforged/neoforge/event/server" {
    export class $ServerLifecycleEvent extends $Event {
        getServer(): $MinecraftServer;
        constructor(arg0: $MinecraftServer);
        get server(): $MinecraftServer;
    }
    export class $ServerStoppedEvent extends $ServerLifecycleEvent {
        constructor(arg0: $MinecraftServer);
    }
    export class $ServerStartingEvent extends $ServerLifecycleEvent {
        constructor(arg0: $MinecraftServer);
    }
    export class $ServerAboutToStartEvent extends $ServerLifecycleEvent {
        constructor(arg0: $MinecraftServer);
    }
    export class $ServerStoppingEvent extends $ServerLifecycleEvent {
        constructor(arg0: $MinecraftServer);
    }
    export class $ServerStartedEvent extends $ServerLifecycleEvent {
        constructor(arg0: $MinecraftServer);
    }
}
