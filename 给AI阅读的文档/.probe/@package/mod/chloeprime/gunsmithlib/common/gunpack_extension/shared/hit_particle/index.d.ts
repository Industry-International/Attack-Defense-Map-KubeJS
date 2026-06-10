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
        isActivated(arg0: boolean): boolean;
        isExplosiveParticleAlternate(): boolean;
        getParticle(arg0: $HolderLookup$Provider): $ParticleOptions;
        getSpeed(): number;
        isAaaParticle(): boolean;
        getParticleId(): $ResourceLocation;
        getAaaParticleData(): $AAAParticleData;
        getDX(): number;
        getDY(): number;
        getDZ(): number;
        isAdaptiveBlockParticle(): boolean;
        constructor();
        get count(): number;
        get explosiveParticleAlternate(): boolean;
        get speed(): number;
        get aaaParticle(): boolean;
        get particleId(): $ResourceLocation;
        get aaaParticleData(): $AAAParticleData;
        get DX(): number;
        get DY(): number;
        get DZ(): number;
        get adaptiveBlockParticle(): boolean;
    }
}
