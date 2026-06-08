import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/xaero/map/message/basic" {
    export class $ClientboundRulesPacket {
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $ClientboundRulesPacket;
        allowCaveModeOnServer: boolean;
        allowNetherCaveModeOnServer: boolean;
        constructor(arg0: boolean, arg1: boolean);
    }
}
