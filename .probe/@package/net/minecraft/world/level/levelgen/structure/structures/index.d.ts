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
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_, arg4: number);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
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
        constructor(arg0: $Structure$StructureSettings_, arg1: $Holder_<$StructureTemplatePool>, arg2: number, arg3: $HeightProvider, arg4: boolean, arg5: $Heightmap$Types_);
        constructor(arg0: $Structure$StructureSettings_, arg1: $Holder_<$StructureTemplatePool>, arg2: ($ResourceLocation_) | undefined, arg3: number, arg4: $HeightProvider, arg5: boolean, arg6: ($Heightmap$Types_) | undefined, arg7: number, arg8: $List_<$PoolAliasBinding>, arg9: $DimensionPadding_, arg10: $LiquidSettings_);
        constructor(arg0: $Structure$StructureSettings_, arg1: $Holder_<$StructureTemplatePool>, arg2: number, arg3: $HeightProvider, arg4: boolean);
    }
    export class $OceanMonumentPieces$MonumentBuilding extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        static BIOME_RANGE_CHECK: number;
        constructor(arg0: $RandomSource, arg1: number, arg2: number, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$RoomDefinition {
        isSpecial(): boolean;
        findSource(arg0: number): boolean;
        setConnection(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition): void;
        countOpenings(): number;
        updateOpenings(): void;
        hasOpening: boolean[];
        claimed: boolean;
        isSource: boolean;
        index: number;
        connections: $OceanMonumentPieces$RoomDefinition[];
        constructor(arg0: number);
        get special(): boolean;
    }
    export class $OceanMonumentPieces$FitDoubleXYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$FitSimpleTopRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanRuinPieces {
        static addPieces(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $StructurePieceAccessor, arg4: $RandomSource, arg5: $OceanRuinStructure): void;
        static WARM_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        static COLD_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        constructor();
    }
    export class $IglooStructure extends $Structure {
        static CODEC: $MapCodec<$IglooStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $StrongholdStructure extends $Structure {
        static CODEC: $MapCodec<$StrongholdStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $OceanRuinStructure extends $Structure {
        largeProbability: number;
        clusterProbability: number;
        static CODEC: $MapCodec<$OceanRuinStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        biomeTemp: $OceanRuinStructure$Type;
        constructor(arg0: $Structure$StructureSettings_, arg1: $OceanRuinStructure$Type_, arg2: number, arg3: number);
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
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $MineshaftStructure extends $Structure {
        static CODEC: $MapCodec<$MineshaftStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_, arg1: $MineshaftStructure$Type_);
    }
    export class $MineshaftPieces$MineShaftPiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
    }
    export class $RuinedPortalStructure$Setup extends $Record {
        weight(): number;
        canBeCold(): boolean;
        overgrown(): boolean;
        vines(): boolean;
        replaceWithBlackstone(): boolean;
        airPocketProbability(): number;
        placement(): $RuinedPortalPiece$VerticalPlacement;
        mossiness(): number;
        static CODEC: $Codec<$RuinedPortalStructure$Setup>;
        constructor(arg0: $RuinedPortalPiece$VerticalPlacement_, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number);
    }
    export class $WoodlandMansionPieces {
        static generateMansion(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $List_<$WoodlandMansionPieces$WoodlandMansionPiece>, arg4: $RandomSource): void;
        constructor();
    }
    export class $StrongholdPieces$FillerCorridor extends $StrongholdPieces$StrongholdPiece {
        static findPieceBox(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
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
        getSerializedName(): string;
        static byId(arg0: number): $MineshaftStructure$Type;
        getFenceState(): $BlockState;
        getWoodState(): $BlockState;
        getPlanksState(): $BlockState;
        getRemappedEnumConstantName(): string;
        static MESA: $MineshaftStructure$Type;
        static CODEC: $Codec<$MineshaftStructure$Type>;
        static NORMAL: $MineshaftStructure$Type;
        get serializedName(): string;
        get fenceState(): $BlockState;
        get woodState(): $BlockState;
        get planksState(): $BlockState;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MineshaftStructure$Type}.
     */
    export type $MineshaftStructure$Type_ = "normal" | "mesa";
    export class $NetherFortressPieces$BridgeStraight extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$BridgeStraight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$BridgeCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$BridgeCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
        constructor(arg0: number, arg1: number, arg2: $Direction_);
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
    }
    export class $EndCityPieces {
        static startHouseTower(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $List_<$StructurePiece>, arg4: $RandomSource): void;
        static addPiece(arg0: $StructureTemplateManager, arg1: $EndCityPieces$EndCityPiece, arg2: $BlockPos_, arg3: string, arg4: $Rotation_, arg5: boolean): $EndCityPieces$EndCityPiece;
        static recursiveChildren(arg0: $StructureTemplateManager, arg1: $EndCityPieces$SectionGenerator, arg2: number, arg3: $EndCityPieces$EndCityPiece, arg4: $BlockPos_, arg5: $List_<$StructurePiece>, arg6: $RandomSource): boolean;
        static addHelper(arg0: $List_<$StructurePiece>, arg1: $EndCityPieces$EndCityPiece): $EndCityPieces$EndCityPiece;
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
        constructor(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean);
    }
    export class $RuinedPortalStructure extends $Structure {
        static CODEC: $MapCodec<$RuinedPortalStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_, arg1: $List_<$RuinedPortalStructure$Setup_>);
        constructor(arg0: $Structure$StructureSettings_, arg1: $RuinedPortalStructure$Setup_);
    }
    export class $StrongholdPieces$StartPiece extends $StrongholdPieces$StairsDown {
        previousPiece: $StrongholdPieces$PieceWeight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        portalRoomPiece: $StrongholdPieces$PortalRoom;
        pendingChildren: $List<$StructurePiece>;
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces {
        static findAndCreateBridgePieceFactory(arg0: $NetherFortressPieces$PieceWeight, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: $Direction_, arg7: number): $NetherFortressPieces$NetherBridgePiece;
        static BRIDGE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static CASTLE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static MAGIC_START_Y: number;
        constructor();
    }
    export class $NetherFortressPieces$NetherBridgePiece extends $StructurePiece {
        generateChildForward(arg0: $NetherFortressPieces$StartPiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number, arg5: boolean): $StructurePiece;
        generateChildRight(arg0: $NetherFortressPieces$StartPiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number, arg5: boolean): $StructurePiece;
        generateChildLeft(arg0: $NetherFortressPieces$StartPiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number, arg5: boolean): $StructurePiece;
        static isOkBox(arg0: $BoundingBox): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftStairs extends $MineshaftPieces$MineShaftPiece {
        static findStairs(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_, arg3: $MineshaftStructure$Type_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentEntryRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressStructure extends $Structure {
        static FORTRESS_ENEMIES: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $MapCodec<$NetherFortressStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $MineshaftPieces$MineShaftCorridor extends $MineshaftPieces$MineShaftPiece {
        fillPillarDownOrChainUp(arg0: $WorldGenLevel, arg1: $BlockState_, arg2: number, arg3: number, arg4: number, arg5: $BoundingBox): void;
        static findCorridorSize(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_, arg4: $MineshaftStructure$Type_);
    }
    export class $OceanMonumentPieces {
    }
    export class $OceanMonumentPieces$FitDoubleYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Straight extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$Straight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece$SmallDoorType extends $Enum<$StrongholdPieces$StrongholdPiece$SmallDoorType> {
    }
    /**
     * Values that may be interpreted as {@link $StrongholdPieces$StrongholdPiece$SmallDoorType}.
     */
    export type $StrongholdPieces$StrongholdPiece$SmallDoorType_ = "opening" | "wood_door" | "grates" | "iron_door";
    export class $NetherFortressPieces$CastleCorridorTBalconyPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleCorridorTBalconyPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$MonsterThrone extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $NetherFortressPieces$MonsterThrone;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorCrossingPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleSmallCorridorCrossingPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $IglooPieces {
        static addPieces(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $StructurePieceAccessor, arg4: $RandomSource): void;
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
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$PrisonHall extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$PrisonHall;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFossilStructure extends $Structure {
        static CODEC: $MapCodec<$NetherFossilStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        height: $HeightProvider;
        constructor(arg0: $Structure$StructureSettings_, arg1: $HeightProvider);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
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
        constructor(arg0: $Direction_, arg1: $BoundingBox, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftCrossing extends $MineshaftPieces$MineShaftPiece {
        static findCrossing(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_, arg3: $MineshaftStructure$Type_);
        constructor(arg0: $CompoundTag_);
    }
    export class $BuriedTreasurePieces$BuriedTreasurePiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $BlockPos_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorRightTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$CastleSmallCorridorRightTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$ChestCorridor extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$ChestCorridor;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
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
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleTopRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$StairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$StairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: number, arg3: number, arg4: $Direction_);
    }
    export class $OceanMonumentPieces$FitDoubleXRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$MonumentRoomFitter {
    }
    export interface $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$CastleStalkRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleStalkRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $ShipwreckStructure extends $Structure {
        static CODEC: $MapCodec<$ShipwreckStructure>;
        isBeached: boolean;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_, arg1: boolean);
    }
    export class $NetherFortressPieces$CastleEntrance extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$CastleEntrance;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftRoom extends $MineshaftPieces$MineShaftPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $RandomSource, arg2: number, arg3: number, arg4: $MineshaftStructure$Type_);
        constructor(arg0: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$MansionGrid {
        get1x2RoomDirection(arg0: $WoodlandMansionPieces$SimpleGrid, arg1: number, arg2: number, arg3: number, arg4: number): $Direction;
        static isHouse(arg0: $WoodlandMansionPieces$SimpleGrid, arg1: number, arg2: number): boolean;
        isRoomId(arg0: $WoodlandMansionPieces$SimpleGrid, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        thirdFloorGrid: $WoodlandMansionPieces$SimpleGrid;
        floorRooms: $WoodlandMansionPieces$SimpleGrid[];
        entranceX: number;
        entranceY: number;
        baseGrid: $WoodlandMansionPieces$SimpleGrid;
        constructor(arg0: $RandomSource);
    }
    export class $WoodlandMansionPieces$MansionPiecePlacer {
    }
    export class $BuriedTreasureStructure extends $Structure {
        static CODEC: $MapCodec<$BuriedTreasureStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces$StraightStairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$StraightStairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SimpleGrid {
        get(arg0: number, arg1: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        setif(arg0: number, arg1: number, arg2: number, arg3: number): void;
        edgesTo(arg0: number, arg1: number, arg2: number): boolean;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $NetherFortressPieces$CastleSmallCorridorPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleSmallCorridorPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $EndCityPieces$EndCityPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructureTemplateManager, arg1: string, arg2: $BlockPos_, arg3: $Rotation_, arg4: boolean);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $OceanRuinPieces$OceanRuinPiece extends $TemplateStructurePiece {
        static create(arg0: $StructureTemplateManager, arg1: $CompoundTag_): $OceanRuinPieces$OceanRuinPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_, arg4: number, arg5: $OceanRuinStructure$Type_, arg6: boolean);
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
        static valueOf(arg0: string): $RuinedPortalPiece$VerticalPlacement;
        static byName(arg0: string): $RuinedPortalPiece$VerticalPlacement;
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
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$RoomCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$RoomCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        type: number;
        static DEPTH: number;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$LeftTurn extends $StrongholdPieces$Turn {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$LeftTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $ShipwreckPieces {
        static addRandomPiece(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $StructurePieceAccessor, arg4: $RandomSource, arg5: boolean): $ShipwreckPieces$ShipwreckPiece;
        static MARKERS_TO_LOOT: $Map<string, $ResourceKey<$LootTable>>;
        static PIVOT: $BlockPos;
        constructor();
    }
    export class $StrongholdPieces$Library extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$Library;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        static TALL_HEIGHT: number;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFossilPieces {
        static addPieces(arg0: $StructureTemplateManager, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: $BlockPos_): void;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $JungleTempleStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$JungleTempleStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $WoodlandMansionStructure extends $Structure {
        static CODEC: $MapCodec<$WoodlandMansionStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $BuriedTreasurePieces {
        constructor();
    }
    export class $MineshaftPieces {
        static generateAndAddPiece(arg0: $StructurePiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: $Direction_, arg7: number): $MineshaftPieces$MineShaftPiece;
        static MAGIC_START_Y: number;
        static LOGGER: $Logger;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentCoreRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $SwampHutStructure extends $Structure {
        static CODEC: $MapCodec<$SwampHutStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $NetherFortressPieces$PieceWeight implements $XPieceDataExtension {
        isValid(): boolean;
        c2me$getGeneratedCountThreadLocal(): $ThreadLocal<any>;
        doPlace(arg0: number): boolean;
        placeCount: number;
        allowInRow: boolean;
        pieceClass: $Class<$NetherFortressPieces$NetherBridgePiece>;
        maxPlaceCount: number;
        weight: number;
        constructor(arg0: $Class<$NetherFortressPieces$NetherBridgePiece>, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: $Class<$NetherFortressPieces$NetherBridgePiece>, arg1: number, arg2: number);
        get valid(): boolean;
    }
    export class $StrongholdPieces$RightTurn extends $StrongholdPieces$Turn {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$RightTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
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
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces implements $IStrongholdGenerator {
        getActivePieceTypeThreadLocal(): $ThreadLocal<any>;
        static generateAndAddPiece(arg0: $StrongholdPieces$StartPiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: $Direction_, arg7: number): $StructurePiece;
        static resetPieces(): void;
        static MAGIC_START_Y: number;
        static imposedPiece: $Class<$StrongholdPieces$StrongholdPiece>;
        static SMOOTH_STONE_SELECTOR: $StrongholdPieces$SmoothStoneSelector;
        constructor();
        get activePieceTypeThreadLocal(): $ThreadLocal<any>;
    }
    export class $NetherFortressPieces$BridgeEndFiller extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$BridgeEndFiller;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $ShipwreckPieces$ShipwreckPiece extends $TemplateStructurePiece {
        isTooBigToFitInWorldGenRegion(): boolean;
        adjustPositionHeight(arg0: number): void;
        calculateBeachedPosition(arg0: number, arg1: $RandomSource): number;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_, arg4: boolean);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
        get tooBigToFitInWorldGenRegion(): boolean;
    }
    export class $WoodlandMansionPieces$WoodlandMansionPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
        constructor(arg0: $StructureTemplateManager, arg1: string, arg2: $BlockPos_, arg3: $Rotation_, arg4: $Mirror_);
        constructor(arg0: $StructureTemplateManager, arg1: string, arg2: $BlockPos_, arg3: $Rotation_);
    }
    export class $WoodlandMansionPieces$FirstFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection {
    }
    export class $NetherFossilPieces$NetherFossilPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleCorridorStairsPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleCorridorStairsPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentStructure extends $Structure {
        static regeneratePiecesAfterLoad(arg0: $ChunkPos, arg1: number, arg2: $PiecesContainer_): $PiecesContainer;
        static CODEC: $MapCodec<$OceanMonumentStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $OceanMonumentPieces$OceanMonumentPenthouse extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $BoundingBox);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$PortalRoom extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $StrongholdPieces$PortalRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$StairsRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $NetherFortressPieces$StairsRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$PieceWeight implements $XPieceDataExtension {
        isValid(): boolean;
        c2me$getGeneratedCountThreadLocal(): $ThreadLocal<any>;
        doPlace(arg0: number): boolean;
        placeCount: number;
        pieceClass: $Class<$StrongholdPieces$StrongholdPiece>;
        maxPlaceCount: number;
        weight: number;
        constructor(arg0: $Class<$StrongholdPieces$StrongholdPiece>, arg1: number, arg2: number);
        get valid(): boolean;
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition, arg2: $RandomSource);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece extends $StructurePiece {
        generateSmallDoorChildRight(arg0: $StrongholdPieces$StartPiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number): $StructurePiece;
        generateSmallDoorChildForward(arg0: $StrongholdPieces$StartPiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number): $StructurePiece;
        generateSmallDoorChildLeft(arg0: $StrongholdPieces$StartPiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number): $StructurePiece;
        generateSmallDoor(arg0: $WorldGenLevel, arg1: $RandomSource, arg2: $BoundingBox, arg3: $StrongholdPieces$StrongholdPiece$SmallDoorType_, arg4: number, arg5: number, arg6: number): void;
        randomSmallDoor(arg0: $RandomSource): $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static isOkBox(arg0: $BoundingBox): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$FiveCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$FiveCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$SmoothStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $WoodlandMansionPieces$ThirdFloorRoomCollection extends $WoodlandMansionPieces$SecondFloorRoomCollection {
    }
    export class $JungleTemplePiece$MossStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $NetherFortressPieces$RoomCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$RoomCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $DesertPyramidPiece extends $ScatteredFeaturePiece {
        getPotentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
        getRandomCollapsedRoofPos(): $BlockPos;
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        static WIDTH: number;
        static DEPTH: number;
        height: number;
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
        get potentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
        get randomCollapsedRoofPos(): $BlockPos;
    }
    export class $RuinedPortalPiece extends $TemplateStructurePiece {
        static getHeightMapType(arg0: $RuinedPortalPiece$VerticalPlacement_): $Heightmap$Types;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $RuinedPortalPiece$VerticalPlacement_, arg3: $RuinedPortalPiece$Properties, arg4: $ResourceLocation_, arg5: $StructureTemplate, arg6: $Rotation_, arg7: $Mirror_, arg8: $BlockPos_);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $EndCityStructure extends $Structure {
        static CODEC: $MapCodec<$EndCityStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
}
