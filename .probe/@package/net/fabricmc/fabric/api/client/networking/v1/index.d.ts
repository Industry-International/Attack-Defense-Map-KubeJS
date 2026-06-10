import { $ClientHandshakePacketListenerImpl } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $PacketSendListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/net/fabricmc/fabric/api/client/networking/v1" {
    export class $ClientLoginNetworking$LoginQueryRequestHandler {
    }
    export interface $ClientLoginNetworking$LoginQueryRequestHandler {
        receive(arg0: $Minecraft, arg1: $ClientHandshakePacketListenerImpl, arg2: $FriendlyByteBuf, arg3: $Consumer_<$PacketSendListener>): $CompletableFuture<$FriendlyByteBuf>;
    }
    /**
     * Values that may be interpreted as {@link $ClientLoginNetworking$LoginQueryRequestHandler}.
     */
    export type $ClientLoginNetworking$LoginQueryRequestHandler_ = ((arg0: $Minecraft, arg1: $ClientHandshakePacketListenerImpl, arg2: $FriendlyByteBuf, arg3: $Consumer<$PacketSendListener>) => $CompletableFuture<$FriendlyByteBuf>);
}
