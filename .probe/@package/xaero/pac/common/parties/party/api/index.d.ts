import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/parties/party/api" {
    export class $IPartyMemberDynamicInfoSyncableAPI {
    }
    export interface $IPartyMemberDynamicInfoSyncableAPI {
        getDimension(): $ResourceLocation;
        getY(): number;
        getX(): number;
        getZ(): number;
        getPlayerId(): $UUID;
        get dimension(): $ResourceLocation;
        get y(): number;
        get x(): number;
        get z(): number;
        get playerId(): $UUID;
    }
    export class $IPartyAPI {
    }
    export interface $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        getDefaultName(): string;
        isInvited(arg0: $UUID_): boolean;
        isAlly(arg0: $UUID_): boolean;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getAllyCount(): number;
        getInviteCount(): number;
        getMemberCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
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
    }
    export class $IPartyPlayerInfoAPI {
    }
    export interface $IPartyPlayerInfoAPI {
        getUsername(): string;
        getUUID(): $UUID;
        get username(): string;
        get UUID(): $UUID;
    }
}
