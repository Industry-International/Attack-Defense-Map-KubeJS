import { $INamedPacket } from "@package/com/connectivity/networkstats";
import { $List_ } from "@package/java/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CrashReport, $ReportedException } from "@package/net/minecraft";
import { $IPacketFlowExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $ServerboundPacketListener, $ConnectionProtocol_, $ClientboundPacketListener, $ProtocolInfo$Unbound, $PacketListener, $ProtocolInfo, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $Iterable_, $Enum, $Record, $Exception, $Iterable } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec, $StreamDecoder_, $StreamMemberEncoder_ } from "@package/net/minecraft/network/codec";
export * as game from "@package/net/minecraft/network/protocol/game";
export * as common from "@package/net/minecraft/network/protocol/common";
export * as ping from "@package/net/minecraft/network/protocol/ping";
export * as login from "@package/net/minecraft/network/protocol/login";
export * as configuration from "@package/net/minecraft/network/protocol/configuration";
export * as handshake from "@package/net/minecraft/network/protocol/handshake";
export * as status from "@package/net/minecraft/network/protocol/status";
export * as cookie from "@package/net/minecraft/network/protocol/cookie";

declare module "@package/net/minecraft/network/protocol" {
    export class $PacketType<T extends $Packet<never>> extends $Record {
        id(): $ResourceLocation;
        flow(): $PacketFlow;
        constructor(arg0: $PacketFlow_, arg1: $ResourceLocation_);
    }
    export class $ProtocolInfoBuilder$CodecEntry<T extends $PacketListener, P extends $Packet<T>, B extends $ByteBuf> extends $Record {
    }
    export class $ProtocolInfoBuilder$Implementation<L extends $PacketListener> extends $Record implements $ProtocolInfo<L> {
        id(): $ConnectionProtocol;
        codec(): $StreamCodec<$ByteBuf, $Packet<L>>;
        flow(): $PacketFlow;
        bundlerInfo(): $BundlerInfo;
        constructor(arg0: $ConnectionProtocol_, arg1: $PacketFlow_, arg2: $StreamCodec<$ByteBuf, $Packet<L>>, arg3: $BundlerInfo);
    }
    export class $PacketFlow extends $Enum<$PacketFlow> implements $IPacketFlowExtension {
        static values(): $PacketFlow[];
        static valueOf(arg0: string): $PacketFlow;
        id(): string;
        getOpposite(): $PacketFlow;
        self(): $PacketFlow;
        isServerbound(): boolean;
        getReceptionSide(): $LogicalSide;
        isClientbound(): boolean;
        static CLIENTBOUND: $PacketFlow;
        static SERVERBOUND: $PacketFlow;
        get opposite(): $PacketFlow;
        get serverbound(): boolean;
        get receptionSide(): $LogicalSide;
        get clientbound(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PacketFlow}.
     */
    export type $PacketFlow_ = "serverbound" | "clientbound";
    export class $BundlerInfo {
        static createForPacket<T extends $PacketListener, P extends $BundlePacket<T>>(arg0: $PacketType_<P>, arg1: $Function_<$Iterable<$Packet<T>>, P>, arg2: $BundleDelimiterPacket<T>): $BundlerInfo;
        static BUNDLE_SIZE_LIMIT: number;
    }
    export interface $BundlerInfo {
        unbundlePacket(arg0: $Packet<never>, arg1: $Consumer_<$Packet<never>>, arg2: $ChannelHandlerContext): void;
        /**
         * @deprecated
         */
        unbundlePacket(arg0: $Packet<never>, arg1: $Consumer_<$Packet<never>>): void;
        startPacketBundling(arg0: $Packet<never>): $BundlerInfo$Bundler;
    }
    export class $ProtocolInfoBuilder<T extends $PacketListener, B extends $ByteBuf> {
        build(arg0: $Function_<$ByteBuf, B>): $ProtocolInfo<T>;
        buildUnbound(): $ProtocolInfo$Unbound<T, B>;
        withBundlePacket<P extends $BundlePacket<T>, D extends $BundleDelimiterPacket<T>>(arg0: $PacketType_<P>, arg1: $Function_<$Iterable<$Packet<T>>, P>, arg2: D): $ProtocolInfoBuilder<T, B>;
        buildPacketCodec(arg0: $Function_<$ByteBuf, B>, arg1: $List_<$ProtocolInfoBuilder$CodecEntry_<T, never, B>>): $StreamCodec<$ByteBuf, $Packet<T>>;
        static serverboundProtocol<T extends $ServerboundPacketListener, B extends $ByteBuf>(arg0: $ConnectionProtocol_, arg1: $Consumer_<$ProtocolInfoBuilder<T, B>>): $ProtocolInfo$Unbound<T, B>;
        static clientboundProtocol<T extends $ClientboundPacketListener, B extends $ByteBuf>(arg0: $ConnectionProtocol_, arg1: $Consumer_<$ProtocolInfoBuilder<T, B>>): $ProtocolInfo$Unbound<T, B>;
        addPacket<P extends $Packet<T>>(arg0: $PacketType_<P>, arg1: $StreamCodec<B, P>): $ProtocolInfoBuilder<T, B>;
        protocol: $ConnectionProtocol;
        flow: $PacketFlow;
        constructor(arg0: $ConnectionProtocol_, arg1: $PacketFlow_);
    }
    export class $ProtocolCodecBuilder<B extends $ByteBuf, L extends $PacketListener> {
        add<T extends $Packet<L>>(arg0: $PacketType_<T>, arg1: $StreamCodec<B, T>): $ProtocolCodecBuilder<B, L>;
        build(): $StreamCodec<B, $Packet<L>>;
        constructor(arg0: $PacketFlow_);
    }
    export class $BundlerInfo$Bundler {
    }
    export interface $BundlerInfo$Bundler {
        addPacket(arg0: $Packet<never>): $Packet<never>;
    }
    /**
     * Values that may be interpreted as {@link $BundlerInfo$Bundler}.
     */
    export type $BundlerInfo$Bundler_ = ((arg0: $Packet<never>) => $Packet<never>);
    export class $BundleDelimiterPacket<T extends $PacketListener> implements $Packet<T> {
        type(): $PacketType<$BundleDelimiterPacket<T>>;
        handle(arg0: T): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        constructor();
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $Packet<T extends $PacketListener> {
        static codec<B extends $ByteBuf, T extends $Packet<never>>(arg0: $StreamMemberEncoder_<B, T>, arg1: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
    }
    export interface $Packet<T extends $PacketListener> {
        type(): $PacketType<$Packet<T>>;
        handle(arg0: T): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $BundlePacket<T extends $PacketListener> implements $Packet<T>, $INamedPacket {
        getName(): string;
        type(): $PacketType<$BundlePacket<T>>;
        setName(arg0: string): void;
        subPackets(): $Iterable<$Packet<T>>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        constructor(arg0: $Iterable_<$Packet<T>>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $PacketUtils {
        static fillCrashReport<T extends $PacketListener>(arg0: $CrashReport, arg1: T, arg2: $Packet<T>): void;
        static makeReportedException<T extends $PacketListener>(arg0: $Exception, arg1: $Packet<T>, arg2: T): $ReportedException;
        static ensureRunningOnSameThread<T extends $PacketListener>(arg0: $Packet<T>, arg1: T, arg2: $BlockableEventLoop<never>): void;
        static ensureRunningOnSameThread<T extends $PacketListener>(arg0: $Packet<T>, arg1: T, arg2: $ServerLevel): void;
        constructor();
    }
}
