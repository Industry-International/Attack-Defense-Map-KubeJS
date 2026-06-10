import { $Supplier_ } from "@package/java/util/function";
import { $ICommonPacketListener } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Connection, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $Runnable_, $Record } from "@package/java/lang";
import { $ServerCommonPacketListener, $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";

declare module "@package/net/neoforged/neoforge/network/handling" {
    export class $IPayloadHandler<T extends $CustomPacketPayload> {
    }
    export interface $IPayloadHandler<T extends $CustomPacketPayload> {
        handle(arg0: T, arg1: $IPayloadContext): void;
    }
    /**
     * Values that may be interpreted as {@link $IPayloadHandler}.
     */
    export type $IPayloadHandler_<T> = ((arg0: T, arg1: $IPayloadContext) => void);
    export class $ServerPayloadContext extends $Record implements $IPayloadContext {
        handle(arg0: $CustomPacketPayload_): void;
        listener(): $ServerCommonPacketListener;
        payloadId(): $ResourceLocation;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        flow(): $PacketFlow;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        reply(arg0: $CustomPacketPayload_): void;
        disconnect(arg0: $Component_): void;
        channelHandlerContext(): $ChannelHandlerContext;
        player(): $Player;
        constructor(listener: $ServerCommonPacketListener, payloadId: $ResourceLocation_);
    }
    export class $IPayloadContext {
    }
    export interface $IPayloadContext {
        handle(arg0: $Packet<never>): void;
        handle(arg0: $CustomPacketPayload_): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        listener(): $ICommonPacketListener;
        reply(arg0: $CustomPacketPayload_): void;
        disconnect(arg0: $Component_): void;
        player(): $Player;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        flow(): $PacketFlow;
        channelHandlerContext(): $ChannelHandlerContext;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
    }
    export class $DirectionalPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        handle(arg0: T, arg1: $IPayloadContext): void;
        serverSide(): $IPayloadHandler<T>;
        clientSide(): $IPayloadHandler<T>;
        constructor(clientSide: $IPayloadHandler_<T>, serverSide: $IPayloadHandler_<T>);
    }
    export class $ClientPayloadContext extends $Record implements $IPayloadContext {
        handle(arg0: $CustomPacketPayload_): void;
        payloadId(): $ResourceLocation;
        player(): $Player;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        flow(): $PacketFlow;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        reply(arg0: $CustomPacketPayload_): void;
        disconnect(arg0: $Component_): void;
        channelHandlerContext(): $ChannelHandlerContext;
        listener(): $ICommonPacketListener;
        constructor(listener: $ClientCommonPacketListener, payloadId: $ResourceLocation_);
    }
    export class $MainThreadPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        handler(): $IPayloadHandler<T>;
        handle(arg0: T, arg1: $IPayloadContext): void;
        constructor(handler: $IPayloadHandler_<T>);
    }
}
