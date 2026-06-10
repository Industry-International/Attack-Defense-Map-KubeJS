import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/net/neoforged/neoforge/event/tick" {
    export class $PlayerTickEvent extends $PlayerEvent {
    }
    export class $ServerTickEvent$Post extends $ServerTickEvent {
        constructor(arg0: $BooleanSupplier_, arg1: $MinecraftServer);
    }
    export class $EntityTickEvent$Post extends $EntityTickEvent {
        constructor(arg0: $Entity);
    }
    export class $PlayerTickEvent$Post extends $PlayerTickEvent {
        constructor(arg0: $Player);
    }
    export class $ServerTickEvent$Pre extends $ServerTickEvent {
        constructor(arg0: $BooleanSupplier_, arg1: $MinecraftServer);
    }
    export class $ServerTickEvent extends $Event {
        getServer(): $MinecraftServer;
        hasTime(): boolean;
        get server(): $MinecraftServer;
    }
    export class $LevelTickEvent extends $Event {
        getLevel(): $Level;
        hasTime(): boolean;
        get level(): $Level;
    }
    export class $LevelTickEvent$Pre extends $LevelTickEvent {
        constructor(arg0: $BooleanSupplier_, arg1: $Level_);
    }
    export class $EntityTickEvent extends $EntityEvent {
    }
    export class $PlayerTickEvent$Pre extends $PlayerTickEvent {
        constructor(arg0: $Player);
    }
    export class $LevelTickEvent$Post extends $LevelTickEvent {
        constructor(arg0: $BooleanSupplier_, arg1: $Level_);
    }
    export class $EntityTickEvent$Pre extends $EntityTickEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity);
    }
}
