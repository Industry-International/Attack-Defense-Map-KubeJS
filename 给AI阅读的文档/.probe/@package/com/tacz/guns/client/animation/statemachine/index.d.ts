import { $AbstractGunAnimationStateContextExtension } from "@package/mod/chloeprime/gunsmithlib/client";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LuaNbtAccessor } from "@package/com/tacz/guns/api/util";
import { $GunsmithLibAnimationStateMachineScriptExtension } from "@package/mod/chloeprime/gunsmithlib/api/client/scripting_v2";
import { $Optional } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $AnimationStateContext } from "@package/com/tacz/guns/api/client/animation/statemachine";
import { $IGun } from "@package/com/tacz/guns/api/item";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $LuaValue, $LuaTable } from "@package/org/luaj/vm2";

declare module "@package/com/tacz/guns/client/animation/statemachine" {
    export class $GunAnimationStateContext extends $ItemAnimationStateContext implements $AbstractGunAnimationStateContextExtension {
        gunsmithlib$getGunItemInterface(): $IGun;
        gunsmith_getCooldownPercent(): number;
        gunsmith_getCooldownSeconds(): number;
        setCurrentGunItem(arg0: $ItemStack_): void;
        getShootCoolDown(): number;
        shouldSlide(): boolean;
        getLastShootTimestamp(): number;
        gunsmithlib$getSide(): $LogicalSide;
        gunsmithlib$getShooter(): $Optional<any>;
        getCurrentTimestamp(): number;
        gunsmithlib$getCurrentItem(): $ItemStack;
        getAttachment(arg0: string): string;
        hasBulletInBarrel(): boolean;
        getAimingProgress(): number;
        getMaxAmmoCount(): number;
        getMaxCharge(): number;
        hasAmmoToConsume(): boolean;
        gunsmith_getGunId(): string;
        getMagExtentLevel(): number;
        getReloadStateType(): number;
        getShootInterval(): number;
        getAmmoCount(): number;
        isCharging(): boolean;
        isOverHeat(): boolean;
        isInputUp(): boolean;
        getFireMode(): number;
        getStateMachineParams(): $LuaTable;
        adjustClientShootInterval(arg0: number): void;
        isCrawl(): boolean;
        isAiming(): boolean;
        isCrouching(): boolean;
        isInputRight(): boolean;
        anchorWalkDist(): void;
        getChargeThreshold(): number;
        getWalkDist(): number;
        isInputDown(): boolean;
        getHeatProgress(): number;
        isInputJumping(): boolean;
        getNbtAccessor(): $LuaNbtAccessor;
        popShellFrom(arg0: number): void;
        isInputLeft(): boolean;
        getChargeProgress(): number;
        isOnGround(): boolean;
        gunsmith_getEstimatedRange(arg0: number): number;
        gunsmith_getEstimatedRange(): number;
        /**
         * @deprecated
         */
        gunsmith_getChargingTime(): number;
        gunsmith_asyncRunDelayed(arg0: $LuaValue, arg1: number, ...arg2: $Object[]): void;
        gunsmith_asyncRunCycled(arg0: $LuaValue, arg1: number, arg2: number, ...arg3: $Object[]): void;
        gunsmith$getGunIdHelper(): string;
        gunsmithlib_extension(): $GunsmithLibAnimationStateMachineScriptExtension;
        constructor();
        set currentGunItem(value: $ItemStack_);
        get shootCoolDown(): number;
        get lastShootTimestamp(): number;
        get currentTimestamp(): number;
        get aimingProgress(): number;
        get maxAmmoCount(): number;
        get maxCharge(): number;
        get magExtentLevel(): number;
        get reloadStateType(): number;
        get shootInterval(): number;
        get ammoCount(): number;
        get charging(): boolean;
        get overHeat(): boolean;
        get inputUp(): boolean;
        get fireMode(): number;
        get stateMachineParams(): $LuaTable;
        get crawl(): boolean;
        get aiming(): boolean;
        get crouching(): boolean;
        get inputRight(): boolean;
        get chargeThreshold(): number;
        get walkDist(): number;
        get inputDown(): boolean;
        get heatProgress(): number;
        get inputJumping(): boolean;
        get nbtAccessor(): $LuaNbtAccessor;
        get inputLeft(): boolean;
        get chargeProgress(): number;
        get onGround(): boolean;
    }
    export class $ItemAnimationStateContext extends $AnimationStateContext {
        getPartialTicks(): number;
        setPartialTicks(arg0: number): void;
        setPutAwayTime(arg0: number): void;
        getPutAwayTime(): number;
        constructor();
    }
}
