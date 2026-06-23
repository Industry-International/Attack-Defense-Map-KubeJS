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
        removeParty(arg0: $IServerPartyAPI): void;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        removePartyByOwner(arg0: $UUID_): void;
        removePartyById(arg0: $UUID_): void;
        getPartyByOwner(arg0: $UUID_): $IServerPartyAPI;
        getPartyByMember(arg0: $UUID_): $IServerPartyAPI;
        getAllStream(): $Stream<$IServerPartyAPI>;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        partyExistsForOwner(arg0: $UUID_): boolean;
        get allStream(): $Stream<$IServerPartyAPI>;
    }
    export class $IServerPartyAPI {
    }
    export interface $IServerPartyAPI extends $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        getMemberCount(): number;
        isInvited(arg0: $UUID_): boolean;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        removeMember(arg0: $UUID_): $IPartyMemberAPI;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_ | null, arg2: string): $IPartyMemberAPI;
        isAlly(arg0: $UUID_): boolean;
        getDefaultName(): string;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        addAllyParty(arg0: $UUID_): void;
        removeAllyParty(arg0: $UUID_): void;
        getAllyCount(): number;
        getInviteCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
        get memberCount(): number;
        get defaultName(): string;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get onlineMemberStream(): $Stream<$ServerPlayer>;
        get allyCount(): number;
        get inviteCount(): number;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
    }
}
