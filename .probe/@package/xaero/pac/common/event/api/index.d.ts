import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IPlayerPermissionSystemRegisterAPI_, $IPlayerPermissionSystemRegisterAPI } from "@package/xaero/pac/common/server/player/permission/api";
import { $IPlayerPartySystemRegisterAPI, $IPlayerPartySystemRegisterAPI_ } from "@package/xaero/pac/common/server/parties/system/api";
import { $IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI_ } from "@package/xaero/pac/common/claims/tracker/api";

declare module "@package/xaero/pac/common/event/api" {
    export class $OPACServerAddonRegisterEvent extends $Event {
        getServer(): $MinecraftServer;
        getClaimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
        getPermissionSystemManager(): $IPlayerPermissionSystemRegisterAPI;
        getPartySystemManagerAPI(): $IPlayerPartySystemRegisterAPI;
        constructor(arg0: $MinecraftServer, arg1: $IPlayerPermissionSystemRegisterAPI_, arg2: $IPlayerPartySystemRegisterAPI_, arg3: $IClaimsManagerTrackerRegisterAPI_);
        get server(): $MinecraftServer;
        get claimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
        get permissionSystemManager(): $IPlayerPermissionSystemRegisterAPI;
        get partySystemManagerAPI(): $IPlayerPartySystemRegisterAPI;
    }
}
