import { $Holder } from "@package/net/minecraft/core";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $AreaEffectCloud3D } from "@package/mod/chloeprime/gunsmithlib/common/entity";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/potion_effect" {
    export class $PotionEffectData {
        getDuration(): number;
        getLevel(): number;
        isVisible(): boolean;
        getAreaCloudChance(): number;
        getAreaCloudLevel(): number;
        willShowIcon(): boolean;
        getMaxStackLevel(): number;
        getChance(): number;
        getEffect(): ($Holder<$MobEffect>) | undefined;
        isAmbient(): boolean;
        applyTo(arg0: $LivingEntity, arg1: $Entity): void;
        applyTo(arg0: $AreaEffectCloud3D): boolean;
        isUsingForceApplyMethod(): boolean;
        constructor();
        get duration(): number;
        get level(): number;
        get visible(): boolean;
        get areaCloudChance(): number;
        get areaCloudLevel(): number;
        get maxStackLevel(): number;
        get chance(): number;
        get effect(): ($Holder<$MobEffect>) | undefined;
        get ambient(): boolean;
        get usingForceApplyMethod(): boolean;
    }
}
