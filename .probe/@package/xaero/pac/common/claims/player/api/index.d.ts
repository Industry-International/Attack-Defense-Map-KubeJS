import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/claims/player/api" {
    export class $IPlayerDimensionClaimsAPI {
    }
    export interface $IPlayerDimensionClaimsAPI {
        getStream(): $Stream<$IPlayerClaimPosListAPI>;
        get stream(): $Stream<$IPlayerClaimPosListAPI>;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerDimensionClaimsAPI}.
     */
    export type $IPlayerDimensionClaimsAPI_ = (() => $Stream<$IPlayerClaimPosListAPI>);
    export class $IPlayerChunkClaimAPI {
    }
    export interface $IPlayerChunkClaimAPI {
        getPlayerId(): $UUID;
        isSameClaimType(arg0: $IPlayerChunkClaimAPI): boolean;
        getSubConfigIndex(): number;
        isForceloadable(): boolean;
        get playerId(): $UUID;
        get subConfigIndex(): number;
        get forceloadable(): boolean;
    }
    export class $IPlayerClaimInfoAPI {
    }
    export interface $IPlayerClaimInfoAPI {
        getDimension(arg0: $ResourceLocation_): $IPlayerDimensionClaimsAPI;
        getPlayerId(): $UUID;
        getClaimsName(arg0: number): string;
        getClaimsName(): string;
        getClaimCount(): number;
        getClaimsColor(): number;
        getClaimsColor(arg0: number): number;
        getPlayerUsername(): string;
        getForceloadCount(): number;
        get playerId(): $UUID;
        get claimCount(): number;
        get playerUsername(): string;
        get forceloadCount(): number;
    }
    export class $IPlayerClaimPosListAPI {
    }
    export interface $IPlayerClaimPosListAPI {
        getCount(): number;
        getStream(): $Stream<$ChunkPos>;
        getClaimState(): $IPlayerChunkClaimAPI;
        get count(): number;
        get stream(): $Stream<$ChunkPos>;
        get claimState(): $IPlayerChunkClaimAPI;
    }
}
