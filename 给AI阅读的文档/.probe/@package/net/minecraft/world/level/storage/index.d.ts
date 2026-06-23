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
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        lockFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
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
        /**
         * Get current world name
         */
        getLevelName(): string;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        getRemovedFeatureFlags(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        setDifficultyLocked(locked: boolean): void;
        getKnownServerBrands(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getDataConfiguration(): $WorldDataConfiguration;
        getStorageVersionName(storageVersionId: number): string;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        get version(): number;
        get levelName(): string;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get hardcore(): boolean;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        getSeries(): string;
        isSideSeries(): boolean;
        isCompatible(dataVersion: $DataVersion): boolean;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get series(): string;
        get sideSeries(): boolean;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getGameTime(): number;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        getDayTimeFraction(): number;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getSpawnPos(): $BlockPos;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getDayTimePerTick(): number;
        getSpawnAngle(): number;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get allowCommands(): boolean;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        get dayTime(): number;
        get difficultyLocked(): boolean;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get gameTime(): number;
        get spawnPos(): $BlockPos;
        get thundering(): boolean;
        get spawnAngle(): number;
    }
    export class $DimensionDataStorage implements $DataStorageAccess {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        getCache(): $Map<string, $SavedData>;
        invokeGetDataFile(name: string): $File;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        getTranslationKey(): string;
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
        getFileModificationTime(useFallback: boolean): $Instant;
        hasWorldData(): boolean;
        deleteLevel(): void;
        getLevelPath(folderName: $LevelResource): $Path;
        safeClose(): void;
        getIconFile(): ($Path) | undefined;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        getLevelId(): string;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        renameAndDropPlayer(saveName: string): void;
        restoreLevelDataFromOld(): boolean;
        checkForLowDiskSpace(): boolean;
        createPlayerStorage(): $PlayerDataStorage;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getDataTag(): $Dynamic<never>;
        getDataTagFallback(): $Dynamic<never>;
        renameLevel(saveName: string): void;
        getWorldDir(): $Path;
        makeWorldBackup(): number;
        estimateDiskSpace(): number;
        handler$dnc001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$dfk000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get iconFile(): ($Path) | undefined;
        get levelId(): string;
        get dataTag(): $Dynamic<never>;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        getDayTimeFraction(): number;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        get levelName(): string;
        set dayTime(value: number);
        set gameTime(value: number);
        get allowCommands(): boolean;
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersionName(): string;
        levelDataVersion(): number;
        minecraftVersion(): $DataVersion;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        isNewLevelIdAcceptable(saveName: string): boolean;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        levelExists(saveName: string): boolean;
        getLevelPath(saveName: string): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get worldDirValidator(): $DirectoryValidator;
        get backupPath(): $Path;
        get baseDir(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        setRaining(locked: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        getRemovedFeatureFlags(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        setDifficultyLocked(locked: boolean): void;
        getKnownServerBrands(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getDataConfiguration(): $WorldDataConfiguration;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        setInitialized(locked: boolean): void;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        setRainTime(time: number): void;
        setThundering(locked: boolean): void;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getGameTime(): number;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        getDayTimeFraction(): number;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getSpawnPos(): $BlockPos;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getDayTimePerTick(): number;
        getSpawnAngle(): number;
        setPreset(arg0: $ResourceLocation_): void;
        getPreset(): $ResourceLocation;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        getStorageVersionName(storageVersionId: number): string;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        static PLAYER: string;
        settings: $LevelSettings;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        worldOptions: $WorldOptions;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get hardcore(): boolean;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getInfo(): $Component;
        getSettings(): $LevelSettings;
        requiresManualConversion(): boolean;
        getWorldVersionName(): $MutableComponent;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        getIcon(): $Path;
        isDowngrade(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        levelVersion(): $LevelVersion;
        shouldBackup(): boolean;
        getLastPlayed(): number;
        hasCommands(): boolean;
        canRecreate(): boolean;
        canDelete(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        isHardcore(): boolean;
        isCompatible(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        isDisabled(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        isExperimental(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get settings(): $LevelSettings;
        get worldVersionName(): $MutableComponent;
        get icon(): $Path;
        get downgrade(): boolean;
        get lastPlayed(): number;
        get levelId(): string;
        get hardcore(): boolean;
        get compatible(): boolean;
        get disabled(): boolean;
        get gameMode(): $GameType;
        get experimental(): boolean;
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
        constructor(id: string);
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
