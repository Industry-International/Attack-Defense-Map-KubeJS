import { $ISyncedPlayerTrackerSystem } from "@package/xaero/common/server/radar/tracker";

declare module "@package/xaero/common/server/mods/ftbteams" {
    export class $SupportFTBTeamsServer {
        getSyncedPlayerTrackerSystem(): $ISyncedPlayerTrackerSystem;
        constructor();
        get syncedPlayerTrackerSystem(): $ISyncedPlayerTrackerSystem;
    }
}
