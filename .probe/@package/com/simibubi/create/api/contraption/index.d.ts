import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $Holder$Reference } from "@package/net/minecraft/core";
import { RegistryTypes, RegistryMarked } from "@special/types";
export * as storage from "@package/com/simibubi/create/api/contraption/storage";
export * as transformable from "@package/com/simibubi/create/api/contraption/transformable";

declare module "@package/com/simibubi/create/api/contraption" {
    export class $ContraptionType {
        is(arg0: $TagKey_<$ContraptionType>): boolean;
        static fromType(arg0: string): $Contraption;
        factory: $Supplier<$Contraption>;
        holder: $Holder$Reference<$ContraptionType>;
        constructor(arg0: $Supplier_<$Contraption>);
    }
    /**
     * Values that may be interpreted as {@link $ContraptionType}.
     */
    export type $ContraptionType_ = RegistryTypes.CreateContraptionType;
    export interface $ContraptionType extends RegistryMarked<RegistryTypes.CreateContraptionTypeTag, RegistryTypes.CreateContraptionType> {}
}
