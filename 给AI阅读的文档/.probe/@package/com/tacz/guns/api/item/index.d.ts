import { $ShooterDataHolder } from "@package/com/tacz/guns/entity/shooter";
import { $GunProperty_ } from "@package/com/tacz/guns/api";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $AttachmentType_, $AttachmentType } from "@package/com/tacz/guns/api/item/attachment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Class } from "@package/java/lang";
import { $FireMode_, $FireMode } from "@package/com/tacz/guns/api/item/gun";
export * as attachment from "@package/com/tacz/guns/api/item/attachment";
export * as gun from "@package/com/tacz/guns/api/item/gun";

declare module "@package/com/tacz/guns/api/item" {
    export class $IAttachment {
        static getIAttachmentOrNull(arg0: $ItemStack_ | null): $IAttachment;
    }
    export interface $IAttachment {
        getType(arg0: $ItemStack_): $AttachmentType;
        getLaserColor(arg0: $ItemStack_): number;
        getAttachmentId(arg0: $ItemStack_): $ResourceLocation;
        getZoomNumber(arg0: $ItemStack_): number;
        setZoomNumber(arg0: $ItemStack_, arg1: number): void;
        hasCustomLaserColor(arg0: $ItemStack_): boolean;
        setAttachmentId(arg0: $ItemStack_, arg1: $ResourceLocation_ | null): void;
        setLaserColor(arg0: $ItemStack_, arg1: number): void;
        /**
         * @deprecated
         */
        setSkinId(arg0: $ItemStack_, arg1: $ResourceLocation_ | null): void;
        /**
         * @deprecated
         */
        getSkinId(arg0: $ItemStack_): $ResourceLocation;
    }
    export class $IGun {
        static getIGunOrNull(arg0: $ItemStack_ | null): $IGun;
        static mainHandHoldGun(arg0: $LivingEntity): boolean;
        static getMainHandFireMode(arg0: $LivingEntity): $FireMode;
        /**
         * @deprecated
         */
        static getMainhandFireMode(arg0: $LivingEntity): $FireMode;
        /**
         * @deprecated
         */
        static mainhandHoldGun(arg0: $LivingEntity): boolean;
    }
    export interface $IGun {
        getLevel(arg0: number): number;
        getLevel(arg0: $ItemStack_): number;
        setGunId(arg0: $ItemStack_, arg1: $ResourceLocation_ | null): void;
        getMaxLevel(): number;
        hasHeatData(arg0: $ItemStack_): boolean;
        getLaserColor(arg0: $ItemStack_): number;
        getGunDisplayId(arg0: $ItemStack_): $ResourceLocation;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: string, arg5: $Class<T>, arg6: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: $Class<T>, arg5: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $GunProperty_<never>, arg4: $Class<T>, arg5: T): T;
        getAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        getAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_): $CompoundTag;
        getBuiltInAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        getGunId(arg0: $ItemStack_): $ResourceLocation;
        isCanCrawl(arg0: $ItemStack_): boolean;
        lerpRPM(arg0: $ItemStack_): number;
        addDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        setDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        reduceCurrentAmmoCount(arg0: $ItemStack_): void;
        getAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): $ItemStack;
        isOverheatLocked(arg0: $ItemStack_): boolean;
        hasBulletInBarrel(arg0: $ItemStack_): boolean;
        setBulletInBarrel(arg0: $ItemStack_, arg1: boolean): void;
        dropAllAmmo(arg0: $Player, arg1: $ItemStack_): void;
        getDummyAmmoAmount(arg0: $ItemStack_): number;
        getHeatAmount(arg0: $ItemStack_): number;
        useInventoryAmmo(arg0: $ItemStack_): boolean;
        hasInventoryAmmo(arg0: $LivingEntity, arg1: $ItemStack_, arg2: boolean): boolean;
        setCurrentAmmoCount(arg0: $ItemStack_, arg1: number): void;
        getCurrentAmmoCount(arg0: $ItemStack_): number;
        setFireMode(arg0: $ItemStack_, arg1: $FireMode_ | null): void;
        setHeatAmount(arg0: $ItemStack_, arg1: number): void;
        getFireMode(arg0: $ItemStack_): $FireMode;
        allowAttachmentType(arg0: $ItemStack_, arg1: $AttachmentType_): boolean;
        hasCustomLaserColor(arg0: $ItemStack_): boolean;
        setMaxDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        getMaxDummyAmmoAmount(arg0: $ItemStack_): number;
        getBuiltinAttachment(arg0: $ItemStack_, arg1: $AttachmentType_): $ItemStack;
        getExp(arg0: number): number;
        getExp(arg0: $ItemStack_): number;
        getRPM(arg0: $ItemStack_): number;
        useDummyAmmo(arg0: $ItemStack_): boolean;
        setOverheatLocked(arg0: $ItemStack_, arg1: boolean): void;
        setLaserColor(arg0: $ItemStack_, arg1: number): void;
        unloadAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): void;
        hasAttachmentLock(arg0: $ItemStack_): boolean;
        installAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $ItemStack_): void;
        allowAttachment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getExpCurrentLevel(arg0: $ItemStack_): number;
        hasMaxDummyAmmo(arg0: $ItemStack_): boolean;
        setGunDisplayId(arg0: $ItemStack_, arg1: $ResourceLocation_ | null): void;
        setAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_, arg2: $CompoundTag_): void;
        lerpInaccuracy(arg0: $ItemStack_): number;
        setAttachmentLock(arg0: $ItemStack_, arg1: boolean): void;
        getAimingZoom(arg0: $ItemStack_): number;
        getExpToNextLevel(arg0: $ItemStack_): number;
        get maxLevel(): number;
    }
}
