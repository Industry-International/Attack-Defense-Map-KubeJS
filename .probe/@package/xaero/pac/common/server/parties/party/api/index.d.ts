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
        partyExistsForOwner(arg0: $UUID_): boolean;
        getPartyByOwner(arg0: $UUID_): $IServerPartyAPI;
        getPartyByMember(arg0: $UUID_): $IServerPartyAPI;
        removeParty(arg0: $IServerPartyAPI): void;
        removePartyByOwner(arg0: $UUID_): void;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        removePartyById(arg0: $UUID_): void;
        getAllStream(): $Stream<$IServerPartyAPI>;
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
        get allStream(): $Stream<$IServerPartyAPI>;
    }
    export class $IServerPartyAPI {
    }
    export interface $IServerPartyAPI extends $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        removeMember(arg0: $UUID_): $IPartyMemberAPI;
        isInvited(arg0: $UUID_): boolean;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getInviteCount(): number;
        removeAllyParty(arg0: $UUID_): void;
        addAllyParty(arg0: $UUID_): void;
        getMemberCount(): number;
        getAllyCount(): number;
        getDefaultName(): string;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_, arg2: string): $IPartyMemberAPI;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        isAlly(arg0: $UUID_): boolean;
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
        get inviteCount(): number;
        get memberCount(): number;
        get allyCount(): number;
        get defaultName(): string;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get onlineMemberStream(): $Stream<$ServerPlayer>;
    }
}
