import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Map, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Triplet } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/fluids" {
    export class $FluidContainerList implements $Iterable<$FluidContainerList$Category> {
        iterator(): $Iterator<$FluidContainerList$Category>;
        getEmpty(arg0: $Item_): ($Item) | undefined;
        getFilled(arg0: $Item_): ($Item) | undefined;
        getCategories(): $List<$FluidContainerList$Category>;
        getPossibleEmpty(): $Collection<$Item>;
        getPossibleFilled(): $Collection<$Item>;
        getCategoryFromFilled(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getCategoryFromEmpty(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        spliterator(): $Spliterator<$FluidContainerList$Category>;
        forEach(arg0: $Consumer_<$FluidContainerList$Category>): void;
        static CODEC: $Codec<$FluidContainerList>;
        constructor(arg0: $List_<$FluidContainerList$Category>);
        constructor();
        [Symbol.iterator](): Iterator<$FluidContainerList$Category>
        get categories(): $List<$FluidContainerList$Category>;
        get possibleEmpty(): $Collection<$Item>;
        get possibleFilled(): $Collection<$Item>;
    }
    export class $SoftFluid {
        isEnabled(): boolean;
        isEquivalent(arg0: $Holder_<$Fluid>): boolean;
        isColored(): boolean;
        isFood(): boolean;
        getLuminosity(): number;
        afterInit(): void;
        getTranslatedName(): $Component;
        getStillTexture(): $ResourceLocation;
        getFlowingTexture(): $ResourceLocation;
        getTintColor(): number;
        getContainerList(): $FluidContainerList;
        getEmptyContainer(arg0: $Item_): ($Item) | undefined;
        getFoodProvider(): $FoodProvider;
        getVanillaFluid(): $Holder<$Fluid>;
        /**
         * @deprecated
         */
        isEmptyFluid(): boolean;
        getTextureOverride(): $ResourceLocation;
        getFilledContainer(arg0: $Item_): ($Item) | undefined;
        getEmissivity(): number;
        getTintMethod(): $SoftFluid$TintMethod;
        static getRenderingData(arg0: $ResourceLocation_): $Triplet<$ResourceLocation, $ResourceLocation, number>;
        getEquivalentFluids(): $HolderSet<$Fluid>;
        getPreservedComponents(): $HolderSet<$DataComponentType<never>>;
        getAverageTextureTintColor(): number;
        static getFluidSpecificAttributes(arg0: $Fluid_): $Pair<number, $Component>;
        static BOTTLE_COUNT: number;
        isGenerated: boolean;
        static CODEC: $Codec<$SoftFluid>;
        static BUCKET_COUNT: number;
        static HOLDER_CODEC: $Codec<$Holder<$SoftFluid>>;
        static TRANSLATABLE_COMPONENT: $Codec<$Component>;
        static BOWL_COUNT: number;
        static WATER_BUCKET_COUNT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoftFluid>>;
        constructor(arg0: $Holder_<$Fluid>);
        get enabled(): boolean;
        get colored(): boolean;
        get food(): boolean;
        get luminosity(): number;
        get translatedName(): $Component;
        get stillTexture(): $ResourceLocation;
        get flowingTexture(): $ResourceLocation;
        get tintColor(): number;
        get containerList(): $FluidContainerList;
        get foodProvider(): $FoodProvider;
        get vanillaFluid(): $Holder<$Fluid>;
        get emptyFluid(): boolean;
        get textureOverride(): $ResourceLocation;
        get emissivity(): number;
        get tintMethod(): $SoftFluid$TintMethod;
        get equivalentFluids(): $HolderSet<$Fluid>;
        get preservedComponents(): $HolderSet<$DataComponentType<never>>;
        get averageTextureTintColor(): number;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid}.
     */
    export type $SoftFluid_ = RegistryTypes.MoonlightSoftFluid;
    export class $FluidContainerList$Category {
        isEmpty(): boolean;
        getFillSound(): $SoundEvent;
        /**
         * @deprecated
         */
        getAmount(): number;
        getEmptySound(): $SoundEvent;
        getCapacity(): number;
        getEmptyContainer(): $Item;
        getFilledItems(): $List<$Item>;
        getFirstFilled(): ($Item) | undefined;
        static CODEC: $Codec<$FluidContainerList$Category>;
        get empty(): boolean;
        get fillSound(): $SoundEvent;
        get amount(): number;
        get emptySound(): $SoundEvent;
        get capacity(): number;
        get emptyContainer(): $Item;
        get filledItems(): $List<$Item>;
        get firstFilled(): ($Item) | undefined;
    }
    export interface $SoftFluid extends RegistryMarked<RegistryTypes.MoonlightSoftFluidTag, RegistryTypes.MoonlightSoftFluid> {}
    export class $SoftFluid$TintMethod extends $Enum<$SoftFluid$TintMethod> implements $StringRepresentable {
        static values(): $SoftFluid$TintMethod[];
        static valueOf(arg0: string): $SoftFluid$TintMethod;
        getSerializedName(): string;
        appliesToStill(): boolean;
        appliesToFlowing(): boolean;
        getRemappedEnumConstantName(): string;
        static FLOWING: $SoftFluid$TintMethod;
        static CODEC: $Codec<$SoftFluid$TintMethod>;
        static STILL_AND_FLOWING: $SoftFluid$TintMethod;
        static NO_TINT: $SoftFluid$TintMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid$TintMethod}.
     */
    export type $SoftFluid$TintMethod_ = "no_tint" | "flowing" | "still_and_flowing";
    export class $FoodProvider {
        isEmpty(): boolean;
        static create(arg0: $Item_, arg1: number): $FoodProvider;
        consume(arg0: $Player, arg1: $Level_, arg2: $Consumer_<$ItemStack>): boolean;
        getFoodItem(): $Item;
        getDivider(): number;
        static CODEC: $Codec<$FoodProvider>;
        static CUSTOM_PROVIDERS: $Map<$Item, $FoodProvider>;
        static EMPTY: $FoodProvider;
        get empty(): boolean;
        get foodItem(): $Item;
        get divider(): number;
    }
}
