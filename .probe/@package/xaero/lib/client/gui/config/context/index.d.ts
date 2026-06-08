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
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        isClientSide(): boolean;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        hasPermission(arg0: $ConfigChannel): boolean;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        getDropdownNarration(): $Component;
        isAutoDefaultProfile(): boolean;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getScreenTitleFormat(): string;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        isAutoConfirm(): boolean;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getSyncMessage(): $Component;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get clientSide(): boolean;
        get dropdownNarration(): $Component;
        get autoDefaultProfile(): boolean;
        get screenTitleFormat(): string;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
    }
}
