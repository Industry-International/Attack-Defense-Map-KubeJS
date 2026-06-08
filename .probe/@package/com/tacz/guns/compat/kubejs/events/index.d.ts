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
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        constructor(arg0: $GunFireSelectEvent);
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
    }
    export class $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
    }
    export interface $TimelessForgeEventWrappers$AttachmentPropertyWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$AttachmentPropertyEvent> {
        getGunItem(): $ItemStack;
        getCacheProperty(): $AttachmentCacheProperty;
        get gunItem(): $ItemStack;
        get cacheProperty(): $AttachmentCacheProperty;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$AttachmentPropertyWrapper}.
     */
    export type $TimelessForgeEventWrappers$AttachmentPropertyWrapper_ = (() => void);
    export class $GunKubeJSEvents$AttachmentPropertyEventJS extends $GunKubeJSEvents$GunEventJS<$AttachmentPropertyEvent> implements $TimelessForgeEventWrappers$AttachmentPropertyWrapper {
        getGunItem(): $ItemStack;
        getCacheProperty(): $AttachmentCacheProperty;
        constructor(arg0: $AttachmentPropertyEvent);
        get gunItem(): $ItemStack;
        get cacheProperty(): $AttachmentCacheProperty;
    }
    export class $GunKubeJSEvents$BeforeRenderHandEventJS extends $GunKubeJSEvents$GunEventJS<$BeforeRenderHandEvent> implements $TimelessForgeEventWrappers$BeforeRenderHandWrapper {
        getPoseStack(): $PoseStack;
        constructor(arg0: $BeforeRenderHandEvent);
        get poseStack(): $PoseStack;
    }
    export class $TimelessForgeEventWrappers$EntityHurtByGunWrapper<E extends $EntityHurtByGunEvent> {
    }
    export interface $TimelessForgeEventWrappers$EntityHurtByGunWrapper<E extends $EntityHurtByGunEvent> extends $TimelessForgeEventWrappers$ForgeEventWrapper<E> {
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getLogicalSide(): $LogicalSide;
        getBaseAmount(): number;
        getAttacker(): $LivingEntity;
        getGunId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getBullet(): $Entity;
        getHurtEntity(): $Entity;
        isHeadShot(): boolean;
        get logicalSide(): $LogicalSide;
        get baseAmount(): number;
        get attacker(): $LivingEntity;
        get gunId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get bullet(): $Entity;
        get hurtEntity(): $Entity;
        get headShot(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$EntityHurtByGunWrapper}.
     */
    export type $TimelessForgeEventWrappers$EntityHurtByGunWrapper_<E> = (() => void);
    export class $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
    }
    export interface $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper extends $TimelessForgeEventWrappers$EntityHurtByGunWrapper<$EntityHurtByGunEvent$Pre> {
        setBaseAmount(arg0: number): void;
        setHeadshotMultiplier(arg0: number): void;
        setGunId(arg0: $ResourceLocation_): void;
        setAttacker(arg0: $LivingEntity): void;
        setHeadshot(arg0: boolean): void;
        setHurtEntity(arg0: $Entity): void;
        setDamageSource(arg0: $GunDamageSourcePart_, arg1: $DamageSource_): void;
        set baseAmount(value: number);
        set headshotMultiplier(value: number);
        set gunId(value: $ResourceLocation_);
        set attacker(value: $LivingEntity);
        set headshot(value: boolean);
        set hurtEntity(value: $Entity);
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper}.
     */
    export type $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$GunFireSelectWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunFireSelectWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFireSelectEvent> {
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunFireSelectWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunFireSelectWrapper_ = (() => void);
    export class $GunKubeJSEvents$EntityHurtByGunPreEventJS extends $GunKubeJSEvents$GunEventJS<$EntityHurtByGunEvent$Pre> implements $TimelessForgeEventWrappers$EntityHurtByGunPreWrapper {
        setBaseAmount(arg0: number): void;
        setHeadshotMultiplier(arg0: number): void;
        setGunId(arg0: $ResourceLocation_): void;
        setAttacker(arg0: $LivingEntity): void;
        setHeadshot(arg0: boolean): void;
        setHurtEntity(arg0: $Entity): void;
        setDamageSource(arg0: $GunDamageSourcePart_, arg1: $DamageSource_): void;
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getLogicalSide(): $LogicalSide;
        getBaseAmount(): number;
        getAttacker(): $LivingEntity;
        getGunId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getBullet(): $Entity;
        getHurtEntity(): $Entity;
        isHeadShot(): boolean;
        constructor(arg0: $EntityHurtByGunEvent$Pre);
        set headshot(value: boolean);
        get logicalSide(): $LogicalSide;
        get bullet(): $Entity;
        get headShot(): boolean;
    }
    export class $GunKubeJSEvents$GunDrawEventJS extends $GunKubeJSEvents$GunEventJS<$GunDrawEvent> implements $TimelessForgeEventWrappers$GunDrawWrapper {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getCurrentGunItem(): $ItemStack;
        getPreviousGunItem(): $ItemStack;
        constructor(arg0: $GunDrawEvent);
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get currentGunItem(): $ItemStack;
        get previousGunItem(): $ItemStack;
    }
    export class $TimelessForgeEventWrappers$GunMeleeWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunMeleeWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunMeleeEvent> {
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunMeleeWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunMeleeWrapper_ = (() => void);
    export class $GunKubeJSEvents$EntityKillByGunEventJS extends $GunKubeJSEvents$GunEventJS<$EntityKillByGunEvent> implements $TimelessForgeEventWrappers$EntityKillByGunWrapper {
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getBaseDamage(): number;
        getGunId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getBullet(): $Entity;
        getKilledEntity(): $LivingEntity;
        getGunDisplayId(): $ResourceLocation;
        isHeadShot(): boolean;
        constructor(arg0: $EntityKillByGunEvent);
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get baseDamage(): number;
        get gunId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get bullet(): $Entity;
        get killedEntity(): $LivingEntity;
        get gunDisplayId(): $ResourceLocation;
        get headShot(): boolean;
    }
    export class $TimelessForgeEventWrappers$GunReloadWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunReloadEvent> {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunReloadWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunReloadWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$GunFireWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunFireWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFireEvent> {
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunFireWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunFireWrapper_ = (() => void);
    export class $TimelessForgeEventWrappers$GunFinishReloadWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunFinishReloadWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunFinishReloadEvent> {
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
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
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
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
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        constructor(arg0: $GunShootEvent);
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
    }
    export class $GunKubeJSEvents$EntityHurtByGunPostEventJS extends $GunKubeJSEvents$GunEventJS<$EntityHurtByGunEvent$Post> implements $TimelessForgeEventWrappers$EntityHurtByGunWrapper<$EntityHurtByGunEvent$Post> {
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getLogicalSide(): $LogicalSide;
        getBaseAmount(): number;
        getAttacker(): $LivingEntity;
        getGunId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getBullet(): $Entity;
        getHurtEntity(): $Entity;
        isHeadShot(): boolean;
        constructor(arg0: $EntityHurtByGunEvent$Post);
        get logicalSide(): $LogicalSide;
        get baseAmount(): number;
        get attacker(): $LivingEntity;
        get gunId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get bullet(): $Entity;
        get hurtEntity(): $Entity;
        get headShot(): boolean;
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
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        constructor(arg0: $GunFinishReloadEvent);
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
    }
    export class $GunKubeJSEvents$GunReloadEventJS extends $GunKubeJSEvents$GunEventJS<$GunReloadEvent> implements $TimelessForgeEventWrappers$GunReloadWrapper {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        constructor(arg0: $GunReloadEvent);
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
    }
    export class $GunKubeJSEvents$GunFireEventJS extends $GunKubeJSEvents$GunEventJS<$GunFireEvent> implements $TimelessForgeEventWrappers$GunFireWrapper {
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        constructor(arg0: $GunFireEvent);
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
    }
    export class $TimelessForgeEventWrappers$EntityKillByGunWrapper {
    }
    export interface $TimelessForgeEventWrappers$EntityKillByGunWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$EntityKillByGunEvent> {
        getDamageSource(arg0: $GunDamageSourcePart_): $DamageSource;
        getLogicalSide(): $LogicalSide;
        getAttacker(): $LivingEntity;
        getBaseDamage(): number;
        getGunId(): $ResourceLocation;
        getHeadshotMultiplier(): number;
        getBullet(): $Entity;
        getKilledEntity(): $LivingEntity;
        getGunDisplayId(): $ResourceLocation;
        isHeadShot(): boolean;
        get logicalSide(): $LogicalSide;
        get attacker(): $LivingEntity;
        get baseDamage(): number;
        get gunId(): $ResourceLocation;
        get headshotMultiplier(): number;
        get bullet(): $Entity;
        get killedEntity(): $LivingEntity;
        get gunDisplayId(): $ResourceLocation;
        get headShot(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$EntityKillByGunWrapper}.
     */
    export type $TimelessForgeEventWrappers$EntityKillByGunWrapper_ = (() => void);
    export class $GunKubeJSEvents$GunMeleeEventJS extends $GunKubeJSEvents$GunEventJS<$GunMeleeEvent> implements $TimelessForgeEventWrappers$GunMeleeWrapper {
        getLogicalSide(): $LogicalSide;
        getGunItemStack(): $ItemStack;
        getShooter(): $LivingEntity;
        constructor(arg0: $GunMeleeEvent);
        get logicalSide(): $LogicalSide;
        get gunItemStack(): $ItemStack;
        get shooter(): $LivingEntity;
    }
    export class $GunKubeJSEvents$RenderItemInHandBobHurtEventJS extends $GunKubeJSEvents$GunEventJS<$RenderItemInHandBobEvent$BobHurt> {
        constructor(arg0: $RenderItemInHandBobEvent$BobHurt);
    }
    export class $TimelessForgeEventWrappers$GunDrawWrapper {
    }
    export interface $TimelessForgeEventWrappers$GunDrawWrapper extends $TimelessForgeEventWrappers$ForgeEventWrapper<$GunDrawEvent> {
        getEntity(): $LivingEntity;
        getLogicalSide(): $LogicalSide;
        getCurrentGunItem(): $ItemStack;
        getPreviousGunItem(): $ItemStack;
        get entity(): $LivingEntity;
        get logicalSide(): $LogicalSide;
        get currentGunItem(): $ItemStack;
        get previousGunItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $TimelessForgeEventWrappers$GunDrawWrapper}.
     */
    export type $TimelessForgeEventWrappers$GunDrawWrapper_ = (() => void);
}
