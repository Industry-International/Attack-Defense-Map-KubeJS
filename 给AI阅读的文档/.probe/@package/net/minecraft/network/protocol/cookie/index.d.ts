import { $ClientboundPacketListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/cookie" {
    export class $ServerCookiePacketListener {
    }
    export interface $ServerCookiePacketListener extends $ServerPacketListener {
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
    }
    export class $CookiePacketTypes {
        static SERVERBOUND_COOKIE_RESPONSE: $PacketType<$ServerboundCookieResponsePacket>;
        static CLIENTBOUND_COOKIE_REQUEST: $PacketType<$ClientboundCookieRequestPacket>;
        constructor();
    }
    export class $ClientboundCookieRequestPacket extends $Record implements $Packet<$ClientCookiePacketListener> {
        type(): $PacketType<$ClientboundCookieRequestPacket>;
        key(): $ResourceLocation;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientCookiePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCookieRequestPacket>;
        constructor(arg0: $ResourceLocation_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundCookieResponsePacket extends $Record implements $Packet<$ServerCookiePacketListener> {
        payload(): number[];
        type(): $PacketType<$ServerboundCookieResponsePacket>;
        key(): $ResourceLocation;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerCookiePacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCookieResponsePacket>;
        constructor(arg0: $ResourceLocation_, arg1: number[] | null);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientCookiePacketListener {
    }
    export interface $ClientCookiePacketListener extends $ClientboundPacketListener {
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
    }
}
