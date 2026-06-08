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
        setBaseAmount(arg0: number): void;
        setHeadshotMultiplier(arg0: number): void;
        setGunId(arg0: $ResourceLocation_): void;
        setDamageSource(arg0: $GunDamageSourcePart_, arg1: $DamageSource_): void;
        setAttacker(arg0: $LivingEntity): void;
        setHurtEntity(arg0: $Entity): void;
        setHeadshot(arg0: boolean): void;
        constructor(arg0: $Entity, arg1: $Entity, arg2: $LivingEntity, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: number, arg6: $Pair<$DamageSource_, $DamageSource_>, arg7: boolean, arg8: number, arg9: $LogicalSide_);
        set baseAmount(value: number);
        set headshotMultiplier(value: number);
        set gunId(value: $ResourceLocation_);
        set attacker(value: $LivingEntity);
        set hurtEntity(value: $Entity);
        set headshot(value: boolean);
    }
    export class $GunFireSelectEvent extends $Event implements $KubeJSGunEventPoster<$GunFireSelectEvent>, $ICancellableEvent {
        getShooter(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunFireSelectEvent): void;
        postServerEventToKubeJS(arg0: $GunFireSelectEvent): void;
        postEventToKubeJS(arg0: $GunFireSelectEvent): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
    }
    export class $GunFinishReloadEvent extends $Event implements $KubeJSGunEventPoster<$GunFinishReloadEvent>, $ICancellableEvent {
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunFinishReloadEvent): void;
        postServerEventToKubeJS(arg0: $GunFinishReloadEvent): void;
        postEventToKubeJS(arg0: $GunFinishReloadEvent): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ItemStack_, arg1: $LogicalSide_);
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
    }
    export class $EntityHurtByGunEvent$Post extends $EntityHurtByGunEvent {
        constructor(arg0: $Entity, arg1: $Entity, arg2: $LivingEntity, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: number, arg6: $Pair<$DamageSource_, $DamageSource_>, arg7: boolean, arg8: number, arg9: $LogicalSide_);
    }
    export class $GunReloadEvent extends $Event implements $KubeJSGunEventPoster<$GunReloadEvent>, $ICancellableEvent {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunReloadEvent): void;
        postServerEventToKubeJS(arg0: $GunReloadEvent): void;
        postEventToKubeJS(arg0: $GunReloadEvent): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
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
        getBullet(): $Entity;
        getAmount(): number;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getBaseAmount(): number;
        getHeadshotMultiplier(): number;
        getGunId(): $ResourceLocation;
        isHeadShot(): boolean;
        getHurtEntity(): $Entity;
        getGunDisplayId(): $ResourceLocation;
        postClientEventToKubeJS(arg0: $EntityHurtByGunEvent): void;
        postServerEventToKubeJS(arg0: $EntityHurtByGunEvent): void;
        postEventToKubeJS(arg0: $EntityHurtByGunEvent): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        get bullet(): $Entity;
        get amount(): number;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get baseAmount(): number;
        get headshotMultiplier(): number;
        get gunId(): $ResourceLocation;
        get headShot(): boolean;
        get hurtEntity(): $Entity;
        get gunDisplayId(): $ResourceLocation;
    }
    export class $EntityKillByGunEvent extends $Event implements $KubeJSGunEventPoster<$EntityKillByGunEvent> {
        getBullet(): $Entity;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getHeadshotMultiplier(): number;
        getGunId(): $ResourceLocation;
        getBaseDamage(): number;
        isHeadShot(): boolean;
        getGunDisplayId(): $ResourceLocation;
        getKilledEntity(): $LivingEntity;
        postClientEventToKubeJS(arg0: $EntityKillByGunEvent): void;
        postServerEventToKubeJS(arg0: $EntityKillByGunEvent): void;
        postEventToKubeJS(arg0: $EntityKillByGunEvent): void;
        constructor(arg0: $Entity, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: number, arg6: $Pair<$DamageSource_, $DamageSource_>, arg7: boolean, arg8: number, arg9: $LogicalSide_);
        get bullet(): $Entity;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get headshotMultiplier(): number;
        get gunId(): $ResourceLocation;
        get baseDamage(): number;
        get headShot(): boolean;
        get gunDisplayId(): $ResourceLocation;
        get killedEntity(): $LivingEntity;
    }
    export class $GunShootEvent extends $Event implements $KubeJSGunEventPoster<$GunShootEvent>, $ICancellableEvent {
        getShooter(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunShootEvent): void;
        postServerEventToKubeJS(arg0: $GunShootEvent): void;
        postEventToKubeJS(arg0: $GunShootEvent): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
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
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunFireEvent): void;
        postServerEventToKubeJS(arg0: $GunFireEvent): void;
        postEventToKubeJS(arg0: $GunFireEvent): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
    }
    export class $GunMeleeEvent extends $Event implements $KubeJSGunEventPoster<$GunMeleeEvent>, $ICancellableEvent {
        getShooter(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunMeleeEvent): void;
        postServerEventToKubeJS(arg0: $GunMeleeEvent): void;
        postEventToKubeJS(arg0: $GunMeleeEvent): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $LogicalSide_);
        get shooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
    }
    export class $AttachmentPropertyEvent extends $Event implements $KubeJSGunEventPoster<$AttachmentPropertyEvent> {
        getCacheProperty(): $AttachmentCacheProperty;
        getShooter(): $LivingEntity;
        getGunItem(): $ItemStack;
        postClientEventToKubeJS(arg0: $AttachmentPropertyEvent): void;
        postServerEventToKubeJS(arg0: $AttachmentPropertyEvent): void;
        postEventToKubeJS(arg0: $AttachmentPropertyEvent): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $AttachmentCacheProperty);
        get cacheProperty(): $AttachmentCacheProperty;
        get shooter(): $LivingEntity;
        get gunItem(): $ItemStack;
    }
    export class $GunDrawEvent extends $Event implements $KubeJSGunEventPoster<$GunDrawEvent> {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getCurrentGunItem(): $ItemStack;
        getPreviousGunItem(): $ItemStack;
        postClientEventToKubeJS(arg0: $GunDrawEvent): void;
        postServerEventToKubeJS(arg0: $GunDrawEvent): void;
        postEventToKubeJS(arg0: $GunDrawEvent): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $LogicalSide_);
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get currentGunItem(): $ItemStack;
        get previousGunItem(): $ItemStack;
    }
}
