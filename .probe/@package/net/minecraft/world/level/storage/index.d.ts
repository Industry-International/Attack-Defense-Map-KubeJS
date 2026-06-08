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
        corruptedDataFile(arg0: $LocalDateTime): $Path;
        lockFile(): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
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
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        isFlatWorld(): boolean;
        isHardcore(): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        enabledFeatures(): $FeatureFlagSet;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDifficultyLocked(arg0: boolean): void;
        getStorageVersionName(arg0: number): string;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        wasModded(): boolean;
        setModdedInfo(arg0: string, arg1: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        isAllowCommands(): boolean;
        getLevelSettings(): $LevelSettings;
        overworldData(): $ServerLevelData;
        isDebugWorld(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        get version(): number;
        get levelName(): string;
        get flatWorld(): boolean;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
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
        isInitialized(): boolean;
        setInitialized(arg0: boolean): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        setGameType(arg0: $GameType_): void;
        setRainTime(arg0: number): void;
        getThunderTime(): number;
        getRainTime(): number;
        isHardcore(): boolean;
        isRaining(): boolean;
        getDayTime(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        getGameTime(): number;
        setGameTime(arg0: number): void;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        getWorldBorder(): $WorldBorder$Settings;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        getSpawnPos(): $BlockPos;
        isThundering(): boolean;
        getSpawnAngle(): number;
        setRaining(arg0: boolean): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        isAllowCommands(): boolean;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderId(): $UUID;
        constructor(arg0: $WorldData, arg1: $ServerLevelData);
        get levelName(): string;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
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
        isHardcore(): boolean;
        isRaining(): boolean;
        getDayTime(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        getSpawnPos(): $BlockPos;
        isThundering(): boolean;
        getSpawnAngle(): number;
        setRaining(arg0: boolean): void;
        get difficultyLocked(): boolean;
        get hardcore(): boolean;
        get dayTime(): number;
        get gameTime(): number;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get thundering(): boolean;
        get spawnAngle(): number;
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
        isSevere(): boolean;
        shouldBackup(): boolean;
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
        getDimensionPath(arg0: $ResourceKey_<$Level>): $Path;
        getLevelId(): string;
        getSummary(arg0: $Dynamic<never>): $LevelSummary;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData, arg2: $CompoundTag_): void;
        getFileModificationTime(arg0: boolean): $Instant;
        deleteLevel(): void;
        hasWorldData(): boolean;
        createPlayerStorage(): $PlayerDataStorage;
        readAdditionalLevelSaveData(arg0: boolean): void;
        estimateDiskSpace(): number;
        getDataTagFallback(): $Dynamic<never>;
        makeWorldBackup(): number;
        getWorldDir(): $Path;
        renameLevel(arg0: string): void;
        handler$dkg000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$ecb001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        getDataTag(): $Dynamic<never>;
        checkForLowDiskSpace(): boolean;
        renameAndDropPlayer(arg0: string): void;
        restoreLevelDataFromOld(): boolean;
        getIconFile(): ($Path) | undefined;
        getLevelPath(arg0: $LevelResource): $Path;
        safeClose(): void;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(arg0: $LevelStorageSource, arg1: string, arg2: $Path_);
        get levelId(): string;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTag(): $Dynamic<never>;
        get iconFile(): ($Path) | undefined;
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
        isInitialized(): boolean;
        setInitialized(arg0: boolean): void;
        getGameType(): $GameType;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        setGameType(arg0: $GameType_): void;
        setRainTime(arg0: number): void;
        getThunderTime(): number;
        getRainTime(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        setGameTime(arg0: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        getClearWeatherTime(): number;
        setClearWeatherTime(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        setDayTime(arg0: number): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        isAllowCommands(): boolean;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderId(): $UUID;
        get levelName(): string;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set gameTime(value: number);
        set dayTime(value: number);
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(arg0: $Dynamic<never>): $LevelVersion;
        minecraftVersionName(): string;
        lastPlayed(): number;
        minecraftVersion(): $DataVersion;
        levelDataVersion(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        static parseValidator(arg0: $Path_): $DirectoryValidator;
        static createDefault(arg0: $Path_): $LevelStorageSource;
        validateAndCreateAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        static getLevelDataAndDimensions(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_, arg2: $Registry<$LevelStem_>, arg3: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        static getFileModificationTime(arg0: $Path_): $Instant;
        static readLevelDataTagFixed(arg0: $Path_, arg1: $DataFixer): $Dynamic<never>;
        static readLevelDataTagRaw(arg0: $Path_): $CompoundTag;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        isNewLevelIdAcceptable(arg0: string): boolean;
        getBaseDir(): $Path;
        createAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        static getPackConfig(arg0: $Dynamic<never>, arg1: $PackRepository, arg2: boolean): $WorldLoader$PackConfig;
        makeLevelSummary(arg0: $Dynamic<never>, arg1: $LevelStorageSource$LevelDirectory_, arg2: boolean): $LevelSummary;
        static readDataConfig(arg0: $Dynamic<never>): $WorldDataConfiguration;
        loadLevelSummaries(arg0: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        getBackupPath(): $Path;
        levelExists(arg0: string): boolean;
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
        isInitialized(): boolean;
        setInitialized(arg0: boolean): void;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        setRainTime(arg0: number): void;
        endDragonFightData(): $EndDragonFight$Data;
        getThunderTime(): number;
        getRainTime(): number;
        isFlatWorld(): boolean;
        isHardcore(): boolean;
        isRaining(): boolean;
        getDayTime(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        getGameTime(): number;
        setGameTime(arg0: number): void;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        getWorldBorder(): $WorldBorder$Settings;
        getClearWeatherTime(): number;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        setClearWeatherTime(arg0: number): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDifficultyLocked(arg0: boolean): void;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        wasModded(): boolean;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        getSpawnPos(): $BlockPos;
        isThundering(): boolean;
        getSpawnAngle(): number;
        setRaining(arg0: boolean): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        setEndDragonFight(arg0: $EndDragonFight$Data_): void;
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        setModdedInfo(arg0: string, arg1: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        isAllowCommands(): boolean;
        getLevelSettings(): $LevelSettings;
        overworldData(): $ServerLevelData;
        isDebugWorld(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        getPreset(): $ResourceLocation;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setPreset(arg0: $ResourceLocation_): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderId(): $UUID;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        enabledFeatures(): $FeatureFlagSet;
        getStorageVersionName(arg0: number): string;
        static PLAYER: string;
        settings: $LevelSettings;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        worldOptions: $WorldOptions;
        constructor(arg0: $LevelSettings, arg1: $WorldOptions, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        set endDragonFight(value: $EndDragonFight$Data_);
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(arg0: $LevelSummary): number;
        isLocked(): boolean;
        getLevelName(): string;
        getInfo(): $Component;
        isDisabled(): boolean;
        getIcon(): $Path;
        isCompatible(): boolean;
        getSettings(): $LevelSettings;
        canDelete(): boolean;
        isHardcore(): boolean;
        getLevelId(): string;
        getGameMode(): $GameType;
        primaryActionActive(): boolean;
        getWorldVersionName(): $MutableComponent;
        primaryActionMessage(): $Component;
        requiresManualConversion(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        isExperimental(): boolean;
        isDowngrade(): boolean;
        levelVersion(): $LevelVersion;
        hasCommands(): boolean;
        getLastPlayed(): number;
        shouldBackup(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        canRecreate(): boolean;
        static PLAY_WORLD: $Component;
        constructor(arg0: $LevelSettings, arg1: $LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get disabled(): boolean;
        get icon(): $Path;
        get compatible(): boolean;
        get settings(): $LevelSettings;
        get hardcore(): boolean;
        get levelId(): string;
        get gameMode(): $GameType;
        get worldVersionName(): $MutableComponent;
        get experimental(): boolean;
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
