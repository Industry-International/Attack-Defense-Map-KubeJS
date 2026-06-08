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
        getPierce(): number;
        getIgniteEntityTime(): number;
        getIgnite(): $Ignite;
        getDamageAmount(): number;
        getGravity(): number;
        getSpeed(): number;
        getBulletAmount(): number;
        getFriction(): number;
        getKnockback(): number;
        getExtraDamage(): $ExtraDamage;
        hasTracerAmmo(): boolean;
        getLifeSecond(): number;
        getExplosionData(): $ExplosionData;
        getTracerCountInterval(): number;
        constructor();
        get pierce(): number;
        get igniteEntityTime(): number;
        get ignite(): $Ignite;
        get damageAmount(): number;
        get gravity(): number;
        get speed(): number;
        get bulletAmount(): number;
        get friction(): number;
        get knockback(): number;
        get extraDamage(): $ExtraDamage;
        get lifeSecond(): number;
        get explosionData(): $ExplosionData;
        get tracerCountInterval(): number;
    }
    export class $GunHeatData {
        getHeatMax(): number;
        getCoolingMultiplier(): number;
        getHeatPerShot(): number;
        getMinInaccuracy(): number;
        getMaxInaccuracy(): number;
        getOverHeatTime(): number;
        getMaxRpmMod(): number;
        getCoolingDelay(): number;
        getMinRpmMod(): number;
        constructor();
        get heatMax(): number;
        get coolingMultiplier(): number;
        get heatPerShot(): number;
        get minInaccuracy(): number;
        get maxInaccuracy(): number;
        get overHeatTime(): number;
        get maxRpmMod(): number;
        get coolingDelay(): number;
        get minRpmMod(): number;
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
        getChargeType(): $ChargeType;
        getDecreaseOnFire(): number;
        getDecreasePerTick(): number;
        getIncreasePerTick(): number;
        isChargeDuringCooldown(): boolean;
        constructor();
        get maxCharge(): number;
        get fireThreshold(): number;
        get chargeType(): $ChargeType;
        get decreaseOnFire(): number;
        get decreasePerTick(): number;
        get increasePerTick(): number;
        get chargeDuringCooldown(): boolean;
    }
    export class $ExplosionData {
        getRadius(): number;
        isDestroyBlock(): boolean;
        isKnockback(): boolean;
        getDelay(): number;
        getDamage(): number;
        isExplode(): boolean;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean);
        get radius(): number;
        get destroyBlock(): boolean;
        get knockback(): boolean;
        get delay(): number;
        get damage(): number;
        get explode(): boolean;
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
        getChargeData(arg0: $FireMode_): $ChargeData;
        getAmmoAmount(): number;
        getDrawTime(): number;
        getWeight(): number;
        getBolt(): $Bolt;
        getAimTime(): number;
        canSlide(): boolean;
        getRecoil(): $GunRecoil;
        isCanCrawl(): boolean;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getBoltFeedTime(): number;
        getBurstData(): $BurstData;
        getShootInterval(arg0: $LivingEntity, arg1: $FireMode_, arg2: $ItemStack_): number;
        getBoltActionTime(): number;
        getMeleeData(): $GunMeleeData;
        getHeatData(): $GunHeatData;
        getPutAwayTime(): number;
        getSprintTime(): number;
        getInaccuracy(arg0: $InaccuracyType_, arg1: number): number;
        getInaccuracy(arg0: $InaccuracyType_): number;
        getInaccuracy(): $Map<$InaccuracyType, number>;
        getMoveSpeed(): $MoveSpeed;
        setInaccuracy(arg0: $Map_<$InaccuracyType_, number>): void;
        getFireSound(): $FireSound;
        getScriptParam(): $Map<string, $Object>;
        getReloadData(): $GunReloadData;
        getRoundsPerMinute(arg0: $FireMode_): number;
        getRoundsPerMinute(): number;
        getBuiltInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        getHurtBobTweakMultiplier(): number;
        getExclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        getBurstShootInterval(): number;
        gunsmith$getArcanaExtras(): $Optional<any>;
        getFireModeAdjustData(arg0: $FireMode_): $GunFireModeAdjustData;
        getCrawlRecoilMultiplier(): number;
        getExtendedMagAmmoAmount(): number[];
        getAllowAttachments(): $List<$AttachmentType>;
        getFireModeSet(): $List<$FireMode>;
        getAmmoId(): $ResourceLocation;
        hasHeatData(): boolean;
        getBulletData(): $BulletData;
        /**
         * @deprecated
         */
        gunsmith$getOldFireControlSystemData(): $Optional<any>;
        constructor();
        get script(): $ResourceLocation;
        get ammoAmount(): number;
        get drawTime(): number;
        get weight(): number;
        get bolt(): $Bolt;
        get aimTime(): number;
        get recoil(): $GunRecoil;
        get canCrawl(): boolean;
        get boltFeedTime(): number;
        get burstData(): $BurstData;
        get boltActionTime(): number;
        get meleeData(): $GunMeleeData;
        get heatData(): $GunHeatData;
        get putAwayTime(): number;
        get sprintTime(): number;
        get moveSpeed(): $MoveSpeed;
        get fireSound(): $FireSound;
        get scriptParam(): $Map<string, $Object>;
        get reloadData(): $GunReloadData;
        get builtInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        get hurtBobTweakMultiplier(): number;
        get exclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        get burstShootInterval(): number;
        get crawlRecoilMultiplier(): number;
        get extendedMagAmmoAmount(): number[];
        get allowAttachments(): $List<$AttachmentType>;
        get fireModeSet(): $List<$FireMode>;
        get ammoId(): $ResourceLocation;
        get bulletData(): $BulletData;
    }
    export class $ExtraDamage {
        getArmorIgnore(): number;
        getDamageAdjust(): $LinkedList<$ExtraDamage$DistanceDamagePair>;
        getHeadShotMultiplier(): number;
        constructor();
        get armorIgnore(): number;
        get damageAdjust(): $LinkedList<$ExtraDamage$DistanceDamagePair>;
        get headShotMultiplier(): number;
    }
    export class $GunRecoil {
        setYaw(arg0: $GunRecoilKeyFrame[]): void;
        getYaw(): $GunRecoilKeyFrame[];
        getPitch(): $GunRecoilKeyFrame[];
        setPitch(arg0: $GunRecoilKeyFrame[]): void;
        genYawSplineFunction(arg0: number): $PolynomialSplineFunction;
        genPitchSplineFunction(arg0: number): $PolynomialSplineFunction;
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
        getDamageAmount(): number;
        getSpeed(): number;
        getRoundsPerMinute(): number;
        getKnockback(): number;
        getArmorIgnore(): number;
        getOtherInaccuracy(): number;
        getAimInaccuracy(): number;
        getHeadShotMultiplier(): number;
        constructor();
        get damageAmount(): number;
        get speed(): number;
        get roundsPerMinute(): number;
        get knockback(): number;
        get armorIgnore(): number;
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
        isContinuousShoot(): boolean;
        getBpm(): number;
        getMinInterval(): number;
        constructor();
        get count(): number;
        get continuousShoot(): boolean;
        get bpm(): number;
        get minInterval(): number;
    }
    export class $InaccuracyType extends $Enum<$InaccuracyType> {
        static values(): $InaccuracyType[];
        static valueOf(arg0: string): $InaccuracyType;
        isAim(): boolean;
        static getDefaultInaccuracy(): $Map<$InaccuracyType, number>;
        static getInaccuracyType(arg0: $LivingEntity): $InaccuracyType;
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
        getCooldown(): number;
        getDistance(): number;
        getDefaultMeleeData(): $GunDefaultMeleeData;
        constructor();
        get cooldown(): number;
        get distance(): number;
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
        getCooldown(): number;
        getDistance(): number;
        getDamage(): number;
        getKnockback(): number;
        getRangeAngle(): number;
        getPrepTime(): number;
        getAnimationType(): string;
        constructor();
        get cooldown(): number;
        get distance(): number;
        get damage(): number;
        get knockback(): number;
        get rangeAngle(): number;
        get prepTime(): number;
        get animationType(): string;
    }
}
