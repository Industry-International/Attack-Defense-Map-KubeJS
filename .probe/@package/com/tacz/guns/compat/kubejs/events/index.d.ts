import { $Level } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $GunMeleeEvent, $GunDamageSourcePart_, $GunFireSelectEvent, $EntityHurtByGunEvent$Post, $GunDrawEvent, $GunReloadEvent, $GunFireEvent, $EntityHurtByGunEvent$Pre, $GunFinishReloadEvent, $EntityHurtByGunEvent, $EntityKillByGunEvent, $GunShootEvent, $AttachmentPropertyEvent } from "@package/com/tacz/guns/api/event/common";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLevelBobEvent$BobView, $SwapItemWithOffHand, $RenderItemInHandBobEvent$BobView, $RenderItemInHandBobEvent$BobHurt, $BeforeRenderHandEvent, $RenderLevelBobEvent$BobHurt } from "@package/com/tacz/guns/api/client/event";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityKineticBullet } from "@package/com/tacz/guns/entity";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $AmmoHitBlockEvent } from "@package/com/tacz/guns/api/event/server";
import { $Object } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $AttachmentCacheProperty } from "@package/com/tacz/guns/resource/modifier";

declare module "@package/com/tacz/guns/compat/kubejs/events" {
    export class $GunKubeJSEvents$GunFireSelectEventJS extends $GunKubeJSEvents$GunEventJS<$GunFireSelectEvent> implements $TimelessForgeEventWrappers$GunFireSelectWrapper {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        constructor(arg0: $GunFireSelectEvent);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
    }
    export interface $TimelessForgeEventWrappers$AttachmentPropertyWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$AttachmentPropertyEvent> {
        getCacheProperty(): $AttachmentCacheProperty;
        getGunItem(): $ItemStack;
        get cacheProperty(): $AttachmentCacheProperty;
        get gunItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$AttachmentPropertyWrapper}.
     */
    export type $TimelessForgeEventWrappers$AttachmentPropertyWrapper_ = (() => void);
    export class $GunKubeJSEvents$AttachmentPropertyEventJS extends $GunKubeJSEvents$GunEventJS<$AttachmentPropertyEvent> implements $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
        getCacheProperty(): $AttachmentCacheProperty;
        getGunItem(): $ItemStack;
        constructor(arg0: $AttachmentPropertyEvent);
        get cacheProperty(): $AttachmentCacheProperty;
        get gunItem(): $ItemStack;
    }
    export class $GunKubeJSEvents$BeforeRenderHandEventJS extends $GunKubeJSEvents$GunEventJS<$BeforeRenderHandEvent> implements $TimelessForgeEventWrappers$BeforeRenderHandWrapper {
        getPoseStack(): $PoseStack;
        constructor(arg0: $BeforeRenderHandEvent);
        get poseStack(): $PoseStack;
    }
    export class $TimelessForgeEventWrappers$EntityHurtByGunWrapper<E extends $EntityHurtByGunEvent> {
    }
    export interface $TimelessForgeEventWrappers$EntityHurtByGunWrapper<E extends $EntityHurtByGunEvent> extends $TimelessForgeEventWrappers$ForgeEventWrapper<E> {
        isHeadShot(): boolean;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getBullet(): $Entity;
        getGunId(): $ResourceLocation;
        getBaseAmount(): number;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getHurtEntity(): $Entity;
        getHeadshotMultiplier(): number;
        get headShot(): boolean;
        get bullet(): $Entity;
        get gunId(): $ResourceLocation;
        get baseAmount(): number;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get hurtEntity(): $Entity;
        get headshotMultiplier(): number;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$EntityHurtByGunWrapper}.
     */
    export type $TimelessForgeEventWrappers$EntityHurtByGunWrapper_<E> = (() => void);
    export class $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
    }
    export interface $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper extends $TimelessForgeEventWrappers$EntityHurtByGunWrapper<$EntityHurtByGunEvent$Pre> {
        setGunId(arg0: $ResourceLocation_): void;
        setBaseAmount(arg0: number): void;
        setAttacker(arg0: $LivingEntity): void;
        setHurtEntity(arg0: $Entity): void;
        setDamageSource(arg0: $GunDamageSourcePart_, arg1: $DamageSource_): void;
        setHeadshot(arg0: boolean): void;
        setHeadshotMultiplier(arg0: number): void;
        set gunId(value: $ResourceLocation_);
        set baseAmount(value: number);
        set attacker(value: $LivingEntity);
        set hurtEntity(value: $Entity);
        set headshot(value: boolean);
        set headshotMultiplier(value: number);
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper}.
     */
    export type $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$GunFireSelectWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunFireSelectWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFireSelectEvent> {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunFireSelectWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunFireSelectWrapper_ = (() => void);
    export class $GunKubeJSEvents$EntityHurtByGunPreEventJS extends $GunKubeJSEvents$GunEventJS<$EntityHurtByGunEvent$Pre> implements $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
        setGunId(arg0: $ResourceLocation_): void;
        setBaseAmount(arg0: number): void;
        setAttacker(arg0: $LivingEntity): void;
        setHurtEntity(arg0: $Entity): void;
        setDamageSource(arg0: $GunDamageSourcePart_, arg1: $DamageSource_): void;
        setHeadshot(arg0: boolean): void;
        setHeadshotMultiplier(arg0: number): void;
        isHeadShot(): boolean;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getBullet(): $Entity;
        getGunId(): $ResourceLocation;
        getBaseAmount(): number;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getHurtEntity(): $Entity;
        getHeadshotMultiplier(): number;
        constructor(arg0: $EntityHurtByGunEvent$Pre);
        set headshot(value: boolean);
        get headShot(): boolean;
        get bullet(): $Entity;
        get logicalSide(): $LogicalSide;
    }
    export class $GunKubeJSEvents$GunDrawEventJS extends $GunKubeJSEvents$GunEventJS<$GunDrawEvent> implements $TimelessForgeEventWrappers$GunDrawWrapper {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getPreviousGunItem(): $ItemStack;
        getCurrentGunItem(): $ItemStack;
        constructor(arg0: $GunDrawEvent);
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get previousGunItem(): $ItemStack;
        get currentGunItem(): $ItemStack;
    }
    export class $TimelessForgeEventWrappers$GunMeleeWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunMeleeWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunMeleeEvent> {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunMeleeWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunMeleeWrapper_ = (() => void);
    export class $GunKubeJSEvents$EntityKillByGunEventJS extends $GunKubeJSEvents$GunEventJS<$EntityKillByGunEvent> implements $TimelessForgeEventWrappers$EntityKillByGunWrapper {
        isHeadShot(): boolean;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getBullet(): $Entity;
        getGunId(): $ResourceLocation;
        getBaseDamage(): number;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getGunDisplayId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getKilledEntity(): $LivingEntity;
        constructor(arg0: $EntityKillByGunEvent);
        get headShot(): boolean;
        get bullet(): $Entity;
        get gunId(): $ResourceLocation;
        get baseDamage(): number;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get gunDisplayId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get killedEntity(): $LivingEntity;
    }
    export class $TimelessForgeEventWrappers$GunReloadWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunReloadEvent> {
        getEntity(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        get entity(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunReloadWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunReloadWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$GunFireWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunFireWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFireEvent> {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunFireWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunFireWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$GunFinishReloadWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunFinishReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFinishReloadEvent> {
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunFinishReloadWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunFinishReloadWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$AmmoHitBlockWrapper {
    }
    export interface $TimelessForgeEventWrappers$AmmoHitBlockWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$AmmoHitBlockEvent> {
        getState(): $BlockState;
        getLevel(): $Level;
        getHitResult(): $BlockHitResult;
        getAmmo(): $EntityKineticBullet;
        get state(): $BlockState;
        get level(): $Level;
        get hitResult(): $BlockHitResult;
        get ammo(): $EntityKineticBullet;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$AmmoHitBlockWrapper}.
     */
    export type $TimelessForgeEventWrappers$AmmoHitBlockWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$BeforeRenderHandWrapper {
    }
    export interface $TimelessForgeEventWrappers$BeforeRenderHandWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$BeforeRenderHandEvent> {
        getPoseStack(): $PoseStack;
        get poseStack(): $PoseStack;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$BeforeRenderHandWrapper}.
     */
    export type $TimelessForgeEventWrappers$BeforeRenderHandWrapper_ = (() => void);
    export class $GunKubeJSEvents$RenderItemInHandBobViewEventJS extends $GunKubeJSEvents$GunEventJS<$RenderItemInHandBobEvent$BobView> {
        constructor(arg0: $RenderItemInHandBobEvent$BobView);
    }
    export class $TimelessForgeEventWrappers$GunShootWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunShootWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunShootEvent> {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunShootWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunShootWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$ForgeEventWrapper<E extends $Event> {
    }
    export interface $TimelessForgeEventWrappers$ForgeEventWrapper<E extends $Event> {
        getForgeEvent(): E;
        get forgeEvent(): E;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$ForgeEventWrapper}.
     */
    export type $TimelessForgeEventWrappers$ForgeEventWrapper_<E> = (() => E);
    export class $GunKubeJSEvents$SwapItemWithOffHandEventJS extends $GunKubeJSEvents$GunEventJS<$SwapItemWithOffHand> {
        constructor(arg0: $SwapItemWithOffHand);
    }
    export class $GunKubeJSEvents$GunShootEventJS extends $GunKubeJSEvents$GunEventJS<$GunShootEvent> implements $TimelessForgeEventWrappers$GunShootWrapper {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        constructor(arg0: $GunShootEvent);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $GunKubeJSEvents$EntityHurtByGunPostEventJS extends $GunKubeJSEvents$GunEventJS<$EntityHurtByGunEvent$Post> implements $TimelessForgeEventWrappers$EntityHurtByGunWrapper<$EntityHurtByGunEvent$Post> {
        isHeadShot(): boolean;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getBullet(): $Entity;
        getGunId(): $ResourceLocation;
        getBaseAmount(): number;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getHurtEntity(): $Entity;
        getHeadshotMultiplier(): number;
        constructor(arg0: $EntityHurtByGunEvent$Post);
        get headShot(): boolean;
        get bullet(): $Entity;
        get gunId(): $ResourceLocation;
        get baseAmount(): number;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get hurtEntity(): $Entity;
        get headshotMultiplier(): number;
    }
    export class $GunKubeJSEvents$GunEventJS<E extends $Event> implements $KubeEvent, $TimelessForgeEventWrappers$ForgeEventWrapper<E> {
        cancel(arg1: $Object): $Object;
        getEventSubId(): $ResourceLocation;
        getForgeEvent(): E;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: E);
        get eventSubId(): $ResourceLocation;
        get forgeEvent(): E;
    }
    export class $GunKubeJSEvents$RenderLevelBobViewEventJS extends $GunKubeJSEvents$GunEventJS<$RenderLevelBobEvent$BobView> {
        constructor(arg0: $RenderLevelBobEvent$BobView);
    }
    export class $GunKubeJSEvents$AmmoHitBlockEventJS extends $GunKubeJSEvents$GunEventJS<$AmmoHitBlockEvent> implements $TimelessForgeEventWrappers$AmmoHitBlockWrapper {
        getState(): $BlockState;
        getLevel(): $Level;
        getHitResult(): $BlockHitResult;
        getAmmo(): $EntityKineticBullet;
        constructor(arg0: $AmmoHitBlockEvent);
        get state(): $BlockState;
        get level(): $Level;
        get hitResult(): $BlockHitResult;
        get ammo(): $EntityKineticBullet;
    }
    export class $GunKubeJSEvents$RenderLevelBobHurtEventJS extends $GunKubeJSEvents$GunEventJS<$RenderLevelBobEvent$BobHurt> {
        constructor(arg0: $RenderLevelBobEvent$BobHurt);
    }
    export class $GunKubeJSEvents$GunFinishReloadEventJS extends $GunKubeJSEvents$GunEventJS<$GunFinishReloadEvent> implements $TimelessForgeEventWrappers$GunFinishReloadWrapper {
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        constructor(arg0: $GunFinishReloadEvent);
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $GunKubeJSEvents$GunReloadEventJS extends $GunKubeJSEvents$GunEventJS<$GunReloadEvent> implements $TimelessForgeEventWrappers$GunReloadWrapper {
        getEntity(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        constructor(arg0: $GunReloadEvent);
        get entity(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $GunKubeJSEvents$GunFireEventJS extends $GunKubeJSEvents$GunEventJS<$GunFireEvent> implements $TimelessForgeEventWrappers$GunFireWrapper {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        constructor(arg0: $GunFireEvent);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $TimelessForgeEventWrappers$EntityKillByGunWrapper {
    }
    export interface $TimelessForgeEventWrappers$EntityKillByGunWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$EntityKillByGunEvent> {
        isHeadShot(): boolean;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getBullet(): $Entity;
        getGunId(): $ResourceLocation;
        getBaseDamage(): number;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getGunDisplayId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getKilledEntity(): $LivingEntity;
        get headShot(): boolean;
        get bullet(): $Entity;
        get gunId(): $ResourceLocation;
        get baseDamage(): number;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get gunDisplayId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get killedEntity(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$EntityKillByGunWrapper}.
     */
    export type $TimelessForgeEventWrappers$EntityKillByGunWrapper_ = (() => void);
    export class $GunKubeJSEvents$GunMeleeEventJS extends $GunKubeJSEvents$GunEventJS<$GunMeleeEvent> implements $TimelessForgeEventWrappers$GunMeleeWrapper {
        getShooter(): $LivingEntity;
        getGunItemStack(): $ItemStack;
        getLogicalSide(): $LogicalSide;
        constructor(arg0: $GunMeleeEvent);
        get shooter(): $LivingEntity;
        get gunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
    }
    export class $GunKubeJSEvents$RenderItemInHandBobHurtEventJS extends $GunKubeJSEvents$GunEventJS<$RenderItemInHandBobEvent$BobHurt> {
        constructor(arg0: $RenderItemInHandBobEvent$BobHurt);
    }
    export class $TimelessForgeEventWrappers$GunDrawWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunDrawWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunDrawEvent> {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getPreviousGunItem(): $ItemStack;
        getCurrentGunItem(): $ItemStack;
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get previousGunItem(): $ItemStack;
        get currentGunItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunDrawWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunDrawWrapper_ = (() => void);
}
