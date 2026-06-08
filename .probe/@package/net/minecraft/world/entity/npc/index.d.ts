import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $VariantHolder, $EntityDimensions, $Entity$RemovalReason, $AgeableMob, $WalkAnimationState, $Mob, $Pose, $PortalProcessor, $Entity, $ReputationEventHandler } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GossipContainer } from "@package/net/minecraft/world/entity/ai/gossip";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand, $SimpleContainer } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $MerchantOffers, $MerchantOffer, $Merchant, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $CupidLove } from "@package/com/atsuishio/superbwarfare/entity/mixin";
import { $MemoryModuleType_, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $TradeMatcher$Filterable, $TradeMatcher_ } from "@package/com/almostreliable/morejs/features/villager";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $JumpControl, $MoveControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set_, $Stack, $Map, $Set, $UUID, $List, $Map_ } from "@package/java/util";
import { $Predicate_, $Predicate, $BiPredicate } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $OBB$Part } from "@package/com/atsuishio/superbwarfare/tools";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Record } from "@package/java/lang";
import { $ItemLike_, $CustomSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SuspiciousStewEffects_ } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $VillagerEntityAccessor } from "@package/net/fabricmc/fabric/mixin/content/registry";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/npc" {
    export class $VillagerProfession extends $Record {
        name(): string;
        workSound(): $SoundEvent;
        heldJobSite(): $Predicate<$Holder<$PoiType>>;
        requestedItems(): $ImmutableSet<$Item>;
        secondaryPoi(): $ImmutableSet<$Block>;
        acquirableJobSite(): $Predicate<$Holder<$PoiType>>;
        static CARTOGRAPHER: $VillagerProfession;
        static MASON: $VillagerProfession;
        static SHEPHERD: $VillagerProfession;
        static ARMORER: $VillagerProfession;
        static TOOLSMITH: $VillagerProfession;
        static FARMER: $VillagerProfession;
        static FLETCHER: $VillagerProfession;
        static NITWIT: $VillagerProfession;
        static LEATHERWORKER: $VillagerProfession;
        static LIBRARIAN: $VillagerProfession;
        static CLERIC: $VillagerProfession;
        static FISHERMAN: $VillagerProfession;
        static BUTCHER: $VillagerProfession;
        static WEAPONSMITH: $VillagerProfession;
        static ALL_ACQUIRABLE_JOBS: $Predicate<$Holder<$PoiType>>;
        static NONE: $VillagerProfession;
        constructor(arg0: string, arg1: $Predicate_<$Holder<$PoiType>>, arg2: $Predicate_<$Holder<$PoiType>>, arg3: $ImmutableSet<$Item_>, arg4: $ImmutableSet<$Block_>, arg5: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $VillagerProfession}.
     */
    export type $VillagerProfession_ = RegistryTypes.VillagerProfession;
    export class $AbstractVillager extends $AgeableMob implements $InventoryCarrier, $Npc, $Merchant {
        getInventory(): $SimpleContainer;
        isClientSide(): boolean;
        isTrading(): boolean;
        overrideXp(arg0: number): void;
        getOffers(): $MerchantOffers;
        addParticlesAroundSelf(arg0: $ParticleOptions_): void;
        getTradeUpdatedSound(arg0: boolean): $SoundEvent;
        addOffersFromItemListings(arg0: $MerchantOffers, arg1: $VillagerTrades$ItemListing_[], arg2: number): void;
        getNotifyTradeSound(): $SoundEvent;
        getVillagerXp(): number;
        setUnhappyCounter(arg0: number): void;
        getUnhappyCounter(): number;
        stopTrading(): void;
        updateTrades(): void;
        rewardTradeXp(arg0: $MerchantOffer): void;
        setTradingPlayer(arg0: $Player): void;
        getTradingPlayer(): $Player;
        showProgressBar(): boolean;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        notifyTrade(arg0: $MerchantOffer): void;
        playCelebrateSound(): void;
        overrideOffers(arg0: $MerchantOffers): void;
        writeInventoryToTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readInventoryFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        canRestock(): boolean;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
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
        static VILLAGER_SLOT_OFFSET: number;
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
        static ID_TAG: string;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
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
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        offers: $MerchantOffers;
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
        constructor(arg0: $EntityType_<$AbstractVillager>, arg1: $Level_);
        get inventory(): $SimpleContainer;
        get clientSide(): boolean;
        get trading(): boolean;
        get notifyTradeSound(): $SoundEvent;
        get villagerXp(): number;
    }
    export class $WanderingTrader extends $AbstractVillager {
        static access$300(arg0: $WanderingTrader): $PathNavigation;
        static access$200(arg0: $WanderingTrader): $PathNavigation;
        static access$100(arg0: $WanderingTrader): $PathNavigation;
        static access$000(arg0: $WanderingTrader): $PathNavigation;
        setDespawnDelay(arg0: number): void;
        getDespawnDelay(): number;
        setWanderTarget(arg0: $BlockPos_): void;
        getWanderTarget(): $BlockPos;
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
        static VILLAGER_SLOT_OFFSET: number;
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
        static ID_TAG: string;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
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
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        offers: $MerchantOffers;
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
        constructor(arg0: $EntityType_<$WanderingTrader>, arg1: $Level_);
    }
    export class $VillagerTrades$ItemsForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ResourceKey_<$EnchantmentProvider>);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(arg0: $Block_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export interface $VillagerProfession extends RegistryMarked<RegistryTypes.VillagerProfessionTag, RegistryTypes.VillagerProfession> {}
    export class $VillagerTrades$EnchantBookForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: number, arg1: $TagKey_<$Enchantment>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TagKey_<$Enchantment>);
    }
    export class $WanderingTrader$WanderToPositionGoal extends $Goal {
    }
    export class $InventoryCarrier {
        static pickUpItem(arg0: $Mob, arg1: $InventoryCarrier_, arg2: $ItemEntity): void;
        static TAG_INVENTORY: string;
    }
    export interface $InventoryCarrier {
        getInventory(): $SimpleContainer;
        writeInventoryToTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readInventoryFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        get inventory(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $InventoryCarrier}.
     */
    export type $InventoryCarrier_ = (() => $SimpleContainer);
    export class $VillagerTrades$TreasureMapForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: number, arg1: $TagKey_<$Structure>, arg2: string, arg3: $Holder_<$MapDecorationType>, arg4: number, arg5: number);
    }
    export class $Villager extends $AbstractVillager implements $ReputationEventHandler, $VillagerDataHolder, $CupidLove, $VillagerEntityAccessor {
        handler$ehg000$superbwarfare$addAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        static createAttributes(): $AttributeSupplier$Builder;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $Villager;
        onReputationEventFrom(arg0: $ReputationEventType, arg1: $Entity): void;
        handler$gnm000$moonlight$reg(arg0: $Brain<any>, arg1: $CallbackInfo): void;
        assignProfessionWhenSpawned(): boolean;
        setChasing(arg0: boolean): void;
        isChasing(): boolean;
        releasePoi(arg0: $MemoryModuleType_<$GlobalPos_>): void;
        restock(): void;
        gossip(arg0: $ServerLevel, arg1: $Villager, arg2: number): void;
        setGossips(arg0: $Tag_): void;
        getGossips(): $GossipContainer;
        setOffers(arg0: $MerchantOffers): void;
        handler$ehg000$superbwarfare$canBreed(arg0: $CallbackInfoReturnable<any>): void;
        static fabric_setItemFoodValues$fabric_content_registries_v0_$md$6ffaf3$0(arg0: $Map_<any, any>): void;
        static fabric_getGatherableItems$fabric_content_registries_v0_$md$6ffaf3$2(): $Set<any>;
        static fabric_setGatherableItems$fabric_content_registries_v0_$md$6ffaf3$1(arg0: $Set_<any>): void;
        handler$ehg000$superbwarfare$readAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        getPlayerReputation(arg0: $Player): number;
        superbwarfare$getCupidLove(): boolean;
        superbwarfare$setCupidLove(arg0: boolean): void;
        wantsMoreFood(): boolean;
        getVillagerData(): $VillagerData;
        setVillagerXp(arg0: number): void;
        setVillagerData(arg0: $VillagerData): void;
        refreshBrain(arg0: $ServerLevel): void;
        wantsToSpawnGolem(arg0: number): boolean;
        shouldRestock(): boolean;
        hasFarmSeeds(): boolean;
        spawnGolemIfNeeded(arg0: $ServerLevel, arg1: number, arg2: number): void;
        hasExcessFood(): boolean;
        eatAndDigestFood(): void;
        playWorkSound(): void;
        setVariant(arg0: $VillagerType_): void;
        getVariant(): $VillagerType;
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
        static VILLAGER_SLOT_OFFSET: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        forcedAgeTimer: number;
        superbwarfare$cupidLove: boolean;
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
        static ID_TAG: string;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
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
        static FOOD_POINTS: $Map<$Item, number>;
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
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        offers: $MerchantOffers;
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
        static MEMORY_TYPES: $ImmutableList<$MemoryModuleType<never>>;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static BREEDING_FOOD_THRESHOLD: number;
        static POI_MEMORIES: $Map<$MemoryModuleType<$GlobalPos>, $BiPredicate<$Villager, $Holder<$PoiType>>>;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        static SPEED_MODIFIER: number;
        lerpSteps: number;
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
        constructor(arg0: $EntityType_<$Villager>, arg1: $Level_);
        constructor(arg0: $EntityType_<$Villager>, arg1: $Level_, arg2: $VillagerType_);
        set villagerXp(value: number);
    }
    export class $VillagerTrades$DyedArmorForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
    }
    export class $VillagerTrades$TypeSpecificTrade extends $Record implements $VillagerTrades$ItemListing {
        trades(): $Map<$VillagerType, $VillagerTrades$ItemListing>;
        static oneTradeInBiomes(arg0: $VillagerTrades$ItemListing_, ...arg1: $VillagerType_[]): $VillagerTrades$TypeSpecificTrade;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(trades: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>);
    }
    export class $ClientSideMerchant implements $Merchant {
        isClientSide(): boolean;
        overrideXp(arg0: number): void;
        getOffers(): $MerchantOffers;
        getNotifyTradeSound(): $SoundEvent;
        getVillagerXp(): number;
        setTradingPlayer(arg0: $Player): void;
        getTradingPlayer(): $Player;
        showProgressBar(): boolean;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        notifyTrade(arg0: $MerchantOffer): void;
        overrideOffers(arg0: $MerchantOffers): void;
        canRestock(): boolean;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        constructor(arg0: $Player);
        get clientSide(): boolean;
        get offers(): $MerchantOffers;
        get notifyTradeSound(): $SoundEvent;
        get villagerXp(): number;
    }
    export class $VillagerTrades$EnchantedItemForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $VillagerTrades {
        static EXPERIMENTAL_WANDERING_TRADER_TRADES: $List<$Pair<$VillagerTrades$ItemListing[], number>>;
        static EXPERIMENTAL_TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static WANDERING_TRADER_TRADES: $Int2ObjectMap<$VillagerTrades$ItemListing[]>;
        constructor();
    }
    export class $Npc {
    }
    export interface $Npc {
    }
    export class $VillagerTrades$SuspiciousStewForEmerald implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number);
        constructor(arg0: $SuspiciousStewEffects_, arg1: number, arg2: number);
    }
    export class $VillagerData {
        setType(arg0: $VillagerType_): $VillagerData;
        getType(): $VillagerType;
        getLevel(): number;
        setLevel(arg0: number): $VillagerData;
        static getMinXpPerLevel(arg0: number): number;
        static canLevelUp(arg0: number): boolean;
        setProfession(arg0: $VillagerProfession_): $VillagerData;
        getProfession(): $VillagerProfession;
        static getMaxXpPerLevel(arg0: number): number;
        static CODEC: $Codec<$VillagerData>;
        static MIN_VILLAGER_LEVEL: number;
        static MAX_VILLAGER_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VillagerData>;
        constructor(arg0: $VillagerType_, arg1: $VillagerProfession_, arg2: number);
    }
    export class $VillagerTrades$ItemsAndEmeraldsToItems implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $ItemCost_, arg1: number, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: $ItemLike_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $ResourceKey_<$EnchantmentProvider>);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: $Item_, arg4: number, arg5: number, arg6: number, arg7: number);
    }
    export class $VillagerTrades$EmeraldsForVillagerTypeItem implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Map_<$VillagerType_, $Item_>);
    }
    export interface $VillagerType extends RegistryMarked<RegistryTypes.VillagerTypeTag, RegistryTypes.VillagerType> {}
    export class $CatSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $VillagerDataHolder {
    }
    export interface $VillagerDataHolder extends $VariantHolder<$VillagerType> {
        setVariant(arg0: $VillagerType_): void;
        getVillagerData(): $VillagerData;
        setVillagerData(arg0: $VillagerData): void;
        getVariant(): $VillagerType;
    }
    export class $VillagerTrades$TippedArrowForItemsAndEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number, arg2: $Item_, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $VillagerType {
        static byBiome(arg0: $Holder_<$Biome>): $VillagerType;
        /**
         * @deprecated
         */
        static BY_BIOME: $Map<$ResourceKey<$Biome>, $VillagerType>;
        static SAVANNA: $VillagerType;
        static JUNGLE: $VillagerType;
        static SNOW: $VillagerType;
        static PLAINS: $VillagerType;
        static TAIGA: $VillagerType;
        static DESERT: $VillagerType;
        static SWAMP: $VillagerType;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $VillagerType}.
     */
    export type $VillagerType_ = RegistryTypes.VillagerType;
    export class $VillagerTrades$ItemListing {
    }
    export interface $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$ItemListing}.
     */
    export type $VillagerTrades$ItemListing_ = ((arg0: $Entity, arg1: $RandomSource) => $MerchantOffer);
    export class $WanderingTraderSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        static DEFAULT_SPAWN_DELAY: number;
        constructor(arg0: $ServerLevelData);
    }
    export class $VillagerTrades$EmeraldForItems implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $ItemCost_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: number);
    }
    export class $VillagerTrades$FailureItemListing implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor();
    }
}
