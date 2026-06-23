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
        getClientAimingProgress(arg0: number): number;
        getClientShootCoolDown(): number;
        draw(arg0: $ItemStack_): void;
        getDataHolder(): $LocalPlayerDataHolder;
        inspect(): void;
        isCharging(): boolean;
        resetDraw(): void;
        crawl(arg0: boolean): void;
        bolt(): void;
        isCrawl(): boolean;
        fireSelect(): void;
        isAim(): boolean;
        shoot(): $ShootResult;
        melee(): void;
        chargeShoot(arg0: boolean): boolean;
        isReadyToDraw(): boolean;
        getChargeProgress(): number;
        get clientShootCoolDown(): number;
        get dataHolder(): $LocalPlayerDataHolder;
        get charging(): boolean;
        get readyToDraw(): boolean;
        get chargeProgress(): number;
    }
}
