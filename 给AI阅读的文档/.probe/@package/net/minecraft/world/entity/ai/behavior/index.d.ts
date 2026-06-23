import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $MobCategory_, $Entity, $PathfinderMob, $LivingEntity, $AgeableMob, $Mob } from "@package/net/minecraft/world/entity";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $Spliterator, $Iterator, $List, $Map_, $UUID_, $Set_, $List_, $Map } from "@package/java/util";
import { $Trigger_, $Trigger } from "@package/net/minecraft/world/entity/ai/behavior/declarative";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BiConsumer_, $ToDoubleFunction_, $Function_, $Consumer_, $Predicate_, $BiPredicate_, $ToIntFunction_ } from "@package/java/util/function";
import { $Node, $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $GlobalPos_, $SectionPos } from "@package/net/minecraft/core";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Enum, $Object, $Iterable } from "@package/java/lang";
import { $IWeightedList, $IWeightedListEntry } from "@package/com/ishland/c2me/base/mixin/access";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Villager, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $HeroGiftsTaskAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $MemoryModuleType, $MemoryStatus_, $MemoryStatus, $MemoryModuleType_ } from "@package/net/minecraft/world/entity/ai/memory";
import { $Stream } from "@package/java/util/stream";
import { $IntProvider_, $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $FarmerWorkTaskAccessor, $GiveGiftsToHeroTaskAccessor } from "@package/net/fabricmc/fabric/mixin/content/registry";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
export * as declarative from "@package/net/minecraft/world/entity/ai/behavior/declarative";
export * as warden from "@package/net/minecraft/world/entity/ai/behavior/warden";

declare module "@package/net/minecraft/world/entity/ai/behavior" {
    export class $LookAtTargetSink extends $Behavior<$Mob> {
        stop(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Mob, gameTime: number): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(minDuration: number, maxDuration: number);
    }
    export class $TradeWithVillager extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $StartAttacking {
        static create<E extends $Mob>(canAttack: $Predicate_<E>, targetFinder: $Function_<E, ($LivingEntity) | undefined>): $BehaviorControl<E>;
        static create<E extends $Mob>(targetFinder: $Function_<E, ($LivingEntity) | undefined>): $BehaviorControl<E>;
        constructor();
    }
    export class $CopyMemoryWithExpiry {
        static create<E extends $LivingEntity, T>(canCopyMemory: $Predicate_<E>, sourceMemory: $MemoryModuleType_<T>, targetMemory: $MemoryModuleType_<T>, durationOfCopy: $UniformInt): $BehaviorControl<E>;
        constructor();
    }
    export class $JumpOnBed extends $Behavior<$Mob> {
        start(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Mob, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Mob): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(speedModifier: number);
    }
    export class $WorkAtComposter extends $WorkAtPoi implements $FarmerWorkTaskAccessor {
        static fabric_getCompostable$fabric_content_registries_v0_$md$dd6cb9$1(): $List<any>;
        static fabric_setCompostables$fabric_content_registries_v0_$md$dd6cb9$0(arg0: $List_<any>): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $DismountOrSkipMounting {
        static create<E extends $LivingEntity>(maxDistanceFromVehicle: number, shouldStopRiding: $BiPredicate_<E, $Entity>): $BehaviorControl<E>;
        constructor();
    }
    export class $MeleeAttack {
        static create(cooldownBetweenAttacks: number): $OneShot<$Mob>;
        constructor();
    }
    export class $ValidateNearbyPoi {
        static create(poiValidator: $Predicate_<$Holder<$PoiType>>, poiPosMemory: $MemoryModuleType_<$GlobalPos_>): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $CountDownCooldownTicks extends $Behavior<$LivingEntity> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(cooldownTicks: $MemoryModuleType_<number>);
    }
    export class $PrepareRamNearestTarget$RamCandidate {
        getTarget(): $LivingEntity;
        getTargetPosition(): $BlockPos;
        getStartPosition(): $BlockPos;
        target: $LivingEntity;
        constructor(startPosition: $BlockPos_, targetPosition: $BlockPos_, target: $LivingEntity);
        get targetPosition(): $BlockPos;
        get startPosition(): $BlockPos;
    }
    export class $SetWalkTargetAwayFrom {
        static pos(walkTargetAwayFromMemory: $MemoryModuleType_<$BlockPos_>, speedModifier: number, desiredDistance: number, hasTarget: boolean): $BehaviorControl<$PathfinderMob>;
        static entity(walkTargetAwayFromMemory: $MemoryModuleType_<$Entity>, speedModifier: number, desiredDistance: number, hasTarget: boolean): $OneShot<$PathfinderMob>;
        constructor();
    }
    export class $ShowTradesToPlayer extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(minDuration: number, maxDuration: number);
    }
    export class $UpdateActivityFromSchedule {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $VillagerGoalPackages {
        static getPlayPackage(speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getWorkPackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getCorePackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getMeetPackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getPreRaidPackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getHidePackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getRaidPackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getRestPackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getIdlePackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getPanicPackage(profession: $VillagerProfession_, speedModifier: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static INTERACT_SPEED_MODIFIER: number;
        static INTERACT_WALKUP_DIST: number;
        static INTERACT_DIST_SQR: number;
        constructor();
    }
    export class $GoToClosestVillage {
        static create(speedModifier: number, closeEnoughDist: number): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $TryLaySpawnOnWaterNearLand {
        static create(spawnBlock: $Block_): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $VillagerCalmDown {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $RamTarget extends $Behavior<$Goat> {
        start(level: $ServerLevel, entity: $Goat, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Goat, gameTime: number): void;
        finishRam(level: $ServerLevel, owner: $Goat): void;
        canStillUse(level: $ServerLevel, entity: $Goat, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Goat): boolean;
        static TIME_OUT_DURATION: number;
        static DEFAULT_DURATION: number;
        static RAM_SPEED_FORCE_FACTOR: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(getTimeBetweenRams: $Function_<$Goat, $UniformInt>, ramTargeting: $TargetingConditions, speed: number, getKnockbackForce: $ToDoubleFunction_<$Goat>, getImpactSound: $Function_<$Goat, $SoundEvent>, getHornBreakSound: $Function_<$Goat, $SoundEvent>);
    }
    export class $GoToPotentialJobSite extends $Behavior<$Villager> {
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        speedModifier: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(speedModifier: number);
    }
    /**
     * @deprecated
     */
    export class $SetEntityLookTargetSometimes {
        static create(entityType: $EntityType_<never>, maxDist: number, interval: $UniformInt): $BehaviorControl<$LivingEntity>;
        static create(maxDist: number, interval: $UniformInt): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $StartCelebratingIfTargetDead {
        static create(duration: number, canDance: $BiPredicate_<$LivingEntity, $LivingEntity>): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $Croak extends $Behavior<$Frog> {
        start(arg0: $ServerLevel, arg1: $Frog, arg2: number): void;
        stop(arg0: $ServerLevel, arg1: $Frog, arg2: number): void;
        tick(arg0: $ServerLevel, arg1: $Frog, arg2: number): void;
        canStillUse(arg0: $ServerLevel, arg1: $Frog, arg2: number): boolean;
        checkExtraStartConditions(arg0: $ServerLevel, arg1: $Frog): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $BabyFollowAdult {
        static create(followRange: $UniformInt, speedModifier: $Function_<$LivingEntity, number>): $OneShot<$AgeableMob>;
        static create(followRange: $UniformInt, speedModifier: number): $OneShot<$AgeableMob>;
        constructor();
    }
    export class $StayCloseToTarget {
        static create(targetPositionGetter: $Function_<$LivingEntity, ($PositionTracker) | undefined>, predicate: $Predicate_<$LivingEntity>, closeEnoughDist: number, tooClose: number, speedModifier: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $InteractWithDoor {
        static create(): $BehaviorControl<$LivingEntity>;
        static closeDoorsThatIHaveOpenedOrPassedThrough(level: $ServerLevel, entity: $LivingEntity, previous: $Node | null, next: $Node | null, doorPositions: $Set_<$GlobalPos_>, nearestLivingEntities: ($List_<$LivingEntity>) | undefined): void;
        constructor();
    }
    export class $Swim extends $Behavior<$Mob> {
        tick(level: $ServerLevel, owner: $Mob, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Mob, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Mob): boolean;
        static shouldSwim(mob: $Mob): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(chance: number);
    }
    export class $LookAndFollowTradingPlayerSink extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(speedModifier: number);
    }
    export class $TryFindLandNearWater {
        static create(range: number, speedModifier: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $DoNothing implements $BehaviorControl<$LivingEntity> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tickOrStop(level: $ServerLevel, entity: $LivingEntity, gameTime: number): void;
        doStop(level: $ServerLevel, entity: $LivingEntity, gameTime: number): void;
        tryStart(level: $ServerLevel, entity: $LivingEntity, gameTime: number): boolean;
        constructor(minDuration: number, maxDuration: number);
        get status(): $Behavior$Status;
    }
    export class $BlockPosTracker implements $PositionTracker {
        currentPosition(): $Vec3;
        isVisibleBy(entity: $LivingEntity): boolean;
        currentBlockPosition(): $BlockPos;
        constructor(blockPos: $BlockPos_);
        constructor(centerPosition: $Vec3_);
    }
    export class $WakeUp {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $ResetRaidStatus {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $LocateHidingPlace {
        static create(radius: number, speedModifier: number, closeEnoughDist: number): $OneShot<$LivingEntity>;
        constructor();
    }
    export class $Behavior<E extends $LivingEntity> implements $BehaviorControl<E> {
        start(level: $ServerLevel, entity: E, gameTime: number): void;
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        debugString(): string;
        tick(level: $ServerLevel, entity: E, gameTime: number): void;
        timedOut(gameTime: number): boolean;
        getStatus(): $Behavior$Status;
        tickOrStop(level: $ServerLevel, entity: E, gameTime: number): void;
        doStop(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: E, gameTime: number): boolean;
        tryStart(level: $ServerLevel, entity: E, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: E): boolean;
        hasRequiredMemories(owner: E): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, minDuration: number, maxDuration: number);
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, duration: number);
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>);
        get status(): $Behavior$Status;
    }
    export class $Mount {
        static create(speedModifier: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $SleepInBed extends $Behavior<$LivingEntity> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        static COOLDOWN_AFTER_BEING_WOKEN: number;
        constructor();
    }
    export class $CrossbowAttack<E extends $Mob, T extends $LivingEntity> extends $Behavior<E> {
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        tick(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: E, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: E): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $BackUpIfTooClose {
        static create(tooCloseDistance: number, strafeSpeed: number): $OneShot<$Mob>;
        constructor();
    }
    export class $VillagerPanicTrigger extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        static isHurt(entity: $LivingEntity): boolean;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        static hasHostile(entity: $LivingEntity): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $AnimalPanic<E extends $PathfinderMob> extends $Behavior<E> {
        start(level: $ServerLevel, entity: E, gameTime: number): void;
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        tick(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: E, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: E): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(speedMultiplier: number);
        constructor(speedMultiplier: number, panicCausingDamageTypes: $Function_<$PathfinderMob, $TagKey<$DamageType>>);
    }
    export class $PrepareRamNearestTarget<E extends $PathfinderMob> extends $Behavior<E> {
        start(level: $ServerLevel, entity: $PathfinderMob, gameTime: number): void;
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        tick(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $PathfinderMob, gameTime: number): boolean;
        static TIME_OUT_DURATION: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(getCooldownOnFall: $ToIntFunction_<E>, minRamDistance: number, maxRamDistance: number, walkSpeed: number, ramTargeting: $TargetingConditions, ramPrepareTime: number, getPrepareRamSound: $Function_<E, $SoundEvent>);
    }
    export class $EraseMemoryIf {
        static create<E extends $LivingEntity>(shouldEraseMemory: $Predicate_<E>, erasingMemory: $MemoryModuleType_<never>): $BehaviorControl<E>;
        constructor();
    }
    export class $GoToWantedItem {
        static create<E extends $LivingEntity>(canWalkToItem: $Predicate_<E>, speedModifier: number, hasTarget: boolean, maxDistToWalk: number): $BehaviorControl<E>;
        static create(speedModifier: number, hasTarget: boolean, maxDistToWalk: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $WorkAtPoi extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        useWorkstation(level: $ServerLevel, villager: $Villager): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $CelebrateVillagersSurvivedRaid extends $Behavior<$Villager> {
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(minDuration: number, maxDuration: number);
    }
    export class $YieldJobSite {
        static create(speedModifier: number): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $RingBell {
        static create(): $BehaviorControl<$LivingEntity>;
        static RING_BELL_FROM_DISTANCE: number;
        constructor();
    }
    export class $GoToTargetLocation {
        static create<E extends $Mob>(locationMemory: $MemoryModuleType_<$BlockPos_>, closeEnoughDist: number, speedModifier: number): $OneShot<E>;
        constructor();
    }
    export class $StrollToPoiList {
        static create(poiListMemory: $MemoryModuleType_<$List_<$GlobalPos_>>, speedModifier: number, closeEnoughDist: number, maxDistFromPoi: number, mustBeCloseToMemory: $MemoryModuleType_<$GlobalPos_>): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $AssignProfessionFromJobSite {
        static create(): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $SetClosestHomeAsWalkTarget {
        static create(speedModifier: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $InsideBrownianWalk {
        static create(speedModifier: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $TriggerGate {
        static triggerOneShuffled<E extends $LivingEntity>(triggers: $List_<$Pair<$Trigger_<E>, number>>): $OneShot<E>;
        static triggerGate<E extends $LivingEntity>(triggers: $List_<$Pair<$Trigger_<E>, number>>, orderPolicy: $GateBehavior$OrderPolicy_, runningPolicy: $GateBehavior$RunningPolicy_): $OneShot<E>;
        constructor();
    }
    export class $LongJumpToPreferredBlock<E extends $Mob> extends $LongJumpToRandomPos<E> {
        maxJumpVelocityMultiplier: number;
        findJumpTries: number;
        jumpCandidates: $List<$LongJumpToRandomPos$PossibleJump>;
        static FIND_JUMP_TRIES: number;
        static MIN_PATHFIND_DISTANCE_TO_VALID_JUMP: number;
        prepareJumpStart: number;
        static DEFAULT_DURATION: number;
        maxLongJumpHeight: number;
        initialPosition: ($Vec3) | undefined;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        chosenJump: $Vec3;
        maxLongJumpWidth: number;
        constructor(timeBetweenLongJumps: $UniformInt, maxLongJumpHeight: number, maxLongJumpWidth: number, maxJumpVelocity: number, getJumpSound: $Function_<E, $SoundEvent>, preferredBlockTag: $TagKey_<$Block>, preferredBlocksChance: number, acceptableLandingSpot: $BiPredicate_<E, $BlockPos>);
    }
    export class $ShufflingList<U> implements $Iterable<U>, $IWeightedList<any> {
        add(data: $Object, weight: number): $ShufflingList<$Object>;
        iterator(): $Iterator<$Object>;
        stream(): $Stream<$Object>;
        shuffle(): $ShufflingList<$Object>;
        static codec<U>(codec: $Codec<U>): $Codec<$ShufflingList<U>>;
        spliterator(): $Spliterator<U>;
        forEach(arg0: $Consumer_<U>): void;
        getEntries(): $List<$ShufflingList$WeightedEntry<$Object>>;
        entries: $List<$ShufflingList$WeightedEntry<$Object>>;
        constructor();
        constructor(entries: $List_<$ShufflingList$WeightedEntry<$Object>>);
        [Symbol.iterator](): Iterator<$Object>
    }
    export class $SetWalkTargetFromAttackTargetIfTargetOutOfReach {
        static create(speedModifier: $Function_<$LivingEntity, number>): $BehaviorControl<$Mob>;
        static create(speedModifier: number): $BehaviorControl<$Mob>;
        constructor();
    }
    export class $OneShot<E extends $LivingEntity> implements $BehaviorControl<E>, $Trigger<E> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tickOrStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        doStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        tryStart(arg0: $ServerLevel, arg1: E, arg2: number): boolean;
        constructor();
        get status(): $Behavior$Status;
    }
    export class $EntityTracker implements $PositionTracker {
        currentPosition(): $Vec3;
        getEntity(): $Entity;
        isVisibleBy(entity: $LivingEntity): boolean;
        currentBlockPosition(): $BlockPos;
        constructor(entity: $Entity, trackEyeHeight: boolean);
        get entity(): $Entity;
    }
    export class $AcquirePoi {
        static create(acquirablePois: $Predicate_<$Holder<$PoiType>>, existingAbsentMemory: $MemoryModuleType_<$GlobalPos_>, acquiringMemory: $MemoryModuleType_<$GlobalPos_>, onlyIfAdult: boolean, entityEventId: (number) | undefined): $BehaviorControl<$PathfinderMob>;
        static create(acquirablePois: $Predicate_<$Holder<$PoiType>>, acquiringMemory: $MemoryModuleType_<$GlobalPos_>, onlyIfAdult: boolean, entityEventId: (number) | undefined): $BehaviorControl<$PathfinderMob>;
        static findPathToPois(mob: $Mob, poiPositions: $Set_<$Pair<$Holder_<$PoiType>, $BlockPos_>>): $Path;
        static SCAN_RANGE: number;
        constructor();
    }
    export class $CrossbowAttack$CrossbowState extends $Enum<$CrossbowAttack$CrossbowState> {
    }
    /**
     * Values that may be interpreted as {@link $CrossbowAttack$CrossbowState}.
     */
    export type $CrossbowAttack$CrossbowState_ = "uncharged" | "charging" | "charged" | "ready_to_attack";
    export class $AcquirePoi$JitteredLinearRetry {
    }
    export class $FollowTemptation extends $Behavior<$PathfinderMob> {
        start(level: $ServerLevel, entity: $PathfinderMob, gameTime: number): void;
        stop(level: $ServerLevel, entity: $PathfinderMob, gameTime: number): void;
        tick(level: $ServerLevel, entity: $PathfinderMob, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $PathfinderMob, gameTime: number): boolean;
        getSpeedModifier(pathfinder: $PathfinderMob): number;
        static DEFAULT_DURATION: number;
        static BACKED_UP_CLOSE_ENOUGH_DIST: number;
        static TEMPTATION_COOLDOWN: number;
        static DEFAULT_CLOSE_ENOUGH_DIST: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(speedModifier: $Function_<$LivingEntity, number>);
        constructor(speedModifier: $Function_<$LivingEntity, number>, closeEnoughDistance: $Function_<$LivingEntity, number>);
    }
    export class $ShufflingList$WeightedEntry<T> implements $IWeightedListEntry {
        getData(): T;
        static codec<E>(codec: $Codec<E>): $Codec<$ShufflingList$WeightedEntry<E>>;
        getWeight(): number;
        setRandom(chance: number): void;
        invokeGetShuffledOrder(): number;
        invokeSetShuffledOrder(chance: number): void;
        data: T;
        weight: number;
        constructor(data: T, weight: number);
        set random(value: number);
    }
    export class $SocializeAtBell {
        static create(): $OneShot<$LivingEntity>;
        constructor();
    }
    export class $VillagerMakeLove extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $VillageBoundRandomStroll {
        static create(speedModifier: number, maxHorizontalDist: number, maxVerticalDist: number): $OneShot<$PathfinderMob>;
        static create(speedModifier: number): $OneShot<$PathfinderMob>;
        constructor();
    }
    export class $StrollAroundPoi {
        static create(poiPosMemory: $MemoryModuleType_<$GlobalPos_>, speedModifier: number, maxDistFromPoi: number): $OneShot<$PathfinderMob>;
        constructor();
    }
    export class $SetHiddenState {
        static create(stayHiddenSeconds: number, closeEnoughdist: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $BecomePassiveIfMemoryPresent {
        static create(pacifyingMemory: $MemoryModuleType_<never>, pacifyDuration: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $GateBehavior<E extends $LivingEntity> implements $BehaviorControl<E> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tickOrStop(level: $ServerLevel, entity: E, gameTime: number): void;
        doStop(level: $ServerLevel, entity: E, gameTime: number): void;
        tryStart(level: $ServerLevel, entity: E, gameTime: number): boolean;
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, exitErasedMemories: $Set_<$MemoryModuleType_<never>>, orderPolicy: $GateBehavior$OrderPolicy_, runningPolicy: $GateBehavior$RunningPolicy_, durations: $List_<$Pair<$BehaviorControl<E>, number>>);
        get status(): $Behavior$Status;
    }
    export class $InteractWith {
        static of<E extends $LivingEntity, T extends $LivingEntity>(type: $EntityType_<T>, interactionRange: number, selfFilter: $Predicate_<E>, targetFilter: $Predicate_<T>, memory: $MemoryModuleType_<T>, speedModifier: number, maxDist: number): $BehaviorControl<E>;
        static of<T extends $LivingEntity>(type: $EntityType_<T>, interactionRange: number, interactMemory: $MemoryModuleType_<T>, speedModifier: number, maxDist: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $BehaviorControl<E extends $LivingEntity> {
    }
    export interface $BehaviorControl<E extends $LivingEntity> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tickOrStop(level: $ServerLevel, entity: E, gameTime: number): void;
        doStop(level: $ServerLevel, entity: E, gameTime: number): void;
        tryStart(level: $ServerLevel, entity: E, gameTime: number): boolean;
        get status(): $Behavior$Status;
    }
    export class $TryFindWater {
        static create(range: number, speedModifier: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $SetWalkTargetFromLookTarget {
        static create(canSetWalkTarget: $Predicate_<$LivingEntity>, speedModifier: $Function_<$LivingEntity, number>, closeEnoughDist: number): $OneShot<$LivingEntity>;
        static create(speedModifier: number, closeEnoughDist: number): $OneShot<$LivingEntity>;
        constructor();
    }
    export class $GateBehavior$RunningPolicy extends $Enum<$GateBehavior$RunningPolicy> {
        static values(): $GateBehavior$RunningPolicy[];
        static valueOf(arg0: string): $GateBehavior$RunningPolicy;
        apply<E extends $LivingEntity>(behaviors: $Stream<$BehaviorControl<E>>, level: $ServerLevel, owner: E, gameTime: number): void;
        static RUN_ONE: $GateBehavior$RunningPolicy;
        static TRY_ALL: $GateBehavior$RunningPolicy;
    }
    /**
     * Values that may be interpreted as {@link $GateBehavior$RunningPolicy}.
     */
    export type $GateBehavior$RunningPolicy_ = "run_one" | "try_all";
    export class $BehaviorUtils {
        static throwItem(livingEntity: $LivingEntity, stack: $ItemStack_, offset: $Vec3_): void;
        static throwItem(entity: $LivingEntity, stack: $ItemStack_, offset: $Vec3_, speedMultiplier: $Vec3_, yOffset: number): void;
        static findSectionClosestToVillage(serverLevel: $ServerLevel, sectionPos: $SectionPos, radius: number): $SectionPos;
        static isOtherTargetMuchFurtherAwayThanCurrentAttackTarget(livingEntity: $LivingEntity, target: $LivingEntity, distance: number): boolean;
        static lookAtEntity(firstEntity: $LivingEntity, secondEntity: $LivingEntity): void;
        static setWalkAndLookTargetMemories(entity: $LivingEntity, positionTracker: $PositionTracker, speedModifier: number, closeEnoughDist: number): void;
        static setWalkAndLookTargetMemories(livingEntity: $LivingEntity, pos: $BlockPos_, speed: number, distance: number): void;
        static setWalkAndLookTargetMemories(livingEntity: $LivingEntity, target: $Entity, speed: number, distance: number): void;
        static canSee(livingEntity: $LivingEntity, target: $LivingEntity): boolean;
        static getRandomSwimmablePos(pathfinder: $PathfinderMob, radius: number, verticalDistance: number): $Vec3;
        static targetIsValid(brains: $Brain<never>, memorymodule: $MemoryModuleType_<$LivingEntity>, entityType: $EntityType_<never>): boolean;
        static getLivingEntityFromUUIDMemory(livingEntity: $LivingEntity, targetMemory: $MemoryModuleType_<$UUID_>): ($LivingEntity) | undefined;
        static isWithinAttackRange(mob: $Mob, target: $LivingEntity, cooldown: number): boolean;
        static lockGazeAndWalkToEachOther(firstEntity: $LivingEntity, secondEntity: $LivingEntity, speed: number, distance: number): void;
        static isBreeding(entity: $LivingEntity): boolean;
        static entityIsVisible(brain: $Brain<never>, target: $LivingEntity): boolean;
        static getNearestTarget(centerEntity: $LivingEntity, optionalEntity: ($LivingEntity) | undefined, livingEntity: $LivingEntity): $LivingEntity;
        static getTargetNearestMe(centerEntity: $LivingEntity, livingEntity1: $LivingEntity, livingEntity2: $LivingEntity): $LivingEntity;
    }
    export class $PositionTracker {
    }
    export interface $PositionTracker {
        currentPosition(): $Vec3;
        isVisibleBy(entity: $LivingEntity): boolean;
        currentBlockPosition(): $BlockPos;
    }
    export class $PoiCompetitorScan {
        static create(): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $GateBehavior$OrderPolicy extends $Enum<$GateBehavior$OrderPolicy> {
        static values(): $GateBehavior$OrderPolicy[];
        static valueOf(arg0: string): $GateBehavior$OrderPolicy;
        apply(list: $ShufflingList<never>): void;
        static SHUFFLED: $GateBehavior$OrderPolicy;
        static ORDERED: $GateBehavior$OrderPolicy;
    }
    /**
     * Values that may be interpreted as {@link $GateBehavior$OrderPolicy}.
     */
    export type $GateBehavior$OrderPolicy_ = "ordered" | "shuffled";
    export class $GiveGiftToHero extends $Behavior<$Villager> implements $HeroGiftsTaskAccess, $GiveGiftsToHeroTaskAccessor {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        static fabric_getGifts$fabric_content_registries_v0_$md$dd6cb9$0(): $Map<any, any>;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static getGifts$immersiveengineering_$md$dd6cb9$0(): $Map<any, any>;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(duration: number);
        static get gifts$immersiveengineering_$md$dd6cb9$0(): $Map<any, any>;
    }
    export class $MoveToTargetSink extends $Behavior<$Mob> {
        start(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Mob, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Mob): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
        constructor(minDuration: number, maxDuration: number);
    }
    export class $RandomStroll {
        static stroll(speedModifier: number): $OneShot<$PathfinderMob>;
        static stroll(speedModifier: number, maxHorizontalDistance: number, maxVerticalDistance: number): $BehaviorControl<$PathfinderMob>;
        static stroll(speedModifier: number, mayStrollFromWater: boolean): $OneShot<$PathfinderMob>;
        static swim(speedModifier: number): $BehaviorControl<$PathfinderMob>;
        static fly(speedModifier: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $TryFindLand {
        static create(range: number, speedModifier: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $LongJumpMidJump extends $Behavior<$Mob> {
        start(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Mob, gameTime: number): boolean;
        static TIME_OUT_DURATION: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(timeBetweenLongJumps: $UniformInt, landingSound: $SoundEvent_);
    }
    export class $Behavior$Status extends $Enum<$Behavior$Status> {
        static values(): $Behavior$Status[];
        static valueOf(arg0: string): $Behavior$Status;
        static RUNNING: $Behavior$Status;
        static STOPPED: $Behavior$Status;
    }
    /**
     * Values that may be interpreted as {@link $Behavior$Status}.
     */
    export type $Behavior$Status_ = "stopped" | "running";
    export class $LongJumpToRandomPos<E extends $Mob> extends $Behavior<E> {
        start(level: $ServerLevel, entity: E, prepareJumpStart: number): void;
        tick(level: $ServerLevel, entity: E, prepareJumpStart: number): void;
        getJumpCandidate(level: $ServerLevel): ($LongJumpToRandomPos$PossibleJump) | undefined;
        pickCandidate(level: $ServerLevel, entity: E, prepareJumpStart: number): void;
        canStillUse(level: $ServerLevel, entity: $Mob, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Mob): boolean;
        static defaultAcceptableLandingSpot<E extends $Mob>(mob: E, pos: $BlockPos_): boolean;
        calculateOptimalJumpVector(mob: $Mob, target: $Vec3_): $Vec3;
        maxJumpVelocityMultiplier: number;
        findJumpTries: number;
        jumpCandidates: $List<$LongJumpToRandomPos$PossibleJump>;
        static FIND_JUMP_TRIES: number;
        static MIN_PATHFIND_DISTANCE_TO_VALID_JUMP: number;
        prepareJumpStart: number;
        static DEFAULT_DURATION: number;
        maxLongJumpHeight: number;
        initialPosition: ($Vec3) | undefined;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        chosenJump: $Vec3;
        maxLongJumpWidth: number;
        constructor(timeBetweenLongJumps: $UniformInt, maxLongJumpHeight: number, maxLongJumpWidth: number, maxJumpVelocity: number, getJumpSound: $Function_<E, $SoundEvent>);
        constructor(timeBetweenLongJumps: $UniformInt, maxLongJumpHeight: number, maxLongJumpWidth: number, maxJumpVelocity: number, getJumpSound: $Function_<E, $SoundEvent>, acceptableLandingSpot: $BiPredicate_<E, $BlockPos>);
    }
    export class $StopBeingAngryIfTargetDead {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $StrollToPoi {
        static create(poiPosMemory: $MemoryModuleType_<$GlobalPos_>, speedModifier: number, closeEnoughDist: number, maxDistFromPoi: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $ResetProfession {
        static create(): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $UseBonemeal extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $GoAndGiveItemsToTarget<E extends $LivingEntity> extends $Behavior<E> {
        static throwItem(entity: $LivingEntity, stack: $ItemStack_, throwPos: $Vec3_): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(targetPositionGetter: $Function_<$LivingEntity, ($PositionTracker) | undefined>, speedModifier: number, duration: number);
    }
    export class $SetRaidStatus {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $AnimalMakeLove extends $Behavior<$Animal> {
        start(level: $ServerLevel, entity: $Animal, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Animal, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Animal, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Animal, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Animal): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(partnerType: $EntityType_<$Animal>);
        constructor(partnerType: $EntityType_<$Animal>, speedModifier: number, closeEnoughDistance: number);
    }
    export class $SetEntityLookTargetSometimes$Ticker {
        tickDownAndCheck(random: $RandomSource): boolean;
        constructor(interval: $UniformInt);
    }
    export class $SetEntityLookTarget {
        static create(canLootAtTarget: $Predicate_<$LivingEntity>, maxDist: number): $OneShot<$LivingEntity>;
        static create(maxDist: number): $OneShot<$LivingEntity>;
        static create(entityType: $EntityType_<never>, maxDist: number): $OneShot<$LivingEntity>;
        static create(category: $MobCategory_, makDist: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $ReactToBell {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $LongJumpUtil {
        static calculateJumpVectorForAngle(mob: $Mob, target: $Vec3_, maxJumpVelocity: number, angle: number, requireClearTransition: boolean): ($Vec3) | undefined;
        constructor();
    }
    export class $HarvestFarmland extends $Behavior<$Villager> {
        start(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Villager, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Villager, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: $Villager): boolean;
        static SPEED_MODIFIER: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $LongJumpToRandomPos$PossibleJump extends $WeightedEntry$IntrusiveBase {
        getJumpTarget(): $BlockPos;
        constructor(jumpTarget: $BlockPos_, weight: number);
        get jumpTarget(): $BlockPos;
    }
    export class $SetLookAndInteract {
        static create(entityType: $EntityType_<never>, maxDist: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $RandomLookAround extends $Behavior<$Mob> {
        start(level: $ServerLevel, entity: $Mob, gameTime: number): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(interval: $IntProvider_, maxYaw: number, minPitch: number, maxPitch: number);
    }
    export class $RunOne<E extends $LivingEntity> extends $GateBehavior<E> {
        constructor(entryCondition: $List_<$Pair<$BehaviorControl<E>, number>>);
        constructor(entryCondition: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, durations: $List_<$Pair<$BehaviorControl<E>, number>>);
    }
    export class $SetWalkTargetFromBlockMemory {
        static create(blockTargetMemory: $MemoryModuleType_<$GlobalPos_>, speedModifier: number, closeEnoughDist: number, tooFarDistance: number, tooLongUnreachableDuration: number): $OneShot<$Villager>;
        constructor();
    }
    export class $PlayTagWithOtherKids {
        static create(): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $StopAttackingIfTargetInvalid {
        static create<E extends $Mob>(canStopAttacking: $Predicate_<$LivingEntity>, onStopAttacking: $BiConsumer_<E, $LivingEntity>, canGrowTiredOfTryingToReachTarget: boolean): $BehaviorControl<E>;
        static create<E extends $Mob>(): $BehaviorControl<E>;
        static create<E extends $Mob>(canStopAttacking: $Predicate_<$LivingEntity>): $BehaviorControl<E>;
        static create<E extends $Mob>(onStopAttacking: $BiConsumer_<E, $LivingEntity>): $BehaviorControl<E>;
        constructor();
    }
    export class $MoveToSkySeeingSpot {
        static create(speedModifier: number): $OneShot<$LivingEntity>;
        static hasNoBlocksAbove(level: $ServerLevel, entity: $LivingEntity, pos: $BlockPos_): boolean;
        constructor();
    }
}
