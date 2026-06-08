import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";

declare module "@package/com/mumu17/cavwb" {
    export class $ModBlockPropertyTypes$ModBlockPropertyType<T> extends $Record {
        id(): number;
        defaultValue(): T;
        codec(): $Codec<T>;
        constructor(id: number, codec: $Codec<T>, defaultValue: T);
    }
    /**
     * Values that may be interpreted as {@link $ModBlockPropertyTypes$ModBlockPropertyType}.
     */
    export type $ModBlockPropertyTypes$ModBlockPropertyType_<T> = RegistryTypes.CavwbVariableBlockProperties;
    export interface $ModBlockPropertyTypes$ModBlockPropertyType extends RegistryMarked<RegistryTypes.CavwbVariableBlockPropertiesTag, RegistryTypes.CavwbVariableBlockProperties> {}
}
