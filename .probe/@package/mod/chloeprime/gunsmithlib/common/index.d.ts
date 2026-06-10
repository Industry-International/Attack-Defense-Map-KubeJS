import { $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CommonScriptingExtension } from "@package/mod/chloeprime/gunsmithlib/api/common";
import { $Object } from "@package/java/lang";
import { $IGun } from "@package/com/tacz/guns/api/item";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $LuaValue } from "@package/org/luaj/vm2";
export * as gunpack_extension from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension";
export * as util from "@package/mod/chloeprime/gunsmithlib/common/util";
export * as internal from "@package/mod/chloeprime/gunsmithlib/common/internal";
export * as entity from "@package/mod/chloeprime/gunsmithlib/common/entity";

declare module "@package/mod/chloeprime/gunsmithlib/common" {
    export class $AbstractCommonScriptingExtension {
    }
    export interface $AbstractCommonScriptingExtension extends $CommonScriptingExtension {
        gunsmith_asyncRunCycled(arg0: $LuaValue, arg1: number, arg2: number, ...arg3: $Object[]): void;
        gunsmith_asyncRunDelayed(arg0: $LuaValue, arg1: number, ...arg2: $Object[]): void;
        /**
         * @deprecated
         */
        gunsmith_getChargingTime(): number;
        gunsmith_getEstimatedRange(arg0: number): number;
        gunsmith_getEstimatedRange(): number;
        gunsmithlib$getGunItemInterface(): $IGun;
        gunsmithlib$getShooter(): ($LivingEntity) | undefined;
        gunsmithlib$getCurrentItem(): $ItemStack;
        gunsmith$getGunIdHelper(): string;
        gunsmithlib$getSide(): $LogicalSide;
    }
}
