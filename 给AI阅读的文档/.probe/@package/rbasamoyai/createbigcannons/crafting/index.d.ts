import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CannonCastingRecipe } from "@package/rbasamoyai/createbigcannons/crafting/casting";
import { $List } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BuiltUpHeatingRecipe } from "@package/rbasamoyai/createbigcannons/crafting/builtup";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $DrillBoringBlockRecipe } from "@package/rbasamoyai/createbigcannons/crafting/boring";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as casting from "@package/rbasamoyai/createbigcannons/crafting/casting";
export * as boring from "@package/rbasamoyai/createbigcannons/crafting/boring";
export * as builtup from "@package/rbasamoyai/createbigcannons/crafting/builtup";

declare module "@package/rbasamoyai/createbigcannons/crafting" {
    export interface $BlockRecipeType extends RegistryMarked<RegistryTypes.CreatebigcannonsBlockRecipeTypesTag, RegistryTypes.CreatebigcannonsBlockRecipeTypes> {}
    export class $BlockRecipe {
        static CODEC: $Codec<$BlockRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockRecipe>;
    }
    export interface $BlockRecipe {
        matches(arg0: $Level_, arg1: $BlockPos_): boolean;
        getType(): $BlockRecipeType<never>;
        getSerializer(): $BlockRecipeSerializer<never>;
        getResultBlock(): $Block;
        assembleInWorld(arg0: $Level_, arg1: $BlockPos_): void;
        get type(): $BlockRecipeType<never>;
        get serializer(): $BlockRecipeSerializer<never>;
        get resultBlock(): $Block;
    }
    export interface $BlockRecipeSerializer extends RegistryMarked<RegistryTypes.CreatebigcannonsBlockRecipeSerializersTag, RegistryTypes.CreatebigcannonsBlockRecipeSerializers> {}
    export class $BlockRecipeType<T extends $BlockRecipe> {
        static register(): void;
        static CANNON_CASTING: $BlockRecipeType<$CannonCastingRecipe>;
        static DRILL_BORING: $BlockRecipeType<$DrillBoringBlockRecipe>;
        static BUILT_UP_HEATING: $BlockRecipeType<$BuiltUpHeatingRecipe>;
    }
    export interface $BlockRecipeType<T extends $BlockRecipe> {
    }
    /**
     * Values that may be interpreted as {@link $BlockRecipeType}.
     */
    export type $BlockRecipeType_<T> = RegistryTypes.CreatebigcannonsBlockRecipeTypes;
    export class $BlockRecipeIngredient implements $Predicate<$BlockState> {
        static of(arg0: $TagKey_<$Block>): $BlockRecipeIngredient;
        static of(arg0: $Block_): $BlockRecipeIngredient;
        toNetwork(arg0: $FriendlyByteBuf): void;
        ingredientType(): $BlockRecipeIngredient$Type;
        getBlockItems(): $List<$ItemStack>;
        stringForSerialization(): string;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        static CODEC: $Codec<$BlockRecipeIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockRecipeIngredient>;
        constructor();
        get blockItems(): $List<$ItemStack>;
    }
    export class $BlockRecipeSerializer<T extends $BlockRecipe> {
        static register(): void;
        static CANNON_CASTING: $BlockRecipeSerializer<$CannonCastingRecipe>;
        static DRILL_BORING: $BlockRecipeSerializer<$DrillBoringBlockRecipe>;
        static BUILT_UP_HEATING: $BlockRecipeSerializer<$BuiltUpHeatingRecipe>;
    }
    export interface $BlockRecipeSerializer<T extends $BlockRecipe> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $BlockRecipeSerializer}.
     */
    export type $BlockRecipeSerializer_<T> = RegistryTypes.CreatebigcannonsBlockRecipeSerializers;
    export class $BlockRecipeIngredient$Type extends $Enum<$BlockRecipeIngredient$Type> implements $StringRepresentable {
        static values(): $BlockRecipeIngredient$Type[];
        static valueOf(arg0: string): $BlockRecipeIngredient$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BlockRecipeIngredient$Type>;
        static BLOCK: $BlockRecipeIngredient$Type;
        static TAG: $BlockRecipeIngredient$Type;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockRecipeIngredient$Type>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockRecipeIngredient$Type}.
     */
    export type $BlockRecipeIngredient$Type_ = "block" | "tag";
}
