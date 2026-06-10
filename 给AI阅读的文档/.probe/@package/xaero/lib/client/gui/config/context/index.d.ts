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
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getSyncMessage(): $Component;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        isAutoConfirm(): boolean;
        hasPermission(arg0: $ConfigChannel): boolean;
        isClientSide(): boolean;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        getScreenTitleFormat(): string;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        isAutoDefaultProfile(): boolean;
        getDropdownNarration(): $Component;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        get syncMessage(): $Component;
        get autoConfirm(): boolean;
        get clientSide(): boolean;
        get screenTitleFormat(): string;
        get autoDefaultProfile(): boolean;
        get dropdownNarration(): $Component;
    }
}
