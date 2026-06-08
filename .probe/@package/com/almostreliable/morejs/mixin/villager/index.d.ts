import { $Codec } from "@package/com/mojang/serialization";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";

declare module "@package/com/almostreliable/morejs/mixin/villager" {
    export class $MerchantOfferAccessor {
        static morejs$setCodec(arg0: $Codec<$MerchantOffer>): void;
    }
    export interface $MerchantOfferAccessor {
    }
}
