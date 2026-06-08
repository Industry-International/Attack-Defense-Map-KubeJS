import { $ServerLevelAccessor, $BaseSpawner } from "@package/net/minecraft/world/level";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot_, $EntityType, $SpawnGroupData, $Entity, $EquipmentSlot, $LivingEntity, $AgeableMob, $Mob, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $EnumMap, $Collection_, $List_, $Collection, $Map } from "@package/java/util";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $IReductionFunction_, $DamageContainer$Reduction_, $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $InteractionHand, $InteractionHand_, $DifficultyInstance } from "@package/net/minecraft/world";
import { $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/event/entity/living" {
    export class $MobSpawnEvent extends $EntityEvent {
        getLevel(): $ServerLevelAccessor;
        getY(): number;
        getX(): number;
        getZ(): number;
        get level(): $ServerLevelAccessor;
        get y(): number;
        get x(): number;
        get z(): number;
    }
    export class $LivingDrownEvent extends $LivingEvent implements $ICancellableEvent {
        getDamageAmount(): number;
        getBubbleCount(): number;
        setDrowning(arg0: boolean): void;
        setBubbleCount(arg0: number): void;
        setDamageAmount(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isDrowning(): boolean;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: boolean, arg2: number, arg3: number);
        constructor(arg0: $LivingEntity);
    }
    export class $LivingEntityUseItemEvent extends $LivingEvent {
        getDuration(): number;
        getItem(): $ItemStack;
        setDuration(arg0: number): void;
        getHand(): $InteractionHand;
        get item(): $ItemStack;
        get hand(): $InteractionHand;
    }
    export class $LivingDropsEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        isRecentlyHit(): boolean;
        getDrops(): $Collection<$ItemEntity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $Collection_<$ItemEntity>, arg3: boolean);
        get source(): $DamageSource;
        get recentlyHit(): boolean;
        get drops(): $Collection<$ItemEntity>;
    }
    export class $LivingChangeTargetEvent$LivingTargetType extends $Enum<$LivingChangeTargetEvent$LivingTargetType> implements $LivingChangeTargetEvent$ILivingTargetType {
        static values(): $LivingChangeTargetEvent$LivingTargetType[];
        static valueOf(arg0: string): $LivingChangeTargetEvent$LivingTargetType;
        static MOB_TARGET: $LivingChangeTargetEvent$LivingTargetType;
        static BEHAVIOR_TARGET: $LivingChangeTargetEvent$LivingTargetType;
    }
    /**
     * Values that may be interpreted as {@link $LivingChangeTargetEvent$LivingTargetType}.
     */
    export type $LivingChangeTargetEvent$LivingTargetType_ = "mob_target" | "behavior_target";
    export class $MobSpawnEvent$SpawnPlacementCheck extends $Event {
        setResult(arg0: $MobSpawnEvent$SpawnPlacementCheck$Result_): void;
        getLevel(): $ServerLevelAccessor;
        getResult(): $MobSpawnEvent$SpawnPlacementCheck$Result;
        getEntityType(): $EntityType<never>;
        getPos(): $BlockPos;
        getSpawnType(): $MobSpawnType;
        getRandom(): $RandomSource;
        getPlacementCheckResult(): boolean;
        getDefaultResult(): boolean;
        constructor(arg0: $EntityType_<never>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource, arg5: boolean);
        get level(): $ServerLevelAccessor;
        get entityType(): $EntityType<never>;
        get pos(): $BlockPos;
        get spawnType(): $MobSpawnType;
        get random(): $RandomSource;
        get placementCheckResult(): boolean;
        get defaultResult(): boolean;
    }
    export class $LivingGetProjectileEvent extends $LivingEvent {
        getProjectileItemStack(): $ItemStack;
        setProjectileItemStack(arg0: $ItemStack_): void;
        getProjectileWeaponItemStack(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemStack_);
        get projectileWeaponItemStack(): $ItemStack;
    }
    export class $LivingDeathEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
        get source(): $DamageSource;
    }
    export class $LivingSwapItemsEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $LivingUseTotemEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getHandHolding(): $InteractionHand;
        getTotem(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $ItemStack_, arg3: $InteractionHand_);
        get source(): $DamageSource;
        get handHolding(): $InteractionHand;
        get totem(): $ItemStack;
    }
    export class $MobSpawnEvent$SpawnPlacementCheck$Result extends $Enum<$MobSpawnEvent$SpawnPlacementCheck$Result> {
        static values(): $MobSpawnEvent$SpawnPlacementCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$SpawnPlacementCheck$Result;
        static SUCCEED: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static DEFAULT: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static FAIL: $MobSpawnEvent$SpawnPlacementCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$SpawnPlacementCheck$Result}.
     */
    export type $MobSpawnEvent$SpawnPlacementCheck$Result_ = "succeed" | "default" | "fail";
    export class $LivingEquipmentChangeEvent extends $LivingEvent {
        getSlot(): $EquipmentSlot;
        getFrom(): $ItemStack;
        getTo(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: $ItemStack_);
        get slot(): $EquipmentSlot;
        get from(): $ItemStack;
        get to(): $ItemStack;
    }
    export class $LivingEntityUseItemEvent$Start extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        /**
         * @deprecated
         */
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: number);
    }
    export class $LivingConversionEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $MobEffectEvent$Applicable extends $MobEffectEvent {
        setResult(arg0: $MobEffectEvent$Applicable$Result_): void;
        getResult(): $MobEffectEvent$Applicable$Result;
        getApplicationResult(): boolean;
        getEffectSource(): $Entity;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $Entity);
        get applicationResult(): boolean;
        get effectSource(): $Entity;
    }
    export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
    export class $LivingDamageEvent$Pre extends $LivingDamageEvent {
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        getOriginalDamage(): number;
        setNewDamage(arg0: number): void;
        getNewDamage(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get container(): $DamageContainer;
        get originalDamage(): number;
    }
    export class $ArmorHurtEvent$ArmorEntry {
        originalDamage: number;
        newDamage: number;
        armorItemStack: $ItemStack;
        constructor(arg0: $ItemStack_, arg1: number);
    }
    export class $BabyEntitySpawnEvent extends $Event implements $ICancellableEvent {
        getChild(): $AgeableMob;
        getCausedByPlayer(): $Player;
        getParentA(): $Mob;
        getParentB(): $Mob;
        setChild(arg0: $AgeableMob): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $Mob, arg2: $AgeableMob);
        get causedByPlayer(): $Player;
        get parentA(): $Mob;
        get parentB(): $Mob;
    }
    export class $LivingEntityUseItemEvent$Tick extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
    export class $MobDespawnEvent$Result extends $Enum<$MobDespawnEvent$Result> {
        static values(): $MobDespawnEvent$Result[];
        static valueOf(arg0: string): $MobDespawnEvent$Result;
        static DENY: $MobDespawnEvent$Result;
        static ALLOW: $MobDespawnEvent$Result;
        static DEFAULT: $MobDespawnEvent$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobDespawnEvent$Result}.
     */
    export type $MobDespawnEvent$Result_ = "allow" | "default" | "deny";
    export class $LivingEvent extends $EntityEvent {
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $LivingSwapItemsEvent$Hands extends $LivingSwapItemsEvent implements $ICancellableEvent {
        setItemSwappedToMainHand(arg0: $ItemStack_): void;
        setItemSwappedToOffHand(arg0: $ItemStack_): void;
        getItemSwappedToOffHand(): $ItemStack;
        getItemSwappedToMainHand(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity);
    }
    export class $LivingKnockBackEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalRatioX(): number;
        getOriginalRatioZ(): number;
        getOriginalStrength(): number;
        getRatioX(): number;
        getRatioZ(): number;
        setStrength(arg0: number): void;
        getStrength(): number;
        setRatioX(arg0: number): void;
        setRatioZ(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number);
        get originalRatioX(): number;
        get originalRatioZ(): number;
        get originalStrength(): number;
    }
    export class $MobSplitEvent extends $Event implements $ICancellableEvent {
        getParent(): $Mob;
        getChildren(): $List<$Mob>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $List_<$Mob>);
        get parent(): $Mob;
        get children(): $List<$Mob>;
    }
    export class $SpawnClusterSizeEvent extends $LivingEvent {
        getSize(): number;
        setSize(arg0: number): void;
        constructor(arg0: $Mob);
    }
    export class $MobEffectEvent extends $LivingEvent {
        getEffectInstance(): $MobEffectInstance;
        get effectInstance(): $MobEffectInstance;
    }
    export class $FinalizeSpawnEvent extends $MobSpawnEvent implements $ICancellableEvent {
        getSpawner(): $Either<$BlockEntity, $Entity>;
        getDifficulty(): $DifficultyInstance;
        setSpawnCancelled(arg0: boolean): void;
        getSpawnType(): $MobSpawnType;
        isSpawnCancelled(): boolean;
        setDifficulty(arg0: $DifficultyInstance): void;
        getSpawnData(): $SpawnGroupData;
        setSpawnData(arg0: $SpawnGroupData): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: number, arg3: number, arg4: number, arg5: $DifficultyInstance, arg6: $MobSpawnType_, arg7: $SpawnGroupData, arg8: $Either<$BlockEntity, $Entity>);
        get spawner(): $Either<$BlockEntity, $Entity>;
        get spawnType(): $MobSpawnType;
    }
    export class $LivingHealEvent extends $LivingEvent implements $ICancellableEvent {
        getAmount(): number;
        setAmount(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number);
    }
    export class $LivingConversionEvent$Post extends $LivingConversionEvent {
        getOutcome(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity);
        get outcome(): $LivingEntity;
    }
    export class $EnderManAngerEvent extends $LivingEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $EnderMan, arg1: $Player);
        get player(): $Player;
    }
    export class $MobDespawnEvent extends $MobSpawnEvent {
        setResult(arg0: $MobDespawnEvent$Result_): void;
        getResult(): $MobDespawnEvent$Result;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor);
    }
    export class $MobEffectEvent$Applicable$Result extends $Enum<$MobEffectEvent$Applicable$Result> {
        static values(): $MobEffectEvent$Applicable$Result[];
        static valueOf(arg0: string): $MobEffectEvent$Applicable$Result;
        static DO_NOT_APPLY: $MobEffectEvent$Applicable$Result;
        static APPLY: $MobEffectEvent$Applicable$Result;
        static DEFAULT: $MobEffectEvent$Applicable$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectEvent$Applicable$Result}.
     */
    export type $MobEffectEvent$Applicable$Result_ = "apply" | "default" | "do_not_apply";
    export class $LivingFallEvent extends $LivingEvent implements $ICancellableEvent {
        setDamageMultiplier(arg0: number): void;
        setDistance(arg0: number): void;
        getDistance(): number;
        getDamageMultiplier(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number);
    }
    export class $MobEffectEvent$Added extends $MobEffectEvent {
        getOldEffectInstance(): $MobEffectInstance;
        getEffectSource(): $Entity;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $MobEffectInstance, arg3: $Entity);
        get oldEffectInstance(): $MobEffectInstance;
        get effectSource(): $Entity;
    }
    export class $LivingEvent$LivingVisibilityEvent extends $LivingEvent {
        modifyVisibility(arg0: number): void;
        getLookingEntity(): $Entity;
        getVisibilityModifier(): number;
        constructor(arg0: $LivingEntity, arg1: $Entity, arg2: number);
        get lookingEntity(): $Entity;
        get visibilityModifier(): number;
    }
    export class $LivingBreatheEvent extends $LivingEvent {
        getRefillAirAmount(): number;
        setRefillAirAmount(arg0: number): void;
        setCanBreathe(arg0: boolean): void;
        getConsumeAirAmount(): number;
        setConsumeAirAmount(arg0: number): void;
        canBreathe(): boolean;
        constructor(arg0: $LivingEntity, arg1: boolean, arg2: number, arg3: number);
    }
    export class $MobSpawnEvent$PositionCheck$Result extends $Enum<$MobSpawnEvent$PositionCheck$Result> {
        static values(): $MobSpawnEvent$PositionCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$PositionCheck$Result;
        static SUCCEED: $MobSpawnEvent$PositionCheck$Result;
        static DEFAULT: $MobSpawnEvent$PositionCheck$Result;
        static FAIL: $MobSpawnEvent$PositionCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$PositionCheck$Result}.
     */
    export type $MobSpawnEvent$PositionCheck$Result_ = "succeed" | "default" | "fail";
    export class $LivingConversionEvent$Pre extends $LivingConversionEvent implements $ICancellableEvent {
        getOutcome(): $EntityType<$LivingEntity>;
        setConversionTimer(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $EntityType_<$LivingEntity>, arg2: $Consumer_<number>);
        get outcome(): $EntityType<$LivingEntity>;
        set conversionTimer(value: number);
    }
    export class $LivingIncomingDamageEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        getOriginalAmount(): number;
        getAmount(): number;
        setInvulnerabilityTicks(arg0: number): void;
        addReductionModifier(arg0: $DamageContainer$Reduction_, arg1: $IReductionFunction_): void;
        setAmount(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get container(): $DamageContainer;
        get originalAmount(): number;
        set invulnerabilityTicks(value: number);
    }
    export class $LivingExperienceDropEvent extends $LivingEvent implements $ICancellableEvent {
        setDroppedExperience(arg0: number): void;
        getDroppedExperience(): number;
        getAttackingPlayer(): $Player;
        getOriginalExperience(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $Player, arg2: number);
        get attackingPlayer(): $Player;
        get originalExperience(): number;
    }
    export class $AnimalTameEvent extends $LivingEvent implements $ICancellableEvent {
        getAnimal(): $Animal;
        getTamer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Animal, arg1: $Player);
        get animal(): $Animal;
        get tamer(): $Player;
    }
    export class $LivingChangeTargetEvent extends $LivingEvent implements $ICancellableEvent {
        getTargetType(): $LivingChangeTargetEvent$ILivingTargetType;
        getNewAboutToBeSetTarget(): $LivingEntity;
        setNewAboutToBeSetTarget(arg0: $LivingEntity): void;
        getOriginalAboutToBeSetTarget(): $LivingEntity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: $LivingChangeTargetEvent$ILivingTargetType);
        get targetType(): $LivingChangeTargetEvent$ILivingTargetType;
        get originalAboutToBeSetTarget(): $LivingEntity;
    }
    export class $MobEffectEvent$Remove extends $MobEffectEvent implements $ICancellableEvent {
        getEffect(): $Holder<$MobEffect>;
        getCure(): $EffectCure;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: $EffectCure);
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $EffectCure);
        get effect(): $Holder<$MobEffect>;
        get cure(): $EffectCure;
    }
    export class $EffectParticleModificationEvent extends $LivingEvent {
        setParticleOptions(arg0: $ParticleOptions_): void;
        getParticleOptions(): $ParticleOptions;
        getOriginalParticleOptions(): $ParticleOptions;
        isVisible(): boolean;
        getEffect(): $MobEffectInstance;
        setVisible(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
        get originalParticleOptions(): $ParticleOptions;
        get effect(): $MobEffectInstance;
    }
    export class $LivingEvent$LivingJumpEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $LivingDamageEvent$Post extends $LivingDamageEvent {
        getSource(): $DamageSource;
        getShieldDamage(): number;
        getOriginalDamage(): number;
        getBlockedDamage(): number;
        getNewDamage(): number;
        getReduction(arg0: $DamageContainer$Reduction_): number;
        getPostAttackInvulnerabilityTicks(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get shieldDamage(): number;
        get originalDamage(): number;
        get blockedDamage(): number;
        get newDamage(): number;
        get postAttackInvulnerabilityTicks(): number;
    }
    export class $LivingDestroyBlockEvent extends $LivingEvent implements $ICancellableEvent {
        getState(): $BlockState;
        getPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $LivingChangeTargetEvent$ILivingTargetType {
    }
    export interface $LivingChangeTargetEvent$ILivingTargetType {
    }
    export class $LivingShieldBlockEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalBlock(): boolean;
        setShieldDamage(arg0: number): void;
        getDamageSource(): $DamageSource;
        getDamageContainer(): $DamageContainer;
        setBlockedDamage(arg0: number): void;
        getBlockedDamage(): number;
        shieldDamage(): number;
        getOriginalBlockedDamage(): number;
        getBlocked(): boolean;
        setBlocked(arg0: boolean): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer, arg2: boolean);
        get originalBlock(): boolean;
        get damageSource(): $DamageSource;
        get damageContainer(): $DamageContainer;
        get originalBlockedDamage(): number;
    }
    export class $LivingEntityUseItemEvent$Finish extends $LivingEntityUseItemEvent {
        getResultStack(): $ItemStack;
        setResultStack(arg0: $ItemStack_): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_);
    }
    export class $ArmorHurtEvent extends $LivingEvent implements $ICancellableEvent {
        getArmorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        getOriginalDamage(arg0: $EquipmentSlot_): number;
        getArmorItemStack(arg0: $EquipmentSlot_): $ItemStack;
        getDamageSource(): $DamageSource;
        setNewDamage(arg0: $EquipmentSlot_, arg1: number): void;
        getNewDamage(arg0: $EquipmentSlot_): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $EnumMap<$EquipmentSlot_, $ArmorHurtEvent$ArmorEntry>, arg1: $LivingEntity, arg2: $DamageSource_);
        get armorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        get damageSource(): $DamageSource;
    }
    export class $MobSpawnEvent$PositionCheck extends $MobSpawnEvent {
        setResult(arg0: $MobSpawnEvent$PositionCheck$Result_): void;
        getResult(): $MobSpawnEvent$PositionCheck$Result;
        getSpawner(): $BaseSpawner;
        getSpawnType(): $MobSpawnType;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BaseSpawner);
        get spawner(): $BaseSpawner;
        get spawnType(): $MobSpawnType;
    }
    export class $LivingDamageEvent extends $LivingEvent {
    }
    export class $MobEffectEvent$Expired extends $MobEffectEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
    }
}
