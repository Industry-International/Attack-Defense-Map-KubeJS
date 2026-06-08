import { $Level } from "@package/net/minecraft/world/level";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Comparable } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
export * as world from "@package/xaero/hud/minimap/element/render/world";
export * as over from "@package/xaero/hud/minimap/element/render/over";

declare module "@package/xaero/hud/minimap/element/render" {
    export class $MinimapElementRenderProvider<E, RC> {
        begin(arg0: $MinimapElementRenderLocation, arg1: RC): void;
        end(arg0: $MinimapElementRenderLocation, arg1: RC): void;
        hasNext(arg0: $MinimapElementRenderLocation, arg1: RC): boolean;
        getNext(arg0: $MinimapElementRenderLocation, arg1: RC): E;
        setupContextAndGetNext(arg0: $MinimapElementRenderLocation, arg1: RC): E;
        constructor();
    }
    export class $MinimapElementRendererHandler {
        add(arg0: $MinimapElementRenderer<never, never>): void;
        render(arg0: $GuiGraphics, arg1: $Vec3_, arg2: number, arg3: $RenderTarget, arg4: number, arg5: $ResourceKey_<$Level>): void;
    }
    export class $MinimapElementRenderInfo {
        mapDimension: $ResourceKey<$Level>;
        renderEntityDimensionScale: number;
        backgroundCoordinateScale: number;
        cave: boolean;
        renderEntityPos: $Vec3;
        renderPos: $Vec3;
        renderEntity: $Entity;
        location: $MinimapElementRenderLocation;
        renderEntityDimension: $ResourceKey<$Level>;
        player: $Player;
        partialTicks: number;
        framebuffer: $RenderTarget;
        constructor(arg0: $MinimapElementRenderLocation, arg1: $Entity, arg2: $Player, arg3: $Vec3_, arg4: boolean, arg5: number, arg6: $RenderTarget, arg7: number, arg8: $ResourceKey_<$Level>);
    }
    export class $MinimapElementReader<E, RC> {
        isHidden(arg0: E, arg1: RC): boolean;
        getRenderZ(arg0: E, arg1: RC, arg2: number): number;
        getRenderX(arg0: E, arg1: RC, arg2: number): number;
        getRenderY(arg0: E, arg1: RC, arg2: number): number;
        isInteractable(arg0: $MinimapElementRenderLocation, arg1: E): boolean;
        getCoordinateScale(arg0: E, arg1: RC, arg2: $MinimapElementRenderInfo): number;
        getRenderBoxRight(arg0: E, arg1: RC, arg2: number): number;
        getBoxScale(arg0: $MinimapElementRenderLocation, arg1: E, arg2: RC): number;
        getRenderBoxLeft(arg0: E, arg1: RC, arg2: number): number;
        getRenderBoxBottom(arg0: E, arg1: RC, arg2: number): number;
        getLeftSideLength(arg0: E, arg1: $Minecraft): number;
        getFilterName(arg0: E): string;
        getRenderBoxTop(arg0: E, arg1: RC, arg2: number): number;
        getMenuName(arg0: E): string;
        isAlwaysHighlightedWhenHovered(arg0: E, arg1: RC): boolean;
        shouldScaleBoxWithOptionalScale(): boolean;
        shouldScalePartialCoordinates(arg0: E, arg1: RC, arg2: $MinimapElementRenderInfo): boolean;
        getRightClickTitleBackgroundColor(arg0: E): number;
        getInteractionBoxLeft(arg0: E, arg1: RC, arg2: number): number;
        getMenuTextFillLeftPadding(arg0: E): number;
        getInteractionBoxRight(arg0: E, arg1: RC, arg2: number): number;
        getInteractionBoxTop(arg0: E, arg1: RC, arg2: number): number;
        getInteractionBoxBottom(arg0: E, arg1: RC, arg2: number): number;
        constructor();
    }
    export class $MinimapElementRenderer<E, RC> implements $Comparable<$MinimapElementRenderer<never, never>> {
        compareTo(arg0: $MinimapElementRenderer<never, never>): number;
        getContext(): RC;
        getProvider(): $MinimapElementRenderProvider<E, RC>;
        getOrder(): number;
        shouldRender(arg0: $MinimapElementRenderLocation): boolean;
        renderElement(arg0: E, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MinimapElementRenderInfo, arg8: $GuiGraphics, arg9: $MultiBufferSource$BufferSource): boolean;
        postRender(arg0: $MinimapElementRenderInfo, arg1: $MultiBufferSource$BufferSource, arg2: $MultiTextureRenderTypeRendererProvider): void;
        preRender(arg0: $MinimapElementRenderInfo, arg1: $MultiBufferSource$BufferSource, arg2: $MultiTextureRenderTypeRendererProvider): void;
        getElementReader(): $MinimapElementReader<E, RC>;
        constructor(arg0: $MinimapElementReader<E, RC>, arg1: $MinimapElementRenderProvider<E, RC>, arg2: RC);
        get context(): RC;
        get provider(): $MinimapElementRenderProvider<E, RC>;
        get order(): number;
        get elementReader(): $MinimapElementReader<E, RC>;
    }
    export class $MinimapElementRenderLocation {
        static fromIndex(arg0: number): $MinimapElementRenderLocation;
        getIndex(): number;
        /**
         * @deprecated
         */
        static IN_GAME: $MinimapElementRenderLocation;
        static OVER_MINIMAP: $MinimapElementRenderLocation;
        static IN_MINIMAP: $MinimapElementRenderLocation;
        static WORLD_MAP: $MinimapElementRenderLocation;
        static UNKNOWN: $MinimapElementRenderLocation;
        static WORLD_MAP_MENU: $MinimapElementRenderLocation;
        static IN_WORLD: $MinimapElementRenderLocation;
        constructor();
        get index(): number;
    }
}
