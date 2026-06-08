import { $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/dev/lambdaurora/lambdynlights/engine/lookup" {
    export class $SpatialLookupEntry {
        static lightAtPos(x: number, y: number, z: number, pos: $BlockPos_, luminance: number): number;
    }
    export interface $SpatialLookupEntry {
        getDynamicLightLevel(arg0: $BlockPos_): number;
        cellKey(): number;
    }
}
