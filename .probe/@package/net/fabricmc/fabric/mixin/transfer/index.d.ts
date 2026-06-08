import { $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/fabricmc/fabric/mixin/transfer" {
    export class $ContainerComponentAccessor {
    }
    export interface $ContainerComponentAccessor {
        fabric_getStacks(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $ContainerComponentAccessor}.
     */
    export type $ContainerComponentAccessor_ = (() => $NonNullList<$ItemStack_>);
    export class $BundleContentsComponentAccessor {
        static getOccupancy(arg0: $ItemStack_): $Fraction;
    }
    export interface $BundleContentsComponentAccessor {
    }
    export class $DoubleInventoryAccessor {
    }
    export interface $DoubleInventoryAccessor {
        fabric_getFirst(): $Container;
        fabric_getSecond(): $Container;
    }
}
