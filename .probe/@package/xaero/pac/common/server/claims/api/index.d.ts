import { $IDimensionClaimsManagerAPI, $IRegionClaimsAPI, $IClaimsManagerAPI } from "@package/xaero/pac/common/claims/api";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $AreaClaimResult, $ClaimResult } from "@package/xaero/pac/common/claims/result/api";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IClaimsManagerTrackerAPI } from "@package/xaero/pac/common/claims/tracker/api";
import { $UUID_ } from "@package/java/util";
import { $IPlayerClaimInfoAPI, $IPlayerChunkClaimAPI } from "@package/xaero/pac/common/claims/player/api";
import { $IServerPlayerClaimInfoAPI } from "@package/xaero/pac/common/server/claims/player/api";

declare module "@package/xaero/pac/common/server/claims/api" {
    export class $IServerDimensionClaimsManagerAPI {
    }
    export interface $IServerDimensionClaimsManagerAPI extends $IDimensionClaimsManagerAPI {
        getCount(): number;
        getDimension(): $ResourceLocation;
        getRegionStream(): $Stream<$IServerRegionClaimsAPI>;
        getRegion(arg0: number, arg1: number): $IRegionClaimsAPI;
        get count(): number;
        get dimension(): $ResourceLocation;
        get regionStream(): $Stream<$IServerRegionClaimsAPI>;
    }
    export class $IServerClaimsManagerAPI {
    }
    export interface $IServerClaimsManagerAPI extends $IClaimsManagerAPI {
        get(arg0: $ResourceLocation_, arg1: $ChunkPos): $IPlayerChunkClaimAPI;
        get(arg0: $ResourceLocation_, arg1: $BlockPos_): $IPlayerChunkClaimAPI;
        get(arg0: $ResourceLocation_, arg1: number, arg2: number): $IPlayerChunkClaimAPI;
        getDimension(arg0: $ResourceLocation_): $IServerDimensionClaimsManagerAPI;
        claim(arg0: $ResourceLocation_, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: boolean): $IPlayerChunkClaimAPI;
        unclaim(arg0: $ResourceLocation_, arg1: number, arg2: number): void;
        getTracker(): $IClaimsManagerTrackerAPI;
        getPlayerInfoStream(): $Stream<$IServerPlayerClaimInfoAPI>;
        getDimensionStream(): $Stream<$IServerDimensionClaimsManagerAPI>;
        hasPlayerInfo(arg0: $UUID_): boolean;
        getPlayerBaseForceloadLimit(arg0: $UUID_): number;
        getPlayerBaseForceloadLimit(arg0: $ServerPlayer): number;
        tryToUnclaimArea(arg0: $ResourceLocation_, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): $AreaClaimResult;
        tryToUnclaim(arg0: $ResourceLocation_, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): $ClaimResult<$IPlayerChunkClaimAPI>;
        tryToForceloadArea(arg0: $ResourceLocation_, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: boolean): $AreaClaimResult;
        tryToForceload(arg0: $ResourceLocation_, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): $ClaimResult<$IPlayerChunkClaimAPI>;
        isClaimable(arg0: $ResourceLocation_): boolean;
        tryToClaimArea(arg0: $ResourceLocation_, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean): $AreaClaimResult;
        tryToClaim(arg0: $ResourceLocation_, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): $ClaimResult<$IPlayerChunkClaimAPI>;
        getPlayerBaseClaimLimit(arg0: $ServerPlayer): number;
        getPlayerBaseClaimLimit(arg0: $UUID_): number;
        getPlayerInfo(arg0: $UUID_): $IPlayerClaimInfoAPI;
        get tracker(): $IClaimsManagerTrackerAPI;
        get playerInfoStream(): $Stream<$IServerPlayerClaimInfoAPI>;
        get dimensionStream(): $Stream<$IServerDimensionClaimsManagerAPI>;
    }
    export class $IServerRegionClaimsAPI {
    }
    export interface $IServerRegionClaimsAPI extends $IRegionClaimsAPI {
        get(arg0: number, arg1: number): $IPlayerChunkClaimAPI;
        getX(): number;
        getZ(): number;
        get x(): number;
        get z(): number;
    }
}
