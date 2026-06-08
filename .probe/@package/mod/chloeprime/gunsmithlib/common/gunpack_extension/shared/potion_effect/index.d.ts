import { $Holder } from "@package/net/minecraft/core";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $AreaEffectCloud3D } from "@package/mod/chloeprime/gunsmithlib/common/entity";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/potion_effect" {
    export class $PotionEffectData {
        getDuration(): number;
        getLevel(): number;
        getAreaCloudChance(): number;
        willShowIcon(): boolean;
        getMaxStackLevel(): number;
        getAreaCloudLevel(): number;
        applyTo(arg0: $AreaEffectCloud3D): boolean;
        applyTo(arg0: $LivingEntity, arg1: $Entity): void;
        isVisible(): boolean;
        isUsingForceApplyMethod(): boolean;
        getEffect(): ($Holder<$MobEffect>) | undefined;
        isAmbient(): boolean;
        getChance(): number;
        constructor();
        get duration(): number;
        get level(): number;
        get areaCloudChance(): number;
        get maxStackLevel(): number;
        get areaCloudLevel(): number;
        get visible(): boolean;
        get usingForceApplyMethod(): boolean;
        get effect(): ($Holder<$MobEffect>) | undefined;
        get ambient(): boolean;
        get chance(): number;
    }
}
