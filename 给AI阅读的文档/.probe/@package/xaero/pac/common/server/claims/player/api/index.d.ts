import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IPlayerPartySystemAPI as $IPlayerPartySystemAPI$1 } from "@package/xaero/pac/common/server/parties/system/api";
import { $Map$Entry, $UUID } from "@package/java/util";
import { $IPlayerPartySystemAPI } from "@package/xaero/pac/common/server/parties/system/api/v2";
import { $IPlayerClaimInfoAPI, $IPlayerDimensionClaimsAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/server/claims/player/api" {
    export class $IServerPlayerClaimInfoAPI {
    }
    export interface $IServerPlayerClaimInfoAPI extends $IPlayerClaimInfoAPI {
        getDimension(arg0: $ResourceLocation_): $IPlayerDimensionClaimsAPI;
        getStream(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>;
        getPlayerId(): $UUID;
        /**
         * @deprecated
         */
        resyncPartyName(arg0: $IPlayerPartySystemAPI$1<never>): void;
        resyncPartyName(arg0: $IPlayerPartySystemAPI<never>): void;
        getClaimsName(): string;
        getClaimsName(arg0: string): string;
        getClaimsName(arg0: number): string;
        getPlayerUsername(): string;
        getClaimCount(): number;
        getForceloadCount(): number;
        getClaimsColor(arg0: number): number;
        getClaimsColor(arg0: string): number;
        getClaimsColor(): number;
        get stream(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>;
        get playerId(): $UUID;
        get playerUsername(): string;
        get claimCount(): number;
        get forceloadCount(): number;
    }
}
