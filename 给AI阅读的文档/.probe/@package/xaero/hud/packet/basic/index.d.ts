import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/xaero/hud/packet/basic" {
    export class $ClientboundRulesPacket {
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $ClientboundRulesPacket;
        allowCaveModeOnServer: boolean;
        allowNetherCaveModeOnServer: boolean;
        allowRadarOnServer: boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean);
    }
}
