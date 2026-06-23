import { $Holder } from "@package/net/minecraft/core";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $AreaEffectCloud3D } from "@package/mod/chloeprime/gunsmithlib/common/entity";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/potion_effect" {
    export class $PotionEffectData {
        getDuration(): number;
        getLevel(): number;
        getEffect(): ($Holder<$MobEffect>) | undefined;
        getChance(): number;
        applyTo(arg0: $LivingEntity, arg1: $Entity): void;
        applyTo(arg0: $AreaEffectCloud3D): boolean;
        isAmbient(): boolean;
        isVisible(): boolean;
        isUsingForceApplyMethod(): boolean;
        getMaxStackLevel(): number;
        willShowIcon(): boolean;
        getAreaCloudLevel(): number;
        getAreaCloudChance(): number;
        constructor();
        get duration(): number;
        get level(): number;
        get effect(): ($Holder<$MobEffect>) | undefined;
        get chance(): number;
        get ambient(): boolean;
        get visible(): boolean;
        get usingForceApplyMethod(): boolean;
        get maxStackLevel(): number;
        get areaCloudLevel(): number;
        get areaCloudChance(): number;
    }
}
