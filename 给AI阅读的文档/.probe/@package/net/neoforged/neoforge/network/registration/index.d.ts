import { $AttributeKey } from "@package/io/netty/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $NetworkRegistryAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $CustomPacketPayload_, $CustomPacketPayload$Type, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $ServerboundCustomPayloadPacket_, $ClientboundCustomPayloadPacket_, $ServerCommonPacketListener, $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $ServerConfigurationPacketListener, $ClientConfigurationPacketListener } from "@package/net/minecraft/network/protocol/configuration";
import { $IPayloadHandler, $IPayloadHandler_ } from "@package/net/neoforged/neoforge/network/handling";
import { $CommonRegisterPayload_, $ModdedNetworkQueryComponent_, $CommonVersionPayload_ } from "@package/net/neoforged/neoforge/network/payload";
import { $ICommonPacketListener } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Connection, $ConnectionProtocol_, $RegistryFriendlyByteBuf, $FriendlyByteBuf, $PacketListener, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $NegotiationResult_ } from "@package/net/neoforged/neoforge/network/negotiation";
import { $PacketFlow, $PacketFlow_, $Packet } from "@package/net/minecraft/network/protocol";
import { $Iterable_, $Enum, $Record, $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/network/registration" {
    export class $NetworkChannel extends $Record {
        id(): $ResourceLocation;
        chosenVersion(): string;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $NetworkChannel>;
        constructor(id: $ResourceLocation_, chosenVersion: string);
    }
    export class $PayloadRegistration<T extends $CustomPacketPayload> extends $Record {
        type(): $CustomPacketPayload$Type<T>;
        version(): string;
        id(): $ResourceLocation;
        handler(): $IPayloadHandler<T>;
        optional(): boolean;
        protocols(): $List<$ConnectionProtocol>;
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        flow(): ($PacketFlow) | undefined;
        matchesFlow(arg0: $PacketFlow_): boolean;
        constructor(type: $CustomPacketPayload$Type_<T>, codec: $StreamCodec<$RegistryFriendlyByteBuf, T>, handler: $IPayloadHandler_<T>, protocols: $List_<$ConnectionProtocol_>, flow: ($PacketFlow_) | undefined, version: string, optional: boolean);
    }
    export class $NetworkPayloadSetup extends $Record {
        static from(arg0: $Map_<$ConnectionProtocol_, $NegotiationResult_>): $NetworkPayloadSetup;
        static empty(): $NetworkPayloadSetup;
        getChannel(arg0: $ConnectionProtocol_, arg1: $ResourceLocation_): $NetworkChannel;
        channels(): $Map<$ConnectionProtocol, $Map<$ResourceLocation, $NetworkChannel>>;
        getChannels(arg0: $ConnectionProtocol_): $Map<$ResourceLocation, $NetworkChannel>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $NetworkPayloadSetup>;
        constructor(channels: $Map_<$ConnectionProtocol_, $Map_<$ResourceLocation_, $NetworkChannel_>>);
    }
    export class $ModdedPlayPayloadRegistration<T extends $CustomPacketPayload> extends $Record {
        type(): $Class<T>;
        id(): $ResourceLocation;
        handler(): $IPayloadHandler<T>;
        reader(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(id: $ResourceLocation_, type: $Class<T>, handler: $IPayloadHandler_<T>, reader: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    export class $HandlerThread extends $Enum<$HandlerThread> {
        static values(): $HandlerThread[];
        static valueOf(arg0: string): $HandlerThread;
        static NETWORK: $HandlerThread;
        static MAIN: $HandlerThread;
    }
    /**
     * Values that may be interpreted as {@link $HandlerThread}.
     */
    export type $HandlerThread_ = "main" | "network";
    export class $ModdedConfigurationPayloadRegistration<T extends $CustomPacketPayload> extends $Record {
        type(): $Class<T>;
        id(): $ResourceLocation;
        handler(): $IPayloadHandler<T>;
        reader(): $StreamCodec<$FriendlyByteBuf, T>;
        constructor(id: $ResourceLocation_, type: $Class<T>, handler: $IPayloadHandler_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>);
    }
    /**
     * Builder-style helper for registering `CustomPacketPayload`s, used for modded networking.
     */
    export class $PayloadRegistrar {
        /**
         * Creates a copy of this registrar with optional mode enabled. Payloads registered with the returned copy will be marked as optional.
         * 
         * If any non-optional payloads are missing during a connection attempt, the connection will fail.
         */
        optional(): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        configurationToClient<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        configurationToServer<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        configurationBidirectional<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        commonBidirectional<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Creates a copy of this registrar with a different default handling thread.
         * 
         * When the handling thread is set to `HandlerThread#MAIN`, all registered handlers will be wrapped in `MainThreadPayloadHandler`.
         * 
         * The initial handling thread is `HandlerThread#MAIN`.
         */
        executesOn(thread: $HandlerThread_): $PayloadRegistrar;
        /**
         * Creates a copy of this registrar with a different version. Payloads registered with the returned copy will use the passed version, instead of the version from the constructor.
         * 
         * On Neo-Neo connections, the connection will only succeed if all registered payloads have the same version.
         * 
         * On other connections, the payload version is ignored, since only Neo knows how to communicate Neo payload versions.
         */
        versioned(version: string): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        commonToServer<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        commonToClient<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        playToClient<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$RegistryFriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        playToServer<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$RegistryFriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        playBidirectional<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$RegistryFriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        constructor(version: string);
    }
    /**
     * Utilities for manipulation of Netty `Channel` attributes
     */
    export class $ChannelAttributes {
        /**
         * Returns a mutable set of the currently known common channels for the given protocol.
         */
        static getOrCreateCommonChannels(connection: $Connection, protocol: $ConnectionProtocol_): $Set<$ResourceLocation>;
        /**
         * Returns a mutable set of the currently known ad-hoc channels.
         */
        static getOrCreateAdHocChannels(connection: $Connection): $Set<$ResourceLocation>;
        static getConnectionType(connection: $Connection): $ConnectionType;
        static setConnectionType(connection: $Connection, type: $ConnectionType_): void;
        static getPayloadSetup(connection: $Connection): $NetworkPayloadSetup;
        static setPayloadSetup(connection: $Connection, setup: $NetworkPayloadSetup_): void;
        static PAYLOAD_SETUP: $AttributeKey<$NetworkPayloadSetup>;
        static CONNECTION_TYPE: $AttributeKey<$ConnectionType>;
        static ADHOC_CHANNELS: $AttributeKey<$Set<$ResourceLocation>>;
        static COMMON_CHANNELS: $AttributeKey<$Map<$ConnectionProtocol, $Set<$ResourceLocation>>>;
        constructor();
    }
    /**
     * Core registry for all modded networking.
     * 
     * This registry is responsible for storing all known modded payloads, and for handling the negotiation of modded network channels between the client and the server.
     * 
     * Additionally, this registry is responsible for handling all packets that are not natively known once they arrive at the receiving end.
     * 
     * To prevent payloads from being send to a client that has no idea what to do with them, the registry provides endpoints for the vanilla code base to check if a packet can be send to a client.
     */
    export class $NetworkRegistry implements $NetworkRegistryAccessor {
        /**
         * Registers a new payload.
         */
        static register<T extends $CustomPacketPayload, B extends $FriendlyByteBuf>(type: $CustomPacketPayload$Type_<T>, codec: $StreamCodec<B, T>, handler: $IPayloadHandler_<T>, protocols: $List_<$ConnectionProtocol_>, flow: ($PacketFlow_) | undefined, version: string, optional: boolean): void;
        /**
         * Sets up the network registry by firing `RegisterPayloadHandlersEvent`, storing the resulting payload registrations in `#PAYLOAD_REGISTRATIONS`.
         */
        static setup(): void;
        /**
         * Helper to guard futures generated by `IPayloadContext` against exceptions.
         */
        static guard<T>(future: $CompletableFuture<T>, payloadId: $ResourceLocation_): $CompletableFuture<T>;
        /**
         * Attempts to retrieve the `StreamCodec` for a non-vanilla payload.
         * 
         * This method hardcodes NeoForge custom packets, stored in `#BUILTIN_PAYLOADS`, which may be sent before negotiation.
         * 
         * If none of the hardcoded matches succeed, we instead query the registered handlers.
         * 
         * The only validation this method performs is that the `PacketFlow` is correct. Other checks should be done externally.
         */
        static getCodec(id: $ResourceLocation_, protocol: $ConnectionProtocol_, flow: $PacketFlow_): $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload>;
        /**
         * Invoked to add to the known ad-hoc channels on a connection.
         * 
         * Invoked on the network thread.
         */
        static onMinecraftRegister(connection: $Connection, resourceLocations: $Set_<$ResourceLocation_>): void;
        /**
         * Invoked to add to the known ad-hoc channels on a connection.
         * 
         * Invoked on the network thread.
         */
        static onMinecraftUnregister(connection: $Connection, resourceLocations: $Set_<$ResourceLocation_>): void;
        /**
         * Handles modded payloads on the server. Invoked after built-in handling.
         * 
         * Called on the network thread.
         */
        static handleModdedPayload(listener: $ServerCommonPacketListener, packet: $ServerboundCustomPayloadPacket_): void;
        /**
         * Handles modded payloads on the client. Invoked after built-in handling.
         * 
         * Called on the network thread.
         */
        static handleModdedPayload(listener: $ClientCommonPacketListener, packet: $ClientboundCustomPayloadPacket_): void;
        /**
         * Invoked by the `ServerConfigurationPacketListenerImpl` when a vanilla or other connection is detected.
         */
        static initializeOtherConnection(listener: $ServerConfigurationPacketListener): boolean;
        /**
         * Invoked by the client when a modded server queries it for its available channels. The negotiation happens solely on the server side, and the result is later transmitted to the client.
         * 
         * Invoked on the network thread.
         */
        static initializeOtherConnection(listener: $ClientConfigurationPacketListener): void;
        static handlePacketUnchecked<T extends $PacketListener>(packet: $Packet<T>, listener: $PacketListener): void;
        /**
         * Filters the given packets for a bundle packet in the game phase of the connection.
         */
        static filterGameBundlePackets<T extends $PacketListener>(context: $ChannelHandlerContext, packets: $Iterable_<$Packet<T>>): $List<$Packet<never>>;
        /**
         * Configures a mock connection for use in game tests. The mock connection will act as if the server and client are fully compatible and both NeoForge.
         */
        static configureMockConnection(connection: $Connection): void;
        /**
         * @return the initial channels for the configuration phase.
         */
        static getCommonPlayChannels(flow: $PacketFlow_): $Set<$ResourceLocation>;
        /**
         * Invoked when the configuration phase of a connection is completed.
         * 
         * Updates the ad-hoc channels to prepare for the game phase by removing the initial channels and building a new list based on the connection type.
         */
        static onConfigurationFinished(listener: $ICommonPacketListener): void;
        static getConnectionType(connection: $Connection): $ConnectionType;
        /**
         * Indicates whether the given connection has a connection setup that can transmit the given payload id.
         */
        static hasChannel(connection: $Connection, protocol: $ConnectionProtocol_, payloadId: $ResourceLocation_): boolean;
        /**
         * Checks if the packet listener's connection can send/receive the given payload.
         */
        static hasChannel(listener: $ICommonPacketListener, payloadId: $ResourceLocation_): boolean;
        static getInitialServerUnregisterChannels(): $Set<$ResourceLocation>;
        /**
         * Invoked by the client to indicate that it detect a connection to a modded server, by receiving a `ModdedNetworkPayload`.
         * This will configure the active connection to the server to use the channels that were negotiated.
         * 
         * Once this method completes a `NetworkPayloadSetup` will be present on the connection.
         * 
         * Invoked on the network thread.
         */
        static initializeNeoForgeConnection(listener: $ClientConfigurationPacketListener, setup: $NetworkPayloadSetup_): void;
        /**
         * Invoked by the server when it completes the negotiation with the client during the configuration phase.
         * 
         * This method determines what the versions of each of the channels are, and checks if the client and server have a compatible set of network channels.
         * 
         * If the negotiation fails, a custom packet is sent to the client to inform it of the failure, and which will allow the client to disconnect gracefully with an indicative error screen.
         * 
         * This method should only be invoked for modded connections.
         * Use `#initializeOtherConnection(ServerConfigurationPacketListener)` to indicate that during the configuration phase of the network handshake between a client and the server, a vanilla connection was detected.
         * 
         * Invoked on the network thread.
         */
        static initializeNeoForgeConnection(listener: $ServerConfigurationPacketListener, clientChannels: $Map_<$ConnectionProtocol_, $Set_<$ModdedNetworkQueryComponent_>>): void;
        /**
         * @return the initial channels for the configuration phase.
         */
        static getInitialListeningChannels(flow: $PacketFlow_): $Set<$ResourceLocation>;
        static setSetup$fabric_networking_api_v1_$md$dd6cb9$2(arg0: boolean): void;
        static getSetup$fabric_networking_api_v1_$md$dd6cb9$1(): boolean;
        static getPayloadRegistrations$fabric_networking_api_v1_$md$dd6cb9$0(): $Map<any, any>;
        /**
         * Replaces any existing common channels with the incoming ones from a `CommonRegisterPayload`.
         * 
         * Invoked on the network thread.
         */
        static onCommonRegister(listener: $ICommonPacketListener, payload: $CommonRegisterPayload_): void;
        /**
         * Called when a `CommonVersionPayload` is received.
         * Triggers a disconnect if none of the supplied version match our supported ones.
         * Since we only support one version, we don't need to do further handling or record the "active" version just yet.
         * 
         * Invoked on the network thread.
         */
        static checkCommonVersion(listener: $ICommonPacketListener, payload: $CommonVersionPayload_): void;
        /**
         * Checks if a payload is a modded payload. A modded payload is any payload that does not have `minecraft` as the domain, and is not a discarded payload.
         * 
         * The special handling for `DiscardedPayload` is because it falsely reports its type as the type that failed to decode.
         */
        static isModdedPayload(payload: $CustomPacketPayload_): boolean;
        /**
         * Validates that a `ClientboundCustomPayloadPacket` may be sent to the client.
         */
        static checkPacket(packet: $Packet<never>, listener: $ServerCommonPacketListener): void;
        /**
         * Validates that a `ServerboundCustomPayloadPacket` may be sent to the server.
         */
        static checkPacket(packet: $Packet<never>, listener: $ClientCommonPacketListener): void;
        /**
         * Invoked by the client when a modded server queries it for its available channels. The negotiation happens solely on the server side, and the result is later transmitted to the client.
         * 
         * Invoked on the network thread.
         */
        static onNetworkQuery(listener: $ClientConfigurationPacketListener): void;
        static SUPPORTED_COMMON_NETWORKING_VERSIONS: $List<number>;
        static get initialServerUnregisterChannels(): $Set<$ResourceLocation>;
        static set setup$fabric_networking_api_v1_$md$dd6cb9$2(value: boolean);
        static get setup$fabric_networking_api_v1_$md$dd6cb9$1(): boolean;
        static get payloadRegistrations$fabric_networking_api_v1_$md$dd6cb9$0(): $Map<any, any>;
    }
}
