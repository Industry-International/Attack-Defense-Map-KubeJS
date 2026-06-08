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
        getMemberCount(): number;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getAllyCount(): number;
        getInviteCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        isAlly(arg0: $UUID_): boolean;
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
    }
    export class $IPartyPlayerInfoAPI {
    }
    export interface $IPartyPlayerInfoAPI {
        getUUID(): $UUID;
        getUsername(): string;
        get UUID(): $UUID;
        get username(): string;
    }
}
