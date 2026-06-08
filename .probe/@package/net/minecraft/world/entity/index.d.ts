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
        isBlocking(): boolean;
        getAttributes(): $AttributeMap;
        getAttribute(arg0: $Holder_<$Attribute>): $AttributeInstance;
        reload(): void;
        take(arg0: $Entity, arg1: number): void;
        aim(arg0: boolean): void;
        getAttributeValue(arg0: $Holder_<$Attribute>): number;
        draw(arg0: $Supplier_<any>): void;
        forceAddEffect(arg0: $MobEffectInstance, arg1: $Entity): void;
        handler$zdk000$openpartiesandclaims$onDropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        wrapOperation$dpo000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        handler$cfj000$fabric_entity_events_v1$injectElytraTick(arg0: $CallbackInfo): void;
        redirect$cfe000$fabric_entity_events_v1$beforeEntityKilled(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): boolean;
        redirect$hbj000$sable$maxAltitude$mixinextras$bridge$452(arg0: number, arg1: number, arg2: $LocalRef<any>): number;
        isDeadOrDying(): boolean;
        hasInfiniteMaterials(): boolean;
        releaseUsingItem(): void;
        isUsingItem(): boolean;
        getItemInHand(arg0: $InteractionHand_): $ItemStack;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        handler$egj000$superbwarfare$onRemove(arg0: $Entity$RemovalReason_, arg1: $CallbackInfo): void;
        handler$egj000$superbwarfare$getHealth(arg0: $CallbackInfoReturnable<any>): void;
        handler$ehb000$superbwarfare$setSprinting(arg0: boolean, arg1: $CallbackInfo): void;
        handler$hbj000$sable$jumpFromGround(arg0: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onDie(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        handleRelativeFrictionAndCalculateMovement(arg0: $Vec3_, arg1: number): $Vec3;
        handler$egj000$superbwarfare$isDeadOrDying(arg0: $CallbackInfoReturnable<any>): void;
        handler$hac001$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        handler$hca000$sable$beforeAnimation(arg0: $Vec3_, arg1: $CallbackInfo): void;
        superbWarfare$resetKnockbackStrength(): void;
        superbWarfare$checkTotemDeathProtection(arg0: $DamageSource_): boolean;
        handler$cel000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        isSleeping(): boolean;
        swing(arg0: $InteractionHand_, arg1: boolean): void;
        swing(arg0: $InteractionHand_): void;
        getMainHandItem(): $ItemStack;
        handler$zdk000$openpartiesandclaims$onAddEffect(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfoReturnable<any>): void;
        handler$zdk000$openpartiesandclaims$onDiePost(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$zdk000$openpartiesandclaims$onDiePre(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        wrapOperation$hbj000$sable$onDismountVehicle(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: $Vec3_): $Vec3;
        static getLivingFlags$reforgedplaymod_$md$6ffaf3$2(): $EntityDataAccessor<any>;
        getScale(): number;
        onChangedBlock(arg0: $ServerLevel, arg1: $BlockPos_): void;
        canAttackType(arg0: $EntityType_<never>): boolean;
        skipDropExperience(): void;
        getSwimAmount(arg0: number): number;
        hasLandedInLiquid(): boolean;
        getSleepingPos(): ($BlockPos) | undefined;
        tickEffects(): void;
        brainProvider(): $Brain$Provider<never>;
        getMaxHealth(): number;
        onEffectRemoved(arg0: $MobEffectInstance): void;
        removeFrost(): void;
        getNoActionTime(): number;
        doesEmitEquipEvent(arg0: $EquipmentSlot_): boolean;
        shouldDropLoot(): boolean;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        tryAddFrost(): void;
        getLastHurtMob(): $LivingEntity;
        getAgeScale(): number;
        increaseAirSupply(arg0: number): number;
        onEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        setDiscardFriction(arg0: boolean): void;
        isAffectedByFluids(): boolean;
        sanitizeScale(arg0: number): number;
        getLastAttacker(): $LivingEntity;
        isFallFlying(): boolean;
        setNoActionTime(arg0: number): void;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        decreaseAirSupply(arg0: number): number;
        getLastHurtByMob(): $LivingEntity;
        setLastHurtMob(arg0: $Entity): void;
        setSleepingPos(arg0: $BlockPos_): void;
        onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity): void;
        setLastHurtByMob(arg0: $LivingEntity): void;
        indicateDamage(arg0: number, arg1: number): void;
        getSoundVolume(): number;
        blockedByShield(arg0: $LivingEntity): void;
        getMaxAbsorption(): number;
        removeAllEffects(): boolean;
        removeEffect(arg0: $Holder_<$MobEffect>): boolean;
        canBeSeenByAnyone(): boolean;
        /**
         * @deprecated
         */
        canBeAffected(arg0: $MobEffectInstance): boolean;
        onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity): void;
        playHurtSound(arg0: $DamageSource_): void;
        canBeSeenAsEnemy(): boolean;
        getHurtSound(arg0: $DamageSource_): $SoundEvent;
        getVoicePitch(): number;
        getDeathSound(): $SoundEvent;
        stopSleeping(): void;
        blockUsingShield(arg0: $LivingEntity): void;
        dropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_): void;
        getLootTable(): $ResourceKey<$LootTable>;
        doHurtEquipment(arg0: $DamageSource_, arg1: number, ...arg2: $EquipmentSlot_[]): void;
        createWitherRose(arg0: $LivingEntity): void;
        getKnockback(arg0: $Entity, arg1: $DamageSource_): number;
        getCombatTracker(): $CombatTracker;
        dropEquipment(): void;
        dropExperience(arg0: $Entity): void;
        dropFromLootTable(arg0: $DamageSource_, arg1: boolean): void;
        getDrinkingSound(arg0: $ItemStack_): $SoundEvent;
        getFallSounds(): $LivingEntity$Fallsounds;
        playBlockFallSound(): void;
        getLootTableSeed(): number;
        onClimbable(): boolean;
        getEatingSound(arg0: $ItemStack_): $SoundEvent;
        getKillCredit(): $LivingEntity;
        getArmorValue(): number;
        actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        canStandOnFluid(arg0: $FluidState): boolean;
        updateSwingTime(): void;
        hasItemInSlot(arg0: $EquipmentSlot_): boolean;
        getJumpPower(): number;
        getJumpPower(arg0: number): number;
        getJumpBoostPower(): number;
        setArrowCount(arg0: number): void;
        getArmorSlots(): $Iterable<$ItemStack>;
        getAllSlots(): $Iterable<$ItemStack>;
        verifyEquippedItem(arg0: $ItemStack_): void;
        dismountVehicle(arg0: $Entity): void;
        getStingerCount(): number;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        /**
         * @deprecated
         */
        jumpInLiquid(arg0: $TagKey_<$Fluid>): void;
        getHandSlots(): $Iterable<$ItemStack>;
        getWaterSlowDown(): number;
        setItemInHand(arg0: $InteractionHand_, arg1: $ItemStack_): void;
        jumpFromGround(): void;
        setStingerCount(arg0: number): void;
        getRiddenInput(arg0: $Player, arg1: $Vec3_): $Vec3;
        getRiddenSpeed(arg0: $Player): number;
        getArrowCount(): number;
        getOffhandItem(): $ItemStack;
        /**
         * @deprecated
         */
        goDownInWater(): void;
        isAutoSpinAttack(): boolean;
        onItemPickup(arg0: $ItemEntity): void;
        doHurtTarget(arg0: $Entity): boolean;
        getFlyingSpeed(): number;
        isSensitiveToWater(): boolean;
        hasLineOfSight(arg0: $Entity): boolean;
        getAttackAnim(arg0: number): number;
        onEnterCombat(): void;
        onLeaveCombat(): void;
        getUsedItemHand(): $InteractionHand;
        updateUsingItem(arg0: $ItemStack_): void;
        stopUsingItem(): void;
        completeUsingItem(): void;
        serverAiStep(): void;
        startUsingItem(arg0: $InteractionHand_): void;
        getTicksUsingItem(): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        pushEntities(): void;
        getFallFlyingTicks(): number;
        canTakeItem(arg0: $ItemStack_): boolean;
        static getSlotForHand(arg0: $InteractionHand_): $EquipmentSlot;
        startSleeping(arg0: $BlockPos_): void;
        getDismountPoses(): $ImmutableList<$Pose>;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getProjectile(arg0: $ItemStack_): $ItemStack;
        canDisableShield(): boolean;
        clearSleepingPos(): void;
        getBedOrientation(): $Direction;
        needCheckAmmo(): boolean;
        sable$setupLerp(): void;
        sable$applyLerp(): void;
        getSynReloadState(): $ReloadState;
        initialData(): void;
        getCacheProperty(): $AttachmentCacheProperty;
        getSynIsBolting(): boolean;
        cancelReload(): void;
        consumesAmmoOrNot(): boolean;
        getSynDrawCoolDown(): number;
        getSynSprintTime(): number;
        getDataHolder(): $ShooterDataHolder;
        nextBulletIsTracer(arg0: number): boolean;
        getSynIsAiming(): boolean;
        isStepBlocked(): boolean;
        getStepGenerator(arg0: $SoundEngine): $Optional<any>;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        shouldDropExperience(): boolean;
        getExperienceReward(arg0: $ServerLevel, arg1: $Entity): number;
        getBaseExperienceReward(): number;
        isAlwaysExperienceDropper(): boolean;
        /**
         * @deprecated
         */
        canBreatheUnderwater(): boolean;
        getLastHurtMobTimestamp(): number;
        getAbsorptionAmount(): number;
        setLastHurtByPlayer(arg0: $Player): void;
        shouldDiscardFriction(): boolean;
        getLastHurtByMobTimestamp(): number;
        triggerOnDeathMobEffects(arg0: $Entity$RemovalReason_): void;
        isDamageSourceBlocked(arg0: $DamageSource_): boolean;
        getLastDamageSource(): $DamageSource;
        calculateFallDamage(arg0: number, arg1: number): number;
        dropCustomDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: boolean): void;
        isInvertedHealAndHarm(): boolean;
        removeEffectNoUpdate(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        wasExperienceConsumed(): boolean;
        getAttributeBaseValue(arg0: $Holder_<$Attribute>): number;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        static areAllEffectsAmbient(arg0: $Collection_<$MobEffectInstance>): boolean;
        sendEffectToPassengers(arg0: $MobEffectInstance): void;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        getLastClimbablePos(): ($BlockPos) | undefined;
        getComfortableFallDistance(arg0: number): number;
        getDamageAfterArmorAbsorb(arg0: $DamageSource_, arg1: number): number;
        getDamageAfterMagicAbsorb(arg0: $DamageSource_, arg1: number): number;
        updateInvisibilityStatus(): void;
        setAbsorptionAmount(arg0: number): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        getCurrentSwingDuration(): number;
        removeEffectParticles(): void;
        getVisibilityPercent(arg0: $Entity): number;
        getArmorCoverPercentage(): number;
        calculateEntityAnimation(arg0: boolean): void;
        isAffectedByPotions(): boolean;
        getDefaultDimensions(arg0: $Pose_): $EntityDimensions;
        gunsmith$beginSpecialHurt(): void;
        gunsmith$setInGunMode(arg0: boolean): void;
        getEquipmentSlotForItem(arg0: $ItemStack_): $EquipmentSlot;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        setRecordPlayingNearby(arg0: $BlockPos_, arg1: boolean): void;
        updateEffectVisibility(): void;
        onEquippedItemBroken(arg0: $Item_, arg1: $EquipmentSlot_): void;
        getSpecialHurtFunction2(): $HurtFunction2;
        getLocalBoundsForPose(arg0: $Pose_): $AABB;
        gunsmith$usingSpecialHurt(): boolean;
        gunsmith$isInGunMode(): boolean;
        updateWalkAnimation(arg0: number): void;
        doAutoAttackOnTouch(arg0: $LivingEntity): void;
        getUseItemRemainingTicks(): number;
        lerpHeadRotationStep(arg0: number, arg1: number): void;
        checkAutoSpinAttack(arg0: $AABB_, arg1: $AABB_): void;
        triggerItemUseEffects(arg0: $ItemStack_, arg1: number): void;
        gunsmith$endSpecialHurt(): void;
        equipmentHasChanged(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getSpecialHurtFunction1(): $HurtFunction1;
        shouldRiderFaceForward(arg0: $Player): boolean;
        superbWarfare$hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        sable$getLerpTarget(): $Vec3;
        setKnockBackStrength(arg0: number): void;
        getKnockBackStrength(): number;
        getProcessedSprintStatus(arg0: boolean): boolean;
        resetKnockBackStrength(): void;
        getSynMeleeCoolDown(): number;
        getSynShootCoolDown(): number;
        updateCacheProperty(arg0: $AttachmentCacheProperty): void;
        getSynAimingProgress(): number;
        superbWarfare$actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        sable$getInheritedVelocity(): $Vector3d;
        isSuppressingSlidingDownLadder(): boolean;
        internalSetAbsorptionAmount(arg0: number): void;
        wouldNotSuffocateAtTargetPose(arg0: $Pose_): boolean;
        getMaxHeadRotationRelativeToBody(): number;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: $Vec3_): $Vec3;
        redirect$hbj000$sable$maxAltitude(arg0: number, arg1: number, arg2: $Entity): number;
        superbWarfare$getDeathSound(): $SoundEvent;
        superbWarfare$setKnockbackStrength(arg0: number): void;
        gunsmith$forceAddEffectPrime(arg0: $MobEffectInstance, arg1: $Entity): void;
        superbwarfare$getDamageContainers(): $Stack<any>;
        superbWarfare$getKnockbackStrength(): number;
        superbWarfare$playHurtSound(arg0: $DamageSource_): void;
        superbWarfare$getSoundVolume(): number;
        getSpecialSetHealthFunction(): $FloatConsumer;
        setHealth(arg0: number): void;
        makeBrain(arg0: $Dynamic<never>): $Brain<never>;
        tickDeath(): void;
        isBaby(): boolean;
        getBrain(): $Brain<never>;
        canAttack(arg0: $LivingEntity, arg1: $TargetingConditions): boolean;
        canAttack(arg0: $LivingEntity): boolean;
        getEffect(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        addEffect(arg0: $MobEffectInstance): boolean;
        addEffect(arg0: $MobEffectInstance, arg1: $Entity): boolean;
        getHealth(): number;
        hasEffect(arg0: $Holder_<$MobEffect>): boolean;
        die(arg0: $DamageSource_): void;
        hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        knockback(arg0: number, arg1: number, arg2: number): void;
        makeSound(arg0: $SoundEvent_): void;
        setSpeed(arg0: number): void;
        heal(arg0: number): void;
        getHitbox(): $AABB;
        getHurtDir(): number;
        hurtArmor(arg0: $DamageSource_, arg1: number): void;
        travel(arg0: $Vec3_): void;
        isImmobile(): boolean;
        isHolding(arg0: $Item_): boolean;
        isHolding(arg0: $Predicate_<$ItemStack>): boolean;
        canUseSlot(arg0: $EquipmentSlot_): boolean;
        getSpeed(): number;
        tickRidden(arg0: $Player, arg1: $Vec3_): void;
        setJumping(arg0: boolean): void;
        doPush(arg0: $Entity): void;
        aiStep(): void;
        getMainArm(): $HumanoidArm;
        getUseItem(): $ItemStack;
        attackable(): boolean;
        eat(arg0: $Level_, arg1: $ItemStack_, arg2: $FoodProperties_): $ItemStack;
        eat(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        zoom(): void;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>): $ShootResult;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>, arg2: number, arg3: number): $ShootResult;
        shoot(arg0: $Supplier_<any>, arg1: $Supplier_<any>, arg2: number): $ShootResult;
        sbw$kill(): void;
        crawl(arg0: boolean): void;
        fireSelect(): void;
        melee(): void;
        bolt(): void;
        self(): $LivingEntity;
        onDamageTaken(arg0: $DamageContainer): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        sinkInFluid(arg0: $FluidType_): void;
        jumpInFluid(arg0: $FluidType_): void;
        canDrownInFluidType(arg0: $FluidType_): boolean;
        gunsmith$addUnsupportedTypeForSpecialHurt(arg0: $EntityType_<never>, arg1: $Throwable): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        rayTrace(): $KubeRayTraceResult;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        setHeadArmorItem(item: $ItemStack_): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        setLegsArmorItem(item: $ItemStack_): void;
        setChestArmorItem(item: $ItemStack_): void;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        setMainHandItem(item: $ItemStack_): void;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getLegsArmorItem(): $ItemStack;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getMainHandItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getChestArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getPotionEffects(): $EntityPotionEffectsJS;
        getHeadArmorItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getReachDistance(): number;
        getTotalMovementSpeed(): number;
        setFeetArmorItem(item: $ItemStack_): void;
        setMovementSpeedAddition(speed: number): void;
        getDefaultMovementSpeed(): number;
        setDefaultMovementSpeed(speed: number): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        isUndead(): boolean;
        getOffHandItem(): $ItemStack;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        setOffHandItem(item: $ItemStack_): void;
        getInterpTargetYaw(): number;
        getInterpTargetX(): number;
        getInterpTargetZ(): number;
        getInterpTargetY(): number;
        getInterpTargetPitch(): number;
        getActiveItemStackUseCount(): number;
        setActiveItemStackUseCount(arg0: number): void;
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
        isJumping(): boolean;
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
        get blocking(): boolean;
        get attributes(): $AttributeMap;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        get sleeping(): boolean;
        static get livingFlags$reforgedplaymod_$md$6ffaf3$2(): $EntityDataAccessor<any>;
        get scale(): number;
        get activeEffects(): $Collection<$MobEffectInstance>;
        get ageScale(): number;
        set discardFriction(value: boolean);
        get affectedByFluids(): boolean;
        get lastAttacker(): $LivingEntity;
        get fallFlying(): boolean;
        get soundVolume(): number;
        get maxAbsorption(): number;
        get voicePitch(): number;
        get deathSound(): $SoundEvent;
        get lootTable(): $ResourceKey<$LootTable>;
        get combatTracker(): $CombatTracker;
        get fallSounds(): $LivingEntity$Fallsounds;
        get lootTableSeed(): number;
        get killCredit(): $LivingEntity;
        get armorValue(): number;
        get jumpBoostPower(): number;
        get armorSlots(): $Iterable<$ItemStack>;
        get allSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get waterSlowDown(): number;
        get offhandItem(): $ItemStack;
        get autoSpinAttack(): boolean;
        get flyingSpeed(): number;
        get sensitiveToWater(): boolean;
        get usedItemHand(): $InteractionHand;
        get ticksUsingItem(): number;
        get fallFlyingTicks(): number;
        get dismountPoses(): $ImmutableList<$Pose>;
        get bedOrientation(): $Direction;
        get synReloadState(): $ReloadState;
        get cacheProperty(): $AttachmentCacheProperty;
        get synIsBolting(): boolean;
        get synDrawCoolDown(): number;
        get synSprintTime(): number;
        get dataHolder(): $ShooterDataHolder;
        get synIsAiming(): boolean;
        get stepBlocked(): boolean;
        get baseExperienceReward(): number;
        get alwaysExperienceDropper(): boolean;
        get lastHurtMobTimestamp(): number;
        get lastHurtByMobTimestamp(): number;
        get invertedHealAndHarm(): boolean;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get currentSwingDuration(): number;
        get armorCoverPercentage(): number;
        get affectedByPotions(): boolean;
        get specialHurtFunction2(): $HurtFunction2;
        get useItemRemainingTicks(): number;
        get specialHurtFunction1(): $HurtFunction1;
        get synMeleeCoolDown(): number;
        get synShootCoolDown(): number;
        get synAimingProgress(): number;
        get suppressingSlidingDownLadder(): boolean;
        get maxHeadRotationRelativeToBody(): number;
        get specialSetHealthFunction(): $FloatConsumer;
        get baby(): boolean;
        get hitbox(): $AABB;
        get hurtDir(): number;
        get immobile(): boolean;
        get mainArm(): $HumanoidArm;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get potionEffects(): $EntityPotionEffectsJS;
        get reachDistance(): number;
        get totalMovementSpeed(): number;
        set movementSpeedAddition(value: number);
        get undead(): boolean;
        get interpTargetYaw(): number;
        get interpTargetX(): number;
        get interpTargetZ(): number;
        get interpTargetY(): number;
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
        getPosition(arg0: number): $Vec3;
        kill(): void;
        getY(): number;
        getY(arg0: number): number;
        getX(): number;
        getX(arg0: number): number;
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
        push(arg0: $Entity): void;
        push(arg0: $Vec3_): void;
        getDisplayName(): $Component;
        move(arg0: $MoverType_, arg1: $Vec3_): void;
        tick(): void;
        isSupportedBy(arg0: $BlockPos_): boolean;
        getExtension(key: $Object, type: $Class<any>): $Object;
        setExtension(key: $Object, value: $Object): void;
        setLevel(arg0: $Level_): void;
        getDimensions(arg0: $Pose_): $EntityDimensions;
        mirror(arg0: $Mirror_): number;
        setTimeout(): void;
        discard(): void;
        setId(arg0: number): void;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        modifyReturnValue$ifb000$create_sa$create$onFireImmune(arg0: boolean): boolean;
        handler$heo000$sable$updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<any>, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$ehf000$superbwarfare$playSteelPipeDropSound(arg0: boolean, arg1: $Vec3_, arg2: $CallbackInfo): void;
        handler$zdc000$openpartiesandclaims$onIsInvulnerableTo(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$dmg001$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        moveTo(arg0: $Vec3_): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        moveTo(arg0: $Vec3_, arg1: number, arg2: number): void;
        moveToBlockPos(arg0: $BlockPos_, arg1: number, arg2: number): void;
        revive(): void;
        setInvisible(arg0: boolean): void;
        getVehicle(): $Entity;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Vec3_): void;
        getZ(arg0: number): number;
        getZ(): number;
        isRemoved(): boolean;
        isSpectator(): boolean;
        blockPosition(): $BlockPos;
        registryAccess(): $RegistryAccess;
        getHorizontalFacing(): $Direction;
        isUnderWater(): boolean;
        isGlowing(): boolean;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        interactAt(arg0: $Player, arg1: $Vec3_, arg2: $InteractionHand_): $InteractionResult;
        interact(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        getBlockZ(): number;
        getBlockX(): number;
        getBlockY(): number;
        getUuid(): $UUID;
        getEyePosition(): $Vec3;
        getEyePosition(arg0: number): $Vec3;
        getViewVector(arg0: number): $Vec3;
        getLookAngle(): $Vec3;
        wrapOperation$heo000$sable$occludeFluidOnEyes(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidState;
        handler$fjc000$lambdynlights_runtime$onRemove(ci: $CallbackInfo): void;
        wrapOperation$hbo000$sable$updateEntityAfterFallOn(arg0: $Block_, arg1: $BlockGetter, arg2: $Entity, arg3: $Operation_<any>): void;
        handler$zdc000$openpartiesandclaims$onHandlePortal(arg0: $CallbackInfo): void;
        handler$imo000$axiom$isIgnoringBlockTriggers(cir: $CallbackInfoReturnable<any>): void;
        reapplyPosition(): void;
        defineSynchedData(arg0: $SynchedEntityData$Builder): void;
        getDeltaMovement(): $Vec3;
        getBoundingBox(): $AABB;
        getAirSupply(): number;
        checkFallDamage(arg0: number, arg1: boolean, arg2: $BlockState_, arg3: $BlockPos_): void;
        damageSources(): $DamageSources;
        getPercentFrozen(): number;
        getStringUuid(): string;
        getSharedFlag(arg0: number): boolean;
        getTicksFrozen(): number;
        isInFluidType(): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        getMaxAirSupply(): number;
        setSharedFlag(arg0: number, arg1: boolean): void;
        extinguish(): void;
        isInvisible(): boolean;
        getSoundSource(): $SoundSource;
        isInvulnerable(): boolean;
        isInvulnerableTo(arg0: $DamageSource_): boolean;
        getYHeadRot(): number;
        getWeaponItem(): $ItemStack;
        captureDrops(): $Collection<$ItemEntity>;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        awardKillScore(arg0: $Entity, arg1: number, arg2: $DamageSource_): void;
        causeFallDamage(arg0: number, arg1: number, arg2: $DamageSource_): boolean;
        animateHurt(arg0: number): void;
        hasCustomName(): boolean;
        getMaxFallDistance(): number;
        spawnAtLocation(arg0: $ItemStack_): $ItemEntity;
        spawnAtLocation(arg0: $ItemStack_, arg1: number): $ItemEntity;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: $Vec3_): void;
        onBelowWorld(): void;
        setSprinting(arg0: boolean): void;
        addDeltaMovement(arg0: $Vec3_): void;
        handleEntityEvent(arg0: number): void;
        shouldShowName(): boolean;
        isSprinting(): boolean;
        getDefaultGravity(): number;
        moveRelative(arg0: number, arg1: $Vec3_): void;
        /**
         * @deprecated
         */
        getFluidHeight(arg0: $TagKey_<$Fluid>): number;
        getBbHeight(): number;
        getBlockJumpFactor(): number;
        handleDamageEvent(arg0: $DamageSource_): void;
        lerpTargetZ(): number;
        lerpTargetY(): number;
        isFullyFrozen(): boolean;
        setTicksFrozen(arg0: number): void;
        lerpTargetXRot(): number;
        getFluidTypeHeight(arg0: $FluidType_): number;
        lerpTargetX(): number;
        lerpTargetYRot(): number;
        getViewYRot(arg0: number): number;
        getInBlockState(): $BlockState;
        setYHeadRot(arg0: number): void;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(arg0: number): void;
        isPassenger(): boolean;
        isEffectiveAi(): boolean;
        isVisuallySwimming(): boolean;
        resetFallDistance(): void;
        refreshDimensions(): void;
        igniteForTicks(arg0: number): void;
        isShiftKeyDown(): boolean;
        dynamicLightTick(): void;
        setLuminance(luminance: number): void;
        getLuminance(): number;
        makeBoundingBox(): $AABB;
        recreateFromPacket(arg0: $ClientboundAddEntityPacket): void;
        canUsePortal(arg0: boolean): boolean;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
        canStartSwimming(): boolean;
        getEncodeId(): string;
        onAddedToLevel(): void;
        getPickResult(): $ItemStack;
        killedEntity(arg0: $ServerLevel, arg1: $LivingEntity): boolean;
        onRemovedFromLevel(): void;
        /**
         * @deprecated
         */
        isPushedByFluid(): boolean;
        getEyeInFluidType(): $FluidType;
        isAddedToLevel(): boolean;
        saveWithoutId(arg0: $CompoundTag_): $CompoundTag;
        getForgePersistentData(): $CompoundTag;
        getBlockSpeedFactor(): number;
        /**
         * @deprecated
         */
        getBlockStateOnLegacy(): $BlockState;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        isInWaterRainOrBubble(): boolean;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        calculateViewVector(arg0: number, arg1: number): $Vec3;
        isCustomNameVisible(): boolean;
        getPassengerRidingPosition(arg0: $Entity): $Vec3;
        getMaxHeightFluidType(): $FluidType;
        getRelativePortalPosition(arg0: $Direction$Axis_, arg1: $BlockUtil$FoundRectangle): $Vec3;
        getControllingPassenger(): $LivingEntity;
        getFluidJumpThreshold(): number;
        getPreciseBodyRotation(arg0: number): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        checkSlowFallDistance(): void;
        tryCheckInsideBlocks(): void;
        getBoundingBoxForCulling(): $AABB;
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        getTicksRequiredToFreeze(): number;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        sable$setPlotPosition(arg0: $Vec3_): void;
        sable$getInBlockStatePos(): $BlockPos;
        sable$vanillaCollide(arg0: $Vec3_): $Vec3;
        sable$getPlotPosition(): $Vec3;
        getPersistentData(): $CompoundTag;
        getCommandSenderWorld(): $Level;
        createCommandSourceStack(): $CommandSourceStack;
        limitPistonMovement(arg0: $Vec3_): $Vec3;
        maybeBackOffFromEdge(arg0: $Vec3_, arg1: $MoverType_): $Vec3;
        isHorizontalCollisionMinor(arg0: $Vec3_): boolean;
        spawnSprintParticle(): void;
        handler$blm000$veil$remove(arg0: $CallbackInfo): void;
        setRemainingFireTicks(arg0: number): void;
        getDimensionChangingDelay(): number;
        getRemainingFireTicks(): number;
        setOnGroundWithMovement(arg0: boolean, arg1: $Vec3_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        processPortalCooldown(): void;
        canSpawnSprintParticle(): boolean;
        checkSupportingBlock(arg0: boolean, arg1: $Vec3_): void;
        processFlappingMovement(): void;
        adjustSpawnLocation(arg0: $ServerLevel, arg1: $BlockPos_): $BlockPos;
        getNearestViewDirection(): $Direction;
        canChangeDimensions(arg0: $Level_, arg1: $Level_): boolean;
        isSteppingCarefully(): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        isPassengerOfSameVehicle(arg0: $Entity): boolean;
        getMovementEmission(): $Entity$MovementEmission;
        repositionEntityAfterLoad(): boolean;
        playMuffledStepSound(arg0: $BlockState_, arg1: $BlockPos_): void;
        getVehicleAttachmentPoint(arg0: $Entity): $Vec3;
        dismountsUnderwater(): boolean;
        playCombinationStepSounds(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_): void;
        isSuppressingBounce(): boolean;
        doWaterSplashEffect(): void;
        /**
         * @deprecated
         */
        couldAcceptPassenger(): boolean;
        getLightProbePosition(arg0: number): $Vec3;
        setCustomNameVisible(arg0: boolean): void;
        getHandHoldingItemAngle(arg0: $Item_): $Vec3;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        canBeHitByProjectile(): boolean;
        hasIndirectPassenger(arg0: $Entity): boolean;
        replaymod$setTrackedPitch(value: number): void;
        onInsideBubbleColumn(arg0: boolean): void;
        getControlledVehicle(): $Entity;
        touchingUnloadedChunk(): boolean;
        replaymod$getTrackedPitch(): number;
        getIndirectPassengers(): $Iterable<$Entity>;
        skipAttackInteraction(arg0: $Entity): boolean;
        countPlayerPassengers(): number;
        replaymod$setTrackedYaw(value: number): void;
        sbw$setCurrentHitPart(arg0: $OBB$Part_): void;
        replaymod$getTrackedYaw(): number;
        getRopeHoldPosition(arg0: number): $Vec3;
        displayFireAnimation(): boolean;
        getPassengersAndSelf(): $Stream<$Entity>;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        getPistonPushReaction(): $PushReaction;
        getDynamicLightLevel(): $Level;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getSelfAndPassengers(): $Stream<$Entity>;
        getDynamicLightPrevX(): number;
        getDynamicLightPrevY(): number;
        getLastDynamicLuminance(): number;
        setLastDynamicLuminance(luminance: number): void;
        sbw$getCurrentHitPart(): $OBB$Part;
        getDynamicLightPrevZ(): number;
        hasControllingPassenger(): boolean;
        isIgnoringBlockTriggers(): boolean;
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
        sable$setPosSuperRaw(arg0: $Vec3_): void;
        sable$getTrackingSubLevel(): $SubLevel;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        updateFluidHeightAndDoFluidPushing(): void;
        hasExactlyOnePlayerPassenger(): boolean;
        static getDefaultPassengerAttachmentPoint(arg0: $Entity, arg1: $Entity, arg2: $EntityAttachments): $Vec3;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): $Vec3;
        weCompanion$setLastJetpackResult(arg0: boolean): void;
        updateDynamicGameEventListener(arg0: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState, arg5: number): number;
        sable$getLastTrackingSubLevelID(): $UUID;
        handler$iof000$axiom$onTurn(d: number, e: number, ci: $CallbackInfo): void;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        handler$ego000$superbwarfare$turn(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        weCompanion$getLastJetpackResult(): boolean;
        removeAfterChangingDimensions(): void;
        fudgePositionAfterSizeChange(arg0: $EntityDimensions_): boolean;
        handler$hbh000$sable$moveRelative(arg0: number, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getPrimaryStepSoundBlockPos(arg0: $BlockPos_): $BlockPos;
        handler$hbh000$sable$onRidingTick(arg0: $CallbackInfo): void;
        sable$setLastTrackingSubLevelID(arg0: $UUID_): void;
        isControlledByLocalInstance(): boolean;
        getDismountLocationForPassenger(arg0: $LivingEntity): $Vec3;
        lerpPositionAndRotationStep(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        getPassengerAttachmentPoint(arg0: $Entity, arg1: $EntityDimensions_, arg2: number): $Vec3;
        playEntityOnFireExtinguishedSound(): void;
        handler$hbo000$sable$moveInject(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getSwimHighSpeedSplashSound(): $SoundEvent;
        handler$hbo000$sable$tickInject(arg0: $CallbackInfo): void;
        isInWall(): boolean;
        clearFire(): void;
        isInLiquid(): boolean;
        fireImmune(): boolean;
        isInWater(): boolean;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setPos(arg0: $Vec3_): void;
        baseTick(): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Entity): void;
        gameEvent(arg0: $Holder_<$GameEvent>): void;
        isDiscrete(): boolean;
        getRandomZ(arg0: number): number;
        getRandomX(arg0: number): number;
        getRandomY(): number;
        isSilent(): boolean;
        playSound(arg0: $SoundEvent_, arg1: number, arg2: number): void;
        playSound(arg0: $SoundEvent_): void;
        markHurt(): void;
        setPose(arg0: $Pose_): void;
        getBbWidth(): number;
        onGround(): boolean;
        getServer(): $MinecraftServer;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        isInLava(): boolean;
        getGravity(): number;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isPickable(): boolean;
        isPushable(): boolean;
        canFreeze(): boolean;
        lerpHeadTo(arg0: number, arg1: number): void;
        rideTick(): void;
        stopRiding(): void;
        getEyeY(): number;
        distanceTo(arg0: $Entity): number;
        hasPose(arg0: $Pose_): boolean;
        isOnFire(): boolean;
        getPose(): $Pose;
        maxUpStep(): number;
        setRot(arg0: number, arg1: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        getOnPos(): $BlockPos;
        getOnPos(arg0: number): $BlockPos;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        nextStep(): number;
        isOnSameTeam(arg0: $Entity): boolean;
        isAlliedTo(arg0: $Team): boolean;
        getTeam(): $PlayerTeam;
        lavaHurt(): void;
        getTags(): $Set<string>;
        addTag(arg0: string): boolean;
        isVehicle(): boolean;
        unRide(): void;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        closerThan(arg0: $Entity, arg1: number): boolean;
        closerThan(arg0: $Entity, arg1: number, arg2: number): boolean;
        turn(arg0: number, arg1: number): void;
        isSwimming(): boolean;
        onFlap(): void;
        isFlapping(): boolean;
        isOnRails(): boolean;
        setSilent(arg0: boolean): void;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        getForward(): $Vec3;
        canRide(arg0: $Entity): boolean;
        setUUID(arg0: $UUID_): void;
        removeTag(arg0: string): boolean;
        getCustomName(): $Component;
        sendSystemMessage(arg0: $Component_): void;
        distanceToSqr(arg0: $Vec3_): number;
        /**
         * Measures the **square** of a distance of entity to another entity.
         */
        distanceToEntitySqr(arg0: $Entity): number;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        setOnGround(arg0: boolean): void;
        chunkPosition(): $ChunkPos;
        getFireImmuneTicks(): number;
        getTeamColor(): number;
        onClientRemoval(): void;
        ejectPassengers(): void;
        setBoundingBox(arg0: $AABB_): void;
        hasGlowingTag(): boolean;
        handlePortal(): void;
        updateSwimming(): void;
        isColliding(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        setPortalCooldown(arg0: number): void;
        setPortalCooldown(): void;
        getPositionCodec(): $VecDeltaCodec;
        getEntityData(): $SynchedEntityData;
        checkBelowWorld(): void;
        isCrouching(): boolean;
        isOnPortalCooldown(): boolean;
        playSwimSound(arg0: number): void;
        isInWaterOrBubble(): boolean;
        getUpVector(arg0: number): $Vec3;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        getSwimSound(): $SoundEvent;
        isInWaterOrRain(): boolean;
        dampensVibrations(): boolean;
        waterSwimSound(): void;
        /**
         * @deprecated
         */
        isEyeInFluid(arg0: $TagKey_<$Fluid>): boolean;
        igniteForSeconds(arg0: number): void;
        setNoGravity(arg0: boolean): void;
        getBlockStateOn(): $BlockState;
        static collideBoundingBox(arg0: $Entity, arg1: $Vec3_, arg2: $AABB_, arg3: $Level_, arg4: $List_<$VoxelShape>): $Vec3;
        applyGravity(): void;
        playerTouch(arg0: $Player): void;
        absRotateTo(arg0: number, arg1: number): void;
        getViewXRot(arg0: number): number;
        calculateUpVector(arg0: number, arg1: number): $Vec3;
        isNoGravity(): boolean;
        getPortalCooldown(): number;
        setOldPosAndRot(): void;
        getSwimSplashSound(): $SoundEvent;
        onInsideBlock(arg0: $BlockState_): void;
        checkInsideBlocks(): void;
        saveAsPassenger(arg0: $CompoundTag_): boolean;
        newDoubleList(...arg0: number[]): $ListTag;
        newFloatList(...arg0: number[]): $ListTag;
        playStepSound(arg0: $BlockPos_, arg1: $BlockState_): void;
        getAttachments(): $EntityAttachments;
        onAboveBubbleCol(arg0: boolean): void;
        makeStuckInBlock(arg0: $BlockState_, arg1: $Vec3_): void;
        isAttackable(): boolean;
        positionRider(arg0: $Entity, arg1: $Entity$MoveFunction_): void;
        positionRider(arg0: $Entity): void;
        getFirstPassenger(): $Entity;
        canBeCollidedWith(): boolean;
        setGlowing(arg0: boolean): void;
        isInvisibleTo(arg0: $Player): boolean;
        isDescending(): boolean;
        addPassenger(arg0: $Entity): void;
        setAsInsidePortal(arg0: $Portal_, arg1: $BlockPos_): void;
        startRiding(arg0: $Entity): boolean;
        startRiding(arg0: $Entity, arg1: boolean): boolean;
        setShiftKeyDown(arg0: boolean): void;
        showVehicleHealth(): boolean;
        copyPosition(arg0: $Entity): void;
        setSwimming(arg0: boolean): void;
        setInvulnerable(arg0: boolean): void;
        restoreFrom(arg0: $Entity): void;
        getScoreboardName(): string;
        changeDimension(arg0: $DimensionTransition_): $Entity;
        setAirSupply(arg0: number): void;
        removeVehicle(): void;
        removePassenger(arg0: $Entity): void;
        getPickRadius(): number;
        canControlVehicle(): boolean;
        isVisuallyCrawling(): boolean;
        canAddPassenger(arg0: $Entity): boolean;
        getRotationVector(): $Vec2;
        setCustomName(arg0: $Component_): void;
        canCollideWith(arg0: $Entity): boolean;
        onPassengerTurned(arg0: $Entity): void;
        hasPassenger(arg0: $Predicate_<$Entity>): boolean;
        hasPassenger(arg0: $Entity): boolean;
        static setViewScale(arg0: number): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        shouldInformAdmins(): boolean;
        mayInteract(arg0: $Level_, arg1: $BlockPos_): boolean;
        getPermissionLevel(): number;
        setFluidTypeHeight(arg0: $FluidType_, arg1: number): void;
        getLeashOffset(): $Vec3;
        getLeashOffset(arg0: number): $Vec3;
        createHoverEvent(): $HoverEvent;
        onExplosionHit(arg0: $Entity): void;
        /**
         * @deprecated
         */
        fixupDimensions(): void;
        acceptsFailure(): boolean;
        onlyOpCanSetNbt(): boolean;
        ignoreExplosion(arg0: $Explosion): boolean;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        getKnownMovement(): $Vec3;
        trackingPosition(): $Vec3;
        static getViewScale(): number;
        startSeenByPlayer(arg0: $ServerPlayer): void;
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        hasPermissions(arg0: number): boolean;
        broadcastToPlayer(arg0: $ServerPlayer): boolean;
        placePortalTicket(arg0: $BlockPos_): void;
        acceptsSuccess(): boolean;
        getRemovalReason(): $Entity$RemovalReason;
        shouldBeSaved(): boolean;
        getMotionDirection(): $Direction;
        getAddEntityPacket(arg0: $ServerEntity): $Packet<$ClientGamePacketListener>;
        stopSeenByPlayer(arg0: $ServerPlayer): void;
        getRootVehicle(): $Entity;
        unsetRemoved(): void;
        getEyeHeight(arg0: $Pose_): number;
        getEyeHeight(): number;
        checkDespawn(): void;
        setIsInPowderSnow(arg0: boolean): void;
        isAlwaysTicking(): boolean;
        getFabricBalmData(): $CompoundTag;
        isForcedVisible(): boolean;
        getDynamicLightX(): number;
        veil$addEmitter(arg0: $ParticleEmitter): void;
        getDynamicLightZ(): number;
        getDynamicLightId(): number;
        setFabricBalmData(arg0: $CompoundTag_): void;
        setOutOfCamera(value: boolean): void;
        getDynamicLightY(): number;
        veil$getEmitters(): $List<any>;
        getTurretPos(): $BlockPos;
        isOutOfCamera(): boolean;
        setTurretPos(arg0: $BlockPos_): void;
        sable$setPosField(arg0: $Vec3_): void;
        resetDynamicLight(): void;
        setXaero_OPAC_data(arg0: $EntityData): void;
        getXaero_OPAC_data(): $EntityData;
        wrapOperation$hbo000$sable$moveInject(arg0: $Entity, arg1: boolean, arg2: $Vec3_, arg3: $Operation_<any>): void;
        handler$jcf002$createdieselgenerators$load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$haa000$sable$checkInsideBlocks(arg0: $CallbackInfo): void;
        redirect$hbh000$sable$fixPassengerSaving(arg0: $CompoundTag_, arg1: string, arg2: $Tag_): $Tag;
        updateInWaterStateAndDoFluidPushing(): boolean;
        handler$hfd000$sable$calculateViewVector(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        wrapMethod$ckk000$createbigcannons$turn(arg0: number, arg1: number, arg2: $Operation_<any>): void;
        wrapOperation$heo000$sable$inWaterCheck(arg0: $Entity, arg1: boolean, arg2: $Operation_<any>): void;
        handler$jcf000$createdieselgenerators$save(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hbh000$sable$onPositionRider(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$hmp000$sable$subLevelFluidOnEyes(arg0: $CallbackInfo): void;
        redirect$hbo000$sable$collideRedirect(arg0: $Entity, arg1: $Vec3_): $Vec3;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        updateDynamicLightPreviousCoordinates(): void;
        handler$hab000$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        thunderHit(arg0: $ServerLevel, arg1: $LightningBolt): void;
        deflection(arg0: $Projectile): $ProjectileDeflection;
        canSprint(): boolean;
        isFreezing(): boolean;
        isCulled(): boolean;
        setCulled(value: boolean): void;
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        getPickedResult(arg0: $HitResult): $ItemStack;
        isInFluidType(arg0: $FluidType_): boolean;
        isInFluidType(arg0: $FluidState): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        getClassification(arg0: boolean): $MobCategory;
        isMultipartEntity(): boolean;
        /**
         * @deprecated
         */
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        isEyeInFluidType(arg0: $FluidType_): boolean;
        isPushedByFluid(arg0: $FluidType_): boolean;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        shouldRiderSit(): boolean;
        canRiderInteract(): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        getFluidMotionScale(arg0: $FluidType_): number;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        getParts(): $PartEntity<never>[];
        lambdynlights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        lambdynlights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
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
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
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
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
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
        setZ(z: number): void;
        getNbt(): $CompoundTag;
        setNbt(nbt: $CompoundTag_): void;
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
        spawn(): void;
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
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        setPosition(x: number, y: number, z: number): void;
        setPosition(block: $LevelBlock): void;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        setMotionZ(z: number): void;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        getMotionZ(): number;
        getLevel(): $Level;
        getType(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
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
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        getMotionY(): number;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getScriptType(): $ScriptType;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        getMotionX(): number;
        setMotionY(y: number): void;
        setMotionX(x: number): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        mergeNbt(tag: $CompoundTag_): $Entity;
        getServer(): $MinecraftServer;
        setDynamicLightEnabled(enabled: boolean): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        isDynamicLightEnabled(): boolean;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        setYRot(arg0: number): void;
        getYRot(): number;
        setXRot(arg0: number): void;
        getXRot(): number;
        catnip$callSetLevel(arg0: $Level_): void;
        invokeIsInBubbleColumn(): boolean;
        transition$setRawPosition(arg0: $Vec3_): void;
        transition$getRawPosition(): $Vec3;
        getRandom(): $RandomSource;
        getFirstTick(): boolean;
        invokeIsInRain(): boolean;
        callGetTypeName(): $Component;
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
        get spectator(): boolean;
        get horizontalFacing(): $Direction;
        get underWater(): boolean;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get blockZ(): number;
        get blockX(): number;
        get blockY(): number;
        get lookAngle(): $Vec3;
        get percentFrozen(): number;
        get stringUuid(): string;
        get maxAirSupply(): number;
        get soundSource(): $SoundSource;
        get weaponItem(): $ItemStack;
        get maxFallDistance(): number;
        get defaultGravity(): number;
        get bbHeight(): number;
        get blockJumpFactor(): number;
        get fullyFrozen(): boolean;
        get inBlockState(): $BlockState;
        get passenger(): boolean;
        get effectiveAi(): boolean;
        get visuallySwimming(): boolean;
        get encodeId(): string;
        get pickResult(): $ItemStack;
        get addedToLevel(): boolean;
        get forgePersistentData(): $CompoundTag;
        get blockSpeedFactor(): number;
        get blockStateOnLegacy(): $BlockState;
        get inWaterRainOrBubble(): boolean;
        get maxHeightFluidType(): $FluidType;
        get controllingPassenger(): $LivingEntity;
        get fluidJumpThreshold(): number;
        get boundingBoxForCulling(): $AABB;
        get ticksRequiredToFreeze(): number;
        get persistentData(): $CompoundTag;
        get commandSenderWorld(): $Level;
        get dimensionChangingDelay(): number;
        set sharedFlagOnFire(value: boolean);
        get nearestViewDirection(): $Direction;
        get steppingCarefully(): boolean;
        get movementEmission(): $Entity$MovementEmission;
        get suppressingBounce(): boolean;
        get controlledVehicle(): $Entity;
        get indirectPassengers(): $Iterable<$Entity>;
        get passengersAndSelf(): $Stream<$Entity>;
        get pistonPushReaction(): $PushReaction;
        get dynamicLightLevel(): $Level;
        get selfAndPassengers(): $Stream<$Entity>;
        get dynamicLightPrevX(): number;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevZ(): number;
        get ignoringBlockTriggers(): boolean;
        get lightLevelDependentMagicValue(): number;
        get controlledByLocalInstance(): boolean;
        get swimHighSpeedSplashSound(): $SoundEvent;
        get inWall(): boolean;
        get inLiquid(): boolean;
        get inWater(): boolean;
        get discrete(): boolean;
        get randomY(): number;
        get bbWidth(): number;
        get inLava(): boolean;
        get gravity(): number;
        get pickable(): boolean;
        get pushable(): boolean;
        get eyeY(): number;
        get onFire(): boolean;
        get team(): $PlayerTeam;
        get tags(): $Set<string>;
        get flapping(): boolean;
        get onRails(): boolean;
        get forward(): $Vec3;
        set UUID(value: $UUID_);
        get fireImmuneTicks(): number;
        get teamColor(): number;
        get positionCodec(): $VecDeltaCodec;
        get crouching(): boolean;
        get onPortalCooldown(): boolean;
        get inWaterOrBubble(): boolean;
        get onPosLegacy(): $BlockPos;
        get swimSound(): $SoundEvent;
        get inWaterOrRain(): boolean;
        get blockStateOn(): $BlockState;
        get swimSplashSound(): $SoundEvent;
        get attachments(): $EntityAttachments;
        get attackable(): boolean;
        get firstPassenger(): $Entity;
        get descending(): boolean;
        get scoreboardName(): string;
        get pickRadius(): number;
        get visuallyCrawling(): boolean;
        get rotationVector(): $Vec2;
        get permissionLevel(): number;
        get knownMovement(): $Vec3;
        get motionDirection(): $Direction;
        get rootVehicle(): $Entity;
        get alwaysTicking(): boolean;
        get forcedVisible(): boolean;
        get dynamicLightX(): number;
        get dynamicLightZ(): number;
        get dynamicLightId(): number;
        get dynamicLightY(): number;
        get freezing(): boolean;
        get feedbackDisplayName(): $Component;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
        get living(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        get waterCreature(): boolean;
        get self(): boolean;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get block(): $LevelBlock;
        get type(): string;
        get profile(): $GameProfile;
        get player(): boolean;
        get teamName(): string;
        get animal(): boolean;
        get scriptType(): $ScriptType;
        get serverPlayer(): boolean;
        get username(): string;
        get monster(): boolean;
        get teamId(): string;
        get facing(): $Direction;
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
        getDescription(): $Component;
        static getKey(arg0: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        create(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        static create(arg0: $CompoundTag_, arg1: $Level_): ($Entity) | undefined;
        create(arg0: $Level_): T;
        is(arg0: $TagKey_<$EntityType<never>>): boolean;
        is(arg0: $HolderSet_<$EntityType<never>>): boolean;
        getDimensions(): $EntityDimensions;
        getWidth(): number;
        tryCast(arg0: $Entity): T;
        getCategory(): $MobCategory;
        static by(arg0: $CompoundTag_): ($EntityType<never>) | undefined;
        getDescriptionId(): string;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getKey(): $ResourceKey<any>;
        getHeight(): number;
        static createDefaultStackConfig<T extends $Entity>(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player): $Consumer<T>;
        static appendDefaultStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        static updateCustomEntityTag(arg0: $Level_, arg1: $Player, arg2: $Entity, arg3: $CustomData): void;
        static loadEntityRecursive(arg0: $CompoundTag_, arg1: $Level_, arg2: $Function_<$Entity, $Entity>): $Entity;
        static loadEntitiesRecursive(arg0: $List_<$Tag_>, arg1: $Level_): $Stream<$Entity>;
        static appendCustomNameConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ItemStack_): $Consumer<T>;
        canSpawnFarFromPlayer(): boolean;
        clientTrackingRange(): number;
        chloride$whitelisted(): boolean;
        embPlus$resourceLocation(): $ResourceLocation;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        lambdynlights$getName(): $Component;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        lambdynlights$getId(): $ResourceLocation;
        lambdynlights$getSetting(): $LightSourceSettingEntry;
        static getYOffset(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $AABB_): number;
        canSummon(): boolean;
        kjs$asHolder(): $Holder<any>;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        fireImmune(): boolean;
        kjs$getId(): string;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        spawn(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_, arg4: $MobSpawnType_, arg5: boolean, arg6: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $MobSpawnType_): T;
        canSerialize(): boolean;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        static byString(arg0: string): ($EntityType<never>) | undefined;
        handler$dna000$fabric_object_builder_api_v1$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        static appendCustomEntityStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
        getSpawnAABB(arg0: number, arg1: number, arg2: number): $AABB;
        isBlockDangerous(arg0: $BlockState_): boolean;
        trackDeltas(): boolean;
        updateInterval(): number;
        getBaseClass(): $Class<$Entity>;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        getIdLocation(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
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
        get description(): $Component;
        get dimensions(): $EntityDimensions;
        get width(): number;
        get category(): $MobCategory;
        get descriptionId(): string;
        get height(): number;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get baseClass(): $Class<$Entity>;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
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
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        static getPlacementType(arg0: $EntityType_<never>): $SpawnPlacementType;
        static getHeightmapType(arg0: $EntityType_<never>): $Heightmap$Types;
        static isSpawnPositionOk(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_): boolean;
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
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        mayBeLeashed(): boolean;
        setLeashData(arg0: $Leashable$LeashData): void;
        canBeLeashed(): boolean;
        getLeashData(): $Leashable$LeashData;
        canHaveALeashAttachedToIt(): boolean;
        dropLeash(arg0: boolean, arg1: boolean): void;
        getLeashHolder(): $Entity;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        isLeashed(): boolean;
        leashTooFarBehaviour(): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        setDelayedLeashHolderId(arg0: number): void;
        get leashHolder(): $Entity;
        get leashed(): boolean;
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
        adjustSpawnPosition(arg0: $LevelReader, arg1: $BlockPos_): $BlockPos;
        isSpawnPositionOk(arg0: $LevelReader, arg1: $BlockPos_, arg2: $EntityType_<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        getTarget(): $LivingEntity;
        getWidth(): number;
        getHeight(): number;
        setHeight(arg0: number): void;
        setWidth(arg0: number): void;
        getLastAttacker(): $LivingEntity;
        getResponse(): boolean;
        setResponse(arg0: boolean): void;
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
        isInSittingPose(): boolean;
        isTame(): boolean;
        getOwnerUUID(): $UUID;
        tryToTeleportToOwner(): void;
        unableToMoveToOwner(): boolean;
        spawnTamingParticles(arg0: boolean): void;
        applyTamingSideEffects(): void;
        shouldTryTeleportToOwner(): boolean;
        setOrderedToSit(arg0: boolean): void;
        isOrderedToSit(): boolean;
        wantsToAttack(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        setInSittingPose(arg0: boolean): void;
        canFlyToOwner(): boolean;
        setTame(arg0: boolean, arg1: boolean): void;
        tame(arg0: $Player): void;
        getOwner(): $LivingEntity;
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
        getSerializedName(): string;
        getDespawnDistance(): number;
        isFriendly(): boolean;
        isPersistent(): boolean;
        getNoDespawnDistance(): number;
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
        get serializedName(): string;
        get despawnDistance(): number;
        get friendly(): boolean;
        get persistent(): boolean;
        get noDespawnDistance(): number;
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
        backgroundColor(): $Display$IntInterpolator;
        textOpacity(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    export class $Display$BlockDisplay extends $Display {
        setBlockState(arg0: $BlockState_): void;
        getBlockState(): $BlockState;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
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
        getJumpCooldown(): number;
        onPlayerJump(arg0: number): void;
        canJump(): boolean;
        handleStartJump(arg0: number): void;
        handleStopJump(): void;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity implements $MarkerEntityExt {
        axiom$getData(): $CompoundTag;
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
        setFlags(arg0: number): void;
        getText(): $Component;
        getFlags(): number;
        setText(arg0: $Component_): void;
        getBackgroundColor(): number;
        cacheDisplay(arg0: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        setLineWidth(arg0: number): void;
        getTextOpacity(): number;
        getLineWidth(): number;
        setBackgroundColor(arg0: number): void;
        setTextOpacity(arg0: number): void;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        static getAlign(arg0: number): $Display$TextDisplay$Align;
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
        getSerializedName(): string;
        getFilterFlag(): number;
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
        get serializedName(): string;
        get filterFlag(): number;
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
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
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
        setVisualOnly(arg0: boolean): void;
        setDamage(arg0: number): void;
        getDamage(): number;
        localvar$zdj000$openpartiesandclaims$onSetCause(arg0: $ServerPlayer): $ServerPlayer;
        handler$fia000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        getBlocksSetOnFire(): number;
        getHitEntities(): $Stream<$Entity>;
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
        big(): $SoundEvent;
        small(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    export class $Display$ItemDisplay extends $Display {
        getItemStack(): $ItemStack;
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        setItemStack(arg0: $ItemStack_): void;
        getItemTransform(): $ItemDisplayContext;
        setItemTransform(arg0: $ItemDisplayContext_): void;
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
        emitsEvents(): boolean;
        emitsSounds(): boolean;
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
        startIfStopped(arg0: number): void;
        getAccumulatedTime(): number;
        fastForward(arg0: number, arg1: number): void;
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
        getRadius(): number;
        addEffect(arg0: $MobEffectInstance): void;
        setPotionContents(arg0: $PotionContents_): void;
        setParticle(arg0: $ParticleOptions_): void;
        getRadiusOnUse(): number;
        setRadiusPerTick(arg0: number): void;
        getParticle(): $ParticleOptions;
        setRadiusOnUse(arg0: number): void;
        getRadiusPerTick(): number;
        getWaitTime(): number;
        setWaitTime(arg0: number): void;
        setDurationOnUse(arg0: number): void;
        getDurationOnUse(): number;
        isWaiting(): boolean;
        setWaiting(arg0: boolean): void;
        setRadius(arg0: number): void;
        getOwner(): $Entity;
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
        followLeashSpeed(): number;
        getWalkTargetValue(arg0: $BlockPos_): number;
        getWalkTargetValue(arg0: $BlockPos_, arg1: $LevelReader): number;
        isPathFinding(): boolean;
        isPanicking(): boolean;
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
        get pathFinding(): boolean;
        get panicking(): boolean;
    }
    export class $Display$RenderState extends $Record {
        brightnessOverride(): number;
        transformation(): $Display$GenericInterpolator<$Transformation>;
        shadowStrength(): $Display$FloatInterpolator;
        shadowRadius(): $Display$FloatInterpolator;
        billboardConstraints(): $Display$BillboardConstraints;
        glowColorOverride(): number;
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
        noSave(): $EntityType$Builder<$Object>;
        requiredFeatures(...arg0: $FeatureFlag[]): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: $Vec3_[]): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: number[]): $EntityType$Builder<$Object>;
        canSpawnFarFromPlayer(): $EntityType$Builder<$Object>;
        spawnDimensionsScale(arg0: number): $EntityType$Builder<$Object>;
        clientTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<any>;
        immuneTo(...arg0: $Block_[]): $EntityType$Builder<$Object>;
        sized(arg0: number, arg1: number): $EntityType$Builder<$Object>;
        noSummon(): $EntityType$Builder<$Object>;
        fireImmune(): $EntityType$Builder<$Object>;
        eyeHeight(arg0: number): $EntityType$Builder<$Object>;
        ridingOffset(arg0: number): $EntityType$Builder<$Object>;
        updateInterval(arg0: number): $EntityType$Builder<$Object>;
        vehicleAttachment(arg0: $Vec3_): $EntityType$Builder<$Object>;
        nameTagOffset(arg0: number): $EntityType$Builder<$Object>;
        static createNothing<T extends $Entity>(arg0: $MobCategory_): $EntityType$Builder<T>;
        setUpdateInterval(arg0: number): $EntityType$Builder<$Object>;
        setTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<any>): void;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<$Object>;
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
        getEntryPosition(): $BlockPos;
        getPortalTime(): number;
        processPortalTeleportation(arg0: $ServerLevel, arg1: $Entity, arg2: boolean): boolean;
        getPortalDestination(arg0: $ServerLevel, arg1: $Entity): $DimensionTransition;
        updateEntryPosition(arg0: $BlockPos_): void;
        setAsInsidePortalThisTick(arg0: boolean): void;
        hasExpired(): boolean;
        isSamePortal(arg0: $Portal_): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        isInsidePortalThisTick(): boolean;
        constructor(arg0: $Portal_, arg1: $BlockPos_);
        get entryPosition(): $BlockPos;
        get portalTime(): number;
        set asInsidePortalThisTick(value: boolean);
        get portalLocalTransition(): $Portal$Transition;
        get insidePortalThisTick(): boolean;
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
        getIcon(): number;
        static award(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): void;
        handler$zdd000$openpartiesandclaims$onPlayerTouch(arg0: $Player, arg1: $CallbackInfo): void;
        static getExperienceValue(arg0: number): number;
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
        withAttachments(arg0: $EntityAttachments$Builder): $EntityDimensions;
        makeBoundingBox(arg0: $Vec3_): $AABB;
        makeBoundingBox(arg0: number, arg1: number, arg2: number): $AABB;
        withEyeHeight(arg0: number): $EntityDimensions;
        eyeHeight(): number;
        attachments(): $EntityAttachments;
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
        isSaddleable(): boolean;
        equipSaddle(arg0: $ItemStack_, arg1: $SoundSource_): void;
        getSaddleSoundEvent(): $SoundEvent;
        isSaddled(): boolean;
        get saddleable(): boolean;
        get saddleSoundEvent(): $SoundEvent;
        get saddled(): boolean;
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
        getHeight(): number;
        setHeight(arg0: number): void;
        setWidth(arg0: number): void;
        getPosRotInterpolationDuration(): number;
        getPackedBrightnessOverride(): number;
        calculateInterpolationProgress(arg0: number): number;
        setPosRotInterpolationDuration(arg0: number): void;
        static getDataPosRotInterpolationId$axiom_$md$6ffaf3$1(): $EntityDataAccessor<any>;
        setTransformationInterpolationDelay(arg0: number): void;
        getTransformationInterpolationDuration(): number;
        setTransformationInterpolationDuration(arg0: number): void;
        getTransformationInterpolationDelay(): number;
        static getDataTransformationInterpolationDurationId$axiom_$md$6ffaf3$0(): $EntityDataAccessor<any>;
        setBrightnessOverride(arg0: $Brightness_): void;
        getBillboardConstraints(): $Display$BillboardConstraints;
        setBillboardConstraints(arg0: $Display$BillboardConstraints_): void;
        static createTransformation(arg0: $SynchedEntityData): $Transformation;
        getGlowColorOverride(): number;
        setGlowColorOverride(arg0: number): void;
        getBrightnessOverride(): $Brightness;
        updateRenderSubState(arg0: boolean, arg1: number): void;
        renderState(): $Display$RenderState;
        setViewRange(arg0: number): void;
        setShadowRadius(arg0: number): void;
        setShadowStrength(arg0: number): void;
        setTransformation(arg0: $Transformation): void;
        getViewRange(): number;
        getShadowStrength(): number;
        getShadowRadius(): number;
        invokeSetHeight(arg0: number): void;
        invokeSetWidth(arg0: number): void;
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
        get packedBrightnessOverride(): number;
        static get dataPosRotInterpolationId$axiom_$md$6ffaf3$1(): $EntityDataAccessor<any>;
        static get dataTransformationInterpolationDurationId$axiom_$md$6ffaf3$0(): $EntityDataAccessor<any>;
        set transformation(value: $Transformation);
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
        populateDefaultEquipmentSlots(arg0: $RandomSource, arg1: $DifficultyInstance): void;
        setItemSlotAndDropWhenKilled(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        shouldPassengersInheritMalus(): boolean;
        handler$ehc000$superbwarfare$getTarget(arg0: $CallbackInfoReturnable<any>): void;
        redirect$gmf000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        populateDefaultEquipmentEnchantments(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        /**
         * @deprecated
         */
        finalizeSpawn(arg0: $ServerLevelAccessor, arg1: $DifficultyInstance, arg2: $MobSpawnType_, arg3: $SpawnGroupData): $SpawnGroupData;
        setPersistenceRequired(): void;
        checkSpawnObstruction(arg0: $LevelReader): boolean;
        checkSpawnRules(arg0: $LevelAccessor, arg1: $MobSpawnType_): boolean;
        lookAt(arg0: $Entity, arg1: number, arg2: number): void;
        handler$zep000$openpartiesandclaims$onAiStepItemPickup(arg0: $CallbackInfo, arg1: $Vec3i, arg2: $Iterator<any>, arg3: $ItemEntity): void;
        equip(arg0: $EquipmentTable_): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>): void;
        isWearingBodyArmor(): boolean;
        setBodyArmorItem(arg0: $ItemStack_): void;
        isBodyArmorItem(arg0: $ItemStack_): boolean;
        static checkMobSpawnRules(arg0: $EntityType_<$Mob>, arg1: $LevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        registerGoals(): void;
        getMaxHeadXRot(): number;
        getRestrictCenter(): $BlockPos;
        getJumpControl(): $JumpControl;
        onPathfindingDone(): void;
        getRestrictRadius(): number;
        getTargetFromBrain(): $LivingEntity;
        getAmbientSound(): $SoundEvent;
        setLeftHanded(arg0: boolean): void;
        stopInPlace(): void;
        getPickupReach(): $Vec3i;
        removeWhenFarAway(arg0: number): boolean;
        getMaxHeadYRot(): number;
        clearRestriction(): void;
        getBodyArmorItem(): $ItemStack;
        setCanPickUpLoot(arg0: boolean): void;
        canPickUpLoot(): boolean;
        getLookControl(): $LookControl;
        getMoveControl(): $MoveControl;
        createNavigation(arg0: $Level_): $PathNavigation;
        updateControlFlags(): void;
        onPathfindingStart(): void;
        canHoldItem(arg0: $ItemStack_): boolean;
        setGuaranteedDrop(arg0: $EquipmentSlot_): void;
        createBodyControl(): $BodyRotationControl;
        customServerAiStep(): void;
        isLeftHanded(): boolean;
        sendDebugPackets(): void;
        getHeadRotSpeed(): number;
        wantsToPickUp(arg0: $ItemStack_): boolean;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        setSpawnCancelled(arg0: boolean): void;
        isSunBurnTick(): boolean;
        hasRestriction(): boolean;
        playAttackSound(): void;
        getSpawnType(): $MobSpawnType;
        isAggressive(): boolean;
        removeFreeWill(): void;
        setLeashData(arg0: $Leashable$LeashData): void;
        setAggressive(arg0: boolean): void;
        canBeLeashed(): boolean;
        getLeashData(): $Leashable$LeashData;
        removeAllGoals(arg0: $Predicate_<$Goal>): void;
        getNavigation(): $PathNavigation;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        dropLeash(arg0: boolean, arg1: boolean): void;
        playAmbientSound(): void;
        isSpawnCancelled(): boolean;
        setBaby(arg0: boolean): void;
        modifyExpressionValue$gel000$create$mobRidingContraptionsMaintainTheirAttackBox(arg0: $Entity): $Entity;
        handler$zel000$openpartiesandclaims$onAiStepPre(arg0: $CallbackInfo): void;
        handler$zel000$openpartiesandclaims$onAiStepPost(arg0: $CallbackInfo): void;
        isNoAi(): boolean;
        setNoAi(arg0: boolean): void;
        setYya(arg0: number): void;
        setXxa(arg0: number): void;
        ate(): void;
        setZza(arg0: number): void;
        getSensing(): $Sensing;
        pickUpItem(arg0: $ItemEntity): void;
        restrictTo(arg0: $BlockPos_, arg1: number): void;
        onOffspringSpawnedFromEgg(arg0: $Player, arg1: $Mob): void;
        dropPreservedEquipment(arg0: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        dropPreservedEquipment(): void;
        isWithinRestriction(): boolean;
        isWithinRestriction(arg0: $BlockPos_): boolean;
        leashTooFarBehaviour(): void;
        getAttackBoundingBox(): $AABB;
        canReplaceCurrentItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        shouldDespawnInPeaceful(): boolean;
        isWithinMeleeAttackRange(arg0: $LivingEntity): boolean;
        getAmbientSoundInterval(): number;
        static createMobAttributes(): $AttributeSupplier$Builder;
        setPathfindingMalus(arg0: $PathType_, arg1: number): void;
        requiresCustomPersistence(): boolean;
        clampHeadRotationToBody(): void;
        isMaxGroupSizeReached(arg0: number): boolean;
        static getEquipmentForSlot(arg0: $EquipmentSlot_, arg1: number): $Item;
        canReplaceEqualItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getEquipmentDropChance(arg0: $EquipmentSlot_): number;
        getPathfindingMalus(arg0: $PathType_): number;
        canFireProjectileWeapon(arg0: $ProjectileWeaponItem): boolean;
        getMaxSpawnClusterSize(): number;
        equipItemIfPossible(arg0: $ItemStack_): $ItemStack;
        isPersistenceRequired(): boolean;
        enchantSpawnedWeapon(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $DifficultyInstance): void;
        enchantSpawnedArmor(arg0: $ServerLevelAccessor, arg1: $RandomSource, arg2: $EquipmentSlot_, arg3: $DifficultyInstance): void;
        spawnAnim(): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        mayBeLeashed(): boolean;
        canHaveALeashAttachedToIt(): boolean;
        getLeashHolder(): $Entity;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        isLeashed(): boolean;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        setDelayedLeashHolderId(arg0: number): void;
        sophisticatedbackpacks$getAmbientSound(): $SoundEvent;
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
        get wearingBodyArmor(): boolean;
        get maxHeadXRot(): number;
        get restrictCenter(): $BlockPos;
        get restrictRadius(): number;
        get targetFromBrain(): $LivingEntity;
        get ambientSound(): $SoundEvent;
        get pickupReach(): $Vec3i;
        get maxHeadYRot(): number;
        set guaranteedDrop(value: $EquipmentSlot_);
        get headRotSpeed(): number;
        get sunBurnTick(): boolean;
        get spawnType(): $MobSpawnType;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        set baby(value: boolean);
        get sensing(): $Sensing;
        get attackBoundingBox(): $AABB;
        get ambientSoundInterval(): number;
        get maxSpawnClusterSize(): number;
        get leashHolder(): $Entity;
        get leashed(): boolean;
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
        static createDefault(arg0: number, arg1: number): $EntityAttachments;
        getClamped(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        getNullable(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        constructor(arg0: $Map_<$EntityAttachment_, $List_<$Vec3_>>);
    }
    export class $EntitySelector {
        static pushableBy(arg0: $Entity): $Predicate<$Entity>;
        static withinDistance(arg0: number, arg1: number, arg2: number, arg3: number): $Predicate<$Entity>;
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
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $AgeableMob;
        ageBoundaryReached(): void;
        setAge(arg0: number): void;
        canBreed(): boolean;
        ageUp(arg0: number): void;
        ageUp(arg0: number, arg1: boolean): void;
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
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        boost(arg0: $RandomSource): boolean;
        boostFactor(): number;
        tickBoost(): void;
        hasSaddle(): boolean;
        onSynced(): void;
        setSaddle(arg0: boolean): void;
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
        readPersistentAngerSaveData(arg0: $Level_, arg1: $CompoundTag_): void;
        getRemainingPersistentAngerTime(): number;
        setRemainingPersistentAngerTime(arg0: number): void;
        playerDied(arg0: $Player): void;
        stopBeingAngry(): void;
        getLastHurtByMob(): $LivingEntity;
        setLastHurtByMob(arg0: $LivingEntity): void;
        setLastHurtByPlayer(arg0: $Player): void;
        canAttack(arg0: $LivingEntity): boolean;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        isAngryAt(arg0: $LivingEntity): boolean;
        isAngry(): boolean;
        updatePersistentAnger(arg0: $ServerLevel, arg1: boolean): void;
        setPersistentAngerTarget(arg0: $UUID_): void;
        addPersistentAngerSaveData(arg0: $CompoundTag_): void;
        startPersistentAngerTimer(): void;
        getPersistentAngerTarget(): $UUID;
        isAngryAtAllPlayers(arg0: $Level_): boolean;
        set lastHurtByPlayer(value: $Player);
        get angry(): boolean;
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        increaseGroupSizeByOne(): void;
        isShouldSpawnBaby(): boolean;
        getGroupSize(): number;
        getBabySpawnChance(): number;
        constructor(arg0: number);
        constructor(arg0: boolean);
        get shouldSpawnBaby(): boolean;
        get groupSize(): number;
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
