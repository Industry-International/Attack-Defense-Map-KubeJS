import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $HashCode } from "@package/com/google/common/hash";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Comparator, $Map, $Set, $Collection_ } from "@package/java/util";
import { $ToIntFunction } from "@package/java/util/function";
import { $WorldVersion } from "@package/net/minecraft";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ModContainer } from "@package/net/fabricmc/loader/api";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $DataGeneratorExtension } from "@package/net/fabricmc/fabric/impl/datagen";
export * as advancements from "@package/net/minecraft/data/advancements";
export * as worldgen from "@package/net/minecraft/data/worldgen";
export * as models from "@package/net/minecraft/data/models";
export * as tags from "@package/net/minecraft/data/tags";
export * as loot from "@package/net/minecraft/data/loot";
export * as registries from "@package/net/minecraft/data/registries";
export * as recipes from "@package/net/minecraft/data/recipes";
export * as structures from "@package/net/minecraft/data/structures";
export * as info from "@package/net/minecraft/data/info";
export * as metadata from "@package/net/minecraft/data/metadata";

declare module "@package/net/minecraft/data" {
    export class $BlockFamily {
        get(arg0: $BlockFamily$Variant_): $Block;
        getVariants(): $Map<$BlockFamily$Variant, $Block>;
        shouldGenerateRecipe(): boolean;
        getRecipeGroupPrefix(): (string) | undefined;
        getRecipeUnlockedBy(): (string) | undefined;
        getBaseBlock(): $Block;
        shouldGenerateModel(): boolean;
        generateModel: boolean;
        recipeUnlockedBy: string;
        recipeGroupPrefix: string;
        variants: $Map<$BlockFamily$Variant, $Block>;
        generateRecipe: boolean;
        constructor(arg0: $Block_);
        get baseBlock(): $Block;
    }
    export class $HashCache$ProviderCacheBuilder extends $Record {
    }
    export class $HashCache$UpdateFunction {
    }
    export interface $HashCache$UpdateFunction {
        update(arg0: $CachedOutput_): $CompletableFuture<never>;
    }
    /**
     * Values that may be interpreted as {@link $HashCache$UpdateFunction}.
     */
    export type $HashCache$UpdateFunction_ = ((arg0: $CachedOutput) => $CompletableFuture<never>);
    export class $PackOutput$PathProvider {
        file(arg0: $ResourceLocation_, arg1: string): $Path;
        json(arg0: $ResourceLocation_): $Path;
        kind: string;
        root: $Path;
        constructor(arg0: $PackOutput, arg1: $PackOutput$Target_, arg2: string);
    }
    export class $PackOutput$Target extends $Enum<$PackOutput$Target> {
        static values(): $PackOutput$Target[];
        static valueOf(arg0: string): $PackOutput$Target;
        static REPORTS: $PackOutput$Target;
        static RESOURCE_PACK: $PackOutput$Target;
        directory: string;
        static DATA_PACK: $PackOutput$Target;
    }
    /**
     * Values that may be interpreted as {@link $PackOutput$Target}.
     */
    export type $PackOutput$Target_ = "data_pack" | "resource_pack" | "reports";
    export class $DataProvider$Factory<T extends $DataProvider> {
    }
    export interface $DataProvider$Factory<T extends $DataProvider> {
        create(arg0: $PackOutput): T;
    }
    /**
     * Values that may be interpreted as {@link $DataProvider$Factory}.
     */
    export type $DataProvider$Factory_<T> = ((arg0: $PackOutput) => T);
    export class $BlockFamily$Variant extends $Enum<$BlockFamily$Variant> {
        static values(): $BlockFamily$Variant[];
        static valueOf(arg0: string): $BlockFamily$Variant;
        getRecipeGroup(): string;
        static CUSTOM_FENCE_GATE: $BlockFamily$Variant;
        static WALL: $BlockFamily$Variant;
        static CUT: $BlockFamily$Variant;
        static CHISELED: $BlockFamily$Variant;
        static CUSTOM_FENCE: $BlockFamily$Variant;
        static BUTTON: $BlockFamily$Variant;
        static FENCE_GATE: $BlockFamily$Variant;
        static STAIRS: $BlockFamily$Variant;
        static FENCE: $BlockFamily$Variant;
        static WALL_SIGN: $BlockFamily$Variant;
        static DOOR: $BlockFamily$Variant;
        static MOSAIC: $BlockFamily$Variant;
        static TRAPDOOR: $BlockFamily$Variant;
        static PRESSURE_PLATE: $BlockFamily$Variant;
        static POLISHED: $BlockFamily$Variant;
        static CRACKED: $BlockFamily$Variant;
        static SIGN: $BlockFamily$Variant;
        static SLAB: $BlockFamily$Variant;
        get recipeGroup(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockFamily$Variant}.
     */
    export type $BlockFamily$Variant_ = "button" | "chiseled" | "cracked" | "cut" | "door" | "custom_fence" | "fence" | "custom_fence_gate" | "fence_gate" | "mosaic" | "sign" | "slab" | "stairs" | "pressure_plate" | "polished" | "trapdoor" | "wall" | "wall_sign";
    export class $DataGenerator implements $DataGeneratorExtension {
        run(): void;
        merge(arg0: $DataGenerator): void;
        addProvider<T extends $DataProvider>(arg0: boolean, arg1: $DataProvider$Factory_<T>): T;
        addProvider<T extends $DataProvider>(arg0: boolean, arg1: T): T;
        getProvidersView(): $Map<string, $DataProvider>;
        getBuiltinDatapack(arg0: boolean, arg1: string, arg2: string): $DataGenerator$PackGenerator;
        getBuiltinDatapack(arg0: boolean, arg1: string): $DataGenerator$PackGenerator;
        getPackGenerator(arg0: boolean, arg1: string, arg2: string): $DataGenerator$PackGenerator;
        getVanillaPack(arg0: boolean): $DataGenerator$PackGenerator;
        createBuiltinResourcePack(arg0: boolean, arg1: $ResourceLocation_, arg2: $ModContainer, arg3: boolean): $Pair<any, any>;
        createPack(arg0: string, arg1: $PackOutput): $DataGenerator$PackGenerator;
        getPackOutput(arg0: string): $PackOutput;
        getPackOutput(): $PackOutput;
        vanillaPackOutput: $PackOutput;
        providersToRun: $Map<string, $DataProvider>;
        allProviderIds: $Set<string>;
        constructor(arg0: $Path_, arg1: $WorldVersion, arg2: boolean);
        get providersView(): $Map<string, $DataProvider>;
    }
    export class $HashCache$ProviderCache extends $Record {
    }
    export class $HashCache$UpdateResult extends $Record {
        cache(): $HashCache$ProviderCache;
        writes(): number;
        providerId(): string;
        constructor(providerId: string, cache: $HashCache$ProviderCache_, writes: number);
    }
    export class $DataGenerator$PackGenerator {
        addProvider<T extends $DataProvider>(arg0: $DataProvider$Factory_<T>): T;
        this$0: $DataGenerator;
        constructor(arg0: $DataGenerator, arg1: boolean, arg2: string, arg3: $PackOutput);
    }
    export class $Main {
        static main(arg0: string[]): void;
        static createStandardGenerator(arg0: $Path_, arg1: $Collection_<$Path_>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: $WorldVersion, arg8: boolean): $DataGenerator;
        constructor();
    }
    export class $CachedOutput {
        static NO_CACHE: $CachedOutput;
    }
    export interface $CachedOutput {
        writeIfNeeded(arg0: $Path_, arg1: number[], arg2: $HashCode): void;
    }
    /**
     * Values that may be interpreted as {@link $CachedOutput}.
     */
    export type $CachedOutput_ = ((arg0: $Path, arg1: number[], arg2: $HashCode) => void);
    export class $HashCache {
        applyUpdate(arg0: $HashCache$UpdateResult_): void;
        purgeStaleAndWrite(): void;
        generateUpdate(arg0: string, arg1: $HashCache$UpdateFunction_): $CompletableFuture<$HashCache$UpdateResult>;
        shouldRunInThisVersion(arg0: string): boolean;
        cachePaths: $Set<$Path>;
        static LOGGER: $Logger;
        constructor(arg0: $Path_, arg1: $Collection_<string>, arg2: $WorldVersion);
    }
    export class $BlockFamily$Builder {
        fence(arg0: $Block_): $BlockFamily$Builder;
        sign(arg0: $Block_, arg1: $Block_): $BlockFamily$Builder;
        getFamily(): $BlockFamily;
        wall(arg0: $Block_): $BlockFamily$Builder;
        button(arg0: $Block_): $BlockFamily$Builder;
        cracked(arg0: $Block_): $BlockFamily$Builder;
        pressurePlate(arg0: $Block_): $BlockFamily$Builder;
        cut(arg0: $Block_): $BlockFamily$Builder;
        stairs(arg0: $Block_): $BlockFamily$Builder;
        chiseled(arg0: $Block_): $BlockFamily$Builder;
        fenceGate(arg0: $Block_): $BlockFamily$Builder;
        polished(arg0: $Block_): $BlockFamily$Builder;
        door(arg0: $Block_): $BlockFamily$Builder;
        trapdoor(arg0: $Block_): $BlockFamily$Builder;
        slab(arg0: $Block_): $BlockFamily$Builder;
        recipeGroupPrefix(arg0: string): $BlockFamily$Builder;
        customFenceGate(arg0: $Block_): $BlockFamily$Builder;
        dontGenerateRecipe(): $BlockFamily$Builder;
        recipeUnlockedBy(arg0: string): $BlockFamily$Builder;
        dontGenerateModel(): $BlockFamily$Builder;
        customFence(arg0: $Block_): $BlockFamily$Builder;
        mosaic(arg0: $Block_): $BlockFamily$Builder;
        constructor(arg0: $Block_);
        get family(): $BlockFamily;
    }
    export class $DataProvider {
        static saveStable(arg0: $CachedOutput_, arg1: $JsonElement_, arg2: $Path_): $CompletableFuture<never>;
        static saveStable<T>(arg0: $CachedOutput_, arg1: $HolderLookup$Provider, arg2: $Codec<T>, arg3: T, arg4: $Path_): $CompletableFuture<never>;
        static FIXED_ORDER_FIELDS: $ToIntFunction<string>;
        static INDENT_WIDTH: $AtomicInteger;
        static KEY_COMPARATOR: $Comparator<string>;
        static LOGGER: $Logger;
    }
    export interface $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        get name(): string;
    }
    export class $PackOutput {
        createRegistryElementsPathProvider(arg0: $ResourceKey_<$Registry<never>>): $PackOutput$PathProvider;
        createRegistryTagsPathProvider(arg0: $ResourceKey_<$Registry<never>>): $PackOutput$PathProvider;
        getOutputFolder(arg0: $PackOutput$Target_): $Path;
        getOutputFolder(): $Path;
        createPathProvider(arg0: $PackOutput$Target_, arg1: string): $PackOutput$PathProvider;
        constructor(arg0: $Path_);
    }
    export class $HashCache$CacheUpdater implements $CachedOutput {
    }
    export class $BlockFamilies {
        static getAllFamilies(): $Stream<$BlockFamily>;
        static familyBuilder(arg0: $Block_): $BlockFamily$Builder;
        static MUD_BRICKS: $BlockFamily;
        static BAMBOO_PLANKS: $BlockFamily;
        static DARK_PRISMARINE: $BlockFamily;
        static EXPOSED_COPPER: $BlockFamily;
        static SANDSTONE: $BlockFamily;
        static SMOOTH_RED_SANDSTONE: $BlockFamily;
        static MANGROVE_PLANKS: $BlockFamily;
        static SPRUCE_PLANKS: $BlockFamily;
        static CRIMSON_PLANKS: $BlockFamily;
        static WAXED_CUT_COPPER: $BlockFamily;
        static EXPOSED_CUT_COPPER: $BlockFamily;
        static BRICKS: $BlockFamily;
        static WAXED_WEATHERED_CUT_COPPER: $BlockFamily;
        static QUARTZ: $BlockFamily;
        static POLISHED_GRANITE: $BlockFamily;
        static GRANITE: $BlockFamily;
        static BLACKSTONE: $BlockFamily;
        static TUFF: $BlockFamily;
        static DEEPSLATE: $BlockFamily;
        static COBBLED_DEEPSLATE: $BlockFamily;
        static SMOOTH_QUARTZ: $BlockFamily;
        static POLISHED_DIORITE: $BlockFamily;
        static MOSSY_COBBLESTONE: $BlockFamily;
        static WARPED_PLANKS: $BlockFamily;
        static CUT_SANDSTONE: $BlockFamily;
        static DEEPSLATE_TILES: $BlockFamily;
        static MOSSY_STONE_BRICKS: $BlockFamily;
        static PRISMARINE: $BlockFamily;
        static PURPUR: $BlockFamily;
        static TUFF_BRICKS: $BlockFamily;
        static SMOOTH_SANDSTONE: $BlockFamily;
        static DARK_OAK_PLANKS: $BlockFamily;
        static WAXED_WEATHERED_COPPER: $BlockFamily;
        static BAMBOO_MOSAIC: $BlockFamily;
        static JUNGLE_PLANKS: $BlockFamily;
        static POLISHED_BLACKSTONE_BRICKS: $BlockFamily;
        static CUT_COPPER: $BlockFamily;
        static COBBLESTONE: $BlockFamily;
        static OXIDIZED_CUT_COPPER: $BlockFamily;
        static STONE_BRICK: $BlockFamily;
        static WAXED_OXIDIZED_CUT_COPPER: $BlockFamily;
        static WEATHERED_COPPER: $BlockFamily;
        static WAXED_EXPOSED_COPPER: $BlockFamily;
        static END_STONE_BRICKS: $BlockFamily;
        static OAK_PLANKS: $BlockFamily;
        static POLISHED_DEEPSLATE: $BlockFamily;
        static CHERRY_PLANKS: $BlockFamily;
        static WAXED_OXIDIZED_COPPER: $BlockFamily;
        static CUT_RED_SANDSTONE: $BlockFamily;
        static RED_NETHER_BRICKS: $BlockFamily;
        static NETHER_BRICKS: $BlockFamily;
        static DEEPSLATE_BRICKS: $BlockFamily;
        static POLISHED_ANDESITE: $BlockFamily;
        static WAXED_COPPER_BLOCK: $BlockFamily;
        static BIRCH_PLANKS: $BlockFamily;
        static POLISHED_TUFF: $BlockFamily;
        static OXIDIZED_COPPER: $BlockFamily;
        static ACACIA_PLANKS: $BlockFamily;
        static DIORITE: $BlockFamily;
        static RED_SANDSTONE: $BlockFamily;
        static WAXED_EXPOSED_CUT_COPPER: $BlockFamily;
        static ANDESITE: $BlockFamily;
        static POLISHED_BLACKSTONE: $BlockFamily;
        static WEATHERED_CUT_COPPER: $BlockFamily;
        static PRISMARINE_BRICKS: $BlockFamily;
        static STONE: $BlockFamily;
        static COPPER_BLOCK: $BlockFamily;
        constructor();
        static get allFamilies(): $Stream<$BlockFamily>;
    }
}
