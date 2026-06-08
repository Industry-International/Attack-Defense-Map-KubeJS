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
        hasPermission(arg0: $ConfigChannel): boolean;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        isClientSide(): boolean;
        isAutoConfirm(): boolean;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        getSyncMessage(): $Component;
        getDropdownNarration(): $Component;
        getScreenTitleFormat(): string;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        isAutoDefaultProfile(): boolean;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get clientSide(): boolean;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
        get dropdownNarration(): $Component;
        get screenTitleFormat(): string;
        get autoDefaultProfile(): boolean;
    }
}
