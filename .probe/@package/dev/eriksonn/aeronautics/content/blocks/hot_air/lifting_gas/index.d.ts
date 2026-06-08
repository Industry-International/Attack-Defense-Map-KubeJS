import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/dev/eriksonn/aeronautics/content/blocks/hot_air/lifting_gas" {
    export interface $LiftingGasType extends RegistryMarked<RegistryTypes.AeronauticsLiftingGasTypeTag, RegistryTypes.AeronauticsLiftingGasType> {}
    export class $LiftingGasType {
    }
    export interface $LiftingGasType {
        getName(): $Component;
        getEmptyingTime(): number;
        getLiftStrength(): number;
        getFillingTime(): number;
        getResponsivenessAdjustmentFactor(): number;
        getResponsivenessAdjustmentRange(): number;
        get name(): $Component;
        get emptyingTime(): number;
        get liftStrength(): number;
        get fillingTime(): number;
        get responsivenessAdjustmentFactor(): number;
        get responsivenessAdjustmentRange(): number;
    }
    /**
     * Values that may be interpreted as {@link $LiftingGasType}.
     */
    export type $LiftingGasType_ = RegistryTypes.AeronauticsLiftingGasType;
}
