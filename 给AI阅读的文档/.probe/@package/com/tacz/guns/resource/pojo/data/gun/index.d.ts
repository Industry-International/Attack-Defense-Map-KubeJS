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
        getAimMultiplier(): number;
        getBaseMultiplier(): number;
        getReloadMultiplier(): number;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        get aimMultiplier(): number;
        get baseMultiplier(): number;
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
        getExplosionData(): $ExplosionData;
        getIgnite(): $Ignite;
        getTracerCountInterval(): number;
        getLifeSecond(): number;
        getExtraDamage(): $ExtraDamage;
        hasTracerAmmo(): boolean;
        getIgniteEntityTime(): number;
        getPierce(): number;
        getKnockback(): number;
        getSpeed(): number;
        getGravity(): number;
        getBulletAmount(): number;
        getFriction(): number;
        getDamageAmount(): number;
        constructor();
        get explosionData(): $ExplosionData;
        get ignite(): $Ignite;
        get tracerCountInterval(): number;
        get lifeSecond(): number;
        get extraDamage(): $ExtraDamage;
        get igniteEntityTime(): number;
        get pierce(): number;
        get knockback(): number;
        get speed(): number;
        get gravity(): number;
        get bulletAmount(): number;
        get friction(): number;
        get damageAmount(): number;
    }
    export class $GunHeatData {
        getCoolingMultiplier(): number;
        getMaxInaccuracy(): number;
        getMinInaccuracy(): number;
        getHeatPerShot(): number;
        getCoolingDelay(): number;
        getMinRpmMod(): number;
        getMaxRpmMod(): number;
        getOverHeatTime(): number;
        getHeatMax(): number;
        constructor();
        get coolingMultiplier(): number;
        get maxInaccuracy(): number;
        get minInaccuracy(): number;
        get heatPerShot(): number;
        get coolingDelay(): number;
        get minRpmMod(): number;
        get maxRpmMod(): number;
        get overHeatTime(): number;
        get heatMax(): number;
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
        isChargeDuringCooldown(): boolean;
        getChargeType(): $ChargeType;
        getIncreasePerTick(): number;
        getDecreasePerTick(): number;
        getDecreaseOnFire(): number;
        constructor();
        get maxCharge(): number;
        get fireThreshold(): number;
        get chargeDuringCooldown(): boolean;
        get chargeType(): $ChargeType;
        get increasePerTick(): number;
        get decreasePerTick(): number;
        get decreaseOnFire(): number;
    }
    export class $ExplosionData {
        getDelay(): number;
        isExplode(): boolean;
        isKnockback(): boolean;
        isDestroyBlock(): boolean;
        getDamage(): number;
        getRadius(): number;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean);
        get delay(): number;
        get explode(): boolean;
        get knockback(): boolean;
        get destroyBlock(): boolean;
        get damage(): number;
        get radius(): number;
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
        getCrawlRecoilMultiplier(): number;
        gunsmith$getArcanaExtras(): $Optional<any>;
        getExclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        getBuiltInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        getAllowAttachments(): $List<$AttachmentType>;
        getExtendedMagAmmoAmount(): number[];
        getHurtBobTweakMultiplier(): number;
        getBurstShootInterval(): number;
        getFireModeAdjustData(arg0: $FireMode_): $GunFireModeAdjustData;
        hasHeatData(): boolean;
        getBulletData(): $BulletData;
        getWeight(): number;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        canSlide(): boolean;
        isCanCrawl(): boolean;
        getRecoil(): $GunRecoil;
        getAimTime(): number;
        getBolt(): $Bolt;
        /**
         * @deprecated
         */
        gunsmith$getOldFireControlSystemData(): $Optional<any>;
        getAmmoId(): $ResourceLocation;
        getMeleeData(): $GunMeleeData;
        getHeatData(): $GunHeatData;
        getShootInterval(arg0: $LivingEntity, arg1: $FireMode_, arg2: $ItemStack_): number;
        getBoltActionTime(): number;
        getChargeData(arg0: $FireMode_): $ChargeData;
        getDrawTime(): number;
        getFireSound(): $FireSound;
        getAmmoAmount(): number;
        getBurstData(): $BurstData;
        getBoltFeedTime(): number;
        getSprintTime(): number;
        getInaccuracy(arg0: $InaccuracyType_): number;
        getInaccuracy(arg0: $InaccuracyType_, arg1: number): number;
        getInaccuracy(): $Map<$InaccuracyType, number>;
        setInaccuracy(arg0: $Map_<$InaccuracyType_, number>): void;
        getScriptParam(): $Map<string, $Object>;
        getMoveSpeed(): $MoveSpeed;
        getPutAwayTime(): number;
        getFireModeSet(): $List<$FireMode>;
        getRoundsPerMinute(): number;
        getRoundsPerMinute(arg0: $FireMode_): number;
        getReloadData(): $GunReloadData;
        constructor();
        get script(): $ResourceLocation;
        get crawlRecoilMultiplier(): number;
        get exclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        get builtInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        get allowAttachments(): $List<$AttachmentType>;
        get extendedMagAmmoAmount(): number[];
        get hurtBobTweakMultiplier(): number;
        get burstShootInterval(): number;
        get bulletData(): $BulletData;
        get weight(): number;
        get canCrawl(): boolean;
        get recoil(): $GunRecoil;
        get aimTime(): number;
        get bolt(): $Bolt;
        get ammoId(): $ResourceLocation;
        get meleeData(): $GunMeleeData;
        get heatData(): $GunHeatData;
        get boltActionTime(): number;
        get drawTime(): number;
        get fireSound(): $FireSound;
        get ammoAmount(): number;
        get burstData(): $BurstData;
        get boltFeedTime(): number;
        get sprintTime(): number;
        get scriptParam(): $Map<string, $Object>;
        get moveSpeed(): $MoveSpeed;
        get putAwayTime(): number;
        get fireModeSet(): $List<$FireMode>;
        get reloadData(): $GunReloadData;
    }
    export class $ExtraDamage {
        getHeadShotMultiplier(): number;
        getArmorIgnore(): number;
        getDamageAdjust(): $LinkedList<$ExtraDamage$DistanceDamagePair>;
        constructor();
        get headShotMultiplier(): number;
        get armorIgnore(): number;
        get damageAdjust(): $LinkedList<$ExtraDamage$DistanceDamagePair>;
    }
    export class $GunRecoil implements $DynamicGunRecoil {
        setPitch(arg0: $GunRecoilKeyFrame[] | null): void;
        setYaw(arg0: $GunRecoilKeyFrame[] | null): void;
        getYaw(): $GunRecoilKeyFrame[];
        getPitch(): $GunRecoilKeyFrame[];
        genPitchSplineFunction(arg0: number): $PolynomialSplineFunction;
        genYawSplineFunction(arg0: number): $PolynomialSplineFunction;
        tacztweaks$setDynamicModifierMapper(arg0: $Function_<any, any>): void;
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
        getHeadShotMultiplier(): number;
        getArmorIgnore(): number;
        getKnockback(): number;
        getSpeed(): number;
        getRoundsPerMinute(): number;
        getDamageAmount(): number;
        getOtherInaccuracy(): number;
        getAimInaccuracy(): number;
        constructor();
        get headShotMultiplier(): number;
        get armorIgnore(): number;
        get knockback(): number;
        get speed(): number;
        get roundsPerMinute(): number;
        get damageAmount(): number;
        get otherInaccuracy(): number;
        get aimInaccuracy(): number;
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
        getBpm(): number;
        getMinInterval(): number;
        isContinuousShoot(): boolean;
        constructor();
        get count(): number;
        get bpm(): number;
        get minInterval(): number;
        get continuousShoot(): boolean;
    }
    export class $InaccuracyType extends $Enum<$InaccuracyType> implements $InaccuracyTypeAccessor {
        static values(): $InaccuracyType[];
        static valueOf(arg0: string): $InaccuracyType;
        static getInaccuracyType(arg0: $LivingEntity): $InaccuracyType;
        isAim(): boolean;
        static getDefaultInaccuracy(): $Map<$InaccuracyType, number>;
        static invokeIsMove$tacztweaks_$md$dd6cb9$0(arg0: $LivingEntity): boolean;
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
        isIgniteEntity(): boolean;
        isIgniteBlock(): boolean;
        constructor(arg0: boolean, arg1: boolean);
        constructor(arg0: boolean);
        get igniteEntity(): boolean;
        get igniteBlock(): boolean;
    }
    export class $GunDefaultMeleeData {
        getDistance(): number;
        getDamage(): number;
        getKnockback(): number;
        getCooldown(): number;
        getRangeAngle(): number;
        getPrepTime(): number;
        getAnimationType(): string;
        constructor();
        get distance(): number;
        get damage(): number;
        get knockback(): number;
        get cooldown(): number;
        get rangeAngle(): number;
        get prepTime(): number;
        get animationType(): string;
    }
}
