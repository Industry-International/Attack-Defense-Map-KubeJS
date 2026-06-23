import { $Gson, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $FilterInputStream, $InputStream, $BufferedReader } from "@package/java/io";
import { $PipelineReloadableResourceManagerAccessor } from "@package/foundry/veil/mixin/pipeline/accessor";
import { $Logger } from "@package/org/slf4j";
import { $ProfileResults, $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $List, $Map_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $ZipEntry, $ZipFile } from "@package/java/util/zip";
import { $Unit_, $Unit, $ResourceLocationPattern } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $Predicate_ } from "@package/java/util/function";
import { $PackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IFakeIResource$V1, $IFakeIResource$V2, $IFakeIResourceManager$V1, $IFakeIResourceManager$V2 } from "@package/customskinloader/fake/itf";
import { $Path_ } from "@package/java/nio/file";
import { $PackResources, $PackType_, $PackType } from "@package/net/minecraft/server/packs";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FabricLifecycledResourceManager, $FabricResource } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Enum, $Record, $AutoCloseable, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/server/packs/resources" {
    export class $ResourceProvider {
        static fromMap(resources: $Map_<$ResourceLocation_, $Resource>): $ResourceProvider;
        static EMPTY: $ResourceProvider;
    }
    export interface $ResourceProvider {
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        open(location: $ResourceLocation_): $InputStream;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
    }
    /**
     * Values that may be interpreted as {@link $ResourceProvider}.
     */
    export type $ResourceProvider_ = ((arg0: $ResourceLocation) => ($Resource) | undefined);
    export class $PreparableReloadListener$PreparationBarrier {
    }
    export interface $PreparableReloadListener$PreparationBarrier {
        wait<T>(backgroundResult: T): $CompletableFuture<T>;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener$PreparationBarrier}.
     */
    export type $PreparableReloadListener$PreparationBarrier_ = ((arg0: any) => $CompletableFuture<any>);
    export class $FallbackResourceManager$ResourceWithSource extends $Record {
    }
    export class $ResourceMetadata$Builder {
        put<T>(key: $MetadataSectionSerializer<T>, value: T): $ResourceMetadata$Builder;
        build(): $ResourceMetadata;
        constructor();
    }
    export class $SimpleReloadInstance$StateFactory<S> {
    }
    export interface $SimpleReloadInstance$StateFactory<S> {
        create(preperationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, listener: $PreparableReloadListener_, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<S>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleReloadInstance$StateFactory}.
     */
    export type $SimpleReloadInstance$StateFactory_<S> = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $PreparableReloadListener, arg3: $Executor, arg4: $Executor) => $CompletableFuture<S>);
    export class $IoSupplier<T> {
        static create(path: $Path_): $IoSupplier<$InputStream>;
        static create(zipFile: $ZipFile, zipEntry: $ZipEntry): $IoSupplier<$InputStream>;
    }
    export interface $IoSupplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $IoSupplier}.
     */
    export type $IoSupplier_<T> = (() => T);
    export class $PreparableReloadListener {
    }
    export interface $PreparableReloadListener {
        getName(): string;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener}.
     */
    export type $PreparableReloadListener_ = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor) => $CompletableFuture<void>);
    export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $JsonElement>> {
        static scanDirectory(resourceManager: $ResourceManager, name: string, gson: $Gson, output: $Map_<$ResourceLocation_, $JsonElement_>): void;
        getPreparedPath(arg0: $ResourceLocation_): $ResourceLocation;
        constructor(gson: $Gson, directory: string);
    }
    export class $FallbackResourceManager$1ResourceWithSourceAndIndex extends $Record {
    }
    export class $FallbackResourceManager$LeakedResourceWarningInputStream extends $FilterInputStream {
    }
    export class $ResourceMetadata {
        static fromJsonStream(stream: $InputStream): $ResourceMetadata;
        static EMPTY_SUPPLIER: $IoSupplier<$ResourceMetadata>;
        static EMPTY: $ResourceMetadata;
    }
    export interface $ResourceMetadata {
        copySections(serializers: $Collection_<$MetadataSectionSerializer<never>>): $ResourceMetadata;
        getSection<T>(serializer: $MetadataSectionSerializer<T>): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ResourceMetadata}.
     */
    export type $ResourceMetadata_ = ((arg0: $MetadataSectionSerializer<any>) => (T) | undefined);
    export class $ResourceManagerReloadListener {
    }
    export interface $ResourceManagerReloadListener extends $PreparableReloadListener {
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManagerReloadListener}.
     */
    export type $ResourceManagerReloadListener_ = ((arg0: $ResourceManager) => void);
    export class $MultiPackResourceManager implements $CloseableResourceManager, $FabricLifecycledResourceManager {
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        fabric_getResourceType(): $PackType;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        open(location: $ResourceLocation_): $InputStream;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        namespacedManagers: $Map<string, $FallbackResourceManager>;
        packs: $List<$PackResources>;
        constructor(type: $PackType_, packs: $List_<$PackResources>);
        get namespaces(): $Set<string>;
    }
    export class $CloseableResourceManager {
    }
    export interface $CloseableResourceManager extends $ResourceManager, $AutoCloseable {
        close(): void;
    }
    export class $SimpleReloadInstance<S> implements $ReloadInstance {
        done(): $CompletableFuture<never>;
        static of(resourceManager: $ResourceManager, listeners: $List_<$PreparableReloadListener_>, backgroundExecutor: $Executor_, gameExecutor: $Executor_, alsoWaitedFor: $CompletableFuture<$Unit_>): $SimpleReloadInstance<void>;
        static create(resourceManager: $ResourceManager, listeners: $List_<$PreparableReloadListener_>, backgroundExecutor: $Executor_, gameExecutor: $Executor_, alsoWaitedFor: $CompletableFuture<$Unit_>, profiled: boolean): $ReloadInstance;
        getActualProgress(): number;
        isDone(): boolean;
        checkExceptions(): void;
        allDone: $CompletableFuture<$List<S>>;
        preparingListeners: $Set<$PreparableReloadListener>;
        allPreparations: $CompletableFuture<$Unit>;
        constructor(backgroundExecutor: $Executor_, gameExecutor: $Executor_, resourceManager: $ResourceManager, listeners: $List_<$PreparableReloadListener_>, stateFactory: $SimpleReloadInstance$StateFactory_<S>, alsoWaitedFor: $CompletableFuture<$Unit_>);
        get actualProgress(): number;
    }
    export class $FallbackResourceManager$PackEntry extends $Record {
    }
    export class $FallbackResourceManager implements $ResourceManager {
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        push(resources: $PackResources): void;
        push(resources: $PackResources, filter: $Predicate_<$ResourceLocation>): void;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        static parseMetadata(streamSupplier: $IoSupplier_<$InputStream>): $ResourceMetadata;
        pushFilterOnly(name: string, filter: $Predicate_<$ResourceLocation>): void;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        static getMetadataLocation(location: $ResourceLocation_): $ResourceLocation;
        open(location: $ResourceLocation_): $InputStream;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        fallbacks: $List<$FallbackResourceManager$PackEntry>;
        static LOGGER: $Logger;
        type: $PackType;
        constructor(type: $PackType_, namespace: string);
        get namespaces(): $Set<string>;
    }
    export class $ProfiledReloadInstance extends $SimpleReloadInstance<$ProfiledReloadInstance$State> {
        allDone: $CompletableFuture<$List<$ProfiledReloadInstance$State>>;
        preparingListeners: $Set<$PreparableReloadListener>;
        allPreparations: $CompletableFuture<$Unit>;
        constructor(resourceManager: $ResourceManager, listeners: $List_<$PreparableReloadListener_>, backgroundExecutor: $Executor_, gameExecutor: $Executor_, alsoWaitedFor: $CompletableFuture<$Unit_>);
    }
    export class $ProfiledReloadInstance$State {
        preparationResult: $ProfileResults;
        reloadResult: $ProfileResults;
        name: string;
        reloadNanos: $AtomicLong;
        preparationNanos: $AtomicLong;
        constructor(name: string, preperationResult: $ProfileResults, reloadResult: $ProfileResults, preperationNanos: $AtomicLong, reloadNanos: $AtomicLong);
    }
    export class $ResourceManager$Empty extends $Enum<$ResourceManager$Empty> implements $ResourceManager {
        static values(): $ResourceManager$Empty[];
        static valueOf(arg0: string): $ResourceManager$Empty;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        open(arg0: $ResourceLocation_): $InputStream;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        static INSTANCE: $ResourceManager$Empty;
        get namespaces(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManager$Empty}.
     */
    export type $ResourceManager$Empty_ = "instance";
    export class $FallbackResourceManager$EntryStack extends $Record {
    }
    export class $ReloadableResourceManager implements $ResourceManager, $AutoCloseable, $PipelineReloadableResourceManagerAccessor {
        getResource(location: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        registerReloadListenerIfNotPresent(listener: $PreparableReloadListener_): void;
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        createReload(backgroundExecutor: $Executor_, gameExecutor: $Executor_, waitingFor: $CompletableFuture<$Unit_>, resourcePacks: $List_<$PackResources>): $ReloadInstance;
        registerReloadListener(listener: $PreparableReloadListener_): void;
        open(location: $ResourceLocation_): $InputStream;
        getResourceOrThrow(location: $ResourceLocation_): $Resource;
        openAsReader(location: $ResourceLocation_): $BufferedReader;
        getListeners(): $List<$PreparableReloadListener>;
        type: $PackType;
        constructor(type: $PackType_);
        get namespaces(): $Set<string>;
        get listeners(): $List<$PreparableReloadListener>;
    }
    /**
     * @deprecated
     */
    export class $SimplePreparableReloadListener<T> extends $ContextAwareReloadListener implements $PreparableReloadListener {
        apply(object: T, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): T;
        fabric_getRegistryLookup(): $HolderLookup$Provider;
        fabric_applyResourceConditions(arg0: $ResourceManager, arg1: $ProfilerFiller, arg2: $Object, arg3: $HolderLookup$Provider): void;
        constructor();
    }
    export class $ResourceManager {
    }
    export interface $ResourceManager extends $ResourceProvider, $IFakeIResourceManager$V1, $IFakeIResourceManager$V2 {
        listResources(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        listResourceStacks(path: string, filter: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        getResourceStack(location: $ResourceLocation_): $List<$Resource>;
        listPacks(): $Stream<$PackResources>;
        get namespaces(): $Set<string>;
    }
    export class $Resource implements $IFakeIResource$V1, $IFakeIResource$V2, $FabricResource {
        metadata(): $ResourceMetadata;
        source(): $PackResources;
        open(): $InputStream;
        knownPackInfo(): ($KnownPack) | undefined;
        openAsReader(): $BufferedReader;
        sourcePackId(): string;
        getFabricPackSource(): $PackSource;
        constructor(source: $PackResources, streamSupplier: $IoSupplier_<$InputStream>);
        constructor(source: $PackResources, streamSupplier: $IoSupplier_<$InputStream>, metadataSupplier: $IoSupplier_<$ResourceMetadata>);
        get fabricPackSource(): $PackSource;
    }
    export class $ResourceFilterSection {
        isNamespaceFiltered(namespace: string): boolean;
        isPathFiltered(namespace: string): boolean;
        static TYPE: $MetadataSectionType<$ResourceFilterSection>;
        constructor(blockList: $List_<$ResourceLocationPattern>);
    }
    export class $ReloadInstance {
    }
    export interface $ReloadInstance {
        done(): $CompletableFuture<never>;
        isDone(): boolean;
        getActualProgress(): number;
        checkExceptions(): void;
        get actualProgress(): number;
    }
}
