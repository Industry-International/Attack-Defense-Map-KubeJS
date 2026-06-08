import { $DedicatedServerSettings } from "@package/net/minecraft/server/dedicated";
import { $Properties } from "@package/java/util";

declare module "@package/com/teamresourceful/resourcefulconfig/mixins/common" {
    export class $SettingsAccessor {
    }
    export interface $SettingsAccessor {
        invokeGetStringRaw(arg0: string): string;
        invokeCloneProperties(): $Properties;
    }
    export class $PlayerListAccessor {
    }
    export interface $PlayerListAccessor {
        setMaxPlayers(arg0: number): void;
        set maxPlayers(value: number);
    }
    /**
     * Values that may be interpreted as {@link $PlayerListAccessor}.
     */
    export type $PlayerListAccessor_ = ((arg0: number) => void);
    export class $DedicatedServerAccessor {
    }
    export interface $DedicatedServerAccessor {
        getSettings(): $DedicatedServerSettings;
        get settings(): $DedicatedServerSettings;
    }
    /**
     * Values that may be interpreted as {@link $DedicatedServerAccessor}.
     */
    export type $DedicatedServerAccessor_ = (() => $DedicatedServerSettings);
}
