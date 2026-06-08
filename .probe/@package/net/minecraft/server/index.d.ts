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
        logLine(arg0: string): void;
        name: string;
        constructor(arg0: string, arg1: $OutputStream);
    }
    export class $PlayerAdvancements implements $PlayerAdvancementsAccessor {
        save(): void;
        reload(arg0: $ServerAdvancementManager): void;
        setSelectedTab(arg0: $AdvancementHolder_): void;
        flushDirty(arg0: $ServerPlayer): void;
        revoke(arg0: $AdvancementHolder_, arg1: string): boolean;
        award(arg0: $AdvancementHolder_, arg1: string): boolean;
        getOrStartProgress(arg0: $AdvancementHolder_): $AdvancementProgress;
        stopListening(): void;
        handler$ilj000$fabric_events_interaction_v0$preventOwnerOverride(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        handler$ilj000$fabric_events_interaction_v0$preventGrantCriterion(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        setPlayer(arg0: $ServerPlayer): void;
        getPlayer(): $ServerPlayer;
        constructor(arg0: $DataFixer, arg1: $PlayerList, arg2: $ServerAdvancementManager, arg3: $Path_, arg4: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        finalDimensions(): $RegistryAccess$Frozen;
        cookie(): D;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(arg0: string, arg1: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        managers(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        get(arg0: $ResourceLocation_): $AdvancementHolder;
        apply(arg0: $Map_<$ResourceLocation_, $JsonElement_>, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        tree(): $AdvancementTree;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        constructor(arg0: $HolderLookup$Provider);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMotd(): string;
        getServerVersion(): string;
        getPlayerCount(): number;
        getMaxPlayers(): number;
        get motd(): string;
        get serverVersion(): string;
        get playerCount(): number;
        get maxPlayers(): number;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(arg0: $URI): $ServerLinks$Entry;
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
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        isSprinting(): boolean;
        stopSprinting(): boolean;
        stopStepping(): boolean;
        stepGameIfPaused(arg0: number): boolean;
        requestGameToSprint(arg0: number): boolean;
        updateJoiningPlayer(arg0: $ServerPlayer): void;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor(arg0: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        findKnownType(arg0: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        name: string;
        constructor(arg0: string, arg1: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        initialDataConfig(): $WorldDataConfiguration;
        packRepository(): $PackRepository;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        safeMode(): boolean;
        initMode(): boolean;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    export class $ChainedJsonException$Entry {
        getJsonKeys(): string;
        getFilename(): string;
        addJsonKey(arg0: string): void;
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
        static reload(arg0: $LayeredRegistryAccess<$RegistryLayer_>, arg1: $ResourceManager, arg2: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        constructor(arg0: $RegistryAccess);
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(arg0: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        static validate(): void;
        static getMissingTranslations(): $Set<string>;
        static checkBootstrapCalled(arg0: $Supplier_<string>): void;
        static bootStrap(): void;
        static realStdoutPrintln(arg0: string): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        static forException(arg0: $Exception): $ChainedJsonException;
        prependJsonKey(arg0: string): void;
        setFilenameAndFlush(arg0: string): void;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: D): R;
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
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(arg0: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(arg0: $WorldLoader$InitConfig_, arg1: $WorldLoader$WorldDataSupplier_<D>, arg2: $WorldLoader$ResultFactory_<D, R>, arg3: $Executor_, arg4: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(arg0: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(arg0: $ResourceKey_<$LootTable>): $LootTable;
        constructor(arg0: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        datapackDimensions(): $RegistryAccess$Frozen;
        datapackWorldgen(): $RegistryAccess$Frozen;
        dataConfiguration(): $WorldDataConfiguration;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        runCommand(arg0: string): string;
        getPlayerNames(): string[];
        getServerName(): string;
        getLevelIdName(): string;
        getServerPort(): number;
        getServerIp(): string;
        getPluginNames(): string;
        get properties(): $DedicatedServerProperties;
        get playerNames(): string[];
        get serverName(): string;
        get levelIdName(): string;
        get serverPort(): number;
        get serverIp(): string;
        get pluginNames(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getFunction(arg0: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getTag(arg0: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(arg0: number, arg1: $CommandDispatcher<$CommandSourceStack>);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get availableTags(): $Iterable<$ResourceLocation>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $IOpenPACMinecraftServer, $ITimeTrackingServer, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $Trackable, $MinecraftServerAccessor, $IMinecraftServer$1, $IMinecraftServer, $MinecraftServerKJS, $FabricOriginalKnownPacksGetter, $ServerMidTickTask {
        getConnection(): $ServerConnectionListener;
        getPort(): number;
        getFile(arg0: string): $Path;
        isShutdown(): boolean;
        halt(arg0: boolean): void;
        getLevel(arg0: $ResourceKey_<$Level>): $ServerLevel;
        setDemo(arg0: boolean): void;
        isDedicated(): boolean;
        isStopped(): boolean;
        tickServer(arg0: $BooleanSupplier_): void;
        executeTasksMidTick(world: $ServerLevel): void;
        setMotd(arg0: string): void;
        overworld(): $ServerLevel;
        getStatus(): $ServerStatus;
        isRunning(): boolean;
        potionBrewing(): $PotionBrewing;
        getRecipeManager(): $RecipeManager;
        setLocalIp(arg0: string): void;
        runServer(): void;
        loadLevel(): void;
        stop(): void;
        initServer(): boolean;
        getLocalIp(): string;
        setPort(arg0: number): void;
        setId(arg0: string): void;
        atl$getBaseClass(): $Class<any>;
        getData(): $AttachedData<any>;
        hasGui(): boolean;
        getProfiler(): $ProfilerFiller;
        fabric_getOriginalKnownPacks(): $List<any>;
        getFunctionCompilationLevel(): number;
        handler$bma000$veil$stopServer(arg0: $CallbackInfo): void;
        getOperatorUserPermissionLevel(): number;
        getRateLimitPacketsPerSecond(): number;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        getCustomBossEvents(): $CustomBossEvents;
        setDifficultyLocked(arg0: boolean): void;
        isTickTimeLoggingEnabled(): boolean;
        static throwIfFatalException(): boolean;
        endMetricsRecordingTick(): void;
        getAverageTickTimeNanos(): number;
        shouldRconBroadcast(): boolean;
        getProfileRepository(): $GameProfileRepository;
        setPreventProxyConnections(arg0: boolean): void;
        isTimeProfilerRunning(): boolean;
        reportChunkSaveFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        getSpawnProtectionRadius(): number;
        kickUnlistedPlayers(arg0: $CommandSourceStack): void;
        setSingleplayerProfile(arg0: $GameProfile): void;
        getSingleplayerProfile(): $GameProfile;
        enforceSecureProfile(): boolean;
        isResourcePackRequired(): boolean;
        getCompressionThreshold(): number;
        getScaledTrackingDistance(arg0: number): number;
        getPlayerIdleTimeout(): number;
        setPlayerIdleTimeout(arg0: number): void;
        dumpServerProperties(arg0: $Path_): void;
        static configurePackRepository(arg0: $PackRepository, arg1: $WorldDataConfiguration_, arg2: boolean, arg3: boolean): $WorldDataConfiguration;
        stopRecordingMetrics(): void;
        isSingleplayerOwner(arg0: $GameProfile): boolean;
        reportChunkLoadFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        getCurrentSmoothedTickTime(): number;
        fillServerSystemReport(arg0: $SystemReport): $SystemReport;
        subscribeToDebugSample(arg0: $ServerPlayer, arg1: $RemoteDebugSampleType_): void;
        getPreventProxyConnections(): boolean;
        setEnforceWhitelist(arg0: boolean): void;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        getXaeroWorldMapServerData(): $MinecraftServerData$1;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        setXaero_OPAC_ServerData(arg0: $IServerDataAPI): void;
        setXaeroWorldMapServerData(arg0: $MinecraftServerData$1): void;
        getXaero_OPAC_ServerData(): $IServerDataAPI;
        getXaeroMinimapServerData(): $MinecraftServerData;
        mfix$getLastTickStartTime(): number;
        getResourceManager(): $ResourceManager;
        getMotd(): string;
        getScheduledEvents(): $ScheduledEvents;
        doRunTask(arg0: $TickTask): void;
        logIPs(): boolean;
        sendPacket(arg0: $Packet<any>): void;
        restoreInventories(): $Map<any, any>;
        getProfilePermissions(arg0: $GameProfile): number;
        createGameModeForPlayer(arg0: $ServerPlayer): $ServerPlayerGameMode;
        createTextFilterForPlayer(arg0: $ServerPlayer): $TextFilter;
        setDifficulty(arg0: $Difficulty_, arg1: boolean): void;
        serverLinks(): $ServerLinks;
        getProxy(): $Proxy;
        getFunctions(): $ServerFunctionManager;
        createLevels(arg0: $ChunkProgressListener): void;
        waitUntilNextTick(): void;
        getModdedStatus(): $ModCheck;
        saveEverything(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        getServerModName(): string;
        saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        forceDifficulty(): void;
        getServerVersion(): string;
        initializeKeyPair(): void;
        isSpawningMonsters(): boolean;
        tickChildren(arg0: $BooleanSupplier_): void;
        addTickable(arg0: $Runnable_): void;
        getTickTimeLogger(): $SampleLogger;
        getPlayerNames(): string[];
        usesAuthentication(): boolean;
        isEpollEnabled(): boolean;
        getStatusJson(): string;
        isFlightAllowed(): boolean;
        setPlayerList(arg0: $PlayerList): void;
        setDefaultGameType(arg0: $GameType_): void;
        repliesToStatus(): boolean;
        hidesOnlinePlayers(): boolean;
        setPvpAllowed(arg0: boolean): void;
        onServerCrash(arg0: $CrashReport): void;
        getPlayerCount(): number;
        setFlightAllowed(arg0: boolean): void;
        onTickRateChanged(): void;
        publishServer(arg0: $GameType_, arg1: boolean, arg2: number): boolean;
        getServerDirectory(): $Path;
        static setFatalException(arg0: $RuntimeException): void;
        onServerExit(): void;
        getMaxPlayers(): number;
        startTimeProfiler(): void;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        isCurrentlySaving(): boolean;
        getWorldPath(arg0: $LevelResource): $Path;
        /**
         * @deprecated
         */
        markWorldsDirty(): void;
        isEnforceWhitelist(): boolean;
        getNextTickTime(): number;
        stopTimeProfiler(): $ProfileResults;
        acceptsTransfers(): boolean;
        getOverworld(): $ServerLevel;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        isRecordingMetrics(): boolean;
        getPackRepository(): $PackRepository;
        logChatMessage(arg0: $Component_, arg1: $ChatType$Bound_, arg2: string): void;
        getTickTimesNanos(): number[];
        reloadResources(arg0: $Collection_<string>): $CompletableFuture<void>;
        getSessionService(): $MinecraftSessionService;
        invalidateStatus(): void;
        getAdvancements(): $ServerAdvancementManager;
        fillSystemReport(arg0: $SystemReport): $SystemReport;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        isSingleplayer(): boolean;
        registryAccess(): $RegistryAccess$Frozen;
        getKeyPair(): $KeyPair;
        setUsesAuthentication(arg0: boolean): void;
        finishRecordingMetrics(): void;
        cancelRecordingMetrics(): void;
        startRecordingMetrics(arg0: $Consumer_<$ProfileResults>, arg1: $Consumer_<$Path>): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getFixerUpper(): $DataFixer;
        wrapRunnable(arg0: $Runnable_): $TickTask;
        shouldRun(arg0: $TickTask): boolean;
        isPaused(): boolean;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        static spin<S extends $MinecraftServer>(arg0: $Function_<$Thread, S>): S;
        isReady(): boolean;
        isDemo(): boolean;
        isHardcore(): boolean;
        isPublished(): boolean;
        getScoreboard(): $ServerScoreboard;
        getGameRules(): $GameRules;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        getPersistentData(): $CompoundTag;
        createCommandSourceStack(): $CommandSourceStack;
        sendSystemMessage(arg0: $Component_): void;
        getCommands(): $Commands;
        isLevelEnabled(arg0: $Level_): boolean;
        shouldInformAdmins(): boolean;
        acceptsFailure(): boolean;
        acceptsSuccess(): boolean;
        getPlayerList(): $PlayerList;
        getMaxChainedNeighborUpdates(): number;
        getAbsoluteMaxWorldSize(): number;
        getStructureManager(): $StructureTemplateManager;
        forceSynchronousWrites(): boolean;
        isUnderSpawnProtection(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Player): boolean;
        forceTimeSynchronization(): void;
        getSpawnRadius(arg0: $ServerLevel): number;
        isPvpAllowed(): boolean;
        getDefaultGameType(): $GameType;
        getForcedGameType(): $GameType;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        isSpawningAnimals(): boolean;
        areNpcsEnabled(): boolean;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getCommandStorage(): $CommandStorage;
        getWorldScreenshotFile(): ($Path) | undefined;
        isCommandBlockEnabled(): boolean;
        getServerResources(): $MinecraftServer$ReloadableResources;
        getProfileCache(): $GameProfileCache;
        getTickCount(): number;
        reportMisplacedChunk(arg0: $ChunkPos, arg1: $ChunkPos, arg2: $RegionStorageInfo_): void;
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        sendData(channel: string, data: $CompoundTag_): void;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        sendData(channel: string): void;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
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
        constructor(arg0: $Thread, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $PackRepository, arg3: $WorldStem_, arg4: $Proxy, arg5: $DataFixer, arg6: $Services_, arg7: $ChunkProgressListenerFactory_);
        get connection(): $ServerConnectionListener;
        get shutdown(): boolean;
        get dedicated(): boolean;
        get stopped(): boolean;
        get status(): $ServerStatus;
        get running(): boolean;
        get recipeManager(): $RecipeManager;
        set id(value: string);
        get data(): $AttachedData<any>;
        get profiler(): $ProfilerFiller;
        get functionCompilationLevel(): number;
        get operatorUserPermissionLevel(): number;
        get rateLimitPacketsPerSecond(): number;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get tickTimeLoggingEnabled(): boolean;
        get averageTickTimeNanos(): number;
        get profileRepository(): $GameProfileRepository;
        get timeProfilerRunning(): boolean;
        get spawnProtectionRadius(): number;
        get resourcePackRequired(): boolean;
        get compressionThreshold(): number;
        get currentSmoothedTickTime(): number;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get resourceManager(): $ResourceManager;
        get scheduledEvents(): $ScheduledEvents;
        get functions(): $ServerFunctionManager;
        get moddedStatus(): $ModCheck;
        get serverModName(): string;
        get serverVersion(): string;
        get spawningMonsters(): boolean;
        get tickTimeLogger(): $SampleLogger;
        get playerNames(): string[];
        get epollEnabled(): boolean;
        get statusJson(): string;
        get playerCount(): number;
        get serverDirectory(): $Path;
        static set fatalException(value: $RuntimeException);
        get maxPlayers(): number;
        get currentlySaving(): boolean;
        get nextTickTime(): number;
        get recordingMetrics(): boolean;
        get packRepository(): $PackRepository;
        get tickTimesNanos(): number[];
        get sessionService(): $MinecraftSessionService;
        get advancements(): $ServerAdvancementManager;
        get singleplayer(): boolean;
        get keyPair(): $KeyPair;
        get profileKeySignatureValidator(): $SignatureValidator;
        get fixerUpper(): $DataFixer;
        get paused(): boolean;
        get ready(): boolean;
        get hardcore(): boolean;
        get published(): boolean;
        get scoreboard(): $ServerScoreboard;
        get gameRules(): $GameRules;
        get persistentData(): $CompoundTag;
        get commands(): $Commands;
        get maxChainedNeighborUpdates(): number;
        get absoluteMaxWorldSize(): number;
        get structureManager(): $StructureTemplateManager;
        get forcedGameType(): $GameType;
        get spawningAnimals(): boolean;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get commandStorage(): $CommandStorage;
        get worldScreenshotFile(): ($Path) | undefined;
        get commandBlockEnabled(): boolean;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get profileCache(): $GameProfileCache;
        get tickCount(): number;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
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
        setDirty(): void;
        getObjectiveDisplaySlotCount(arg0: $Objective): number;
        stopTrackingObjective(arg0: $Objective): void;
        getStartTrackingPackets(arg0: $Objective): $List<$Packet<never>>;
        startTrackingObjective(arg0: $Objective): void;
        getStopTrackingPackets(arg0: $Objective): $List<$Packet<never>>;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        addDirtyListener(arg0: $Runnable_): void;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(arg0: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        kjs$getTagManager(): $TagManager;
        listeners(): $List<$PreparableReloadListener>;
        getRecipeManager(): $RecipeManager;
        getRegistryLookup(): $HolderLookup$Provider;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        static loadResources(arg0: $ResourceManager, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $FeatureFlagSet, arg3: $Commands$CommandSelection_, arg4: number, arg5: $Executor_, arg6: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getAdvancements(): $ServerAdvancementManager;
        getCommands(): $Commands;
        getConditionContext(): $ICondition$IContext;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        kjs$getServerScriptManager(): $ServerScriptManager;
        get recipeManager(): $RecipeManager;
        get registryLookup(): $HolderLookup$Provider;
        get functionLibrary(): $ServerFunctionLibrary;
        get advancements(): $ServerAdvancementManager;
        get commands(): $Commands;
        get conditionContext(): $ICondition$IContext;
    }
    export class $WorldLoader$InitConfig extends $Record {
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        packConfig(): $WorldLoader$PackConfig;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    export class $TickTask implements $Runnable {
        run(): void;
        getTick(): number;
        constructor(arg0: number, arg1: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static knownType(arg0: $ServerLinks$KnownLinkType_, arg1: $URI): $ServerLinks$Entry;
        static custom(arg0: $Component_, arg1: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_);
        get required(): boolean;
    }
    export class $Main {
        static main(arg0: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    export class $Services extends $Record {
        static create(arg0: $YggdrasilAuthenticationService, arg1: $File_): $Services;
        servicesKeySet(): $ServicesKeySet;
        profileKeySignatureValidator(): $SignatureValidator;
        canValidateProfileKeys(): boolean;
        profileRepository(): $GameProfileRepository;
        profileCache(): $GameProfileCache;
        sessionService(): $MinecraftSessionService;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        get(arg0: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(arg0: $CommandFunction<$CommandSourceStack>, arg1: $CommandSourceStack): void;
        tick(): void;
        getTag(arg0: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getTagNames(): $Iterable<$ResourceLocation>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        replaceLibrary(arg0: $ServerFunctionLibrary): void;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        mfix$getProfilingResults(): string;
        getGameLoopSender(): $CommandSourceStack;
        constructor(arg0: $MinecraftServer, arg1: $ServerFunctionLibrary);
        get tagNames(): $Iterable<$ResourceLocation>;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get functionNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
}
