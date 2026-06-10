import { $DynamicGunRecoil } from "@package/me/muksc/tacztweaks/mixininterface/feature/balancing/recoil";
import { $Function_ } from "@package/java/util/function";
import { $PolynomialSplineFunction } from "@package/org/apache/commons/math3/analysis/polynomials";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AttachmentType } from "@package/com/tacz/guns/api/item/attachment";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AttachmentData } from "@package/com/tacz/guns/resource/pojo/data/attachment";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $LinkedList, $Optional, $List_ } from "@package/java/util";
import { $InaccuracyTypeAccessor } from "@package/me/muksc/tacztweaks/mixin/accessor";
import { $EnhancedGunData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun";
import { $FireMode, $FireMode_ } from "@package/com/tacz/guns/api/item/gun";

declare module "@package/com/tacz/guns/resource/pojo/data/gun" {
    export class $ExtraDamage$DistanceDamagePair {
        getDistance(): number;
        getDamage(): number;
        constructor(arg0: number, arg1: number);
        get distance(): number;
        get damage(): number;
    }
    export class $Bolt extends $Enum<$Bolt> {
        static values(): $Bolt[];
        static valueOf(arg0: string): $Bolt;
        static CLOSED_BOLT: $Bolt;
        static OPEN_BOLT: $Bolt;
        static MANUAL_ACTION: $Bolt;
    }
    /**
     * Values that may be interpreted as {@link $Bolt}.
     */
    export type $Bolt_ = "open_bolt" | "closed_bolt" | "manual_action";
    export class $MoveSpeed {
        static of(arg0: $MoveSpeed, arg1: $List_<$MoveSpeed>): $MoveSpeed;
        getBaseMultiplier(): number;
        getAimMultiplier(): number;
        getReloadMultiplier(): number;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        get baseMultiplier(): number;
        get aimMultiplier(): number;
        get reloadMultiplier(): number;
    }
    export class $ChargeType extends $Enum<$ChargeType> {
        static values(): $ChargeType[];
        static valueOf(arg0: string): $ChargeType;
        static AUTO: $ChargeType;
        static DELAY: $ChargeType;
        static HOLD: $ChargeType;
    }
    /**
     * Values that may be interpreted as {@link $ChargeType}.
     */
    export type $ChargeType_ = "auto" | "hold" | "delay";
    export class $BulletData {
        getLifeSecond(): number;
        getGravity(): number;
        getSpeed(): number;
        getExplosionData(): $ExplosionData;
        getIgnite(): $Ignite;
        getIgniteEntityTime(): number;
        getTracerCountInterval(): number;
        getBulletAmount(): number;
        getFriction(): number;
        getKnockback(): number;
        getPierce(): number;
        hasTracerAmmo(): boolean;
        getExtraDamage(): $ExtraDamage;
        getDamageAmount(): number;
        constructor();
        get lifeSecond(): number;
        get gravity(): number;
        get speed(): number;
        get explosionData(): $ExplosionData;
        get ignite(): $Ignite;
        get igniteEntityTime(): number;
        get tracerCountInterval(): number;
        get bulletAmount(): number;
        get friction(): number;
        get knockback(): number;
        get pierce(): number;
        get extraDamage(): $ExtraDamage;
        get damageAmount(): number;
    }
    export class $GunHeatData {
        getHeatMax(): number;
        getMaxInaccuracy(): number;
        getMinInaccuracy(): number;
        getHeatPerShot(): number;
        getMinRpmMod(): number;
        getCoolingDelay(): number;
        getMaxRpmMod(): number;
        getOverHeatTime(): number;
        getCoolingMultiplier(): number;
        constructor();
        get heatMax(): number;
        get maxInaccuracy(): number;
        get minInaccuracy(): number;
        get heatPerShot(): number;
        get minRpmMod(): number;
        get coolingDelay(): number;
        get maxRpmMod(): number;
        get overHeatTime(): number;
        get coolingMultiplier(): number;
    }
    export class $FeedType extends $Enum<$FeedType> {
        static values(): $FeedType[];
        static valueOf(arg0: string): $FeedType;
        static MAGAZINE: $FeedType;
        static INVENTORY: $FeedType;
        static FUEL: $FeedType;
        static MANUAL: $FeedType;
    }
    /**
     * Values that may be interpreted as {@link $FeedType}.
     */
    export type $FeedType_ = "magazine" | "manual" | "fuel" | "inventory";
    export class $ChargeData {
        getMaxCharge(): number;
        getFireThreshold(): number;
        getDecreaseOnFire(): number;
        getDecreasePerTick(): number;
        getChargeType(): $ChargeType;
        getIncreasePerTick(): number;
        isChargeDuringCooldown(): boolean;
        constructor();
        get maxCharge(): number;
        get fireThreshold(): number;
        get decreaseOnFire(): number;
        get decreasePerTick(): number;
        get chargeType(): $ChargeType;
        get increasePerTick(): number;
        get chargeDuringCooldown(): boolean;
    }
    export class $ExplosionData {
        getDelay(): number;
        isExplode(): boolean;
        isKnockback(): boolean;
        isDestroyBlock(): boolean;
        getRadius(): number;
        getDamage(): number;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean);
        get delay(): number;
        get explode(): boolean;
        get knockback(): boolean;
        get destroyBlock(): boolean;
        get radius(): number;
        get damage(): number;
    }
    export class $GunReloadTime {
        getTacticalTime(): number;
        getEmptyTime(): number;
        constructor();
        get tacticalTime(): number;
        get emptyTime(): number;
    }
    export class $GunData implements $EnhancedGunData {
        getScript(): $ResourceLocation;
        getWeight(): number;
        getBulletData(): $BulletData;
        hasHeatData(): boolean;
        canSlide(): boolean;
        getFireModeSet(): $List<$FireMode>;
        getShootInterval(arg0: $LivingEntity, arg1: $FireMode_, arg2: $ItemStack_): number;
        getFireSound(): $FireSound;
        getMeleeData(): $GunMeleeData;
        getScriptParam(): $Map<string, $Object>;
        getMoveSpeed(): $MoveSpeed;
        getBoltFeedTime(): number;
        getChargeData(arg0: $FireMode_): $ChargeData;
        getBurstData(): $BurstData;
        getSprintTime(): number;
        getBoltActionTime(): number;
        getAmmoAmount(): number;
        setInaccuracy(arg0: $Map_<$InaccuracyType_, number>): void;
        getInaccuracy(arg0: $InaccuracyType_): number;
        getInaccuracy(arg0: $InaccuracyType_, arg1: number): number;
        getInaccuracy(): $Map<$InaccuracyType, number>;
        getPutAwayTime(): number;
        getDrawTime(): number;
        getHeatData(): $GunHeatData;
        /**
         * @deprecated
         */
        gunsmith$getOldFireControlSystemData(): $Optional<any>;
        getReloadData(): $GunReloadData;
        getRoundsPerMinute(): number;
        getRoundsPerMinute(arg0: $FireMode_): number;
        getAimTime(): number;
        getRecoil(): $GunRecoil;
        isCanCrawl(): boolean;
        getBolt(): $Bolt;
        getAmmoId(): $ResourceLocation;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        gunsmith$getArcanaExtras(): $Optional<any>;
        getAllowAttachments(): $List<$AttachmentType>;
        getCrawlRecoilMultiplier(): number;
        getBurstShootInterval(): number;
        getExtendedMagAmmoAmount(): number[];
        getExclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        getHurtBobTweakMultiplier(): number;
        getFireModeAdjustData(arg0: $FireMode_): $GunFireModeAdjustData;
        getBuiltInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        constructor();
        get script(): $ResourceLocation;
        get weight(): number;
        get bulletData(): $BulletData;
        get fireModeSet(): $List<$FireMode>;
        get fireSound(): $FireSound;
        get meleeData(): $GunMeleeData;
        get scriptParam(): $Map<string, $Object>;
        get moveSpeed(): $MoveSpeed;
        get boltFeedTime(): number;
        get burstData(): $BurstData;
        get sprintTime(): number;
        get boltActionTime(): number;
        get ammoAmount(): number;
        get putAwayTime(): number;
        get drawTime(): number;
        get heatData(): $GunHeatData;
        get reloadData(): $GunReloadData;
        get aimTime(): number;
        get recoil(): $GunRecoil;
        get canCrawl(): boolean;
        get bolt(): $Bolt;
        get ammoId(): $ResourceLocation;
        get allowAttachments(): $List<$AttachmentType>;
        get crawlRecoilMultiplier(): number;
        get burstShootInterval(): number;
        get extendedMagAmmoAmount(): number[];
        get exclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        get hurtBobTweakMultiplier(): number;
        get builtInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
    }
    export class $ExtraDamage {
        getArmorIgnore(): number;
        getHeadShotMultiplier(): number;
        getDamageAdjust(): $LinkedList<$ExtraDamage$DistanceDamagePair>;
        constructor();
        get armorIgnore(): number;
        get headShotMultiplier(): number;
        get damageAdjust(): $LinkedList<$ExtraDamage$DistanceDamagePair>;
    }
    export class $GunRecoil implements $DynamicGunRecoil {
        getPitch(): $GunRecoilKeyFrame[];
        setPitch(arg0: $GunRecoilKeyFrame[]): void;
        setYaw(arg0: $GunRecoilKeyFrame[]): void;
        getYaw(): $GunRecoilKeyFrame[];
        tacztweaks$setDynamicModifierMapper(arg0: $Function_<any, any>): void;
        genPitchSplineFunction(arg0: number): $PolynomialSplineFunction;
        genYawSplineFunction(arg0: number): $PolynomialSplineFunction;
        constructor();
    }
    export class $GunReloadData {
        isInfinite(): boolean;
        getType(): $FeedType;
        getCooldown(): $GunReloadTime;
        getFeed(): $GunReloadTime;
        constructor();
        get infinite(): boolean;
        get type(): $FeedType;
        get cooldown(): $GunReloadTime;
        get feed(): $GunReloadTime;
    }
    export class $GunFireModeAdjustData {
        getSpeed(): number;
        getArmorIgnore(): number;
        getRoundsPerMinute(): number;
        getKnockback(): number;
        getDamageAmount(): number;
        getOtherInaccuracy(): number;
        getAimInaccuracy(): number;
        getHeadShotMultiplier(): number;
        constructor();
        get speed(): number;
        get armorIgnore(): number;
        get roundsPerMinute(): number;
        get knockback(): number;
        get damageAmount(): number;
        get otherInaccuracy(): number;
        get aimInaccuracy(): number;
        get headShotMultiplier(): number;
    }
    export class $GunRecoilKeyFrame implements $Comparable<$GunRecoilKeyFrame> {
        compareTo(arg0: $GunRecoilKeyFrame): number;
        getValue(): number[];
        setValue(arg0: number[]): void;
        getTime(): number;
        setTime(arg0: number): void;
        constructor();
    }
    export class $FireSound {
        getFireMultiplier(): number;
        getSilenceMultiplier(): number;
        constructor();
        get fireMultiplier(): number;
        get silenceMultiplier(): number;
    }
    export class $BurstData {
        getCount(): number;
        getMinInterval(): number;
        getBpm(): number;
        isContinuousShoot(): boolean;
        constructor();
        get count(): number;
        get minInterval(): number;
        get bpm(): number;
        get continuousShoot(): boolean;
    }
    export class $InaccuracyType extends $Enum<$InaccuracyType> implements $InaccuracyTypeAccessor {
        static values(): $InaccuracyType[];
        static valueOf(arg0: string): $InaccuracyType;
        isAim(): boolean;
        static getDefaultInaccuracy(): $Map<$InaccuracyType, number>;
        static getInaccuracyType(arg0: $LivingEntity): $InaccuracyType;
        static invokeIsMove$tacztweaks_$md$9aa1a5$0(arg0: $LivingEntity): boolean;
        static SNEAK: $InaccuracyType;
        static MOVE: $InaccuracyType;
        static AIM: $InaccuracyType;
        static LIE: $InaccuracyType;
        static STAND: $InaccuracyType;
        get aim(): boolean;
        static get defaultInaccuracy(): $Map<$InaccuracyType, number>;
    }
    /**
     * Values that may be interpreted as {@link $InaccuracyType}.
     */
    export type $InaccuracyType_ = "stand" | "move" | "sneak" | "lie" | "aim";
    export class $GunMeleeData {
        getDistance(): number;
        getCooldown(): number;
        getDefaultMeleeData(): $GunDefaultMeleeData;
        constructor();
        get distance(): number;
        get cooldown(): number;
        get defaultMeleeData(): $GunDefaultMeleeData;
    }
    export class $Ignite {
        isIgniteBlock(): boolean;
        isIgniteEntity(): boolean;
        constructor(arg0: boolean, arg1: boolean);
        constructor(arg0: boolean);
        get igniteBlock(): boolean;
        get igniteEntity(): boolean;
    }
    export class $GunDefaultMeleeData {
        getDistance(): number;
        getCooldown(): number;
        getKnockback(): number;
        getDamage(): number;
        getRangeAngle(): number;
        getPrepTime(): number;
        getAnimationType(): string;
        constructor();
        get distance(): number;
        get cooldown(): number;
        get knockback(): number;
        get damage(): number;
        get rangeAngle(): number;
        get prepTime(): number;
        get animationType(): string;
    }
}
