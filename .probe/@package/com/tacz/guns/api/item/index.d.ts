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
        static mainHandHoldGun(arg0: $LivingEntity): boolean;
        static getIGunOrNull(arg0: $ItemStack_): $IGun;
        /**
         * @deprecated
         */
        static getMainhandFireMode(arg0: $LivingEntity): $FireMode;
        static getMainHandFireMode(arg0: $LivingEntity): $FireMode;
        /**
         * @deprecated
         */
        static mainhandHoldGun(arg0: $LivingEntity): boolean;
    }
    export interface $IGun {
        getLevel(arg0: number): number;
        getLevel(arg0: $ItemStack_): number;
        getMaxLevel(): number;
        hasBulletInBarrel(arg0: $ItemStack_): boolean;
        dropAllAmmo(arg0: $Player, arg1: $ItemStack_): void;
        setDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        setBulletInBarrel(arg0: $ItemStack_, arg1: boolean): void;
        getDummyAmmoAmount(arg0: $ItemStack_): number;
        addDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: string, arg5: $Class<T>, arg6: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $GunProperty_<never>, arg4: $Class<T>, arg5: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: $Class<T>, arg5: T): T;
        getGunDisplayId(arg0: $ItemStack_): $ResourceLocation;
        getHeatAmount(arg0: $ItemStack_): number;
        hasInventoryAmmo(arg0: $LivingEntity, arg1: $ItemStack_, arg2: boolean): boolean;
        useInventoryAmmo(arg0: $ItemStack_): boolean;
        getAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): $ItemStack;
        setFireMode(arg0: $ItemStack_, arg1: $FireMode_): void;
        setHeatAmount(arg0: $ItemStack_, arg1: number): void;
        setGunId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        getExp(arg0: $ItemStack_): number;
        getExp(arg0: number): number;
        getRPM(arg0: $ItemStack_): number;
        hasHeatData(arg0: $ItemStack_): boolean;
        getFireMode(arg0: $ItemStack_): $FireMode;
        getBuiltInAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        getAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        getAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_): $CompoundTag;
        getGunId(arg0: $ItemStack_): $ResourceLocation;
        reduceCurrentAmmoCount(arg0: $ItemStack_): void;
        isOverheatLocked(arg0: $ItemStack_): boolean;
        setCurrentAmmoCount(arg0: $ItemStack_, arg1: number): void;
        getCurrentAmmoCount(arg0: $ItemStack_): number;
        getBuiltinAttachment(arg0: $ItemStack_, arg1: $AttachmentType_): $ItemStack;
        allowAttachmentType(arg0: $ItemStack_, arg1: $AttachmentType_): boolean;
        setMaxDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        getMaxDummyAmmoAmount(arg0: $ItemStack_): number;
        hasCustomLaserColor(arg0: $ItemStack_): boolean;
        isCanCrawl(arg0: $ItemStack_): boolean;
        lerpRPM(arg0: $ItemStack_): number;
        setOverheatLocked(arg0: $ItemStack_, arg1: boolean): void;
        useDummyAmmo(arg0: $ItemStack_): boolean;
        setLaserColor(arg0: $ItemStack_, arg1: number): void;
        setAttachmentLock(arg0: $ItemStack_, arg1: boolean): void;
        getExpCurrentLevel(arg0: $ItemStack_): number;
        hasMaxDummyAmmo(arg0: $ItemStack_): boolean;
        allowAttachment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        unloadAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): void;
        setGunDisplayId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        hasAttachmentLock(arg0: $ItemStack_): boolean;
        getAimingZoom(arg0: $ItemStack_): number;
        setAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_, arg2: $CompoundTag_): void;
        installAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getExpToNextLevel(arg0: $ItemStack_): number;
        lerpInaccuracy(arg0: $ItemStack_): number;
        getLaserColor(arg0: $ItemStack_): number;
        get maxLevel(): number;
    }
}
