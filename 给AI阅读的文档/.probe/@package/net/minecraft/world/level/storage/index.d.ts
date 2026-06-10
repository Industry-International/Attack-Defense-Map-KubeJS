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
        directoryName(): string;
        oldDataFile(): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        corruptedDataFile(arg0: $LocalDateTime): $Path;
        rawDataFile(arg0: $LocalDateTime): $Path;
        lockFile(): $Path;
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
        isDifficultyLocked(): boolean;
        getGameType(): $GameType;
        getDataConfiguration(): $WorldDataConfiguration;
        setDifficultyLocked(arg0: boolean): void;
        getKnownServerBrands(): $Set<string>;
        getStorageVersionName(arg0: number): string;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        enabledFeatures(): $FeatureFlagSet;
        getGameRules(): $GameRules;
        getDifficulty(): $Difficulty;
        isHardcore(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        getLoadedPlayerTag(): $CompoundTag;
        isAllowCommands(): boolean;
        setModdedInfo(arg0: string, arg1: boolean): void;
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        setGameType(arg0: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        isFlatWorld(): boolean;
        wasModded(): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        get version(): number;
        get levelName(): string;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
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
        setInitialized(arg0: boolean): void;
        isDifficultyLocked(): boolean;
        getGameType(): $GameType;
        isInitialized(): boolean;
        getWanderingTraderId(): $UUID;
        isRaining(): boolean;
        setGameTime(arg0: number): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        setClearWeatherTime(arg0: number): void;
        getClearWeatherTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        getDayTimeFraction(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        getDayTimePerTick(): number;
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getGameRules(): $GameRules;
        getDifficulty(): $Difficulty;
        isHardcore(): boolean;
        isAllowCommands(): boolean;
        setGameType(arg0: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(arg0: number): void;
        getThunderTime(): number;
        setThundering(arg0: boolean): void;
        getRainTime(): number;
        setRainTime(arg0: number): void;
        getGameTime(): number;
        getDayTime(): number;
        setDayTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnChance(): number;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderSpawnDelay(arg0: number): void;
        constructor(arg0: $WorldData, arg1: $ServerLevelData);
        get levelName(): string;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get gameRules(): $GameRules;
        get difficulty(): $Difficulty;
        get hardcore(): boolean;
        get allowCommands(): boolean;
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
        isDifficultyLocked(): boolean;
        isRaining(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        isThundering(): boolean;
        getGameRules(): $GameRules;
        getDifficulty(): $Difficulty;
        isHardcore(): boolean;
        getGameTime(): number;
        getDayTime(): number;
        setRaining(arg0: boolean): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
        get gameRules(): $GameRules;
        get difficulty(): $Difficulty;
        get hardcore(): boolean;
        get gameTime(): number;
        get dayTime(): number;
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
        handler$ecb001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$dkg000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getIconFile(): ($Path) | undefined;
        getFileModificationTime(arg0: boolean): $Instant;
        createPlayerStorage(): $PlayerDataStorage;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData, arg2: $CompoundTag_): void;
        getLevelId(): string;
        getLevelPath(arg0: $LevelResource): $Path;
        getDimensionPath(arg0: $ResourceKey_<$Level>): $Path;
        hasWorldData(): boolean;
        deleteLevel(): void;
        getSummary(arg0: $Dynamic<never>): $LevelSummary;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        checkForLowDiskSpace(): boolean;
        restoreLevelDataFromOld(): boolean;
        renameAndDropPlayer(arg0: string): void;
        safeClose(): void;
        estimateDiskSpace(): number;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        makeWorldBackup(): number;
        renameLevel(arg0: string): void;
        getDataTag(): $Dynamic<never>;
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
        setInitialized(arg0: boolean): void;
        getGameType(): $GameType;
        isInitialized(): boolean;
        getWanderingTraderId(): $UUID;
        setGameTime(arg0: number): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        setClearWeatherTime(arg0: number): void;
        getClearWeatherTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        getDayTimeFraction(): number;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        isAllowCommands(): boolean;
        setGameType(arg0: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(arg0: number): void;
        getThunderTime(): number;
        setThundering(arg0: boolean): void;
        getRainTime(): number;
        setRainTime(arg0: number): void;
        setDayTime(arg0: number): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnChance(): number;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderSpawnDelay(arg0: number): void;
        get levelName(): string;
        set gameTime(value: number);
        get allowCommands(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set dayTime(value: number);
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(arg0: $Dynamic<never>): $LevelVersion;
        minecraftVersionName(): string;
        levelDataVersion(): number;
        minecraftVersion(): $DataVersion;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        isNewLevelIdAcceptable(arg0: string): boolean;
        static getFileModificationTime(arg0: $Path_): $Instant;
        static readLevelDataTagRaw(arg0: $Path_): $CompoundTag;
        getWorldDirValidator(): $DirectoryValidator;
        validateAndCreateAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static getLevelDataAndDimensions(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_, arg2: $Registry<$LevelStem_>, arg3: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        static readLevelDataTagFixed(arg0: $Path_, arg1: $DataFixer): $Dynamic<never>;
        static parseValidator(arg0: $Path_): $DirectoryValidator;
        static createDefault(arg0: $Path_): $LevelStorageSource;
        static readDataConfig(arg0: $Dynamic<never>): $WorldDataConfiguration;
        loadLevelSummaries(arg0: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        static getPackConfig(arg0: $Dynamic<never>, arg1: $PackRepository, arg2: boolean): $WorldLoader$PackConfig;
        makeLevelSummary(arg0: $Dynamic<never>, arg1: $LevelStorageSource$LevelDirectory_, arg2: boolean): $LevelSummary;
        getBackupPath(): $Path;
        levelExists(arg0: string): boolean;
        getLevelPath(arg0: string): $Path;
        getBaseDir(): $Path;
        createAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(arg0: $Path_, arg1: $Path_, arg2: $DirectoryValidator, arg3: $DataFixer);
        get name(): string;
        get worldDirValidator(): $DirectoryValidator;
        get backupPath(): $Path;
        get baseDir(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        static parse<T>(arg0: $Dynamic<T>, arg1: $LevelSettings, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $WorldOptions, arg4: $Lifecycle): $PrimaryLevelData;
        getVersion(): number;
        getLevelName(): string;
        setInitialized(arg0: boolean): void;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        isDifficultyLocked(): boolean;
        getGameType(): $GameType;
        isInitialized(): boolean;
        getWanderingTraderId(): $UUID;
        isRaining(): boolean;
        setGameTime(arg0: number): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDifficultyLocked(arg0: boolean): void;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        setEndDragonFight(arg0: $EndDragonFight$Data_): void;
        setClearWeatherTime(arg0: number): void;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getClearWeatherTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        getDayTimeFraction(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        getDayTimePerTick(): number;
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getGameRules(): $GameRules;
        getDifficulty(): $Difficulty;
        isHardcore(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        getLoadedPlayerTag(): $CompoundTag;
        isAllowCommands(): boolean;
        setModdedInfo(arg0: string, arg1: boolean): void;
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        setGameType(arg0: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(arg0: number): void;
        getThunderTime(): number;
        setThundering(arg0: boolean): void;
        getRainTime(): number;
        setRainTime(arg0: number): void;
        isFlatWorld(): boolean;
        wasModded(): boolean;
        setPreset(arg0: $ResourceLocation_): void;
        getGameTime(): number;
        getDayTime(): number;
        setDayTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        getPreset(): $ResourceLocation;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnChance(): number;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderSpawnDelay(arg0: number): void;
        hasConfirmedExperimentalWarning(): boolean;
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
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        set endDragonFight(value: $EndDragonFight$Data_);
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(arg0: $LevelSummary): number;
        isLocked(): boolean;
        getLevelName(): string;
        getInfo(): $Component;
        getSettings(): $LevelSettings;
        isCompatible(): boolean;
        getIcon(): $Path;
        canDelete(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        requiresManualConversion(): boolean;
        primaryActionActive(): boolean;
        isExperimental(): boolean;
        isHardcore(): boolean;
        getLevelId(): string;
        hasCommands(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        canRecreate(): boolean;
        getLastPlayed(): number;
        isDowngrade(): boolean;
        shouldBackup(): boolean;
        levelVersion(): $LevelVersion;
        canUpload(): boolean;
        canEdit(): boolean;
        isDisabled(): boolean;
        getGameMode(): $GameType;
        static PLAY_WORLD: $Component;
        constructor(arg0: $LevelSettings, arg1: $LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get settings(): $LevelSettings;
        get compatible(): boolean;
        get icon(): $Path;
        get worldVersionName(): $MutableComponent;
        get experimental(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
        get lastPlayed(): number;
        get downgrade(): boolean;
        get disabled(): boolean;
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
