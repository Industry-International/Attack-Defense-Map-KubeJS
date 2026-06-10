import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot, $LivingEntity, $Mob, $RelativeMovement_, $RelativeMovement, $Entity, $EquipmentSlot_, $EntityType, $ExperienceOrb } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $NumberFormat } from "@package/net/minecraft/network/chat/numbers";
import { $RootCommandNode } from "@package/com/mojang/brigadier/tree";
import { $Bee } from "@package/net/minecraft/world/entity/animal";
import { $AdvancementHolder_, $AdvancementHolder, $AdvancementProgress } from "@package/net/minecraft/advancements";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $InteractionHand_, $Difficulty_, $BossEvent, $BossEvent$BossBarColor_, $TickRateManager, $BossEvent$BossBarOverlay_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $SoundEvent, $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $ChatFormatting } from "@package/net/minecraft";
import { $IServerGamePacketListenerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $ServerboundPacketListener, $ProtocolInfo$Unbound, $FriendlyByteBuf, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ClickType_, $RecipeBookType, $RecipeBookType_, $ClickType, $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $StructureStart } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortSet } from "@package/it/unimi/dsi/fastutil/shorts";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $ItemStack_, $ItemStack, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $SignedMessageBody$Packed_, $RemoteChatSession$Data, $MessageSignature$Packed_, $ChatType$Bound_, $MessageSignature_, $RemoteChatSession$Data_, $FilterMask, $LastSeenMessages$Update_, $Component_, $ChatType$Bound, $SignedMessageBody$Packed, $MessageSignature, $MessageSignature$Packed, $Component, $LastSeenMessages$Update } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $LevelChunkSection, $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Abilities } from "@package/net/minecraft/world/entity/player";
import { $ServerboundMovePlayerPacketExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels/player";
import { $CommandBuildContext, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Instant } from "@package/java/time";
import { $RemoteDebugSampleType_, $RemoteDebugSampleType } from "@package/net/minecraft/util/debugchart";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $Mirror_, $Block, $Rotation_, $Mirror, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $BlockHitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $Stat, $RecipeBookSettings, $Stat_ } from "@package/net/minecraft/stats";
import { $IWorldMapSMultiBlockChangePacket } from "@package/xaero/map/core";
import { $ObjectiveCriteria$RenderType } from "@package/net/minecraft/world/scores/criteria";
import { $GameEventListener, $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $Attribute, $AttributeModifier_, $AttributeModifier, $AttributeInstance } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $BitSet, $Optional, $Map, $EnumSet, $Map_, $Collection, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientCommonPacketListener, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $BiFunction_, $BiConsumer_, $Consumer } from "@package/java/util/function";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $GlobalPos, $Direction_, $NonNullList, $Direction, $Holder_, $BlockPos, $BlockPos_, $Vec3i, $Holder, $GlobalPos_, $RegistryAccess, $SectionPos } from "@package/net/minecraft/core";
import { $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $PacketType, $BundlePacket, $BundleDelimiterPacket, $Packet } from "@package/net/minecraft/network/protocol";
import { $MapId_, $MapDecoration_, $MapItemSavedData$MapPatch_, $MapItemSavedData$MapPatch, $MapDecoration, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Iterable_, $Exception, $Record } from "@package/java/lang";
import { $ChunkPos, $Level_, $GameType, $WorldGenLevel, $Level, $BlockGetter, $BaseCommandBlock, $Explosion$BlockInteraction_, $GameType_, $Explosion$BlockInteraction } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap, $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Logger } from "@package/org/slf4j";
import { $ArgumentSignatures, $ArgumentSignatures_, $EntityAnchorArgument$Anchor_, $EntityAnchorArgument$Anchor } from "@package/net/minecraft/commands/arguments";
import { $Raid } from "@package/net/minecraft/world/entity/raid";
import { $PacketActuallyInSubLevelExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels/packet_mixin";
import { $ClientPongPacketListener, $ServerPingPacketListener } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapSMultiBlockChangePacket } from "@package/xaero/common/core";
import { $SynchedEntityData$DataValue_, $SynchedEntityData$DataValue } from "@package/net/minecraft/network/syncher";
import { $IMapDataPacketExtension } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DisplaySlot_, $PlayerTeam, $Objective, $DisplaySlot } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType_, $CommandBlockEntity$Mode_, $BeehiveBlockEntity, $BlockEntityType, $StructureBlockEntity$UpdateType_, $BlockEntity, $JigsawBlockEntity$JointType_, $StructureBlockEntity$UpdateType, $JigsawBlockEntity$JointType, $CommandBlockEntity$Mode } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSource_, $DamageType, $CombatTracker } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/network/protocol/game" {
    export class $ClientboundSetBorderSizePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderSizePacket>;
        getSize(): number;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderSizePacket>;
        constructor(arg0: $WorldBorder);
        get size(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerPositionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerPositionPacket>;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getY(): number;
        getX(): number;
        getZ(): number;
        getYRot(): number;
        getXRot(): number;
        getRelativeArguments(): $Set<$RelativeMovement>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerPositionPacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Set_<$RelativeMovement_>, arg6: number);
        get id(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get YRot(): number;
        get XRot(): number;
        get relativeArguments(): $Set<$RelativeMovement>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundCommandSuggestionPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundCommandSuggestionPacket>;
        getId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        getCommand(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCommandSuggestionPacket>;
        constructor(arg0: number, arg1: string);
        get id(): number;
        get command(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSignUpdatePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSignUpdatePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getLines(): string[];
        getPos(): $BlockPos;
        isFrontText(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSignUpdatePacket>;
        constructor(arg0: $BlockPos_, arg1: boolean, arg2: string, arg3: string, arg4: string, arg5: string);
        get lines(): string[];
        get pos(): $BlockPos;
        get frontText(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBossEventPacket>;
        dispatch(arg0: $ClientboundBossEventPacket$Handler): void;
        handle(arg0: $ClientGamePacketListener): void;
        static createAddPacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static encodeProperties(arg0: boolean, arg1: boolean, arg2: boolean): number;
        static createRemovePacket(arg0: $UUID_): $ClientboundBossEventPacket;
        static createUpdateProgressPacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateStylePacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateNamePacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static createUpdatePropertiesPacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static REMOVE_OPERATION: $ClientboundBossEventPacket$Operation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBossEventPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRotateHeadPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRotateHeadPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEntity(arg0: $Level_): $Entity;
        getYHeadRot(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRotateHeadPacket>;
        constructor(arg0: $Entity, arg1: number);
        get YHeadRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundInitializeBorderPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundInitializeBorderPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getNewSize(): number;
        getOldSize(): number;
        getNewAbsoluteMaxSize(): number;
        getNewCenterX(): number;
        getLerpTime(): number;
        getNewCenterZ(): number;
        getWarningTime(): number;
        getWarningBlocks(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundInitializeBorderPacket>;
        constructor(arg0: $WorldBorder);
        get newSize(): number;
        get oldSize(): number;
        get newAbsoluteMaxSize(): number;
        get newCenterX(): number;
        get lerpTime(): number;
        get newCenterZ(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunkBatchFinishedPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChunkBatchFinishedPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        batchSize(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChunkBatchFinishedPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetStructureBlockPacket implements $Packet<$ServerGamePacketListener> {
        getName(): string;
        type(): $PacketType<$ServerboundSetStructureBlockPacket>;
        getSize(): $Vec3i;
        handle(arg0: $ServerGamePacketListener): void;
        getOffset(): $BlockPos;
        getSeed(): number;
        getData(): string;
        getMode(): $StructureMode;
        getMirror(): $Mirror;
        getPos(): $BlockPos;
        getRotation(): $Rotation;
        isShowAir(): boolean;
        isIgnoreEntities(): boolean;
        getIntegrity(): number;
        getUpdateType(): $StructureBlockEntity$UpdateType;
        isShowBoundingBox(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetStructureBlockPacket>;
        constructor(arg0: $BlockPos_, arg1: $StructureBlockEntity$UpdateType_, arg2: $StructureMode_, arg3: string, arg4: $BlockPos_, arg5: $Vec3i, arg6: $Mirror_, arg7: $Rotation_, arg8: string, arg9: boolean, arg10: boolean, arg11: boolean, arg12: number, arg13: number);
        get name(): string;
        get size(): $Vec3i;
        get offset(): $BlockPos;
        get seed(): number;
        get data(): string;
        get mode(): $StructureMode;
        get mirror(): $Mirror;
        get pos(): $BlockPos;
        get rotation(): $Rotation;
        get showAir(): boolean;
        get ignoreEntities(): boolean;
        get integrity(): number;
        get updateType(): $StructureBlockEntity$UpdateType;
        get showBoundingBox(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBlockUpdatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockUpdatePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        getBlockState(): $BlockState;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockUpdatePacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockGetter, arg1: $BlockPos_);
        get pos(): $BlockPos;
        get blockState(): $BlockState;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetObjectivePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetObjectivePacket>;
        getMethod(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getDisplayName(): $Component;
        getNumberFormat(): ($NumberFormat) | undefined;
        getRenderType(): $ObjectiveCriteria$RenderType;
        getObjectiveName(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static METHOD_ADD: number;
        static METHOD_REMOVE: number;
        static METHOD_CHANGE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetObjectivePacket>;
        constructor(arg0: $Objective, arg1: number);
        get method(): number;
        get displayName(): $Component;
        get numberFormat(): ($NumberFormat) | undefined;
        get renderType(): $ObjectiveCriteria$RenderType;
        get objectiveName(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundJigsawGeneratePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundJigsawGeneratePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        levels(): number;
        getPos(): $BlockPos;
        keepJigsaws(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundJigsawGeneratePacket>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: boolean);
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket implements $Packet<$ServerGamePacketListener>, $ServerboundMovePlayerPacketExtension {
        type(): $PacketType<$ServerboundMovePlayerPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getY(arg0: number): number;
        getX(arg0: number): number;
        getZ(arg0: number): number;
        isOnGround(): boolean;
        getYRot(arg0: number): number;
        getXRot(arg0: number): number;
        hasPosition(): boolean;
        hasRotation(): boolean;
        sable$handle(arg0: $ServerPlayer): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        onGround: boolean;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        hasRot: boolean;
        z: number;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Action$Writer {
    }
    export interface $ClientboundPlayerInfoUpdatePacket$Action$Writer {
        write(arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Writer}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Writer_ = ((arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry) => void);
    export class $ClientboundLightUpdatePacketData {
        write(arg0: $FriendlyByteBuf): void;
        getEmptyBlockYMask(): $BitSet;
        getBlockUpdates(): $List<number[]>;
        getSkyUpdates(): $List<number[]>;
        getEmptySkyYMask(): $BitSet;
        getSkyYMask(): $BitSet;
        getBlockYMask(): $BitSet;
        constructor(arg0: $ChunkPos, arg1: $LevelLightEngine, arg2: $BitSet, arg3: $BitSet);
        constructor(arg0: $FriendlyByteBuf, arg1: number, arg2: number);
        get emptyBlockYMask(): $BitSet;
        get blockUpdates(): $List<number[]>;
        get skyUpdates(): $List<number[]>;
        get emptySkyYMask(): $BitSet;
        get skyYMask(): $BitSet;
        get blockYMask(): $BitSet;
    }
    export class $ClientboundSetDisplayObjectivePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetDisplayObjectivePacket>;
        getSlot(): $DisplaySlot;
        handle(arg0: $ClientGamePacketListener): void;
        getObjectiveName(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDisplayObjectivePacket>;
        constructor(arg0: $DisplaySlot_, arg1: $Objective);
        get slot(): $DisplaySlot;
        get objectiveName(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundClientCommandPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundClientCommandPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getAction(): $ServerboundClientCommandPacket$Action;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundClientCommandPacket>;
        constructor(arg0: $ServerboundClientCommandPacket$Action_);
        get action(): $ServerboundClientCommandPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitleTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTitleTextPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        text(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetTitleTextPacket>;
        constructor(arg0: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatAckPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatAckPacket>;
        offset(): number;
        handle(arg0: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenBookPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundOpenBookPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getHand(): $InteractionHand;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenBookPacket>;
        constructor(arg0: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundGameEventPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEvent(): $ClientboundGameEventPacket$Type;
        getParam(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static DEMO_PARAM_HINT_4: number;
        static DEMO_PARAM_HINT_3: number;
        static STOP_RAINING: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_HINT_2: number;
        static START_RAINING: $ClientboundGameEventPacket$Type;
        static LIMITED_CRAFTING: $ClientboundGameEventPacket$Type;
        static PUFFER_FISH_STING: $ClientboundGameEventPacket$Type;
        static CHANGE_GAME_MODE: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_HINT_1: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundGameEventPacket>;
        static THUNDER_LEVEL_CHANGE: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_INTRO: number;
        static LEVEL_CHUNKS_LOAD_START: $ClientboundGameEventPacket$Type;
        static NO_RESPAWN_BLOCK_AVAILABLE: $ClientboundGameEventPacket$Type;
        static DEMO_EVENT: $ClientboundGameEventPacket$Type;
        static WIN_GAME: $ClientboundGameEventPacket$Type;
        static IMMEDIATE_RESPAWN: $ClientboundGameEventPacket$Type;
        static ARROW_HIT_PLAYER: $ClientboundGameEventPacket$Type;
        static GUARDIAN_ELDER_EFFECT: $ClientboundGameEventPacket$Type;
        static RAIN_LEVEL_CHANGE: $ClientboundGameEventPacket$Type;
        constructor(arg0: $ClientboundGameEventPacket$Type, arg1: number);
        get event(): $ClientboundGameEventPacket$Type;
        get param(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemOnPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundUseItemOnPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getSequence(): number;
        getHitResult(): $BlockHitResult;
        getHand(): $InteractionHand;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemOnPacket>;
        constructor(arg0: $InteractionHand_, arg1: $BlockHitResult, arg2: number);
        get sequence(): number;
        get hitResult(): $BlockHitResult;
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetCameraPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetCameraPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEntity(arg0: $Level_): $Entity;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCameraPacket>;
        constructor(arg0: $Entity);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$AddOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSetChunkCacheCenterPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetChunkCacheCenterPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getX(): number;
        getZ(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheCenterPacket>;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$Action {
    }
    export interface $ServerboundInteractPacket$Action {
    }
    export class $ServerboundChatCommandSignedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatCommandSignedPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        command(): string;
        salt(): number;
        timeStamp(): $Instant;
        lastSeenMessages(): $LastSeenMessages$Update;
        argumentSignatures(): $ArgumentSignatures;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatCommandSignedPacket>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $ArgumentSignatures_, arg4: $LastSeenMessages$Update_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$NodeStub {
    }
    export interface $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundUpdateAttributesPacket$AttributeSnapshot extends $Record {
        modifiers(): $Collection<$AttributeModifier>;
        base(): number;
        attribute(): $Holder<$Attribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        static MODIFIER_STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier>;
        constructor(arg0: $Holder_<$Attribute>, arg1: number, arg2: $Collection_<$AttributeModifier_>);
    }
    export class $ClientboundProjectilePowerPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundProjectilePowerPacket>;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getAccelerationPower(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundProjectilePowerPacket>;
        constructor(arg0: number, arg1: number);
        get id(): number;
        get accelerationPower(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSwingPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSwingPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getHand(): $InteractionHand;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSwingPacket>;
        constructor(arg0: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenScreenPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundOpenScreenPacket>;
        getType(): $MenuType<never>;
        handle(arg0: $ClientGamePacketListener): void;
        getTitle(): $Component;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundOpenScreenPacket>;
        constructor(arg0: number, arg1: $MenuType_<never>, arg2: $Component_);
        get title(): $Component;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSelectAdvancementsTabPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSelectAdvancementsTabPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getTab(): $ResourceLocation;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSelectAdvancementsTabPacket>;
        constructor(arg0: $ResourceLocation_);
        get tab(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundResetScorePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundResetScorePacket>;
        owner(): string;
        handle(arg0: $ClientGamePacketListener): void;
        objectiveName(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundResetScorePacket>;
        constructor(arg0: string, arg1: string);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMapItemDataPacket extends $Record implements $Packet<$ClientGamePacketListener>, $IMapDataPacketExtension {
        type(): $PacketType<$ClientboundMapItemDataPacket>;
        scale(): number;
        handle(arg0: $ClientGamePacketListener): void;
        colorPatch(): ($MapItemSavedData$MapPatch) | undefined;
        locked(): boolean;
        decorations(): ($List<$MapDecoration>) | undefined;
        moonlight$getDirtyCustomData(): $Optional<any>;
        applyToMap(arg0: $MapItemSavedData): void;
        mapId(): $MapId;
        moonlight$getCustomDecorations(): $Optional<any>;
        moonlight$setCustomDecorations(arg0: $Optional<any>): void;
        moonlight$setDirtyCustomData(arg0: $Optional<any>): void;
        moonlight$getMapCenterX(): number;
        moonlight$setDimension(arg0: $ResourceLocation_): void;
        moonlight$setMapCenter(arg0: number, arg1: number): void;
        moonlight$getMapCenterZ(): number;
        moonlight$getDimension(): $ResourceLocation;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMapItemDataPacket>;
        constructor(arg0: $MapId_, arg1: number, arg2: boolean, arg3: $Collection_<$MapDecoration_>, arg4: $MapItemSavedData$MapPatch_);
        constructor(arg0: $MapId_, arg1: number, arg2: boolean, arg3: ($List_<$MapDecoration_>) | undefined, arg4: ($MapItemSavedData$MapPatch_) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $VecDeltaCodec {
        decode(arg0: number, arg1: number, arg2: number): $Vec3;
        static decode(arg0: number): number;
        static encode(arg0: number): number;
        delta(arg0: $Vec3_): $Vec3;
        getBase(): $Vec3;
        setBase(arg0: $Vec3_): void;
        encodeY(arg0: $Vec3_): number;
        encodeZ(arg0: $Vec3_): number;
        encodeX(arg0: $Vec3_): number;
        constructor();
    }
    export class $ServerboundPlayerCommandPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerCommandPacket>;
        getId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        getData(): number;
        getAction(): $ServerboundPlayerCommandPacket$Action;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerCommandPacket>;
        constructor(arg0: $Entity, arg1: $ServerboundPlayerCommandPacket$Action_, arg2: number);
        constructor(arg0: $Entity, arg1: $ServerboundPlayerCommandPacket$Action_);
        get id(): number;
        get data(): number;
        get action(): $ServerboundPlayerCommandPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundStartConfigurationPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundStartConfigurationPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ClientboundStartConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundStartConfigurationPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundForgetLevelChunkPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundForgetLevelChunkPacket>;
        pos(): $ChunkPos;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundForgetLevelChunkPacket>;
        constructor(arg0: $ChunkPos);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetBorderWarningDistancePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderWarningDistancePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getWarningBlocks(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDistancePacket>;
        constructor(arg0: $WorldBorder);
        get warningBlocks(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStatePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTickingStatePacket>;
        static from(arg0: $TickRateManager): $ClientboundTickingStatePacket;
        handle(arg0: $ClientGamePacketListener): void;
        isFrozen(): boolean;
        tickRate(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTickingStatePacket>;
        constructor(arg0: number, arg1: boolean);
        get frozen(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetCarriedItemPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetCarriedItemPacket>;
        getSlot(): number;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCarriedItemPacket>;
        constructor(arg0: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunksBiomesPacket$ChunkBiomeData extends $Record {
        buffer(): number[];
        write(arg0: $FriendlyByteBuf): void;
        pos(): $ChunkPos;
        getReadBuffer(): $FriendlyByteBuf;
        static extractChunkData(arg0: $FriendlyByteBuf, arg1: $LevelChunk): void;
        constructor(arg0: $ChunkPos, arg1: number[]);
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $LevelChunk);
        get readBuffer(): $FriendlyByteBuf;
    }
    export class $ClientboundPlayerInfoRemovePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerInfoRemovePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        profileIds(): $List<$UUID>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerInfoRemovePacket>;
        constructor(arg0: $List_<$UUID_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetActionBarTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetActionBarTextPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        text(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetActionBarTextPacket>;
        constructor(arg0: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $GameProtocols {
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientGamePacketListener, $RegistryFriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerGamePacketListener, $RegistryFriendlyByteBuf>;
        constructor();
    }
    export class $ServerboundRenameItemPacket implements $Packet<$ServerGamePacketListener> {
        getName(): string;
        type(): $PacketType<$ServerboundRenameItemPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRenameItemPacket>;
        constructor(arg0: string);
        get name(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
    }
    export interface $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
        accept(arg0: $BlockPos_, arg1: $BlockEntityType_<never>, arg2: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundLevelChunkPacketData$BlockEntityTagOutput}.
     */
    export type $ClientboundLevelChunkPacketData$BlockEntityTagOutput_ = ((arg0: $BlockPos, arg1: $BlockEntityType<never>, arg2: $CompoundTag) => void);
    export class $ClientboundSetHealthPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetHealthPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getHealth(): number;
        getFood(): number;
        getSaturation(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetHealthPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get health(): number;
        get food(): number;
        get saturation(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMerchantOffersPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundMerchantOffersPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getOffers(): $MerchantOffers;
        canRestock(): boolean;
        getVillagerXp(): number;
        showProgress(): boolean;
        getVillagerLevel(): number;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMerchantOffersPacket>;
        constructor(arg0: number, arg1: $MerchantOffers, arg2: number, arg3: number, arg4: boolean, arg5: boolean);
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get villagerLevel(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData {
        write(arg0: $RegistryFriendlyByteBuf): void;
        getBlockEntitiesTagsConsumer(arg0: number, arg1: number): $Consumer<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>;
        getHeightmaps(): $CompoundTag;
        getReadBuffer(): $FriendlyByteBuf;
        static extractChunkData(arg0: $FriendlyByteBuf, arg1: $LevelChunk): void;
        constructor(arg0: $LevelChunk);
        constructor(arg0: $RegistryFriendlyByteBuf, arg1: number, arg2: number);
        get heightmaps(): $CompoundTag;
        get readBuffer(): $FriendlyByteBuf;
    }
    export class $ClientboundSetPlayerTeamPacket$Parameters {
        write(arg0: $RegistryFriendlyByteBuf): void;
        getDisplayName(): $Component;
        getOptions(): number;
        getPlayerPrefix(): $Component;
        getCollisionRule(): string;
        getPlayerSuffix(): $Component;
        getColor(): $ChatFormatting;
        getNametagVisibility(): string;
        constructor(arg0: $PlayerTeam);
        constructor(arg0: $RegistryFriendlyByteBuf);
        get displayName(): $Component;
        get options(): number;
        get playerPrefix(): $Component;
        get collisionRule(): string;
        get playerSuffix(): $Component;
        get color(): $ChatFormatting;
        get nametagVisibility(): string;
    }
    export class $ServerGamePacketListener {
    }
    export interface $ServerGamePacketListener extends $ServerPingPacketListener, $ServerCommonPacketListener, $IServerGamePacketListenerExtension {
        protocol(): $ConnectionProtocol;
        handleRecipeBookSeenRecipePacket(arg0: $ServerboundRecipeBookSeenRecipePacket): void;
        handleCustomCommandSuggestions(arg0: $ServerboundCommandSuggestionPacket): void;
        handleContainerSlotStateChanged(arg0: $ServerboundContainerSlotStateChangedPacket_): void;
        handleConfigurationAcknowledged(arg0: $ServerboundConfigurationAcknowledgedPacket): void;
        handleTeleportToEntityPacket(arg0: $ServerboundTeleportToEntityPacket): void;
        handleDebugSampleSubscription(arg0: $ServerboundDebugSampleSubscriptionPacket_): void;
        handlePickItem(arg0: $ServerboundPickItemPacket): void;
        handlePlayerAbilities(arg0: $ServerboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(arg0: $ServerboundChangeDifficultyPacket): void;
        handleSetCarriedItem(arg0: $ServerboundSetCarriedItemPacket): void;
        handleContainerClose(arg0: $ServerboundContainerClosePacket): void;
        handleMoveVehicle(arg0: $ServerboundMoveVehiclePacket): void;
        handlePlaceRecipe(arg0: $ServerboundPlaceRecipePacket): void;
        handleAnimate(arg0: $ServerboundSwingPacket): void;
        handleMovePlayer(arg0: $ServerboundMovePlayerPacket): void;
        handleRecipeBookChangeSettingsPacket(arg0: $ServerboundRecipeBookChangeSettingsPacket): void;
        handleChat(arg0: $ServerboundChatPacket_): void;
        handleInteract(arg0: $ServerboundInteractPacket): void;
        handleEditBook(arg0: $ServerboundEditBookPacket_): void;
        handleChatCommand(arg0: $ServerboundChatCommandPacket_): void;
        handlePlayerAction(arg0: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(arg0: $ServerboundUseItemOnPacket): void;
        handlePaddleBoat(arg0: $ServerboundPaddleBoatPacket): void;
        handleRenameItem(arg0: $ServerboundRenameItemPacket): void;
        handleChatAck(arg0: $ServerboundChatAckPacket_): void;
        handleSelectTrade(arg0: $ServerboundSelectTradePacket): void;
        handleSignUpdate(arg0: $ServerboundSignUpdatePacket): void;
        handleUseItem(arg0: $ServerboundUseItemPacket): void;
        handlePlayerInput(arg0: $ServerboundPlayerInputPacket): void;
        handleAcceptTeleportPacket(arg0: $ServerboundAcceptTeleportationPacket): void;
        handleSetCommandMinecart(arg0: $ServerboundSetCommandMinecartPacket): void;
        handleBlockEntityTagQuery(arg0: $ServerboundBlockEntityTagQueryPacket): void;
        handleSetCommandBlock(arg0: $ServerboundSetCommandBlockPacket): void;
        handleSetBeaconPacket(arg0: $ServerboundSetBeaconPacket_): void;
        handleEntityTagQuery(arg0: $ServerboundEntityTagQueryPacket): void;
        handleSetJigsawBlock(arg0: $ServerboundSetJigsawBlockPacket): void;
        handleSeenAdvancements(arg0: $ServerboundSeenAdvancementsPacket): void;
        handleSignedChatCommand(arg0: $ServerboundChatCommandSignedPacket_): void;
        handleJigsawGenerate(arg0: $ServerboundJigsawGeneratePacket): void;
        handleSetStructureBlock(arg0: $ServerboundSetStructureBlockPacket): void;
        handleContainerButtonClick(arg0: $ServerboundContainerButtonClickPacket_): void;
        handleContainerClick(arg0: $ServerboundContainerClickPacket): void;
        handleChatSessionUpdate(arg0: $ServerboundChatSessionUpdatePacket_): void;
        handleChunkBatchReceived(arg0: $ServerboundChunkBatchReceivedPacket_): void;
        handlePlayerCommand(arg0: $ServerboundPlayerCommandPacket): void;
        handleClientCommand(arg0: $ServerboundClientCommandPacket): void;
        handleSetCreativeModeSlot(arg0: $ServerboundSetCreativeModeSlotPacket_): void;
        handleLockDifficulty(arg0: $ServerboundLockDifficultyPacket): void;
    }
    export class $ServerboundInteractPacket$Handler {
    }
    export interface $ServerboundInteractPacket$Handler {
        onAttack(): void;
        onInteraction(arg0: $InteractionHand_, arg1: $Vec3_): void;
        onInteraction(arg0: $InteractionHand_): void;
    }
    export class $ServerboundMovePlayerPacket$StatusOnly extends $ServerboundMovePlayerPacket {
        onGround: boolean;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        hasRot: boolean;
        z: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$StatusOnly>;
        hasPos: boolean;
        constructor(arg0: boolean);
    }
    export class $ServerboundMovePlayerPacket$PosRot extends $ServerboundMovePlayerPacket {
        onGround: boolean;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        hasRot: boolean;
        z: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$PosRot>;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $ServerboundClientCommandPacket$Action extends $Enum<$ServerboundClientCommandPacket$Action> {
        static values(): $ServerboundClientCommandPacket$Action[];
        static valueOf(arg0: string): $ServerboundClientCommandPacket$Action;
        static REQUEST_STATS: $ServerboundClientCommandPacket$Action;
        static PERFORM_RESPAWN: $ServerboundClientCommandPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundClientCommandPacket$Action}.
     */
    export type $ServerboundClientCommandPacket$Action_ = "perform_respawn" | "request_stats";
    export class $ServerboundSetCommandBlockPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetCommandBlockPacket>;
        isAutomatic(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        getMode(): $CommandBlockEntity$Mode;
        getPos(): $BlockPos;
        isConditional(): boolean;
        isTrackOutput(): boolean;
        getCommand(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandBlockPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: $CommandBlockEntity$Mode_, arg3: boolean, arg4: boolean, arg5: boolean);
        get automatic(): boolean;
        get mode(): $CommandBlockEntity$Mode;
        get pos(): $BlockPos;
        get conditional(): boolean;
        get trackOutput(): boolean;
        get command(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlaceRecipePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlaceRecipePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isShiftDown(): boolean;
        getRecipe(): $ResourceLocation;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlaceRecipePacket>;
        constructor(arg0: number, arg1: $RecipeHolder_<never>, arg2: boolean);
        get shiftDown(): boolean;
        get recipe(): $ResourceLocation;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundHurtAnimationPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundHurtAnimationPacket>;
        id(): number;
        handle(arg0: $ClientGamePacketListener): void;
        yaw(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHurtAnimationPacket>;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $LivingEntity);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetCreativeModeSlotPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetCreativeModeSlotPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        itemStack(): $ItemStack;
        slotNum(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetCreativeModeSlotPacket>;
        constructor(arg0: number, arg1: $ItemStack_);
        constructor(arg0: number, arg1: $ItemStack_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateMobEffectPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateMobEffectPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEffect(): $Holder<$MobEffect>;
        getEffectDurationTicks(): number;
        getEntityId(): number;
        isEffectVisible(): boolean;
        shouldBlend(): boolean;
        getEffectAmplifier(): number;
        isEffectAmbient(): boolean;
        effectShowsIcon(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateMobEffectPacket>;
        constructor(arg0: number, arg1: $MobEffectInstance, arg2: boolean);
        get effect(): $Holder<$MobEffect>;
        get effectDurationTicks(): number;
        get entityId(): number;
        get effectVisible(): boolean;
        get effectAmplifier(): number;
        get effectAmbient(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$ActionType extends $Enum<$ServerboundInteractPacket$ActionType> {
    }
    /**
     * Values that may be interpreted as {@link $ServerboundInteractPacket$ActionType}.
     */
    export type $ServerboundInteractPacket$ActionType_ = "interact" | "attack" | "interact_at";
    export class $ClientboundBossEventPacket$OperationType extends $Enum<$ClientboundBossEventPacket$OperationType> {
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBossEventPacket$OperationType}.
     */
    export type $ClientboundBossEventPacket$OperationType_ = "add" | "remove" | "update_progress" | "update_name" | "update_style" | "update_properties";
    export class $ClientboundHorseScreenOpenPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundHorseScreenOpenPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getInventoryColumns(): number;
        getEntityId(): number;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHorseScreenOpenPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get inventoryColumns(): number;
        get entityId(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetCommandMinecartPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetCommandMinecartPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isTrackOutput(): boolean;
        getCommand(): string;
        getCommandBlock(arg0: $Level_): $BaseCommandBlock;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandMinecartPacket>;
        constructor(arg0: number, arg1: string, arg2: boolean);
        get trackOutput(): boolean;
        get command(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerAbilitiesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerAbilitiesPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isFlying(): boolean;
        getFlyingSpeed(): number;
        getWalkingSpeed(): number;
        isInvulnerable(): boolean;
        canFly(): boolean;
        canInstabuild(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        flyingSpeed: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerAbilitiesPacket>;
        constructor(arg0: $Abilities);
        get flying(): boolean;
        get walkingSpeed(): number;
        get invulnerable(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateRecipesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateRecipesPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getRecipes(): $List<$RecipeHolder<never>>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateRecipesPacket>;
        constructor(arg0: $Collection_<$RecipeHolder_<never>>);
        get recipes(): $List<$RecipeHolder<never>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPaddleBoatPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPaddleBoatPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getLeft(): boolean;
        getRight(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPaddleBoatPacket>;
        constructor(arg0: boolean, arg1: boolean);
        get left(): boolean;
        get right(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateProgressOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundEntityEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundEntityEventPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEntity(arg0: $Level_): $Entity;
        getEventId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundEntityEventPacket>;
        constructor(arg0: $Entity, arg1: number);
        get eventId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateAttributesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateAttributesPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getValues(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        getEntityId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAttributesPacket>;
        constructor(arg0: number, arg1: $Collection_<$AttributeInstance>);
        get values(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        get entityId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCommandsPacket>;
        getRoot(arg0: $CommandBuildContext): $RootCommandNode<$SharedSuggestionProvider>;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCommandsPacket>;
        constructor(arg0: $RootCommandNode<$SharedSuggestionProvider>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$LiteralNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundStopSoundPacket implements $Packet<$ClientGamePacketListener> {
        getName(): $ResourceLocation;
        type(): $PacketType<$ClientboundStopSoundPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getSource(): $SoundSource;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStopSoundPacket>;
        constructor(arg0: $ResourceLocation_, arg1: $SoundSource_);
        get name(): $ResourceLocation;
        get source(): $SoundSource;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookChangeSettingsPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundRecipeBookChangeSettingsPacket>;
        isOpen(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        isFiltering(): boolean;
        getBookType(): $RecipeBookType;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookChangeSettingsPacket>;
        constructor(arg0: $RecipeBookType_, arg1: boolean, arg2: boolean);
        get open(): boolean;
        get filtering(): boolean;
        get bookType(): $RecipeBookType;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$Entry {
    }
    export class $ServerboundConfigurationAcknowledgedPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundConfigurationAcknowledgedPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundConfigurationAcknowledgedPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundConfigurationAcknowledgedPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundSetSubtitleTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetSubtitleTextPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        text(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetSubtitleTextPacket>;
        constructor(arg0: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRemoveMobEffectPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRemoveMobEffectPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEntity(arg0: $Level_): $Entity;
        effect(): $Holder<$MobEffect>;
        entityId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundRemoveMobEffectPacket>;
        constructor(arg0: number, arg1: $Holder_<$MobEffect>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$Pos extends $ClientboundMoveEntityPacket implements $PacketActuallyInSubLevelExtension {
        sable$setActuallyInSubLevel(arg0: boolean): void;
        sable$isActuallyInSubLevel(): boolean;
        onGround: boolean;
        yRot: number;
        za: number;
        ya: number;
        xRot: number;
        xa: number;
        hasRot: boolean;
        entityId: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$Pos>;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean);
    }
    export class $ClientboundChangeDifficultyPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChangeDifficultyPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isLocked(): boolean;
        getDifficulty(): $Difficulty;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChangeDifficultyPacket>;
        constructor(arg0: $Difficulty_, arg1: boolean);
        get locked(): boolean;
        get difficulty(): $Difficulty;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityMotionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEntityMotionPacket>;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getYa(): number;
        getXa(): number;
        getZa(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityMotionPacket>;
        constructor(arg0: number, arg1: $Vec3_);
        constructor(arg0: $Entity);
        get id(): number;
        get ya(): number;
        get xa(): number;
        get za(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerActionPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerActionPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getSequence(): number;
        getAction(): $ServerboundPlayerActionPacket$Action;
        getPos(): $BlockPos;
        getDirection(): $Direction;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerActionPacket>;
        constructor(arg0: $ServerboundPlayerActionPacket$Action_, arg1: $BlockPos_, arg2: $Direction_);
        constructor(arg0: $ServerboundPlayerActionPacket$Action_, arg1: $BlockPos_, arg2: $Direction_, arg3: number);
        get sequence(): number;
        get action(): $ServerboundPlayerActionPacket$Action;
        get pos(): $BlockPos;
        get direction(): $Direction;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEquipmentPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEquipmentPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEntity(): number;
        getSlots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetEquipmentPacket>;
        constructor(arg0: number, arg1: $List_<$Pair<$EquipmentSlot_, $ItemStack_>>);
        get entity(): number;
        get slots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAddEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAddEntityPacket>;
        getId(): number;
        getType(): $EntityType<never>;
        handle(arg0: $ClientGamePacketListener): void;
        getData(): number;
        getY(): number;
        getX(): number;
        getZ(): number;
        getYa(): number;
        getXa(): number;
        getZa(): number;
        getYHeadRot(): number;
        getUUID(): $UUID;
        getYRot(): number;
        getXRot(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAddEntityPacket>;
        constructor(arg0: number, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $EntityType_<never>, arg8: number, arg9: $Vec3_, arg10: number);
        constructor(arg0: $Entity, arg1: number, arg2: $BlockPos_);
        constructor(arg0: $Entity, arg1: $ServerEntity, arg2: number);
        constructor(arg0: $Entity, arg1: $ServerEntity);
        get id(): number;
        get data(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get ya(): number;
        get xa(): number;
        get za(): number;
        get YHeadRot(): number;
        get UUID(): $UUID;
        get YRot(): number;
        get XRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerCommandPacket$Action extends $Enum<$ServerboundPlayerCommandPacket$Action> {
        static values(): $ServerboundPlayerCommandPacket$Action[];
        static valueOf(arg0: string): $ServerboundPlayerCommandPacket$Action;
        static PRESS_SHIFT_KEY: $ServerboundPlayerCommandPacket$Action;
        static STOP_RIDING_JUMP: $ServerboundPlayerCommandPacket$Action;
        static STOP_SLEEPING: $ServerboundPlayerCommandPacket$Action;
        static START_RIDING_JUMP: $ServerboundPlayerCommandPacket$Action;
        static START_SPRINTING: $ServerboundPlayerCommandPacket$Action;
        static STOP_SPRINTING: $ServerboundPlayerCommandPacket$Action;
        static START_FALL_FLYING: $ServerboundPlayerCommandPacket$Action;
        static RELEASE_SHIFT_KEY: $ServerboundPlayerCommandPacket$Action;
        static OPEN_INVENTORY: $ServerboundPlayerCommandPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundPlayerCommandPacket$Action}.
     */
    export type $ServerboundPlayerCommandPacket$Action_ = "press_shift_key" | "release_shift_key" | "stop_sleeping" | "start_sprinting" | "stop_sprinting" | "start_riding_jump" | "stop_riding_jump" | "open_inventory" | "start_fall_flying";
    export class $ServerboundLockDifficultyPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundLockDifficultyPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isLocked(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundLockDifficultyPacket>;
        constructor(arg0: boolean);
        get locked(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatKillPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerCombatKillPacket>;
        message(): $Component;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        playerId(): number;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerCombatKillPacket>;
        constructor(arg0: number, arg1: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket$Pos extends $ServerboundMovePlayerPacket {
        onGround: boolean;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        hasRot: boolean;
        z: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$Pos>;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
    }
    export class $ClientboundBossEventPacket$UpdatePropertiesOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundCommandSuggestionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCommandSuggestionsPacket>;
        length(): number;
        id(): number;
        start(): number;
        handle(arg0: $ClientGamePacketListener): void;
        suggestions(): $List<$ClientboundCommandSuggestionsPacket$Entry>;
        toSuggestions(): $Suggestions;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCommandSuggestionsPacket>;
        constructor(arg0: number, arg1: $Suggestions);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $List_<$ClientboundCommandSuggestionsPacket$Entry_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunkBatchStartPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChunkBatchStartPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static INSTANCE: $ClientboundChunkBatchStartPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundChunkBatchStartPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$Operation {
    }
    export interface $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSetScorePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetScorePacket>;
        owner(): string;
        handle(arg0: $ClientGamePacketListener): void;
        display(): ($Component) | undefined;
        numberFormat(): ($NumberFormat) | undefined;
        score(): number;
        objectiveName(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetScorePacket>;
        constructor(arg0: string, arg1: string, arg2: number, arg3: ($Component_) | undefined, arg4: ($NumberFormat) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundEntityTagQueryPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundEntityTagQueryPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getEntityId(): number;
        getTransactionId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEntityTagQueryPacket>;
        constructor(arg0: number, arg1: number);
        get entityId(): number;
        get transactionId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandSuggestionsPacket$Entry extends $Record {
        text(): string;
        tooltip(): ($Component) | undefined;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCommandSuggestionsPacket$Entry>;
        constructor(arg0: string, arg1: ($Component_) | undefined);
    }
    export class $ServerboundBlockEntityTagQueryPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundBlockEntityTagQueryPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getPos(): $BlockPos;
        getTransactionId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundBlockEntityTagQueryPacket>;
        constructor(arg0: number, arg1: $BlockPos_);
        get pos(): $BlockPos;
        get transactionId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $GamePacketTypes {
        static CLIENTBOUND_SET_EXPERIENCE: $PacketType<$ClientboundSetExperiencePacket>;
        static CLIENTBOUND_SET_PLAYER_TEAM: $PacketType<$ClientboundSetPlayerTeamPacket>;
        static SERVERBOUND_BLOCK_ENTITY_TAG_QUERY: $PacketType<$ServerboundBlockEntityTagQueryPacket>;
        static SERVERBOUND_SET_CREATIVE_MODE_SLOT: $PacketType<$ServerboundSetCreativeModeSlotPacket>;
        static SERVERBOUND_CHAT_COMMAND: $PacketType<$ServerboundChatCommandPacket>;
        static SERVERBOUND_PICK_ITEM: $PacketType<$ServerboundPickItemPacket>;
        static CLIENTBOUND_GAME_EVENT: $PacketType<$ClientboundGameEventPacket>;
        static CLIENTBOUND_SET_SIMULATION_DISTANCE: $PacketType<$ClientboundSetSimulationDistancePacket>;
        static CLIENTBOUND_SELECT_ADVANCEMENTS_TAB: $PacketType<$ClientboundSelectAdvancementsTabPacket>;
        static CLIENTBOUND_SET_SCORE: $PacketType<$ClientboundSetScorePacket>;
        static SERVERBOUND_SET_JIGSAW_BLOCK: $PacketType<$ServerboundSetJigsawBlockPacket>;
        static SERVERBOUND_MOVE_PLAYER_POS: $PacketType<$ServerboundMovePlayerPacket$Pos>;
        static CLIENTBOUND_OPEN_SCREEN: $PacketType<$ClientboundOpenScreenPacket>;
        static CLIENTBOUND_SET_ENTITY_MOTION: $PacketType<$ClientboundSetEntityMotionPacket>;
        static CLIENTBOUND_SOUND_ENTITY: $PacketType<$ClientboundSoundEntityPacket>;
        static CLIENTBOUND_UPDATE_MOB_EFFECT: $PacketType<$ClientboundUpdateMobEffectPacket>;
        static SERVERBOUND_CLIENT_COMMAND: $PacketType<$ServerboundClientCommandPacket>;
        static SERVERBOUND_CONTAINER_SLOT_STATE_CHANGED: $PacketType<$ServerboundContainerSlotStateChangedPacket>;
        static SERVERBOUND_PADDLE_BOAT: $PacketType<$ServerboundPaddleBoatPacket>;
        static CLIENTBOUND_PLAYER_COMBAT_KILL: $PacketType<$ClientboundPlayerCombatKillPacket>;
        static CLIENTBOUND_UPDATE_ATTRIBUTES: $PacketType<$ClientboundUpdateAttributesPacket>;
        static CLIENTBOUND_TELEPORT_ENTITY: $PacketType<$ClientboundTeleportEntityPacket>;
        static CLIENTBOUND_CHUNK_BATCH_FINISHED: $PacketType<$ClientboundChunkBatchFinishedPacket>;
        static CLIENTBOUND_PLAYER_ABILITIES: $PacketType<$ClientboundPlayerAbilitiesPacket>;
        static CLIENTBOUND_AWARD_STATS: $PacketType<$ClientboundAwardStatsPacket>;
        static CLIENTBOUND_RESPAWN: $PacketType<$ClientboundRespawnPacket>;
        static SERVERBOUND_PLAYER_INPUT: $PacketType<$ServerboundPlayerInputPacket>;
        static SERVERBOUND_SET_COMMAND_BLOCK: $PacketType<$ServerboundSetCommandBlockPacket>;
        static CLIENTBOUND_CHUNK_BATCH_START: $PacketType<$ClientboundChunkBatchStartPacket>;
        static SERVERBOUND_CONFIGURATION_ACKNOWLEDGED: $PacketType<$ServerboundConfigurationAcknowledgedPacket>;
        static CLIENTBOUND_TICKING_STEP: $PacketType<$ClientboundTickingStepPacket>;
        static CLIENTBOUND_BOSS_EVENT: $PacketType<$ClientboundBossEventPacket>;
        static SERVERBOUND_CONTAINER_BUTTON_CLICK: $PacketType<$ServerboundContainerButtonClickPacket>;
        static CLIENTBOUND_BLOCK_DESTRUCTION: $PacketType<$ClientboundBlockDestructionPacket>;
        static CLIENTBOUND_DAMAGE_EVENT: $PacketType<$ClientboundDamageEventPacket>;
        static SERVERBOUND_RECIPE_BOOK_SEEN_RECIPE: $PacketType<$ServerboundRecipeBookSeenRecipePacket>;
        static SERVERBOUND_ACCEPT_TELEPORTATION: $PacketType<$ServerboundAcceptTeleportationPacket>;
        static SERVERBOUND_EDIT_BOOK: $PacketType<$ServerboundEditBookPacket>;
        static CLIENTBOUND_PLAYER_POSITION: $PacketType<$ClientboundPlayerPositionPacket>;
        static CLIENTBOUND_SET_DEFAULT_SPAWN_POSITION: $PacketType<$ClientboundSetDefaultSpawnPositionPacket>;
        static CLIENTBOUND_TAB_LIST: $PacketType<$ClientboundTabListPacket>;
        static SERVERBOUND_CONTAINER_CLOSE: $PacketType<$ServerboundContainerClosePacket>;
        static CLIENTBOUND_SET_CAMERA: $PacketType<$ClientboundSetCameraPacket>;
        static SERVERBOUND_RECIPE_BOOK_CHANGE_SETTINGS: $PacketType<$ServerboundRecipeBookChangeSettingsPacket>;
        static CLIENTBOUND_CUSTOM_CHAT_COMPLETIONS: $PacketType<$ClientboundCustomChatCompletionsPacket>;
        static CLIENTBOUND_BLOCK_CHANGED_ACK: $PacketType<$ClientboundBlockChangedAckPacket>;
        static CLIENTBOUND_DISGUISED_CHAT: $PacketType<$ClientboundDisguisedChatPacket>;
        static CLIENTBOUND_FORGET_LEVEL_CHUNK: $PacketType<$ClientboundForgetLevelChunkPacket>;
        static CLIENTBOUND_SET_BORDER_LERP_SIZE: $PacketType<$ClientboundSetBorderLerpSizePacket>;
        static SERVERBOUND_CHUNK_BATCH_RECEIVED: $PacketType<$ServerboundChunkBatchReceivedPacket>;
        static CLIENTBOUND_SET_ACTION_BAR_TEXT: $PacketType<$ClientboundSetActionBarTextPacket>;
        static CLIENTBOUND_PLAYER_INFO_UPDATE: $PacketType<$ClientboundPlayerInfoUpdatePacket>;
        static CLIENTBOUND_RECIPE: $PacketType<$ClientboundRecipePacket>;
        static CLIENTBOUND_EXPLODE: $PacketType<$ClientboundExplodePacket>;
        static CLIENTBOUND_CONTAINER_CLOSE: $PacketType<$ClientboundContainerClosePacket>;
        static CLIENTBOUND_SET_TIME: $PacketType<$ClientboundSetTimePacket>;
        static CLIENTBOUND_SECTION_BLOCKS_UPDATE: $PacketType<$ClientboundSectionBlocksUpdatePacket>;
        static SERVERBOUND_CHAT_COMMAND_SIGNED: $PacketType<$ServerboundChatCommandSignedPacket>;
        static CLIENTBOUND_ANIMATE: $PacketType<$ClientboundAnimatePacket>;
        static CLIENTBOUND_SET_ENTITY_LINK: $PacketType<$ClientboundSetEntityLinkPacket>;
        static CLIENTBOUND_SET_DISPLAY_OBJECTIVE: $PacketType<$ClientboundSetDisplayObjectivePacket>;
        static CLIENTBOUND_PLAYER_INFO_REMOVE: $PacketType<$ClientboundPlayerInfoRemovePacket>;
        static CLIENTBOUND_REMOVE_MOB_EFFECT: $PacketType<$ClientboundRemoveMobEffectPacket>;
        static SERVERBOUND_MOVE_PLAYER_STATUS_ONLY: $PacketType<$ServerboundMovePlayerPacket$StatusOnly>;
        static CLIENTBOUND_LEVEL_EVENT: $PacketType<$ClientboundLevelEventPacket>;
        static SERVERBOUND_MOVE_VEHICLE: $PacketType<$ServerboundMoveVehiclePacket>;
        static CLIENTBOUND_SOUND: $PacketType<$ClientboundSoundPacket>;
        static CLIENTBOUND_MOVE_ENTITY_POS: $PacketType<$ClientboundMoveEntityPacket$Pos>;
        static SERVERBOUND_INTERACT: $PacketType<$ServerboundInteractPacket>;
        static CLIENTBOUND_RESET_SCORE: $PacketType<$ClientboundResetScorePacket>;
        static SERVERBOUND_SET_STRUCTURE_BLOCK: $PacketType<$ServerboundSetStructureBlockPacket>;
        static SERVERBOUND_SET_CARRIED_ITEM: $PacketType<$ServerboundSetCarriedItemPacket>;
        static CLIENTBOUND_REMOVE_ENTITIES: $PacketType<$ClientboundRemoveEntitiesPacket>;
        static CLIENTBOUND_MOVE_ENTITY_POS_ROT: $PacketType<$ClientboundMoveEntityPacket$PosRot>;
        static CLIENTBOUND_SET_SUBTITLE_TEXT: $PacketType<$ClientboundSetSubtitleTextPacket>;
        static SERVERBOUND_MOVE_PLAYER_POS_ROT: $PacketType<$ServerboundMovePlayerPacket$PosRot>;
        static SERVERBOUND_SEEN_ADVANCEMENTS: $PacketType<$ServerboundSeenAdvancementsPacket>;
        static CLIENTBOUND_ADD_ENTITY: $PacketType<$ClientboundAddEntityPacket>;
        static SERVERBOUND_PLAYER_ACTION: $PacketType<$ServerboundPlayerActionPacket>;
        static SERVERBOUND_PLAYER_COMMAND: $PacketType<$ServerboundPlayerCommandPacket>;
        static CLIENTBOUND_CONTAINER_SET_DATA: $PacketType<$ClientboundContainerSetDataPacket>;
        static SERVERBOUND_LOCK_DIFFICULTY: $PacketType<$ServerboundLockDifficultyPacket>;
        static CLIENTBOUND_COMMANDS: $PacketType<$ClientboundCommandsPacket>;
        static CLIENTBOUND_LIGHT_UPDATE: $PacketType<$ClientboundLightUpdatePacket>;
        static CLIENTBOUND_DELETE_CHAT: $PacketType<$ClientboundDeleteChatPacket>;
        static SERVERBOUND_ENTITY_TAG_QUERY: $PacketType<$ServerboundEntityTagQueryPacket>;
        static CLIENTBOUND_SET_BORDER_CENTER: $PacketType<$ClientboundSetBorderCenterPacket>;
        static SERVERBOUND_CHANGE_DIFFICULTY: $PacketType<$ServerboundChangeDifficultyPacket>;
        static CLIENTBOUND_MOVE_VEHICLE: $PacketType<$ClientboundMoveVehiclePacket>;
        static SERVERBOUND_JIGSAW_GENERATE: $PacketType<$ServerboundJigsawGeneratePacket>;
        static CLIENTBOUND_CLEAR_TITLES: $PacketType<$ClientboundClearTitlesPacket>;
        static SERVERBOUND_SIGN_UPDATE: $PacketType<$ServerboundSignUpdatePacket>;
        static SERVERBOUND_MOVE_PLAYER_ROT: $PacketType<$ServerboundMovePlayerPacket$Rot>;
        static CLIENTBOUND_PLAYER_COMBAT_ENTER: $PacketType<$ClientboundPlayerCombatEnterPacket>;
        static CLIENTBOUND_SET_CHUNK_CACHE_CENTER: $PacketType<$ClientboundSetChunkCacheCenterPacket>;
        static CLIENTBOUND_MAP_ITEM_DATA: $PacketType<$ClientboundMapItemDataPacket>;
        static CLIENTBOUND_OPEN_SIGN_EDITOR: $PacketType<$ClientboundOpenSignEditorPacket>;
        static CLIENTBOUND_START_CONFIGURATION: $PacketType<$ClientboundStartConfigurationPacket>;
        static SERVERBOUND_CHAT_ACK: $PacketType<$ServerboundChatAckPacket>;
        static CLIENTBOUND_MERCHANT_OFFERS: $PacketType<$ClientboundMerchantOffersPacket>;
        static CLIENTBOUND_PLAYER_COMBAT_END: $PacketType<$ClientboundPlayerCombatEndPacket>;
        static CLIENTBOUND_PLAYER_LOOK_AT: $PacketType<$ClientboundPlayerLookAtPacket>;
        static CLIENTBOUND_STOP_SOUND: $PacketType<$ClientboundStopSoundPacket>;
        static SERVERBOUND_TELEPORT_TO_ENTITY: $PacketType<$ServerboundTeleportToEntityPacket>;
        static CLIENTBOUND_BLOCK_EVENT: $PacketType<$ClientboundBlockEventPacket>;
        static CLIENTBOUND_LOGIN: $PacketType<$ClientboundLoginPacket>;
        static CLIENTBOUND_ROTATE_HEAD: $PacketType<$ClientboundRotateHeadPacket>;
        static CLIENTBOUND_SYSTEM_CHAT: $PacketType<$ClientboundSystemChatPacket>;
        static CLIENTBOUND_TAG_QUERY: $PacketType<$ClientboundTagQueryPacket>;
        static CLIENTBOUND_TAKE_ITEM_ENTITY: $PacketType<$ClientboundTakeItemEntityPacket>;
        static SERVERBOUND_USE_ITEM_ON: $PacketType<$ServerboundUseItemOnPacket>;
        static CLIENTBOUND_INITIALIZE_BORDER: $PacketType<$ClientboundInitializeBorderPacket>;
        static CLIENTBOUND_SET_PASSENGERS: $PacketType<$ClientboundSetPassengersPacket>;
        static CLIENTBOUND_SET_EQUIPMENT: $PacketType<$ClientboundSetEquipmentPacket>;
        static CLIENTBOUND_SET_CARRIED_ITEM: $PacketType<$ClientboundSetCarriedItemPacket>;
        static CLIENTBOUND_SET_HEALTH: $PacketType<$ClientboundSetHealthPacket>;
        static CLIENTBOUND_UPDATE_RECIPES: $PacketType<$ClientboundUpdateRecipesPacket>;
        static SERVERBOUND_RENAME_ITEM: $PacketType<$ServerboundRenameItemPacket>;
        static CLIENTBOUND_COOLDOWN: $PacketType<$ClientboundCooldownPacket>;
        static SERVERBOUND_SET_COMMAND_MINECART: $PacketType<$ServerboundSetCommandMinecartPacket>;
        static SERVERBOUND_PLACE_RECIPE: $PacketType<$ServerboundPlaceRecipePacket>;
        static CLIENTBOUND_UPDATE_ADVANCEMENTS: $PacketType<$ClientboundUpdateAdvancementsPacket>;
        static CLIENTBOUND_SET_TITLE_TEXT: $PacketType<$ClientboundSetTitleTextPacket>;
        static SERVERBOUND_PLAYER_ABILITIES: $PacketType<$ServerboundPlayerAbilitiesPacket>;
        static SERVERBOUND_SWING: $PacketType<$ServerboundSwingPacket>;
        static SERVERBOUND_CONTAINER_CLICK: $PacketType<$ServerboundContainerClickPacket>;
        static CLIENTBOUND_HORSE_SCREEN_OPEN: $PacketType<$ClientboundHorseScreenOpenPacket>;
        static CLIENTBOUND_PLAYER_CHAT: $PacketType<$ClientboundPlayerChatPacket>;
        static CLIENTBOUND_SET_OBJECTIVE: $PacketType<$ClientboundSetObjectivePacket>;
        static CLIENTBOUND_SET_BORDER_WARNING_DISTANCE: $PacketType<$ClientboundSetBorderWarningDistancePacket>;
        static CLIENTBOUND_COMMAND_SUGGESTIONS: $PacketType<$ClientboundCommandSuggestionsPacket>;
        static CLIENTBOUND_DEBUG_SAMPLE: $PacketType<$ClientboundDebugSamplePacket>;
        static CLIENTBOUND_CONTAINER_SET_SLOT: $PacketType<$ClientboundContainerSetSlotPacket>;
        static CLIENTBOUND_OPEN_BOOK: $PacketType<$ClientboundOpenBookPacket>;
        static CLIENTBOUND_ENTITY_EVENT: $PacketType<$ClientboundEntityEventPacket>;
        static CLIENTBOUND_CONTAINER_SET_CONTENT: $PacketType<$ClientboundContainerSetContentPacket>;
        static CLIENTBOUND_SET_BORDER_WARNING_DELAY: $PacketType<$ClientboundSetBorderWarningDelayPacket>;
        static SERVERBOUND_USE_ITEM: $PacketType<$ServerboundUseItemPacket>;
        static SERVERBOUND_SET_BEACON: $PacketType<$ServerboundSetBeaconPacket>;
        static CLIENTBOUND_PLACE_GHOST_RECIPE: $PacketType<$ClientboundPlaceGhostRecipePacket>;
        static CLIENTBOUND_SERVER_DATA: $PacketType<$ClientboundServerDataPacket>;
        static CLIENTBOUND_TICKING_STATE: $PacketType<$ClientboundTickingStatePacket>;
        static CLIENTBOUND_CHANGE_DIFFICULTY: $PacketType<$ClientboundChangeDifficultyPacket>;
        static SERVERBOUND_COMMAND_SUGGESTION: $PacketType<$ServerboundCommandSuggestionPacket>;
        static CLIENTBOUND_MOVE_ENTITY_ROT: $PacketType<$ClientboundMoveEntityPacket$Rot>;
        static CLIENTBOUND_PROJECTILE_POWER: $PacketType<$ClientboundProjectilePowerPacket>;
        static CLIENTBOUND_BLOCK_ENTITY_DATA: $PacketType<$ClientboundBlockEntityDataPacket>;
        static CLIENTBOUND_SET_ENTITY_DATA: $PacketType<$ClientboundSetEntityDataPacket>;
        static SERVERBOUND_CHAT: $PacketType<$ServerboundChatPacket>;
        static CLIENTBOUND_BLOCK_UPDATE: $PacketType<$ClientboundBlockUpdatePacket>;
        static CLIENTBOUND_ADD_EXPERIENCE_ORB: $PacketType<$ClientboundAddExperienceOrbPacket>;
        static CLIENTBOUND_BUNDLE_DELIMITER: $PacketType<$ClientboundBundleDelimiterPacket>;
        static CLIENTBOUND_SET_BORDER_SIZE: $PacketType<$ClientboundSetBorderSizePacket>;
        static CLIENTBOUND_LEVEL_CHUNK_WITH_LIGHT: $PacketType<$ClientboundLevelChunkWithLightPacket>;
        static CLIENTBOUND_LEVEL_PARTICLES: $PacketType<$ClientboundLevelParticlesPacket>;
        static CLIENTBOUND_CHUNKS_BIOMES: $PacketType<$ClientboundChunksBiomesPacket>;
        static CLIENTBOUND_BUNDLE: $PacketType<$ClientboundBundlePacket>;
        static CLIENTBOUND_HURT_ANIMATION: $PacketType<$ClientboundHurtAnimationPacket>;
        static SERVERBOUND_SELECT_TRADE: $PacketType<$ServerboundSelectTradePacket>;
        static SERVERBOUND_CHAT_SESSION_UPDATE: $PacketType<$ServerboundChatSessionUpdatePacket>;
        static SERVERBOUND_DEBUG_SAMPLE_SUBSCRIPTION: $PacketType<$ServerboundDebugSampleSubscriptionPacket>;
        static CLIENTBOUND_SET_CHUNK_CACHE_RADIUS: $PacketType<$ClientboundSetChunkCacheRadiusPacket>;
        static CLIENTBOUND_SET_TITLES_ANIMATION: $PacketType<$ClientboundSetTitlesAnimationPacket>;
        constructor();
    }
    export class $ClientboundClearTitlesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundClearTitlesPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        shouldResetTimes(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundClearTitlesPacket>;
        constructor(arg0: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerButtonClickPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerButtonClickPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        containerId(): number;
        buttonId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerButtonClickPacket>;
        constructor(arg0: number, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetBorderWarningDelayPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderWarningDelayPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getWarningDelay(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDelayPacket>;
        constructor(arg0: $WorldBorder);
        get warningDelay(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$Rot extends $ClientboundMoveEntityPacket {
        onGround: boolean;
        yRot: number;
        za: number;
        ya: number;
        xRot: number;
        xa: number;
        hasRot: boolean;
        entityId: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$Rot>;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
    }
    export class $ClientboundSetBorderLerpSizePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderLerpSizePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getNewSize(): number;
        getOldSize(): number;
        getLerpTime(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderLerpSizePacket>;
        constructor(arg0: $WorldBorder);
        get newSize(): number;
        get oldSize(): number;
        get lerpTime(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket$Rot extends $ServerboundMovePlayerPacket {
        onGround: boolean;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        hasRot: boolean;
        z: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$Rot>;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $ServerboundContainerClosePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerClosePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerClosePacket>;
        constructor(arg0: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatCommandPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatCommandPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        command(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatCommandPacket>;
        constructor(arg0: string);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundDebugSampleSubscriptionPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundDebugSampleSubscriptionPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        sampleType(): $RemoteDebugSampleType;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundDebugSampleSubscriptionPacket>;
        constructor(arg0: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$Handler {
    }
    export interface $ClientboundBossEventPacket$Handler {
        remove(arg0: $UUID_): void;
        add(arg0: $UUID_, arg1: $Component_, arg2: number, arg3: $BossEvent$BossBarColor_, arg4: $BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean): void;
        updateProgress(arg0: $UUID_, arg1: number): void;
        updateStyle(arg0: $UUID_, arg1: $BossEvent$BossBarColor_, arg2: $BossEvent$BossBarOverlay_): void;
        updateProperties(arg0: $UUID_, arg1: boolean, arg2: boolean, arg3: boolean): void;
        updateName(arg0: $UUID_, arg1: $Component_): void;
    }
    export class $ClientboundBossEventPacket$UpdateStyleOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSoundPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSoundPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getSeed(): number;
        getSource(): $SoundSource;
        getY(): number;
        getX(): number;
        getZ(): number;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Holder<$SoundEvent>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static LOCATION_ACCURACY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundPacket>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $SoundSource_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        get seed(): number;
        get source(): $SoundSource;
        get y(): number;
        get x(): number;
        get z(): number;
        get volume(): number;
        get pitch(): number;
        get sound(): $Holder<$SoundEvent>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookSeenRecipePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundRecipeBookSeenRecipePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getRecipe(): $ResourceLocation;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookSeenRecipePacket>;
        constructor(arg0: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveVehiclePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundMoveVehiclePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getY(): number;
        getX(): number;
        getZ(): number;
        getYRot(): number;
        getXRot(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveVehiclePacket>;
        constructor(arg0: $Entity);
        get y(): number;
        get x(): number;
        get z(): number;
        get YRot(): number;
        get XRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerSlotStateChangedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerSlotStateChangedPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        newState(): boolean;
        containerId(): number;
        slotId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerSlotStateChangedPacket>;
        constructor(arg0: number, arg1: number, arg2: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAddExperienceOrbPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAddExperienceOrbPacket>;
        getValue(): number;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getY(): number;
        getX(): number;
        getZ(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAddExperienceOrbPacket>;
        constructor(arg0: $ExperienceOrb, arg1: $ServerEntity);
        get value(): number;
        get id(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTimePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTimePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getGameTime(): number;
        getDayTime(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTimePacket>;
        constructor(arg0: number, arg1: number, arg2: boolean);
        get gameTime(): number;
        get dayTime(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAwardStatsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAwardStatsPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        stats(): $Object2IntMap<$Stat<never>>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAwardStatsPacket>;
        constructor(arg0: $Object2IntMap<$Stat_<never>>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBundlePacket extends $BundlePacket<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        constructor(arg0: $Iterable_<$Packet<$ClientGamePacketListener>>);
    }
    export class $ClientboundBlockChangedAckPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockChangedAckPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        sequence(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockChangedAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerInfoUpdatePacket>;
        entries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        handle(arg0: $ClientGamePacketListener): void;
        actions(): $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action>;
        newEntries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        static createPlayerInitializing(arg0: $Collection_<$ServerPlayer>): $ClientboundPlayerInfoUpdatePacket;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerInfoUpdatePacket>;
        constructor(arg0: $ClientboundPlayerInfoUpdatePacket$Action_, arg1: $ServerPlayer);
        constructor(arg0: $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action_>, arg1: $Collection_<$ServerPlayer>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDamageEventPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundDamageEventPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        sourceType(): $Holder<$DamageType>;
        getSource(arg0: $Level_): $DamageSource;
        entityId(): number;
        sourcePosition(): ($Vec3) | undefined;
        sourceCauseId(): number;
        sourceDirectId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundDamageEventPacket>;
        constructor(arg0: number, arg1: $Holder_<$DamageType>, arg2: number, arg3: number, arg4: ($Vec3_) | undefined);
        constructor(arg0: $Entity, arg1: $DamageSource_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetContentPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerSetContentPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getCarriedItem(): $ItemStack;
        getItems(): $List<$ItemStack>;
        getStateId(): number;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetContentPacket>;
        constructor(arg0: number, arg1: number, arg2: $NonNullList<$ItemStack_>, arg3: $ItemStack_);
        get carriedItem(): $ItemStack;
        get items(): $List<$ItemStack>;
        get stateId(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket$Type {
        static TYPES: $Int2ObjectMap<$ClientboundGameEventPacket$Type>;
        id: number;
        constructor(arg0: number);
    }
    export class $ClientboundBlockEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockEventPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getBlock(): $Block;
        getPos(): $BlockPos;
        getB1(): number;
        getB0(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEventPacket>;
        constructor(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: number);
        get block(): $Block;
        get pos(): $BlockPos;
        get b1(): number;
        get b0(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetSimulationDistancePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetSimulationDistancePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        simulationDistance(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetSimulationDistancePacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetPlayerTeamPacket implements $Packet<$ClientGamePacketListener> {
        getName(): string;
        type(): $PacketType<$ClientboundSetPlayerTeamPacket>;
        getParameters(): ($ClientboundSetPlayerTeamPacket$Parameters) | undefined;
        handle(arg0: $ClientGamePacketListener): void;
        static createAddOrModifyPacket(arg0: $PlayerTeam, arg1: boolean): $ClientboundSetPlayerTeamPacket;
        static createRemovePacket(arg0: $PlayerTeam): $ClientboundSetPlayerTeamPacket;
        static createPlayerPacket(arg0: $PlayerTeam, arg1: string, arg2: $ClientboundSetPlayerTeamPacket$Action_): $ClientboundSetPlayerTeamPacket;
        getTeamAction(): $ClientboundSetPlayerTeamPacket$Action;
        getPlayerAction(): $ClientboundSetPlayerTeamPacket$Action;
        getPlayers(): $Collection<string>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetPlayerTeamPacket>;
        get name(): string;
        get parameters(): ($ClientboundSetPlayerTeamPacket$Parameters) | undefined;
        get teamAction(): $ClientboundSetPlayerTeamPacket$Action;
        get playerAction(): $ClientboundSetPlayerTeamPacket$Action;
        get players(): $Collection<string>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugPackets {
        static sendEntityBrain(arg0: $LivingEntity): void;
        static sendPathFindingPacket(arg0: $Level_, arg1: $Mob, arg2: $Path, arg3: number): void;
        static sendNeighborsUpdatePacket(arg0: $Level_, arg1: $BlockPos_): void;
        static sendBeeInfo(arg0: $Bee): void;
        static sendBreezeInfo(arg0: $Breeze): void;
        static sendGoalSelector(arg0: $Level_, arg1: $Mob, arg2: $GoalSelector): void;
        static sendPoiRemovedPacket(arg0: $ServerLevel, arg1: $BlockPos_): void;
        static sendPoiTicketCountPacket(arg0: $ServerLevel, arg1: $BlockPos_): void;
        static sendHiveInfo(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeehiveBlockEntity): void;
        static sendPoiAddedPacket(arg0: $ServerLevel, arg1: $BlockPos_): void;
        static sendStructurePacket(arg0: $WorldGenLevel, arg1: $StructureStart): void;
        static sendGameTestAddMarker(arg0: $ServerLevel, arg1: $BlockPos_, arg2: string, arg3: number, arg4: number): void;
        static sendGameTestClearPacket(arg0: $ServerLevel): void;
        static sendPoiPacketsForChunk(arg0: $ServerLevel, arg1: $ChunkPos): void;
        static sendGameEventListenerInfo(arg0: $Level_, arg1: $GameEventListener): void;
        static sendRaids(arg0: $ServerLevel, arg1: $Collection_<$Raid>): void;
        static sendGameEventInfo(arg0: $Level_, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        constructor();
    }
    export class $ClientboundCommandsPacket$ArgumentNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundRecipePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRecipePacket>;
        getState(): $ClientboundRecipePacket$State;
        handle(arg0: $ClientGamePacketListener): void;
        getRecipes(): $List<$ResourceLocation>;
        getBookSettings(): $RecipeBookSettings;
        getHighlights(): $List<$ResourceLocation>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRecipePacket>;
        constructor(arg0: $ClientboundRecipePacket$State_, arg1: $Collection_<$ResourceLocation_>, arg2: $Collection_<$ResourceLocation_>, arg3: $RecipeBookSettings);
        get state(): $ClientboundRecipePacket$State;
        get recipes(): $List<$ResourceLocation>;
        get bookSettings(): $RecipeBookSettings;
        get highlights(): $List<$ResourceLocation>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDeleteChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundDeleteChatPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        messageSignature(): $MessageSignature$Packed;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDeleteChatPacket>;
        constructor(arg0: $MessageSignature$Packed_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTakeItemEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTakeItemEntityPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getItemId(): number;
        getAmount(): number;
        getPlayerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTakeItemEntityPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get itemId(): number;
        get amount(): number;
        get playerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetSlotPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerSetSlotPacket>;
        getSlot(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getItem(): $ItemStack;
        getStateId(): number;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static CARRIED_ITEM: number;
        static PLAYER_INVENTORY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetSlotPacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $ItemStack_);
        get slot(): number;
        get item(): $ItemStack;
        get stateId(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetBeaconPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetBeaconPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        primary(): ($Holder<$MobEffect>) | undefined;
        secondary(): ($Holder<$MobEffect>) | undefined;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetBeaconPacket>;
        constructor(arg0: ($Holder_<$MobEffect>) | undefined, arg1: ($Holder_<$MobEffect>) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBlockEntityDataPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockEntityDataPacket>;
        getType(): $BlockEntityType<never>;
        static create(arg0: $BlockEntity, arg1: $BiFunction_<$BlockEntity, $RegistryAccess, $CompoundTag>): $ClientboundBlockEntityDataPacket;
        static create(arg0: $BlockEntity): $ClientboundBlockEntityDataPacket;
        handle(arg0: $ClientGamePacketListener): void;
        getTag(): $CompoundTag;
        getPos(): $BlockPos;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEntityDataPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockEntityType_<never>, arg2: $CompoundTag_);
        get tag(): $CompoundTag;
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSectionBlocksUpdatePacket implements $Packet<$ClientGamePacketListener>, $IXaeroMinimapSMultiBlockChangePacket, $IWorldMapSMultiBlockChangePacket {
        type(): $PacketType<$ClientboundSectionBlocksUpdatePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        xaero_wm_getSectionPos(): $SectionPos;
        runUpdates(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        xaero_mm_getSectionPos(): $SectionPos;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSectionBlocksUpdatePacket>;
        sectionPos: $SectionPos;
        constructor(arg0: $SectionPos, arg1: $ShortSet, arg2: $LevelChunkSection);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityLinkPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEntityLinkPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getDestId(): number;
        getSourceId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityLinkPacket>;
        constructor(arg0: $Entity, arg1: $Entity);
        get destId(): number;
        get sourceId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatSessionUpdatePacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatSessionUpdatePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        chatSession(): $RemoteChatSession$Data;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatSessionUpdatePacket>;
        constructor(arg0: $RemoteChatSession$Data_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        signature(): $MessageSignature;
        index(): number;
        type(): $PacketType<$ClientboundPlayerChatPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        body(): $SignedMessageBody$Packed;
        isSkippable(): boolean;
        sender(): $UUID;
        filterMask(): $FilterMask;
        chatType(): $ChatType$Bound;
        unsignedContent(): $Component;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerChatPacket>;
        constructor(arg0: $UUID_, arg1: number, arg2: $MessageSignature_, arg3: $SignedMessageBody$Packed_, arg4: $Component_, arg5: $FilterMask, arg6: $ChatType$Bound_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCooldownPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCooldownPacket>;
        duration(): number;
        handle(arg0: $ClientGamePacketListener): void;
        item(): $Item;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCooldownPacket>;
        constructor(arg0: $Item_, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBundleDelimiterPacket extends $BundleDelimiterPacket<$ClientGamePacketListener> {
        constructor();
    }
    export class $ServerboundMoveVehiclePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundMoveVehiclePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getY(): number;
        getX(): number;
        getZ(): number;
        getYRot(): number;
        getXRot(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMoveVehiclePacket>;
        constructor(arg0: $Entity);
        get y(): number;
        get x(): number;
        get z(): number;
        get YRot(): number;
        get XRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStepPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTickingStepPacket>;
        static from(arg0: $TickRateManager): $ClientboundTickingStepPacket;
        handle(arg0: $ClientGamePacketListener): void;
        tickSteps(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTickingStepPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDisguisedChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundDisguisedChatPacket>;
        message(): $Component;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        chatType(): $ChatType$Bound;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundDisguisedChatPacket>;
        constructor(arg0: $Component_, arg1: $ChatType$Bound_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetCarriedItemPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetCarriedItemPacket>;
        getSlot(): number;
        handle(arg0: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCarriedItemPacket>;
        constructor(arg0: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelParticlesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLevelParticlesPacket>;
        getCount(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getY(): number;
        getX(): number;
        getParticle(): $ParticleOptions;
        getMaxSpeed(): number;
        getZ(): number;
        getXDist(): number;
        getZDist(): number;
        getYDist(): number;
        isOverrideLimiter(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelParticlesPacket>;
        constructor<T extends $ParticleOptions>(arg0: T, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number);
        get count(): number;
        get y(): number;
        get x(): number;
        get particle(): $ParticleOptions;
        get maxSpeed(): number;
        get z(): number;
        get XDist(): number;
        get ZDist(): number;
        get YDist(): number;
        get overrideLimiter(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerLookAtPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerLookAtPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getPosition(arg0: $Level_): $Vec3;
        getFromAnchor(): $EntityAnchorArgument$Anchor;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerLookAtPacket>;
        constructor(arg0: $EntityAnchorArgument$Anchor_, arg1: $Entity, arg2: $EntityAnchorArgument$Anchor_);
        constructor(arg0: $EntityAnchorArgument$Anchor_, arg1: number, arg2: number, arg3: number);
        get fromAnchor(): $EntityAnchorArgument$Anchor;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCustomChatCompletionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCustomChatCompletionsPacket>;
        action(): $ClientboundCustomChatCompletionsPacket$Action;
        entries(): $List<string>;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomChatCompletionsPacket>;
        constructor(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChangeDifficultyPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChangeDifficultyPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getDifficulty(): $Difficulty;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChangeDifficultyPacket>;
        constructor(arg0: $Difficulty_);
        get difficulty(): $Difficulty;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitlesAnimationPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTitlesAnimationPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getFadeIn(): number;
        getStay(): number;
        getFadeOut(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTitlesAnimationPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get fadeIn(): number;
        get stay(): number;
        get fadeOut(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSeenAdvancementsPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSeenAdvancementsPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getAction(): $ServerboundSeenAdvancementsPacket$Action;
        getTab(): $ResourceLocation;
        static closedScreen(): $ServerboundSeenAdvancementsPacket;
        static openedTab(arg0: $AdvancementHolder_): $ServerboundSeenAdvancementsPacket;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSeenAdvancementsPacket>;
        constructor(arg0: $ServerboundSeenAdvancementsPacket$Action_, arg1: $ResourceLocation_);
        get action(): $ServerboundSeenAdvancementsPacket$Action;
        get tab(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundInteractPacket>;
        dispatch(arg0: $ServerboundInteractPacket$Handler): void;
        getTarget(arg0: $ServerLevel): $Entity;
        handle(arg0: $ServerGamePacketListener): void;
        isUsingSecondaryAction(): boolean;
        static createInteractionPacket(arg0: $Entity, arg1: boolean, arg2: $InteractionHand_): $ServerboundInteractPacket;
        static createInteractionPacket(arg0: $Entity, arg1: boolean, arg2: $InteractionHand_, arg3: $Vec3_): $ServerboundInteractPacket;
        static createAttackPacket(arg0: $Entity, arg1: boolean): $ServerboundInteractPacket;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundInteractPacket>;
        static ATTACK_ACTION: $ServerboundInteractPacket$Action;
        get usingSecondaryAction(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerAbilitiesPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerAbilitiesPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isFlying(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerAbilitiesPacket>;
        constructor(arg0: $Abilities);
        get flying(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundTeleportToEntityPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundTeleportToEntityPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getEntity(arg0: $ServerLevel): $Entity;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundTeleportToEntityPacket>;
        constructor(arg0: $UUID_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatEnterPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerCombatEnterPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static INSTANCE: $ClientboundPlayerCombatEnterPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundPlayerCombatEnterPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Action extends $Enum<$ClientboundPlayerInfoUpdatePacket$Action> {
        static values(): $ClientboundPlayerInfoUpdatePacket$Action[];
        static valueOf(arg0: string): $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_DISPLAY_NAME: $ClientboundPlayerInfoUpdatePacket$Action;
        reader: $ClientboundPlayerInfoUpdatePacket$Action$Reader;
        static UPDATE_LISTED: $ClientboundPlayerInfoUpdatePacket$Action;
        static ADD_PLAYER: $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_GAME_MODE: $ClientboundPlayerInfoUpdatePacket$Action;
        writer: $ClientboundPlayerInfoUpdatePacket$Action$Writer;
        static UPDATE_LATENCY: $ClientboundPlayerInfoUpdatePacket$Action;
        static INITIALIZE_CHAT: $ClientboundPlayerInfoUpdatePacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action_ = "add_player" | "initialize_chat" | "update_game_mode" | "update_listed" | "update_latency" | "update_display_name";
    export class $ClientboundPlayerInfoUpdatePacket$Action$Reader {
    }
    export interface $ClientboundPlayerInfoUpdatePacket$Action$Reader {
        read(arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Reader}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Reader_ = ((arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf) => void);
    export class $ClientboundRespawnPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRespawnPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        shouldKeep(arg0: number): boolean;
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        dataToKeep(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static KEEP_ALL_DATA: number;
        static KEEP_ENTITY_DATA: number;
        static KEEP_ATTRIBUTE_MODIFIERS: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundRespawnPacket>;
        constructor(arg0: $CommonPlayerSpawnInfo_, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetPassengersPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetPassengersPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getPassengers(): number[];
        getVehicle(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetPassengersPacket>;
        constructor(arg0: $Entity);
        get passengers(): number[];
        get vehicle(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlaceGhostRecipePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlaceGhostRecipePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getRecipe(): $ResourceLocation;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlaceGhostRecipePacket>;
        constructor(arg0: number, arg1: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugEntityNameGenerator {
        static getEntityName(arg0: $UUID_): string;
        static getEntityName(arg0: $Entity): string;
        constructor();
    }
    export class $ClientboundSystemChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSystemChatPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        content(): $Component;
        isSkippable(): boolean;
        overlay(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSystemChatPacket>;
        constructor(arg0: $Component_, arg1: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateAdvancementsPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateAdvancementsPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getAdded(): $List<$AdvancementHolder>;
        getRemoved(): $Set<$ResourceLocation>;
        getProgress(): $Map<$ResourceLocation, $AdvancementProgress>;
        shouldReset(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAdvancementsPacket>;
        constructor(arg0: boolean, arg1: $Collection_<$AdvancementHolder_>, arg2: $Set_<$ResourceLocation_>, arg3: $Map_<$ResourceLocation_, $AdvancementProgress>);
        get added(): $List<$AdvancementHolder>;
        get removed(): $Set<$ResourceLocation>;
        get progress(): $Map<$ResourceLocation, $AdvancementProgress>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundAcceptTeleportationPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundAcceptTeleportationPacket>;
        getId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundAcceptTeleportationPacket>;
        constructor(arg0: number);
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerInputPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerInputPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        isJumping(): boolean;
        getXxa(): number;
        getZza(): number;
        isShiftKeyDown(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerInputPacket>;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean);
        get jumping(): boolean;
        get xxa(): number;
        get zza(): number;
        get shiftKeyDown(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$PosRot extends $ClientboundMoveEntityPacket implements $PacketActuallyInSubLevelExtension {
        sable$setActuallyInSubLevel(arg0: boolean): void;
        sable$isActuallyInSubLevel(): boolean;
        onGround: boolean;
        yRot: number;
        za: number;
        ya: number;
        xRot: number;
        xa: number;
        hasRot: boolean;
        entityId: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$PosRot>;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
    }
    export class $ClientboundSetExperiencePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetExperiencePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getExperienceProgress(): number;
        getTotalExperience(): number;
        getExperienceLevel(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetExperiencePacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get experienceProgress(): number;
        get totalExperience(): number;
        get experienceLevel(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatEndPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerCombatEndPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerCombatEndPacket>;
        constructor(arg0: number);
        constructor(arg0: $CombatTracker);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Entry extends $Record {
        profile(): $GameProfile;
        displayName(): $Component;
        chatSession(): $RemoteChatSession$Data;
        latency(): number;
        profileId(): $UUID;
        listed(): boolean;
        gameMode(): $GameType;
        constructor(arg0: $ServerPlayer);
        constructor(arg0: $UUID_, arg1: $GameProfile, arg2: boolean, arg3: number, arg4: $GameType_, arg5: $Component_, arg6: $RemoteChatSession$Data_);
    }
    export class $ClientboundBlockDestructionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockDestructionPacket>;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        getProgress(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockDestructionPacket>;
        constructor(arg0: number, arg1: $BlockPos_, arg2: number);
        get id(): number;
        get pos(): $BlockPos;
        get progress(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetPlayerTeamPacket$Action extends $Enum<$ClientboundSetPlayerTeamPacket$Action> {
        static values(): $ClientboundSetPlayerTeamPacket$Action[];
        static valueOf(arg0: string): $ClientboundSetPlayerTeamPacket$Action;
        static ADD: $ClientboundSetPlayerTeamPacket$Action;
        static REMOVE: $ClientboundSetPlayerTeamPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetPlayerTeamPacket$Action}.
     */
    export type $ClientboundSetPlayerTeamPacket$Action_ = "add" | "remove";
    export class $ClientboundLoginPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLoginPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        levels(): $Set<$ResourceKey<$Level>>;
        playerId(): number;
        chunkRadius(): number;
        simulationDistance(): number;
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        reducedDebugInfo(): boolean;
        hardcore(): boolean;
        showDeathScreen(): boolean;
        doLimitedCrafting(): boolean;
        enforcesSecureChat(): boolean;
        maxPlayers(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLoginPacket>;
        constructor(arg0: number, arg1: boolean, arg2: $Set_<$ResourceKey_<$Level>>, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: $CommonPlayerSpawnInfo_, arg10: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        signature(): $MessageSignature;
        type(): $PacketType<$ServerboundChatPacket>;
        message(): string;
        handle(arg0: $ServerGamePacketListener): void;
        salt(): number;
        timeStamp(): $Instant;
        lastSeenMessages(): $LastSeenMessages$Update;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatPacket>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $MessageSignature_, arg4: $LastSeenMessages$Update_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetDefaultSpawnPositionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetDefaultSpawnPositionPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        getAngle(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDefaultSpawnPositionPacket>;
        constructor(arg0: $BlockPos_, arg1: number);
        get pos(): $BlockPos;
        get angle(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEntityDataPacket>;
        id(): number;
        handle(arg0: $ClientGamePacketListener): void;
        packedItems(): $List<$SynchedEntityData$DataValue<never>>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static EOF_MARKER: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetEntityDataPacket>;
        constructor(arg0: number, arg1: $List_<$SynchedEntityData$DataValue_<never>>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$EntryBuilder {
    }
    export class $ClientboundTabListPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTabListPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        header(): $Component;
        footer(): $Component;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundTabListPacket>;
        constructor(arg0: $Component_, arg1: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSoundEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSoundEntityPacket>;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getSeed(): number;
        getSource(): $SoundSource;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Holder<$SoundEvent>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundEntityPacket>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $SoundSource_, arg2: $Entity, arg3: number, arg4: number, arg5: number);
        get id(): number;
        get seed(): number;
        get source(): $SoundSource;
        get volume(): number;
        get pitch(): number;
        get sound(): $Holder<$SoundEvent>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenSignEditorPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundOpenSignEditorPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        isFrontText(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenSignEditorPacket>;
        constructor(arg0: $BlockPos_, arg1: boolean);
        get pos(): $BlockPos;
        get frontText(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRecipePacket$State extends $Enum<$ClientboundRecipePacket$State> {
        static values(): $ClientboundRecipePacket$State[];
        static valueOf(arg0: string): $ClientboundRecipePacket$State;
        static ADD: $ClientboundRecipePacket$State;
        static INIT: $ClientboundRecipePacket$State;
        static REMOVE: $ClientboundRecipePacket$State;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRecipePacket$State}.
     */
    export type $ClientboundRecipePacket$State_ = "init" | "add" | "remove";
    export class $ClientboundExplodePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundExplodePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getY(): number;
        getX(): number;
        getZ(): number;
        getBlockInteraction(): $Explosion$BlockInteraction;
        getLargeExplosionParticles(): $ParticleOptions;
        getSmallExplosionParticles(): $ParticleOptions;
        getPower(): number;
        getExplosionSound(): $Holder<$SoundEvent>;
        getToBlow(): $List<$BlockPos>;
        getKnockbackZ(): number;
        getKnockbackX(): number;
        getKnockbackY(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundExplodePacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $List_<$BlockPos_>, arg5: $Vec3_, arg6: $Explosion$BlockInteraction_, arg7: $ParticleOptions_, arg8: $ParticleOptions_, arg9: $Holder_<$SoundEvent>);
        get y(): number;
        get x(): number;
        get z(): number;
        get blockInteraction(): $Explosion$BlockInteraction;
        get largeExplosionParticles(): $ParticleOptions;
        get smallExplosionParticles(): $ParticleOptions;
        get power(): number;
        get explosionSound(): $Holder<$SoundEvent>;
        get toBlow(): $List<$BlockPos>;
        get knockbackZ(): number;
        get knockbackX(): number;
        get knockbackY(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $CommonPlayerSpawnInfo extends $Record {
        write(arg0: $RegistryFriendlyByteBuf): void;
        isDebug(): boolean;
        seed(): number;
        dimension(): $ResourceKey<$Level>;
        isFlat(): boolean;
        gameType(): $GameType;
        portalCooldown(): number;
        lastDeathLocation(): ($GlobalPos) | undefined;
        dimensionType(): $Holder<$DimensionType>;
        previousGameType(): $GameType;
        constructor(arg0: $RegistryFriendlyByteBuf);
        constructor(arg0: $Holder_<$DimensionType>, arg1: $ResourceKey_<$Level>, arg2: number, arg3: $GameType_, arg4: $GameType_, arg5: boolean, arg6: boolean, arg7: ($GlobalPos_) | undefined, arg8: number);
        get debug(): boolean;
        get flat(): boolean;
    }
    export class $ClientboundLevelChunkPacketData$BlockEntityInfo {
        static create(arg0: $BlockEntity): $ClientboundLevelChunkPacketData$BlockEntityInfo;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ClientboundLevelChunkPacketData$BlockEntityInfo>>;
        packedXZ: number;
        y: number;
        tag: $CompoundTag;
        type: $BlockEntityType<never>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelChunkPacketData$BlockEntityInfo>;
    }
    export class $ClientboundCustomChatCompletionsPacket$Action extends $Enum<$ClientboundCustomChatCompletionsPacket$Action> {
        static values(): $ClientboundCustomChatCompletionsPacket$Action[];
        static valueOf(arg0: string): $ClientboundCustomChatCompletionsPacket$Action;
        static ADD: $ClientboundCustomChatCompletionsPacket$Action;
        static SET: $ClientboundCustomChatCompletionsPacket$Action;
        static REMOVE: $ClientboundCustomChatCompletionsPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomChatCompletionsPacket$Action}.
     */
    export type $ClientboundCustomChatCompletionsPacket$Action_ = "add" | "remove" | "set";
    export class $ServerboundInteractPacket$InteractionAtLocationAction implements $ServerboundInteractPacket$Action {
    }
    export class $ServerboundPlayerActionPacket$Action extends $Enum<$ServerboundPlayerActionPacket$Action> {
        static values(): $ServerboundPlayerActionPacket$Action[];
        static valueOf(arg0: string): $ServerboundPlayerActionPacket$Action;
        static STOP_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
        static DROP_ALL_ITEMS: $ServerboundPlayerActionPacket$Action;
        static DROP_ITEM: $ServerboundPlayerActionPacket$Action;
        static RELEASE_USE_ITEM: $ServerboundPlayerActionPacket$Action;
        static ABORT_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
        static SWAP_ITEM_WITH_OFFHAND: $ServerboundPlayerActionPacket$Action;
        static START_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundPlayerActionPacket$Action}.
     */
    export type $ServerboundPlayerActionPacket$Action_ = "start_destroy_block" | "abort_destroy_block" | "stop_destroy_block" | "drop_all_items" | "drop_item" | "release_use_item" | "swap_item_with_offhand";
    export class $ServerboundSetJigsawBlockPacket implements $Packet<$ServerGamePacketListener> {
        getName(): $ResourceLocation;
        type(): $PacketType<$ServerboundSetJigsawBlockPacket>;
        getPool(): $ResourceLocation;
        getTarget(): $ResourceLocation;
        handle(arg0: $ServerGamePacketListener): void;
        getPos(): $BlockPos;
        getFinalState(): string;
        getSelectionPriority(): number;
        getPlacementPriority(): number;
        getJoint(): $JigsawBlockEntity$JointType;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetJigsawBlockPacket>;
        constructor(arg0: $BlockPos_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: string, arg5: $JigsawBlockEntity$JointType_, arg6: number, arg7: number);
        get name(): $ResourceLocation;
        get pool(): $ResourceLocation;
        get target(): $ResourceLocation;
        get pos(): $BlockPos;
        get finalState(): string;
        get selectionPriority(): number;
        get placementPriority(): number;
        get joint(): $JigsawBlockEntity$JointType;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateNameOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    export class $ServerboundSelectTradePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSelectTradePacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getItem(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSelectTradePacket>;
        constructor(arg0: number);
        get item(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTeleportEntityPacket implements $Packet<$ClientGamePacketListener>, $PacketActuallyInSubLevelExtension {
        type(): $PacketType<$ClientboundTeleportEntityPacket>;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getY(): number;
        getX(): number;
        sable$setActuallyInSubLevel(arg0: boolean): void;
        getZ(): number;
        sable$isActuallyInSubLevel(): boolean;
        isOnGround(): boolean;
        getxRot(): number;
        getyRot(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTeleportEntityPacket>;
        constructor(arg0: $Entity);
        get id(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get onGround(): boolean;
        get xRot(): number;
        get yRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundMoveEntityPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEntity(arg0: $Level_): $Entity;
        getYa(): number;
        getXa(): number;
        getZa(): number;
        isOnGround(): boolean;
        getxRot(): number;
        getyRot(): number;
        hasPosition(): boolean;
        hasRotation(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        onGround: boolean;
        yRot: number;
        za: number;
        ya: number;
        xRot: number;
        xa: number;
        hasRot: boolean;
        entityId: number;
        hasPos: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetDataPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerSetDataPacket>;
        getValue(): number;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerSetDataPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get value(): number;
        get id(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDebugSamplePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundDebugSamplePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        debugSampleType(): $RemoteDebugSampleType;
        sample(): number[];
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDebugSamplePacket>;
        constructor(arg0: number[], arg1: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerClosePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerClosePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getContainerId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerClosePacket>;
        constructor(arg0: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$InteractionAction implements $ServerboundInteractPacket$Action {
    }
    export class $ClientboundLevelEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLevelEventPacket>;
        getType(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getData(): number;
        getPos(): $BlockPos;
        isGlobalEvent(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLevelEventPacket>;
        constructor(arg0: number, arg1: $BlockPos_, arg2: number, arg3: boolean);
        get data(): number;
        get pos(): $BlockPos;
        get globalEvent(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLightUpdatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLightUpdatePacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getX(): number;
        getZ(): number;
        getLightData(): $ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLightUpdatePacket>;
        constructor(arg0: $ChunkPos, arg1: $LevelLightEngine, arg2: $BitSet, arg3: $BitSet);
        get x(): number;
        get z(): number;
        get lightData(): $ClientboundLightUpdatePacketData;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundEditBookPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        slot(): number;
        type(): $PacketType<$ServerboundEditBookPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        pages(): $List<string>;
        title(): (string) | undefined;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static MAX_BYTES_PER_CHAR: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEditBookPacket>;
        constructor(arg0: number, arg1: $List_<string>, arg2: (string) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetChunkCacheRadiusPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetChunkCacheRadiusPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getRadius(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheRadiusPacket>;
        constructor(arg0: number);
        get radius(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTagQueryPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTagQueryPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getTag(): $CompoundTag;
        isSkippable(): boolean;
        getTransactionId(): number;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTagQueryPacket>;
        constructor(arg0: number, arg1: $CompoundTag_);
        get tag(): $CompoundTag;
        get skippable(): boolean;
        get transactionId(): number;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkWithLightPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLevelChunkWithLightPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getX(): number;
        getZ(): number;
        getChunkData(): $ClientboundLevelChunkPacketData;
        getLightData(): $ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelChunkWithLightPacket>;
        constructor(arg0: $LevelChunk, arg1: $LevelLightEngine, arg2: $BitSet, arg3: $BitSet);
        get x(): number;
        get z(): number;
        get chunkData(): $ClientboundLevelChunkPacketData;
        get lightData(): $ClientboundLightUpdatePacketData;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChunkBatchReceivedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChunkBatchReceivedPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        desiredChunksPerTick(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChunkBatchReceivedPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$NodeResolver {
    }
    export class $ServerboundPickItemPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPickItemPacket>;
        getSlot(): number;
        handle(arg0: $ServerGamePacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPickItemPacket>;
        constructor(arg0: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundServerDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundServerDataPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        motd(): $Component;
        iconBytes(): (number[]) | undefined;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundServerDataPacket>;
        constructor(arg0: $Component_, arg1: (number[]) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunksBiomesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChunksBiomesPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        static forChunks(arg0: $List_<$LevelChunk>): $ClientboundChunksBiomesPacket;
        chunkBiomeData(): $List<$ClientboundChunksBiomesPacket$ChunkBiomeData>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChunksBiomesPacket>;
        constructor(arg0: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRemoveEntitiesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRemoveEntitiesPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getEntityIds(): $IntList;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRemoveEntitiesPacket>;
        constructor(...arg0: number[]);
        constructor(arg0: $IntList);
        get entityIds(): $IntList;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundUseItemPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getSequence(): number;
        getYRot(): number;
        getXRot(): number;
        getHand(): $InteractionHand;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemPacket>;
        constructor(arg0: $InteractionHand_, arg1: number, arg2: number, arg3: number);
        get sequence(): number;
        get YRot(): number;
        get XRot(): number;
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientGamePacketListener {
    }
    export interface $ClientGamePacketListener extends $ClientPongPacketListener, $ClientCommonPacketListener {
        protocol(): $ConnectionProtocol;
        handleGameEvent(arg0: $ClientboundGameEventPacket): void;
        handleCustomChatCompletions(arg0: $ClientboundCustomChatCompletionsPacket_): void;
        handleSetBorderWarningDelay(arg0: $ClientboundSetBorderWarningDelayPacket): void;
        handleProjectilePowerPacket(arg0: $ClientboundProjectilePowerPacket): void;
        handleSetBorderWarningDistance(arg0: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetEntityPassengersPacket(arg0: $ClientboundSetPassengersPacket): void;
        handleSelectAdvancementsTab(arg0: $ClientboundSelectAdvancementsTabPacket): void;
        handleUpdateAdvancementsPacket(arg0: $ClientboundUpdateAdvancementsPacket): void;
        handleSetSimulationDistance(arg0: $ClientboundSetSimulationDistancePacket_): void;
        handleDamageEvent(arg0: $ClientboundDamageEventPacket_): void;
        handleEntityEvent(arg0: $ClientboundEntityEventPacket): void;
        handleRemoveMobEffect(arg0: $ClientboundRemoveMobEffectPacket_): void;
        handleSetDisplayObjective(arg0: $ClientboundSetDisplayObjectivePacket): void;
        handlePlayerInfoRemove(arg0: $ClientboundPlayerInfoRemovePacket_): void;
        handleChunkBatchStart(arg0: $ClientboundChunkBatchStartPacket): void;
        handlePlayerInfoUpdate(arg0: $ClientboundPlayerInfoUpdatePacket): void;
        handleMerchantOffers(arg0: $ClientboundMerchantOffersPacket): void;
        handleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket): void;
        handleParticleEvent(arg0: $ClientboundLevelParticlesPacket): void;
        handleChunkBatchFinished(arg0: $ClientboundChunkBatchFinishedPacket_): void;
        handleSetPlayerTeamPacket(arg0: $ClientboundSetPlayerTeamPacket): void;
        handlePlayerAbilities(arg0: $ClientboundPlayerAbilitiesPacket): void;
        handleSoundEntityEvent(arg0: $ClientboundSoundEntityPacket): void;
        handleTabListCustomisation(arg0: $ClientboundTabListPacket_): void;
        handleUpdateAttributes(arg0: $ClientboundUpdateAttributesPacket): void;
        handleSetChunkCacheRadius(arg0: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetChunkCacheCenter(arg0: $ClientboundSetChunkCacheCenterPacket): void;
        handleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket): void;
        handleCommandSuggestions(arg0: $ClientboundCommandSuggestionsPacket_): void;
        handleSetEntityData(arg0: $ClientboundSetEntityDataPacket_): void;
        handleSetEntityMotion(arg0: $ClientboundSetEntityMotionPacket): void;
        handleContainerSetSlot(arg0: $ClientboundContainerSetSlotPacket): void;
        handleDisguisedChat(arg0: $ClientboundDisguisedChatPacket_): void;
        handleBlockDestruction(arg0: $ClientboundBlockDestructionPacket): void;
        handleChangeDifficulty(arg0: $ClientboundChangeDifficultyPacket): void;
        handleSetCarriedItem(arg0: $ClientboundSetCarriedItemPacket): void;
        handleHurtAnimation(arg0: $ClientboundHurtAnimationPacket_): void;
        handleStopSoundEvent(arg0: $ClientboundStopSoundPacket): void;
        handleConfigurationStart(arg0: $ClientboundStartConfigurationPacket): void;
        handleAddExperienceOrb(arg0: $ClientboundAddExperienceOrbPacket): void;
        handlePlayerCombatKill(arg0: $ClientboundPlayerCombatKillPacket_): void;
        handleSetBorderCenter(arg0: $ClientboundSetBorderCenterPacket): void;
        handleTakeItemEntity(arg0: $ClientboundTakeItemEntityPacket): void;
        handleSetBorderLerpSize(arg0: $ClientboundSetBorderLerpSizePacket): void;
        handleForgetLevelChunk(arg0: $ClientboundForgetLevelChunkPacket_): void;
        handleBlockEntityData(arg0: $ClientboundBlockEntityDataPacket): void;
        handleContainerSetData(arg0: $ClientboundContainerSetDataPacket): void;
        handleTagQueryPacket(arg0: $ClientboundTagQueryPacket): void;
        handleContainerContent(arg0: $ClientboundContainerSetContentPacket): void;
        handleRemoveEntities(arg0: $ClientboundRemoveEntitiesPacket): void;
        handleUpdateRecipes(arg0: $ClientboundUpdateRecipesPacket): void;
        handleEntityLinkPacket(arg0: $ClientboundSetEntityLinkPacket): void;
        handleContainerClose(arg0: $ClientboundContainerClosePacket): void;
        handleSetExperience(arg0: $ClientboundSetExperiencePacket): void;
        handleHorseScreenOpen(arg0: $ClientboundHorseScreenOpenPacket): void;
        handleAddOrRemoveRecipes(arg0: $ClientboundRecipePacket): void;
        handleChunkBlocksUpdate(arg0: $ClientboundSectionBlocksUpdatePacket): void;
        handlePlayerCombatEnd(arg0: $ClientboundPlayerCombatEndPacket): void;
        handleUpdateMobEffect(arg0: $ClientboundUpdateMobEffectPacket): void;
        handleTeleportEntity(arg0: $ClientboundTeleportEntityPacket): void;
        handleOpenSignEditor(arg0: $ClientboundOpenSignEditorPacket): void;
        handleInitializeBorder(arg0: $ClientboundInitializeBorderPacket): void;
        handlePlayerCombatEnter(arg0: $ClientboundPlayerCombatEnterPacket): void;
        handleSetBorderSize(arg0: $ClientboundSetBorderSizePacket): void;
        handleBlockChangedAck(arg0: $ClientboundBlockChangedAckPacket_): void;
        setSubtitleText(arg0: $ClientboundSetSubtitleTextPacket_): void;
        handleAddObjective(arg0: $ClientboundSetObjectivePacket): void;
        handleOpenBook(arg0: $ClientboundOpenBookPacket): void;
        handleResetScore(arg0: $ClientboundResetScorePacket_): void;
        handleBossUpdate(arg0: $ClientboundBossEventPacket): void;
        handleSetCamera(arg0: $ClientboundSetCameraPacket): void;
        handleSetScore(arg0: $ClientboundSetScorePacket_): void;
        handleServerData(arg0: $ClientboundServerDataPacket_): void;
        handleTitlesClear(arg0: $ClientboundClearTitlesPacket): void;
        handleSoundEvent(arg0: $ClientboundSoundPacket): void;
        setTitleText(arg0: $ClientboundSetTitleTextPacket_): void;
        handleItemCooldown(arg0: $ClientboundCooldownPacket_): void;
        handleMoveVehicle(arg0: $ClientboundMoveVehiclePacket): void;
        setActionBarText(arg0: $ClientboundSetActionBarTextPacket_): void;
        setTitlesAnimation(arg0: $ClientboundSetTitlesAnimationPacket): void;
        handleDebugSample(arg0: $ClientboundDebugSamplePacket_): void;
        handlePlaceRecipe(arg0: $ClientboundPlaceGhostRecipePacket): void;
        handleBundlePacket(arg0: $ClientboundBundlePacket): void;
        handleTickingState(arg0: $ClientboundTickingStatePacket_): void;
        handleChunksBiomes(arg0: $ClientboundChunksBiomesPacket_): void;
        handleAnimate(arg0: $ClientboundAnimatePacket): void;
        handleSetTime(arg0: $ClientboundSetTimePacket): void;
        handleLogin(arg0: $ClientboundLoginPacket_): void;
        handleDeleteChat(arg0: $ClientboundDeleteChatPacket_): void;
        handleMoveEntity(arg0: $ClientboundMoveEntityPacket): void;
        handleBlockUpdate(arg0: $ClientboundBlockUpdatePacket): void;
        handleSystemChat(arg0: $ClientboundSystemChatPacket_): void;
        handleRotateMob(arg0: $ClientboundRotateHeadPacket): void;
        handleTickingStep(arg0: $ClientboundTickingStepPacket_): void;
        handleMovePlayer(arg0: $ClientboundPlayerPositionPacket): void;
        handlePlayerChat(arg0: $ClientboundPlayerChatPacket_): void;
        handleAddEntity(arg0: $ClientboundAddEntityPacket): void;
        handleExplosion(arg0: $ClientboundExplodePacket): void;
        handleSetEquipment(arg0: $ClientboundSetEquipmentPacket): void;
        handleCommands(arg0: $ClientboundCommandsPacket): void;
        handleLookAt(arg0: $ClientboundPlayerLookAtPacket): void;
        handleBlockEvent(arg0: $ClientboundBlockEventPacket): void;
        handleSetSpawn(arg0: $ClientboundSetDefaultSpawnPositionPacket): void;
        handleLevelEvent(arg0: $ClientboundLevelEventPacket): void;
        handleMapItemData(arg0: $ClientboundMapItemDataPacket_): void;
        handleRespawn(arg0: $ClientboundRespawnPacket_): void;
        handleSetHealth(arg0: $ClientboundSetHealthPacket): void;
        handleAwardStats(arg0: $ClientboundAwardStatsPacket_): void;
        handleOpenScreen(arg0: $ClientboundOpenScreenPacket): void;
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
    }
    export class $ClientboundSetBorderCenterPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderCenterPacket>;
        handle(arg0: $ClientGamePacketListener): void;
        getNewCenterX(): number;
        getNewCenterZ(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderCenterPacket>;
        constructor(arg0: $WorldBorder);
        get newCenterX(): number;
        get newCenterZ(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerClickPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerClickPacket>;
        handle(arg0: $ServerGamePacketListener): void;
        getCarriedItem(): $ItemStack;
        getStateId(): number;
        getContainerId(): number;
        getSlotNum(): number;
        getClickType(): $ClickType;
        getButtonNum(): number;
        getChangedSlots(): $Int2ObjectMap<$ItemStack>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundContainerClickPacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ClickType_, arg5: $ItemStack_, arg6: $Int2ObjectMap<$ItemStack_>);
        get carriedItem(): $ItemStack;
        get stateId(): number;
        get containerId(): number;
        get slotNum(): number;
        get clickType(): $ClickType;
        get buttonNum(): number;
        get changedSlots(): $Int2ObjectMap<$ItemStack>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAnimatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAnimatePacket>;
        getId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getAction(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static CRITICAL_HIT: number;
        static MAGIC_CRITICAL_HIT: number;
        static SWING_MAIN_HAND: number;
        static SWING_OFF_HAND: number;
        static WAKE_UP: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAnimatePacket>;
        constructor(arg0: $Entity, arg1: number);
        get id(): number;
        get action(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerPacketListener {
        static LOGGER: $Logger;
    }
    export interface $ServerPacketListener extends $ServerboundPacketListener {
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
    }
    export class $ServerboundSeenAdvancementsPacket$Action extends $Enum<$ServerboundSeenAdvancementsPacket$Action> {
        static values(): $ServerboundSeenAdvancementsPacket$Action[];
        static valueOf(arg0: string): $ServerboundSeenAdvancementsPacket$Action;
        static OPENED_TAB: $ServerboundSeenAdvancementsPacket$Action;
        static CLOSED_SCREEN: $ServerboundSeenAdvancementsPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSeenAdvancementsPacket$Action}.
     */
    export type $ServerboundSeenAdvancementsPacket$Action_ = "opened_tab" | "closed_screen";
}
