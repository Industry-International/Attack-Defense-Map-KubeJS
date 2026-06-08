import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Enum } from "@package/java/lang";
export * as templates from "@package/net/neoforged/neoforge/fluids/capability/templates";
export * as wrappers from "@package/net/neoforged/neoforge/fluids/capability/wrappers";

declare module "@package/net/neoforged/neoforge/fluids/capability" {
    export class $IFluidHandler {
    }
    export interface $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        getFluidInTank(arg0: number): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        get tanks(): number;
    }
    export class $IFluidHandler$FluidAction extends $Enum<$IFluidHandler$FluidAction> {
        static values(): $IFluidHandler$FluidAction[];
        static valueOf(arg0: string): $IFluidHandler$FluidAction;
        execute(): boolean;
        simulate(): boolean;
        static EXECUTE: $IFluidHandler$FluidAction;
        static SIMULATE: $IFluidHandler$FluidAction;
    }
    /**
     * Values that may be interpreted as {@link $IFluidHandler$FluidAction}.
     */
    export type $IFluidHandler$FluidAction_ = "execute" | "simulate";
    export class $IFluidHandlerItem {
    }
    export interface $IFluidHandlerItem extends $IFluidHandler {
        getContainer(): $ItemStack;
        get container(): $ItemStack;
    }
}
