import { $Holder } from "@package/net/minecraft/core";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $AreaEffectCloud3D } from "@package/mod/chloeprime/gunsmithlib/common/entity";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/potion_effect" {
    export class $PotionEffectData {
        getDuration(): number;
        getLevel(): number;
        isVisible(): boolean;
        getEffect(): ($Holder<$MobEffect>) | undefined;
        isAmbient(): boolean;
        isUsingForceApplyMethod(): boolean;
        applyTo(arg0: $LivingEntity, arg1: $Entity): void;
        applyTo(arg0: $AreaEffectCloud3D): boolean;
        getAreaCloudChance(): number;
        getAreaCloudLevel(): number;
        getMaxStackLevel(): number;
        willShowIcon(): boolean;
        getChance(): number;
        constructor();
        get duration(): number;
        get level(): number;
        get visible(): boolean;
        get effect(): ($Holder<$MobEffect>) | undefined;
        get ambient(): boolean;
        get usingForceApplyMethod(): boolean;
        get areaCloudChance(): number;
        get areaCloudLevel(): number;
        get maxStackLevel(): number;
        get chance(): number;
    }
}
