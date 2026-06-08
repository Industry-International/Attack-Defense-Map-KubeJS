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
        isReadyToDraw(): boolean;
        draw(arg0: $ItemStack_): void;
        getDataHolder(): $LocalPlayerDataHolder;
        getClientAimingProgress(arg0: number): number;
        getClientShootCoolDown(): number;
        isCrawl(): boolean;
        fireSelect(): void;
        isAim(): boolean;
        bolt(): void;
        crawl(arg0: boolean): void;
        melee(): void;
        shoot(): $ShootResult;
        inspect(): void;
        resetDraw(): void;
        get readyToDraw(): boolean;
        get dataHolder(): $LocalPlayerDataHolder;
        get clientShootCoolDown(): number;
    }
}
