import { $ShooterDataHolder } from "@package/com/tacz/guns/entity/shooter";
import { $Supplier_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $AttachmentCacheProperty } from "@package/com/tacz/guns/resource/modifier";

declare module "@package/com/tacz/guns/api/entity" {
    export class $ReloadState {
        getStateType(): $ReloadState$StateType;
        setStateType(arg0: $ReloadState$StateType_): void;
        setCountDown(arg0: number): void;
        getCountDown(): number;
        static NOT_RELOADING_COUNTDOWN: number;
        constructor();
        constructor(arg0: $ReloadState);
    }
    export class $ShootResult extends $Enum<$ShootResult> {
        static values(): $ShootResult[];
        static valueOf(arg0: string): $ShootResult;
        static NO_AMMO: $ShootResult;
        static NEED_BOLT: $ShootResult;
        static SUCCESS: $ShootResult;
        static COOL_DOWN: $ShootResult;
        static NOT_DRAW: $ShootResult;
        static IS_BOLTING: $ShootResult;
        static UNKNOWN_FAIL: $ShootResult;
        static IS_DRAWING: $ShootResult;
        static IS_MELEE: $ShootResult;
        static IS_SPRINTING: $ShootResult;
        static FORGE_EVENT_CANCEL: $ShootResult;
        static NOT_GUN: $ShootResult;
        static ID_NOT_EXIST: $ShootResult;
        static IS_RELOADING: $ShootResult;
        static OVERHEATED: $ShootResult;
        static NETWORK_FAIL: $ShootResult;
    }
    /**
     * Values that may be interpreted as {@link $ShootResult}.
     */
    export type $ShootResult_ = "success" | "unknown_fail" | "cool_down" | "no_ammo" | "not_draw" | "not_gun" | "id_not_exist" | "need_bolt" | "is_reloading" | "is_drawing" | "is_bolting" | "is_melee" | "is_sprinting" | "network_fail" | "forge_event_cancel" | "overheated";
    export class $ReloadState$StateType extends $Enum<$ReloadState$StateType> {
        static values(): $ReloadState$StateType[];
        static valueOf(arg0: string): $ReloadState$StateType;
        isReloading(): boolean;
        isReloadingTactical(): boolean;
        isReloadFinishing(): boolean;
        isReloadingEmpty(): boolean;
        static TACTICAL_RELOAD_FEEDING: $ReloadState$StateType;
        static TACTICAL_RELOAD_FINISHING: $ReloadState$StateType;
        static EMPTY_RELOAD_FEEDING: $ReloadState$StateType;
        static EMPTY_RELOAD_FINISHING: $ReloadState$StateType;
        static NOT_RELOADING: $ReloadState$StateType;
        get reloading(): boolean;
        get reloadingTactical(): boolean;
        get reloadFinishing(): boolean;
        get reloadingEmpty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ReloadState$StateType}.
     */
    export type $ReloadState$StateType_ = "not_reloading" | "empty_reload_feeding" | "empty_reload_finishing" | "tactical_reload_feeding" | "tactical_reload_finishing";
    export class $IGunOperator {
        static fromLivingEntity(arg0: $LivingEntity): $IGunOperator;
    }
    export interface $IGunOperator {
        reload(): void;
        aim(arg0: boolean): void;
        draw(arg0: $Supplier_<$ItemStack>): void;
        getCacheProperty(): $AttachmentCacheProperty;
        getDataHolder(): $ShooterDataHolder;
        nextBulletIsTracer(arg0: number): boolean;
        consumesAmmoOrNot(): boolean;
        cancelReload(): void;
        getSynIsAiming(): boolean;
        getSynReloadState(): $ReloadState;
        initialData(): void;
        getSynSprintTime(): number;
        needCheckAmmo(): boolean;
        getSynDrawCoolDown(): number;
        getSynIsBolting(): boolean;
        getSynShootCoolDown(): number;
        getSynMeleeCoolDown(): number;
        getSynAimingProgress(): number;
        getProcessedSprintStatus(arg0: boolean): boolean;
        updateCacheProperty(arg0: $AttachmentCacheProperty): void;
        crawl(arg0: boolean): void;
        bolt(): void;
        fireSelect(): void;
        shoot(arg0: $Supplier_<number>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ShootResult;
        shoot(arg0: $Supplier_<number>, arg1: $Supplier_<number>): $ShootResult;
        shoot(arg0: $Supplier_<number>, arg1: $Supplier_<number>, arg2: number): $ShootResult;
        melee(): void;
        zoom(): void;
        get cacheProperty(): $AttachmentCacheProperty;
        get dataHolder(): $ShooterDataHolder;
        get synIsAiming(): boolean;
        get synReloadState(): $ReloadState;
        get synSprintTime(): number;
        get synDrawCoolDown(): number;
        get synIsBolting(): boolean;
        get synShootCoolDown(): number;
        get synMeleeCoolDown(): number;
        get synAimingProgress(): number;
    }
    export class $KnockBackModifier {
        static fromLivingEntity(arg0: $LivingEntity): $KnockBackModifier;
    }
    export interface $KnockBackModifier {
        setKnockBackStrength(arg0: number): void;
        resetKnockBackStrength(): void;
        getKnockBackStrength(): number;
    }
}
