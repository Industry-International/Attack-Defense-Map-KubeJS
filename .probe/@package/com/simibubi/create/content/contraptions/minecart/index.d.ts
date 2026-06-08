import { $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";

declare module "@package/com/simibubi/create/content/contraptions/minecart" {
    export class $TrainCargoManager extends $MountedStorageManager {
        getVersion(): number;
        resetIdleCargoTracker(): void;
        tickIdleCargoTracker(): void;
        getTicksSinceLastExchange(): number;
        constructor();
        get version(): number;
        get ticksSinceLastExchange(): number;
    }
}
