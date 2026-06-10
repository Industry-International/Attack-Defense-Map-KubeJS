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
        getPartyByMember(arg0: $UUID_): $IServerPartyAPI;
        getPartyByOwner(arg0: $UUID_): $IServerPartyAPI;
        getAllStream(): $Stream<$IServerPartyAPI>;
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
        removeParty(arg0: $IServerPartyAPI): void;
        removePartyById(arg0: $UUID_): void;
        removePartyByOwner(arg0: $UUID_): void;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        partyExistsForOwner(arg0: $UUID_): boolean;
        get allStream(): $Stream<$IServerPartyAPI>;
    }
    export class $IServerPartyAPI {
    }
    export interface $IServerPartyAPI extends $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        removeMember(arg0: $UUID_): $IPartyMemberAPI;
        getDefaultName(): string;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_, arg2: string): $IPartyMemberAPI;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        isInvited(arg0: $UUID_): boolean;
        isAlly(arg0: $UUID_): boolean;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getInviteCount(): number;
        removeAllyParty(arg0: $UUID_): void;
        getAllyCount(): number;
        getMemberCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        addAllyParty(arg0: $UUID_): void;
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
        get defaultName(): string;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get inviteCount(): number;
        get allyCount(): number;
        get memberCount(): number;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
        get onlineMemberStream(): $Stream<$ServerPlayer>;
    }
}
