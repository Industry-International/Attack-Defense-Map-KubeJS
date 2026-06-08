import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $RenderType, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $ModelState, $BakedModel, $ModelResourceLocation_, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $KeyMapping, $Camera } from "@package/net/minecraft/client";
import { $List, $Locale } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_, $Function } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Runnable_ } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Component_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $VertexFormatElement_, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $Transformation } from "@package/com/mojang/math";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f, $Vector3f, $Matrix3f } from "@package/org/joml";
export * as common from "@package/net/neoforged/neoforge/client/extensions/common";

declare module "@package/net/neoforged/neoforge/client/extensions" {
    export class $IBlockEntityRendererExtension<T extends $BlockEntity> {
    }
    export interface $IBlockEntityRendererExtension<T extends $BlockEntity> {
        getRenderBoundingBox(arg0: T): $AABB;
    }
    export class $IPoseStackExtension {
    }
    export interface $IPoseStackExtension {
        pushTransformation(arg0: $Transformation): void;
    }
    export class $ModelStateExtension {
    }
    export interface $ModelStateExtension {
        mayApplyArbitraryRotation(): boolean;
    }
    export class $IMenuProviderExtension {
    }
    export interface $IMenuProviderExtension {
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
    }
    export class $IMinecraftExtension {
    }
    export interface $IMinecraftExtension {
        getLocale(): $Locale;
        pushGuiLayer(arg0: $Screen): void;
        popGuiLayer(): void;
        get locale(): $Locale;
    }
    export class $IVertexConsumerExtension {
    }
    export interface $IVertexConsumerExtension {
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
    }
    export class $IBakedModelExtension {
    }
    export interface $IBakedModelExtension {
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
    }
    export class $IDimensionSpecialEffectsExtension {
    }
    export interface $IDimensionSpecialEffectsExtension {
        renderClouds(arg0: $ClientLevel, arg1: number, arg2: number, arg3: $PoseStack, arg4: number, arg5: number, arg6: number, arg7: $Matrix4f, arg8: $Matrix4f): boolean;
        renderSnowAndRain(arg0: $ClientLevel, arg1: number, arg2: number, arg3: $LightTexture, arg4: number, arg5: number, arg6: number): boolean;
        tickRain(arg0: $ClientLevel, arg1: number, arg2: $Camera): boolean;
        adjustLightmapColors(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Vector3f): void;
        renderSky(arg0: $ClientLevel, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $Camera, arg5: $Matrix4f, arg6: boolean, arg7: $Runnable_): boolean;
    }
    export class $IAbstractWidgetExtension {
    }
    export interface $IAbstractWidgetExtension {
        onClick(arg0: number, arg1: number, arg2: number): void;
    }
    export class $IKeyMappingExtension {
    }
    export interface $IKeyMappingExtension {
        getKey(): $InputConstants$Key;
        getDisplayName(): $Component;
        setToDefault(): void;
        isConflictContextAndModifierActive(): boolean;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        getKeyModifier(): $KeyModifier;
        hasKeyModifierConflict(arg0: $KeyMapping): boolean;
        setKeyModifierAndCode(arg0: $KeyModifier_, arg1: $InputConstants$Key): void;
        setKeyConflictContext(arg0: $IKeyConflictContext): void;
        getDefaultKeyModifier(): $KeyModifier;
        getKeyConflictContext(): $IKeyConflictContext;
        get key(): $InputConstants$Key;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get keyModifier(): $KeyModifier;
        get defaultKeyModifier(): $KeyModifier;
    }
    export class $IGuiGraphicsExtension {
        static DEFAULT_BORDER_COLOR_START: number;
        static TEXT_COLOR_CODES: number[];
        static UNDO_CHAR: string;
        static DEFAULT_BACKGROUND_COLOR: number;
        static VALID: string;
        static DEFAULT_BORDER_COLOR_END: number;
        static INVALID: string;
        static RESET_CHAR: string;
    }
    export interface $IGuiGraphicsExtension {
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        drawScrollingString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
    }
    export class $IFontExtension {
        static ELLIPSIS: $FormattedText;
    }
    export interface $IFontExtension {
        self(): $Font;
        ellipsize(arg0: $FormattedText, arg1: number): $FormattedText;
    }
    /**
     * Values that may be interpreted as {@link $IFontExtension}.
     */
    export type $IFontExtension_ = (() => $Font);
    export class $IModelBakerExtension {
    }
    export interface $IModelBakerExtension {
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        getTopLevelModel(arg0: $ModelResourceLocation_): $UnbakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
}
