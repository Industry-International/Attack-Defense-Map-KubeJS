import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as result from "@package/com/tacz/guns/crafting/result";

declare module "@package/com/tacz/guns/crafting" {
    export class $GunSmithTableIngredient {
        getCount(): number;
        getIngredient(): $Ingredient;
        static CODEC: $Codec<$GunSmithTableIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GunSmithTableIngredient>;
        constructor(arg0: $Ingredient_, arg1: number);
        get count(): number;
        get ingredient(): $Ingredient;
    }
}
