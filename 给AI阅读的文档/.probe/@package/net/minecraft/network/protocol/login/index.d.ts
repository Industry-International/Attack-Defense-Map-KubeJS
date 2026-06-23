import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PublicKey, $PrivateKey } from "@package/java/security";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $INamedPacket } from "@package/com/connectivity/networkstats";
import { $UUID, $UUID_ } from "@package/java/util";
import { $ClientCookiePacketListener, $ServerCookiePacketListener } from "@package/net/minecraft/network/protocol/cookie";
import { $ClientboundPacketListener, $FriendlyByteBuf, $ProtocolInfo$Unbound, $ProtocolInfo, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CustomQueryAnswerPayload_, $CustomQueryAnswerPayload, $CustomQueryPayload } from "@package/net/minecraft/network/protocol/login/custom";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $SecretKey } from "@package/javax/crypto";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as custom from "@package/net/minecraft/network/protocol/login/custom";

declare module "@package/net/minecraft/network/protocol/login" {
    export class $ServerboundCustomQueryAnswerPacket extends $Record implements $Packet<$ServerLoginPacketListener>, $INamedPacket {
        payload(): $CustomQueryAnswerPayload;
        getName(): string;
        type(): $PacketType<$ServerboundCustomQueryAnswerPacket>;
        setName(arg0: string): void;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerLoginPacketListener): void;
        transactionId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCustomQueryAnswerPacket>;
        constructor(arg0: number, arg1: $CustomQueryAnswerPayload_ | null);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $LoginProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientLoginPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerLoginPacketListener>;
        constructor();
    }
    export class $ClientboundGameProfilePacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundGameProfilePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        /**
         * @deprecated
         * Whether decoding errors will be ignored for this packet.
         */
        strictErrorHandling(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        gameProfile(): $GameProfile;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundGameProfilePacket>;
        constructor(arg0: $GameProfile, arg1: boolean);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundCustomQueryPacket extends $Record implements $Packet<$ClientLoginPacketListener>, $INamedPacket {
        payload(): $CustomQueryPayload;
        getName(): string;
        type(): $PacketType<$ClientboundCustomQueryPacket>;
        setName(arg0: string): void;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        transactionId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomQueryPacket>;
        constructor(arg0: number, arg1: $CustomQueryPayload);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundLoginAcknowledgedPacket implements $Packet<$ServerLoginPacketListener> {
        type(): $PacketType<$ServerboundLoginAcknowledgedPacket>;
        handle(arg0: $ServerLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundLoginAcknowledgedPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundLoginAcknowledgedPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundHelloPacket extends $Record implements $Packet<$ServerLoginPacketListener> {
        name(): string;
        type(): $PacketType<$ServerboundHelloPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerLoginPacketListener): void;
        profileId(): $UUID;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundHelloPacket>;
        constructor(arg0: string, arg1: $UUID_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $LoginPacketTypes {
        static CLIENTBOUND_GAME_PROFILE: $PacketType<$ClientboundGameProfilePacket>;
        static CLIENTBOUND_CUSTOM_QUERY: $PacketType<$ClientboundCustomQueryPacket>;
        static CLIENTBOUND_HELLO: $PacketType<$ClientboundHelloPacket>;
        static CLIENTBOUND_LOGIN_DISCONNECT: $PacketType<$ClientboundLoginDisconnectPacket>;
        static SERVERBOUND_KEY: $PacketType<$ServerboundKeyPacket>;
        static CLIENTBOUND_LOGIN_COMPRESSION: $PacketType<$ClientboundLoginCompressionPacket>;
        static SERVERBOUND_HELLO: $PacketType<$ServerboundHelloPacket>;
        static SERVERBOUND_CUSTOM_QUERY_ANSWER: $PacketType<$ServerboundCustomQueryAnswerPacket>;
        static SERVERBOUND_LOGIN_ACKNOWLEDGED: $PacketType<$ServerboundLoginAcknowledgedPacket>;
        constructor();
    }
    export class $ClientboundHelloPacket implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundHelloPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        getPublicKey(): $PublicKey;
        getServerId(): string;
        getChallenge(): number[];
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        shouldAuthenticate(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHelloPacket>;
        constructor(serverId: string, publicKey: number[], challenge: number[], shouldAuthenticate: boolean);
        get publicKey(): $PublicKey;
        get serverId(): string;
        get challenge(): number[];
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * PacketListener for the server side of the LOGIN protocol.
     */
    export class $ServerLoginPacketListener {
    }
    export interface $ServerLoginPacketListener extends $ServerCookiePacketListener, $ServerPacketListener {
        protocol(): $ConnectionProtocol;
        handleHello(packet: $ServerboundHelloPacket_): void;
        handleKey(packet: $ServerboundKeyPacket): void;
        handleCustomQueryPacket(packet: $ServerboundCustomQueryAnswerPacket_): void;
        handleLoginAcknowledgement(packet: $ServerboundLoginAcknowledgedPacket): void;
    }
    export class $ServerboundKeyPacket implements $Packet<$ServerLoginPacketListener> {
        type(): $PacketType<$ServerboundKeyPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerLoginPacketListener): void;
        getSecretKey(key: $PrivateKey): $SecretKey;
        isChallengeValid(expected: number[], key: $PrivateKey): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundKeyPacket>;
        constructor(secretKey: $SecretKey, publicKey: $PublicKey, challenge: number[]);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLoginCompressionPacket implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundLoginCompressionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        getCompressionThreshold(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginCompressionPacket>;
        constructor(compressionThreshold: number);
        get compressionThreshold(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLoginDisconnectPacket implements $Packet<$ClientLoginPacketListener> {
        getReason(): $Component;
        type(): $PacketType<$ClientboundLoginDisconnectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginDisconnectPacket>;
        constructor(reason: $Component_);
        get reason(): $Component;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * PacketListener for the client side of the LOGIN protocol.
     */
    export class $ClientLoginPacketListener {
    }
    export interface $ClientLoginPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener {
        protocol(): $ConnectionProtocol;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
    }
}
