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
        /**
         * @deprecated
         */
        static getMainhandFireMode(arg0: $LivingEntity): $FireMode;
        static getMainHandFireMode(arg0: $LivingEntity): $FireMode;
    }
    export interface $IGun {
        getLevel(arg0: $ItemStack_): number;
        getLevel(arg0: number): number;
        getMaxLevel(): number;
        getBuiltInAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        getAttachmentId(arg0: $ItemStack_, arg1: $AttachmentType_): $ResourceLocation;
        getAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_): $CompoundTag;
        getFireMode(arg0: $ItemStack_): $FireMode;
        getAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): $ItemStack;
        hasMaxDummyAmmo(arg0: $ItemStack_): boolean;
        lerpInaccuracy(arg0: $ItemStack_): number;
        getExpToNextLevel(arg0: $ItemStack_): number;
        setAttachmentLock(arg0: $ItemStack_, arg1: boolean): void;
        setAttachmentTag(arg0: $ItemStack_, arg1: $AttachmentType_, arg2: $CompoundTag_): void;
        setGunDisplayId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        allowAttachment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        hasAttachmentLock(arg0: $ItemStack_): boolean;
        getExpCurrentLevel(arg0: $ItemStack_): number;
        installAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getAimingZoom(arg0: $ItemStack_): number;
        unloadAttachment(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $AttachmentType_): void;
        setCurrentAmmoCount(arg0: $ItemStack_, arg1: number): void;
        getCurrentAmmoCount(arg0: $ItemStack_): number;
        getGunId(arg0: $ItemStack_): $ResourceLocation;
        hasHeatData(arg0: $ItemStack_): boolean;
        getLaserColor(arg0: $ItemStack_): number;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: string, arg5: $Class<T>, arg6: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $GunProperty_<never>, arg4: $Class<T>, arg5: T): T;
        modifyProperty<T>(arg0: $ShooterDataHolder, arg1: $ItemStack_, arg2: $LivingEntity, arg3: string, arg4: $Class<T>, arg5: T): T;
        setFireMode(arg0: $ItemStack_, arg1: $FireMode_): void;
        setHeatAmount(arg0: $ItemStack_, arg1: number): void;
        setOverheatLocked(arg0: $ItemStack_, arg1: boolean): void;
        useDummyAmmo(arg0: $ItemStack_): boolean;
        setGunId(arg0: $ItemStack_, arg1: $ResourceLocation_): void;
        lerpRPM(arg0: $ItemStack_): number;
        isCanCrawl(arg0: $ItemStack_): boolean;
        getDummyAmmoAmount(arg0: $ItemStack_): number;
        dropAllAmmo(arg0: $Player, arg1: $ItemStack_): void;
        setDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        addDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        hasBulletInBarrel(arg0: $ItemStack_): boolean;
        setBulletInBarrel(arg0: $ItemStack_, arg1: boolean): void;
        getGunDisplayId(arg0: $ItemStack_): $ResourceLocation;
        isOverheatLocked(arg0: $ItemStack_): boolean;
        reduceCurrentAmmoCount(arg0: $ItemStack_): void;
        hasInventoryAmmo(arg0: $LivingEntity, arg1: $ItemStack_, arg2: boolean): boolean;
        getHeatAmount(arg0: $ItemStack_): number;
        useInventoryAmmo(arg0: $ItemStack_): boolean;
        setLaserColor(arg0: $ItemStack_, arg1: number): void;
        getRPM(arg0: $ItemStack_): number;
        getExp(arg0: number): number;
        getExp(arg0: $ItemStack_): number;
        getMaxDummyAmmoAmount(arg0: $ItemStack_): number;
        allowAttachmentType(arg0: $ItemStack_, arg1: $AttachmentType_): boolean;
        hasCustomLaserColor(arg0: $ItemStack_): boolean;
        setMaxDummyAmmoAmount(arg0: $ItemStack_, arg1: number): void;
        getBuiltinAttachment(arg0: $ItemStack_, arg1: $AttachmentType_): $ItemStack;
        get maxLevel(): number;
    }
}
