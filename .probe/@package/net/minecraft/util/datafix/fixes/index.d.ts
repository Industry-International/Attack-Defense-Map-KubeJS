import { $Dynamic, $OptionalDynamic } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $Pair, $Unit, $Either } from "@package/com/mojang/datafixers/util";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $UUID, $List, $Map_, $Set_, $List_, $Map, $Set, $BitSet } from "@package/java/util";
import { $DataFix, $Typed, $DSL$TypeReference_, $TypeRewriteRule, $DSL$TypeReference, $OpticFinder } from "@package/com/mojang/datafixers";
import { $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $IntFunction_, $Function_, $UnaryOperator_, $Predicate_, $UnaryOperator } from "@package/java/util/function";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PackedBitStorage } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $Enum, $Record } from "@package/java/lang";
import { $Type } from "@package/com/mojang/datafixers/types";

declare module "@package/net/minecraft/util/datafix/fixes" {
    export class $JukeboxTicksSinceSongStartedFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema);
    }
    export class $EntityPaintingMotiveFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemStackMapIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkPalettedStorageFix extends $DataFix {
        static getName(arg0: $Dynamic<never>): string;
        static getProperty(arg0: $Dynamic<never>, arg1: string): string;
        static getSideMask(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): number;
        makeRule(): $TypeRewriteRule;
        static idFor(arg0: $CrudeIncrementalIntIdentityHashBiMap<$Dynamic<never>>, arg1: $Dynamic<never>): number;
        static NOTE_BLOCK_MAP: $Map<string, $Dynamic<never>>;
        static FLOWER_POT_MAP: $Map<string, $Dynamic<never>>;
        static PUMPKIN: $Dynamic<never>;
        static UPPER_SUNFLOWER: $Dynamic<never>;
        static AIR: $Dynamic<never>;
        static SNOWY_GRASS: $Dynamic<never>;
        static UPPER_PEONY: $Dynamic<never>;
        static DOOR_MAP: $Map<string, $Dynamic<never>>;
        static SNOWY_PODZOL: $Dynamic<never>;
        static FIX: $BitSet;
        static UPPER_LILAC: $Dynamic<never>;
        static BANNER_BLOCK_MAP: $Map<string, $Dynamic<never>>;
        static BED_BLOCK_MAP: $Map<string, $Dynamic<never>>;
        static LOGGER: $Logger;
        static SNOWY_MYCELIUM: $Dynamic<never>;
        static UPPER_LARGE_FERN: $Dynamic<never>;
        static UPPER_TALL_GRASS: $Dynamic<never>;
        static UPPER_ROSE_BUSH: $Dynamic<never>;
        static VIRTUAL: $BitSet;
        static SKULL_MAP: $Map<string, $Dynamic<never>>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $OptionsForceVBOFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $StatsCounterFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityProjectileOwnerFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $TrappedChestBlockEntityFix$TrappedChestSection extends $LeavesFix$Section {
        isTrappedChest(arg0: number): boolean;
        static PROPERTIES_TAG: string;
        static BLOCK_STATES_TAG: string;
        paletteFinder: $OpticFinder<$List<$Pair<string, $Dynamic<never>>>>;
        static NAME_TAG: string;
        index: number;
        palette: $List<$Dynamic<never>>;
        storage: $PackedBitStorage;
        constructor(arg0: $Typed<never>, arg1: $Schema);
    }
    export class $PlayerHeadBlockProfileFix extends $NamedEntityFix {
        constructor(arg0: $Schema);
    }
    export class $BlockEntityCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $StructuresBecomeConfiguredFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $BlockStateStructureTemplateFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $StructureReferenceCountFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $StatsRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: $Map_<string, string>);
    }
    export class $JigsawPropertiesFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $FurnaceRecipeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityElderGuardianSplitFix extends $SimpleEntityRenameFix {
        name: string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $LevelUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(arg0: $Schema);
    }
    export class $OminousBannerRenameFix extends $ItemStackTagFix {
        constructor(arg0: $Schema);
    }
    export class $EntityPaintingItemFrameDirectionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $VillagerRebuildLevelAndXpFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static getMinXpPerLevel(arg0: number): number;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityShulkerRotationFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema);
    }
    export class $EntityRedundantChanceTagsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemStackTagFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixItemStackTag<T>(arg0: $Dynamic<T>): $Dynamic<T>;
        static createFixer(arg0: $Type<never>, arg1: $Predicate_<string>, arg2: $UnaryOperator_<$Dynamic<never>>): $UnaryOperator<$Typed<never>>;
        constructor(arg0: $Schema, arg1: string, arg2: $Predicate_<string>);
    }
    export class $ForcePoiRebuild extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $PoiTypeRemoveFix extends $AbstractPoiSectionFix {
        constructor(arg0: $Schema, arg1: string, arg2: $Predicate_<string>);
    }
    export class $AdvancementsFix extends $AdvancementsRenameFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemStackEnchantmentNamesFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $PoiTypeRenameFix extends $AbstractPoiSectionFix {
        constructor(arg0: $Schema, arg1: string, arg2: $Function_<string, string>);
    }
    export class $SpawnerDataFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $GossipUUIDFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: string);
    }
    export class $EntityMinecartIdentifiersFix extends $EntityRenameFix {
        name: string;
        constructor(arg0: $Schema);
    }
    export class $ItemWrittenBookPagesStrictJsonFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $TeamDisplayNameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityStringUuidFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $MapIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $WeaponSmithChestLootTableFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $RemoveGolemGossipFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemWaterPotionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkPalettedStorageFix$Section {
    }
    export class $LodestoneCompassComponentFix extends $ItemStackComponentRemainderFix {
        constructor(arg0: $Schema);
    }
    export class $RenamedCoralFansFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $AddFlagIfNotPresentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: $DSL$TypeReference_, arg2: string, arg3: boolean);
    }
    export class $BlockNameFlatteningFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $CauldronRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $MissingDimensionFix extends $DataFix {
        static fields<A>(arg0: string, arg1: $Type<A>): $Type<$Pair<A, $Dynamic<never>>>;
        makeRule(): $TypeRewriteRule;
        static optionalFields<A>(arg0: string, arg1: $Type<A>): $Type<$Pair<$Either<A, $Unit>, $Dynamic<never>>>;
        static optionalFields<A1, A2>(arg0: string, arg1: $Type<A1>, arg2: string, arg3: $Type<A2>): $Type<$Pair<$Either<A1, $Unit>, $Pair<$Either<A2, $Unit>, $Dynamic<never>>>>;
        static flatType(arg0: $Schema): $Type<$Pair<$Either<$Pair<$Either<never, $Unit>, $Pair<$Either<$List<$Pair<$Either<never, $Unit>, $Dynamic<never>>>, $Unit>, $Dynamic<never>>>, $Unit>, $Dynamic<never>>>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkRenamesFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $AbstractPoiSectionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        processRecords<T>(arg0: $Stream<$Dynamic<T>>): $Stream<$Dynamic<T>>;
        constructor(arg0: $Schema, arg1: string);
    }
    export class $WorldGenSettingsHeightAndBiomeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static WAS_PREVIOUSLY_INCREASED_KEY: string;
        constructor(arg0: $Schema);
    }
    export class $OptionsProgrammerArtFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $HorseBodyArmorItemFix extends $NamedEntityWriteReadFix {
        constructor(arg0: $Schema, arg1: string, arg2: string, arg3: boolean);
    }
    export class $BlockEntityRenameFix extends $DataFix {
        static create(arg0: $Schema, arg1: string, arg2: $UnaryOperator_<string>): $DataFix;
        makeRule(): $TypeRewriteRule;
    }
    export class $PlayerUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(arg0: $Schema);
    }
    export class $FixProjectileStoredItem extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $EntityIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityHorseSplitFix extends $EntityRenameFix {
        name: string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BannerPatternFormatFix extends $NamedEntityFix {
        static fixColor(arg0: number): string;
        constructor(arg0: $Schema);
    }
    export class $ChunkBiomeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EmptyItemInHotbarFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $VillagerFollowRangeFix extends $NamedEntityFix {
        constructor(arg0: $Schema);
    }
    export class $ItemBannerColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $References {
        static reference(arg0: string): $DSL$TypeReference;
        static MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST: $DSL$TypeReference;
        static ENTITY_TREE: $DSL$TypeReference;
        static FLAT_BLOCK_STATE: $DSL$TypeReference;
        static WORLD_GEN_SETTINGS: $DSL$TypeReference;
        static SAVED_DATA_MAP_INDEX: $DSL$TypeReference;
        static PARTICLE: $DSL$TypeReference;
        static BLOCK_NAME: $DSL$TypeReference;
        static BIOME: $DSL$TypeReference;
        static DATA_COMPONENTS: $DSL$TypeReference;
        static BLOCK_STATE: $DSL$TypeReference;
        static STATS: $DSL$TypeReference;
        static ADVANCEMENTS: $DSL$TypeReference;
        static POI_CHUNK: $DSL$TypeReference;
        static ITEM_NAME: $DSL$TypeReference;
        static SAVED_DATA_RANDOM_SEQUENCES: $DSL$TypeReference;
        static ENTITY: $DSL$TypeReference;
        static SAVED_DATA_RAIDS: $DSL$TypeReference;
        static ITEM_STACK: $DSL$TypeReference;
        static OBJECTIVE: $DSL$TypeReference;
        static RECIPE: $DSL$TypeReference;
        static CHUNK: $DSL$TypeReference;
        static ENTITY_NAME: $DSL$TypeReference;
        static SAVED_DATA_MAP_DATA: $DSL$TypeReference;
        static STRUCTURE: $DSL$TypeReference;
        static BLOCK_ENTITY: $DSL$TypeReference;
        static LEVEL: $DSL$TypeReference;
        static OPTIONS: $DSL$TypeReference;
        static SAVED_DATA_COMMAND_STORAGE: $DSL$TypeReference;
        static PLAYER: $DSL$TypeReference;
        static SAVED_DATA_FORCED_CHUNKS: $DSL$TypeReference;
        static GAME_EVENT_NAME: $DSL$TypeReference;
        static SAVED_DATA_SCOREBOARD: $DSL$TypeReference;
        static SAVED_DATA_STRUCTURE_FEATURE_INDICES: $DSL$TypeReference;
        static VILLAGER_TRADE: $DSL$TypeReference;
        static ENTITY_CHUNK: $DSL$TypeReference;
        static UNTAGGED_SPAWNER: $DSL$TypeReference;
        static TEAM: $DSL$TypeReference;
        static HOTBAR: $DSL$TypeReference;
        static STRUCTURE_FEATURE: $DSL$TypeReference;
        constructor();
    }
    export class $OptionsLowerCaseLanguageFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemStackTheFlatteningFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static updateItem(arg0: string, arg1: number): string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $StructureSettingsFlattenFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ChunkPalettedStorageFix$Direction extends $Enum<$ChunkPalettedStorageFix$Direction> {
        static values(): $ChunkPalettedStorageFix$Direction[];
        static valueOf(arg0: string): $ChunkPalettedStorageFix$Direction;
        getAxisDirection(): $ChunkPalettedStorageFix$Direction$AxisDirection;
        getAxis(): $ChunkPalettedStorageFix$Direction$Axis;
        static DOWN: $ChunkPalettedStorageFix$Direction;
        static NORTH: $ChunkPalettedStorageFix$Direction;
        static WEST: $ChunkPalettedStorageFix$Direction;
        static UP: $ChunkPalettedStorageFix$Direction;
        static SOUTH: $ChunkPalettedStorageFix$Direction;
        static EAST: $ChunkPalettedStorageFix$Direction;
        get axisDirection(): $ChunkPalettedStorageFix$Direction$AxisDirection;
        get axis(): $ChunkPalettedStorageFix$Direction$Axis;
    }
    /**
     * Values that may be interpreted as {@link $ChunkPalettedStorageFix$Direction}.
     */
    export type $ChunkPalettedStorageFix$Direction_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $LevelFlatGeneratorInfoFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixString(arg0: string): string;
        static DEFAULT: string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BlockRenameFix extends $DataFix {
        static create(arg0: $Schema, arg1: string, arg2: $Function_<string, string>): $DataFix;
        renameBlock(arg0: string): string;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string);
    }
    export class $WriteAndReadFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: $DSL$TypeReference_);
    }
    export class $ChunkPalettedStorageFix$Direction$Axis extends $Enum<$ChunkPalettedStorageFix$Direction$Axis> {
        static values(): $ChunkPalettedStorageFix$Direction$Axis[];
        static valueOf(arg0: string): $ChunkPalettedStorageFix$Direction$Axis;
        static X: $ChunkPalettedStorageFix$Direction$Axis;
        static Y: $ChunkPalettedStorageFix$Direction$Axis;
        static Z: $ChunkPalettedStorageFix$Direction$Axis;
    }
    /**
     * Values that may be interpreted as {@link $ChunkPalettedStorageFix$Direction$Axis}.
     */
    export type $ChunkPalettedStorageFix$Direction$Axis_ = "x" | "y" | "z";
    export class $OptionsKeyTranslationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $RecipesRenameningFix {
        static RECIPES: $Map<string, string>;
        constructor();
    }
    export class $AttributeModifierIdFix extends $DataFix {
        static uuidFromIntArray(arg0: number[]): $UUID;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $LevelLegacyWorldGenSettingsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $StriderGravityFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $WorldGenSettingsDisallowOldCustomWorldsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $AbstractUUIDFix extends $DataFix {
        static replaceUUIDString(arg0: $Dynamic<never>, arg1: string, arg2: string): ($Dynamic<never>) | undefined;
        static createUUIDTag(arg0: $Dynamic<never>, arg1: number, arg2: number): ($Dynamic<never>) | undefined;
        static createUUIDFromML(arg0: $Dynamic<never>): ($Dynamic<never>) | undefined;
        updateNamedChoice(arg0: $Typed<never>, arg1: string, arg2: $Function_<$Dynamic<never>, $Dynamic<never>>): $Typed<never>;
        static replaceUUIDMLTag(arg0: $Dynamic<never>, arg1: string, arg2: string): ($Dynamic<never>) | undefined;
        static createUUIDFromLongs(arg0: $Dynamic<never>, arg1: string, arg2: string): ($Dynamic<never>) | undefined;
        static replaceUUIDLeastMost(arg0: $Dynamic<never>, arg1: string, arg2: string): ($Dynamic<never>) | undefined;
        static createUUIDFromString(arg0: $Dynamic<never>, arg1: string): ($Dynamic<never>) | undefined;
        typeReference: $DSL$TypeReference;
        constructor(arg0: $Schema, arg1: $DSL$TypeReference_);
    }
    export class $MobEffectIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $AbstractArrowPickupFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ItemLoreFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ObjectiveRenderTypeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $FixProjectileStoredItem$SubFixer<F> {
    }
    export interface $FixProjectileStoredItem$SubFixer<F> {
    }
    /**
     * Values that may be interpreted as {@link $FixProjectileStoredItem$SubFixer}.
     */
    export type $FixProjectileStoredItem$SubFixer_<F> = (() => void);
    export class $ParticleUnflatteningFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ItemSpawnEggFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $RenamedCoralFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $OminousBannerBlockEntityRenameFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BlockEntityBannerColorFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemRemoveBlockEntityTagFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean, arg2: $Set_<string>);
    }
    export class $EntityTippedArrowFix extends $SimplestEntityRenameFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        static updateEntityUUID(arg0: $Dynamic<never>): $Dynamic<never>;
        static updateLivingEntity(arg0: $Dynamic<never>): $Dynamic<never>;
        typeReference: $DSL$TypeReference;
        constructor(arg0: $Schema);
    }
    export class $EntityBrushableBlockFieldsRenameFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema);
    }
    export class $EntityCatSplitFix extends $SimpleEntityRenameFix {
        name: string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $HeightmapRenamingFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityCodSalmonFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        static RENAMED_EGG_IDS: $Map<string, string>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkPalettedStorageFix$Direction$AxisDirection extends $Enum<$ChunkPalettedStorageFix$Direction$AxisDirection> {
        static values(): $ChunkPalettedStorageFix$Direction$AxisDirection[];
        static valueOf(arg0: string): $ChunkPalettedStorageFix$Direction$AxisDirection;
        getStep(): number;
        static POSITIVE: $ChunkPalettedStorageFix$Direction$AxisDirection;
        static NEGATIVE: $ChunkPalettedStorageFix$Direction$AxisDirection;
        get step(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChunkPalettedStorageFix$Direction$AxisDirection}.
     */
    export type $ChunkPalettedStorageFix$Direction$AxisDirection_ = "positive" | "negative";
    export class $BlockPosFormatAndRenamesFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $EntityItemFrameDirectionFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemStackComponentizationFix$ItemStackData {
        write(): $Dynamic<never>;
        static read(arg0: $Dynamic<never>): ($ItemStackComponentizationFix$ItemStackData) | undefined;
        is(arg0: $Set_<string>): boolean;
        is(arg0: string): boolean;
        moveTagToComponent(arg0: string, arg1: string, arg2: $Dynamic<never>): void;
        moveTagToComponent(arg0: string, arg1: string): void;
        moveTagInto(arg0: string, arg1: $Dynamic<never>, arg2: string): $Dynamic<never>;
        setComponent(arg0: string, arg1: $Dynamic<never>): void;
        setComponent(arg0: string, arg1: $OptionalDynamic<never>): void;
        removeTag(arg0: string): $OptionalDynamic<never>;
        fixSubTag(arg0: string, arg1: boolean, arg2: $UnaryOperator_<$Dynamic<never>>): void;
        hasComponent(arg0: string): boolean;
        tag: $Dynamic<never>;
    }
    export class $EntityRavagerRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BlockEntityBlockStateFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $OptionsMenuBlurrinessFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $IglooMetadataRemovalFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkPalettedStorageFix$UpgradeChunk {
    }
    export class $ChunkHeightAndBiomeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static ceillog2(arg0: number): number;
        static DATAFIXER_CONTEXT_TAG: string;
        static DEFAULT_BIOME: string;
        static BLOCKS_PER_SECTION: number;
        constructor(arg0: $Schema);
    }
    export class $NamespacedTypeRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: $DSL$TypeReference_, arg3: $UnaryOperator_<string>);
    }
    export class $ReorganizePoi extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $DropInvalidSignDataFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: string, arg2: string);
    }
    export class $ItemStackUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(arg0: $Schema);
    }
    export class $TippedArrowPotionToItemFix extends $NamedEntityWriteReadFix {
        constructor(arg0: $Schema);
    }
    export class $BlockEntityJukeboxFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BedItemColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $TrialSpawnerConfigFix extends $NamedEntityWriteReadFix {
        constructor(arg0: $Schema);
    }
    export class $BlockStateData {
        static parse(arg0: string): $Dynamic<never>;
        static getTag(arg0: number): $Dynamic<never>;
        static upgradeBlock(arg0: number): string;
        static upgradeBlock(arg0: string): string;
        static bootstrap6(): void;
        static bootstrap7(): void;
        static bootstrap4(): void;
        static bootstrap8(): void;
        static bootstrap3(): void;
        static bootstrap0(): void;
        static bootstrap1(): void;
        static bootstrap2(): void;
        static bootstrap9(): void;
        static bootstrap5(): void;
        static upgradeBlockStateTag(arg0: $Dynamic<never>): $Dynamic<never>;
        static bootstrap12(): void;
        static bootstrap10(): void;
        static bootstrap15(): void;
        static bootstrap13(): void;
        static bootstrap14(): void;
        static bootstrap11(): void;
        static FILTER_ME: string;
        constructor();
    }
    export class $VillagerDataFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: string);
    }
    export class $BlockEntityShulkerBoxColorFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $PrimedTntBlockStateFixer extends $NamedEntityWriteReadFix {
        constructor(arg0: $Schema);
    }
    export class $AttributesRename extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: $UnaryOperator_<string>);
    }
    export class $EntityCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static fixTagCustomName(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $RedstoneWireConnectionsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $OptionsAddTextBackgroundFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $LeavesFix$Section {
        write(arg0: $Typed<never>): $Typed<never>;
        getIndex(): number;
        getBlock(arg0: number): number;
        skippable(): boolean;
        isSkippable(): boolean;
        getStateId(arg0: string, arg1: boolean, arg2: number): number;
        readStorage(arg0: $Dynamic<never>): void;
        static PROPERTIES_TAG: string;
        static BLOCK_STATES_TAG: string;
        paletteFinder: $OpticFinder<$List<$Pair<string, $Dynamic<never>>>>;
        static NAME_TAG: string;
        index: number;
        palette: $List<$Dynamic<never>>;
        storage: $PackedBitStorage;
        constructor(arg0: $Typed<never>, arg1: $Schema);
    }
    export class $GoatHornIdFix extends $ItemStackTagFix {
        constructor(arg0: $Schema);
    }
    export class $EntityShulkerColorFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityBlockStateFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static getBlockId(arg0: string): number;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityZombifiedPiglinRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(arg0: $Schema);
    }
    export class $RandomSequenceSettingsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $BlendingDataRemoveFromNetherEndFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $EntityWolfColorFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $MobSpawnerEntityIdentifiersFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $FilteredBooksFix extends $ItemStackTagFix {
        constructor(arg0: $Schema);
    }
    export class $FeatureFlagRemoveFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: $Set_<string>);
    }
    export class $EntityZombieSplitFix extends $EntityRenameFix {
        name: string;
        constructor(arg0: $Schema);
    }
    export class $BlockEntitySignDoubleSidedEditableTextFix extends $NamedEntityFix {
        static FILTERED_CORRECT: string;
        constructor(arg0: $Schema, arg1: string, arg2: string);
    }
    export class $ChunkStatusFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkToProtochunkFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ItemCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $OptionsAmbientOcclusionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ItemPotionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static DEFAULT: string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityPufferfishRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $WallPropertyFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $StatsCounterFix$StatType extends $Record {
    }
    export class $ColorlessShulkerEntityFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $OptionsAccessibilityOnboardFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $BitStorageAlignFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static addPadding(arg0: number, arg1: number, arg2: number[]): number[];
        constructor(arg0: $Schema);
    }
    export class $ProjectileStoredWeaponFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ScoreboardDisplaySlotFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $CriteriaRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: string, arg3: $UnaryOperator_<string>);
    }
    export class $LevelDataGeneratorOptionsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static GENERATOR_OPTIONS: string;
        static MAP: $Map<string, string>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $RecipesFix {
        static RECIPES: $Map<string, string>;
        constructor();
    }
    export class $SimpleEntityRenameFix extends $EntityRenameFix {
        getNewNameAndTag(arg0: string, arg1: $Dynamic<never>): $Pair<string, $Dynamic<never>>;
        name: string;
        constructor(arg0: string, arg1: $Schema, arg2: boolean);
    }
    export class $NewVillageFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $LeavesFix extends $DataFix {
        static getIndex(arg0: number, arg1: number, arg2: number): number;
        static getSideMask(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): number;
        makeRule(): $TypeRewriteRule;
        static LEAVES: $Object2IntMap<string>;
        static LOGS: $Set<string>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EmptyItemInVillagerTradeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ItemStackComponentRemainderFix extends $DataFix {
        fixComponent<T>(arg0: $Dynamic<T>): $Dynamic<T>;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: string);
        constructor(arg0: $Schema, arg1: string, arg2: string, arg3: string);
    }
    export class $ChunkStatusFix2 extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkDeleteLightFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ZombieVillagerRebuildXpFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityRidingToPassengersFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $RenameEnchantmentsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        name: string;
        renames: $Map<string, string>;
        constructor(arg0: $Schema, arg1: string, arg2: $Map_<string, string>);
    }
    export class $ChunkPalettedStorageFix$DataLayer {
    }
    export class $BlockEntityKeepPacked extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $LeavesFix$LeavesSection extends $LeavesFix$Section {
        isLeaf(arg0: number): boolean;
        setDistance(arg0: number, arg1: number, arg2: number): void;
        getDistance(arg0: number): number;
        isLog(arg0: number): boolean;
        static PROPERTIES_TAG: string;
        static BLOCK_STATES_TAG: string;
        paletteFinder: $OpticFinder<$List<$Pair<string, $Dynamic<never>>>>;
        static NAME_TAG: string;
        index: number;
        palette: $List<$Dynamic<never>>;
        storage: $PackedBitStorage;
        constructor(arg0: $Typed<never>, arg1: $Schema);
    }
    export class $FilteredSignsFix extends $NamedEntityFix {
        constructor(arg0: $Schema);
    }
    export class $OverreachingTickFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $SavedDataFeaturePoolElementFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static fixFeature(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema);
    }
    export class $EntityEquipmentToArmorAndHandFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $OptionsKeyLwjgl3Fix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static KEY_UNKNOWN: string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BiomeFix {
        static BIOMES: $Map<string, string>;
        constructor();
    }
    export class $EntityGoatMissingStateFix extends $NamedEntityFix {
        constructor(arg0: $Schema);
    }
    export class $ChunkLightRemoveFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BlockEntitySignTextStrictJsonFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ObjectiveDisplayNameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityPaintingFieldsRenameFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema);
    }
    export class $ChunkStructuresTemplateRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $WorldGenSettingsFix$StructureFeatureConfiguration {
    }
    export class $AddNewChoices extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: $DSL$TypeReference_);
    }
    export class $OptionsRenameFieldFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean, arg2: string, arg3: string, arg4: string);
    }
    export class $ItemStackSpawnEggFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean, arg2: string);
    }
    export class $MemoryExpiryDataFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: string);
    }
    export class $SavedDataUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(arg0: $Schema);
    }
    export class $BlockEntityIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $LegacyDragonFightFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ChunkDeleteIgnoredLightDataFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $NamedEntityWriteReadFix extends $DataFix {
        fix<T>(arg0: $Dynamic<T>): $Dynamic<T>;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean, arg2: string, arg3: $DSL$TypeReference_, arg4: string);
    }
    export class $EntityTheRenameningFix extends $SimplestEntityRenameFix {
        static RENAMED_ITEMS: $Map<string, string>;
        static RENAMED_IDS: $Map<string, string>;
        static RENAMED_BLOCKS: $Map<string, string>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkProtoTickListFix$PoorMansPalettedContainer {
        get(arg0: number, arg1: number, arg2: number): $Dynamic<never>;
        data(): number[];
        palette(): $List<$Dynamic<never>>;
        constructor(arg0: $List_<$Dynamic<never>>, arg1: number[]);
    }
    export class $BannerEntityCustomNameToOverrideComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ItemRenameFix extends $DataFix {
        static create(arg0: $Schema, arg1: string, arg2: $Function_<string, string>): $DataFix;
        fixItem(arg0: string): string;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string);
    }
    export class $VariantRenameFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: string, arg2: $DSL$TypeReference_, arg3: string, arg4: $Map_<string, string>);
    }
    export class $BeehiveFieldRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ItemIdFix extends $DataFix {
        static getItem(arg0: number): string;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $CatTypeFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $BlockEntityUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(arg0: $Schema);
    }
    export class $ItemShulkerBoxColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static NAMES_BY_COLOR: string[];
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityRenameFix extends $DataFix {
        fix(arg0: string, arg1: $Typed<never>): $Pair<string, $Typed<never>>;
        makeRule(): $TypeRewriteRule;
        name: string;
        constructor(arg0: string, arg1: $Schema, arg2: boolean);
    }
    export class $DecoratedPotFieldRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $TrappedChestBlockEntityFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $DyeItemRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $VillagerTradeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $EntityHorseSaddleFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $ChunkProtoTickListFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $BlendingDataFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $MapBannerBlockPosFormatFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $NamedEntityFix extends $DataFix {
        fix(arg0: $Typed<never>): $Typed<never>;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean, arg2: string, arg3: $DSL$TypeReference_, arg4: string);
    }
    export class $EntitySkeletonSplitFix extends $SimpleEntityRenameFix {
        name: string;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EntityArmorStandSilentFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $RemapChunkStatusFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string, arg2: $UnaryOperator_<string>);
    }
    export class $ItemStackCustomNameToOverrideComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ItemStackComponentizationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static fixProfile(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema);
    }
    export class $EntityZombieVillagerTypeFix extends $NamedEntityFix {
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $JigsawRotationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $AdvancementsRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean, arg2: string, arg3: $Function_<string, string>);
    }
    export class $RemoveEmptyItemInBrushableBlockFix extends $NamedEntityWriteReadFix {
        constructor(arg0: $Schema);
    }
    export class $CavesAndCliffsRenames {
        static RENAMES: $ImmutableMap<string, string>;
    }
    export class $StructuresBecomeConfiguredFix$Conversion extends $Record {
        fallback(): string;
        biomeMapping(): $Map<string, string>;
        static biomeMapped(arg0: $Map_<$List_<string>, string>, arg1: string): $StructuresBecomeConfiguredFix$Conversion;
        static trivial(arg0: string): $StructuresBecomeConfiguredFix$Conversion;
        constructor(biomeMapping: $Map_<string, string>, fallback: string);
    }
    export class $EntityHealthFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixTag(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $SimplestEntityRenameFix extends $DataFix {
        rename(arg0: string): string;
        makeRule(): $TypeRewriteRule;
        constructor(arg0: string, arg1: $Schema, arg2: boolean);
    }
    export class $WorldGenSettingsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static defaultOverworld<T>(arg0: $Dynamic<T>, arg1: number): $Dynamic<T>;
        static vanillaLevels<T>(arg0: $Dynamic<T>, arg1: number, arg2: $Dynamic<T>, arg3: boolean): T;
        constructor(arg0: $Schema);
    }
    export class $ChunkBedBlockEntityInjecterFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: boolean);
    }
    export class $EffectDurationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $ChestedHorsesInventoryZeroIndexingFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema);
    }
    export class $AreaEffectCloudPotionFix extends $NamedEntityFix {
        constructor(arg0: $Schema);
    }
    export class $EntityVariantFix extends $NamedEntityFix {
        constructor(arg0: $Schema, arg1: string, arg2: $DSL$TypeReference_, arg3: string, arg4: string, arg5: $IntFunction_<string>);
    }
}
