import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Entity, $TraceableEntity } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $AmmoHitAnythingEvent, $AmmoHitAnythingEvent$Post, $AmmoHitAnythingEvent$Pre, $RicochetEvent } from "@package/mod/chloeprime/gunsmithlib/api/common";
import { $List, $List_ } from "@package/java/util";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $PotionEffectData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/potion_effect";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $LogicalSide_, $LogicalSide } from "@package/net/neoforged/fml";

declare module "@package/mod/chloeprime/gunsmithlib/common/internal" {
    export class $EnhancedKineticBullet {
    }
    export interface $EnhancedKineticBullet extends $TraceableEntity {
        gunsmithlib$getPotionCloudMinSizeRate(): number;
        gunsmithlib$setPotionCloudMinSizeRate(arg0: number): void;
        getExplosionRadius(): number;
        isExplosion(): boolean;
        gunsmithlib$setPotionCloudDuration(arg0: number): void;
        gunsmithlib$getPotionEffects(): $List<$PotionEffectData>;
        gunsmithlib$setPotionEffects(arg0: $List_<$PotionEffectData>): void;
        gunsmithlib$getPotionCloudDuration(): number;
        gunsmithlib$getHitPos(): $Vec3;
        get explosionRadius(): number;
        get explosion(): boolean;
    }
    export class $InternalEvent$AmmoHitAnything<E extends $AmmoHitAnythingEvent> extends $InternalEvent<E> {
    }
    export class $MobEffectForceApplicable {
    }
    export interface $MobEffectForceApplicable {
        gunsmith$forceAddEffectPrime(arg0: $MobEffectInstance, arg1: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectForceApplicable}.
     */
    export type $MobEffectForceApplicable_ = ((arg0: $MobEffectInstance, arg1: $Entity) => void);
    export class $InternalEvent<E extends $Event> extends $Event implements $ICancellableEvent {
        getImpl(): E;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: E);
        get impl(): E;
    }
    export class $InternalEvent$AmmoHitAnything$Pre extends $InternalEvent$AmmoHitAnything<$AmmoHitAnythingEvent$Pre> implements $ICancellableEvent {
        constructor(arg0: $AmmoHitAnythingEvent$Pre);
    }
    export class $GunAttributeSyncState {
    }
    export interface $GunAttributeSyncState {
        gunsmith$isInGunMode(): boolean;
        gunsmith$setInGunMode(arg0: boolean): void;
    }
    export class $BulletReadyToTraceEvent extends $EntityEvent {
        getEndPos(): $Vec3;
        static onBulletTick(arg0: $Projectile, arg1: number): void;
        getSide(): $LogicalSide;
        getStartPos(): $Vec3;
        constructor(arg0: $Projectile, arg1: $Vec3_, arg2: $Vec3_, arg3: $LogicalSide_);
        get endPos(): $Vec3;
        get side(): $LogicalSide;
        get startPos(): $Vec3;
    }
    export class $InternalEvent$RicochetBounciness extends $InternalEvent<$RicochetEvent> {
        constructor(arg0: $RicochetEvent);
    }
    export class $InternalEvent$AmmoHitAnything$Post extends $InternalEvent$AmmoHitAnything<$AmmoHitAnythingEvent$Post> {
        constructor(arg0: $AmmoHitAnythingEvent$Post);
    }
}
