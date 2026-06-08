import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/pac/common/server/player/localization/api" {
    export class $IAdaptiveLocalizerAPI {
    }
    export interface $IAdaptiveLocalizerAPI {
        getFor(arg0: $ServerPlayer, arg1: string, ...arg2: $Object[]): $MutableComponent;
        getFor(arg0: $ServerPlayer, arg1: $Component_): $Component;
    }
}
