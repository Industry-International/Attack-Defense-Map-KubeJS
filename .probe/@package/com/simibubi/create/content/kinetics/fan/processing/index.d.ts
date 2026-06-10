import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $List } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/simibubi/create/content/kinetics/fan/processing" {
    export interface $FanProcessingType extends RegistryMarked<RegistryTypes.CreateFanProcessingTypeTag, RegistryTypes.CreateFanProcessingType> {}
    export class $FanProcessingType {
        static parse(arg0: string): $FanProcessingType;
        static getAt(arg0: $Level_, arg1: $BlockPos_): $FanProcessingType;
    }
    export interface $FanProcessingType {
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level_): $List<$ItemStack>;
        canProcess(arg0: $ItemStack_, arg1: $Level_): boolean;
        spawnProcessingParticles(arg0: $Level_, arg1: $Vec3_): void;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectEntity(arg0: $Entity, arg1: $Level_): void;
        isValidAt(arg0: $Level_, arg1: $BlockPos_): boolean;
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $FanProcessingType}.
     */
    export type $FanProcessingType_ = RegistryTypes.CreateFanProcessingType;
    export class $FanProcessingType$AirFlowParticleAccess {
    }
    export interface $FanProcessingType$AirFlowParticleAccess {
        setColor(arg0: number): void;
        setAlpha(arg0: number): void;
        spawnExtraParticle(arg0: $ParticleOptions_, arg1: number): void;
        set color(value: number);
        set alpha(value: number);
    }
}
