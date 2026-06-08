import { $IChunkProtectionAPI } from "@package/xaero/pac/common/server/claims/protection/api";
import { $IPlayerConfigManagerAPI as $IPlayerConfigManagerAPI$1 } from "@package/xaero/pac/common/server/player/config/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $IAdaptiveLocalizerAPI } from "@package/xaero/pac/common/server/player/localization/api";
import { $IServerClaimsManagerAPI } from "@package/xaero/pac/common/server/claims/api";
import { $IPlayerConfigManagerAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $IServerDataAPI } from "@package/xaero/pac/common/server";
import { $IPartyManagerAPI } from "@package/xaero/pac/common/server/parties/party/api";

declare module "@package/xaero/pac/common/server/api" {
    export class $OpenPACServerAPI {
        static get(arg0: $MinecraftServer): $OpenPACServerAPI;
        getChunkProtection(): $IChunkProtectionAPI;
        getPartyManager(): $IPartyManagerAPI;
        /**
         * @deprecated
         */
        getPlayerConfigs(): $IPlayerConfigManagerAPI$1;
        getServerClaimsManager(): $IServerClaimsManagerAPI;
        getPlayerConfigManager(): $IPlayerConfigManagerAPI;
        getAdaptiveTextLocalizer(): $IAdaptiveLocalizerAPI;
        constructor(arg0: $IServerDataAPI);
        get chunkProtection(): $IChunkProtectionAPI;
        get partyManager(): $IPartyManagerAPI;
        get playerConfigs(): $IPlayerConfigManagerAPI$1;
        get serverClaimsManager(): $IServerClaimsManagerAPI;
        get playerConfigManager(): $IPlayerConfigManagerAPI;
        get adaptiveTextLocalizer(): $IAdaptiveLocalizerAPI;
    }
}
