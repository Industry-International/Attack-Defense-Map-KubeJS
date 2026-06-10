import { $MapCodec_, $DynamicOps, $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $PoolAliasLookup_ } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List, $List_ } from "@package/java/util";
import { $StructureTemplatePoolAccessor } from "@package/net/blay09/mods/waystones/mixin";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $SequencedPriorityIterator } from "@package/net/minecraft/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder, $BlockPos_, $Registry, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Record } from "@package/java/lang";
import { $PoolElementStructurePiece, $BoundingBox, $Structure$GenerationStub, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $WorldGenLevel, $LevelHeightAccessor, $StructureManager } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $StructureTemplate$StructureBlockInfo, $StructureProcessorList, $StructureTemplate$StructureBlockInfo_, $StructureProcessor, $LiquidSettings_, $LiquidSettings, $StructureTemplateManager, $StructurePlaceSettings, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $TemplatePoolAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WaystoneStructurePoolElement } from "@package/net/blay09/mods/waystones/worldgen";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
export * as alias from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools" {
    export class $StructurePoolElement {
        static list(arg0: $List_<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>;
        static single(arg0: string, arg1: $Holder_<$StructureProcessorList>, arg2: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string, arg1: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string, arg1: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static empty(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>;
        static feature(arg0: $Holder_<$PlacedFeature>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>;
        getType(): $StructurePoolElementType<never>;
        getSize(arg0: $StructureTemplateManager, arg1: $Rotation_): $Vec3i;
        static legacy(arg0: string, arg1: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static legacy(arg0: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        place(arg0: $StructureTemplateManager, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $BlockPos_, arg5: $BlockPos_, arg6: $Rotation_, arg7: $BoundingBox, arg8: $RandomSource, arg9: $LiquidSettings_, arg10: boolean): boolean;
        handleDataMarker(arg0: $LevelAccessor, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $BlockPos_, arg3: $Rotation_, arg4: $RandomSource, arg5: $BoundingBox): void;
        static projectionCodec<E extends $StructurePoolElement>(): $RecordCodecBuilder<E, $StructureTemplatePool$Projection>;
        setProjection(arg0: $StructureTemplatePool$Projection_): $StructurePoolElement;
        getProjection(): $StructureTemplatePool$Projection;
        getBoundingBox(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_): $BoundingBox;
        getGroundLevelDelta(): number;
        getShuffledJigsawBlocks(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $RandomSource): $List<$StructureTemplate$StructureBlockInfo>;
        static CODEC: $Codec<$StructurePoolElement>;
        constructor(arg0: $StructureTemplatePool$Projection_);
        get type(): $StructurePoolElementType<never>;
        get groundLevelDelta(): number;
    }
    export class $JigsawPlacement$Placer {
        tryPlacingChildren(arg0: $PoolElementStructurePiece, arg1: $MutableObject<$VoxelShape>, arg2: number, arg3: boolean, arg4: $LevelHeightAccessor, arg5: $RandomState, arg6: $PoolAliasLookup_, arg7: $LiquidSettings_): void;
        handler$gnd000$moonlight$ml$AddSpawnBoxPieces(arg0: $PoolElementStructurePiece, arg1: $MutableObject<any>, arg2: number, arg3: boolean, arg4: $LevelHeightAccessor, arg5: $RandomState, arg6: $PoolAliasLookup_, arg7: $LiquidSettings_, arg8: $CallbackInfo): void;
        placing: $SequencedPriorityIterator<$JigsawPlacement$PieceState>;
        constructor(arg0: $Registry<$StructureTemplatePool_>, arg1: number, arg2: $ChunkGenerator, arg3: $StructureTemplateManager, arg4: $List_<$PoolElementStructurePiece>, arg5: $RandomSource);
    }
    export class $JigsawPlacement$PieceState extends $Record {
    }
    export class $JigsawPlacement {
        static addPieces(arg0: $Structure$GenerationContext_, arg1: $Holder_<$StructureTemplatePool>, arg2: ($ResourceLocation_) | undefined, arg3: number, arg4: $BlockPos_, arg5: boolean, arg6: ($Heightmap$Types_) | undefined, arg7: number, arg8: $PoolAliasLookup_, arg9: $DimensionPadding_, arg10: $LiquidSettings_): ($Structure$GenerationStub) | undefined;
        static generateJigsaw(arg0: $ServerLevel, arg1: $Holder_<$StructureTemplatePool>, arg2: $ResourceLocation_, arg3: number, arg4: $BlockPos_, arg5: boolean): boolean;
        static LOGGER: $Logger;
        constructor();
    }
    export class $SinglePoolElement extends $StructurePoolElement implements $WaystoneStructurePoolElement {
        getSettings(arg0: $Rotation_, arg1: $BoundingBox, arg2: $LiquidSettings_, arg3: boolean): $StructurePlaceSettings;
        getTemplate(): $Either<any, any>;
        getTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
        waystones$setIsWaystone(arg0: boolean): void;
        waystones$isWaystone(): boolean;
        static sortBySelectionPriority(arg0: $List_<$StructureTemplate$StructureBlockInfo_>): void;
        handler$gjj000$waystones$place(arg0: $StructureTemplateManager, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $BlockPos_, arg5: $BlockPos_, arg6: $Rotation_, arg7: $BoundingBox, arg8: $RandomSource, arg9: $LiquidSettings_, arg10: boolean, arg11: $CallbackInfoReturnable<any>): void;
        static overrideLiquidSettingsCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, ($LiquidSettings) | undefined>;
        static processorsCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, $Holder<$StructureProcessorList>>;
        static templateCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, $Either<$ResourceLocation, $StructureTemplate>>;
        getDataMarkers(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: boolean): $List<$StructureTemplate$StructureBlockInfo>;
        template: $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$SinglePoolElement>;
        overrideLiquidSettings: ($LiquidSettings) | undefined;
        processors: $Holder<$StructureProcessorList>;
        constructor(arg0: $Either<$ResourceLocation_, $StructureTemplate>, arg1: $Holder_<$StructureProcessorList>, arg2: $StructureTemplatePool$Projection_, arg3: ($LiquidSettings_) | undefined);
    }
    export class $ListPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$ListPoolElement>;
        elements: $List<$StructurePoolElement>;
        constructor(arg0: $List_<$StructurePoolElement>, arg1: $StructureTemplatePool$Projection_);
    }
    export interface $StructureTemplatePool extends RegistryMarked<RegistryTypes.WorldgenTemplatePoolTag, RegistryTypes.WorldgenTemplatePool> {}
    export class $EmptyPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$EmptyPoolElement>;
        static INSTANCE: $EmptyPoolElement;
    }
    export class $FeaturePoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$FeaturePoolElement>;
        constructor(arg0: $Holder_<$PlacedFeature>, arg1: $StructureTemplatePool$Projection_);
    }
    export class $StructurePoolElementType<P extends $StructurePoolElement> {
        static register<P extends $StructurePoolElement>(arg0: string, arg1: $MapCodec_<P>): $StructurePoolElementType<P>;
        static SINGLE: $StructurePoolElementType<$SinglePoolElement>;
        static LEGACY: $StructurePoolElementType<$LegacySinglePoolElement>;
        static FEATURE: $StructurePoolElementType<$FeaturePoolElement>;
        static LIST: $StructurePoolElementType<$ListPoolElement>;
        static EMPTY: $StructurePoolElementType<$EmptyPoolElement>;
    }
    export interface $StructurePoolElementType<P extends $StructurePoolElement> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolElementType}.
     */
    export type $StructurePoolElementType_<P> = RegistryTypes.WorldgenStructurePoolElement | (() => $MapCodec_<P>);
    export class $DimensionPadding extends $Record {
        top(): number;
        bottom(): number;
        hasEqualTopAndBottom(): boolean;
        static ZERO: $DimensionPadding;
        static CODEC: $Codec<$DimensionPadding>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
    }
    export class $LegacySinglePoolElement extends $SinglePoolElement {
        template: $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$LegacySinglePoolElement>;
        overrideLiquidSettings: ($LiquidSettings) | undefined;
        processors: $Holder<$StructureProcessorList>;
        constructor(arg0: $Either<$ResourceLocation_, $StructureTemplate>, arg1: $Holder_<$StructureProcessorList>, arg2: $StructureTemplatePool$Projection_, arg3: ($LiquidSettings_) | undefined);
    }
    export interface $StructurePoolElementType extends RegistryMarked<RegistryTypes.WorldgenStructurePoolElementTag, RegistryTypes.WorldgenStructurePoolElement> {}
    export class $JigsawJunction {
        static deserialize<T>(arg0: $Dynamic<T>): $JigsawJunction;
        serialize<T>(arg0: $DynamicOps<T>): $Dynamic<T>;
        getDeltaY(): number;
        getDestProjection(): $StructureTemplatePool$Projection;
        getSourceGroundY(): number;
        getSourceZ(): number;
        getSourceX(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $StructureTemplatePool$Projection_);
        get deltaY(): number;
        get destProjection(): $StructureTemplatePool$Projection;
        get sourceGroundY(): number;
        get sourceZ(): number;
        get sourceX(): number;
    }
    export class $StructureTemplatePool implements $TemplatePoolAccess, $StructureTemplatePoolAccessor {
        getMaxSize(arg0: $StructureTemplateManager): number;
        size(): number;
        getFallback(): $Holder<$StructureTemplatePool>;
        getRandomTemplate(arg0: $RandomSource): $StructurePoolElement;
        getShuffledTemplates(arg0: $RandomSource): $List<$StructurePoolElement>;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        static CODEC: $Codec<$Holder<$StructureTemplatePool>>;
        static DIRECT_CODEC: $Codec<$StructureTemplatePool>;
        constructor(arg0: $Holder_<$StructureTemplatePool>, arg1: $List_<$Pair<$StructurePoolElement, number>>);
        constructor(arg0: $Holder_<$StructureTemplatePool>, arg1: $List_<$Pair<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>, number>>, arg2: $StructureTemplatePool$Projection_);
        get fallback(): $Holder<$StructureTemplatePool>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool}.
     */
    export type $StructureTemplatePool_ = RegistryTypes.WorldgenTemplatePool;
    export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
        getName(): string;
        static values(): $StructureTemplatePool$Projection[];
        static valueOf(arg0: string): $StructureTemplatePool$Projection;
        getProcessors(): $ImmutableList<$StructureProcessor>;
        static byName(arg0: string): $StructureTemplatePool$Projection;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>;
        static TERRAIN_MATCHING: $StructureTemplatePool$Projection;
        static RIGID: $StructureTemplatePool$Projection;
        get processors(): $ImmutableList<$StructureProcessor>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool$Projection}.
     */
    export type $StructureTemplatePool$Projection_ = "terrain_matching" | "rigid";
}
