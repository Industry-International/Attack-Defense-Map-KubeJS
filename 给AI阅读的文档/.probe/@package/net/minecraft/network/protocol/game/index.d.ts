import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot, $LivingEntity, $Mob, $RelativeMovement_, $RelativeMovement, $Entity, $EquipmentSlot_, $EntityType, $ExperienceOrb } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
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
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderSizePacket>;
        constructor(worldBorder: $WorldBorder);
        get size(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerPositionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerPositionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getY(): number;
        getYRot(): number;
        getXRot(): number;
        /**
         * Returns a set of which fields are relative. Items in this set indicate that the value is a relative change applied to the player's position, rather than an exact value.
         */
        getRelativeArguments(): $Set<$RelativeMovement>;
        getZ(): number;
        getX(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerPositionPacket>;
        constructor(x: number, arg1: number, y: number, arg3: number, z: number, arg5: $Set_<$RelativeMovement_>, yRot: number);
        get id(): number;
        get y(): number;
        get YRot(): number;
        get XRot(): number;
        get relativeArguments(): $Set<$RelativeMovement>;
        get z(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundCommandSuggestionPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundCommandSuggestionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getCommand(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCommandSuggestionPacket>;
        constructor(id: number, command: string);
        get id(): number;
        get command(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSignUpdatePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSignUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getLines(): string[];
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isFrontText(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSignUpdatePacket>;
        constructor(pos: $BlockPos_, isFrontText: boolean, line1: string, line2: string, line3: string, line4: string);
        get lines(): string[];
        get pos(): $BlockPos;
        get frontText(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBossEventPacket>;
        dispatch(handler: $ClientboundBossEventPacket$Handler): void;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        static createRemovePacket(id: $UUID_): $ClientboundBossEventPacket;
        static createAddPacket(event: $BossEvent): $ClientboundBossEventPacket;
        static encodeProperties(darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean): number;
        static createUpdateStylePacket(event: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateProgressPacket(event: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateNamePacket(event: $BossEvent): $ClientboundBossEventPacket;
        static createUpdatePropertiesPacket(event: $BossEvent): $ClientboundBossEventPacket;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static REMOVE_OPERATION: $ClientboundBossEventPacket$Operation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBossEventPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRotateHeadPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRotateHeadPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        getYHeadRot(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRotateHeadPacket>;
        constructor(entity: $Entity, yHeadRot: number);
        get YHeadRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundInitializeBorderPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundInitializeBorderPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getNewAbsoluteMaxSize(): number;
        getNewSize(): number;
        getNewCenterZ(): number;
        getLerpTime(): number;
        getNewCenterX(): number;
        getWarningTime(): number;
        getWarningBlocks(): number;
        getOldSize(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundInitializeBorderPacket>;
        constructor(worldBorder: $WorldBorder);
        get newAbsoluteMaxSize(): number;
        get newSize(): number;
        get newCenterZ(): number;
        get lerpTime(): number;
        get newCenterX(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get oldSize(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunkBatchFinishedPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChunkBatchFinishedPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        batchSize(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getOffset(): $BlockPos;
        getSeed(): number;
        getData(): string;
        getMode(): $StructureMode;
        getPos(): $BlockPos;
        getRotation(): $Rotation;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isShowBoundingBox(): boolean;
        getUpdateType(): $StructureBlockEntity$UpdateType;
        getIntegrity(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isIgnoreEntities(): boolean;
        getMirror(): $Mirror;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isShowAir(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetStructureBlockPacket>;
        constructor(pos: $BlockPos_, updateType: $StructureBlockEntity$UpdateType_, mode: $StructureMode_, name: string, offset: $BlockPos_, size: $Vec3i, mirror: $Mirror_, rotation: $Rotation_, data: string, ignoreEntities: boolean, showAir: boolean, showBoundingBox: boolean, integrity: number, seed: number);
        get name(): string;
        get size(): $Vec3i;
        get offset(): $BlockPos;
        get seed(): number;
        get data(): string;
        get mode(): $StructureMode;
        get pos(): $BlockPos;
        get rotation(): $Rotation;
        get showBoundingBox(): boolean;
        get updateType(): $StructureBlockEntity$UpdateType;
        get integrity(): number;
        get ignoreEntities(): boolean;
        get mirror(): $Mirror;
        get showAir(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBlockUpdatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        getBlockState(): $BlockState;
        handler$hco000$sable$preHandle(arg0: $ClientGamePacketListener, arg1: $CallbackInfo): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockUpdatePacket>;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(blockGetter: $BlockGetter, pos: $BlockPos_);
        get pos(): $BlockPos;
        get blockState(): $BlockState;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetObjectivePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetObjectivePacket>;
        getMethod(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getDisplayName(): $Component;
        getNumberFormat(): ($NumberFormat) | undefined;
        getRenderType(): $ObjectiveCriteria$RenderType;
        getObjectiveName(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static METHOD_ADD: number;
        static METHOD_REMOVE: number;
        static METHOD_CHANGE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetObjectivePacket>;
        constructor(objective: $Objective, method: number);
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        levels(): number;
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        keepJigsaws(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundJigsawGeneratePacket>;
        constructor(pos: $BlockPos_, levels: number, keepJigsaws: boolean);
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket implements $Packet<$ServerGamePacketListener>, $ServerboundMovePlayerPacketExtension {
        type(): $PacketType<$ServerboundMovePlayerPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getY(defaultValue: number): number;
        getYRot(defaultValue: number): number;
        getXRot(defaultValue: number): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        hasPosition(): boolean;
        sable$handle(arg0: $ServerPlayer): void;
        getZ(defaultValue: number): number;
        getX(defaultValue: number): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        hasRotation(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isOnGround(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        onGround: boolean;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        hasRot: boolean;
        z: number;
        hasPos: boolean;
        constructor(x: number, arg1: number, y: number, arg3: number, z: number, arg5: boolean, yRot: boolean, xRot: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Action$Writer {
    }
    export interface $ClientboundPlayerInfoUpdatePacket$Action$Writer {
        write(buffer: $RegistryFriendlyByteBuf, entry: $ClientboundPlayerInfoUpdatePacket$Entry_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Writer}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Writer_ = ((arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry) => void);
    export class $ClientboundLightUpdatePacketData {
        write(buffer: $FriendlyByteBuf): void;
        getSkyUpdates(): $List<number[]>;
        getEmptyBlockYMask(): $BitSet;
        getBlockUpdates(): $List<number[]>;
        getSkyYMask(): $BitSet;
        getEmptySkyYMask(): $BitSet;
        getBlockYMask(): $BitSet;
        constructor(chunkPos: $ChunkPos, lightEngine: $LevelLightEngine, skyLight: $BitSet | null, blockLight: $BitSet | null);
        constructor(buffer: $FriendlyByteBuf, x: number, z: number);
        get skyUpdates(): $List<number[]>;
        get emptyBlockYMask(): $BitSet;
        get blockUpdates(): $List<number[]>;
        get skyYMask(): $BitSet;
        get emptySkyYMask(): $BitSet;
        get blockYMask(): $BitSet;
    }
    export class $ClientboundSetDisplayObjectivePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetDisplayObjectivePacket>;
        getSlot(): $DisplaySlot;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getObjectiveName(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDisplayObjectivePacket>;
        constructor(slot: $DisplaySlot_, objective: $Objective | null);
        get slot(): $DisplaySlot;
        get objectiveName(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundClientCommandPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundClientCommandPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getAction(): $ServerboundClientCommandPacket$Action;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundClientCommandPacket>;
        constructor(action: $ServerboundClientCommandPacket$Action_);
        get action(): $ServerboundClientCommandPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitleTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTitleTextPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        text(): $Component;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetTitleTextPacket>;
        constructor(text: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatAckPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatAckPacket>;
        offset(): number;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenBookPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundOpenBookPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getHand(): $InteractionHand;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenBookPacket>;
        constructor(hand: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundGameEventPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEvent(): $ClientboundGameEventPacket$Type;
        getParam(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        constructor(event: $ClientboundGameEventPacket$Type, param: number);
        get event(): $ClientboundGameEventPacket$Type;
        get param(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemOnPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundUseItemOnPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getSequence(): number;
        getHand(): $InteractionHand;
        getHitResult(): $BlockHitResult;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemOnPacket>;
        constructor(hand: $InteractionHand_, blockHit: $BlockHitResult, sequence: number);
        get sequence(): number;
        get hand(): $InteractionHand;
        get hitResult(): $BlockHitResult;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetCameraPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetCameraPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCameraPacket>;
        constructor(cameraEntity: $Entity);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$AddOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSetChunkCacheCenterPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetChunkCacheCenterPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getZ(): number;
        getX(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheCenterPacket>;
        constructor(x: number, z: number);
        get z(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$Action {
    }
    export interface $ServerboundInteractPacket$Action {
    }
    export class $ServerboundChatCommandSignedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatCommandSignedPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        command(): string;
        timeStamp(): $Instant;
        salt(): number;
        argumentSignatures(): $ArgumentSignatures;
        lastSeenMessages(): $LastSeenMessages$Update;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getAccelerationPower(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundProjectilePowerPacket>;
        constructor(id: number, accelerationPower: number);
        get id(): number;
        get accelerationPower(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSwingPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSwingPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getHand(): $InteractionHand;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSwingPacket>;
        constructor(hand: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenScreenPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundOpenScreenPacket>;
        getType(): $MenuType<never>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTitle(): $Component;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundOpenScreenPacket>;
        constructor(containerId: number, menuType: $MenuType_<never>, title: $Component_);
        get title(): $Component;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSelectAdvancementsTabPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSelectAdvancementsTabPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTab(): $ResourceLocation;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSelectAdvancementsTabPacket>;
        constructor(tab: $ResourceLocation_ | null);
        get tab(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundResetScorePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundResetScorePacket>;
        owner(): string;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        objectiveName(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundResetScorePacket>;
        constructor(arg0: string, arg1: string | null);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMapItemDataPacket extends $Record implements $Packet<$ClientGamePacketListener>, $IMapDataPacketExtension {
        type(): $PacketType<$ClientboundMapItemDataPacket>;
        scale(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        locked(): boolean;
        moonlight$getDirtyCustomData(): $Optional<any>;
        decorations(): ($List<$MapDecoration>) | undefined;
        mapId(): $MapId;
        /**
         * Sets new MapData from the packet to given MapData param
         */
        applyToMap(mapData: $MapItemSavedData): void;
        colorPatch(): ($MapItemSavedData$MapPatch) | undefined;
        moonlight$getDimension(): $ResourceLocation;
        moonlight$getMapCenterZ(): number;
        moonlight$getMapCenterX(): number;
        moonlight$setDimension(arg0: $ResourceLocation_): void;
        moonlight$setMapCenter(arg0: number, arg1: number): void;
        moonlight$setCustomDecorations(arg0: $Optional<any>): void;
        moonlight$getCustomDecorations(): $Optional<any>;
        moonlight$setDirtyCustomData(arg0: $Optional<any>): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMapItemDataPacket>;
        constructor(mapId: $MapId_, scale: number, locked: boolean, decorations: $Collection_<$MapDecoration_> | null, colorPatch: $MapItemSavedData$MapPatch_ | null);
        constructor(arg0: $MapId_, arg1: number, arg2: boolean, arg3: ($List_<$MapDecoration_>) | undefined, arg4: ($MapItemSavedData$MapPatch_) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $VecDeltaCodec {
        decode(x: number, arg1: number, y: number): $Vec3;
        static decode(value: number): number;
        static encode(value: number): number;
        delta(value: $Vec3_): $Vec3;
        getBase(): $Vec3;
        setBase(base: $Vec3_): void;
        encodeZ(value: $Vec3_): number;
        encodeY(value: $Vec3_): number;
        encodeX(value: $Vec3_): number;
        constructor();
    }
    export class $ServerboundPlayerCommandPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerCommandPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getData(): number;
        getAction(): $ServerboundPlayerCommandPacket$Action;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerCommandPacket>;
        constructor(entity: $Entity, action: $ServerboundPlayerCommandPacket$Action_, data: number);
        constructor(entity: $Entity, action: $ServerboundPlayerCommandPacket$Action_);
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundForgetLevelChunkPacket>;
        constructor(arg0: $ChunkPos);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetBorderWarningDistancePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderWarningDistancePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getWarningBlocks(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDistancePacket>;
        constructor(worldBorder: $WorldBorder);
        get warningBlocks(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStatePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTickingStatePacket>;
        static from(tickRateManager: $TickRateManager): $ClientboundTickingStatePacket;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isFrozen(): boolean;
        tickRate(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCarriedItemPacket>;
        constructor(slot: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunksBiomesPacket$ChunkBiomeData extends $Record {
        buffer(): number[];
        write(buffer: $FriendlyByteBuf): void;
        pos(): $ChunkPos;
        static extractChunkData(buffer: $FriendlyByteBuf, chunk: $LevelChunk): void;
        getReadBuffer(): $FriendlyByteBuf;
        constructor(arg0: $ChunkPos, arg1: number[]);
        constructor(buffer: $FriendlyByteBuf);
        constructor(chunk: $LevelChunk);
        get readBuffer(): $FriendlyByteBuf;
    }
    export class $ClientboundPlayerInfoRemovePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerInfoRemovePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        profileIds(): $List<$UUID>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerInfoRemovePacket>;
        constructor(arg0: $List_<$UUID_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetActionBarTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetActionBarTextPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        text(): $Component;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetActionBarTextPacket>;
        constructor(text: $Component_);
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRenameItemPacket>;
        constructor(name: string);
        get name(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
    }
    export interface $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
        accept(pos: $BlockPos_, type: $BlockEntityType_<never>, nbt: $CompoundTag_ | null): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundLevelChunkPacketData$BlockEntityTagOutput}.
     */
    export type $ClientboundLevelChunkPacketData$BlockEntityTagOutput_ = ((arg0: $BlockPos, arg1: $BlockEntityType<never>, arg2: $CompoundTag) => void);
    export class $ClientboundSetHealthPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetHealthPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getHealth(): number;
        getSaturation(): number;
        getFood(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetHealthPacket>;
        constructor(health: number, food: number, saturation: number);
        get health(): number;
        get saturation(): number;
        get food(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMerchantOffersPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundMerchantOffersPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getOffers(): $MerchantOffers;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        canRestock(): boolean;
        getVillagerXp(): number;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        showProgress(): boolean;
        getVillagerLevel(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMerchantOffersPacket>;
        constructor(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean);
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get containerId(): number;
        get villagerLevel(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData {
        write(buffer: $RegistryFriendlyByteBuf): void;
        static extractChunkData(buffer: $FriendlyByteBuf, chunk: $LevelChunk): void;
        getBlockEntitiesTagsConsumer(chunkX: number, chunkZ: number): $Consumer<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>;
        getReadBuffer(): $FriendlyByteBuf;
        getHeightmaps(): $CompoundTag;
        constructor(levelChunk: $LevelChunk);
        constructor(buffer: $RegistryFriendlyByteBuf, x: number, z: number);
        get readBuffer(): $FriendlyByteBuf;
        get heightmaps(): $CompoundTag;
    }
    export class $ClientboundSetPlayerTeamPacket$Parameters {
        write(buffer: $RegistryFriendlyByteBuf): void;
        getDisplayName(): $Component;
        getOptions(): number;
        getColor(): $ChatFormatting;
        getNametagVisibility(): string;
        getPlayerSuffix(): $Component;
        getPlayerPrefix(): $Component;
        getCollisionRule(): string;
        constructor(team: $PlayerTeam);
        constructor(buffer: $RegistryFriendlyByteBuf);
        get displayName(): $Component;
        get options(): number;
        get color(): $ChatFormatting;
        get nametagVisibility(): string;
        get playerSuffix(): $Component;
        get playerPrefix(): $Component;
        get collisionRule(): string;
    }
    /**
     * PacketListener for the server side of the PLAY protocol.
     */
    export class $ServerGamePacketListener {
    }
    export interface $ServerGamePacketListener extends $ServerPingPacketListener, $ServerCommonPacketListener, $IServerGamePacketListenerExtension {
        protocol(): $ConnectionProtocol;
        handlePickItem(packet: $ServerboundPickItemPacket): void;
        handleEditBook(packet: $ServerboundEditBookPacket_): void;
        handleSelectTrade(packet: $ServerboundSelectTradePacket): void;
        /**
         * Processes the player initiating/stopping digging on a particular spot, as well as a player dropping items
         */
        handlePlayerAction(packet: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(packet: $ServerboundUseItemOnPacket): void;
        /**
         * Processes player movement input. Includes walking, strafing, jumping, and sneaking. Excludes riding and toggling flying/sprinting.
         */
        handlePlayerInput(packet: $ServerboundPlayerInputPacket): void;
        handleRenameItem(packet: $ServerboundRenameItemPacket): void;
        handleSignUpdate(packet: $ServerboundSignUpdatePacket): void;
        handleChatAck(packet: $ServerboundChatAckPacket_): void;
        /**
         * Called when a client is using an item while not pointing at a block, but simply using an item
         */
        handleUseItem(packet: $ServerboundUseItemPacket): void;
        handlePaddleBoat(packet: $ServerboundPaddleBoatPacket): void;
        /**
         * Processes left and right clicks on entities
         */
        handleInteract(packet: $ServerboundInteractPacket): void;
        handleChatCommand(packet: $ServerboundChatCommandPacket_): void;
        /**
         * Updates which quickbar slot is selected
         */
        handleSetCarriedItem(packet: $ServerboundSetCarriedItemPacket): void;
        /**
         * Processes the client closing windows (container)
         */
        handleContainerClose(packet: $ServerboundContainerClosePacket): void;
        handleChangeDifficulty(packet: $ServerboundChangeDifficultyPacket): void;
        /**
         * Processes a player starting/stopping flying
         */
        handlePlayerAbilities(packet: $ServerboundPlayerAbilitiesPacket): void;
        handleSetJigsawBlock(packet: $ServerboundSetJigsawBlockPacket): void;
        handleSeenAdvancements(packet: $ServerboundSeenAdvancementsPacket): void;
        handleBlockEntityTagQuery(packet: $ServerboundBlockEntityTagQueryPacket): void;
        handleAcceptTeleportPacket(packet: $ServerboundAcceptTeleportationPacket): void;
        handleSetCommandMinecart(packet: $ServerboundSetCommandMinecartPacket): void;
        handleSetBeaconPacket(packet: $ServerboundSetBeaconPacket_): void;
        handleEntityTagQuery(packet: $ServerboundEntityTagQueryPacket): void;
        handleSetCommandBlock(packet: $ServerboundSetCommandBlockPacket): void;
        handleSetStructureBlock(packet: $ServerboundSetStructureBlockPacket): void;
        handleJigsawGenerate(packet: $ServerboundJigsawGeneratePacket): void;
        handleSignedChatCommand(packet: $ServerboundChatCommandSignedPacket_): void;
        /**
         * Update the server with an ItemStack in a slot.
         */
        handleSetCreativeModeSlot(packet: $ServerboundSetCreativeModeSlotPacket_): void;
        handleChatSessionUpdate(packet: $ServerboundChatSessionUpdatePacket_): void;
        handleChunkBatchReceived(packet: $ServerboundChunkBatchReceivedPacket_): void;
        /**
         * Processes a range of action-types: sneaking, sprinting, waking from sleep, opening the inventory or setting jump height of the horse the player is riding
         */
        handlePlayerCommand(packet: $ServerboundPlayerCommandPacket): void;
        /**
         * Processes the client status updates: respawn attempt from player, opening statistics or achievements, or acquiring 'open inventory' achievement
         */
        handleClientCommand(packet: $ServerboundClientCommandPacket): void;
        handleLockDifficulty(packet: $ServerboundLockDifficultyPacket): void;
        /**
         * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
         */
        handleContainerClick(packet: $ServerboundContainerClickPacket): void;
        /**
         * Enchants the item identified by the packet given some convoluted conditions (matching window, which should/shouldn't be in use?)
         */
        handleContainerButtonClick(packet: $ServerboundContainerButtonClickPacket_): void;
        handleConfigurationAcknowledged(packet: $ServerboundConfigurationAcknowledgedPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCustomCommandSuggestions(packet: $ServerboundCommandSuggestionPacket): void;
        handleTeleportToEntityPacket(packet: $ServerboundTeleportToEntityPacket): void;
        handleRecipeBookSeenRecipePacket(packet: $ServerboundRecipeBookSeenRecipePacket): void;
        handleDebugSampleSubscription(packet: $ServerboundDebugSampleSubscriptionPacket_): void;
        handleContainerSlotStateChanged(packet: $ServerboundContainerSlotStateChangedPacket_): void;
        handleAnimate(packet: $ServerboundSwingPacket): void;
        /**
         * Processes clients perspective on player positioning and/or orientation
         */
        handleMovePlayer(packet: $ServerboundMovePlayerPacket): void;
        handleMoveVehicle(packet: $ServerboundMoveVehiclePacket): void;
        handlePlaceRecipe(packet: $ServerboundPlaceRecipePacket): void;
        handleRecipeBookChangeSettingsPacket(packet: $ServerboundRecipeBookChangeSettingsPacket): void;
        /**
         * Process chat messages (broadcast back to clients) and commands (executes)
         */
        handleChat(packet: $ServerboundChatPacket_): void;
    }
    export class $ServerboundInteractPacket$Handler {
    }
    export interface $ServerboundInteractPacket$Handler {
        onAttack(): void;
        onInteraction(hand: $InteractionHand_, interactionLocation: $Vec3_): void;
        onInteraction(hand: $InteractionHand_): void;
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
        constructor(onGround: boolean);
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
        constructor(x: number, arg1: number, y: number, arg3: number, z: number, arg5: boolean);
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
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isAutomatic(): boolean;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getMode(): $CommandBlockEntity$Mode;
        getCommand(): string;
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isConditional(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTrackOutput(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandBlockPacket>;
        constructor(pos: $BlockPos_, command: string, mode: $CommandBlockEntity$Mode_, trackOutput: boolean, conditional: boolean, automatic: boolean);
        get automatic(): boolean;
        get mode(): $CommandBlockEntity$Mode;
        get command(): string;
        get pos(): $BlockPos;
        get conditional(): boolean;
        get trackOutput(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlaceRecipePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlaceRecipePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getRecipe(): $ResourceLocation;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isShiftDown(): boolean;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlaceRecipePacket>;
        constructor(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean);
        get recipe(): $ResourceLocation;
        get shiftDown(): boolean;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundHurtAnimationPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundHurtAnimationPacket>;
        id(): number;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        yaw(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHurtAnimationPacket>;
        constructor(arg0: number, arg1: number);
        constructor(entity: $LivingEntity);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetCreativeModeSlotPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetCreativeModeSlotPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        itemStack(): $ItemStack;
        slotNum(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetCreativeModeSlotPacket>;
        constructor(slotNum: number, itemStack: $ItemStack_);
        constructor(arg0: number, arg1: $ItemStack_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateMobEffectPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateMobEffectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEffect(): $Holder<$MobEffect>;
        getEffectDurationTicks(): number;
        getEntityId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        effectShowsIcon(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isEffectVisible(): boolean;
        getEffectAmplifier(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isEffectAmbient(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        shouldBlend(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateMobEffectPacket>;
        constructor(entityId: number, effect: $MobEffectInstance, blend: boolean);
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getInventoryColumns(): number;
        getEntityId(): number;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHorseScreenOpenPacket>;
        constructor(containerId: number, size: number, entityId: number);
        get inventoryColumns(): number;
        get entityId(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetCommandMinecartPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetCommandMinecartPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getCommand(): string;
        getCommandBlock(level: $Level_): $BaseCommandBlock;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTrackOutput(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandMinecartPacket>;
        constructor(entity: number, command: string, trackOutput: boolean);
        get command(): string;
        get trackOutput(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerAbilitiesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerAbilitiesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isInvulnerable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isFlying(): boolean;
        getWalkingSpeed(): number;
        getFlyingSpeed(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        canInstabuild(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        canFly(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        flyingSpeed: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerAbilitiesPacket>;
        constructor(abilities: $Abilities);
        get invulnerable(): boolean;
        get flying(): boolean;
        get walkingSpeed(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateRecipesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateRecipesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getRecipes(): $List<$RecipeHolder<never>>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateRecipesPacket>;
        constructor(recipes: $Collection_<$RecipeHolder_<never>>);
        get recipes(): $List<$RecipeHolder<never>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPaddleBoatPacket implements $Packet<$ServerGamePacketListener> {
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        getLeft(): boolean;
        type(): $PacketType<$ServerboundPaddleBoatPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        getRight(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPaddleBoatPacket>;
        constructor(left: boolean, right: boolean);
        get left(): boolean;
        get right(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateProgressOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundEntityEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundEntityEventPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        getEventId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundEntityEventPacket>;
        constructor(entity: $Entity, eventId: number);
        get eventId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateAttributesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundUpdateAttributesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getValues(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        getEntityId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAttributesPacket>;
        constructor(entityId: number, attributes: $Collection_<$AttributeInstance>);
        get values(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        get entityId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCommandsPacket>;
        getRoot(context: $CommandBuildContext): $RootCommandNode<$SharedSuggestionProvider>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCommandsPacket>;
        constructor(root: $RootCommandNode<$SharedSuggestionProvider>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$LiteralNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundStopSoundPacket implements $Packet<$ClientGamePacketListener> {
        getName(): $ResourceLocation;
        type(): $PacketType<$ClientboundStopSoundPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSource(): $SoundSource;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStopSoundPacket>;
        constructor(name: $ResourceLocation_ | null, source: $SoundSource_ | null);
        get name(): $ResourceLocation;
        get source(): $SoundSource;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookChangeSettingsPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundRecipeBookChangeSettingsPacket>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isOpen(): boolean;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isFiltering(): boolean;
        getBookType(): $RecipeBookType;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookChangeSettingsPacket>;
        constructor(bookType: $RecipeBookType_, isOpen: boolean, isFiltering: boolean);
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
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        text(): $Component;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetSubtitleTextPacket>;
        constructor(text: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRemoveMobEffectPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRemoveMobEffectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        effect(): $Holder<$MobEffect>;
        entityId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundRemoveMobEffectPacket>;
        constructor(arg0: number, arg1: $Holder_<$MobEffect>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$Pos extends $ClientboundMoveEntityPacket implements $PacketActuallyInSubLevelExtension {
        sable$setActuallyInSubLevel(arg0: boolean): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        constructor(entityId: number, xa: number, ya: number, za: number, onGround: boolean);
    }
    export class $ClientboundChangeDifficultyPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChangeDifficultyPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isLocked(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChangeDifficultyPacket>;
        constructor(difficulty: $Difficulty_, locked: boolean);
        get locked(): boolean;
        get difficulty(): $Difficulty;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityMotionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEntityMotionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityMotionPacket>;
        constructor(id: number, deltaMovement: $Vec3_);
        constructor(entity: $Entity);
        get id(): number;
        get xa(): number;
        get ya(): number;
        get za(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerActionPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerActionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getSequence(): number;
        getAction(): $ServerboundPlayerActionPacket$Action;
        getDirection(): $Direction;
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerActionPacket>;
        constructor(action: $ServerboundPlayerActionPacket$Action_, pos: $BlockPos_, direction: $Direction_);
        constructor(action: $ServerboundPlayerActionPacket$Action_, pos: $BlockPos_, direction: $Direction_, sequence: number);
        get sequence(): number;
        get action(): $ServerboundPlayerActionPacket$Action;
        get direction(): $Direction;
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEquipmentPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEquipmentPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSlots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        getEntity(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetEquipmentPacket>;
        constructor(entity: number, slots: $List_<$Pair<$EquipmentSlot_, $ItemStack_>>);
        get slots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        get entity(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAddEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAddEntityPacket>;
        getId(): number;
        getType(): $EntityType<never>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getData(): number;
        getY(): number;
        getUUID(): $UUID;
        getYRot(): number;
        getXRot(): number;
        getYHeadRot(): number;
        getZ(): number;
        getX(): number;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAddEntityPacket>;
        constructor(id: number, uuid: $UUID_, x: number, arg3: number, y: number, arg5: number, z: number, arg7: $EntityType_<never>, xRot: number, yRot: $Vec3_, type: number);
        constructor(entity: $Entity, data: number, pos: $BlockPos_);
        constructor(entity: $Entity, serverEntity: $ServerEntity, data: number);
        constructor(entity: $Entity, serverEntity: $ServerEntity);
        get id(): number;
        get data(): number;
        get y(): number;
        get UUID(): $UUID;
        get YRot(): number;
        get XRot(): number;
        get YHeadRot(): number;
        get z(): number;
        get x(): number;
        get xa(): number;
        get ya(): number;
        get za(): number;
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isLocked(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundLockDifficultyPacket>;
        constructor(locked: boolean);
        get locked(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatKillPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerCombatKillPacket>;
        message(): $Component;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        playerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerCombatKillPacket>;
        constructor(playerId: number, message: $Component_);
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
        constructor(x: number, arg1: number, y: number, arg3: boolean);
    }
    export class $ClientboundBossEventPacket$UpdatePropertiesOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundCommandSuggestionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCommandSuggestionsPacket>;
        length(): number;
        id(): number;
        start(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        suggestions(): $List<$ClientboundCommandSuggestionsPacket$Entry>;
        toSuggestions(): $Suggestions;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCommandSuggestionsPacket>;
        constructor(id: number, suggestions: $Suggestions);
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        display(): ($Component) | undefined;
        numberFormat(): ($NumberFormat) | undefined;
        score(): number;
        objectiveName(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetScorePacket>;
        constructor(arg0: string, arg1: string, arg2: number, arg3: ($Component_) | undefined, arg4: ($NumberFormat) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundEntityTagQueryPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundEntityTagQueryPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getEntityId(): number;
        getTransactionId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEntityTagQueryPacket>;
        constructor(transactionId: number, entityId: number);
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
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getPos(): $BlockPos;
        getTransactionId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundBlockEntityTagQueryPacket>;
        constructor(transactionId: number, pos: $BlockPos_);
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
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        shouldResetTimes(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundClearTitlesPacket>;
        constructor(resetTimes: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerButtonClickPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerButtonClickPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        buttonId(): number;
        containerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerButtonClickPacket>;
        constructor(containerId: number, buttonId: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetBorderWarningDelayPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderWarningDelayPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getWarningDelay(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDelayPacket>;
        constructor(worldBorder: $WorldBorder);
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
        constructor(entityId: number, yRot: number, xRot: number, onGround: boolean);
    }
    export class $ClientboundSetBorderLerpSizePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderLerpSizePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getNewSize(): number;
        getLerpTime(): number;
        getOldSize(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderLerpSizePacket>;
        constructor(worldBorder: $WorldBorder);
        get newSize(): number;
        get lerpTime(): number;
        get oldSize(): number;
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
        constructor(yRot: number, xRot: number, onGround: boolean);
    }
    export class $ServerboundContainerClosePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerClosePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerClosePacket>;
        constructor(containerId: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatCommandPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatCommandPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        command(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatCommandPacket>;
        constructor(arg0: string);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundDebugSampleSubscriptionPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundDebugSampleSubscriptionPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        sampleType(): $RemoteDebugSampleType;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundDebugSampleSubscriptionPacket>;
        constructor(arg0: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$Handler {
    }
    export interface $ClientboundBossEventPacket$Handler {
        remove(id: $UUID_): void;
        add(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean): void;
        updateStyle(id: $UUID_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_): void;
        updateProgress(id: $UUID_, progress: number): void;
        updateProperties(id: $UUID_, darkenScreen: boolean, playMusic: boolean, createWorldFog: boolean): void;
        updateName(id: $UUID_, name: $Component_): void;
    }
    export class $ClientboundBossEventPacket$UpdateStyleOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSoundPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSoundPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSeed(): number;
        getSource(): $SoundSource;
        getY(): number;
        getPitch(): number;
        getVolume(): number;
        getZ(): number;
        getX(): number;
        getSound(): $Holder<$SoundEvent>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static LOCATION_ACCURACY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundPacket>;
        constructor(sound: $Holder_<$SoundEvent>, source: $SoundSource_, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number);
        get seed(): number;
        get source(): $SoundSource;
        get y(): number;
        get pitch(): number;
        get volume(): number;
        get z(): number;
        get x(): number;
        get sound(): $Holder<$SoundEvent>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookSeenRecipePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundRecipeBookSeenRecipePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getRecipe(): $ResourceLocation;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookSeenRecipePacket>;
        constructor(recipe: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveVehiclePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundMoveVehiclePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getY(): number;
        getYRot(): number;
        getXRot(): number;
        getZ(): number;
        getX(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveVehiclePacket>;
        constructor(vehicle: $Entity);
        get y(): number;
        get YRot(): number;
        get XRot(): number;
        get z(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerSlotStateChangedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerSlotStateChangedPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        newState(): boolean;
        slotId(): number;
        containerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getY(): number;
        getZ(): number;
        getX(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAddExperienceOrbPacket>;
        constructor(orb: $ExperienceOrb, entity: $ServerEntity);
        get value(): number;
        get id(): number;
        get y(): number;
        get z(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTimePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTimePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getDayTime(): number;
        getGameTime(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTimePacket>;
        constructor(gameTime: number, arg1: number, dayTime: boolean);
        get dayTime(): number;
        get gameTime(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAwardStatsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAwardStatsPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        stats(): $Object2IntMap<$Stat<never>>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAwardStatsPacket>;
        constructor(stats: $Object2IntMap<$Stat_<never>>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBundlePacket extends $BundlePacket<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        constructor(arg0: $Iterable_<$Packet<$ClientGamePacketListener>>);
    }
    export class $ClientboundBlockChangedAckPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockChangedAckPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        sequence(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockChangedAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerInfoUpdatePacket>;
        entries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        actions(): $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action>;
        newEntries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        static createPlayerInitializing(players: $Collection_<$ServerPlayer>): $ClientboundPlayerInfoUpdatePacket;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerInfoUpdatePacket>;
        constructor(action: $ClientboundPlayerInfoUpdatePacket$Action_, player: $ServerPlayer);
        constructor(actions: $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action_>, players: $Collection_<$ServerPlayer>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDamageEventPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundDamageEventPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        sourceType(): $Holder<$DamageType>;
        getSource(level: $Level_): $DamageSource;
        sourcePosition(): ($Vec3) | undefined;
        entityId(): number;
        sourceCauseId(): number;
        sourceDirectId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundDamageEventPacket>;
        constructor(arg0: number, arg1: $Holder_<$DamageType>, arg2: number, arg3: number, arg4: ($Vec3_) | undefined);
        constructor(entity: $Entity, damageSource: $DamageSource_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetContentPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerSetContentPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getItems(): $List<$ItemStack>;
        getContainerId(): number;
        getCarriedItem(): $ItemStack;
        getStateId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetContentPacket>;
        constructor(containerId: number, stateId: number, items: $NonNullList<$ItemStack_>, carriedItem: $ItemStack_);
        get items(): $List<$ItemStack>;
        get containerId(): number;
        get carriedItem(): $ItemStack;
        get stateId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket$Type {
        static TYPES: $Int2ObjectMap<$ClientboundGameEventPacket$Type>;
        id: number;
        constructor(id: number);
    }
    /**
     * Triggers a block event on the client.
     * 
     * @see Block#triggerEvent
     * @see Level#blockEvent
     */
    export class $ClientboundBlockEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockEventPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getBlock(): $Block;
        getPos(): $BlockPos;
        /**
         * First parameter of the block event. The meaning of this value depends on the block.
         */
        getB1(): number;
        /**
         * First parameter of the block event. The meaning of this value depends on the block.
         */
        getB0(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEventPacket>;
        constructor(pos: $BlockPos_, block: $Block_, b0: number, b1: number);
        get block(): $Block;
        get pos(): $BlockPos;
        get b1(): number;
        get b0(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetSimulationDistancePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetSimulationDistancePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        simulationDistance(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getPlayers(): $Collection<string>;
        static createRemovePacket(team: $PlayerTeam): $ClientboundSetPlayerTeamPacket;
        static createPlayerPacket(team: $PlayerTeam, playerName: string, action: $ClientboundSetPlayerTeamPacket$Action_): $ClientboundSetPlayerTeamPacket;
        getTeamAction(): $ClientboundSetPlayerTeamPacket$Action;
        getPlayerAction(): $ClientboundSetPlayerTeamPacket$Action;
        static createAddOrModifyPacket(team: $PlayerTeam, useAdd: boolean): $ClientboundSetPlayerTeamPacket;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetPlayerTeamPacket>;
        get name(): string;
        get parameters(): ($ClientboundSetPlayerTeamPacket$Parameters) | undefined;
        get players(): $Collection<string>;
        get teamAction(): $ClientboundSetPlayerTeamPacket$Action;
        get playerAction(): $ClientboundSetPlayerTeamPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugPackets {
        static sendPoiRemovedPacket(level: $ServerLevel, pos: $BlockPos_): void;
        static sendStructurePacket(level: $WorldGenLevel, structureStart: $StructureStart): void;
        static sendPoiAddedPacket(level: $ServerLevel, pos: $BlockPos_): void;
        static sendBeeInfo(bee: $Bee): void;
        static sendBreezeInfo(breeze: $Breeze): void;
        static sendPathFindingPacket(level: $Level_, mob: $Mob, path: $Path | null, maxDistanceToWaypoint: number): void;
        static sendNeighborsUpdatePacket(level: $Level_, pos: $BlockPos_): void;
        static sendPoiTicketCountPacket(level: $ServerLevel, pos: $BlockPos_): void;
        static sendGoalSelector(level: $Level_, mob: $Mob, goalSelector: $GoalSelector): void;
        static sendEntityBrain(livingEntity: $LivingEntity): void;
        static sendHiveInfo(level: $Level_, pos: $BlockPos_, blockState: $BlockState_, hiveBlockEntity: $BeehiveBlockEntity): void;
        static sendGameEventInfo(level: $Level_, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        static sendGameTestClearPacket(level: $ServerLevel): void;
        static sendGameTestAddMarker(level: $ServerLevel, pos: $BlockPos_, text: string, color: number, lifetimeMillis: number): void;
        static sendPoiPacketsForChunk(level: $ServerLevel, chunkPos: $ChunkPos): void;
        static sendGameEventListenerInfo(level: $Level_, gameEventListener: $GameEventListener): void;
        static sendRaids(level: $ServerLevel, raids: $Collection_<$Raid>): void;
        constructor();
    }
    export class $ClientboundCommandsPacket$ArgumentNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundRecipePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRecipePacket>;
        getState(): $ClientboundRecipePacket$State;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getBookSettings(): $RecipeBookSettings;
        getHighlights(): $List<$ResourceLocation>;
        getRecipes(): $List<$ResourceLocation>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRecipePacket>;
        constructor(state: $ClientboundRecipePacket$State_, recipes: $Collection_<$ResourceLocation_>, toHighlight: $Collection_<$ResourceLocation_>, bookSettings: $RecipeBookSettings);
        get state(): $ClientboundRecipePacket$State;
        get bookSettings(): $RecipeBookSettings;
        get highlights(): $List<$ResourceLocation>;
        get recipes(): $List<$ResourceLocation>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDeleteChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundDeleteChatPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        messageSignature(): $MessageSignature$Packed;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDeleteChatPacket>;
        constructor(arg0: $MessageSignature$Packed_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTakeItemEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTakeItemEntityPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getAmount(): number;
        getPlayerId(): number;
        getItemId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTakeItemEntityPacket>;
        constructor(itemId: number, playerId: number, amount: number);
        get amount(): number;
        get playerId(): number;
        get itemId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetSlotPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerSetSlotPacket>;
        getSlot(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getItem(): $ItemStack;
        getContainerId(): number;
        getStateId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static CARRIED_ITEM: number;
        static PLAYER_INVENTORY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetSlotPacket>;
        constructor(containerId: number, stateId: number, slot: number, itemStack: $ItemStack_);
        get slot(): number;
        get item(): $ItemStack;
        get containerId(): number;
        get stateId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetBeaconPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSetBeaconPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        primary(): ($Holder<$MobEffect>) | undefined;
        secondary(): ($Holder<$MobEffect>) | undefined;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetBeaconPacket>;
        constructor(primary: ($Holder_<$MobEffect>) | undefined, secondary: ($Holder_<$MobEffect>) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBlockEntityDataPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockEntityDataPacket>;
        getType(): $BlockEntityType<never>;
        static create(blockEntity: $BlockEntity, dataGetter: $BiFunction_<$BlockEntity, $RegistryAccess, $CompoundTag>): $ClientboundBlockEntityDataPacket;
        static create(blockEntity: $BlockEntity): $ClientboundBlockEntityDataPacket;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTag(): $CompoundTag;
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEntityDataPacket>;
        constructor(pos: $BlockPos_, type: $BlockEntityType_<never>, tag: $CompoundTag_);
        get tag(): $CompoundTag;
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSectionBlocksUpdatePacket implements $Packet<$ClientGamePacketListener>, $IXaeroMinimapSMultiBlockChangePacket, $IWorldMapSMultiBlockChangePacket {
        type(): $PacketType<$ClientboundSectionBlocksUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        runUpdates(consumer: $BiConsumer_<$BlockPos, $BlockState>): void;
        xaero_wm_getSectionPos(): $SectionPos;
        xaero_mm_getSectionPos(): $SectionPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSectionBlocksUpdatePacket>;
        sectionPos: $SectionPos;
        constructor(sectionPos: $SectionPos, positions: $ShortSet, section: $LevelChunkSection);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityLinkPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEntityLinkPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSourceId(): number;
        getDestId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityLinkPacket>;
        constructor(source: $Entity, destination: $Entity | null);
        get sourceId(): number;
        get destId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatSessionUpdatePacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChatSessionUpdatePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        chatSession(): $RemoteChatSession$Data;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        body(): $SignedMessageBody$Packed;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        sender(): $UUID;
        unsignedContent(): $Component;
        filterMask(): $FilterMask;
        chatType(): $ChatType$Bound;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerChatPacket>;
        constructor(arg0: $UUID_, arg1: number, arg2: $MessageSignature_ | null, arg3: $SignedMessageBody$Packed_, arg4: $Component_ | null, arg5: $FilterMask, arg6: $ChatType$Bound_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCooldownPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCooldownPacket>;
        duration(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        item(): $Item;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCooldownPacket>;
        constructor(item: $Item_, duration: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBundleDelimiterPacket extends $BundleDelimiterPacket<$ClientGamePacketListener> {
        constructor();
    }
    export class $ServerboundMoveVehiclePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundMoveVehiclePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getY(): number;
        getYRot(): number;
        getXRot(): number;
        getZ(): number;
        getX(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMoveVehiclePacket>;
        constructor(vehicle: $Entity);
        get y(): number;
        get YRot(): number;
        get XRot(): number;
        get z(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStepPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTickingStepPacket>;
        static from(tickRateManager: $TickRateManager): $ClientboundTickingStepPacket;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        tickSteps(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCarriedItemPacket>;
        constructor(slot: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelParticlesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLevelParticlesPacket>;
        /**
         * Gets the amount of particles to spawn
         */
        getCount(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Gets the x coordinate to spawn the particle.
         */
        getY(): number;
        getParticle(): $ParticleOptions;
        /**
         * Gets the x coordinate to spawn the particle.
         */
        getZ(): number;
        /**
         * Gets the x coordinate to spawn the particle.
         */
        getX(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isOverrideLimiter(): boolean;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getMaxSpeed(): number;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getXDist(): number;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getYDist(): number;
        /**
         * Gets the speed of the particle animation (used in client side rendering).
         */
        getZDist(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelParticlesPacket>;
        constructor<T extends $ParticleOptions>(particle: T, overrideLimiter: boolean, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number, xDist: number, yDist: number);
        get count(): number;
        get y(): number;
        get particle(): $ParticleOptions;
        get z(): number;
        get x(): number;
        get overrideLimiter(): boolean;
        get maxSpeed(): number;
        get XDist(): number;
        get YDist(): number;
        get ZDist(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerLookAtPacket implements $Packet<$ClientGamePacketListener> {
        getPosition(level: $Level_): $Vec3;
        type(): $PacketType<$ClientboundPlayerLookAtPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getFromAnchor(): $EntityAnchorArgument$Anchor;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerLookAtPacket>;
        constructor(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_);
        constructor(fromAnchor: $EntityAnchorArgument$Anchor_, x: number, arg2: number, y: number);
        get fromAnchor(): $EntityAnchorArgument$Anchor;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCustomChatCompletionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundCustomChatCompletionsPacket>;
        action(): $ClientboundCustomChatCompletionsPacket$Action;
        entries(): $List<string>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomChatCompletionsPacket>;
        constructor(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChangeDifficultyPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChangeDifficultyPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getDifficulty(): $Difficulty;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChangeDifficultyPacket>;
        constructor(difficulty: $Difficulty_);
        get difficulty(): $Difficulty;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitlesAnimationPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetTitlesAnimationPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getFadeOut(): number;
        getStay(): number;
        getFadeIn(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTitlesAnimationPacket>;
        constructor(fadeIn: number, stay: number, fadeOut: number);
        get fadeOut(): number;
        get stay(): number;
        get fadeIn(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSeenAdvancementsPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSeenAdvancementsPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        static closedScreen(): $ServerboundSeenAdvancementsPacket;
        getAction(): $ServerboundSeenAdvancementsPacket$Action;
        getTab(): $ResourceLocation;
        static openedTab(advancement: $AdvancementHolder_): $ServerboundSeenAdvancementsPacket;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSeenAdvancementsPacket>;
        constructor(action: $ServerboundSeenAdvancementsPacket$Action_, tab: $ResourceLocation_ | null);
        get action(): $ServerboundSeenAdvancementsPacket$Action;
        get tab(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundInteractPacket>;
        dispatch(handler: $ServerboundInteractPacket$Handler): void;
        getTarget(level: $ServerLevel): $Entity;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        static createInteractionPacket(entity: $Entity, usingSecondaryAction: boolean, hand: $InteractionHand_): $ServerboundInteractPacket;
        static createInteractionPacket(entity: $Entity, usingSecondaryAction: boolean, hand: $InteractionHand_, interactionLocation: $Vec3_): $ServerboundInteractPacket;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isUsingSecondaryAction(): boolean;
        static createAttackPacket(entity: $Entity, usingSecondaryAction: boolean): $ServerboundInteractPacket;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundInteractPacket>;
        static ATTACK_ACTION: $ServerboundInteractPacket$Action;
        get usingSecondaryAction(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerAbilitiesPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerAbilitiesPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isFlying(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerAbilitiesPacket>;
        constructor(abilities: $Abilities);
        get flying(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundTeleportToEntityPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundTeleportToEntityPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getEntity(level: $ServerLevel): $Entity;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundTeleportToEntityPacket>;
        constructor(uuid: $UUID_);
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
        read(entryBuilder: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, buffer: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Reader}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Reader_ = ((arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf) => void);
    export class $ClientboundRespawnPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRespawnPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        shouldKeep(data: number): boolean;
        dataToKeep(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getVehicle(): number;
        getPassengers(): number[];
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetPassengersPacket>;
        constructor(vehicle: $Entity);
        get vehicle(): number;
        get passengers(): number[];
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlaceGhostRecipePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlaceGhostRecipePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getRecipe(): $ResourceLocation;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlaceGhostRecipePacket>;
        constructor(containerId: number, recipe: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugEntityNameGenerator {
        static getEntityName(uuid: $UUID_): string;
        static getEntityName(entity: $Entity): string;
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getProgress(): $Map<$ResourceLocation, $AdvancementProgress>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        shouldReset(): boolean;
        getAdded(): $List<$AdvancementHolder>;
        getRemoved(): $Set<$ResourceLocation>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAdvancementsPacket>;
        constructor(reset: boolean, added: $Collection_<$AdvancementHolder_>, removed: $Set_<$ResourceLocation_>, progress: $Map_<$ResourceLocation_, $AdvancementProgress>);
        get progress(): $Map<$ResourceLocation, $AdvancementProgress>;
        get added(): $List<$AdvancementHolder>;
        get removed(): $Set<$ResourceLocation>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundAcceptTeleportationPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundAcceptTeleportationPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundAcceptTeleportationPacket>;
        constructor(id: number);
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerInputPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundPlayerInputPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isShiftKeyDown(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isJumping(): boolean;
        getXxa(): number;
        getZza(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerInputPacket>;
        constructor(xxa: number, zza: number, isJumping: boolean, isShiftKeyDown: boolean);
        get shiftKeyDown(): boolean;
        get jumping(): boolean;
        get xxa(): number;
        get zza(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$PosRot extends $ClientboundMoveEntityPacket implements $PacketActuallyInSubLevelExtension {
        sable$setActuallyInSubLevel(arg0: boolean): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        constructor(entityId: number, xa: number, ya: number, za: number, yRot: number, xRot: number, onGround: boolean);
    }
    export class $ClientboundSetExperiencePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetExperiencePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getExperienceProgress(): number;
        getTotalExperience(): number;
        getExperienceLevel(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetExperiencePacket>;
        constructor(experienceProgress: number, totalExperience: number, experienceLevel: number);
        get experienceProgress(): number;
        get totalExperience(): number;
        get experienceLevel(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatEndPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundPlayerCombatEndPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerCombatEndPacket>;
        constructor(duration: number);
        constructor(combatTracker: $CombatTracker);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Entry extends $Record {
        profile(): $GameProfile;
        displayName(): $Component;
        latency(): number;
        chatSession(): $RemoteChatSession$Data;
        gameMode(): $GameType;
        profileId(): $UUID;
        listed(): boolean;
        constructor(player: $ServerPlayer);
        constructor(arg0: $UUID_, arg1: $GameProfile | null, arg2: boolean, arg3: number, arg4: $GameType_, arg5: $Component_ | null, arg6: $RemoteChatSession$Data_ | null);
    }
    export class $ClientboundBlockDestructionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundBlockDestructionPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        getProgress(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockDestructionPacket>;
        constructor(id: number, pos: $BlockPos_, progress: number);
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
    /**
     * @param showDeathScreen Set to false when the doImmediateRespawn gamerule is true
     */
    export class $ClientboundLoginPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLoginPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        levels(): $Set<$ResourceKey<$Level>>;
        chunkRadius(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        reducedDebugInfo(): boolean;
        simulationDistance(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        hardcore(): boolean;
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        enforcesSecureChat(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        showDeathScreen(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        doLimitedCrafting(): boolean;
        playerId(): number;
        maxPlayers(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLoginPacket>;
        constructor(playerId: number, hardcore: boolean, levels: $Set_<$ResourceKey_<$Level>>, maxPlayers: number, chunkRadius: number, simulationDistance: number, reducedDebugInfo: boolean, showDeathScreen: boolean, doLimitedCrafting: boolean, commonPlayerSpawnInfo: $CommonPlayerSpawnInfo_, enforcesSecureChat: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        signature(): $MessageSignature;
        type(): $PacketType<$ServerboundChatPacket>;
        message(): string;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        timeStamp(): $Instant;
        salt(): number;
        lastSeenMessages(): $LastSeenMessages$Update;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatPacket>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $MessageSignature_ | null, arg4: $LastSeenMessages$Update_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetDefaultSpawnPositionPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetDefaultSpawnPositionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        getAngle(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDefaultSpawnPositionPacket>;
        constructor(pos: $BlockPos_, angle: number);
        get pos(): $BlockPos;
        get angle(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetEntityDataPacket>;
        id(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        packedItems(): $List<$SynchedEntityData$DataValue<never>>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        header(): $Component;
        footer(): $Component;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundTabListPacket>;
        constructor(header: $Component_, footer: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSoundEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSoundEntityPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getSeed(): number;
        getSource(): $SoundSource;
        getPitch(): number;
        getVolume(): number;
        getSound(): $Holder<$SoundEvent>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundEntityPacket>;
        constructor(sound: $Holder_<$SoundEvent>, source: $SoundSource_, entity: $Entity, volume: number, pitch: number, seed: number);
        get id(): number;
        get seed(): number;
        get source(): $SoundSource;
        get pitch(): number;
        get volume(): number;
        get sound(): $Holder<$SoundEvent>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenSignEditorPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundOpenSignEditorPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isFrontText(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenSignEditorPacket>;
        constructor(pos: $BlockPos_, isFrontText: boolean);
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getY(): number;
        getToBlow(): $List<$BlockPos>;
        getSmallExplosionParticles(): $ParticleOptions;
        getLargeExplosionParticles(): $ParticleOptions;
        getExplosionSound(): $Holder<$SoundEvent>;
        getZ(): number;
        getX(): number;
        getBlockInteraction(): $Explosion$BlockInteraction;
        getKnockbackX(): number;
        getKnockbackY(): number;
        getKnockbackZ(): number;
        getPower(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundExplodePacket>;
        constructor(x: number, arg1: number, y: number, arg3: number, z: $List_<$BlockPos_>, arg5: $Vec3_ | null, power: $Explosion$BlockInteraction_, toBlow: $ParticleOptions_, knockback: $ParticleOptions_, blockInteraction: $Holder_<$SoundEvent>);
        get y(): number;
        get toBlow(): $List<$BlockPos>;
        get smallExplosionParticles(): $ParticleOptions;
        get largeExplosionParticles(): $ParticleOptions;
        get explosionSound(): $Holder<$SoundEvent>;
        get z(): number;
        get x(): number;
        get blockInteraction(): $Explosion$BlockInteraction;
        get knockbackX(): number;
        get knockbackY(): number;
        get knockbackZ(): number;
        get power(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $CommonPlayerSpawnInfo extends $Record {
        write(buffer: $RegistryFriendlyByteBuf): void;
        isDebug(): boolean;
        seed(): number;
        dimension(): $ResourceKey<$Level>;
        gameType(): $GameType;
        dimensionType(): $Holder<$DimensionType>;
        lastDeathLocation(): ($GlobalPos) | undefined;
        portalCooldown(): number;
        isFlat(): boolean;
        previousGameType(): $GameType;
        constructor(buffer: $RegistryFriendlyByteBuf);
        constructor(arg0: $Holder_<$DimensionType>, arg1: $ResourceKey_<$Level>, arg2: number, arg3: $GameType_, arg4: $GameType_ | null, arg5: boolean, arg6: boolean, arg7: ($GlobalPos_) | undefined, arg8: number);
        get debug(): boolean;
        get flat(): boolean;
    }
    export class $ClientboundLevelChunkPacketData$BlockEntityInfo {
        static create(blockEntity: $BlockEntity): $ClientboundLevelChunkPacketData$BlockEntityInfo;
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getPlacementPriority(): number;
        getSelectionPriority(): number;
        getPos(): $BlockPos;
        getFinalState(): string;
        getJoint(): $JigsawBlockEntity$JointType;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetJigsawBlockPacket>;
        constructor(pos: $BlockPos_, name: $ResourceLocation_, target: $ResourceLocation_, pool: $ResourceLocation_, finalState: string, joint: $JigsawBlockEntity$JointType_, selectionPriority: number, placementPriority: number);
        get name(): $ResourceLocation;
        get pool(): $ResourceLocation;
        get target(): $ResourceLocation;
        get placementPriority(): number;
        get selectionPriority(): number;
        get pos(): $BlockPos;
        get finalState(): string;
        get joint(): $JigsawBlockEntity$JointType;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateNameOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    export class $ServerboundSelectTradePacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundSelectTradePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getItem(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSelectTradePacket>;
        constructor(item: number);
        get item(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTeleportEntityPacket implements $Packet<$ClientGamePacketListener>, $PacketActuallyInSubLevelExtension {
        type(): $PacketType<$ClientboundTeleportEntityPacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getY(): number;
        sable$setActuallyInSubLevel(arg0: boolean): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        sable$isActuallyInSubLevel(): boolean;
        getZ(): number;
        getX(): number;
        getyRot(): number;
        getxRot(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isOnGround(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTeleportEntityPacket>;
        constructor(entity: $Entity);
        get id(): number;
        get y(): number;
        get z(): number;
        get x(): number;
        get yRot(): number;
        get xRot(): number;
        get onGround(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundMoveEntityPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntity(level: $Level_): $Entity;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        hasPosition(): boolean;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        hasRotation(): boolean;
        getyRot(): number;
        getxRot(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isOnGround(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        constructor(entityId: number, xa: number, ya: number, za: number, yRot: number, xRot: number, onGround: boolean, hasRot: boolean, hasPos: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetDataPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerSetDataPacket>;
        getValue(): number;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerSetDataPacket>;
        constructor(containerId: number, id: number, value: number);
        get value(): number;
        get id(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDebugSamplePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundDebugSamplePacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        sample(): number[];
        debugSampleType(): $RemoteDebugSampleType;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDebugSamplePacket>;
        constructor(arg0: number[], arg1: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerClosePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundContainerClosePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getContainerId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerClosePacket>;
        constructor(containerId: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$InteractionAction implements $ServerboundInteractPacket$Action {
    }
    export class $ClientboundLevelEventPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLevelEventPacket>;
        getType(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getData(): number;
        getPos(): $BlockPos;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isGlobalEvent(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLevelEventPacket>;
        constructor(type: number, pos: $BlockPos_, data: number, globalEvent: boolean);
        get data(): number;
        get pos(): $BlockPos;
        get globalEvent(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLightUpdatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLightUpdatePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getZ(): number;
        getX(): number;
        getLightData(): $ClientboundLightUpdatePacketData;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLightUpdatePacket>;
        constructor(chunkPos: $ChunkPos, lightEngine: $LevelLightEngine, skyLight: $BitSet | null, blockLight: $BitSet | null);
        get z(): number;
        get x(): number;
        get lightData(): $ClientboundLightUpdatePacketData;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundEditBookPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        slot(): number;
        type(): $PacketType<$ServerboundEditBookPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        title(): (string) | undefined;
        pages(): $List<string>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static MAX_BYTES_PER_CHAR: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEditBookPacket>;
        constructor(slot: number, pages: $List_<string>, title: (string) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetChunkCacheRadiusPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetChunkCacheRadiusPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getRadius(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheRadiusPacket>;
        constructor(radius: number);
        get radius(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTagQueryPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundTagQueryPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getTag(): $CompoundTag;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        getTransactionId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTagQueryPacket>;
        constructor(transactionId: number, tag: $CompoundTag_ | null);
        get tag(): $CompoundTag;
        get skippable(): boolean;
        get transactionId(): number;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkWithLightPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundLevelChunkWithLightPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getZ(): number;
        getX(): number;
        getChunkData(): $ClientboundLevelChunkPacketData;
        getLightData(): $ClientboundLightUpdatePacketData;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelChunkWithLightPacket>;
        constructor(chunk: $LevelChunk, lightEngine: $LevelLightEngine, skyLight: $BitSet | null, blockLight: $BitSet | null);
        get z(): number;
        get x(): number;
        get chunkData(): $ClientboundLevelChunkPacketData;
        get lightData(): $ClientboundLightUpdatePacketData;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChunkBatchReceivedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundChunkBatchReceivedPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        desiredChunksPerTick(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
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
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPickItemPacket>;
        constructor(slot: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundServerDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundServerDataPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        motd(): $Component;
        iconBytes(): (number[]) | undefined;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundServerDataPacket>;
        constructor(motd: $Component_, iconBytes: (number[]) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunksBiomesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundChunksBiomesPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        static forChunks(chunks: $List_<$LevelChunk>): $ClientboundChunksBiomesPacket;
        chunkBiomeData(): $List<$ClientboundChunksBiomesPacket$ChunkBiomeData>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChunksBiomesPacket>;
        constructor(arg0: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRemoveEntitiesPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundRemoveEntitiesPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getEntityIds(): $IntList;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRemoveEntitiesPacket>;
        constructor(...entityIds: number[]);
        constructor(entityIds: $IntList);
        get entityIds(): $IntList;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundUseItemPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getSequence(): number;
        getYRot(): number;
        getXRot(): number;
        getHand(): $InteractionHand;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemPacket>;
        constructor(hand: $InteractionHand_, sequence: number, yRot: number, xRot: number);
        get sequence(): number;
        get YRot(): number;
        get XRot(): number;
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * PacketListener for the client side of the PLAY protocol.
     */
    export class $ClientGamePacketListener {
    }
    export interface $ClientGamePacketListener extends $ClientPongPacketListener, $ClientCommonPacketListener {
        protocol(): $ConnectionProtocol;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing,...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        /**
         * Registers some server properties (gametype,hardcore-mode,terraintype,difficulty,player limit), creates a new WorldClient and sets the player initial dimension
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        /**
         * Updates the specified entity's position by the specified relative moment and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
    }
    export class $ClientboundSetBorderCenterPacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundSetBorderCenterPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getNewCenterZ(): number;
        getNewCenterX(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderCenterPacket>;
        constructor(worldBorder: $WorldBorder);
        get newCenterZ(): number;
        get newCenterX(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerClickPacket implements $Packet<$ServerGamePacketListener> {
        type(): $PacketType<$ServerboundContainerClickPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerGamePacketListener): void;
        getChangedSlots(): $Int2ObjectMap<$ItemStack>;
        getButtonNum(): number;
        getClickType(): $ClickType;
        getContainerId(): number;
        getCarriedItem(): $ItemStack;
        getStateId(): number;
        getSlotNum(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundContainerClickPacket>;
        constructor(containerId: number, stateId: number, slotNum: number, buttonNum: number, clickType: $ClickType_, carriedItem: $ItemStack_, changedSlots: $Int2ObjectMap<$ItemStack_>);
        get changedSlots(): $Int2ObjectMap<$ItemStack>;
        get buttonNum(): number;
        get clickType(): $ClickType;
        get containerId(): number;
        get carriedItem(): $ItemStack;
        get stateId(): number;
        get slotNum(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAnimatePacket implements $Packet<$ClientGamePacketListener> {
        type(): $PacketType<$ClientboundAnimatePacket>;
        getId(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientGamePacketListener): void;
        getAction(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static CRITICAL_HIT: number;
        static MAGIC_CRITICAL_HIT: number;
        static SWING_MAIN_HAND: number;
        static SWING_OFF_HAND: number;
        static WAKE_UP: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAnimatePacket>;
        constructor(entity: $Entity, action: number);
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
