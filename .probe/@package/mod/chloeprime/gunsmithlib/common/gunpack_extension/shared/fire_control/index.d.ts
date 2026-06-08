import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";
import { $OptionalDouble } from "@package/java/util";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/fire_control" {
    /**
     * @deprecated
     */
    export class $OldFireControlData extends $Record {
        aimConeAngle(): number;
        constructor(aimConeAngle: number);
    }
    export class $FireControlData {
        getTorqueLerpRate(): number;
        getTorque(): $OptionalDouble;
        getAngularRange(): number;
        static fromGun(arg0: $GunInfo_): ($FireControlData) | undefined;
        static fromGun(arg0: $ItemStack_): ($FireControlData) | undefined;
        getRangeOverride(): number;
        constructor();
        get torqueLerpRate(): number;
        get torque(): $OptionalDouble;
        get angularRange(): number;
        get rangeOverride(): number;
    }
}
