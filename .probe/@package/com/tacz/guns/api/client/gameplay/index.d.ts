import { $LocalPlayerDataHolder } from "@package/com/tacz/guns/client/gameplay";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ShootResult } from "@package/com/tacz/guns/api/entity";

declare module "@package/com/tacz/guns/api/client/gameplay" {
    export class $IClientPlayerGunOperator {
        static fromLocalPlayer(arg0: $LocalPlayer): $IClientPlayerGunOperator;
    }
    export interface $IClientPlayerGunOperator {
        reload(): void;
        aim(arg0: boolean): void;
        draw(arg0: $ItemStack_): void;
        bolt(): void;
        melee(): void;
        shoot(): $ShootResult;
        isCrawl(): boolean;
        fireSelect(): void;
        crawl(arg0: boolean): void;
        isAim(): boolean;
        resetDraw(): void;
        isCharging(): boolean;
        inspect(): void;
        getClientShootCoolDown(): number;
        getClientAimingProgress(arg0: number): number;
        getDataHolder(): $LocalPlayerDataHolder;
        getChargeProgress(): number;
        isReadyToDraw(): boolean;
        chargeShoot(arg0: boolean): boolean;
        get charging(): boolean;
        get clientShootCoolDown(): number;
        get dataHolder(): $LocalPlayerDataHolder;
        get chargeProgress(): number;
        get readyToDraw(): boolean;
    }
}
