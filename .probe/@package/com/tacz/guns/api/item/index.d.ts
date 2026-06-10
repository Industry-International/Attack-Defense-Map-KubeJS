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
        static getIAttachmentOrNull(arg0: $ItemStack_): $IAttachment;
    }
    export interface $IAttachment {
        getType(arg0: $ItemStack_): $AttachmentType;
        setLaserColor(arg0: $ItemStack_, arg1: number): void;
        setAttachmentId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        getLaserColor(arg0: $ItemStack_): number;
        getAttachmentId(arg0: $ItemStack_): $ResourceLocation;
        getZoomNumber(arg0: $ItemStack_): number;
        setZoomNumber(arg0: $ItemStack_, arg1: number): void;
        /**
         * @deprecated
         */
        getSkinId(arg0: $ItemStack_): $ResourceLocation;
        /**
         * @deprecated
         */
        setSkinId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        hasCustomLaserColor(arg0: $ItemStack_): boolean;
    }
    export class $IGun {
        static mainHandHoldGun(arg0: $LivingEntity): boolean;
        static getIGunOrNull(arg0: $ItemStack_): $IGun;
        /**
         * @deprecated
         */
        static mainhandHoldGun(arg0: $LivingEntity): boolean;
        /**
         * @deprecated
         */
        static getMainhandFireMode(arg0: $LivingEntity): $FireMode;
        static getMainHandFireMode(arg0: $LivingEntity): $FireMode;
    }
    export interface $IGun {
        getLevel(arg0: number): number;
        getLevel(arg0: $ItemStack_): number;
        getMaxLevel(): number;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: string, arg5: $Class<T>, arg6: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: $Class<T>, arg5: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $GunProperty_<never>, arg4: $Class<T>, arg5: T): T;
        getBuiltInAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        setCurrentAmmoCount(arg0: $ItemStack_, arg1: number): void;
        getCurrentAmmoCount(arg0: $ItemStack_): number;
        setLaserColor(arg0: $ItemStack_, arg1: number): void;
        hasHeatData(arg0: $ItemStack_): boolean;
        setGunId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        getGunId(arg0: $ItemStack_): $ResourceLocation;
        setFireMode(arg0: $ItemStack_, arg1: $FireMode_): void;
        setHeatAmount(arg0: $ItemStack_, arg1: number): void;
        setOverheatLocked(arg0: $ItemStack_, arg1: boolean): void;
        useDummyAmmo(arg0: $ItemStack_): boolean;
        getAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): $ItemStack;
        getFireMode(arg0: $ItemStack_): $FireMode;
        getDummyAmmoAmount(arg0: $ItemStack_): number;
        setDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        addDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        hasBulletInBarrel(arg0: $ItemStack_): boolean;
        setBulletInBarrel(arg0: $ItemStack_, arg1: boolean): void;
        dropAllAmmo(arg0: $Player, arg1: $ItemStack_): void;
        isOverheatLocked(arg0: $ItemStack_): boolean;
        getHeatAmount(arg0: $ItemStack_): number;
        hasInventoryAmmo(arg0: $LivingEntity, arg1: $ItemStack_, arg2: boolean): boolean;
        useInventoryAmmo(arg0: $ItemStack_): boolean;
        getGunDisplayId(arg0: $ItemStack_): $ResourceLocation;
        lerpRPM(arg0: $ItemStack_): number;
        isCanCrawl(arg0: $ItemStack_): boolean;
        getLaserColor(arg0: $ItemStack_): number;
        getAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_): $CompoundTag;
        getAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        reduceCurrentAmmoCount(arg0: $ItemStack_): void;
        hasMaxDummyAmmo(arg0: $ItemStack_): boolean;
        setGunDisplayId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        getExpCurrentLevel(arg0: $ItemStack_): number;
        setAttachmentLock(arg0: $ItemStack_, arg1: boolean): void;
        installAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $ItemStack_): void;
        setAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_, arg2: $CompoundTag_): void;
        unloadAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): void;
        hasAttachmentLock(arg0: $ItemStack_): boolean;
        getExpToNextLevel(arg0: $ItemStack_): number;
        allowAttachment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getAimingZoom(arg0: $ItemStack_): number;
        lerpInaccuracy(arg0: $ItemStack_): number;
        getExp(arg0: number): number;
        getExp(arg0: $ItemStack_): number;
        getRPM(arg0: $ItemStack_): number;
        getMaxDummyAmmoAmount(arg0: $ItemStack_): number;
        allowAttachmentType(arg0: $ItemStack_, arg1: $AttachmentType_): boolean;
        setMaxDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        hasCustomLaserColor(arg0: $ItemStack_): boolean;
        getBuiltinAttachment(arg0: $ItemStack_, arg1: $AttachmentType_): $ItemStack;
        get maxLevel(): number;
    }
}
