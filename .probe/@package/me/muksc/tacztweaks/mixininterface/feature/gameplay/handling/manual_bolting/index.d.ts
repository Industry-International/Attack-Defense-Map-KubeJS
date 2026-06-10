import { $LocalPlayerDataHolder } from "@package/com/tacz/guns/client/gameplay";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/gameplay/handling/manual_bolting" {
    export class $ManualBoltingData {
        static of(arg0: $LocalPlayerDataHolder): $ManualBoltingData;
    }
    export interface $ManualBoltingData {
        tacztweaks$setBoltBeforeReload(arg0: boolean): void;
        tacztweaks$getBoltBeforeReload(): boolean;
    }
}
