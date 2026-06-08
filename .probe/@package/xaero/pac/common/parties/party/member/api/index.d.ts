import { $IPartyPlayerInfoAPI } from "@package/xaero/pac/common/parties/party/api";
import { $PartyMemberRank } from "@package/xaero/pac/common/parties/party/member";
import { $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/parties/party/member/api" {
    export class $IPartyMemberAPI {
    }
    export interface $IPartyMemberAPI extends $IPartyPlayerInfoAPI {
        getUsername(): string;
        isOwner(): boolean;
        getUUID(): $UUID;
        getRank(): $PartyMemberRank;
        get username(): string;
        get owner(): boolean;
        get UUID(): $UUID;
        get rank(): $PartyMemberRank;
    }
}
