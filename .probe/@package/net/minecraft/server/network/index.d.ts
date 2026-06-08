import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerInfo, $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerStatusPacketListener, $ServerStatus_, $ServerboundStatusRequestPacket } from "@package/net/minecraft/network/protocol/status";
import { $ExecutorService, $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ServerGamePacketListenerImplExt } from "@package/com/moulberry/axiom/hooks";
import { $RelativeMovement_ } from "@package/net/minecraft/world/entity";
import { $AbstractNetworkAddon, $NetworkHandlerExtensions, $PacketCallbackListener } from "@package/net/fabricmc/fabric/impl/networking";
import { $ServerCommonNetworkHandlerAccessor, $ServerLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $ServerboundCookieResponsePacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ServerboundKeepAlivePacket, $ServerboundCustomPayloadPacket_, $ServerboundPongPacket, $ServerboundResourcePackPacket_, $ServerboundClientInformationPacket_, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $ServerGamePacketListenerImplAccessor } from "@package/com/possible_triangle/flightlib/mixins";
import { $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetAddress, $SocketAddress, $URL } from "@package/java/net";
import { $PacketSendListener, $Connection, $DisconnectionDetails_, $TickablePacketListener, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $RuntimeException, $Exception, $Throwable, $Iterable_, $Record, $AutoCloseable } from "@package/java/lang";
import { $FabricServerConfigurationNetworkHandler } from "@package/net/fabricmc/fabric/api/networking/v1";
import { $PlayerUtils$ConnectionAccess } from "@package/blusunrize/immersiveengineering/api/utils";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $ChatType$Bound_, $PlayerChatMessage_, $FilterMask, $Component } from "@package/net/minecraft/network/chat";
import { $IServerCommonPacketListenerImpl } from "@package/xaero/pac/common/server/core/accessor";
import { $ServerboundLoginAcknowledgedPacket, $ServerLoginPacketListener, $ServerboundKeyPacket, $ServerboundHelloPacket_, $ServerboundCustomQueryAnswerPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $IRenderDistanceOverride } from "@package/com/ishland/c2me/notickvd/common";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerHandshakePacketListener, $ClientIntentionPacket_ } from "@package/net/minecraft/network/protocol/handshake";
import { $ServerboundSetCommandMinecartPacket, $ServerboundJigsawGeneratePacket, $ServerboundDebugSampleSubscriptionPacket_, $ServerboundChangeDifficultyPacket, $ServerboundPlaceRecipePacket, $ServerboundUseItemPacket, $ServerboundBlockEntityTagQueryPacket, $ServerboundPickItemPacket, $ServerboundChatPacket_, $ServerGamePacketListener, $ServerboundPlayerActionPacket, $ServerboundPaddleBoatPacket, $ServerboundMoveVehiclePacket, $ServerboundLockDifficultyPacket, $ServerboundSetBeaconPacket_, $ServerboundSetStructureBlockPacket, $ServerboundPlayerInputPacket, $ServerboundEditBookPacket_, $ServerboundConfigurationAcknowledgedPacket, $ServerboundClientCommandPacket, $ServerboundSelectTradePacket, $ServerboundPlayerCommandPacket, $ServerboundSeenAdvancementsPacket, $ServerboundSwingPacket, $ServerboundSetJigsawBlockPacket, $ServerboundMovePlayerPacket, $ServerboundContainerClickPacket, $ServerboundPlayerAbilitiesPacket, $ServerboundCommandSuggestionPacket, $ServerboundRecipeBookChangeSettingsPacket, $ServerboundEntityTagQueryPacket, $ServerboundInteractPacket, $ServerboundChunkBatchReceivedPacket_, $ServerboundSetCarriedItemPacket, $ServerboundChatSessionUpdatePacket_, $ServerboundSetCommandBlockPacket, $ServerboundSignUpdatePacket, $ServerboundAcceptTeleportationPacket, $ServerboundChatAckPacket_, $ServerboundContainerSlotStateChangedPacket_, $ServerboundUseItemOnPacket, $ServerboundContainerClosePacket, $ServerboundTeleportToEntityPacket, $ServerboundChatCommandSignedPacket_, $ServerboundChatCommandPacket_, $ServerboundRenameItemPacket, $ServerboundContainerButtonClickPacket_, $ServerboundRecipeBookSeenRecipePacket, $ServerboundSetCreativeModeSlotPacket_ } from "@package/net/minecraft/network/protocol/game";
import { $ServerConfigurationPacketListener, $ServerboundFinishConfigurationPacket, $ServerboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ServerPlayNetHandlerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $ServerboundPingRequestPacket } from "@package/net/minecraft/network/protocol/ping";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $Channel, $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $SableUDPServer } from "@package/dev/ryanhcode/sable/network/udp";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ServerConnectionListenerExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/net/minecraft/server/network/config";

declare module "@package/net/minecraft/server/network" {
    export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener, $ServerPlayerConnection, $TickablePacketListener, $NeoListenableNetworkHandler, $ServerGamePacketListenerImplAccessor, $ServerPlayNetHandlerAccess, $PlayerUtils$ConnectionAccess, $ServerGamePacketListenerImplExt, $IRenderDistanceOverride {
        getRemoteAddress(): $SocketAddress;
        tick(): void;
        handlePlayerAbilities(arg0: $ServerboundPlayerAbilitiesPacket): void;
        ackWorldPropertiesUpTo(updateId: number): void;
        ackBlockChangesUpTo(arg0: number): void;
        handleChat(arg0: $ServerboundChatPacket_): void;
        handleContainerClose(arg0: $ServerboundContainerClosePacket): void;
        handleSetCarriedItem(arg0: $ServerboundSetCarriedItemPacket): void;
        handleRecipeBookChangeSettingsPacket(arg0: $ServerboundRecipeBookChangeSettingsPacket): void;
        handler$haj000$sable$handleMovePlayer(arg0: $ServerboundMovePlayerPacket, arg1: $CallbackInfo): void;
        handler$ibm001$tacz$applySwapOffhandDraw(arg0: $ServerboundPlayerActionPacket, arg1: $CallbackInfo): void;
        handleChangeDifficulty(arg0: $ServerboundChangeDifficultyPacket): void;
        handleMoveVehicle(arg0: $ServerboundMoveVehiclePacket): void;
        handlePlaceRecipe(arg0: $ServerboundPlaceRecipePacket): void;
        handleAnimate(arg0: $ServerboundSwingPacket): void;
        handleMovePlayer(arg0: $ServerboundMovePlayerPacket): void;
        handlePlayerInput(arg0: $ServerboundPlayerInputPacket): void;
        filterTextPacket(arg0: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        handleSelectTrade(arg0: $ServerboundSelectTradePacket): void;
        handlePlayerAction(arg0: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(arg0: $ServerboundUseItemOnPacket): void;
        handleUseItem(arg0: $ServerboundUseItemPacket): void;
        handlePaddleBoat(arg0: $ServerboundPaddleBoatPacket): void;
        handleRenameItem(arg0: $ServerboundRenameItemPacket): void;
        handleEditBook(arg0: $ServerboundEditBookPacket_): void;
        handleChatCommand(arg0: $ServerboundChatCommandPacket_): void;
        handleDisconnect(): void;
        getPlayer(): $ServerPlayer;
        handleInteract(arg0: $ServerboundInteractPacket): void;
        addPendingMessage(arg0: $PlayerChatMessage_): void;
        handleChatAck(arg0: $ServerboundChatAckPacket_): void;
        switchToConfig(): void;
        handleSignUpdate(arg0: $ServerboundSignUpdatePacket): void;
        handlePingRequest(arg0: $ServerboundPingRequestPacket): void;
        handlePickItem(arg0: $ServerboundPickItemPacket): void;
        handleRecipeBookSeenRecipePacket(arg0: $ServerboundRecipeBookSeenRecipePacket): void;
        handleCustomCommandSuggestions(arg0: $ServerboundCommandSuggestionPacket): void;
        handleConfigurationAcknowledged(arg0: $ServerboundConfigurationAcknowledgedPacket): void;
        handleTeleportToEntityPacket(arg0: $ServerboundTeleportToEntityPacket): void;
        handleContainerSlotStateChanged(arg0: $ServerboundContainerSlotStateChangedPacket_): void;
        handleDebugSampleSubscription(arg0: $ServerboundDebugSampleSubscriptionPacket_): void;
        teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Set_<$RelativeMovement_>): void;
        teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        wrapOperation$imp000$axiom$handleMovePlayer_noPhysics(instance: $ServerPlayer, original: $Operation_<any>): boolean;
        handler$ffk000$simplebedrockmodel$applySwapOffhandDraw(arg0: $ServerboundPlayerActionPacket, arg1: $CallbackInfo): void;
        resetPosition(): void;
        handleSetCommandMinecart(arg0: $ServerboundSetCommandMinecartPacket): void;
        handleSetBeaconPacket(arg0: $ServerboundSetBeaconPacket_): void;
        handleSeenAdvancements(arg0: $ServerboundSeenAdvancementsPacket): void;
        handleEntityTagQuery(arg0: $ServerboundEntityTagQueryPacket): void;
        handleAcceptTeleportPacket(arg0: $ServerboundAcceptTeleportationPacket): void;
        handleBlockEntityTagQuery(arg0: $ServerboundBlockEntityTagQueryPacket): void;
        handler$ink00b$axiom$tick(ci: $CallbackInfo): void;
        handleSetCommandBlock(arg0: $ServerboundSetCommandBlockPacket): void;
        handleJigsawGenerate(arg0: $ServerboundJigsawGeneratePacket): void;
        handleSetJigsawBlock(arg0: $ServerboundSetJigsawBlockPacket): void;
        handleSetStructureBlock(arg0: $ServerboundSetStructureBlockPacket): void;
        handleContainerClick(arg0: $ServerboundContainerClickPacket): void;
        handleClientCommand(arg0: $ServerboundClientCommandPacket): void;
        sendPlayerChatMessage(arg0: $PlayerChatMessage_, arg1: $ChatType$Bound_): void;
        handleChatSessionUpdate(arg0: $ServerboundChatSessionUpdatePacket_): void;
        handleContainerButtonClick(arg0: $ServerboundContainerButtonClickPacket_): void;
        handleSignedChatCommand(arg0: $ServerboundChatCommandSignedPacket_): void;
        handleSetCreativeModeSlot(arg0: $ServerboundSetCreativeModeSlotPacket_): void;
        handleLockDifficulty(arg0: $ServerboundLockDifficultyPacket): void;
        handlePlayerCommand(arg0: $ServerboundPlayerCommandPacket): void;
        handleChunkBatchReceived(arg0: $ServerboundChunkBatchReceivedPacket_): void;
        sendDisguisedChatMessage(arg0: $Component_, arg1: $ChatType$Bound_): void;
        handler$fid000$ftbquests$handleClientInformation(packet: $ServerboundClientInformationPacket_, ci: $CallbackInfo): void;
        wrapOperation$ibk000$tacz$cancelSprintCommand(arg0: $ServerPlayer, arg1: boolean, arg2: $Operation_<any>): void;
        wrapOperation$imp000$axiom$handleMovePlayerIsSingleplayerOwner(instance: $ServerGamePacketListenerImpl, original: $Operation_<any>): boolean;
        c2me_notickvd$setRenderDistance(renderDistance: number): void;
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        sendBundled(arg0: $Iterable_<$CustomPacketPayload>): void;
        setClientIsFloating(arg0: boolean): void;
        setAboveGroundTickCount(arg0: number): void;
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
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: $ServerPlayer, arg3: $CommonListenerCookie_);
        get remoteAddress(): $SocketAddress;
        set clientIsFloating(value: boolean);
    }
    export class $ServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        handleIntention(arg0: $ClientIntentionPacket_): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        flow(): $PacketFlow;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        fillCrashReport(arg0: $CrashReport): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        constructor(arg0: $MinecraftServer, arg1: $Connection);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask {
    }
    export interface $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
    }
    export class $TextFilterClient$JoinOrLeaveEncoder {
    }
    export interface $TextFilterClient$JoinOrLeaveEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$JoinOrLeaveEncoder}.
     */
    export type $TextFilterClient$JoinOrLeaveEncoder_ = (() => void);
    export class $ServerConnectionListener$LatencySimulator$DelayedMessage {
    }
    export class $ServerLoginPacketListenerImpl$State extends $Enum<$ServerLoginPacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginPacketListenerImpl$State}.
     */
    export type $ServerLoginPacketListenerImpl$State_ = "hello" | "key" | "authenticating" | "negotiating" | "verifying" | "waiting_for_dupe_disconnect" | "protocol_switching" | "accepted";
    export class $ServerConnectionListener implements $ServerConnectionListenerExtension {
        sable$setupUDPServer(arg0: $Channel): void;
        stop(): void;
        tick(): void;
        getConnections(): $List<$Connection>;
        startMemoryChannel(): $SocketAddress;
        getServer(): $MinecraftServer;
        startTcpServerListener(arg0: $InetAddress, arg1: number): void;
        sable$getServer(): $SableUDPServer;
        running: boolean;
        server: $MinecraftServer;
        static SERVER_EVENT_GROUP: $Supplier<$NioEventLoopGroup>;
        static SERVER_EPOLL_EVENT_GROUP: $Supplier<$EpollEventLoopGroup>;
        connections: $List<$Connection>;
        constructor(arg0: $MinecraftServer);
    }
    export class $LegacyQueryHandler extends $ChannelInboundHandlerAdapter {
        constructor(arg0: $ServerInfo);
    }
    export class $ServerConnectionListener$LatencySimulator extends $ChannelInboundHandlerAdapter {
    }
    export class $ServerConfigurationPacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $FabricServerConfigurationNetworkHandler, $IRenderDistanceOverride {
        startConfiguration(): void;
        returnToWorld(): void;
        tick(): void;
        handleConfigurationFinished(arg0: $ServerboundFinishConfigurationPacket): void;
        handleDisconnect(): void;
        addTask(arg0: $ConfigurationTask): void;
        handleSelectKnownPacks(arg0: $ServerboundSelectKnownPacks_): void;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        modify$gbh000$fabric_resource_loader_v0$filterKnownPacks(arg0: $List_<any>): $List<any>;
        c2me_notickvd$setRenderDistance(renderDistance: number): void;
        completeTask(arg0: $ConfigurationTask$Type_): void;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: $CommonListenerCookie_);
    }
    export class $CommonListenerCookie extends $Record {
        transferred(): boolean;
        latency(): number;
        static createInitial(arg0: $GameProfile, arg1: boolean): $CommonListenerCookie;
        gameProfile(): $GameProfile;
        clientInformation(): $ClientInformation;
        connectionType(): $ConnectionType;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: number, arg2: $ClientInformation_, arg3: boolean);
        constructor(gameProfile: $GameProfile, latency: number, clientInformation: $ClientInformation_, transferred: boolean, connectionType: $ConnectionType_);
    }
    export class $ServerGamePacketListenerImpl$EntityInteraction {
    }
    export interface $ServerGamePacketListenerImpl$EntityInteraction {
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImpl$EntityInteraction}.
     */
    export type $ServerGamePacketListenerImpl$EntityInteraction_ = (() => void);
    export class $TextFilterClient$IgnoreStrategy {
        static ignoreOverThreshold(arg0: number): $TextFilterClient$IgnoreStrategy;
        static select(arg0: number): $TextFilterClient$IgnoreStrategy;
        static NEVER_IGNORE: $TextFilterClient$IgnoreStrategy;
        static IGNORE_FULLY_FILTERED: $TextFilterClient$IgnoreStrategy;
    }
    export interface $TextFilterClient$IgnoreStrategy {
        shouldIgnore(arg0: string, arg1: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$IgnoreStrategy}.
     */
    export type $TextFilterClient$IgnoreStrategy_ = ((arg0: string, arg1: number) => boolean);
    export class $Filterable<T> extends $Record {
        get(arg0: boolean): T;
        map<U>(arg0: $Function_<T, U>): $Filterable<U>;
        static from(arg0: $FilteredText_): $Filterable<string>;
        resolve<U>(arg0: $Function_<T, (U) | undefined>): ($Filterable<U>) | undefined;
        raw(): T;
        filtered(): (T) | undefined;
        static codec<T>(arg0: $Codec<T>): $Codec<$Filterable<T>>;
        static streamCodec<B extends $ByteBuf, T>(arg0: $StreamCodec<B, T>): $StreamCodec<B, $Filterable<T>>;
        static passThrough<T>(arg0: T): $Filterable<T>;
        constructor(arg0: T, arg1: (T) | undefined);
    }
    export class $TextFilter {
        static DUMMY: $TextFilter;
    }
    export interface $TextFilter {
        join(): void;
        leave(): void;
        processStreamMessage(arg0: string): $CompletableFuture<$FilteredText>;
        processMessageBundle(arg0: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
    }
    export class $TextFilterClient$RequestFailedException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $TextFilterClient$PlayerContext implements $TextFilter {
    }
    export class $LegacyProtocolUtils {
        static readLegacyString(arg0: $ByteBuf): string;
        static writeLegacyString(arg0: $ByteBuf, arg1: string): void;
        static GET_INFO_PACKET_VERSION_1: number;
        static GET_INFO_PACKET_ID: number;
        static CUSTOM_PAYLOAD_PACKET_ID: number;
        static FAKE_PROTOCOL_VERSION: number;
        static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
        static DISCONNECT_PACKET_ID: number;
        constructor();
    }
    export class $ServerStatusPacketListenerImpl implements $ServerStatusPacketListener {
        onDisconnect(arg0: $DisconnectionDetails_): void;
        handlePingRequest(arg0: $ServerboundPingRequestPacket): void;
        isAcceptingMessages(): boolean;
        handleStatusRequest(arg0: $ServerboundStatusRequestPacket): void;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        flow(): $PacketFlow;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        fillCrashReport(arg0: $CrashReport): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        constructor(arg0: $ServerStatus_, arg1: $Connection);
        constructor(arg0: $ServerStatus_, arg1: $Connection, arg2: string);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask$Type extends $Record {
        id(): string;
        constructor(arg0: $ResourceLocation_);
        constructor(id: string);
    }
    export class $PlayerChunkSender {
        sendNextChunks(arg0: $ServerPlayer): void;
        onChunkBatchReceivedByClient(arg0: number): void;
        static sendChunk(arg0: $ServerGamePacketListenerImpl, arg1: $ServerLevel, arg2: $LevelChunk): void;
        markChunkPendingToSend(arg0: $LevelChunk): void;
        isPending(arg0: number): boolean;
        dropChunk(arg0: $ServerPlayer, arg1: $ChunkPos): void;
        static MIN_CHUNKS_PER_TICK: number;
        static MAX_CHUNKS_PER_TICK: number;
        constructor(arg0: boolean);
    }
    export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener, $IServerCommonPacketListenerImpl, $ServerCommonNetworkHandlerAccessor {
        getOwner(): $GameProfile;
        send(arg0: $Packet<never>, arg1: $PacketSendListener): void;
        send(arg0: $Packet<never>): void;
        getXaero_OPAC_connection(): $Connection;
        disconnect(arg0: $Component_): void;
        disconnect(arg0: $DisconnectionDetails_): void;
        latency(): number;
        handleCustomPayload(arg0: $ServerboundCustomPayloadPacket_): void;
        isSingleplayerOwner(): boolean;
        handleKeepAlive(arg0: $ServerboundKeepAlivePacket): void;
        playerProfile(): $GameProfile;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        resumeFlushing(): void;
        suspendFlushing(): void;
        wrapOperation$fke000$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fke000$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        handleCookieResponse(arg0: $ServerboundCookieResponsePacket_): void;
        handleResourcePackResponse(arg0: $ServerboundResourcePackPacket_): void;
        createCookie(arg0: $ClientInformation_, arg1: $ConnectionType_): $CommonListenerCookie;
        /**
         * @deprecated
         */
        createCookie(arg0: $ClientInformation_): $CommonListenerCookie;
        getConnectionType(): $ConnectionType;
        keepConnectionAlive(): void;
        handlePong(arg0: $ServerboundPongPacket): void;
        constant$zbb000$connectivity$playTimeout(arg0: number): number;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        send(arg0: $CustomPacketPayload_): void;
        send(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
        flow(): $PacketFlow;
        hasChannel(arg0: $ResourceLocation_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        fillCrashReport(arg0: $CrashReport): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: $CommonListenerCookie_);
        get owner(): $GameProfile;
        get xaero_OPAC_connection(): $Connection;
        get singleplayerOwner(): boolean;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $FilteredText extends $Record {
        mask(): $FilterMask;
        raw(): string;
        isFiltered(): boolean;
        filtered(): string;
        filteredOrEmpty(): string;
        static passThrough(arg0: string): $FilteredText;
        static fullyFiltered(arg0: string): $FilteredText;
        static EMPTY: $FilteredText;
        constructor(arg0: string, arg1: $FilterMask);
    }
    export class $TextFilterClient implements $AutoCloseable {
        requestMessageProcessing(arg0: $GameProfile, arg1: string, arg2: $TextFilterClient$IgnoreStrategy_, arg3: $Executor_): $CompletableFuture<$FilteredText>;
        close(): void;
        createContext(arg0: $GameProfile): $TextFilter;
        static createFromConfig(arg0: string): $TextFilterClient;
        processJoinOrLeave(arg0: $GameProfile, arg1: $URL, arg2: $TextFilterClient$JoinOrLeaveEncoder_, arg3: $Executor_): void;
        joinEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEndpoint: $URL;
        workerPool: $ExecutorService;
        chatIgnoreStrategy: $TextFilterClient$IgnoreStrategy;
        joinEndpoint: $URL;
    }
    export class $ServerLoginPacketListenerImpl implements $ServerLoginPacketListener, $TickablePacketListener, $NetworkHandlerExtensions, $PacketCallbackListener, $ServerLoginNetworkHandlerAccessor {
        tick(): void;
        handleKey(arg0: $ServerboundKeyPacket): void;
        getUserName(): string;
        disconnect(arg0: $Component_): void;
        handleHello(arg0: $ServerboundHelloPacket_): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        sent(arg0: $Packet<any>): void;
        handleCookieResponse(arg0: $ServerboundCookieResponsePacket_): void;
        handleLoginAcknowledgement(arg0: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(arg0: $ServerboundCustomQueryAnswerPacket_): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        isAcceptingMessages(): boolean;
        startClientVerification(arg0: $GameProfile): void;
        constant$zba000$connectivity$loginTimeout(arg0: number): number;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        fillCrashReport(arg0: $CrashReport): void;
        getConnection(): $Connection;
        getAddon(): $AbstractNetworkAddon<never>;
        getServer(): $MinecraftServer;
        server: $MinecraftServer;
        requestedUsername: string;
        static LOGGER: $Logger;
        connection: $Connection;
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: boolean);
        get userName(): string;
        get acceptingMessages(): boolean;
        get addon(): $AbstractNetworkAddon<never>;
    }
    export class $TextFilterClient$MessageEncoder {
    }
    export interface $TextFilterClient$MessageEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$MessageEncoder}.
     */
    export type $TextFilterClient$MessageEncoder_ = (() => void);
    export class $ServerPlayerConnection {
    }
    export interface $ServerPlayerConnection {
        send(arg0: $Packet<never>): void;
        getPlayer(): $ServerPlayer;
        get player(): $ServerPlayer;
    }
    export class $MemoryServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        handleIntention(arg0: $ClientIntentionPacket_): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        flow(): $PacketFlow;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        fillCrashReport(arg0: $CrashReport): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        constructor(arg0: $MinecraftServer, arg1: $Connection);
        get acceptingMessages(): boolean;
    }
}
