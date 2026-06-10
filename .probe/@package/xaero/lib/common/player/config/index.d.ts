
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        getEnforcedConfigProfilePermission(): string;
        isUsingConfigProfilePermission(): boolean;
        hasServerProfileEditPermission(): boolean;
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        constructor();
        get enforcedConfigProfilePermission(): string;
        get usingConfigProfilePermission(): boolean;
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedEnforcedConfigProfilePermission(value: string);
        set cachedHasServerProfileEditPermission(value: boolean);
    }
}
