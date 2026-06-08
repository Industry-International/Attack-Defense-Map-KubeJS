
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        getEnforcedConfigProfilePermission(): string;
        hasServerProfileEditPermission(): boolean;
        isUsingConfigProfilePermission(): boolean;
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        constructor();
        get enforcedConfigProfilePermission(): string;
        get usingConfigProfilePermission(): boolean;
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedHasServerProfileEditPermission(value: boolean);
        set cachedEnforcedConfigProfilePermission(value: string);
    }
}
