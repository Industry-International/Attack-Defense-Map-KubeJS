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
        getDamage(): number;
        getDistance(): number;
        constructor(arg0: number, arg1: number);
        get damage(): number;
        get distance(): number;
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
        getBaseMultiplier(): number;
        getAimMultiplier(): number;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        get reloadMultiplier(): number;
        get baseMultiplier(): number;
        get aimMultiplier(): number;
    }
    export class $BulletData {
        getDamageAmount(): number;
        getIgniteEntityTime(): number;
        getKnockback(): number;
        getFriction(): number;
        getBulletAmount(): number;
        getGravity(): number;
        getSpeed(): number;
        getIgnite(): $Ignite;
        getExplosionData(): $ExplosionData;
        getLifeSecond(): number;
        getPierce(): number;
        getTracerCountInterval(): number;
        hasTracerAmmo(): boolean;
        getExtraDamage(): $ExtraDamage;
        constructor();
        get damageAmount(): number;
        get igniteEntityTime(): number;
        get knockback(): number;
        get friction(): number;
        get bulletAmount(): number;
        get gravity(): number;
        get speed(): number;
        get ignite(): $Ignite;
        get explosionData(): $ExplosionData;
        get lifeSecond(): number;
        get pierce(): number;
        get tracerCountInterval(): number;
        get extraDamage(): $ExtraDamage;
    }
    export class $GunHeatData {
        getHeatMax(): number;
        getCoolingMultiplier(): number;
        getMinRpmMod(): number;
        getMinInaccuracy(): number;
        getMaxInaccuracy(): number;
        getHeatPerShot(): number;
        getMaxRpmMod(): number;
        getCoolingDelay(): number;
        getOverHeatTime(): number;
        constructor();
        get heatMax(): number;
        get coolingMultiplier(): number;
        get minRpmMod(): number;
        get minInaccuracy(): number;
        get maxInaccuracy(): number;
        get heatPerShot(): number;
        get maxRpmMod(): number;
        get coolingDelay(): number;
        get overHeatTime(): number;
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
    export class $ExplosionData {
        getDelay(): number;
        getDamage(): number;
        getRadius(): number;
        isDestroyBlock(): boolean;
        isKnockback(): boolean;
        isExplode(): boolean;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean);
        get delay(): number;
        get damage(): number;
        get radius(): number;
        get destroyBlock(): boolean;
        get knockback(): boolean;
        get explode(): boolean;
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
        getReloadData(): $GunReloadData;
        getRoundsPerMinute(arg0: $FireMode_): number;
        getRoundsPerMinute(): number;
        getAmmoId(): $ResourceLocation;
        getHurtBobTweakMultiplier(): number;
        getBurstShootInterval(): number;
        getCrawlRecoilMultiplier(): number;
        getExtendedMagAmmoAmount(): number[];
        getAllowAttachments(): $List<$AttachmentType>;
        getFireModeAdjustData(arg0: $FireMode_): $GunFireModeAdjustData;
        getExclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        getBuiltInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        gunsmith$getArcanaExtras(): $Optional<any>;
        getBulletData(): $BulletData;
        hasHeatData(): boolean;
        /**
         * @deprecated
         */
        gunsmith$getOldFireControlSystemData(): $Optional<any>;
        getFireModeSet(): $List<$FireMode>;
        canSlide(): boolean;
        getBolt(): $Bolt;
        isCanCrawl(): boolean;
        getRecoil(): $GunRecoil;
        getAimTime(): number;
        gunsmith$getGunsmithLibExtension(): $Optional<any>;
        getScriptParam(): $Map<string, $Object>;
        getShootInterval(arg0: $LivingEntity, arg1: $FireMode_, arg2: $ItemStack_): number;
        getFireSound(): $FireSound;
        getMeleeData(): $GunMeleeData;
        getBoltActionTime(): number;
        getSprintTime(): number;
        getAmmoAmount(): number;
        getDrawTime(): number;
        getBurstData(): $BurstData;
        setInaccuracy(arg0: $Map_<$InaccuracyType_, number>): void;
        getMoveSpeed(): $MoveSpeed;
        getPutAwayTime(): number;
        getBoltFeedTime(): number;
        getInaccuracy(arg0: $InaccuracyType_): number;
        getInaccuracy(arg0: $InaccuracyType_, arg1: number): number;
        getInaccuracy(): $Map<$InaccuracyType, number>;
        getHeatData(): $GunHeatData;
        constructor();
        get script(): $ResourceLocation;
        get weight(): number;
        get reloadData(): $GunReloadData;
        get ammoId(): $ResourceLocation;
        get hurtBobTweakMultiplier(): number;
        get burstShootInterval(): number;
        get crawlRecoilMultiplier(): number;
        get extendedMagAmmoAmount(): number[];
        get allowAttachments(): $List<$AttachmentType>;
        get exclusiveAttachments(): $Map<$ResourceLocation, $AttachmentData>;
        get builtInAttachments(): $Map<$AttachmentType, $ResourceLocation>;
        get bulletData(): $BulletData;
        get fireModeSet(): $List<$FireMode>;
        get bolt(): $Bolt;
        get canCrawl(): boolean;
        get recoil(): $GunRecoil;
        get aimTime(): number;
        get scriptParam(): $Map<string, $Object>;
        get fireSound(): $FireSound;
        get meleeData(): $GunMeleeData;
        get boltActionTime(): number;
        get sprintTime(): number;
        get ammoAmount(): number;
        get drawTime(): number;
        get burstData(): $BurstData;
        get moveSpeed(): $MoveSpeed;
        get putAwayTime(): number;
        get boltFeedTime(): number;
        get heatData(): $GunHeatData;
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
        getYaw(): $GunRecoilKeyFrame[];
        getPitch(): $GunRecoilKeyFrame[];
        setYaw(arg0: $GunRecoilKeyFrame[]): void;
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
        getDamageAmount(): number;
        getKnockback(): number;
        getRoundsPerMinute(): number;
        getSpeed(): number;
        getHeadShotMultiplier(): number;
        getArmorIgnore(): number;
        getOtherInaccuracy(): number;
        getAimInaccuracy(): number;
        constructor();
        get damageAmount(): number;
        get knockback(): number;
        get roundsPerMinute(): number;
        get speed(): number;
        get headShotMultiplier(): number;
        get armorIgnore(): number;
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
        getSilenceMultiplier(): number;
        getFireMultiplier(): number;
        constructor();
        get silenceMultiplier(): number;
        get fireMultiplier(): number;
    }
    export class $BurstData {
        getCount(): number;
        getBpm(): number;
        isContinuousShoot(): boolean;
        getMinInterval(): number;
        constructor();
        get count(): number;
        get bpm(): number;
        get continuousShoot(): boolean;
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
        getDamage(): number;
        getKnockback(): number;
        getRangeAngle(): number;
        getDistance(): number;
        getCooldown(): number;
        getPrepTime(): number;
        getAnimationType(): string;
        constructor();
        get damage(): number;
        get knockback(): number;
        get rangeAngle(): number;
        get distance(): number;
        get cooldown(): number;
        get prepTime(): number;
        get animationType(): string;
    }
}
