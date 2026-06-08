import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/info" {
    export class $RegistryDumpReport implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
    export class $BlockListReport implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $ItemListReport implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $PacketReport implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
    export class $CommandsReport implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $BiomeParametersDumpReport implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
}
