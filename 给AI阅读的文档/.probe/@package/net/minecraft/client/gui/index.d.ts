import { $MultiBufferSource, $MultiBufferSource$BufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $SpectatorGui } from "@package/net/minecraft/client/gui/components/spectator";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FontAccessor, $GuiAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Minecraft, $DeltaTracker, $StringSplitter } from "@package/net/minecraft/client";
import { $JadeFont } from "@package/snownee/jade/gui";
import { $List, $List_ } from "@package/java/util";
import { $GuiRenderStateSink } from "@package/dev/isxander/yacl3/gui/render";
import { $FormattedCharSequence, $FormattedCharSequence_, $RandomSource, $FormattedCharSink } from "@package/net/minecraft/util";
import { $Function_, $BooleanSupplier_, $Function } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IFontExtension, $IGuiGraphicsExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
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
        /**
         * Accepts a single code point from a `FormattedCharSequence`.
         * @return `true` to accept more characters, `false` to stop traversing the sequence.
         */
        accept(positionInCurrentSequence: number, style: $Style, codePoint: number): boolean;
        finish(backgroundColor: number, x: number): number;
        handler$bom000$chat_heads$chatheads$renderChatHead(i: number, style: $Style, j: number, cir: $CallbackInfoReturnable<any>): void;
        handler$fpd000$chloride$inject$accept(arg0: number, arg1: $Style, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        this$0: $Font;
        x: number;
        y: number;
        bufferSource: $MultiBufferSource;
        constructor(bufferSource: $Font, x: $MultiBufferSource_, y: number, color: number, dropShadow: number, pose: boolean, mode: $Matrix4f, packedLightCoords: $Font$DisplayMode_, arg8: number);
    }
    export class $GuiGraphics implements $IGuiGraphicsExtension, $DrawContextAccessor, $GuiRenderStateSink {
        /**
         * Disables scissoring.
         */
        flush(): void;
        /**
         * Fills a rectangle with the specified color using the given render type and coordinates as the boundaries.
         */
        fill(renderType: $RenderType, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Fills a rectangle with the specified color using the given coordinates as the boundaries.
         */
        fill(minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Fills a rectangle with the specified color and z-level using the given coordinates as the boundaries.
         */
        fill(minX: number, minY: number, maxX: number, maxY: number, z: number, color: number): void;
        /**
         * Fills a rectangle with the specified color and z-level using the given render type and coordinates as the boundaries.
         */
        fill(renderType: $RenderType, minX: number, minY: number, maxX: number, maxY: number, z: number, color: number): void;
        /**
         * Sets the current rendering color.
         */
        setColor(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Fills a rectangle with the specified color using the given coordinates as the boundaries.
         */
        renderOutline(minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Fills a rectangle with a gradient color from colorFrom to colorTo at the specified z-level using the given render type and coordinates as the boundaries.
         */
        fillGradient(renderType: $RenderType, x1: number, y1: number, x2: number, y2: number, colorFrom: number, colorTo: number, z: number): void;
        /**
         * Fills a rectangle with the specified color and z-level using the given coordinates as the boundaries.
         */
        fillGradient(minX: number, minY: number, maxX: number, maxY: number, z: number, color: number): void;
        /**
         * Fills a rectangle with a gradient color from colorFrom to colorTo at the specified z-level using the given coordinates as the boundaries.
         */
        fillGradient(x1: number, y1: number, x2: number, y2: number, z: number, colorFrom: number, colorTo: number): void;
        /**
         * Enables scissoring with the specified screen coordinates.
         */
        enableScissor(minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Renders additional decorations for an item stack at the specified coordinates.
         */
        renderTooltip(font: $Font, stack: $ItemStack_, x: number, y: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: $ItemStack_, arg4: number, arg5: number): void;
        /**
         * Renders a tooltip with customizable components at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, tooltipLines: $List_<$Component_>, visualTooltipComponent: ($TooltipComponent) | undefined, mouseX: number, mouseY: number): void;
        /**
         * Renders a tooltip with a single line of text at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, text: $Component_, mouseX: number, mouseY: number): void;
        /**
         * Renders a tooltip with multiple lines of component-based text at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, tooltipLines: $List_<$FormattedCharSequence_>, mouseX: number, mouseY: number): void;
        /**
         * Renders a tooltip with multiple lines of formatted text using a custom tooltip positioner at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, tooltipLines: $List_<$FormattedCharSequence_>, tooltipPositioner: $ClientTooltipPositioner_, mouseX: number, mouseY: number): void;
        /**
         * Draws a centered string at the specified coordinates using the given font, text component, and color.
         */
        drawCenteredString(font: $Font, text: $Component_, x: number, y: number, color: number): void;
        /**
         * Draws a centered string at the specified coordinates using the given font, formatted character sequence, and color.
         */
        drawCenteredString(font: $Font, text: $FormattedCharSequence_, x: number, y: number, color: number): void;
        /**
         * Draws a centered string at the specified coordinates using the given font, text, and color.
         */
        drawCenteredString(font: $Font, text: string, x: number, y: number, color: number): void;
        /**
         * Draws a formatted text with word wrapping at the specified coordinates using the given font, text, line width, and color.
         */
        drawWordWrap(font: $Font, text: $FormattedText, x: number, y: number, lineWidth: number, color: number): void;
        /**
         * Disables scissoring.
         */
        disableScissor(): void;
        /**
         * @deprecated
         * Executes a runnable while managing the render state. The render state is flushed before and after executing the runnable.
         */
        drawManaged(runnable: $Runnable_): void;
        blitTiledSprite(sprite: $TextureAtlasSprite, x: number, y: number, blitOffset: number, width: number, height: number, uPosition: number, vPosition: number, spriteWidth: number, spriteHeight: number, nineSliceWidth: number, nineSliceHeight: number): void;
        /**
         * @return returns the buffer source for rendering.
         */
        bufferSource(): $MultiBufferSource$BufferSource;
        /**
         * Fills a rectangle with the specified color using the given render type and coordinates as the boundaries.
         */
        fillRenderType(renderType: $RenderType, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Renders a fake item stack at the specified coordinates.
         */
        renderFakeItem(stack: $ItemStack_, x: number, y: number): void;
        renderFakeItem(stack: $ItemStack_, x: number, y: number, seed: number): void;
        yacl$bufferSource(): $MultiBufferSource;
        renderComponentTooltipFromElements(arg0: $Font, arg1: $List_<$Either<$FormattedText, $TooltipComponent>>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        /**
         * @return returns the height of the GUI screen in pixels
         */
        guiWidth(): number;
        /**
         * @return returns the height of the GUI screen in pixels
         */
        guiHeight(): number;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given position and dimensions with texture coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, width: number, height: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number, textureWidth: number, textureHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given position and dimensions with texture coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number, textureWidth: number, textureHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given coordinates with a blit offset and texture coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, blitOffset: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number, textureWidth: number, textureHeight: number): void;
        /**
         * Blits a portion of the specified texture atlas sprite onto the screen at the given coordinates.
         */
        blit(x: number, y: number, blitOffset: number, width: number, height: number, sprite: $TextureAtlasSprite): void;
        /**
         * Blits a portion of the specified texture atlas sprite onto the screen at the given coordinates with a color tint.
         */
        blit(x: number, y: number, blitOffset: number, width: number, height: number, sprite: $TextureAtlasSprite, red: number, green: number, blue: number, alpha: number): void;
        /**
         * Performs the inner blit operation for rendering a texture with the specified coordinates and texture coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x1: number, x2: number, y1: number, y2: number, blitOffset: number, uWidth: number, vHeight: number, uOffset: number, vOffset: number, textureWidth: number, textureHeight: number): void;
        /**
         * Enables scissoring with the specified screen coordinates.
         */
        vLine(minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Draws a horizontal line from minX to maxX at the specified y-coordinate with the given color using the specified render type.
         */
        vLine(renderType: $RenderType, minX: number, maxX: number, y: number, color: number): void;
        /**
         * Draws a horizontal line from minX to maxX at the specified y-coordinate with the given color using the specified render type.
         */
        hLine(renderType: $RenderType, minX: number, maxX: number, y: number, color: number): void;
        /**
         * Enables scissoring with the specified screen coordinates.
         */
        hLine(minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Draws a string at the specified coordinates using the given font, text, color, and drop shadow. Returns the width of the drawn string.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: string | null, x: number, y: number, color: number, dropShadow: boolean): number;
        /**
         * Draws a formatted character sequence at the specified coordinates using the given font, text, color, and drop shadow. Returns the width of the drawn string.
         * 
         * @return returns the width of the drawn string.
         */
        drawString(font: $Font, text: $FormattedCharSequence_, x: number, y: number, color: number, dropShadow: boolean): number;
        /**
         * Draws a formatted character sequence at the specified coordinates using the given font, text, and color. Returns the width of the drawn string.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: $FormattedCharSequence_, x: number, y: number, color: number): number;
        /**
         * Draws a string at the specified coordinates using the given font, text, and color. Returns the width of the drawn string.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: string | null, x: number, y: number, color: number): number;
        drawString(arg0: $Font, arg1: string | null, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        /**
         * Draws a component's visual order text at the specified coordinates using the given font, text component, color, and drop shadow.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: $Component_, x: number, y: number, color: number, dropShadow: boolean): number;
        /**
         * Draws a component's visual order text at the specified coordinates using the given font, text component, and color.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: $Component_, x: number, y: number, color: number): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        /**
         * Performs the inner blit operation for rendering a texture with the specified coordinates, texture coordinates, and color tint.
         */
        innerBlit(atlasLocation: $ResourceLocation_, x1: number, x2: number, y1: number, y2: number, blitOffset: number, minU: number, maxU: number, minV: number, maxV: number, red: number, green: number, blue: number, alpha: number): void;
        /**
         * Performs the inner blit operation for rendering a texture with the specified coordinates and texture coordinates without color tinting.
         */
        innerBlit(atlasLocation: $ResourceLocation_, x1: number, x2: number, y1: number, y2: number, blitOffset: number, minU: number, maxU: number, minV: number, maxV: number): void;
        blitSprite(sprite: $ResourceLocation_, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, blitOffset: number, uWidth: number, vHeight: number): void;
        blitSprite(sprite: $ResourceLocation_, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, uWidth: number, vHeight: number): void;
        blitSprite(sprite: $TextureAtlasSprite, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, blitOffset: number, uWidth: number, vHeight: number): void;
        blitSprite(sprite: $ResourceLocation_, x: number, y: number, width: number, height: number): void;
        blitSprite(sprite: $ResourceLocation_, x: number, y: number, blitOffset: number, width: number, height: number): void;
        /**
         * Renders a fake item stack at the specified coordinates.
         */
        renderItem(stack: $ItemStack_, x: number, y: number): void;
        /**
         * Renders an item stack at the specified coordinates with a random seed and a custom value.
         */
        renderItem(stack: $ItemStack_, x: number, y: number, seed: number, guiOffset: number): void;
        renderItem(stack: $ItemStack_, x: number, y: number, seed: number): void;
        /**
         * Renders an item stack for a living entity at the specified coordinates with a random seed.
         */
        renderItem(entity: $LivingEntity, stack: $ItemStack_, x: number, y: number, seed: number): void;
        /**
         * @return returns the PoseStack used for transformations and rendering.
         */
        pose(): $PoseStack;
        /**
         * Renders an internal tooltip with customizable tooltip components at the specified mouse coordinates using a tooltip positioner.
         */
        renderTooltipInternal(font: $Font, components: $List_<$ClientTooltipComponent>, mouseX: number, mouseY: number, tooltipPositioner: $ClientTooltipPositioner_): void;
        containsPointInScissor(x: number, y: number): boolean;
        drawStringWithBackdrop(font: $Font, text: $Component_, x: number, y: number, xOffset: number, color: number): number;
        /**
         * Renders additional decorations for an item stack at the specified coordinates with optional custom text.
         */
        renderItemDecorations(font: $Font, stack: $ItemStack_, x: number, y: number, text: string | null): void;
        /**
         * Renders additional decorations for an item stack at the specified coordinates.
         */
        renderItemDecorations(font: $Font, stack: $ItemStack_, x: number, y: number): void;
        /**
         * Renders a tooltip with multiple lines of component-based text at the specified mouse coordinates.
         */
        renderComponentTooltip(font: $Font, tooltipLines: $List_<$Component_>, mouseX: number, mouseY: number): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$FormattedText>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        /**
         * Renders a hover effect for a text component at the specified mouse coordinates.
         */
        renderComponentHoverEffect(font: $Font, style: $Style | null, mouseX: number, mouseY: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square)
         * based on a fixed size textured box with continuous borders and filler.
         */
        blitWithBorder(texture: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, topBorder: number, bottomBorder: number, leftBorder: number, rightBorder: number): void;
        blitWithBorder(sprite: $ResourceLocation_, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, blitOffset: number, uWidth: number, vHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given coordinates.
         */
        blitInscribed(atlasLocation: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number): void;
        blitInscribed(texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number, centerX: boolean, centerY: boolean): void;
        getColorFromFormattingCharacter(c: string, isLighter: boolean): number;
        drawScrollingString(font: $Font, text: $Component_, x: number, y: number, xOffset: number, color: number): number;
        /**
         * @return returns the buffer source for rendering.
         */
        libgui$getVertexConsumers(): $MultiBufferSource$BufferSource;
        static MIN_GUI_Z: number;
        static MAX_GUI_Z: number;
        constructor(minecraft: $Minecraft, bufferSource: $MultiBufferSource$BufferSource);
    }
    export class $LayeredDraw {
        add(layeredDraw: $LayeredDraw, renderInner: $BooleanSupplier_): $LayeredDraw;
        add(layer: $LayeredDraw$Layer_): $LayeredDraw;
        render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
        static Z_SEPARATION: number;
        constructor();
    }
    export class $MapRenderer$MapInstance implements $AutoCloseable {
    }
    export class $MapRenderer implements $AutoCloseable {
        update(mapId: $MapId_, mapData: $MapItemSavedData): void;
        /**
         * Clears the currently loaded maps and removes their corresponding textures
         */
        close(): void;
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, mapId: $MapId_, mapData: $MapItemSavedData, active: boolean, packedLight: number): void;
        /**
         * Clears the currently loaded maps and removes their corresponding textures
         */
        resetData(): void;
        decorationTextures: $MapDecorationTextureManager;
        textureManager: $TextureManager;
        constructor(textureManager: $TextureManager, decorationTextures: $MapDecorationTextureManager);
    }
    /**
     * The `Leaf` class represents a leaf component path in the hierarchy.
     */
    export class $ComponentPath$Leaf extends $Record implements $ComponentPath {
        /**
         * @return the `GuiEventListener` component associated with this component path
         */
        component(): $GuiEventListener;
        /**
         * Applies focus to or removes focus from the component associated with this leaf path.
         * focused `true` to apply focus, `false` to remove focus
         */
        applyFocus(focused: boolean): void;
        constructor(arg0: $GuiEventListener);
    }
    export class $Gui$1DisplayEntry extends $Record {
    }
    export class $Font implements $IFontExtension, $FontAccessor, $JadeFont {
        split(text: $FormattedText, maxWidth: number): $List<$FormattedCharSequence>;
        self(): $Font;
        width(text: $FormattedText): number;
        /**
         * Returns the width of this string. Equivalent of FontMetrics.stringWidth(String s).
         */
        width(text: string): number;
        width(text: $FormattedCharSequence_): number;
        getSplitter(): $StringSplitter;
        renderText(text: string, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number): number;
        /**
         * Get bidiFlag that controls if the Unicode Bidirectional Algorithm should be run before rendering any string
         */
        isBidirectional(): boolean;
        drawInBatch(text: $FormattedCharSequence_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number): number;
        drawInBatch(text: string, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number): number;
        drawInBatch(text: string, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number, bidirectional: boolean): number;
        drawInBatch(text: $Component_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number): number;
        getFontSet(fontLocation: $ResourceLocation_): $FontSet;
        renderChar(glyph: $BakedGlyph, bold: boolean, italic: boolean, boldOffset: number, x: number, y: number, matrix: $Matrix4f, buffer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, packedLight: number): void;
        handler$fpc000$chloride$inject$renderText(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        handler$fpc000$chloride$inject$renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        /**
         * Apply Unicode Bidirectional Algorithm to string and return a new possibly reordered string for visual rendering.
         */
        bidirectionalShaping(text: string): string;
        drawInBatch8xOutline(text: $FormattedCharSequence_, x: number, y: number, color: number, backgroundColor: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource_, packedLightCoords: number): void;
        jade$setGlintStrength(arg0: number, arg1: number): void;
        plainSubstrByWidth(text: string, maxWidth: number, tail: boolean): string;
        plainSubstrByWidth(text: string, maxWidth: number): string;
        substrByWidth(text: $FormattedText, maxWidth: number): $FormattedText;
        /**
         * Returns the height (in pixels) of the given string if it is wordwrapped to the given max width.
         */
        wordWrapHeight(text: string, maxWidth: number): number;
        wordWrapHeight(text: $FormattedText, maxWidth: number): number;
        jade$setGlint(arg0: number, arg1: number): void;
        ellipsize(text: $FormattedText, maxWidth: number): $FormattedText;
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
        random: $RandomSource;
        filterFishyGlyphs: boolean;
        fonts: $Function<$ResourceLocation, $FontSet>;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        splitter: $StringSplitter;
        constructor(fonts: $Function_<$ResourceLocation, $FontSet>, filterFishyGlyphs: boolean);
        get bidirectional(): boolean;
    }
    export class $Gui$HeartType extends $Enum<$Gui$HeartType> implements $IExtensibleEnum {
        static values(): $Gui$HeartType[];
        static valueOf(arg0: string): $Gui$HeartType;
        static getExtensionInfo(): $ExtensionInfo;
        /**
         * Returns the `HeartType` based on the player's status effects.
         * 
         * @return the `HeartType` based on the player's status effects.
         */
        static forPlayer(player: $Player): $Gui$HeartType;
        getSprite(hardcore: boolean, halfHeart: boolean, blinking: boolean): $ResourceLocation;
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
    /**
     * A utility class for managing a stack of screen rectangles for scissoring.
     */
    export class $GuiGraphics$ScissorStack {
        /**
         * Pushes a screen rectangle onto the scissor stack.
         * 
         * @return The resulting intersection of the pushed rectangle with the previous top rectangle on the stack, or the pushed rectangle if the stack is empty.
         */
        push(scissor: $ScreenRectangle_): $ScreenRectangle;
        /**
         * Pops the top screen rectangle from the scissor stack.
         * 
         * @return The new top screen rectangle after the pop operation, or null if the stack is empty.
         * @throws IllegalStateException if the stack is empty.
         */
        pop(): $ScreenRectangle;
        containsPoint(x: number, y: number): boolean;
        constructor();
    }
    export class $Gui implements $GuiSubtitleOverlayAccess, $GuiAccessor {
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        clear(): void;
        /**
         * Sets the fade-in, stay, and fade-out times for the title display.
         */
        setTimes(titleFadeInTime: number, titleStayTime: number, titleFadeOutTime: number): void;
        /**
         * @return `true` if the chat is disabled, `false` if chat is enabled
         */
        tick(chatDisabledByPlayerShown: boolean): void;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        clearCache(): void;
        render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
        /**
         * @return the number of GUI ticks elapsed
         */
        getGuiTicks(): number;
        /**
         * @return `true` if the chat is disabled, `false` if chat is enabled
         */
        setChatDisabledByPlayerShown(chatDisabledByPlayerShown: boolean): void;
        /**
         * @return `true` if the chat disabled message is being shown, `false` otherwise
         */
        isShowingChatDisabledByPlayer(): boolean;
        handler$jfg009$axiom$tick(ci: $CallbackInfo): void;
        /**
         * Renders the experience bar on the screen using the provided GuiGraphics object and x-coordinate.
         */
        renderSelectedItemName(guiGraphics: $GuiGraphics, x: number): void;
        /**
         * @return the `SpectatorGui` instance
         */
        getSpectatorGui(): $SpectatorGui;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        onDisconnected(): void;
        /**
         * @return the `BossHealthOverlay` instance associated with the client
         */
        getBossOverlay(): $BossHealthOverlay;
        handler$jfg000$axiom$renderCrosshair(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        /**
         * Sets the currently playing record display name and updates the overlay message.
         */
        setNowPlaying(displayName: $Component_): void;
        /**
         * @return the `Font` used for rendering text in the GUI
         */
        getFont(): $Font;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        initModdedOverlays(): void;
        /**
         * @return a pointer to the persistent Chat GUI, containing all previous chat messages and such
         */
        getChat(): $ChatComponent;
        /**
         * Sets the currently playing record display name and updates the overlay message.
         */
        setTitle(displayName: $Component_): void;
        /**
         * Sets the overlay message to be displayed on the screen.
         */
        setOverlayMessage(component: $Component_, animateColor: boolean): void;
        getDebugOverlay(): $DebugScreenOverlay;
        /**
         * @return the number of GUI ticks elapsed
         */
        getLayerCount(): number;
        renderSavingIndicator(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
        /**
         * Sets the currently playing record display name and updates the overlay message.
         */
        setSubtitle(displayName: $Component_): void;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        resetTitleTimes(): void;
        /**
         * @return the `PlayerTabOverlay` overlay
         */
        getTabList(): $PlayerTabOverlay;
        handler$jfg000$axiom$canRenderCrosshairForSpectator(hitResult: $HitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$fcf000$inventoryprofilesnext$preRenderHotbar(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        handler$fcf000$inventoryprofilesnext$postRenderHotbar(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        wrapWithCondition$jfg000$axiom$blitSelectedHotbar(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        wrapMethod$bgd000$iris$handleHudHidingScreens(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $Operation_<any>): void;
        handler$fnc000$pingwheel$render(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        handler$jfg001$axiom$render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$jfg000$axiom$renderHotbar(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$jfg000$axiom$renderSelectedItemName(guiGraphics: $GuiGraphics, adapter_injected_1: number, ci: $CallbackInfo): void;
        getSubtitleOverlay(): $SubtitleOverlay;
        create$getSubtitleOverlay(): $SubtitleOverlay;
        /**
         * @return the number of GUI ticks elapsed
         */
        create$getToolHighlightTimer(): number;
        /**
         * Renders a texture overlay on the screen with the specified shader location and alpha value.
         */
        create$renderTextureOverlay(guiGraphics: $GuiGraphics, shaderLocation: $ResourceLocation_, alpha: number): void;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        rightHeight: number;
        leftHeight: number;
        constructor(minecraft: $Minecraft);
        get guiTicks(): number;
        set chatDisabledByPlayerShown(value: boolean);
        get showingChatDisabledByPlayer(): boolean;
        get spectatorGui(): $SpectatorGui;
        get bossOverlay(): $BossHealthOverlay;
        set nowPlaying(value: $Component_);
        get font(): $Font;
        get chat(): $ChatComponent;
        set title(value: $Component_);
        get debugOverlay(): $DebugScreenOverlay;
        get layerCount(): number;
        set subtitle(value: $Component_);
        get tabList(): $PlayerTabOverlay;
        get subtitleOverlay(): $SubtitleOverlay;
    }
    export class $GuiSpriteManager extends $TextureAtlasHolder {
        getSpriteScaling(sprite: $TextureAtlasSprite): $GuiSpriteScaling;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
    }
    /**
     * The `Path` class represents a non-leaf component path in the hierarchy.
     */
    export class $ComponentPath$Path extends $Record implements $ComponentPath {
        /**
         * @return the child path associated with this path
         */
        childPath(): $ComponentPath;
        /**
         * Applies focus to or removes focus from the component associated with this component path.
         * focused `true` to apply focus, `false` to remove focus
         */
        applyFocus(focused: boolean): void;
        /**
         * @return the `GuiEventListener` component associated with this component path
         */
        component(): $GuiEventListener;
        constructor(component: $ContainerEventHandler, childPath: $ComponentPath);
    }
    export class $LayeredDraw$Layer {
    }
    export interface $LayeredDraw$Layer {
        render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
    }
    /**
     * Values that may be interpreted as {@link $LayeredDraw$Layer}.
     */
    export type $LayeredDraw$Layer_ = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
    /**
     * Represents a path of components in a user interface hierarchy.
     * 
     * It provides methods to create and manipulate component paths.
     */
    export class $ComponentPath {
        /**
         * Creates a component path with the specified `ContainerEventHandler` component and an optional child path.
         * 
         * @return a new component path, or `null` if the child path is null
         */
        static path(component: $ContainerEventHandler, childPath: $ComponentPath | null): $ComponentPath;
        /**
         * Creates a new `ComponentPath` leaf node with the specified `GuiEventListener` component and an array of `ContainerEventHandler` ancestors.
         * 
         * @return a new component path
         */
        static path(leafComponent: $GuiEventListener, ...ancestorComponents: $ContainerEventHandler[]): $ComponentPath;
        /**
         * Creates a leaf component path with the specified `GuiEventListener` component.
         * 
         * @return a new leaf component path.
         */
        static leaf(component: $GuiEventListener): $ComponentPath;
    }
    export interface $ComponentPath {
        /**
         * @return the `GuiEventListener` component associated with this component path
         */
        component(): $GuiEventListener;
        /**
         * Applies focus to or removes focus from the component associated with this component path.
         */
        applyFocus(focused: boolean): void;
    }
}
