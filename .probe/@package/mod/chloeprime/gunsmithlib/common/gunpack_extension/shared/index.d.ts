import { $Function_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $GunsmithLibAttributeModifierEntry } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/attribute";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemAttributeModifiers } from "@package/net/minecraft/world/item/component";
import { $RicochetData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/ricochet";
import { $DamageSourceControlData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/damage_source_control";
import { $RaytraceControlData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/raytrace_control";
import { $HitParticleData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/hit_particle";
import { $List } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $PotionEffectData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/potion_effect";
import { $GunInfo_, $AttachmentInfo_, $AmmoInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";
export * as potion_effect from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/potion_effect";
export * as fire_control from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/fire_control";
export * as shield from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/shield";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared" {
    export class $GunsmithLibSharedDataExtension {
        static allOf(arg0: $GunInfo_): $Iterable<$GunsmithLibSharedDataExtension>;
        getAreaEffectCloudMinSizeRate(): number;
        getDamageSourceControlData(): $DamageSourceControlData;
        getHitParticles(): $HitParticleData[];
        getAreaEffectCloudDuration(): number;
        getAttributeModifiers(): $List<$GunsmithLibAttributeModifierEntry>;
        getPotionEffects(): $List<$PotionEffectData>;
        static forGunOrAmmo<T>(arg0: $ItemStack_, arg1: $Function_<$GunsmithLibSharedDataExtension, T>): (T) | undefined;
        static forGunOrAmmo<T>(arg0: $GunInfo_, arg1: $Function_<$GunsmithLibSharedDataExtension, T>): (T) | undefined;
        static forGun(arg0: $GunInfo_): ($GunsmithLibSharedDataExtension) | undefined;
        static forAmmo(arg0: $AmmoInfo_): ($GunsmithLibSharedDataExtension) | undefined;
        getBakedAttributeModifiers(): $ItemAttributeModifiers;
        static forAttachment(arg0: $AttachmentInfo_): ($GunsmithLibSharedDataExtension) | undefined;
        getRicochetData(): $RicochetData;
        getRaytraceControlData(): $RaytraceControlData;
        static forGunOrAmmoWithAttachment<T>(arg0: $ItemStack_, arg1: $Function_<$GunsmithLibSharedDataExtension, T>, arg2: $RegistryAccess): $List<T>;
        static forGunOrAmmoWithAttachment<T>(arg0: $GunInfo_, arg1: $Function_<$GunsmithLibSharedDataExtension, T>, arg2: $RegistryAccess): $List<T>;
        constructor();
        get areaEffectCloudMinSizeRate(): number;
        get damageSourceControlData(): $DamageSourceControlData;
        get hitParticles(): $HitParticleData[];
        get areaEffectCloudDuration(): number;
        get attributeModifiers(): $List<$GunsmithLibAttributeModifierEntry>;
        get potionEffects(): $List<$PotionEffectData>;
        get bakedAttributeModifiers(): $ItemAttributeModifiers;
        get ricochetData(): $RicochetData;
        get raytraceControlData(): $RaytraceControlData;
    }
}
