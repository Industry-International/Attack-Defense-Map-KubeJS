import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $LogicalSide_, $LogicalSide } from "@package/net/neoforged/fml";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $AttachmentCacheProperty } from "@package/com/tacz/guns/resource/modifier";

declare module "@package/com/tacz/guns/api/event/common" {
    export class $EntityHurtByGunEvent$Pre extends $EntityHurtByGunEvent implements $ICancellableEvent {
        setGunId(arg0: $ResourceLocation_): void;
        setBaseAmount(arg0: number): void;
        setAttacker(arg0: $LivingEntity): void;
        setHurtEntity(arg0: $Entity): void;
        setDamageSource(arg0: $GunDamageSourcePart_, arg1: $DamageSource_): void;
        setHeadshot(arg0: boolean): void;
        setHeadshotMultiplier(arg0: number): void;
        constructor(arg0: $Entity, arg1: $Entity, arg2: $LivingEntity, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: number, arg6: $Pair<$DamageSource_, $DamageSource_>, arg7: boolean, arg8: number, arg9: $LogicalSide_);
        set gunId(value: $ResourceLocation_);
        set baseAmount(value: number);
        set attacker(value: $LivingEntity);
        set hurtEntity(value: $Entity);
        set headshot(value: boolean);
        set headshotMultiplier(value: number);
    }
    export class $GunFireSelectEvent extends $Event implements $KubeJSGunEventPoster<$GunFireSelectEvent>, $ICancellableEvent {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        postClientEventToKubeJS(arg0: $GunFireSelectEvent): void;
        postServerEventToKubeJS(arg0: $GunFireSelectEvent): void;
        postEventToKubeJS(arg0: $GunFireSelectEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $GunFinishReloadEvent extends $Event implements $KubeJSGunEventPoster<$GunFinishReloadEvent>, $ICancellableEvent {
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        postClientEventToKubeJS(arg0: $GunFinishReloadEvent): void;
        postServerEventToKubeJS(arg0: $GunFinishReloadEvent): void;
        postEventToKubeJS(arg0: $GunFinishReloadEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $LogicalSide_);
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $EntityHurtByGunEvent$Post extends $EntityHurtByGunEvent {
        constructor(arg0: $Entity, arg1: $Entity, arg2: $LivingEntity, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: number, arg6: $Pair<$DamageSource_, $DamageSource_>, arg7: boolean, arg8: number, arg9: $LogicalSide_);
    }
    export class $GunReloadEvent extends $Event implements $KubeJSGunEventPoster<$GunReloadEvent>, $ICancellableEvent {
        getEntity(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        postClientEventToKubeJS(arg0: $GunReloadEvent): void;
        postServerEventToKubeJS(arg0: $GunReloadEvent): void;
        postEventToKubeJS(arg0: $GunReloadEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get entity(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $GunDamageSourcePart extends $Enum<$GunDamageSourcePart> {
        static values(): $GunDamageSourcePart[];
        static valueOf(arg0: string): $GunDamageSourcePart;
        static ARMOR_PIERCING: $GunDamageSourcePart;
        static NON_ARMOR_PIERCING: $GunDamageSourcePart;
    }
    /**
     * Values that may be interpreted as {@link $GunDamageSourcePart}.
     */
    export type $GunDamageSourcePart_ = "non_armor_piercing" | "armor_piercing";
    export class $EntityHurtByGunEvent extends $Event implements $KubeJSGunEventPoster<$EntityHurtByGunEvent>, $ICancellableEvent {
        isHeadShot(): boolean;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getBullet(): $Entity;
        getGunId(): $ResourceLocation;
        getBaseAmount(): number;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getHurtEntity(): $Entity;
        getGunDisplayId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getAmount(): number;
        postClientEventToKubeJS(arg0: $EntityHurtByGunEvent): void;
        postServerEventToKubeJS(arg0: $EntityHurtByGunEvent): void;
        postEventToKubeJS(arg0: $EntityHurtByGunEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        get headShot(): boolean;
        get bullet(): $Entity;
        get gunId(): $ResourceLocation;
        get baseAmount(): number;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get hurtEntity(): $Entity;
        get gunDisplayId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get amount(): number;
    }
    export class $EntityKillByGunEvent extends $Event implements $KubeJSGunEventPoster<$EntityKillByGunEvent> {
        isHeadShot(): boolean;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getBullet(): $Entity;
        getGunId(): $ResourceLocation;
        getBaseDamage(): number;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getGunDisplayId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getKilledEntity(): $LivingEntity;
        postClientEventToKubeJS(arg0: $EntityKillByGunEvent): void;
        postServerEventToKubeJS(arg0: $EntityKillByGunEvent): void;
        postEventToKubeJS(arg0: $EntityKillByGunEvent): void;
        constructor(arg0: $Entity, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: number, arg6: $Pair<$DamageSource_, $DamageSource_>, arg7: boolean, arg8: number, arg9: $LogicalSide_);
        get headShot(): boolean;
        get bullet(): $Entity;
        get gunId(): $ResourceLocation;
        get baseDamage(): number;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get gunDisplayId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get killedEntity(): $LivingEntity;
    }
    export class $GunShootEvent extends $Event implements $KubeJSGunEventPoster<$GunShootEvent>, $ICancellableEvent {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        postClientEventToKubeJS(arg0: $GunShootEvent): void;
        postServerEventToKubeJS(arg0: $GunShootEvent): void;
        postEventToKubeJS(arg0: $GunShootEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $KubeJSGunEventPoster<E extends $Event> {
    }
    export interface $KubeJSGunEventPoster<E extends $Event> {
        postClientEventToKubeJS(arg0: E): void;
        postServerEventToKubeJS(arg0: E): void;
        postEventToKubeJS(arg0: E): void;
    }
    export class $GunFireEvent extends $Event implements $KubeJSGunEventPoster<$GunFireEvent>, $ICancellableEvent {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        postClientEventToKubeJS(arg0: $GunFireEvent): void;
        postServerEventToKubeJS(arg0: $GunFireEvent): void;
        postEventToKubeJS(arg0: $GunFireEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $GunMeleeEvent extends $Event implements $KubeJSGunEventPoster<$GunMeleeEvent>, $ICancellableEvent {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        postClientEventToKubeJS(arg0: $GunMeleeEvent): void;
        postServerEventToKubeJS(arg0: $GunMeleeEvent): void;
        postEventToKubeJS(arg0: $GunMeleeEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $AttachmentPropertyEvent extends $Event implements $KubeJSGunEventPoster<$AttachmentPropertyEvent> {
        getShooter(): $LivingEntity;
        getCacheProperty(): $AttachmentCacheProperty;
        getGunItem(): $ItemStack;
        postClientEventToKubeJS(arg0: $AttachmentPropertyEvent): void;
        postServerEventToKubeJS(arg0: $AttachmentPropertyEvent): void;
        postEventToKubeJS(arg0: $AttachmentPropertyEvent): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $AttachmentCacheProperty);
        get shooter(): $LivingEntity;
        get cacheProperty(): $AttachmentCacheProperty;
        get gunItem(): $ItemStack;
    }
    export class $GunDrawEvent extends $Event implements $KubeJSGunEventPoster<$GunDrawEvent> {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getPreviousGunItem(): $ItemStack;
        getCurrentGunItem(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunDrawEvent): void;
        postServerEventToKubeJS(arg0: $GunDrawEvent): void;
        postEventToKubeJS(arg0: $GunDrawEvent): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $LogicalSide_);
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get previousGunItem(): $ItemStack;
        get currentGunItem(): $ItemStack;
    }
}
