import { $File } from "@package/java/io";
import { $DataPackConfig, $LevelSettings, $GameType } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MinecraftServer$ServerResourcePackInfo, $Services, $ServerInterface, $WorldStem_, $MinecraftServer$ReloadableResources, $RegistryLayer_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $PlayerDataStorage, $WorldData, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $Properties } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Difficulty } from "@package/net/minecraft/world";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $UnaryOperator_, $IntFunction_, $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RegistryAccess, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $Proxy } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DedicatedServerAccessor, $SettingsAccessor } from "@package/com/teamresourceful/resourcefulconfig/mixins/common";
import { $Thread, $Record, $Runnable } from "@package/java/lang";
import { $WorldDimensions, $WorldOptions } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/server/dedicated" {
    export class $Settings<T extends $Settings<T>> implements $SettingsAccessor {
        static loadFromFile(path: $Path_): $Properties;
        get(key: string, defaultValue: number): number;
        get(key: string, defaultValue: string): string;
        get<V>(key: string, mapper: $Function_<string, V>, value: V): V;
        get<V>(key: string, serializer: $Function_<string, V>, modifier: $UnaryOperator_<V>, deserializer: $Function_<V, string>, defaultValue: V): V;
        get(key: string, modifier: $UnaryOperator_<number>, defaultValue: number): number;
        get(key: string, defaultValue: number): number;
        get(key: string, defaultValue: boolean): boolean;
        get<V>(key: string, serializer: $Function_<string, V>, deserializer: $Function_<V, string>, defaultValue: V): V;
        store(path: $Path_): void;
        reload(registryAccess: $RegistryAccess, properties: $Properties): T;
        cloneProperties(): $Properties;
        static dispatchNumberOrString<V>(byId: $IntFunction_<V>, byName: $Function_<string, V>): $Function<string, V>;
        getLegacyBoolean(key: string): boolean;
        getLegacyString(key: string): string;
        getLegacy<V>(key: string, serializer: $Function_<string, V>): V;
        getMutable<V>(key: string, serializer: $Function_<string, V>, deserializer: $Function_<V, string>, defaultValue: V): $Settings$MutableValue<V>;
        getMutable(key: string, defaultValue: boolean): $Settings$MutableValue<boolean>;
        getMutable(key: string, defaultValue: number): $Settings$MutableValue<number>;
        getMutable<V>(key: string, serializer: $Function_<string, V>, defaultValue: V): $Settings$MutableValue<V>;
        invokeCloneProperties(): $Properties;
        invokeGetStringRaw(key: string): string;
        properties: $Properties;
        constructor(properties: $Properties);
    }
    export class $DedicatedServerSettings {
        update(propertiesOperator: $UnaryOperator_<$DedicatedServerProperties>): $DedicatedServerSettings;
        getProperties(): $DedicatedServerProperties;
        forceSave(): void;
        constructor(source: $Path_);
        get properties(): $DedicatedServerProperties;
    }
    export class $DedicatedServerProperties$WorldDimensionData extends $Record {
    }
    export class $ServerWatchdog implements $Runnable {
        run(): void;
        constructor(server: $DedicatedServer);
    }
    export class $DedicatedPlayerList extends $PlayerList {
        static WHITELIST_FILE: $File;
        maxPlayers: number;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $DedicatedServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage);
    }
    export class $Settings$MutableValue<V> implements $Supplier<V> {
        get(): V;
        update(registryAccess: $RegistryAccess, newValue: V): V;
        this$0: $Settings<any>;
    }
    export class $DedicatedServer extends $MinecraftServer implements $ServerInterface, $DedicatedServerAccessor {
        getProperties(): $DedicatedServerProperties;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        getPlayerList(): $DedicatedPlayerList;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        showGui(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        handleConsoleInputs(): void;
        storeUsingWhiteList(isStoreUsingWhiteList: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        convertOldUsers(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getServerPort(): number;
        getMaxTickLength(): number;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        handleConsoleInput(msg: string, source: $CommandSourceStack): void;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        getSettings(): $DedicatedServerSettings;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        static LOGGER: $Logger;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, settings: $DedicatedServerSettings, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get properties(): $DedicatedServerProperties;
        get serverName(): string;
        get playerList(): $DedicatedPlayerList;
        get serverIp(): string;
        get serverPort(): number;
        get maxTickLength(): number;
        get levelIdName(): string;
        get pluginNames(): string;
        get settings(): $DedicatedServerSettings;
    }
    export class $DedicatedServerProperties extends $Settings<$DedicatedServerProperties> {
        static fromFile(path: $Path_): $DedicatedServerProperties;
        createDimensions(registryAccess: $RegistryAccess): $WorldDimensions;
        onlineMode: boolean;
        opPermissionLevel: number;
        allowNether: boolean;
        regionFileComression: string;
        useNativeTransport: boolean;
        maxChainedNeighborUpdates: number;
        spawnNpcs: boolean;
        serverResourcePackInfo: ($MinecraftServer$ServerResourcePackInfo) | undefined;
        gamemode: $GameType;
        broadcastConsoleToOps: boolean;
        functionPermissionLevel: number;
        enableQuery: boolean;
        spawnAnimals: boolean;
        maxTickTime: number;
        entityBroadcastRangePercentage: number;
        forceGameMode: boolean;
        announcePlayerAchievements: boolean;
        rconPort: number;
        enforceSecureProfile: boolean;
        acceptsTransfers: boolean;
        motd: string;
        queryPort: number;
        maxPlayers: number;
        enableRcon: boolean;
        worldOptions: $WorldOptions;
        pvp: boolean;
        bugReportLink: string;
        rateLimitPacketsPerSecond: number;
        difficulty: $Difficulty;
        networkCompressionThreshold: number;
        maxWorldSize: number;
        static LOGGER: $Logger;
        whiteList: $Settings$MutableValue<boolean>;
        rconPassword: string;
        enableStatus: boolean;
        viewDistance: number;
        spawnProtection: number;
        hideOnlinePlayers: boolean;
        serverPort: number;
        allowFlight: boolean;
        broadcastRconToOps: boolean;
        enableJmxMonitoring: boolean;
        textFilteringConfig: string;
        preventProxyConnections: boolean;
        spawnMonsters: boolean;
        enforceWhitelist: boolean;
        syncChunkWrites: boolean;
        hardcore: boolean;
        playerIdleTimeout: $Settings$MutableValue<number>;
        levelName: string;
        initialDataPackConfiguration: $DataPackConfig;
        serverIp: string;
        simulationDistance: number;
        enableCommandBlock: boolean;
        properties: $Properties;
        logIPs: boolean;
        constructor(properties: $Properties);
    }
}
