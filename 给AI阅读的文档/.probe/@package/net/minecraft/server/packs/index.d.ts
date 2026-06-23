import { $File, $InputStream, $File_ } from "@package/java/io";
import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $HashFunction, $HashCode } from "@package/com/google/common/hash";
import { $ICachingResourcePack } from "@package/org/embeddedt/modernfix/resources";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $IoSupplier, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $PackResourcesExtension$PackResourceConsumer_, $PackResourcesExtension } from "@package/foundry/veil/ext";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $ZipFile } from "@package/java/util/zip";
import { $SharedZipFileAccessAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/resourcepacks";
import { $InclusiveRange, $StringRepresentable, $HttpUtil$DownloadProgressListener, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $BiConsumer, $Consumer, $Consumer_ } from "@package/java/util/function";
import { $Pack$Position_, $PackSource, $Pack$Metadata_, $Pack$Position, $KnownPack_, $Pack$ResourcesSupplier, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $IPackResourcesExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Proxy, $URL } from "@package/java/net";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $AutoCloseable, $Class } from "@package/java/lang";
export * as repository from "@package/net/minecraft/server/packs/repository";
export * as linkfs from "@package/net/minecraft/server/packs/linkfs";
export * as resources from "@package/net/minecraft/server/packs/resources";
export * as metadata from "@package/net/minecraft/server/packs/metadata";

declare module "@package/net/minecraft/server/packs" {
    export class $VanillaPackResources implements $PackResources, $PackResourcesExtension {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        veil$getRawResourceRoots(): $List<any>;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        listRawPaths(packType: $PackType_, packLocation: $ResourceLocation_, output: $Consumer_<$Path>): void;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$blurIcon(): boolean;
        veil$getIcon(): $IoSupplier<any>;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$isStatic(): boolean;
        getNamespaces(type: $PackType_): $Set<string>;
        asProvider(): $ResourceProvider;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        veil$listPacks(): $Stream<$PackResources>;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        constructor(location: $PackLocationInfo_, metadata: $BuiltInMetadata, namespaces: $Set_<string>, rootPaths: $List_<$Path_>, pathsForType: $Map_<$PackType_, $List_<$Path_>>);
        get hidden(): boolean;
    }
    export class $PathPackResources$PathResourcesSupplier implements $Pack$ResourcesSupplier {
        openPrimary(location: $PackLocationInfo_): $PackResources;
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        constructor(content: $Path_);
    }
    export class $DownloadQueue$LogEntry extends $Record {
    }
    export class $DownloadCacheCleaner$PathAndTime extends $Record {
    }
    export class $DownloadCacheCleaner$PathAndPriority extends $Record {
    }
    export class $DownloadQueue implements $AutoCloseable {
        close(): void;
        downloadBatch(batchConfig: $DownloadQueue$BatchConfig_, downloads: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>): $CompletableFuture<$DownloadQueue$BatchResult>;
        constructor(cacheDir: $Path_);
    }
    export class $DownloadQueue$BatchResult extends $Record {
        failed(): $Set<$UUID>;
        downloaded(): $Map<$UUID, $Path>;
        constructor();
        constructor(arg0: $Map_<$UUID_, $Path_>, arg1: $Set_<$UUID_>);
    }
    export class $BuiltInMetadata {
        get<T>(serializer: $MetadataSectionSerializer<T>): T;
        static of<T>(serializer: $MetadataSectionSerializer<T>, value: T): $BuiltInMetadata;
        static of<T1, T2>(serializer1: $MetadataSectionSerializer<T1>, value1: T1, serializer2: $MetadataSectionSerializer<T2>, value2: T2): $BuiltInMetadata;
        static of(): $BuiltInMetadata;
    }
    export class $DownloadCacheCleaner {
        static vacuumCacheDir(path: $Path_, maxEntries: number): void;
        constructor();
    }
    export class $CompositePackResources implements $PackResources {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        getNamespaces(type: $PackType_): $Set<string>;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        constructor(primaryPackResources: $PackResources, packResourcesStack: $List_<$PackResources>);
        get hidden(): boolean;
    }
    export class $FeatureFlagsMetadataSection extends $Record {
        flags(): $FeatureFlagSet;
        static TYPE: $MetadataSectionType<$FeatureFlagsMetadataSection>;
        constructor(arg0: $FeatureFlagSet);
    }
    export class $FilePackResources$SharedZipFileAccess implements $AutoCloseable, $SharedZipFileAccessAccessor {
        finalize(): void;
        close(): void;
        getOrCreateZipFile(): $ZipFile;
        mfix$getFile(): $File;
        mfix$getOrCreateZipFile(): $ZipFile;
        file: $File;
        constructor(file: $File_);
        get orCreateZipFile(): $ZipFile;
    }
    export class $PackResources {
        static PACK_META: string;
        static METADATA_EXTENSION: string;
    }
    export interface $PackResources extends $AutoCloseable, $IPackResourcesExtension {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        knownPackInfo(): ($KnownPack) | undefined;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        getNamespaces(type: $PackType_): $Set<string>;
        packId(): string;
    }
    export class $FilePackResources extends $AbstractPackResources {
        static extractNamespace(directory: string, name: string): string;
        static LOGGER: $Logger;
        constructor(location: $PackLocationInfo_, zipFileAccess: $FilePackResources$SharedZipFileAccess, prefix: string);
    }
    export class $DownloadQueue$FileInfoEntry extends $Record {
    }
    export class $OverlayMetadataSection extends $Record {
        overlays(): $List<$OverlayMetadataSection$OverlayEntry>;
        overlaysForVersion(version: number): $List<string>;
        static NEOFORGE_TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        static TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        constructor(overlays: $List_<$OverlayMetadataSection$OverlayEntry_>);
    }
    export class $DownloadQueue$BatchConfig extends $Record {
        maxSize(): number;
        proxy(): $Proxy;
        listener(): $HttpUtil$DownloadProgressListener;
        headers(): $Map<string, string>;
        hashFunction(): $HashFunction;
        constructor(arg0: $HashFunction, arg1: number, arg2: $Map_<string, string>, arg3: $Proxy, arg4: $HttpUtil$DownloadProgressListener);
    }
    export class $PackLocationInfo extends $Record {
        id(): string;
        source(): $PackSource;
        title(): $Component;
        knownPackInfo(): ($KnownPack) | undefined;
        createChatLink(enabled: boolean, text: $Component_): $Component;
        constructor(arg0: string, arg1: $Component_, arg2: $PackSource, arg3: ($KnownPack_) | undefined);
    }
    export class $VanillaPackResourcesBuilder {
        build(location: $PackLocationInfo_): $VanillaPackResources;
        applyDevelopmentConfig(): $VanillaPackResourcesBuilder;
        pushClasspathResources(packType: $PackType_, clazz: $Class<never>): $VanillaPackResourcesBuilder;
        setMetadata(metadata: $BuiltInMetadata): $VanillaPackResourcesBuilder;
        exposeNamespace(...namespaces: string[]): $VanillaPackResourcesBuilder;
        pushAssetPath(packType: $PackType_, path: $Path_): $VanillaPackResourcesBuilder;
        pushJarResources(): $VanillaPackResourcesBuilder;
        pushUniversalPath(path: $Path_): $VanillaPackResourcesBuilder;
        static developmentConfig: $Consumer<$VanillaPackResourcesBuilder>;
        constructor();
        set metadata(value: $BuiltInMetadata);
    }
    export class $PathPackResources extends $AbstractPackResources implements $PackResources, $PackResourcesExtension, $ICachingResourcePack {
        static getResource(location: $ResourceLocation_, path: $Path_): $IoSupplier<$InputStream>;
        veil$getRawResourceRoots(): $List<any>;
        static validatePath(path: $Path_): boolean;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$blurIcon(): boolean;
        veil$getIcon(): $IoSupplier<any>;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$isStatic(): boolean;
        invalidateCache(): void;
        static listPath(namespace: string, namespacePath: $Path_, decomposedPath: $List_<string>, resourceOutput: $PackResources$ResourceOutput_): void;
        veil$listPacks(): $Stream<$PackResources>;
        constructor(location: $PackLocationInfo_, root: $Path_);
    }
    export class $FilePackResources$FileResourcesSupplier implements $Pack$ResourcesSupplier {
        openPrimary(location: $PackLocationInfo_): $PackResources;
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        constructor(content: $Path_);
        constructor(content: $File_);
    }
    export class $DownloadQueue$DownloadRequest extends $Record {
        hash(): $HashCode;
        url(): $URL;
        constructor(arg0: $URL, arg1: $HashCode | null);
    }
    export class $PackResources$ResourceOutput {
    }
    export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
    }
    /**
     * Values that may be interpreted as {@link $PackResources$ResourceOutput}.
     */
    export type $PackResources$ResourceOutput_ = (() => void);
    export class $PackType extends $Enum<$PackType> implements $StringRepresentable {
        static values(): $PackType[];
        static valueOf(arg0: string): $PackType;
        getDirectory(): string;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CLIENT_RESOURCES: $PackType;
        static SERVER_DATA: $PackType;
        get directory(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackType}.
     */
    export type $PackType_ = "client_resources" | "server_data";
    export class $AbstractPackResources implements $PackResources {
        location(): $PackLocationInfo;
        static getMetadataFromStream<T>(deserializer: $MetadataSectionSerializer<T>, inputStream: $InputStream): T;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        constructor(location: $PackLocationInfo_);
        get hidden(): boolean;
    }
    export class $PackSelectionConfig extends $Record {
        required(): boolean;
        defaultPosition(): $Pack$Position;
        fixedPosition(): boolean;
        constructor(arg0: boolean, arg1: $Pack$Position_, arg2: boolean);
    }
    export class $OverlayMetadataSection$OverlayEntry extends $Record {
        format(): $InclusiveRange<number>;
        overlay(): string;
        isApplicable(version: number): boolean;
        static CODEC: $Codec<$OverlayMetadataSection$OverlayEntry>;
        constructor(format: $InclusiveRange_<number>, overlay: string);
    }
}
