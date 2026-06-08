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
import { $EntityAccessor as $EntityAccessor$2 } from "@package/mod/chloeprime/gunsmithlib/mixin";
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
        getDarkTicksRemaining(): number;
        static checkGlowSquidSpawnRules(arg0: $EntityType_<$LivingEntity>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
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
        isBlocking(): boolean;
        aim(arg0: boolean): void;
        internalSetAbsorptionAmount(arg0: number): void;
        superbWarfare$setKnockbackStrength(arg0: number): void;
        isSuppressingSlidingDownLadder(): boolean;
        superbwarfare$getDamageContainers(): $Stack<any>;
        superbWarfare$playHurtSound(arg0: $DamageSource_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: $Vec3_): $Vec3;
        wouldNotSuffocateAtTargetPose(arg0: $Pose_): boolean;
        getSpecialSetHealthFunction(): $FloatConsumer;
        getMaxHeadRotationRelativeToBody(): number;
        superbWarfare$getSoundVolume(): number;
        gunsmith$forceAddEffectPrime(arg0: $MobEffectInstance, arg1: $Entity): void;
        superbWarfare$getDeathSound(): $SoundEvent;
        superbWarfare$getKnockbackStrength(): number;
        redirect$hbj000$sable$maxAltitude(arg0: number, arg1: number, arg2: $Entity): number;
        draw(arg0: $Supplier_<any>): void;
        canDisableShield(): boolean;
        sable$setupLerp(): void;
        sable$applyLerp(): void;
        getSynIsAiming(): boolean;
        getStepGenerator(arg0: $SoundEngine): $Optional<any>;
        needCheckAmmo(): boolean;
        getSynIsBolting(): boolean;
        getSynSprintTime(): number;
        cancelReload(): void;
        getSynDrawCoolDown(): number;
        getCacheProperty(): $AttachmentCacheProperty;
        getSynReloadState(): $ReloadState;
        isStepBlocked(): boolean;
        initialData(): void;
        consumesAmmoOrNot(): boolean;
        getDataHolder(): $ShooterDataHolder;
        nextBulletIsTracer(arg0: number): boolean;
        getAttributeValue(arg0: $Holder_<$Attribute>): number;
        isSleeping(): boolean;
        swing(arg0: $InteractionHand_, arg1: boolean): void;
        swing(arg0: $InteractionHand_): void;
        hasInfiniteMaterials(): boolean;
        handler$egj000$superbwarfare$isDeadOrDying(arg0: $CallbackInfoReturnable<any>): void;
        handler$egj000$superbwarfare$onRemove(arg0: $Entity$RemovalReason_, arg1: $CallbackInfo): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        handler$egj000$superbwarfare$getHealth(arg0: $CallbackInfoReturnable<any>): void;
        handler$hca000$sable$beforeAnimation(arg0: $Vec3_, arg1: $CallbackInfo): void;
        handleRelativeFrictionAndCalculateMovement(arg0: $Vec3_, arg1: number): $Vec3;
        handler$cel000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        handler$hac001$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onDie(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        handler$ehb000$superbwarfare$setSprinting(arg0: boolean, arg1: $CallbackInfo): void;
        handler$hbj000$sable$jumpFromGround(arg0: $CallbackInfo): void;
        superbWarfare$checkTotemDeathProtection(arg0: $DamageSource_): boolean;
        superbWarfare$resetKnockbackStrength(): void;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        /**
         * @deprecated
         */
        canBreatheUnderwater(): boolean;
        getExperienceReward(arg0: $ServerLevel, arg1: $Entity): number;
        getLastDamageSource(): $DamageSource;
        removeEffectNoUpdate(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        getAbsorptionAmount(): number;
        setLastHurtByPlayer(arg0: $Player): void;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        triggerOnDeathMobEffects(arg0: $Entity$RemovalReason_): void;
        getLastHurtMobTimestamp(): number;
        sendEffectToPassengers(arg0: $MobEffectInstance): void;
        shouldDiscardFriction(): boolean;
        shouldDropExperience(): boolean;
        setAbsorptionAmount(arg0: number): void;
        dropCustomDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: boolean): void;
        wasExperienceConsumed(): boolean;
        removeEffectParticles(): void;
        static areAllEffectsAmbient(arg0: $Collection_<$MobEffectInstance>): boolean;
        getLastHurtByMobTimestamp(): number;
        getVisibilityPercent(arg0: $Entity): number;
        hurtCurrentlyUsedShield(arg0: number): void;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        isAlwaysExperienceDropper(): boolean;
        getBaseExperienceReward(): number;
        isInvertedHealAndHarm(): boolean;
        updateInvisibilityStatus(): void;
        getArmorCoverPercentage(): number;
        isDamageSourceBlocked(arg0: $DamageSource_): boolean;
        isAffectedByPotions(): boolean;
        getDefaultDimensions(arg0: $Pose_): $EntityDimensions;
        lerpHeadRotationStep(arg0: number, arg1: number): void;
        setRecordPlayingNearby(arg0: $BlockPos_, arg1: boolean): void;
        getLocalBoundsForPose(arg0: $Pose_): $AABB;
        shouldRiderFaceForward(arg0: $Player): boolean;
        getEquipmentSlotForItem(arg0: $ItemStack_): $EquipmentSlot;
        calculateEntityAnimation(arg0: boolean): void;
        calculateFallDamage(arg0: number, arg1: number): number;
        getUseItemRemainingTicks(): number;
        triggerItemUseEffects(arg0: $ItemStack_, arg1: number): void;
        onEquippedItemBroken(arg0: $Item_, arg1: $EquipmentSlot_): void;
        getCurrentSwingDuration(): number;
        getAttributeBaseValue(arg0: $Holder_<$Attribute>): number;
        updateEffectVisibility(): void;
        getLastClimbablePos(): ($BlockPos) | undefined;
        updateWalkAnimation(arg0: number): void;
        getComfortableFallDistance(arg0: number): number;
        getDamageAfterMagicAbsorb(arg0: $DamageSource_, arg1: number): number;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        getDamageAfterArmorAbsorb(arg0: $DamageSource_, arg1: number): number;
        equipmentHasChanged(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        checkAutoSpinAttack(arg0: $AABB_, arg1: $AABB_): void;
        doAutoAttackOnTouch(arg0: $LivingEntity): void;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getSpecialHurtFunction2(): $HurtFunction2;
        gunsmith$endSpecialHurt(): void;
        sable$getLerpTarget(): $Vec3;
        resetKnockBackStrength(): void;
        superbWarfare$hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        setKnockBackStrength(arg0: number): void;
        getKnockBackStrength(): number;
        getSynAimingProgress(): number;
        getSpecialHurtFunction1(): $HurtFunction1;
        gunsmith$beginSpecialHurt(): void;
        superbWarfare$actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        getSynShootCoolDown(): number;
        updateCacheProperty(arg0: $AttachmentCacheProperty): void;
        gunsmith$usingSpecialHurt(): boolean;
        gunsmith$setInGunMode(arg0: boolean): void;
        sable$getInheritedVelocity(): $Vector3d;
        gunsmith$isInGunMode(): boolean;
        getSynMeleeCoolDown(): number;
        getProcessedSprintStatus(arg0: boolean): boolean;
        redirect$hbj000$sable$maxAltitude$mixinextras$bridge$452(arg0: number, arg1: number, arg2: $LocalRef<any>): number;
        redirect$cfe000$fabric_entity_events_v1$beforeEntityKilled(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): boolean;
        handler$zdk000$openpartiesandclaims$onDropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        handler$cfj000$fabric_entity_events_v1$injectElytraTick(arg0: $CallbackInfo): void;
        wrapOperation$dpo000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        releaseUsingItem(): void;
        getMainHandItem(): $ItemStack;
        forceAddEffect(arg0: $MobEffectInstance, arg1: $Entity): void;
        setHealth(arg0: number): void;
        getBrain(): $Brain<never>;
        tickDeath(): void;
        isBaby(): boolean;
        makeBrain(arg0: $Dynamic<never>): $Brain<never>;
        hasEffect(arg0: $Holder_<$MobEffect>): boolean;
        canAttack(arg0: $LivingEntity): boolean;
        canAttack(arg0: $LivingEntity, arg1: $TargetingConditions): boolean;
        getHealth(): number;
        getEffect(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        addEffect(arg0: $MobEffectInstance): boolean;
        addEffect(arg0: $MobEffectInstance, arg1: $Entity): boolean;
        hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        heal(arg0: number): void;
        die(arg0: $DamageSource_): void;
        setSpeed(arg0: number): void;
        knockback(arg0: number, arg1: number, arg2: number): void;
        makeSound(arg0: $SoundEvent_): void;
        getHitbox(): $AABB;
        hurtArmor(arg0: $DamageSource_, arg1: number): void;
        getHurtDir(): number;
        isImmobile(): boolean;
        travel(arg0: $Vec3_): void;
        tickRidden(arg0: $Player, arg1: $Vec3_): void;
        isHolding(arg0: $Item_): boolean;
        isHolding(arg0: $Predicate_<$ItemStack>): boolean;
        canUseSlot(arg0: $EquipmentSlot_): boolean;
        getSpeed(): number;
        aiStep(): void;
        doPush(arg0: $Entity): void;
        setJumping(arg0: boolean): void;
        getMainArm(): $HumanoidArm;
        eat(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        eat(arg0: $Level_, arg1: $ItemStack_, arg2: $FoodProperties_): $ItemStack;
        attackable(): boolean;
        getUseItem(): $ItemStack;
        zoom(): void;
        melee(): void;
        bolt(): void;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>, arg2: number, arg3: number): $ShootResult;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>, arg2: number): $ShootResult;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>): $ShootResult;
        crawl(arg0: boolean): void;
        sbw$kill(): void;
        fireSelect(): void;
        getScale(): number;
        handler$zdk000$openpartiesandclaims$onAddEffect(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfoReturnable<any>): void;
        wrapOperation$hbj000$sable$onDismountVehicle(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        handler$zdk000$openpartiesandclaims$onDiePost(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onDiePre(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: $Vec3_): $Vec3;
        static getLivingFlags$reforgedplaymod_$md$5bc4b9$2(): $EntityDataAccessor<any>;
        getDrinkingSound(arg0: $ItemStack_): $SoundEvent;
        updateSwingTime(): void;
        onClimbable(): boolean;
        setStingerCount(arg0: number): void;
        getArrowCount(): number;
        setItemInHand(arg0: $InteractionHand_, arg1: $ItemStack_): void;
        getFallSounds(): $LivingEntity$Fallsounds;
        actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        getOffhandItem(): $ItemStack;
        setArrowCount(arg0: number): void;
        playBlockFallSound(): void;
        getArmorValue(): number;
        doHurtEquipment(arg0: $DamageSource_, arg1: number, ...arg2: $EquipmentSlot_[]): void;
        getEatingSound(arg0: $ItemStack_): $SoundEvent;
        getStingerCount(): number;
        hasItemInSlot(arg0: $EquipmentSlot_): boolean;
        dismountVehicle(arg0: $Entity): void;
        /**
         * @deprecated
         */
        jumpInLiquid(arg0: $TagKey_<$Fluid>): void;
        getArmorSlots(): $Iterable<$ItemStack>;
        getHandSlots(): $Iterable<$ItemStack>;
        getJumpBoostPower(): number;
        jumpFromGround(): void;
        verifyEquippedItem(arg0: $ItemStack_): void;
        pushEntities(): void;
        getJumpPower(arg0: number): number;
        getJumpPower(): number;
        doHurtTarget(arg0: $Entity): boolean;
        /**
         * @deprecated
         */
        goDownInWater(): void;
        tickHeadTurn(arg0: number, arg1: number): number;
        serverAiStep(): void;
        getRiddenSpeed(arg0: $Player): number;
        getFlyingSpeed(): number;
        getAllSlots(): $Iterable<$ItemStack>;
        getWaterSlowDown(): number;
        canStandOnFluid(arg0: $FluidState): boolean;
        getRiddenInput(arg0: $Player, arg1: $Vec3_): $Vec3;
        static getSlotForHand(arg0: $InteractionHand_): $EquipmentSlot;
        isAutoSpinAttack(): boolean;
        getUsedItemHand(): $InteractionHand;
        onItemPickup(arg0: $ItemEntity): void;
        updateUsingItem(arg0: $ItemStack_): void;
        stopUsingItem(): void;
        onLeaveCombat(): void;
        hasLineOfSight(arg0: $Entity): boolean;
        getDismountPoses(): $ImmutableList<$Pose>;
        startSleeping(arg0: $BlockPos_): void;
        startUsingItem(arg0: $InteractionHand_): void;
        getTicksUsingItem(): number;
        canTakeItem(arg0: $ItemStack_): boolean;
        isSensitiveToWater(): boolean;
        getProjectile(arg0: $ItemStack_): $ItemStack;
        onEnterCombat(): void;
        completeUsingItem(): void;
        getFallFlyingTicks(): number;
        getAttackAnim(arg0: number): number;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        clearSleepingPos(): void;
        getBedOrientation(): $Direction;
        getMaxHealth(): number;
        brainProvider(): $Brain$Provider<never>;
        skipDropExperience(): void;
        tryAddFrost(): void;
        sanitizeScale(arg0: number): number;
        increaseAirSupply(arg0: number): number;
        isAffectedByFluids(): boolean;
        getLastAttacker(): $LivingEntity;
        getNoActionTime(): number;
        setNoActionTime(arg0: number): void;
        getAgeScale(): number;
        getSleepingPos(): ($BlockPos) | undefined;
        getLastHurtByMob(): $LivingEntity;
        getLastHurtMob(): $LivingEntity;
        setLastHurtMob(arg0: $Entity): void;
        setDiscardFriction(arg0: boolean): void;
        setLastHurtByMob(arg0: $LivingEntity): void;
        doesEmitEquipEvent(arg0: $EquipmentSlot_): boolean;
        removeFrost(): void;
        hasLandedInLiquid(): boolean;
        onEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        decreaseAirSupply(arg0: number): number;
        shouldDropLoot(): boolean;
        tickEffects(): void;
        canAttackType(arg0: $EntityType_<never>): boolean;
        getSwimAmount(arg0: number): number;
        onChangedBlock(arg0: $ServerLevel, arg1: $BlockPos_): void;
        onEffectRemoved(arg0: $MobEffectInstance): void;
        onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity): void;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        isFallFlying(): boolean;
        canBeSeenAsEnemy(): boolean;
        blockUsingShield(arg0: $LivingEntity): void;
        setSleepingPos(arg0: $BlockPos_): void;
        /**
         * @deprecated
         */
        canBeAffected(arg0: $MobEffectInstance): boolean;
        removeAllEffects(): boolean;
        removeEffect(arg0: $Holder_<$MobEffect>): boolean;
        stopSleeping(): void;
        onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity): void;
        getMaxAbsorption(): number;
        canBeSeenByAnyone(): boolean;
        dropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        getKillCredit(): $LivingEntity;
        getHurtSound(arg0: $DamageSource_): $SoundEvent;
        getSoundVolume(): number;
        dropExperience(arg0: $Entity): void;
        getKnockback(arg0: $Entity, arg1: $DamageSource_): number;
        getVoicePitch(): number;
        dropFromLootTable(arg0: $DamageSource_, arg1: boolean): void;
        dropEquipment(): void;
        indicateDamage(arg0: number, arg1: number): void;
        getDeathSound(): $SoundEvent;
        playHurtSound(arg0: $DamageSource_): void;
        getCombatTracker(): $CombatTracker;
        createWitherRose(arg0: $LivingEntity): void;
        blockedByShield(arg0: $LivingEntity): void;
        isDeadOrDying(): boolean;
        getItemInHand(arg0: $InteractionHand_): $ItemStack;
        isUsingItem(): boolean;
        self(): $LivingEntity;
        canDrownInFluidType(arg0: $FluidType_): boolean;
        onDamageTaken(arg0: $DamageContainer): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        jumpInFluid(arg0: $FluidType_): void;
        sinkInFluid(arg0: $FluidType_): void;
        gunsmith$addUnsupportedTypeForSpecialHurt(arg0: $EntityType_<never>, arg1: $Throwable): void;
        setDefaultMovementSpeed(speed: number): void;
        getDefaultMovementSpeed(): number;
        setMovementSpeedAddition(speed: number): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        rayTrace(): $KubeRayTraceResult;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        getOffHandItem(): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        setOffHandItem(item: $ItemStack_): void;
        isUndead(): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getHeadArmorItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        setMainHandItem(item: $ItemStack_): void;
        setHeadArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getReachDistance(): number;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getChestArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        setLegsArmorItem(item: $ItemStack_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        getTotalMovementSpeed(): number;
        getMainHandItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
        getInterpTargetX(): number;
        getInterpTargetYaw(): number;
        getInterpTargetY(): number;
        getInterpTargetZ(): number;
        getInterpTargetPitch(): number;
        setActiveItemStackUseCount(arg0: number): void;
        getActiveItemStackUseCount(): number;
        isJumping(): boolean;
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
        get blocking(): boolean;
        get suppressingSlidingDownLadder(): boolean;
        get specialSetHealthFunction(): $FloatConsumer;
        get maxHeadRotationRelativeToBody(): number;
        get synIsAiming(): boolean;
        get synIsBolting(): boolean;
        get synSprintTime(): number;
        get synDrawCoolDown(): number;
        get cacheProperty(): $AttachmentCacheProperty;
        get synReloadState(): $ReloadState;
        get stepBlocked(): boolean;
        get dataHolder(): $ShooterDataHolder;
        get sleeping(): boolean;
        get lastHurtMobTimestamp(): number;
        get lastHurtByMobTimestamp(): number;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get alwaysExperienceDropper(): boolean;
        get baseExperienceReward(): number;
        get invertedHealAndHarm(): boolean;
        get armorCoverPercentage(): number;
        get affectedByPotions(): boolean;
        get useItemRemainingTicks(): number;
        get currentSwingDuration(): number;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get specialHurtFunction2(): $HurtFunction2;
        get synAimingProgress(): number;
        get specialHurtFunction1(): $HurtFunction1;
        get synShootCoolDown(): number;
        get synMeleeCoolDown(): number;
        get baby(): boolean;
        get hitbox(): $AABB;
        get hurtDir(): number;
        get immobile(): boolean;
        get mainArm(): $HumanoidArm;
        get scale(): number;
        static get livingFlags$reforgedplaymod_$md$5bc4b9$2(): $EntityDataAccessor<any>;
        get fallSounds(): $LivingEntity$Fallsounds;
        get offhandItem(): $ItemStack;
        get armorValue(): number;
        get armorSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get jumpBoostPower(): number;
        get flyingSpeed(): number;
        get allSlots(): $Iterable<$ItemStack>;
        get waterSlowDown(): number;
        get autoSpinAttack(): boolean;
        get usedItemHand(): $InteractionHand;
        get dismountPoses(): $ImmutableList<$Pose>;
        get ticksUsingItem(): number;
        get sensitiveToWater(): boolean;
        get fallFlyingTicks(): number;
        get bedOrientation(): $Direction;
        get affectedByFluids(): boolean;
        get lastAttacker(): $LivingEntity;
        get ageScale(): number;
        set discardFriction(value: boolean);
        get activeEffects(): $Collection<$MobEffectInstance>;
        get fallFlying(): boolean;
        get maxAbsorption(): number;
        get lootTable(): $ResourceKey<$LootTable>;
        get lootTableSeed(): number;
        get killCredit(): $LivingEntity;
        get soundVolume(): number;
        get voicePitch(): number;
        get deathSound(): $SoundEvent;
        get combatTracker(): $CombatTracker;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        set movementSpeedAddition(value: number);
        get undead(): boolean;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
        get interpTargetX(): number;
        get interpTargetYaw(): number;
        get interpTargetY(): number;
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
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$1, $CommandSource, $ScoreHolder, $IEntityExtension, $EntityAccessor$2, $EntityExt, $EntityExtension$1, $BalmEntity, $AccessorEntity$1, $ExtensionHolder, $EntityAccessor$1, $EntityAccessor, $Cullable, $OBBHitter, $AccessorEntity, $DynamicLightSource, $EntityKJS, $EntityAccess, $EntityStickExtension, $EntityExtension, $EntityExtension$2, $IJetpackacableEntity, $IEntity, $EntityMovementExtension, $IEntity$1 {
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
        addMotion(arg0: number, arg1: number, arg2: number): void;
        push(arg0: $Vec3_): void;
        push(arg0: $Entity): void;
        getDisplayName(): $Component;
        move(arg0: $MoverType_, arg1: $Vec3_): void;
        tick(): void;
        isSupportedBy(arg0: $BlockPos_): boolean;
        getExtension(key: $Object, type: $Class<any>): $Object;
        setExtension(key: $Object, value: $Object): void;
        setLevel(arg0: $Level_): void;
        getDimensions(arg0: $Pose_): $EntityDimensions;
        getPosition(arg0: number): $Vec3;
        kill(): void;
        getPassengerAttachmentPoint(arg0: $Entity, arg1: $EntityDimensions_, arg2: number): $Vec3;
        isControlledByLocalInstance(): boolean;
        getDismountLocationForPassenger(arg0: $LivingEntity): $Vec3;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        lerpPositionAndRotationStep(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        handler$hbo000$sable$tickInject(arg0: $CallbackInfo): void;
        sable$setLastTrackingSubLevelID(arg0: $UUID_): void;
        weCompanion$getLastJetpackResult(): boolean;
        weCompanion$setLastJetpackResult(arg0: boolean): void;
        handler$hbh000$sable$moveRelative(arg0: number, arg1: $Vec3_, arg2: $CallbackInfo): void;
        playEntityOnFireExtinguishedSound(): void;
        static getDefaultPassengerAttachmentPoint(arg0: $Entity, arg1: $Entity, arg2: $EntityAttachments): $Vec3;
        removeAfterChangingDimensions(): void;
        handler$hbo000$sable$moveInject(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getPrimaryStepSoundBlockPos(arg0: $BlockPos_): $BlockPos;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): $Vec3;
        updateFluidHeightAndDoFluidPushing(): void;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        hasExactlyOnePlayerPassenger(): boolean;
        handler$ego000$superbwarfare$turn(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        getSwimHighSpeedSplashSound(): $SoundEvent;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        handler$hbh000$sable$onRidingTick(arg0: $CallbackInfo): void;
        updateDynamicGameEventListener(arg0: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        fudgePositionAfterSizeChange(arg0: $EntityDimensions_): boolean;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState, arg5: number): number;
        handler$iof000$axiom$onTurn(d: number, e: number, ci: $CallbackInfo): void;
        sable$getLastTrackingSubLevelID(): $UUID;
        setId(arg0: number): void;
        discard(): void;
        mirror(arg0: $Mirror_): number;
        removeTag(arg0: string): boolean;
        getY(arg0: number): number;
        getY(): number;
        getX(arg0: number): number;
        getX(): number;
        isRemoved(): boolean;
        recreateFromPacket(arg0: $ClientboundAddEntityPacket): void;
        igniteForTicks(arg0: number): void;
        setLuminance(luminance: number): void;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
        dynamicLightTick(): void;
        getLuminance(): number;
        getEncodeId(): string;
        getPickResult(): $ItemStack;
        getEyeInFluidType(): $FluidType;
        /**
         * @deprecated
         */
        isPushedByFluid(): boolean;
        getForgePersistentData(): $CompoundTag;
        killedEntity(arg0: $ServerLevel, arg1: $LivingEntity): boolean;
        saveWithoutId(arg0: $CompoundTag_): $CompoundTag;
        isAddedToLevel(): boolean;
        getCustomName(): $Component;
        setOnGround(arg0: boolean): void;
        canStartSwimming(): boolean;
        onAddedToLevel(): void;
        distanceToSqr(arg0: $Vec3_): number;
        /**
         * Measures the **square** of a distance of entity to another entity.
         */
        distanceToEntitySqr(arg0: $Entity): number;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        sendSystemMessage(arg0: $Component_): void;
        onRemovedFromLevel(): void;
        hasGlowingTag(): boolean;
        chunkPosition(): $ChunkPos;
        checkInsideBlocks(): void;
        igniteForSeconds(arg0: number): void;
        static collideBoundingBox(arg0: $Entity, arg1: $Vec3_, arg2: $AABB_, arg3: $Level_, arg4: $List_<$VoxelShape>): $Vec3;
        getSwimSound(): $SoundEvent;
        getFireImmuneTicks(): number;
        onClientRemoval(): void;
        getSwimSplashSound(): $SoundEvent;
        getTeamColor(): number;
        handlePortal(): void;
        isColliding(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        checkBelowWorld(): void;
        onInsideBlock(arg0: $BlockState_): void;
        playSwimSound(arg0: number): void;
        isCrouching(): boolean;
        playStepSound(arg0: $BlockPos_, arg1: $BlockState_): void;
        getPositionCodec(): $VecDeltaCodec;
        setPortalCooldown(): void;
        setPortalCooldown(arg0: number): void;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        ejectPassengers(): void;
        getEntityData(): $SynchedEntityData;
        setBoundingBox(arg0: $AABB_): void;
        updateSwimming(): void;
        getPortalCooldown(): number;
        isOnPortalCooldown(): boolean;
        waterSwimSound(): void;
        newDoubleList(...arg0: number[]): $ListTag;
        newFloatList(...arg0: number[]): $ListTag;
        hasPassenger(arg0: $Predicate_<$Entity>): boolean;
        hasPassenger(arg0: $Entity): boolean;
        canAddPassenger(arg0: $Entity): boolean;
        isInWaterOrRain(): boolean;
        setOldPosAndRot(): void;
        setGlowing(arg0: boolean): void;
        startRiding(arg0: $Entity, arg1: boolean): boolean;
        startRiding(arg0: $Entity): boolean;
        getPickRadius(): number;
        removeVehicle(): void;
        getAttachments(): $EntityAttachments;
        isNoGravity(): boolean;
        getViewXRot(arg0: number): number;
        calculateUpVector(arg0: number, arg1: number): $Vec3;
        canCollideWith(arg0: $Entity): boolean;
        setAirSupply(arg0: number): void;
        absRotateTo(arg0: number, arg1: number): void;
        setNoGravity(arg0: boolean): void;
        positionRider(arg0: $Entity): void;
        positionRider(arg0: $Entity, arg1: $Entity$MoveFunction_): void;
        showVehicleHealth(): boolean;
        setCustomName(arg0: $Component_): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        removePassenger(arg0: $Entity): void;
        dampensVibrations(): boolean;
        isInWaterOrBubble(): boolean;
        saveAsPassenger(arg0: $CompoundTag_): boolean;
        onPassengerTurned(arg0: $Entity): void;
        addPassenger(arg0: $Entity): void;
        playerTouch(arg0: $Player): void;
        getFirstPassenger(): $Entity;
        getBlockStateOn(): $BlockState;
        canBeCollidedWith(): boolean;
        applyGravity(): void;
        /**
         * @deprecated
         */
        isEyeInFluid(arg0: $TagKey_<$Fluid>): boolean;
        getUpVector(arg0: number): $Vec3;
        acceptsSuccess(): boolean;
        setShiftKeyDown(arg0: boolean): void;
        makeStuckInBlock(arg0: $BlockState_, arg1: $Vec3_): void;
        onAboveBubbleCol(arg0: boolean): void;
        acceptsFailure(): boolean;
        canControlVehicle(): boolean;
        getRootVehicle(): $Entity;
        setSwimming(arg0: boolean): void;
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        startSeenByPlayer(arg0: $ServerPlayer): void;
        shouldInformAdmins(): boolean;
        isDescending(): boolean;
        getMotionDirection(): $Direction;
        isInvisibleTo(arg0: $Player): boolean;
        changeDimension(arg0: $DimensionTransition_): $Entity;
        isVisuallyCrawling(): boolean;
        isAttackable(): boolean;
        getScoreboardName(): string;
        setInvulnerable(arg0: boolean): void;
        static getViewScale(): number;
        createHoverEvent(): $HoverEvent;
        getRotationVector(): $Vec2;
        getEyeHeight(): number;
        getEyeHeight(arg0: $Pose_): number;
        /**
         * @deprecated
         */
        fixupDimensions(): void;
        broadcastToPlayer(arg0: $ServerPlayer): boolean;
        ignoreExplosion(arg0: $Explosion): boolean;
        restoreFrom(arg0: $Entity): void;
        setAsInsidePortal(arg0: $Portal_, arg1: $BlockPos_): void;
        stopSeenByPlayer(arg0: $ServerPlayer): void;
        onlyOpCanSetNbt(): boolean;
        getPermissionLevel(): number;
        hasPermissions(arg0: number): boolean;
        placePortalTicket(arg0: $BlockPos_): void;
        copyPosition(arg0: $Entity): void;
        static setViewScale(arg0: number): void;
        getLeashOffset(arg0: number): $Vec3;
        getLeashOffset(): $Vec3;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getFabricBalmData(): $CompoundTag;
        setOutOfCamera(value: boolean): void;
        getDynamicLightZ(): number;
        resetDynamicLight(): void;
        veil$addEmitter(arg0: $ParticleEmitter): void;
        onExplosionHit(arg0: $Entity): void;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        getRemovalReason(): $Entity$RemovalReason;
        mayInteract(arg0: $Level_, arg1: $BlockPos_): boolean;
        setFluidTypeHeight(arg0: $FluidType_, arg1: number): void;
        veil$getEmitters(): $List<any>;
        setFabricBalmData(arg0: $CompoundTag_): void;
        isForcedVisible(): boolean;
        isOutOfCamera(): boolean;
        unsetRemoved(): void;
        getDynamicLightId(): number;
        getDynamicLightX(): number;
        getDynamicLightY(): number;
        getAddEntityPacket(arg0: $ServerEntity): $Packet<$ClientGamePacketListener>;
        trackingPosition(): $Vec3;
        isAlwaysTicking(): boolean;
        getKnownMovement(): $Vec3;
        shouldBeSaved(): boolean;
        checkDespawn(): void;
        setIsInPowderSnow(arg0: boolean): void;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        moveTo(arg0: $Vec3_): void;
        moveTo(arg0: $Vec3_, arg1: number, arg2: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        moveToBlockPos(arg0: $BlockPos_, arg1: number, arg2: number): void;
        setTimeout(): void;
        getHorizontalFacing(): $Direction;
        getZ(arg0: number): number;
        getZ(): number;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        interactAt(arg0: $Player, arg1: $Vec3_, arg2: $InteractionHand_): $InteractionResult;
        interact(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        getBlockY(): number;
        getBlockZ(): number;
        getBlockX(): number;
        getUuid(): $UUID;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Vec3_): void;
        getVehicle(): $Entity;
        canSprint(): boolean;
        deflection(arg0: $Projectile): $ProjectileDeflection;
        isFreezing(): boolean;
        isCulled(): boolean;
        setCulled(value: boolean): void;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        updateDynamicLightPreviousCoordinates(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        handler$haa000$sable$checkInsideBlocks(arg0: $CallbackInfo): void;
        wrapMethod$ckk000$createbigcannons$turn(arg0: number, arg1: number, arg2: $Operation_<any>): void;
        wrapOperation$heo000$sable$inWaterCheck(arg0: $Entity, arg1: boolean, arg2: $Operation_<any>): void;
        handler$hfd000$sable$calculateViewVector(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        redirect$hbo000$sable$collideRedirect(arg0: $Entity, arg1: $Vec3_): $Vec3;
        handler$hmp000$sable$subLevelFluidOnEyes(arg0: $CallbackInfo): void;
        updateInWaterStateAndDoFluidPushing(): boolean;
        wrapOperation$hbo000$sable$moveInject(arg0: $Entity, arg1: boolean, arg2: $Vec3_, arg3: $Operation_<any>): void;
        handler$hbh000$sable$onPositionRider(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$jcf002$createdieselgenerators$load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$jcf000$createdieselgenerators$save(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        redirect$hbh000$sable$fixPassengerSaving(arg0: $CompoundTag_, arg1: string, arg2: $Tag_): $Tag;
        handler$hab000$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        calculateViewVector(arg0: number, arg1: number): $Vec3;
        /**
         * @deprecated
         */
        getBlockStateOnLegacy(): $BlockState;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        isInWaterRainOrBubble(): boolean;
        getBlockSpeedFactor(): number;
        getPreciseBodyRotation(arg0: number): number;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        isCustomNameVisible(): boolean;
        getMaxHeightFluidType(): $FluidType;
        getBoundingBoxForCulling(): $AABB;
        getFluidJumpThreshold(): number;
        getRelativePortalPosition(arg0: $Direction$Axis_, arg1: $BlockUtil$FoundRectangle): $Vec3;
        getControllingPassenger(): $LivingEntity;
        tryCheckInsideBlocks(): void;
        checkSlowFallDistance(): void;
        getPassengerRidingPosition(arg0: $Entity): $Vec3;
        getTicksRequiredToFreeze(): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        sable$setPlotPosition(arg0: $Vec3_): void;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        sable$getPlotPosition(): $Vec3;
        sable$getInBlockStatePos(): $BlockPos;
        sable$vanillaCollide(arg0: $Vec3_): $Vec3;
        createCommandSourceStack(): $CommandSourceStack;
        getCommandSenderWorld(): $Level;
        getPersistentData(): $CompoundTag;
        getDimensionChangingDelay(): number;
        isPassengerOfSameVehicle(arg0: $Entity): boolean;
        processFlappingMovement(): void;
        adjustSpawnLocation(arg0: $ServerLevel, arg1: $BlockPos_): $BlockPos;
        canBeHitByProjectile(): boolean;
        processPortalCooldown(): void;
        getNearestViewDirection(): $Direction;
        handler$blm000$veil$remove(arg0: $CallbackInfo): void;
        checkSupportingBlock(arg0: boolean, arg1: $Vec3_): void;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getLightProbePosition(arg0: number): $Vec3;
        getMovementEmission(): $Entity$MovementEmission;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        playMuffledStepSound(arg0: $BlockState_, arg1: $BlockPos_): void;
        getRemainingFireTicks(): number;
        repositionEntityAfterLoad(): boolean;
        setSharedFlagOnFire(arg0: boolean): void;
        limitPistonMovement(arg0: $Vec3_): $Vec3;
        isHorizontalCollisionMinor(arg0: $Vec3_): boolean;
        setCustomNameVisible(arg0: boolean): void;
        playCombinationStepSounds(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_): void;
        setRemainingFireTicks(arg0: number): void;
        spawnSprintParticle(): void;
        maybeBackOffFromEdge(arg0: $Vec3_, arg1: $MoverType_): $Vec3;
        canSpawnSprintParticle(): boolean;
        setOnGroundWithMovement(arg0: boolean, arg1: $Vec3_): void;
        doWaterSplashEffect(): void;
        getPassengersAndSelf(): $Stream<$Entity>;
        isIgnoringBlockTriggers(): boolean;
        hasIndirectPassenger(arg0: $Entity): boolean;
        dismountsUnderwater(): boolean;
        canChangeDimensions(arg0: $Level_, arg1: $Level_): boolean;
        getSelfAndPassengers(): $Stream<$Entity>;
        countPlayerPassengers(): number;
        getPistonPushReaction(): $PushReaction;
        getHandHoldingItemAngle(arg0: $Item_): $Vec3;
        hasControllingPassenger(): boolean;
        displayFireAnimation(): boolean;
        getIndirectPassengers(): $Iterable<$Entity>;
        touchingUnloadedChunk(): boolean;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        getControlledVehicle(): $Entity;
        onInsideBubbleColumn(arg0: boolean): void;
        getRopeHoldPosition(arg0: number): $Vec3;
        isSuppressingBounce(): boolean;
        isSteppingCarefully(): boolean;
        getVehicleAttachmentPoint(arg0: $Entity): $Vec3;
        /**
         * @deprecated
         */
        couldAcceptPassenger(): boolean;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        skipAttackInteraction(arg0: $Entity): boolean;
        sbw$setCurrentHitPart(arg0: $OBB$Part_): void;
        getDynamicLightPrevX(): number;
        getDynamicLightPrevY(): number;
        replaymod$setTrackedPitch(value: number): void;
        sbw$getCurrentHitPart(): $OBB$Part;
        getDynamicLightLevel(): $Level;
        setLastDynamicLuminance(luminance: number): void;
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
        sable$setPosSuperRaw(arg0: $Vec3_): void;
        getLastDynamicLuminance(): number;
        replaymod$getTrackedYaw(): number;
        getDynamicLightPrevZ(): number;
        replaymod$getTrackedPitch(): number;
        replaymod$setTrackedYaw(value: number): void;
        modifyReturnValue$ifb000$create_sa$create$onFireImmune(arg0: boolean): boolean;
        handler$zdc000$openpartiesandclaims$onIsInvulnerableTo(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$dmg001$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        handler$heo000$sable$updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<any>, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$ehf000$superbwarfare$playSteelPipeDropSound(arg0: boolean, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getXaero_OPAC_data(): $EntityData;
        sable$setPosField(arg0: $Vec3_): void;
        setXaero_OPAC_data(arg0: $EntityData): void;
        getTurretPos(): $BlockPos;
        setTurretPos(arg0: $BlockPos_): void;
        setUUID(arg0: $UUID_): void;
        isSpectator(): boolean;
        registryAccess(): $RegistryAccess;
        isGlowing(): boolean;
        isUnderWater(): boolean;
        getLookAngle(): $Vec3;
        getEyePosition(): $Vec3;
        getEyePosition(arg0: number): $Vec3;
        getViewVector(arg0: number): $Vec3;
        thunderHit(arg0: $ServerLevel, arg1: $LightningBolt): void;
        clearFire(): void;
        fireImmune(): boolean;
        isInWall(): boolean;
        isInLiquid(): boolean;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setPos(arg0: $Vec3_): void;
        baseTick(): void;
        isInWater(): boolean;
        getRandomZ(arg0: number): number;
        isDiscrete(): boolean;
        getRandomY(): number;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Entity): void;
        gameEvent(arg0: $Holder_<$GameEvent>): void;
        isSilent(): boolean;
        getRandomX(arg0: number): number;
        playSound(arg0: $SoundEvent_): void;
        playSound(arg0: $SoundEvent_, arg1: number, arg2: number): void;
        markHurt(): void;
        setPose(arg0: $Pose_): void;
        onGround(): boolean;
        getServer(): $MinecraftServer;
        getBbWidth(): number;
        isInLava(): boolean;
        getGravity(): number;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getEyeY(): number;
        distanceTo(arg0: $Entity): number;
        canFreeze(): boolean;
        stopRiding(): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        rideTick(): void;
        isPickable(): boolean;
        hasPose(arg0: $Pose_): boolean;
        isPushable(): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        getPose(): $Pose;
        isOnFire(): boolean;
        maxUpStep(): number;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getOnPos(arg0: number): $BlockPos;
        getOnPos(): $BlockPos;
        setRot(arg0: number, arg1: number): void;
        getTeam(): $PlayerTeam;
        isOnSameTeam(arg0: $Entity): boolean;
        isAlliedTo(arg0: $Team): boolean;
        isVehicle(): boolean;
        addTag(arg0: string): boolean;
        nextStep(): number;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        closerThan(arg0: $Entity, arg1: number, arg2: number): boolean;
        closerThan(arg0: $Entity, arg1: number): boolean;
        lavaHurt(): void;
        unRide(): void;
        getTags(): $Set<string>;
        turn(arg0: number, arg1: number): void;
        isFlapping(): boolean;
        onFlap(): void;
        isOnRails(): boolean;
        isSwimming(): boolean;
        setSilent(arg0: boolean): void;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        getForward(): $Vec3;
        canRide(arg0: $Entity): boolean;
        wrapOperation$hbo000$sable$updateEntityAfterFallOn(arg0: $Block_, arg1: $BlockGetter, arg2: $Entity, arg3: $Operation_<any>): void;
        handler$fjc000$lambdynlights_runtime$onRemove(ci: $CallbackInfo): void;
        handler$zdc000$openpartiesandclaims$onHandlePortal(arg0: $CallbackInfo): void;
        wrapOperation$heo000$sable$occludeFluidOnEyes(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidState;
        handler$imo000$axiom$isIgnoringBlockTriggers(cir: $CallbackInfoReturnable<any>): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: $Vec3_): void;
        handleDamageEvent(arg0: $DamageSource_): void;
        onBelowWorld(): void;
        handleEntityEvent(arg0: number): void;
        causeFallDamage(arg0: number, arg1: number, arg2: $DamageSource_): boolean;
        getMaxFallDistance(): number;
        animateHurt(arg0: number): void;
        getBbHeight(): number;
        setSprinting(arg0: boolean): void;
        isEffectiveAi(): boolean;
        getFluidTypeHeight(arg0: $FluidType_): number;
        setTicksFrozen(arg0: number): void;
        isFullyFrozen(): boolean;
        getDefaultGravity(): number;
        shouldShowName(): boolean;
        resetFallDistance(): void;
        isSprinting(): boolean;
        getInBlockState(): $BlockState;
        addDeltaMovement(arg0: $Vec3_): void;
        refreshDimensions(): void;
        getBlockJumpFactor(): number;
        moveRelative(arg0: number, arg1: $Vec3_): void;
        /**
         * @deprecated
         */
        getFluidHeight(arg0: $TagKey_<$Fluid>): number;
        isPassenger(): boolean;
        lerpTargetYRot(): number;
        isShiftKeyDown(): boolean;
        setYHeadRot(arg0: number): void;
        makeBoundingBox(): $AABB;
        canUsePortal(arg0: boolean): boolean;
        lerpTargetX(): number;
        lerpTargetZ(): number;
        getViewYRot(arg0: number): number;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(arg0: number): void;
        lerpTargetXRot(): number;
        isVisuallySwimming(): boolean;
        lerpTargetY(): number;
        damageSources(): $DamageSources;
        reapplyPosition(): void;
        getPercentFrozen(): number;
        getMaxAirSupply(): number;
        isInFluidType(): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        defineSynchedData(arg0: $SynchedEntityData$Builder): void;
        getTicksFrozen(): number;
        extinguish(): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: $BlockState_, arg3: $BlockPos_): void;
        getDeltaMovement(): $Vec3;
        getBoundingBox(): $AABB;
        getAirSupply(): number;
        isInvulnerableTo(arg0: $DamageSource_): boolean;
        getSharedFlag(arg0: number): boolean;
        getSoundSource(): $SoundSource;
        getStringUuid(): string;
        setSharedFlag(arg0: number, arg1: boolean): void;
        isInvulnerable(): boolean;
        isInvisible(): boolean;
        getWeaponItem(): $ItemStack;
        hasCustomName(): boolean;
        awardKillScore(arg0: $Entity, arg1: number, arg2: $DamageSource_): void;
        getYHeadRot(): number;
        spawnAtLocation(arg0: $ItemStack_, arg1: number): $ItemEntity;
        spawnAtLocation(arg0: $ItemStack_): $ItemEntity;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        captureDrops(): $Collection<$ItemEntity>;
        blockPosition(): $BlockPos;
        setInvisible(arg0: boolean): void;
        sable$getTrackingSubLevel(): $SubLevel;
        revive(): void;
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        isPushedByFluid(arg0: $FluidType_): boolean;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        isMultipartEntity(): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        isEyeInFluidType(arg0: $FluidType_): boolean;
        getClassification(arg0: boolean): $MobCategory;
        shouldRiderSit(): boolean;
        canRiderInteract(): boolean;
        getFluidMotionScale(arg0: $FluidType_): number;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        getPickedResult(arg0: $HitResult): $ItemStack;
        getParts(): $PartEntity<never>[];
        isInFluidType(arg0: $FluidState): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        isInFluidType(arg0: $FluidType_): boolean;
        lambdynlights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        lambdynlights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        getType(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        getLevel(): $Level;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        getScriptType(): $ScriptType;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        getServer(): $MinecraftServer;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
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
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        setMotionX(x: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        setRotation(yaw: number, pitch: number): void;
        getMotionY(): number;
        getMotionX(): number;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getMotionZ(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        setMotionZ(z: number): void;
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
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        setMotionY(y: number): void;
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
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
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
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        getName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getDisplayName(): $Component;
        getNbt(): $CompoundTag;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        setX(x: number): void;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        setZ(z: number): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        setY(y: number): void;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        spawn(): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setDynamicLightEnabled(enabled: boolean): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        isDynamicLightEnabled(): boolean;
        setYRot(arg0: number): void;
        getXRot(): number;
        getYRot(): number;
        setXRot(arg0: number): void;
        getFirstTick(): boolean;
        callGetTypeName(): $Component;
        invokeIsInRain(): boolean;
        getRandom(): $RandomSource;
        transition$setRawPosition(arg0: $Vec3_): void;
        invokeIsInBubbleColumn(): boolean;
        catnip$callSetLevel(arg0: $Level_): void;
        transition$getRawPosition(): $Vec3;
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
        get controlledByLocalInstance(): boolean;
        get swimHighSpeedSplashSound(): $SoundEvent;
        get lightLevelDependentMagicValue(): number;
        get encodeId(): string;
        get pickResult(): $ItemStack;
        get forgePersistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get swimSound(): $SoundEvent;
        get fireImmuneTicks(): number;
        get swimSplashSound(): $SoundEvent;
        get teamColor(): number;
        get crouching(): boolean;
        get positionCodec(): $VecDeltaCodec;
        get onPosLegacy(): $BlockPos;
        get onPortalCooldown(): boolean;
        get inWaterOrRain(): boolean;
        get pickRadius(): number;
        get attachments(): $EntityAttachments;
        get inWaterOrBubble(): boolean;
        get firstPassenger(): $Entity;
        get blockStateOn(): $BlockState;
        get rootVehicle(): $Entity;
        get descending(): boolean;
        get motionDirection(): $Direction;
        get visuallyCrawling(): boolean;
        get attackable(): boolean;
        get scoreboardName(): string;
        get rotationVector(): $Vec2;
        get permissionLevel(): number;
        get dynamicLightZ(): number;
        get forcedVisible(): boolean;
        get dynamicLightId(): number;
        get dynamicLightX(): number;
        get dynamicLightY(): number;
        get alwaysTicking(): boolean;
        get knownMovement(): $Vec3;
        get horizontalFacing(): $Direction;
        get blockY(): number;
        get blockZ(): number;
        get blockX(): number;
        get freezing(): boolean;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get blockStateOnLegacy(): $BlockState;
        get inWaterRainOrBubble(): boolean;
        get blockSpeedFactor(): number;
        get maxHeightFluidType(): $FluidType;
        get boundingBoxForCulling(): $AABB;
        get fluidJumpThreshold(): number;
        get controllingPassenger(): $LivingEntity;
        get ticksRequiredToFreeze(): number;
        get commandSenderWorld(): $Level;
        get persistentData(): $CompoundTag;
        get dimensionChangingDelay(): number;
        get nearestViewDirection(): $Direction;
        get movementEmission(): $Entity$MovementEmission;
        set sharedFlagOnFire(value: boolean);
        get passengersAndSelf(): $Stream<$Entity>;
        get ignoringBlockTriggers(): boolean;
        get selfAndPassengers(): $Stream<$Entity>;
        get pistonPushReaction(): $PushReaction;
        get indirectPassengers(): $Iterable<$Entity>;
        get controlledVehicle(): $Entity;
        get suppressingBounce(): boolean;
        get steppingCarefully(): boolean;
        get dynamicLightPrevX(): number;
        get dynamicLightPrevY(): number;
        get dynamicLightLevel(): $Level;
        get dynamicLightPrevZ(): number;
        set UUID(value: $UUID_);
        get spectator(): boolean;
        get underWater(): boolean;
        get lookAngle(): $Vec3;
        get inWall(): boolean;
        get inLiquid(): boolean;
        get inWater(): boolean;
        get discrete(): boolean;
        get randomY(): number;
        get bbWidth(): number;
        get inLava(): boolean;
        get gravity(): number;
        get eyeY(): number;
        get pickable(): boolean;
        get pushable(): boolean;
        get onFire(): boolean;
        get team(): $PlayerTeam;
        get tags(): $Set<string>;
        get flapping(): boolean;
        get onRails(): boolean;
        get forward(): $Vec3;
        get maxFallDistance(): number;
        get bbHeight(): number;
        get effectiveAi(): boolean;
        get fullyFrozen(): boolean;
        get defaultGravity(): number;
        get inBlockState(): $BlockState;
        get blockJumpFactor(): number;
        get passenger(): boolean;
        get visuallySwimming(): boolean;
        get percentFrozen(): number;
        get maxAirSupply(): number;
        get soundSource(): $SoundSource;
        get stringUuid(): string;
        get weaponItem(): $ItemStack;
        get feedbackDisplayName(): $Component;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
        get type(): string;
        get profile(): $GameProfile;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get living(): boolean;
        get scriptType(): $ScriptType;
        get username(): string;
        get teamName(): string;
        get player(): boolean;
        get monster(): boolean;
        get block(): $LevelBlock;
        get animal(): boolean;
        get teamId(): string;
        get facing(): $Direction;
        get waterCreature(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        get self(): boolean;
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
        create(arg0: $Level_): T;
        create(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        static create(arg0: $CompoundTag_, arg1: $Level_): ($Entity) | undefined;
        is(arg0: $HolderSet_<$EntityType<never>>): boolean;
        is(arg0: $TagKey_<$EntityType<never>>): boolean;
        getDimensions(): $EntityDimensions;
        getDescription(): $Component;
        getCategory(): $MobCategory;
        getWidth(): number;
        canSerialize(): boolean;
        updateInterval(): number;
        trackDeltas(): boolean;
        getBaseClass(): $Class<$Entity>;
        getSpawnAABB(arg0: number, arg1: number, arg2: number): $AABB;
        isBlockDangerous(arg0: $BlockState_): boolean;
        kjs$getKey(): $ResourceKey<any>;
        static appendDefaultStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        clientTrackingRange(): number;
        lambdynlights$getSetting(): $LightSourceSettingEntry;
        static appendCustomNameConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ItemStack_): $Consumer<T>;
        static updateCustomEntityTag(arg0: $Level_, arg1: $Player, arg2: $Entity, arg3: $CustomData): void;
        static loadEntityRecursive(arg0: $CompoundTag_, arg1: $Level_, arg2: $Function_<$Entity, $Entity>): $Entity;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        embPlus$resourceLocation(): $ResourceLocation;
        canSpawnFarFromPlayer(): boolean;
        static loadEntitiesRecursive(arg0: $List_<$Tag_>, arg1: $Level_): $Stream<$Entity>;
        chloride$whitelisted(): boolean;
        static createDefaultStackConfig<T extends $Entity>(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player): $Consumer<T>;
        lambdynlights$getName(): $Component;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        lambdynlights$getId(): $ResourceLocation;
        tryCast(arg0: $Entity): T;
        static byString(arg0: string): ($EntityType<never>) | undefined;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        spawn(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $MobSpawnType_): T;
        spawn(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_, arg4: $MobSpawnType_, arg5: boolean, arg6: boolean): T;
        canSummon(): boolean;
        static getYOffset(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $AABB_): number;
        static by(arg0: $CompoundTag_): ($EntityType<never>) | undefined;
        fireImmune(): boolean;
        kjs$getId(): string;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        getDescriptionId(): string;
        handler$dna000$fabric_object_builder_api_v1$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        getHeight(): number;
        requiredFeatures(): $FeatureFlagSet;
        kjs$asHolder(): $Holder<any>;
        static appendCustomEntityStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
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
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet);
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        get dimensions(): $EntityDimensions;
        get description(): $Component;
        get category(): $MobCategory;
        get width(): number;
        get baseClass(): $Class<$Entity>;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get descriptionId(): string;
        get height(): number;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
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
        static isSpawnPositionOk(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        static fireSpawnPlacementEvent(): void;
        static checkSpawnRules<T extends $Entity>(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        static getHeightmapType(arg0: $EntityType_<never>): $Heightmap$Types;
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        static getPlacementType(arg0: $EntityType_<never>): $SpawnPlacementType;
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
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        canHaveALeashAttachedToIt(): boolean;
        dropLeash(arg0: boolean, arg1: boolean): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        leashTooFarBehaviour(): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        isLeashed(): boolean;
        mayBeLeashed(): boolean;
        setLeashData(arg0: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        canBeLeashed(): boolean;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        getLeashData(): $Leashable$LeashData;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
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
        getResponse(): boolean;
        setResponse(arg0: boolean): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getLastAttacker(): $LivingEntity;
        getHeight(): number;
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
        setOwnerUUID(arg0: $UUID_): void;
        isTame(): boolean;
        getOwnerUUID(): $UUID;
        spawnTamingParticles(arg0: boolean): void;
        unableToMoveToOwner(): boolean;
        tryToTeleportToOwner(): void;
        applyTamingSideEffects(): void;
        shouldTryTeleportToOwner(): boolean;
        wantsToAttack(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        setInSittingPose(arg0: boolean): void;
        isOrderedToSit(): boolean;
        setOrderedToSit(arg0: boolean): void;
        canFlyToOwner(): boolean;
        isInSittingPose(): boolean;
        setTame(arg0: boolean, arg1: boolean): void;
        tame(arg0: $Player): void;
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
        getSerializedName(): string;
        isFriendly(): boolean;
        getNoDespawnDistance(): number;
        getDespawnDistance(): number;
        getMaxInstancesPerChunk(): number;
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
        get serializedName(): string;
        get friendly(): boolean;
        get noDespawnDistance(): number;
        get despawnDistance(): number;
        get maxInstancesPerChunk(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        lineWidth(): number;
        textOpacity(): $Display$IntInterpolator;
        backgroundColor(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    export class $Display$BlockDisplay extends $Display {
        setBlockState(arg0: $BlockState_): void;
        getBlockState(): $BlockState;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
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
        handleStartJump(arg0: number): void;
        handleStopJump(): void;
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
        setBackgroundColor(arg0: number): void;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        cacheDisplay(arg0: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        getTextOpacity(): number;
        getLineWidth(): number;
        setLineWidth(arg0: number): void;
        setTextOpacity(arg0: number): void;
        getBackgroundColor(): number;
        static getAlign(arg0: number): $Display$TextDisplay$Align;
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
        static byName(arg0: string): $EquipmentSlot;
        getFilterFlag(): number;
        getSerializedName(): string;
        isArmor(): boolean;
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
        get serializedName(): string;
        get armor(): boolean;
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
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
    }
    export class $WalkAnimationState implements $AccessorWalkAnimationState {
        update(arg0: number, arg1: number): void;
        position(arg0: number): number;
        position(): number;
        speed(arg0: number): number;
        speed(): number;
        setSpeed(arg0: number): void;
        isMoving(): boolean;
        setPosition(arg0: number): void;
        getSpeedOld(): number;
        setSpeedOld(arg0: number): void;
        constructor();
        get moving(): boolean;
    }
    export class $SlotAccess {
        static of(arg0: $Supplier_<$ItemStack>, arg1: $Consumer_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static forContainer(arg0: $Container, arg1: number): $SlotAccess;
        static forContainer(arg0: $Container, arg1: number, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(arg0: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getCause(): $ServerPlayer;
        setCause(arg0: $ServerPlayer): void;
        getHitEntities(): $Stream<$Entity>;
        getBlocksSetOnFire(): number;
        getDamage(): number;
        setVisualOnly(arg0: boolean): void;
        setDamage(arg0: number): void;
        handler$fia000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        localvar$zdj000$openpartiesandclaims$onSetCause(arg0: $ServerPlayer): $ServerPlayer;
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
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        setItemStack(arg0: $ItemStack_): void;
        setItemTransform(arg0: $ItemDisplayContext_): void;
        getItemTransform(): $ItemDisplayContext;
        getItemStack(): $ItemStack;
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
        emitsAnything(): boolean;
        emitsEvents(): boolean;
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
        startIfStopped(arg0: number): void;
        getAccumulatedTime(): number;
        animateWhen(arg0: boolean, arg1: number): void;
        fastForward(arg0: number, arg1: number): void;
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
        shear(arg0: $SoundSource_): void;
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        getOwner(): $LivingEntity;
        setOwner(arg0: $LivingEntity): void;
        getDuration(): number;
        getRadius(): number;
        setDuration(arg0: number): void;
        addEffect(arg0: $MobEffectInstance): void;
        isWaiting(): boolean;
        setWaiting(arg0: boolean): void;
        getRadiusOnUse(): number;
        setPotionContents(arg0: $PotionContents_): void;
        setWaitTime(arg0: number): void;
        setDurationOnUse(arg0: number): void;
        getParticle(): $ParticleOptions;
        setRadiusOnUse(arg0: number): void;
        setParticle(arg0: $ParticleOptions_): void;
        getRadiusPerTick(): number;
        getWaitTime(): number;
        getDurationOnUse(): number;
        setRadiusPerTick(arg0: number): void;
        setRadius(arg0: number): void;
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
        isPanicking(): boolean;
        getWalkTargetValue(arg0: $BlockPos_, arg1: $LevelReader): number;
        getWalkTargetValue(arg0: $BlockPos_): number;
        followLeashSpeed(): number;
        isPathFinding(): boolean;
        shouldStayCloseToLeashHolder(): boolean;
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
        shadowRadius(): $Display$FloatInterpolator;
        shadowStrength(): $Display$FloatInterpolator;
        transformation(): $Display$GenericInterpolator<$Transformation>;
        billboardConstraints(): $Display$BillboardConstraints;
        brightnessOverride(): number;
        glowColorOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static unpack(arg0: number): $Set<$RelativeMovement>;
        static pack(arg0: $Set_<$RelativeMovement_>): number;
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
        build(arg0: string): $EntityType<$Object>;
        build(): $EntityType<any>;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityType$Builder<$Object>;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityType$Builder<$Object>;
        updateInterval(arg0: number): $EntityType$Builder<$Object>;
        ridingOffset(arg0: number): $EntityType$Builder<$Object>;
        static createNothing<T extends $Entity>(arg0: $MobCategory_): $EntityType$Builder<T>;
        vehicleAttachment(arg0: $Vec3_): $EntityType$Builder<$Object>;
        nameTagOffset(arg0: number): $EntityType$Builder<$Object>;
        clientTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        spawnDimensionsScale(arg0: number): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: $Vec3_[]): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: number[]): $EntityType$Builder<$Object>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<any>;
        canSpawnFarFromPlayer(): $EntityType$Builder<$Object>;
        noSave(): $EntityType$Builder<$Object>;
        immuneTo(...arg0: $Block_[]): $EntityType$Builder<$Object>;
        sized(arg0: number, arg1: number): $EntityType$Builder<$Object>;
        noSummon(): $EntityType$Builder<$Object>;
        fireImmune(): $EntityType$Builder<$Object>;
        eyeHeight(arg0: number): $EntityType$Builder<$Object>;
        requiredFeatures(...arg0: $FeatureFlag[]): $EntityType$Builder<$Object>;
        setTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        setUpdateInterval(arg0: number): $EntityType$Builder<$Object>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<$Object>;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<any>): void;
        fabric_setMobEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Mob<any>): void;
        set trackingRange(value: number);
        set shouldReceiveVelocityUpdates(value: boolean);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        width(): number;
        contents(): $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    export class $EquipmentTable extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        slotDropChances(): $Map<$EquipmentSlot, number>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    export class $PortalProcessor {
        isSamePortal(arg0: $Portal_): boolean;
        updateEntryPosition(arg0: $BlockPos_): void;
        processPortalTeleportation(arg0: $ServerLevel, arg1: $Entity, arg2: boolean): boolean;
        setAsInsidePortalThisTick(arg0: boolean): void;
        getPortalDestination(arg0: $ServerLevel, arg1: $Entity): $DimensionTransition;
        hasExpired(): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        isInsidePortalThisTick(): boolean;
        getPortalTime(): number;
        getEntryPosition(): $BlockPos;
        constructor(arg0: $Portal_, arg1: $BlockPos_);
        set asInsidePortalThisTick(value: boolean);
        get portalLocalTransition(): $Portal$Transition;
        get insidePortalThisTick(): boolean;
        get portalTime(): number;
        get entryPosition(): $BlockPos;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static ignoresLightRequirements(arg0: $MobSpawnType_): boolean;
        static isSpawner(arg0: $MobSpawnType_): boolean;
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
        getIcon(): number;
        static award(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): void;
        static getExperienceValue(arg0: number): number;
        handler$zdd000$openpartiesandclaims$onPlayerTouch(arg0: $Player, arg1: $CallbackInfo): void;
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
        withEyeHeight(arg0: number): $EntityDimensions;
        attachments(): $EntityAttachments;
        static scalable(arg0: number, arg1: number): $EntityDimensions;
        withAttachments(arg0: $EntityAttachments$Builder): $EntityDimensions;
        eyeHeight(): number;
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
        isSaddleable(): boolean;
        equipSaddle(arg0: $ItemStack_, arg1: $SoundSource_): void;
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
        getSerializedName(): string;
        static bySlot(arg0: $EquipmentSlot_): $EquipmentSlotGroup;
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
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getHeight(): number;
        getTransformationInterpolationDuration(): number;
        getTransformationInterpolationDelay(): number;
        setTransformationInterpolationDelay(arg0: number): void;
        setTransformationInterpolationDuration(arg0: number): void;
        static getDataTransformationInterpolationDurationId$axiom_$md$5bc4b9$0(): $EntityDataAccessor<any>;
        updateRenderSubState(arg0: boolean, arg1: number): void;
        getBillboardConstraints(): $Display$BillboardConstraints;
        setGlowColorOverride(arg0: number): void;
        getGlowColorOverride(): number;
        getBrightnessOverride(): $Brightness;
        setBillboardConstraints(arg0: $Display$BillboardConstraints_): void;
        setBrightnessOverride(arg0: $Brightness_): void;
        static createTransformation(arg0: $SynchedEntityData): $Transformation;
        getShadowStrength(): number;
        renderState(): $Display$RenderState;
        setViewRange(arg0: number): void;
        setShadowRadius(arg0: number): void;
        setTransformation(arg0: $Transformation): void;
        getShadowRadius(): number;
        setShadowStrength(arg0: number): void;
        getViewRange(): number;
        static getDataPosRotInterpolationId$axiom_$md$5bc4b9$1(): $EntityDataAccessor<any>;
        getPosRotInterpolationDuration(): number;
        getPackedBrightnessOverride(): number;
        calculateInterpolationProgress(arg0: number): number;
        setPosRotInterpolationDuration(arg0: number): void;
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
        static get dataTransformationInterpolationDurationId$axiom_$md$5bc4b9$0(): $EntityDataAccessor<any>;
        set transformation(value: $Transformation);
        static get dataPosRotInterpolationId$axiom_$md$5bc4b9$1(): $EntityDataAccessor<any>;
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
        convertTo<T extends $Mob>(arg0: $EntityType_<T>, arg1: boolean): T;
        playAmbientSound(): void;
        isSpawnCancelled(): boolean;
        lookAt(arg0: $Entity, arg1: number, arg2: number): void;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        /**
         * @deprecated
         */
        finalizeSpawn(arg0: $ServerLevelAccessor, arg1: $DifficultyInstance, arg2: $MobSpawnType_, arg3: $SpawnGroupData): $SpawnGroupData;
        dropLeash(arg0: boolean, arg1: boolean): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_): void;
        getNavigation(): $PathNavigation;
        handler$ehc000$superbwarfare$getTarget(arg0: $CallbackInfoReturnable<any>): void;
        redirect$gmf000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        populateDefaultEquipmentEnchantments(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        setBodyArmorItem(arg0: $ItemStack_): void;
        isWearingBodyArmor(): boolean;
        isBodyArmorItem(arg0: $ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        shouldDespawnInPeaceful(): boolean;
        isPersistenceRequired(): boolean;
        isWithinMeleeAttackRange(arg0: $LivingEntity): boolean;
        isWithinRestriction(arg0: $BlockPos_): boolean;
        isWithinRestriction(): boolean;
        canReplaceCurrentItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        enchantSpawnedWeapon(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        canReplaceEqualItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        canFireProjectileWeapon(arg0: $ProjectileWeaponItem): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        dropPreservedEquipment(arg0: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        dropPreservedEquipment(): void;
        equipItemIfPossible(arg0: $ItemStack_): $ItemStack;
        onOffspringSpawnedFromEgg(arg0: $Player, arg1: $Mob): void;
        setPathfindingMalus(arg0: $PathType_, arg1: number): void;
        static getEquipmentForSlot(arg0: $EquipmentSlot_, arg1: number): $Item;
        static createMobAttributes(): $AttributeSupplier$Builder;
        getAmbientSoundInterval(): number;
        getPathfindingMalus(arg0: $PathType_): number;
        getEquipmentDropChance(arg0: $EquipmentSlot_): number;
        clampHeadRotationToBody(): void;
        leashTooFarBehaviour(): void;
        getAttackBoundingBox(): $AABB;
        requiresCustomPersistence(): boolean;
        getMaxSpawnClusterSize(): number;
        enchantSpawnedArmor(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $EquipmentSlot_, arg3: $DifficultyInstance): void;
        setNoAi(arg0: boolean): void;
        getSensing(): $Sensing;
        ate(): void;
        isNoAi(): boolean;
        setXxa(arg0: number): void;
        pickUpItem(arg0: $ItemEntity): void;
        setYya(arg0: number): void;
        setZza(arg0: number): void;
        restrictTo(arg0: $BlockPos_, arg1: number): void;
        handler$zep000$openpartiesandclaims$onAiStepItemPickup(arg0: $CallbackInfo, arg1: $Vec3i, arg2: $Iterator<any>, arg3: $ItemEntity): void;
        getLookControl(): $LookControl;
        getJumpControl(): $JumpControl;
        onPathfindingDone(): void;
        getTargetFromBrain(): $LivingEntity;
        getAmbientSound(): $SoundEvent;
        onPathfindingStart(): void;
        registerGoals(): void;
        createBodyControl(): $BodyRotationControl;
        getMoveControl(): $MoveControl;
        getMaxHeadXRot(): number;
        static checkMobSpawnRules(arg0: $EntityType_<$Mob>, arg1: $LevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        canPickUpLoot(): boolean;
        createNavigation(arg0: $Level_): $PathNavigation;
        canHoldItem(arg0: $ItemStack_): boolean;
        isSunBurnTick(): boolean;
        getBodyArmorItem(): $ItemStack;
        getRestrictRadius(): number;
        setLeftHanded(arg0: boolean): void;
        wantsToPickUp(arg0: $ItemStack_): boolean;
        customServerAiStep(): void;
        setLeashData(arg0: $Leashable$LeashData): void;
        hasRestriction(): boolean;
        setAggressive(arg0: boolean): void;
        isAggressive(): boolean;
        removeAllGoals(arg0: $Predicate_<$Goal>): void;
        removeWhenFarAway(arg0: number): boolean;
        getMaxHeadYRot(): number;
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        setGuaranteedDrop(arg0: $EquipmentSlot_): void;
        removeFreeWill(): void;
        getSpawnType(): $MobSpawnType;
        setCanPickUpLoot(arg0: boolean): void;
        stopInPlace(): void;
        getHeadRotSpeed(): number;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        getPickupReach(): $Vec3i;
        getRestrictCenter(): $BlockPos;
        sendDebugPackets(): void;
        canBeLeashed(): boolean;
        setSpawnCancelled(arg0: boolean): void;
        clearRestriction(): void;
        playAttackSound(): void;
        isLeftHanded(): boolean;
        getLeashData(): $Leashable$LeashData;
        updateControlFlags(): void;
        checkSpawnRules(arg0: $LevelAccessor, arg1: $MobSpawnType_): boolean;
        handler$zel000$openpartiesandclaims$onAiStepPost(arg0: $CallbackInfo): void;
        handler$zel000$openpartiesandclaims$onAiStepPre(arg0: $CallbackInfo): void;
        checkSpawnObstruction(arg0: $LevelReader): boolean;
        setPersistenceRequired(): void;
        modifyExpressionValue$gel000$create$mobRidingContraptionsMaintainTheirAttackBox(arg0: $Entity): $Entity;
        spawnAnim(): void;
        shouldPassengersInheritMalus(): boolean;
        populateDefaultEquipmentSlots(arg0: $RandomSource, arg1: $DifficultyInstance): void;
        setItemSlotAndDropWhenKilled(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        canHaveALeashAttachedToIt(): boolean;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        isLeashed(): boolean;
        mayBeLeashed(): boolean;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
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
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get wearingBodyArmor(): boolean;
        set baby(value: boolean);
        get ambientSoundInterval(): number;
        get attackBoundingBox(): $AABB;
        get maxSpawnClusterSize(): number;
        get sensing(): $Sensing;
        get targetFromBrain(): $LivingEntity;
        get ambientSound(): $SoundEvent;
        get maxHeadXRot(): number;
        get sunBurnTick(): boolean;
        get restrictRadius(): number;
        get maxHeadYRot(): number;
        set guaranteedDrop(value: $EquipmentSlot_);
        get spawnType(): $MobSpawnType;
        get headRotSpeed(): number;
        get pickupReach(): $Vec3i;
        get restrictCenter(): $BlockPos;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
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
        getClamped(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        static createDefault(arg0: number, arg1: number): $EntityAttachments;
        getNullable(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        constructor(arg0: $Map_<$EntityAttachment_, $List_<$Vec3_>>);
    }
    export class $EntitySelector {
        static withinDistance(arg0: number, arg1: number, arg2: number, arg3: number): $Predicate<$Entity>;
        static pushableBy(arg0: $Entity): $Predicate<$Entity>;
        static notRiding(arg0: $Entity): $Predicate<$Entity>;
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
        getAge(): number;
        canBreed(): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        ageUp(arg0: number): void;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $AgeableMob;
        ageBoundaryReached(): void;
        setAge(arg0: number): void;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
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
        boostFactor(): number;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        boost(arg0: $RandomSource): boolean;
        onSynced(): void;
        setSaddle(arg0: boolean): void;
        tickBoost(): void;
        hasSaddle(): boolean;
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
        setLastHurtByPlayer(arg0: $Player): void;
        canAttack(arg0: $LivingEntity): boolean;
        getLastHurtByMob(): $LivingEntity;
        setLastHurtByMob(arg0: $LivingEntity): void;
        isAngry(): boolean;
        isAngryAt(arg0: $LivingEntity): boolean;
        updatePersistentAnger(arg0: $ServerLevel, arg1: boolean): void;
        getPersistentAngerTarget(): $UUID;
        addPersistentAngerSaveData(arg0: $CompoundTag_): void;
        setPersistentAngerTarget(arg0: $UUID_): void;
        startPersistentAngerTimer(): void;
        isAngryAtAllPlayers(arg0: $Level_): boolean;
        stopBeingAngry(): void;
        playerDied(arg0: $Player): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        getRemainingPersistentAngerTime(): number;
        readPersistentAngerSaveData(arg0: $Level_, arg1: $CompoundTag_): void;
        setRemainingPersistentAngerTime(arg0: number): void;
        set lastHurtByPlayer(value: $Player);
        get angry(): boolean;
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        increaseGroupSizeByOne(): void;
        getBabySpawnChance(): number;
        isShouldSpawnBaby(): boolean;
        getGroupSize(): number;
        constructor(arg0: number);
        constructor(arg0: boolean);
        get babySpawnChance(): number;
        get shouldSpawnBaby(): boolean;
        get groupSize(): number;
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
