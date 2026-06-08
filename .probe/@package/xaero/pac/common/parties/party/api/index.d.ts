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
        getY(): number;
        getX(): number;
        getDimension(): $ResourceLocation;
        getPlayerId(): $UUID;
        getZ(): number;
        get y(): number;
        get x(): number;
        get dimension(): $ResourceLocation;
        get playerId(): $UUID;
        get z(): number;
    }
    export class $IPartyAPI {
    }
    export interface $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        isInvited(arg0: $UUID_): boolean;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getInviteCount(): number;
        getMemberCount(): number;
        getAllyCount(): number;
        getDefaultName(): string;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        isAlly(arg0: $UUID_): boolean;
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
