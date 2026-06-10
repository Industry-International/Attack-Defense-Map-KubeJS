import { $FriendlyByteBuf, $PacketListener } from "@package/net/minecraft/network";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/ping" {
    export class $ClientboundPongResponsePacket extends $Record implements $Packet<$ClientPongPacketListener> {
        type(): $PacketType<$ClientboundPongResponsePacket>;
        time(): number;
        handle(arg0: $ClientPongPacketListener): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPongResponsePacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $PingPacketTypes {
        static SERVERBOUND_PING_REQUEST: $PacketType<$ServerboundPingRequestPacket>;
        static CLIENTBOUND_PONG_RESPONSE: $PacketType<$ClientboundPongResponsePacket>;
        constructor();
    }
    export class $ClientPongPacketListener {
    }
    export interface $ClientPongPacketListener extends $PacketListener {
        handlePongResponse(arg0: $ClientboundPongResponsePacket_): void;
    }
    export class $ServerPingPacketListener {
    }
    export interface $ServerPingPacketListener extends $PacketListener {
        handlePingRequest(arg0: $ServerboundPingRequestPacket): void;
    }
    export class $ServerboundPingRequestPacket implements $Packet<$ServerPingPacketListener> {
        type(): $PacketType<$ServerboundPingRequestPacket>;
        handle(arg0: $ServerPingPacketListener): void;
        getTime(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundPingRequestPacket>;
        constructor(arg0: number);
        get time(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
}
