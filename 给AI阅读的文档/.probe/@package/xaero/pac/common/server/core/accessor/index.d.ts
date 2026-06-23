import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Connection } from "@package/net/minecraft/network";
import { $StructureTemplate$StructureBlockInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Map } from "@package/java/util";

declare module "@package/xaero/pac/common/server/core/accessor" {
    export class $ICreateContraptionEntity {
    }
    export interface $ICreateContraptionEntity {
        getXaero_OPAC_contraption(): $ICreateContraption;
        get xaero_OPAC_contraption(): $ICreateContraption;
    }
    /**
     * Values that may be interpreted as {@link $ICreateContraptionEntity}.
     */
    export type $ICreateContraptionEntity_ = (() => $ICreateContraption);
    export class $IServerCommonPacketListenerImpl {
    }
    export interface $IServerCommonPacketListenerImpl {
        getXaero_OPAC_connection(): $Connection;
        get xaero_OPAC_connection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $IServerCommonPacketListenerImpl}.
     */
    export type $IServerCommonPacketListenerImpl_ = (() => $Connection);
    export class $ICreateContraption {
    }
    export interface $ICreateContraption {
        getBlocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        getXaero_OPAC_placementPos(): $BlockPos;
        getXaero_OPAC_anchor(): $BlockPos;
        setXaero_OPAC_placementPos(arg0: $BlockPos_): void;
        get blocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        get xaero_OPAC_anchor(): $BlockPos;
    }
    export class $ICreateArmInteractionPoint {
    }
    export interface $ICreateArmInteractionPoint {
        xaero_OPAC_getPos(): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $ICreateArmInteractionPoint}.
     */
    export type $ICreateArmInteractionPoint_ = (() => $BlockPos_);
    export class $IGameProfileCache {
    }
    export interface $IGameProfileCache {
        xaero_pac_PlayerNameIsKnown(arg0: string): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGameProfileCache}.
     */
    export type $IGameProfileCache_ = ((arg0: string) => boolean);
}
