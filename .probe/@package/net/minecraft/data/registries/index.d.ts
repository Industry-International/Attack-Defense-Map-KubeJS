import { $HolderLookup$Provider, $RegistrySetBuilder, $RegistrySetBuilder$PatchedRegistries, $HolderLookup, $HolderGetter, $Registry } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Set_, $List, $List_, $Map_ } from "@package/java/util";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/registries" {
    export class $VanillaRegistries {
        static createLookup(): $HolderLookup$Provider;
        static validateThatAllBiomeFeaturesHaveBiomeFilter(arg0: $HolderLookup$Provider): void;
        static validateThatAllBiomeFeaturesHaveBiomeFilter(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderLookup<$Biome_>): void;
        static DATAPACK_REGISTRY_KEYS: $List<$ResourceKey<$Registry<never>>>;
        static BUILDER: $RegistrySetBuilder;
        constructor();
    }
    export class $TradeRebalanceRegistries {
        static createLookup(arg0: $CompletableFuture<$HolderLookup$Provider>): $CompletableFuture<$RegistrySetBuilder$PatchedRegistries>;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $RegistriesDatapackGenerator implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        /**
         * @deprecated
         */
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $Set_<string>, arg3: $Map_<$ResourceKey_<never>, $List_<$ICondition>>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $Set_<string>);
        get name(): string;
    }
    export class $RegistryPatchGenerator {
        static createLookup(arg0: $CompletableFuture<$HolderLookup$Provider>, arg1: $RegistrySetBuilder): $CompletableFuture<$RegistrySetBuilder$PatchedRegistries>;
        constructor();
    }
}
