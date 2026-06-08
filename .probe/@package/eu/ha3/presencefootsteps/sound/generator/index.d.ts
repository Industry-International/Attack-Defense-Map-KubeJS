import { $State, $State_, $SoundEngine } from "@package/eu/ha3/presencefootsteps/sound";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";

declare module "@package/eu/ha3/presencefootsteps/sound/generator" {
    export class $TerrestrialStepSoundGenerator implements $StepSoundGenerator {
    }
    export class $StepSoundGenerator {
    }
    export interface $StepSoundGenerator {
        generateFootsteps(): void;
        getMotionTracker(): $MotionTracker;
        get motionTracker(): $MotionTracker;
    }
    export class $MotionTracker {
        getHorizontalSpeed(): number;
        getMotionZ(): number;
        getMotionX(): number;
        getMotionY(): number;
        pickState(arg0: $LivingEntity, arg1: $State_, arg2: $State_): $State;
        getSpeedScalingRatio(arg0: $LivingEntity): number;
        isStationary(): boolean;
        simulateMotionData(arg0: $LivingEntity): void;
        constructor(arg0: $TerrestrialStepSoundGenerator);
        get horizontalSpeed(): number;
        get motionZ(): number;
        get motionX(): number;
        get motionY(): number;
        get stationary(): boolean;
    }
    export class $Locomotion extends $Enum<$Locomotion> {
        static values(): $Locomotion[];
        static valueOf(arg0: string): $Locomotion;
        static byName(arg0: string): $Locomotion;
        static forPlayer(arg0: $Player, arg1: $Locomotion_): $Locomotion;
        static forLiving(arg0: $Entity, arg1: $Locomotion_): $Locomotion;
        getOptionTooltip(): $Component;
        getOptionName(): $Component;
        supplyGenerator(arg0: $LivingEntity, arg1: $SoundEngine): ($StepSoundGenerator) | undefined;
        static QUADRUPED: $Locomotion;
        static FLYING_BIPED: $Locomotion;
        static FLYING: $Locomotion;
        static NONE: $Locomotion;
        static BIPED: $Locomotion;
        get optionTooltip(): $Component;
        get optionName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Locomotion}.
     */
    export type $Locomotion_ = "none" | "biped" | "quadruped" | "flying" | "flying_biped";
}
