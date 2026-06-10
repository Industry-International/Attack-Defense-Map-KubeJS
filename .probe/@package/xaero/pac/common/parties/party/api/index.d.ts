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
        getZ(): number;
        getPlayerId(): $UUID;
        get y(): number;
        get x(): number;
        get dimension(): $ResourceLocation;
        get z(): number;
        get playerId(): $UUID;
    }
    export class $IPartyAPI {
    }
    export interface $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        getDefaultName(): string;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        isInvited(arg0: $UUID_): boolean;
        isAlly(arg0: $UUID_): boolean;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getInviteCount(): number;
        getAllyCount(): number;
        getMemberCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
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
