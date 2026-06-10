import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $TransferVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/storage";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/fabricmc/fabric/api/transfer/v1/item" {
    export class $ItemVariant {
        static of(arg0: $ItemLike_, arg1: $DataComponentPatch_): $ItemVariant;
        static of(arg0: $ItemLike_): $ItemVariant;
        static of(arg0: $ItemStack_): $ItemVariant;
        static blank(): $ItemVariant;
        static CODEC: $Codec<$ItemVariant>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemVariant>;
    }
    export interface $ItemVariant extends $TransferVariant<$Item> {
        matches(arg0: $ItemStack_): boolean;
        getItem(): $Item;
        withComponentChanges(arg0: $DataComponentPatch_): $ItemVariant;
        getRegistryEntry(): $Holder<$Item>;
        toStack(arg0: number): $ItemStack;
        toStack(): $ItemStack;
        get item(): $Item;
        get registryEntry(): $Holder<$Item>;
    }
}
