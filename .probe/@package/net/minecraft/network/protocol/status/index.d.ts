import { $Codec } from "@package/com/mojang/serialization";
import { $ClientboundPacketListener, $FriendlyByteBuf, $ProtocolInfo$Unbound, $ConnectionProtocol, $ProtocolInfo } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Record } from "@package/java/lang";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $List_ } from "@package/java/util";
import { $ClientPongPacketListener, $ServerPingPacketListener } from "@package/net/minecraft/network/protocol/ping";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/status" {
    export class $ServerStatusPacketListener {
    }
    export interface $ServerStatusPacketListener extends $ServerPacketListener, $ServerPingPacketListener {
        protocol(): $ConnectionProtocol;
        handleStatusRequest(arg0: $ServerboundStatusRequestPacket): void;
    }
    export class $ServerStatus$Players extends $Record {
        max(): number;
        online(): number;
        sample(): $List<$GameProfile>;
        static CODEC: $Codec<$ServerStatus$Players>;
        constructor(max: number, online: number, sample: $List_<$GameProfile>);
    }
    export class $ClientStatusPacketListener {
    }
    export interface $ClientStatusPacketListener extends $ClientPongPacketListener, $ClientboundPacketListener {
        protocol(): $ConnectionProtocol;
        handleStatusResponse(arg0: $ClientboundStatusResponsePacket_): void;
    }
    export class $ServerStatus$Version extends $Record {
        name(): string;
        static current(): $ServerStatus$Version;
        protocol(): number;
        static CODEC: $Codec<$ServerStatus$Version>;
        constructor(name: string, protocol: number);
    }
    export class $ClientboundStatusResponsePacket extends $Record implements $Packet<$ClientStatusPacketListener> {
        type(): $PacketType<$ClientboundStatusResponsePacket>;
        status(): $ServerStatus;
        handle(arg0: $ClientStatusPacketListener): void;
        cachedStatus(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStatusResponsePacket>;
        constructor(status: $ServerStatus_, cachedStatus: string);
        constructor(arg0: $ServerStatus_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundStatusRequestPacket implements $Packet<$ServerStatusPacketListener> {
        type(): $PacketType<$ServerboundStatusRequestPacket>;
        handle(arg0: $ServerStatusPacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static INSTANCE: $ServerboundStatusRequestPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundStatusRequestPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerStatus$Favicon extends $Record {
        iconBytes(): number[];
        static CODEC: $Codec<$ServerStatus$Favicon>;
        constructor(iconBytes: number[]);
    }
    export class $StatusPacketTypes {
        static SERVERBOUND_STATUS_REQUEST: $PacketType<$ServerboundStatusRequestPacket>;
        static CLIENTBOUND_STATUS_RESPONSE: $PacketType<$ClientboundStatusResponsePacket>;
        constructor();
    }
    export class $ServerStatus extends $Record implements $ServerDataExtension {
        version(): ($ServerStatus$Version) | undefined;
        description(): $Component;
        players(): ($ServerStatus$Players) | undefined;
        favicon(): ($ServerStatus$Favicon) | undefined;
        preventsChatReports(): boolean;
        setPreventsChatReports(arg0: boolean): void;
        isModded(): boolean;
        enforcesSecureChat(): boolean;
        static CODEC: $Codec<$ServerStatus>;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: ($ServerStatus$Players_) | undefined, arg2: ($ServerStatus$Version_) | undefined, arg3: ($ServerStatus$Favicon_) | undefined, arg4: boolean);
        constructor(description: $Component_, players: ($ServerStatus$Players_) | undefined, version: ($ServerStatus$Version_) | undefined, favicon: ($ServerStatus$Favicon_) | undefined, enforcesSecureChat: boolean, isModded: boolean);
        get modded(): boolean;
    }
    export class $StatusProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientStatusPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientStatusPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerStatusPacketListener, $ByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerStatusPacketListener>;
        constructor();
    }
}
