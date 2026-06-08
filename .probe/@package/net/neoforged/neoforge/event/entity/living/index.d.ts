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
        getY(): number;
        getX(): number;
        getLevel(): $ServerLevelAccessor;
        getZ(): number;
        get y(): number;
        get x(): number;
        get level(): $ServerLevelAccessor;
        get z(): number;
    }
    export class $LivingDrownEvent extends $LivingEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        getBubbleCount(): number;
        getDamageAmount(): number;
        setBubbleCount(arg0: number): void;
        setDamageAmount(arg0: number): void;
        setDrowning(arg0: boolean): void;
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
        getDrops(): $Collection<$ItemEntity>;
        isRecentlyHit(): boolean;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $Collection_<$ItemEntity>, arg3: boolean);
        get source(): $DamageSource;
        get drops(): $Collection<$ItemEntity>;
        get recentlyHit(): boolean;
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
        getPlacementCheckResult(): boolean;
        getDefaultResult(): boolean;
        setResult(arg0: $MobSpawnEvent$SpawnPlacementCheck$Result_): void;
        getLevel(): $ServerLevelAccessor;
        getResult(): $MobSpawnEvent$SpawnPlacementCheck$Result;
        getPos(): $BlockPos;
        getSpawnType(): $MobSpawnType;
        getRandom(): $RandomSource;
        getEntityType(): $EntityType<never>;
        constructor(arg0: $EntityType_<never>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource, arg5: boolean);
        get placementCheckResult(): boolean;
        get defaultResult(): boolean;
        get level(): $ServerLevelAccessor;
        get pos(): $BlockPos;
        get spawnType(): $MobSpawnType;
        get random(): $RandomSource;
        get entityType(): $EntityType<never>;
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
        getEffectSource(): $Entity;
        getApplicationResult(): boolean;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $Entity);
        get effectSource(): $Entity;
        get applicationResult(): boolean;
    }
    export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
    export class $LivingDamageEvent$Pre extends $LivingDamageEvent {
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        setNewDamage(arg0: number): void;
        getNewDamage(): number;
        getOriginalDamage(): number;
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
        getParentB(): $Mob;
        getParentA(): $Mob;
        setChild(arg0: $AgeableMob): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $Mob, arg2: $AgeableMob);
        get causedByPlayer(): $Player;
        get parentB(): $Mob;
        get parentA(): $Mob;
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
        getItemSwappedToOffHand(): $ItemStack;
        getItemSwappedToMainHand(): $ItemStack;
        setItemSwappedToOffHand(arg0: $ItemStack_): void;
        setItemSwappedToMainHand(arg0: $ItemStack_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity);
    }
    export class $LivingKnockBackEvent extends $LivingEvent implements $ICancellableEvent {
        getStrength(): number;
        setStrength(arg0: number): void;
        getRatioX(): number;
        getRatioZ(): number;
        getOriginalStrength(): number;
        getOriginalRatioX(): number;
        getOriginalRatioZ(): number;
        setRatioX(arg0: number): void;
        setRatioZ(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number);
        get originalStrength(): number;
        get originalRatioX(): number;
        get originalRatioZ(): number;
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
        setDifficulty(arg0: $DifficultyInstance): void;
        setSpawnData(arg0: $SpawnGroupData): void;
        getSpawnData(): $SpawnGroupData;
        setSpawnCancelled(arg0: boolean): void;
        getSpawnType(): $MobSpawnType;
        getDifficulty(): $DifficultyInstance;
        isSpawnCancelled(): boolean;
        getSpawner(): $Either<$BlockEntity, $Entity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: number, arg3: number, arg4: number, arg5: $DifficultyInstance, arg6: $MobSpawnType_, arg7: $SpawnGroupData, arg8: $Either<$BlockEntity, $Entity>);
        get spawnType(): $MobSpawnType;
        get spawner(): $Either<$BlockEntity, $Entity>;
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
        getDamageMultiplier(): number;
        setDistance(arg0: number): void;
        getDistance(): number;
        setDamageMultiplier(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number);
    }
    export class $MobEffectEvent$Added extends $MobEffectEvent {
        getEffectSource(): $Entity;
        getOldEffectInstance(): $MobEffectInstance;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $MobEffectInstance, arg3: $Entity);
        get effectSource(): $Entity;
        get oldEffectInstance(): $MobEffectInstance;
    }
    export class $LivingEvent$LivingVisibilityEvent extends $LivingEvent {
        getVisibilityModifier(): number;
        modifyVisibility(arg0: number): void;
        getLookingEntity(): $Entity;
        constructor(arg0: $LivingEntity, arg1: $Entity, arg2: number);
        get visibilityModifier(): number;
        get lookingEntity(): $Entity;
    }
    export class $LivingBreatheEvent extends $LivingEvent {
        setConsumeAirAmount(arg0: number): void;
        getConsumeAirAmount(): number;
        getRefillAirAmount(): number;
        setCanBreathe(arg0: boolean): void;
        setRefillAirAmount(arg0: number): void;
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
        setConversionTimer(arg0: number): void;
        getOutcome(): $EntityType<$LivingEntity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $EntityType_<$LivingEntity>, arg2: $Consumer_<number>);
        set conversionTimer(value: number);
        get outcome(): $EntityType<$LivingEntity>;
    }
    export class $LivingIncomingDamageEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        getAmount(): number;
        setInvulnerabilityTicks(arg0: number): void;
        addReductionModifier(arg0: $DamageContainer$Reduction_, arg1: $IReductionFunction_): void;
        getOriginalAmount(): number;
        setAmount(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get container(): $DamageContainer;
        set invulnerabilityTicks(value: number);
        get originalAmount(): number;
    }
    export class $LivingExperienceDropEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalExperience(): number;
        getAttackingPlayer(): $Player;
        setDroppedExperience(arg0: number): void;
        getDroppedExperience(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $Player, arg2: number);
        get originalExperience(): number;
        get attackingPlayer(): $Player;
    }
    export class $AnimalTameEvent extends $LivingEvent implements $ICancellableEvent {
        getTamer(): $Player;
        getAnimal(): $Animal;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Animal, arg1: $Player);
        get tamer(): $Player;
        get animal(): $Animal;
    }
    export class $LivingChangeTargetEvent extends $LivingEvent implements $ICancellableEvent {
        getTargetType(): $LivingChangeTargetEvent$ILivingTargetType;
        getNewAboutToBeSetTarget(): $LivingEntity;
        getOriginalAboutToBeSetTarget(): $LivingEntity;
        setNewAboutToBeSetTarget(arg0: $LivingEntity): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: $LivingChangeTargetEvent$ILivingTargetType);
        get targetType(): $LivingChangeTargetEvent$ILivingTargetType;
        get originalAboutToBeSetTarget(): $LivingEntity;
    }
    export class $MobEffectEvent$Remove extends $MobEffectEvent implements $ICancellableEvent {
        getCure(): $EffectCure;
        getEffect(): $Holder<$MobEffect>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: $EffectCure);
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $EffectCure);
        get cure(): $EffectCure;
        get effect(): $Holder<$MobEffect>;
    }
    export class $EffectParticleModificationEvent extends $LivingEvent {
        isVisible(): boolean;
        setVisible(arg0: boolean): void;
        getParticleOptions(): $ParticleOptions;
        getEffect(): $MobEffectInstance;
        setParticleOptions(arg0: $ParticleOptions_): void;
        getOriginalParticleOptions(): $ParticleOptions;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
        get effect(): $MobEffectInstance;
        get originalParticleOptions(): $ParticleOptions;
    }
    export class $LivingEvent$LivingJumpEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $LivingDamageEvent$Post extends $LivingDamageEvent {
        getSource(): $DamageSource;
        getBlockedDamage(): number;
        getNewDamage(): number;
        getReduction(arg0: $DamageContainer$Reduction_): number;
        getPostAttackInvulnerabilityTicks(): number;
        getOriginalDamage(): number;
        getShieldDamage(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get blockedDamage(): number;
        get newDamage(): number;
        get postAttackInvulnerabilityTicks(): number;
        get originalDamage(): number;
        get shieldDamage(): number;
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
        getBlockedDamage(): number;
        setBlockedDamage(arg0: number): void;
        shieldDamage(): number;
        getDamageContainer(): $DamageContainer;
        getBlocked(): boolean;
        getOriginalBlockedDamage(): number;
        getDamageSource(): $DamageSource;
        setShieldDamage(arg0: number): void;
        getOriginalBlock(): boolean;
        setBlocked(arg0: boolean): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer, arg2: boolean);
        get damageContainer(): $DamageContainer;
        get originalBlockedDamage(): number;
        get damageSource(): $DamageSource;
        get originalBlock(): boolean;
    }
    export class $LivingEntityUseItemEvent$Finish extends $LivingEntityUseItemEvent {
        setResultStack(arg0: $ItemStack_): void;
        getResultStack(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_);
    }
    export class $ArmorHurtEvent extends $LivingEvent implements $ICancellableEvent {
        setNewDamage(arg0: $EquipmentSlot_, arg1: number): void;
        getNewDamage(arg0: $EquipmentSlot_): number;
        getArmorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        getDamageSource(): $DamageSource;
        getOriginalDamage(arg0: $EquipmentSlot_): number;
        getArmorItemStack(arg0: $EquipmentSlot_): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $EnumMap<$EquipmentSlot_, $ArmorHurtEvent$ArmorEntry>, arg1: $LivingEntity, arg2: $DamageSource_);
        get armorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        get damageSource(): $DamageSource;
    }
    export class $MobSpawnEvent$PositionCheck extends $MobSpawnEvent {
        setResult(arg0: $MobSpawnEvent$PositionCheck$Result_): void;
        getResult(): $MobSpawnEvent$PositionCheck$Result;
        getSpawnType(): $MobSpawnType;
        getSpawner(): $BaseSpawner;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BaseSpawner);
        get spawnType(): $MobSpawnType;
        get spawner(): $BaseSpawner;
    }
    export class $LivingDamageEvent extends $LivingEvent {
    }
    export class $MobEffectEvent$Expired extends $MobEffectEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
    }
}
