import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $SingleConfigManager } from "@package/xaero/lib/common/config/single";
import { $ClientOptionValueRedirectorManager } from "@package/xaero/lib/client/config/option/value/redirect";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
import { $ClientConfigChangeListener } from "@package/xaero/lib/client/config/listener";
import { $SyncedConfigManager } from "@package/xaero/lib/client/config/sync";
export * as sync from "@package/xaero/lib/client/config/sync";
export * as option from "@package/xaero/lib/client/config/option";
export * as listener from "@package/xaero/lib/client/config/listener";
export * as channel from "@package/xaero/lib/client/config/channel";

declare module "@package/xaero/lib/client/config" {
    export class $ClientConfigManager {
        getChannel(): $ConfigChannel;
        getRaw<T>(arg0: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getCurrentProfile(): $ConfigProfile;
        setChannel(arg0: $ConfigChannel): void;
        postLoad(): void;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigOption<T>): boolean;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): boolean;
        getServerSynced(): $SyncedConfigManager;
        getPrimaryConfigManager(): $SingleConfigManager<$Config>;
        getEffective<T>(arg0: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getRedirectorManager(): $ClientOptionValueRedirectorManager;
        getChangeListener(): $ClientConfigChangeListener;
        getProfileManager(): $ConfigProfileManager;
        get currentProfile(): $ConfigProfile;
        get serverSynced(): $SyncedConfigManager;
        get primaryConfigManager(): $SingleConfigManager<$Config>;
        get redirectorManager(): $ClientOptionValueRedirectorManager;
        get changeListener(): $ClientConfigChangeListener;
        get profileManager(): $ConfigProfileManager;
    }
}
