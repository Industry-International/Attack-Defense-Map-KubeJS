import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $List_ } from "@package/java/util";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
export * as packs from "@package/net/minecraft/data/advancements/packs";

declare module "@package/net/minecraft/data/advancements" {
    /**
     * @deprecated
     */
    export class $AdvancementProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $List_<$AdvancementSubProvider_>);
        get name(): string;
    }
    export class $AdvancementSubProvider {
        static createPlaceholder(arg0: string): $AdvancementHolder;
    }
    export interface $AdvancementSubProvider {
        generate(arg0: $HolderLookup$Provider, arg1: $Consumer_<$AdvancementHolder>): void;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementSubProvider}.
     */
    export type $AdvancementSubProvider_ = ((arg0: $HolderLookup$Provider, arg1: $Consumer<$AdvancementHolder>) => void);
}
