import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Predicate_, $BiPredicate_, $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $LivingEntity, $AgeableMob, $Mob, $Entity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $Set } from "@package/java/util";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $NearestVisibleLivingEntities, $MemoryModuleType_, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";

declare module "@package/net/minecraft/world/entity/ai/sensing" {
    export class $BreezeAttackEntitySensor extends $NearestLivingEntitySensor<$Breeze> {
        doTick(arg0: $ServerLevel, arg1: $Breeze): void;
        static BREEZE_SENSOR_RADIUS: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $PiglinBruteSpecificSensor extends $Sensor<$LivingEntity> {
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $FrogAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static TARGETING_RANGE: number;
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $TemptingSensor extends $Sensor<$PathfinderMob> {
        doTick(arg0: $ServerLevel, arg1: $PathfinderMob): void;
        static TEMPTATION_RANGE: number;
        static TARGETING_RANGE: number;
        constructor(arg0: $Predicate_<$ItemStack>);
    }
    export class $HoglinSpecificSensor extends $Sensor<$Hoglin> {
        doTick(arg0: $ServerLevel, arg1: $Hoglin): void;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $MobSensor<T extends $LivingEntity> extends $Sensor<T> {
        clearMemory(arg0: T): void;
        checkForMobsNearby(arg0: T): void;
        mobDetected(arg0: T): void;
        static TARGETING_RANGE: number;
        constructor(arg0: number, arg1: $BiPredicate_<T, $LivingEntity>, arg2: $Predicate_<T>, arg3: $MemoryModuleType_<boolean>, arg4: number);
    }
    export class $SensorType<U extends $Sensor<never>> {
        create(): U;
        static FROG_ATTACKABLES: $SensorType<$FrogAttackablesSensor>;
        static AXOLOTL_ATTACKABLES: $SensorType<$AxolotlAttackablesSensor>;
        static ARMADILLO_SCARE_DETECTED: $SensorType<$MobSensor<$Armadillo>>;
        static NEAREST_LIVING_ENTITIES: $SensorType<$NearestLivingEntitySensor<$LivingEntity>>;
        static VILLAGER_HOSTILES: $SensorType<$VillagerHostilesSensor>;
        static VILLAGER_BABIES: $SensorType<$VillagerBabiesSensor>;
        static NEAREST_BED: $SensorType<$NearestBedSensor>;
        static GOAT_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static IS_IN_WATER: $SensorType<$IsInWaterSensor>;
        static AXOLOTL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static FROG_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static ARMADILLO_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static BREEZE_ATTACK_ENTITY_SENSOR: $SensorType<$BreezeAttackEntitySensor>;
        static GOLEM_DETECTED: $SensorType<$GolemSensor>;
        static SNIFFER_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static CAMEL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static NEAREST_ADULT: $SensorType<$AdultSensor>;
        static DUMMY: $SensorType<$DummySensor>;
        static HURT_BY: $SensorType<$HurtBySensor>;
        static NEAREST_ITEMS: $SensorType<$NearestItemSensor>;
        static NEAREST_PLAYERS: $SensorType<$PlayerSensor>;
        static PIGLIN_SPECIFIC_SENSOR: $SensorType<$PiglinSpecificSensor>;
        static SECONDARY_POIS: $SensorType<$SecondaryPoiSensor>;
        static PIGLIN_BRUTE_SPECIFIC_SENSOR: $SensorType<$PiglinBruteSpecificSensor>;
        static HOGLIN_SPECIFIC_SENSOR: $SensorType<$HoglinSpecificSensor>;
        static WARDEN_ENTITY_SENSOR: $SensorType<$WardenEntitySensor>;
        constructor(arg0: $Supplier_<U>);
    }
    /**
     * Values that may be interpreted as {@link $SensorType}.
     */
    export type $SensorType_<U> = RegistryTypes.SensorType;
    export class $PlayerSensor extends $Sensor<$LivingEntity> {
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $AdultSensor extends $Sensor<$AgeableMob> {
        doTick(arg0: $ServerLevel, arg1: $AgeableMob): void;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $PiglinSpecificSensor extends $Sensor<$LivingEntity> {
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $Sensor<E extends $LivingEntity> {
        requires(): $Set<$MemoryModuleType<never>>;
        tick(arg0: $ServerLevel, arg1: E): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static isEntityAttackable(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static isEntityTargetable(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        doTick(arg0: $ServerLevel, arg1: E): void;
        static TARGETING_RANGE: number;
        constructor(arg0: number);
        constructor();
    }
    export class $VillagerBabiesSensor extends $Sensor<$LivingEntity> {
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $Sensing {
        tick(): void;
        hasLineOfSight(arg0: $Entity): boolean;
        constructor(arg0: $Mob);
    }
    export class $NearestLivingEntitySensor<T extends $LivingEntity> extends $Sensor<T> {
        radiusXZ(): number;
        radiusY(): number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $NearestVisibleLivingEntitySensor extends $Sensor<$LivingEntity> {
        getMemory(): $MemoryModuleType<$LivingEntity>;
        getVisibleEntities(arg0: $LivingEntity): ($NearestVisibleLivingEntities) | undefined;
        isMatchingEntity(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static TARGETING_RANGE: number;
        constructor();
        get memory(): $MemoryModuleType<$LivingEntity>;
    }
    export class $HurtBySensor extends $Sensor<$LivingEntity> {
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $WardenEntitySensor extends $NearestLivingEntitySensor<$Warden> {
        doTick(arg0: $ServerLevel, arg1: $Warden): void;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $VillagerHostilesSensor extends $NearestVisibleLivingEntitySensor {
        static TARGETING_RANGE: number;
        constructor();
    }
    export interface $SensorType extends RegistryMarked<RegistryTypes.SensorTypeTag, RegistryTypes.SensorType> {}
    export class $IsInWaterSensor extends $Sensor<$LivingEntity> {
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $DummySensor extends $Sensor<$LivingEntity> {
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $NearestBedSensor extends $Sensor<$Mob> {
        doTick(arg0: $ServerLevel, arg1: $Mob): void;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $NearestItemSensor extends $Sensor<$Mob> {
        doTick(arg0: $ServerLevel, arg1: $Mob): void;
        static MAX_DISTANCE_TO_WANTED_ITEM: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $GolemSensor extends $Sensor<$LivingEntity> {
        static checkForNearbyGolem(arg0: $LivingEntity): void;
        static golemDetected(arg0: $LivingEntity): void;
        static TARGETING_RANGE: number;
        constructor();
        constructor(arg0: number);
    }
    export class $AxolotlAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static TARGETING_RANGE: number;
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $SecondaryPoiSensor extends $Sensor<$Villager> {
        doTick(arg0: $ServerLevel, arg1: $Villager): void;
        static TARGETING_RANGE: number;
        constructor();
    }
}
