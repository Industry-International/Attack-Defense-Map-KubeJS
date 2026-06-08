import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $GunInfo_, $GunInfo } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $EntityHitResult, $Vec3_, $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $EntityKineticBullet } from "@package/com/tacz/guns/entity";

declare module "@package/mod/chloeprime/gunsmithlib/api/common" {
    export class $AmmoHitAnythingEvent$Post extends $AmmoHitAnythingEvent {
        constructor(arg0: $Level_, arg1: $HitResult, arg2: $EntityKineticBullet);
    }
    export class $BulletCreateEvent extends $EntityEvent {
        getGun(): $ItemStack;
        getGunInfo(): $GunInfo;
        getShooter(): $LivingEntity;
        getBullet(): $Projectile;
        constructor(arg0: $Projectile, arg1: $LivingEntity, arg2: $GunInfo_);
        get gun(): $ItemStack;
        get gunInfo(): $GunInfo;
        get shooter(): $LivingEntity;
        get bullet(): $Projectile;
    }
    export class $GunReloadFeedEvent$Pre extends $GunReloadFeedEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $GunInfo_, arg2: boolean);
    }
    export class $AmmoHitEntityEvent extends $Event implements $ICancellableEvent {
        getLevel(): $Level;
        isHeadshot(): boolean;
        getHitTarget(): $Entity;
        getHitResult(): $EntityHitResult;
        getAmmo(): $EntityKineticBullet;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $EntityHitResult, arg2: $Entity, arg3: $EntityKineticBullet, arg4: boolean);
        get level(): $Level;
        get headshot(): boolean;
        get hitTarget(): $Entity;
        get hitResult(): $EntityHitResult;
        get ammo(): $EntityKineticBullet;
    }
    export class $AmmoHitAnythingEvent$Pre extends $AmmoHitAnythingEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $HitResult, arg2: $EntityKineticBullet);
    }
    export class $AmmoSelfExplodeEvent$Post extends $AmmoHitAnythingEvent$Post {
        constructor(arg0: $Level_, arg1: $EntityKineticBullet);
    }
    export class $GunReloadFeedEvent$Post extends $GunReloadFeedEvent {
        constructor(arg0: $LivingEntity, arg1: $GunInfo_, arg2: boolean);
    }
    export class $AmmoSelfExplodeEvent$Pre extends $AmmoHitAnythingEvent$Pre implements $ICancellableEvent {
        constructor(arg0: $Level_, arg1: $EntityKineticBullet);
    }
    export class $AmmoHitAnythingEvent extends $Event {
        getLevel(): $Level;
        getHitResult(): $HitResult;
        getAmmo(): $EntityKineticBullet;
        constructor(arg0: $Level_, arg1: $HitResult, arg2: $EntityKineticBullet);
        get level(): $Level;
        get hitResult(): $HitResult;
        get ammo(): $EntityKineticBullet;
    }
    export class $GunReloadFeedEvent extends $LivingEvent {
        getGunInfo(): $GunInfo;
        /**
         * @deprecated
         */
        willLoadBarrel(): boolean;
        get gunInfo(): $GunInfo;
    }
    export class $RicochetEvent extends $EntityEvent implements $ICancellableEvent {
        getLevel(): $Level;
        getBulletEntity(): $Projectile;
        setMaterialBouncinessOfHitTarget(arg0: number): void;
        getMaterialBouncinessOfHitTarget(): number;
        getNormal(): $Vec3;
        getLogicalSide(): $LogicalSide;
        getHitResult(): $HitResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Projectile, arg1: $Level_, arg2: $HitResult, arg3: $Vec3_);
        get level(): $Level;
        get bulletEntity(): $Projectile;
        get normal(): $Vec3;
        get logicalSide(): $LogicalSide;
        get hitResult(): $HitResult;
    }
}
