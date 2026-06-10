import { $ProtocolInfo$Unbound, $ConnectionProtocol, $ProtocolInfo, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/handshake" {
    export class $ServerHandshakePacketListener {
    }
    export interface $ServerHandshakePacketListener extends $ServerPacketListener {
        protocol(): $ConnectionProtocol;
        handleIntention(arg0: $ClientIntentionPacket_): void;
    }
    export class $ClientIntentionPacket extends $Record implements $Packet<$ServerHandshakePacketListener> {
        type(): $PacketType<$ClientIntentionPacket>;
        port(): number;
        handle(arg0: $ServerHandshakePacketListener): void;
        hostName(): string;
        protocolVersion(): number;
        isTerminal(): boolean;
        intention(): $ClientIntent;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientIntentionPacket>;
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: string, arg2: number, arg3: $ClientIntent_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $HandshakeProtocols {
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerHandshakePacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerHandshakePacketListener>;
        constructor();
    }
    export class $ClientIntent extends $Enum<$ClientIntent> {
        static values(): $ClientIntent[];
        static valueOf(arg0: string): $ClientIntent;
        id(): number;
        static byId(arg0: number): $ClientIntent;
        static STATUS: $ClientIntent;
        static TRANSFER: $ClientIntent;
        static LOGIN: $ClientIntent;
    }
    /**
     * Values that may be interpreted as {@link $ClientIntent}.
     */
    export type $ClientIntent_ = "status" | "login" | "transfer";
    export class $HandshakePacketTypes {
        static CLIENT_INTENTION: $PacketType<$ClientIntentionPacket>;
        constructor();
    }
}
