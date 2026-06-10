import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map$Entry, $UUID } from "@package/java/util";
import { $IPlayerClaimInfoAPI, $IPlayerDimensionClaimsAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/server/claims/player/api" {
    export class $IServerPlayerClaimInfoAPI {
    }
    export interface $IServerPlayerClaimInfoAPI extends $IPlayerClaimInfoAPI {
        getDimension(arg0: $ResourceLocation_): $IPlayerDimensionClaimsAPI;
        getStream(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>;
        getPlayerId(): $UUID;
        getClaimsName(arg0: number): string;
        getClaimsName(arg0: string): string;
        getClaimsName(): string;
        getPlayerUsername(): string;
        getForceloadCount(): number;
        getClaimsColor(): number;
        getClaimsColor(arg0: string): number;
        getClaimsColor(arg0: number): number;
        getClaimCount(): number;
        get stream(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>;
        get playerId(): $UUID;
        get playerUsername(): string;
        get forceloadCount(): number;
        get claimCount(): number;
    }
}
