import { $MultiBufferSource, $MultiBufferSource$BufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $SpectatorGui } from "@package/net/minecraft/client/gui/components/spectator";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FontAccessor, $GuiAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Minecraft, $DeltaTracker, $StringSplitter } from "@package/net/minecraft/client";
import { $JadeFont } from "@package/snownee/jade/gui";
import { $List, $List_, $Deque } from "@package/java/util";
import { $FormattedCharSequence, $FormattedCharSequence_, $RandomSource, $FormattedCharSink } from "@package/net/minecraft/util";
import { $Function_, $BooleanSupplier_, $Function } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IAcceleratedGuiGraphics } from "@package/com/github/argon4w/acceleratedrendering/features/items";
import { $IFontExtension, $IGuiGraphicsExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $DrawContextAccessor } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $Component_, $FormattedText, $Style } from "@package/net/minecraft/network/chat";
import { $GuiSpriteScaling } from "@package/net/minecraft/client/resources/metadata/gui";
import { $BossHealthOverlay, $SubtitleOverlay, $DebugScreenOverlay, $PlayerTabOverlay, $ChatComponent } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TextureAtlasHolder, $MapDecorationTextureManager } from "@package/net/minecraft/client/resources";
import { $GuiSubtitleOverlayAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f } from "@package/org/joml";
export * as components from "@package/net/minecraft/client/gui/components";
export * as layouts from "@package/net/minecraft/client/gui/layouts";
export * as screens from "@package/net/minecraft/client/gui/screens";
export * as navigation from "@package/net/minecraft/client/gui/navigation";
export * as font from "@package/net/minecraft/client/gui/font";
export * as narration from "@package/net/minecraft/client/gui/narration";
export * as spectator from "@package/net/minecraft/client/gui/spectator";

declare module "@package/net/minecraft/client/gui" {
    export class $Font$StringRenderOutput implements $FormattedCharSink {
        accept(arg0: number, arg1: $Style, arg2: number): boolean;
        finish(arg0: number, arg1: number): number;
        handler$gda000$chloride$inject$accept(arg0: number, arg1: $Style, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$bom000$chat_heads$chatheads$renderChatHead(i: number, style: $Style, j: number, cir: $CallbackInfoReturnable<any>): void;
        this$0: $Font;
        x: number;
        y: number;
        bufferSource: $MultiBufferSource;
        constructor(arg0: $Font, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $Matrix4f, arg7: $Font$DisplayMode_, arg8: number);
    }
    export class $GuiGraphics implements $IGuiGraphicsExtension, $IAcceleratedGuiGraphics, $DrawContextAccessor {
        flush(): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        pose(): $PoseStack;
        handler$cic000$acceleratedrendering$stopRenderDecorationPart(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string, arg5: $CallbackInfo): void;
        wrapOperation$cic000$acceleratedrendering$setupBatchingLayers(arg0: $ItemRenderer, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: boolean, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $BakedModel, arg9: $Operation_<any>): void;
        handler$cic000$acceleratedrendering$startRenderDecorationPart(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string, arg5: $CallbackInfo): void;
        guiWidth(): number;
        guiHeight(): number;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number): void;
        containsPointInScissor(arg0: number, arg1: number): boolean;
        drawStringWithBackdrop(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        renderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        renderComponentHoverEffect(arg0: $Font, arg1: $Style, arg2: number, arg3: number): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: number, arg3: number): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$FormattedText>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        renderItem(arg0: $LivingEntity, arg1: $Level_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        renderItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        flushItemBatching(): void;
        handler$cic000$acceleratedrendering$stopRenderingGui(arg0: $LivingEntity, arg1: $Level_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfo): void;
        handler$cic000$acceleratedrendering$startRenderingGui(arg0: $LivingEntity, arg1: $Level_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfo): void;
        blitSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        hLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        hLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        vLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        vLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): number;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: $ClientTooltipPositioner_, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: $ItemStack_, arg4: number, arg5: number): void;
        renderTooltip(arg0: $Font, arg1: $Component_, arg2: number, arg3: number): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        renderOutline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        fillRenderType(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawWordWrap(arg0: $Font, arg1: $FormattedText, arg2: number, arg3: number, arg4: number, arg5: number): void;
        /**
         * @deprecated
         */
        drawManaged(arg0: $Runnable_): void;
        bufferSource(): $MultiBufferSource$BufferSource;
        disableScissor(): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fillGradient(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawCenteredString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): void;
        blitTiledSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        renderComponentTooltipFromElements(arg0: $Font, arg1: $List_<$Either<$FormattedText, $TooltipComponent>>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        drawScrollingString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        libgui$getVertexConsumers(): $MultiBufferSource$BufferSource;
        static MIN_GUI_Z: number;
        static MAX_GUI_Z: number;
        scissorStack: $GuiGraphics$ScissorStack;
        constructor(arg0: $Minecraft, arg1: $MultiBufferSource$BufferSource);
    }
    export class $LayeredDraw {
        add(arg0: $LayeredDraw, arg1: $BooleanSupplier_): $LayeredDraw;
        add(arg0: $LayeredDraw$Layer_): $LayeredDraw;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static Z_SEPARATION: number;
        constructor();
    }
    export class $MapRenderer$MapInstance implements $AutoCloseable {
    }
    export class $MapRenderer implements $AutoCloseable {
        update(arg0: $MapId_, arg1: $MapItemSavedData): void;
        close(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $MapId_, arg3: $MapItemSavedData, arg4: boolean, arg5: number): void;
        resetData(): void;
        decorationTextures: $MapDecorationTextureManager;
        textureManager: $TextureManager;
        constructor(arg0: $TextureManager, arg1: $MapDecorationTextureManager);
    }
    export class $ComponentPath$Leaf extends $Record implements $ComponentPath {
        component(): $GuiEventListener;
        applyFocus(arg0: boolean): void;
        constructor(arg0: $GuiEventListener);
    }
    export class $Gui$1DisplayEntry extends $Record {
    }
    export class $Font implements $IFontExtension, $FontAccessor, $JadeFont {
        split(arg0: $FormattedText, arg1: number): $List<$FormattedCharSequence>;
        self(): $Font;
        width(arg0: $FormattedCharSequence_): number;
        width(arg0: $FormattedText): number;
        width(arg0: string): number;
        drawInBatch8xOutline(text: $FormattedCharSequence_, x: number, y: number, color: number, outlineColor: number, matrix: $Matrix4f, source: $MultiBufferSource_, packedLight: number): void;
        jade$setGlintStrength(arg0: number, arg1: number): void;
        renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        plainSubstrByWidth(arg0: string, arg1: number): string;
        plainSubstrByWidth(arg0: string, arg1: number, arg2: boolean): string;
        substrByWidth(arg0: $FormattedText, arg1: number): $FormattedText;
        jade$setGlint(arg0: number, arg1: number): void;
        wordWrapHeight(arg0: $FormattedText, arg1: number): number;
        wordWrapHeight(arg0: string, arg1: number): number;
        renderChar(arg0: $BakedGlyph, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: $Matrix4f, arg7: $VertexConsumer, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getSplitter(): $StringSplitter;
        getFontSet(arg0: $ResourceLocation_): $FontSet;
        bidirectionalShaping(text: string): string;
        isBidirectional(): boolean;
        drawInBatch(text: $FormattedCharSequence_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, source: $MultiBufferSource_, displayMode: $Font$DisplayMode_, colorBackground: number, packedLight: number): number;
        drawInBatch(text: string, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, source: $MultiBufferSource_, displayMode: $Font$DisplayMode_, colorBackground: number, packedLight: number, bidiFlag: boolean): number;
        drawInBatch(text: $Component_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, source: $MultiBufferSource_, displayMode: $Font$DisplayMode_, colorBackground: number, packedLight: number): number;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        handler$gcp000$chloride$inject$renderText(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        handler$gcp000$chloride$inject$renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        ellipsize(arg0: $FormattedText, arg1: number): $FormattedText;
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
        random: $RandomSource;
        filterFishyGlyphs: boolean;
        fonts: $Function<$ResourceLocation, $FontSet>;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        splitter: $StringSplitter;
        constructor(arg0: $Function_<$ResourceLocation, $FontSet>, arg1: boolean);
        get bidirectional(): boolean;
    }
    export class $Gui$HeartType extends $Enum<$Gui$HeartType> implements $IExtensibleEnum {
        static values(): $Gui$HeartType[];
        static valueOf(arg0: string): $Gui$HeartType;
        static getExtensionInfo(): $ExtensionInfo;
        static forPlayer(arg0: $Player): $Gui$HeartType;
        getSprite(arg0: boolean, arg1: boolean, arg2: boolean): $ResourceLocation;
        static ABSORBING: $Gui$HeartType;
        static CONTAINER: $Gui$HeartType;
        static WITHERED: $Gui$HeartType;
        static POISIONED: $Gui$HeartType;
        static FROZEN: $Gui$HeartType;
        static NORMAL: $Gui$HeartType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Gui$HeartType}.
     */
    export type $Gui$HeartType_ = "container" | "normal" | "poisioned" | "withered" | "absorbing" | "frozen";
    export class $Font$DisplayMode extends $Enum<$Font$DisplayMode> {
        static values(): $Font$DisplayMode[];
        static valueOf(arg0: string): $Font$DisplayMode;
        static POLYGON_OFFSET: $Font$DisplayMode;
        static SEE_THROUGH: $Font$DisplayMode;
        static NORMAL: $Font$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Font$DisplayMode}.
     */
    export type $Font$DisplayMode_ = "normal" | "see_through" | "polygon_offset";
    export class $GuiGraphics$ScissorStack {
        push(arg0: $ScreenRectangle_): $ScreenRectangle;
        pop(): $ScreenRectangle;
        containsPoint(arg0: number, arg1: number): boolean;
        stack: $Deque<$ScreenRectangle>;
        constructor();
    }
    export class $Gui implements $GuiSubtitleOverlayAccess, $GuiAccessor {
        clear(): void;
        setTimes(arg0: number, arg1: number, arg2: number): void;
        tick(arg0: boolean): void;
        clearCache(): void;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        getTabList(): $PlayerTabOverlay;
        setOverlayMessage(arg0: $Component_, arg1: boolean): void;
        setSubtitle(arg0: $Component_): void;
        resetTitleTimes(): void;
        setNowPlaying(arg0: $Component_): void;
        getGuiTicks(): number;
        setTitle(arg0: $Component_): void;
        handler$fha000$inventoryprofilesnext$preRenderHotbar(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        handler$fha000$inventoryprofilesnext$postRenderHotbar(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        handler$ipo000$axiom$canRenderCrosshairForSpectator(hitResult: $HitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$gap000$pingwheel$render(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        handler$ipo001$axiom$render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$ipo000$axiom$renderHotbar(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        wrapWithCondition$ipo000$axiom$blitSelectedHotbar(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        handler$ipo000$axiom$renderSelectedItemName(guiGraphics: $GuiGraphics, adapter_injected_1: number, ci: $CallbackInfo): void;
        handler$cid000$acceleratedrendering$startBatching(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        handler$cid000$acceleratedrendering$flushBatching(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        handler$ipo000$axiom$renderCrosshair(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        getSpectatorGui(): $SpectatorGui;
        onDisconnected(): void;
        getFont(): $Font;
        setChatDisabledByPlayerShown(arg0: boolean): void;
        isShowingChatDisabledByPlayer(): boolean;
        getBossOverlay(): $BossHealthOverlay;
        getDebugOverlay(): $DebugScreenOverlay;
        getLayerCount(): number;
        renderSelectedItemName(arg0: $GuiGraphics, arg1: number): void;
        handler$ipo00c$axiom$tick(ci: $CallbackInfo): void;
        wrapMethod$bgd000$iris$handleHudHidingScreens(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $Operation_<any>): void;
        getChat(): $ChatComponent;
        initModdedOverlays(): void;
        renderSavingIndicator(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        create$getToolHighlightTimer(): number;
        create$renderTextureOverlay(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number): void;
        create$getSubtitleOverlay(): $SubtitleOverlay;
        getSubtitleOverlay(): $SubtitleOverlay;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        rightHeight: number;
        leftHeight: number;
        constructor(arg0: $Minecraft);
        get tabList(): $PlayerTabOverlay;
        set subtitle(value: $Component_);
        set nowPlaying(value: $Component_);
        get guiTicks(): number;
        set title(value: $Component_);
        get spectatorGui(): $SpectatorGui;
        get font(): $Font;
        set chatDisabledByPlayerShown(value: boolean);
        get showingChatDisabledByPlayer(): boolean;
        get bossOverlay(): $BossHealthOverlay;
        get debugOverlay(): $DebugScreenOverlay;
        get layerCount(): number;
        get chat(): $ChatComponent;
        get subtitleOverlay(): $SubtitleOverlay;
    }
    export class $GuiSpriteManager extends $TextureAtlasHolder {
        getSpriteScaling(arg0: $TextureAtlasSprite): $GuiSpriteScaling;
        textureAtlas: $TextureAtlas;
        constructor(arg0: $TextureManager);
    }
    export class $ComponentPath$Path extends $Record implements $ComponentPath {
        component(): $ContainerEventHandler;
        childPath(): $ComponentPath;
        applyFocus(arg0: boolean): void;
        constructor(arg0: $ContainerEventHandler, arg1: $ComponentPath);
    }
    export class $LayeredDraw$Layer {
    }
    export interface $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
    }
    /**
     * Values that may be interpreted as {@link $LayeredDraw$Layer}.
     */
    export type $LayeredDraw$Layer_ = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
    export class $ComponentPath {
        static path(arg0: $ContainerEventHandler, arg1: $ComponentPath): $ComponentPath;
        static path(arg0: $GuiEventListener, ...arg1: $ContainerEventHandler[]): $ComponentPath;
        static leaf(arg0: $GuiEventListener): $ComponentPath;
    }
    export interface $ComponentPath {
        component(): $GuiEventListener;
        applyFocus(arg0: boolean): void;
    }
}
