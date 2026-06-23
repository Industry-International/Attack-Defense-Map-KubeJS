import { $IFluidHandler, $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";

declare module "@package/com/simibubi/create/foundation/fluid" {
    export class $CombinedTankWrapper implements $IFluidHandler {
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getTankCapacity(arg0: number): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        enforceVariety(): $CombinedTankWrapper;
        constructor(...arg0: $IFluidHandler[]);
        get tanks(): number;
    }
}
