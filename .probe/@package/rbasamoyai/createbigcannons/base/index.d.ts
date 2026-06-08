import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Comparable } from "@package/java/lang";

declare module "@package/rbasamoyai/createbigcannons/base" {
    export class $PropertySetter<T extends $Comparable<T>> {
        static of<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T): $PropertySetter<T>;
        applyTo(arg0: $BlockState_): $BlockState;
        constructor(arg0: $Property<T>, arg1: T);
    }
}
