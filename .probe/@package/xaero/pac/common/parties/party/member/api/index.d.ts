import { $IPartyPlayerInfoAPI } from "@package/xaero/pac/common/parties/party/api";
import { $PartyMemberRank } from "@package/xaero/pac/common/parties/party/member";
import { $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/parties/party/member/api" {
    export class $IPartyMemberAPI {
    }
    export interface $IPartyMemberAPI extends $IPartyPlayerInfoAPI {
        getRank(): $PartyMemberRank;
        getUUID(): $UUID;
        getUsername(): string;
        isOwner(): boolean;
        get rank(): $PartyMemberRank;
        get UUID(): $UUID;
        get username(): string;
        get owner(): boolean;
    }
}
