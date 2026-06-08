import { $PolynomialSplineFunction } from "@package/org/apache/commons/math3/analysis/polynomials";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AttachmentType } from "@package/com/tacz/guns/api/item/attachment";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AttachmentData } from "@package/com/tacz/guns/resource/pojo/data/attachment";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $LinkedList, $Optional, $List_ } from "@package/java/util";
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
        getReloadMultiplier(): number;
        getAimMultiplier(): number;
        getBaseMultiplier(): number;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        get reloadMultiplier(): number;
        get aimMultiplier(): number;
        get baseMultiplier(): number;
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
        getTracerCountInterval(): number;
        hasTracerAmmo(): boolean;
        getExtraDamage(): $ExtraDamage;
        getExplosionData(): $ExplosionData;
        getBulletAmount(): number;
        getKnockback(): number;
        getFriction(): number;
        getSpeed(): number;
        getGravity(): number;
        getIgniteEntityTime(): number;
        getIgnite(): $Ignite;
        getDamageAmount(): number;
        getPierce(): number;
        constructor();
        get lifeSecond(): number;
        get tracerCountInterval(): number;
        get extraDamage(): $ExtraDamage;
        get explosionData(): $ExplosionData;
        get bulletAmount(): number;
        get knockback(): number;
        get friction(): number;
        get speed(): number;
        get gravity(): number;
        get igniteEntityTime(): number;
        get ignite(): $Ignite;
        get damageAmount(): number;
        get pierce(): number;
    }
    export class $GunHeatData {
        getMinInaccuracy(): number;
        getMaxInaccuracy(): number;
        getHeatPerShot(): number;
        getOverHeatTime(): number;
        getMinRpmMod(): number;
        getMaxRpmMod(): number;
        getCoolingDelay(): number;
        getCoolingMultiplier(): number;
        getHeatMax(): number;
        constructor();
        get minInaccuracy(): number;
        get maxInaccuracy(): number;
        get heatPerShot(): number;
        get overHeatTime(): number;
        get minRpmMod(): number;
        get maxRpmMod(): number;
        get coolingDelay(): number;
        get coolingMultiplier(): number;
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
        isChargeDuringCooldown(): boolean;
        getChargeType(): $ChargeType;
        getDecreaseOnFire(): number;
        getIncreasePerTick(): number;
        getDecreasePerTick(): number;
        getMaxCharge(): number;
        getFireThreshold(): number;
        constructor();
        get chargeDuringCooldown(): boolean;
        get chargeType(): $ChargeType;
        get decreaseOnFire(): number;
        get increasePerTick(): number;
        get decreasePerTick(): number;
        get maxCharge(): number;
        get fireThreshold(): number;
    }
    export class $ExplosionData {
        getDelay(): number;
        isKnockback(): boolean;
        isDestroyBlock(): boolean;
        isExplode(): boolean;
        getRadius(): number;
        getDamage(): number;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean);
        get delay(): number;
        get knockback(): boolean;
        get destroyBlock(): boolean;
        get explode(): boolean;
        get radius(): number;
        get damage(): number;
    }
    export class $GunReloadTime {
        getEmptyTime(): number;
        getTacticalTime(): number;
        constructor();
        get emptyTime(): number;
        get tacticalTime(): number;
    }
    export class $GunData implements $EnhancedGunData {
        getScript(): $ResourceLocation;
        getWeight(): number;
        getAmmoId(): $ResourceLocation;
        getFireModeSet(): $List<$FireMode>;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getExclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        getBurstShootInterval(): number;
        getFireModeAdjustData(arg0: $FireMode_): $GunFireModeAdjustData;
        getCrawlRecoilMultiplier(): number;
        getHurtBobTweakMultiplier(): number;
        getExtendedMagAmmoAmount(): number[];
        getBuiltInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        gunsmith$getArcanaExtras(): $Optional<any>;
        getAllowAttachments(): $List<$AttachmentType>;
        hasHeatData(): boolean;
        getBulletData(): $BulletData;
        getReloadData(): $GunReloadData;
        getRoundsPerMinute(arg0: $FireMode_): number;
        getRoundsPerMinute(): number;
        getScriptParam(): $Map<string, $Object>;
        getInaccuracy(): $Map<$InaccuracyType, number>;
        getInaccuracy(arg0: $InaccuracyType_, arg1: number): number;
        getInaccuracy(arg0: $InaccuracyType_): number;
        setInaccuracy(arg0: $Map_<$InaccuracyType_, number>): void;
        getSprintTime(): number;
        getDrawTime(): number;
        getBoltFeedTime(): number;
        getHeatData(): $GunHeatData;
        getShootInterval(arg0: $LivingEntity, arg1: $FireMode_, arg2: $ItemStack_): number;
        getAmmoAmount(): number;
        getBoltActionTime(): number;
        getBurstData(): $BurstData;
        getPutAwayTime(): number;
        getChargeData(arg0: $FireMode_): $ChargeData;
        getMoveSpeed(): $MoveSpeed;
        getFireSound(): $FireSound;
        getMeleeData(): $GunMeleeData;
        getBolt(): $Bolt;
        getRecoil(): $GunRecoil;
        getAimTime(): number;
        canSlide(): boolean;
        isCanCrawl(): boolean;
        /**
         * @deprecated
         */
        gunsmith$getOldFireControlSystemData(): $Optional<any>;
        constructor();
        get script(): $ResourceLocation;
        get weight(): number;
        get ammoId(): $ResourceLocation;
        get fireModeSet(): $List<$FireMode>;
        get exclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        get burstShootInterval(): number;
        get crawlRecoilMultiplier(): number;
        get hurtBobTweakMultiplier(): number;
        get extendedMagAmmoAmount(): number[];
        get builtInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        get allowAttachments(): $List<$AttachmentType>;
        get bulletData(): $BulletData;
        get reloadData(): $GunReloadData;
        get scriptParam(): $Map<string, $Object>;
        get sprintTime(): number;
        get drawTime(): number;
        get boltFeedTime(): number;
        get heatData(): $GunHeatData;
        get ammoAmount(): number;
        get boltActionTime(): number;
        get burstData(): $BurstData;
        get putAwayTime(): number;
        get moveSpeed(): $MoveSpeed;
        get fireSound(): $FireSound;
        get meleeData(): $GunMeleeData;
        get bolt(): $Bolt;
        get recoil(): $GunRecoil;
        get aimTime(): number;
        get canCrawl(): boolean;
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
    export class $GunRecoil {
        setPitch(arg0: $GunRecoilKeyFrame[]): void;
        setYaw(arg0: $GunRecoilKeyFrame[]): void;
        genPitchSplineFunction(arg0: number): $PolynomialSplineFunction;
        genYawSplineFunction(arg0: number): $PolynomialSplineFunction;
        getPitch(): $GunRecoilKeyFrame[];
        getYaw(): $GunRecoilKeyFrame[];
        constructor();
    }
    export class $GunReloadData {
        isInfinite(): boolean;
        getType(): $FeedType;
        getFeed(): $GunReloadTime;
        getCooldown(): $GunReloadTime;
        constructor();
        get infinite(): boolean;
        get type(): $FeedType;
        get feed(): $GunReloadTime;
        get cooldown(): $GunReloadTime;
    }
    export class $GunFireModeAdjustData {
        getHeadShotMultiplier(): number;
        getRoundsPerMinute(): number;
        getKnockback(): number;
        getSpeed(): number;
        getDamageAmount(): number;
        getAimInaccuracy(): number;
        getOtherInaccuracy(): number;
        getArmorIgnore(): number;
        constructor();
        get headShotMultiplier(): number;
        get roundsPerMinute(): number;
        get knockback(): number;
        get speed(): number;
        get damageAmount(): number;
        get aimInaccuracy(): number;
        get otherInaccuracy(): number;
        get armorIgnore(): number;
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
        getSilenceMultiplier(): number;
        getFireMultiplier(): number;
        constructor();
        get silenceMultiplier(): number;
        get fireMultiplier(): number;
    }
    export class $BurstData {
        getCount(): number;
        getMinInterval(): number;
        isContinuousShoot(): boolean;
        getBpm(): number;
        constructor();
        get count(): number;
        get minInterval(): number;
        get continuousShoot(): boolean;
        get bpm(): number;
    }
    export class $InaccuracyType extends $Enum<$InaccuracyType> {
        static values(): $InaccuracyType[];
        static valueOf(arg0: string): $InaccuracyType;
        static getInaccuracyType(arg0: $LivingEntity): $InaccuracyType;
        static getDefaultInaccuracy(): $Map<$InaccuracyType, number>;
        isAim(): boolean;
        static SNEAK: $InaccuracyType;
        static MOVE: $InaccuracyType;
        static AIM: $InaccuracyType;
        static LIE: $InaccuracyType;
        static STAND: $InaccuracyType;
        static get defaultInaccuracy(): $Map<$InaccuracyType, number>;
        get aim(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InaccuracyType}.
     */
    export type $InaccuracyType_ = "stand" | "move" | "sneak" | "lie" | "aim";
    export class $GunMeleeData {
        getDistance(): number;
        getDefaultMeleeData(): $GunDefaultMeleeData;
        getCooldown(): number;
        constructor();
        get distance(): number;
        get defaultMeleeData(): $GunDefaultMeleeData;
        get cooldown(): number;
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
        getPrepTime(): number;
        getAnimationType(): string;
        getKnockback(): number;
        getDistance(): number;
        getDamage(): number;
        getRangeAngle(): number;
        getCooldown(): number;
        constructor();
        get prepTime(): number;
        get animationType(): string;
        get knockback(): number;
        get distance(): number;
        get damage(): number;
        get rangeAngle(): number;
        get cooldown(): number;
    }
}
