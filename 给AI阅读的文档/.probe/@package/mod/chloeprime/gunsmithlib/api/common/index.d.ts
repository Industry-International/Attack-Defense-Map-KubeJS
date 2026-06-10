import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $GunInfo_, $GunInfo } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $EntityHitResult, $Vec3_, $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $GunsmithLibCommonScriptExtension } from "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2";
import { $EntityKineticBullet } from "@package/com/tacz/guns/entity";
export * as scripting_v2 from "@package/mod/chloeprime/gunsmithlib/api/common/scripting_v2";

declare module "@package/mod/chloeprime/gunsmithlib/api/common" {
    export class $AmmoHitAnythingEvent$Post extends $AmmoHitAnythingEvent {
        constructor(arg0: $Level_, arg1: $HitResult, arg2: $EntityKineticBullet);
    }
    export class $BulletCreateEvent extends $EntityEvent {
        getBullet(): $Projectile;
        getShooter(): $LivingEntity;
        getGunInfo(): $GunInfo;
        getGun(): $ItemStack;
        constructor(arg0: $Projectile, arg1: $LivingEntity, arg2: $GunInfo_);
        get bullet(): $Projectile;
        get shooter(): $LivingEntity;
        get gunInfo(): $GunInfo;
        get gun(): $ItemStack;
    }
    export class $GunReloadFeedEvent$Pre extends $GunReloadFeedEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $GunInfo_, arg2: boolean);
    }
    export class $AmmoHitEntityEvent extends $Event implements $ICancellableEvent {
        getLevel(): $Level;
        getHitResult(): $EntityHitResult;
        getAmmo(): $EntityKineticBullet;
        isHeadshot(): boolean;
        getHitTarget(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $EntityHitResult, arg2: $Entity, arg3: $EntityKineticBullet, arg4: boolean);
        get level(): $Level;
        get hitResult(): $EntityHitResult;
        get ammo(): $EntityKineticBullet;
        get headshot(): boolean;
        get hitTarget(): $Entity;
    }
    export class $AmmoHitAnythingEvent$Pre extends $AmmoHitAnythingEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $HitResult, arg2: $EntityKineticBullet);
    }
    export class $CommonScriptingExtension {
    }
    export interface $CommonScriptingExtension extends $VanillaCooldownAPI, $RangefinderAPI, $BetterAsyncAPI {
        /**
         * @deprecated
         */
        gunsmith_getChargingTime(): number;
        gunsmith_getGunId(): string;
        gunsmithlib_extension(): $GunsmithLibCommonScriptExtension;
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
        getHitResult(): $HitResult;
        setMaterialBouncinessOfHitTarget(arg0: number): void;
        getMaterialBouncinessOfHitTarget(): number;
        getLogicalSide(): $LogicalSide;
        getNormal(): $Vec3;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Projectile, arg1: $Level_, arg2: $HitResult, arg3: $Vec3_);
        get level(): $Level;
        get bulletEntity(): $Projectile;
        get hitResult(): $HitResult;
        get logicalSide(): $LogicalSide;
        get normal(): $Vec3;
    }
}
