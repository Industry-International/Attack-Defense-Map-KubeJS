import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/xaero/lib/client/level" {
    export class $IClientLevel {
    }
    export interface $IClientLevel {
        xaerolib_setData(arg0: $ClientLevelData): void;
        xaerolib_getData(): $ClientLevelData;
    }
    export class $ClientLevelData {
        static get(arg0: $ClientLevel): $ClientLevelData;
        serverHasMod(): boolean;
        setServerHasMod(): void;
        constructor();
    }
}
