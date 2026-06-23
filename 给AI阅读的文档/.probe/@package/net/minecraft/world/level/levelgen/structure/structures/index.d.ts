import { $ChunkPos, $WorldGenLevel, $StructureManager } from "@package/net/minecraft/world/level";
import { $DimensionPadding, $DimensionPadding_, $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Logger } from "@package/org/slf4j";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $MobCategory_ } from "@package/net/minecraft/world/entity";
import { $SpawnBoxSettings, $ISpawnBoxStructure, $SpawnBoxSettings_ } from "@package/net/mehvahdjukaar/moonlight/api/worldgen";
import { $StructureProcessor, $LiquidSettings, $StructureTemplateManager, $LiquidSettings_, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $IStrongholdGenerator, $XPieceDataExtension } from "@package/com/ishland/c2me/fixes/worldgen/threading_issues/common";
import { $Map, $List, $List_ } from "@package/java/util";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $Tuple } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_, $Holder_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $PiecesContainer_, $PiecesContainer } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Mirror_, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Class, $ThreadLocal } from "@package/java/lang";
import { $Structure$StructureSettings_, $StructurePiece, $SinglePieceStructure, $StructurePiece$BlockSelector, $TemplateStructurePiece, $Structure_, $BoundingBox, $ScatteredFeaturePiece, $StructurePieceAccessor, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/structure/structures" {
    export class $IglooPieces$IglooPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, startPos: $BlockPos_, rotation: $Rotation_, down: number);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $JigsawStructure extends $Structure implements $ISpawnBoxStructure {
        ml$setSpawnBoxSettings(arg0: $SpawnBoxSettings_): void;
        ml$getSpawnBoxSettings(): $SpawnBoxSettings;
        ml$getSpecialSpawns(arg0: $StructureManager, arg1: $Structure_, arg2: $BlockPos_, arg3: $LongSet, arg4: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $MapCodec<$JigsawStructure>;
        static DEFAULT_LIQUID_SETTINGS: $LiquidSettings;
        static DEFAULT_DIMENSION_PADDING: $DimensionPadding;
        static MAX_DEPTH: number;
        static MIN_DEPTH: number;
        static DIRECT_CODEC: $Codec<$Structure>;
        static MAX_TOTAL_STRUCTURE_RANGE: number;
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: $Heightmap$Types_);
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: ($ResourceLocation_) | undefined, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: ($Heightmap$Types_) | undefined, maxDistanceFromCenter: number, poolAliases: $List_<$PoolAliasBinding>, dimensionPadding: $DimensionPadding_, liquidSettings: $LiquidSettings_);
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean);
    }
    export class $OceanMonumentPieces$MonumentBuilding extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static BIOME_RANGE_CHECK: number;
        constructor(random: $RandomSource, x: number, z: number, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$RoomDefinition {
        updateOpenings(): void;
        countOpenings(): number;
        isSpecial(): boolean;
        findSource(index: number): boolean;
        setConnection(direction: $Direction_, connectingRoom: $OceanMonumentPieces$RoomDefinition): void;
        hasOpening: boolean[];
        claimed: boolean;
        isSource: boolean;
        index: number;
        connections: $OceanMonumentPieces$RoomDefinition[];
        constructor(index: number);
        get special(): boolean;
    }
    export class $OceanMonumentPieces$FitDoubleXYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$FitSimpleTopRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanRuinPieces {
        static addPieces(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, structurePieceAccessor: $StructurePieceAccessor, random: $RandomSource, structure: $OceanRuinStructure): void;
        static WARM_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        static COLD_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        constructor();
    }
    export class $IglooStructure extends $Structure {
        static CODEC: $MapCodec<$IglooStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdStructure extends $Structure {
        static CODEC: $MapCodec<$StrongholdStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $OceanRuinStructure extends $Structure {
        largeProbability: number;
        clusterProbability: number;
        static CODEC: $MapCodec<$OceanRuinStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        biomeTemp: $OceanRuinStructure$Type;
        constructor(settings: $Structure$StructureSettings_, biomeTemp: $OceanRuinStructure$Type_, largeProbability: number, clusterProbability: number);
    }
    export class $JungleTemplePiece extends $ScatteredFeaturePiece {
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        static WIDTH: number;
        static DEPTH: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftStructure extends $Structure {
        static CODEC: $MapCodec<$MineshaftStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, type: $MineshaftStructure$Type_);
    }
    export class $MineshaftPieces$MineShaftPiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
    }
    export class $RuinedPortalStructure$Setup extends $Record {
        replaceWithBlackstone(): boolean;
        airPocketProbability(): number;
        weight(): number;
        placement(): $RuinedPortalPiece$VerticalPlacement;
        vines(): boolean;
        mossiness(): number;
        canBeCold(): boolean;
        overgrown(): boolean;
        static CODEC: $Codec<$RuinedPortalStructure$Setup>;
        constructor(arg0: $RuinedPortalPiece$VerticalPlacement_, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number);
    }
    export class $WoodlandMansionPieces {
        static generateMansion(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, pieces: $List_<$WoodlandMansionPieces$WoodlandMansionPiece>, random: $RandomSource): void;
        constructor();
    }
    export class $StrongholdPieces$FillerCorridor extends $StrongholdPieces$StrongholdPiece {
        static findPieceBox(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitSimpleRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $WoodlandMansionPieces$PlacementData {
        rotation: $Rotation;
        wallType: string;
        position: $BlockPos;
        constructor();
    }
    export class $MineshaftStructure$Type extends $Enum<$MineshaftStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $MineshaftStructure$Type[];
        static valueOf(arg0: string): $MineshaftStructure$Type;
        getPlanksState(): $BlockState;
        getFenceState(): $BlockState;
        getWoodState(): $BlockState;
        getSerializedName(): string;
        static byId(id: number): $MineshaftStructure$Type;
        getRemappedEnumConstantName(): string;
        static MESA: $MineshaftStructure$Type;
        static CODEC: $Codec<$MineshaftStructure$Type>;
        static NORMAL: $MineshaftStructure$Type;
        get planksState(): $BlockState;
        get fenceState(): $BlockState;
        get woodState(): $BlockState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MineshaftStructure$Type}.
     */
    export type $MineshaftStructure$Type_ = "normal" | "mesa";
    export class $NetherFortressPieces$BridgeStraight extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeStraight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$BridgeCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(tag: $CompoundTag_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        constructor(x: number, z: number, orientation: $Direction_);
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
    }
    export class $EndCityPieces {
        static startHouseTower(structureTemplateManager: $StructureTemplateManager, startPos: $BlockPos_, rotation: $Rotation_, pieces: $List_<$StructurePiece>, random: $RandomSource): void;
        static addPiece(structureTemplateManager: $StructureTemplateManager, piece: $EndCityPieces$EndCityPiece, startPos: $BlockPos_, name: string, rotation: $Rotation_, overwrite: boolean): $EndCityPieces$EndCityPiece;
        static addHelper(pieces: $List_<$StructurePiece>, piece: $EndCityPieces$EndCityPiece): $EndCityPieces$EndCityPiece;
        static recursiveChildren(structureTemplateManager: $StructureTemplateManager, sectionGenerator: $EndCityPieces$SectionGenerator, counter: number, piece: $EndCityPieces$EndCityPiece, startPos: $BlockPos_, pieces: $List_<$StructurePiece>, random: $RandomSource): boolean;
        static TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static HOUSE_TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static TOWER_BRIDGE_GENERATOR: $EndCityPieces$SectionGenerator;
        static TOWER_BRIDGES: $List<$Tuple<$Rotation, $BlockPos>>;
        static FAT_TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static FAT_TOWER_BRIDGES: $List<$Tuple<$Rotation, $BlockPos>>;
        constructor();
    }
    export class $RuinedPortalPiece$Properties {
        overgrown: boolean;
        static CODEC: $Codec<$RuinedPortalPiece$Properties>;
        replaceWithBlackstone: boolean;
        mossiness: number;
        vines: boolean;
        cold: boolean;
        airPocket: boolean;
        constructor();
        constructor(cold: boolean, mossiness: number, airPocket: boolean, overgrown: boolean, vines: boolean, replaceWithBlackstone: boolean);
    }
    export class $RuinedPortalStructure extends $Structure {
        static CODEC: $MapCodec<$RuinedPortalStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, setups: $List_<$RuinedPortalStructure$Setup_>);
        constructor(settings: $Structure$StructureSettings_, setup: $RuinedPortalStructure$Setup_);
    }
    export class $StrongholdPieces$StartPiece extends $StrongholdPieces$StairsDown {
        previousPiece: $StrongholdPieces$PieceWeight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        portalRoomPiece: $StrongholdPieces$PortalRoom;
        pendingChildren: $List<$StructurePiece>;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces {
        static findAndCreateBridgePieceFactory(weight: $NetherFortressPieces$PieceWeight, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$NetherBridgePiece;
        static BRIDGE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static CASTLE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static MAGIC_START_Y: number;
        constructor();
    }
    export class $NetherFortressPieces$NetherBridgePiece extends $StructurePiece {
        generateChildRight(startPiece: $NetherFortressPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number, castlePiece: boolean): $StructurePiece;
        generateChildLeft(startPiece: $NetherFortressPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number, castlePiece: boolean): $StructurePiece;
        generateChildForward(startPiece: $NetherFortressPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number, castlePiece: boolean): $StructurePiece;
        static isOkBox(box: $BoundingBox): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(type: $StructurePieceType_, genDepth: number, boundingBox: $BoundingBox);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftStairs extends $MineshaftPieces$MineShaftPiece {
        static findStairs(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, boundingBox: $BoundingBox, orientation: $Direction_, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentEntryRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressStructure extends $Structure {
        static FORTRESS_ENEMIES: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $MapCodec<$NetherFortressStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $MineshaftPieces$MineShaftCorridor extends $MineshaftPieces$MineShaftPiece {
        static findCorridorSize(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        fillPillarDownOrChainUp(level: $WorldGenLevel, state: $BlockState_, x: number, y: number, z: number, box: $BoundingBox): void;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, boundingBox: $BoundingBox, orientation: $Direction_, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces {
    }
    export class $OceanMonumentPieces$FitDoubleYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Straight extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_, genDepth: number): $StrongholdPieces$Straight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece$SmallDoorType extends $Enum<$StrongholdPieces$StrongholdPiece$SmallDoorType> {
    }
    /**
     * Values that may be interpreted as {@link $StrongholdPieces$StrongholdPiece$SmallDoorType}.
     */
    export type $StrongholdPieces$StrongholdPiece$SmallDoorType_ = "opening" | "wood_door" | "grates" | "iron_door";
    export class $NetherFortressPieces$CastleCorridorTBalconyPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleCorridorTBalconyPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$MonsterThrone extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, genDepth: number, orientation: $Direction_): $NetherFortressPieces$MonsterThrone;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorCrossingPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorCrossingPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $IglooPieces {
        static addPieces(structureTemplateManager: $StructureTemplateManager, startPos: $BlockPos_, rotation: $Rotation_, pieces: $StructurePieceAccessor, random: $RandomSource): void;
        static OFFSETS: $Map<$ResourceLocation, $BlockPos>;
        static PIVOTS: $Map<$ResourceLocation, $BlockPos>;
        static STRUCTURE_LOCATION_IGLOO: $ResourceLocation;
        static GENERATION_HEIGHT: number;
        constructor();
    }
    export class $EndCityPieces$SectionGenerator {
    }
    export interface $EndCityPieces$SectionGenerator {
    }
    export class $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PrisonHall extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$PrisonHall;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFossilStructure extends $Structure {
        static CODEC: $MapCodec<$NetherFossilStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        height: $HeightProvider;
        constructor(settings: $Structure$StructureSettings_, height: $HeightProvider);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentPiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
    }
    export class $OceanMonumentPieces$OceanMonumentWingRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, box: $BoundingBox, flag: number);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftCrossing extends $MineshaftPieces$MineShaftPiece {
        static findCrossing(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, boundingBox: $BoundingBox, direction: $Direction_ | null, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $BuriedTreasurePieces$BuriedTreasurePiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(pos: $BlockPos_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorRightTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorRightTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$ChestCorridor extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$ChestCorridor;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitDoubleYZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$StartPiece extends $NetherFortressPieces$BridgeCrossing {
        previousPiece: $NetherFortressPieces$PieceWeight;
        availableCastlePieces: $List<$NetherFortressPieces$PieceWeight>;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        availableBridgePieces: $List<$NetherFortressPieces$PieceWeight>;
        pendingChildren: $List<$StructurePiece>;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleTopRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$StairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(tag: $CompoundTag_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(type: $StructurePieceType_, genDepth: number, x: number, z: number, orientation: $Direction_);
    }
    export class $OceanMonumentPieces$FitDoubleXRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$MonumentRoomFitter {
    }
    export interface $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$CastleStalkRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleStalkRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckStructure extends $Structure {
        static CODEC: $MapCodec<$ShipwreckStructure>;
        isBeached: boolean;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, isBeached: boolean);
    }
    export class $NetherFortressPieces$CastleEntrance extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleEntrance;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftRoom extends $MineshaftPieces$MineShaftPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, x: number, z: number, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$MansionGrid {
        get1x2RoomDirection(layout: $WoodlandMansionPieces$SimpleGrid, x: number, y: number, floor: number, roomId: number): $Direction;
        isRoomId(layout: $WoodlandMansionPieces$SimpleGrid, x: number, y: number, floor: number, roomId: number): boolean;
        static isHouse(layout: $WoodlandMansionPieces$SimpleGrid, x: number, y: number): boolean;
        thirdFloorGrid: $WoodlandMansionPieces$SimpleGrid;
        floorRooms: $WoodlandMansionPieces$SimpleGrid[];
        entranceX: number;
        entranceY: number;
        baseGrid: $WoodlandMansionPieces$SimpleGrid;
        constructor(random: $RandomSource);
    }
    export class $WoodlandMansionPieces$MansionPiecePlacer {
    }
    export class $BuriedTreasureStructure extends $Structure {
        static CODEC: $MapCodec<$BuriedTreasureStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces$StraightStairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$StraightStairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SimpleGrid {
        get(x: number, y: number): number;
        set(minX: number, minY: number, maxX: number, maxY: number, value: number): void;
        set(width: number, height: number, valueIfOutside: number): void;
        setif(x: number, y: number, oldValue: number, newValue: number): void;
        edgesTo(x: number, y: number, expectedValue: number): boolean;
        width: number;
        height: number;
        constructor(width: number, height: number, valueIfOutside: number);
    }
    export class $NetherFortressPieces$CastleSmallCorridorPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $EndCityPieces$EndCityPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, name: string, startPos: $BlockPos_, rotation: $Rotation_, overwrite: boolean);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $OceanRuinPieces$OceanRuinPiece extends $TemplateStructurePiece {
        static create(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_): $OceanRuinPieces$OceanRuinPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_, integrity: number, biomeType: $OceanRuinStructure$Type_, isLarge: boolean);
    }
    export class $OceanMonumentPieces$FitDoubleZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Turn extends $StrongholdPieces$StrongholdPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SecondFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $RuinedPortalPiece$VerticalPlacement extends $Enum<$RuinedPortalPiece$VerticalPlacement> implements $StringRepresentable {
        getName(): string;
        static values(): $RuinedPortalPiece$VerticalPlacement[];
        static valueOf(name: string): $RuinedPortalPiece$VerticalPlacement;
        static byName(name: string): $RuinedPortalPiece$VerticalPlacement;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND: $RuinedPortalPiece$VerticalPlacement;
        static ON_LAND_SURFACE: $RuinedPortalPiece$VerticalPlacement;
        static CODEC: $StringRepresentable$EnumCodec<$RuinedPortalPiece$VerticalPlacement>;
        static IN_MOUNTAIN: $RuinedPortalPiece$VerticalPlacement;
        static PARTLY_BURIED: $RuinedPortalPiece$VerticalPlacement;
        static IN_NETHER: $RuinedPortalPiece$VerticalPlacement;
        static ON_OCEAN_FLOOR: $RuinedPortalPiece$VerticalPlacement;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RuinedPortalPiece$VerticalPlacement}.
     */
    export type $RuinedPortalPiece$VerticalPlacement_ = "on_land_surface" | "partly_buried" | "on_ocean_floor" | "in_mountain" | "underground" | "in_nether";
    export class $SwampHutPiece extends $ScatteredFeaturePiece {
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$RoomCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$RoomCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        type: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$LeftTurn extends $StrongholdPieces$Turn {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$LeftTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckPieces {
        static addRandomPiece(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, pieces: $StructurePieceAccessor, random: $RandomSource, isBeached: boolean): $ShipwreckPieces$ShipwreckPiece;
        static MARKERS_TO_LOOT: $Map<string, $ResourceKey<$LootTable>>;
        static PIVOT: $BlockPos;
        constructor();
    }
    export class $StrongholdPieces$Library extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$Library;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        static TALL_HEIGHT: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFossilPieces {
        static addPieces(structureManager: $StructureTemplateManager, pieces: $StructurePieceAccessor, random: $RandomSource, pos: $BlockPos_): void;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $JungleTempleStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$JungleTempleStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $WoodlandMansionStructure extends $Structure {
        static CODEC: $MapCodec<$WoodlandMansionStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $BuriedTreasurePieces {
        constructor();
    }
    export class $MineshaftPieces {
        static generateAndAddPiece(piece: $StructurePiece, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_, genDepth: number): $MineshaftPieces$MineShaftPiece;
        static MAGIC_START_Y: number;
        static LOGGER: $Logger;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentCoreRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $SwampHutStructure extends $Structure {
        static CODEC: $MapCodec<$SwampHutStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $NetherFortressPieces$PieceWeight implements $XPieceDataExtension {
        isValid(): boolean;
        doPlace(genDepth: number): boolean;
        c2me$getGeneratedCountThreadLocal(): $ThreadLocal<any>;
        placeCount: number;
        allowInRow: boolean;
        pieceClass: $Class<$NetherFortressPieces$NetherBridgePiece>;
        maxPlaceCount: number;
        weight: number;
        constructor(pieceClass: $Class<$NetherFortressPieces$NetherBridgePiece>, weight: number, maxPlaceCount: number, allowInRow: boolean);
        constructor(pieceClass: $Class<$NetherFortressPieces$NetherBridgePiece>, weight: number, maxPlaceCount: number);
        get valid(): boolean;
    }
    export class $StrongholdPieces$RightTurn extends $StrongholdPieces$Turn {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$RightTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanRuinStructure$Type extends $Enum<$OceanRuinStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $OceanRuinStructure$Type[];
        static valueOf(arg0: string): $OceanRuinStructure$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$OceanRuinStructure$Type>;
        static COLD: $OceanRuinStructure$Type;
        static WARM: $OceanRuinStructure$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $OceanRuinStructure$Type}.
     */
    export type $OceanRuinStructure$Type_ = "warm" | "cold";
    export class $DesertPyramidStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$DesertPyramidStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces implements $IStrongholdGenerator {
        static resetPieces(): void;
        static generateAndAddPiece(piece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_ | null, genDepth: number): $StructurePiece;
        getActivePieceTypeThreadLocal(): $ThreadLocal<any>;
        static MAGIC_START_Y: number;
        static imposedPiece: $Class<$StrongholdPieces$StrongholdPiece>;
        static SMOOTH_STONE_SELECTOR: $StrongholdPieces$SmoothStoneSelector;
        constructor();
        get activePieceTypeThreadLocal(): $ThreadLocal<any>;
    }
    export class $NetherFortressPieces$BridgeEndFiller extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeEndFiller;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckPieces$ShipwreckPiece extends $TemplateStructurePiece {
        calculateBeachedPosition(maxHeight: number, random: $RandomSource): number;
        adjustPositionHeight(height: number): void;
        isTooBigToFitInWorldGenRegion(): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_, isBeached: boolean);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
        get tooBigToFitInWorldGenRegion(): boolean;
    }
    export class $WoodlandMansionPieces$WoodlandMansionPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
        constructor(structureTemplateManager: $StructureTemplateManager, templateName: string, templatePosition: $BlockPos_, rotation: $Rotation_, mirror: $Mirror_);
        constructor(structureTemplateManager: $StructureTemplateManager, templateName: string, templatePosition: $BlockPos_, rotation: $Rotation_);
    }
    export class $WoodlandMansionPieces$FirstFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $NetherFossilPieces$NetherFossilPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_);
        constructor(structureManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleCorridorStairsPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleCorridorStairsPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentStructure extends $Structure {
        static regeneratePiecesAfterLoad(chunkPos: $ChunkPos, seed: number, arg2: $PiecesContainer_): $PiecesContainer;
        static CODEC: $MapCodec<$OceanMonumentStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $OceanMonumentPieces$OceanMonumentPenthouse extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, box: $BoundingBox);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PortalRoom extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$PortalRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$StairsRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, genDepth: number, orientation: $Direction_): $NetherFortressPieces$StairsRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PieceWeight implements $XPieceDataExtension {
        isValid(): boolean;
        doPlace(genDepth: number): boolean;
        c2me$getGeneratedCountThreadLocal(): $ThreadLocal<any>;
        placeCount: number;
        pieceClass: $Class<$StrongholdPieces$StrongholdPiece>;
        maxPlaceCount: number;
        weight: number;
        constructor(pieceClass: $Class<$StrongholdPieces$StrongholdPiece>, weight: number, maxPlaceCount: number);
        get valid(): boolean;
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition, random: $RandomSource);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece extends $StructurePiece {
        randomSmallDoor(random: $RandomSource): $StrongholdPieces$StrongholdPiece$SmallDoorType;
        generateSmallDoor(level: $WorldGenLevel, random: $RandomSource, box: $BoundingBox, type: $StrongholdPieces$StrongholdPiece$SmallDoorType_, x: number, y: number, z: number): void;
        generateSmallDoorChildLeft(startPiece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number): $StructurePiece;
        static isOkBox(box: $BoundingBox): boolean;
        generateSmallDoorChildForward(startPiece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number): $StructurePiece;
        generateSmallDoorChildRight(startPiece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number): $StructurePiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(type: $StructurePieceType_, genDepth: number, boundingBox: $BoundingBox);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$FiveCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$FiveCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$SmoothStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $WoodlandMansionPieces$ThirdFloorRoomCollection extends $WoodlandMansionPieces$SecondFloorRoomCollection {
    }
    export class $JungleTemplePiece$MossStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $NetherFortressPieces$RoomCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$RoomCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $DesertPyramidPiece extends $ScatteredFeaturePiece {
        getRandomCollapsedRoofPos(): $BlockPos;
        getPotentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        static WIDTH: number;
        static DEPTH: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
        get randomCollapsedRoofPos(): $BlockPos;
        get potentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
    }
    export class $RuinedPortalPiece extends $TemplateStructurePiece {
        static getHeightMapType(verticalPlacement: $RuinedPortalPiece$VerticalPlacement_): $Heightmap$Types;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, templatePosition: $BlockPos_, verticalPlacement: $RuinedPortalPiece$VerticalPlacement_, properties: $RuinedPortalPiece$Properties, location: $ResourceLocation_, template: $StructureTemplate, rotation: $Rotation_, mirror: $Mirror_, pivotPos: $BlockPos_);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $EndCityStructure extends $Structure {
        static CODEC: $MapCodec<$EndCityStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
}
