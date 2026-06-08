import { $Either } from "@package/com/mojang/datafixers/util";
import { $UUID_, $Set } from "@package/java/util";
import { $PlayerConfigGroupActionError } from "@package/xaero/pac/common/player/config/group/api";
import { $ICustomPlayerConfigGroupDataAPI, $ICustomPlayerGroupMemberAPI } from "@package/xaero/pac/common/player/config/group/custom/api";

declare module "@package/xaero/pac/common/server/player/config/group/custom/api" {
    export class $ICustomPlayerConfigGroupAPI {
    }
    export interface $ICustomPlayerConfigGroupAPI extends $ICustomPlayerConfigGroupDataAPI {
        getSize(): number;
        copyData(): $ICustomPlayerConfigGroupDataAPI;
        excludeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        excludeMember(arg0: $UUID_, arg1: string): ($PlayerConfigGroupActionError) | undefined;
        excludeMember(arg0: $ICustomPlayerGroupMemberAPI): ($PlayerConfigGroupActionError) | undefined;
        includeGroupLimited(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        playerNameIsIncluded(arg0: string): boolean;
        playerIdIsIncluded(arg0: $UUID_): boolean;
        includeMember(arg0: $UUID_, arg1: string): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        includeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        groupIdIsIncluded(arg0: string): boolean;
        getDirectMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
        getDirectGroupIds(): $Set<string>;
        includeMemberLimited(arg0: $UUID_, arg1: string): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        get size(): number;
        get directMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
        get directGroupIds(): $Set<string>;
    }
}
