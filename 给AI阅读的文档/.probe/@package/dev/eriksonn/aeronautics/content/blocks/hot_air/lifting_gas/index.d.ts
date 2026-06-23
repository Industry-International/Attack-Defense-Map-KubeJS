import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/dev/eriksonn/aeronautics/content/blocks/hot_air/lifting_gas" {
    export interface $LiftingGasType extends RegistryMarked<RegistryTypes.AeronauticsLiftingGasTypeTag, RegistryTypes.AeronauticsLiftingGasType> {}
    export class $LiftingGasType {
    }
    export interface $LiftingGasType {
        getName(): $Component;
        getEmptyingTime(): number;
        getFillingTime(): number;
        getLiftStrength(): number;
        getResponsivenessAdjustmentRange(): number;
        getResponsivenessAdjustmentFactor(): number;
        get name(): $Component;
        get emptyingTime(): number;
        get fillingTime(): number;
        get liftStrength(): number;
        get responsivenessAdjustmentRange(): number;
        get responsivenessAdjustmentFactor(): number;
    }
    /**
     * Values that may be interpreted as {@link $LiftingGasType}.
     */
    export type $LiftingGasType_ = RegistryTypes.AeronauticsLiftingGasType;
}
