import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $Holder_, $HolderSet, $Vec3i, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ChunkGeneratorStructureState } from "@package/net/minecraft/world/level/chunk";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Enum, $Record } from "@package/java/lang";
import { $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Products$P5 } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/placement" {
    export class $StructurePlacement$FrequencyReducer {
    }
    export interface $StructurePlacement$FrequencyReducer {
        shouldGenerate(levelSeed: number, arg1: number, salt: number, regionX: number, regionZ: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$FrequencyReducer}.
     */
    export type $StructurePlacement$FrequencyReducer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export interface $StructurePlacementType<SP> extends RegistryMarked<RegistryTypes.WorldgenStructurePlacementTag, RegistryTypes.WorldgenStructurePlacement> {}
    export class $RandomSpreadType extends $Enum<$RandomSpreadType> implements $StringRepresentable {
        static values(): $RandomSpreadType[];
        static valueOf(arg0: string): $RandomSpreadType;
        evaluate(random: $RandomSource, bound: number): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$RandomSpreadType>;
        static LINEAR: $RandomSpreadType;
        static TRIANGULAR: $RandomSpreadType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RandomSpreadType}.
     */
    export type $RandomSpreadType_ = "linear" | "triangular";
    export class $StructurePlacementType<SP extends $StructurePlacement> {
        static RANDOM_SPREAD: $StructurePlacementType<$RandomSpreadStructurePlacement>;
        static CONCENTRIC_RINGS: $StructurePlacementType<$ConcentricRingsStructurePlacement>;
    }
    export interface $StructurePlacementType<SP extends $StructurePlacement> {
        codec(): $MapCodec<SP>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacementType}.
     */
    export type $StructurePlacementType_<SP> = RegistryTypes.WorldgenStructurePlacement | (() => $MapCodec_<SP>);
    export class $StructurePlacement$FrequencyReductionMethod extends $Enum<$StructurePlacement$FrequencyReductionMethod> implements $StringRepresentable {
        static values(): $StructurePlacement$FrequencyReductionMethod[];
        static valueOf(arg0: string): $StructurePlacement$FrequencyReductionMethod;
        shouldGenerate(levelSeed: number, arg1: number, salt: number, regionX: number, regionZ: number): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$StructurePlacement$FrequencyReductionMethod>;
        static LEGACY_TYPE_3: $StructurePlacement$FrequencyReductionMethod;
        static LEGACY_TYPE_2: $StructurePlacement$FrequencyReductionMethod;
        static LEGACY_TYPE_1: $StructurePlacement$FrequencyReductionMethod;
        static DEFAULT: $StructurePlacement$FrequencyReductionMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$FrequencyReductionMethod}.
     */
    export type $StructurePlacement$FrequencyReductionMethod_ = "default" | "legacy_type_1" | "legacy_type_2" | "legacy_type_3";
    export class $StructurePlacement {
        type(): $StructurePlacementType<never>;
        frequency(): number;
        salt(): number;
        applyAdditionalChunkRestrictions(regionX: number, regionZ: number, levelSeed: number): boolean;
        frequencyReductionMethod(): $StructurePlacement$FrequencyReductionMethod;
        isPlacementChunk(structureState: $ChunkGeneratorStructureState, x: number, z: number): boolean;
        locateOffset(): $Vec3i;
        exclusionZone(): ($StructurePlacement$ExclusionZone) | undefined;
        isStructureChunk(structureState: $ChunkGeneratorStructureState, x: number, z: number): boolean;
        getLocatePos(chunkPos: $ChunkPos): $BlockPos;
        static placementCodec<S extends $StructurePlacement>(instance: $RecordCodecBuilder$Instance<S>): $Products$P5<$RecordCodecBuilder$Mu<S>, $Vec3i, $StructurePlacement$FrequencyReductionMethod, number, number, ($StructurePlacement$ExclusionZone) | undefined>;
        applyInteractionsWithOtherStructures(structureState: $ChunkGeneratorStructureState, x: number, z: number): boolean;
        static CODEC: $Codec<$StructurePlacement>;
        constructor(locateOffset: $Vec3i, frequencyReductionMethod: $StructurePlacement$FrequencyReductionMethod_, frequency: number, salt: number, exclusionZone: ($StructurePlacement$ExclusionZone_) | undefined);
    }
    /**
     * @deprecated
     */
    export class $StructurePlacement$ExclusionZone extends $Record {
        chunkCount(): number;
        isPlacementForbidden(structureState: $ChunkGeneratorStructureState, x: number, z: number): boolean;
        otherSet(): $Holder<$StructureSet>;
        static CODEC: $Codec<$StructurePlacement$ExclusionZone>;
        constructor(arg0: $Holder_<$StructureSet>, arg1: number);
    }
    export class $RandomSpreadStructurePlacement extends $StructurePlacement {
        spacing(): number;
        separation(): number;
        spreadType(): $RandomSpreadType;
        getPotentialStructureChunk(seed: number, arg1: number, regionX: number): $ChunkPos;
        static CODEC: $MapCodec<$RandomSpreadStructurePlacement>;
        constructor(spacing: number, separation: number, spreadType: $RandomSpreadType_, salt: number);
        constructor(locateOffset: $Vec3i, frequencyReductionMethod: $StructurePlacement$FrequencyReductionMethod_, frequency: number, salt: number, exclusionZone: ($StructurePlacement$ExclusionZone_) | undefined, spacing: number, separation: number, spreadType: $RandomSpreadType_);
    }
    export class $ConcentricRingsStructurePlacement extends $StructurePlacement {
        count(): number;
        spread(): number;
        distance(): number;
        preferredBiomes(): $HolderSet<$Biome>;
        static CODEC: $MapCodec<$ConcentricRingsStructurePlacement>;
        constructor(distance: number, spread: number, count: number, preferrredBiomes: $HolderSet_<$Biome>);
        constructor(locateOffset: $Vec3i, frequencyReductionMethod: $StructurePlacement$FrequencyReductionMethod_, frequency: number, salt: number, exclusionZone: ($StructurePlacement$ExclusionZone_) | undefined, distance: number, spread: number, count: number, preferredBiomes: $HolderSet_<$Biome>);
    }
}
