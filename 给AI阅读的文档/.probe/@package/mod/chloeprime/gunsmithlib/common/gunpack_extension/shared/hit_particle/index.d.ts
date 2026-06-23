import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List } from "@package/java/util";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/hit_particle" {
    export class $HitParticleData {
        static of(arg0: $ItemStack_): $List<$HitParticleData>;
        static of(arg0: $GunInfo_): $List<$HitParticleData>;
        getCount(): number;
        isExplosiveParticleAlternate(): boolean;
        isActivated(arg0: boolean): boolean;
        getDZ(): number;
        getDY(): number;
        getDX(): number;
        getSpeed(): number;
        getParticle(arg0: $HolderLookup$Provider): $ParticleOptions;
        isAdaptiveBlockParticle(): boolean;
        isAaaParticle(): boolean;
        getParticleId(): $ResourceLocation;
        getAaaParticleData(): $AAAParticleData;
        constructor();
        get count(): number;
        get explosiveParticleAlternate(): boolean;
        get DZ(): number;
        get DY(): number;
        get DX(): number;
        get speed(): number;
        get adaptiveBlockParticle(): boolean;
        get aaaParticle(): boolean;
        get particleId(): $ResourceLocation;
        get aaaParticleData(): $AAAParticleData;
    }
}
