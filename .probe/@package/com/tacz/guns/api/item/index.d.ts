import { $ShooterDataHolder } from "@package/com/tacz/guns/entity/shooter";
import { $GunProperty_ } from "@package/com/tacz/guns/api";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $AttachmentType_ } from "@package/com/tacz/guns/api/item/attachment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Class } from "@package/java/lang";
import { $FireMode_, $FireMode } from "@package/com/tacz/guns/api/item/gun";
export * as attachment from "@package/com/tacz/guns/api/item/attachment";
export * as gun from "@package/com/tacz/guns/api/item/gun";

declare module "@package/com/tacz/guns/api/item" {
    export class $IGun {
        static getIGunOrNull(arg0: $ItemStack_): $IGun;
        static mainHandHoldGun(arg0: $LivingEntity): boolean;
        /**
         * @deprecated
         */
        static mainhandHoldGun(arg0: $LivingEntity): boolean;
        static getMainHandFireMode(arg0: $LivingEntity): $FireMode;
        /**
         * @deprecated
         */
        static getMainhandFireMode(arg0: $LivingEntity): $FireMode;
    }
    export interface $IGun {
        getLevel(arg0: number): number;
        getLevel(arg0: $ItemStack_): number;
        getMaxLevel(): number;
        getLaserColor(arg0: $ItemStack_): number;
        getCurrentAmmoCount(arg0: $ItemStack_): number;
        setCurrentAmmoCount(arg0: $ItemStack_, arg1: number): void;
        lerpRPM(arg0: $ItemStack_): number;
        isCanCrawl(arg0: $ItemStack_): boolean;
        setBulletInBarrel(arg0: $ItemStack_, arg1: boolean): void;
        dropAllAmmo(arg0: $Player, arg1: $ItemStack_): void;
        getDummyAmmoAmount(arg0: $ItemStack_): number;
        setDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        addDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        hasBulletInBarrel(arg0: $ItemStack_): boolean;
        getFireMode(arg0: $ItemStack_): $FireMode;
        useDummyAmmo(arg0: $ItemStack_): boolean;
        setOverheatLocked(arg0: $ItemStack_, arg1: boolean): void;
        getAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): $ItemStack;
        hasMaxDummyAmmo(arg0: $ItemStack_): boolean;
        allowAttachment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        unloadAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): void;
        getExpToNextLevel(arg0: $ItemStack_): number;
        hasAttachmentLock(arg0: $ItemStack_): boolean;
        setAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_, arg2: $CompoundTag_): void;
        setGunDisplayId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        lerpInaccuracy(arg0: $ItemStack_): number;
        setAttachmentLock(arg0: $ItemStack_, arg1: boolean): void;
        getAimingZoom(arg0: $ItemStack_): number;
        getExpCurrentLevel(arg0: $ItemStack_): number;
        installAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $ItemStack_): void;
        isOverheatLocked(arg0: $ItemStack_): boolean;
        setHeatAmount(arg0: $ItemStack_, arg1: number): void;
        setFireMode(arg0: $ItemStack_, arg1: $FireMode_): void;
        getGunId(arg0: $ItemStack_): $ResourceLocation;
        setGunId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: string, arg5: $Class<T>, arg6: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: $Class<T>, arg5: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $GunProperty_<never>, arg4: $Class<T>, arg5: T): T;
        hasHeatData(arg0: $ItemStack_): boolean;
        reduceCurrentAmmoCount(arg0: $ItemStack_): void;
        getExp(arg0: number): number;
        getExp(arg0: $ItemStack_): number;
        getRPM(arg0: $ItemStack_): number;
        getMaxDummyAmmoAmount(arg0: $ItemStack_): number;
        allowAttachmentType(arg0: $ItemStack_, arg1: $AttachmentType_): boolean;
        getBuiltinAttachment(arg0: $ItemStack_, arg1: $AttachmentType_): $ItemStack;
        setMaxDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        hasCustomLaserColor(arg0: $ItemStack_): boolean;
        hasInventoryAmmo(arg0: $LivingEntity, arg1: $ItemStack_, arg2: boolean): boolean;
        getHeatAmount(arg0: $ItemStack_): number;
        useInventoryAmmo(arg0: $ItemStack_): boolean;
        getAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_): $CompoundTag;
        getAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        getGunDisplayId(arg0: $ItemStack_): $ResourceLocation;
        getBuiltInAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        setLaserColor(arg0: $ItemStack_, arg1: number): void;
        get maxLevel(): number;
    }
}
