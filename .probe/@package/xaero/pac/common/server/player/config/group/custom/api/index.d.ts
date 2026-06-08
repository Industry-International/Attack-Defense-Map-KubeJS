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
        excludeMember(arg0: $ICustomPlayerGroupMemberAPI): ($PlayerConfigGroupActionError) | undefined;
        excludeMember(arg0: $UUID_, arg1: string): ($PlayerConfigGroupActionError) | undefined;
        excludeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        getDirectMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
        playerIdIsIncluded(arg0: $UUID_): boolean;
        includeMember(arg0: $UUID_, arg1: string): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        groupIdIsIncluded(arg0: string): boolean;
        getDirectGroupIds(): $Set<string>;
        includeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        includeGroupLimited(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        playerNameIsIncluded(arg0: string): boolean;
        includeMemberLimited(arg0: $UUID_, arg1: string): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        get size(): number;
        get directMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
        get directGroupIds(): $Set<string>;
    }
}
