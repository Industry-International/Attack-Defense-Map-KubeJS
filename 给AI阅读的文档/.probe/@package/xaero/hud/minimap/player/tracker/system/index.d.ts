import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $Iterator, $UUID } from "@package/java/util";

declare module "@package/xaero/hud/minimap/player/tracker/system" {
    export class $IRenderedPlayerTracker<P> {
    }
    export interface $IRenderedPlayerTracker<P> {
        getReader(): $ITrackedPlayerReader<P>;
        getTrackedPlayerIterator(): $Iterator<P>;
        get reader(): $ITrackedPlayerReader<P>;
        get trackedPlayerIterator(): $Iterator<P>;
    }
    export class $ITrackedPlayerReader<P> {
    }
    export interface $ITrackedPlayerReader<P> {
        getId(arg0: P): $UUID;
        getY(arg0: P): number;
        getDimension(arg0: P): $ResourceKey<$Level>;
        getZ(arg0: P): number;
        getX(arg0: P): number;
    }
    export class $RenderedPlayerTrackerManager {
        register(arg0: string, arg1: $IRenderedPlayerTracker<never>): void;
        getAllSystems(): $Iterable<$IRenderedPlayerTracker<never>>;
        get allSystems(): $Iterable<$IRenderedPlayerTracker<never>>;
    }
}
