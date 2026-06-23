import { $File_ } from "@package/java/io";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $TagsProvider, $TagsProvider$TagLookup_, $TagsProvider$TagLookup } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $DataProvider, $PackOutput, $DataGenerator } from "@package/net/minecraft/data";
import { $Consumer_, $BiConsumer, $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $RegistrySetBuilder } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/data/event" {
    export class $GatherDataEvent$DataGeneratorConfig {
        getInputs(): $Collection<$Path>;
        getMods(): $Set<string>;
        makeGenerator(pathEnhancer: $Function_<$Path, $Path>, shouldExecute: boolean): $DataGenerator;
        isFlat(): boolean;
        runAll(): void;
        /**
         * @deprecated
         */
        constructor(mods: $Set_<string>, path: $Path_, inputs: $Collection_<$Path_>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, server: boolean, client: boolean, dev: boolean, reports: boolean, validate: boolean, flat: boolean);
        constructor(mods: $Set_<string>, path: $Path_, inputs: $Collection_<$Path_>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, server: boolean, client: boolean, dev: boolean, reports: boolean, validate: boolean, flat: boolean, assetIndex: string, assetsDir: $File_, existingPacks: $Collection_<$Path_>);
        get inputs(): $Collection<$Path>;
        get mods(): $Set<string>;
        get flat(): boolean;
    }
    export class $GatherDataEvent$GatherDataEventGenerator {
    }
    export interface $GatherDataEvent$GatherDataEventGenerator {
        create(arg0: $ModContainer, arg1: $DataGenerator, arg2: $GatherDataEvent$DataGeneratorConfig): $GatherDataEvent;
    }
    /**
     * Values that may be interpreted as {@link $GatherDataEvent$GatherDataEventGenerator}.
     */
    export type $GatherDataEvent$GatherDataEventGenerator_ = ((arg0: $ModContainer, arg1: $DataGenerator, arg2: $GatherDataEvent$DataGeneratorConfig) => $GatherDataEvent);
    export class $GatherDataEvent$DataProviderFromOutputLookup<T extends $DataProvider> {
    }
    export interface $GatherDataEvent$DataProviderFromOutputLookup<T extends $DataProvider> {
        create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): T;
    }
    /**
     * Values that may be interpreted as {@link $GatherDataEvent$DataProviderFromOutputLookup}.
     */
    export type $GatherDataEvent$DataProviderFromOutputLookup_<T> = ((arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>) => T);
    export class $GatherDataEvent$DataProviderFromOutput<T extends $DataProvider> {
    }
    export interface $GatherDataEvent$DataProviderFromOutput<T extends $DataProvider> {
        create(arg0: $PackOutput): T;
    }
    /**
     * Values that may be interpreted as {@link $GatherDataEvent$DataProviderFromOutput}.
     */
    export type $GatherDataEvent$DataProviderFromOutput_<T> = ((arg0: $PackOutput) => T);
    export class $GatherDataEvent extends $Event implements $IModBusEvent {
        validate(): boolean;
        addProvider<T extends $DataProvider>(arg0: T): T;
        getInputs(): $Collection<$Path>;
        createBlockAndItemTags(arg0: $GatherDataEvent$DataProviderFromOutputLookup_<$TagsProvider<$Block>>, arg1: $GatherDataEvent$ItemTagsProvider_): void;
        getModContainer(): $ModContainer;
        getGenerator(): $DataGenerator;
        getMods(): $Set<string>;
        createDatapackRegistryObjects(datapackEntriesBuilder: $RegistrySetBuilder, conditions: $Map_<$ResourceKey_<never>, $List_<$ICondition>>): void;
        createDatapackRegistryObjects(datapackEntriesBuilder: $RegistrySetBuilder, modIds: $Set_<string>): void;
        createDatapackRegistryObjects(datapackEntriesBuilder: $RegistrySetBuilder): void;
        createDatapackRegistryObjects(datapackEntriesBuilder: $RegistrySetBuilder, conditionsBuilder: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>): void;
        createDatapackRegistryObjects(datapackEntriesBuilder: $RegistrySetBuilder, conditions: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, modIds: $Set_<string>): void;
        createDatapackRegistryObjects(datapackEntriesBuilder: $RegistrySetBuilder, conditionsBuilder: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, modIds: $Set_<string>): void;
        includeDev(): boolean;
        includeReports(): boolean;
        getResourceManager(packType: $PackType_): $ResourceManager;
        getExistingFileHelper(): $ExistingFileHelper;
        getLookupProvider(): $CompletableFuture<$HolderLookup$Provider>;
        includeClient(): boolean;
        includeServer(): boolean;
        createProvider<T extends $DataProvider>(arg0: $GatherDataEvent$DataProviderFromOutputLookup_<T>): T;
        createProvider<T extends $DataProvider>(arg0: $GatherDataEvent$DataProviderFromOutput_<T>): T;
        constructor(arg0: $ModContainer, arg1: $DataGenerator, arg2: $GatherDataEvent$DataGeneratorConfig, arg3: $ExistingFileHelper);
        get inputs(): $Collection<$Path>;
        get modContainer(): $ModContainer;
        get generator(): $DataGenerator;
        get mods(): $Set<string>;
        get existingFileHelper(): $ExistingFileHelper;
        get lookupProvider(): $CompletableFuture<$HolderLookup$Provider>;
    }
    export class $GatherDataEvent$ItemTagsProvider {
    }
    export interface $GatherDataEvent$ItemTagsProvider {
        create(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, contentsGetter: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>): $TagsProvider<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $GatherDataEvent$ItemTagsProvider}.
     */
    export type $GatherDataEvent$ItemTagsProvider_ = ((arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup<$Block>>) => $TagsProvider<$Item_>);
}
