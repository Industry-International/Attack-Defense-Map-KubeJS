import { $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $Consumer_, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Class } from "@package/java/lang";
export * as config from "@package/xaero/lib/common/packet/config";

declare module "@package/xaero/lib/common/packet" {
    export class $IPacketHandler {
    }
    export interface $IPacketHandler {
        register<P>(arg0: number, arg1: $Class<P>, arg2: $BiConsumer_<P, $FriendlyByteBuf>, arg3: $Function_<$FriendlyByteBuf, P>, arg4: $BiConsumer_<P, $ServerPlayer>, arg5: $Consumer_<P>): void;
        sendToServer<T>(arg0: T): void;
        sendToPlayer<T>(arg0: $ServerPlayer, arg1: T): void;
        sendToPlayer<T>(arg0: $ServerPlayerData, arg1: T): void;
        getChannelId(): $ResourceLocation;
        get channelId(): $ResourceLocation;
    }
}
