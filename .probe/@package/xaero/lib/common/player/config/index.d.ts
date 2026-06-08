
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        isUsingConfigProfilePermission(): boolean;
        hasServerProfileEditPermission(): boolean;
        getEnforcedConfigProfilePermission(): string;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        constructor();
        get usingConfigProfilePermission(): boolean;
        get enforcedConfigProfilePermission(): string;
        set cachedEnforcedConfigProfilePermission(value: string);
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedHasServerProfileEditPermission(value: boolean);
    }
}
