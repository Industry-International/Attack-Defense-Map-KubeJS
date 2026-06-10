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
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $ZombifiedPiglin, $Stray, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
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
import { $CustomShieldResult } from "@package/me/muksc/tacztweaks/feature/datapack/shield";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/dev/tr7zw/transition/mixin";
import { $ChunkPos, $Level_, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $SlideDataHolder } from "@package/me/muksc/tacztweaks/mixininterface/feature/synced_slide";
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
import { $CustomShieldEntity } from "@package/me/muksc/tacztweaks/mixininterface/feature/datapack/shield";
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
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $GunAttributeSyncState, $SpecialHurtable, $MobEffectForceApplicable, $EntityLivingBaseAccessor, $EntityLivingBaseAccessor$1, $DamageAccess, $ICustomKnockback, $LivingEntityKJS, $LivingEntityAccessor, $LivingEntityStickExtension, $LivingEntityMovementExtension, $KnockBackModifier, $IGunOperator, $CustomShieldEntity, $SlideDataHolder, $ILivingEntity, $StepSoundSource, $BeastEntityKiller {
        getAttributes(): $AttributeMap;
        getAttribute(arg0: $Holder_<$Attribute>): $AttributeInstance;
        reload(): void;
        take(arg0: $Entity, arg1: number): void;
        getAttributeValue(arg0: $Holder_<$Attribute>): number;
        aim(arg0: boolean): void;
        draw(arg0: $Supplier_<any>): void;
        handler$egj000$superbwarfare$getHealth(arg0: $CallbackInfoReturnable<any>): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        handler$egj000$superbwarfare$onRemove(arg0: $Entity$RemovalReason_, arg1: $CallbackInfo): void;
        getHitbox(): $AABB;
        getHurtDir(): number;
        isHolding(arg0: $Item_): boolean;
        isHolding(arg0: $Predicate_<$ItemStack>): boolean;
        hurtArmor(arg0: $DamageSource_, arg1: number): void;
        aiStep(): void;
        canUseSlot(arg0: $EquipmentSlot_): boolean;
        travel(arg0: $Vec3_): void;
        getSpeed(): number;
        isImmobile(): boolean;
        tickRidden(arg0: $Player, arg1: $Vec3_): void;
        getMainArm(): $HumanoidArm;
        setJumping(arg0: boolean): void;
        doPush(arg0: $Entity): void;
        eat(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        eat(arg0: $Level_, arg1: $ItemStack_, arg2: $FoodProperties_): $ItemStack;
        attackable(): boolean;
        getUseItem(): $ItemStack;
        zoom(): void;
        bolt(): void;
        melee(): void;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>, arg2: number): $ShootResult;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>): $ShootResult;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>, arg2: number, arg3: number): $ShootResult;
        fireSelect(): void;
        crawl(arg0: boolean): void;
        sbw$kill(): void;
        hasInfiniteMaterials(): boolean;
        forceAddEffect(arg0: $MobEffectInstance, arg1: $Entity): void;
        getVisibilityPercent(arg0: $Entity): number;
        updateInvisibilityStatus(): void;
        /**
         * @deprecated
         */
        canBreatheUnderwater(): boolean;
        triggerOnDeathMobEffects(arg0: $Entity$RemovalReason_): void;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        getArmorCoverPercentage(): number;
        setLastHurtByPlayer(arg0: $Player): void;
        isAlwaysExperienceDropper(): boolean;
        getLastHurtMobTimestamp(): number;
        removeEffectParticles(): void;
        getLastHurtByMobTimestamp(): number;
        shouldDiscardFriction(): boolean;
        isInvertedHealAndHarm(): boolean;
        removeEffectNoUpdate(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        getAbsorptionAmount(): number;
        static areAllEffectsAmbient(arg0: $Collection_<$MobEffectInstance>): boolean;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        shouldDropExperience(): boolean;
        getExperienceReward(arg0: $ServerLevel, arg1: $Entity): number;
        getBaseExperienceReward(): number;
        getAttributeBaseValue(arg0: $Holder_<$Attribute>): number;
        isDamageSourceBlocked(arg0: $DamageSource_): boolean;
        sendEffectToPassengers(arg0: $MobEffectInstance): void;
        dropCustomDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: boolean): void;
        calculateFallDamage(arg0: number, arg1: number): number;
        getComfortableFallDistance(arg0: number): number;
        getCurrentSwingDuration(): number;
        getDamageAfterArmorAbsorb(arg0: $DamageSource_, arg1: number): number;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        getLastClimbablePos(): ($BlockPos) | undefined;
        updateWalkAnimation(arg0: number): void;
        getLastDamageSource(): $DamageSource;
        setAbsorptionAmount(arg0: number): void;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        hurtCurrentlyUsedShield(arg0: number): void;
        wasExperienceConsumed(): boolean;
        getDamageAfterMagicAbsorb(arg0: $DamageSource_, arg1: number): number;
        calculateEntityAnimation(arg0: boolean): void;
        shouldRiderFaceForward(arg0: $Player): boolean;
        isAffectedByPotions(): boolean;
        onEquippedItemBroken(arg0: $Item_, arg1: $EquipmentSlot_): void;
        getSpecialHurtFunction2(): $HurtFunction2;
        gunsmith$isInGunMode(): boolean;
        checkAutoSpinAttack(arg0: $AABB_, arg1: $AABB_): void;
        superbWarfare$actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        superbWarfare$hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        getDefaultDimensions(arg0: $Pose_): $EntityDimensions;
        equipmentHasChanged(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        gunsmith$endSpecialHurt(): void;
        triggerItemUseEffects(arg0: $ItemStack_, arg1: number): void;
        updateEffectVisibility(): void;
        getUseItemRemainingTicks(): number;
        gunsmith$setInGunMode(arg0: boolean): void;
        lerpHeadRotationStep(arg0: number, arg1: number): void;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getSpecialHurtFunction1(): $HurtFunction1;
        getEquipmentSlotForItem(arg0: $ItemStack_): $EquipmentSlot;
        gunsmith$usingSpecialHurt(): boolean;
        setRecordPlayingNearby(arg0: $BlockPos_, arg1: boolean): void;
        getLocalBoundsForPose(arg0: $Pose_): $AABB;
        gunsmith$beginSpecialHurt(): void;
        doAutoAttackOnTouch(arg0: $LivingEntity): void;
        tacztweaks$getShieldResult(): $CustomShieldResult;
        tacztweaks$getShouldSlide(): boolean;
        getKnockBackStrength(): number;
        setKnockBackStrength(arg0: number): void;
        resetKnockBackStrength(): void;
        tacztweaks$setShouldSlide(arg0: boolean): void;
        sable$getInheritedVelocity(): $Vector3d;
        getSynShootCoolDown(): number;
        getSynAimingProgress(): number;
        sable$getLerpTarget(): $Vec3;
        updateCacheProperty(arg0: $AttachmentCacheProperty): void;
        getSynMeleeCoolDown(): number;
        tacztweaks$setShieldResult(arg0: $CustomShieldResult): void;
        getProcessedSprintStatus(arg0: boolean): boolean;
        isBaby(): boolean;
        setHealth(arg0: number): void;
        getBrain(): $Brain<never>;
        makeBrain(arg0: $Dynamic<never>): $Brain<never>;
        tickDeath(): void;
        heal(arg0: number): void;
        getEffect(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        getHealth(): number;
        hasEffect(arg0: $Holder_<$MobEffect>): boolean;
        addEffect(arg0: $MobEffectInstance): boolean;
        addEffect(arg0: $MobEffectInstance, arg1: $Entity): boolean;
        canAttack(arg0: $LivingEntity, arg1: $TargetingConditions): boolean;
        canAttack(arg0: $LivingEntity): boolean;
        setSpeed(arg0: number): void;
        knockback(arg0: number, arg1: number, arg2: number): void;
        hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        makeSound(arg0: $SoundEvent_): void;
        die(arg0: $DamageSource_): void;
        isBlocking(): boolean;
        static resetForwardDirectionOfRelativePortalPosition(arg0: $Vec3_): $Vec3;
        static getLivingFlags$reforgedplaymod_$md$9aa1a5$2(): $EntityDataAccessor<any>;
        sable$setupLerp(): void;
        canDisableShield(): boolean;
        sable$applyLerp(): void;
        hasItemInSlot(arg0: $EquipmentSlot_): boolean;
        getDrinkingSound(arg0: $ItemStack_): $SoundEvent;
        getStingerCount(): number;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        getArrowCount(): number;
        setArrowCount(arg0: number): void;
        getArmorValue(): number;
        onClimbable(): boolean;
        getEatingSound(arg0: $ItemStack_): $SoundEvent;
        playBlockFallSound(): void;
        setItemInHand(arg0: $InteractionHand_, arg1: $ItemStack_): void;
        getOffhandItem(): $ItemStack;
        getHandSlots(): $Iterable<$ItemStack>;
        getArmorSlots(): $Iterable<$ItemStack>;
        getAllSlots(): $Iterable<$ItemStack>;
        actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        getFallSounds(): $LivingEntity$Fallsounds;
        doHurtEquipment(arg0: $DamageSource_, arg1: number, ...arg2: $EquipmentSlot_[]): void;
        setStingerCount(arg0: number): void;
        updateSwingTime(): void;
        serverAiStep(): void;
        getRiddenInput(arg0: $Player, arg1: $Vec3_): $Vec3;
        getWaterSlowDown(): number;
        pushEntities(): void;
        isSensitiveToWater(): boolean;
        getFlyingSpeed(): number;
        getRiddenSpeed(arg0: $Player): number;
        getJumpPower(): number;
        getJumpPower(arg0: number): number;
        doHurtTarget(arg0: $Entity): boolean;
        dismountVehicle(arg0: $Entity): void;
        canStandOnFluid(arg0: $FluidState): boolean;
        /**
         * @deprecated
         */
        jumpInLiquid(arg0: $TagKey_<$Fluid>): void;
        jumpFromGround(): void;
        /**
         * @deprecated
         */
        goDownInWater(): void;
        tickHeadTurn(arg0: number, arg1: number): number;
        getJumpBoostPower(): number;
        verifyEquippedItem(arg0: $ItemStack_): void;
        getDismountPoses(): $ImmutableList<$Pose>;
        onLeaveCombat(): void;
        startSleeping(arg0: $BlockPos_): void;
        getBedOrientation(): $Direction;
        static getSlotForHand(arg0: $InteractionHand_): $EquipmentSlot;
        getUsedItemHand(): $InteractionHand;
        completeUsingItem(): void;
        startUsingItem(arg0: $InteractionHand_): void;
        canTakeItem(arg0: $ItemStack_): boolean;
        onEnterCombat(): void;
        updateUsingItem(arg0: $ItemStack_): void;
        getTicksUsingItem(): number;
        getAttackAnim(arg0: number): number;
        getFallFlyingTicks(): number;
        isAutoSpinAttack(): boolean;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        stopUsingItem(): void;
        hasLineOfSight(arg0: $Entity): boolean;
        onItemPickup(arg0: $ItemEntity): void;
        clearSleepingPos(): void;
        getProjectile(arg0: $ItemStack_): $ItemStack;
        wrapOperation$dpo000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        handler$cfj000$fabric_entity_events_v1$injectElytraTick(arg0: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onDropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        redirect$hcb000$sable$maxAltitude$mixinextras$bridge$458(arg0: number, arg1: number, arg2: $LocalRef<any>): number;
        redirect$cfe000$fabric_entity_events_v1$beforeEntityKilled(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): boolean;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: $Vec3_): $Vec3;
        superbWarfare$getSoundVolume(): number;
        superbWarfare$getKnockbackStrength(): number;
        superbWarfare$playHurtSound(arg0: $DamageSource_): void;
        superbwarfare$getDamageContainers(): $Stack<any>;
        getMaxHeadRotationRelativeToBody(): number;
        superbWarfare$setKnockbackStrength(arg0: number): void;
        isSuppressingSlidingDownLadder(): boolean;
        wouldNotSuffocateAtTargetPose(arg0: $Pose_): boolean;
        getSpecialSetHealthFunction(): $FloatConsumer;
        superbWarfare$getDeathSound(): $SoundEvent;
        gunsmith$forceAddEffectPrime(arg0: $MobEffectInstance, arg1: $Entity): void;
        redirect$hcb000$sable$maxAltitude(arg0: number, arg1: number, arg2: $Entity): number;
        handleRelativeFrictionAndCalculateMovement(arg0: $Vec3_, arg1: number): $Vec3;
        handler$hci000$sable$beforeAnimation(arg0: $Vec3_, arg1: $CallbackInfo): void;
        handler$cel000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        handler$hak001$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        handler$hcb000$sable$jumpFromGround(arg0: $CallbackInfo): void;
        superbWarfare$resetKnockbackStrength(): void;
        superbWarfare$checkTotemDeathProtection(arg0: $DamageSource_): boolean;
        handler$zdk000$openpartiesandclaims$onDie(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        handler$ehb000$superbwarfare$setSprinting(arg0: boolean, arg1: $CallbackInfo): void;
        handler$egj000$superbwarfare$isDeadOrDying(arg0: $CallbackInfoReturnable<any>): void;
        getSynDrawCoolDown(): number;
        consumesAmmoOrNot(): boolean;
        getStepGenerator(arg0: $SoundEngine): $Optional<any>;
        isStepBlocked(): boolean;
        getSynReloadState(): $ReloadState;
        cancelReload(): void;
        getSynIsBolting(): boolean;
        getSynIsAiming(): boolean;
        getDataHolder(): $ShooterDataHolder;
        getCacheProperty(): $AttachmentCacheProperty;
        getSynSprintTime(): number;
        needCheckAmmo(): boolean;
        nextBulletIsTracer(arg0: number): boolean;
        initialData(): void;
        internalSetAbsorptionAmount(arg0: number): void;
        isUsingItem(): boolean;
        getItemInHand(arg0: $InteractionHand_): $ItemStack;
        releaseUsingItem(): void;
        isDeadOrDying(): boolean;
        dropFromLootTable(arg0: $DamageSource_, arg1: boolean): void;
        getDeathSound(): $SoundEvent;
        getSoundVolume(): number;
        getVoicePitch(): number;
        playHurtSound(arg0: $DamageSource_): void;
        getCombatTracker(): $CombatTracker;
        dropEquipment(): void;
        dropExperience(arg0: $Entity): void;
        createWitherRose(arg0: $LivingEntity): void;
        getLootTableSeed(): number;
        getKillCredit(): $LivingEntity;
        getLootTable(): $ResourceKey<$LootTable>;
        dropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_): void;
        indicateDamage(arg0: number, arg1: number): void;
        blockedByShield(arg0: $LivingEntity): void;
        getHurtSound(arg0: $DamageSource_): $SoundEvent;
        getKnockback(arg0: $Entity, arg1: $DamageSource_): number;
        brainProvider(): $Brain$Provider<never>;
        getMaxHealth(): number;
        skipDropExperience(): void;
        getSleepingPos(): ($BlockPos) | undefined;
        shouldDropLoot(): boolean;
        getAgeScale(): number;
        hasLandedInLiquid(): boolean;
        removeFrost(): void;
        getLastAttacker(): $LivingEntity;
        getNoActionTime(): number;
        setNoActionTime(arg0: number): void;
        setDiscardFriction(arg0: boolean): void;
        doesEmitEquipEvent(arg0: $EquipmentSlot_): boolean;
        setLastHurtMob(arg0: $Entity): void;
        getLastHurtMob(): $LivingEntity;
        sanitizeScale(arg0: number): number;
        onEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        decreaseAirSupply(arg0: number): number;
        tryAddFrost(): void;
        tickEffects(): void;
        increaseAirSupply(arg0: number): number;
        getSwimAmount(arg0: number): number;
        canAttackType(arg0: $EntityType_<never>): boolean;
        setLastHurtByMob(arg0: $LivingEntity): void;
        onChangedBlock(arg0: $ServerLevel, arg1: $BlockPos_): void;
        isAffectedByFluids(): boolean;
        getLastHurtByMob(): $LivingEntity;
        removeEffect(arg0: $Holder_<$MobEffect>): boolean;
        removeAllEffects(): boolean;
        canBeSeenByAnyone(): boolean;
        /**
         * @deprecated
         */
        canBeAffected(arg0: $MobEffectInstance): boolean;
        onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity): void;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        isFallFlying(): boolean;
        setSleepingPos(arg0: $BlockPos_): void;
        onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity): void;
        canBeSeenAsEnemy(): boolean;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        getMaxAbsorption(): number;
        stopSleeping(): void;
        blockUsingShield(arg0: $LivingEntity): void;
        onEffectRemoved(arg0: $MobEffectInstance): void;
        swing(arg0: $InteractionHand_, arg1: boolean): void;
        swing(arg0: $InteractionHand_): void;
        isSleeping(): boolean;
        getScale(): number;
        getMainHandItem(): $ItemStack;
        wrapOperation$hcb000$sable$onDismountVehicle(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        handler$zdk000$openpartiesandclaims$onDiePost(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onAddEffect(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfoReturnable<any>): void;
        handler$zdk000$openpartiesandclaims$onDiePre(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        self(): $LivingEntity;
        canDrownInFluidType(arg0: $FluidType_): boolean;
        onDamageTaken(arg0: $DamageContainer): void;
        jumpInFluid(arg0: $FluidType_): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        sinkInFluid(arg0: $FluidType_): void;
        gunsmith$addUnsupportedTypeForSpecialHurt(arg0: $EntityType_<never>, arg1: $Throwable): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        setHeadArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        getReachDistance(): number;
        setLegsArmorItem(item: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getTotalMovementSpeed(): number;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getHeadArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        getMainHandItem(): $ItemStack;
        getChestArmorItem(): $ItemStack;
        getPotionEffects(): $EntityPotionEffectsJS;
        setMainHandItem(item: $ItemStack_): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        getDefaultMovementSpeed(): number;
        setDefaultMovementSpeed(speed: number): void;
        setMovementSpeedAddition(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        isUndead(): boolean;
        getOffHandItem(): $ItemStack;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        setOffHandItem(item: $ItemStack_): void;
        rayTrace(): $KubeRayTraceResult;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        isJumping(): boolean;
        setActiveItemStackUseCount(arg0: number): void;
        getInterpTargetPitch(): number;
        getActiveItemStackUseCount(): number;
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
        getInterpTargetZ(): number;
        getInterpTargetX(): number;
        getInterpTargetY(): number;
        getInterpTargetYaw(): number;
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
        get hitbox(): $AABB;
        get hurtDir(): number;
        get immobile(): boolean;
        get mainArm(): $HumanoidArm;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get armorCoverPercentage(): number;
        get alwaysExperienceDropper(): boolean;
        get lastHurtMobTimestamp(): number;
        get lastHurtByMobTimestamp(): number;
        get invertedHealAndHarm(): boolean;
        get baseExperienceReward(): number;
        get currentSwingDuration(): number;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get affectedByPotions(): boolean;
        get specialHurtFunction2(): $HurtFunction2;
        get useItemRemainingTicks(): number;
        get specialHurtFunction1(): $HurtFunction1;
        get synShootCoolDown(): number;
        get synAimingProgress(): number;
        get synMeleeCoolDown(): number;
        get baby(): boolean;
        get blocking(): boolean;
        static get livingFlags$reforgedplaymod_$md$9aa1a5$2(): $EntityDataAccessor<any>;
        get armorValue(): number;
        get offhandItem(): $ItemStack;
        get handSlots(): $Iterable<$ItemStack>;
        get armorSlots(): $Iterable<$ItemStack>;
        get allSlots(): $Iterable<$ItemStack>;
        get fallSounds(): $LivingEntity$Fallsounds;
        get waterSlowDown(): number;
        get sensitiveToWater(): boolean;
        get flyingSpeed(): number;
        get jumpBoostPower(): number;
        get dismountPoses(): $ImmutableList<$Pose>;
        get bedOrientation(): $Direction;
        get usedItemHand(): $InteractionHand;
        get ticksUsingItem(): number;
        get fallFlyingTicks(): number;
        get autoSpinAttack(): boolean;
        get maxHeadRotationRelativeToBody(): number;
        get suppressingSlidingDownLadder(): boolean;
        get specialSetHealthFunction(): $FloatConsumer;
        get synDrawCoolDown(): number;
        get stepBlocked(): boolean;
        get synReloadState(): $ReloadState;
        get synIsBolting(): boolean;
        get synIsAiming(): boolean;
        get dataHolder(): $ShooterDataHolder;
        get cacheProperty(): $AttachmentCacheProperty;
        get synSprintTime(): number;
        get usingItem(): boolean;
        get deadOrDying(): boolean;
        get deathSound(): $SoundEvent;
        get soundVolume(): number;
        get voicePitch(): number;
        get combatTracker(): $CombatTracker;
        get lootTableSeed(): number;
        get killCredit(): $LivingEntity;
        get lootTable(): $ResourceKey<$LootTable>;
        get ageScale(): number;
        get lastAttacker(): $LivingEntity;
        set discardFriction(value: boolean);
        get affectedByFluids(): boolean;
        get activeEffects(): $Collection<$MobEffectInstance>;
        get fallFlying(): boolean;
        get maxAbsorption(): number;
        get sleeping(): boolean;
        get scale(): number;
        get reachDistance(): number;
        get totalMovementSpeed(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        set movementSpeedAddition(value: number);
        set totalMovementSpeedMultiplier(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        get undead(): boolean;
        get interpTargetPitch(): number;
        get interpTargetZ(): number;
        get interpTargetX(): number;
        get interpTargetY(): number;
        get interpTargetYaw(): number;
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
        push(arg0: $Entity): void;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        push(arg0: $Vec3_): void;
        getDisplayName(): $Component;
        move(arg0: $MoverType_, arg1: $Vec3_): void;
        tick(): void;
        isSupportedBy(arg0: $BlockPos_): boolean;
        getExtension(key: $Object, type: $Class<any>): $Object;
        setExtension(key: $Object, value: $Object): void;
        setLevel(arg0: $Level_): void;
        getDimensions(arg0: $Pose_): $EntityDimensions;
        setUUID(arg0: $UUID_): void;
        removeTag(arg0: string): boolean;
        setTimeout(): void;
        getY(): number;
        getY(arg0: number): number;
        getX(): number;
        getX(arg0: number): number;
        discard(): void;
        setId(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        moveTo(arg0: $Vec3_): void;
        moveTo(arg0: $Vec3_, arg1: number, arg2: number): void;
        moveToBlockPos(arg0: $BlockPos_, arg1: number, arg2: number): void;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        getZ(arg0: number): number;
        getZ(): number;
        setSilent(arg0: boolean): void;
        getBbWidth(): number;
        isInLava(): boolean;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getGravity(): number;
        getEyeY(): number;
        lerpHeadTo(arg0: number, arg1: number): void;
        rideTick(): void;
        stopRiding(): void;
        canFreeze(): boolean;
        distanceTo(arg0: $Entity): number;
        isPickable(): boolean;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isPushable(): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        maxUpStep(): number;
        getPose(): $Pose;
        hasPose(arg0: $Pose_): boolean;
        getOnPos(arg0: number): $BlockPos;
        getOnPos(): $BlockPos;
        setRot(arg0: number, arg1: number): void;
        isOnFire(): boolean;
        getTeam(): $PlayerTeam;
        isAlliedTo(arg0: $Team): boolean;
        isOnSameTeam(arg0: $Entity): boolean;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        nextStep(): number;
        closerThan(arg0: $Entity, arg1: number, arg2: number): boolean;
        closerThan(arg0: $Entity, arg1: number): boolean;
        lavaHurt(): void;
        getTags(): $Set<string>;
        isVehicle(): boolean;
        unRide(): void;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        turn(arg0: number, arg1: number): void;
        addTag(arg0: string): boolean;
        isSwimming(): boolean;
        isFlapping(): boolean;
        isOnRails(): boolean;
        onFlap(): void;
        mirror(arg0: $Mirror_): number;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        revive(): void;
        setPos(arg0: $Vec3_): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setInvisible(arg0: boolean): void;
        handler$jfl000$axiom$isIgnoringBlockTriggers(cir: $CallbackInfoReturnable<any>): void;
        wrapOperation$hcg000$sable$updateEntityAfterFallOn(arg0: $Block_, arg1: $BlockGetter, arg2: $Entity, arg3: $Operation_<any>): void;
        handler$zdc000$openpartiesandclaims$onHandlePortal(arg0: $CallbackInfo): void;
        handler$fjd000$lambdynlights_runtime$onRemove(ci: $CallbackInfo): void;
        wrapOperation$hfg000$sable$occludeFluidOnEyes(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidState;
        weCompanion$setLastJetpackResult(arg0: boolean): void;
        handler$ego000$superbwarfare$turn(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        handler$jhc000$axiom$onTurn(d: number, e: number, ci: $CallbackInfo): void;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): $Vec3;
        fudgePositionAfterSizeChange(arg0: $EntityDimensions_): boolean;
        sable$setLastTrackingSubLevelID(arg0: $UUID_): void;
        sable$getLastTrackingSubLevelID(): $UUID;
        weCompanion$getLastJetpackResult(): boolean;
        hasExactlyOnePlayerPassenger(): boolean;
        isInWaterRainOrBubble(): boolean;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getBlockStateOnLegacy(): $BlockState;
        getBlockSpeedFactor(): number;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        isCustomNameVisible(): boolean;
        getControllingPassenger(): $LivingEntity;
        getPassengerRidingPosition(arg0: $Entity): $Vec3;
        getFluidJumpThreshold(): number;
        checkSlowFallDistance(): void;
        calculateViewVector(arg0: number, arg1: number): $Vec3;
        tryCheckInsideBlocks(): void;
        getRelativePortalPosition(arg0: $Direction$Axis_, arg1: $BlockUtil$FoundRectangle): $Vec3;
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        getMaxHeightFluidType(): $FluidType;
        getTicksRequiredToFreeze(): number;
        sable$getInBlockStatePos(): $BlockPos;
        sable$getPlotPosition(): $Vec3;
        sable$setPlotPosition(arg0: $Vec3_): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getBoundingBoxForCulling(): $AABB;
        getPreciseBodyRotation(arg0: number): number;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        sable$vanillaCollide(arg0: $Vec3_): $Vec3;
        canRide(arg0: $Entity): boolean;
        gameEvent(arg0: $Holder_<$GameEvent>): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Entity): void;
        isInWater(): boolean;
        isSilent(): boolean;
        isInWall(): boolean;
        isInLiquid(): boolean;
        fireImmune(): boolean;
        clearFire(): void;
        baseTick(): void;
        getRandomX(arg0: number): number;
        getRandomY(): number;
        getRandomZ(arg0: number): number;
        isDiscrete(): boolean;
        onGround(): boolean;
        markHurt(): void;
        playSound(arg0: $SoundEvent_): void;
        playSound(arg0: $SoundEvent_, arg1: number, arg2: number): void;
        setPose(arg0: $Pose_): void;
        getServer(): $MinecraftServer;
        getForward(): $Vec3;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        isRemoved(): boolean;
        getPosition(arg0: number): $Vec3;
        kill(): void;
        updateDynamicLightPreviousCoordinates(): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        handler$hbp000$sable$onPositionRider(arg0: $Entity, arg1: $CallbackInfo): void;
        updateInWaterStateAndDoFluidPushing(): boolean;
        handler$jlc000$createdieselgenerators$save(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$jlc002$createdieselgenerators$load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$hfl000$sable$calculateViewVector(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        wrapOperation$hcg000$sable$moveInject(arg0: $Entity, arg1: boolean, arg2: $Vec3_, arg3: $Operation_<any>): void;
        wrapOperation$hfg000$sable$inWaterCheck(arg0: $Entity, arg1: boolean, arg2: $Operation_<any>): void;
        redirect$hcg000$sable$collideRedirect(arg0: $Entity, arg1: $Vec3_): $Vec3;
        redirect$hbp000$sable$fixPassengerSaving(arg0: $CompoundTag_, arg1: string, arg2: $Tag_): $Tag;
        wrapMethod$ckk000$createbigcannons$turn(arg0: number, arg1: number, arg2: $Operation_<any>): void;
        handler$hnh000$sable$subLevelFluidOnEyes(arg0: $CallbackInfo): void;
        handler$hai000$sable$checkInsideBlocks(arg0: $CallbackInfo): void;
        handler$haj000$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        getScoreboardName(): string;
        restoreFrom(arg0: $Entity): void;
        static setViewScale(arg0: number): void;
        canControlVehicle(): boolean;
        /**
         * @deprecated
         */
        fixupDimensions(): void;
        createHoverEvent(): $HoverEvent;
        stopSeenByPlayer(arg0: $ServerPlayer): void;
        onlyOpCanSetNbt(): boolean;
        getRootVehicle(): $Entity;
        setShiftKeyDown(arg0: boolean): void;
        makeStuckInBlock(arg0: $BlockState_, arg1: $Vec3_): void;
        setInvulnerable(arg0: boolean): void;
        getRotationVector(): $Vec2;
        getMotionDirection(): $Direction;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        startSeenByPlayer(arg0: $ServerPlayer): void;
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        ignoreExplosion(arg0: $Explosion): boolean;
        getFirstPassenger(): $Entity;
        copyPosition(arg0: $Entity): void;
        changeDimension(arg0: $DimensionTransition_): $Entity;
        setAsInsidePortal(arg0: $Portal_, arg1: $BlockPos_): void;
        placePortalTicket(arg0: $BlockPos_): void;
        isDescending(): boolean;
        getPickRadius(): number;
        isVisuallyCrawling(): boolean;
        isAttackable(): boolean;
        static getViewScale(): number;
        removePassenger(arg0: $Entity): void;
        broadcastToPlayer(arg0: $ServerPlayer): boolean;
        getEyeHeight(arg0: $Pose_): number;
        getEyeHeight(): number;
        isInvisibleTo(arg0: $Player): boolean;
        getLeashOffset(arg0: number): $Vec3;
        getLeashOffset(): $Vec3;
        setSwimming(arg0: boolean): void;
        onAboveBubbleCol(arg0: boolean): void;
        getKnownMovement(): $Vec3;
        getDynamicLightId(): number;
        getDynamicLightX(): number;
        getDynamicLightY(): number;
        setFluidTypeHeight(arg0: $FluidType_, arg1: number): void;
        isForcedVisible(): boolean;
        isOutOfCamera(): boolean;
        getDynamicLightZ(): number;
        setOutOfCamera(value: boolean): void;
        resetDynamicLight(): void;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        onExplosionHit(arg0: $Entity): void;
        getRemovalReason(): $Entity$RemovalReason;
        shouldInformAdmins(): boolean;
        trackingPosition(): $Vec3;
        checkDespawn(): void;
        veil$getEmitters(): $List<any>;
        getAddEntityPacket(arg0: $ServerEntity): $Packet<$ClientGamePacketListener>;
        veil$addEmitter(arg0: $ParticleEmitter): void;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        setIsInPowderSnow(arg0: boolean): void;
        shouldBeSaved(): boolean;
        unsetRemoved(): void;
        hasPermissions(arg0: number): boolean;
        isAlwaysTicking(): boolean;
        mayInteract(arg0: $Level_, arg1: $BlockPos_): boolean;
        getFabricBalmData(): $CompoundTag;
        setFabricBalmData(arg0: $CompoundTag_): void;
        getPermissionLevel(): number;
        setXaero_OPAC_data(arg0: $EntityData): void;
        getTurretPos(): $BlockPos;
        getXaero_OPAC_data(): $EntityData;
        setTurretPos(arg0: $BlockPos_): void;
        sable$setPosField(arg0: $Vec3_): void;
        getUpVector(arg0: number): $Vec3;
        canBeCollidedWith(): boolean;
        saveAsPassenger(arg0: $CompoundTag_): boolean;
        setGlowing(arg0: boolean): void;
        positionRider(arg0: $Entity, arg1: $Entity$MoveFunction_): void;
        positionRider(arg0: $Entity): void;
        hasPassenger(arg0: $Entity): boolean;
        hasPassenger(arg0: $Predicate_<$Entity>): boolean;
        onPassengerTurned(arg0: $Entity): void;
        isInWaterOrRain(): boolean;
        canAddPassenger(arg0: $Entity): boolean;
        addPassenger(arg0: $Entity): void;
        applyGravity(): void;
        calculateUpVector(arg0: number, arg1: number): $Vec3;
        removeVehicle(): void;
        /**
         * @deprecated
         */
        isEyeInFluid(arg0: $TagKey_<$Fluid>): boolean;
        getViewXRot(arg0: number): number;
        setCustomName(arg0: $Component_): void;
        startRiding(arg0: $Entity): boolean;
        startRiding(arg0: $Entity, arg1: boolean): boolean;
        showVehicleHealth(): boolean;
        isNoGravity(): boolean;
        setAirSupply(arg0: number): void;
        getAttachments(): $EntityAttachments;
        isInWaterOrBubble(): boolean;
        setNoGravity(arg0: boolean): void;
        playSwimSound(arg0: number): void;
        playerTouch(arg0: $Player): void;
        absRotateTo(arg0: number, arg1: number): void;
        dampensVibrations(): boolean;
        getBlockStateOn(): $BlockState;
        setOldPosAndRot(): void;
        playStepSound(arg0: $BlockPos_, arg1: $BlockState_): void;
        newFloatList(...arg0: number[]): $ListTag;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        newDoubleList(...arg0: number[]): $ListTag;
        canCollideWith(arg0: $Entity): boolean;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
        dynamicLightTick(): void;
        setLuminance(luminance: number): void;
        recreateFromPacket(arg0: $ClientboundAddEntityPacket): void;
        getLuminance(): number;
        igniteForTicks(arg0: number): void;
        onBelowWorld(): void;
        causeFallDamage(arg0: number, arg1: number, arg2: $DamageSource_): boolean;
        handleDamageEvent(arg0: $DamageSource_): void;
        animateHurt(arg0: number): void;
        getBbHeight(): number;
        getMaxFallDistance(): number;
        handleEntityEvent(arg0: number): void;
        moveRelative(arg0: number, arg1: $Vec3_): void;
        resetFallDistance(): void;
        isSprinting(): boolean;
        /**
         * @deprecated
         */
        getFluidHeight(arg0: $TagKey_<$Fluid>): number;
        getFluidTypeHeight(arg0: $FluidType_): number;
        shouldShowName(): boolean;
        isFullyFrozen(): boolean;
        setTicksFrozen(arg0: number): void;
        addDeltaMovement(arg0: $Vec3_): void;
        isPassenger(): boolean;
        getBlockJumpFactor(): number;
        getDefaultGravity(): number;
        setSprinting(arg0: boolean): void;
        getInBlockState(): $BlockState;
        refreshDimensions(): void;
        isEffectiveAi(): boolean;
        makeBoundingBox(): $AABB;
        lerpTargetZ(): number;
        getViewYRot(arg0: number): number;
        lerpTargetY(): number;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(arg0: number): void;
        lerpTargetYRot(): number;
        lerpTargetXRot(): number;
        lerpTargetX(): number;
        isVisuallySwimming(): boolean;
        canUsePortal(arg0: boolean): boolean;
        isShiftKeyDown(): boolean;
        setYHeadRot(arg0: number): void;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        getDismountLocationForPassenger(arg0: $LivingEntity): $Vec3;
        isControlledByLocalInstance(): boolean;
        lerpPositionAndRotationStep(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getPassengerAttachmentPoint(arg0: $Entity, arg1: $EntityDimensions_, arg2: number): $Vec3;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        chunkPosition(): $ChunkPos;
        hasGlowingTag(): boolean;
        isCrouching(): boolean;
        checkInsideBlocks(): void;
        igniteForSeconds(arg0: number): void;
        getFireImmuneTicks(): number;
        setBoundingBox(arg0: $AABB_): void;
        static collideBoundingBox(arg0: $Entity, arg1: $Vec3_, arg2: $AABB_, arg3: $Level_, arg4: $List_<$VoxelShape>): $Vec3;
        handlePortal(): void;
        getSwimSound(): $SoundEvent;
        getSwimSplashSound(): $SoundEvent;
        getPositionCodec(): $VecDeltaCodec;
        setPortalCooldown(arg0: number): void;
        setPortalCooldown(): void;
        onInsideBlock(arg0: $BlockState_): void;
        checkBelowWorld(): void;
        ejectPassengers(): void;
        isColliding(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        getTeamColor(): number;
        updateSwimming(): void;
        getPortalCooldown(): number;
        isOnPortalCooldown(): boolean;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        onClientRemoval(): void;
        waterSwimSound(): void;
        getEntityData(): $SynchedEntityData;
        killedEntity(arg0: $ServerLevel, arg1: $LivingEntity): boolean;
        /**
         * @deprecated
         */
        isPushedByFluid(): boolean;
        saveWithoutId(arg0: $CompoundTag_): $CompoundTag;
        getPickResult(): $ItemStack;
        getEyeInFluidType(): $FluidType;
        getEncodeId(): string;
        getCustomName(): $Component;
        distanceToSqr(arg0: $Vec3_): number;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        /**
         * Measures the **square** of a distance of entity to another entity.
         */
        distanceToEntitySqr(arg0: $Entity): number;
        getForgePersistentData(): $CompoundTag;
        isAddedToLevel(): boolean;
        setOnGround(arg0: boolean): void;
        onRemovedFromLevel(): void;
        canStartSwimming(): boolean;
        sendSystemMessage(arg0: $Component_): void;
        onAddedToLevel(): void;
        blockPosition(): $BlockPos;
        isSpectator(): boolean;
        registryAccess(): $RegistryAccess;
        getWeaponItem(): $ItemStack;
        setDeltaMovement(arg0: $Vec3_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        awardKillScore(arg0: $Entity, arg1: number, arg2: $DamageSource_): void;
        spawnAtLocation(arg0: $ItemStack_): $ItemEntity;
        spawnAtLocation(arg0: $ItemStack_, arg1: number): $ItemEntity;
        getYHeadRot(): number;
        captureDrops(): $Collection<$ItemEntity>;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        damageSources(): $DamageSources;
        reapplyPosition(): void;
        getPercentFrozen(): number;
        getMaxAirSupply(): number;
        getTicksFrozen(): number;
        checkFallDamage(arg0: number, arg1: boolean, arg2: $BlockState_, arg3: $BlockPos_): void;
        defineSynchedData(arg0: $SynchedEntityData$Builder): void;
        getDeltaMovement(): $Vec3;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        isInFluidType(): boolean;
        getAirSupply(): number;
        extinguish(): void;
        isInvulnerable(): boolean;
        getSharedFlag(arg0: number): boolean;
        isInvisible(): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getStringUuid(): string;
        isInvulnerableTo(arg0: $DamageSource_): boolean;
        getSoundSource(): $SoundSource;
        getHorizontalFacing(): $Direction;
        interactAt(arg0: $Player, arg1: $Vec3_, arg2: $InteractionHand_): $InteractionResult;
        getBlockY(): number;
        getBlockZ(): number;
        interact(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        getBlockX(): number;
        getUuid(): $UUID;
        getVehicle(): $Entity;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Vec3_): void;
        handler$dmg001$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        handler$hfg000$sable$updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<any>, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$ehf000$superbwarfare$playSteelPipeDropSound(arg0: boolean, arg1: $Vec3_, arg2: $CallbackInfo): void;
        handler$zdc000$openpartiesandclaims$onIsInvulnerableTo(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$ifj000$create_sa$create$onFireImmune(arg0: boolean): boolean;
        handler$hcg000$sable$tickInject(arg0: $CallbackInfo): void;
        getSwimHighSpeedSplashSound(): $SoundEvent;
        static getDefaultPassengerAttachmentPoint(arg0: $Entity, arg1: $Entity, arg2: $EntityAttachments): $Vec3;
        updateDynamicGameEventListener(arg0: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        handler$hcg000$sable$moveInject(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        removeAfterChangingDimensions(): void;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState, arg5: number): number;
        updateFluidHeightAndDoFluidPushing(): void;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        handler$hbp000$sable$onRidingTick(arg0: $CallbackInfo): void;
        getPrimaryStepSoundBlockPos(arg0: $BlockPos_): $BlockPos;
        playEntityOnFireExtinguishedSound(): void;
        handler$hbp000$sable$moveRelative(arg0: number, arg1: $Vec3_, arg2: $CallbackInfo): void;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        getBoundingBox(): $AABB;
        isGlowing(): boolean;
        isUnderWater(): boolean;
        getLookAngle(): $Vec3;
        getEyePosition(): $Vec3;
        getEyePosition(arg0: number): $Vec3;
        getViewVector(arg0: number): $Vec3;
        thunderHit(arg0: $ServerLevel, arg1: $LightningBolt): void;
        deflection(arg0: $Projectile): $ProjectileDeflection;
        isFreezing(): boolean;
        canSprint(): boolean;
        isCulled(): boolean;
        setCulled(value: boolean): void;
        getPersistentData(): $CompoundTag;
        getCommandSenderWorld(): $Level;
        createCommandSourceStack(): $CommandSourceStack;
        adjustSpawnLocation(arg0: $ServerLevel, arg1: $BlockPos_): $BlockPos;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        doWaterSplashEffect(): void;
        spawnSprintParticle(): void;
        playCombinationStepSounds(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_): void;
        checkSupportingBlock(arg0: boolean, arg1: $Vec3_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        setRemainingFireTicks(arg0: number): void;
        getMovementEmission(): $Entity$MovementEmission;
        canSpawnSprintParticle(): boolean;
        setOnGroundWithMovement(arg0: boolean, arg1: $Vec3_): void;
        getDimensionChangingDelay(): number;
        limitPistonMovement(arg0: $Vec3_): $Vec3;
        playMuffledStepSound(arg0: $BlockState_, arg1: $BlockPos_): void;
        getRemainingFireTicks(): number;
        processFlappingMovement(): void;
        maybeBackOffFromEdge(arg0: $Vec3_, arg1: $MoverType_): $Vec3;
        processPortalCooldown(): void;
        handler$blm000$veil$remove(arg0: $CallbackInfo): void;
        isHorizontalCollisionMinor(arg0: $Vec3_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        isSuppressingBounce(): boolean;
        isSteppingCarefully(): boolean;
        skipAttackInteraction(arg0: $Entity): boolean;
        /**
         * @deprecated
         */
        couldAcceptPassenger(): boolean;
        dismountsUnderwater(): boolean;
        displayFireAnimation(): boolean;
        getVehicleAttachmentPoint(arg0: $Entity): $Vec3;
        isIgnoringBlockTriggers(): boolean;
        getNearestViewDirection(): $Direction;
        onInsideBubbleColumn(arg0: boolean): void;
        getSelfAndPassengers(): $Stream<$Entity>;
        getHandHoldingItemAngle(arg0: $Item_): $Vec3;
        canChangeDimensions(arg0: $Level_, arg1: $Level_): boolean;
        hasControllingPassenger(): boolean;
        canBeHitByProjectile(): boolean;
        countPlayerPassengers(): number;
        hasIndirectPassenger(arg0: $Entity): boolean;
        getControlledVehicle(): $Entity;
        getPistonPushReaction(): $PushReaction;
        repositionEntityAfterLoad(): boolean;
        touchingUnloadedChunk(): boolean;
        getRopeHoldPosition(arg0: number): $Vec3;
        isPassengerOfSameVehicle(arg0: $Entity): boolean;
        getPassengersAndSelf(): $Stream<$Entity>;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getIndirectPassengers(): $Iterable<$Entity>;
        getLightProbePosition(arg0: number): $Vec3;
        setCustomNameVisible(arg0: boolean): void;
        sable$setPosSuperRaw(arg0: $Vec3_): void;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        replaymod$setTrackedYaw(value: number): void;
        sbw$setCurrentHitPart(arg0: $OBB$Part_): void;
        sbw$getCurrentHitPart(): $OBB$Part;
        replaymod$getTrackedPitch(): number;
        getDynamicLightPrevZ(): number;
        getLastDynamicLuminance(): number;
        sable$getTrackingSubLevel(): $SubLevel;
        getDynamicLightPrevX(): number;
        replaymod$setTrackedPitch(value: number): void;
        setLastDynamicLuminance(luminance: number): void;
        replaymod$getTrackedYaw(): number;
        getDynamicLightLevel(): $Level;
        getDynamicLightPrevY(): number;
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        getParts(): $PartEntity<never>[];
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        getFluidMotionScale(arg0: $FluidType_): number;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        isPushedByFluid(arg0: $FluidType_): boolean;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        isEyeInFluidType(arg0: $FluidType_): boolean;
        isMultipartEntity(): boolean;
        getClassification(arg0: boolean): $MobCategory;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        canRiderInteract(): boolean;
        shouldRiderSit(): boolean;
        getPickedResult(arg0: $HitResult): $ItemStack;
        isInFluidType(arg0: $FluidState): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        isInFluidType(arg0: $FluidType_): boolean;
        lambdynlights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        lambdynlights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        getNbt(): $CompoundTag;
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
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setX(x: number): void;
        setY(y: number): void;
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
        spawn(): void;
        setZ(z: number): void;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setRotation(yaw: number, pitch: number): void;
        setMotionY(y: number): void;
        getMotionX(): number;
        setMotionX(x: number): void;
        setMotionZ(z: number): void;
        getMotionY(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
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
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        getMotionZ(): number;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        getServer(): $MinecraftServer;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        getLevel(): $Level;
        getType(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
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
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        getScriptType(): $ScriptType;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
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
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setDynamicLightEnabled(enabled: boolean): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        isDynamicLightEnabled(): boolean;
        getRandom(): $RandomSource;
        getFirstTick(): boolean;
        invokeIsInRain(): boolean;
        callGetTypeName(): $Component;
        getYRot(): number;
        setYRot(arg0: number): void;
        setXRot(arg0: number): void;
        getXRot(): number;
        invokeIsInBubbleColumn(): boolean;
        transition$getRawPosition(): $Vec3;
        catnip$callSetLevel(arg0: $Level_): void;
        transition$setRawPosition(arg0: $Vec3_): void;
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
        set UUID(value: $UUID_);
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
        get inWaterRainOrBubble(): boolean;
        get blockStateOnLegacy(): $BlockState;
        get blockSpeedFactor(): number;
        get controllingPassenger(): $LivingEntity;
        get fluidJumpThreshold(): number;
        get maxHeightFluidType(): $FluidType;
        get ticksRequiredToFreeze(): number;
        get boundingBoxForCulling(): $AABB;
        get inWater(): boolean;
        get inWall(): boolean;
        get inLiquid(): boolean;
        get randomY(): number;
        get discrete(): boolean;
        get forward(): $Vec3;
        get scoreboardName(): string;
        get rootVehicle(): $Entity;
        get rotationVector(): $Vec2;
        get motionDirection(): $Direction;
        get firstPassenger(): $Entity;
        get descending(): boolean;
        get pickRadius(): number;
        get visuallyCrawling(): boolean;
        get attackable(): boolean;
        get knownMovement(): $Vec3;
        get dynamicLightId(): number;
        get dynamicLightX(): number;
        get dynamicLightY(): number;
        get forcedVisible(): boolean;
        get dynamicLightZ(): number;
        get alwaysTicking(): boolean;
        get permissionLevel(): number;
        get inWaterOrRain(): boolean;
        get attachments(): $EntityAttachments;
        get inWaterOrBubble(): boolean;
        get blockStateOn(): $BlockState;
        get bbHeight(): number;
        get maxFallDistance(): number;
        get fullyFrozen(): boolean;
        get passenger(): boolean;
        get blockJumpFactor(): number;
        get defaultGravity(): number;
        get inBlockState(): $BlockState;
        get effectiveAi(): boolean;
        get visuallySwimming(): boolean;
        get controlledByLocalInstance(): boolean;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get crouching(): boolean;
        get fireImmuneTicks(): number;
        get swimSound(): $SoundEvent;
        get swimSplashSound(): $SoundEvent;
        get positionCodec(): $VecDeltaCodec;
        get teamColor(): number;
        get onPortalCooldown(): boolean;
        get onPosLegacy(): $BlockPos;
        get pickResult(): $ItemStack;
        get encodeId(): string;
        get forgePersistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get spectator(): boolean;
        get weaponItem(): $ItemStack;
        get percentFrozen(): number;
        get maxAirSupply(): number;
        get stringUuid(): string;
        get soundSource(): $SoundSource;
        get horizontalFacing(): $Direction;
        get blockY(): number;
        get blockZ(): number;
        get blockX(): number;
        get swimHighSpeedSplashSound(): $SoundEvent;
        get lightLevelDependentMagicValue(): number;
        get underWater(): boolean;
        get lookAngle(): $Vec3;
        get freezing(): boolean;
        get persistentData(): $CompoundTag;
        get commandSenderWorld(): $Level;
        set sharedFlagOnFire(value: boolean);
        get movementEmission(): $Entity$MovementEmission;
        get dimensionChangingDelay(): number;
        get suppressingBounce(): boolean;
        get steppingCarefully(): boolean;
        get ignoringBlockTriggers(): boolean;
        get nearestViewDirection(): $Direction;
        get selfAndPassengers(): $Stream<$Entity>;
        get controlledVehicle(): $Entity;
        get pistonPushReaction(): $PushReaction;
        get passengersAndSelf(): $Stream<$Entity>;
        get indirectPassengers(): $Iterable<$Entity>;
        get dynamicLightPrevZ(): number;
        get dynamicLightPrevX(): number;
        get dynamicLightLevel(): $Level;
        get dynamicLightPrevY(): number;
        get feedbackDisplayName(): $Component;
        get parts(): $PartEntity<never>[];
        get multipartEntity(): boolean;
        get self(): boolean;
        get facing(): $Direction;
        get monster(): boolean;
        get animal(): boolean;
        get frame(): boolean;
        get teamId(): string;
        get teamName(): string;
        get username(): string;
        get block(): $LevelBlock;
        get living(): boolean;
        get player(): boolean;
        get serverPlayer(): boolean;
        get type(): string;
        get profile(): $GameProfile;
        get clientPlayer(): boolean;
        get scriptType(): $ScriptType;
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
        getWidth(): number;
        static getKey(arg0: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        create(arg0: $Level_): T;
        create(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        static create(arg0: $CompoundTag_, arg1: $Level_): ($Entity) | undefined;
        is(arg0: $TagKey_<$EntityType<never>>): boolean;
        is(arg0: $HolderSet_<$EntityType<never>>): boolean;
        getDimensions(): $EntityDimensions;
        spawn(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $MobSpawnType_): T;
        spawn(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_, arg4: $MobSpawnType_, arg5: boolean, arg6: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        getBaseClass(): $Class<$Entity>;
        getSpawnAABB(arg0: number, arg1: number, arg2: number): $AABB;
        isBlockDangerous(arg0: $BlockState_): boolean;
        trackDeltas(): boolean;
        updateInterval(): number;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        getCategory(): $MobCategory;
        kjs$getId(): string;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        requiredFeatures(): $FeatureFlagSet;
        handler$dna000$fabric_object_builder_api_v1$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        tryCast(arg0: $Entity): T;
        static appendCustomEntityStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        static updateCustomEntityTag(arg0: $Level_, arg1: $Player, arg2: $Entity, arg3: $CustomData): void;
        static createDefaultStackConfig<T extends $Entity>(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player): $Consumer<T>;
        chloride$whitelisted(): boolean;
        static appendDefaultStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        static loadEntityRecursive(arg0: $CompoundTag_, arg1: $Level_, arg2: $Function_<$Entity, $Entity>): $Entity;
        static appendCustomNameConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ItemStack_): $Consumer<T>;
        static loadEntitiesRecursive(arg0: $List_<$Tag_>, arg1: $Level_): $Stream<$Entity>;
        canSpawnFarFromPlayer(): boolean;
        clientTrackingRange(): number;
        embPlus$resourceLocation(): $ResourceLocation;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        lambdynlights$getSetting(): $LightSourceSettingEntry;
        lambdynlights$getName(): $Component;
        lambdynlights$getId(): $ResourceLocation;
        static by(arg0: $CompoundTag_): ($EntityType<never>) | undefined;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        fireImmune(): boolean;
        getDescription(): $Component;
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
        canSerialize(): boolean;
        getHeight(): number;
        getDescriptionId(): string;
        kjs$asHolder(): $Holder<any>;
        kjs$getKey(): $ResourceKey<any>;
        canSummon(): boolean;
        static getYOffset(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $AABB_): number;
        static byString(arg0: string): ($EntityType<never>) | undefined;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
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
        get width(): number;
        get dimensions(): $EntityDimensions;
        get baseClass(): $Class<$Entity>;
        get category(): $MobCategory;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get description(): $Component;
        get height(): number;
        get descriptionId(): string;
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
        static fireSpawnPlacementEvent(): void;
        static checkSpawnRules<T extends $Entity>(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
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
        dropLeash(arg0: boolean, arg1: boolean): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        leashTooFarBehaviour(): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        mayBeLeashed(): boolean;
        getLeashData(): $Leashable$LeashData;
        setLeashData(arg0: $Leashable$LeashData): void;
        canBeLeashed(): boolean;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        isLeashed(): boolean;
        canHaveALeashAttachedToIt(): boolean;
        set delayedLeashHolderId(value: number);
        get leashHolder(): $Entity;
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
        getWidth(): number;
        getTarget(): $LivingEntity;
        getHeight(): number;
        getLastAttacker(): $LivingEntity;
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
        setTame(arg0: boolean, arg1: boolean): void;
        tame(arg0: $Player): void;
        isTame(): boolean;
        isOrderedToSit(): boolean;
        wantsToAttack(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        setInSittingPose(arg0: boolean): void;
        canFlyToOwner(): boolean;
        setOrderedToSit(arg0: boolean): void;
        setOwnerUUID(arg0: $UUID_): void;
        spawnTamingParticles(arg0: boolean): void;
        shouldTryTeleportToOwner(): boolean;
        tryToTeleportToOwner(): void;
        applyTamingSideEffects(): void;
        unableToMoveToOwner(): boolean;
        getOwnerUUID(): $UUID;
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
        byDamage(arg0: number, arg1: number): $Crackiness$Level;
        byDamage(arg0: $ItemStack_): $Crackiness$Level;
        byFraction(arg0: number): $Crackiness$Level;
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
        isFriendly(): boolean;
        getNoDespawnDistance(): number;
        getMaxInstancesPerChunk(): number;
        getSerializedName(): string;
        getDespawnDistance(): number;
        isPersistent(): boolean;
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
        get friendly(): boolean;
        get noDespawnDistance(): number;
        get maxInstancesPerChunk(): number;
        get serializedName(): string;
        get despawnDistance(): number;
        get persistent(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        textOpacity(): $Display$IntInterpolator;
        lineWidth(): number;
        backgroundColor(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    export class $Display$BlockDisplay extends $Display {
        setBlockState(arg0: $BlockState_): void;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        getBlockState(): $BlockState;
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
        canJump(): boolean;
        handleStartJump(arg0: number): void;
        handleStopJump(): void;
        getJumpCooldown(): number;
        onPlayerJump(arg0: number): void;
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
        getLineWidth(): number;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        setLineWidth(arg0: number): void;
        cacheDisplay(arg0: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        getTextOpacity(): number;
        setBackgroundColor(arg0: number): void;
        setTextOpacity(arg0: number): void;
        setFlags(arg0: number): void;
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
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
    }
    export class $WalkAnimationState implements $AccessorWalkAnimationState {
        update(arg0: number, arg1: number): void;
        position(arg0: number): number;
        position(): number;
        setSpeed(arg0: number): void;
        speed(arg0: number): number;
        speed(): number;
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
        setVisualOnly(arg0: boolean): void;
        setDamage(arg0: number): void;
        getDamage(): number;
        localvar$zdj000$openpartiesandclaims$onSetCause(arg0: $ServerPlayer): $ServerPlayer;
        handler$fia000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        getBlocksSetOnFire(): number;
        getHitEntities(): $Stream<$Entity>;
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
        set visualOnly(value: boolean);
        get blocksSetOnFire(): number;
        get hitEntities(): $Stream<$Entity>;
    }
    export class $LivingEntity$Fallsounds extends $Record {
        small(): $SoundEvent;
        big(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    export class $Display$ItemDisplay extends $Display {
        getItemStack(): $ItemStack;
        setItemStack(arg0: $ItemStack_): void;
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        setItemTransform(arg0: $ItemDisplayContext_): void;
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
        setDuration(arg0: number): void;
        setDurationOnUse(arg0: number): void;
        getDurationOnUse(): number;
        getParticle(): $ParticleOptions;
        getWaitTime(): number;
        getRadiusOnUse(): number;
        getRadiusPerTick(): number;
        setParticle(arg0: $ParticleOptions_): void;
        setRadiusOnUse(arg0: number): void;
        setPotionContents(arg0: $PotionContents_): void;
        setRadiusPerTick(arg0: number): void;
        setWaitTime(arg0: number): void;
        addEffect(arg0: $MobEffectInstance): void;
        setWaiting(arg0: boolean): void;
        isWaiting(): boolean;
        getRadius(): number;
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
        isPathFinding(): boolean;
        getWalkTargetValue(arg0: $BlockPos_): number;
        getWalkTargetValue(arg0: $BlockPos_, arg1: $LevelReader): number;
        followLeashSpeed(): number;
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
        glowColorOverride(): number;
        billboardConstraints(): $Display$BillboardConstraints;
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
        build(arg0: string): $EntityType<$Object>;
        build(): $EntityType<any>;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityType$Builder<$Object>;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityType$Builder<$Object>;
        ridingOffset(arg0: number): $EntityType$Builder<$Object>;
        updateInterval(arg0: number): $EntityType$Builder<$Object>;
        vehicleAttachment(arg0: $Vec3_): $EntityType$Builder<$Object>;
        nameTagOffset(arg0: number): $EntityType$Builder<$Object>;
        static createNothing<T extends $Entity>(arg0: $MobCategory_): $EntityType$Builder<T>;
        setUpdateInterval(arg0: number): $EntityType$Builder<$Object>;
        setTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        eyeHeight(arg0: number): $EntityType$Builder<$Object>;
        requiredFeatures(...arg0: $FeatureFlag[]): $EntityType$Builder<$Object>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<$Object>;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<any>): void;
        noSave(): $EntityType$Builder<$Object>;
        fabric_setMobEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Mob<any>): void;
        spawnDimensionsScale(arg0: number): $EntityType$Builder<$Object>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<any>;
        passengerAttachments(...arg0: $Vec3_[]): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: number[]): $EntityType$Builder<$Object>;
        canSpawnFarFromPlayer(): $EntityType$Builder<$Object>;
        clientTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        fireImmune(): $EntityType$Builder<$Object>;
        immuneTo(...arg0: $Block_[]): $EntityType$Builder<$Object>;
        sized(arg0: number, arg1: number): $EntityType$Builder<$Object>;
        noSummon(): $EntityType$Builder<$Object>;
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
        getEntryPosition(): $BlockPos;
        getPortalTime(): number;
        hasExpired(): boolean;
        isSamePortal(arg0: $Portal_): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        isInsidePortalThisTick(): boolean;
        updateEntryPosition(arg0: $BlockPos_): void;
        processPortalTeleportation(arg0: $ServerLevel, arg1: $Entity, arg2: boolean): boolean;
        getPortalDestination(arg0: $ServerLevel, arg1: $Entity): $DimensionTransition;
        setAsInsidePortalThisTick(arg0: boolean): void;
        constructor(arg0: $Portal_, arg1: $BlockPos_);
        get entryPosition(): $BlockPos;
        get portalTime(): number;
        get portalLocalTransition(): $Portal$Transition;
        get insidePortalThisTick(): boolean;
        set asInsidePortalThisTick(value: boolean);
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
        static getExperienceValue(arg0: number): number;
        getIcon(): number;
        static award(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): void;
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
        eyeHeight(): number;
        attachments(): $EntityAttachments;
        withEyeHeight(arg0: number): $EntityDimensions;
        makeBoundingBox(arg0: $Vec3_): $AABB;
        makeBoundingBox(arg0: number, arg1: number, arg2: number): $AABB;
        withAttachments(arg0: $EntityAttachments$Builder): $EntityDimensions;
        static scalable(arg0: number, arg1: number): $EntityDimensions;
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
        getSerializedName(): string;
        getOpposite(): $HumanoidArm;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get opposite(): $HumanoidArm;
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
        shouldSave(): boolean;
        shouldDestroy(): boolean;
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
        isSaddled(): boolean;
        getSaddleSoundEvent(): $SoundEvent;
        equipSaddle(arg0: $ItemStack_, arg1: $SoundSource_): void;
        isSaddleable(): boolean;
        get saddled(): boolean;
        get saddleSoundEvent(): $SoundEvent;
        get saddleable(): boolean;
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
        static getDataTransformationInterpolationDurationId$axiom_$md$9aa1a5$0(): $EntityDataAccessor<any>;
        static getDataPosRotInterpolationId$axiom_$md$9aa1a5$1(): $EntityDataAccessor<any>;
        setShadowRadius(arg0: number): void;
        setShadowStrength(arg0: number): void;
        getViewRange(): number;
        getShadowRadius(): number;
        getShadowStrength(): number;
        setTransformation(arg0: $Transformation): void;
        setViewRange(arg0: number): void;
        renderState(): $Display$RenderState;
        getHeight(): number;
        getPosRotInterpolationDuration(): number;
        getPackedBrightnessOverride(): number;
        setPosRotInterpolationDuration(arg0: number): void;
        calculateInterpolationProgress(arg0: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        updateRenderSubState(arg0: boolean, arg1: number): void;
        getBillboardConstraints(): $Display$BillboardConstraints;
        setGlowColorOverride(arg0: number): void;
        static createTransformation(arg0: $SynchedEntityData): $Transformation;
        getBrightnessOverride(): $Brightness;
        setBillboardConstraints(arg0: $Display$BillboardConstraints_): void;
        getGlowColorOverride(): number;
        setBrightnessOverride(arg0: $Brightness_): void;
        setTransformationInterpolationDelay(arg0: number): void;
        getTransformationInterpolationDelay(): number;
        setTransformationInterpolationDuration(arg0: number): void;
        getTransformationInterpolationDuration(): number;
        invokeSetWidth(arg0: number): void;
        invokeSetHeight(arg0: number): void;
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
        static get dataTransformationInterpolationDurationId$axiom_$md$9aa1a5$0(): $EntityDataAccessor<any>;
        static get dataPosRotInterpolationId$axiom_$md$9aa1a5$1(): $EntityDataAccessor<any>;
        set transformation(value: $Transformation);
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
        playAmbientSound(): void;
        isSpawnCancelled(): boolean;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_): void;
        /**
         * @deprecated
         */
        finalizeSpawn(arg0: $ServerLevelAccessor, arg1: $DifficultyInstance, arg2: $MobSpawnType_, arg3: $SpawnGroupData): $SpawnGroupData;
        dropLeash(arg0: boolean, arg1: boolean): void;
        convertTo<T extends $Mob>(arg0: $EntityType_<T>, arg1: boolean): T;
        shouldPassengersInheritMalus(): boolean;
        shouldDespawnInPeaceful(): boolean;
        isPersistenceRequired(): boolean;
        isWithinMeleeAttackRange(arg0: $LivingEntity): boolean;
        canFireProjectileWeapon(arg0: $ProjectileWeaponItem): boolean;
        canReplaceEqualItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getMaxSpawnClusterSize(): number;
        isWithinRestriction(arg0: $BlockPos_): boolean;
        isWithinRestriction(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        enchantSpawnedArmor(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $EquipmentSlot_, arg3: $DifficultyInstance): void;
        equipItemIfPossible(arg0: $ItemStack_): $ItemStack;
        getPathfindingMalus(arg0: $PathType_): number;
        static getEquipmentForSlot(arg0: $EquipmentSlot_, arg1: number): $Item;
        requiresCustomPersistence(): boolean;
        enchantSpawnedWeapon(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        clampHeadRotationToBody(): void;
        dropPreservedEquipment(arg0: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        dropPreservedEquipment(): void;
        static createMobAttributes(): $AttributeSupplier$Builder;
        setPathfindingMalus(arg0: $PathType_, arg1: number): void;
        onOffspringSpawnedFromEgg(arg0: $Player, arg1: $Mob): void;
        leashTooFarBehaviour(): void;
        getAttackBoundingBox(): $AABB;
        getAmbientSoundInterval(): number;
        canReplaceCurrentItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getEquipmentDropChance(arg0: $EquipmentSlot_): number;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        isBodyArmorItem(arg0: $ItemStack_): boolean;
        isWearingBodyArmor(): boolean;
        setBodyArmorItem(arg0: $ItemStack_): void;
        canPickUpLoot(): boolean;
        createBodyControl(): $BodyRotationControl;
        static checkMobSpawnRules(arg0: $EntityType_<$Mob>, arg1: $LevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        createNavigation(arg0: $Level_): $PathNavigation;
        onPathfindingStart(): void;
        onPathfindingDone(): void;
        getLookControl(): $LookControl;
        registerGoals(): void;
        getMaxHeadXRot(): number;
        getMoveControl(): $MoveControl;
        getJumpControl(): $JumpControl;
        getTargetFromBrain(): $LivingEntity;
        getMaxHeadYRot(): number;
        getSpawnType(): $MobSpawnType;
        removeFreeWill(): void;
        setSpawnCancelled(arg0: boolean): void;
        isLeftHanded(): boolean;
        setCanPickUpLoot(arg0: boolean): void;
        getRestrictCenter(): $BlockPos;
        getAmbientSound(): $SoundEvent;
        getBodyArmorItem(): $ItemStack;
        getPickupReach(): $Vec3i;
        wantsToPickUp(arg0: $ItemStack_): boolean;
        removeWhenFarAway(arg0: number): boolean;
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        getRestrictRadius(): number;
        sendDebugPackets(): void;
        customServerAiStep(): void;
        hasRestriction(): boolean;
        getLeashData(): $Leashable$LeashData;
        setAggressive(arg0: boolean): void;
        canHoldItem(arg0: $ItemStack_): boolean;
        isAggressive(): boolean;
        isSunBurnTick(): boolean;
        removeAllGoals(arg0: $Predicate_<$Goal>): void;
        setGuaranteedDrop(arg0: $EquipmentSlot_): void;
        getHeadRotSpeed(): number;
        setLeftHanded(arg0: boolean): void;
        stopInPlace(): void;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        clearRestriction(): void;
        setLeashData(arg0: $Leashable$LeashData): void;
        canBeLeashed(): boolean;
        playAttackSound(): void;
        updateControlFlags(): void;
        getNavigation(): $PathNavigation;
        isNoAi(): boolean;
        setNoAi(arg0: boolean): void;
        getSensing(): $Sensing;
        setYya(arg0: number): void;
        ate(): void;
        setXxa(arg0: number): void;
        setZza(arg0: number): void;
        pickUpItem(arg0: $ItemEntity): void;
        restrictTo(arg0: $BlockPos_, arg1: number): void;
        handler$zel000$openpartiesandclaims$onAiStepPost(arg0: $CallbackInfo): void;
        handler$zel000$openpartiesandclaims$onAiStepPre(arg0: $CallbackInfo): void;
        setBaby(arg0: boolean): void;
        redirect$gmn000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        populateDefaultEquipmentEnchantments(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        handler$ehc000$superbwarfare$getTarget(arg0: $CallbackInfoReturnable<any>): void;
        lookAt(arg0: $Entity, arg1: number, arg2: number): void;
        handler$zep000$openpartiesandclaims$onAiStepItemPickup(arg0: $CallbackInfo, arg1: $Vec3i, arg2: $Iterator<any>, arg3: $ItemEntity): void;
        checkSpawnRules(arg0: $LevelAccessor, arg1: $MobSpawnType_): boolean;
        modifyExpressionValue$gfn000$create$mobRidingContraptionsMaintainTheirAttackBox(arg0: $Entity): $Entity;
        populateDefaultEquipmentSlots(arg0: $RandomSource, arg1: $DifficultyInstance): void;
        setItemSlotAndDropWhenKilled(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        checkSpawnObstruction(arg0: $LevelReader): boolean;
        setPersistenceRequired(): void;
        spawnAnim(): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        mayBeLeashed(): boolean;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        isLeashed(): boolean;
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
        get maxSpawnClusterSize(): number;
        get attackBoundingBox(): $AABB;
        get ambientSoundInterval(): number;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get wearingBodyArmor(): boolean;
        get maxHeadXRot(): number;
        get targetFromBrain(): $LivingEntity;
        get maxHeadYRot(): number;
        get spawnType(): $MobSpawnType;
        get restrictCenter(): $BlockPos;
        get ambientSound(): $SoundEvent;
        get pickupReach(): $Vec3i;
        get restrictRadius(): number;
        get sunBurnTick(): boolean;
        set guaranteedDrop(value: $EquipmentSlot_);
        get headRotSpeed(): number;
        get sensing(): $Sensing;
        set baby(value: boolean);
        set delayedLeashHolderId(value: number);
        get leashHolder(): $Entity;
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
        getNullable(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        getClamped(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        static createDefault(arg0: number, arg1: number): $EntityAttachments;
        constructor(arg0: $Map_<$EntityAttachment_, $List_<$Vec3_>>);
    }
    export class $EntitySelector {
        static pushableBy(arg0: $Entity): $Predicate<$Entity>;
        static notRiding(arg0: $Entity): $Predicate<$Entity>;
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
        getAge(): number;
        ageBoundaryReached(): void;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $AgeableMob;
        canBreed(): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        ageUp(arg0: number): void;
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
        boost(arg0: $RandomSource): boolean;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        boostFactor(): number;
        onSynced(): void;
        setSaddle(arg0: boolean): void;
        hasSaddle(): boolean;
        tickBoost(): void;
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
        addPersistentAngerSaveData(arg0: $CompoundTag_): void;
        setPersistentAngerTarget(arg0: $UUID_): void;
        getPersistentAngerTarget(): $UUID;
        updatePersistentAnger(arg0: $ServerLevel, arg1: boolean): void;
        startPersistentAngerTimer(): void;
        setLastHurtByPlayer(arg0: $Player): void;
        canAttack(arg0: $LivingEntity): boolean;
        stopBeingAngry(): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        setLastHurtByMob(arg0: $LivingEntity): void;
        getLastHurtByMob(): $LivingEntity;
        isAngryAtAllPlayers(arg0: $Level_): boolean;
        playerDied(arg0: $Player): void;
        getRemainingPersistentAngerTime(): number;
        readPersistentAngerSaveData(arg0: $Level_, arg1: $CompoundTag_): void;
        setRemainingPersistentAngerTime(arg0: number): void;
        isAngryAt(arg0: $LivingEntity): boolean;
        isAngry(): boolean;
        set lastHurtByPlayer(value: $Player);
        get angry(): boolean;
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        getGroupSize(): number;
        getBabySpawnChance(): number;
        isShouldSpawnBaby(): boolean;
        increaseGroupSizeByOne(): void;
        constructor(arg0: number);
        constructor(arg0: boolean);
        get groupSize(): number;
        get babySpawnChance(): number;
        get shouldSpawnBaby(): boolean;
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
        itemTransform(): $ItemDisplayContext;
        itemStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
}
