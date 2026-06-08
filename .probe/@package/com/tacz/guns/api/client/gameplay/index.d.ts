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
        inspect(): void;
        getDataHolder(): $LocalPlayerDataHolder;
        melee(): void;
        bolt(): void;
        isAim(): boolean;
        shoot(): $ShootResult;
        isCrawl(): boolean;
        crawl(arg0: boolean): void;
        fireSelect(): void;
        getChargeProgress(): number;
        chargeShoot(arg0: boolean): boolean;
        isReadyToDraw(): boolean;
        getClientAimingProgress(arg0: number): number;
        getClientShootCoolDown(): number;
        resetDraw(): void;
        isCharging(): boolean;
        get dataHolder(): $LocalPlayerDataHolder;
        get chargeProgress(): number;
        get readyToDraw(): boolean;
        get clientShootCoolDown(): number;
        get charging(): boolean;
    }
}
