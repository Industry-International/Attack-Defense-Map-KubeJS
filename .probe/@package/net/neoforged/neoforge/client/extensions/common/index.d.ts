import { $FogRenderer$FogMode_, $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $EquipmentSlot_, $Entity, $LivingEntity, $HumanoidArm_ } from "@package/net/minecraft/world/entity";
import { $FluidType_, $FluidStack_, $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $Minecraft, $DeltaTracker, $Camera } from "@package/net/minecraft/client";
import { $HumanoidModel$ArmPose, $Model, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Holder_, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FogShape_ } from "@package/com/mojang/blaze3d/shaders";
import { $Enum } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $BlockAndTintGetter, $LevelReader, $Level_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item_, $Item, $ItemStack_, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $MobEffect_, $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EffectRenderingInventoryScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Gui, $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/extensions/common" {
    export class $RegisterClientExtensionsEvent extends $Event implements $IModBusEvent {
        registerFluidType(arg0: $IClientFluidTypeExtensions, ...arg1: $FluidType_[]): void;
        registerFluidType(arg0: $IClientFluidTypeExtensions, ...arg1: $Holder_<$FluidType>[]): void;
        registerMobEffect(arg0: $IClientMobEffectExtensions, ...arg1: $Holder_<$MobEffect>[]): void;
        registerMobEffect(arg0: $IClientMobEffectExtensions, ...arg1: $MobEffect_[]): void;
        isBlockRegistered(arg0: $Block_): boolean;
        isItemRegistered(arg0: $Item_): boolean;
        registerBlock(arg0: $IClientBlockExtensions, ...arg1: $Holder_<$Block>[]): void;
        registerBlock(arg0: $IClientBlockExtensions, ...arg1: $Block_[]): void;
        registerItem(arg0: $IClientItemExtensions, ...arg1: $Holder_<$Item>[]): void;
        registerItem(arg0: $IClientItemExtensions, ...arg1: $Item_[]): void;
        isFluidTypeRegistered(arg0: $FluidType_): boolean;
        isMobEffectRegistered(arg0: $MobEffect_): boolean;
    }
    export class $IClientFluidTypeExtensions {
        static of(arg0: $FluidState): $IClientFluidTypeExtensions;
        static of(arg0: $FluidType_): $IClientFluidTypeExtensions;
        static of(arg0: $Fluid_): $IClientFluidTypeExtensions;
        static DEFAULT: $IClientFluidTypeExtensions;
    }
    export interface $IClientFluidTypeExtensions {
        getOverlayTexture(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $ResourceLocation;
        getOverlayTexture(): $ResourceLocation;
        getOverlayTexture(arg0: $FluidStack_): $ResourceLocation;
        renderOverlay(arg0: $Minecraft, arg1: $PoseStack): void;
        getStillTexture(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $ResourceLocation;
        getStillTexture(arg0: $FluidStack_): $ResourceLocation;
        getStillTexture(): $ResourceLocation;
        getFlowingTexture(arg0: $FluidStack_): $ResourceLocation;
        getFlowingTexture(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $ResourceLocation;
        getFlowingTexture(): $ResourceLocation;
        getTintColor(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getTintColor(arg0: $FluidStack_): number;
        getTintColor(): number;
        modifyFogColor(arg0: $Camera, arg1: number, arg2: $ClientLevel, arg3: number, arg4: number, arg5: $Vector3f): $Vector3f;
        modifyFogRender(arg0: $Camera, arg1: $FogRenderer$FogMode_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $FogShape_): void;
        renderFluid(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $VertexConsumer, arg4: $BlockState_): boolean;
        getRenderOverlayTexture(arg0: $Minecraft): $ResourceLocation;
    }
    export class $IClientBlockExtensions {
        static of(arg0: $BlockState_): $IClientBlockExtensions;
        static of(arg0: $Block_): $IClientBlockExtensions;
        static DEFAULT: $IClientBlockExtensions;
    }
    export interface $IClientBlockExtensions {
        getFogColor(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Vector3d, arg5: number): $Vector3d;
        playBreakSound(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        areBreakingParticlesTinted(arg0: $BlockState_, arg1: $ClientLevel, arg2: $BlockPos_): boolean;
        addDestroyEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ParticleEngine): boolean;
        addHitEffects(arg0: $BlockState_, arg1: $Level_, arg2: $HitResult, arg3: $ParticleEngine): boolean;
    }
    export class $IClientItemExtensions {
        static of(arg0: $ItemStack_): $IClientItemExtensions;
        static of(arg0: $Item_): $IClientItemExtensions;
        static DEFAULT: $IClientItemExtensions;
    }
    export interface $IClientItemExtensions {
        getArmPose(arg0: $LivingEntity, arg1: $InteractionHand_, arg2: $ItemStack_): $HumanoidModel$ArmPose;
        applyForgeHandTransform(arg0: $PoseStack, arg1: $LocalPlayer, arg2: $HumanoidArm_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: number): boolean;
        getGenericArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $Model;
        /**
         * @deprecated
         */
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: number, arg3: number, arg4: number): void;
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: $GuiGraphics, arg3: $DeltaTracker): void;
        setupModelAnimations(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $Model, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getArmorLayerTintColor(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $ArmorMaterial$Layer, arg3: number, arg4: number): number;
        getScopeOverlayTexture(arg0: $ItemStack_): $ResourceLocation;
        shouldSpreadAsEntity(arg0: $ItemStack_): boolean;
        getHumanoidArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $HumanoidModel<never>;
        getCustomRenderer(): $BlockEntityWithoutLevelRenderer;
        getFont(arg0: $ItemStack_, arg1: $IClientItemExtensions$FontContext_): $Font;
        shouldBobAsEntity(arg0: $ItemStack_): boolean;
        getDefaultDyeColor(arg0: $ItemStack_): number;
        get customRenderer(): $BlockEntityWithoutLevelRenderer;
    }
    export class $IClientItemExtensions$FontContext extends $Enum<$IClientItemExtensions$FontContext> {
        static values(): $IClientItemExtensions$FontContext[];
        static valueOf(arg0: string): $IClientItemExtensions$FontContext;
        static TOOLTIP: $IClientItemExtensions$FontContext;
        static SELECTED_ITEM_NAME: $IClientItemExtensions$FontContext;
        static ITEM_COUNT: $IClientItemExtensions$FontContext;
    }
    /**
     * Values that may be interpreted as {@link $IClientItemExtensions$FontContext}.
     */
    export type $IClientItemExtensions$FontContext_ = "item_count" | "tooltip" | "selected_item_name";
    export class $ClientExtensionsManager {
        static init(): void;
        /**
         * @deprecated
         */
        static earlyInit(): void;
    }
    export class $IClientMobEffectExtensions {
        static of(arg0: $MobEffectInstance): $IClientMobEffectExtensions;
        static of(arg0: $MobEffect_): $IClientMobEffectExtensions;
        static DEFAULT: $IClientMobEffectExtensions;
    }
    export interface $IClientMobEffectExtensions {
        isVisibleInInventory(arg0: $MobEffectInstance): boolean;
        renderInventoryIcon(arg0: $MobEffectInstance, arg1: $EffectRenderingInventoryScreen<never>, arg2: $GuiGraphics, arg3: number, arg4: number, arg5: number): boolean;
        renderInventoryText(arg0: $MobEffectInstance, arg1: $EffectRenderingInventoryScreen<never>, arg2: $GuiGraphics, arg3: number, arg4: number, arg5: number): boolean;
        isVisibleInGui(arg0: $MobEffectInstance): boolean;
        renderGuiIcon(arg0: $MobEffectInstance, arg1: $Gui, arg2: $GuiGraphics, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
    }
}
