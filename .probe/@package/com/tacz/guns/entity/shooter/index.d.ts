import { $Supplier } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ReloadState$StateType } from "@package/com/tacz/guns/api/entity";
import { $LuaValue } from "@package/org/luaj/vm2";
import { $AttachmentCacheProperty } from "@package/com/tacz/guns/resource/modifier";

declare module "@package/com/tacz/guns/entity/shooter" {
    export class $ShooterDataHolder {
        initialData(): void;
        drawTimestamp: number;
        meleeTimestamp: number;
        isBolting: boolean;
        shootCount: number;
        currentPutAwayTimeS: number;
        isAiming: boolean;
        sprintTimestamp: number;
        meleePrepTickCount: number;
        reloadTimestamp: number;
        reloadStateType: $ReloadState$StateType;
        baseTimestamp: number;
        boltTimestamp: number;
        currentGunItem: $Supplier<$ItemStack>;
        sprintTimeS: number;
        aimingProgress: number;
        aimingTimestamp: number;
        shootTimestamp: number;
        lastShootTimestamp: number;
        isCrawling: boolean;
        heatTimestamp: number;
        cacheProperty: $AttachmentCacheProperty;
        knockbackStrength: number;
        scriptData: $LuaValue;
        constructor();
    }
}
