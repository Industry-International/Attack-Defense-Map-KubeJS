import { $RuleBlockEntityModifier, $Passthrough } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $StructureTemplateExt } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Map, $Spliterator, $List, $Map_, $List_ } from "@package/java/util";
import { $IConnectionTemplate } from "@package/blusunrize/immersiveengineering/api/wires";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_, $Consumer_, $Function, $Function_, $Supplier } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $HolderSet_, $BlockPos_, $Vec3i, $HolderGetter, $Holder } from "@package/net/minecraft/core";
import { $Path } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Iterable, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $StructureTemplateExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create/schematics";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $StructureBlockInfoModification, $StructureTemplateAccess } from "@package/com/almostreliable/morejs/features/structure";
import { $ServerLevelAccessor, $LevelAccessor, $LevelReader, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockStatePredicate_ } from "@package/dev/latvian/mods/kubejs/block/state";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $PaletteAccess, $TemplateAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $Stream } from "@package/java/util/stream";
import { $ClipboardObject } from "@package/com/moulberry/axiom/clipboard";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Mirror_, $Mirror, $Block, $Rotation_, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
export * as rule from "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule";

declare module "@package/net/minecraft/world/level/levelgen/structure/templatesystem" {
    export class $StructureTemplate$SimplePalette implements $Iterable<$BlockState> {
        spliterator(): $Spliterator<$BlockState>;
        forEach(arg0: $Consumer_<$BlockState>): void;
    }
    export class $StructurePlaceSettings {
        copy(): $StructurePlaceSettings;
        setKnownShape(finalizeEntities: boolean): $StructurePlaceSettings;
        popProcessor(processor: $StructureProcessor): $StructurePlaceSettings;
        getProcessors(): $List<$StructureProcessor>;
        setLiquidSettings(liquidSettings: $LiquidSettings_): $StructurePlaceSettings;
        setRotationPivot(rotationPivot: $BlockPos_): $StructurePlaceSettings;
        setFinalizeEntities(finalizeEntities: boolean): $StructurePlaceSettings;
        setRotation(rotation: $Rotation_): $StructurePlaceSettings;
        getRotation(): $Rotation;
        getRandom(seedPos: $BlockPos_ | null): $RandomSource;
        shouldApplyWaterlogging(): boolean;
        shouldFinalizeEntities(): boolean;
        getBoundingBox(): $BoundingBox;
        setBoundingBox(boundingBox: $BoundingBox): $StructurePlaceSettings;
        clearProcessors(): $StructurePlaceSettings;
        addProcessor(processor: $StructureProcessor): $StructurePlaceSettings;
        setIgnoreEntities(finalizeEntities: boolean): $StructurePlaceSettings;
        isIgnoreEntities(): boolean;
        setRandom(random: $RandomSource | null): $StructurePlaceSettings;
        getMirror(): $Mirror;
        setMirror(mirror: $Mirror_): $StructurePlaceSettings;
        getRotationPivot(): $BlockPos;
        getRandomPalette(palettes: $List_<$StructureTemplate$Palette>, pos: $BlockPos_ | null): $StructureTemplate$Palette;
        getKnownShape(): boolean;
        constructor();
        get processors(): $List<$StructureProcessor>;
        set liquidSettings(value: $LiquidSettings_);
        set finalizeEntities(value: boolean);
    }
    export class $NopProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$NopProcessor>;
        static INSTANCE: $NopProcessor;
    }
    export class $StructureProcessorType<P extends $StructureProcessor> {
        static register<P extends $StructureProcessor>(name: string, codec: $MapCodec_<P>): $StructureProcessorType<P>;
        static BLOCK_AGE: $StructureProcessorType<$BlockAgeProcessor>;
        static BLACKSTONE_REPLACE: $StructureProcessorType<$BlackstoneReplaceProcessor>;
        static BLOCK_ROT: $StructureProcessorType<$BlockRotProcessor>;
        static DIRECT_CODEC: $Codec<$StructureProcessorList>;
        static LAVA_SUBMERGED_BLOCK: $StructureProcessorType<$LavaSubmergedBlockProcessor>;
        static GRAVITY: $StructureProcessorType<$GravityProcessor>;
        static JIGSAW_REPLACEMENT: $StructureProcessorType<$JigsawReplacementProcessor>;
        static NOP: $StructureProcessorType<$NopProcessor>;
        static BLOCK_IGNORE: $StructureProcessorType<$BlockIgnoreProcessor>;
        static PROTECTED_BLOCKS: $StructureProcessorType<$ProtectedBlockProcessor>;
        static CAPPED: $StructureProcessorType<$CappedProcessor>;
        static LIST_OBJECT_CODEC: $Codec<$StructureProcessorList>;
        static LIST_CODEC: $Codec<$Holder<$StructureProcessorList>>;
        static RULE: $StructureProcessorType<$RuleProcessor>;
        static SINGLE_CODEC: $Codec<$StructureProcessor>;
    }
    export interface $StructureProcessorType<P extends $StructureProcessor> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorType}.
     */
    export type $StructureProcessorType_<P> = RegistryTypes.WorldgenStructureProcessor | (() => $MapCodec_<P>);
    export class $StructureTemplate implements $TemplateAccess, $IConnectionTemplate, $StructureTemplateAccess, $StructureTemplateExtension, $StructureTemplateExt {
        getEntities(): $List<any>;
        load(blockGetter: $HolderGetter<$Block_>, tag: $CompoundTag_): void;
        static transform(targetPos: $BlockPos_, mirror: $Mirror_, rotation: $Rotation_, offset: $BlockPos_): $BlockPos;
        static transform(target: $Vec3_, mirror: $Mirror_, rotation: $Rotation_, centerOffset: $BlockPos_): $Vec3;
        save(tag: $CompoundTag_): $CompoundTag;
        getSize(): $Vec3i;
        getSize(rotation: $Rotation_): $Vec3i;
        static processBlockInfos(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $List_<$StructureTemplate$StructureBlockInfo_>, arg5: $StructureTemplate | null): $List<$StructureTemplate$StructureBlockInfo>;
        static processBlockInfos(serverLevel: $ServerLevelAccessor, offset: $BlockPos_, pos: $BlockPos_, settings: $StructurePlaceSettings, blockInfos: $List_<$StructureTemplate$StructureBlockInfo_>): $List<$StructureTemplate$StructureBlockInfo>;
        filterBlocks(pos: $BlockPos_, settings: $StructurePlaceSettings, block: $Block_, relativePosition: boolean): $ObjectArrayList<$StructureTemplate$StructureBlockInfo>;
        filterBlocks(pos: $BlockPos_, settings: $StructurePlaceSettings, block: $Block_): $List<$StructureTemplate$StructureBlockInfo>;
        static calculateRelativePosition(decorator: $StructurePlaceSettings, pos: $BlockPos_): $BlockPos;
        getPalettes(): $List<any>;
        static updateShapeAtEdge(level: $LevelAccessor, flags: number, shape: $DiscreteVoxelShape, x: number, y: number, z: number): void;
        static updateShapeAtEdge(level: $LevelAccessor, flags: number, shape: $DiscreteVoxelShape, pos: $BlockPos_): void;
        getBorderSize(): $Vec3i;
        calculateConnectedPosition(decorator: $StructurePlaceSettings, start: $BlockPos_, settings: $StructurePlaceSettings, end: $BlockPos_): $BlockPos;
        axiom$fillFromClipboard(clipboardObject: $ClipboardObject): void;
        getStoredConnections(): $List<any>;
        static getBoundingBox(startPos: $BlockPos_, rotation: $Rotation_, pivotPos: $BlockPos_, mirror: $Mirror_, size: $Vec3i): $BoundingBox;
        getBoundingBox(startPos: $BlockPos_, rotation: $Rotation_, pivotPos: $BlockPos_, mirror: $Mirror_): $BoundingBox;
        getBoundingBox(settings: $StructurePlaceSettings, startPos: $BlockPos_): $BoundingBox;
        getZeroPositionWithTransform(targetPos: $BlockPos_, mirror: $Mirror_, rotation: $Rotation_): $BlockPos;
        static getZeroPositionWithTransform(pos: $BlockPos_, mirror: $Mirror_, rotation: $Rotation_, sizeX: number, sizeZ: number): $BlockPos;
        placeInWorld(serverLevel: $ServerLevelAccessor, offset: $BlockPos_, pos: $BlockPos_, settings: $StructurePlaceSettings, random: $RandomSource, flags: number): boolean;
        fillFromWorld(level: $Level_, pos: $BlockPos_, size: $Vec3i, withEntities: boolean, toIgnore: $Block_ | null): void;
        getAuthor(): string;
        setAuthor(author: string): void;
        handler$dbd000$immersiveengineering$addConnectionsToWorld(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $RandomSource, arg5: number, arg6: $CallbackInfoReturnable<any>): void;
        handler$dbd000$immersiveengineering$writeConnectionsToNBT(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$dbd000$immersiveengineering$readConnectionsFromNBT(arg0: $HolderGetter<any>, arg1: $CompoundTag_, arg2: $CallbackInfo): void;
        static transformedVec3d(arg0: $StructurePlaceSettings, arg1: $Vec3_): $Vec3;
        sable$getSubLevels(): $List<any>;
        handler$dbd000$immersiveengineering$takeConnectionsFromWorld(arg0: $Level_, arg1: $BlockPos_, arg2: $Vec3i, arg3: boolean, arg4: $Block_, arg5: $CallbackInfo): void;
        static processEntityInfos(arg0: $StructureTemplate | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $List_<$StructureTemplate$StructureEntityInfo>): $List<$StructureTemplate$StructureEntityInfo>;
        setSize(arg0: $Vec3i): void;
        static ENTITY_TAG_POS: string;
        static BLOCK_TAG_NBT: string;
        static BLOCK_TAG_STATE: string;
        static PALETTE_LIST_TAG: string;
        static BLOCK_TAG_POS: string;
        static BLOCKS_TAG: string;
        static SIZE_TAG: string;
        static PALETTE_TAG: string;
        static ENTITY_TAG_NBT: string;
        static ENTITIES_TAG: string;
        static ENTITY_TAG_BLOCKPOS: string;
        constructor();
        get entities(): $List<any>;
        get palettes(): $List<any>;
        get borderSize(): $Vec3i;
        get storedConnections(): $List<any>;
    }
    export interface $PosRuleTestType<P> extends RegistryMarked<RegistryTypes.PosRuleTestTag, RegistryTypes.PosRuleTest> {}
    export class $RandomBlockMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$RandomBlockMatchTest>;
        constructor(block: $Block_, probability: number);
    }
    export class $StructureTemplate$Palette implements $PaletteAccess {
        blocks(block: $Block_): $List<$StructureTemplate$StructureBlockInfo>;
        blocks(): $List<$StructureTemplate$StructureBlockInfo>;
        static construct$immersiveengineering_$md$dd6cb9$0(arg0: $List_<any>): $StructureTemplate$Palette;
        constructor(blocks: $List_<$StructureTemplate$StructureBlockInfo_>);
    }
    export class $RuleTestType<P extends $RuleTest> {
        static register<P extends $RuleTest>(name: string, codec: $MapCodec_<P>): $RuleTestType<P>;
        static ALWAYS_TRUE_TEST: $RuleTestType<$AlwaysTrueTest>;
        static TAG_TEST: $RuleTestType<$TagMatchTest>;
        static BLOCKSTATE_TEST: $RuleTestType<$BlockStateMatchTest>;
        static RANDOM_BLOCK_TEST: $RuleTestType<$RandomBlockMatchTest>;
        static BLOCK_TEST: $RuleTestType<$BlockMatchTest>;
        static RANDOM_BLOCKSTATE_TEST: $RuleTestType<$RandomBlockStateMatchTest>;
    }
    export interface $RuleTestType<P extends $RuleTest> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $RuleTestType}.
     */
    export type $RuleTestType_<P> = RegistryTypes.RuleTest | (() => $MapCodec_<P>);
    export class $BlockStateMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$BlockStateMatchTest>;
        constructor(blockState: $BlockState_);
    }
    export class $AlwaysTrueTest extends $RuleTest {
        static CODEC: $MapCodec<$AlwaysTrueTest>;
        static INSTANCE: $AlwaysTrueTest;
    }
    export interface $StructureProcessorType<P> extends RegistryMarked<RegistryTypes.WorldgenStructureProcessorTag, RegistryTypes.WorldgenStructureProcessor> {}
    export class $PosAlwaysTrueTest extends $PosRuleTest {
        static CODEC: $MapCodec<$PosAlwaysTrueTest>;
        static INSTANCE: $PosAlwaysTrueTest;
    }
    export class $ProcessorRule {
        test(inputState: $BlockState_, existingState: $BlockState_, localPos: $BlockPos_, relativePos: $BlockPos_, structurePos: $BlockPos_, random: $RandomSource): boolean;
        getOutputTag(random: $RandomSource, tag: $CompoundTag_ | null): $CompoundTag;
        getOutputState(): $BlockState;
        static CODEC: $Codec<$ProcessorRule>;
        static DEFAULT_BLOCK_ENTITY_MODIFIER: $Passthrough;
        constructor(inputPredicate: $RuleTest_, locPredicate: $RuleTest_, posPredicate: $PosRuleTest, outputState: $BlockState_, blockEntityModifier: $RuleBlockEntityModifier);
        constructor(inputPredicate: $RuleTest_, locPredicate: $RuleTest_, posPredicate: $PosRuleTest, outputState: $BlockState_);
        constructor(inputPredicate: $RuleTest_, locPredicate: $RuleTest_, outputState: $BlockState_);
        get outputState(): $BlockState;
    }
    export class $CappedProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$CappedProcessor>;
        constructor(delegate: $StructureProcessor, limit: $IntProvider_);
    }
    export class $TagMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$TagMatchTest>;
        constructor(tag: $TagKey_<$Block>);
    }
    export interface $StructureProcessorList extends RegistryMarked<RegistryTypes.WorldgenProcessorListTag, RegistryTypes.WorldgenProcessorList> {}
    export class $StructureProcessor {
        getType(): $StructureProcessorType<never>;
        process(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructureTemplate$StructureBlockInfo_, arg4: $StructureTemplate$StructureBlockInfo_, arg5: $StructurePlaceSettings, arg6: $StructureTemplate | null): $StructureTemplate$StructureBlockInfo;
        /**
         * @deprecated
         */
        processBlock(level: $LevelReader, offset: $BlockPos_, pos: $BlockPos_, blockInfo: $StructureTemplate$StructureBlockInfo_, relativeBlockInfo: $StructureTemplate$StructureBlockInfo_, settings: $StructurePlaceSettings): $StructureTemplate$StructureBlockInfo;
        finalizeProcessing(serverLevel: $ServerLevelAccessor, offset: $BlockPos_, pos: $BlockPos_, originalBlockInfos: $List_<$StructureTemplate$StructureBlockInfo_>, processedBlockInfos: $List_<$StructureTemplate$StructureBlockInfo_>, settings: $StructurePlaceSettings): $List<$StructureTemplate$StructureBlockInfo>;
        processEntity(arg0: $LevelReader, arg1: $BlockPos_, arg2: $StructureTemplate$StructureEntityInfo, arg3: $StructureTemplate$StructureEntityInfo, arg4: $StructurePlaceSettings, arg5: $StructureTemplate): $StructureTemplate$StructureEntityInfo;
        constructor();
        get type(): $StructureProcessorType<never>;
    }
    export class $StructureTemplateManager$Source extends $Record {
        loader(): $Function<$ResourceLocation, ($StructureTemplate) | undefined>;
        lister(): $Supplier<$Stream<$ResourceLocation>>;
        constructor(arg0: $Function_<$ResourceLocation, ($StructureTemplate) | undefined>, arg1: $Supplier_<$Stream<$ResourceLocation>>);
    }
    export class $PosRuleTest {
        test(localPos: $BlockPos_, relativePos: $BlockPos_, structurePos: $BlockPos_, random: $RandomSource): boolean;
        getType(): $PosRuleTestType<never>;
        static CODEC: $Codec<$PosRuleTest>;
        constructor();
        get type(): $PosRuleTestType<never>;
    }
    export class $StructureTemplate$StructureEntityInfo {
        nbt: $CompoundTag;
        blockPos: $BlockPos;
        pos: $Vec3;
        constructor(pos: $Vec3_, blockPos: $BlockPos_, nbt: $CompoundTag_);
    }
    export class $StructureProcessorList {
        list(): $List<$StructureProcessor>;
        constructor(list: $List_<$StructureProcessor>);
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorList}.
     */
    export type $StructureProcessorList_ = RegistryTypes.WorldgenProcessorList;
    export class $PosRuleTestType<P extends $PosRuleTest> {
        static register<P extends $PosRuleTest>(name: string, codec: $MapCodec_<P>): $PosRuleTestType<P>;
        static ALWAYS_TRUE_TEST: $PosRuleTestType<$PosAlwaysTrueTest>;
        static AXIS_ALIGNED_LINEAR_POS_TEST: $PosRuleTestType<$AxisAlignedLinearPosTest>;
        static LINEAR_POS_TEST: $PosRuleTestType<$LinearPosTest>;
    }
    export interface $PosRuleTestType<P extends $PosRuleTest> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $PosRuleTestType}.
     */
    export type $PosRuleTestType_<P> = RegistryTypes.PosRuleTest | (() => $MapCodec_<P>);
    export class $JigsawReplacementProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$JigsawReplacementProcessor>;
        static INSTANCE: $JigsawReplacementProcessor;
    }
    export class $BlockMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$BlockMatchTest>;
        constructor(block: $Block_);
    }
    export class $LinearPosTest extends $PosRuleTest {
        static CODEC: $MapCodec<$LinearPosTest>;
        constructor(minChance: number, maxChance: number, minDist: number, maxDist: number);
    }
    export class $AxisAlignedLinearPosTest extends $PosRuleTest {
        static CODEC: $MapCodec<$AxisAlignedLinearPosTest>;
        constructor(minChance: number, maxChance: number, minDist: number, maxDist: number, axis: $Direction$Axis_);
    }
    export interface $RuleTestType<P> extends RegistryMarked<RegistryTypes.RuleTestTag, RegistryTypes.RuleTest> {}
    /**
     * Represents a (possibly randomly influenced) predicate of a given block state to be replaced during world generation.
     */
    export class $RuleTest {
        test(state: $BlockState_, random: $RandomSource): boolean;
        getType(): $RuleTestType<never>;
        static CODEC: $Codec<$RuleTest>;
        constructor();
        get type(): $RuleTestType<never>;
    }
    /**
     * Values that may be interpreted as {@link $RuleTest}.
     */
    export type $RuleTest_ = $BlockStatePredicate_ | $CompoundTag_;
    export class $BlockRotProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlockRotProcessor>;
        constructor(integrity: number);
        constructor(rottableBlocks: $HolderSet_<$Block>, integrity: number);
    }
    export class $RuleProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$RuleProcessor>;
        constructor(rules: $List_<$ProcessorRule>);
    }
    export class $StructureTemplateManager {
        getOrCreate(id: $ResourceLocation_): $StructureTemplate;
        remove(id: $ResourceLocation_): void;
        get(id: $ResourceLocation_): ($StructureTemplate) | undefined;
        save(id: $ResourceLocation_): boolean;
        listTemplates(): $Stream<$ResourceLocation>;
        readStructure(nbt: $CompoundTag_): $StructureTemplate;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        createAndValidatePathToGeneratedStructure(location: $ResourceLocation_, extension: string): $Path;
        static STRUCTURE_RESOURCE_DIRECTORY_NAME: string;
        constructor(resourceManager: $ResourceManager, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, blockLookup: $HolderGetter<$Block_>);
    }
    export class $BlackstoneReplaceProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlackstoneReplaceProcessor>;
        static INSTANCE: $BlackstoneReplaceProcessor;
    }
    export class $LavaSubmergedBlockProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$LavaSubmergedBlockProcessor>;
        static INSTANCE: $LavaSubmergedBlockProcessor;
        constructor();
    }
    export class $LiquidSettings extends $Enum<$LiquidSettings> implements $StringRepresentable {
        static values(): $LiquidSettings[];
        static valueOf(arg0: string): $LiquidSettings;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$LiquidSettings>;
        static IGNORE_WATERLOGGING: $LiquidSettings;
        static APPLY_WATERLOGGING: $LiquidSettings;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LiquidSettings}.
     */
    export type $LiquidSettings_ = "ignore_waterlogging" | "apply_waterlogging";
    export class $StructureTemplate$StructureBlockInfo extends $Record implements $StructureBlockInfoModification {
        getPosition(): $BlockPos;
        getProperties(): $Map<any, any>;
        state(): $BlockState;
        getId(): string;
        pos(): $BlockPos;
        getBlock(): $Block;
        getNbt(): $CompoundTag;
        setNbt(arg0: $CompoundTag_ | null): void;
        hasNbt(): boolean;
        nbt(): $CompoundTag;
        setBlock(arg0: $ResourceLocation_, arg1: $Map_<any, any>): void;
        setBlock(arg0: $ResourceLocation_): void;
        constructor(pos: $BlockPos_, state: $BlockState_, nbt: $CompoundTag_ | null);
        get position(): $BlockPos;
        get properties(): $Map<any, any>;
        get id(): string;
    }
    export class $StructureTemplateManager$InputStreamOpener {
    }
    export interface $StructureTemplateManager$InputStreamOpener {
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateManager$InputStreamOpener}.
     */
    export type $StructureTemplateManager$InputStreamOpener_ = (() => void);
    export class $BlockAgeProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlockAgeProcessor>;
        constructor(mossiness: number);
    }
    export class $ProtectedBlockProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$ProtectedBlockProcessor>;
        cannotReplace: $TagKey<$Block>;
        constructor(cannotReplace: $TagKey_<$Block>);
    }
    export class $BlockIgnoreProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlockIgnoreProcessor>;
        static STRUCTURE_AND_AIR: $BlockIgnoreProcessor;
        static AIR: $BlockIgnoreProcessor;
        static STRUCTURE_BLOCK: $BlockIgnoreProcessor;
        constructor(ignoredBlocks: $List_<$Block_>);
    }
    export class $RandomBlockStateMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$RandomBlockStateMatchTest>;
        constructor(blockState: $BlockState_, probability: number);
    }
    export class $GravityProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$GravityProcessor>;
        constructor(heightmap: $Heightmap$Types_, offset: number);
    }
}
