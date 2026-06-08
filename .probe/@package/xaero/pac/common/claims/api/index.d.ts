import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IClaimsManagerTrackerAPI } from "@package/xaero/pac/common/claims/tracker/api";
import { $UUID_ } from "@package/java/util";
import { $IPlayerChunkClaimAPI, $IPlayerClaimInfoAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/claims/api" {
    export class $IDimensionClaimsManagerAPI {
    }
    export interface $IDimensionClaimsManagerAPI {
        getCount(): number;
        getRegion(arg0: number, arg1: number): $IRegionClaimsAPI;
        getDimension(): $ResourceLocation;
        get count(): number;
        get dimension(): $ResourceLocation;
    }
    export class $IClaimsManagerAPI {
    }
    export interface $IClaimsManagerAPI {
        get(arg0: $ResourceLocation_, arg1: $BlockPos_): $IPlayerChunkClaimAPI;
        get(arg0: $ResourceLocation_, arg1: number, arg2: number): $IPlayerChunkClaimAPI;
        get(arg0: $ResourceLocation_, arg1: $ChunkPos): $IPlayerChunkClaimAPI;
        getDimension(arg0: $ResourceLocation_): $IDimensionClaimsManagerAPI;
        getTracker(): $IClaimsManagerTrackerAPI;
        hasPlayerInfo(arg0: $UUID_): boolean;
        getPlayerInfo(arg0: $UUID_): $IPlayerClaimInfoAPI;
        get tracker(): $IClaimsManagerTrackerAPI;
    }
    export class $IRegionClaimsAPI {
    }
    export interface $IRegionClaimsAPI {
        getX(): number;
        get(arg0: number, arg1: number): $IPlayerChunkClaimAPI;
        getZ(): number;
        get x(): number;
        get z(): number;
    }
}
