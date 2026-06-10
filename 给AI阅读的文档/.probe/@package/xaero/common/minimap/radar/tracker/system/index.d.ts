import { $RenderedPlayerTrackerManager, $IRenderedPlayerTracker } from "@package/xaero/hud/minimap/player/tracker/system";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/common/minimap/radar/tracker/system" {
    /**
     * @deprecated
     */
    export class $IPlayerTrackerSystem<P> {
    }
    export interface $IPlayerTrackerSystem<P> extends $IRenderedPlayerTracker<P> {
    }
    /**
     * @deprecated
     */
    export class $PlayerTrackerSystemManager extends $RenderedPlayerTrackerManager {
        /**
         * @deprecated
         */
        register(arg0: string, arg1: $IPlayerTrackerSystem<never>): void;
        /**
         * @deprecated
         */
        getSystems(): $Iterable<$IPlayerTrackerSystem<never>>;
        constructor();
        get systems(): $Iterable<$IPlayerTrackerSystem<never>>;
    }
}
