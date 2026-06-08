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
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundMerchantOffersPacket, $ClientboundSetScorePacket_, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetObjectivePacket, $ClientboundSetEntityDataPacket_, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundPlayerAbilitiesPacket, $ClientboundBlockEventPacket } from "@package/net/minecraft/network/protocol/game";
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
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(arg0: $UserApiService, arg1: $UUID_, arg2: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        tick(): void;
        handleSelectKnownPacks(arg0: $ClientboundSelectKnownPacks_): void;
        handleDisconnect(): void;
        handler$fkj000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handler$bae000$reforgedplaymod$recordEnabledPackData(ci: $CallbackInfo, registryManager: $RegistryAccess$Frozen): void;
        handleConfigurationFinished(arg0: $ClientboundFinishConfigurationPacket): void;
        handleResetChat(arg0: $ClientboundResetChatPacket): void;
        handleRegistryData(arg0: $ClientboundRegistryDataPacket_): void;
        handleEnabledFeatures(arg0: $ClientboundUpdateEnabledFeaturesPacket_): void;
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
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(arg0: $LocalPlayer, arg1: $ClientLevel, arg2: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $AccessorClientPacketListener, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS {
        getId(): $UUID;
        close(): void;
        tick(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        clearLevel(): void;
        sendUnsignedCommand(arg0: string): boolean;
        getRecordingEventHandler(): $RecordingEventHandler;
        handleBlockChangedAck(arg0: $ClientboundBlockChangedAckPacket_): void;
        getAdvancements(): $ClientAdvancements;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        scoreboard(): $Scoreboard;
        handleDisconnect(): void;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        getOnlinePlayerIds(): $Collection<$UUID>;
        handleDamageEvent(arg0: $ClientboundDamageEventPacket_): void;
        handleEntityEvent(arg0: $ClientboundEntityEventPacket): void;
        enabledFeatures(): $FeatureFlagSet;
        sendCommand(arg0: string): void;
        getPlayerInfo(arg0: string): $PlayerInfo;
        getPlayerInfo(arg0: $UUID_): $PlayerInfo;
        getLocalGameProfile(): $GameProfile;
        handler$ioa000$axiom$handleSetCarriedItem(clientboundSetCarriedItemPacket: $ClientboundSetCarriedItemPacket, ci: $CallbackInfo): void;
        handler$ioa000$axiom$handleSetEntityData(clientboundSetEntityDataPacket: $ClientboundSetEntityDataPacket_, ci: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$dkd001$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$ioa000$axiom$handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_, ci: $CallbackInfo): void;
        handler$ioa000$axiom$handleBlockUpdate(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handleSetEntityPassengersPacket(arg0: $ClientboundSetPassengersPacket): void;
        handler$ioa000$axiom$handleRespawn(clientboundRespawnPacket: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        handler$ioa000$axiom$handleSetTime(clientboundSetTimePacket: $ClientboundSetTimePacket, ci: $CallbackInfo): void;
        handler$ioa000$axiom$handleLogin(clientboundLoginPacket: $ClientboundLoginPacket_, ci: $CallbackInfo): void;
        handleSetSimulationDistance(arg0: $ClientboundSetSimulationDistancePacket_): void;
        handleSelectAdvancementsTab(arg0: $ClientboundSelectAdvancementsTabPacket): void;
        handleSetBorderWarningDelay(arg0: $ClientboundSetBorderWarningDelayPacket): void;
        handleProjectilePowerPacket(arg0: $ClientboundProjectilePowerPacket): void;
        handleSetBorderWarningDistance(arg0: $ClientboundSetBorderWarningDistancePacket): void;
        handleUpdateAdvancementsPacket(arg0: $ClientboundUpdateAdvancementsPacket): void;
        handleCustomChatCompletions(arg0: $ClientboundCustomChatCompletionsPacket_): void;
        handler$ecc001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$dkd002$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$eca000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        getRecipeManager(): $RecipeManager;
        potionBrewing(): $PotionBrewing;
        serverLinks(): $ServerLinks;
        handleGameEvent(arg0: $ClientboundGameEventPacket): void;
        handleBundlePacket(arg0: $ClientboundBundlePacket): void;
        isFeatureEnabled(arg0: $FeatureFlagSet): boolean;
        handlePlaceRecipe(arg0: $ClientboundPlaceGhostRecipePacket): void;
        handleSetScore(arg0: $ClientboundSetScorePacket_): void;
        handleDebugSample(arg0: $ClientboundDebugSamplePacket_): void;
        handleAddObjective(arg0: $ClientboundSetObjectivePacket): void;
        handleResetScore(arg0: $ClientboundResetScorePacket_): void;
        handlePongResponse(arg0: $ClientboundPongResponsePacket_): void;
        handleChunksBiomes(arg0: $ClientboundChunksBiomesPacket_): void;
        handleBlockUpdate(arg0: $ClientboundBlockUpdatePacket): void;
        handleTickingStep(arg0: $ClientboundTickingStepPacket_): void;
        kjs$sessionData(): $KubeSessionData;
        handleAddEntity(arg0: $ClientboundAddEntityPacket): void;
        handleTickingState(arg0: $ClientboundTickingStatePacket_): void;
        handleLogin(arg0: $ClientboundLoginPacket_): void;
        searchTrees(): $SessionSearchTrees;
        handleMovePlayer(arg0: $ClientboundPlayerPositionPacket): void;
        handleMoveEntity(arg0: $ClientboundMoveEntityPacket): void;
        handleRotateMob(arg0: $ClientboundRotateHeadPacket): void;
        handleAwardStats(arg0: $ClientboundAwardStatsPacket_): void;
        handleSetHealth(arg0: $ClientboundSetHealthPacket): void;
        handleDeleteChat(arg0: $ClientboundDeleteChatPacket_): void;
        handleLevelEvent(arg0: $ClientboundLevelEventPacket): void;
        handleAnimate(arg0: $ClientboundAnimatePacket): void;
        handleSetSpawn(arg0: $ClientboundSetDefaultSpawnPositionPacket): void;
        handleOpenScreen(arg0: $ClientboundOpenScreenPacket): void;
        handleSetTime(arg0: $ClientboundSetTimePacket): void;
        handleMapItemData(arg0: $ClientboundMapItemDataPacket_): void;
        handleBlockEvent(arg0: $ClientboundBlockEventPacket): void;
        handleExplosion(arg0: $ClientboundExplodePacket): void;
        handleLookAt(arg0: $ClientboundPlayerLookAtPacket): void;
        handleCommands(arg0: $ClientboundCommandsPacket): void;
        handleSystemChat(arg0: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(arg0: $ClientboundPlayerChatPacket_): void;
        handleRespawn(arg0: $ClientboundRespawnPacket_): void;
        handleSetEquipment(arg0: $ClientboundSetEquipmentPacket): void;
        setSubtitleText(arg0: $ClientboundSetSubtitleTextPacket_): void;
        handleMoveVehicle(arg0: $ClientboundMoveVehiclePacket): void;
        handleOpenBook(arg0: $ClientboundOpenBookPacket): void;
        setActionBarText(arg0: $ClientboundSetActionBarTextPacket_): void;
        handleTitlesClear(arg0: $ClientboundClearTitlesPacket): void;
        setTitleText(arg0: $ClientboundSetTitleTextPacket_): void;
        handleBossUpdate(arg0: $ClientboundBossEventPacket): void;
        handleSoundEvent(arg0: $ClientboundSoundPacket): void;
        handleItemCooldown(arg0: $ClientboundCooldownPacket_): void;
        handleServerData(arg0: $ClientboundServerDataPacket_): void;
        setTitlesAnimation(arg0: $ClientboundSetTitlesAnimationPacket): void;
        handleSetCamera(arg0: $ClientboundSetCameraPacket): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getXaero_worldmapSession(): $WorldMapSession;
        getXaero_minimapSession(): $XaeroMinimapSession;
        markMessageAsProcessed(arg0: $PlayerChatMessage_, arg1: boolean): void;
        getDebugQueryHandler(): $DebugQueryHandler;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        handleAddExperienceOrb(arg0: $ClientboundAddExperienceOrbPacket): void;
        handleSetEntityMotion(arg0: $ClientboundSetEntityMotionPacket): void;
        handleSetEntityData(arg0: $ClientboundSetEntityDataPacket_): void;
        handleTeleportEntity(arg0: $ClientboundTeleportEntityPacket): void;
        handleSetCarriedItem(arg0: $ClientboundSetCarriedItemPacket): void;
        handleRemoveEntities(arg0: $ClientboundRemoveEntitiesPacket): void;
        handleChunkBlocksUpdate(arg0: $ClientboundSectionBlocksUpdatePacket): void;
        handleContainerSetSlot(arg0: $ClientboundContainerSetSlotPacket): void;
        handleUpdateRecipes(arg0: $ClientboundUpdateRecipesPacket): void;
        handleSetExperience(arg0: $ClientboundSetExperiencePacket): void;
        handleTagQueryPacket(arg0: $ClientboundTagQueryPacket): void;
        handlePlayerCombatEnter(arg0: $ClientboundPlayerCombatEnterPacket): void;
        handleHurtAnimation(arg0: $ClientboundHurtAnimationPacket_): void;
        handleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket): void;
        handleHorseScreenOpen(arg0: $ClientboundHorseScreenOpenPacket): void;
        handleContainerContent(arg0: $ClientboundContainerSetContentPacket): void;
        handleInitializeBorder(arg0: $ClientboundInitializeBorderPacket): void;
        handleConfigurationStart(arg0: $ClientboundStartConfigurationPacket): void;
        handleCommandSuggestions(arg0: $ClientboundCommandSuggestionsPacket_): void;
        handlePlayerCombatKill(arg0: $ClientboundPlayerCombatKillPacket_): void;
        handleEntityLinkPacket(arg0: $ClientboundSetEntityLinkPacket): void;
        handleSetBorderCenter(arg0: $ClientboundSetBorderCenterPacket): void;
        handleForgetLevelChunk(arg0: $ClientboundForgetLevelChunkPacket_): void;
        handleStopSoundEvent(arg0: $ClientboundStopSoundPacket): void;
        handleChangeDifficulty(arg0: $ClientboundChangeDifficultyPacket): void;
        handleContainerSetData(arg0: $ClientboundContainerSetDataPacket): void;
        handleAddOrRemoveRecipes(arg0: $ClientboundRecipePacket): void;
        handleSetBorderLerpSize(arg0: $ClientboundSetBorderLerpSizePacket): void;
        handleBlockEntityData(arg0: $ClientboundBlockEntityDataPacket): void;
        handleSetBorderSize(arg0: $ClientboundSetBorderSizePacket): void;
        handleTakeItemEntity(arg0: $ClientboundTakeItemEntityPacket): void;
        handleTabListCustomisation(arg0: $ClientboundTabListPacket_): void;
        handleRemoveMobEffect(arg0: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoRemove(arg0: $ClientboundPlayerInfoRemovePacket_): void;
        handlePlayerInfoUpdate(arg0: $ClientboundPlayerInfoUpdatePacket): void;
        handleUpdateMobEffect(arg0: $ClientboundUpdateMobEffectPacket): void;
        handleBlockDestruction(arg0: $ClientboundBlockDestructionPacket): void;
        handleDisguisedChat(arg0: $ClientboundDisguisedChatPacket_): void;
        handlePlayerAbilities(arg0: $ClientboundPlayerAbilitiesPacket): void;
        handleContainerClose(arg0: $ClientboundContainerClosePacket): void;
        handlePlayerCombatEnd(arg0: $ClientboundPlayerCombatEndPacket): void;
        handleSoundEntityEvent(arg0: $ClientboundSoundEntityPacket): void;
        handleOpenSignEditor(arg0: $ClientboundOpenSignEditorPacket): void;
        handleChunkBatchFinished(arg0: $ClientboundChunkBatchFinishedPacket_): void;
        handleSetPlayerTeamPacket(arg0: $ClientboundSetPlayerTeamPacket): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        handleUpdateAttributes(arg0: $ClientboundUpdateAttributesPacket): void;
        handleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket): void;
        handleMerchantOffers(arg0: $ClientboundMerchantOffersPacket): void;
        handleChunkBatchStart(arg0: $ClientboundChunkBatchStartPacket): void;
        handleSetDisplayObjective(arg0: $ClientboundSetDisplayObjectivePacket): void;
        handleParticleEvent(arg0: $ClientboundLevelParticlesPacket): void;
        handleSetChunkCacheRadius(arg0: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetChunkCacheCenter(arg0: $ClientboundSetChunkCacheCenterPacket): void;
        handler$dkd000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        modify$boi000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handler$iml000$presencefootsteps$onHandleSoundEffect(arg0: $ClientboundSoundPacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$boi000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        sendChat(arg0: string): void;
        setKeyPair(arg0: $ProfileKeyPair_): void;
        handler$zeh000$openpartiesandclaims$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$ioa000$axiom$handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_, ci: $CallbackInfo): void;
        handler$ioa000$axiom$handleConfigurationStart(ci: $CallbackInfo): void;
        handler$ioa000$axiom$handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$eca001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$ioa000$axiom$handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handler$gkg000$distanthorizons$onCleanupStart(ci: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$ehi000$superbwarfare$vehicleEntityUpdate(arg0: $ClientboundSetPassengersPacket, arg1: $CallbackInfo): void;
        handler$bag000$reforgedplaymod$recordOwnRespawn(packet: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        handler$gkg000$distanthorizons$onHandleLoginEnd(ci: $CallbackInfo): void;
        handler$gao001$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$bag000$reforgedplaymod$recordOwnJoin(packet: $ClientboundPlayerInfoUpdatePacket, ci: $CallbackInfo): void;
        handler$dkd000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        catnip$getServerChunkRadius(): number;
        invokeParseCommand(arg0: string): $ParseResults<$SharedSuggestionProvider>;
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
        get advancements(): $ClientAdvancements;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get onlinePlayerIds(): $Collection<$UUID>;
        get localGameProfile(): $GameProfile;
        get recipeManager(): $RecipeManager;
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        get suggestionsProvider(): $ClientSuggestionProvider;
        get debugQueryHandler(): $DebugQueryHandler;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        set keyPair(value: $ProfileKeyPair_);
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
        isRealm(): boolean;
        isLan(): boolean;
        getAutoRecording(): boolean;
        setAutoRecording(autoRecording: boolean): void;
        getIconBytes(): number[];
        setPreventsChatReports(arg0: boolean): void;
        preventsChatReports(): boolean;
        setResourcePackStatus(arg0: $ServerData$ServerPackStatus_): void;
        handler$baa000$reforgedplaymod$copyFrom(serverInfo: $ServerData, ci: $CallbackInfo): void;
        copyNameIconFrom(arg0: $ServerData): void;
        setIconBytes(arg0: number[]): void;
        static validateIcon(arg0: number[]): number[];
        getResourcePackStatus(): $ServerData$ServerPackStatus;
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
        get realm(): boolean;
        get lan(): boolean;
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
        railways$getViewCenterZ(): number;
        railways$getViewCenterX(): number;
        railways$setViewCenterX(arg0: number): void;
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
        getLatency(): number;
        setLatency(arg0: number): void;
        setGameMode(arg0: $GameType_): void;
        getChatSession(): $RemoteChatSession;
        setChatSession(arg0: $RemoteChatSession_): void;
        getTabListDisplayName(): $Component;
        getTeam(): $PlayerTeam;
        getGameMode(): $GameType;
        hasVerifiableChat(): boolean;
        getProfile(): $GameProfile;
        getSkin(): $PlayerSkin;
        clearChatSession(arg0: boolean): void;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(arg0: $Component_): void;
        constructor(arg0: $GameProfile, arg1: boolean);
        get team(): $PlayerTeam;
        get profile(): $GameProfile;
        get skin(): $PlayerSkin;
        get messageValidator(): $SignedMessageValidator;
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
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        recipes(): $SearchTree<$RecipeCollection>;
        updateCreativeTags(arg0: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        updateRecipes(arg0: $ClientRecipeBook, arg1: $RegistryAccess$Frozen): void;
        rebuildAfterLanguageChange(): void;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
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
        setSelectedTab(arg0: $AdvancementHolder_, arg1: boolean): void;
        setListener(arg0: $ClientAdvancements$Listener): void;
        constructor(arg0: $Minecraft, arg1: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener);
    }
    export class $MultiPlayerGameMode implements $PlayerControllerAccess, $AccessorMultiPlayerGameMode, $MultiPlayerGameModeAccessor {
        tick(): void;
        attack(arg0: $Player, arg1: $Entity): void;
        interactAt(arg0: $Player, arg1: $Entity, arg2: $EntityHitResult, arg3: $InteractionHand_): $InteractionResult;
        interact(arg0: $Player, arg1: $Entity, arg2: $InteractionHand_): $InteractionResult;
        useItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
        useItem(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        continueDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        handleCreativeModeItemAdd(arg0: $ItemStack_, arg1: number): void;
        releaseUsingItem(arg0: $Player): void;
        handlePickItem(arg0: number): void;
        getPlayerMode(): $GameType;
        stopDestroyBlock(): void;
        startDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasMissTime(): boolean;
        isDestroying(): boolean;
        hasInfiniteItems(): boolean;
        isAlwaysFlying(): boolean;
        hasExperience(): boolean;
        canHurtPlayer(): boolean;
        isServerControlledInventory(): boolean;
        handleSlotStateChanged(arg0: number, arg1: number, arg2: boolean): void;
        handleInventoryMouseClick(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player): void;
        destroyBlock(arg0: $BlockPos_): boolean;
        handler$fhe000$inventoryprofilesnext$clickCreativeStack(arg0: $ItemStack_, arg1: number, arg2: $CallbackInfo): void;
        handler$eig000$superbwarfare$isServerControlledInventory(arg0: $CallbackInfoReturnable<any>): void;
        handler$fhd000$inventoryprofilesnext$clickSlotPre(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$fhd000$inventoryprofilesnext$clickSlot(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$fhe000$inventoryprofilesnext$pickItem(arg0: number, arg1: $CallbackInfo): void;
        getDestroyStage(): number;
        handleInventoryButtonClick(arg0: number, arg1: number): void;
        ensureHasSentCarriedItem(): void;
        handleCreativeModeItemDrop(arg0: $ItemStack_): void;
        handler$fhg000$inventoryprofilesnext$postInternalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$fhg000$inventoryprofilesnext$internalOnSlotClickBegin(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        handler$ioo000$axiom$startDestroyBlock(blockPos: $BlockPos_, direction: $Direction_, cir: $CallbackInfoReturnable<any>): void;
        handler$ioo000$axiom$isAlwaysFlying(cir: $CallbackInfoReturnable<any>): void;
        handler$ioo000$axiom$useItemOnReturn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$ioo000$axiom$performUseItemOn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handlePlaceRecipe(arg0: number, arg1: $RecipeHolder_<never>, arg2: boolean): void;
        setLocalMode(arg0: $GameType_, arg1: $GameType_): void;
        setLocalMode(arg0: $GameType_): void;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook, arg3: boolean, arg4: boolean): $LocalPlayer;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook): $LocalPlayer;
        adjustPlayer(arg0: $Player): void;
        getPreviousPlayerMode(): $GameType;
        getDestroyProgress(): number;
        setDestroyDelay(arg0: number): void;
        getDestroyDelay(): number;
        framedblocks$setDestroyDelay(arg0: number): void;
        destroyBlockPos: $BlockPos;
        static $assertionsDisabled: boolean;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(arg0: $Minecraft, arg1: $ClientPacketListener);
        get playerMode(): $GameType;
        get destroying(): boolean;
        get alwaysFlying(): boolean;
        get serverControlledInventory(): boolean;
        get destroyStage(): number;
        get previousPlayerMode(): $GameType;
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
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        setMinigameName(arg0: string): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        fillCrashReport(arg0: $CrashReport): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        getConnection(): $Connection;
        getAddon(): $AbstractNetworkAddon<never>;
        getServerData(): $ServerData;
        constructor(arg0: $Connection, arg1: $Minecraft, arg2: $ServerData, arg3: $Screen, arg4: boolean, arg5: $Duration_, arg6: $Consumer_<$Component>, arg7: $TransferState_);
        get acceptingMessages(): boolean;
        set minigameName(value: string);
        get connection(): $Connection;
        get addon(): $AbstractNetworkAddon<never>;
        get serverData(): $ServerData;
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
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(arg0: $ResourceKey_<$Registry<never>>, arg1: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        collectGameRegistries(arg0: $ResourceProvider_, arg1: $RegistryAccess, arg2: boolean): $RegistryAccess$Frozen;
        appendTags(arg0: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ICapableObject, $RecordingEventHandler$RecordingEventSender, $ClientWorldAccessor, $ClientLevelAccessor$2, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $ClientLevelAccessor$1, $IWorldMapClientWorld, $ClientLevelKJS, $IClientLevel, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension, $ClientLevelExt, $LevelHeightAccessor, $CachingClientLevel, $CommonLevelAccessor {
        unload(arg0: $LevelChunk): void;
        tick(arg0: $BooleanSupplier_): void;
        effects(): $DimensionSpecialEffects;
        xaerolib_setData(arg0: $ClientLevelData): void;
        xaerolib_getData(): $ClientLevelData;
        setDefaultSpawnPos(arg0: $BlockPos_, arg1: number): void;
        tickNonPassenger(arg0: $Entity): void;
        modifyReturnValue$inp000$axiom$getMarkerParticleTarget(block: $Block_): $Block;
        sable$getPlotContainer(): $SubLevelContainer;
        sable$popPoseSupplier(): void;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        sodium$getBiomeZoomSeed(): number;
        entitiesForRendering(): $Iterable<$Entity>;
        getXaero_minimapData(): $MinimapClientWorldData;
        isLightUpdateQueueEmpty(): boolean;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        handleBlockChangedAck(arg0: number): void;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        setGameTime(arg0: number): void;
        getLevelData(): $ClientLevel$ClientLevelData;
        tickEntities(): void;
        getSkyColor(arg0: $Vec3_, arg1: number): $Vec3;
        pollLightUpdates(): void;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        syncBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: $Vec3_): void;
        overrideMapData(arg0: $MapId_, arg1: $MapItemSavedData): void;
        getSkyFlashTime(): number;
        getStarBrightness(arg0: number): number;
        clearTintCaches(): void;
        queueLightUpdate(arg0: $Runnable_): void;
        onChunkLoaded(arg0: $ChunkPos): void;
        removeEntity(arg0: number, arg1: $Entity$RemovalReason_): void;
        getCloudColor(arg0: number): $Vec3;
        getSkyDarken(arg0: number): number;
        setDayTime(arg0: number): void;
        addEntity(arg0: $Entity): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        getEntityCount(): number;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        flerovium$getPlayerCollisions(arg0: $Entity, arg1: $AABB_): $List<any>;
        setServerVerifiedBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): void;
        getXaero_OPAC_CapabilityProvider(): $ICapabilityProvider;
        getServerSimulationDistance(): number;
        setXaero_OPAC_CapabilityProvider(arg0: $ICapabilityProvider_): void;
        handler$inp000$axiom$onLevelEvent(player: $Player, event: number, blockPos: $BlockPos_, j: number, ci: $CallbackInfo): void;
        setServerSimulationDistance(arg0: number): void;
        handler$inp000$axiom$setBlock(blockPos: $BlockPos_, blockState: $BlockState_, i: number, j: number, cir: $CallbackInfoReturnable<any>): void;
        handler$inp003$axiom$onTick(ci: $CallbackInfo): void;
        handler$egm000$superbwarfare$getSkyColor(arg0: $Vec3_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        sound_physics_remastered$getCachedClone(): $ClonedClientLevel;
        handler$dma000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        handler$hgp000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        wrapOperation$inp000$axiom$onRemoveEntity(instance: $Entity, original: $Operation_<any>): void;
        sound_physics_remastered$setCachedClone(arg0: $ClonedClientLevel): void;
        handler$egm000$superbwarfare$getCloudColor(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$bad000$reforgedplaymod$replayModRecording_recordClientSound(player: $Player, x: number, y: number, z: number, sound: $Holder_<any>, category: $SoundSource_, volume: number, pitch: number, seed: number, ci: $CallbackInfo): void;
        addMapData(arg0: $Map_<$MapId_, $MapItemSavedData>): void;
        calculateBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        sodium$getTracker(): $ChunkTracker;
        axiom$isTimeFrozen(): boolean;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
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
        get lightUpdateQueueEmpty(): boolean;
        set gameTime(value: number);
        get skyFlashTime(): number;
        get entityCount(): number;
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
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
        isHardcore(): boolean;
        isRaining(): boolean;
        getDayTime(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getGameTime(): number;
        setGameTime(arg0: number): void;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        setDifficultyLocked(arg0: boolean): void;
        getSpawnPos(): $BlockPos;
        isThundering(): boolean;
        getSpawnAngle(): number;
        setRaining(arg0: boolean): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getClearColorScale(): number;
        getHorizonHeight(arg0: $LevelHeightAccessor): number;
        setDifficulty(arg0: $Difficulty_): void;
        constructor(arg0: $Difficulty_, arg1: boolean, arg2: boolean);
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get thundering(): boolean;
        get spawnAngle(): number;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        static formatPlayerCount(arg0: number, arg1: number): $Component;
        pingLegacyServer(arg0: $InetSocketAddress, arg1: $ServerAddress, arg2: $ServerData): void;
        onPingFailed(arg0: $Component_, arg1: $ServerData): void;
        pingServer(arg0: $ServerData, arg1: $Runnable_, arg2: $Runnable_): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $IClientChunkCacheExt {
        drop(arg0: $ChunkPos): void;
        replaceBiomes(arg0: number, arg1: number, arg2: $FriendlyByteBuf): void;
        replaceWithPacketData(arg0: number, arg1: number, arg2: $FriendlyByteBuf, arg3: $CompoundTag_, arg4: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        updateViewRadius(arg0: number): void;
        updateViewCenter(arg0: number, arg1: number): void;
        vista$getPinnedChunks(): $Map<any, any>;
        handler$epe000$railways$securitycraft$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$epe000$railways$securitycraft$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        handler$epe000$railways$securitycraft$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
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
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        serverData(): $ServerData;
        serverLinks(): $ServerLinks;
        connectionType(): $ConnectionType;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        receivedRegistries(): $RegistryAccess$Frozen;
        localGameProfile(): $GameProfile;
        customReportDetails(): $Map<string, string>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        postDisconnectScreen(): $Screen;
        serverBrand(): string;
        chatState(): $ChatComponent$State;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string, arg5: $ServerData, arg6: $Screen, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string, serverData: $ServerData, postDisconnectScreen: $Screen, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        getConnection(): $Connection;
        send(arg0: $Packet<never>): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        handleDisconnect(arg0: $ClientboundDisconnectPacket_): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        handleKeepAlive(arg0: $ClientboundKeepAlivePacket): void;
        static preparePackPrompt(arg0: $Component_, arg1: $Component_): $Component;
        handleServerLinks(arg0: $ClientboundServerLinksPacket_): void;
        handleTransfer(arg0: $ClientboundTransferPacket_): void;
        handleStoreCookie(arg0: $ClientboundStoreCookiePacket_): void;
        handleResourcePackPush(arg0: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(arg0: $ClientboundResourcePackPopPacket_): void;
        sendDeferredPackets(): void;
        handleCustomReportDetails(arg0: $ClientboundCustomReportDetailsPacket_): void;
        createDisconnectScreen(arg0: $DisconnectionDetails_): $Screen;
        handleCustomPayload(arg0: $ClientboundCustomPayloadPacket_): void;
        handleCustomPayload(arg0: $CustomPacketPayload_): void;
        serverBrand(): string;
        wrapOperation$fki001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fki001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        handlePing(arg0: $ClientboundPingPacket): void;
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
        hasPermission(arg0: number): boolean;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        getClient(): $Minecraft;
        getSelectedEntities(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        registryAccess(): $RegistryAccess;
        getPlayer(): $LocalPlayer;
        enabledFeatures(): $FeatureFlagSet;
        getWorld(): $ClientLevel;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        modifyReturnValue$iob000$axiom$getSelectedEntities(returnValue: $Collection_<any>): $Collection<any>;
        completeCustomSuggestions(arg0: number, arg1: $Suggestions): void;
        modifyCustomCompletions(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>): void;
        getCustomTabSugggestions(): $Collection<string>;
        sendError(arg0: $Component_): void;
        sendFeedback(arg0: $Component_): void;
        veil$getPostPipelineNames(): $Stream<any>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        getPosition(): $Vec3;
        getMeta(arg0: string): $Object;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        constructor(arg0: $ClientPacketListener, arg1: $Minecraft);
        get allTeams(): $Collection<string>;
        get client(): $Minecraft;
        get selectedEntities(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get player(): $LocalPlayer;
        get world(): $ClientLevel;
        get recipeNames(): $Stream<$ResourceLocation>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get position(): $Vec3;
        get entity(): $Entity;
        get rotation(): $Vec2;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        onBatchFinished(arg0: number): void;
        getDesiredChunksPerTick(): number;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
