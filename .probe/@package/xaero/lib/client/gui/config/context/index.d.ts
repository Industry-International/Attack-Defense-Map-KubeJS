import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getDropdownNarration(): $Component;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        isAutoDefaultProfile(): boolean;
        getScreenTitleFormat(): string;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        isAutoConfirm(): boolean;
        getSyncMessage(): $Component;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        isClientSide(): boolean;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        hasPermission(arg0: $ConfigChannel): boolean;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        get dropdownNarration(): $Component;
        get autoDefaultProfile(): boolean;
        get screenTitleFormat(): string;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
        get clientSide(): boolean;
    }
}
