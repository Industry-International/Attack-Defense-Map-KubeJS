import { $UUID_ } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/system/api" {
    export class $IPlayerPartySystemAPI<P> {
    }
    export interface $IPlayerPartySystemAPI<P> {
        isPermittedToPartyClaim(arg0: $UUID_): boolean;
        isPlayerAllying(arg0: $UUID_, arg1: $UUID_): boolean;
        getPartyByMember(arg0: $UUID_): P;
        getPartyByOwner(arg0: $UUID_): P;
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
