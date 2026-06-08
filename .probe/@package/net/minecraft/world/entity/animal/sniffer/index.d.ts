import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl, $JumpControl } from "@package/net/minecraft/world/entity/ai/control";
import { $SensorType, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $EntityType_, $Pose, $PortalProcessor, $Entity, $AnimationState, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID, $List, $Stack, $Map } from "@package/java/util";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate, $IntFunction } from "@package/java/util/function";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos } from "@package/net/minecraft/core";
import { $OBB$Part } from "@package/com/atsuishio/superbwarfare/tools";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Enum } from "@package/java/lang";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $MemoryModuleType, $MemoryStatus } from "@package/net/minecraft/world/entity/ai/memory";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/animal/sniffer" {
    export class $SnifferAi$Digging extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
    }
    export class $SnifferAi$Sniffing extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
    }
    export class $SnifferAi$Searching extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
    }
    export class $SnifferAi$Scenting extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
    }
    export class $SnifferAi$FeelingHappy extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
    }
    export class $SnifferAi$FinishedDigging extends $Behavior<$Sniffer> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
    }
    export class $SnifferAi {
        static updateActivity(arg0: $Sniffer): void;
        static makeBrain(arg0: $Brain<$Sniffer>): $Brain<never>;
        static getTemptations(): $Predicate<$ItemStack>;
        static resetSniffing(arg0: $Sniffer): $Sniffer;
        static MEMORY_TYPES: $List<$MemoryModuleType<never>>;
        static SENSOR_TYPES: $List<$SensorType<$Sensor<$Sniffer>>>;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $Sniffer extends $Animal {
        canPlayDiggingSound(): boolean;
        calculateDigPosition(): ($BlockPos) | undefined;
        static createAttributes(): $AttributeSupplier$Builder;
        isSearching(): boolean;
        transitionTo(arg0: $Sniffer$State_): $Sniffer;
        onDiggingComplete(arg0: boolean): $Sniffer;
        isTempted(): boolean;
        canSniff(): boolean;
        canDig(): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        useItem: $ItemStack;
        yHeadRot: number;
        feelingHappyAnimationState: $AnimationState;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        forcedAgeTimer: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        sbw$beastKilled: boolean;
        removalReason: $Entity$RemovalReason;
        zza: number;
        passengers: $ImmutableList<$Entity>;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        risingAnimationState: $AnimationState;
        static ID_TAG: string;
        sniffingAnimationState: $AnimationState;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        diggingAnimationState: $AnimationState;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        sbw$currentHitPart: $OBB$Part;
        lastDamageSource: $DamageSource;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        forcedAge: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        static PARENT_AGE_AFTER_BREEDING: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        scentingAnimationState: $AnimationState;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        constructor(arg0: $EntityType_<$Animal>, arg1: $Level_);
        get searching(): boolean;
        get tempted(): boolean;
    }
    export class $Sniffer$State extends $Enum<$Sniffer$State> {
        static values(): $Sniffer$State[];
        static valueOf(arg0: string): $Sniffer$State;
        id(): number;
        static SNIFFING: $Sniffer$State;
        static IDLING: $Sniffer$State;
        static SCENTING: $Sniffer$State;
        static BY_ID: $IntFunction<$Sniffer$State>;
        static DIGGING: $Sniffer$State;
        static RISING: $Sniffer$State;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Sniffer$State>;
        static FEELING_HAPPY: $Sniffer$State;
        static SEARCHING: $Sniffer$State;
    }
    /**
     * Values that may be interpreted as {@link $Sniffer$State}.
     */
    export type $Sniffer$State_ = "idling" | "feeling_happy" | "scenting" | "sniffing" | "searching" | "digging" | "rising";
}
