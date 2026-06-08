import { $JsonElement } from "@package/com/google/gson";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_ } from "@package/java/util";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { SpecialTypes, RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $DataComponentPredicate, $DataComponentMap_, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record, $Object } from "@package/java/lang";
import { $FluidIngredientKJS, $SizedFluidIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/fluids/crafting" {
    export class $TagFluidIngredient extends $FluidIngredient {
        tag(): $TagKey<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$TagFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $TagKey_<$Fluid>);
    }
    export interface $FluidIngredientType extends RegistryMarked<RegistryTypes.NeoforgeFluidIngredientTypeTag, RegistryTypes.NeoforgeFluidIngredientType> {}
    export class $FluidIngredientType<T extends $FluidIngredient> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientType}.
     */
    export type $FluidIngredientType_<T> = RegistryTypes.NeoforgeFluidIngredientType;
    export class $DataComponentFluidIngredient extends $FluidIngredient {
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Holder_<$Fluid>[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Holder_<$Fluid>[]): $FluidIngredient;
        static of<T>(arg0: boolean, arg1: $Supplier_<$DataComponentType<T>>, arg2: T, ...arg3: $Fluid_[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, arg2: $HolderSet_<$Fluid>): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, arg2: $HolderSet_<$Fluid>): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Fluid_[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Fluid_[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $FluidStack_): $FluidIngredient;
        static of<T>(arg0: boolean, arg1: $DataComponentType_<T>, arg2: T, ...arg3: $Fluid_[]): $FluidIngredient;
        isStrict(): boolean;
        components(): $DataComponentPredicate;
        generateStacks(): $Stream<$FluidStack>;
        fluids(): $HolderSet<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$DataComponentFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $HolderSet_<$Fluid>, arg1: $DataComponentPredicate, arg2: boolean);
        get strict(): boolean;
    }
    export class $EmptyFluidIngredient extends $FluidIngredient {
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$EmptyFluidIngredient>;
        static INSTANCE: $EmptyFluidIngredient;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
    }
    export class $SizedFluidIngredient implements $SizedFluidIngredientKJS {
        test(arg0: $FluidStack_): boolean;
        static of(arg0: $Fluid_, arg1: number): $SizedFluidIngredient;
        static of(arg0: $TagKey_<$Fluid>, arg1: number): $SizedFluidIngredient;
        static of(arg0: $FluidStack_): $SizedFluidIngredient;
        amount(): number;
        getFluids(): $FluidStack[];
        ingredient(): $FluidIngredient;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        static NESTED_CODEC: $Codec<$SizedFluidIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedFluidIngredient>;
        static FLAT_CODEC: $Codec<$SizedFluidIngredient>;
        constructor(arg0: $FluidIngredient_, arg1: number);
        get fluids(): $FluidStack[];
    }
    export class $FluidIngredient implements $Predicate<$FluidStack>, $FluidIngredientKJS {
        getStacks(): $FluidStack[];
        test(arg0: $FluidStack_): boolean;
        isEmpty(): boolean;
        static of(...arg0: $Fluid_[]): $FluidIngredient;
        static of(...arg0: $FluidStack_[]): $FluidIngredient;
        static of(): $FluidIngredient;
        static single(arg0: $FluidStack_): $FluidIngredient;
        static single(arg0: $Fluid_): $FluidIngredient;
        static single(arg0: $Holder_<$Fluid>): $FluidIngredient;
        static empty(): $FluidIngredient;
        getType(): $FluidIngredientType<never>;
        static tag(arg0: $TagKey_<$Fluid>): $FluidIngredient;
        isSimple(): boolean;
        hasNoFluids(): boolean;
        self(): $FluidIngredient;
        or(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        negate(): $Predicate<$FluidStack>;
        and(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        withAmount(amount: number): $SizedFluidIngredient;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $Codec<$FluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor();
        get stacks(): $FluidStack[];
        get type(): $FluidIngredientType<never>;
        get simple(): boolean;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredient}.
     */
    export type $FluidIngredient_ = $Fluid_ | RegExp | `#${RegistryTypes.FluidTag}` | `@${SpecialTypes.ModId}`;
    export class $IntersectionFluidIngredient extends $FluidIngredient {
        static of(...arg0: $FluidIngredient_[]): $FluidIngredient;
        children(): $List<$FluidIngredient>;
        generateStacks(): $Stream<$FluidStack>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$IntersectionFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $List_<$FluidIngredient_>);
    }
    export class $SingleFluidIngredient extends $FluidIngredient {
        fluid(): $Holder<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$SingleFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $Holder_<$Fluid>);
    }
    export class $CompoundFluidIngredient extends $FluidIngredient {
        static of(arg0: $List_<$FluidIngredient_>): $FluidIngredient;
        static of(arg0: $Stream<$FluidIngredient_>): $FluidIngredient;
        static of(...arg0: $FluidIngredient_[]): $FluidIngredient;
        children(): $List<$FluidIngredient>;
        generateStacks(): $Stream<$FluidStack>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$CompoundFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $List_<$FluidIngredient_>);
    }
    export class $DifferenceFluidIngredient extends $FluidIngredient {
        base(): $FluidIngredient;
        static of(arg0: $FluidIngredient_, arg1: $FluidIngredient_): $FluidIngredient;
        generateStacks(): $Stream<$FluidStack>;
        subtracted(): $FluidIngredient;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$DifferenceFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(arg0: $FluidIngredient_, arg1: $FluidIngredient_);
    }
}
