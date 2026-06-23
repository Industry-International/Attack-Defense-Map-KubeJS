import { $Codec } from "@package/com/mojang/serialization";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Set_, $List, $List_, $Map_, $Map, $Set } from "@package/java/util";
import { $Object, $Enum, $Record } from "@package/java/lang";

declare module "@package/dev/propulsionteam/propulsionsimulated/content/thruster" {
    export class $FluidThrusterProperties extends $Record {
        static decode(arg0: $FriendlyByteBuf): $FluidThrusterProperties;
        encode(arg0: $FriendlyByteBuf): void;
        consumptionMultiplier(): number;
        particleType(): $ThrusterParticleType;
        thrustMultiplier(): number;
        useFluidColor(): boolean;
        overrideTextures(): $List<$ResourceLocation>;
        overrideColor(): number;
        static DEFAULT: $FluidThrusterProperties;
        constructor(thrustMultiplier: number, consumptionMultiplier: number, particleType: $ThrusterParticleType_, overrideTextures: $List_<$ResourceLocation_>, overrideColor: number, useFluidColor: boolean);
    }
    export class $ThrusterParticleType extends $Enum<$ThrusterParticleType> {
        static fromString(arg0: string): $ThrusterParticleType;
        static values(): $ThrusterParticleType[];
        static valueOf(arg0: string): $ThrusterParticleType;
        serializedName(): string;
        createParticleOptions(): $ParticleOptions;
        createParticleOptions(arg0: $FluidThrusterProperties_): $ParticleOptions;
        static PLASMA: $ThrusterParticleType;
        static CODEC: $Codec<$ThrusterParticleType>;
        static PLUME: $ThrusterParticleType;
        static NONE: $ThrusterParticleType;
    }
    /**
     * Values that may be interpreted as {@link $ThrusterParticleType}.
     */
    export type $ThrusterParticleType_ = "none" | "plume" | "plasma";
    export class $ThrusterFuelManager extends $SimpleJsonResourceReloadListener {
        static getProperties(arg0: $Fluid_): $FluidThrusterProperties;
        static registerScriptedFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static getFuelPropertiesMap(): $Map<$Fluid, $FluidThrusterProperties>;
        static getEfficiency(arg0: $Fluid_): number;
        static getRemovedFuelIds(): $Set<$ResourceLocation>;
        static updateClient(arg0: $Map_<$ResourceLocation_, $FluidThrusterProperties_>, arg1: $Set_<$ResourceLocation_>): void;
        static clearScriptedFuels(): void;
        static overrideFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static rebuildThrusterFuelsAfterCommonConfigReload(): void;
        static removeFuel(arg0: string): boolean;
        static DIRECTORY: string;
        constructor();
        static get fuelPropertiesMap(): $Map<$Fluid, $FluidThrusterProperties>;
        static get removedFuelIds(): $Set<$ResourceLocation>;
    }
}
