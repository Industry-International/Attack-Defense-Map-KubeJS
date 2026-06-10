import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/com/simibubi/create/api/schematic/nbt" {
    export class $PartialSafeNBT {
    }
    export interface $PartialSafeNBT {
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
    }
    /**
     * Values that may be interpreted as {@link $PartialSafeNBT}.
     */
    export type $PartialSafeNBT_ = ((arg0: $CompoundTag, arg1: $HolderLookup$Provider) => void);
}
