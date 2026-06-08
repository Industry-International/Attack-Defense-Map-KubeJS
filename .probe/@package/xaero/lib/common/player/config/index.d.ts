
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        isUsingConfigProfilePermission(): boolean;
        getEnforcedConfigProfilePermission(): string;
        hasServerProfileEditPermission(): boolean;
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        constructor();
        get usingConfigProfilePermission(): boolean;
        get enforcedConfigProfilePermission(): string;
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedHasServerProfileEditPermission(value: boolean);
        set cachedEnforcedConfigProfilePermission(value: string);
    }
}
