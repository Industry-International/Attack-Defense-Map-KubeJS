import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/fabricmc/fabric/api/recipe/v1/ingredient" {
    export class $CustomIngredient {
    }
    export interface $CustomIngredient {
        test(arg0: $ItemStack_): boolean;
        requiresTesting(): boolean;
        getSerializer(): $CustomIngredientSerializer<never>;
        toVanilla(): $Ingredient;
        getMatchingStacks(): $List<$ItemStack>;
        get serializer(): $CustomIngredientSerializer<never>;
        get matchingStacks(): $List<$ItemStack>;
    }
    export class $FabricIngredient {
    }
    export interface $FabricIngredient {
        requiresTesting(): boolean;
        getCustomIngredient(): $CustomIngredient;
        get customIngredient(): $CustomIngredient;
    }
    export class $CustomIngredientSerializer<T extends $CustomIngredient> {
        static get(arg0: $ResourceLocation_): $CustomIngredientSerializer<never>;
        static register(arg0: $CustomIngredientSerializer<never>): void;
    }
    export interface $CustomIngredientSerializer<T extends $CustomIngredient> {
        getIdentifier(): $ResourceLocation;
        getCodec(arg0: boolean): $MapCodec<T>;
        getPacketCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        get identifier(): $ResourceLocation;
        get packetCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
}
