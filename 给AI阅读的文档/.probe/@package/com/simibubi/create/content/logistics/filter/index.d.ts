import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";

declare module "@package/com/simibubi/create/content/logistics/filter" {
    export class $FilterItemStack {
        test(arg0: $Level_, arg1: $ItemStack_): boolean;
        test(arg0: $Level_, arg1: $FluidStack_): boolean;
        test(arg0: $Level_, arg1: $FluidStack_, arg2: boolean): boolean;
        test(arg0: $Level_, arg1: $ItemStack_, arg2: boolean): boolean;
        isEmpty(): boolean;
        static of(arg0: $ItemStack_): $FilterItemStack;
        static of(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FilterItemStack;
        static empty(): $FilterItemStack;
        item(): $ItemStack;
        fluid(arg0: $Level_): $FluidStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        isFilterItem(): boolean;
        get filterItem(): boolean;
    }
}
