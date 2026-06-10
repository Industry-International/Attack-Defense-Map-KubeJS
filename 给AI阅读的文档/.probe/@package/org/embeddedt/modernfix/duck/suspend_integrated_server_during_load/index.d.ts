import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load" {
    export class $IDeferrableIntegratedServer {
        static CLIENT_LOAD_SENTINEL: $ResourceLocation;
    }
    export interface $IDeferrableIntegratedServer {
        mfix$markClientLoadFinished(): void;
    }
    /**
     * Values that may be interpreted as {@link $IDeferrableIntegratedServer}.
     */
    export type $IDeferrableIntegratedServer_ = (() => void);
}
