import { $Either } from "@package/com/mojang/datafixers/util";
import { $UUID_, $Set } from "@package/java/util";
import { $PlayerConfigGroupActionError } from "@package/xaero/pac/common/player/config/group/api";
import { $ICustomPlayerConfigGroupDataAPI, $ICustomPlayerGroupMemberAPI } from "@package/xaero/pac/common/player/config/group/custom/api";

declare module "@package/xaero/pac/common/server/player/config/group/custom/api" {
    export class $ICustomPlayerConfigGroupAPI {
    }
    export interface $ICustomPlayerConfigGroupAPI extends $ICustomPlayerConfigGroupDataAPI {
        getSize(): number;
        excludeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        copyData(): $ICustomPlayerConfigGroupDataAPI;
        includeGroupLimited(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        playerNameIsIncluded(arg0: string | null): boolean;
        getDirectGroupIds(): $Set<string>;
        playerIdIsIncluded(arg0: $UUID_ | null): boolean;
        includeMember(arg0: $UUID_ | null, arg1: string | null): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        includeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        groupIdIsIncluded(arg0: string | null): boolean;
        getDirectMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
        excludeMember(arg0: $UUID_ | null, arg1: string | null): ($PlayerConfigGroupActionError) | undefined;
        excludeMember(arg0: $ICustomPlayerGroupMemberAPI): ($PlayerConfigGroupActionError) | undefined;
        includeMemberLimited(arg0: $UUID_ | null, arg1: string | null): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        get size(): number;
        get directGroupIds(): $Set<string>;
        get directMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
    }
}
