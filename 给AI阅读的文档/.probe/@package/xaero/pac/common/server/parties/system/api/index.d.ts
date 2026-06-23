import { $Component } from "@package/net/minecraft/network/chat";
import { $UUID_, $UUID } from "@package/java/util";
import { $IPlayerPartySystemRegisterAPI as $IPlayerPartySystemRegisterAPI$1, $IPlayerPartySystemAPI as $IPlayerPartySystemAPI$1 } from "@package/xaero/pac/common/server/parties/system/api/v2";
export * as v2 from "@package/xaero/pac/common/server/parties/system/api/v2";

declare module "@package/xaero/pac/common/server/parties/system/api" {
    /**
     * @deprecated
     */
    export class $IPlayerPartySystemAPI<P> {
    }
    export interface $IPlayerPartySystemAPI<P> extends $IPlayerPartySystemAPI$1<P> {
        getName(arg0: P): $Component;
        getOwner(arg0: P): $UUID;
        canEditPartyConfig(arg0: $UUID_): boolean;
        getMemberCount(arg0: P): number;
        canIncludePlayersInPartyConfigGroups(arg0: $UUID_): boolean;
        canIncludeGroupsInPartyConfigGroups(arg0: $UUID_): boolean;
        canCreatePartyConfigGroups(arg0: $UUID_): boolean;
    }
    /**
     * @deprecated
     */
    export class $IPlayerPartySystemRegisterAPI {
    }
    export interface $IPlayerPartySystemRegisterAPI extends $IPlayerPartySystemRegisterAPI$1 {
        /**
         * @deprecated
         */
        register(arg0: string, arg1: $IPlayerPartySystemAPI<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerPartySystemRegisterAPI}.
     */
    export type $IPlayerPartySystemRegisterAPI_ = (() => void);
}
