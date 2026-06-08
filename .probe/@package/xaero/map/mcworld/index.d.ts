import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ClientboundRulesPacket } from "@package/xaero/map/message/basic";

declare module "@package/xaero/map/mcworld" {
    export class $WorldMapClientWorldData {
        getSyncedRules(): $ClientboundRulesPacket;
        setServerModNetworkVersion(arg0: number): void;
        setSyncedRules(arg0: $ClientboundRulesPacket): void;
        getServerModNetworkVersion(): number;
        usedSpawn: $BlockPos;
        serverLevelId: number;
        usedServerLevelId: number;
        latestSpawn: $BlockPos;
        constructor(arg0: $ClientLevel);
    }
    export class $IWorldMapClientWorld {
    }
    export interface $IWorldMapClientWorld {
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
    }
}
