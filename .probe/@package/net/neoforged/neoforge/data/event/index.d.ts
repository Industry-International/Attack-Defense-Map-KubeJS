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
        makeGenerator(arg0: $Function_<$Path, $Path>, arg1: boolean): $DataGenerator;
        isFlat(): boolean;
        runAll(): void;
        /**
         * @deprecated
         */
        constructor(arg0: $Set_<string>, arg1: $Path_, arg2: $Collection_<$Path_>, arg3: $CompletableFuture<$HolderLookup$Provider>, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean);
        constructor(arg0: $Set_<string>, arg1: $Path_, arg2: $Collection_<$Path_>, arg3: $CompletableFuture<$HolderLookup$Provider>, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: string, arg11: $File_, arg12: $Collection_<$Path_>);
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
        getGenerator(): $DataGenerator;
        getInputs(): $Collection<$Path>;
        getModContainer(): $ModContainer;
        getMods(): $Set<string>;
        createProvider<T extends $DataProvider>(arg0: $GatherDataEvent$DataProviderFromOutput_<T>): T;
        createProvider<T extends $DataProvider>(arg0: $GatherDataEvent$DataProviderFromOutputLookup_<T>): T;
        createDatapackRegistryObjects(arg0: $RegistrySetBuilder, arg1: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, arg2: $Set_<string>): void;
        createDatapackRegistryObjects(arg0: $RegistrySetBuilder, arg1: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, arg2: $Set_<string>): void;
        createDatapackRegistryObjects(arg0: $RegistrySetBuilder, arg1: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>): void;
        createDatapackRegistryObjects(arg0: $RegistrySetBuilder): void;
        createDatapackRegistryObjects(arg0: $RegistrySetBuilder, arg1: $Set_<string>): void;
        createDatapackRegistryObjects(arg0: $RegistrySetBuilder, arg1: $Map_<$ResourceKey_<never>, $List_<$ICondition>>): void;
        getResourceManager(arg0: $PackType_): $ResourceManager;
        getExistingFileHelper(): $ExistingFileHelper;
        createBlockAndItemTags(arg0: $GatherDataEvent$DataProviderFromOutputLookup_<$TagsProvider<$Block>>, arg1: $GatherDataEvent$ItemTagsProvider_): void;
        includeReports(): boolean;
        getLookupProvider(): $CompletableFuture<$HolderLookup$Provider>;
        includeServer(): boolean;
        includeClient(): boolean;
        includeDev(): boolean;
        constructor(arg0: $ModContainer, arg1: $DataGenerator, arg2: $GatherDataEvent$DataGeneratorConfig, arg3: $ExistingFileHelper);
        get generator(): $DataGenerator;
        get inputs(): $Collection<$Path>;
        get modContainer(): $ModContainer;
        get mods(): $Set<string>;
        get existingFileHelper(): $ExistingFileHelper;
        get lookupProvider(): $CompletableFuture<$HolderLookup$Provider>;
    }
    export class $GatherDataEvent$ItemTagsProvider {
    }
    export interface $GatherDataEvent$ItemTagsProvider {
        create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>): $TagsProvider<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $GatherDataEvent$ItemTagsProvider}.
     */
    export type $GatherDataEvent$ItemTagsProvider_ = ((arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup<$Block>>) => $TagsProvider<$Item_>);
}
