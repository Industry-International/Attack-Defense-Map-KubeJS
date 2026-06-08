import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataStorageAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(arg0: $ResourceLocation_): $CompoundTag;
        set(arg0: $ResourceLocation_, arg1: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(arg0: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(arg0: $LevelResource): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        oldDataFile(): $Path;
        directoryName(): string;
        corruptedDataFile(arg0: $LocalDateTime): $Path;
        lockFile(): $Path;
        rawDataFile(arg0: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        getLevelName(): string;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        isFlatWorld(): boolean;
        endDragonFightData(): $EndDragonFight$Data;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isHardcore(): boolean;
        wasModded(): boolean;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getRemovedFeatureFlags(): $Set<string>;
        getStorageVersionName(arg0: number): string;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        getDataConfiguration(): $WorldDataConfiguration;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDifficultyLocked(arg0: boolean): void;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        enabledFeatures(): $FeatureFlagSet;
        isDebugWorld(): boolean;
        isAllowCommands(): boolean;
        setModdedInfo(arg0: string, arg1: boolean): void;
        overworldData(): $ServerLevelData;
        setDifficulty(arg0: $Difficulty_): void;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        get version(): number;
        get levelName(): string;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_, arg2: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isSideSeries(): boolean;
        isCompatible(arg0: $DataVersion): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(arg0: number);
        constructor(arg0: number, arg1: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        getLevelName(): string;
        setGameType(arg0: $GameType_): void;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        setThundering(arg0: boolean): void;
        setThunderTime(arg0: number): void;
        getThunderTime(): number;
        setDayTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getDayTimeFraction(): number;
        getDayTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isHardcore(): boolean;
        isRaining(): boolean;
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getGameTime(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        isAllowCommands(): boolean;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        constructor(arg0: $WorldData, arg1: $ServerLevelData);
        get levelName(): string;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get allowCommands(): boolean;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(arg0: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(arg0: $BlockPos_, arg1: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        isDifficultyLocked(): boolean;
        setRaining(arg0: boolean): void;
        getDayTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isHardcore(): boolean;
        isRaining(): boolean;
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getGameTime(): number;
        get difficultyLocked(): boolean;
        get dayTime(): number;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get thundering(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get gameTime(): number;
    }
    export class $DimensionDataStorage implements $DataStorageAccess {
        get<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        set(arg0: string, arg1: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        save(): void;
        readTagFromDisk(arg0: string, arg1: $DataFixTypes_, arg2: number): $CompoundTag;
        getCache(): $Map<string, $SavedData>;
        invokeGetDataFile(arg0: string): $File;
        dataFolder: $File;
        constructor(arg0: $File_, arg1: $DataFixer, arg2: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        getTranslationKey(): string;
        shouldBackup(): boolean;
        isSevere(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        createPlayerStorage(): $PlayerDataStorage;
        getDimensionPath(arg0: $ResourceKey_<$Level>): $Path;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getIconFile(): ($Path) | undefined;
        getSummary(arg0: $Dynamic<never>): $LevelSummary;
        readAdditionalLevelSaveData(arg0: boolean): void;
        hasWorldData(): boolean;
        deleteLevel(): void;
        getFileModificationTime(arg0: boolean): $Instant;
        getLevelPath(arg0: $LevelResource): $Path;
        getLevelId(): string;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData, arg2: $CompoundTag_): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData): void;
        safeClose(): void;
        handler$ecb001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$dkh000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        estimateDiskSpace(): number;
        renameLevel(arg0: string): void;
        makeWorldBackup(): number;
        getDataTag(): $Dynamic<never>;
        checkForLowDiskSpace(): boolean;
        renameAndDropPlayer(arg0: string): void;
        restoreLevelDataFromOld(): boolean;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(arg0: $LevelStorageSource, arg1: string, arg2: $Path_);
        get iconFile(): ($Path) | undefined;
        get levelId(): string;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTag(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        load(arg0: $Player): ($CompoundTag) | undefined;
        save(arg0: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        getLevelName(): string;
        setGameType(arg0: $GameType_): void;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        getGameType(): $GameType;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        setThundering(arg0: boolean): void;
        setThunderTime(arg0: number): void;
        getThunderTime(): number;
        setDayTime(arg0: number): void;
        getDayTimeFraction(): number;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        isAllowCommands(): boolean;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        get levelName(): string;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set dayTime(value: number);
        set gameTime(value: number);
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(arg0: $Dynamic<never>): $LevelVersion;
        lastPlayed(): number;
        minecraftVersionName(): string;
        levelDataVersion(): number;
        minecraftVersion(): $DataVersion;
    }
    export class $LevelStorageSource {
        getName(): string;
        static createDefault(arg0: $Path_): $LevelStorageSource;
        static parseValidator(arg0: $Path_): $DirectoryValidator;
        createAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        getBaseDir(): $Path;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static readLevelDataTagFixed(arg0: $Path_, arg1: $DataFixer): $Dynamic<never>;
        static readLevelDataTagRaw(arg0: $Path_): $CompoundTag;
        getWorldDirValidator(): $DirectoryValidator;
        static getFileModificationTime(arg0: $Path_): $Instant;
        static getLevelDataAndDimensions(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_, arg2: $Registry<$LevelStem_>, arg3: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        isNewLevelIdAcceptable(arg0: string): boolean;
        validateAndCreateAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        getLevelPath(arg0: string): $Path;
        static getPackConfig(arg0: $Dynamic<never>, arg1: $PackRepository, arg2: boolean): $WorldLoader$PackConfig;
        static readDataConfig(arg0: $Dynamic<never>): $WorldDataConfiguration;
        loadLevelSummaries(arg0: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        makeLevelSummary(arg0: $Dynamic<never>, arg1: $LevelStorageSource$LevelDirectory_, arg2: boolean): $LevelSummary;
        levelExists(arg0: string): boolean;
        getBackupPath(): $Path;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(arg0: $Path_, arg1: $Path_, arg2: $DirectoryValidator, arg3: $DataFixer);
        get name(): string;
        get baseDir(): $Path;
        get worldDirValidator(): $DirectoryValidator;
        get backupPath(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        static parse<T>(arg0: $Dynamic<T>, arg1: $LevelSettings, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $WorldOptions, arg4: $Lifecycle): $PrimaryLevelData;
        getVersion(): number;
        getLevelName(): string;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        setPreset(arg0: $ResourceLocation_): void;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        isFlatWorld(): boolean;
        endDragonFightData(): $EndDragonFight$Data;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        setThundering(arg0: boolean): void;
        setThunderTime(arg0: number): void;
        getThunderTime(): number;
        setDayTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getDayTimeFraction(): number;
        getDayTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isHardcore(): boolean;
        isRaining(): boolean;
        wasModded(): boolean;
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        getDataConfiguration(): $WorldDataConfiguration;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDifficultyLocked(arg0: boolean): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getGameTime(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        isDebugWorld(): boolean;
        isAllowCommands(): boolean;
        setModdedInfo(arg0: string, arg1: boolean): void;
        overworldData(): $ServerLevelData;
        setDifficulty(arg0: $Difficulty_): void;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        getPreset(): $ResourceLocation;
        setEndDragonFight(arg0: $EndDragonFight$Data_): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        hasConfirmedExperimentalWarning(): boolean;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        getStorageVersionName(arg0: number): string;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        enabledFeatures(): $FeatureFlagSet;
        static PLAYER: string;
        settings: $LevelSettings;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        worldOptions: $WorldOptions;
        constructor(arg0: $LevelSettings, arg1: $WorldOptions, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get flatWorld(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(arg0: $LevelSummary): number;
        isLocked(): boolean;
        getLevelName(): string;
        getInfo(): $Component;
        getSettings(): $LevelSettings;
        canDelete(): boolean;
        getGameMode(): $GameType;
        isHardcore(): boolean;
        isDisabled(): boolean;
        getIcon(): $Path;
        canUpload(): boolean;
        canEdit(): boolean;
        getWorldVersionName(): $MutableComponent;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        requiresManualConversion(): boolean;
        isExperimental(): boolean;
        isCompatible(): boolean;
        getLevelId(): string;
        canRecreate(): boolean;
        isDowngrade(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        hasCommands(): boolean;
        shouldBackup(): boolean;
        levelVersion(): $LevelVersion;
        getLastPlayed(): number;
        static PLAY_WORLD: $Component;
        constructor(arg0: $LevelSettings, arg1: $LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get settings(): $LevelSettings;
        get gameMode(): $GameType;
        get hardcore(): boolean;
        get disabled(): boolean;
        get icon(): $Path;
        get worldVersionName(): $MutableComponent;
        get experimental(): boolean;
        get compatible(): boolean;
        get levelId(): string;
        get downgrade(): boolean;
        get lastPlayed(): number;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(arg0: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
}
