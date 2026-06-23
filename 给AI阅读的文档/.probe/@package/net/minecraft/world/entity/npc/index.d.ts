import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
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
import { $MerchantOffer, $MerchantOffers, $Merchant, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
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
    /**
     * @param requestedItems Defines items villagers of this profession can pick up and use.
     * @param secondaryPoi World blocks this profession interacts with.
     */
    export class $VillagerProfession extends $Record {
        name(): string;
        workSound(): $SoundEvent;
        secondaryPoi(): $ImmutableSet<$Block>;
        heldJobSite(): $Predicate<$Holder<$PoiType>>;
        requestedItems(): $ImmutableSet<$Item>;
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
        constructor(name: string, heldJobSite: $Predicate_<$Holder<$PoiType>>, acquirableJobSite: $Predicate_<$Holder<$PoiType>>, requestedItems: $ImmutableSet<$Item_>, secondaryPoi: $ImmutableSet<$Block_>, workSound: $SoundEvent_ | null);
    }
    /**
     * Values that may be interpreted as {@link $VillagerProfession}.
     */
    export type $VillagerProfession_ = RegistryTypes.VillagerProfession;
    export class $AbstractVillager extends $AgeableMob implements $InventoryCarrier, $Npc, $Merchant {
        getOffers(): $MerchantOffers;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isTrading(): boolean;
        overrideXp(xp: number): void;
        getInventory(): $SimpleContainer;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getVillagerXp(): number;
        setUnhappyCounter(xp: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getUnhappyCounter(): number;
        setTradingPlayer(player: $Player | null): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        showProgressBar(): boolean;
        getTradingPlayer(): $Player;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        updateTrades(): void;
        rewardTradeXp(offer: $MerchantOffer): void;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        stopTrading(): void;
        notifyTrade(offer: $MerchantOffer): void;
        /**
         * Notifies the merchant of a possible merchant recipe being fulfilled or not. Usually, this is just a sound byte being played depending on whether the suggested `ItemStack` is not empty.
         */
        notifyTradeUpdated(stack: $ItemStack_): void;
        overrideOffers(offers: $MerchantOffers | null): void;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        playCelebrateSound(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isClientSide(): boolean;
        addParticlesAroundSelf(particleOption: $ParticleOptions_): void;
        getTradeUpdatedSound(isYesSound: boolean): $SoundEvent;
        getNotifyTradeSound(): $SoundEvent;
        /**
         * Adds limited numbers of trades to the given `MerchantOffers`.
         */
        addOffersFromItemListings(givenMerchantOffers: $MerchantOffers, newTrades: $VillagerTrades$ItemListing_[], maxNumbers: number): void;
        readInventoryFromTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        writeInventoryToTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canRestock(): boolean;
        openTradingScreen(player: $Player, displayName: $Component_, level: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
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
        constructor(entityType: $EntityType_<$AbstractVillager>, level: $Level_);
        get trading(): boolean;
        get inventory(): $SimpleContainer;
        get villagerXp(): number;
        get clientSide(): boolean;
        get notifyTradeSound(): $SoundEvent;
    }
    export class $WanderingTrader extends $AbstractVillager {
        static access$100(arg0: $WanderingTrader): $PathNavigation;
        static access$000(arg0: $WanderingTrader): $PathNavigation;
        static access$200(arg0: $WanderingTrader): $PathNavigation;
        static access$300(arg0: $WanderingTrader): $PathNavigation;
        setDespawnDelay(despawnDelay: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getDespawnDelay(): number;
        setWanderTarget(wanderTarget: $BlockPos_ | null): void;
        getWanderTarget(): $BlockPos;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
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
        constructor(entityType: $EntityType_<$WanderingTrader>, level: $Level_);
    }
    export class $VillagerTrades$ItemsForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number);
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number, enchantmentProvider: $ResourceKey_<$EnchantmentProvider>);
        constructor(itemStack: $ItemStack_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number);
        constructor(itemStack: $ItemStack_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number, priceMultiplier: number, enchantmentProvider: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(block: $Block_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number);
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, villagerXp: number);
        constructor(item: $Item_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number);
        constructor(itemStack: $ItemStack_, emeraldCost: number, numberOfItems: number, maxUses: number, villagerXp: number);
    }
    export interface $VillagerProfession extends RegistryMarked<RegistryTypes.VillagerProfessionTag, RegistryTypes.VillagerProfession> {}
    export class $VillagerTrades$EnchantBookForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(villagerXp: number, tradeableEnchantments: $TagKey_<$Enchantment>);
        constructor(villagerXp: number, minLevel: number, maxLevel: number, tradeableEnchantments: $TagKey_<$Enchantment>);
    }
    export class $WanderingTrader$WanderToPositionGoal extends $Goal {
    }
    export class $InventoryCarrier {
        static pickUpItem(mob: $Mob, carrier: $InventoryCarrier_, itemEntity: $ItemEntity): void;
        static TAG_INVENTORY: string;
    }
    export interface $InventoryCarrier {
        getInventory(): $SimpleContainer;
        readInventoryFromTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        writeInventoryToTag(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        get inventory(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $InventoryCarrier}.
     */
    export type $InventoryCarrier_ = (() => $SimpleContainer);
    export class $VillagerTrades$TreasureMapForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(emeraldCost: number, destination: $TagKey_<$Structure>, displayName: string, destinationType: $Holder_<$MapDecorationType>, maxUses: number, villagerXp: number);
    }
    export class $Villager extends $AbstractVillager implements $ReputationEventHandler, $VillagerDataHolder, $CupidLove, $VillagerEntityAccessor {
        setGossips(gossip: $Tag_): void;
        getGossips(): $GossipContainer;
        setOffers(offers: $MerchantOffers): void;
        onReputationEventFrom(type: $ReputationEventType, target: $Entity): void;
        /**
         * Called to update the entity's position/logic.
         */
        restock(): void;
        setChasing(chasing: boolean): void;
        releasePoi(moduleType: $MemoryModuleType_<$GlobalPos_>): void;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        isChasing(): boolean;
        gossip(serverLevel: $ServerLevel, target: $Villager, gameTime: number): void;
        static fabric_setItemFoodValues$fabric_content_registries_v0_$md$dd6cb9$0(equipments: $Map_<any, any>): void;
        handler$gjm000$moonlight$reg(arg0: $Brain<any>, arg1: $CallbackInfo): void;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        assignProfessionWhenSpawned(): boolean;
        handler$ecf000$superbwarfare$readAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        static fabric_getGatherableItems$fabric_content_registries_v0_$md$dd6cb9$2(): $Set<any>;
        static fabric_setGatherableItems$fabric_content_registries_v0_$md$dd6cb9$1(arg0: $Set_<any>): void;
        handler$ecf000$superbwarfare$addAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        getVillagerData(): $VillagerData;
        setVillagerData(data: $VillagerData): void;
        setVillagerXp(qty: number): void;
        refreshBrain(serverLevel: $ServerLevel): void;
        wantsToSpawnGolem(gameTime: number): boolean;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        wantsMoreFood(): boolean;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        shouldRestock(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        playWorkSound(): void;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        hasExcessFood(): boolean;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        hasFarmSeeds(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        eatAndDigestFood(): void;
        spawnGolemIfNeeded(serverLevel: $ServerLevel, gameTime: number, arg2: number): void;
        static createAttributes(): $AttributeSupplier$Builder;
        handler$ecf000$superbwarfare$canBreed(arg0: $CallbackInfoReturnable<any>): void;
        getPlayerReputation(player: $Player): number;
        superbwarfare$setCupidLove(chasing: boolean): void;
        /**
         * Used by `TradeWithVillager` to check if the villager can give some items from an inventory to another villager.
         */
        superbwarfare$getCupidLove(): boolean;
        setVariant(variant: $VillagerType_): void;
        getVariant(): $VillagerType;
        serializeNBT(arg0: $HolderLookup$Provider): $VillagerType;
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
        constructor(entityType: $EntityType_<$Villager>, level: $Level_);
        constructor(entityType: $EntityType_<$Villager>, level: $Level_, villagerType: $VillagerType_);
        set villagerXp(value: number);
    }
    export class $VillagerTrades$DyedArmorForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        constructor(item: $Item_, value: number);
        constructor(item: $Item_, value: number, maxUses: number, villagerXp: number);
    }
    export class $VillagerTrades$TypeSpecificTrade extends $Record implements $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        trades(): $Map<$VillagerType, $VillagerTrades$ItemListing>;
        static oneTradeInBiomes(listing: $VillagerTrades$ItemListing_, ...types: $VillagerType_[]): $VillagerTrades$TypeSpecificTrade;
        constructor(trades: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>);
    }
    export class $ClientSideMerchant implements $Merchant {
        getOffers(): $MerchantOffers;
        overrideXp(xp: number): void;
        getVillagerXp(): number;
        setTradingPlayer(source: $Player | null): void;
        showProgressBar(): boolean;
        getTradingPlayer(): $Player;
        notifyTrade(offer: $MerchantOffer): void;
        /**
         * Notifies the merchant of a possible merchant recipe being fulfilled or not. Usually, this is just a sound byte being played depending on whether the suggested `ItemStack` is not empty.
         */
        notifyTradeUpdated(stack: $ItemStack_): void;
        overrideOffers(offers: $MerchantOffers): void;
        isClientSide(): boolean;
        getNotifyTradeSound(): $SoundEvent;
        canRestock(): boolean;
        openTradingScreen(player: $Player, displayName: $Component_, level: number): void;
        constructor(source: $Player);
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get clientSide(): boolean;
        get notifyTradeSound(): $SoundEvent;
    }
    export class $VillagerTrades$EnchantedItemForEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(item: $Item_, baseEmeraldCost: number, maxUses: number, villagerXp: number);
        constructor(item: $Item_, baseEmeraldCost: number, maxUses: number, villagerXp: number, priceMultiplier: number);
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
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(effect: $Holder_<$MobEffect>, duration: number, xp: number);
        constructor(effects: $SuspiciousStewEffects_, xp: number, priceMultiplier: number);
    }
    export class $VillagerData {
        setType(type: $VillagerType_): $VillagerData;
        getType(): $VillagerType;
        getLevel(): number;
        setLevel(level: number): $VillagerData;
        static getMinXpPerLevel(level: number): number;
        static canLevelUp(level: number): boolean;
        setProfession(profession: $VillagerProfession_): $VillagerData;
        getProfession(): $VillagerProfession;
        static getMaxXpPerLevel(level: number): number;
        static CODEC: $Codec<$VillagerData>;
        static MIN_VILLAGER_LEVEL: number;
        static MAX_VILLAGER_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VillagerData>;
        constructor(type: $VillagerType_, profession: $VillagerProfession_, level: number);
    }
    export class $VillagerTrades$ItemsAndEmeraldsToItems implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(fromItem: $ItemCost_, emeraldCost: number, toItem: $ItemStack_, maxUses: number, villagerXp: number, priceMultiplier: number, enchantmentProvider: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(fromItem: $ItemLike_, fromItemAmount: number, emeraldCost: number, toItem: $ItemLike_, toItemCount: number, maxUses: number, villagerXp: number, priceMultiplier: number, enchantmentProvider: $ResourceKey_<$EnchantmentProvider>);
        constructor(fromItem: $ItemLike_, fromItemCount: number, emeraldCost: number, toItem: $Item_, toItemCount: number, maxUses: number, villagerXp: number, priceMultiplier: number);
    }
    export class $VillagerTrades$EmeraldsForVillagerTypeItem implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(cost: number, maxUses: number, villagerXp: number, trades: $Map_<$VillagerType_, $Item_>);
    }
    export interface $VillagerType extends RegistryMarked<RegistryTypes.VillagerTypeTag, RegistryTypes.VillagerType> {}
    export class $CatSpawner implements $CustomSpawner {
        tick(level: $ServerLevel, spawnHostiles: boolean, spawnPassives: boolean): number;
        constructor();
    }
    export class $VillagerDataHolder {
    }
    export interface $VillagerDataHolder extends $VariantHolder<$VillagerType> {
        setVariant(variant: $VillagerType_): void;
        getVillagerData(): $VillagerData;
        setVillagerData(data: $VillagerData): void;
        getVariant(): $VillagerType;
    }
    export class $VillagerTrades$TippedArrowForItemsAndEmeralds implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(fromItem: $Item_, fromCount: number, toItem: $Item_, toCount: number, emeraldCost: number, maxUses: number, villagerXp: number);
    }
    export class $VillagerType {
        static byBiome(biome: $Holder_<$Biome>): $VillagerType;
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
        constructor(name: string);
    }
    /**
     * Values that may be interpreted as {@link $VillagerType}.
     */
    export type $VillagerType_ = RegistryTypes.VillagerType;
    export class $VillagerTrades$ItemListing {
    }
    export interface $VillagerTrades$ItemListing {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$ItemListing}.
     */
    export type $VillagerTrades$ItemListing_ = ((arg0: $Entity, arg1: $RandomSource) => $MerchantOffer);
    export class $WanderingTraderSpawner implements $CustomSpawner {
        tick(level: $ServerLevel, spawnHostiles: boolean, spawnPassives: boolean): number;
        static DEFAULT_SPAWN_DELAY: number;
        constructor(serverLevelData: $ServerLevelData);
    }
    export class $VillagerTrades$EmeraldForItems implements $VillagerTrades$ItemListing, $TradeMatcher$Filterable {
        getOffer(trader: $Entity, random: $RandomSource): $MerchantOffer;
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
        constructor(itemStack: $ItemCost_, maxUses: number, villagerXp: number, emeraldAmount: number);
        constructor(item: $ItemLike_, cost: number, maxUses: number, villagerXp: number, emeraldAmount: number);
        constructor(item: $ItemLike_, cost: number, maxUses: number, villagerXp: number);
    }
    export class $VillagerTrades$FailureItemListing implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor();
    }
}
