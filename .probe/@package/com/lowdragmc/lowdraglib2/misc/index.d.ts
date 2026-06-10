import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";

declare module "@package/com/lowdragmc/lowdraglib2/misc" {
    export class $IFluidHandlerModifiable {
    }
    export interface $IFluidHandlerModifiable extends $IFluidHandler {
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        supportsFill(arg0: number): boolean;
        supportsDrain(arg0: number): boolean;
    }
}
