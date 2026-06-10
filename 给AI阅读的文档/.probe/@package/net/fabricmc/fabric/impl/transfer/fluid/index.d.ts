import { $FluidVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/fluid";

declare module "@package/net/fabricmc/fabric/impl/transfer/fluid" {
    export class $FluidVariantCache {
    }
    export interface $FluidVariantCache {
        fabric_getCachedFluidVariant(): $FluidVariant;
    }
    /**
     * Values that may be interpreted as {@link $FluidVariantCache}.
     */
    export type $FluidVariantCache_ = (() => $FluidVariant);
}
