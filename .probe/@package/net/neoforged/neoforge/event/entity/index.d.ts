import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $EntityDimensions, $LightningBolt, $EntityType_, $LivingEntity, $Pose, $Pose_, $EntityDimensions_, $SpawnPlacementType_, $EntityType, $Entity, $SpawnPlacements$SpawnPredicate_, $SpawnPlacementType, $SpawnPlacements$SpawnPredicate } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier, $AttributeSupplier$Builder, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Projectile, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $List, $Map_ } from "@package/java/util";
import { $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Heightmap$Types, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as player from "@package/net/neoforged/neoforge/event/entity/player";
export * as living from "@package/net/neoforged/neoforge/event/entity/living";
export * as item from "@package/net/neoforged/neoforge/event/entity/item";

declare module "@package/net/neoforged/neoforge/event/entity" {
    export class $EntityTeleportEvent$TeleportCommand extends $EntityTeleportEvent implements $ICancellableEvent {
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number);
    }
    export class $EntityEvent$EntityConstructing extends $EntityEvent {
        constructor(arg0: $Entity);
    }
    export class $EntityStruckByLightningEvent extends $EntityEvent implements $ICancellableEvent {
        getLightning(): $LightningBolt;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity, arg1: $LightningBolt);
        get lightning(): $LightningBolt;
    }
    export class $RegisterSpawnPlacementsEvent$Operation extends $Enum<$RegisterSpawnPlacementsEvent$Operation> {
        static values(): $RegisterSpawnPlacementsEvent$Operation[];
        static valueOf(arg0: string): $RegisterSpawnPlacementsEvent$Operation;
        static OR: $RegisterSpawnPlacementsEvent$Operation;
        static AND: $RegisterSpawnPlacementsEvent$Operation;
        static REPLACE: $RegisterSpawnPlacementsEvent$Operation;
    }
    /**
     * Values that may be interpreted as {@link $RegisterSpawnPlacementsEvent$Operation}.
     */
    export type $RegisterSpawnPlacementsEvent$Operation_ = "and" | "or" | "replace";
    export class $EntityTeleportEvent$EnderEntity extends $EntityTeleportEvent implements $ICancellableEvent {
        getEntityLiving(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number);
        get entityLiving(): $LivingEntity;
    }
    export class $EntityTeleportEvent$ChorusFruit extends $EntityTeleportEvent implements $ICancellableEvent {
        getEntityLiving(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number);
        get entityLiving(): $LivingEntity;
    }
    export class $EntityTeleportEvent extends $EntityEvent implements $ICancellableEvent {
        getTarget(): $Vec3;
        getTargetY(): number;
        getTargetZ(): number;
        getTargetX(): number;
        getPrevX(): number;
        setTargetX(arg0: number): void;
        setTargetZ(arg0: number): void;
        getPrevY(): number;
        setTargetY(arg0: number): void;
        getPrevZ(): number;
        getPrev(): $Vec3;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number);
        get target(): $Vec3;
        get prevX(): number;
        get prevY(): number;
        get prevZ(): number;
        get prev(): $Vec3;
    }
    export class $EntityTeleportEvent$EnderPearl extends $EntityTeleportEvent implements $ICancellableEvent {
        getHitResult(): $HitResult;
        getPlayer(): $ServerPlayer;
        getAttackDamage(): number;
        getPearlEntity(): $ThrownEnderpearl;
        setAttackDamage(arg0: number): void;
        constructor(arg0: $ServerPlayer, arg1: number, arg2: number, arg3: number, arg4: $ThrownEnderpearl, arg5: number, arg6: $HitResult);
        get hitResult(): $HitResult;
        get player(): $ServerPlayer;
        get pearlEntity(): $ThrownEnderpearl;
    }
    export class $RegisterSpawnPlacementsEvent$MergedSpawnPredicate<T extends $Entity> {
        build(): $SpawnPlacements$SpawnPredicate<T>;
        getSpawnType(): $SpawnPlacementType;
        getHeightmapType(): $Heightmap$Types;
        constructor(arg0: $SpawnPlacements$SpawnPredicate_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_);
        get spawnType(): $SpawnPlacementType;
        get heightmapType(): $Heightmap$Types;
    }
    export class $EntityJoinLevelEvent extends $EntityEvent implements $ICancellableEvent {
        getLevel(): $Level;
        loadedFromDisk(): boolean;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity, arg1: $Level_);
        constructor(arg0: $Entity, arg1: $Level_, arg2: boolean);
        get level(): $Level;
    }
    export class $EntityTravelToDimensionEvent extends $EntityEvent implements $ICancellableEvent {
        getDimension(): $ResourceKey<$Level>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity, arg1: $ResourceKey_<$Level>);
        get dimension(): $ResourceKey<$Level>;
    }
    export class $EntityInvulnerabilityCheckEvent extends $EntityEvent {
        getSource(): $DamageSource;
        setInvulnerable(arg0: boolean): void;
        isInvulnerable(): boolean;
        getOriginalInvulnerability(): boolean;
        constructor(arg0: $Entity, arg1: $DamageSource_, arg2: boolean);
        get source(): $DamageSource;
        get originalInvulnerability(): boolean;
    }
    export class $ProjectileImpactEvent extends $EntityEvent implements $ICancellableEvent {
        getProjectile(): $Projectile;
        getRayTraceResult(): $HitResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Projectile, arg1: $HitResult);
        get projectile(): $Projectile;
        get rayTraceResult(): $HitResult;
    }
    export class $EntityAttributeModificationEvent extends $Event implements $IModBusEvent {
        add(arg0: $EntityType_<$LivingEntity>, arg1: $Holder_<$Attribute>): void;
        add(arg0: $EntityType_<$LivingEntity>, arg1: $Holder_<$Attribute>, arg2: number): void;
        has(arg0: $EntityType_<$LivingEntity>, arg1: $Holder_<$Attribute>): boolean;
        getTypes(): $List<$EntityType<$LivingEntity>>;
        constructor(arg0: $Map_<$EntityType_<$LivingEntity>, $AttributeSupplier$Builder>);
        get types(): $List<$EntityType<$LivingEntity>>;
    }
    export class $EntityEvent$EnteringSection extends $EntityEvent {
        getPackedOldPos(): number;
        getPackedNewPos(): number;
        didChunkChange(): boolean;
        getOldPos(): $SectionPos;
        getNewPos(): $SectionPos;
        constructor(arg0: $Entity, arg1: number, arg2: number);
        get packedOldPos(): number;
        get packedNewPos(): number;
        get oldPos(): $SectionPos;
        get newPos(): $SectionPos;
    }
    export class $EntityMountEvent extends $EntityEvent implements $ICancellableEvent {
        getLevel(): $Level;
        isMounting(): boolean;
        getEntityBeingMounted(): $Entity;
        isDismounting(): boolean;
        getEntityMounting(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity, arg1: $Entity, arg2: $Level_, arg3: boolean);
        get level(): $Level;
        get mounting(): boolean;
        get entityBeingMounted(): $Entity;
        get dismounting(): boolean;
        get entityMounting(): $Entity;
    }
    export class $EntityLeaveLevelEvent extends $EntityEvent {
        getLevel(): $Level;
        constructor(arg0: $Entity, arg1: $Level_);
        get level(): $Level;
    }
    export class $EntityEvent extends $Event {
        getEntity(): $Entity;
        constructor(arg0: $Entity);
        get entity(): $Entity;
    }
    export class $EntityEvent$Size extends $EntityEvent {
        getNewSize(): $EntityDimensions;
        getOldSize(): $EntityDimensions;
        getPose(): $Pose;
        setNewSize(arg0: $EntityDimensions_): void;
        constructor(arg0: $Entity, arg1: $Pose_, arg2: $EntityDimensions_);
        constructor(arg0: $Entity, arg1: $Pose_, arg2: $EntityDimensions_, arg3: $EntityDimensions_);
        get oldSize(): $EntityDimensions;
        get pose(): $Pose;
    }
    export class $EntityAttributeCreationEvent extends $Event implements $IModBusEvent {
        put(arg0: $EntityType_<$LivingEntity>, arg1: $AttributeSupplier): void;
        constructor(arg0: $Map_<$EntityType_<$LivingEntity>, $AttributeSupplier>);
    }
    export class $EntityTeleportEvent$SpreadPlayersCommand extends $EntityTeleportEvent implements $ICancellableEvent {
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number);
    }
    export class $RegisterSpawnPlacementsEvent extends $Event implements $IModBusEvent {
        register<T extends $Entity>(arg0: $EntityType_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>, arg4: $RegisterSpawnPlacementsEvent$Operation_): void;
        register<T extends $Entity>(arg0: $EntityType_<T>, arg1: $SpawnPlacements$SpawnPredicate_<T>, arg2: $RegisterSpawnPlacementsEvent$Operation_): void;
        register<T extends $Entity>(arg0: $EntityType_<T>, arg1: $SpawnPlacements$SpawnPredicate_<T>): void;
        constructor(arg0: $Map_<$EntityType_<never>, $RegisterSpawnPlacementsEvent$MergedSpawnPredicate<never>>);
    }
    export class $EntityMobGriefingEvent extends $EntityEvent {
        setCanGrief(arg0: boolean): void;
        isMobGriefingEnabled(): boolean;
        canGrief(): boolean;
        constructor(arg0: $Level_, arg1: $Entity);
        get mobGriefingEnabled(): boolean;
    }
}
