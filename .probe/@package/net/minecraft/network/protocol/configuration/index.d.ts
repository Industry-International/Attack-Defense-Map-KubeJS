import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $RegistrySynchronization$PackedRegistryEntry_, $Registry, $RegistrySynchronization$PackedRegistryEntry } from "@package/net/minecraft/core";
import { $IServerConfigurationPacketListenerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $FriendlyByteBuf, $ProtocolInfo$Unbound, $ProtocolInfo, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $ServerCommonPacketListener, $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/configuration" {
    export class $ConfigurationProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientConfigurationPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientConfigurationPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerConfigurationPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerConfigurationPacketListener>;
        constructor();
    }
    export class $ServerConfigurationPacketListener {
    }
    export interface $ServerConfigurationPacketListener extends $ServerCommonPacketListener, $IServerConfigurationPacketListenerExtension {
        protocol(): $ConnectionProtocol;
        handleConfigurationFinished(arg0: $ServerboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(arg0: $ServerboundSelectKnownPacks_): void;
    }
    export class $ClientboundResetChatPacket implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundResetChatPacket>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ClientboundResetChatPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundResetChatPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundFinishConfigurationPacket implements $Packet<$ServerConfigurationPacketListener> {
        type(): $PacketType<$ServerboundFinishConfigurationPacket>;
        handle(arg0: $ServerConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundFinishConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundFinishConfigurationPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundUpdateEnabledFeaturesPacket extends $Record implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundUpdateEnabledFeaturesPacket>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        features(): $Set<$ResourceLocation>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundUpdateEnabledFeaturesPacket>;
        constructor(arg0: $Set_<$ResourceLocation_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundRegistryDataPacket extends $Record implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundRegistryDataPacket>;
        entries(): $List<$RegistrySynchronization$PackedRegistryEntry>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        registry(): $ResourceKey<$Registry<never>>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRegistryDataPacket>;
        constructor(arg0: $ResourceKey_<$Registry<never>>, arg1: $List_<$RegistrySynchronization$PackedRegistryEntry_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ConfigurationPacketTypes {
        static CLIENTBOUND_UPDATE_ENABLED_FEATURES: $PacketType<$ClientboundUpdateEnabledFeaturesPacket>;
        static CLIENTBOUND_SELECT_KNOWN_PACKS: $PacketType<$ClientboundSelectKnownPacks>;
        static CLIENTBOUND_REGISTRY_DATA: $PacketType<$ClientboundRegistryDataPacket>;
        static SERVERBOUND_SELECT_KNOWN_PACKS: $PacketType<$ServerboundSelectKnownPacks>;
        static CLIENTBOUND_RESET_CHAT: $PacketType<$ClientboundResetChatPacket>;
        static SERVERBOUND_FINISH_CONFIGURATION: $PacketType<$ServerboundFinishConfigurationPacket>;
        static CLIENTBOUND_FINISH_CONFIGURATION: $PacketType<$ClientboundFinishConfigurationPacket>;
        constructor();
    }
    export class $ClientboundFinishConfigurationPacket implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundFinishConfigurationPacket>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ClientboundFinishConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundFinishConfigurationPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundSelectKnownPacks extends $Record implements $Packet<$ServerConfigurationPacketListener> {
        type(): $PacketType<$ServerboundSelectKnownPacks>;
        handle(arg0: $ServerConfigurationPacketListener): void;
        knownPacks(): $List<$KnownPack>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundSelectKnownPacks>;
        constructor(knownPacks: $List_<$KnownPack_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientConfigurationPacketListener {
    }
    export interface $ClientConfigurationPacketListener extends $ClientCommonPacketListener {
        protocol(): $ConnectionProtocol;
        handleConfigurationFinished(arg0: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(arg0: $ClientboundSelectKnownPacks_): void;
        handleEnabledFeatures(arg0: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handleRegistryData(arg0: $ClientboundRegistryDataPacket_): void;
        handleResetChat(arg0: $ClientboundResetChatPacket): void;
    }
    export class $ClientboundSelectKnownPacks extends $Record implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundSelectKnownPacks>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        knownPacks(): $List<$KnownPack>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundSelectKnownPacks>;
        constructor(arg0: $List_<$KnownPack_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
}
