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
        handle(arg0: $ServerLoginPacketListener): void;
        transactionId(): number;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCustomQueryAnswerPacket>;
        constructor(arg0: number, arg1: $CustomQueryAnswerPayload_);
        get terminal(): boolean;
        get skippable(): boolean;
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
        handle(arg0: $ClientLoginPacketListener): void;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        isTerminal(): boolean;
        gameProfile(): $GameProfile;
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
        handle(arg0: $ClientLoginPacketListener): void;
        transactionId(): number;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomQueryPacket>;
        constructor(arg0: number, arg1: $CustomQueryPayload);
        get terminal(): boolean;
        get skippable(): boolean;
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
        handle(arg0: $ServerLoginPacketListener): void;
        profileId(): $UUID;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundHelloPacket>;
        constructor(arg0: string, arg1: $UUID_);
        get terminal(): boolean;
        get skippable(): boolean;
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
        handle(arg0: $ClientLoginPacketListener): void;
        getPublicKey(): $PublicKey;
        getServerId(): string;
        getChallenge(): number[];
        shouldAuthenticate(): boolean;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHelloPacket>;
        constructor(arg0: string, arg1: number[], arg2: number[], arg3: boolean);
        get publicKey(): $PublicKey;
        get serverId(): string;
        get challenge(): number[];
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerLoginPacketListener {
    }
    export interface $ServerLoginPacketListener extends $ServerCookiePacketListener, $ServerPacketListener {
        protocol(): $ConnectionProtocol;
        handleKey(arg0: $ServerboundKeyPacket): void;
        handleHello(arg0: $ServerboundHelloPacket_): void;
        handleLoginAcknowledgement(arg0: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(arg0: $ServerboundCustomQueryAnswerPacket_): void;
    }
    export class $ServerboundKeyPacket implements $Packet<$ServerLoginPacketListener> {
        type(): $PacketType<$ServerboundKeyPacket>;
        handle(arg0: $ServerLoginPacketListener): void;
        getSecretKey(arg0: $PrivateKey): $SecretKey;
        isChallengeValid(arg0: number[], arg1: $PrivateKey): boolean;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundKeyPacket>;
        constructor(arg0: $SecretKey, arg1: $PublicKey, arg2: number[]);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundLoginCompressionPacket implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundLoginCompressionPacket>;
        handle(arg0: $ClientLoginPacketListener): void;
        getCompressionThreshold(): number;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginCompressionPacket>;
        constructor(arg0: number);
        get compressionThreshold(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundLoginDisconnectPacket implements $Packet<$ClientLoginPacketListener> {
        getReason(): $Component;
        type(): $PacketType<$ClientboundLoginDisconnectPacket>;
        handle(arg0: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginDisconnectPacket>;
        constructor(arg0: $Component_);
        get reason(): $Component;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientLoginPacketListener {
    }
    export interface $ClientLoginPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener {
        protocol(): $ConnectionProtocol;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
    }
}
