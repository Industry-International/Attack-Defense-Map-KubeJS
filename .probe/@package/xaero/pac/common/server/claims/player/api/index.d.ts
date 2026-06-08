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
        getClaimCount(): number;
        getClaimsColor(arg0: number): number;
        getClaimsColor(arg0: string): number;
        getClaimsColor(): number;
        getClaimsName(arg0: string): string;
        getClaimsName(arg0: number): string;
        getClaimsName(): string;
        getForceloadCount(): number;
        getPlayerUsername(): string;
        get stream(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>;
        get playerId(): $UUID;
        get claimCount(): number;
        get forceloadCount(): number;
        get playerUsername(): string;
    }
}
