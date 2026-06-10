import { $JigsawJunction, $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $Map, $List, $Map_, $List_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos$MutableBlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Vec3i, $HolderLookup$Provider, $Holder_, $HolderSet, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $IStructurePiece, $IStructureStart } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types_, $WorldgenRandom, $RandomState, $GenerationStep$Decoration, $GenerationStep$Decoration_ } from "@package/net/minecraft/world/level/levelgen";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $ServerLevelAccessor, $LevelAccessor, $LevelReader, $ChunkPos, $BlockGetter, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $NetherFortressStructure, $SwampHutStructure, $OceanRuinStructure, $OceanMonumentStructure, $NetherFossilStructure, $IglooStructure, $StrongholdStructure, $EndCityStructure, $BuriedTreasureStructure, $JungleTempleStructure, $MineshaftStructure, $ShipwreckStructure, $JigsawStructure, $DesertPyramidStructure, $WoodlandMansionStructure, $RuinedPortalStructure } from "@package/net/minecraft/world/level/levelgen/structure/structures";
import { $BiomeSource, $Biome, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager, $StructurePlaceSettings, $LiquidSettings_, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $ChunkScanAccess_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $StructurePieceType, $StructurePieceSerializationContext_, $PiecesContainer_, $PiecesContainer, $StructurePiecesBuilder } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $RecordCodecBuilder, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Mirror, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $ModifiableStructureInfo } from "@package/net/neoforged/neoforge/common/world";
export * as templatesystem from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
export * as structures from "@package/net/minecraft/world/level/levelgen/structure/structures";
export * as pools from "@package/net/minecraft/world/level/levelgen/structure/pools";
export * as pieces from "@package/net/minecraft/world/level/levelgen/structure/pieces";
export * as placement from "@package/net/minecraft/world/level/levelgen/structure/placement";

declare module "@package/net/minecraft/world/level/levelgen/structure" {
    export class $LegacyStructureDataHandler {
        updateFromLegacy(arg0: $CompoundTag_): $CompoundTag;
        removeIndex(arg0: number): void;
        static getLegacyStructureHandler(arg0: $ResourceKey_<$Level>, arg1: $DimensionDataStorage): $LegacyStructureDataHandler;
        constructor(arg0: $DimensionDataStorage, arg1: $List_<string>, arg2: $List_<string>);
    }
    export class $StructureType<S extends $Structure> {
        static STRONGHOLD: $StructureType<$StrongholdStructure>;
        static RUINED_PORTAL: $StructureType<$RuinedPortalStructure>;
        static MINESHAFT: $StructureType<$MineshaftStructure>;
        static NETHER_FOSSIL: $StructureType<$NetherFossilStructure>;
        static IGLOO: $StructureType<$IglooStructure>;
        static SHIPWRECK: $StructureType<$ShipwreckStructure>;
        static SWAMP_HUT: $StructureType<$SwampHutStructure>;
        static JIGSAW: $StructureType<$JigsawStructure>;
        static JUNGLE_TEMPLE: $StructureType<$JungleTempleStructure>;
        static FORTRESS: $StructureType<$NetherFortressStructure>;
        static OCEAN_MONUMENT: $StructureType<$OceanMonumentStructure>;
        static DESERT_PYRAMID: $StructureType<$DesertPyramidStructure>;
        static END_CITY: $StructureType<$EndCityStructure>;
        static WOODLAND_MANSION: $StructureType<$WoodlandMansionStructure>;
        static BURIED_TREASURE: $StructureType<$BuriedTreasureStructure>;
        static OCEAN_RUIN: $StructureType<$OceanRuinStructure>;
    }
    export interface $StructureType<S extends $Structure> {
        codec(): $MapCodec<S>;
    }
    /**
     * Values that may be interpreted as {@link $StructureType}.
     */
    export type $StructureType_<S> = RegistryTypes.WorldgenStructureType | (() => $MapCodec_<S>);
    export class $Structure {
        type(): $StructureType<never>;
        step(): $GenerationStep$Decoration;
        generate(arg0: $RegistryAccess, arg1: $ChunkGenerator, arg2: $BiomeSource, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkPos, arg7: number, arg8: $LevelHeightAccessor, arg9: $Predicate_<$Holder<$Biome>>): $StructureStart;
        biomes(): $HolderSet<$Biome>;
        getModifiedStructureSettings(): $Structure$StructureSettings;
        static simpleCodec<S extends $Structure>(arg0: $Function_<$Structure$StructureSettings, S>): $MapCodec<S>;
        afterPlace(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $PiecesContainer_): void;
        static getLowestY(arg0: $Structure$GenerationContext_, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static getLowestY(arg0: $Structure$GenerationContext_, arg1: number, arg2: number): number;
        /**
         * @deprecated
         */
        getLowestYIn5by5BoxOffset7Blocks(arg0: $Structure$GenerationContext_, arg1: $Rotation_): $BlockPos;
        static settingsCodec<S extends $Structure>(arg0: $RecordCodecBuilder$Instance<S>): $RecordCodecBuilder<S, $Structure$StructureSettings>;
        adjustBoundingBox(arg0: $BoundingBox): $BoundingBox;
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        terrainAdaptation(): $TerrainAdjustment;
        static onTopOfChunkCenter(arg0: $Structure$GenerationContext_, arg1: $Heightmap$Types_, arg2: $Consumer_<$StructurePiecesBuilder>): ($Structure$GenerationStub) | undefined;
        findValidGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static getMeanFirstOccupiedHeight(arg0: $Structure$GenerationContext_, arg1: number, arg2: number, arg3: number, arg4: number): number;
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        modifiableStructureInfo(): $ModifiableStructureInfo;
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
        get modifiedStructureSettings(): $Structure$StructureSettings;
        static set tingsCodec(value: $RecordCodecBuilder$Instance<S>);
    }
    /**
     * Values that may be interpreted as {@link $Structure}.
     */
    export type $Structure_ = RegistryTypes.WorldgenStructure;
    export class $ScatteredFeaturePiece extends $StructurePiece {
        updateHeightPositionToLowestGroundHeight(arg0: $LevelAccessor, arg1: number): boolean;
        updateAverageGroundHeight(arg0: $LevelAccessor, arg1: $BoundingBox, arg2: number): boolean;
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        height: number;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Direction_);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $Structure$GenerationStub extends $Record {
        position(): $BlockPos;
        generator(): $Either<$Consumer<$StructurePiecesBuilder>, $StructurePiecesBuilder>;
        getPiecesBuilder(): $StructurePiecesBuilder;
        constructor(arg0: $BlockPos_, arg1: $Consumer_<$StructurePiecesBuilder>);
        constructor(position: $BlockPos_, generator: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>);
        get piecesBuilder(): $StructurePiecesBuilder;
    }
    export class $StructurePieceAccessor {
    }
    export interface $StructurePieceAccessor {
        addPiece(arg0: $StructurePiece): void;
        findCollisionPiece(arg0: $BoundingBox): $StructurePiece;
    }
    export class $StructurePiece implements $IStructurePiece {
        move(arg0: number, arg1: number, arg2: number): void;
        createTag(arg0: $StructurePieceSerializationContext_): $CompoundTag;
        getBlock(arg0: $BlockGetter, arg1: number, arg2: number, arg3: number, arg4: $BoundingBox): $BlockState;
        postProcess(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $BlockPos_): void;
        getOrientation(): $Direction;
        setOrientation(arg0: $Direction_): void;
        static reorient(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        isInterior(arg0: $LevelReader, arg1: number, arg2: number, arg3: number, arg4: $BoundingBox): boolean;
        addAdditionalSaveData(arg0: $StructurePieceSerializationContext_, arg1: $CompoundTag_): void;
        getWorldY(arg0: number): number;
        getWorldX(arg0: number, arg1: number): number;
        getWorldZ(arg0: number, arg1: number): number;
        static makeBoundingBox(arg0: number, arg1: number, arg2: number, arg3: $Direction_, arg4: number, arg5: number, arg6: number): $BoundingBox;
        static getRandomHorizontalDirection(arg0: $RandomSource): $Direction;
        canBeReplaced(arg0: $LevelReader, arg1: number, arg2: number, arg3: number, arg4: $BoundingBox): boolean;
        addChildren(arg0: $StructurePiece, arg1: $StructurePieceAccessor, arg2: $RandomSource): void;
        setGenDepth(arg0: number): void;
        generateBox(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: $BoundingBox, arg3: boolean, arg4: $RandomSource, arg5: $StructurePiece$BlockSelector): void;
        generateBox(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: $BoundingBox, arg3: $BlockState_, arg4: $BlockState_, arg5: boolean): void;
        generateBox(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $BlockState_, arg9: $BlockState_, arg10: boolean): void;
        generateBox(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: $RandomSource, arg10: $StructurePiece$BlockSelector): void;
        getLocatorPosition(): $BlockPos;
        getWorldPos(arg0: number, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        createChest(arg0: $ServerLevelAccessor, arg1: $BoundingBox, arg2: $RandomSource, arg3: $BlockPos_, arg4: $ResourceKey_<$LootTable>, arg5: $BlockState_): boolean;
        createChest(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: $ResourceKey_<$LootTable>): boolean;
        static createBoundingBox(arg0: $Stream<$StructurePiece>): $BoundingBox;
        isCloseToChunk(arg0: $ChunkPos, arg1: number): boolean;
        generateAirBox(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        fillColumnDown(arg0: $WorldGenLevel, arg1: $BlockState_, arg2: number, arg3: number, arg4: number, arg5: $BoundingBox): void;
        maybeGenerateBlock(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_): void;
        generateMaybeBox(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $BlockState_, arg11: $BlockState_, arg12: boolean, arg13: boolean): void;
        static findCollisionPiece(arg0: $List_<$StructurePiece>, arg1: $BoundingBox): $StructurePiece;
        createDispenser(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: $Direction_, arg7: $ResourceKey_<$LootTable>): boolean;
        getGenDepth(): number;
        placeBlock(arg0: $WorldGenLevel, arg1: $BlockState_, arg2: number, arg3: number, arg4: number, arg5: $BoundingBox): void;
        isReplaceableByStructures(arg0: $BlockState_): boolean;
        generateUpperHalfSphere(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $BlockState_, arg9: boolean): void;
        getType(): $StructurePieceType;
        getMirror(): $Mirror;
        getRotation(): $Rotation;
        getFacing(): $Direction;
        getChainLength(): number;
        getBoundingBox(): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
        get locatorPosition(): $BlockPos;
        get type(): $StructurePieceType;
        get mirror(): $Mirror;
        get rotation(): $Rotation;
        get facing(): $Direction;
        get chainLength(): number;
    }
    export class $BuiltinStructureSets {
        static JUNGLE_TEMPLES: $ResourceKey<$StructureSet>;
        static NETHER_FOSSILS: $ResourceKey<$StructureSet>;
        static NETHER_COMPLEXES: $ResourceKey<$StructureSet>;
        static BURIED_TREASURES: $ResourceKey<$StructureSet>;
        static END_CITIES: $ResourceKey<$StructureSet>;
        static PILLAGER_OUTPOSTS: $ResourceKey<$StructureSet>;
        static STRONGHOLDS: $ResourceKey<$StructureSet>;
        static SHIPWRECKS: $ResourceKey<$StructureSet>;
        static VILLAGES: $ResourceKey<$StructureSet>;
        static DESERT_PYRAMIDS: $ResourceKey<$StructureSet>;
        static SWAMP_HUTS: $ResourceKey<$StructureSet>;
        static OCEAN_MONUMENTS: $ResourceKey<$StructureSet>;
        static MINESHAFTS: $ResourceKey<$StructureSet>;
        static RUINED_PORTALS: $ResourceKey<$StructureSet>;
        static WOODLAND_MANSIONS: $ResourceKey<$StructureSet>;
        static ANCIENT_CITIES: $ResourceKey<$StructureSet>;
        static TRAIL_RUINS: $ResourceKey<$StructureSet>;
        static IGLOOS: $ResourceKey<$StructureSet>;
        static OCEAN_RUINS: $ResourceKey<$StructureSet>;
        static TRIAL_CHAMBERS: $ResourceKey<$StructureSet>;
    }
    export interface $BuiltinStructureSets {
    }
    export class $Structure$StructureSettings extends $Record {
        step(): $GenerationStep$Decoration;
        biomes(): $HolderSet<$Biome>;
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        terrainAdaptation(): $TerrainAdjustment;
        static CODEC: $MapCodec<$Structure$StructureSettings>;
        static DEFAULT: $Structure$StructureSettings;
        constructor(arg0: $HolderSet_<$Biome>);
        constructor(biomes: $HolderSet_<$Biome>, spawnOverrides: $Map_<$MobCategory_, $StructureSpawnOverride_>, step: $GenerationStep$Decoration_, terrainAdaptation: $TerrainAdjustment_);
    }
    export interface $StructureType extends RegistryMarked<RegistryTypes.WorldgenStructureTypeTag, RegistryTypes.WorldgenStructureType> {}
    export class $PostPlacementProcessor {
        static NONE: $PostPlacementProcessor;
    }
    export interface $PostPlacementProcessor {
        afterPlace(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $PiecesContainer_): void;
    }
    /**
     * Values that may be interpreted as {@link $PostPlacementProcessor}.
     */
    export type $PostPlacementProcessor_ = ((arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $PiecesContainer) => void);
    export class $SinglePieceStructure$PieceConstructor {
    }
    export interface $SinglePieceStructure$PieceConstructor {
    }
    /**
     * Values that may be interpreted as {@link $SinglePieceStructure$PieceConstructor}.
     */
    export type $SinglePieceStructure$PieceConstructor_ = (() => void);
    export class $SinglePieceStructure extends $Structure {
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $SinglePieceStructure$PieceConstructor_, arg1: number, arg2: number, arg3: $Structure$StructureSettings_);
    }
    export class $StructureCheck {
        onStructureLoad(arg0: $ChunkPos, arg1: $Map_<$Structure_, $StructureStart>): void;
        checkStart(arg0: $ChunkPos, arg1: $Structure_, arg2: $StructurePlacement, arg3: boolean): $StructureCheckResult;
        incrementReference(arg0: $ChunkPos, arg1: $Structure_): void;
        constructor(arg0: $ChunkScanAccess_, arg1: $RegistryAccess, arg2: $StructureTemplateManager, arg3: $ResourceKey_<$Level>, arg4: $ChunkGenerator, arg5: $RandomState, arg6: $LevelHeightAccessor, arg7: $BiomeSource, arg8: number, arg9: $DataFixer);
    }
    export class $TerrainAdjustment extends $Enum<$TerrainAdjustment> implements $StringRepresentable {
        static values(): $TerrainAdjustment[];
        static valueOf(arg0: string): $TerrainAdjustment;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ENCAPSULATE: $TerrainAdjustment;
        static CODEC: $Codec<$TerrainAdjustment>;
        static BURY: $TerrainAdjustment;
        static NONE: $TerrainAdjustment;
        static BEARD_BOX: $TerrainAdjustment;
        static BEARD_THIN: $TerrainAdjustment;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TerrainAdjustment}.
     */
    export type $TerrainAdjustment_ = "none" | "bury" | "beard_thin" | "beard_box" | "encapsulate";
    export class $TemplateStructurePiece extends $StructurePiece {
        template(): $StructureTemplate;
        handler$goc000$moonlight$ml$processBoxes(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $BlockPos_, arg7: $CallbackInfo): void;
        handleDataMarker(arg0: string, arg1: $BlockPos_, arg2: $ServerLevelAccessor, arg3: $RandomSource, arg4: $BoundingBox): void;
        templatePosition(): $BlockPos;
        placeSettings(): $StructurePlaceSettings;
        makeTemplateLocation(): $ResourceLocation;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $StructureTemplateManager, arg3: $ResourceLocation_, arg4: string, arg5: $StructurePlaceSettings, arg6: $BlockPos_);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_, arg2: $StructureTemplateManager, arg3: $Function_<$ResourceLocation, $StructurePlaceSettings>);
    }
    export class $StructureSpawnOverride$BoundingBoxType extends $Enum<$StructureSpawnOverride$BoundingBoxType> implements $StringRepresentable {
        static values(): $StructureSpawnOverride$BoundingBoxType[];
        static valueOf(arg0: string): $StructureSpawnOverride$BoundingBoxType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$StructureSpawnOverride$BoundingBoxType>;
        static STRUCTURE: $StructureSpawnOverride$BoundingBoxType;
        static PIECE: $StructureSpawnOverride$BoundingBoxType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureSpawnOverride$BoundingBoxType}.
     */
    export type $StructureSpawnOverride$BoundingBoxType_ = "piece" | "full";
    export class $Structure$StructureSettings$Builder {
        build(): $Structure$StructureSettings;
        spawnOverrides(arg0: $Map_<$MobCategory_, $StructureSpawnOverride_>): $Structure$StructureSettings$Builder;
        generationStep(arg0: $GenerationStep$Decoration_): $Structure$StructureSettings$Builder;
        terrainAdapation(arg0: $TerrainAdjustment_): $Structure$StructureSettings$Builder;
        constructor(arg0: $HolderSet_<$Biome>);
    }
    export class $StructureCheckResult extends $Enum<$StructureCheckResult> {
        static values(): $StructureCheckResult[];
        static valueOf(arg0: string): $StructureCheckResult;
        static CHUNK_LOAD_NEEDED: $StructureCheckResult;
        static START_NOT_PRESENT: $StructureCheckResult;
        static START_PRESENT: $StructureCheckResult;
    }
    /**
     * Values that may be interpreted as {@link $StructureCheckResult}.
     */
    export type $StructureCheckResult_ = "start_present" | "start_not_present" | "chunk_load_needed";
    export interface $StructureSet extends RegistryMarked<RegistryTypes.WorldgenStructureSetTag, RegistryTypes.WorldgenStructureSet> {}
    export interface $Structure extends RegistryMarked<RegistryTypes.WorldgenStructureTag, RegistryTypes.WorldgenStructure> {}
    export class $StructureFeatureIndexSavedData extends $SavedData {
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StructureFeatureIndexSavedData;
        static factory(): $SavedData$Factory<$StructureFeatureIndexSavedData>;
        getAll(): $LongSet;
        removeIndex(arg0: number): void;
        addIndex(arg0: number): void;
        hasStartIndex(arg0: number): boolean;
        hasUnhandledIndex(arg0: number): boolean;
        constructor();
        get all(): $LongSet;
    }
    export class $StructureSet$StructureSelectionEntry extends $Record {
        weight(): number;
        structure(): $Holder<$Structure>;
        static CODEC: $Codec<$StructureSet$StructureSelectionEntry>;
        constructor(arg0: $Holder_<$Structure>, arg1: number);
    }
    export class $PoolElementStructurePiece extends $StructurePiece {
        getElement(): $StructurePoolElement;
        place(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $BlockPos_, arg6: boolean): void;
        getPosition(): $BlockPos;
        addJunction(arg0: $JigsawJunction): void;
        getJunctions(): $List<$JigsawJunction>;
        getGroundLevelDelta(): number;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        rotation: $Rotation;
        position: $BlockPos;
        element: $StructurePoolElement;
        constructor(arg0: $StructureTemplateManager, arg1: $StructurePoolElement, arg2: $BlockPos_, arg3: number, arg4: $Rotation_, arg5: $BoundingBox, arg6: $LiquidSettings_);
        constructor(arg0: $StructurePieceSerializationContext_, arg1: $CompoundTag_);
        get junctions(): $List<$JigsawJunction>;
        get groundLevelDelta(): number;
    }
    export class $StructureSpawnOverride extends $Record {
        boundingBox(): $StructureSpawnOverride$BoundingBoxType;
        spawns(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $Codec<$StructureSpawnOverride>;
        constructor(arg0: $StructureSpawnOverride$BoundingBoxType_, arg1: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
    }
    export class $BuiltinStructures {
        static MINESHAFT_MESA: $ResourceKey<$Structure>;
        static STRONGHOLD: $ResourceKey<$Structure>;
        static MINESHAFT: $ResourceKey<$Structure>;
        static VILLAGE_SAVANNA: $ResourceKey<$Structure>;
        static RUINED_PORTAL_MOUNTAIN: $ResourceKey<$Structure>;
        static PILLAGER_OUTPOST: $ResourceKey<$Structure>;
        static SWAMP_HUT: $ResourceKey<$Structure>;
        static FORTRESS: $ResourceKey<$Structure>;
        static VILLAGE_SNOWY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_NETHER: $ResourceKey<$Structure>;
        static END_CITY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_STANDARD: $ResourceKey<$Structure>;
        static VILLAGE_DESERT: $ResourceKey<$Structure>;
        static WOODLAND_MANSION: $ResourceKey<$Structure>;
        static RUINED_PORTAL_SWAMP: $ResourceKey<$Structure>;
        static TRAIL_RUINS: $ResourceKey<$Structure>;
        static OCEAN_RUIN_COLD: $ResourceKey<$Structure>;
        static TRIAL_CHAMBERS: $ResourceKey<$Structure>;
        static NETHER_FOSSIL: $ResourceKey<$Structure>;
        static IGLOO: $ResourceKey<$Structure>;
        static SHIPWRECK: $ResourceKey<$Structure>;
        static OCEAN_RUIN_WARM: $ResourceKey<$Structure>;
        static BASTION_REMNANT: $ResourceKey<$Structure>;
        static JUNGLE_TEMPLE: $ResourceKey<$Structure>;
        static OCEAN_MONUMENT: $ResourceKey<$Structure>;
        static VILLAGE_PLAINS: $ResourceKey<$Structure>;
        static DESERT_PYRAMID: $ResourceKey<$Structure>;
        static RUINED_PORTAL_JUNGLE: $ResourceKey<$Structure>;
        static SHIPWRECK_BEACHED: $ResourceKey<$Structure>;
        static VILLAGE_TAIGA: $ResourceKey<$Structure>;
        static BURIED_TREASURE: $ResourceKey<$Structure>;
        static ANCIENT_CITY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_OCEAN: $ResourceKey<$Structure>;
        static RUINED_PORTAL_DESERT: $ResourceKey<$Structure>;
    }
    export interface $BuiltinStructures {
    }
    export class $StructurePiece$BlockSelector {
        next(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getNext(): $BlockState;
        constructor();
    }
    export class $Structure$GenerationContext extends $Record {
        seed(): number;
        random(): $WorldgenRandom;
        validBiome(): $Predicate<$Holder<$Biome>>;
        registryAccess(): $RegistryAccess;
        chunkGenerator(): $ChunkGenerator;
        heightAccessor(): $LevelHeightAccessor;
        biomeSource(): $BiomeSource;
        randomState(): $RandomState;
        chunkPos(): $ChunkPos;
        structureTemplateManager(): $StructureTemplateManager;
        constructor(arg0: $RegistryAccess, arg1: $ChunkGenerator, arg2: $BiomeSource, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkPos, arg7: $LevelHeightAccessor, arg8: $Predicate_<$Holder<$Biome>>);
        constructor(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, random: $WorldgenRandom, seed: number, chunkPos: $ChunkPos, heightAccessor: $LevelHeightAccessor, validBiome: $Predicate_<$Holder<$Biome>>);
    }
    export class $StructureStart implements $IStructureStart {
        isValid(): boolean;
        createTag(arg0: $StructurePieceSerializationContext_, arg1: $ChunkPos): $CompoundTag;
        addReference(): void;
        getChunkPos(): $ChunkPos;
        placeInChunk(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos): void;
        canBeReferenced(): boolean;
        getBoundingBox(): $BoundingBox;
        getPieces(): $List<$StructurePiece>;
        getMaxReferences(): number;
        static loadStaticStart(arg0: $StructurePieceSerializationContext_, arg1: $CompoundTag_, arg2: number): $StructureStart;
        getChildren(): $PiecesContainer;
        getReferences(): number;
        getStructure(): $Structure;
        static INVALID_START: $StructureStart;
        static INVALID_START_ID: string;
        constructor(arg0: $Structure_, arg1: $ChunkPos, arg2: number, arg3: $PiecesContainer_);
        get valid(): boolean;
        get chunkPos(): $ChunkPos;
        get boundingBox(): $BoundingBox;
        get pieces(): $List<$StructurePiece>;
        get maxReferences(): number;
        get children(): $PiecesContainer;
        get references(): number;
        get structure(): $Structure;
    }
    export class $StructureSet extends $Record {
        static entry(arg0: $Holder_<$Structure>): $StructureSet$StructureSelectionEntry;
        static entry(arg0: $Holder_<$Structure>, arg1: number): $StructureSet$StructureSelectionEntry;
        structures(): $List<$StructureSet$StructureSelectionEntry>;
        placement(): $StructurePlacement;
        static CODEC: $Codec<$Holder<$StructureSet>>;
        static DIRECT_CODEC: $Codec<$StructureSet>;
        constructor(arg0: $Holder_<$Structure>, arg1: $StructurePlacement);
        constructor(arg0: $List_<$StructureSet$StructureSelectionEntry_>, arg1: $StructurePlacement);
    }
    /**
     * Values that may be interpreted as {@link $StructureSet}.
     */
    export type $StructureSet_ = RegistryTypes.WorldgenStructureSet;
    export class $BoundingBox {
        getLength(): $Vec3i;
        /**
         * @deprecated
         */
        move(arg0: $Vec3i): $BoundingBox;
        /**
         * @deprecated
         */
        move(arg0: number, arg1: number, arg2: number): $BoundingBox;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        intersects(arg0: $BoundingBox): boolean;
        getCenter(): $BlockPos;
        static encapsulatingPositions(arg0: $Iterable_<$BlockPos>): ($BoundingBox) | undefined;
        moved(arg0: number, arg1: number, arg2: number): $BoundingBox;
        getXSpan(): number;
        getYSpan(): number;
        getZSpan(): number;
        intersectingChunks(): $Stream<$ChunkPos>;
        inflatedBy(arg0: number, arg1: number, arg2: number): $BoundingBox;
        inflatedBy(arg0: number): $BoundingBox;
        static orientBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Direction_): $BoundingBox;
        static infinite(): $BoundingBox;
        maxX(): number;
        minX(): number;
        static fromCorners(arg0: $Vec3i, arg1: $Vec3i): $BoundingBox;
        forAllCorners(arg0: $Consumer_<$BlockPos>): void;
        static encapsulatingBoxes(arg0: $Iterable_<$BoundingBox>): ($BoundingBox) | undefined;
        /**
         * @deprecated
         */
        encapsulate(arg0: $BoundingBox): $BoundingBox;
        /**
         * @deprecated
         */
        encapsulate(arg0: $BlockPos_): $BoundingBox;
        isInside(arg0: $Vec3i): boolean;
        isInside(arg0: number, arg1: number, arg2: number): boolean;
        minZ(): number;
        minY(): number;
        maxZ(): number;
        maxY(): number;
        static CODEC: $Codec<$BoundingBox>;
        constructor(arg0: $BlockPos_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get length(): $Vec3i;
        get center(): $BlockPos;
        get XSpan(): number;
        get YSpan(): number;
        get ZSpan(): number;
    }
}
