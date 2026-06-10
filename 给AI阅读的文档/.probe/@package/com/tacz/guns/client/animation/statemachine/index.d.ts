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
        isCrawl(): boolean;
        isAiming(): boolean;
        isCharging(): boolean;
        isOverHeat(): boolean;
        isInputUp(): boolean;
        getShootInterval(): number;
        getAttachment(arg0: string): string;
        getFireMode(): number;
        hasBulletInBarrel(): boolean;
        getReloadStateType(): number;
        getMagExtentLevel(): number;
        getAimingProgress(): number;
        getMaxCharge(): number;
        gunsmith_getGunId(): string;
        hasAmmoToConsume(): boolean;
        getMaxAmmoCount(): number;
        isInputLeft(): boolean;
        isInputJumping(): boolean;
        anchorWalkDist(): void;
        getChargeThreshold(): number;
        isInputRight(): boolean;
        popShellFrom(arg0: number): void;
        getWalkDist(): number;
        getHeatProgress(): number;
        isInputDown(): boolean;
        getNbtAccessor(): $LuaNbtAccessor;
        gunsmith_getCooldownPercent(): number;
        gunsmith_getCooldownSeconds(): number;
        gunsmithlib$getGunItemInterface(): $IGun;
        isCrouching(): boolean;
        getShootCoolDown(): number;
        shouldSlide(): boolean;
        setCurrentGunItem(arg0: $ItemStack_): void;
        isOnGround(): boolean;
        getChargeProgress(): number;
        getAmmoCount(): number;
        gunsmithlib_extension(): $GunsmithLibAnimationStateMachineScriptExtension;
        adjustClientShootInterval(arg0: number): void;
        getStateMachineParams(): $LuaTable;
        getLastShootTimestamp(): number;
        gunsmithlib$getShooter(): $Optional<any>;
        gunsmithlib$getCurrentItem(): $ItemStack;
        getCurrentTimestamp(): number;
        gunsmithlib$getSide(): $LogicalSide;
        gunsmith_asyncRunCycled(arg0: $LuaValue, arg1: number, arg2: number, ...arg3: $Object[]): void;
        gunsmith_asyncRunDelayed(arg0: $LuaValue, arg1: number, ...arg2: $Object[]): void;
        /**
         * @deprecated
         */
        gunsmith_getChargingTime(): number;
        gunsmith_getEstimatedRange(arg0: number): number;
        gunsmith_getEstimatedRange(): number;
        gunsmith$getGunIdHelper(): string;
        constructor();
        get crawl(): boolean;
        get aiming(): boolean;
        get charging(): boolean;
        get overHeat(): boolean;
        get inputUp(): boolean;
        get shootInterval(): number;
        get fireMode(): number;
        get reloadStateType(): number;
        get magExtentLevel(): number;
        get aimingProgress(): number;
        get maxCharge(): number;
        get maxAmmoCount(): number;
        get inputLeft(): boolean;
        get inputJumping(): boolean;
        get chargeThreshold(): number;
        get inputRight(): boolean;
        get walkDist(): number;
        get heatProgress(): number;
        get inputDown(): boolean;
        get nbtAccessor(): $LuaNbtAccessor;
        get crouching(): boolean;
        get shootCoolDown(): number;
        set currentGunItem(value: $ItemStack_);
        get onGround(): boolean;
        get chargeProgress(): number;
        get ammoCount(): number;
        get stateMachineParams(): $LuaTable;
        get lastShootTimestamp(): number;
        get currentTimestamp(): number;
    }
    export class $ItemAnimationStateContext extends $AnimationStateContext {
        getPutAwayTime(): number;
        getPartialTicks(): number;
        setPartialTicks(arg0: number): void;
        setPutAwayTime(arg0: number): void;
        constructor();
    }
}
