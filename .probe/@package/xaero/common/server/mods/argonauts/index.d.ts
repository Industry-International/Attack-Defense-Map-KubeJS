import { $ISyncedPlayerTrackerSystem } from "@package/xaero/common/server/radar/tracker";

declare module "@package/xaero/common/server/mods/argonauts" {
    export class $SupportArgonautsServer {
        getSyncedPlayerTrackerSystem(): $ISyncedPlayerTrackerSystem;
        constructor();
        get syncedPlayerTrackerSystem(): $ISyncedPlayerTrackerSystem;
    }
}
