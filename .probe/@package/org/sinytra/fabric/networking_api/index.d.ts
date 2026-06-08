
declare module "@package/org/sinytra/fabric/networking_api" {
    export class $NeoListenableNetworkHandler {
    }
    export interface $NeoListenableNetworkHandler {
        handleDisconnect(): void;
    }
    /**
     * Values that may be interpreted as {@link $NeoListenableNetworkHandler}.
     */
    export type $NeoListenableNetworkHandler_ = (() => void);
}
