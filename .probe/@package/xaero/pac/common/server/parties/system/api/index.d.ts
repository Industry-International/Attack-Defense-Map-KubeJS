import { $UUID_ } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/system/api" {
    export class $IPlayerPartySystemAPI<P> {
    }
    export interface $IPlayerPartySystemAPI<P> {
        getPartyByOwner(arg0: $UUID_): P;
        getPartyByMember(arg0: $UUID_): P;
        isPlayerAllying(arg0: $UUID_, arg1: $UUID_): boolean;
        isPermittedToPartyClaim(arg0: $UUID_): boolean;
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
