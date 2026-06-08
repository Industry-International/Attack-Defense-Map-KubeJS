import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/me/srrapero720/chloride/api/events" {
    export class $FastModelSettingsUpdate extends $Event {
        isEnabled(): boolean;
        constructor();
        get enabled(): boolean;
    }
    export class $FastModelSettingsUpdate$ChestEvent extends $FastModelSettingsUpdate {
        constructor();
    }
    export class $FastModelSettingsUpdate$BedEvent extends $FastModelSettingsUpdate {
        constructor();
    }
}
