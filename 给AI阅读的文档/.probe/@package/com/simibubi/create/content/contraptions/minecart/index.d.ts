import { $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";

declare module "@package/com/simibubi/create/content/contraptions/minecart" {
    export class $TrainCargoManager extends $MountedStorageManager {
        getVersion(): number;
        getTicksSinceLastExchange(): number;
        resetIdleCargoTracker(): void;
        tickIdleCargoTracker(): void;
        constructor();
        get version(): number;
        get ticksSinceLastExchange(): number;
    }
}
