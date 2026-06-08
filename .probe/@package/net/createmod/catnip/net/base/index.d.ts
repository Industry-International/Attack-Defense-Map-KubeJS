import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload, $CustomPacketPayload$Type_, $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";

declare module "@package/net/createmod/catnip/net/base" {
    export class $BasePacketPayload$PacketTypeProvider {
    }
    export interface $BasePacketPayload$PacketTypeProvider {
        getType<T extends $CustomPacketPayload>(): $CustomPacketPayload$Type<T>;
        get type(): $CustomPacketPayload$Type<T>;
    }
    /**
     * Values that may be interpreted as {@link $BasePacketPayload$PacketTypeProvider}.
     */
    export type $BasePacketPayload$PacketTypeProvider_ = (() => $CustomPacketPayload$Type_<any>);
    export class $ClientboundPacketPayload {
    }
    export interface $ClientboundPacketPayload extends $BasePacketPayload {
        handle(arg0: $LocalPlayer): void;
        handleInternal(arg0: $Player): void;
    }
    export class $BasePacketPayload {
    }
    export interface $BasePacketPayload extends $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $BasePacketPayload}.
     */
    export type $BasePacketPayload_ = (() => $BasePacketPayload$PacketTypeProvider_);
}
