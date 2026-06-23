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
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        hasPermission(arg0: $ConfigChannel): boolean;
        isClientSide(): boolean;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getDropdownNarration(): $Component;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        isAutoDefaultProfile(): boolean;
        getScreenTitleFormat(): string;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        isAutoConfirm(): boolean;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        getSyncMessage(): $Component;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get clientSide(): boolean;
        get dropdownNarration(): $Component;
        get autoDefaultProfile(): boolean;
        get screenTitleFormat(): string;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
    }
}
