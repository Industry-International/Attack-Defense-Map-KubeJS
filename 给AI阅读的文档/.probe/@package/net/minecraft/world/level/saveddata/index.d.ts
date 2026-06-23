import { $File_ } from "@package/java/io";
import { $Supplier, $Supplier_, $BiFunction, $BiFunction_ } from "@package/java/util/function";
import { $DataFixTypes_, $DataFixTypes } from "@package/net/minecraft/util/datafix";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
export * as maps from "@package/net/minecraft/world/level/saveddata/maps";

declare module "@package/net/minecraft/world/level/saveddata" {
    export class $SavedData {
        save(file: $File_, registries: $HolderLookup$Provider): void;
        save(tag: $CompoundTag_, registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        isDirty(): boolean;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        setDirty(): void;
        /**
         * Sets the dirty state of this `SavedData`, whether it needs saving to disk.
         */
        setDirty(dirty: boolean): void;
        constructor();
    }
    export class $SavedData$Factory<T extends $SavedData> extends $Record {
        type(): $DataFixTypes;
        "constructor"(): $Supplier<T>;
        deserializer(): $BiFunction<$CompoundTag, $HolderLookup$Provider, T>;
        constructor(arg0: $Supplier_<T>, arg1: $BiFunction_<$CompoundTag, $HolderLookup$Provider, T>);
        constructor(arg0: $Supplier_<T>, deserializer: $BiFunction_<$CompoundTag, $HolderLookup$Provider, T>, type: $DataFixTypes_);
    }
}
