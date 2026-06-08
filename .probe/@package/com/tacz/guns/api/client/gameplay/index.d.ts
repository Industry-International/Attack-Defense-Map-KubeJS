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
        isAim(): boolean;
        isCrawl(): boolean;
        shoot(): $ShootResult;
        crawl(arg0: boolean): void;
        fireSelect(): void;
        melee(): void;
        bolt(): void;
        isCharging(): boolean;
        resetDraw(): void;
        getClientShootCoolDown(): number;
        getClientAimingProgress(arg0: number): number;
        chargeShoot(arg0: boolean): boolean;
        isReadyToDraw(): boolean;
        getChargeProgress(): number;
        get dataHolder(): $LocalPlayerDataHolder;
        get charging(): boolean;
        get clientShootCoolDown(): number;
        get readyToDraw(): boolean;
        get chargeProgress(): number;
    }
}
