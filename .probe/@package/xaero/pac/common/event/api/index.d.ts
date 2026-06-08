import { $Event } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $IPlayerPermissionSystemRegisterAPI_, $IPlayerPermissionSystemRegisterAPI } from "@package/xaero/pac/common/server/player/permission/api";
import { $IPlayerPartySystemRegisterAPI, $IPlayerPartySystemRegisterAPI_ } from "@package/xaero/pac/common/server/parties/system/api";
import { $IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI_ } from "@package/xaero/pac/common/claims/tracker/api";

declare module "@package/xaero/pac/common/event/api" {
    export class $OPACServerAddonRegisterEvent extends $Event {
        getServer(): $MinecraftServer;
        getPartySystemManagerAPI(): $IPlayerPartySystemRegisterAPI;
        getPermissionSystemManager(): $IPlayerPermissionSystemRegisterAPI;
        getClaimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
        constructor(arg0: $MinecraftServer, arg1: $IPlayerPermissionSystemRegisterAPI_, arg2: $IPlayerPartySystemRegisterAPI_, arg3: $IClaimsManagerTrackerRegisterAPI_);
        get server(): $MinecraftServer;
        get partySystemManagerAPI(): $IPlayerPartySystemRegisterAPI;
        get permissionSystemManager(): $IPlayerPermissionSystemRegisterAPI;
        get claimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
    }
}
