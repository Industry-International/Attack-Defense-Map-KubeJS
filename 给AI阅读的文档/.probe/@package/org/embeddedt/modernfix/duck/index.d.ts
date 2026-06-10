export * as suspend_integrated_server_during_load from "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load";

declare module "@package/org/embeddedt/modernfix/duck" {
    export class $IProfilingServerFunctionManager {
    }
    export interface $IProfilingServerFunctionManager {
        mfix$getProfilingResults(): string;
    }
    /**
     * Values that may be interpreted as {@link $IProfilingServerFunctionManager}.
     */
    export type $IProfilingServerFunctionManager_ = (() => string);
    export class $IBlockState {
    }
    export interface $IBlockState {
        clearCache(): void;
        isCacheInvalid(): boolean;
        get cacheInvalid(): boolean;
    }
    export class $ITimeTrackingServer {
    }
    export interface $ITimeTrackingServer {
        mfix$getLastTickStartTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $ITimeTrackingServer}.
     */
    export type $ITimeTrackingServer_ = (() => number);
}
