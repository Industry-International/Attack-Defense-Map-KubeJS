import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/metadata" {
    export class $PackMetadataGenerator implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        add<T>(arg0: $MetadataSectionType<T>, arg1: T): $PackMetadataGenerator;
        static forFeaturePack(arg0: $PackOutput, arg1: $Component_, arg2: $FeatureFlagSet): $PackMetadataGenerator;
        static forFeaturePack(arg0: $PackOutput, arg1: $Component_): $PackMetadataGenerator;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
}
