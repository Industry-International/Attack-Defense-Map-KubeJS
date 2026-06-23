import { $Config } from "@package/xaero/lib/common/config";
import { $AbstractConfigPacket$OptionEntry } from "@package/xaero/lib/common/packet/config";
import { $ConfigOptionManager } from "@package/xaero/lib/common/config/option";
import { $ConfigProfileInfoPacket$Entry } from "@package/xaero/lib/common/packet/config/profile";
import { $CommonConfigChannelSynchronizer } from "@package/xaero/lib/common/config/sync";
import { $SingleConfigManager } from "@package/xaero/lib/common/config/single";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Iterable_ } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $SyncedConfigProfileInfoManager } from "@package/xaero/lib/client/config/sync/profile";
import { $ConfigProfile } from "@package/xaero/lib/common/config/profile";
export * as profile from "@package/xaero/lib/client/config/sync/profile";

declare module "@package/xaero/lib/client/config/sync" {
    export class $SyncedConfigManager extends $SingleConfigManager<$Config> {
        reset(): void;
        setSynchronizer(arg0: $ClientConfigChannelSynchronizer): void;
        resetEdit(): void;
        confirmChannelPresenceOnServer(): void;
        setDesiredEditedProfileId(arg0: string): void;
        setSyncingEditedProfile(arg0: boolean): void;
        receiveEditedProfile(arg0: $ConfigProfile): void;
        isSyncingEditedProfile(): boolean;
        isChannelPresentOnServer(): boolean;
        getDesiredEditedProfileId(): string;
        getProfileInfoManager(): $SyncedConfigProfileInfoManager;
        confirmEdit(arg0: $ConfigProfile): void;
        getEditedProfile(): $ConfigProfile;
        logger: $Logger;
        set synchronizer(value: $ClientConfigChannelSynchronizer);
        get channelPresentOnServer(): boolean;
        get profileInfoManager(): $SyncedConfigProfileInfoManager;
        get editedProfile(): $ConfigProfile;
    }
    export class $ClientConfigChannelSynchronizer extends $CommonConfigChannelSynchronizer {
        reset(): void;
        onDeleteConfigProfilePacket(arg0: string): void;
        changeDefaultEnforcedProfileId(arg0: string): void;
        deleteProfile(arg0: string): void;
        requestProfile(arg0: string): void;
        syncDirtyOptions(arg0: $ConfigProfile): void;
        createProfile(arg0: string, arg1: string, arg2: string): void;
        onEnforcedConfigPacket(arg0: boolean, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>): void;
        onConfigProfileInfoPacket(arg0: $List_<$ConfigProfileInfoPacket$Entry>, arg1: string, arg2: boolean): void;
        onEditProfilePacket(arg0: string, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>): void;
        logger: $Logger;
        constructor(arg0: $ConfigOptionManager, arg1: $SyncedConfigManager, arg2: $Logger);
    }
}
