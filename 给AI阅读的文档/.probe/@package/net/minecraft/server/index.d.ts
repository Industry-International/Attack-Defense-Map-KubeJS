import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $MinecraftServerData as $MinecraftServerData$1, $IMinecraftServer } from "@package/xaero/map/server";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerData, $IMinecraftServer as $IMinecraftServer$1 } from "@package/xaero/common/server";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ServerMidTickTask } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $PlayerDataStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_, $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $JsonElement_ } from "@package/com/google/gson";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $IServerDataAPI, $IOpenPACMinecraftServer } from "@package/xaero/pac/common/server";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_ } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $PlayerAdvancementsAccessor } from "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $FabricOriginalKnownPacksGetter } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        logLine(string: string | null): void;
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements implements $PlayerAdvancementsAccessor {
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        stopListening(): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        flushDirty(serverPlayer: $ServerPlayer): void;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setPlayer(serverPlayer: $ServerPlayer): void;
        handler$jbb000$fabric_events_interaction_v0$preventOwnerOverride(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        handler$jbb000$fabric_events_interaction_v0$preventGrantCriterion(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        getPlayer(): $ServerPlayer;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        managers(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        get(location: $ResourceLocation_): $AdvancementHolder;
        apply(object: $Map_<$ResourceLocation_, $JsonElement_>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        tree(): $AdvancementTree;
        getFabricDependencies(): $Collection<any>;
        getFabricId(): $ResourceLocation;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        constructor(registries: $HolderLookup$Provider);
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMaxPlayers(): number;
        getPlayerCount(): number;
        getServerVersion(): string;
        getMotd(): string;
        get maxPlayers(): number;
        get playerCount(): number;
        get serverVersion(): string;
        get motd(): string;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        endTickWork(): void;
        updateJoiningPlayer(player: $ServerPlayer): void;
        checkShouldSprintThisTick(): boolean;
        isSprinting(): boolean;
        stopSprinting(): boolean;
        stopStepping(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        requestGameToSprint(sprintTime: number): boolean;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        packRepository(): $PackRepository;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        safeMode(): boolean;
        initialDataConfig(): $WorldDataConfiguration;
        initMode(): boolean;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        getJsonKeys(): string;
        addJsonKey(key: string): void;
        filename: string;
        constructor();
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        constructor(registryAccess: $RegistryAccess);
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static getMissingTranslations(): $Set<string>;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static realStdoutPrintln(message: string): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        static forException(exception: $Exception): $ChainedJsonException;
        prependJsonKey(message: string): void;
        setFilenameAndFlush(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        dataConfiguration(): $WorldDataConfiguration;
        datapackWorldgen(): $RegistryAccess$Frozen;
        datapackDimensions(): $RegistryAccess$Frozen;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        get properties(): $DedicatedServerProperties;
        get serverName(): string;
        get playerNames(): string[];
        get serverIp(): string;
        get serverPort(): number;
        get levelIdName(): string;
        get pluginNames(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFabricDependencies(): $Collection<any>;
        getFabricId(): $ResourceLocation;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get availableTags(): $Iterable<$ResourceLocation>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $IOpenPACMinecraftServer, $ITimeTrackingServer, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $Trackable, $MinecraftServerAccessor, $IMinecraftServer$1, $IMinecraftServer, $MinecraftServerKJS, $FabricOriginalKnownPacksGetter, $ServerMidTickTask {
        getConnection(): $ServerConnectionListener;
        getProxy(): $Proxy;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        getFile(path: string): $Path;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        getStatus(): $ServerStatus;
        getServerResources(): $MinecraftServer$ReloadableResources;
        getCustomBossEvents(): $CustomBossEvents;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        setPort(idleTimeout: number): void;
        setId(serverId: string): void;
        overworld(): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        getStructureManager(): $StructureTemplateManager;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        serverLinks(): $ServerLinks;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        getProfiler(): $ProfilerFiller;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        createLevels(listener: $ChunkProgressListener): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceDifficulty(): void;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        getModdedStatus(): $ModCheck;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        getServerDirectory(): $Path;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        getTickTimeLogger(): $SampleLogger;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        setPlayerList(list: $PlayerList): void;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        getSessionService(): $MinecraftSessionService;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        static setFatalException(fatalException: $RuntimeException): void;
        addTickable(tickable: $Runnable_): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        initializeKeyPair(): void;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        getNextTickTime(): number;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        getTickTimesNanos(): number[];
        stopTimeProfiler(): $ProfileResults;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        getOverworld(): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        getWorldPath(levelResource: $LevelResource): $Path;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        getPackRepository(): $PackRepository;
        getProfileKeySignatureValidator(): $SignatureValidator;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        getScheduledEvents(): $ScheduledEvents;
        getAdvancements(): $ServerAdvancementManager;
        tickRateManager(): $ServerTickRateManager;
        registryAccess(): $RegistryAccess$Frozen;
        wrapRunnable(runnable: $Runnable_): $TickTask;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getFixerUpper(): $DataFixer;
        executeTasksMidTick(level: $ServerLevel): void;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        shouldRun(runnable: $TickTask): boolean;
        doRunTask(task: $TickTask): void;
        sendSystemMessage(component: $Component_): void;
        getCommands(): $Commands;
        getPlayerList(): $PlayerList;
        getSpawnRadius(level: $ServerLevel | null): number;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        getDefaultGameType(): $GameType;
        getForcedGameType(): $GameType;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        getResourceManager(): $ResourceManager;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        restoreInventories(): $Map<any, any>;
        getProfilePermissions(profile: $GameProfile): number;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        loadLevel(): void;
        setLocalIp(serverId: string): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        runServer(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        setMotd(serverId: string): void;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        getFunctions(): $ServerFunctionManager;
        handler$bln000$veil$stopServer(arg0: $CallbackInfo): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        fabric_getOriginalKnownPacks(): $List<any>;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        getProfileCache(): $GameProfileCache;
        getAllLevels(): $Iterable<$ServerLevel>;
        getChatDecorator(): $ChatDecorator;
        getCommandStorage(): $CommandStorage;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        getGameRules(): $GameRules;
        sendPacket(arg0: $Packet<any>): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        fillSystemReport(report: $SystemReport): $SystemReport;
        getWorldData(): $WorldData;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        getScoreboard(): $ServerScoreboard;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        potionBrewing(): $PotionBrewing;
        getRecipeManager(): $RecipeManager;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        getSingleplayerProfile(): $GameProfile;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        getAverageTickTimeNanos(): number;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        getProfileRepository(): $GameProfileRepository;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        dumpServerProperties(path: $Path_): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        getCurrentSmoothedTickTime(): number;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        getScaledTrackingDistance(trackingDistance: number): number;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        setPlayerIdleTimeout(idleTimeout: number): void;
        getXaeroWorldMapServerData(): $MinecraftServerData$1;
        getXaeroMinimapServerData(): $MinecraftServerData;
        setXaero_OPAC_ServerData(arg0: $IServerDataAPI): void;
        setXaeroWorldMapServerData(arg0: $MinecraftServerData$1): void;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        getXaero_OPAC_ServerData(): $IServerDataAPI;
        mfix$getLastTickStartTime(): number;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        getWorldScreenshotFile(): ($Path) | undefined;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        getData(): $AttachedData<any>;
        atl$getBaseClass(): $Class<any>;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTracking(): void;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setStatusMessage(component: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        self(): $MinecraftServer;
        tell(component: $Component_): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        getName(): $Component;
        getMcEntities(): $Iterable<$Entity>;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(serverId: string): void;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get connection(): $ServerConnectionListener;
        get shutdown(): boolean;
        get running(): boolean;
        get status(): $ServerStatus;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get stopped(): boolean;
        set id(value: string);
        get dedicated(): boolean;
        get absoluteMaxWorldSize(): number;
        get structureManager(): $StructureTemplateManager;
        get profiler(): $ProfilerFiller;
        get serverModName(): string;
        get moddedStatus(): $ModCheck;
        get serverDirectory(): $Path;
        get tickTimeLogger(): $SampleLogger;
        get maxPlayers(): number;
        get statusJson(): string;
        get sessionService(): $MinecraftSessionService;
        get playerNames(): string[];
        static set fatalException(value: $RuntimeException);
        get playerCount(): number;
        get spawningMonsters(): boolean;
        get nextTickTime(): number;
        get serverVersion(): string;
        get epollEnabled(): boolean;
        get tickTimesNanos(): number[];
        get currentlySaving(): boolean;
        get recordingMetrics(): boolean;
        get packRepository(): $PackRepository;
        get profileKeySignatureValidator(): $SignatureValidator;
        get scheduledEvents(): $ScheduledEvents;
        get advancements(): $ServerAdvancementManager;
        get singleplayer(): boolean;
        get fixerUpper(): $DataFixer;
        get ready(): boolean;
        get paused(): boolean;
        get commands(): $Commands;
        get forcedGameType(): $GameType;
        get spawningAnimals(): boolean;
        get resourceManager(): $ResourceManager;
        get persistentData(): $CompoundTag;
        get hardcore(): boolean;
        get functions(): $ServerFunctionManager;
        get functionCompilationLevel(): number;
        get rateLimitPacketsPerSecond(): number;
        get operatorUserPermissionLevel(): number;
        get maxChainedNeighborUpdates(): number;
        get profileCache(): $GameProfileCache;
        get allLevels(): $Iterable<$ServerLevel>;
        get chatDecorator(): $ChatDecorator;
        get commandStorage(): $CommandStorage;
        get keyPair(): $KeyPair;
        get gameRules(): $GameRules;
        get tickCount(): number;
        get published(): boolean;
        get scoreboard(): $ServerScoreboard;
        get recipeManager(): $RecipeManager;
        get tickTimeLoggingEnabled(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get resourcePackRequired(): boolean;
        get averageTickTimeNanos(): number;
        get profileRepository(): $GameProfileRepository;
        get compressionThreshold(): number;
        get timeProfilerRunning(): boolean;
        get currentSmoothedTickTime(): number;
        get spawnProtectionRadius(): number;
        get worldScreenshotFile(): ($Path) | undefined;
        get commandBlockEnabled(): boolean;
        get data(): $AttachedData<any>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        dataPackResources(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    export class $ServerScoreboard extends $Scoreboard {
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        addDirtyListener(runnable: $Runnable_): void;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        setDirty(): void;
        startTrackingObjective(objective: $Objective): void;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        stopTrackingObjective(objective: $Objective): void;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        listeners(): $List<$PreparableReloadListener>;
        getRegistryLookup(): $HolderLookup$Provider;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getAdvancements(): $ServerAdvancementManager;
        getCommands(): $Commands;
        getConditionContext(): $ICondition$IContext;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        kjs$getServerScriptManager(): $ServerScriptManager;
        getRecipeManager(): $RecipeManager;
        kjs$getTagManager(): $TagManager;
        get registryLookup(): $HolderLookup$Provider;
        get functionLibrary(): $ServerFunctionLibrary;
        get advancements(): $ServerAdvancementManager;
        get commands(): $Commands;
        get conditionContext(): $ICondition$IContext;
        get recipeManager(): $RecipeManager;
    }
    export class $WorldLoader$InitConfig extends $Record {
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        packConfig(): $WorldLoader$PackConfig;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    export class $TickTask implements $Runnable {
        run(): void;
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    export class $Services extends $Record {
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        servicesKeySet(): $ServicesKeySet;
        profileRepository(): $GameProfileRepository;
        canValidateProfileKeys(): boolean;
        profileCache(): $GameProfileCache;
        profileKeySignatureValidator(): $SignatureValidator;
        sessionService(): $MinecraftSessionService;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        tick(): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        mfix$getProfilingResults(): string;
        getTagNames(): $Iterable<$ResourceLocation>;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        getGameLoopSender(): $CommandSourceStack;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get tagNames(): $Iterable<$ResourceLocation>;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get functionNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
}
