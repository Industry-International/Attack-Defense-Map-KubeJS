import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/dev/eriksonn/aeronautics/content/blocks/hot_air/lifting_gas" {
    export interface $LiftingGasType extends RegistryMarked<RegistryTypes.AeronauticsLiftingGasTypeTag, RegistryTypes.AeronauticsLiftingGasType> {}
    export class $LiftingGasType {
    }
    export interface $LiftingGasType {
        getName(): $Component;
        getFillingTime(): number;
        getEmptyingTime(): number;
        getLiftStrength(): number;
        getResponsivenessAdjustmentFactor(): number;
        getResponsivenessAdjustmentRange(): number;
        get name(): $Component;
        get fillingTime(): number;
        get emptyingTime(): number;
        get liftStrength(): number;
        get responsivenessAdjustmentFactor(): number;
        get responsivenessAdjustmentRange(): number;
    }
    /**
     * Values that may be interpreted as {@link $LiftingGasType}.
     */
    export type $LiftingGasType_ = RegistryTypes.AeronauticsLiftingGasType;
}
