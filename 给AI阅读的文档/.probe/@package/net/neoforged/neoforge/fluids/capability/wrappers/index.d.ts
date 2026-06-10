import { $Level_ } from "@package/net/minecraft/world/level";
import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BucketPickup, $LiquidBlockContainer } from "@package/net/minecraft/world/level/block";
import { $VoidFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/net/neoforged/neoforge/fluids/capability/wrappers" {
    export class $FluidBucketWrapper implements $IFluidHandlerItem {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getContainer(): $ItemStack;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        getFluid(): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        canFillFluidType(arg0: $FluidStack_): boolean;
        constructor(arg0: $ItemStack_);
        get container(): $ItemStack;
        get tanks(): number;
        get fluid(): $FluidStack;
    }
    export class $CauldronWrapper implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get tanks(): number;
    }
    export class $BlockWrapper$LiquidContainerBlockWrapper extends $VoidFluidHandler {
        static INSTANCE: $VoidFluidHandler;
        constructor(arg0: $LiquidBlockContainer, arg1: $Level_, arg2: $BlockPos_);
    }
    export class $BlockWrapper extends $VoidFluidHandler {
        static INSTANCE: $VoidFluidHandler;
        constructor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_);
    }
    export class $BucketPickupHandlerWrapper implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        constructor(arg0: $Player, arg1: $BucketPickup, arg2: $Level_, arg3: $BlockPos_);
        get tanks(): number;
    }
}
