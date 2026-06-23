import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Entity, $PathfinderMob, $TamableAnimal, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $EnumSet, $Set } from "@package/java/util";
import { $AbstractVillager } from "@package/net/minecraft/world/entity/npc";
import { $AbstractHorse, $Llama } from "@package/net/minecraft/world/entity/animal/horse";
import { $AbstractSchoolingFish, $Dolphin, $Cat, $ShoulderRidingEntity, $Wolf, $IronGolem, $Animal } from "@package/net/minecraft/world/entity/animal";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Predicate, $Supplier_, $Function_, $Predicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Zombie, $RangedAttackMob_, $Monster, $Creeper } from "@package/net/minecraft/world/entity/monster";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Enum, $Class } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
export * as target from "@package/net/minecraft/world/entity/ai/goal/target";

declare module "@package/net/minecraft/world/entity/ai/goal" {
    /**
     * This is an internal object used by the GoalSelector to choose between Goals.
     * In most cases, it should not be constructed directly.
     * 
     * For information on how individual methods work, see the javadocs for Goal:
     * `Goal`
     */
    export class $WrappedGoal extends $Goal {
        getPriority(): number;
        /**
         * @return whether the goal should continue executing
         */
        isRunning(): boolean;
        /**
         * Gets the private goal enclosed by this WrappedGoal.
         */
        getGoal(): $Goal;
        canBeReplacedBy(other: $WrappedGoal): boolean;
        constructor(priority: number, goal: $Goal);
        get priority(): number;
        get running(): boolean;
        get goal(): $Goal;
    }
    export class $MoveTowardsRestrictionGoal extends $Goal {
        constructor(mob: $PathfinderMob, speedModifier: number);
    }
    export class $BreakDoorGoal extends $DoorInteractGoal {
        getDoorBreakTime(): number;
        mob: $Mob;
        breakTime: number;
        doorBreakTime: number;
        hasDoor: boolean;
        lastBreakProgress: number;
        doorPos: $BlockPos;
        constructor(mob: $Mob, validDifficulties: $Predicate_<$Difficulty>);
        constructor(mob: $Mob, doorBreakTime: number, validDifficulties: $Predicate_<$Difficulty>);
    }
    export class $MoveThroughVillageGoal extends $Goal {
        mob: $PathfinderMob;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: boolean, onlyAtNight: number, distanceToPoi: $BooleanSupplier_);
    }
    export class $FollowParentGoal extends $Goal {
        static DONT_FOLLOW_IF_CLOSER_THAN: number;
        static HORIZONTAL_SCAN_RANGE: number;
        static VERTICAL_SCAN_RANGE: number;
        constructor(animal: $Animal, speedModifier: number);
    }
    export class $LookAtTradingPlayerGoal extends $LookAtPlayerGoal {
        mob: $Mob;
        static DEFAULT_PROBABILITY: number;
        probability: number;
        lookAtType: $Class<$LivingEntity>;
        lookAt: $Entity;
        lookAtContext: $TargetingConditions;
        lookDistance: number;
        constructor(villager: $AbstractVillager);
    }
    export class $WaterAvoidingRandomFlyingGoal extends $WaterAvoidingRandomStrollGoal {
        speedModifier: number;
        mob: $PathfinderMob;
        static PROBABILITY: number;
        static DEFAULT_INTERVAL: number;
        forceTrigger: boolean;
        wantedZ: number;
        wantedY: number;
        probability: number;
        wantedX: number;
        interval: number;
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $DoorInteractGoal extends $Goal {
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isOpen(): boolean;
        setOpen(open: boolean): void;
        mob: $Mob;
        hasDoor: boolean;
        doorPos: $BlockPos;
        constructor(mob: $Mob);
    }
    export class $GoalSelector {
        /**
         * Ticks every goal in the selector.
         * Attempts to start each goal based on if it can be used, or stop it if it can't.
         */
        tick(): void;
        /**
         * Add a goal to the GoalSelector with a certain priority. Lower numbers are higher priority.
         */
        addGoal(priority: number, goal: $Goal): void;
        /**
         * Remove the goal from the GoalSelector. This must be the same object as the goal you are trying to remove, which may not always be accessible.
         */
        removeGoal(goal: $Goal): void;
        setControlFlag(flag: $Goal$Flag_, enabled: boolean): void;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        tickRunningGoals(tickAllRunning: boolean): void;
        disableControlFlag(flag: $Goal$Flag_): void;
        enableControlFlag(flag: $Goal$Flag_): void;
        getAvailableGoals(): $Set<$WrappedGoal>;
        constructor(profiler: $Supplier_<$ProfilerFiller>);
        get availableGoals(): $Set<$WrappedGoal>;
    }
    export class $RunAroundLikeCrazyGoal extends $Goal {
        constructor(horse: $AbstractHorse, speedModifier: number);
    }
    export class $AvoidEntityGoal<T extends $LivingEntity> extends $Goal {
        mob: $PathfinderMob;
        path: $Path;
        toAvoid: T;
        maxDist: number;
        avoidClass: $Class<T>;
        avoidPredicate: $Predicate<$LivingEntity>;
        predicateOnAvoidEntity: $Predicate<$LivingEntity>;
        pathNav: $PathNavigation;
        constructor(mob: $PathfinderMob, entityClassToAvoid: $Class<T>, maxDistance: number, walkSpeedModifier: number, arg4: number, sprintSpeedModifier: $Predicate_<$LivingEntity>);
        /**
         * Goal that helps mobs avoid mobs of a specific class
         */
        constructor(mob: $PathfinderMob, entityClassToAvoid: $Class<T>, avoidPredicate: $Predicate_<$LivingEntity>, maxDistance: number, walkSpeedModifier: number, arg5: number, sprintSpeedModifier: $Predicate_<$LivingEntity>);
        constructor(mob: $PathfinderMob, entityClassToAvoid: $Class<T>, maxDistance: number, walkSpeedModifier: number, arg4: number);
    }
    export class $LeapAtTargetGoal extends $Goal {
        constructor(mob: $Mob, yd: number);
    }
    export class $SitWhenOrderedToGoal extends $Goal {
        constructor(mob: $TamableAnimal);
    }
    export class $RangedBowAttackGoal<T extends $Mob> extends $Goal {
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isHoldingBow(): boolean;
        setMinAttackInterval(attackCooldown: number): void;
        constructor<M extends $Monster>(mob: M, speedModifier: number, arg2: number, attackIntervalMin: number);
        constructor(arg0: T, arg1: number, arg2: number, arg3: number);
        get holdingBow(): boolean;
        set minAttackInterval(value: number);
    }
    export class $MoveToBlockGoal extends $Goal {
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        findNearestBlock(): boolean;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        moveMobToBlock(): void;
        acceptedDistance(): number;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isReachedTarget(): boolean;
        getMoveToTarget(): $BlockPos;
        /**
         * Return `true` to set given position as destination
         */
        isValidTarget(level: $LevelReader, pos: $BlockPos_): boolean;
        nextStartTick(creature: $PathfinderMob): number;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        shouldRecalculatePath(): boolean;
        speedModifier: number;
        mob: $PathfinderMob;
        tryTicks: number;
        blockPos: $BlockPos;
        verticalSearchStart: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number, searchRange: number);
        get reachedTarget(): boolean;
        get moveToTarget(): $BlockPos;
    }
    export class $FloatGoal extends $Goal {
        constructor(mob: $Mob);
    }
    export class $CatSitOnBlockGoal extends $MoveToBlockGoal {
        speedModifier: number;
        mob: $PathfinderMob;
        tryTicks: number;
        blockPos: $BlockPos;
        verticalSearchStart: number;
        constructor(cat: $Cat, speedModifier: number);
    }
    export class $SwellGoal extends $Goal {
        constructor(creeper: $Creeper);
    }
    export class $RangedCrossbowAttackGoal<T extends $Mob> extends $Goal {
        static PATHFINDING_DELAY_RANGE: $UniformInt;
        constructor<M extends $Monster>(mob: M, speedModifier: number, arg2: number);
        constructor(arg0: T, arg1: number, arg2: number);
    }
    export class $TradeWithPlayerGoal extends $Goal {
        constructor(mob: $AbstractVillager);
    }
    export class $LandOnOwnersShoulderGoal extends $Goal {
        constructor(entity: $ShoulderRidingEntity);
    }
    export class $RangedCrossbowAttackGoal$CrossbowState extends $Enum<$RangedCrossbowAttackGoal$CrossbowState> {
    }
    /**
     * Values that may be interpreted as {@link $RangedCrossbowAttackGoal$CrossbowState}.
     */
    export type $RangedCrossbowAttackGoal$CrossbowState_ = "uncharged" | "charging" | "charged" | "ready_to_attack";
    export class $LlamaFollowCaravanGoal extends $Goal {
        llama: $Llama;
        constructor(llama: $Llama, speedModifier: number);
    }
    export class $GolemRandomStrollInVillageGoal extends $RandomStrollGoal {
        speedModifier: number;
        mob: $PathfinderMob;
        static DEFAULT_INTERVAL: number;
        forceTrigger: boolean;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        interval: number;
        constructor(mob: $PathfinderMob, speedModifier: number);
    }
    export class $ClimbOnTopOfPowderSnowGoal extends $Goal {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $LookAtPlayerGoal extends $Goal {
        mob: $Mob;
        static DEFAULT_PROBABILITY: number;
        probability: number;
        lookAtType: $Class<$LivingEntity>;
        lookAt: $Entity;
        lookAtContext: $TargetingConditions;
        lookDistance: number;
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number, probability: number, onlyHorizontal: boolean);
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number, probability: number);
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number);
    }
    export class $BoatGoals extends $Enum<$BoatGoals> {
    }
    /**
     * Values that may be interpreted as {@link $BoatGoals}.
     */
    export type $BoatGoals_ = "go_to_boat" | "go_in_boat_direction";
    /**
     * A goal allowing a mob to follow others. The mob must have Ground or Flying navigation.
     */
    export class $FollowMobGoal extends $Goal {
        /**
         * Constructs a goal allowing a mob to follow others. The mob must have Ground or Flying navigation.
         */
        constructor(mob: $Mob, speedModifier: number, arg2: number, stopDistance: number);
    }
    export class $RangedAttackGoal extends $Goal {
        constructor(rangedAttackMob: $RangedAttackMob_, speedModifier: number, arg2: number, attackInterval: number);
        constructor(rangedAttackMob: $RangedAttackMob_, speedModifier: number, arg2: number, attackIntervalMin: number, attackIntervalMax: number);
    }
    export class $Goal$Flag extends $Enum<$Goal$Flag> {
        static values(): $Goal$Flag[];
        static valueOf(arg0: string): $Goal$Flag;
        static TARGET: $Goal$Flag;
        static MOVE: $Goal$Flag;
        static LOOK: $Goal$Flag;
        static JUMP: $Goal$Flag;
    }
    /**
     * Values that may be interpreted as {@link $Goal$Flag}.
     */
    export type $Goal$Flag_ = "move" | "look" | "jump" | "target";
    export class $DolphinJumpGoal extends $JumpGoal {
        constructor(dolphin: $Dolphin, interval: number);
    }
    export class $RandomLookAroundGoal extends $Goal {
        constructor(mob: $Mob);
    }
    export class $PathfindToRaidGoal<T extends $Raider> extends $Goal {
        constructor(mob: T);
    }
    export class $OfferFlowerGoal extends $Goal {
        static OFFER_TICKS: number;
        constructor(golem: $IronGolem);
    }
    export class $RandomSwimmingGoal extends $RandomStrollGoal {
        speedModifier: number;
        mob: $PathfinderMob;
        static DEFAULT_INTERVAL: number;
        forceTrigger: boolean;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        interval: number;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number);
    }
    export class $OcelotAttackGoal extends $Goal {
        constructor(mob: $Mob);
    }
    export class $TryFindWaterGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $RemoveBlockGoal extends $MoveToBlockGoal {
        playBreakSound(level: $Level_, pos: $BlockPos_): void;
        playDestroyProgressSound(level: $LevelAccessor, pos: $BlockPos_): void;
        speedModifier: number;
        mob: $PathfinderMob;
        tryTicks: number;
        blockPos: $BlockPos;
        verticalSearchStart: number;
        constructor(blockToRemove: $Block_, removerMob: $PathfinderMob, speedModifier: number, arg3: number);
    }
    export class $StrollThroughVillageGoal extends $Goal {
        constructor(mob: $PathfinderMob, interval: number);
    }
    export class $InteractGoal extends $LookAtPlayerGoal {
        mob: $Mob;
        static DEFAULT_PROBABILITY: number;
        probability: number;
        lookAtType: $Class<$LivingEntity>;
        lookAt: $Entity;
        lookAtContext: $TargetingConditions;
        lookDistance: number;
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number);
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number, arg3: number);
    }
    export class $TemptGoal extends $Goal {
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isRunning(): boolean;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        canScare(): boolean;
        mob: $PathfinderMob;
        player: $Player;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: $Predicate_<$ItemStack>, items: boolean);
        get running(): boolean;
    }
    export class $FleeSunGoal extends $Goal {
        getHidePos(): $Vec3;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        setWantedPos(): boolean;
        mob: $PathfinderMob;
        constructor(mob: $PathfinderMob, speedModifier: number);
        get hidePos(): $Vec3;
    }
    export class $EatBlockGoal extends $Goal {
        /**
         * Number of ticks since the entity started to eat grass
         */
        getEatAnimationTick(): number;
        constructor(mob: $Mob);
        get eatAnimationTick(): number;
    }
    export class $CatLieOnBedGoal extends $MoveToBlockGoal {
        speedModifier: number;
        mob: $PathfinderMob;
        tryTicks: number;
        blockPos: $BlockPos;
        verticalSearchStart: number;
        constructor(cat: $Cat, speedModifier: number, arg2: number);
    }
    export class $FollowFlockLeaderGoal extends $Goal {
        nextStartTick(taskOwner: $AbstractSchoolingFish): number;
        constructor(fish: $AbstractSchoolingFish);
    }
    export class $MoveBackToVillageGoal extends $RandomStrollGoal {
        speedModifier: number;
        mob: $PathfinderMob;
        static DEFAULT_INTERVAL: number;
        forceTrigger: boolean;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        interval: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: boolean);
    }
    export class $BreathAirGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $PanicGoal extends $Goal {
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isRunning(): boolean;
        lookForWater(level: $BlockGetter, entity: $Entity, range: number): $BlockPos;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        findRandomPosition(): boolean;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        shouldPanic(): boolean;
        static WATER_CHECK_DISTANCE_VERTICAL: number;
        speedModifier: number;
        posX: number;
        mob: $PathfinderMob;
        posY: number;
        posZ: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: $Function_<$PathfinderMob, $TagKey<$DamageType>>);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: $TagKey_<$DamageType>);
        constructor(mob: $PathfinderMob, speedModifier: number);
        get running(): boolean;
    }
    export class $JumpGoal extends $Goal {
        constructor();
    }
    export class $BegGoal extends $Goal {
        constructor(wolf: $Wolf, lookDistance: number);
    }
    export class $RestrictSunGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $FollowOwnerGoal extends $Goal {
        constructor(tamable: $TamableAnimal, speedModifier: number, arg2: number, startDistance: number);
    }
    export class $MeleeAttackGoal extends $Goal {
        canPerformAttack(entity: $LivingEntity): boolean;
        getAttackInterval(): number;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isTimeToAttack(): boolean;
        checkAndPerformAttack(target: $LivingEntity): void;
        getTicksUntilNextAttack(): number;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        resetAttackCooldown(): void;
        mob: $PathfinderMob;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: boolean);
        get attackInterval(): number;
        get timeToAttack(): boolean;
        get ticksUntilNextAttack(): number;
    }
    export class $Goal {
        setFlags(flagSet: $EnumSet<$Goal$Flag_>): void;
        /**
         * Called when the goal is about to start executing
         */
        start(): void;
        /**
         * Called when the goal is about to start executing
         */
        stop(): void;
        /**
         * @return whether the goal should continue executing
         */
        canUse(): boolean;
        /**
         * Called when the goal is about to start executing
         */
        tick(): void;
        getFlags(): $EnumSet<$Goal$Flag>;
        static reducedTickDelay(adjustment: number): number;
        /**
         * @return whether the goal should continue executing
         */
        isInterruptable(): boolean;
        adjustedTickDelay(adjustment: number): number;
        /**
         * @return whether the goal should continue executing
         */
        canContinueToUse(): boolean;
        /**
         * @return whether the goal should continue executing
         */
        requiresUpdateEveryTick(): boolean;
        constructor();
        get interruptable(): boolean;
    }
    export class $FollowBoatGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $RandomStrollGoal extends $Goal {
        getPosition(): $Vec3;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        trigger(): void;
        /**
         * Changes task random possibility for execution
         */
        setInterval(newchance: number): void;
        speedModifier: number;
        mob: $PathfinderMob;
        static DEFAULT_INTERVAL: number;
        forceTrigger: boolean;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        interval: number;
        constructor(mob: $PathfinderMob, speedModifier: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number, interval: boolean);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
        get position(): $Vec3;
    }
    export class $BreedGoal extends $Goal {
        /**
         * Spawns a baby animal of the same type.
         */
        breed(): void;
        partner: $Animal;
        level: $Level;
        animal: $Animal;
        constructor(animal: $Animal, speedModifier: number);
        constructor(animal: $Animal, speedModifier: number, arg2: $Class<$Animal>);
    }
    export class $OpenDoorGoal extends $DoorInteractGoal {
        mob: $Mob;
        hasDoor: boolean;
        doorPos: $BlockPos;
        constructor(mob: $Mob, closeDoor: boolean);
    }
    export class $ZombieAttackGoal extends $MeleeAttackGoal {
        mob: $PathfinderMob;
        constructor(zombie: $Zombie, speedModifier: number, arg2: boolean);
    }
    export class $RandomStandGoal extends $Goal {
        constructor(horse: $AbstractHorse);
    }
    export class $WaterAvoidingRandomStrollGoal extends $RandomStrollGoal {
        speedModifier: number;
        mob: $PathfinderMob;
        static PROBABILITY: number;
        static DEFAULT_INTERVAL: number;
        forceTrigger: boolean;
        wantedZ: number;
        wantedY: number;
        probability: number;
        wantedX: number;
        interval: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
        constructor(mob: $PathfinderMob, speedModifier: number);
    }
    export class $UseItemGoal<T extends $Mob> extends $Goal {
        constructor(mob: T, item: $ItemStack_, finishUsingSound: $SoundEvent_ | null, canUseSelector: $Predicate_<T>);
    }
    export class $MoveTowardsTargetGoal extends $Goal {
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
    }
}
