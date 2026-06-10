import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $TransferVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/storage";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/fabricmc/fabric/api/transfer/v1/fluid" {
    export class $FluidVariant {
        static of(arg0: $Fluid_, arg1: $DataComponentPatch_): $FluidVariant;
        static of(arg0: $Fluid_): $FluidVariant;
        static blank(): $FluidVariant;
        static CODEC: $Codec<$FluidVariant>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidVariant>;
    }
    export interface $FluidVariant extends $TransferVariant<$Fluid> {
        getFluid(): $Fluid;
        getRegistryEntry(): $Holder<$Fluid>;
        withComponentChanges(arg0: $DataComponentPatch_): $TransferVariant<$Fluid>;
        get fluid(): $Fluid;
        get registryEntry(): $Holder<$Fluid>;
    }
}
