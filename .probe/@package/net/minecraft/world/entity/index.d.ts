import { $Goal, $PanicGoal, $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Long2ObjectMap, $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Sensing } from "@package/net/minecraft/world/entity/ai/sensing";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $ListTag, $CompoundTag_, $Tag, $CompoundTag, $Tag_ } from "@package/net/minecraft/nbt";
import { $MarkerEntityExt } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $EntityExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_collision";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $Panda, $Fox, $SnowGolem, $Wolf, $Animal, $Cod, $Chicken, $Cat, $Squid, $Sheep, $Bee, $Dolphin, $Parrot, $Turtle, $Salmon, $Pufferfish, $IronGolem, $Ocelot, $PolarBear, $Cow, $Pig, $TropicalFish, $MushroomCow, $Rabbit } from "@package/net/minecraft/world/entity/animal";
import { $EntityLivingBaseAccessor as $EntityLivingBaseAccessor$1 } from "@package/com/replaymod/replay/mixin";
import { $ILivingEntityExtension, $IEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Brain$Provider, $Brain } from "@package/net/minecraft/world/entity/ai";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $EntityAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $Component_, $HoverEvent, $Component } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $EntityExtension as $EntityExtension$1 } from "@package/foundry/veil/ext";
import { $TheFasterEntityCollisionContext } from "@package/dev/ryanhcode/sable/mixinhelpers/entity/entity_collision";
import { $DamageAccess, $OBBHitter, $ICustomKnockback, $BeastEntityKiller } from "@package/com/atsuishio/superbwarfare/entity/mixin";
import { $Snowball, $Projectile, $ShulkerBullet, $FishingHook, $WitherSkull, $DragonFireball, $SmallFireball, $SpectralArrow, $LargeFireball, $FireworkRocketEntity, $ThrownExperienceBottle, $EyeOfEnder, $Arrow, $ThrownEgg, $ThrownPotion, $ThrownTrident, $EvokerFangs, $ProjectileDeflection, $LlamaSpit, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $BalmEntity } from "@package/net/blay09/mods/balm/api/entity";
import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $StepSoundSource, $SoundEngine } from "@package/eu/ha3/presencefootsteps/sound";
import { $SubLevelEntityCollision$CollisionInfo } from "@package/dev/ryanhcode/sable/sublevel/entity_collision";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $Stray, $ZombifiedPiglin, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $Vector3d, $Vector3f, $Quaternionf } from "@package/org/joml";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $GameEvent, $DynamicGameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $AccessorEntity as $AccessorEntity$1 } from "@package/top/theillusivec4/curios/mixin/core";
import { $Attribute, $AttributeMap, $AttributeSupplier$Builder, $AttributeInstance, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $LivingEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Painting, $ArmorStand, $ItemFrame, $GlowItemFrame, $LeashFenceKnotEntity } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Set_, $List, $Collection_, $List_, $Iterator, $UUID, $Optional, $Stack, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Donkey, $Llama, $Mule, $ZombieHorse, $Horse, $SkeletonHorse, $TraderLlama } from "@package/net/minecraft/world/entity/animal/horse";
import { $HolderLookup$Provider, $Direction, $Holder_, $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $Vec3i, $Holder, $Direction$Axis_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $LightSourceSettingEntry } from "@package/dev/lambdaurora/lambdynlights/config";
import { $SpecialHurtable, $FloatConsumer, $HurtFunction1, $HurtFunction2 } from "@package/mod/chloeprime/gunsmithlib/common/util";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $EntityLivingBaseAccessor } from "@package/com/replaymod/recording/mixin";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Enum, $Iterable, $Class, $Object, $Throwable, $Record } from "@package/java/lang";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/dev/tr7zw/transition/mixin";
import { $ChunkPos, $Level_, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $EntityPotionEffectsJS } from "@package/dev/latvian/mods/kubejs/entity";
import { $SynchedEntityData$Builder, $SyncedDataHolder, $EntityDataAccessor_, $EntityDataAccessor, $SynchedEntityData, $SynchedEntityData$DataValue_ } from "@package/net/minecraft/network/syncher";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $EntityStickExtension, $LivingEntityStickExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels";
import { $Tadpole, $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $EntityAccess } from "@package/snownee/jade/mixin";
import { $ExtensionHolder } from "@package/dev/tr7zw/transition/mc/extending";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSources, $DamageSource_, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $ILivingEntity } from "@package/eu/ha3/presencefootsteps/mixins";
import { $Codec, $Dynamic } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $BreezeWindCharge, $WindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $FluidType, $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $DisplayAccessor } from "@package/com/moulberry/axiom/mixin";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorWalkAnimationState, $AccessorEntity } from "@package/com/railwayteam/railways/mixin/client";
import { $DynamicLightHandlerHolder } from "@package/dev/lambdaurora/lambdynlights/accessor";
import { $StringRepresentable$EnumCodec, $FormattedCharSequence_, $Brightness, $FormattedCharSequence, $RandomSource, $Brightness_, $OptionEnum, $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_, $Nameable, $Container, $InteractionResult, $DifficultyInstance, $InteractionHand } from "@package/net/minecraft/world";
import { $CrashReportCategory, $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $SoundEvent, $SoundSource, $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $MobAccessor } from "@package/net/p3pp3rf1y/sophisticatedbackpacks/mixin";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $EntityAccess as $EntityAccess$1, $EntityInLevelCallback, $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $SoundAction, $IShearable, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ProjectileWeaponItem, $ItemStack_, $ItemStack, $ItemDisplayContext_, $ItemDisplayContext, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IJetpackacableEntity } from "@package/com/wachi/sable_sa_compat/jetpack";
import { $ShooterDataHolder } from "@package/com/tacz/guns/entity/shooter";
import { $EntityExtension as $EntityExtension$2 } from "@package/dev/ryanhcode/sable/mixinterface";
import { $EntityMovementExtension, $LivingEntityMovementExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $InjectedEntityTypeExtension } from "@package/dev/architectury/extensions/injected";
import { $EnchantmentLocationBasedEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Portal_, $Mirror_, $Portal$Transition, $Rotation_, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityKJS, $EntityTypeKJS, $LivingEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Transformation } from "@package/com/mojang/math";
import { $AABB_, $Vec3_, $HitResult, $AABB, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $MinecartFurnace, $MinecartHopper, $MinecartChest, $MinecartTNT, $MinecartCommandBlock, $Boat, $ChestBoat, $MinecartSpawner, $Minecart } from "@package/net/minecraft/world/entity/vehicle";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $MoveControl, $LookControl, $JumpControl, $BodyRotationControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $FabricEntityTypeImpl, $FabricEntityTypeImpl$Builder, $FabricEntityTypeImpl$Builder$Mob, $FabricEntityTypeImpl$Builder$Living } from "@package/net/fabricmc/fabric/impl/object/builder";
import { $ReloadState, $KnockBackModifier, $ShootResult, $IGunOperator } from "@package/com/tacz/guns/api/entity";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $EntityData, $IEntity as $IEntity$1 } from "@package/xaero/pac/common/entity";
import { $FabricEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/entity";
import { $EntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $IntFunction, $Predicate_, $Function_, $Supplier_, $BiConsumer_, $ToIntFunction_, $Consumer_, $Predicate, $Consumer, $BiPredicate_ } from "@package/java/util/function";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $OBB$Part, $OBB$Part_ } from "@package/com/atsuishio/superbwarfare/tools";
import { $ParticleEmitter } from "@package/foundry/veil/api/quasar/particle";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $LootParams, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $GunAttributeSyncState, $MobEffectForceApplicable } from "@package/mod/chloeprime/gunsmithlib/common/internal";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";
import { $DynamicLightSource } from "@package/dev/lambdaurora/lambdynlights";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $EntityExt } from "@package/com/replaymod/replay/ext";
import { $Logger } from "@package/org/slf4j";
import { LocalPlayer, AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $DisplayAccessor as $DisplayAccessor$1 } from "@package/dev/tr7zw/entityculling/mixin";
import { $PiglinBrute, $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $IEntity } from "@package/com/jesz/createdieselgenerators/mixin_interfaces";
import { $VecDeltaCodec, $ClientboundAddEntityPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Stream } from "@package/java/util/stream";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $PotionContents_ } from "@package/net/minecraft/world/item/alchemy";
import { $PlayerTeam, $ScoreHolder, $Team } from "@package/net/minecraft/world/scores";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
import { $AttachmentCacheProperty } from "@package/com/tacz/guns/resource/modifier";
export * as ai from "@package/net/minecraft/world/entity/ai";
export * as animal from "@package/net/minecraft/world/entity/animal";
export * as projectile from "@package/net/minecraft/world/entity/projectile";
export * as npc from "@package/net/minecraft/world/entity/npc";
export * as boss from "@package/net/minecraft/world/entity/boss";
export * as player from "@package/net/minecraft/world/entity/player";
export * as monster from "@package/net/minecraft/world/entity/monster";
export * as decoration from "@package/net/minecraft/world/entity/decoration";
export * as vehicle from "@package/net/minecraft/world/entity/vehicle";
export * as schedule from "@package/net/minecraft/world/entity/schedule";
export * as ambient from "@package/net/minecraft/world/entity/ambient";
export * as raid from "@package/net/minecraft/world/entity/raid";
export * as item from "@package/net/minecraft/world/entity/item";

declare module "@package/net/minecraft/world/entity" {
    export class $GlowSquid extends $Squid {
        static checkGlowSquidSpawnRules(arg0: $EntityType_<$LivingEntity>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        getDarkTicksRemaining(): number;
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
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        sbw$beastKilled: boolean;
        removalReason: $Entity$RemovalReason;
        zza: number;
        passengers: $ImmutableList<$Entity>;
        rotOffs: number;
        tentacleAngle: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        oldTentacleAngle: number;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zBodyRot: number;
        boardingCooldown: number;
        zo: number;
        xBodyRot: number;
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
        zBodyRotO: number;
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
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
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
        xBodyRotO: number;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        tentacleMovement: number;
        bodyArmorDropChance: number;
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        oldTentacleMovement: number;
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
        constructor(arg0: $EntityType_<$GlowSquid>, arg1: $Level_);
        get darkTicksRemaining(): number;
    }
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $GunAttributeSyncState, $SpecialHurtable, $MobEffectForceApplicable, $EntityLivingBaseAccessor, $EntityLivingBaseAccessor$1, $DamageAccess, $ICustomKnockback, $LivingEntityKJS, $LivingEntityAccessor, $LivingEntityStickExtension, $LivingEntityMovementExtension, $KnockBackModifier, $IGunOperator, $ILivingEntity, $StepSoundSource, $BeastEntityKiller {
        getAttributes(): $AttributeMap;
        getAttribute(arg0: $Holder_<$Attribute>): $AttributeInstance;
        reload(): void;
        take(arg0: $Entity, arg1: number): void;
        aim(arg0: boolean): void;
        getAttributeValue(arg0: $Holder_<$Attribute>): number;
        draw(arg0: $Supplier_<any>): void;
        isStepBlocked(): boolean;
        getStepGenerator(arg0: $SoundEngine): $Optional<any>;
        sable$applyLerp(): void;
        getCacheProperty(): $AttachmentCacheProperty;
        sable$setupLerp(): void;
        initialData(): void;
        cancelReload(): void;
        getSynIsBolting(): boolean;
        getSynDrawCoolDown(): number;
        getSynIsAiming(): boolean;
        consumesAmmoOrNot(): boolean;
        needCheckAmmo(): boolean;
        getSynReloadState(): $ReloadState;
        getSynSprintTime(): number;
        getDataHolder(): $ShooterDataHolder;
        nextBulletIsTracer(arg0: number): boolean;
        increaseAirSupply(arg0: number): number;
        getSwimAmount(arg0: number): number;
        skipDropExperience(): void;
        setLastHurtByMob(arg0: $LivingEntity): void;
        brainProvider(): $Brain$Provider<never>;
        getSleepingPos(): ($BlockPos) | undefined;
        hasLandedInLiquid(): boolean;
        onChangedBlock(arg0: $ServerLevel, arg1: $BlockPos_): void;
        tickEffects(): void;
        decreaseAirSupply(arg0: number): number;
        getMaxHealth(): number;
        canAttackType(arg0: $EntityType_<never>): boolean;
        getLastAttacker(): $LivingEntity;
        tryAddFrost(): void;
        setDiscardFriction(arg0: boolean): void;
        canBeSeenAsEnemy(): boolean;
        removeAllEffects(): boolean;
        onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity): void;
        /**
         * @deprecated
         */
        canBeAffected(arg0: $MobEffectInstance): boolean;
        shouldDropLoot(): boolean;
        setLastHurtMob(arg0: $Entity): void;
        canBeSeenByAnyone(): boolean;
        doesEmitEquipEvent(arg0: $EquipmentSlot_): boolean;
        getLastHurtByMob(): $LivingEntity;
        isAffectedByFluids(): boolean;
        getAgeScale(): number;
        onEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        sanitizeScale(arg0: number): number;
        getLastHurtMob(): $LivingEntity;
        getNoActionTime(): number;
        setNoActionTime(arg0: number): void;
        setSleepingPos(arg0: $BlockPos_): void;
        onEffectRemoved(arg0: $MobEffectInstance): void;
        onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity): void;
        isFallFlying(): boolean;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        removeFrost(): void;
        getSoundVolume(): number;
        playHurtSound(arg0: $DamageSource_): void;
        dropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_): void;
        getKillCredit(): $LivingEntity;
        blockUsingShield(arg0: $LivingEntity): void;
        getMaxAbsorption(): number;
        getDeathSound(): $SoundEvent;
        indicateDamage(arg0: number, arg1: number): void;
        blockedByShield(arg0: $LivingEntity): void;
        removeEffect(arg0: $Holder_<$MobEffect>): boolean;
        getHurtSound(arg0: $DamageSource_): $SoundEvent;
        getVoicePitch(): number;
        getCombatTracker(): $CombatTracker;
        createWitherRose(arg0: $LivingEntity): void;
        stopSleeping(): void;
        setArrowCount(arg0: number): void;
        getFallSounds(): $LivingEntity$Fallsounds;
        setStingerCount(arg0: number): void;
        getKnockback(arg0: $Entity, arg1: $DamageSource_): number;
        doHurtEquipment(arg0: $DamageSource_, arg1: number, ...arg2: $EquipmentSlot_[]): void;
        actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        dropEquipment(): void;
        getArrowCount(): number;
        dropFromLootTable(arg0: $DamageSource_, arg1: boolean): void;
        getStingerCount(): number;
        dropExperience(arg0: $Entity): void;
        onClimbable(): boolean;
        getLootTable(): $ResourceKey<$LootTable>;
        getArmorValue(): number;
        getLootTableSeed(): number;
        getEatingSound(arg0: $ItemStack_): $SoundEvent;
        getDrinkingSound(arg0: $ItemStack_): $SoundEvent;
        playBlockFallSound(): void;
        /**
         * @deprecated
         */
        jumpInLiquid(arg0: $TagKey_<$Fluid>): void;
        getRiddenSpeed(arg0: $Player): number;
        doHurtTarget(arg0: $Entity): boolean;
        getJumpPower(): number;
        getJumpPower(arg0: number): number;
        getAllSlots(): $Iterable<$ItemStack>;
        getJumpBoostPower(): number;
        canStandOnFluid(arg0: $FluidState): boolean;
        hasItemInSlot(arg0: $EquipmentSlot_): boolean;
        dismountVehicle(arg0: $Entity): void;
        getHandSlots(): $Iterable<$ItemStack>;
        getWaterSlowDown(): number;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        /**
         * @deprecated
         */
        goDownInWater(): void;
        getRiddenInput(arg0: $Player, arg1: $Vec3_): $Vec3;
        setItemInHand(arg0: $InteractionHand_, arg1: $ItemStack_): void;
        getFlyingSpeed(): number;
        updateSwingTime(): void;
        verifyEquippedItem(arg0: $ItemStack_): void;
        getOffhandItem(): $ItemStack;
        getArmorSlots(): $Iterable<$ItemStack>;
        jumpFromGround(): void;
        onItemPickup(arg0: $ItemEntity): void;
        getTicksUsingItem(): number;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        hasLineOfSight(arg0: $Entity): boolean;
        onEnterCombat(): void;
        pushEntities(): void;
        completeUsingItem(): void;
        serverAiStep(): void;
        updateUsingItem(arg0: $ItemStack_): void;
        getFallFlyingTicks(): number;
        stopUsingItem(): void;
        onLeaveCombat(): void;
        startUsingItem(arg0: $InteractionHand_): void;
        tickHeadTurn(arg0: number, arg1: number): number;
        getUsedItemHand(): $InteractionHand;
        isAutoSpinAttack(): boolean;
        getAttackAnim(arg0: number): number;
        isSensitiveToWater(): boolean;
        getBedOrientation(): $Direction;
        canDisableShield(): boolean;
        canTakeItem(arg0: $ItemStack_): boolean;
        clearSleepingPos(): void;
        getProjectile(arg0: $ItemStack_): $ItemStack;
        startSleeping(arg0: $BlockPos_): void;
        static getSlotForHand(arg0: $InteractionHand_): $EquipmentSlot;
        getDismountPoses(): $ImmutableList<$Pose>;
        forceAddEffect(arg0: $MobEffectInstance, arg1: $Entity): void;
        isBlocking(): boolean;
        fireSelect(): void;
        bolt(): void;
        crawl(arg0: boolean): void;
        sbw$kill(): void;
        melee(): void;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>): $ShootResult;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>, arg2: number): $ShootResult;
        setHealth(arg0: number): void;
        makeBrain(arg0: $Dynamic<never>): $Brain<never>;
        getBrain(): $Brain<never>;
        getEffect(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        getHealth(): number;
        hasEffect(arg0: $Holder_<$MobEffect>): boolean;
        tickDeath(): void;
        isBaby(): boolean;
        makeSound(arg0: $SoundEvent_): void;
        die(arg0: $DamageSource_): void;
        heal(arg0: number): void;
        canAttack(arg0: $LivingEntity, arg1: $TargetingConditions): boolean;
        canAttack(arg0: $LivingEntity): boolean;
        hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        setSpeed(arg0: number): void;
        addEffect(arg0: $MobEffectInstance, arg1: $Entity): boolean;
        addEffect(arg0: $MobEffectInstance): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        hurtArmor(arg0: $DamageSource_, arg1: number): void;
        getHitbox(): $AABB;
        getHurtDir(): number;
        isHolding(arg0: $Item_): boolean;
        isHolding(arg0: $Predicate_<$ItemStack>): boolean;
        canUseSlot(arg0: $EquipmentSlot_): boolean;
        getSpeed(): number;
        travel(arg0: $Vec3_): void;
        isImmobile(): boolean;
        doPush(arg0: $Entity): void;
        tickRidden(arg0: $Player, arg1: $Vec3_): void;
        aiStep(): void;
        setJumping(arg0: boolean): void;
        getUseItem(): $ItemStack;
        getMainArm(): $HumanoidArm;
        attackable(): boolean;
        eat(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        eat(arg0: $Level_, arg1: $ItemStack_, arg2: $FoodProperties_): $ItemStack;
        zoom(): void;
        handler$zdk000$openpartiesandclaims$onDropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        redirect$hap000$sable$maxAltitude$mixinextras$bridge$451(arg0: number, arg1: number, arg2: $LocalRef<any>): number;
        handler$cfk000$fabric_entity_events_v1$injectElytraTick(arg0: $CallbackInfo): void;
        redirect$cff000$fabric_entity_events_v1$beforeEntityKilled(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): boolean;
        wrapOperation$dpo000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        isSuppressingSlidingDownLadder(): boolean;
        internalSetAbsorptionAmount(arg0: number): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: $Vec3_): $Vec3;
        getMaxHeadRotationRelativeToBody(): number;
        superbWarfare$playHurtSound(arg0: $DamageSource_): void;
        getSpecialSetHealthFunction(): $FloatConsumer;
        wouldNotSuffocateAtTargetPose(arg0: $Pose_): boolean;
        superbWarfare$getSoundVolume(): number;
        superbwarfare$getDamageContainers(): $Stack<any>;
        superbWarfare$setKnockbackStrength(arg0: number): void;
        gunsmith$forceAddEffectPrime(arg0: $MobEffectInstance, arg1: $Entity): void;
        redirect$hap000$sable$maxAltitude(arg0: number, arg1: number, arg2: $Entity): number;
        superbWarfare$getDeathSound(): $SoundEvent;
        superbWarfare$getKnockbackStrength(): number;
        handler$zdk000$openpartiesandclaims$onDiePre(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onDiePost(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onAddEffect(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfoReturnable<any>): void;
        wrapOperation$hap000$sable$onDismountVehicle(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: $Vec3_): $Vec3;
        static getLivingFlags$reforgedplaymod_$md$d64506$2(): $EntityDataAccessor<any>;
        isAlwaysExperienceDropper(): boolean;
        getLastHurtByMobTimestamp(): number;
        setLastHurtByPlayer(arg0: $Player): void;
        shouldDiscardFriction(): boolean;
        getAbsorptionAmount(): number;
        getBaseExperienceReward(): number;
        updateInvisibilityStatus(): void;
        /**
         * @deprecated
         */
        canBreatheUnderwater(): boolean;
        getExperienceReward(arg0: $ServerLevel, arg1: $Entity): number;
        removeEffectParticles(): void;
        static areAllEffectsAmbient(arg0: $Collection_<$MobEffectInstance>): boolean;
        getVisibilityPercent(arg0: $Entity): number;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        getLastHurtMobTimestamp(): number;
        triggerOnDeathMobEffects(arg0: $Entity$RemovalReason_): void;
        shouldDropExperience(): boolean;
        getCurrentSwingDuration(): number;
        sendEffectToPassengers(arg0: $MobEffectInstance): void;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        wasExperienceConsumed(): boolean;
        getComfortableFallDistance(arg0: number): number;
        getAttributeBaseValue(arg0: $Holder_<$Attribute>): number;
        getDamageAfterMagicAbsorb(arg0: $DamageSource_, arg1: number): number;
        getArmorCoverPercentage(): number;
        calculateFallDamage(arg0: number, arg1: number): number;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        setAbsorptionAmount(arg0: number): void;
        getLastClimbablePos(): ($BlockPos) | undefined;
        getLastDamageSource(): $DamageSource;
        isInvertedHealAndHarm(): boolean;
        dropCustomDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: boolean): void;
        isDamageSourceBlocked(arg0: $DamageSource_): boolean;
        getDamageAfterArmorAbsorb(arg0: $DamageSource_, arg1: number): number;
        calculateEntityAnimation(arg0: boolean): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        removeEffectNoUpdate(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        getSpecialHurtFunction2(): $HurtFunction2;
        superbWarfare$actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        getUseItemRemainingTicks(): number;
        setRecordPlayingNearby(arg0: $BlockPos_, arg1: boolean): void;
        superbWarfare$hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        shouldRiderFaceForward(arg0: $Player): boolean;
        getSpecialHurtFunction1(): $HurtFunction1;
        checkAutoSpinAttack(arg0: $AABB_, arg1: $AABB_): void;
        triggerItemUseEffects(arg0: $ItemStack_, arg1: number): void;
        updateWalkAnimation(arg0: number): void;
        gunsmith$isInGunMode(): boolean;
        gunsmith$setInGunMode(arg0: boolean): void;
        isAffectedByPotions(): boolean;
        onEquippedItemBroken(arg0: $Item_, arg1: $EquipmentSlot_): void;
        equipmentHasChanged(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        lerpHeadRotationStep(arg0: number, arg1: number): void;
        getEquipmentSlotForItem(arg0: $ItemStack_): $EquipmentSlot;
        gunsmith$beginSpecialHurt(): void;
        updateEffectVisibility(): void;
        gunsmith$endSpecialHurt(): void;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getLocalBoundsForPose(arg0: $Pose_): $AABB;
        gunsmith$usingSpecialHurt(): boolean;
        getDefaultDimensions(arg0: $Pose_): $EntityDimensions;
        doAutoAttackOnTouch(arg0: $LivingEntity): void;
        getProcessedSprintStatus(arg0: boolean): boolean;
        getSynMeleeCoolDown(): number;
        resetKnockBackStrength(): void;
        getKnockBackStrength(): number;
        getSynShootCoolDown(): number;
        sable$getInheritedVelocity(): $Vector3d;
        setKnockBackStrength(arg0: number): void;
        getSynAimingProgress(): number;
        updateCacheProperty(arg0: $AttachmentCacheProperty): void;
        sable$getLerpTarget(): $Vec3;
        getScale(): number;
        getMainHandItem(): $ItemStack;
        hasInfiniteMaterials(): boolean;
        swing(arg0: $InteractionHand_, arg1: boolean): void;
        swing(arg0: $InteractionHand_): void;
        isSleeping(): boolean;
        handleRelativeFrictionAndCalculateMovement(arg0: $Vec3_, arg1: number): $Vec3;
        handler$egj000$superbwarfare$onRemove(arg0: $Entity$RemovalReason_, arg1: $CallbackInfo): void;
        handler$egj000$superbwarfare$isDeadOrDying(arg0: $CallbackInfoReturnable<any>): void;
        handler$ehb000$superbwarfare$setSprinting(arg0: boolean, arg1: $CallbackInfo): void;
        handler$hbg000$sable$beforeAnimation(arg0: $Vec3_, arg1: $CallbackInfo): void;
        handler$hap000$sable$jumpFromGround(arg0: $CallbackInfo): void;
        handler$egj000$superbwarfare$getHealth(arg0: $CallbackInfoReturnable<any>): void;
        handler$zdk000$openpartiesandclaims$onDie(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        superbWarfare$resetKnockbackStrength(): void;
        handler$gpi001$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        superbWarfare$checkTotemDeathProtection(arg0: $DamageSource_): boolean;
        handler$cem000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        getItemInHand(arg0: $InteractionHand_): $ItemStack;
        isUsingItem(): boolean;
        releaseUsingItem(): void;
        isDeadOrDying(): boolean;
        self(): $LivingEntity;
        onDamageTaken(arg0: $DamageContainer): void;
        sinkInFluid(arg0: $FluidType_): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        jumpInFluid(arg0: $FluidType_): void;
        canDrownInFluidType(arg0: $FluidType_): boolean;
        gunsmith$addUnsupportedTypeForSpecialHurt(arg0: $EntityType_<never>, arg1: $Throwable): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        setOffHandItem(item: $ItemStack_): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        getOffHandItem(): $ItemStack;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        rayTrace(): $KubeRayTraceResult;
        isUndead(): boolean;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        swing(hand: $InteractionHand_): void;
        swing(): void;
        setDefaultMovementSpeed(speed: number): void;
        getDefaultMovementSpeed(): number;
        setMovementSpeedAddition(speed: number): void;
        getFeetArmorItem(): $ItemStack;
        setLegsArmorItem(item: $ItemStack_): void;
        getReachDistance(): number;
        getChestArmorItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getLegsArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        getMainHandItem(): $ItemStack;
        setMainHandItem(item: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        getTotalMovementSpeed(): number;
        setHeadArmorItem(item: $ItemStack_): void;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getPotionEffects(): $EntityPotionEffectsJS;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getInterpTargetY(): number;
        getInterpTargetYaw(): number;
        getInterpTargetX(): number;
        getInterpTargetZ(): number;
        isJumping(): boolean;
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
        setActiveItemStackUseCount(arg0: number): void;
        getInterpTargetPitch(): number;
        getActiveItemStackUseCount(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        sbw$beastKilled: boolean;
        removalReason: $Entity$RemovalReason;
        zza: number;
        passengers: $ImmutableList<$Entity>;
        rotOffs: number;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
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
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
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
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
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
        constructor(arg0: $EntityType_<$LivingEntity>, arg1: $Level_);
        get attributes(): $AttributeMap;
        get stepBlocked(): boolean;
        get cacheProperty(): $AttachmentCacheProperty;
        get synIsBolting(): boolean;
        get synDrawCoolDown(): number;
        get synIsAiming(): boolean;
        get synReloadState(): $ReloadState;
        get synSprintTime(): number;
        get dataHolder(): $ShooterDataHolder;
        get lastAttacker(): $LivingEntity;
        set discardFriction(value: boolean);
        get affectedByFluids(): boolean;
        get ageScale(): number;
        get activeEffects(): $Collection<$MobEffectInstance>;
        get fallFlying(): boolean;
        get soundVolume(): number;
        get killCredit(): $LivingEntity;
        get maxAbsorption(): number;
        get deathSound(): $SoundEvent;
        get voicePitch(): number;
        get combatTracker(): $CombatTracker;
        get fallSounds(): $LivingEntity$Fallsounds;
        get lootTable(): $ResourceKey<$LootTable>;
        get armorValue(): number;
        get lootTableSeed(): number;
        get allSlots(): $Iterable<$ItemStack>;
        get jumpBoostPower(): number;
        get handSlots(): $Iterable<$ItemStack>;
        get waterSlowDown(): number;
        get flyingSpeed(): number;
        get offhandItem(): $ItemStack;
        get armorSlots(): $Iterable<$ItemStack>;
        get ticksUsingItem(): number;
        get fallFlyingTicks(): number;
        get usedItemHand(): $InteractionHand;
        get autoSpinAttack(): boolean;
        get sensitiveToWater(): boolean;
        get bedOrientation(): $Direction;
        get dismountPoses(): $ImmutableList<$Pose>;
        get blocking(): boolean;
        get baby(): boolean;
        get hitbox(): $AABB;
        get hurtDir(): number;
        get immobile(): boolean;
        get mainArm(): $HumanoidArm;
        get suppressingSlidingDownLadder(): boolean;
        get maxHeadRotationRelativeToBody(): number;
        get specialSetHealthFunction(): $FloatConsumer;
        static get livingFlags$reforgedplaymod_$md$d64506$2(): $EntityDataAccessor<any>;
        get alwaysExperienceDropper(): boolean;
        get lastHurtByMobTimestamp(): number;
        get baseExperienceReward(): number;
        get lastHurtMobTimestamp(): number;
        get currentSwingDuration(): number;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get armorCoverPercentage(): number;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get invertedHealAndHarm(): boolean;
        get specialHurtFunction2(): $HurtFunction2;
        get useItemRemainingTicks(): number;
        get specialHurtFunction1(): $HurtFunction1;
        get affectedByPotions(): boolean;
        get synMeleeCoolDown(): number;
        get synShootCoolDown(): number;
        get synAimingProgress(): number;
        get scale(): number;
        get sleeping(): boolean;
        get usingItem(): boolean;
        get deadOrDying(): boolean;
        get undead(): boolean;
        set movementSpeedAddition(value: number);
        get reachDistance(): number;
        get totalMovementSpeed(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get interpTargetY(): number;
        get interpTargetYaw(): number;
        get interpTargetX(): number;
        get interpTargetZ(): number;
        get interpTargetPitch(): number;
    }
    export class $SpawnGroupData {
    }
    export interface $SpawnGroupData {
    }
    export class $Display$TextDisplay$CachedInfo extends $Record {
        lines(): $List<$Display$TextDisplay$CachedLine>;
        width(): number;
        constructor(arg0: $List_<$Display$TextDisplay$CachedLine_>, arg1: number);
    }
    export class $EntityAttachments$Builder {
        build(arg0: number, arg1: number): $EntityAttachments;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityAttachments$Builder;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityAttachments$Builder;
        constructor();
    }
    export class $EntityEvent {
        static STOP_ATTACKING: number;
        static REDUCED_DEBUG_INFO: number;
        static OFFER_FLOWER: number;
        static MAINHAND_BREAK: number;
        static DEATH: number;
        static DOLPHIN_LOOKING_FOR_TREASURE: number;
        static JUMP: number;
        static SHAKE_WETNESS: number;
        static SILVERFISH_MERGE_ANIM: number;
        static TRUSTING_SUCCEEDED: number;
        static HONEY_SLIDE: number;
        static HEAD_BREAK: number;
        static STOP_OFFER_FLOWER: number;
        static TRUSTING_FAILED: number;
        static EAT_GRASS: number;
        static TALISMAN_ACTIVATE: number;
        static TENDRILS_SHIVER: number;
        static SONIC_CHARGE: number;
        static OFFHAND_BREAK: number;
        static FEET_BREAK: number;
        static PERMISSION_LEVEL_GAMEMASTERS: number;
        static VILLAGER_ANGRY: number;
        static CANCEL_SHAKE_WETNESS: number;
        static LOVE_HEARTS: number;
        static ZOMBIE_CONVERTING: number;
        static PERMISSION_LEVEL_ALL: number;
        static POOF: number;
        static RAVAGER_STUNNED: number;
        static TELEPORT: number;
        static FISHING_ROD_REEL_IN: number;
        static ARMADILLO_PEEK: number;
        static SQUID_ANIM_SYNCH: number;
        static GUARDIAN_ATTACK_SOUND: number;
        static START_RAM: number;
        static VILLAGER_HAPPY: number;
        static SHIELD_DISABLED: number;
        static ARMORSTAND_WOBBLE: number;
        static IN_LOVE_HEARTS: number;
        static BODY_BREAK: number;
        static START_ATTACKING: number;
        static FIREWORKS_EXPLODE: number;
        static ATTACK_BLOCKED: number;
        static USE_ITEM_COMPLETE: number;
        static TAMING_FAILED: number;
        static SNIFFER_DIGGING_SOUND: number;
        static CHEST_BREAK: number;
        static END_RAM: number;
        static PERMISSION_LEVEL_ADMINS: number;
        static TAMING_SUCCEEDED: number;
        static FOX_EAT: number;
        static FULL_DEBUG_INFO: number;
        static PERMISSION_LEVEL_OWNERS: number;
        static LEGS_BREAK: number;
        static SWAP_HANDS: number;
        static PERMISSION_LEVEL_MODERATORS: number;
        static VILLAGER_SWEAT: number;
        static HONEY_JUMP: number;
        static WITCH_HAT_MAGIC: number;
        constructor();
    }
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$1, $CommandSource, $ScoreHolder, $IEntityExtension, $EntityExt, $EntityExtension$1, $BalmEntity, $AccessorEntity$1, $ExtensionHolder, $EntityAccessor$1, $EntityAccessor, $Cullable, $OBBHitter, $AccessorEntity, $DynamicLightSource, $EntityKJS, $EntityAccess, $EntityStickExtension, $EntityExtension, $EntityExtension$2, $IJetpackacableEntity, $IEntity, $EntityMovementExtension, $IEntity$1 {
        getName(): $Component;
        remove(arg0: $Entity$RemovalReason_): void;
        load(arg0: $CompoundTag_): void;
        position(): $Vec3;
        getTypeName(): $Component;
        isAlive(): boolean;
        getId(): number;
        save(arg0: $CompoundTag_): boolean;
        getEntityType(): $EntityType<never>;
        getSlot(arg0: number): $SlotAccess;
        pick(arg0: number, arg1: number, arg2: boolean): $HitResult;
        is(arg0: $Entity): boolean;
        collide(arg0: $Vec3_): $Vec3;
        rotate(arg0: $Rotation_): number;
        push(arg0: $Entity): void;
        push(arg0: $Vec3_): void;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getDisplayName(): $Component;
        move(arg0: $MoverType_, arg1: $Vec3_): void;
        tick(): void;
        isSupportedBy(arg0: $BlockPos_): boolean;
        getExtension(key: $Object, type: $Class<any>): $Object;
        setExtension(key: $Object, value: $Object): void;
        setLevel(arg0: $Level_): void;
        getDimensions(arg0: $Pose_): $EntityDimensions;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        moveTo(arg0: $Vec3_, arg1: number, arg2: number): void;
        moveTo(arg0: $Vec3_): void;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        moveToBlockPos(arg0: $BlockPos_, arg1: number, arg2: number): void;
        setTimeout(): void;
        getY(arg0: number): number;
        getY(): number;
        getX(arg0: number): number;
        getX(): number;
        mirror(arg0: $Mirror_): number;
        discard(): void;
        setId(arg0: number): void;
        updateDynamicLightPreviousCoordinates(): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        handler$gph000$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        handler$han000$sable$onPositionRider(arg0: $Entity, arg1: $CallbackInfo): void;
        getHorizontalFacing(): $Direction;
        getEyeInFluidType(): $FluidType;
        isAddedToLevel(): boolean;
        getCustomName(): $Component;
        sendSystemMessage(arg0: $Component_): void;
        onRemovedFromLevel(): void;
        killedEntity(arg0: $ServerLevel, arg1: $LivingEntity): boolean;
        canStartSwimming(): boolean;
        getPickResult(): $ItemStack;
        saveWithoutId(arg0: $CompoundTag_): $CompoundTag;
        getEncodeId(): string;
        getForgePersistentData(): $CompoundTag;
        onAddedToLevel(): void;
        /**
         * @deprecated
         */
        isPushedByFluid(): boolean;
        setOnGround(arg0: boolean): void;
        /**
         * Measures the **square** of a distance of entity to another entity.
         */
        distanceToEntitySqr(arg0: $Entity): number;
        distanceToSqr(arg0: $Vec3_): number;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        chunkPosition(): $ChunkPos;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        waterSwimSound(): void;
        isColliding(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        setPortalCooldown(arg0: number): void;
        setPortalCooldown(): void;
        igniteForSeconds(arg0: number): void;
        hasGlowingTag(): boolean;
        ejectPassengers(): void;
        getPositionCodec(): $VecDeltaCodec;
        getTeamColor(): number;
        onClientRemoval(): void;
        checkBelowWorld(): void;
        isOnPortalCooldown(): boolean;
        getFireImmuneTicks(): number;
        setBoundingBox(arg0: $AABB_): void;
        handlePortal(): void;
        getPortalCooldown(): number;
        getEntityData(): $SynchedEntityData;
        updateSwimming(): void;
        playerTouch(arg0: $Player): void;
        calculateUpVector(arg0: number, arg1: number): $Vec3;
        dampensVibrations(): boolean;
        getBlockStateOn(): $BlockState;
        setNoGravity(arg0: boolean): void;
        getSwimSound(): $SoundEvent;
        playSwimSound(arg0: number): void;
        setCustomName(arg0: $Component_): void;
        onInsideBlock(arg0: $BlockState_): void;
        applyGravity(): void;
        newFloatList(...arg0: number[]): $ListTag;
        newDoubleList(...arg0: number[]): $ListTag;
        setAirSupply(arg0: number): void;
        setGlowing(arg0: boolean): void;
        /**
         * @deprecated
         */
        isEyeInFluid(arg0: $TagKey_<$Fluid>): boolean;
        isInWaterOrBubble(): boolean;
        saveAsPassenger(arg0: $CompoundTag_): boolean;
        checkInsideBlocks(): void;
        isInWaterOrRain(): boolean;
        getSwimSplashSound(): $SoundEvent;
        absRotateTo(arg0: number, arg1: number): void;
        isNoGravity(): boolean;
        isCrouching(): boolean;
        getViewXRot(arg0: number): number;
        static collideBoundingBox(arg0: $Entity, arg1: $Vec3_, arg2: $AABB_, arg3: $Level_, arg4: $List_<$VoxelShape>): $Vec3;
        getUpVector(arg0: number): $Vec3;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        playStepSound(arg0: $BlockPos_, arg1: $BlockState_): void;
        setOldPosAndRot(): void;
        canBeCollidedWith(): boolean;
        placePortalTicket(arg0: $BlockPos_): void;
        isAttackable(): boolean;
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        isDescending(): boolean;
        getAttachments(): $EntityAttachments;
        getFirstPassenger(): $Entity;
        canControlVehicle(): boolean;
        setInvulnerable(arg0: boolean): void;
        removePassenger(arg0: $Entity): void;
        setSwimming(arg0: boolean): void;
        changeDimension(arg0: $DimensionTransition_): $Entity;
        onPassengerTurned(arg0: $Entity): void;
        showVehicleHealth(): boolean;
        hasPassenger(arg0: $Entity): boolean;
        hasPassenger(arg0: $Predicate_<$Entity>): boolean;
        positionRider(arg0: $Entity): void;
        positionRider(arg0: $Entity, arg1: $Entity$MoveFunction_): void;
        canAddPassenger(arg0: $Entity): boolean;
        removeVehicle(): void;
        getPickRadius(): number;
        setShiftKeyDown(arg0: boolean): void;
        isVisuallyCrawling(): boolean;
        getScoreboardName(): string;
        addPassenger(arg0: $Entity): void;
        makeStuckInBlock(arg0: $BlockState_, arg1: $Vec3_): void;
        restoreFrom(arg0: $Entity): void;
        getRotationVector(): $Vec2;
        copyPosition(arg0: $Entity): void;
        canCollideWith(arg0: $Entity): boolean;
        setAsInsidePortal(arg0: $Portal_, arg1: $BlockPos_): void;
        isInvisibleTo(arg0: $Player): boolean;
        startRiding(arg0: $Entity, arg1: boolean): boolean;
        startRiding(arg0: $Entity): boolean;
        onAboveBubbleCol(arg0: boolean): void;
        getKnownMovement(): $Vec3;
        getMotionDirection(): $Direction;
        shouldBeSaved(): boolean;
        setFluidTypeHeight(arg0: $FluidType_, arg1: number): void;
        checkDespawn(): void;
        static getViewScale(): number;
        /**
         * @deprecated
         */
        fixupDimensions(): void;
        shouldInformAdmins(): boolean;
        getPermissionLevel(): number;
        getAddEntityPacket(arg0: $ServerEntity): $Packet<$ClientGamePacketListener>;
        getEyeHeight(arg0: $Pose_): number;
        getEyeHeight(): number;
        setIsInPowderSnow(arg0: boolean): void;
        trackingPosition(): $Vec3;
        ignoreExplosion(arg0: $Explosion): boolean;
        onlyOpCanSetNbt(): boolean;
        acceptsSuccess(): boolean;
        onExplosionHit(arg0: $Entity): void;
        static setViewScale(arg0: number): void;
        stopSeenByPlayer(arg0: $ServerPlayer): void;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        getRootVehicle(): $Entity;
        createHoverEvent(): $HoverEvent;
        veil$getEmitters(): $List<any>;
        veil$addEmitter(arg0: $ParticleEmitter): void;
        getRemovalReason(): $Entity$RemovalReason;
        startSeenByPlayer(arg0: $ServerPlayer): void;
        unsetRemoved(): void;
        mayInteract(arg0: $Level_, arg1: $BlockPos_): boolean;
        hasPermissions(arg0: number): boolean;
        getFabricBalmData(): $CompoundTag;
        broadcastToPlayer(arg0: $ServerPlayer): boolean;
        setFabricBalmData(arg0: $CompoundTag_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        acceptsFailure(): boolean;
        getLeashOffset(): $Vec3;
        getLeashOffset(arg0: number): $Vec3;
        isAlwaysTicking(): boolean;
        sable$setPosField(arg0: $Vec3_): void;
        resetDynamicLight(): void;
        setXaero_OPAC_data(arg0: $EntityData): void;
        isForcedVisible(): boolean;
        getDynamicLightId(): number;
        getDynamicLightY(): number;
        isOutOfCamera(): boolean;
        getDynamicLightX(): number;
        getTurretPos(): $BlockPos;
        setTurretPos(arg0: $BlockPos_): void;
        getXaero_OPAC_data(): $EntityData;
        setOutOfCamera(value: boolean): void;
        getDynamicLightZ(): number;
        isOnSameTeam(arg0: $Entity): boolean;
        isAlliedTo(arg0: $Team): boolean;
        getTeam(): $PlayerTeam;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        unRide(): void;
        addTag(arg0: string): boolean;
        turn(arg0: number, arg1: number): void;
        lavaHurt(): void;
        nextStep(): number;
        isVehicle(): boolean;
        getTags(): $Set<string>;
        closerThan(arg0: $Entity, arg1: number, arg2: number): boolean;
        closerThan(arg0: $Entity, arg1: number): boolean;
        isFlapping(): boolean;
        isOnRails(): boolean;
        isSwimming(): boolean;
        onFlap(): void;
        setSilent(arg0: boolean): void;
        thunderHit(arg0: $ServerLevel, arg1: $LightningBolt): void;
        getForward(): $Vec3;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        canRide(arg0: $Entity): boolean;
        deflection(arg0: $Projectile): $ProjectileDeflection;
        isFreezing(): boolean;
        canSprint(): boolean;
        isCulled(): boolean;
        setCulled(value: boolean): void;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
        isInFluidType(): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        extinguish(): void;
        getAirSupply(): number;
        reapplyPosition(): void;
        damageSources(): $DamageSources;
        checkFallDamage(arg0: number, arg1: boolean, arg2: $BlockState_, arg3: $BlockPos_): void;
        defineSynchedData(arg0: $SynchedEntityData$Builder): void;
        getBoundingBox(): $AABB;
        getDeltaMovement(): $Vec3;
        isInvisible(): boolean;
        isInvulnerable(): boolean;
        getTicksFrozen(): number;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSoundSource(): $SoundSource;
        getPercentFrozen(): number;
        getSharedFlag(arg0: number): boolean;
        getStringUuid(): string;
        getMaxAirSupply(): number;
        isInvulnerableTo(arg0: $DamageSource_): boolean;
        getYHeadRot(): number;
        awardKillScore(arg0: $Entity, arg1: number, arg2: $DamageSource_): void;
        hasCustomName(): boolean;
        animateHurt(arg0: number): void;
        getWeaponItem(): $ItemStack;
        setDeltaMovement(arg0: $Vec3_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        spawnAtLocation(arg0: $ItemStack_): $ItemEntity;
        spawnAtLocation(arg0: $ItemStack_, arg1: number): $ItemEntity;
        getMaxFallDistance(): number;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        captureDrops(): $Collection<$ItemEntity>;
        causeFallDamage(arg0: number, arg1: number, arg2: $DamageSource_): boolean;
        shouldShowName(): boolean;
        moveRelative(arg0: number, arg1: $Vec3_): void;
        isSprinting(): boolean;
        getInBlockState(): $BlockState;
        handleDamageEvent(arg0: $DamageSource_): void;
        setSprinting(arg0: boolean): void;
        getDefaultGravity(): number;
        handleEntityEvent(arg0: number): void;
        getBlockJumpFactor(): number;
        getBbHeight(): number;
        onBelowWorld(): void;
        /**
         * @deprecated
         */
        getFluidHeight(arg0: $TagKey_<$Fluid>): number;
        resetFallDistance(): void;
        addDeltaMovement(arg0: $Vec3_): void;
        isPassenger(): boolean;
        isEffectiveAi(): boolean;
        lerpTargetY(): number;
        lerpTargetZ(): number;
        setYHeadRot(arg0: number): void;
        isFullyFrozen(): boolean;
        refreshDimensions(): void;
        lerpTargetX(): number;
        lerpTargetXRot(): number;
        isVisuallySwimming(): boolean;
        getViewYRot(arg0: number): number;
        getFluidTypeHeight(arg0: $FluidType_): number;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(arg0: number): void;
        setTicksFrozen(arg0: number): void;
        isShiftKeyDown(): boolean;
        lerpTargetYRot(): number;
        getLuminance(): number;
        makeBoundingBox(): $AABB;
        dynamicLightTick(): void;
        canUsePortal(arg0: boolean): boolean;
        recreateFromPacket(arg0: $ClientboundAddEntityPacket): void;
        igniteForTicks(arg0: number): void;
        setLuminance(luminance: number): void;
        revive(): void;
        getZ(): number;
        getZ(arg0: number): number;
        getPosition(arg0: number): $Vec3;
        kill(): void;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        getOnPos(): $BlockPos;
        getOnPos(arg0: number): $BlockPos;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        setRot(arg0: number, arg1: number): void;
        isInWater(): boolean;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setPos(arg0: $Vec3_): void;
        gameEvent(arg0: $Holder_<$GameEvent>): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Entity): void;
        getRandom(): $RandomSource;
        isSilent(): boolean;
        fireImmune(): boolean;
        getRandomX(arg0: number): number;
        isDiscrete(): boolean;
        isInWall(): boolean;
        clearFire(): void;
        isInLiquid(): boolean;
        getRandomY(): number;
        baseTick(): void;
        getRandomZ(arg0: number): number;
        markHurt(): void;
        playSound(arg0: $SoundEvent_, arg1: number, arg2: number): void;
        playSound(arg0: $SoundEvent_): void;
        onGround(): boolean;
        getServer(): $MinecraftServer;
        setPose(arg0: $Pose_): void;
        getGravity(): number;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        isInLava(): boolean;
        getBbWidth(): number;
        stopRiding(): void;
        canFreeze(): boolean;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        rideTick(): void;
        getEyeY(): number;
        distanceTo(arg0: $Entity): number;
        isPickable(): boolean;
        lerpHeadTo(arg0: number, arg1: number): void;
        hasPose(arg0: $Pose_): boolean;
        isPushable(): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        maxUpStep(): number;
        getPose(): $Pose;
        isOnFire(): boolean;
        setInvisible(arg0: boolean): void;
        isRemoved(): boolean;
        setUUID(arg0: $UUID_): void;
        removeTag(arg0: string): boolean;
        handler$zdc000$openpartiesandclaims$onIsInvulnerableTo(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$ehf000$superbwarfare$playSteelPipeDropSound(arg0: boolean, arg1: $Vec3_, arg2: $CallbackInfo): void;
        handler$dmh001$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        modifyReturnValue$ieg000$create_sa$create$onFireImmune(arg0: boolean): boolean;
        handler$hee000$sable$updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<any>, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        isControlledByLocalInstance(): boolean;
        getDismountLocationForPassenger(arg0: $LivingEntity): $Vec3;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        getPassengerAttachmentPoint(arg0: $Entity, arg1: $EntityDimensions_, arg2: number): $Vec3;
        lerpPositionAndRotationStep(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        handler$hbe000$sable$tickInject(arg0: $CallbackInfo): void;
        updateDynamicGameEventListener(arg0: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        handler$hbe000$sable$moveInject(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getSwimHighSpeedSplashSound(): $SoundEvent;
        getPrimaryStepSoundBlockPos(arg0: $BlockPos_): $BlockPos;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        updateFluidHeightAndDoFluidPushing(): void;
        handler$han000$sable$onRidingTick(arg0: $CallbackInfo): void;
        playEntityOnFireExtinguishedSound(): void;
        removeAfterChangingDimensions(): void;
        handler$han000$sable$moveRelative(arg0: number, arg1: $Vec3_, arg2: $CallbackInfo): void;
        static getDefaultPassengerAttachmentPoint(arg0: $Entity, arg1: $Entity, arg2: $EntityAttachments): $Vec3;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState, arg5: number): number;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        handler$ink000$axiom$onTurn(d: number, e: number, ci: $CallbackInfo): void;
        sable$setLastTrackingSubLevelID(arg0: $UUID_): void;
        handler$ego000$superbwarfare$turn(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        hasExactlyOnePlayerPassenger(): boolean;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): $Vec3;
        weCompanion$setLastJetpackResult(arg0: boolean): void;
        weCompanion$getLastJetpackResult(): boolean;
        sable$getLastTrackingSubLevelID(): $UUID;
        fudgePositionAfterSizeChange(arg0: $EntityDimensions_): boolean;
        handler$fjc000$lambdynlights_runtime$onRemove(ci: $CallbackInfo): void;
        wrapOperation$hbe000$sable$updateEntityAfterFallOn(arg0: $Block_, arg1: $BlockGetter, arg2: $Entity, arg3: $Operation_<any>): void;
        wrapOperation$hee000$sable$occludeFluidOnEyes(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidState;
        handler$zdc000$openpartiesandclaims$onHandlePortal(arg0: $CallbackInfo): void;
        handler$imd000$axiom$isIgnoringBlockTriggers(cir: $CallbackInfoReturnable<any>): void;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        getDynamicLightLevel(): $Level;
        sable$setPosSuperRaw(arg0: $Vec3_): void;
        sbw$setCurrentHitPart(arg0: $OBB$Part_): void;
        getDynamicLightPrevZ(): number;
        getLastDynamicLuminance(): number;
        getDynamicLightPrevY(): number;
        sable$getTrackingSubLevel(): $SubLevel;
        replaymod$getTrackedPitch(): number;
        sbw$getCurrentHitPart(): $OBB$Part;
        getDynamicLightPrevX(): number;
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
        setLastDynamicLuminance(luminance: number): void;
        replaymod$getTrackedYaw(): number;
        replaymod$setTrackedYaw(value: number): void;
        replaymod$setTrackedPitch(value: number): void;
        isInWaterRainOrBubble(): boolean;
        getBlockSpeedFactor(): number;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getBlockStateOnLegacy(): $BlockState;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        getFluidJumpThreshold(): number;
        calculateViewVector(arg0: number, arg1: number): $Vec3;
        isCustomNameVisible(): boolean;
        checkSlowFallDistance(): void;
        tryCheckInsideBlocks(): void;
        getPassengerRidingPosition(arg0: $Entity): $Vec3;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        getControllingPassenger(): $LivingEntity;
        getBoundingBoxForCulling(): $AABB;
        getPreciseBodyRotation(arg0: number): number;
        getMaxHeightFluidType(): $FluidType;
        getRelativePortalPosition(arg0: $Direction$Axis_, arg1: $BlockUtil$FoundRectangle): $Vec3;
        sable$getInBlockStatePos(): $BlockPos;
        sable$vanillaCollide(arg0: $Vec3_): $Vec3;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        sable$getPlotPosition(): $Vec3;
        sable$setPlotPosition(arg0: $Vec3_): void;
        getPersistentData(): $CompoundTag;
        createCommandSourceStack(): $CommandSourceStack;
        getCommandSenderWorld(): $Level;
        getMovementEmission(): $Entity$MovementEmission;
        processFlappingMovement(): void;
        isHorizontalCollisionMinor(arg0: $Vec3_): boolean;
        setOnGroundWithMovement(arg0: boolean, arg1: $Vec3_): void;
        getDimensionChangingDelay(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        processPortalCooldown(): void;
        handler$bln000$veil$remove(arg0: $CallbackInfo): void;
        canSpawnSprintParticle(): boolean;
        spawnSprintParticle(): void;
        setRemainingFireTicks(arg0: number): void;
        setSharedFlagOnFire(arg0: boolean): void;
        getRemainingFireTicks(): number;
        checkSupportingBlock(arg0: boolean, arg1: $Vec3_): void;
        limitPistonMovement(arg0: $Vec3_): $Vec3;
        maybeBackOffFromEdge(arg0: $Vec3_, arg1: $MoverType_): $Vec3;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        playMuffledStepSound(arg0: $BlockState_, arg1: $BlockPos_): void;
        getHandHoldingItemAngle(arg0: $Item_): $Vec3;
        onInsideBubbleColumn(arg0: boolean): void;
        canChangeDimensions(arg0: $Level_, arg1: $Level_): boolean;
        skipAttackInteraction(arg0: $Entity): boolean;
        isPassengerOfSameVehicle(arg0: $Entity): boolean;
        getNearestViewDirection(): $Direction;
        dismountsUnderwater(): boolean;
        setCustomNameVisible(arg0: boolean): void;
        getLightProbePosition(arg0: number): $Vec3;
        /**
         * @deprecated
         */
        couldAcceptPassenger(): boolean;
        adjustSpawnLocation(arg0: $ServerLevel, arg1: $BlockPos_): $BlockPos;
        canBeHitByProjectile(): boolean;
        doWaterSplashEffect(): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        playCombinationStepSounds(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_): void;
        getVehicleAttachmentPoint(arg0: $Entity): $Vec3;
        isSteppingCarefully(): boolean;
        isSuppressingBounce(): boolean;
        repositionEntityAfterLoad(): boolean;
        getPistonPushReaction(): $PushReaction;
        getPassengersAndSelf(): $Stream<$Entity>;
        getIndirectPassengers(): $Iterable<$Entity>;
        isIgnoringBlockTriggers(): boolean;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        getRopeHoldPosition(arg0: number): $Vec3;
        hasControllingPassenger(): boolean;
        getControlledVehicle(): $Entity;
        hasIndirectPassenger(arg0: $Entity): boolean;
        touchingUnloadedChunk(): boolean;
        getSelfAndPassengers(): $Stream<$Entity>;
        countPlayerPassengers(): number;
        displayFireAnimation(): boolean;
        isGlowing(): boolean;
        isUnderWater(): boolean;
        getEyePosition(): $Vec3;
        getEyePosition(arg0: number): $Vec3;
        getViewVector(arg0: number): $Vec3;
        getLookAngle(): $Vec3;
        getBlockY(): number;
        interact(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        interactAt(arg0: $Player, arg1: $Vec3_, arg2: $InteractionHand_): $InteractionResult;
        getBlockZ(): number;
        getBlockX(): number;
        getUuid(): $UUID;
        getVehicle(): $Entity;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Vec3_): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        wrapMethod$ckl000$createbigcannons$turn(arg0: number, arg1: number, arg2: $Operation_<any>): void;
        handler$gpg000$sable$checkInsideBlocks(arg0: $CallbackInfo): void;
        updateInWaterStateAndDoFluidPushing(): boolean;
        wrapOperation$hbe000$sable$moveInject(arg0: $Entity, arg1: boolean, arg2: $Vec3_, arg3: $Operation_<any>): void;
        wrapOperation$hee000$sable$inWaterCheck(arg0: $Entity, arg1: boolean, arg2: $Operation_<any>): void;
        handler$hej000$sable$calculateViewVector(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$jbk000$createdieselgenerators$save(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        redirect$han000$sable$fixPassengerSaving(arg0: $CompoundTag_, arg1: string, arg2: $Tag_): $Tag;
        redirect$hbe000$sable$collideRedirect(arg0: $Entity, arg1: $Vec3_): $Vec3;
        handler$hmf000$sable$subLevelFluidOnEyes(arg0: $CallbackInfo): void;
        handler$jbk002$createdieselgenerators$load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        blockPosition(): $BlockPos;
        isSpectator(): boolean;
        registryAccess(): $RegistryAccess;
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        isMultipartEntity(): boolean;
        canRiderInteract(): boolean;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getClassification(arg0: boolean): $MobCategory;
        isEyeInFluidType(arg0: $FluidType_): boolean;
        shouldRiderSit(): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        isPushedByFluid(arg0: $FluidType_): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        isInFluidType(arg0: $FluidType_): boolean;
        isInFluidType(arg0: $FluidState): boolean;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        getParts(): $PartEntity<never>[];
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        getFluidMotionScale(arg0: $FluidType_): number;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        getPickedResult(arg0: $HitResult): $ItemStack;
        lambdynlights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        lambdynlights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        getLevel(): $Level;
        getType(): string;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        getMotionX(): number;
        getMotionY(): number;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getMotionZ(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        setMotionY(y: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        getServer(): $MinecraftServer;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        setMotionZ(z: number): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        getScriptType(): $ScriptType;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        setMotionX(x: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        setY(y: number): void;
        setX(x: number): void;
        setZ(z: number): void;
        getNbt(): $CompoundTag;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        spawn(): void;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setDynamicLightEnabled(enabled: boolean): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        isDynamicLightEnabled(): boolean;
        getFirstTick(): boolean;
        callGetTypeName(): $Component;
        transition$getRawPosition(): $Vec3;
        transition$setRawPosition(arg0: $Vec3_): void;
        catnip$callSetLevel(arg0: $Level_): void;
        setYRot(arg0: number): void;
        getYRot(): number;
        setXRot(arg0: number): void;
        getXRot(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get typeName(): $Component;
        get alive(): boolean;
        get entityType(): $EntityType<never>;
        get horizontalFacing(): $Direction;
        get addedToLevel(): boolean;
        get pickResult(): $ItemStack;
        get encodeId(): string;
        get forgePersistentData(): $CompoundTag;
        get onPosLegacy(): $BlockPos;
        get positionCodec(): $VecDeltaCodec;
        get teamColor(): number;
        get onPortalCooldown(): boolean;
        get fireImmuneTicks(): number;
        get blockStateOn(): $BlockState;
        get swimSound(): $SoundEvent;
        get inWaterOrBubble(): boolean;
        get inWaterOrRain(): boolean;
        get swimSplashSound(): $SoundEvent;
        get crouching(): boolean;
        get attackable(): boolean;
        get descending(): boolean;
        get attachments(): $EntityAttachments;
        get firstPassenger(): $Entity;
        get pickRadius(): number;
        get visuallyCrawling(): boolean;
        get scoreboardName(): string;
        get rotationVector(): $Vec2;
        get knownMovement(): $Vec3;
        get motionDirection(): $Direction;
        get permissionLevel(): number;
        get rootVehicle(): $Entity;
        get alwaysTicking(): boolean;
        get forcedVisible(): boolean;
        get dynamicLightId(): number;
        get dynamicLightY(): number;
        get dynamicLightX(): number;
        get dynamicLightZ(): number;
        get team(): $PlayerTeam;
        get tags(): $Set<string>;
        get flapping(): boolean;
        get onRails(): boolean;
        get forward(): $Vec3;
        get freezing(): boolean;
        get soundSource(): $SoundSource;
        get percentFrozen(): number;
        get stringUuid(): string;
        get maxAirSupply(): number;
        get weaponItem(): $ItemStack;
        get maxFallDistance(): number;
        get inBlockState(): $BlockState;
        get defaultGravity(): number;
        get blockJumpFactor(): number;
        get bbHeight(): number;
        get passenger(): boolean;
        get effectiveAi(): boolean;
        get fullyFrozen(): boolean;
        get visuallySwimming(): boolean;
        get inWater(): boolean;
        get discrete(): boolean;
        get inWall(): boolean;
        get inLiquid(): boolean;
        get randomY(): number;
        get gravity(): number;
        get inLava(): boolean;
        get bbWidth(): number;
        get eyeY(): number;
        get pickable(): boolean;
        get pushable(): boolean;
        get onFire(): boolean;
        set UUID(value: $UUID_);
        get controlledByLocalInstance(): boolean;
        get swimHighSpeedSplashSound(): $SoundEvent;
        get lightLevelDependentMagicValue(): number;
        get dynamicLightLevel(): $Level;
        get dynamicLightPrevZ(): number;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevX(): number;
        get inWaterRainOrBubble(): boolean;
        get blockSpeedFactor(): number;
        get blockStateOnLegacy(): $BlockState;
        get fluidJumpThreshold(): number;
        get ticksRequiredToFreeze(): number;
        get controllingPassenger(): $LivingEntity;
        get boundingBoxForCulling(): $AABB;
        get maxHeightFluidType(): $FluidType;
        get persistentData(): $CompoundTag;
        get commandSenderWorld(): $Level;
        get movementEmission(): $Entity$MovementEmission;
        get dimensionChangingDelay(): number;
        set sharedFlagOnFire(value: boolean);
        get nearestViewDirection(): $Direction;
        get steppingCarefully(): boolean;
        get suppressingBounce(): boolean;
        get pistonPushReaction(): $PushReaction;
        get passengersAndSelf(): $Stream<$Entity>;
        get indirectPassengers(): $Iterable<$Entity>;
        get ignoringBlockTriggers(): boolean;
        get controlledVehicle(): $Entity;
        get selfAndPassengers(): $Stream<$Entity>;
        get underWater(): boolean;
        get lookAngle(): $Vec3;
        get blockY(): number;
        get blockZ(): number;
        get blockX(): number;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get spectator(): boolean;
        get feedbackDisplayName(): $Component;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
        get type(): string;
        get living(): boolean;
        get teamName(): string;
        get facing(): $Direction;
        get username(): string;
        get animal(): boolean;
        get teamId(): string;
        get player(): boolean;
        get clientPlayer(): boolean;
        get serverPlayer(): boolean;
        get scriptType(): $ScriptType;
        get profile(): $GameProfile;
        get monster(): boolean;
        get frame(): boolean;
        get block(): $LevelBlock;
        get self(): boolean;
        get peacefulCreature(): boolean;
        get ambientCreature(): boolean;
        get waterCreature(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    export class $Display$ColorInterpolator extends $Record implements $Display$IntInterpolator {
    }
    export class $SpawnPlacements$Data extends $Record {
    }
    export class $Display$TextDisplay$LineSplitter {
    }
    export interface $Display$TextDisplay$LineSplitter {
        split(arg0: $Component_, arg1: number): $Display$TextDisplay$CachedInfo;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$LineSplitter}.
     */
    export type $Display$TextDisplay$LineSplitter_ = ((arg0: $Component, arg1: number) => $Display$TextDisplay$CachedInfo_);
    export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $EntityTypeExtension<any>, $FabricEntityTypeImpl, $InjectedEntityTypeExtension, $DynamicLightHandlerHolder<any>, $EntityTypeKJS, $IRenderableEntity {
        static getKey(arg0: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        create(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        create(arg0: $Level_): T;
        static create(arg0: $CompoundTag_, arg1: $Level_): ($Entity) | undefined;
        is(arg0: $TagKey_<$EntityType<never>>): boolean;
        is(arg0: $HolderSet_<$EntityType<never>>): boolean;
        getDimensions(): $EntityDimensions;
        getWidth(): number;
        getCategory(): $MobCategory;
        static getYOffset(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $AABB_): number;
        canSummon(): boolean;
        lambdynlights$getName(): $Component;
        embPlus$resourceLocation(): $ResourceLocation;
        lambdynlights$getSetting(): $LightSourceSettingEntry;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        lambdynlights$getId(): $ResourceLocation;
        handler$dnb000$fabric_object_builder_api_v1$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        static by(arg0: $CompoundTag_): ($EntityType<never>) | undefined;
        canSerialize(): boolean;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        static byString(arg0: string): ($EntityType<never>) | undefined;
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
        static appendCustomEntityStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        requiredFeatures(): $FeatureFlagSet;
        tryCast(arg0: $Entity): T;
        getHeight(): number;
        getDescription(): $Component;
        fireImmune(): boolean;
        chloride$whitelisted(): boolean;
        static createDefaultStackConfig<T extends $Entity>(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player): $Consumer<T>;
        static appendDefaultStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        static appendCustomNameConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ItemStack_): $Consumer<T>;
        clientTrackingRange(): number;
        static updateCustomEntityTag(arg0: $Level_, arg1: $Player, arg2: $Entity, arg3: $CustomData): void;
        static loadEntityRecursive(arg0: $CompoundTag_, arg1: $Level_, arg2: $Function_<$Entity, $Entity>): $Entity;
        static loadEntitiesRecursive(arg0: $List_<$Tag_>, arg1: $Level_): $Stream<$Entity>;
        canSpawnFarFromPlayer(): boolean;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        kjs$asHolder(): $Holder<any>;
        spawn(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $MobSpawnType_): T;
        spawn(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_, arg4: $MobSpawnType_, arg5: boolean, arg6: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        updateInterval(): number;
        getSpawnAABB(arg0: number, arg1: number, arg2: number): $AABB;
        isBlockDangerous(arg0: $BlockState_): boolean;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        kjs$getKey(): $ResourceKey<any>;
        getBaseClass(): $Class<$Entity>;
        trackDeltas(): boolean;
        kjs$getId(): string;
        getDescriptionId(): string;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        arch$registryName(): $ResourceLocation;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<T>>;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static MOOSHROOM: $EntityType<$MushroomCow>;
        static MAGMA_CUBE: $EntityType<$MagmaCube>;
        static SILVERFISH: $EntityType<$Silverfish>;
        static MULE: $EntityType<$Mule>;
        static HOGLIN: $EntityType<$Hoglin>;
        static LEASH_KNOT: $EntityType<$LeashFenceKnotEntity>;
        static HUSK: $EntityType<$Husk>;
        static VINDICATOR: $EntityType<$Vindicator>;
        static WARDEN: $EntityType<$Warden>;
        static OMINOUS_ITEM_SPAWNER: $EntityType<$OminousItemSpawner>;
        static HOPPER_MINECART: $EntityType<$MinecartHopper>;
        static PILLAGER: $EntityType<$Pillager>;
        static SHULKER_BULLET: $EntityType<$ShulkerBullet>;
        static VILLAGER: $EntityType<$Villager>;
        static AREA_EFFECT_CLOUD: $EntityType<$AreaEffectCloud>;
        static PAINTING: $EntityType<$Painting>;
        static TURTLE: $EntityType<$Turtle>;
        static TRADER_LLAMA: $EntityType<$TraderLlama>;
        static SMALL_FIREBALL: $EntityType<$SmallFireball>;
        static TNT: $EntityType<$PrimedTnt>;
        static CAVE_SPIDER: $EntityType<$CaveSpider>;
        static SLIME: $EntityType<$Slime>;
        static DROWNED: $EntityType<$Drowned>;
        static FIREBALL: $EntityType<$LargeFireball>;
        static EVOKER: $EntityType<$Evoker>;
        static MARKER: $EntityType<$Marker>;
        static ENDERMITE: $EntityType<$Endermite>;
        static EXPERIENCE_BOTTLE: $EntityType<$ThrownExperienceBottle>;
        static AXOLOTL: $EntityType<$Axolotl>;
        static COMMAND_BLOCK_MINECART: $EntityType<$MinecartCommandBlock>;
        static PLAYER: $EntityType<$Player>;
        static ITEM: $EntityType<$ItemEntity>;
        static TEXT_DISPLAY: $EntityType<$Display$TextDisplay>;
        static SALMON: $EntityType<$Salmon>;
        static ZOMBIE: $EntityType<$Zombie>;
        static GOAT: $EntityType<$Goat>;
        static STRIDER: $EntityType<$Strider>;
        static PANDA: $EntityType<$Panda>;
        static OCELOT: $EntityType<$Ocelot>;
        static ENDERMAN: $EntityType<$EnderMan>;
        static CHEST_MINECART: $EntityType<$MinecartChest>;
        static ZOMBIE_VILLAGER: $EntityType<$ZombieVillager>;
        static LLAMA: $EntityType<$Llama>;
        static ENDER_DRAGON: $EntityType<$EnderDragon>;
        static WITCH: $EntityType<$Witch>;
        static EXPERIENCE_ORB: $EntityType<$ExperienceOrb>;
        static ARMADILLO: $EntityType<$Armadillo>;
        static ITEM_FRAME: $EntityType<$ItemFrame>;
        static WITHER: $EntityType<$WitherBoss>;
        static ARROW: $EntityType<$Arrow>;
        static CREEPER: $EntityType<$Creeper>;
        static BOGGED: $EntityType<$Bogged>;
        static ILLUSIONER: $EntityType<$Illusioner>;
        static BREEZE: $EntityType<$Breeze>;
        static CAMEL: $EntityType<$Camel>;
        static COD: $EntityType<$Cod>;
        static ZOMBIE_HORSE: $EntityType<$ZombieHorse>;
        static FURNACE_MINECART: $EntityType<$MinecartFurnace>;
        static RAVAGER: $EntityType<$Ravager>;
        static BOAT: $EntityType<$Boat>;
        static SHULKER: $EntityType<$Shulker>;
        static SNIFFER: $EntityType<$Sniffer>;
        static BEE: $EntityType<$Bee>;
        static ITEM_DISPLAY: $EntityType<$Display$ItemDisplay>;
        static PHANTOM: $EntityType<$Phantom>;
        static BLAZE: $EntityType<$Blaze>;
        static SKELETON_HORSE: $EntityType<$SkeletonHorse>;
        static COW: $EntityType<$Cow>;
        static WANDERING_TRADER: $EntityType<$WanderingTrader>;
        static END_CRYSTAL: $EntityType<$EndCrystal>;
        static PIG: $EntityType<$Pig>;
        static ZOGLIN: $EntityType<$Zoglin>;
        static BREEZE_WIND_CHARGE: $EntityType<$BreezeWindCharge>;
        static WOLF: $EntityType<$Wolf>;
        static IRON_GOLEM: $EntityType<$IronGolem>;
        static FROG: $EntityType<$Frog>;
        static SHEEP: $EntityType<$Sheep>;
        static VEX: $EntityType<$Vex>;
        static ENDER_PEARL: $EntityType<$ThrownEnderpearl>;
        static BLOCK_DISPLAY: $EntityType<$Display$BlockDisplay>;
        static TRIDENT: $EntityType<$ThrownTrident>;
        static PIGLIN_BRUTE: $EntityType<$PiglinBrute>;
        static POLAR_BEAR: $EntityType<$PolarBear>;
        static MINECART: $EntityType<$Minecart>;
        static LIGHTNING_BOLT: $EntityType<$LightningBolt>;
        static POTION: $EntityType<$ThrownPotion>;
        static FISHING_BOBBER: $EntityType<$FishingHook>;
        static CHEST_BOAT: $EntityType<$ChestBoat>;
        static SQUID: $EntityType<$Squid>;
        static DRAGON_FIREBALL: $EntityType<$DragonFireball>;
        static ELDER_GUARDIAN: $EntityType<$ElderGuardian>;
        static HORSE: $EntityType<$Horse>;
        static TNT_MINECART: $EntityType<$MinecartTNT>;
        static ARMOR_STAND: $EntityType<$ArmorStand>;
        static PARROT: $EntityType<$Parrot>;
        static EVOKER_FANGS: $EntityType<$EvokerFangs>;
        static FOX: $EntityType<$Fox>;
        static GIANT: $EntityType<$Giant>;
        static STRAY: $EntityType<$Stray>;
        static SPECTRAL_ARROW: $EntityType<$SpectralArrow>;
        static CAT: $EntityType<$Cat>;
        static RABBIT: $EntityType<$Rabbit>;
        static DONKEY: $EntityType<$Donkey>;
        static EYE_OF_ENDER: $EntityType<$EyeOfEnder>;
        static SPAWNER_MINECART: $EntityType<$MinecartSpawner>;
        static GLOW_ITEM_FRAME: $EntityType<$GlowItemFrame>;
        static INTERACTION: $EntityType<$Interaction>;
        static TROPICAL_FISH: $EntityType<$TropicalFish>;
        static ALLAY: $EntityType<$Allay>;
        static SPIDER: $EntityType<$Spider>;
        static SKELETON: $EntityType<$Skeleton>;
        static WITHER_SKELETON: $EntityType<$WitherSkeleton>;
        static CHICKEN: $EntityType<$Chicken>;
        static ZOMBIFIED_PIGLIN: $EntityType<$ZombifiedPiglin>;
        static SNOWBALL: $EntityType<$Snowball>;
        static GLOW_SQUID: $EntityType<$GlowSquid>;
        static SNOW_GOLEM: $EntityType<$SnowGolem>;
        static WITHER_SKULL: $EntityType<$WitherSkull>;
        static PUFFERFISH: $EntityType<$Pufferfish>;
        static GUARDIAN: $EntityType<$Guardian>;
        static EGG: $EntityType<$ThrownEgg>;
        static LLAMA_SPIT: $EntityType<$LlamaSpit>;
        static WIND_CHARGE: $EntityType<$WindCharge>;
        static FALLING_BLOCK: $EntityType<$FallingBlockEntity>;
        static PIGLIN: $EntityType<$Piglin>;
        static GHAST: $EntityType<$Ghast>;
        static BAT: $EntityType<$Bat>;
        static DOLPHIN: $EntityType<$Dolphin>;
        static TADPOLE: $EntityType<$Tadpole>;
        static FIREWORK_ROCKET: $EntityType<$FireworkRocketEntity>;
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet);
        get dimensions(): $EntityDimensions;
        get width(): number;
        get category(): $MobCategory;
        get height(): number;
        get description(): $Component;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get baseClass(): $Class<$Entity>;
        get descriptionId(): string;
        get mod(): string;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EntityType}.
     */
    export type $EntityType_<T> = RegistryTypes.EntityType;
    export class $LerpingModel {
    }
    export interface $LerpingModel {
        getModelRotationValues(): $Map<string, $Vector3f>;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    /**
     * Values that may be interpreted as {@link $LerpingModel}.
     */
    export type $LerpingModel_ = (() => $Map_<string, $Vector3f>);
    export class $Display$TransformationInterpolator extends $Record implements $Display$GenericInterpolator<$Transformation> {
    }
    export class $SpawnPlacements {
        /**
         * @deprecated
         */
        static register<T extends $Mob>(arg0: $EntityType_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>): void;
        static checkSpawnRules<T extends $Entity>(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        static fireSpawnPlacementEvent(): void;
        static isSpawnPositionOk(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        static getPlacementType(arg0: $EntityType_<never>): $SpawnPlacementType;
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        static getHeightmapType(arg0: $EntityType_<never>): $Heightmap$Types;
        constructor();
    }
    export class $Display$FloatInterpolator {
        static constant(arg0: number): $Display$FloatInterpolator;
    }
    export interface $Display$FloatInterpolator {
        get(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$FloatInterpolator}.
     */
    export type $Display$FloatInterpolator_ = ((arg0: number) => number);
    export class $Display$IntInterpolator {
        static constant(arg0: number): $Display$IntInterpolator;
    }
    export interface $Display$IntInterpolator {
        get(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$IntInterpolator}.
     */
    export type $Display$IntInterpolator_ = ((arg0: number) => number);
    export class $Leashable {
        static tickLeash<E extends $Entity>(arg0: E): void;
        static LEASH_TAG: string;
        static LEASH_ELASTIC_DIST: number;
        static LEASH_TOO_FAR_DIST: number;
    }
    export interface $Leashable {
        isLeashed(): boolean;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        dropLeash(arg0: boolean, arg1: boolean): void;
        setDelayedLeashHolderId(arg0: number): void;
        leashTooFarBehaviour(): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        getLeashData(): $Leashable$LeashData;
        mayBeLeashed(): boolean;
        setLeashData(arg0: $Leashable$LeashData): void;
        canBeLeashed(): boolean;
        canHaveALeashAttachedToIt(): boolean;
        get leashed(): boolean;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
    }
    export class $EntityAttachment$Fallback {
        static ZERO: $List<$Vec3>;
        static AT_CENTER: $EntityAttachment$Fallback;
        static AT_FEET: $EntityAttachment$Fallback;
        static AT_HEIGHT: $EntityAttachment$Fallback;
    }
    export interface $EntityAttachment$Fallback {
        create(arg0: number, arg1: number): $List<$Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment$Fallback}.
     */
    export type $EntityAttachment$Fallback_ = ((arg0: number, arg1: number) => $List_<$Vec3_>);
    export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
        static values(): $Display$BillboardConstraints[];
        static valueOf(arg0: string): $Display$BillboardConstraints;
        getId(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$BillboardConstraints;
        static CODEC: $Codec<$Display$BillboardConstraints>;
        static VERTICAL: $Display$BillboardConstraints;
        static FIXED: $Display$BillboardConstraints;
        static BY_ID: $IntFunction<$Display$BillboardConstraints>;
        static HORIZONTAL: $Display$BillboardConstraints;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$BillboardConstraints}.
     */
    export type $Display$BillboardConstraints_ = "fixed" | "vertical" | "horizontal" | "center";
    export class $Attackable {
    }
    export interface $Attackable {
        getLastAttacker(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Attackable}.
     */
    export type $Attackable_ = (() => $LivingEntity);
    export class $Display$GenericInterpolator<T> {
        static constant<T>(arg0: T): $Display$GenericInterpolator<T>;
    }
    export interface $Display$GenericInterpolator<T> {
        get(arg0: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Display$GenericInterpolator}.
     */
    export type $Display$GenericInterpolator_<T> = ((arg0: number) => T);
    export class $HasCustomInventoryScreen {
    }
    export interface $HasCustomInventoryScreen {
        openCustomInventoryScreen(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $HasCustomInventoryScreen}.
     */
    export type $HasCustomInventoryScreen_ = ((arg0: $Player) => void);
    export class $PowerableMob {
    }
    export interface $PowerableMob {
        isPowered(): boolean;
        get powered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PowerableMob}.
     */
    export type $PowerableMob_ = (() => boolean);
    export class $SpawnPlacementType {
    }
    export interface $SpawnPlacementType {
        isSpawnPositionOk(arg0: $LevelReader, arg1: $BlockPos_, arg2: $EntityType_<never>): boolean;
        adjustSpawnPosition(arg0: $LevelReader, arg1: $BlockPos_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        getTarget(): $LivingEntity;
        getWidth(): number;
        getLastAttacker(): $LivingEntity;
        getHeight(): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getResponse(): boolean;
        setResponse(arg0: boolean): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get target(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    export class $FlyingMob extends $Mob {
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
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
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
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
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
        constructor(arg0: $EntityType_<$FlyingMob>, arg1: $Level_);
    }
    export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
        static values(): $Display$TextDisplay$Align[];
        static valueOf(arg0: string): $Display$TextDisplay$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$TextDisplay$Align;
        static CODEC: $Codec<$Display$TextDisplay$Align>;
        static LEFT: $Display$TextDisplay$Align;
        static RIGHT: $Display$TextDisplay$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$Align}.
     */
    export type $Display$TextDisplay$Align_ = "center" | "left" | "right";
    export interface $EntityType extends RegistryMarked<RegistryTypes.EntityTypeTag, RegistryTypes.EntityType> {}
    export class $Display$BlockDisplay$BlockRenderState extends $Record {
        blockState(): $BlockState;
        constructor(arg0: $BlockState_);
    }
    export class $SpawnPlacementTypes {
        static IN_LAVA: $SpawnPlacementType;
        static IN_WATER: $SpawnPlacementType;
        static NO_RESTRICTIONS: $SpawnPlacementType;
        static ON_GROUND: $SpawnPlacementType;
    }
    export interface $SpawnPlacementTypes {
    }
    export class $TamableAnimal extends $Animal implements $OwnableEntity {
        isOwnedBy(arg0: $LivingEntity): boolean;
        isInSittingPose(): boolean;
        getOwnerUUID(): $UUID;
        setOwnerUUID(arg0: $UUID_): void;
        setTame(arg0: boolean, arg1: boolean): void;
        tame(arg0: $Player): void;
        wantsToAttack(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        canFlyToOwner(): boolean;
        setInSittingPose(arg0: boolean): void;
        setOrderedToSit(arg0: boolean): void;
        isOrderedToSit(): boolean;
        spawnTamingParticles(arg0: boolean): void;
        unableToMoveToOwner(): boolean;
        shouldTryTeleportToOwner(): boolean;
        tryToTeleportToOwner(): void;
        applyTamingSideEffects(): void;
        isTame(): boolean;
        getOwner(): $LivingEntity;
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
        static DATA_FLAGS_ID: $EntityDataAccessor<number>;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        useItem: $ItemStack;
        yHeadRot: number;
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
        static TELEPORT_WHEN_DISTANCE_IS_SQ: number;
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
        static DATA_OWNERUUID_ID: $EntityDataAccessor<($UUID) | undefined>;
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
        constructor(arg0: $EntityType_<$TamableAnimal>, arg1: $Level_);
        get owner(): $LivingEntity;
    }
    export class $PlayerRideable {
    }
    export interface $PlayerRideable {
    }
    export class $Crackiness {
        byFraction(arg0: number): $Crackiness$Level;
        byDamage(arg0: number, arg1: number): $Crackiness$Level;
        byDamage(arg0: $ItemStack_): $Crackiness$Level;
        static GOLEM: $Crackiness;
        static WOLF_ARMOR: $Crackiness;
    }
    export class $Interaction$PlayerAction extends $Record {
    }
    export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $MobCategory[];
        static valueOf(arg0: string): $MobCategory;
        static getExtensionInfo(): $ExtensionInfo;
        isPersistent(): boolean;
        getNoDespawnDistance(): number;
        isFriendly(): boolean;
        getMaxInstancesPerChunk(): number;
        getDespawnDistance(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND_WATER_CREATURE: $MobCategory;
        static WATER_CREATURE: $MobCategory;
        static WATER_AMBIENT: $MobCategory;
        static AXOLOTLS: $MobCategory;
        static CODEC: $Codec<$MobCategory>;
        static AMBIENT: $MobCategory;
        static CREATURE: $MobCategory;
        static MISC: $MobCategory;
        static MONSTER: $MobCategory;
        static get extensionInfo(): $ExtensionInfo;
        get persistent(): boolean;
        get noDespawnDistance(): number;
        get friendly(): boolean;
        get maxInstancesPerChunk(): number;
        get despawnDistance(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        backgroundColor(): $Display$IntInterpolator;
        lineWidth(): number;
        textOpacity(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    export class $Display$BlockDisplay extends $Display {
        getBlockState(): $BlockState;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        setBlockState(arg0: $BlockState_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        static DATA_BLOCK_STATE_ID: $EntityDataAccessor<$BlockState>;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static LOGGER: $Logger;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        random: $RandomSource;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static TAG_BLOCK_STATE: string;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $ItemSteerable {
    }
    export interface $ItemSteerable {
        boost(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSteerable}.
     */
    export type $ItemSteerable_ = (() => boolean);
    export class $PlayerRideableJumping {
    }
    export interface $PlayerRideableJumping extends $PlayerRideable {
        onPlayerJump(arg0: number): void;
        getJumpCooldown(): number;
        handleStopJump(): void;
        handleStartJump(arg0: number): void;
        canJump(): boolean;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity implements $MarkerEntityExt {
        axiom$getData(): $CompoundTag;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $SpawnPlacements$SpawnPredicate<T extends $Entity> {
    }
    export interface $SpawnPlacements$SpawnPredicate<T extends $Entity> {
        test(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$SpawnPredicate}.
     */
    export type $SpawnPlacements$SpawnPredicate_<T> = ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean);
    export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
        static values(): $EquipmentSlot$Type[];
        static valueOf(arg0: string): $EquipmentSlot$Type;
        static ANIMAL_ARMOR: $EquipmentSlot$Type;
        static HUMANOID_ARMOR: $EquipmentSlot$Type;
        static HAND: $EquipmentSlot$Type;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot$Type}.
     */
    export type $EquipmentSlot$Type_ = "hand" | "humanoid_armor" | "animal_armor";
    export class $Display$TextDisplay extends $Display {
        getText(): $Component;
        getFlags(): number;
        setText(arg0: $Component_): void;
        setFlags(arg0: number): void;
        getBackgroundColor(): number;
        static getAlign(arg0: number): $Display$TextDisplay$Align;
        getLineWidth(): number;
        setLineWidth(arg0: number): void;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        getTextOpacity(): number;
        setTextOpacity(arg0: number): void;
        setBackgroundColor(arg0: number): void;
        cacheDisplay(arg0: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static FLAG_SHADOW: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static NO_BRIGHTNESS_OVERRIDE: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        static TAG_WIDTH: string;
        passengers: $ImmutableList<$Entity>;
        static TAG_TRANSFORMATION: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        static ID_TAG: string;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static DATA_STYLE_FLAGS_ID: $EntityDataAccessor<number>;
        static TAG_TEXT: string;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        noCulling: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        sbw$currentHitPart: $OBB$Part;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        portalProcess: $PortalProcessor;
        static DATA_TEXT_ID: $EntityDataAccessor<$Component>;
        verticalCollision: boolean;
        static DATA_LINE_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        static DEFAULT_BB_HEIGHT: number;
        static FLAG_ALIGN_LEFT: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        static DATA_BACKGROUND_COLOR_ID: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        firstTick: boolean;
        static DATA_TEXT_OPACITY_ID: $EntityDataAccessor<number>;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static FLAG_ALIGN_RIGHT: number;
        static BOARDING_COOLDOWN: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_HEIGHT: string;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        static INITIAL_BACKGROUND: number;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        invulnerableTime: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        random: $RandomSource;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static FLAG_SEE_THROUGH: number;
        levelCallback: $EntityInLevelCallback;
        static FLAG_USE_DEFAULT_BACKGROUND: number;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $Display$LinearFloatInterpolator extends $Record implements $Display$FloatInterpolator {
    }
    export class $EquipmentSlot extends $Enum<$EquipmentSlot> implements $StringRepresentable {
        getName(): string;
        static values(): $EquipmentSlot[];
        static valueOf(arg0: string): $EquipmentSlot;
        limit(arg0: $ItemStack_): $ItemStack;
        getType(): $EquipmentSlot$Type;
        getIndex(): number;
        getIndex(arg0: number): number;
        getFilterFlag(): number;
        static byName(arg0: string): $EquipmentSlot;
        isArmor(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentSlot;
        static HEAD: $EquipmentSlot;
        static CODEC: $StringRepresentable$EnumCodec<$EquipmentSlot>;
        static OFFHAND: $EquipmentSlot;
        static MAINHAND: $EquipmentSlot;
        static LEGS: $EquipmentSlot;
        static NO_COUNT_LIMIT: number;
        static BODY: $EquipmentSlot;
        static FEET: $EquipmentSlot;
        get type(): $EquipmentSlot$Type;
        get filterFlag(): number;
        get armor(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot}.
     */
    export type $EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "body";
    export class $VariantHolder<T> {
    }
    export interface $VariantHolder<T> {
        getVariant(): T;
        setVariant(arg0: T): void;
    }
    export class $EquipmentUser {
    }
    export interface $EquipmentUser {
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
    }
    export class $WalkAnimationState implements $AccessorWalkAnimationState {
        update(arg0: number, arg1: number): void;
        position(arg0: number): number;
        position(): number;
        isMoving(): boolean;
        speed(arg0: number): number;
        speed(): number;
        setSpeed(arg0: number): void;
        setPosition(arg0: number): void;
        getSpeedOld(): number;
        setSpeedOld(arg0: number): void;
        constructor();
        get moving(): boolean;
    }
    export class $SlotAccess {
        static of(arg0: $Supplier_<$ItemStack>, arg1: $Consumer_<$ItemStack>): $SlotAccess;
        static forContainer(arg0: $Container, arg1: number): $SlotAccess;
        static forContainer(arg0: $Container, arg1: number, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(arg0: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getCause(): $ServerPlayer;
        setCause(arg0: $ServerPlayer): void;
        localvar$zdj000$openpartiesandclaims$onSetCause(arg0: $ServerPlayer): $ServerPlayer;
        handler$fia000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        getHitEntities(): $Stream<$Entity>;
        getBlocksSetOnFire(): number;
        setDamage(arg0: number): void;
        getDamage(): number;
        setVisualOnly(arg0: boolean): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        seed: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<$LightningBolt>, arg1: $Level_);
        get hitEntities(): $Stream<$Entity>;
        get blocksSetOnFire(): number;
        set visualOnly(value: boolean);
    }
    export class $LivingEntity$Fallsounds extends $Record {
        big(): $SoundEvent;
        small(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    export class $Display$ItemDisplay extends $Display {
        getItemStack(): $ItemStack;
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        setItemTransform(arg0: $ItemDisplayContext_): void;
        setItemStack(arg0: $ItemStack_): void;
        getItemTransform(): $ItemDisplayContext;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static LOGGER: $Logger;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        random: $RandomSource;
        static DATA_ITEM_DISPLAY_ID: $EntityDataAccessor<number>;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        static DATA_ITEM_STACK_ID: $EntityDataAccessor<$ItemStack>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $EntitySelector$MobCanWearArmorEntitySelector implements $Predicate<$Entity> {
        test(arg0: $Entity): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        constructor(arg0: $ItemStack_);
    }
    export class $Entity$MovementEmission extends $Enum<$Entity$MovementEmission> {
        static values(): $Entity$MovementEmission[];
        static valueOf(arg0: string): $Entity$MovementEmission;
        emitsSounds(): boolean;
        emitsEvents(): boolean;
        emitsAnything(): boolean;
        static ALL: $Entity$MovementEmission;
        static EVENTS: $Entity$MovementEmission;
        sounds: boolean;
        static SOUNDS: $Entity$MovementEmission;
        static NONE: $Entity$MovementEmission;
        events: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MovementEmission}.
     */
    export type $Entity$MovementEmission_ = "none" | "sounds" | "events" | "all";
    export class $AnimationState {
        start(arg0: number): void;
        stop(): void;
        isStarted(): boolean;
        updateTime(arg0: number, arg1: number): void;
        fastForward(arg0: number, arg1: number): void;
        getAccumulatedTime(): number;
        startIfStopped(arg0: number): void;
        animateWhen(arg0: boolean, arg1: number): void;
        ifStarted(arg0: $Consumer_<$AnimationState>): void;
        constructor();
        get started(): boolean;
        get accumulatedTime(): number;
    }
    /**
     * @deprecated
     */
    export class $Shearable {
    }
    export interface $Shearable extends $IShearable {
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
        /**
         * @deprecated
         */
        shear(arg0: $SoundSource_): void;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        setOwner(arg0: $LivingEntity): void;
        getDuration(): number;
        setDuration(arg0: number): void;
        getDurationOnUse(): number;
        getRadiusPerTick(): number;
        setRadiusPerTick(arg0: number): void;
        setDurationOnUse(arg0: number): void;
        setRadiusOnUse(arg0: number): void;
        setParticle(arg0: $ParticleOptions_): void;
        setWaitTime(arg0: number): void;
        setPotionContents(arg0: $PotionContents_): void;
        getRadiusOnUse(): number;
        getParticle(): $ParticleOptions;
        getWaitTime(): number;
        isWaiting(): boolean;
        setWaiting(arg0: boolean): void;
        getRadius(): number;
        addEffect(arg0: $MobEffectInstance): void;
        setRadius(arg0: number): void;
        getOwner(): $Entity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static DEFAULT_WIDTH: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static HEIGHT: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<$AreaEffectCloud>, arg1: $Level_);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        set potionContents(value: $PotionContents_);
    }
    export class $PathfinderMob extends $Mob {
        shouldStayCloseToLeashHolder(): boolean;
        getWalkTargetValue(arg0: $BlockPos_): number;
        getWalkTargetValue(arg0: $BlockPos_, arg1: $LevelReader): number;
        isPanicking(): boolean;
        isPathFinding(): boolean;
        followLeashSpeed(): number;
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
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
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
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
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
        constructor(arg0: $EntityType_<$PathfinderMob>, arg1: $Level_);
        get panicking(): boolean;
        get pathFinding(): boolean;
    }
    export class $Display$RenderState extends $Record {
        shadowStrength(): $Display$FloatInterpolator;
        transformation(): $Display$GenericInterpolator<$Transformation>;
        shadowRadius(): $Display$FloatInterpolator;
        billboardConstraints(): $Display$BillboardConstraints;
        glowColorOverride(): number;
        brightnessOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static pack(arg0: $Set_<$RelativeMovement_>): number;
        static unpack(arg0: number): $Set<$RelativeMovement>;
        static ROTATION: $Set<$RelativeMovement>;
        static ALL: $Set<$RelativeMovement>;
        static Y_ROT: $RelativeMovement;
        static X_ROT: $RelativeMovement;
        static X: $RelativeMovement;
        static Y: $RelativeMovement;
        static Z: $RelativeMovement;
    }
    /**
     * Values that may be interpreted as {@link $RelativeMovement}.
     */
    export type $RelativeMovement_ = "x" | "y" | "z" | "y_rot" | "x_rot";
    export class $Display$PosRotInterpolationTarget {
    }
    export class $OminousItemSpawner extends $Entity {
        static create(arg0: $Level_, arg1: $ItemStack_): $OminousItemSpawner;
        getItem(): $ItemStack;
        addParticles(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        static TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<$OminousItemSpawner>, arg1: $Level_);
        get item(): $ItemStack;
    }
    export class $EntityType$Builder<T extends $Entity> implements $FabricEntityTypeImpl$Builder, $FabricEntityType$Builder<any> {
        static of<T extends $Entity>(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_): $EntityType$Builder<T>;
        build(): $EntityType<any>;
        build(arg0: string): $EntityType<$Object>;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityType$Builder<$Object>;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityType$Builder<$Object>;
        sized(arg0: number, arg1: number): $EntityType$Builder<$Object>;
        noSummon(): $EntityType$Builder<$Object>;
        setUpdateInterval(arg0: number): $EntityType$Builder<$Object>;
        setTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        eyeHeight(arg0: number): $EntityType$Builder<$Object>;
        fabric_setMobEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Mob<any>): void;
        requiredFeatures(...arg0: $FeatureFlag[]): $EntityType$Builder<$Object>;
        noSave(): $EntityType$Builder<$Object>;
        fireImmune(): $EntityType$Builder<$Object>;
        spawnDimensionsScale(arg0: number): $EntityType$Builder<$Object>;
        clientTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: $Vec3_[]): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: number[]): $EntityType$Builder<$Object>;
        canSpawnFarFromPlayer(): $EntityType$Builder<$Object>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<any>;
        updateInterval(arg0: number): $EntityType$Builder<$Object>;
        immuneTo(...arg0: $Block_[]): $EntityType$Builder<$Object>;
        vehicleAttachment(arg0: $Vec3_): $EntityType$Builder<$Object>;
        static createNothing<T extends $Entity>(arg0: $MobCategory_): $EntityType$Builder<T>;
        nameTagOffset(arg0: number): $EntityType$Builder<$Object>;
        ridingOffset(arg0: number): $EntityType$Builder<$Object>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<$Object>;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<any>): void;
        set trackingRange(value: number);
        set shouldReceiveVelocityUpdates(value: boolean);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        width(): number;
        contents(): $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    export class $EquipmentTable extends $Record {
        slotDropChances(): $Map<$EquipmentSlot, number>;
        lootTable(): $ResourceKey<$LootTable>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    export class $PortalProcessor {
        isSamePortal(arg0: $Portal_): boolean;
        hasExpired(): boolean;
        isInsidePortalThisTick(): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        processPortalTeleportation(arg0: $ServerLevel, arg1: $Entity, arg2: boolean): boolean;
        updateEntryPosition(arg0: $BlockPos_): void;
        getPortalDestination(arg0: $ServerLevel, arg1: $Entity): $DimensionTransition;
        setAsInsidePortalThisTick(arg0: boolean): void;
        getEntryPosition(): $BlockPos;
        getPortalTime(): number;
        constructor(arg0: $Portal_, arg1: $BlockPos_);
        get insidePortalThisTick(): boolean;
        get portalLocalTransition(): $Portal$Transition;
        set asInsidePortalThisTick(value: boolean);
        get entryPosition(): $BlockPos;
        get portalTime(): number;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static isSpawner(arg0: $MobSpawnType_): boolean;
        static ignoresLightRequirements(arg0: $MobSpawnType_): boolean;
        static CONVERSION: $MobSpawnType;
        static STRUCTURE: $MobSpawnType;
        static BUCKET: $MobSpawnType;
        static DISPENSER: $MobSpawnType;
        static SPAWNER: $MobSpawnType;
        static EVENT: $MobSpawnType;
        static MOB_SUMMONED: $MobSpawnType;
        static NATURAL: $MobSpawnType;
        static SPAWN_EGG: $MobSpawnType;
        static PATROL: $MobSpawnType;
        static CHUNK_GENERATION: $MobSpawnType;
        static TRIAL_SPAWNER: $MobSpawnType;
        static BREEDING: $MobSpawnType;
        static REINFORCEMENT: $MobSpawnType;
        static COMMAND: $MobSpawnType;
        static TRIGGERED: $MobSpawnType;
        static JOCKEY: $MobSpawnType;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnType}.
     */
    export type $MobSpawnType_ = "natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol" | "trial_spawner";
    export class $ExperienceOrb extends $Entity {
        getValue(): number;
        static getExperienceValue(arg0: number): number;
        handler$zdd000$openpartiesandclaims$onPlayerTouch(arg0: $Player, arg1: $CallbackInfo): void;
        static award(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): void;
        getIcon(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        value: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $EntityType_<$ExperienceOrb>, arg1: $Level_);
        get icon(): number;
    }
    export class $Display$LinearIntInterpolator extends $Record implements $Display$IntInterpolator {
    }
    export class $EntityDimensions extends $Record {
        scale(arg0: number, arg1: number): $EntityDimensions;
        scale(arg0: number): $EntityDimensions;
        fixed(): boolean;
        static fixed(arg0: number, arg1: number): $EntityDimensions;
        width(): number;
        height(): number;
        attachments(): $EntityAttachments;
        withAttachments(arg0: $EntityAttachments$Builder): $EntityDimensions;
        eyeHeight(): number;
        static scalable(arg0: number, arg1: number): $EntityDimensions;
        withEyeHeight(arg0: number): $EntityDimensions;
        makeBoundingBox(arg0: $Vec3_): $AABB;
        makeBoundingBox(arg0: number, arg1: number, arg2: number): $AABB;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $EntityAttachments, arg4: boolean);
    }
    export class $EntityAttachment extends $Enum<$EntityAttachment> {
        static values(): $EntityAttachment[];
        static valueOf(arg0: string): $EntityAttachment;
        createFallbackPoints(arg0: number, arg1: number): $List<$Vec3>;
        static VEHICLE: $EntityAttachment;
        static NAME_TAG: $EntityAttachment;
        static PASSENGER: $EntityAttachment;
        static WARDEN_CHEST: $EntityAttachment;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment}.
     */
    export type $EntityAttachment_ = "passenger" | "vehicle" | "name_tag" | "warden_chest";
    export class $TraceableEntity {
    }
    export interface $TraceableEntity {
        getOwner(): $Entity;
        get owner(): $Entity;
    }
    /**
     * Values that may be interpreted as {@link $TraceableEntity}.
     */
    export type $TraceableEntity_ = (() => $Entity);
    export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum, $StringRepresentable {
        static values(): $HumanoidArm[];
        static valueOf(arg0: string): $HumanoidArm;
        getKey(): string;
        getId(): number;
        getOpposite(): $HumanoidArm;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get key(): string;
        get id(): number;
        get opposite(): $HumanoidArm;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidArm}.
     */
    export type $HumanoidArm_ = "left" | "right";
    export class $EntityType$EntityFactory<T extends $Entity> {
    }
    export interface $EntityType$EntityFactory<T extends $Entity> {
        create(arg0: $EntityType_<T>, arg1: $Level_): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityType$EntityFactory}.
     */
    export type $EntityType$EntityFactory_<T> = ((arg0: $EntityType<T>, arg1: $Level) => T);
    export class $MoverType extends $Enum<$MoverType> {
        static values(): $MoverType[];
        static valueOf(arg0: string): $MoverType;
        static PLAYER: $MoverType;
        static PISTON: $MoverType;
        static SHULKER_BOX: $MoverType;
        static SELF: $MoverType;
        static SHULKER: $MoverType;
    }
    /**
     * Values that may be interpreted as {@link $MoverType}.
     */
    export type $MoverType_ = "self" | "player" | "piston" | "shulker_box" | "shulker";
    export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
        static values(): $Entity$RemovalReason[];
        static valueOf(arg0: string): $Entity$RemovalReason;
        shouldDestroy(): boolean;
        shouldSave(): boolean;
        static UNLOADED_TO_CHUNK: $Entity$RemovalReason;
        static UNLOADED_WITH_PLAYER: $Entity$RemovalReason;
        static DISCARDED: $Entity$RemovalReason;
        static CHANGED_DIMENSION: $Entity$RemovalReason;
        static KILLED: $Entity$RemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $Entity$RemovalReason}.
     */
    export type $Entity$RemovalReason_ = "killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension";
    export class $Saddleable {
    }
    export interface $Saddleable {
        equipSaddle(arg0: $ItemStack_, arg1: $SoundSource_): void;
        isSaddleable(): boolean;
        isSaddled(): boolean;
        getSaddleSoundEvent(): $SoundEvent;
        get saddleable(): boolean;
        get saddled(): boolean;
        get saddleSoundEvent(): $SoundEvent;
    }
    export class $Targeting {
    }
    export interface $Targeting {
        getTarget(): $LivingEntity;
        get target(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Targeting}.
     */
    export type $Targeting_ = (() => $LivingEntity);
    export class $Pose extends $Enum<$Pose> {
        static values(): $Pose[];
        static valueOf(arg0: string): $Pose;
        id(): number;
        static SLEEPING: $Pose;
        static SNIFFING: $Pose;
        static EMERGING: $Pose;
        static INHALING: $Pose;
        static FALL_FLYING: $Pose;
        static LONG_JUMPING: $Pose;
        static BY_ID: $IntFunction<$Pose>;
        static DYING: $Pose;
        static CROAKING: $Pose;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pose>;
        static STANDING: $Pose;
        static SWIMMING: $Pose;
        static SITTING: $Pose;
        static SHOOTING: $Pose;
        static SLIDING: $Pose;
        static USING_TONGUE: $Pose;
        static CROUCHING: $Pose;
        static ROARING: $Pose;
        static DIGGING: $Pose;
        static SPIN_ATTACK: $Pose;
    }
    /**
     * Values that may be interpreted as {@link $Pose}.
     */
    export type $Pose_ = "standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "sliding" | "shooting" | "inhaling";
    export class $OwnableEntity {
    }
    export interface $OwnableEntity {
        getOwner(): $LivingEntity;
        level(): $EntityGetter;
        getOwnerUUID(): $UUID;
        get owner(): $LivingEntity;
        get ownerUUID(): $UUID;
    }
    export class $EquipmentSlotGroup extends $Enum<$EquipmentSlotGroup> implements $StringRepresentable {
        static values(): $EquipmentSlotGroup[];
        test(arg0: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentSlotGroup;
        static bySlot(arg0: $EquipmentSlot_): $EquipmentSlotGroup;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAD: $EquipmentSlotGroup;
        static CODEC: $Codec<$EquipmentSlotGroup>;
        static OFFHAND: $EquipmentSlotGroup;
        static ARMOR: $EquipmentSlotGroup;
        static MAINHAND: $EquipmentSlotGroup;
        static LEGS: $EquipmentSlotGroup;
        static BY_ID: $IntFunction<$EquipmentSlotGroup>;
        static ANY: $EquipmentSlotGroup;
        static HAND: $EquipmentSlotGroup;
        static FEET: $EquipmentSlotGroup;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentSlotGroup>;
        static CHEST: $EquipmentSlotGroup;
        static BODY: $EquipmentSlotGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotGroup}.
     */
    export type $EquipmentSlotGroup_ = "any" | "mainhand" | "offhand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body";
    export class $Display extends $Entity implements $DisplayAccessor$1, $DisplayAccessor {
        getWidth(): number;
        setTransformation(arg0: $Transformation): void;
        setViewRange(arg0: number): void;
        getViewRange(): number;
        getShadowRadius(): number;
        renderState(): $Display$RenderState;
        setShadowRadius(arg0: number): void;
        getShadowStrength(): number;
        setShadowStrength(arg0: number): void;
        setBrightnessOverride(arg0: $Brightness_): void;
        getBillboardConstraints(): $Display$BillboardConstraints;
        getBrightnessOverride(): $Brightness;
        setBillboardConstraints(arg0: $Display$BillboardConstraints_): void;
        getGlowColorOverride(): number;
        static createTransformation(arg0: $SynchedEntityData): $Transformation;
        updateRenderSubState(arg0: boolean, arg1: number): void;
        setGlowColorOverride(arg0: number): void;
        static getDataPosRotInterpolationId$axiom_$md$d64506$1(): $EntityDataAccessor<any>;
        getHeight(): number;
        static getDataTransformationInterpolationDurationId$axiom_$md$d64506$0(): $EntityDataAccessor<any>;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        calculateInterpolationProgress(arg0: number): number;
        setPosRotInterpolationDuration(arg0: number): void;
        getPackedBrightnessOverride(): number;
        getPosRotInterpolationDuration(): number;
        setTransformationInterpolationDuration(arg0: number): void;
        getTransformationInterpolationDuration(): number;
        setTransformationInterpolationDelay(arg0: number): void;
        getTransformationInterpolationDelay(): number;
        invokeSetHeight(arg0: number): void;
        invokeSetWidth(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        passengers: $ImmutableList<$Entity>;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static LOGGER: $Logger;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        sbw$currentHitPart: $OBB$Part;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        random: $RandomSource;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        set transformation(value: $Transformation);
        static get dataPosRotInterpolationId$axiom_$md$d64506$1(): $EntityDataAccessor<any>;
        static get dataTransformationInterpolationDurationId$axiom_$md$d64506$0(): $EntityDataAccessor<any>;
        get packedBrightnessOverride(): number;
    }
    export class $Crackiness$Level extends $Enum<$Crackiness$Level> {
        static values(): $Crackiness$Level[];
        static valueOf(arg0: string): $Crackiness$Level;
        static HIGH: $Crackiness$Level;
        static MEDIUM: $Crackiness$Level;
        static LOW: $Crackiness$Level;
        static NONE: $Crackiness$Level;
    }
    /**
     * Values that may be interpreted as {@link $Crackiness$Level}.
     */
    export type $Crackiness$Level_ = "none" | "low" | "medium" | "high";
    export class $Mob extends $LivingEntity implements $EquipmentUser, $Leashable, $Targeting, $SpecialHurtable, $MobAccessor {
        getTarget(): $LivingEntity;
        setTarget(arg0: $LivingEntity): void;
        handler$zel000$openpartiesandclaims$onAiStepPre(arg0: $CallbackInfo): void;
        handler$zel000$openpartiesandclaims$onAiStepPost(arg0: $CallbackInfo): void;
        handler$zep000$openpartiesandclaims$onAiStepItemPickup(arg0: $CallbackInfo, arg1: $Vec3i, arg2: $Iterator<any>, arg3: $ItemEntity): void;
        setItemSlotAndDropWhenKilled(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        shouldPassengersInheritMalus(): boolean;
        populateDefaultEquipmentSlots(arg0: $RandomSource, arg1: $DifficultyInstance): void;
        convertTo<T extends $Mob>(arg0: $EntityType_<T>, arg1: boolean): T;
        checkSpawnRules(arg0: $LevelAccessor, arg1: $MobSpawnType_): boolean;
        redirect$gll000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        handler$ehc000$superbwarfare$getTarget(arg0: $CallbackInfoReturnable<any>): void;
        populateDefaultEquipmentEnchantments(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        setNoAi(arg0: boolean): void;
        isNoAi(): boolean;
        pickUpItem(arg0: $ItemEntity): void;
        getSensing(): $Sensing;
        ate(): void;
        setXxa(arg0: number): void;
        setYya(arg0: number): void;
        setZza(arg0: number): void;
        restrictTo(arg0: $BlockPos_, arg1: number): void;
        modifyExpressionValue$gel000$create$mobRidingContraptionsMaintainTheirAttackBox(arg0: $Entity): $Entity;
        dropLeash(arg0: boolean, arg1: boolean): void;
        isPersistenceRequired(): boolean;
        static createMobAttributes(): $AttributeSupplier$Builder;
        getAmbientSoundInterval(): number;
        static getEquipmentForSlot(arg0: $EquipmentSlot_, arg1: number): $Item;
        getEquipmentDropChance(arg0: $EquipmentSlot_): number;
        getAttackBoundingBox(): $AABB;
        isMaxGroupSizeReached(arg0: number): boolean;
        canReplaceCurrentItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        enchantSpawnedWeapon(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        getMaxSpawnClusterSize(): number;
        onOffspringSpawnedFromEgg(arg0: $Player, arg1: $Mob): void;
        enchantSpawnedArmor(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $EquipmentSlot_, arg3: $DifficultyInstance): void;
        canFireProjectileWeapon(arg0: $ProjectileWeaponItem): boolean;
        isWithinRestriction(): boolean;
        isWithinRestriction(arg0: $BlockPos_): boolean;
        requiresCustomPersistence(): boolean;
        dropPreservedEquipment(): void;
        dropPreservedEquipment(arg0: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        getPathfindingMalus(arg0: $PathType_): number;
        leashTooFarBehaviour(): void;
        shouldDespawnInPeaceful(): boolean;
        setPathfindingMalus(arg0: $PathType_, arg1: number): void;
        isWithinMeleeAttackRange(arg0: $LivingEntity): boolean;
        equipItemIfPossible(arg0: $ItemStack_): $ItemStack;
        canReplaceEqualItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        clampHeadRotationToBody(): void;
        setPersistenceRequired(): void;
        checkSpawnObstruction(arg0: $LevelReader): boolean;
        getNavigation(): $PathNavigation;
        /**
         * @deprecated
         */
        finalizeSpawn(arg0: $ServerLevelAccessor, arg1: $DifficultyInstance, arg2: $MobSpawnType_, arg3: $SpawnGroupData): $SpawnGroupData;
        createNavigation(arg0: $Level_): $PathNavigation;
        getMoveControl(): $MoveControl;
        getAmbientSound(): $SoundEvent;
        onPathfindingDone(): void;
        isLeftHanded(): boolean;
        createBodyControl(): $BodyRotationControl;
        updateControlFlags(): void;
        setCanPickUpLoot(arg0: boolean): void;
        setLeftHanded(arg0: boolean): void;
        getBodyArmorItem(): $ItemStack;
        getMaxHeadXRot(): number;
        onPathfindingStart(): void;
        canPickUpLoot(): boolean;
        getLookControl(): $LookControl;
        getJumpControl(): $JumpControl;
        getTargetFromBrain(): $LivingEntity;
        registerGoals(): void;
        static checkMobSpawnRules(arg0: $EntityType_<$Mob>, arg1: $LevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        getRestrictRadius(): number;
        removeFreeWill(): void;
        setSpawnCancelled(arg0: boolean): void;
        getHeadRotSpeed(): number;
        getLeashData(): $Leashable$LeashData;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        setGuaranteedDrop(arg0: $EquipmentSlot_): void;
        playAttackSound(): void;
        removeAllGoals(arg0: $Predicate_<$Goal>): void;
        customServerAiStep(): void;
        getMaxHeadYRot(): number;
        hasRestriction(): boolean;
        removeWhenFarAway(arg0: number): boolean;
        stopInPlace(): void;
        sendDebugPackets(): void;
        clearRestriction(): void;
        isSunBurnTick(): boolean;
        getSpawnType(): $MobSpawnType;
        wantsToPickUp(arg0: $ItemStack_): boolean;
        isAggressive(): boolean;
        setLeashData(arg0: $Leashable$LeashData): void;
        canBeLeashed(): boolean;
        canHoldItem(arg0: $ItemStack_): boolean;
        getRestrictCenter(): $BlockPos;
        getPickupReach(): $Vec3i;
        setAggressive(arg0: boolean): void;
        setBaby(arg0: boolean): void;
        isWearingBodyArmor(): boolean;
        setBodyArmorItem(arg0: $ItemStack_): void;
        isBodyArmorItem(arg0: $ItemStack_): boolean;
        spawnAnim(): void;
        isSpawnCancelled(): boolean;
        playAmbientSound(): void;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        lookAt(arg0: $Entity, arg1: number, arg2: number): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        isLeashed(): boolean;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        setDelayedLeashHolderId(arg0: number): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        mayBeLeashed(): boolean;
        canHaveALeashAttachedToIt(): boolean;
        sophisticatedbackpacks$getAmbientSound(): $SoundEvent;
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
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
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
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
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
        constructor(arg0: $EntityType_<$Mob>, arg1: $Level_);
        get sensing(): $Sensing;
        get ambientSoundInterval(): number;
        get attackBoundingBox(): $AABB;
        get maxSpawnClusterSize(): number;
        get ambientSound(): $SoundEvent;
        get maxHeadXRot(): number;
        get targetFromBrain(): $LivingEntity;
        get restrictRadius(): number;
        get headRotSpeed(): number;
        set guaranteedDrop(value: $EquipmentSlot_);
        get maxHeadYRot(): number;
        get sunBurnTick(): boolean;
        get spawnType(): $MobSpawnType;
        get restrictCenter(): $BlockPos;
        get pickupReach(): $Vec3i;
        set baby(value: boolean);
        get wearingBodyArmor(): boolean;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get leashed(): boolean;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
    }
    export class $Leashable$LeashData {
        setLeashHolder(arg0: $Entity): void;
        delayedLeashHolderId: number;
        leashHolder: $Entity;
        delayedLeashInfo: $Either<$UUID, $BlockPos>;
        constructor(arg0: number);
        constructor(arg0: $Entity);
        constructor(arg0: $Either<$UUID_, $BlockPos_>);
    }
    export class $Entity$MoveFunction {
    }
    export interface $Entity$MoveFunction {
        accept(arg0: $Entity, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MoveFunction}.
     */
    export type $Entity$MoveFunction_ = ((arg0: $Entity, arg1: number, arg2: number, arg3: number) => void);
    export class $EntityAttachments {
        get(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        scale(arg0: number, arg1: number, arg2: number): $EntityAttachments;
        static builder(): $EntityAttachments$Builder;
        getNullable(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        static createDefault(arg0: number, arg1: number): $EntityAttachments;
        getClamped(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        constructor(arg0: $Map_<$EntityAttachment_, $List_<$Vec3_>>);
    }
    export class $EntitySelector {
        static notRiding(arg0: $Entity): $Predicate<$Entity>;
        static pushableBy(arg0: $Entity): $Predicate<$Entity>;
        static withinDistance(arg0: number, arg1: number, arg2: number, arg3: number): $Predicate<$Entity>;
        static ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static NO_SPECTATORS: $Predicate<$Entity>;
        static ENTITY_NOT_BEING_RIDDEN: $Predicate<$Entity>;
        static LIVING_ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static CAN_BE_COLLIDED_WITH: $Predicate<$Entity>;
        static NO_CREATIVE_OR_SPECTATOR: $Predicate<$Entity>;
        static CONTAINER_ENTITY_SELECTOR: $Predicate<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = string;
    export class $AgeableMob extends $PathfinderMob {
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getAge(): number;
        ageUp(arg0: number, arg1: boolean): void;
        ageUp(arg0: number): void;
        canBreed(): boolean;
        setAge(arg0: number): void;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $AgeableMob;
        ageBoundaryReached(): void;
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
        constructor(arg0: $EntityType_<$AgeableMob>, arg1: $Level_);
    }
    export class $ItemBasedSteering {
        boost(arg0: $RandomSource): boolean;
        setSaddle(arg0: boolean): void;
        onSynced(): void;
        tickBoost(): void;
        hasSaddle(): boolean;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        boostFactor(): number;
        constructor(arg0: $SynchedEntityData, arg1: $EntityDataAccessor_<number>, arg2: $EntityDataAccessor_<boolean>);
        set saddle(value: boolean);
    }
    export class $NeutralMob {
        static TAG_ANGRY_AT: string;
        static TAG_ANGER_TIME: string;
    }
    export interface $NeutralMob {
        getTarget(): $LivingEntity;
        setTarget(arg0: $LivingEntity): void;
        isAngryAt(arg0: $LivingEntity): boolean;
        isAngry(): boolean;
        readPersistentAngerSaveData(arg0: $Level_, arg1: $CompoundTag_): void;
        setRemainingPersistentAngerTime(arg0: number): void;
        getRemainingPersistentAngerTime(): number;
        playerDied(arg0: $Player): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        setLastHurtByMob(arg0: $LivingEntity): void;
        getLastHurtByMob(): $LivingEntity;
        stopBeingAngry(): void;
        addPersistentAngerSaveData(arg0: $CompoundTag_): void;
        getPersistentAngerTarget(): $UUID;
        isAngryAtAllPlayers(arg0: $Level_): boolean;
        startPersistentAngerTimer(): void;
        setPersistentAngerTarget(arg0: $UUID_): void;
        updatePersistentAnger(arg0: $ServerLevel, arg1: boolean): void;
        canAttack(arg0: $LivingEntity): boolean;
        setLastHurtByPlayer(arg0: $Player): void;
        get angry(): boolean;
        set lastHurtByPlayer(value: $Player);
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        getGroupSize(): number;
        isShouldSpawnBaby(): boolean;
        getBabySpawnChance(): number;
        increaseGroupSizeByOne(): void;
        constructor(arg0: number);
        constructor(arg0: boolean);
        get groupSize(): number;
        get shouldSpawnBaby(): boolean;
        get babySpawnChance(): number;
    }
    export class $ReputationEventHandler {
    }
    export interface $ReputationEventHandler {
        onReputationEventFrom(arg0: $ReputationEventType, arg1: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ReputationEventHandler}.
     */
    export type $ReputationEventHandler_ = ((arg0: $ReputationEventType, arg1: $Entity) => void);
    export class $TamableAnimal$TamableAnimalPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
        speedModifier: number;
        posX: number;
        mob: $PathfinderMob;
        posY: number;
        posZ: number;
        this$0: $TamableAnimal;
    }
    export class $Display$ItemDisplay$ItemRenderState extends $Record {
        itemStack(): $ItemStack;
        itemTransform(): $ItemDisplayContext;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
}
