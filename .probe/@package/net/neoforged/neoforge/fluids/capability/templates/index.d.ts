import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $IFluidHandlerModifiable } from "@package/com/lowdragmc/lowdraglib2/misc";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleFluidContent, $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $DataComponentType } from "@package/net/minecraft/core/component";

declare module "@package/net/neoforged/neoforge/fluids/capability/templates" {
    export class $FluidHandlerItemStackSimple$SwapEmpty extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $FluidHandlerItemStack$Consumable extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $FluidTank implements $IFluidHandler, $IFluidTank, $IFluidHandlerModifiable {
        getCapacity(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isEmpty(): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getSpace(): number;
        setCapacity(arg0: number): $FluidTank;
        getFluidAmount(): number;
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FluidTank;
        isFluidValid(arg0: $FluidStack_): boolean;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CompoundTag;
        setFluid(arg0: $FluidStack_): void;
        setValidator(arg0: $Predicate_<$FluidStack>): $FluidTank;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        getFluid(): $FluidStack;
        supportsDrain(arg0: number): boolean;
        supportsFill(arg0: number): boolean;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Predicate_<$FluidStack>);
        get empty(): boolean;
        get space(): number;
        get fluidAmount(): number;
        get tanks(): number;
        set validator(value: $Predicate_<$FluidStack>);
    }
    export class $FluidHandlerItemStack implements $IFluidHandlerItem {
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getContainer(): $ItemStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        getFluid(): $FluidStack;
        canFillFluidType(arg0: $FluidStack_): boolean;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get container(): $ItemStack;
        get tanks(): number;
        get fluid(): $FluidStack;
    }
    export class $FluidHandlerItemStack$SwapEmpty extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $EmptyFluidHandler implements $IFluidHandler {
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        static INSTANCE: $EmptyFluidHandler;
        get tanks(): number;
    }
    export class $FluidHandlerItemStackSimple implements $IFluidHandlerItem {
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getContainer(): $ItemStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        getFluid(): $FluidStack;
        canFillFluidType(arg0: $FluidStack_): boolean;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get container(): $ItemStack;
        get tanks(): number;
        get fluid(): $FluidStack;
    }
    export class $FluidHandlerItemStackSimple$Consumable extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $VoidFluidHandler implements $IFluidHandler {
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        static INSTANCE: $VoidFluidHandler;
        constructor();
        get tanks(): number;
    }
}
