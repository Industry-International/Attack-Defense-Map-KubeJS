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
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        removeParty(arg0: $IServerPartyAPI): void;
        removePartyById(arg0: $UUID_): void;
        removePartyByOwner(arg0: $UUID_): void;
        partyExistsForOwner(arg0: $UUID_): boolean;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
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
        isInvited(arg0: $UUID_): boolean;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        getMemberCount(): number;
        addAllyParty(arg0: $UUID_): void;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        getAllyCount(): number;
        getInviteCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        removeAllyParty(arg0: $UUID_): void;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_, arg2: string): $IPartyMemberAPI;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        isAlly(arg0: $UUID_): boolean;
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
        get defaultName(): string;
        get memberCount(): number;
        get allyCount(): number;
        get inviteCount(): number;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get onlineMemberStream(): $Stream<$ServerPlayer>;
    }
}
