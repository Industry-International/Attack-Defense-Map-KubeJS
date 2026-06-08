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
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        protocols(): $List<$ConnectionProtocol>;
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
    export class $PayloadRegistrar {
        optional(): $PayloadRegistrar;
        executesOn(arg0: $HandlerThread_): $PayloadRegistrar;
        playBidirectional<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        playToClient<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        playToServer<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        configurationToServer<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$FriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        configurationToClient<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$FriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        configurationBidirectional<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$FriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        versioned(arg0: string): $PayloadRegistrar;
        commonBidirectional<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$FriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        commonToClient<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$FriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        commonToServer<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$FriendlyByteBuf, T>, arg2: $IPayloadHandler_<T>): $PayloadRegistrar;
        constructor(arg0: string);
    }
    export class $ChannelAttributes {
        static getConnectionType(arg0: $Connection): $ConnectionType;
        static getOrCreateAdHocChannels(arg0: $Connection): $Set<$ResourceLocation>;
        static getOrCreateCommonChannels(arg0: $Connection, arg1: $ConnectionProtocol_): $Set<$ResourceLocation>;
        static setConnectionType(arg0: $Connection, arg1: $ConnectionType_): void;
        static setPayloadSetup(arg0: $Connection, arg1: $NetworkPayloadSetup_): void;
        static getPayloadSetup(arg0: $Connection): $NetworkPayloadSetup;
        static PAYLOAD_SETUP: $AttributeKey<$NetworkPayloadSetup>;
        static CONNECTION_TYPE: $AttributeKey<$ConnectionType>;
        static ADHOC_CHANNELS: $AttributeKey<$Set<$ResourceLocation>>;
        static COMMON_CHANNELS: $AttributeKey<$Map<$ConnectionProtocol, $Set<$ResourceLocation>>>;
        constructor();
    }
    export class $NetworkRegistry implements $NetworkRegistryAccessor {
        static register<T extends $CustomPacketPayload, B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<B, T>, arg2: $IPayloadHandler_<T>, arg3: $List_<$ConnectionProtocol_>, arg4: ($PacketFlow_) | undefined, arg5: string, arg6: boolean): void;
        static setup(): void;
        static guard<T>(arg0: $CompletableFuture<T>, arg1: $ResourceLocation_): $CompletableFuture<T>;
        static getConnectionType(arg0: $Connection): $ConnectionType;
        static getCodec(arg0: $ResourceLocation_, arg1: $ConnectionProtocol_, arg2: $PacketFlow_): $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload>;
        static setSetup$fabric_networking_api_v1_$md$d64506$2(arg0: boolean): void;
        static getSetup$fabric_networking_api_v1_$md$d64506$1(): boolean;
        static onConfigurationFinished(arg0: $ICommonPacketListener): void;
        static initializeOtherConnection(arg0: $ClientConfigurationPacketListener): void;
        static initializeOtherConnection(arg0: $ServerConfigurationPacketListener): boolean;
        static filterGameBundlePackets<T extends $PacketListener>(arg0: $ChannelHandlerContext, arg1: $Iterable_<$Packet<T>>): $List<$Packet<never>>;
        static configureMockConnection(arg0: $Connection): void;
        static getCommonPlayChannels(arg0: $PacketFlow_): $Set<$ResourceLocation>;
        static hasChannel(arg0: $Connection, arg1: $ConnectionProtocol_, arg2: $ResourceLocation_): boolean;
        static hasChannel(arg0: $ICommonPacketListener, arg1: $ResourceLocation_): boolean;
        static getPayloadRegistrations$fabric_networking_api_v1_$md$d64506$0(): $Map<any, any>;
        static handleModdedPayload(arg0: $ServerCommonPacketListener, arg1: $ServerboundCustomPayloadPacket_): void;
        static handleModdedPayload(arg0: $ClientCommonPacketListener, arg1: $ClientboundCustomPayloadPacket_): void;
        static onMinecraftRegister(arg0: $Connection, arg1: $Set_<$ResourceLocation_>): void;
        static onMinecraftUnregister(arg0: $Connection, arg1: $Set_<$ResourceLocation_>): void;
        static handlePacketUnchecked<T extends $PacketListener>(arg0: $Packet<T>, arg1: $PacketListener): void;
        static isModdedPayload(arg0: $CustomPacketPayload_): boolean;
        static checkPacket(arg0: $Packet<never>, arg1: $ClientCommonPacketListener): void;
        static checkPacket(arg0: $Packet<never>, arg1: $ServerCommonPacketListener): void;
        static onCommonRegister(arg0: $ICommonPacketListener, arg1: $CommonRegisterPayload_): void;
        static checkCommonVersion(arg0: $ICommonPacketListener, arg1: $CommonVersionPayload_): void;
        static initializeNeoForgeConnection(arg0: $ServerConfigurationPacketListener, arg1: $Map_<$ConnectionProtocol_, $Set_<$ModdedNetworkQueryComponent_>>): void;
        static initializeNeoForgeConnection(arg0: $ClientConfigurationPacketListener, arg1: $NetworkPayloadSetup_): void;
        static getInitialListeningChannels(arg0: $PacketFlow_): $Set<$ResourceLocation>;
        static getInitialServerUnregisterChannels(): $Set<$ResourceLocation>;
        static onNetworkQuery(arg0: $ClientConfigurationPacketListener): void;
        static SUPPORTED_COMMON_NETWORKING_VERSIONS: $List<number>;
        static set setup$fabric_networking_api_v1_$md$d64506$2(value: boolean);
        static get setup$fabric_networking_api_v1_$md$d64506$1(): boolean;
        static get payloadRegistrations$fabric_networking_api_v1_$md$d64506$0(): $Map<any, any>;
        static get initialServerUnregisterChannels(): $Set<$ResourceLocation>;
    }
}
