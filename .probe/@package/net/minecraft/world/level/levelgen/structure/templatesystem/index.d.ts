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
        getProcessors(): $List<$StructureProcessor>;
        getRotation(): $Rotation;
        setRotation(arg0: $Rotation_): $StructurePlaceSettings;
        getRotationPivot(): $BlockPos;
        getBoundingBox(): $BoundingBox;
        getRandom(arg0: $BlockPos_): $RandomSource;
        setBoundingBox(arg0: $BoundingBox): $StructurePlaceSettings;
        addProcessor(arg0: $StructureProcessor): $StructurePlaceSettings;
        setIgnoreEntities(arg0: boolean): $StructurePlaceSettings;
        clearProcessors(): $StructurePlaceSettings;
        isIgnoreEntities(): boolean;
        shouldApplyWaterlogging(): boolean;
        shouldFinalizeEntities(): boolean;
        getMirror(): $Mirror;
        setMirror(arg0: $Mirror_): $StructurePlaceSettings;
        setRandom(arg0: $RandomSource): $StructurePlaceSettings;
        getKnownShape(): boolean;
        getRandomPalette(arg0: $List_<$StructureTemplate$Palette>, arg1: $BlockPos_): $StructureTemplate$Palette;
        setLiquidSettings(arg0: $LiquidSettings_): $StructurePlaceSettings;
        setRotationPivot(arg0: $BlockPos_): $StructurePlaceSettings;
        setKnownShape(arg0: boolean): $StructurePlaceSettings;
        popProcessor(arg0: $StructureProcessor): $StructurePlaceSettings;
        setFinalizeEntities(arg0: boolean): $StructurePlaceSettings;
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
        static register<P extends $StructureProcessor>(arg0: string, arg1: $MapCodec_<P>): $StructureProcessorType<P>;
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
        load(arg0: $HolderGetter<$Block_>, arg1: $CompoundTag_): void;
        static transform(arg0: $BlockPos_, arg1: $Mirror_, arg2: $Rotation_, arg3: $BlockPos_): $BlockPos;
        static transform(arg0: $Vec3_, arg1: $Mirror_, arg2: $Rotation_, arg3: $BlockPos_): $Vec3;
        save(arg0: $CompoundTag_): $CompoundTag;
        getSize(): $Vec3i;
        getSize(arg0: $Rotation_): $Vec3i;
        getBorderSize(): $Vec3i;
        getEntities(): $List<any>;
        handler$dfo000$immersiveengineering$readConnectionsFromNBT(arg0: $HolderGetter<any>, arg1: $CompoundTag_, arg2: $CallbackInfo): void;
        handler$dfo000$immersiveengineering$writeConnectionsToNBT(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$dfo000$immersiveengineering$addConnectionsToWorld(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $RandomSource, arg5: number, arg6: $CallbackInfoReturnable<any>): void;
        static transformedVec3d(arg0: $StructurePlaceSettings, arg1: $Vec3_): $Vec3;
        sable$getSubLevels(): $List<any>;
        getBoundingBox(arg0: $BlockPos_, arg1: $Rotation_, arg2: $BlockPos_, arg3: $Mirror_): $BoundingBox;
        getBoundingBox(arg0: $StructurePlaceSettings, arg1: $BlockPos_): $BoundingBox;
        static getBoundingBox(arg0: $BlockPos_, arg1: $Rotation_, arg2: $BlockPos_, arg3: $Mirror_, arg4: $Vec3i): $BoundingBox;
        placeInWorld(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $RandomSource, arg5: number): boolean;
        fillFromWorld(arg0: $Level_, arg1: $BlockPos_, arg2: $Vec3i, arg3: boolean, arg4: $Block_): void;
        static updateShapeAtEdge(arg0: $LevelAccessor, arg1: number, arg2: $DiscreteVoxelShape, arg3: number, arg4: number, arg5: number): void;
        static updateShapeAtEdge(arg0: $LevelAccessor, arg1: number, arg2: $DiscreteVoxelShape, arg3: $BlockPos_): void;
        getZeroPositionWithTransform(arg0: $BlockPos_, arg1: $Mirror_, arg2: $Rotation_): $BlockPos;
        static getZeroPositionWithTransform(arg0: $BlockPos_, arg1: $Mirror_, arg2: $Rotation_, arg3: number, arg4: number): $BlockPos;
        handler$dfo000$immersiveengineering$takeConnectionsFromWorld(arg0: $Level_, arg1: $BlockPos_, arg2: $Vec3i, arg3: boolean, arg4: $Block_, arg5: $CallbackInfo): void;
        calculateConnectedPosition(arg0: $StructurePlaceSettings, arg1: $BlockPos_, arg2: $StructurePlaceSettings, arg3: $BlockPos_): $BlockPos;
        getStoredConnections(): $List<any>;
        axiom$fillFromClipboard(clipboardObject: $ClipboardObject): void;
        static calculateRelativePosition(arg0: $StructurePlaceSettings, arg1: $BlockPos_): $BlockPos;
        getPalettes(): $List<any>;
        getAuthor(): string;
        setAuthor(arg0: string): void;
        static processEntityInfos(arg0: $StructureTemplate, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $List_<$StructureTemplate$StructureEntityInfo>): $List<$StructureTemplate$StructureEntityInfo>;
        filterBlocks(arg0: $BlockPos_, arg1: $StructurePlaceSettings, arg2: $Block_, arg3: boolean): $ObjectArrayList<$StructureTemplate$StructureBlockInfo>;
        filterBlocks(arg0: $BlockPos_, arg1: $StructurePlaceSettings, arg2: $Block_): $List<$StructureTemplate$StructureBlockInfo>;
        static processBlockInfos(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $List_<$StructureTemplate$StructureBlockInfo_>, arg5: $StructureTemplate): $List<$StructureTemplate$StructureBlockInfo>;
        static processBlockInfos(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $List_<$StructureTemplate$StructureBlockInfo_>): $List<$StructureTemplate$StructureBlockInfo>;
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
        get borderSize(): $Vec3i;
        get entities(): $List<any>;
        get storedConnections(): $List<any>;
        get palettes(): $List<any>;
    }
    export interface $PosRuleTestType extends RegistryMarked<RegistryTypes.PosRuleTestTag, RegistryTypes.PosRuleTest> {}
    export class $RandomBlockMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$RandomBlockMatchTest>;
        constructor(arg0: $Block_, arg1: number);
    }
    export class $StructureTemplate$Palette implements $PaletteAccess {
        blocks(arg0: $Block_): $List<$StructureTemplate$StructureBlockInfo>;
        blocks(): $List<$StructureTemplate$StructureBlockInfo>;
        static construct$immersiveengineering_$md$6ffaf3$0(arg0: $List_<any>): $StructureTemplate$Palette;
        constructor(arg0: $List_<$StructureTemplate$StructureBlockInfo_>);
    }
    export class $RuleTestType<P extends $RuleTest> {
        static register<P extends $RuleTest>(arg0: string, arg1: $MapCodec_<P>): $RuleTestType<P>;
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
        constructor(arg0: $BlockState_);
    }
    export class $AlwaysTrueTest extends $RuleTest {
        static CODEC: $MapCodec<$AlwaysTrueTest>;
        static INSTANCE: $AlwaysTrueTest;
    }
    export interface $StructureProcessorType extends RegistryMarked<RegistryTypes.WorldgenStructureProcessorTag, RegistryTypes.WorldgenStructureProcessor> {}
    export class $PosAlwaysTrueTest extends $PosRuleTest {
        static CODEC: $MapCodec<$PosAlwaysTrueTest>;
        static INSTANCE: $PosAlwaysTrueTest;
    }
    export class $ProcessorRule {
        test(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockPos_, arg5: $RandomSource): boolean;
        getOutputState(): $BlockState;
        getOutputTag(arg0: $RandomSource, arg1: $CompoundTag_): $CompoundTag;
        static CODEC: $Codec<$ProcessorRule>;
        static DEFAULT_BLOCK_ENTITY_MODIFIER: $Passthrough;
        constructor(arg0: $RuleTest_, arg1: $RuleTest_, arg2: $PosRuleTest, arg3: $BlockState_, arg4: $RuleBlockEntityModifier);
        constructor(arg0: $RuleTest_, arg1: $RuleTest_, arg2: $PosRuleTest, arg3: $BlockState_);
        constructor(arg0: $RuleTest_, arg1: $RuleTest_, arg2: $BlockState_);
        get outputState(): $BlockState;
    }
    export class $CappedProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$CappedProcessor>;
        constructor(arg0: $StructureProcessor, arg1: $IntProvider_);
    }
    export class $TagMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$TagMatchTest>;
        constructor(arg0: $TagKey_<$Block>);
    }
    export interface $StructureProcessorList extends RegistryMarked<RegistryTypes.WorldgenProcessorListTag, RegistryTypes.WorldgenProcessorList> {}
    export class $StructureProcessor {
        getType(): $StructureProcessorType<never>;
        process(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructureTemplate$StructureBlockInfo_, arg4: $StructureTemplate$StructureBlockInfo_, arg5: $StructurePlaceSettings, arg6: $StructureTemplate): $StructureTemplate$StructureBlockInfo;
        /**
         * @deprecated
         */
        processBlock(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructureTemplate$StructureBlockInfo_, arg4: $StructureTemplate$StructureBlockInfo_, arg5: $StructurePlaceSettings): $StructureTemplate$StructureBlockInfo;
        processEntity(arg0: $LevelReader, arg1: $BlockPos_, arg2: $StructureTemplate$StructureEntityInfo, arg3: $StructureTemplate$StructureEntityInfo, arg4: $StructurePlaceSettings, arg5: $StructureTemplate): $StructureTemplate$StructureEntityInfo;
        finalizeProcessing(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $List_<$StructureTemplate$StructureBlockInfo_>, arg4: $List_<$StructureTemplate$StructureBlockInfo_>, arg5: $StructurePlaceSettings): $List<$StructureTemplate$StructureBlockInfo>;
        constructor();
        get type(): $StructureProcessorType<never>;
    }
    export class $StructureTemplateManager$Source extends $Record {
        loader(): $Function<$ResourceLocation, ($StructureTemplate) | undefined>;
        lister(): $Supplier<$Stream<$ResourceLocation>>;
        constructor(arg0: $Function_<$ResourceLocation, ($StructureTemplate) | undefined>, arg1: $Supplier_<$Stream<$ResourceLocation>>);
    }
    export class $PosRuleTest {
        test(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $RandomSource): boolean;
        getType(): $PosRuleTestType<never>;
        static CODEC: $Codec<$PosRuleTest>;
        constructor();
        get type(): $PosRuleTestType<never>;
    }
    export class $StructureTemplate$StructureEntityInfo {
        nbt: $CompoundTag;
        blockPos: $BlockPos;
        pos: $Vec3;
        constructor(arg0: $Vec3_, arg1: $BlockPos_, arg2: $CompoundTag_);
    }
    export class $StructureProcessorList {
        list(): $List<$StructureProcessor>;
        constructor(arg0: $List_<$StructureProcessor>);
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorList}.
     */
    export type $StructureProcessorList_ = RegistryTypes.WorldgenProcessorList;
    export class $PosRuleTestType<P extends $PosRuleTest> {
        static register<P extends $PosRuleTest>(arg0: string, arg1: $MapCodec_<P>): $PosRuleTestType<P>;
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
        constructor(arg0: $Block_);
    }
    export class $LinearPosTest extends $PosRuleTest {
        static CODEC: $MapCodec<$LinearPosTest>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $AxisAlignedLinearPosTest extends $PosRuleTest {
        static CODEC: $MapCodec<$AxisAlignedLinearPosTest>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Direction$Axis_);
    }
    export interface $RuleTestType extends RegistryMarked<RegistryTypes.RuleTestTag, RegistryTypes.RuleTest> {}
    export class $RuleTest {
        test(arg0: $BlockState_, arg1: $RandomSource): boolean;
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
        constructor(arg0: number);
        constructor(arg0: $HolderSet_<$Block>, arg1: number);
    }
    export class $RuleProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$RuleProcessor>;
        constructor(arg0: $List_<$ProcessorRule>);
    }
    export class $StructureTemplateManager {
        getOrCreate(arg0: $ResourceLocation_): $StructureTemplate;
        remove(arg0: $ResourceLocation_): void;
        get(arg0: $ResourceLocation_): ($StructureTemplate) | undefined;
        save(arg0: $ResourceLocation_): boolean;
        createAndValidatePathToGeneratedStructure(arg0: $ResourceLocation_, arg1: string): $Path;
        onResourceManagerReload(arg0: $ResourceManager): void;
        listTemplates(): $Stream<$ResourceLocation>;
        readStructure(arg0: $CompoundTag_): $StructureTemplate;
        static STRUCTURE_RESOURCE_DIRECTORY_NAME: string;
        constructor(arg0: $ResourceManager, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $HolderGetter<$Block_>);
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
        setNbt(arg0: $CompoundTag_): void;
        hasNbt(): boolean;
        setBlock(arg0: $ResourceLocation_, arg1: $Map_<any, any>): void;
        setBlock(arg0: $ResourceLocation_): void;
        nbt(): $CompoundTag;
        getNbt(): $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_, nbt: $CompoundTag_);
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
        constructor(arg0: number);
    }
    export class $ProtectedBlockProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$ProtectedBlockProcessor>;
        cannotReplace: $TagKey<$Block>;
        constructor(arg0: $TagKey_<$Block>);
    }
    export class $BlockIgnoreProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlockIgnoreProcessor>;
        static STRUCTURE_AND_AIR: $BlockIgnoreProcessor;
        static AIR: $BlockIgnoreProcessor;
        static STRUCTURE_BLOCK: $BlockIgnoreProcessor;
        constructor(arg0: $List_<$Block_>);
    }
    export class $RandomBlockStateMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$RandomBlockStateMatchTest>;
        constructor(arg0: $BlockState_, arg1: number);
    }
    export class $GravityProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$GravityProcessor>;
        constructor(arg0: $Heightmap$Types_, arg1: number);
    }
}
