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
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $EntityPaintingMotiveFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackMapIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkPalettedStorageFix extends $DataFix {
        static getName(data: $Dynamic<never>): string;
        static getProperty(data: $Dynamic<never>, key: string): string;
        static getSideMask(west: boolean, east: boolean, north: boolean, south: boolean): number;
        makeRule(): $TypeRewriteRule;
        static idFor(palette: $CrudeIncrementalIntIdentityHashBiMap<$Dynamic<never>>, data: $Dynamic<never>): number;
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
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsForceVBOFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StatsCounterFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityProjectileOwnerFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $TrappedChestBlockEntityFix$TrappedChestSection extends $LeavesFix$Section {
        isTrappedChest(id: number): boolean;
        static PROPERTIES_TAG: string;
        static BLOCK_STATES_TAG: string;
        paletteFinder: $OpticFinder<$List<$Pair<string, $Dynamic<never>>>>;
        static NAME_TAG: string;
        index: number;
        palette: $List<$Dynamic<never>>;
        storage: $PackedBitStorage;
        constructor(data: $Typed<never>, schema: $Schema);
    }
    export class $PlayerHeadBlockProfileFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StructuresBecomeConfiguredFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $BlockStateStructureTemplateFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StructureReferenceCountFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StatsRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, renames: $Map_<string, string>);
    }
    export class $JigsawPropertiesFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $FurnaceRecipeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityElderGuardianSplitFix extends $SimpleEntityRenameFix {
        name: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LevelUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(outputSchema: $Schema);
    }
    export class $OminousBannerRenameFix extends $ItemStackTagFix {
        constructor(schema: $Schema);
    }
    export class $EntityPaintingItemFrameDirectionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $VillagerRebuildLevelAndXpFix extends $DataFix {
        static getMinXpPerLevel(level: number): number;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityShulkerRotationFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $EntityRedundantChanceTagsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackTagFix extends $DataFix {
        fixItemStackTag<T>(itemStackTag: $Dynamic<T>): $Dynamic<T>;
        static createFixer(type: $Type<never>, filter: $Predicate_<string>, fixer: $UnaryOperator_<$Dynamic<never>>): $UnaryOperator<$Typed<never>>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, idFilter: $Predicate_<string>);
    }
    export class $ForcePoiRebuild extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $PoiTypeRemoveFix extends $AbstractPoiSectionFix {
        constructor(outputSchema: $Schema, name: string, typesToRemove: $Predicate_<string>);
    }
    export class $AdvancementsFix extends $AdvancementsRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackEnchantmentNamesFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $PoiTypeRenameFix extends $AbstractPoiSectionFix {
        constructor(schema: $Schema, name: string, renamer: $Function_<string, string>);
    }
    export class $SpawnerDataFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $GossipUUIDFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, entityName: string);
    }
    export class $EntityMinecartIdentifiersFix extends $EntityRenameFix {
        name: string;
        constructor(outputSchema: $Schema);
    }
    export class $ItemWrittenBookPagesStrictJsonFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $TeamDisplayNameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityStringUuidFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $MapIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WeaponSmithChestLootTableFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RemoveGolemGossipFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemWaterPotionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkPalettedStorageFix$Section {
    }
    export class $LodestoneCompassComponentFix extends $ItemStackComponentRemainderFix {
        constructor(outputSchema: $Schema);
    }
    export class $RenamedCoralFansFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $AddFlagIfNotPresentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, typeReference: $DSL$TypeReference_, flagKey: string, flagValue: boolean);
    }
    export class $BlockNameFlatteningFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $CauldronRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $MissingDimensionFix extends $DataFix {
        static fields<A>(name: string, element: $Type<A>): $Type<$Pair<A, $Dynamic<never>>>;
        static flatType(schema: $Schema): $Type<$Pair<$Either<$Pair<$Either<never, $Unit>, $Pair<$Either<$List<$Pair<$Either<never, $Unit>, $Dynamic<never>>>, $Unit>, $Dynamic<never>>>, $Unit>, $Dynamic<never>>>;
        static optionalFields<A>(name: string, element: $Type<A>): $Type<$Pair<$Either<A, $Unit>, $Dynamic<never>>>;
        static optionalFields<A1, A2>(name1: string, element1: $Type<A1>, name2: string, element2: $Type<A2>): $Type<$Pair<$Either<A1, $Unit>, $Pair<$Either<A2, $Unit>, $Dynamic<never>>>>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkRenamesFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $AbstractPoiSectionFix extends $DataFix {
        processRecords<T>(records: $Stream<$Dynamic<T>>): $Stream<$Dynamic<T>>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string);
    }
    export class $WorldGenSettingsHeightAndBiomeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static WAS_PREVIOUSLY_INCREASED_KEY: string;
        constructor(outputSchema: $Schema);
    }
    export class $OptionsProgrammerArtFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $HorseBodyArmorItemFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema, entityName: string, previousBodyArmorTag: string, clearArmorItems: boolean);
    }
    export class $BlockEntityRenameFix extends $DataFix {
        static create(outputSchema: $Schema, name: string, nameChangeLookup: $UnaryOperator_<string>): $DataFix;
        makeRule(): $TypeRewriteRule;
    }
    export class $PlayerUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(outputSchema: $Schema);
    }
    export class $FixProjectileStoredItem extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $EntityIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityHorseSplitFix extends $EntityRenameFix {
        name: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BannerPatternFormatFix extends $NamedEntityFix {
        static fixColor(color: number): string;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkBiomeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EmptyItemInHotbarFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $VillagerFollowRangeFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $ItemBannerColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $References {
        static reference(name: string): $DSL$TypeReference;
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
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackTheFlatteningFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static updateItem(item: string | null, dataValue: number): string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StructureSettingsFlattenFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkPalettedStorageFix$Direction extends $Enum<$ChunkPalettedStorageFix$Direction> {
        static values(): $ChunkPalettedStorageFix$Direction[];
        static valueOf(arg0: string): $ChunkPalettedStorageFix$Direction;
        getAxis(): $ChunkPalettedStorageFix$Direction$Axis;
        getAxisDirection(): $ChunkPalettedStorageFix$Direction$AxisDirection;
        static DOWN: $ChunkPalettedStorageFix$Direction;
        static NORTH: $ChunkPalettedStorageFix$Direction;
        static WEST: $ChunkPalettedStorageFix$Direction;
        static UP: $ChunkPalettedStorageFix$Direction;
        static SOUTH: $ChunkPalettedStorageFix$Direction;
        static EAST: $ChunkPalettedStorageFix$Direction;
        get axis(): $ChunkPalettedStorageFix$Direction$Axis;
        get axisDirection(): $ChunkPalettedStorageFix$Direction$AxisDirection;
    }
    /**
     * Values that may be interpreted as {@link $ChunkPalettedStorageFix$Direction}.
     */
    export type $ChunkPalettedStorageFix$Direction_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $LevelFlatGeneratorInfoFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixString(string: string): string;
        static DEFAULT: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockRenameFix extends $DataFix {
        static create(outputSchema: $Schema, name: string, renamer: $Function_<string, string>): $DataFix;
        makeRule(): $TypeRewriteRule;
        renameBlock(name: string): string;
        constructor(outputSchema: $Schema, name: string);
    }
    export class $WriteAndReadFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_);
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
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RecipesRenameningFix {
        static RECIPES: $Map<string, string>;
        constructor();
    }
    export class $AttributeModifierIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static uuidFromIntArray(intArray: number[]): $UUID;
        constructor(outputSchema: $Schema);
    }
    export class $LevelLegacyWorldGenSettingsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $StriderGravityFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WorldGenSettingsDisallowOldCustomWorldsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $AbstractUUIDFix extends $DataFix {
        static replaceUUIDMLTag(dynamic: $Dynamic<never>, mostKey: string, leastKey: string): ($Dynamic<never>) | undefined;
        static replaceUUIDString(dynamic: $Dynamic<never>, mostKey: string, leastKey: string): ($Dynamic<never>) | undefined;
        static createUUIDTag(dynamic: $Dynamic<never>, most: number, arg2: number): ($Dynamic<never>) | undefined;
        static createUUIDFromML(dynamic: $Dynamic<never>): ($Dynamic<never>) | undefined;
        updateNamedChoice(typed: $Typed<never>, choiceName: string, updater: $Function_<$Dynamic<never>, $Dynamic<never>>): $Typed<never>;
        static createUUIDFromLongs(dynamic: $Dynamic<never>, mostKey: string, leastKey: string): ($Dynamic<never>) | undefined;
        static replaceUUIDLeastMost(dynamic: $Dynamic<never>, mostKey: string, leastKey: string): ($Dynamic<never>) | undefined;
        static createUUIDFromString(dynamic: $Dynamic<never>, uuidKey: string): ($Dynamic<never>) | undefined;
        typeReference: $DSL$TypeReference;
        constructor(outputSchema: $Schema, typeReference: $DSL$TypeReference_);
    }
    export class $MobEffectIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $AbstractArrowPickupFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ItemLoreFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ObjectiveRenderTypeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
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
        constructor(outputSchema: $Schema);
    }
    export class $ItemSpawnEggFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RenamedCoralFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $OminousBannerBlockEntityRenameFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockEntityBannerColorFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemRemoveBlockEntityTagFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, items: $Set_<string>);
    }
    export class $EntityTippedArrowFix extends $SimplestEntityRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityUUIDFix extends $AbstractUUIDFix {
        static updateLivingEntity(animalTag: $Dynamic<never>): $Dynamic<never>;
        static updateEntityUUID(animalTag: $Dynamic<never>): $Dynamic<never>;
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(outputSchema: $Schema);
    }
    export class $EntityBrushableBlockFieldsRenameFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $EntityCatSplitFix extends $SimpleEntityRenameFix {
        name: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $HeightmapRenamingFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityCodSalmonFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        static RENAMED_EGG_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
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
        constructor(outputSchema: $Schema);
    }
    export class $EntityItemFrameDirectionFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackComponentizationFix$ItemStackData {
        write(): $Dynamic<never>;
        static read(tag: $Dynamic<never>): ($ItemStackComponentizationFix$ItemStackData) | undefined;
        is(items: $Set_<string>): boolean;
        is(component: string): boolean;
        moveTagToComponent(key: string, component: string): void;
        moveTagToComponent(key: string, component: string, tag: $Dynamic<never>): void;
        moveTagInto(oldKey: string, tag: $Dynamic<never>, newKey: string): $Dynamic<never>;
        setComponent(component: string, value: $Dynamic<never>): void;
        setComponent(component: string, value: $OptionalDynamic<never>): void;
        fixSubTag(key: string, skipIfEmpty: boolean, fixer: $UnaryOperator_<$Dynamic<never>>): void;
        removeTag(key: string): $OptionalDynamic<never>;
        hasComponent(component: string): boolean;
        tag: $Dynamic<never>;
    }
    export class $EntityRavagerRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockEntityBlockStateFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsMenuBlurrinessFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $IglooMetadataRemovalFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkPalettedStorageFix$UpgradeChunk {
    }
    export class $ChunkHeightAndBiomeFix extends $DataFix {
        static ceillog2(value: number): number;
        makeRule(): $TypeRewriteRule;
        static DATAFIXER_CONTEXT_TAG: string;
        static DEFAULT_BIOME: string;
        static BLOCKS_PER_SECTION: number;
        constructor(outputSchema: $Schema);
    }
    export class $NamespacedTypeRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_, renamer: $UnaryOperator_<string>);
    }
    export class $ReorganizePoi extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $DropInvalidSignDataFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, name: string, entityName: string);
    }
    export class $ItemStackUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(outputSchema: $Schema);
    }
    export class $TippedArrowPotionToItemFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityJukeboxFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BedItemColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $TrialSpawnerConfigFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockStateData {
        static parse(nbt: string): $Dynamic<never>;
        static getTag(id: number): $Dynamic<never>;
        static bootstrap10(): void;
        static bootstrap15(): void;
        static bootstrap11(): void;
        static bootstrap12(): void;
        static bootstrap13(): void;
        static bootstrap14(): void;
        static upgradeBlock(id: number): string;
        static upgradeBlock(name: string): string;
        static upgradeBlockStateTag(nbt: $Dynamic<never>): $Dynamic<never>;
        static bootstrap4(): void;
        static bootstrap7(): void;
        static bootstrap8(): void;
        static bootstrap3(): void;
        static bootstrap1(): void;
        static bootstrap2(): void;
        static bootstrap5(): void;
        static bootstrap0(): void;
        static bootstrap6(): void;
        static bootstrap9(): void;
        static FILTER_ME: string;
        constructor();
    }
    export class $VillagerDataFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, entityName: string);
    }
    export class $BlockEntityShulkerBoxColorFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $PrimedTntBlockStateFixer extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $AttributesRename extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, renames: $UnaryOperator_<string>);
    }
    export class $EntityCustomNameToComponentFix extends $DataFix {
        static fixTagCustomName(tag: $Dynamic<never>): $Dynamic<never>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RedstoneWireConnectionsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $OptionsAddTextBackgroundFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LeavesFix$Section {
        write(data: $Typed<never>): $Typed<never>;
        getIndex(): number;
        isSkippable(): boolean;
        getBlock(index: number): number;
        getStateId(name: string, persistent: boolean, distance: number): number;
        readStorage(data: $Dynamic<never>): void;
        skippable(): boolean;
        static PROPERTIES_TAG: string;
        static BLOCK_STATES_TAG: string;
        paletteFinder: $OpticFinder<$List<$Pair<string, $Dynamic<never>>>>;
        static NAME_TAG: string;
        index: number;
        palette: $List<$Dynamic<never>>;
        storage: $PackedBitStorage;
        constructor(data: $Typed<never>, schema: $Schema);
    }
    export class $GoatHornIdFix extends $ItemStackTagFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityShulkerColorFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityBlockStateFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static getBlockId(name: string): number;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityZombifiedPiglinRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema);
    }
    export class $RandomSequenceSettingsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $BlendingDataRemoveFromNetherEndFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $EntityWolfColorFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $MobSpawnerEntityIdentifiersFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $FilteredBooksFix extends $ItemStackTagFix {
        constructor(outputSchema: $Schema);
    }
    export class $FeatureFlagRemoveFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, flagsToRemove: $Set_<string>);
    }
    export class $EntityZombieSplitFix extends $EntityRenameFix {
        name: string;
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntitySignDoubleSidedEditableTextFix extends $NamedEntityFix {
        static FILTERED_CORRECT: string;
        constructor(outputSchema: $Schema, name: string, entityName: string);
    }
    export class $ChunkStatusFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkToProtochunkFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsAmbientOcclusionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ItemPotionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static DEFAULT: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityPufferfishRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WallPropertyFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StatsCounterFix$StatType extends $Record {
    }
    export class $ColorlessShulkerEntityFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsAccessibilityOnboardFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $BitStorageAlignFix extends $DataFix {
        static addPadding(numBits: number, bitWidth: number, inputData: number[]): number[];
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ProjectileStoredWeaponFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ScoreboardDisplaySlotFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $CriteriaRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, advancementId: string, conversions: $UnaryOperator_<string>);
    }
    export class $LevelDataGeneratorOptionsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static GENERATOR_OPTIONS: string;
        static MAP: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RecipesFix {
        static RECIPES: $Map<string, string>;
        constructor();
    }
    export class $SimpleEntityRenameFix extends $EntityRenameFix {
        getNewNameAndTag(name: string, tag: $Dynamic<never>): $Pair<string, $Dynamic<never>>;
        name: string;
        constructor(name: string, outputSchema: $Schema, changesType: boolean);
    }
    export class $NewVillageFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LeavesFix extends $DataFix {
        static getIndex(x: number, y: number, z: number): number;
        static getSideMask(west: boolean, east: boolean, north: boolean, south: boolean): number;
        makeRule(): $TypeRewriteRule;
        static LEAVES: $Object2IntMap<string>;
        static LOGS: $Set<string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EmptyItemInVillagerTradeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ItemStackComponentRemainderFix extends $DataFix {
        fixComponent<T>(tag: $Dynamic<T>): $Dynamic<T>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, componentId: string);
        constructor(outputSchema: $Schema, name: string, componentId: string, newComponentId: string);
    }
    export class $ChunkStatusFix2 extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkDeleteLightFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ZombieVillagerRebuildXpFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityRidingToPassengersFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RenameEnchantmentsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        name: string;
        renames: $Map<string, string>;
        constructor(outputSchema: $Schema, name: string, renames: $Map_<string, string>);
    }
    export class $ChunkPalettedStorageFix$DataLayer {
    }
    export class $BlockEntityKeepPacked extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LeavesFix$LeavesSection extends $LeavesFix$Section {
        isLeaf(id: number): boolean;
        setDistance(index: number, block: number, distance: number): void;
        getDistance(index: number): number;
        isLog(id: number): boolean;
        static PROPERTIES_TAG: string;
        static BLOCK_STATES_TAG: string;
        paletteFinder: $OpticFinder<$List<$Pair<string, $Dynamic<never>>>>;
        static NAME_TAG: string;
        index: number;
        palette: $List<$Dynamic<never>>;
        storage: $PackedBitStorage;
        constructor(data: $Typed<never>, schema: $Schema);
    }
    export class $FilteredSignsFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $OverreachingTickFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $SavedDataFeaturePoolElementFix extends $DataFix {
        static fixFeature(dynamic: $Dynamic<never>): $Dynamic<never>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $EntityEquipmentToArmorAndHandFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsKeyLwjgl3Fix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static KEY_UNKNOWN: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BiomeFix {
        static BIOMES: $Map<string, string>;
        constructor();
    }
    export class $EntityGoatMissingStateFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $ChunkLightRemoveFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockEntitySignTextStrictJsonFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ObjectiveDisplayNameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityPaintingFieldsRenameFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkStructuresTemplateRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WorldGenSettingsFix$StructureFeatureConfiguration {
    }
    export class $AddNewChoices extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_);
    }
    export class $OptionsRenameFieldFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, fixName: string, fieldFrom: string, fieldTo: string);
    }
    export class $ItemStackSpawnEggFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, itemType: string);
    }
    export class $MemoryExpiryDataFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, entityName: string);
    }
    export class $SavedDataUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LegacyDragonFightFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkDeleteIgnoredLightDataFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $NamedEntityWriteReadFix extends $DataFix {
        fix<T>(tag: $Dynamic<T>): $Dynamic<T>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, name: string, type: $DSL$TypeReference_, entityName: string);
    }
    export class $EntityTheRenameningFix extends $SimplestEntityRenameFix {
        static RENAMED_ITEMS: $Map<string, string>;
        static RENAMED_IDS: $Map<string, string>;
        static RENAMED_BLOCKS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkProtoTickListFix$PoorMansPalettedContainer {
        get(x: number, y: number, z: number): $Dynamic<never>;
        data(): number[];
        palette(): $List<$Dynamic<never>>;
        constructor(palette: $List_<$Dynamic<never>>, data: number[]);
    }
    export class $BannerEntityCustomNameToOverrideComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ItemRenameFix extends $DataFix {
        static create(outputSchema: $Schema, name: string, fixer: $Function_<string, string>): $DataFix;
        makeRule(): $TypeRewriteRule;
        fixItem(item: string): string;
        constructor(outputSchema: $Schema, name: string);
    }
    export class $VariantRenameFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_, entityName: string, renames: $Map_<string, string>);
    }
    export class $BeehiveFieldRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ItemIdFix extends $DataFix {
        static getItem(id: number): string;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $CatTypeFix extends $NamedEntityFix {
        fixTag(dynamic: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockEntityUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        typeReference: $DSL$TypeReference;
        constructor(outputSchema: $Schema);
    }
    export class $ItemShulkerBoxColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static NAMES_BY_COLOR: string[];
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityRenameFix extends $DataFix {
        fix(entityName: string, typed: $Typed<never>): $Pair<string, $Typed<never>>;
        makeRule(): $TypeRewriteRule;
        name: string;
        constructor(name: string, outputSchema: $Schema, changesType: boolean);
    }
    export class $DecoratedPotFieldRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $TrappedChestBlockEntityFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $DyeItemRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $VillagerTradeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $EntityHorseSaddleFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkProtoTickListFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $BlendingDataFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $MapBannerBlockPosFormatFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $NamedEntityFix extends $DataFix {
        fix(typed: $Typed<never>): $Typed<never>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, name: string, type: $DSL$TypeReference_, entityName: string);
    }
    export class $EntitySkeletonSplitFix extends $SimpleEntityRenameFix {
        name: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityArmorStandSilentFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RemapChunkStatusFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, mapper: $UnaryOperator_<string>);
    }
    export class $ItemStackCustomNameToOverrideComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ItemStackComponentizationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static fixProfile(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $EntityZombieVillagerTypeFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $JigsawRotationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $AdvancementsRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, name: string, renamer: $Function_<string, string>);
    }
    export class $RemoveEmptyItemInBrushableBlockFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $CavesAndCliffsRenames {
        static RENAMES: $ImmutableMap<string, string>;
    }
    export class $StructuresBecomeConfiguredFix$Conversion extends $Record {
        fallback(): string;
        static trivial(fallback: string): $StructuresBecomeConfiguredFix$Conversion;
        biomeMapping(): $Map<string, string>;
        static biomeMapped(biomeMapping: $Map_<$List_<string>, string>, fallback: string): $StructuresBecomeConfiguredFix$Conversion;
        constructor(biomeMapping: $Map_<string, string>, fallback: string);
    }
    export class $EntityHealthFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $SimplestEntityRenameFix extends $DataFix {
        rename(name: string): string;
        makeRule(): $TypeRewriteRule;
        constructor(name: string, outputSchema: $Schema, changesType: boolean);
    }
    export class $WorldGenSettingsFix extends $DataFix {
        static defaultOverworld<T>(data: $Dynamic<T>, seed: number): $Dynamic<T>;
        static vanillaLevels<T>(data: $Dynamic<T>, seed: number, arg2: $Dynamic<T>, arg3: boolean): T;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkBedBlockEntityInjecterFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EffectDurationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ChestedHorsesInventoryZeroIndexingFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $AreaEffectCloudPotionFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityVariantFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_, entityName: string, fieldName: string, idConversions: $IntFunction_<string>);
    }
}
