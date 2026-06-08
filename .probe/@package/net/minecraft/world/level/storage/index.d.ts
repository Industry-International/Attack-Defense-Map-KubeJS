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
        iconFile(): $Path;
        dataFile(): $Path;
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
        getDataConfiguration(): $WorldDataConfiguration;
        getStorageVersionName(arg0: number): string;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        setDifficultyLocked(arg0: boolean): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        wasModded(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        overworldData(): $ServerLevelData;
        getLoadedPlayerTag(): $CompoundTag;
        isAllowCommands(): boolean;
        setModdedInfo(arg0: string, arg1: boolean): void;
        isDebugWorld(): boolean;
        getLevelSettings(): $LevelSettings;
        enabledFeatures(): $FeatureFlagSet;
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        isFlatWorld(): boolean;
        get version(): number;
        get levelName(): string;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get flatWorld(): boolean;
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
        isCompatible(arg0: $DataVersion): boolean;
        isSideSeries(): boolean;
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
        setInitialized(arg0: boolean): void;
        isRaining(): boolean;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        isThundering(): boolean;
        getSpawnAngle(): number;
        setDayTimeFraction(arg0: number): void;
        getSpawnPos(): $BlockPos;
        setGameTime(arg0: number): void;
        isInitialized(): boolean;
        isAllowCommands(): boolean;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getWorldBorder(): $WorldBorder$Settings;
        isHardcore(): boolean;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        getDayTime(): number;
        setRaining(arg0: boolean): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        getThunderTime(): number;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        constructor(arg0: $WorldData, arg1: $ServerLevelData);
        get levelName(): string;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get allowCommands(): boolean;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
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
        isRaining(): boolean;
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        isHardcore(): boolean;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTime(): number;
        setRaining(arg0: boolean): void;
        isDifficultyLocked(): boolean;
        get thundering(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get hardcore(): boolean;
        get gameTime(): number;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get dayTime(): number;
        get difficultyLocked(): boolean;
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
        shouldBackup(): boolean;
        isSevere(): boolean;
        getTranslationKey(): string;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get severe(): boolean;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        renameAndDropPlayer(arg0: string): void;
        checkForLowDiskSpace(): boolean;
        restoreLevelDataFromOld(): boolean;
        getFileModificationTime(arg0: boolean): $Instant;
        createPlayerStorage(): $PlayerDataStorage;
        hasWorldData(): boolean;
        deleteLevel(): void;
        getIconFile(): ($Path) | undefined;
        safeClose(): void;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        makeWorldBackup(): number;
        estimateDiskSpace(): number;
        renameLevel(arg0: string): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData, arg2: $CompoundTag_): void;
        getLevelId(): string;
        handler$ecb001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$dkg000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        getSummary(arg0: $Dynamic<never>): $LevelSummary;
        getDimensionPath(arg0: $ResourceKey_<$Level>): $Path;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getDataTag(): $Dynamic<never>;
        getLevelPath(arg0: $LevelResource): $Path;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(arg0: $LevelStorageSource, arg1: string, arg2: $Path_);
        get iconFile(): ($Path) | undefined;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get levelId(): string;
        get dataTag(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        getPlayerDir(): $File;
        load(arg0: $Player): ($CompoundTag) | undefined;
        save(arg0: $Player): void;
        fixerUpper: $DataFixer;
        constructor(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        getLevelName(): string;
        setInitialized(arg0: boolean): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        setGameTime(arg0: number): void;
        isInitialized(): boolean;
        isAllowCommands(): boolean;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        setDayTime(arg0: number): void;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        getGameType(): $GameType;
        setGameType(arg0: $GameType_): void;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        getThunderTime(): number;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        get levelName(): string;
        set gameTime(value: number);
        get allowCommands(): boolean;
        set dayTime(value: number);
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(arg0: $Dynamic<never>): $LevelVersion;
        minecraftVersionName(): string;
        minecraftVersion(): $DataVersion;
        levelDataVersion(): number;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        static getLevelDataAndDimensions(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_, arg2: $Registry<$LevelStem_>, arg3: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        static getFileModificationTime(arg0: $Path_): $Instant;
        isNewLevelIdAcceptable(arg0: string): boolean;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static readLevelDataTagFixed(arg0: $Path_, arg1: $DataFixer): $Dynamic<never>;
        validateAndCreateAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        static readLevelDataTagRaw(arg0: $Path_): $CompoundTag;
        getBaseDir(): $Path;
        createAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        static getPackConfig(arg0: $Dynamic<never>, arg1: $PackRepository, arg2: boolean): $WorldLoader$PackConfig;
        loadLevelSummaries(arg0: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        levelExists(arg0: string): boolean;
        getBackupPath(): $Path;
        makeLevelSummary(arg0: $Dynamic<never>, arg1: $LevelStorageSource$LevelDirectory_, arg2: boolean): $LevelSummary;
        static readDataConfig(arg0: $Dynamic<never>): $WorldDataConfiguration;
        static createDefault(arg0: $Path_): $LevelStorageSource;
        static parseValidator(arg0: $Path_): $DirectoryValidator;
        getLevelPath(arg0: string): $Path;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(arg0: $Path_, arg1: $Path_, arg2: $DirectoryValidator, arg3: $DataFixer);
        get name(): string;
        get worldDirValidator(): $DirectoryValidator;
        get baseDir(): $Path;
        get backupPath(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        static parse<T>(arg0: $Dynamic<T>, arg1: $LevelSettings, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $WorldOptions, arg4: $Lifecycle): $PrimaryLevelData;
        getVersion(): number;
        getLevelName(): string;
        setInitialized(arg0: boolean): void;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        isRaining(): boolean;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        isThundering(): boolean;
        getSpawnAngle(): number;
        setDayTimeFraction(arg0: number): void;
        getSpawnPos(): $BlockPos;
        setGameTime(arg0: number): void;
        isInitialized(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        setDifficultyLocked(arg0: boolean): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        wasModded(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        overworldData(): $ServerLevelData;
        getLoadedPlayerTag(): $CompoundTag;
        isAllowCommands(): boolean;
        setModdedInfo(arg0: string, arg1: boolean): void;
        isDebugWorld(): boolean;
        getLevelSettings(): $LevelSettings;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getPreset(): $ResourceLocation;
        getWorldBorder(): $WorldBorder$Settings;
        isHardcore(): boolean;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        getDayTime(): number;
        setPreset(arg0: $ResourceLocation_): void;
        setRaining(arg0: boolean): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        worldGenOptions(): $WorldOptions;
        getThunderTime(): number;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        endDragonFightData(): $EndDragonFight$Data;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        isFlatWorld(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setEndDragonFight(arg0: $EndDragonFight$Data_): void;
        hasConfirmedExperimentalWarning(): boolean;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        getStorageVersionName(arg0: number): string;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        static PLAYER: string;
        settings: $LevelSettings;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        worldOptions: $WorldOptions;
        constructor(arg0: $LevelSettings, arg1: $WorldOptions, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(arg0: $LevelSummary): number;
        isLocked(): boolean;
        getLevelName(): string;
        getInfo(): $Component;
        getSettings(): $LevelSettings;
        isCompatible(): boolean;
        isDisabled(): boolean;
        canDelete(): boolean;
        requiresManualConversion(): boolean;
        primaryActionActive(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        getIcon(): $Path;
        isExperimental(): boolean;
        shouldBackup(): boolean;
        isDowngrade(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        getLastPlayed(): number;
        canRecreate(): boolean;
        levelVersion(): $LevelVersion;
        hasCommands(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        getLevelId(): string;
        isHardcore(): boolean;
        getGameMode(): $GameType;
        static PLAY_WORLD: $Component;
        constructor(arg0: $LevelSettings, arg1: $LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get settings(): $LevelSettings;
        get compatible(): boolean;
        get disabled(): boolean;
        get worldVersionName(): $MutableComponent;
        get icon(): $Path;
        get experimental(): boolean;
        get downgrade(): boolean;
        get lastPlayed(): number;
        get levelId(): string;
        get hardcore(): boolean;
        get gameMode(): $GameType;
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
