import { $ServerPlayerDataAPI } from "@package/xaero/pac/common/server/player/data/api";
export * as api from "@package/xaero/pac/common/server/player/data/api";

declare module "@package/xaero/pac/common/server/player/data" {
    export class $IOpenPACServerPlayer {
    }
    export interface $IOpenPACServerPlayer {
        getXaero_OPAC_PlayerData(): $ServerPlayerDataAPI;
        setXaero_OPAC_PlayerData(arg0: $ServerPlayerDataAPI): void;
    }
}
