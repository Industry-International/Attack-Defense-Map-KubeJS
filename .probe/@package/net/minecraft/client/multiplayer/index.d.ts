import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $PanoramaRenderer, $CubeMap, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $ClientLevelExt } from "@package/com/moulberry/axiom/hooks";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $ClientWorldAccessor } from "@package/com/replaymod/replay/mixin";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InetSocketAddress } from "@package/java/net";
import { $DisconnectionDetails_, $TickablePacketListener, $Connection, $FriendlyByteBuf, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AccessorClientChunkCacheStorage } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $LastSeenMessagesTracker, $SignedMessageChain$Encoder, $PlayerChatMessage, $RemoteChatSession_, $SignedMessageValidator, $LocalChatSession, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $AccessorMultiPlayerGameMode } from "@package/xfacthd/framedblocks/mixin/client";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $BlockStatePredictionHandler } from "@package/net/minecraft/client/multiplayer/prediction";
import { $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $ArrayList, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $Holder_, $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $ClientLoginNetworkHandlerAccessor } from "@package/com/replaymod/recording/mixin";
import { $Enum, $Iterable, $Object, $Exception, $Throwable, $Record, $Runnable_ } from "@package/java/lang";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $CommonLevelAccessor, $ColorResolver_, $GameType, $EntityGetter, $LevelHeightAccessor, $Level, $GameType_ } from "@package/net/minecraft/world/level";
import { $DebugScreenOverlay, $ChatComponent$State, $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $ClientboundHelloPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientboundGameProfilePacket_, $ClientboundLoginCompressionPacket, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ChannelHandlerContext, $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $PlayerControllerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ClientLoginNetworkHandlerAccessor as $ClientLoginNetworkHandlerAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $IClientChunkCacheExt } from "@package/net/mehvahdjukaar/vista/client";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $NarratorStatus, $User, $ClientRecipeBook } from "@package/net/minecraft/client";
import { $MultiPlayerGameModeAccessor } from "@package/com/moulberry/axiom/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementTree$Listener, $AdvancementHolder_, $AdvancementTree, $AdvancementHolder, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $InteractionResult, $Difficulty } from "@package/net/minecraft/world";
import { $SoundSource_ } from "@package/net/minecraft/sounds";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $EntityTickList, $LevelEntityGetter, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $ClientLevelAccessor as $ClientLevelAccessor$1 } from "@package/cn/chloeprime/commons_impl/mixin/client";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $RecordingEventHandler$RecordingEventSender, $RecordingEventHandler } from "@package/com/replaymod/recording/handler";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $AABB_, $Vec3_, $BlockHitResult, $EntityHitResult, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $AbstractNetworkAddon, $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $ServerInfoExt } from "@package/com/replaymod/recording";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $SuggestionsBuilder, $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSetExperiencePacket, $ClientboundTakeItemEntityPacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelEventPacket, $ClientboundLevelParticlesPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetObjectivePacket, $ClientboundSetEntityDataPacket_, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundPlayerAbilitiesPacket, $ClientboundBlockEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $CachingClientLevel, $ClonedClientLevel } from "@package/com/sonicether/soundphysics/world";
import { $ICapabilityProvider_, $ICapableObject, $ICapabilityProvider } from "@package/xaero/pac/common/capability";
import { $ClientboundUpdateEnabledFeaturesPacket_, $ClientboundFinishConfigurationPacket, $ClientboundResetChatPacket, $ClientConfigurationPacketListener, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $AccessorClientPacketListener } from "@package/com/aizistral/nochatreports/common/mixins/client";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $WorldMapSession } from "@package/xaero/map";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ClientLevelAccessor as $ClientLevelAccessor$2 } from "@package/rbasamoyai/createbigcannons/mixin/client";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(arg0: $ResourceKey_<$Registry<never>>, arg1: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(arg0: $RegistryAccess, arg1: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        constructor(arg0: $UserApiService, arg1: $UUID_, arg2: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        tick(): void;
        handleDisconnect(): void;
        handleConfigurationFinished(arg0: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(arg0: $ClientboundSelectKnownPacks_): void;
        handleEnabledFeatures(arg0: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handleRegistryData(arg0: $ClientboundRegistryDataPacket_): void;
        handleResetChat(arg0: $ClientboundResetChatPacket): void;
        handler$baf000$reforgedplaymod$recordEnabledPackData(ci: $CallbackInfo, registryManager: $RegistryAccess$Frozen): void;
        handler$fkj000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        chatState: $ChatComponent$State;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        levelReady(): boolean;
        loadingPacketsReceived(): void;
        constructor(arg0: $LocalPlayer, arg1: $ClientLevel, arg2: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $AccessorClientPacketListener, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS {
        getId(): $UUID;
        close(): void;
        tick(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        handleSetBorderWarningDistance(arg0: $ClientboundSetBorderWarningDistancePacket): void;
        handleBlockChangedAck(arg0: $ClientboundBlockChangedAckPacket_): void;
        getRecordingEventHandler(): $RecordingEventHandler;
        sendCommand(arg0: string): void;
        getPlayerInfo(arg0: $UUID_): $PlayerInfo;
        getPlayerInfo(arg0: string): $PlayerInfo;
        handler$dke002$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handleGameEvent(arg0: $ClientboundGameEventPacket): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        handleDamageEvent(arg0: $ClientboundDamageEventPacket_): void;
        handleEntityEvent(arg0: $ClientboundEntityEventPacket): void;
        handler$eca000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$dke000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        modify$boj000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handler$eca001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$boj000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        handler$dke000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        sendChat(arg0: string): void;
        getLocalGameProfile(): $GameProfile;
        setKeyPair(arg0: $ProfileKeyPair_): void;
        scoreboard(): $Scoreboard;
        sendUnsignedCommand(arg0: string): boolean;
        handler$gkg000$distanthorizons$onCleanupStart(ci: $CallbackInfo): void;
        handler$gkg000$distanthorizons$onHandleLoginEnd(ci: $CallbackInfo): void;
        handler$dke000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$inf000$axiom$handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handler$inf000$axiom$handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handleRotateMob(arg0: $ClientboundRotateHeadPacket): void;
        kjs$sessionData(): $KubeSessionData;
        handleBlockUpdate(arg0: $ClientboundBlockUpdatePacket): void;
        handleSetTime(arg0: $ClientboundSetTimePacket): void;
        handlePlayerChat(arg0: $ClientboundPlayerChatPacket_): void;
        handleChunksBiomes(arg0: $ClientboundChunksBiomesPacket_): void;
        handleSetSpawn(arg0: $ClientboundSetDefaultSpawnPositionPacket): void;
        searchTrees(): $SessionSearchTrees;
        handleAddEntity(arg0: $ClientboundAddEntityPacket): void;
        handleSystemChat(arg0: $ClientboundSystemChatPacket_): void;
        handleAnimate(arg0: $ClientboundAnimatePacket): void;
        handleTickingStep(arg0: $ClientboundTickingStepPacket_): void;
        handleMoveEntity(arg0: $ClientboundMoveEntityPacket): void;
        handleDeleteChat(arg0: $ClientboundDeleteChatPacket_): void;
        handleMovePlayer(arg0: $ClientboundPlayerPositionPacket): void;
        handleTickingState(arg0: $ClientboundTickingStatePacket_): void;
        handleLogin(arg0: $ClientboundLoginPacket_): void;
        handler$zeh000$openpartiesandclaims$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$inf000$axiom$handleLogin(clientboundLoginPacket: $ClientboundLoginPacket_, ci: $CallbackInfo): void;
        handleSelectAdvancementsTab(arg0: $ClientboundSelectAdvancementsTabPacket): void;
        handleUpdateAdvancementsPacket(arg0: $ClientboundUpdateAdvancementsPacket): void;
        handler$inf000$axiom$handleSetTime(clientboundSetTimePacket: $ClientboundSetTimePacket, ci: $CallbackInfo): void;
        handleSetEntityPassengersPacket(arg0: $ClientboundSetPassengersPacket): void;
        handler$inf000$axiom$handleRespawn(clientboundRespawnPacket: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        handleUpdateRecipes(arg0: $ClientboundUpdateRecipesPacket): void;
        handleTagQueryPacket(arg0: $ClientboundTagQueryPacket): void;
        handlePlayerCombatEnter(arg0: $ClientboundPlayerCombatEnterPacket): void;
        handleBlockEntityData(arg0: $ClientboundBlockEntityDataPacket): void;
        handleAddExperienceOrb(arg0: $ClientboundAddExperienceOrbPacket): void;
        handleRemoveEntities(arg0: $ClientboundRemoveEntitiesPacket): void;
        handlePlayerCombatKill(arg0: $ClientboundPlayerCombatKillPacket_): void;
        handleInitializeBorder(arg0: $ClientboundInitializeBorderPacket): void;
        handleContainerContent(arg0: $ClientboundContainerSetContentPacket): void;
        handleAddOrRemoveRecipes(arg0: $ClientboundRecipePacket): void;
        handleSetBorderCenter(arg0: $ClientboundSetBorderCenterPacket): void;
        handleOpenSignEditor(arg0: $ClientboundOpenSignEditorPacket): void;
        handleSetEntityMotion(arg0: $ClientboundSetEntityMotionPacket): void;
        handleBlockDestruction(arg0: $ClientboundBlockDestructionPacket): void;
        handlePlayerCombatEnd(arg0: $ClientboundPlayerCombatEndPacket): void;
        handleSetCarriedItem(arg0: $ClientboundSetCarriedItemPacket): void;
        handleSetBorderLerpSize(arg0: $ClientboundSetBorderLerpSizePacket): void;
        handleContainerSetSlot(arg0: $ClientboundContainerSetSlotPacket): void;
        handleStopSoundEvent(arg0: $ClientboundStopSoundPacket): void;
        handleCommandSuggestions(arg0: $ClientboundCommandSuggestionsPacket_): void;
        handleUpdateMobEffect(arg0: $ClientboundUpdateMobEffectPacket): void;
        handleChangeDifficulty(arg0: $ClientboundChangeDifficultyPacket): void;
        handleForgetLevelChunk(arg0: $ClientboundForgetLevelChunkPacket_): void;
        handleChunkBlocksUpdate(arg0: $ClientboundSectionBlocksUpdatePacket): void;
        handleConfigurationStart(arg0: $ClientboundStartConfigurationPacket): void;
        handleDisguisedChat(arg0: $ClientboundDisguisedChatPacket_): void;
        handleSetExperience(arg0: $ClientboundSetExperiencePacket): void;
        handleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket): void;
        handleEntityLinkPacket(arg0: $ClientboundSetEntityLinkPacket): void;
        handleContainerSetData(arg0: $ClientboundContainerSetDataPacket): void;
        handleTeleportEntity(arg0: $ClientboundTeleportEntityPacket): void;
        handleTakeItemEntity(arg0: $ClientboundTakeItemEntityPacket): void;
        handleContainerClose(arg0: $ClientboundContainerClosePacket): void;
        handleHurtAnimation(arg0: $ClientboundHurtAnimationPacket_): void;
        handleHorseScreenOpen(arg0: $ClientboundHorseScreenOpenPacket): void;
        handleSetEntityData(arg0: $ClientboundSetEntityDataPacket_): void;
        handleSetPlayerTeamPacket(arg0: $ClientboundSetPlayerTeamPacket): void;
        handleChunkBatchFinished(arg0: $ClientboundChunkBatchFinishedPacket_): void;
        handleUpdateAttributes(arg0: $ClientboundUpdateAttributesPacket): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        getDebugQueryHandler(): $DebugQueryHandler;
        handleSetDisplayObjective(arg0: $ClientboundSetDisplayObjectivePacket): void;
        handleMerchantOffers(arg0: $ClientboundMerchantOffersPacket): void;
        handlePlayerInfoUpdate(arg0: $ClientboundPlayerInfoUpdatePacket): void;
        handleSetChunkCacheRadius(arg0: $ClientboundSetChunkCacheRadiusPacket): void;
        handleTabListCustomisation(arg0: $ClientboundTabListPacket_): void;
        handleSoundEntityEvent(arg0: $ClientboundSoundEntityPacket): void;
        handleParticleEvent(arg0: $ClientboundLevelParticlesPacket): void;
        handleChunkBatchStart(arg0: $ClientboundChunkBatchStartPacket): void;
        markMessageAsProcessed(arg0: $PlayerChatMessage_, arg1: boolean): void;
        handlePlayerInfoRemove(arg0: $ClientboundPlayerInfoRemovePacket_): void;
        handleSetBorderSize(arg0: $ClientboundSetBorderSizePacket): void;
        handleRemoveMobEffect(arg0: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerAbilities(arg0: $ClientboundPlayerAbilitiesPacket): void;
        handleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket): void;
        handleSetChunkCacheCenter(arg0: $ClientboundSetChunkCacheCenterPacket): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        getXaero_worldmapSession(): $WorldMapSession;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        handler$eca001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$ima000$presencefootsteps$onHandleSoundEffect(arg0: $ClientboundSoundPacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dke000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        updateSearchTrees(): void;
        handlePongResponse(arg0: $ClientboundPongResponsePacket_): void;
        handleDebugSample(arg0: $ClientboundDebugSamplePacket_): void;
        isFeatureEnabled(arg0: $FeatureFlagSet): boolean;
        handlePlaceRecipe(arg0: $ClientboundPlaceGhostRecipePacket): void;
        handleBundlePacket(arg0: $ClientboundBundlePacket): void;
        clearLevel(): void;
        handleSetCamera(arg0: $ClientboundSetCameraPacket): void;
        handleExplosion(arg0: $ClientboundExplodePacket): void;
        handleBlockEvent(arg0: $ClientboundBlockEventPacket): void;
        handleMapItemData(arg0: $ClientboundMapItemDataPacket_): void;
        handleLookAt(arg0: $ClientboundPlayerLookAtPacket): void;
        handleAwardStats(arg0: $ClientboundAwardStatsPacket_): void;
        handleLevelEvent(arg0: $ClientboundLevelEventPacket): void;
        handleSetEquipment(arg0: $ClientboundSetEquipmentPacket): void;
        handleRespawn(arg0: $ClientboundRespawnPacket_): void;
        handleCommands(arg0: $ClientboundCommandsPacket): void;
        handleSetHealth(arg0: $ClientboundSetHealthPacket): void;
        handleOpenScreen(arg0: $ClientboundOpenScreenPacket): void;
        setTitlesAnimation(arg0: $ClientboundSetTitlesAnimationPacket): void;
        handleMoveVehicle(arg0: $ClientboundMoveVehiclePacket): void;
        handleResetScore(arg0: $ClientboundResetScorePacket_): void;
        setSubtitleText(arg0: $ClientboundSetSubtitleTextPacket_): void;
        setActionBarText(arg0: $ClientboundSetActionBarTextPacket_): void;
        handleBossUpdate(arg0: $ClientboundBossEventPacket): void;
        handleTitlesClear(arg0: $ClientboundClearTitlesPacket): void;
        handleOpenBook(arg0: $ClientboundOpenBookPacket): void;
        handleAddObjective(arg0: $ClientboundSetObjectivePacket): void;
        handleSoundEvent(arg0: $ClientboundSoundPacket): void;
        handleServerData(arg0: $ClientboundServerDataPacket_): void;
        setTitleText(arg0: $ClientboundSetTitleTextPacket_): void;
        handleItemCooldown(arg0: $ClientboundCooldownPacket_): void;
        handleSetScore(arg0: $ClientboundSetScorePacket_): void;
        potionBrewing(): $PotionBrewing;
        getRecipeManager(): $RecipeManager;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        handleSetBorderWarningDelay(arg0: $ClientboundSetBorderWarningDelayPacket): void;
        handleSetSimulationDistance(arg0: $ClientboundSetSimulationDistancePacket_): void;
        handleProjectilePowerPacket(arg0: $ClientboundProjectilePowerPacket): void;
        handleCustomChatCompletions(arg0: $ClientboundCustomChatCompletionsPacket_): void;
        handler$bah000$reforgedplaymod$recordOwnRespawn(packet: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        handler$dke000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$gao001$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$dke000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$dke000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$bah000$reforgedplaymod$recordOwnJoin(packet: $ClientboundPlayerInfoUpdatePacket, ci: $CallbackInfo): void;
        handler$ehi000$superbwarfare$vehicleEntityUpdate(arg0: $ClientboundSetPassengersPacket, arg1: $CallbackInfo): void;
        handler$inf000$axiom$handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_, ci: $CallbackInfo): void;
        handler$inf000$axiom$handleConfigurationStart(ci: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        serverLinks(): $ServerLinks;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        handleDisconnect(): void;
        handler$inf000$axiom$handleBlockUpdate(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handler$dke000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$dke000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$inf000$axiom$handleSetCarriedItem(clientboundSetCarriedItemPacket: $ClientboundSetCarriedItemPacket, ci: $CallbackInfo): void;
        handler$dke001$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$inf000$axiom$handleSetEntityData(clientboundSetEntityDataPacket: $ClientboundSetEntityDataPacket_, ci: $CallbackInfo): void;
        handler$ecc001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$inf000$axiom$handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_, ci: $CallbackInfo): void;
        invokeParseCommand(arg0: string): $ParseResults<$SharedSuggestionProvider>;
        catnip$getServerChunkRadius(): number;
        xaero_worldmapSession: $WorldMapSession;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        serverChunkRadius: number;
        signedMessageEncoder: $SignedMessageChain$Encoder;
        static $assertionsDisabled: boolean;
        serverSimulationDistance: number;
        lastSeenMessages: $LastSeenMessagesTracker;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        xaero_minimapSession: $XaeroMinimapSession;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverCookies: $Map<$ResourceLocation, number[]>;
        chatSession: $LocalChatSession;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        get recordingEventHandler(): $RecordingEventHandler;
        get suggestionsProvider(): $ClientSuggestionProvider;
        get localGameProfile(): $GameProfile;
        set keyPair(value: $ProfileKeyPair_);
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get debugQueryHandler(): $DebugQueryHandler;
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        get recipeManager(): $RecipeManager;
        get advancements(): $ClientAdvancements;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerInfoExt, $ServerDataExtension {
        type(): $ServerData$Type;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(arg0: $ServerData$State_): void;
        copyFrom(arg0: $ServerData): void;
        isLan(): boolean;
        isRealm(): boolean;
        setPreventsChatReports(arg0: boolean): void;
        preventsChatReports(): boolean;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        static validateIcon(arg0: number[]): number[];
        setIconBytes(arg0: number[]): void;
        setAutoRecording(autoRecording: boolean): void;
        getAutoRecording(): boolean;
        copyNameIconFrom(arg0: $ServerData): void;
        handler$bab000$reforgedplaymod$copyFrom(serverInfo: $ServerData, ci: $CallbackInfo): void;
        getIconBytes(): number[];
        setResourcePackStatus(arg0: $ServerData$ServerPackStatus_): void;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(arg0: string, arg1: string, arg2: $ServerData$Type_);
        get lan(): boolean;
        get realm(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        channelRead0(arg0: $ChannelHandlerContext, arg1: $ByteBuf): void;
        constructor(arg0: $ServerAddress, arg1: $LegacyServerPinger$Output_);
    }
    export class $ServerList {
        remove(arg0: $ServerData): void;
        size(): number;
        get(arg0: number): $ServerData;
        get(arg0: string): $ServerData;
        load(): void;
        replace(arg0: number, arg1: $ServerData): void;
        add(arg0: $ServerData, arg1: boolean): void;
        save(): void;
        swap(arg0: number, arg1: number): void;
        unhide(arg0: string): $ServerData;
        static saveSingleServer(arg0: $ServerData): void;
        constructor(arg0: $Minecraft);
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $AccessorClientChunkCacheStorage {
        replace(arg0: number, arg1: $LevelChunk, arg2: $LevelChunk): $LevelChunk;
        replace(arg0: number, arg1: $LevelChunk): void;
        getIndex(arg0: number, arg1: number): number;
        inRange(arg0: number, arg1: number): boolean;
        getChunk(arg0: number): $LevelChunk;
        railways$getViewCenterX(): number;
        railways$setViewCenterX(arg0: number): void;
        railways$getViewCenterZ(): number;
        railways$setViewCenterZ(arg0: number): void;
        chunkRadius: number;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        chunkCount: number;
        this$0: $ClientChunkCache;
        viewCenterX: number;
        constructor(arg0: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        getTabListDisplayName(): $Component;
        setLatency(arg0: number): void;
        getLatency(): number;
        getGameMode(): $GameType;
        getChatSession(): $RemoteChatSession;
        setChatSession(arg0: $RemoteChatSession_): void;
        setGameMode(arg0: $GameType_): void;
        getTeam(): $PlayerTeam;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(arg0: $Component_): void;
        getSkin(): $PlayerSkin;
        getProfile(): $GameProfile;
        clearChatSession(arg0: boolean): void;
        hasVerifiableChat(): boolean;
        constructor(arg0: $GameProfile, arg1: boolean);
        get team(): $PlayerTeam;
        get messageValidator(): $SignedMessageValidator;
        get skin(): $PlayerSkin;
        get profile(): $GameProfile;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(arg0: $ClientboundPongResponsePacket_): void;
        constructor(arg0: $ClientPacketListener, arg1: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(arg0: $UserApiService, arg1: $User, arg2: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
    }
    export class $SessionSearchTrees {
        recipes(): $SearchTree<$RecipeCollection>;
        rebuildAfterLanguageChange(): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>): void;
        updateRecipes(arg0: $ClientRecipeBook, arg1: $RegistryAccess$Frozen): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>): void;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    export class $ClientAdvancements {
        get(arg0: $ResourceLocation_): $AdvancementHolder;
        update(arg0: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setListener(arg0: $ClientAdvancements$Listener): void;
        setSelectedTab(arg0: $AdvancementHolder_, arg1: boolean): void;
        constructor(arg0: $Minecraft, arg1: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener);
    }
    export class $MultiPlayerGameMode implements $PlayerControllerAccess, $AccessorMultiPlayerGameMode, $MultiPlayerGameModeAccessor {
        tick(): void;
        isAlwaysFlying(): boolean;
        getPreviousPlayerMode(): $GameType;
        isServerControlledInventory(): boolean;
        handler$eig000$superbwarfare$isServerControlledInventory(arg0: $CallbackInfoReturnable<any>): void;
        handler$fhe000$inventoryprofilesnext$clickCreativeStack(arg0: $ItemStack_, arg1: number, arg2: $CallbackInfo): void;
        destroyBlock(arg0: $BlockPos_): boolean;
        handler$fhg000$inventoryprofilesnext$internalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$fhg000$inventoryprofilesnext$postInternalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook, arg3: boolean, arg4: boolean): $LocalPlayer;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook): $LocalPlayer;
        setLocalMode(arg0: $GameType_, arg1: $GameType_): void;
        setLocalMode(arg0: $GameType_): void;
        adjustPlayer(arg0: $Player): void;
        handleInventoryMouseClick(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player): void;
        handleSlotStateChanged(arg0: number, arg1: number, arg2: boolean): void;
        handler$fhd000$inventoryprofilesnext$clickSlotPre(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$fhd000$inventoryprofilesnext$clickSlot(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$fhe000$inventoryprofilesnext$pickItem(arg0: number, arg1: $CallbackInfo): void;
        getPlayerMode(): $GameType;
        handlePlaceRecipe(arg0: number, arg1: $RecipeHolder_<never>, arg2: boolean): void;
        handleCreativeModeItemAdd(arg0: $ItemStack_, arg1: number): void;
        continueDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        useItem(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        useItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
        attack(arg0: $Player, arg1: $Entity): void;
        interact(arg0: $Player, arg1: $Entity, arg2: $InteractionHand_): $InteractionResult;
        interactAt(arg0: $Player, arg1: $Entity, arg2: $EntityHitResult, arg3: $InteractionHand_): $InteractionResult;
        hasMissTime(): boolean;
        startDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        isDestroying(): boolean;
        hasInfiniteItems(): boolean;
        stopDestroyBlock(): void;
        releaseUsingItem(arg0: $Player): void;
        handlePickItem(arg0: number): void;
        getDestroyStage(): number;
        handler$iod000$axiom$performUseItemOn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$iod000$axiom$useItemOnReturn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$iod000$axiom$isAlwaysFlying(cir: $CallbackInfoReturnable<any>): void;
        handler$iod000$axiom$startDestroyBlock(blockPos: $BlockPos_, direction: $Direction_, cir: $CallbackInfoReturnable<any>): void;
        canHurtPlayer(): boolean;
        hasExperience(): boolean;
        ensureHasSentCarriedItem(): void;
        handleCreativeModeItemDrop(arg0: $ItemStack_): void;
        handleInventoryButtonClick(arg0: number, arg1: number): void;
        getDestroyProgress(): number;
        getDestroyDelay(): number;
        setDestroyDelay(arg0: number): void;
        framedblocks$setDestroyDelay(arg0: number): void;
        destroyBlockPos: $BlockPos;
        static $assertionsDisabled: boolean;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(arg0: $Minecraft, arg1: $ClientPacketListener);
        get alwaysFlying(): boolean;
        get previousPlayerMode(): $GameType;
        get serverControlledInventory(): boolean;
        get playerMode(): $GameType;
        get destroying(): boolean;
        get destroyStage(): number;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(arg0: number, arg1: string, arg2: string, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor, $ClientLoginNetworkHandlerAccessor$1, $NetworkHandlerExtensions {
        isAcceptingMessages(): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        setMinigameName(arg0: string): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillCrashReport(arg0: $CrashReport): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        getConnection(): $Connection;
        getServerData(): $ServerData;
        getAddon(): $AbstractNetworkAddon<never>;
        constructor(arg0: $Connection, arg1: $Minecraft, arg2: $ServerData, arg3: $Screen, arg4: boolean, arg5: $Duration_, arg6: $Consumer_<$Component>, arg7: $TransferState_);
        get acceptingMessages(): boolean;
        set minigameName(value: string);
        get connection(): $Connection;
        get serverData(): $ServerData;
        get addon(): $AbstractNetworkAddon<never>;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(arg0: $ClientPacketListener, arg1: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendTags(arg0: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(arg0: $ResourceProvider_, arg1: $RegistryAccess, arg2: boolean): $RegistryAccess$Frozen;
        appendContents(arg0: $ResourceKey_<$Registry<never>>, arg1: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ICapableObject, $RecordingEventHandler$RecordingEventSender, $ClientWorldAccessor, $ClientLevelAccessor$2, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $ClientLevelAccessor$1, $IWorldMapClientWorld, $ClientLevelKJS, $IClientLevel, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension, $ClientLevelExt, $LevelHeightAccessor, $CachingClientLevel, $CommonLevelAccessor {
        unload(arg0: $LevelChunk): void;
        tick(arg0: $BooleanSupplier_): void;
        getEntityCount(): number;
        axiom$isTimeFrozen(): boolean;
        handleBlockChangedAck(arg0: number): void;
        entitiesForRendering(): $Iterable<$Entity>;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        isLightUpdateQueueEmpty(): boolean;
        sodium$getBiomeZoomSeed(): number;
        getXaero_minimapData(): $MinimapClientWorldData;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        sable$popPoseSupplier(): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        setDefaultSpawnPos(arg0: $BlockPos_, arg1: number): void;
        tickNonPassenger(arg0: $Entity): void;
        setDayTime(arg0: number): void;
        addEntity(arg0: $Entity): void;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        getXaero_OPAC_CapabilityProvider(): $ICapabilityProvider;
        handler$ine000$axiom$onLevelEvent(player: $Player, event: number, blockPos: $BlockPos_, j: number, ci: $CallbackInfo): void;
        getServerSimulationDistance(): number;
        flerovium$getPlayerCollisions(arg0: $Entity, arg1: $AABB_): $List<any>;
        handler$ine003$axiom$onTick(ci: $CallbackInfo): void;
        setXaero_OPAC_CapabilityProvider(arg0: $ICapabilityProvider_): void;
        setServerSimulationDistance(arg0: number): void;
        getSkyColor(arg0: $Vec3_, arg1: number): $Vec3;
        effects(): $DimensionSpecialEffects;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        removeEntity(arg0: number, arg1: $Entity$RemovalReason_): void;
        onChunkLoaded(arg0: $ChunkPos): void;
        getCloudColor(arg0: number): $Vec3;
        getStarBrightness(arg0: number): number;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        sodium$getTracker(): $ChunkTracker;
        calculateBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        overrideMapData(arg0: $MapId_, arg1: $MapItemSavedData): void;
        syncBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: $Vec3_): void;
        clearTintCaches(): void;
        queueLightUpdate(arg0: $Runnable_): void;
        getSkyFlashTime(): number;
        pollLightUpdates(): void;
        modifyReturnValue$ine000$axiom$getMarkerParticleTarget(block: $Block_): $Block;
        handler$bae000$reforgedplaymod$replayModRecording_recordClientSound(player: $Player, x: number, y: number, z: number, sound: $Holder_<any>, category: $SoundSource_, volume: number, pitch: number, seed: number, ci: $CallbackInfo): void;
        getChunkSource(): $ClientChunkCache;
        sable$getPlotContainer(): $SubLevelContainer;
        handler$ine000$axiom$setBlock(blockPos: $BlockPos_, blockState: $BlockState_, i: number, j: number, cir: $CallbackInfoReturnable<any>): void;
        setServerVerifiedBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): void;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        getSkyDarken(arg0: number): number;
        setGameTime(arg0: number): void;
        tickEntities(): void;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        getLevelData(): $ClientLevel$ClientLevelData;
        addMapData(arg0: $Map_<$MapId_, $MapItemSavedData>): void;
        handler$dmb000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        handler$egm000$superbwarfare$getCloudColor(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        sound_physics_remastered$getCachedClone(): $ClonedClientLevel;
        sound_physics_remastered$setCachedClone(arg0: $ClonedClientLevel): void;
        handler$hgf000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        wrapOperation$ine000$axiom$onRemoveEntity(instance: $Entity, original: $Operation_<any>): void;
        handler$egm000$superbwarfare$getSkyColor(arg0: $Vec3_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
        getLevelRenderer(): $LevelRenderer;
        getTickingEntities(): $EntityTickList;
        callGetEntities(): $LevelEntityGetter<$Entity>;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        tickingEntities: $EntityTickList;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        entityStorage: $TransientEntitySectionManager<$Entity>;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $ClientPacketListener, arg1: $ClientLevel$ClientLevelData, arg2: $ResourceKey_<$Level>, arg3: $Holder_<$DimensionType>, arg4: number, arg5: number, arg6: $Supplier_<$ProfilerFiller>, arg7: $LevelRenderer, arg8: boolean, arg9: number);
        get entityCount(): number;
        get lightUpdateQueueEmpty(): boolean;
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
        get skyFlashTime(): number;
        get chunkSource(): $ClientChunkCache;
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        set gameTime(value: number);
        get levelRenderer(): $LevelRenderer;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        isDifficultyLocked(): boolean;
        setDayTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getDayTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isHardcore(): boolean;
        isRaining(): boolean;
        getHorizonHeight(arg0: $LevelHeightAccessor): number;
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        setDifficultyLocked(arg0: boolean): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getGameTime(): number;
        setGameTime(arg0: number): void;
        setDifficulty(arg0: $Difficulty_): void;
        getClearColorScale(): number;
        constructor(arg0: $Difficulty_, arg1: boolean, arg2: boolean);
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get thundering(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingServer(arg0: $ServerData, arg1: $Runnable_, arg2: $Runnable_): void;
        onPingFailed(arg0: $Component_, arg1: $ServerData): void;
        static formatPlayerCount(arg0: number, arg1: number): $Component;
        pingLegacyServer(arg0: $InetSocketAddress, arg1: $ServerAddress, arg2: $ServerData): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $IClientChunkCacheExt {
        replaceBiomes(arg0: number, arg1: number, arg2: $FriendlyByteBuf): void;
        vista$getPinnedChunks(): $Map<any, any>;
        replaceWithPacketData(arg0: number, arg1: number, arg2: $FriendlyByteBuf, arg3: $CompoundTag_, arg4: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        drop(arg0: $ChunkPos): void;
        updateViewRadius(arg0: number): void;
        updateViewCenter(arg0: number, arg1: number): void;
        handler$epe000$railways$securitycraft$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
        handler$epe000$railways$securitycraft$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$epe000$railways$securitycraft$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        lightEngine: $LevelLightEngine;
        level: $ClientLevel;
        static LOGGER: $Logger;
        storage: $ClientChunkCache$Storage;
        constructor(arg0: $ClientLevel, arg1: number);
    }
    export class $KnownPacksManager {
        createResourceManager(): $CloseableResourceManager;
        trySelectingPacks(arg0: $List_<$KnownPack_>): $List<$KnownPack>;
        redirect$gcb000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        modifyReturnValue$gcb000$fabric_resource_loader_v0$getCommonKnownPacksReturn(arg0: $List_<any>): $List<any>;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    export class $CommonListenerCookie extends $Record {
        connectionType(): $ConnectionType;
        telemetryManager(): $WorldSessionTelemetryManager;
        serverData(): $ServerData;
        chatState(): $ChatComponent$State;
        serverBrand(): string;
        receivedRegistries(): $RegistryAccess$Frozen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        localGameProfile(): $GameProfile;
        customReportDetails(): $Map<string, string>;
        postDisconnectScreen(): $Screen;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        serverLinks(): $ServerLinks;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string, arg5: $ServerData, arg6: $Screen, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string, serverData: $ServerData, postDisconnectScreen: $Screen, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        send(arg0: $Packet<never>): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        getConnection(): $Connection;
        handlePing(arg0: $ClientboundPingPacket): void;
        serverBrand(): string;
        sendDeferredPackets(): void;
        handleCustomPayload(arg0: $CustomPacketPayload_): void;
        handleCustomPayload(arg0: $ClientboundCustomPayloadPacket_): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        createDisconnectScreen(arg0: $DisconnectionDetails_): $Screen;
        handleResourcePackPop(arg0: $ClientboundResourcePackPopPacket_): void;
        handleResourcePackPush(arg0: $ClientboundResourcePackPushPacket_): void;
        handleCustomReportDetails(arg0: $ClientboundCustomReportDetailsPacket_): void;
        static preparePackPrompt(arg0: $Component_, arg1: $Component_): $Component;
        handleStoreCookie(arg0: $ClientboundStoreCookiePacket_): void;
        handleServerLinks(arg0: $ClientboundServerLinksPacket_): void;
        handleTransfer(arg0: $ClientboundTransferPacket_): void;
        handleKeepAlive(arg0: $ClientboundKeepAlivePacket): void;
        wrapOperation$fki001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fki001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        handleDisconnect(arg0: $ClientboundDisconnectPacket_): void;
        flow(): $PacketFlow;
        disconnect(arg0: $Component_): void;
        send(arg0: $CustomPacketPayload_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(arg0: $CrashReport): void;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        hasChannel(arg0: $ResourceLocation_): boolean;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        connection: $Connection;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $VeilClientSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        veil$getPostPipelineNames(): $Stream<any>;
        sendError(arg0: $Component_): void;
        getPlayer(): $LocalPlayer;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getOnlinePlayerNames(): $Collection<string>;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        completeCustomSuggestions(arg0: number, arg1: $Suggestions): void;
        modifyCustomCompletions(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>): void;
        getWorld(): $ClientLevel;
        hasPermission(arg0: number): boolean;
        getAllTeams(): $Collection<string>;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        sendFeedback(arg0: $Component_): void;
        getClient(): $Minecraft;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getCustomTabSugggestions(): $Collection<string>;
        modifyReturnValue$ing000$axiom$getSelectedEntities(returnValue: $Collection_<any>): $Collection<any>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        getPosition(): $Vec3;
        getMeta(arg0: string): $Object;
        constructor(arg0: $ClientPacketListener, arg1: $Minecraft);
        get player(): $LocalPlayer;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get onlinePlayerNames(): $Collection<string>;
        get world(): $ClientLevel;
        get allTeams(): $Collection<string>;
        get client(): $Minecraft;
        get customTabSugggestions(): $Collection<string>;
        get entity(): $Entity;
        get rotation(): $Vec2;
        get position(): $Vec3;
    }
    export class $ChunkBatchSizeCalculator {
        getDesiredChunksPerTick(): number;
        onBatchFinished(arg0: number): void;
        onBatchStart(): void;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
