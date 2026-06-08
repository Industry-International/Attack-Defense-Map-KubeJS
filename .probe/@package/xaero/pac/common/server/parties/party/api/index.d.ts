import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $IPartyPlayerInfoAPI, $IPartyAPI } from "@package/xaero/pac/common/parties/party/api";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/party/api" {
    export class $IPartyManagerAPI {
    }
    export interface $IPartyManagerAPI {
        getPartyByOwner(arg0: $UUID_): $IServerPartyAPI;
        getPartyByMember(arg0: $UUID_): $IServerPartyAPI;
        getAllStream(): $Stream<$IServerPartyAPI>;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        partyExistsForOwner(arg0: $UUID_): boolean;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        removePartyById(arg0: $UUID_): void;
        removeParty(arg0: $IServerPartyAPI): void;
        removePartyByOwner(arg0: $UUID_): void;
        get allStream(): $Stream<$IServerPartyAPI>;
    }
    export class $IServerPartyAPI {
    }
    export interface $IServerPartyAPI extends $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        removeMember(arg0: $UUID_): $IPartyMemberAPI;
        getDefaultName(): string;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_, arg2: string): $IPartyMemberAPI;
        isInvited(arg0: $UUID_): boolean;
        isAlly(arg0: $UUID_): boolean;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        getAllyCount(): number;
        getInviteCount(): number;
        removeAllyParty(arg0: $UUID_): void;
        addAllyParty(arg0: $UUID_): void;
        getMemberCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
        get defaultName(): string;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get allyCount(): number;
        get inviteCount(): number;
        get memberCount(): number;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
        get onlineMemberStream(): $Stream<$ServerPlayer>;
    }
}
