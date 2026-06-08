import { $Long2ObjectLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SerializingRegionBasedStorageExtension } from "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio";
import { $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $NbtException, $StreamTagVisitor, $Tag_, $Tag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IDirectStorage } from "@package/com/ishland/c2me/base/common/theinterface";
import { $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Supplier_, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ReportedException } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Throwable, $Enum, $Record, $AutoCloseable, $Runnable } from "@package/java/lang";
import { $IStorageIoWorker, $IRegionBasedStorage, $IRegionFile, $IVersionedChunkStorage, $ISerializingRegionBasedStorage } from "@package/com/ishland/c2me/base/mixin/access";
import { $ChunkEntities, $EntityPersistentStorage } from "@package/net/minecraft/world/level/entity";
import { $IPOIUnloading } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $ChunkPos, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $ByteArrayOutputStream, $DataOutputStream, $InputStream, $DataInputStream, $OutputStream } from "@package/java/io";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/world/level/chunk/storage" {
    export class $RegionFile implements $AutoCloseable, $IRegionFile {
        clear(arg0: $ChunkPos): void;
        flush(): void;
        write(arg0: $ChunkPos, arg1: $ByteBuffer): void;
        close(): void;
        getPath(): $Path;
        hasChunk(arg0: $ChunkPos): boolean;
        getChunkDataOutputStream(arg0: $ChunkPos): $DataOutputStream;
        getChunkDataInputStream(arg0: $ChunkPos): $DataInputStream;
        doesChunkExist(arg0: $ChunkPos): boolean;
        invokeWriteChunk(arg0: $ChunkPos, arg1: $ByteBuffer): void;
        getCompressionFormat(): $RegionFileVersion;
        usedSectors: $RegionBitmap;
        version: $RegionFileVersion;
        static SECTOR_INTS: number;
        info: $RegionStorageInfo;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $Path_, arg3: boolean);
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $Path_, arg3: $RegionFileVersion, arg4: boolean);
        get path(): $Path;
        get compressionFormat(): $RegionFileVersion;
    }
    export class $RegionFileStorage implements $AutoCloseable, $IRegionBasedStorage {
        flush(): void;
        info(): $RegionStorageInfo;
        write(arg0: $ChunkPos, arg1: $CompoundTag_): void;
        read(arg0: $ChunkPos): $CompoundTag;
        close(): void;
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): void;
        invokeGetRegionFile(arg0: $ChunkPos): $RegionFile;
        folder: $Path;
        regionCache: $Long2ObjectLinkedOpenHashMap<$RegionFile>;
        static ANVIL_EXTENSION: string;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: boolean);
    }
    export class $ChunkStorage implements $AutoCloseable, $IVersionedChunkStorage {
        write(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        read(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        static getVersion(arg0: $CompoundTag_): number;
        chunkScanner(): $ChunkScanAccess;
        storageInfo(): $RegionStorageInfo;
        flushWorker(): void;
        upgradeChunkTag(arg0: $ResourceKey_<$Level>, arg1: $Supplier_<$DimensionDataStorage>, arg2: $CompoundTag_, arg3: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): $CompoundTag;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        static injectDatafixingContext(arg0: $CompoundTag_, arg1: $ResourceKey_<$Level>, arg2: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): void;
        handleLegacyStructureIndex(arg0: $ChunkPos): void;
        getWorker(): $IOWorker;
        invokeGetStorageKey(): $RegionStorageInfo;
        fixerUpper: $DataFixer;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        worker: $IOWorker;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean);
    }
    export class $RegionStorageInfo extends $Record {
        type(): string;
        level(): string;
        dimension(): $ResourceKey<$Level>;
        withTypeSuffix(arg0: string): $RegionStorageInfo;
        constructor(arg0: string, arg1: $ResourceKey_<$Level>, arg2: string);
    }
    export class $IOWorker implements $ChunkScanAccess, $AutoCloseable, $IStorageIoWorker, $IDirectStorage {
        store(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        close(): void;
        synchronize(arg0: boolean): $CompletableFuture<void>;
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): $CompletableFuture<void>;
        loadAsync(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        storageInfo(): $RegionStorageInfo;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        setRawChunkData(pos: $ChunkPos, data: number[]): $CompletableFuture<any>;
        invokeGetOrComputeBlendingStatus(arg0: number, arg1: number): $CompletableFuture<$BitSet>;
        storage: $RegionFileStorage;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: boolean);
    }
    export class $ChunkSerializer {
        static write(arg0: $ServerLevel, arg1: $ChunkAccess): $CompoundTag;
        static read(arg0: $ServerLevel, arg1: $PoiManager, arg2: $RegionStorageInfo_, arg3: $ChunkPos, arg4: $CompoundTag_): $ProtoChunk;
        static packOffsets(arg0: $ShortList[]): $ListTag;
        static getChunkTypeFromTag(arg0: $CompoundTag_): $ChunkType;
        static SKY_LIGHT_TAG: string;
        static Z_POS_TAG: string;
        static SECTIONS_TAG: string;
        static IS_LIGHT_ON_TAG: string;
        static X_POS_TAG: string;
        static HEIGHTMAPS_TAG: string;
        static BLOCK_LIGHT_TAG: string;
        constructor();
    }
    export class $RecreatingSimpleRegionStorage extends $SimpleRegionStorage {
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $RegionStorageInfo_, arg3: $Path_, arg4: $DataFixer, arg5: boolean, arg6: $DataFixTypes_);
    }
    export class $IOWorker$PendingStore {
        copyData(): $CompoundTag;
        result: $CompletableFuture<void>;
        data: $CompoundTag;
        constructor(arg0: $CompoundTag_);
    }
    export class $ChunkIOErrorReporter {
        static createMisplacedChunkReport(arg0: $ChunkPos, arg1: $ChunkPos): $ReportedException;
    }
    export interface $ChunkIOErrorReporter {
        reportChunkSaveFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportChunkLoadFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportMisplacedChunk(arg0: $ChunkPos, arg1: $ChunkPos, arg2: $RegionStorageInfo_): void;
    }
    export class $ChunkScanAccess {
    }
    export interface $ChunkScanAccess {
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkScanAccess}.
     */
    export type $ChunkScanAccess_ = ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture<void>);
    export class $SectionStorage<R> implements $AutoCloseable, $ISerializingRegionBasedStorage, $IPOIUnloading, $SerializingRegionBasedStorageExtension {
        remove(arg0: number): void;
        get(arg0: number): (R) | undefined;
        update(pos: $ChunkPos, tag: $CompoundTag_): void;
        flush(arg0: $ChunkPos): void;
        close(): void;
        tick(arg0: $BooleanSupplier_): void;
        getOrCreate(arg0: number): R;
        hasWork(): boolean;
        getOrLoad(arg0: number): (R) | undefined;
        setDirty(arg0: number): void;
        c2me$unloadPoi(pos: $ChunkPos): void;
        outsideStoredRange(arg0: number): boolean;
        onSectionLoad(arg0: number): void;
        c2me$shouldUnloadPoi(pos: $ChunkPos): boolean;
        getStorageAccess(): $SimpleRegionStorage;
        levelHeightAccessor: $LevelHeightAccessor;
        constructor(arg0: $SimpleRegionStorage, arg1: $Function_<$Runnable, $Codec<R>>, arg2: $Function_<$Runnable, R>, arg3: $RegistryAccess, arg4: $ChunkIOErrorReporter, arg5: $LevelHeightAccessor);
        set dirty(value: number);
        get storageAccess(): $SimpleRegionStorage;
    }
    export class $ChunkSerializer$ChunkReadException extends $NbtException {
        constructor(arg0: string);
    }
    export class $RegionFile$CommitOp {
    }
    export interface $RegionFile$CommitOp {
    }
    /**
     * Values that may be interpreted as {@link $RegionFile$CommitOp}.
     */
    export type $RegionFile$CommitOp_ = (() => void);
    export class $RecreatingChunkStorage extends $ChunkStorage {
        fixerUpper: $DataFixer;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        worker: $IOWorker;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $RegionStorageInfo_, arg3: $Path_, arg4: $DataFixer, arg5: boolean);
    }
    export class $RegionFileVersion {
        wrap(arg0: $OutputStream): $OutputStream;
        wrap(arg0: $InputStream): $InputStream;
        getId(): number;
        static configure(arg0: string): void;
        static isValidVersion(arg0: number): boolean;
        static getSelected(): $RegionFileVersion;
        static fromId(arg0: number): $RegionFileVersion;
        static VERSION_GZIP: $RegionFileVersion;
        static VERSION_LZ4: $RegionFileVersion;
        static VERSION_DEFLATE: $RegionFileVersion;
        static VERSION_NONE: $RegionFileVersion;
        static VERSION_CUSTOM: $RegionFileVersion;
        static DEFAULT: $RegionFileVersion;
        get id(): number;
        static get selected(): $RegionFileVersion;
    }
    export class $RegionBitmap {
        free(arg0: number, arg1: number): void;
        allocate(arg0: number): number;
        force(arg0: number, arg1: number): void;
        getUsed(): $IntSet;
        constructor();
        get used(): $IntSet;
    }
    export class $SimpleRegionStorage implements $AutoCloseable {
        write(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        read(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        synchronize(arg0: boolean): $CompletableFuture<void>;
        storageInfo(): $RegionStorageInfo;
        upgradeChunkTag(arg0: $CompoundTag_, arg1: number): $CompoundTag;
        upgradeChunkTag(arg0: $Dynamic<$Tag_>, arg1: number): $Dynamic<$Tag>;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean, arg4: $DataFixTypes_);
    }
    export class $EntityStorage implements $EntityPersistentStorage<$Entity> {
        flush(arg0: boolean): void;
        close(): void;
        loadEntities(arg0: $ChunkPos): $CompletableFuture<$ChunkEntities<$Entity>>;
        storeEntities(arg0: $ChunkEntities<$Entity>): void;
        constructor(arg0: $SimpleRegionStorage, arg1: $ServerLevel, arg2: $Executor_);
    }
    export class $RegionFileVersion$StreamWrapper<O> {
    }
    export interface $RegionFileVersion$StreamWrapper<O> {
    }
    /**
     * Values that may be interpreted as {@link $RegionFileVersion$StreamWrapper}.
     */
    export type $RegionFileVersion$StreamWrapper_<O> = (() => void);
    export class $IOWorker$Priority extends $Enum<$IOWorker$Priority> {
    }
    /**
     * Values that may be interpreted as {@link $IOWorker$Priority}.
     */
    export type $IOWorker$Priority_ = "foreground" | "background" | "shutdown";
    export class $RegionFile$ChunkBuffer extends $ByteArrayOutputStream {
    }
}
