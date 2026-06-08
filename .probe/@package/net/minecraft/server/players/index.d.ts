import { $JsonObject_ } from "@package/com/google/gson";
import { $MinecraftServer, $PlayerAdvancements, $RegistryLayer_, $ServerScoreboard } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $Map_, $UUID_, $Date, $List_, $Collection } from "@package/java/util";
import { $PlayerListAccessor as $PlayerListAccessor$1 } from "@package/rikka/lanserverproperties/mixin";
import { $SimpleDateFormat } from "@package/java/text";
import { $Function_ } from "@package/java/util/function";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $Connection } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $GameProfileRepository_, $GameProfile } from "@package/com/mojang/authlib";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $PlayerListAccessor } from "@package/com/teamresourceful/resourcefulconfig/mixins/common";
import { $RuntimeException } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $File, $File_ } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $IGameProfileCache } from "@package/xaero/pac/common/server/core/accessor";
import { $ServerGamePacketListenerImpl, $CommonListenerCookie_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerStatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/server/players" {
    export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
        getLevel(): number;
        getBypassesPlayerLimit(): boolean;
        constructor(arg0: $GameProfile, arg1: number, arg2: boolean);
        constructor(arg0: $JsonObject_);
        get level(): number;
        get bypassesPlayerLimit(): boolean;
    }
    export class $OldUsersConverter {
        static serverReadyAfterUserconversion(arg0: $MinecraftServer): boolean;
        static convertMobOwnerIfNecessary(arg0: $MinecraftServer, arg1: string): $UUID;
        static ensureDirectoryExists(arg0: $File_): void;
        static parseDate(arg0: string, arg1: $Date): $Date;
        static readOldListFormat(arg0: $File_, arg1: $Map_<string, string[]>): $List<string>;
        static convertOpsList(arg0: $MinecraftServer): boolean;
        static convertUserBanlist(arg0: $MinecraftServer): boolean;
        static convertIpBanlist(arg0: $MinecraftServer): boolean;
        static convertPlayers(arg0: $DedicatedServer): boolean;
        static convertWhiteList(arg0: $MinecraftServer): boolean;
        static OLD_OPLIST: $File;
        static OLD_USERBANLIST: $File;
        static LOGGER: $Logger;
        static OLD_IPBANLIST: $File;
        static OLD_WHITELIST: $File;
        constructor();
    }
    export class $GameProfileCache implements $IGameProfileCache {
        get(arg0: $UUID_): ($GameProfile) | undefined;
        get(arg0: string): ($GameProfile) | undefined;
        load(): $List<$GameProfileCache$GameProfileInfo>;
        add(arg0: $GameProfile): void;
        save(): void;
        getAsync(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        clearExecutor(): void;
        xaero_pac_PlayerNameIsKnown(arg0: string): boolean;
        static setUsesAuthentication(arg0: boolean): void;
        setExecutor(arg0: $Executor_): void;
        constructor(arg0: $GameProfileRepository_, arg1: $File_);
        static set usesAuthentication(value: boolean);
        set executor(value: $Executor_);
    }
    export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(arg0: $JsonObject_);
        constructor(arg0: $GameProfile, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
        constructor(arg0: $GameProfile);
    }
    export class $BanListEntry<T> extends $StoredUserEntry<T> {
        getDisplayName(): $Component;
        getSource(): string;
        getReason(): string;
        getCreated(): $Date;
        getExpires(): $Date;
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(arg0: T, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
        constructor(arg0: T, arg1: $JsonObject_);
        get displayName(): $Component;
    }
    export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
        get(arg0: $SocketAddress): $IpBanListEntry;
        isBanned(arg0: string): boolean;
        isBanned(arg0: $SocketAddress): boolean;
        constructor(arg0: $File_);
    }
    export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
        constructor(arg0: $GameProfile);
        constructor(arg0: $JsonObject_);
    }
    export class $SleepStatus {
        update(arg0: $List_<$ServerPlayer>): boolean;
        areEnoughSleeping(arg0: number): boolean;
        amountSleeping(): number;
        sleepersNeeded(arg0: number): number;
        removeAllSleepers(): void;
        areEnoughDeepSleeping(arg0: number, arg1: $List_<$ServerPlayer>): boolean;
        constructor();
    }
    export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
        getKeyForUser(arg0: $GameProfile): string;
        canBypassPlayerLimit(arg0: $GameProfile): boolean;
        constructor(arg0: $File_);
    }
    export class $GameProfileCache$GameProfileInfo {
    }
    export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
        isBanned(arg0: $GameProfile): boolean;
        getKeyForUser(arg0: $GameProfile): string;
        constructor(arg0: $File_);
    }
    export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
        isWhiteListed(arg0: $GameProfile): boolean;
        getKeyForUser(arg0: $GameProfile): string;
        constructor(arg0: $File_);
    }
    export class $PlayerList implements $PlayerListAccessor, $PlayerListAccessor$1 {
        remove(arg0: $ServerPlayer): void;
        load(arg0: $ServerPlayer): ($CompoundTag) | undefined;
        op(arg0: $GameProfile): void;
        save(arg0: $ServerPlayer): void;
        removeAll(): void;
        broadcast(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $ResourceKey_<any>, arg6: $Packet<any>): void;
        tick(): void;
        addWorldborderListener(arg0: $ServerLevel): void;
        getPlayerNamesArray(): string[];
        getSingleplayerData(): $CompoundTag;
        getViewDistance(): number;
        isOp(arg0: $GameProfile): boolean;
        isAllowCommandsForAllPlayers(): boolean;
        sendActivePlayerEffects(arg0: $ServerPlayer): void;
        broadcastSystemMessage(arg0: $Component_, arg1: $Function_<$ServerPlayer, $Component>, arg2: boolean): void;
        broadcastSystemMessage(arg0: $Component_, arg1: boolean): void;
        broadcastSystemToTeam(arg0: $Player, arg1: $Component_): void;
        sendPlayerPermissionLevel(arg0: $ServerPlayer): void;
        getPlayerAdvancements(arg0: $ServerPlayer): $PlayerAdvancements;
        getOps(): $ServerOpList;
        getPlayerStats(arg0: $Player): $ServerStatsCounter;
        sendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel): void;
        sendAllPlayerInfo(arg0: $ServerPlayer): void;
        broadcastAll(arg0: $Packet<never>, arg1: $ResourceKey_<$Level>): void;
        broadcastAll(arg0: $Packet<never>): void;
        sendActiveEffects(arg0: $LivingEntity, arg1: $ServerGamePacketListenerImpl): void;
        getBans(): $UserBanList;
        reloadResources(): void;
        getPlayerCount(): number;
        getMaxPlayers(): number;
        getWhiteList(): $UserWhiteList;
        isWhiteListed(arg0: $GameProfile): boolean;
        getPlayers(): $List<$ServerPlayer>;
        saveAll(): void;
        getPlayer(arg0: $UUID_): $ServerPlayer;
        respawn(arg0: $ServerPlayer, arg1: boolean, arg2: $Entity$RemovalReason_): $ServerPlayer;
        deop(arg0: $GameProfile): void;
        getIpBans(): $IpBanList;
        getOpNames(): string[];
        getServer(): $MinecraftServer;
        getSimulationDistance(): number;
        getPlayerByName(arg0: string): $ServerPlayer;
        broadcastSystemToAllExceptTeam(arg0: $Player, arg1: $Component_): void;
        handler$zdn000$openpartiesandclaims$onSendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        setAllowCommandsForAllPlayers(arg0: boolean): void;
        setViewDistance(arg0: number): void;
        broadcastChatMessage(arg0: $PlayerChatMessage_, arg1: $CommandSourceStack, arg2: $ChatType$Bound_): void;
        broadcastChatMessage(arg0: $PlayerChatMessage_, arg1: $ServerPlayer, arg2: $ChatType$Bound_): void;
        setSimulationDistance(arg0: number): void;
        getWhiteListNames(): string[];
        setUsingWhiteList(arg0: boolean): void;
        reloadWhiteList(): void;
        placeNewPlayer(arg0: $Connection, arg1: $ServerPlayer, arg2: $CommonListenerCookie_): void;
        getPlayerForLogin(arg0: $GameProfile, arg1: $ClientInformation_): $ServerPlayer;
        canPlayerLogin(arg0: $SocketAddress, arg1: $GameProfile): $Component;
        isUsingWhitelist(): boolean;
        disconnectAllPlayersWithProfile(arg0: $GameProfile): boolean;
        updateEntireScoreboard(arg0: $ServerScoreboard, arg1: $ServerPlayer): void;
        canBypassPlayerLimit(arg0: $GameProfile): boolean;
        getPlayersWithAddress(arg0: string): $List<$ServerPlayer>;
        handler$djp000$xaerominimap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$ebo001$xaeroworldmap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$gan001$xaerolib$onSendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        setMaxPlayers(arg0: number): void;
        static WHITELIST_FILE: $File;
        maxPlayers: number;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(arg0: $MinecraftServer, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $PlayerDataStorage, arg3: number);
        get playerNamesArray(): string[];
        get singleplayerData(): $CompoundTag;
        get ops(): $ServerOpList;
        get bans(): $UserBanList;
        get playerCount(): number;
        get whiteList(): $UserWhiteList;
        get players(): $List<$ServerPlayer>;
        get ipBans(): $IpBanList;
        get opNames(): string[];
        get server(): $MinecraftServer;
        get whiteListNames(): string[];
        set usingWhiteList(value: boolean);
        get usingWhitelist(): boolean;
    }
    export class $StoredUserList<K, V extends $StoredUserEntry<K>> {
        remove(arg0: K): void;
        remove(arg0: $StoredUserEntry<K>): void;
        get(arg0: K): V;
        load(): void;
        isEmpty(): boolean;
        add(arg0: V): void;
        contains(arg0: K): boolean;
        save(): void;
        getFile(): $File;
        getEntries(): $Collection<V>;
        createEntry(arg0: $JsonObject_): $StoredUserEntry<K>;
        getKeyForUser(arg0: K): string;
        getUserList(): string[];
        constructor(arg0: $File_);
        get empty(): boolean;
        get file(): $File;
        get entries(): $Collection<V>;
        get userList(): string[];
    }
    export class $StoredUserEntry<T> {
        serialize(arg0: $JsonObject_): void;
        hasExpired(): boolean;
        getUser(): T;
        constructor(arg0: T);
        get user(): T;
    }
    export class $OldUsersConverter$ConversionError extends $RuntimeException {
    }
    export class $IpBanListEntry extends $BanListEntry<string> {
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(arg0: $JsonObject_);
        constructor(arg0: string, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
        constructor(arg0: string);
    }
}
