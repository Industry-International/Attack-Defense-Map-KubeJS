import { $TickTask, $MinecraftServer } from "@package/net/minecraft/server";
import { $MapCodec_, $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $Dynamic, $MapCodec, $Decoder, $Codec$ResultFunction, $Decoder$Boxed, $Lifecycle, $Encoder, $Decoder$Terminal, $Decoder_ } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $Tag_, $Tag, $CompoundTag } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState, $Pose, $PortalProcessor, $Entity, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $Minecraft } from "@package/net/minecraft/client";
import { $LogicalSide_ } from "@package/net/neoforged/fml";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Connection, $RegistryFriendlyByteBuf, $BandwidthDebugMonitor } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Type } from "@package/java/lang/reflect";
import { $StringBuilderFormattable } from "@package/org/apache/logging/log4j/util";
import { $PlayerEnderChestContainer, $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $DataComponentHolder_, $DataComponentHolder } from "@package/net/minecraft/core/component";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Style, $ComponentContents, $FormattedText$ContentConsumer_, $FormattedText$StyledContentConsumer_, $ComponentContents$Type, $Component } from "@package/net/minecraft/network/chat";
import { $ServerGamePacketListenerImpl, $PlayerChunkSender } from "@package/net/minecraft/server/network";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $TranslatableContents } from "@package/net/minecraft/network/chat/contents";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $Transformation } from "@package/com/mojang/math";
import { $Matrix4f, $Vector3f, $Quaternionf, $Quaternionfc, $Vector4f } from "@package/org/joml";
import { $JsonObject_, $JsonDeserializer, $JsonElement_, $JsonSerializer, $JsonDeserializationContext_, $JsonSerializationContext, $JsonElement } from "@package/com/google/gson";
import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Comparator, $Stack, $Map, $Map$Entry, $Set, $ListIterator, $Spliterator, $Iterator, $Properties, $UUID, $List, $SequencedCollection, $Collection_, $List_, $SequencedSet } from "@package/java/util";
import { $IntFunction_, $Supplier_, $Consumer_, $Predicate_, $Consumer, $ToDoubleFunction_, $Function_, $UnaryOperator_, $BiPredicate_, $Supplier, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $ObjectLinkedOpenCustomHashSet, $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $RegistryAccess, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $OBB$Part } from "@package/com/atsuishio/superbwarfare/tools";
import { $Enum, $Exception, $StringBuilder, $Comparable, $Iterable, $Throwable, $Record, $Object } from "@package/java/lang";
import { $Message } from "@package/org/apache/logging/log4j/message";
import { $Writer } from "@package/java/io";
import { $LevelAccessor, $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $Marker, $Logger } from "@package/org/slf4j";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Multimap, $ImmutableMap } from "@package/com/google/common/collect";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $Stream } from "@package/java/util/stream";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $DefaultEventLoopGroup } from "@package/io/netty/channel";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as flag from "@package/net/neoforged/neoforge/common/util/flag";
export * as strategy from "@package/net/neoforged/neoforge/common/util/strategy";

declare module "@package/net/neoforged/neoforge/common/util" {
    export class $AttributeUtil$BaseModifier extends $Record {
    }
    export class $BlockSnapshot {
        getState(): $BlockState;
        static create(arg0: $ResourceKey_<$Level>, arg1: $LevelAccessor, arg2: $BlockPos_): $BlockSnapshot;
        static create(arg0: $ResourceKey_<$Level>, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number): $BlockSnapshot;
        getLevel(): $LevelAccessor;
        getFlags(): number;
        getTag(): $CompoundTag;
        getPos(): $BlockPos;
        getDimension(): $ResourceKey<$Level>;
        getCurrentState(): $BlockState;
        restore(arg0: number): boolean;
        restore(): boolean;
        restoreBlockEntity(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        restoreToLocation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): boolean;
        recreateBlockEntity(arg0: $HolderLookup$Provider): $BlockEntity;
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get flags(): number;
        get tag(): $CompoundTag;
        get pos(): $BlockPos;
        get dimension(): $ResourceKey<$Level>;
        get currentState(): $BlockState;
    }
    export class $NeoForgeExtraCodecs$XorMapCodec<F, S> extends $MapCodec<$Either<F, S>> {
    }
    export class $MutableHashedLinkedMap$Entry implements $Map$Entry<K, V> {
    }
    export class $MutableHashedLinkedMap<K, V> implements $Iterable<$Map$Entry<K, V>> {
        remove(arg0: K): V;
        get(arg0: K): V;
        put(arg0: K, arg1: V): V;
        isEmpty(): boolean;
        iterator(): $Iterator<$Map$Entry<K, V>>;
        contains(arg0: K): boolean;
        putFirst(arg0: K, arg1: V): V;
        putBefore(arg0: K, arg1: K, arg2: V): V;
        putAfter(arg0: K, arg1: K, arg2: V): V;
        spliterator(): $Spliterator<$Map$Entry<K, V>>;
        forEach(arg0: $Consumer_<$Map$Entry<K, V>>): void;
        constructor(arg0: $Hash$Strategy<K>, arg1: $MutableHashedLinkedMap$MergeFunction_<K, V>, arg2: $BiPredicate_<K, V>);
        constructor(arg0: $Hash$Strategy<K>, arg1: $BiPredicate_<K, V>);
        constructor(arg0: $Hash$Strategy<K>, arg1: $MutableHashedLinkedMap$MergeFunction_<K, V>);
        constructor(arg0: $Hash$Strategy<K>);
        constructor();
        [Symbol.iterator](): Iterator<$Map$Entry<K, V>>
        get empty(): boolean;
    }
    export class $JsonUtils {
        static readNBT(arg0: $JsonObject_, arg1: string): $CompoundTag;
        constructor();
    }
    export class $FriendlyByteBufUtil {
        static writeCustomData(arg0: $Consumer_<$RegistryFriendlyByteBuf>, arg1: $RegistryAccess): number[];
    }
    export class $FakePlayer extends $ServerPlayer {
        lerpYRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        sbw$currentHitPart: $OBB$Part;
        gameMode: $ServerPlayerGameMode;
        appliedScale: number;
        object: $Object;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        static FLAG_ONFIRE: number;
        sbw$beastKilled: boolean;
        zza: number;
        passengers: $ImmutableList<$Entity>;
        rotOffs: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        wonGame: boolean;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        lastDamageSource: $DamageSource;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        oRun: number;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        lastDamageStamp: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(arg0: $ServerLevel, arg1: $GameProfile);
    }
    export class $JsonUtils$ImmutableListTypeAdapter extends $Enum<$JsonUtils$ImmutableListTypeAdapter> implements $JsonDeserializer<$ImmutableList<never>>, $JsonSerializer<$ImmutableList<never>> {
        static values(): $JsonUtils$ImmutableListTypeAdapter[];
        static valueOf(arg0: string): $JsonUtils$ImmutableListTypeAdapter;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ImmutableList<never>;
        serialize(arg0: $ImmutableList<never>, arg1: $Type, arg2: $JsonSerializationContext): $JsonElement;
        static INSTANCE: $JsonUtils$ImmutableListTypeAdapter;
    }
    /**
     * Values that may be interpreted as {@link $JsonUtils$ImmutableListTypeAdapter}.
     */
    export type $JsonUtils$ImmutableListTypeAdapter_ = "instance";
    /**
     * @deprecated
     */
    export class $DummySavedData extends $SavedData {
        static DUMMY: $DummySavedData;
    }
    export class $TriState extends $Enum<$TriState> {
        isTrue(): boolean;
        static values(): $TriState[];
        static valueOf(arg0: string): $TriState;
        isDefault(): boolean;
        isFalse(): boolean;
        static TRUE: $TriState;
        static FALSE: $TriState;
        static DEFAULT: $TriState;
        get true(): boolean;
        get default(): boolean;
        get false(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriState}.
     */
    export type $TriState_ = "true" | "default" | "false";
    export class $InsertableLinkedOpenCustomHashSet<T> extends $ObjectLinkedOpenCustomHashSet<T> {
        addAfter(arg0: T, arg1: T): boolean;
        addBefore(arg0: T, arg1: T): boolean;
        reversed(): $SequencedSet<T>;
        constructor();
        constructor(arg0: $Hash$Strategy<T>);
    }
    export class $AttributeUtil$MergedModifierData {
    }
    export class $LogMessageAdapter extends $Record implements $Message, $StringBuilderFormattable {
        builder(): $Consumer<$StringBuilder>;
        static adapt(arg0: $Consumer_<$StringBuilder>): $Message;
        getParameters(): $Object[];
        formatTo(arg0: $StringBuilder): void;
        getFormat(): string;
        getFormattedMessage(): string;
        getThrowable(): $Throwable;
        constructor(builder: $Consumer_<$StringBuilder>);
        get parameters(): $Object[];
        get format(): string;
        get formattedMessage(): string;
        get throwable(): $Throwable;
    }
    export class $AttributeTooltipContext {
        static of(arg0: $Player, arg1: $Item$TooltipContext, arg2: $TooltipFlag): $AttributeTooltipContext;
    }
    export interface $AttributeTooltipContext extends $Item$TooltipContext {
        flag(): $TooltipFlag;
        player(): $Player;
    }
    export class $CenterChunkPosComparator implements $Comparator<$ChunkPos> {
        compare(arg0: $ChunkPos, arg1: $ChunkPos): number;
        reversed(): $Comparator<$ChunkPos>;
        thenComparing<U>(arg0: $Function_<$ChunkPos, U>, arg1: $Comparator<U>): $Comparator<$ChunkPos>;
        thenComparing(arg0: $Comparator<$ChunkPos>): $Comparator<$ChunkPos>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$ChunkPos, U>): $Comparator<$ChunkPos>;
        thenComparingInt(arg0: $ToIntFunction_<$ChunkPos>): $Comparator<$ChunkPos>;
        thenComparingLong(arg0: $ToLongFunction_<$ChunkPos>): $Comparator<$ChunkPos>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$ChunkPos>): $Comparator<$ChunkPos>;
        constructor(arg0: $ServerPlayer);
    }
    export class $FakePlayer$FakePlayerNetHandler extends $ServerGamePacketListenerImpl {
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        aboveGroundTickCount: number;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        static LOGGER: $Logger;
        connection: $Connection;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        connectionType: $ConnectionType;
        player: $ServerPlayer;
    }
    export class $TriPredicate<T, U, V> {
    }
    export interface $TriPredicate<T, U, V> {
        test(arg0: T, arg1: U, arg2: V): boolean;
        or(arg0: $TriPredicate_<T, U, V>): $TriPredicate<T, U, V>;
        negate(): $TriPredicate<T, U, V>;
        and(arg0: $TriPredicate_<T, U, V>): $TriPredicate<T, U, V>;
    }
    /**
     * Values that may be interpreted as {@link $TriPredicate}.
     */
    export type $TriPredicate_<T, U, V> = ((arg0: T, arg1: U, arg2: V) => boolean);
    export class $TextTable$Row {
        format(arg0: $List_<$TextTable$Column>, arg1: string): $List<string>;
        constructor();
    }
    export class $SelfTest {
        static initCommon(): void;
        static writeSelfTestReport(arg0: string): void;
    }
    export class $DataComponentUtil {
        static wrapEncodingExceptions<T extends $DataComponentHolder>(arg0: T, arg1: $Codec<T>, arg2: $HolderLookup$Provider, arg3: $Tag_): $Tag;
        static wrapEncodingExceptions<T extends $DataComponentHolder>(arg0: T, arg1: $Codec<T>, arg2: $HolderLookup$Provider): $Tag;
        static logDataComponentSaveError(arg0: $DataComponentHolder_, arg1: $Exception, arg2: $Tag_): void;
        constructor();
    }
    export class $NeoForgeExtraCodecs {
        static xor<F, S>(arg0: $MapCodec_<F>, arg1: $MapCodec_<S>): $MapCodec<$Either<F, S>>;
        static withAlternative<T>(arg0: $MapCodec_<T>, arg1: $MapCodec_<T>): $MapCodec<T>;
        static withAlternative<T>(arg0: $Codec<T>, arg1: $Codec<T>): $Codec<T>;
        static setOf<T>(arg0: $Codec<T>): $Codec<$Set<T>>;
        static singularOrPluralCodecNotEmpty<T>(arg0: $Codec<T>, arg1: string, arg2: string): $MapCodec<$Set<T>>;
        static singularOrPluralCodecNotEmpty<T>(arg0: $Codec<T>, arg1: string): $MapCodec<$Set<T>>;
        static singularOrPluralCodec<T>(arg0: $Codec<T>, arg1: string, arg2: string): $MapCodec<$Set<T>>;
        static singularOrPluralCodec<T>(arg0: $Codec<T>, arg1: string): $MapCodec<$Set<T>>;
        static optionalFieldAlwaysWrite<T>(arg0: $Codec<T>, arg1: string, arg2: T): $MapCodec<T>;
        static listWithOptionalElements<A>(arg0: $Codec<(A) | undefined>): $Codec<$List<A>>;
        static dispatchMapOrElse<A, E, B>(arg0: $Codec<A>, arg1: $Function_<E, A>, arg2: $Function_<A, $MapCodec<E>>, arg3: $MapCodec_<B>): $MapCodec<$Either<E, B>>;
        static listWithoutEmpty<A>(arg0: $Codec<$List_<(A) | undefined>>): $Codec<$List<A>>;
        static mapWithAlternative<T>(arg0: $MapCodec_<T>, arg1: $MapCodec_<T>): $MapCodec<T>;
        static aliasedFieldOf<T>(arg0: $Codec<T>, ...arg1: string[]): $MapCodec<T>;
        static decodeOnly<A>(arg0: $Decoder_<A>): $Codec<A>;
        constructor();
        static set of(value: $Codec<T>);
    }
    export class $Size2i {
        width: number;
        height: number;
        constructor(arg0: number, arg1: number);
    }
    export class $FakePlayerFactory$FakePlayerKey extends $Record {
    }
    export class $HexDumper$Instance {
    }
    export class $InsertingContents extends $Record implements $ComponentContents {
        index(): number;
        type(): $ComponentContents$Type<never>;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        static pushTranslation(arg0: $TranslatableContents): boolean;
        static popTranslation(): void;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        static CODEC: $MapCodec<$InsertingContents>;
        static TYPE: $ComponentContents$Type<$InsertingContents>;
        constructor(index: number);
    }
    export class $TransformationHelper$Deserializer implements $JsonDeserializer<$Transformation> {
        static parseFloatArray(arg0: $JsonElement_, arg1: number, arg2: string): number[];
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $Transformation;
        static parseRotation(arg0: $JsonElement_): $Quaternionf;
        static parseMatrix(arg0: $JsonElement_): $Matrix4f;
        static parseAxisRotation(arg0: $JsonElement_): $Quaternionf;
        constructor();
    }
    export class $FakePlayer$FakeConnection extends $Connection {
        static PACKET_MARKER: $Marker;
        bandwidthDebugMonitor: $BandwidthDebugMonitor;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
    }
    export class $AttributeUtil {
        static sortedMap(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        static getSortedModifiers(arg0: $ItemStack_, arg1: $EquipmentSlotGroup_): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        static applyModifierTooltips(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext): void;
        static applyTextFor(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>, arg3: $AttributeTooltipContext): void;
        static addPotionTooltip(arg0: $List_<$Pair<$Holder_<$Attribute>, $AttributeModifier_>>, arg1: $Consumer_<$Component>): void;
        static addAttributeTooltips(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext): void;
        static FAKE_MERGED_ID: $ResourceLocation;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static BASE_ENTITY_REACH_ID: $ResourceLocation;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ATTRIBUTE_MODIFIER_COMPARATOR: $Comparator<$AttributeModifier>;
        constructor();
    }
    export class $ItemStackMap {
        static createTypeAndTagLinkedMap<V>(): $Map<$ItemStack, V>;
        static createTypeAndTagMap<V>(): $Map<$ItemStack, V>;
        constructor();
    }
    export class $Lazy<T> implements $Supplier<T> {
        invalidate(): void;
        get(): T;
        static of<T>(arg0: $Supplier_<T>): $Lazy<T>;
    }
    export class $NeoForgeExtraCodecs$AlternativeCodec<T> extends $Record implements $Codec<T> {
        dispatch<E>(arg0: string, arg1: $Function_<E, T>, arg2: $Function_<T, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, T>, arg1: $Function_<T, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<T, $DataResult<T>>): $Codec<T>;
        orElse(arg0: $UnaryOperator_<string>, arg1: T): $Codec<T>;
        orElse(arg0: T): $Codec<T>;
        orElse(arg0: $Consumer_<string>, arg1: T): $Codec<T>;
        orElseGet(arg0: $Supplier_<T>): $Codec<T>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<T>): $Codec<T>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<T>): $Codec<T>;
        comapFlatMap<S>(arg0: $Function_<T, $DataResult<S>>, arg1: $Function_<S, T>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: T, arg3: $Lifecycle): $MapCodec<T>;
        optionalFieldOf(arg0: string): $MapCodec<(T) | undefined>;
        optionalFieldOf(arg0: string, arg1: T): $MapCodec<T>;
        optionalFieldOf(arg0: string, arg1: T, arg2: $Lifecycle): $MapCodec<T>;
        xmap<S>(arg0: $Function_<T, S>, arg1: $Function_<S, T>): $Codec<S>;
        flatXmap<S>(arg0: $Function_<T, $DataResult<S>>, arg1: $Function_<S, $DataResult<T>>): $Codec<S>;
        mapResult(arg0: $Codec$ResultFunction<T>): $Codec<T>;
        stable(): $Codec<T>;
        listOf(): $Codec<$List<T>>;
        listOf(arg0: number, arg1: number): $Codec<$List<T>>;
        deprecated(arg0: number): $Codec<T>;
        lenientOptionalFieldOf(arg0: string, arg1: T, arg2: $Lifecycle): $MapCodec<T>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(T) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: T, arg3: $Lifecycle): $MapCodec<T>;
        lenientOptionalFieldOf(arg0: string, arg1: T): $MapCodec<T>;
        promotePartial(arg0: $Consumer_<string>): $Codec<T>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, T>, arg2: $Function_<T, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, T>, arg1: $Function_<T, $MapCodec<E>>): $MapCodec<E>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<T>>, arg2: $Function_<T, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchStable<E>(arg0: $Function_<E, T>, arg1: $Function_<T, $MapCodec<E>>): $Codec<E>;
        flatComapMap<S>(arg0: $Function_<T, S>, arg1: $Function_<S, $DataResult<T>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<T>>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<T>;
        comap<B>(arg0: $Function_<B, T>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<T>>): $Encoder<B>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<T, T>>;
        map<B>(arg0: $Function_<T, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<T, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<T>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<T>;
        boxed(): $Decoder$Boxed<T>;
        terminal(): $Decoder$Terminal<T>;
        simple(): $Decoder$Simple<T>;
        fieldOf(arg0: string): $MapEncoder<T>;
        withLifecycle(arg0: $Lifecycle): $Encoder<T>;
    }
    export class $TransformationHelper {
        static slerp(arg0: $Quaternionfc, arg1: $Quaternionfc, arg2: number): $Quaternionf;
        static slerp(arg0: $Transformation, arg1: $Transformation, arg2: number): $Transformation;
        static lerp(arg0: $Vector3f, arg1: $Vector3f, arg2: number): $Vector3f;
        static makeQuaternion(arg0: number[]): $Quaternionf;
        static quatFromXYZ(arg0: $Vector3f, arg1: boolean): $Quaternionf;
        static quatFromXYZ(arg0: number[], arg1: boolean): $Quaternionf;
        static quatFromXYZ(arg0: number, arg1: number, arg2: number, arg3: boolean): $Quaternionf;
        static epsilonEquals(arg0: $Vector4f, arg1: $Vector4f, arg2: number): boolean;
        constructor();
    }
    export class $TransformationHelper$TransformOrigin extends $Enum<$TransformationHelper$TransformOrigin> implements $StringRepresentable {
        static fromString(arg0: string): $TransformationHelper$TransformOrigin;
        static values(): $TransformationHelper$TransformOrigin[];
        static valueOf(arg0: string): $TransformationHelper$TransformOrigin;
        getVector(): $Vector3f;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $TransformationHelper$TransformOrigin;
        static CORNER: $TransformationHelper$TransformOrigin;
        static OPPOSING_CORNER: $TransformationHelper$TransformOrigin;
        get vector(): $Vector3f;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TransformationHelper$TransformOrigin}.
     */
    export type $TransformationHelper$TransformOrigin_ = "center" | "corner" | "opposing-corner";
    export class $DeferredSoundType extends $SoundType {
        static CANDLE: $SoundType;
        static MUD_BRICKS: $SoundType;
        static HANGING_ROOTS: $SoundType;
        static NYLIUM: $SoundType;
        static COPPER_GRATE: $SoundType;
        static NETHERITE_BLOCK: $SoundType;
        static PACKED_MUD: $SoundType;
        static MOSS_CARPET: $SoundType;
        static SMALL_AMETHYST_BUD: $SoundType;
        static ANVIL: $SoundType;
        static CHERRY_SAPLING: $SoundType;
        static ROOTS: $SoundType;
        static WART_BLOCK: $SoundType;
        static SCULK_VEIN: $SoundType;
        static WET_SPONGE: $SoundType;
        pitch: number;
        static LARGE_AMETHYST_BUD: $SoundType;
        static FUNGUS: $SoundType;
        static TUFF: $SoundType;
        static BAMBOO_SAPLING: $SoundType;
        static DEEPSLATE: $SoundType;
        static NETHER_GOLD_ORE: $SoundType;
        static TWISTING_VINES: $SoundType;
        static PINK_PETALS: $SoundType;
        static SLIME_BLOCK: $SoundType;
        static SCULK_SENSOR: $SoundType;
        static HONEY_BLOCK: $SoundType;
        static TUFF_BRICKS: $SoundType;
        static LILY_PAD: $SoundType;
        static AZALEA: $SoundType;
        static MEDIUM_AMETHYST_BUD: $SoundType;
        static SMALL_DRIPLEAF: $SoundType;
        static LADDER: $SoundType;
        static CHISELED_BOOKSHELF: $SoundType;
        static DECORATED_POT: $SoundType;
        static BASALT: $SoundType;
        static GILDED_BLACKSTONE: $SoundType;
        static POINTED_DRIPSTONE: $SoundType;
        static GLASS: $SoundType;
        static POLISHED_DEEPSLATE: $SoundType;
        static CHERRY_WOOD_HANGING_SIGN: $SoundType;
        static ROOTED_DIRT: $SoundType;
        static DEEPSLATE_BRICKS: $SoundType;
        static SOUL_SAND: $SoundType;
        static AMETHYST: $SoundType;
        static SCULK_CATALYST: $SoundType;
        static BAMBOO_WOOD: $SoundType;
        static CORAL_BLOCK: $SoundType;
        static SCULK_SHRIEKER: $SoundType;
        static SCAFFOLDING: $SoundType;
        static CHAIN: $SoundType;
        static TRIAL_SPAWNER: $SoundType;
        static SOUL_SOIL: $SoundType;
        static CALCITE: $SoundType;
        static VINE: $SoundType;
        static DRIPSTONE_BLOCK: $SoundType;
        static WOOD: $SoundType;
        static CHERRY_WOOD: $SoundType;
        static NETHER_SPROUTS: $SoundType;
        static SUSPICIOUS_SAND: $SoundType;
        static SUSPICIOUS_GRAVEL: $SoundType;
        static FROGLIGHT: $SoundType;
        static CROP: $SoundType;
        static DECORATED_POT_CRACKED: $SoundType;
        static NETHER_WOOD: $SoundType;
        static GRASS: $SoundType;
        static GLOW_LICHEN: $SoundType;
        static WOOL: $SoundType;
        static MUD: $SoundType;
        static SAND: $SoundType;
        static BAMBOO: $SoundType;
        static SNOW: $SoundType;
        static MOSS: $SoundType;
        static WEEPING_VINES: $SoundType;
        static CHERRY_LEAVES: $SoundType;
        static BONE_BLOCK: $SoundType;
        static SPORE_BLOSSOM: $SoundType;
        volume: number;
        static NETHER_WART: $SoundType;
        static FLOWERING_AZALEA: $SoundType;
        static DEEPSLATE_TILES: $SoundType;
        static METAL: $SoundType;
        static AZALEA_LEAVES: $SoundType;
        static SHROOMLIGHT: $SoundType;
        static NETHER_ORE: $SoundType;
        static HANGING_SIGN: $SoundType;
        static BAMBOO_WOOD_HANGING_SIGN: $SoundType;
        static AMETHYST_CLUSTER: $SoundType;
        static VAULT: $SoundType;
        static COPPER: $SoundType;
        static GRAVEL: $SoundType;
        static MANGROVE_ROOTS: $SoundType;
        static LANTERN: $SoundType;
        static COBWEB: $SoundType;
        static POWDER_SNOW: $SoundType;
        static ANCIENT_DEBRIS: $SoundType;
        static EMPTY: $SoundType;
        static NETHER_BRICKS: $SoundType;
        static MUDDY_MANGROVE_ROOTS: $SoundType;
        static BIG_DRIPLEAF: $SoundType;
        static HEAVY_CORE: $SoundType;
        static POLISHED_TUFF: $SoundType;
        static HARD_CROP: $SoundType;
        static LODESTONE: $SoundType;
        static STEM: $SoundType;
        static NETHER_WOOD_HANGING_SIGN: $SoundType;
        static CAVE_VINES: $SoundType;
        static NETHERRACK: $SoundType;
        static WET_GRASS: $SoundType;
        static SPONGE: $SoundType;
        static COPPER_BULB: $SoundType;
        static SCULK: $SoundType;
        static FROGSPAWN: $SoundType;
        static SWEET_BERRY_BUSH: $SoundType;
        static STONE: $SoundType;
        constructor(arg0: number, arg1: number, arg2: $Supplier_<$SoundEvent>, arg3: $Supplier_<$SoundEvent>, arg4: $Supplier_<$SoundEvent>, arg5: $Supplier_<$SoundEvent>, arg6: $Supplier_<$SoundEvent>);
    }
    export class $AttributeUtil$ClientAccess {
    }
    export class $TextTable {
        append(arg0: $StringBuilder, arg1: string): void;
        clear(): void;
        add(...arg0: $Object[]): void;
        build(arg0: string): string;
        static column(arg0: string): $TextTable$Column;
        static column(arg0: string, arg1: $TextTable$Alignment_): $TextTable$Column;
        getColumns(): $List<$TextTable$Column>;
        constructor(arg0: $List_<$TextTable$Column>);
        get columns(): $List<$TextTable$Column>;
    }
    export class $LogicalSidedProvider<T> {
        get(arg0: $LogicalSide_): T;
        static setClient(arg0: $Supplier_<$Minecraft>): void;
        static setServer(arg0: $Supplier_<$MinecraftServer>): void;
        static WORKQUEUE: $LogicalSidedProvider<$BlockableEventLoop<$TickTask>>;
        static CLIENTWORLD: $LogicalSidedProvider<($Level) | undefined>;
        static set client(value: $Supplier_<$Minecraft>);
        static set server(value: $Supplier_<$MinecraftServer>);
    }
    export class $FakePlayerFactory {
        static get(arg0: $ServerLevel, arg1: $GameProfile): $FakePlayer;
        static unloadLevel(arg0: $ServerLevel): void;
        static getMinecraft(arg0: $ServerLevel): $FakePlayer;
        constructor();
    }
    export class $ConcatenatedListView<T> implements $List<T> {
        remove(arg0: $Object): boolean;
        remove(arg0: number): T;
        size(): number;
        get(arg0: number): T;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        add(arg0: number, arg1: T): void;
        add(arg0: T): boolean;
        subList(arg0: number, arg1: number): $List<T>;
        toArray<T1>(arg0: T1[]): T1[];
        toArray(): $Object[];
        iterator(): $Iterator<T>;
        static of<T>(...arg0: $List_<T>[]): $ConcatenatedListView<T>;
        static of<T>(arg0: $List_<$List_<T>>): $List<T>;
        contains(arg0: $Object): boolean;
        spliterator(): $Spliterator<T>;
        addAll(arg0: $Collection_<T>): boolean;
        addAll(arg0: number, arg1: $Collection_<T>): boolean;
        set(arg0: number, arg1: T): T;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(arg0: number): $ListIterator<T>;
        listIterator(): $ListIterator<T>;
        containsAll(arg0: $Collection_<never>): boolean;
        replaceAll(arg0: $UnaryOperator_<T>): void;
        sort(arg0: $Comparator<T>): void;
        getFirst(): T;
        getLast(): T;
        addFirst(arg0: T): void;
        addLast(arg0: T): void;
        removeFirst(): T;
        removeLast(): T;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<T>;
        removeIf(arg0: $Predicate_<T>): boolean;
        parallelStream(): $Stream<T>;
        forEach(arg0: $Consumer_<T>): void;
        reversed(): $SequencedCollection<T>;
        [Symbol.iterator](): Iterator<T>
        get empty(): boolean;
        get first(): T;
        get last(): T;
    }
    export class $RecipeMatcher {
        static findMatches<T>(arg0: $List_<T>, arg1: $List_<$Predicate_<T>>): number[];
        constructor();
    }
    export class $JsonUtils$ImmutableMapTypeAdapter extends $Enum<$JsonUtils$ImmutableMapTypeAdapter> implements $JsonDeserializer<$ImmutableMap<string, never>>, $JsonSerializer<$ImmutableMap<string, never>> {
        static values(): $JsonUtils$ImmutableMapTypeAdapter[];
        static valueOf(arg0: string): $JsonUtils$ImmutableMapTypeAdapter;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ImmutableMap<string, never>;
        serialize(arg0: $ImmutableMap<string, never>, arg1: $Type, arg2: $JsonSerializationContext): $JsonElement;
        static INSTANCE: $JsonUtils$ImmutableMapTypeAdapter;
    }
    /**
     * Values that may be interpreted as {@link $JsonUtils$ImmutableMapTypeAdapter}.
     */
    export type $JsonUtils$ImmutableMapTypeAdapter_ = "instance";
    export class $INBTSerializable<T extends $Tag> {
    }
    export interface $INBTSerializable<T extends $Tag> {
        serializeNBT(arg0: $HolderLookup$Provider): T;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: T): void;
    }
    export class $SortedProperties extends $Properties {
        static store(arg0: $Properties, arg1: $Writer, arg2: string): void;
        constructor();
    }
    export class $TablePrinter<T> {
        add(arg0: T, ...arg1: T[]): $TablePrinter<T>;
        add(arg0: T): $TablePrinter<T>;
        add(arg0: $Collection_<T>): $TablePrinter<T>;
        build(arg0: $StringBuilder): void;
        header(arg0: string, arg1: $Function_<T, string>, arg2: boolean): $TablePrinter<T>;
        header(arg0: string, arg1: $Function_<T, string>): $TablePrinter<T>;
        clearRows(): void;
        constructor();
    }
    export class $TablePrinter$Header<T> {
    }
    export class $TextTable$Column {
        format(arg0: string, arg1: string): string;
        getSeparator(arg0: string): string;
        fit(arg0: string): void;
        getWidth(): number;
        resetWidth(): void;
        formatHeader(arg0: string): string;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $TextTable$Alignment_);
        get width(): number;
    }
    export class $TextTable$Alignment extends $Enum<$TextTable$Alignment> {
        static values(): $TextTable$Alignment[];
        static valueOf(arg0: string): $TextTable$Alignment;
        static CENTER: $TextTable$Alignment;
        static LEFT: $TextTable$Alignment;
        static RIGHT: $TextTable$Alignment;
    }
    /**
     * Values that may be interpreted as {@link $TextTable$Alignment}.
     */
    export type $TextTable$Alignment_ = "left" | "center" | "right";
    export class $MutableHashedLinkedMap$MergeFunction<Key, Value> {
    }
    export interface $MutableHashedLinkedMap$MergeFunction<Key, Value> {
        apply(arg0: Key, arg1: Value, arg2: Value): Value;
    }
    /**
     * Values that may be interpreted as {@link $MutableHashedLinkedMap$MergeFunction}.
     */
    export type $MutableHashedLinkedMap$MergeFunction_<Key, Value> = ((arg0: Key, arg1: Value, arg2: Value) => Value);
    export class $HexDumper {
        static dump(arg0: number[], arg1: number): string;
        static dump(arg0: number[]): string;
        static dump(arg0: $ByteBuf): string;
        constructor();
    }
    export class $NeoForgeExtraCodecs$AlternativeMapCodec<T> extends $MapCodec<T> {
    }
}
