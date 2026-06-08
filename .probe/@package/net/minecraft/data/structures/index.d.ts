import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Path_, $Path } from "@package/java/nio/file";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Iterable_, $Record, $RuntimeException } from "@package/java/lang";
import { $Collection_ } from "@package/java/util";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/structures" {
    export class $SnbtDatafixer {
        static main(arg0: string[]): void;
        constructor();
    }
    export class $NbtToSnbt implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        static writeSnbt(arg0: $CachedOutput_, arg1: $Path_, arg2: string): void;
        static convertStructure(arg0: $CachedOutput_, arg1: $Path_, arg2: string, arg3: $Path_): $Path;
        constructor(arg0: $PackOutput, arg1: $Collection_<$Path_>);
        get name(): string;
    }
    export class $SnbtToNbt$StructureConversionException extends $RuntimeException {
    }
    export class $StructureUpdater implements $SnbtToNbt$Filter {
        static update(arg0: string, arg1: $CompoundTag_): $CompoundTag;
        apply(arg0: string, arg1: $CompoundTag_): $CompoundTag;
        constructor();
    }
    export class $SnbtToNbt$Filter {
    }
    export interface $SnbtToNbt$Filter {
        apply(arg0: string, arg1: $CompoundTag_): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $SnbtToNbt$Filter}.
     */
    export type $SnbtToNbt$Filter_ = ((arg0: string, arg1: $CompoundTag) => $CompoundTag_);
    export class $SnbtToNbt implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        addFilter(arg0: $SnbtToNbt$Filter_): $SnbtToNbt;
        constructor(arg0: $PackOutput, arg1: $Iterable_<$Path>);
        get name(): string;
    }
    export class $SnbtToNbt$TaskResult extends $Record {
    }
}
