import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/parties/party/ally/api" {
    export class $IPartyAllyAPI {
    }
    export interface $IPartyAllyAPI {
        getPartyId(): $UUID;
        get partyId(): $UUID;
    }
    /**
     * Values that may be interpreted as {@link $IPartyAllyAPI}.
     */
    export type $IPartyAllyAPI_ = (() => $UUID_);
}
