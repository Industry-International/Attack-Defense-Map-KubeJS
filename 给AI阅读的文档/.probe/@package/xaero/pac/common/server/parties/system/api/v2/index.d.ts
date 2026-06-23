import { $Component } from "@package/net/minecraft/network/chat";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/system/api/v2" {
    export class $IPlayerPartySystemAPI<P> {
    }
    export interface $IPlayerPartySystemAPI<P> {
        getName(arg0: P): $Component;
        getOwner(arg0: P): $UUID;
        canEditPartyConfig(arg0: $UUID_): boolean;
        getMemberCount(arg0: P): number;
        getPartyByOwner(arg0: $UUID_): P;
        getPartyByMember(arg0: $UUID_): P;
        isPlayerAllying(arg0: $UUID_, arg1: $UUID_): boolean;
        canIncludePlayersInPartyConfigGroups(arg0: $UUID_): boolean;
        canIncludeGroupsInPartyConfigGroups(arg0: $UUID_): boolean;
        isPermittedToPartyClaim(arg0: $UUID_): boolean;
        canCreatePartyConfigGroups(arg0: $UUID_): boolean;
    }
    export class $IPlayerPartySystemRegisterAPI {
    }
    export interface $IPlayerPartySystemRegisterAPI {
        register(arg0: string, arg1: $IPlayerPartySystemAPI<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerPartySystemRegisterAPI}.
     */
    export type $IPlayerPartySystemRegisterAPI_ = ((arg0: string, arg1: $IPlayerPartySystemAPI<never>) => void);
}
