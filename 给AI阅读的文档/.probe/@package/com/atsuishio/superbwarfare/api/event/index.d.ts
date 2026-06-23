import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $JsonObject } from "@package/com/google/gson";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $ExtendedEntityRayTraceResult } from "@package/com/atsuishio/superbwarfare/world/phys";
import { $GunData, $ShootParameters, $ShootParameters_, $DefaultGunData } from "@package/com/atsuishio/superbwarfare/data/gun";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_, $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemDisplayContext_, $ItemDisplayContext, $ItemStack } from "@package/net/minecraft/world/item";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HumanoidArm, $EntityType_, $LivingEntity, $HumanoidArm_, $Entity } from "@package/net/minecraft/world/entity";
import { $DefaultVehicleData } from "@package/com/atsuishio/superbwarfare/data/vehicle";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $JsonObject as $JsonObject$1 } from "@package/kotlinx/serialization/json";
import { $ArrayList } from "@package/java/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Object } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/atsuishio/superbwarfare/api/event" {
    export class $ProjectileHitEvent$HitBlock extends $ProjectileHitEvent {
        getState(): $BlockState;
        getPos(): $BlockPos;
        getFace(): $Direction;
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $Direction_, arg3: $Entity, arg4: $Projectile, arg5: $Vec3_);
        get state(): $BlockState;
        get pos(): $BlockPos;
        get face(): $Direction;
    }
    export class $LoadingDataEvent$Vehicle extends $LoadingDataEvent<$DefaultVehicleData> {
        constructor(arg0: string, arg1: $DefaultVehicleData);
    }
    export class $PreKillEvent$SendKillMessage extends $PreKillEvent {
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $LivingEntity);
    }
    export class $LoadingDataEvent<T> extends $Event implements $ICancellableEvent {
        getId(): string;
        getData(): T;
        setData(arg0: T): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: string, arg1: $Object, arg2: $DefaultConstructorMarker);
        get id(): string;
    }
    export class $ReloadEvent$Post extends $ReloadEvent {
        constructor(arg0: $Entity, arg1: $GunData);
    }
    export class $ShootEvent$Post extends $ShootEvent {
        constructor(arg0: $ShootParameters_);
    }
    export class $ProjectileHitEvent$HitEntity extends $ProjectileHitEvent {
        getTarget(): $Entity;
        getResult(): $ExtendedEntityRayTraceResult;
        isLegShot(): boolean;
        isHeadshot(): boolean;
        constructor(arg0: $Entity, arg1: $Projectile, arg2: $Entity, arg3: $Vec3_);
        constructor(arg0: $Entity, arg1: $Projectile, arg2: $ExtendedEntityRayTraceResult);
        get target(): $Entity;
        get result(): $ExtendedEntityRayTraceResult;
        get legShot(): boolean;
        get headshot(): boolean;
    }
    export class $LoadingJsonEvent extends $Event implements $ICancellableEvent {
        getId(): string;
        getAsJsonObject(): $JsonObject$1;
        getJsonStr(): string;
        setJsonStr(arg0: string): void;
        getAsGsonObject(): $JsonObject;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: string, arg1: string);
        get id(): string;
        get asJsonObject(): $JsonObject$1;
        get asGsonObject(): $JsonObject;
    }
    export class $ShootEvent extends $Event {
        getParameters(): $ShootParameters;
        getLevel(): $ServerLevel;
        getData(): $GunData;
        getZoom(): boolean;
        getShooter(): $Entity;
        getSpread(): number;
        constructor(arg0: $ShootParameters_, arg1: $DefaultConstructorMarker);
        get parameters(): $ShootParameters;
        get level(): $ServerLevel;
        get data(): $GunData;
        get zoom(): boolean;
        get shooter(): $Entity;
        get spread(): number;
    }
    export class $ProjectileHitEvent extends $Event implements $ICancellableEvent {
        getOwner(): $Entity;
        getHitVec(): $Vec3;
        getProjectile(): $Projectile;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Entity, arg1: $Projectile, arg2: $Vec3_, arg3: $DefaultConstructorMarker);
        get owner(): $Entity;
        get hitVec(): $Vec3;
        get projectile(): $Projectile;
    }
    export class $ReloadEvent$Pre extends $ReloadEvent {
        constructor(arg0: $Entity, arg1: $GunData);
    }
    export class $PreKillEvent extends $Event implements $ICancellableEvent {
        getTarget(): $LivingEntity;
        getSource(): $DamageSource;
        getEntity(): $LivingEntity;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $LivingEntity, arg3: $DefaultConstructorMarker);
        get target(): $LivingEntity;
        get source(): $DamageSource;
        get entity(): $LivingEntity;
    }
    export class $ReloadEvent extends $Event {
        getStack(): $ItemStack;
        getData(): $GunData;
        getEntity(): $Entity;
        constructor(arg0: $Entity, arg1: $GunData, arg2: $DefaultConstructorMarker);
        get stack(): $ItemStack;
        get data(): $GunData;
        get entity(): $Entity;
    }
    export class $PreKillEvent$Indicator extends $PreKillEvent {
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $LivingEntity);
    }
    export class $ShootEvent$Pre extends $ShootEvent {
        constructor(arg0: $ShootParameters_);
    }
    export class $RegisterContainersEvent$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $RenderPlayerArmEvent extends $Event implements $ICancellableEvent {
        getStack(): $PoseStack;
        getBone(): $GeoBone;
        getRenderType(): $RenderType;
        getLocalPlayer(): $LocalPlayer;
        getTransformType(): $ItemDisplayContext;
        getArm(): $HumanoidArm;
        getCurrentBuffer(): $MultiBufferSource;
        getPackedLightIn(): number;
        isUseOldHandRender(): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LocalPlayer, arg1: $ItemDisplayContext_, arg2: $PoseStack, arg3: $HumanoidArm_, arg4: $GeoBone, arg5: $MultiBufferSource_, arg6: $RenderType, arg7: number, arg8: boolean);
        get stack(): $PoseStack;
        get bone(): $GeoBone;
        get renderType(): $RenderType;
        get localPlayer(): $LocalPlayer;
        get transformType(): $ItemDisplayContext;
        get arm(): $HumanoidArm;
        get currentBuffer(): $MultiBufferSource;
        get packedLightIn(): number;
        get useOldHandRender(): boolean;
    }
    export class $RegisterContainersEvent extends $Event implements $IModBusEvent {
        add<T extends $Entity>(arg0: $DeferredHolder<$EntityType_<never>, $EntityType_<T>>): void;
        add(arg0: $Entity): void;
        add<T extends $Entity>(arg0: $EntityType_<T>): void;
        static Companion: $RegisterContainersEvent$Companion;
        static CONTAINERS: $ArrayList<$ItemStack>;
        constructor();
    }
    export class $LoadingDataEvent$Gun extends $LoadingDataEvent<$DefaultGunData> {
        constructor(arg0: string, arg1: $DefaultGunData);
    }
}
