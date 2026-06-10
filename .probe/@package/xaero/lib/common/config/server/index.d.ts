import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerConfigChangeListener } from "@package/xaero/lib/common/config/server/listener";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/server/sync";
export * as listener from "@package/xaero/lib/common/config/server/listener";

declare module "@package/xaero/lib/common/config/server" {
    export class $ServerConfigManager {
        getChannel(): $ConfigChannel;
        getRaw<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        setServer(arg0: $MinecraftServer): void;
        setChannel(arg0: $ConfigChannel): void;
        getServer(): $MinecraftServer;
        postLoad(): void;
        getDefaultEnforcedProfile(): $ConfigProfile;
        setDefaultEnforcedProfileId(arg0: string): void;
        usesDefaultEnforcedProfile(arg0: $ServerPlayerData): boolean;
        usesDefaultEnforcedProfile(arg0: $ServerPlayer): boolean;
        getPermissionBasedProfile(arg0: $ServerPlayerData): $ConfigProfile;
        getEffective<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        getRedirectorManager(): $OptionValueRedirectorManager;
        getChangeListener(): $ServerConfigChangeListener;
        getProfileManager(): $ConfigProfileManager;
        setChangeListener(arg0: $ServerConfigChangeListener): void;
        getPermissionBasedProfileId(arg0: $ServerPlayerData): string;
        hasServerProfileEditPermission(arg0: $ServerPlayerData): boolean;
        getEnforcedProfileForPlayer(arg0: $ServerPlayerData): $ConfigProfile;
        get defaultEnforcedProfile(): $ConfigProfile;
        set defaultEnforcedProfileId(value: string);
        get redirectorManager(): $OptionValueRedirectorManager;
        get profileManager(): $ConfigProfileManager;
    }
}
