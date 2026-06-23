import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $List_ } from "@package/java/util";

declare module "@package/com/simibubi/create/api/equipment/goggles" {
    export class $IHaveHoveringInformation {
    }
    export interface $IHaveHoveringInformation extends $IHaveCustomOverlayIcon {
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
    }
    export class $IHaveGoggleInformation {
    }
    export interface $IHaveGoggleInformation extends $IHaveCustomOverlayIcon {
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
    }
    export class $IHaveCustomOverlayIcon {
    }
    export interface $IHaveCustomOverlayIcon {
        getIcon(arg0: boolean): $ItemStack;
    }
}
