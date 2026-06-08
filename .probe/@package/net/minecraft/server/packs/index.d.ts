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
        getResource(arg0: $PackType_, arg1: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_): void;
        getNamespaces(arg0: $PackType_): $Set<string>;
        asProvider(): $ResourceProvider;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        getRootResource(...arg0: string[]): $IoSupplier<$InputStream>;
        veil$isStatic(): boolean;
        veil$getIcon(): $IoSupplier<any>;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$blurIcon(): boolean;
        listRawPaths(arg0: $PackType_, arg1: $ResourceLocation_, arg2: $Consumer_<$Path>): void;
        veil$getRawResourceRoots(): $List<any>;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        veil$listPacks(): $Stream<$PackResources>;
        isHidden(): boolean;
        constructor(arg0: $PackLocationInfo_, arg1: $BuiltInMetadata, arg2: $Set_<string>, arg3: $List_<$Path_>, arg4: $Map_<$PackType_, $List_<$Path_>>);
        get hidden(): boolean;
    }
    export class $PathPackResources$PathResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        constructor(arg0: $Path_);
    }
    export class $DownloadQueue$LogEntry extends $Record {
    }
    export class $DownloadCacheCleaner$PathAndTime extends $Record {
    }
    export class $DownloadCacheCleaner$PathAndPriority extends $Record {
    }
    export class $DownloadQueue implements $AutoCloseable {
        close(): void;
        downloadBatch(arg0: $DownloadQueue$BatchConfig_, arg1: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>): $CompletableFuture<$DownloadQueue$BatchResult>;
        constructor(arg0: $Path_);
    }
    export class $DownloadQueue$BatchResult extends $Record {
        failed(): $Set<$UUID>;
        downloaded(): $Map<$UUID, $Path>;
        constructor();
        constructor(arg0: $Map_<$UUID_, $Path_>, arg1: $Set_<$UUID_>);
    }
    export class $BuiltInMetadata {
        get<T>(arg0: $MetadataSectionSerializer<T>): T;
        static of<T>(arg0: $MetadataSectionSerializer<T>, arg1: T): $BuiltInMetadata;
        static of<T1, T2>(arg0: $MetadataSectionSerializer<T1>, arg1: T1, arg2: $MetadataSectionSerializer<T2>, arg3: T2): $BuiltInMetadata;
        static of(): $BuiltInMetadata;
    }
    export class $DownloadCacheCleaner {
        static vacuumCacheDir(arg0: $Path_, arg1: number): void;
        constructor();
    }
    export class $CompositePackResources implements $PackResources {
        getResource(arg0: $PackType_, arg1: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_): void;
        getNamespaces(arg0: $PackType_): $Set<string>;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        getRootResource(...arg0: string[]): $IoSupplier<$InputStream>;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        isHidden(): boolean;
        constructor(arg0: $PackResources, arg1: $List_<$PackResources>);
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
        mfix$getOrCreateZipFile(): $ZipFile;
        mfix$getFile(): $File;
        file: $File;
        constructor(arg0: $File_);
        get orCreateZipFile(): $ZipFile;
    }
    export class $PackResources {
        static PACK_META: string;
        static METADATA_EXTENSION: string;
    }
    export interface $PackResources extends $AutoCloseable, $IPackResourcesExtension {
        getResource(arg0: $PackType_, arg1: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_): void;
        getNamespaces(arg0: $PackType_): $Set<string>;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        getRootResource(...arg0: string[]): $IoSupplier<$InputStream>;
    }
    export class $FilePackResources extends $AbstractPackResources {
        static extractNamespace(arg0: string, arg1: string): string;
        static LOGGER: $Logger;
        constructor(arg0: $PackLocationInfo_, arg1: $FilePackResources$SharedZipFileAccess, arg2: string);
    }
    export class $DownloadQueue$FileInfoEntry extends $Record {
    }
    export class $OverlayMetadataSection extends $Record {
        overlays(): $List<$OverlayMetadataSection$OverlayEntry>;
        overlaysForVersion(arg0: number): $List<string>;
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
        createChatLink(arg0: boolean, arg1: $Component_): $Component;
        constructor(arg0: string, arg1: $Component_, arg2: $PackSource, arg3: ($KnownPack_) | undefined);
    }
    export class $VanillaPackResourcesBuilder {
        build(arg0: $PackLocationInfo_): $VanillaPackResources;
        pushUniversalPath(arg0: $Path_): $VanillaPackResourcesBuilder;
        setMetadata(arg0: $BuiltInMetadata): $VanillaPackResourcesBuilder;
        exposeNamespace(...arg0: string[]): $VanillaPackResourcesBuilder;
        pushAssetPath(arg0: $PackType_, arg1: $Path_): $VanillaPackResourcesBuilder;
        pushJarResources(): $VanillaPackResourcesBuilder;
        applyDevelopmentConfig(): $VanillaPackResourcesBuilder;
        pushClasspathResources(arg0: $PackType_, arg1: $Class<never>): $VanillaPackResourcesBuilder;
        static developmentConfig: $Consumer<$VanillaPackResourcesBuilder>;
        constructor();
        set metadata(value: $BuiltInMetadata);
    }
    export class $PathPackResources extends $AbstractPackResources implements $PackResources, $PackResourcesExtension, $ICachingResourcePack {
        static getResource(arg0: $ResourceLocation_, arg1: $Path_): $IoSupplier<$InputStream>;
        invalidateCache(): void;
        static listPath(arg0: string, arg1: $Path_, arg2: $List_<string>, arg3: $PackResources$ResourceOutput_): void;
        veil$isStatic(): boolean;
        static validatePath(arg0: $Path_): boolean;
        veil$getIcon(): $IoSupplier<any>;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$blurIcon(): boolean;
        veil$getRawResourceRoots(): $List<any>;
        veil$listPacks(): $Stream<$PackResources>;
        constructor(arg0: $PackLocationInfo_, arg1: $Path_);
    }
    export class $FilePackResources$FileResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        constructor(arg0: $Path_);
        constructor(arg0: $File_);
    }
    export class $DownloadQueue$DownloadRequest extends $Record {
        hash(): $HashCode;
        url(): $URL;
        constructor(arg0: $URL, arg1: $HashCode);
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
        getSerializedName(): string;
        getDirectory(): string;
        getRemappedEnumConstantName(): string;
        static CLIENT_RESOURCES: $PackType;
        static SERVER_DATA: $PackType;
        get serializedName(): string;
        get directory(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackType}.
     */
    export type $PackType_ = "client_resources" | "server_data";
    export class $AbstractPackResources implements $PackResources {
        location(): $PackLocationInfo;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        static getMetadataFromStream<T>(arg0: $MetadataSectionSerializer<T>, arg1: $InputStream): T;
        packId(): string;
        knownPackInfo(): ($KnownPack) | undefined;
        isHidden(): boolean;
        constructor(arg0: $PackLocationInfo_);
        get hidden(): boolean;
    }
    export class $PackSelectionConfig extends $Record {
        required(): boolean;
        fixedPosition(): boolean;
        defaultPosition(): $Pack$Position;
        constructor(arg0: boolean, arg1: $Pack$Position_, arg2: boolean);
    }
    export class $OverlayMetadataSection$OverlayEntry extends $Record {
        format(): $InclusiveRange<number>;
        overlay(): string;
        isApplicable(arg0: number): boolean;
        static CODEC: $Codec<$OverlayMetadataSection$OverlayEntry>;
        constructor(format: $InclusiveRange_<number>, overlay: string);
    }
}
