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
        getDimension(): $ResourceLocation;
        getZ(): number;
        getX(): number;
        getPlayerId(): $UUID;
        get y(): number;
        get dimension(): $ResourceLocation;
        get z(): number;
        get x(): number;
        get playerId(): $UUID;
    }
    export class $IPartyAPI {
    }
    export interface $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        getMemberCount(): number;
        isInvited(arg0: $UUID_): boolean;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        isAlly(arg0: $UUID_): boolean;
        getDefaultName(): string;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
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
        get allyCount(): number;
        get inviteCount(): number;
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
