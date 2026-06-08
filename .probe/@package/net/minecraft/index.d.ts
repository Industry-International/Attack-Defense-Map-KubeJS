import { $Annotation } from "@package/java/lang/annotation";
import { $DataResult, $Codec, $Dynamic } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ExecutorService, $Callable, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SystemReportAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $List, $Map_, $Date, $Collection_, $List_, $Collection, $Map, $Map$Entry } from "@package/java/util";
import { $Typed, $DSL$TypeReference_ } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $SingleKeyCache, $RandomSource, $TimeSource$NanoTimeSource } from "@package/net/minecraft/util";
import { $Predicate, $Consumer, $ToIntFunction, $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $BiFunction, $Predicate_, $BiFunction_, $Function, $Supplier } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PackType_ } from "@package/net/minecraft/server/packs";
import { $URI } from "@package/java/net";
import { $Thread$UncaughtExceptionHandler, $StackTraceElement, $Thread, $Throwable, $Iterable_, $Enum, $Record, $RuntimeException, $Runnable_, $StringBuilder, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $FileSystemProvider } from "@package/java/nio/file/spi";
import { $File_ } from "@package/java/io";
import { $ResourceLeakDetector$Level } from "@package/io/netty/util";
import { $ChunkPos, $LevelHeightAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $IntArrayList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Logger } from "@package/org/slf4j";
import { $TextColor } from "@package/net/minecraft/network/chat";
import { $KubeColor } from "@package/dev/latvian/mods/kubejs/color";
import { $DataVersion } from "@package/net/minecraft/world/level/storage";
import { $Ticker } from "@package/com/google/common/base";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IntStream, $LongStream, $Collector, $Stream } from "@package/java/util/stream";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Type } from "@package/com/mojang/datafixers/types";
export * as network from "@package/net/minecraft/network";
export * as server from "@package/net/minecraft/server";
export * as world from "@package/net/minecraft/world";
export * as util from "@package/net/minecraft/util";
export * as commands from "@package/net/minecraft/commands";
export * as client from "@package/net/minecraft/client";
export * as nbt from "@package/net/minecraft/nbt";
export * as advancements from "@package/net/minecraft/advancements";
export * as data from "@package/net/minecraft/data";
export * as core from "@package/net/minecraft/core";
export * as gametest from "@package/net/minecraft/gametest";
export * as resources from "@package/net/minecraft/resources";
export * as sounds from "@package/net/minecraft/sounds";
export * as tags from "@package/net/minecraft/tags";
export * as recipebook from "@package/net/minecraft/recipebook";
export * as stats from "@package/net/minecraft/stats";
export * as realms from "@package/net/minecraft/realms";
export * as obfuscate from "@package/net/minecraft/obfuscate";
export * as locale from "@package/net/minecraft/locale";
export * as references from "@package/net/minecraft/references";

declare module "@package/net/minecraft" {
    export class $ResourceLocationException extends $RuntimeException {
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Throwable);
    }
    export class $ChatFormatting extends $Enum<$ChatFormatting> implements $StringRepresentable, $KubeColor {
        getName(): string;
        static values(): $ChatFormatting[];
        getChar(): string;
        static valueOf(arg0: string): $ChatFormatting;
        getId(): number;
        static getByName(arg0: string): $ChatFormatting;
        getColor(): number;
        static getNames(arg0: boolean, arg1: boolean): $Collection<string>;
        getSerializedName(): string;
        kjs$getRGB(): number;
        kjs$getARGB(): number;
        isFormat(): boolean;
        static getById(arg0: number): $ChatFormatting;
        isColor(): boolean;
        static getByCode(formattingCode: string): $ChatFormatting;
        static stripFormatting(arg0: string): string;
        getRemappedEnumConstantName(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        createTextColor(): $TextColor;
        toHexString(): string;
        serialize(): string;
        getFireworkRGB(): number;
        static ITALIC: $ChatFormatting;
        static GOLD: $ChatFormatting;
        static GRAY: $ChatFormatting;
        static AQUA: $ChatFormatting;
        static WHITE: $ChatFormatting;
        static CODEC: $Codec<$ChatFormatting>;
        static BLUE: $ChatFormatting;
        static OBFUSCATED: $ChatFormatting;
        static DARK_AQUA: $ChatFormatting;
        static RESET: $ChatFormatting;
        static DARK_BLUE: $ChatFormatting;
        static GREEN: $ChatFormatting;
        static UNDERLINE: $ChatFormatting;
        static RED: $ChatFormatting;
        static PREFIX_CODE: string;
        static DARK_PURPLE: $ChatFormatting;
        static STRIKETHROUGH: $ChatFormatting;
        static DARK_RED: $ChatFormatting;
        static LIGHT_PURPLE: $ChatFormatting;
        static BLACK: $ChatFormatting;
        static BOLD: $ChatFormatting;
        static DARK_GREEN: $ChatFormatting;
        static YELLOW: $ChatFormatting;
        static DARK_GRAY: $ChatFormatting;
        get char(): string;
        get id(): number;
        get serializedName(): string;
        get format(): boolean;
        get remappedEnumConstantName(): string;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChatFormatting}.
     */
    export type $ChatFormatting_ = "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "obfuscated" | "bold" | "strikethrough" | "underline" | "italic" | "reset";
    export class $CrashReportCategory$Entry {
    }
    export class $DefaultUncaughtExceptionHandlerWithName implements $Thread$UncaughtExceptionHandler {
        uncaughtException(arg0: $Thread, arg1: $Throwable): void;
        constructor(arg0: $Logger);
    }
    export class $BlockUtil$FoundRectangle {
        axis1Size: number;
        minCorner: $BlockPos;
        axis2Size: number;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number);
    }
    export class $SharedConstants {
        static setVersion(arg0: $WorldVersion): void;
        static tryDetectVersion(): void;
        static getProtocolVersion(): number;
        static debugVoidTerrain(arg0: $ChunkPos): boolean;
        static getCurrentVersion(): $WorldVersion;
        /**
         * @deprecated
         */
        static DATA_PACK_FORMAT: number;
        static DEBUG_DONT_SAVE_WORLD: boolean;
        static DEBUG_DISABLE_AQUIFERS: boolean;
        static DEBUG_DISABLE_BELOW_ZERO_RETROGENERATION: boolean;
        /**
         * @deprecated
         */
        static WORLD_VERSION: number;
        static CRASH_EAGERLY: boolean;
        static MAXIMUM_TICK_TIME_NANOS: number;
        static MAX_PLAYER_NAME_LENGTH: number;
        static FIX_SAND_DUPE: boolean;
        static DEBUG_DISABLE_SURFACE: boolean;
        static REPORT_FORMAT_VERSION: number;
        /**
         * @deprecated
         */
        static VERSION_STRING: string;
        static DEBUG_SYNCHRONOUS_GL_LOGS: boolean;
        static DEBUG_JFR_PROFILING_ENABLE_LEVEL_LOADING: boolean;
        static DEBUG_COLLISION: boolean;
        static DEBUG_RENDER: boolean;
        static DEBUG_UI_NARRATION: boolean;
        static FAKE_MS_LATENCY: number;
        static DEBUG_WORLDGENATTEMPT: boolean;
        static DEBUG_SKY_LIGHT_SECTIONS: boolean;
        static CHECK_DATA_FIXER_SCHEMA: boolean;
        static MAX_CHAT_LENGTH: number;
        static DEBUG_ORE_VEINS: boolean;
        static DEBUG_SAVE_STRUCTURES_AS_SNBT: boolean;
        static DEBUG_WATER: boolean;
        static AVERAGE_GAME_TICKS_PER_RANDOM_TICK_PER_BLOCK: number;
        static DEBUG_STRUCTURE_EDIT_MODE: boolean;
        static MAX_CHAINED_NEIGHBOR_UPDATES: number;
        static DEBUG_VALIDATE_RESOURCE_PATH_CASE: boolean;
        static DEBUG_BEES: boolean;
        static DEBUG_NEIGHBORSUPDATE: boolean;
        static DEBUG_STRUCTURES: boolean;
        static WORLD_RESOLUTION: number;
        static MAX_FUNCTION_COMMAND_LENGTH: number;
        static DEBUG_BYPASS_REALMS_VERSION_CHECK: boolean;
        static DEBUG_DUMP_INTERPOLATED_TEXTURE_FRAMES: boolean;
        static DEBUG_FORCE_ONBOARDING_SCREEN: boolean;
        static DEBUG_PATHFINDING: boolean;
        static DEBUG_FORCE_TELEMETRY: boolean;
        static DEBUG_DISABLE_FEATURES: boolean;
        static TICKS_PER_GAME_DAY: number;
        static AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_GAME_DAY: number;
        static DEBUG_AQUIFERS: boolean;
        static DEBUG_IGNORE_LOCAL_MOB_CAP: boolean;
        /**
         * @deprecated
         */
        static SNAPSHOT: boolean;
        /**
         * @deprecated
         */
        static RELEASE_NETWORK_PROTOCOL_VERSION: number;
        static DEBUG_SHAPES: boolean;
        static DEBUG_DISABLE_BLENDING: boolean;
        static FAKE_MS_JITTER: number;
        static DEBUG_HOTKEYS: boolean;
        static DEBUG_GOAL_SELECTOR: boolean;
        static DEBUG_RAIDS: boolean;
        static MAXIMUM_BLOCK_EXPLOSION_RESISTANCE: number;
        static DEBUG_BRAIN: boolean;
        static FIX_TNT_DUPE: boolean;
        static DEBUG_OPEN_INCOMPATIBLE_WORLDS: boolean;
        static DEBUG_SUBTITLES: boolean;
        static DEBUG_UNLOCK_ALL_TRADES: boolean;
        static MILLIS_PER_TICK: number;
        static DEBUG_DISABLE_LIQUID_SPREADING: boolean;
        static USE_WORKFLOWS_HOOKS: boolean;
        static DEBUG_ALLOW_LOW_SIM_DISTANCE: boolean;
        static DEBUG_BLOCK_BREAK: boolean;
        static DEBUG_BREEZE_MOB: boolean;
        static DEBUG_FEATURE_COUNT: boolean;
        static DEBUG_SOLID_FACE: boolean;
        static DEBUG_SCULK_CATALYST: boolean;
        static DEBUG_DISABLE_ORE_VEINS: boolean;
        static DEBUG_LARGE_DRIPSTONE: boolean;
        static DEBUG_RESOURCE_LOAD_TIMES: boolean;
        static DEBUG_KEEP_JIGSAW_BLOCKS_DURING_STRUCTURE_GEN: boolean;
        static TICKS_PER_SECOND: number;
        static DEBUG_SUPPORT_BLOCKS: boolean;
        static INGAME_DEBUG_OUTPUT: boolean;
        static DEBUG_CARVERS: boolean;
        static DEBUG_VILLAGE_SECTIONS: boolean;
        static DATA_VERSION_TAG: string;
        static DEBUG_SHOW_SERVER_DEBUG_VALUES: boolean;
        static DEBUG_RESOURCE_GENERATION_OVERRIDE: boolean;
        static IS_RUNNING_WITH_JDWP: boolean;
        static SNBT_NAG_VERSION: number;
        static TICKS_PER_MINUTE: number;
        static WORLD_ICON_SIZE: number;
        static DEBUG_DUMP_TEXTURE_ATLAS: boolean;
        static USE_DEVONLY: boolean;
        static DEBUG_LIGHT: boolean;
        static DEBUG_SOCIAL_INTERACTIONS: boolean;
        static debugGenerateSquareTerrainWithoutNoise: boolean;
        /**
         * @deprecated
         */
        static SNAPSHOT_NETWORK_PROTOCOL_VERSION: number;
        static DEBUG_NAMED_RUNNABLES: boolean;
        static DEBUG_DONT_SEND_TELEMETRY_TO_BACKEND: boolean;
        static NETTY_LEAK_DETECTION: $ResourceLeakDetector$Level;
        static DEBUG_VERBOSE_SERVER_EVENTS: boolean;
        static DEBUG_TRIAL_SPAWNER_DETECTS_SHEEP_AS_PLAYERS: boolean;
        static DEBUG_WORLD_RECREATE: boolean;
        static DEBUG_CHUNKS: boolean;
        static MAX_USER_INPUT_COMMAND_LENGTH: number;
        static MAX_RENDER_DISTANCE: number;
        /**
         * @deprecated
         */
        static SERIES: string;
        static DEBUG_DISABLE_STRUCTURES: boolean;
        static DEBUG_GAME_EVENT_LISTENERS: boolean;
        static DEBUG_ONLY_GENERATE_HALF_THE_WORLD: boolean;
        static ILLEGAL_FILE_CHARACTERS: string[];
        static DEFAULT_MINECRAFT_PORT: number;
        static USE_DEBUG_FEATURES: boolean;
        /**
         * @deprecated
         */
        static RESOURCE_PACK_FORMAT: number;
        static COMMAND_STACK_TRACES: boolean;
        static AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_MINUTE: number;
        static DEBUG_DISABLE_CARVERS: boolean;
        static DEBUG_SHOW_LOCAL_SERVER_ENTITY_HIT_BOXES: boolean;
        /**
         * @deprecated
         */
        static LANGUAGE_FORMAT: number;
        static DEBUG_HEIGHTMAP: boolean;
        static DEBUG_VAULT_DETECTS_SHEEP_AS_PLAYERS: boolean;
        static DEBUG_DISABLE_FLUID_GENERATION: boolean;
        static DEBUG_MONITOR_TICK_TIMES: boolean;
        static IS_RUNNING_IN_IDE: boolean;
        static debugGenerateStripedTerrainWithoutNoise: boolean;
        constructor();
        static set version(value: $WorldVersion);
        static get protocolVersion(): number;
        static get currentVersion(): $WorldVersion;
    }
    export class $Util$OS extends $Enum<$Util$OS> {
        static values(): $Util$OS[];
        static valueOf(arg0: string): $Util$OS;
        openFile(arg0: $File_): void;
        openUri(arg0: string): void;
        openUri(arg0: $URI): void;
        telemetryName(): string;
        getOpenUriArguments(arg0: $URI): string[];
        openPath(arg0: $Path_): void;
        static LINUX: $Util$OS;
        static OSX: $Util$OS;
        static WINDOWS: $Util$OS;
        static SOLARIS: $Util$OS;
        static UNKNOWN: $Util$OS;
    }
    /**
     * Values that may be interpreted as {@link $Util$OS}.
     */
    export type $Util$OS_ = "linux" | "solaris" | "windows" | "osx" | "unknown";
    export class $FieldsAreNonnullByDefault implements $Annotation {
    }
    export class $BlockUtil$IntBounds {
        min: number;
        max: number;
        constructor(arg0: number, arg1: number);
    }
    export class $ReportType extends $Record {
        header(): string;
        appendHeader(arg0: $StringBuilder, arg1: $List_<string>): void;
        nuggets(): $List<string>;
        getErrorComment(): string;
        static CRASH: $ReportType;
        static PROFILE: $ReportType;
        static TEST: $ReportType;
        static CHUNK_IO_ERROR: $ReportType;
        static NETWORK_PROTOCOL_ERROR: $ReportType;
        constructor(header: string, nuggets: $List_<string>);
        get errorComment(): string;
    }
    export class $FileUtil {
        static resolvePath(arg0: $Path_, arg1: $List_<string>): $Path;
        static getFullResourcePath(arg0: string): string;
        static sanitizeName(arg0: string): string;
        static findAvailableName(arg0: $Path_, arg1: string, arg2: string): string;
        static createDirectoriesSafe(arg0: $Path_): void;
        static createPathToResource(arg0: $Path_, arg1: string, arg2: string): $Path;
        static validatePath(...arg0: string[]): void;
        static decomposePath(arg0: string): $DataResult<$List<string>>;
        static isPathPortable(arg0: $Path_): boolean;
        static isPathNormalized(arg0: $Path_): boolean;
        static isValidStrictPathSegment(arg0: string): boolean;
        static normalizeResourcePath(arg0: string): string;
        constructor();
    }
    export class $DefaultUncaughtExceptionHandler implements $Thread$UncaughtExceptionHandler {
        uncaughtException(arg0: $Thread, arg1: $Throwable): void;
        constructor(arg0: $Logger);
    }
    export class $MethodsReturnNonnullByDefault implements $Annotation {
    }
    export class $CharPredicate {
    }
    export interface $CharPredicate {
        test(arg0: string): boolean;
        or(arg0: $CharPredicate_): $CharPredicate;
        negate(): $CharPredicate;
        and(arg0: $CharPredicate_): $CharPredicate;
    }
    /**
     * Values that may be interpreted as {@link $CharPredicate}.
     */
    export type $CharPredicate_ = ((arg0: string) => boolean);
    export class $CrashReportDetail<V> {
    }
    export interface $CrashReportDetail<V> extends $Callable<V> {
    }
    /**
     * Values that may be interpreted as {@link $CrashReportDetail}.
     */
    export type $CrashReportDetail_<V> = (() => void);
    export class $CrashReportCategory {
        fillInStackTrace(arg0: number): number;
        setStackTrace(arg0: $StackTraceElement[]): void;
        static formatLocation(arg0: $LevelHeightAccessor, arg1: number, arg2: number, arg3: number): string;
        static formatLocation(arg0: $LevelHeightAccessor, arg1: number, arg2: number, arg3: number): string;
        static formatLocation(arg0: $LevelHeightAccessor, arg1: $BlockPos_): string;
        /**
         * @deprecated
         */
        applyStackTrace(arg0: $Throwable): void;
        trimStacktrace(arg0: number): void;
        setDetailError(arg0: string, arg1: $Throwable): void;
        setDetail(arg0: string, arg1: $CrashReportDetail_<string>): $CrashReportCategory;
        setDetail(arg0: string, arg1: $Object): $CrashReportCategory;
        getDetails(arg0: $StringBuilder): void;
        static populateBlockDetails(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor, arg2: $BlockPos_, arg3: $BlockState_): void;
        getStacktrace(): $StackTraceElement[];
        validateStackTrace(arg0: $StackTraceElement, arg1: $StackTraceElement): boolean;
        constructor(arg0: string);
        set stackTrace(value: $StackTraceElement[]);
        get stacktrace(): $StackTraceElement[];
    }
    export class $SystemReport implements $SystemReportAccessor {
        setDetail(arg0: string, arg1: string): void;
        setDetail(arg0: string, arg1: $Supplier_<string>): void;
        toLineSeparatedString(): string;
        static sizeInMiB(arg0: number): number;
        static getOPERATING_SYSTEM$create_$md$5bc4b9$2(): string;
        static getJAVA_VERSION$create_$md$5bc4b9$3(): string;
        appendToCrashReportString(arg0: $StringBuilder): void;
        getEntries(): $Map<string, string>;
        static BYTES_PER_MEBIBYTE: number;
        constructor();
        static get OPERATING_SYSTEM$create_$md$5bc4b9$2(): string;
        static get JAVA_VERSION$create_$md$5bc4b9$3(): string;
        get entries(): $Map<string, string>;
    }
    export class $WorldVersion {
    }
    export interface $WorldVersion {
        getName(): string;
        getId(): string;
        isStable(): boolean;
        getDataVersion(): $DataVersion;
        getProtocolVersion(): number;
        getPackVersion(arg0: $PackType_): number;
        getBuildTime(): $Date;
        get name(): string;
        get id(): string;
        get stable(): boolean;
        get dataVersion(): $DataVersion;
        get protocolVersion(): number;
        get buildTime(): $Date;
    }
    export class $BlockUtil {
        static getLargestRectangleAround(arg0: $BlockPos_, arg1: $Direction$Axis_, arg2: number, arg3: $Direction$Axis_, arg4: number, arg5: $Predicate_<$BlockPos>): $BlockUtil$FoundRectangle;
        static getTopConnectedBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Block_, arg3: $Direction_, arg4: $Block_): ($BlockPos) | undefined;
        static getMaxRectangleLocation(arg0: number[]): $Pair<$BlockUtil$IntBounds, number>;
        constructor();
    }
    export class $CrashReport {
        getException(): $Throwable;
        saveToFile(arg0: $Path_, arg1: $ReportType_): boolean;
        saveToFile(arg0: $Path_, arg1: $ReportType_, arg2: $List_<string>): boolean;
        getTitle(): string;
        handler$dmf000$yumi_mc_core$yumi$onCrashReportCreate(crashReportBuilder: $StringBuilder, ci: $CallbackInfo): void;
        static preload(): void;
        getExceptionMessage(): string;
        getDetails(arg0: $StringBuilder): void;
        getDetails(): string;
        getSystemReport(): $SystemReport;
        static forThrowable(arg0: $Throwable, arg1: string): $CrashReport;
        addCategory(arg0: string, arg1: number): $CrashReportCategory;
        addCategory(arg0: string): $CrashReportCategory;
        getFriendlyReport(arg0: $ReportType_): string;
        getFriendlyReport(arg0: $ReportType_, arg1: $List_<string>): string;
        getSaveFile(): $Path;
        constructor(arg0: string, arg1: $Throwable);
        get exception(): $Throwable;
        get title(): string;
        get exceptionMessage(): string;
        get systemReport(): $SystemReport;
        get saveFile(): $Path;
    }
    export class $ReportedException extends $RuntimeException {
        getReport(): $CrashReport;
        constructor(arg0: $CrashReport);
        get report(): $CrashReport;
    }
    export class $DetectedVersion implements $WorldVersion {
        getName(): string;
        getId(): string;
        isStable(): boolean;
        static tryDetectVersion(): $WorldVersion;
        getDataVersion(): $DataVersion;
        getProtocolVersion(): number;
        getPackVersion(arg0: $PackType_): number;
        getBuildTime(): $Date;
        static BUILT_IN: $WorldVersion;
        get name(): string;
        get id(): string;
        get stable(): boolean;
        get dataVersion(): $DataVersion;
        get protocolVersion(): number;
        get buildTime(): $Date;
    }
    export class $Optionull {
        static map<T, R>(arg0: T, arg1: $Function_<T, R>): R;
        static first<T>(arg0: $Collection_<T>): T;
        static isNullOrEmpty(arg0: number[]): boolean;
        static isNullOrEmpty(arg0: number[]): boolean;
        static isNullOrEmpty(arg0: string[]): boolean;
        static isNullOrEmpty(arg0: number[]): boolean;
        static isNullOrEmpty(arg0: number[]): boolean;
        static isNullOrEmpty(arg0: number[]): boolean;
        static isNullOrEmpty(arg0: number[]): boolean;
        static isNullOrEmpty(arg0: boolean[]): boolean;
        static isNullOrEmpty<T>(arg0: T[]): boolean;
        static mapOrElse<T, R>(arg0: T, arg1: $Function_<T, R>, arg2: $Supplier_<R>): R;
        static firstOrElse<T>(arg0: $Collection_<T>, arg1: $Supplier_<T>): T;
        static firstOrDefault<T>(arg0: $Collection_<T>, arg1: T): T;
        static mapOrDefault<T, R>(arg0: T, arg1: $Function_<T, R>, arg2: R): R;
        constructor();
    }
    export class $Util {
        static name<T>(arg0: $Supplier_<T>, arg1: $Supplier_<string>): $Supplier<T>;
        static name(arg0: $Runnable_, arg1: $Supplier_<string>): $Runnable;
        static prefix(arg0: string, arg1: $Consumer_<string>): $Consumer<string>;
        static make<T>(arg0: T, arg1: $Consumer_<T>): T;
        static make<T>(arg0: $Supplier_<T>): T;
        static toMap<K, V>(): $Collector<$Map$Entry<K, V>, never, $Map<K, V>>;
        static shuffle<T>(arg0: $List_<T>, arg1: $RandomSource): void;
        static sequence(futures: $List_<any>): $CompletableFuture<any>;
        static lastOf<T>(arg0: $List_<T>): T;
        static getMillis(): number;
        static allOf<T>(arg0: $List_<$Predicate_<T>>): $Predicate<T>;
        static getVmArguments(): $Stream<string>;
        static parseAndValidateUntrustedUri(arg0: string): $URI;
        static getPropertyName<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $Object): string;
        static getNanos(): number;
        static fixedSize(arg0: $IntStream, arg1: number): $DataResult<number[]>;
        static fixedSize(arg0: $LongStream, arg1: number): $DataResult<number[]>;
        static fixedSize<T>(arg0: $List_<T>, arg1: number): $DataResult<$List<T>>;
        static getPlatform(): $Util$OS;
        static memoize<T, U, R>(arg0: $BiFunction_<T, U, R>): $BiFunction<T, U, R>;
        static memoize<T, R>(arg0: $Function_<T, R>): $Function<T, R>;
        static ioPool(): $ExecutorService;
        static anyOf<T>(arg0: $List_<$Predicate_<T>>): $Predicate<T>;
        static readTypedOrThrow<T>(arg0: $Type<T>, arg1: $Dynamic<never>, arg2: boolean): $Typed<T>;
        static readTypedOrThrow<T>(arg0: $Type<T>, arg1: $Dynamic<never>): $Typed<T>;
        static startTimerHackThread(): void;
        static ifElse<T>(arg0: (T) | undefined, arg1: $Consumer_<T>, arg2: $Runnable_): (T) | undefined;
        static pauseInIde<T extends $Throwable>(arg0: T): T;
        static setPause(arg0: $Consumer_<string>): void;
        static copyAndAdd<T>(arg0: $List_<T>, arg1: T): $List<T>;
        static copyAndAdd<T>(arg0: T, arg1: $List_<T>): $List<T>;
        static copyAndPut<K, V>(arg0: $Map_<K, V>, arg1: K, arg2: V): $Map<K, V>;
        static writeAndReadTypedOrThrow<A, B>(arg0: $Typed<A>, arg1: $Type<B>, arg2: $UnaryOperator_<$Dynamic<never>>): $Typed<B>;
        static toMutableList<T>(): $Collector<T, never, $List<T>>;
        static makeDescriptionId(arg0: string, arg1: $ResourceLocation_): string;
        static getEpochMillis(): number;
        static backgroundExecutor(): $ExecutorService;
        static fetchChoiceType(arg0: $DSL$TypeReference_, arg1: string): $Type<never>;
        static makeExecutor(arg0: string): $ExecutorService;
        static isSymmetrical<T>(arg0: number, arg1: number, arg2: $List_<T>): boolean;
        static safeReplaceFile(arg0: $Path_, arg1: $Path_, arg2: $Path_): void;
        static blockUntilDone<T>(arg0: $Function_<$Executor, $CompletableFuture<T>>): $CompletableFuture<T>;
        static blockUntilDone<T>(arg0: $Function_<$Executor, T>, arg1: $Predicate_<T>): T;
        static copyBetweenDirs(arg0: $Path_, arg1: $Path_, arg2: $Path_): void;
        static getRandomSafe<T>(arg0: $List_<T>, arg1: $RandomSource): (T) | undefined;
        static findNextInIterable<T>(arg0: $Iterable_<T>, arg1: T): T;
        static sanitizeName(arg0: string, arg1: $CharPredicate_): string;
        static offsetByCodepoints(arg0: string, arg1: number, arg2: number): number;
        static sequenceFailFast(futures: $List_<any>): $CompletableFuture<any>;
        static getRegisteredName<T>(arg0: $Registry<T>, arg1: T): string;
        static logAndPauseIfInIde(arg0: string, arg1: $Throwable): void;
        static logAndPauseIfInIde(arg0: string): void;
        static describeError(arg0: $Throwable): string;
        static singleKeyCache<K, V>(arg0: $Function_<K, V>): $SingleKeyCache<K, V>;
        static toShuffledList<T>(arg0: $Stream<T>, arg1: $RandomSource): $List<T>;
        static toShuffledList(arg0: $IntStream, arg1: $RandomSource): $IntArrayList;
        static shuffledCopy<T>(arg0: $ObjectArrayList<T>, arg1: $RandomSource): $List<T>;
        static shuffledCopy<T>(arg0: T[], arg1: $RandomSource): $List<T>;
        static createIndexLookup<T>(arg0: $List_<T>): $ToIntFunction<T>;
        static getRandom<T>(arg0: $List_<T>, arg1: $RandomSource): T;
        static getRandom(arg0: number[], arg1: $RandomSource): number;
        static getRandom<T>(arg0: T[], arg1: $RandomSource): T;
        static nonCriticalIoPool(): $ExecutorService;
        static throwAsRuntime(arg0: $Throwable): void;
        static shutdownExecutors(): void;
        static getFilenameFormattedDateTime(): string;
        static safeReplaceOrMoveFile(arg0: $Path_, arg1: $Path_, arg2: $Path_, arg3: boolean): boolean;
        static findPreviousInIterable<T>(arg0: $Iterable_<T>, arg1: T): T;
        static createIndexIdentityLookup<T>(arg0: $List_<T>): $ToIntFunction<T>;
        static sequenceFailFastAndCancel(futures: $List_<any>): $CompletableFuture<any>;
        static wrapThreadWithTaskName<V>(arg0: string, arg1: $Supplier_<V>): $Supplier<V>;
        static wrapThreadWithTaskName(arg0: string, arg1: $Runnable_): $Runnable;
        static ZIP_FILE_SYSTEM_PROVIDER: $FileSystemProvider;
        static TICKER: $Ticker;
        static LINEAR_LOOKUP_THRESHOLD: number;
        static NANOS_PER_MILLI: number;
        static LOGGER: $Logger;
        static timeSource: $TimeSource$NanoTimeSource;
        static NIL_UUID: $UUID;
        constructor();
        static get millis(): number;
        static get vmArguments(): $Stream<string>;
        static get nanos(): number;
        static get platform(): $Util$OS;
        static set pause(value: $Consumer_<string>);
        static get epochMillis(): number;
        static get filenameFormattedDateTime(): string;
    }
}
