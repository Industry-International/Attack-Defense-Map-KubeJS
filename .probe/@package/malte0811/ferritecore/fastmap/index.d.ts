import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ReferenceSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Map_, $Map$Entry, $Collection_ } from "@package/java/util";
import { $Comparable, $Object, $Comparable_ } from "@package/java/lang";

declare module "@package/malte0811/ferritecore/fastmap" {
    export class $FastMap<Value> {
        getValue(arg0: number, arg1: $Object): $Comparable<never>;
        getValue<T extends $Comparable<T>>(arg0: number, arg1: $Property<T>): T;
        getKey(arg0: number): $FastMapKey<never>;
        "with"(arg0: number, arg1: $Property<never>, arg2: $Object): Value;
        getEntry(arg0: number, arg1: number): $Map$Entry<$Property<never>, $Comparable<never>>;
        isSingleState(): boolean;
        getPropertySet(): $ReferenceSet<$Property<never>>;
        numProperties(): number;
        getIndexOf(arg0: $Map_<$Property<never>, $Comparable_<never>>): number;
        constructor(arg0: $Collection_<$Property<never>>, arg1: $Map_<$Map_<$Property<never>, $Comparable_<never>>, Value>, arg2: boolean);
        get singleState(): boolean;
        get propertySet(): $ReferenceSet<$Property<never>>;
    }
    export class $FastMapKey<T extends $Comparable<T>> {
        getProperty(): $Property<T>;
        getValue(arg0: number): T;
        numValues(): number;
        get property(): $Property<T>;
    }
}
