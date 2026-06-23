import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IPlayerConfigOptionSpecAPI as $IPlayerConfigOptionSpecAPI$1, $IPlayerConfigAPI } from "@package/xaero/pac/common/server/player/config/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $IPlayerConfigAPI as $IPlayerConfigAPI$1, $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $UUID_ } from "@package/java/util";
import { $IPlayerChunkClaimAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/server/claims/protection/api" {
    export class $IChunkProtectionAPI {
    }
    export interface $IChunkProtectionAPI {
        getConfig(arg0: $IPlayerChunkClaimAPI | null): $IPlayerConfigAPI$1;
        onProjectileHitSpawnedEntity(arg0: $Entity, arg1: $Entity): boolean;
        /**
         * @deprecated
         */
        onBlockInteraction(arg0: $Entity | null, arg1: $InteractionHand_ | null, arg2: $ItemStack_ | null, arg3: $ServerLevel, arg4: $BlockPos_, arg5: $Direction_, arg6: boolean, arg7: boolean): boolean;
        onBlockInteraction(arg0: $Entity | null, arg1: $InteractionHand_ | null, arg2: $ItemStack_ | null, arg3: $ServerLevel, arg4: $BlockPos_, arg5: $Direction_, arg6: boolean, arg7: boolean, arg8: boolean): boolean;
        onEntityPlaceBlock(arg0: $Entity | null, arg1: $ServerLevel, arg2: $BlockPos_): boolean;
        onItemPickup(arg0: $Entity, arg1: $ItemEntity): boolean;
        /**
         * @deprecated
         */
        onEntityInteraction(arg0: $Entity | null, arg1: $Entity | null, arg2: $Entity, arg3: $ItemStack_ | null, arg4: $InteractionHand_ | null, arg5: boolean, arg6: boolean): boolean;
        onEntityInteraction(arg0: $Entity | null, arg1: $Entity | null, arg2: $Entity, arg3: $ItemStack_ | null, arg4: $InteractionHand_ | null, arg5: boolean, arg6: boolean, arg7: boolean): boolean;
        checkPlayerGroupExceptionOption(arg0: $IPlayerConfigOptionSpecAPI<string>, arg1: $IPlayerConfigAPI$1, arg2: $UUID_): boolean;
        checkPlayerGroupExceptionOption(arg0: $IPlayerConfigOptionSpecAPI<string>, arg1: $IPlayerConfigAPI$1, arg2: $Entity): boolean;
        /**
         * @deprecated
         */
        checkExceptionLeveledOption(arg0: $IPlayerConfigOptionSpecAPI$1<number>, arg1: $IPlayerConfigAPI, arg2: $UUID_): boolean;
        /**
         * @deprecated
         */
        checkExceptionLeveledOption(arg0: $IPlayerConfigOptionSpecAPI$1<number>, arg1: $IPlayerConfigAPI, arg2: $Entity): boolean;
        /**
         * @deprecated
         */
        checkProtectionLeveledOption(arg0: $IPlayerConfigOptionSpecAPI$1<number>, arg1: $IPlayerConfigAPI, arg2: $UUID_): boolean;
        /**
         * @deprecated
         */
        checkProtectionLeveledOption(arg0: $IPlayerConfigOptionSpecAPI$1<number>, arg1: $IPlayerConfigAPI, arg2: $Entity): boolean;
        /**
         * @deprecated
         */
        getClaimConfig(arg0: $IPlayerChunkClaimAPI | null): $IPlayerConfigAPI;
        hasChunkAccess(arg0: $IPlayerConfigAPI$1, arg1: $Entity): boolean;
        hasChunkAccess(arg0: $IPlayerConfigAPI$1, arg1: $UUID_): boolean;
        removeFullPass(arg0: $UUID_): void;
        giveFullPass(arg0: $UUID_): void;
        onPosAffectedByAnotherPos(arg0: $ServerLevel, arg1: $ChunkPos, arg2: $ServerLevel, arg3: $ChunkPos, arg4: boolean, arg5: boolean, arg6: boolean): boolean;
    }
}
