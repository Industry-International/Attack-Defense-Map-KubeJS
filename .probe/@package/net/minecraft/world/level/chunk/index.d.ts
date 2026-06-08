import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $ProtoChunkExtension } from "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $PalettedContainerExt } from "@package/com/moulberry/axiom/hooks";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $WeakReference } from "@package/java/lang/ref";
import { $BitStorage, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $AttachmentType, $IAttachmentHolder, $AttachmentType_, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $ExtendedChunk } from "@package/com/sk89q/worldedit/neoforge/internal";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ExtendedPalettedContainer } from "@package/org/embeddedt/modernfix/chunk";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AttachmentType as $AttachmentType$1 } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ChunkAccessAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Map$Entry, $Set, $List, $EnumSet, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $Supplier_, $Consumer_, $Predicate_, $BiConsumer_, $Function_, $UnaryOperator_, $BiPredicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup, $Direction8 } from "@package/net/minecraft/core";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $IChunkGenerator, $IWorldChunk, $IChunkSection, $IUpgradeData } from "@package/com/ishland/c2me/base/mixin/access";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $Logger } from "@package/org/slf4j";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $IChunkTimeSave } from "@package/com/smoothchunk/world";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelChunkAuxiliaryLightManager, $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        factory(): $Palette$Factory;
        bits(): number;
        createData(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: number): $PalettedContainer$Data<T>;
        constructor(factory: $Palette$Factory_, bits: number);
    }
    export class $DataLayer {
        get(arg0: number, arg1: number, arg2: number): number;
        isEmpty(): boolean;
        fill(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        copy(): $DataLayer;
        getData(): number[];
        isDefinitelyFilledWith(arg0: number): boolean;
        isDefinitelyHomogenous(): boolean;
        layerToString(arg0: number): string;
        data: number[];
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor(arg0: number[]);
        constructor(arg0: number);
        constructor();
        get empty(): boolean;
        get definitelyHomogenous(): boolean;
    }
    export class $ChunkGenerator implements $IChunkGenerator {
        validate(): void;
        codec(): $MapCodec<$ChunkGenerator>;
        createState(arg0: $HolderLookup<$StructureSet_>, arg1: $RandomState, arg2: number): $ChunkGeneratorStructureState;
        getBiomeSource(): $BiomeSource;
        getSeaLevel(): number;
        findNearestMapStructure(arg0: $ServerLevel, arg1: $HolderSet_<$Structure>, arg2: $BlockPos_, arg3: number, arg4: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        getGenDepth(): number;
        getMobsAt(arg0: $Holder_<$Biome>, arg1: $StructureManager, arg2: $MobCategory_, arg3: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getMinY(): number;
        getBaseHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        getBaseColumn(arg0: number, arg1: number, arg2: $LevelHeightAccessor, arg3: $RandomState): $NoiseColumn;
        spawnOriginalMobs(arg0: $WorldGenRegion): void;
        fillFromNoise(arg0: $Blender, arg1: $RandomState, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        buildSurface(arg0: $WorldGenRegion, arg1: $StructureManager, arg2: $RandomState, arg3: $ChunkAccess): void;
        getSpawnHeight(arg0: $LevelHeightAccessor): number;
        createStructures(arg0: $RegistryAccess, arg1: $ChunkGeneratorStructureState, arg2: $StructureManager, arg3: $ChunkAccess, arg4: $StructureTemplateManager): void;
        addDebugScreenInfo(arg0: $List_<string>, arg1: $RandomState, arg2: $BlockPos_): void;
        createBiomes(arg0: $RandomState, arg1: $Blender, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        createReferences(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkAccess): void;
        getFirstFreeHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        applyCarvers(arg0: $WorldGenRegion, arg1: number, arg2: $RandomState, arg3: $BiomeManager, arg4: $StructureManager, arg5: $ChunkAccess, arg6: $GenerationStep$Carving_): void;
        getFirstOccupiedHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(arg0: $Holder_<$Biome>): $BiomeGenerationSettings;
        applyBiomeDecoration(arg0: $WorldGenLevel, arg1: $ChunkAccess, arg2: $StructureManager): void;
        refreshFeaturesPerStep(): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(arg0: $BiomeSource);
        constructor(arg0: $BiomeSource, arg1: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        get seaLevel(): number;
        get genDepth(): number;
        get minY(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        onResize(arg0: number, arg1: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(arg0: number): $BlockState;
        setBlock(arg0: number, arg1: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        idFor(arg0: T): number;
        valueFor(arg0: number): T;
        get size(): number;
        get serializedSize(): number;
    }
    export class $ChunkGeneratorStructureState {
        randomState(): $RandomState;
        ensureStructuresGenerated(): void;
        getLevelSeed(): number;
        static createForNormal(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        static createForFlat(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        hasStructureChunkInRange(arg0: $Holder_<$StructureSet>, arg1: number, arg2: number, arg3: number): boolean;
        getRingPositionsFor(arg0: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        getPlacementsForStructure(arg0: $Holder_<$Structure>): $List<$StructurePlacement>;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        getStartForStructure(arg0: $Structure_): $StructureStart;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        storage(): ($LongStream) | undefined;
        paletteEntries(): $List<T>;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        saveTimePoint: number;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $LevelChunk, arg1: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        size(): number;
        getIndex(arg0: number, arg1: number, arg2: number): number;
        getConfiguration<A>(arg0: $IdMap<A>, arg1: number): $PalettedContainer$Configuration<A>;
        calculateBitsForSerialization<A>(arg0: $IdMap<A>, arg1: number): number;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static GLOBAL_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
        constructor(arg0: number);
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity {
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        getSkyLightSources(): $ChunkSkyLightSources;
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $IChunkTimeSave, $Trackable, $ChunkAccessAccessor {
        getLevel(): $Level;
        getData<T>(arg0: $AttachmentType_<T>): T;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getHighestFilledSectionIndex(): number;
        getSections(): $LevelChunkSection[];
        isLightCorrect(): boolean;
        hasPrimedHeightmap(arg0: $Heightmap$Types_): boolean;
        getBlendingData(): $BlendingData;
        setInhabitedTime(arg0: number): void;
        setLightCorrect(arg0: boolean): void;
        getPostProcessing(): $ShortList[];
        /**
         * @deprecated
         */
        carverBiome(arg0: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        getUpgradeData(): $UpgradeData;
        isUpgrading(): boolean;
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
        getAllReferences(): $Map<any, any>;
        isYSpaceEmpty(arg0: number, arg1: number): boolean;
        getPersistedStatus(): $ChunkStatus;
        setBlockEntityNbt(arg0: $CompoundTag_): void;
        setBlendingData(arg0: $BlendingData): void;
        getBlockEntityNbt(arg0: $BlockPos_): $CompoundTag;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        setHeightmap(arg0: $Heightmap$Types_, arg1: number[]): void;
        setAllStarts(arg0: $Map_<$Structure_, $StructureStart>): void;
        isSectionEmpty(arg0: number): boolean;
        getSkyLightSources(): $ChunkSkyLightSources;
        getSection(arg0: number): $LevelChunkSection;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        addEntity(arg0: $Entity): void;
        hasAttachments(): boolean;
        atl$getBaseClass(): $Class<any>;
        hasData(arg0: $AttachmentType_<never>): boolean;
        getMinBuildHeight(): number;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        isOldNoiseGeneration(): boolean;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        getOrCreateNoiseChunk(arg0: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        hasAnyStructureReferences(): boolean;
        addPackedPostProcess(arg0: number, arg1: number): void;
        static getOrCreateOffsetList(arg0: $ShortList[], arg1: number): $ShortList;
        getListenerRegistry(arg0: number): $GameEventListenerRegistry;
        initializeLightSources(): void;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getStartForStructure(arg0: $Structure_): $StructureStart;
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
        getHighestGeneratedStatus(): $ChunkStatus;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_): void;
        getBlockEntityNbtForSaving(arg0: $BlockPos_, arg1: $HolderLookup$Provider): $CompoundTag;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        incrementInhabitedTime(arg0: number): void;
        markPosForPostprocessing(arg0: $BlockPos_): void;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        getPos(): $ChunkPos;
        setUnsaved(arg0: boolean): void;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getHeight(): number;
        getOrCreateHeightmapUnprimed(arg0: $Heightmap$Types_): $Heightmap;
        smoothchunk$setSaveTimePoint(arg0: number): void;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        smoothchunk$getNextSaveTime(): number;
        isUnsaved(): boolean;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        setBlockEntity(arg0: $BlockEntity): void;
        removeBlockEntity(arg0: $BlockPos_): void;
        setBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean): $BlockState;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        getInhabitedTime(): number;
        getBlockTicks(): $TickContainerAccess<$Block>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        handler$iaa000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        syncData(arg0: $AttachmentType_<never>): void;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionsCount(): number;
        getMaxBuildHeight(): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        removeAttached<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrThrow<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrSet<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        setAttached<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrGet<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        hasAttached(arg0: $AttachmentType$1<never>): boolean;
        getAttachedOrElse<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttached<A>(arg0: $AttachmentType$1<A>): A;
        modifyAttached<A>(arg0: $AttachmentType$1<A>, arg1: $UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        saveTimePoint: number;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: number, arg5: $LevelChunkSection[], arg6: $BlendingData);
        get level(): $Level;
        get highestFilledSectionIndex(): number;
        get upgrading(): boolean;
        get persistedStatus(): $ChunkStatus;
        get minBuildHeight(): number;
        get oldNoiseGeneration(): boolean;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get highestGeneratedStatus(): $ChunkStatus;
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get highestSectionPosition(): number;
        get pos(): $ChunkPos;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get maxLightLevel(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get maxSection(): number;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        copyFrom(arg0: $Palette<T>, arg1: $BitStorage): void;
        storage(): $BitStorage;
        getSerializedSize(): number;
        palette(): $Palette<T>;
        constructor(configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, palette: $Palette<T>);
        get serializedSize(): number;
    }
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ExtendedPalettedContainer<any>, $PalettedContainerROExtension<any>, $PalettedContainerExt {
        get(arg0: number): T;
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        set(arg0: number, arg1: number, arg2: number, arg3: T): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        getAndSet(arg0: number, arg1: number, arg2: number, arg3: T): T;
        release(): void;
        acquire(): void;
        getAll(arg0: $Consumer_<T>): void;
        recreate(): $PalettedContainer<T>;
        axiom$lock(): void;
        handler$iof000$axiom$acquire(ci: $CallbackInfo): void;
        pack(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        handler$iof000$axiom$release(ci: $CallbackInfo): void;
        static codecRO<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainerRO<T>>;
        static codecRW<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainer<T>>;
        onResize(arg0: number, arg1: T): number;
        sodium$copy(): $PalettedContainerRO<any>;
        axiom$unlock(): void;
        getSerializedSize(): number;
        sodium$unpack(arg0: $Object[]): void;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getAndSetUnchecked(arg0: number, arg1: number, arg2: number, arg3: T): T;
        maybeHas(arg0: $Predicate_<T>): boolean;
        mfix$getPalette(): $Palette<any>;
        data: $PalettedContainer$Data<T>;
        constructor(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainer$Configuration_<T>, arg3: $BitStorage, arg4: $List_<T>);
        constructor(arg0: $IdMap<T>, arg1: T, arg2: $PalettedContainer$Strategy);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(arg0: T, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData implements $IUpgradeData {
        isEmpty(): boolean;
        write(): $CompoundTag;
        static updateState(arg0: $BlockState_, arg1: $Direction_, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $BlockPos_): $BlockState;
        upgrade(arg0: $LevelChunk): void;
        getSidesToUpgrade(): $EnumSet<$Direction8>;
        getCenterIndicesToUpgrade(): number[][];
        static CHUNKY_FIXERS: $Set<$UpgradeData$BlockFixer>;
        static EMPTY: $UpgradeData;
        static MAP: $Map<$Block, $UpgradeData$BlockFixer>;
        constructor(arg0: $CompoundTag_, arg1: $LevelHeightAccessor);
        get empty(): boolean;
        get sidesToUpgrade(): $EnumSet<$Direction8>;
        get centerIndicesToUpgrade(): number[][];
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        write(arg0: $FriendlyByteBuf): void;
        getAll(arg0: $Consumer_<T>): void;
        recreate(): $PalettedContainer<T>;
        pack(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(arg0: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(arg0: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        idFor(arg0: T): number;
        valueFor(arg0: number): T;
        constructor(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: $List_<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(arg0: number);
    }
    export class $LevelChunkSection implements $IChunkSection {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        release(): void;
        acquire(): void;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        getSerializedSize(): number;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_, arg2: number, arg3: number, arg4: number): void;
        getStates(): $PalettedContainer<$BlockState>;
        maybeHas(arg0: $Predicate_<$BlockState>): boolean;
        hasOnlyAir(): boolean;
        readBiomes(arg0: $FriendlyByteBuf): void;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): $BlockState;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: boolean): $BlockState;
        isRandomlyTicking(): boolean;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        recalcBlockCounts(): void;
        isRandomlyTickingBlocks(): boolean;
        isRandomlyTickingFluids(): boolean;
        getBiomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
        getBlockStateContainer(): $PalettedContainer<$BlockState>;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(arg0: $PalettedContainer<$BlockState_>, arg1: $PalettedContainerRO<$Holder_<$Biome>>);
        constructor(arg0: $Registry<$Biome_>);
        get serializedSize(): number;
        get states(): $PalettedContainer<$BlockState>;
        get randomlyTicking(): boolean;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get randomlyTickingBlocks(): boolean;
        get randomlyTickingFluids(): boolean;
        get biomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
        get blockStateContainer(): $PalettedContainer<$BlockState>;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder, $ExtendedChunk, $IWorldChunk {
        isEmpty(): boolean;
        unregisterTickContainerFromLevel(arg0: $ServerLevel): void;
        replaceBiomes(arg0: $FriendlyByteBuf): void;
        runPostLoad(): void;
        setFullStatus(arg0: $Supplier_<$FullChunkStatus>): void;
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        unpackTicks(arg0: number): void;
        addAndRegisterBlockEntity(arg0: $BlockEntity): void;
        updateBlockEntityTicker<T extends $BlockEntity>(arg0: T): void;
        replaceWithPacketData(arg0: $FriendlyByteBuf, arg1: $CompoundTag_, arg2: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        postProcessGeneration(): void;
        registerTickContainerInLevel(arg0: $ServerLevel): void;
        isTicking(arg0: $BlockPos_): boolean;
        setLoaded(arg0: boolean): void;
        getFullStatus(): $FullChunkStatus;
        setBlockState(pos: $BlockPos_, state: $BlockState_, moved: boolean, update: boolean): $BlockState;
        clearAllBlockEntities(): void;
        redirect$hdc000$sable$getLightEngine(arg0: $ChunkSource): $LevelLightEngine;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        getAuxLightManager(arg0: $ChunkPos): $LevelChunkAuxiliaryLightManager;
        redirect$cfo000$worldedit$setBlockStateHook(target: $BlockState_, world: $Level_, pos: $BlockPos_, old: $BlockState_, move: boolean): void;
        getBlockEntity(arg0: $BlockPos_, arg1: $LevelChunk$EntityCreationType_): $BlockEntity;
        isLoadedToWorld(): boolean;
        upgradeData: $UpgradeData;
        xaero_wm_chunkClean: boolean;
        chunkPos: $ChunkPos;
        level: $Level;
        xaero_chunkClean: boolean;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        loaded: boolean;
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        saveTimePoint: number;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ServerLevel, arg1: $ProtoChunk, arg2: $LevelChunk$PostLoadProcessor_);
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $UpgradeData, arg3: $LevelChunkTicks<$Block_>, arg4: $LevelChunkTicks<$Fluid_>, arg5: number, arg6: $LevelChunkSection[], arg7: $LevelChunk$PostLoadProcessor_, arg8: $BlendingData);
        constructor(arg0: $Level_, arg1: $ChunkPos);
        get empty(): boolean;
        get loadedToWorld(): boolean;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        close(): void;
        tick(arg0: $BooleanSupplier_, arg1: boolean): void;
        getChunkNow(arg0: number, arg1: number): $LevelChunk;
        updateChunkForced(arg0: $ChunkPos, arg1: boolean): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: boolean): $LevelChunk;
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        hasChunk(arg0: number, arg1: number): boolean;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        getLightEngine(): $LevelLightEngine;
        gatherStats(): string;
        getLoadedChunksCount(): number;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        constructor();
        get lightEngine(): $LevelLightEngine;
        get loadedChunksCount(): number;
    }
    export class $ProtoChunk extends $ChunkAccess implements $ProtoChunkExtension {
        getEntities(): $List<$CompoundTag>;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        addEntity(arg0: $CompoundTag_): void;
        static unpackOffsetCoordinates(arg0: number, arg1: number, arg2: $ChunkPos): $BlockPos;
        setBlendingInfo(pos: $ChunkPos, bitSets: $List_<any>): void;
        getNeedBlending(): boolean;
        setPersistedStatus(arg0: $ChunkStatus_): void;
        setCarvingMask(arg0: $GenerationStep$Carving_, arg1: $CarvingMask): void;
        static packOffsetCoordinates(arg0: $BlockPos_): number;
        getCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        getOrCreateCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        setBelowZeroRetrogen(arg0: $BelowZeroRetrogen): void;
        setBlendingComputeFuture(future: $CompletableFuture<any>): void;
        setLightEngine(arg0: $LevelLightEngine): void;
        setInitialMainThreadComputeFuture(future: $CompletableFuture<any>): void;
        getInitialMainThreadComputeFuture(): $CompletableFuture<any>;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        saveTimePoint: number;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: $BlendingData);
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelChunkSection[], arg3: $ProtoChunkTicks<$Block_>, arg4: $ProtoChunkTicks<$Fluid_>, arg5: $LevelHeightAccessor, arg6: $Registry<$Biome_>, arg7: $BlendingData);
        get entities(): $List<$CompoundTag>;
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        get needBlending(): boolean;
        set persistedStatus(value: $ChunkStatus_);
        set belowZeroRetrogen(value: $BelowZeroRetrogen);
        set blendingComputeFuture(value: $CompletableFuture<any>);
        set lightEngine(value: $LevelLightEngine);
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        getEntries(): $List<T>;
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        idFor(arg0: T): number;
        valueFor(arg0: number): T;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        bits: number;
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>);
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>, arg3: $List_<T>);
        get size(): number;
        get entries(): $List<T>;
        get serializedSize(): number;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        processChunk(arg0: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        close(): void;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getSection(arg0: $BlockPos_): $LevelChunkSection;
        constructor(arg0: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(arg0: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getLevel(): $BlockGetter;
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        idFor(arg0: T): number;
        valueFor(arg0: number): T;
        constructor(arg0: $IdMap<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        idFor(arg0: T): number;
        valueFor(arg0: number): T;
        get size(): number;
        get serializedSize(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        upgradeData: $UpgradeData;
        xaero_wm_chunkClean: boolean;
        chunkPos: $ChunkPos;
        level: $Level;
        xaero_chunkClean: boolean;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        loaded: boolean;
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        saveTimePoint: number;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        get(arg0: number, arg1: number, arg2: number): boolean;
        toArray(): number[];
        stream(arg0: $ChunkPos): $Stream<$BlockPos>;
        set(arg0: number, arg1: number, arg2: number): void;
        setAdditionalMask(arg0: $CarvingMask$Mask_): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number[], arg1: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
