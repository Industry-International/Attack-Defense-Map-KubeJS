import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapElementRenderer, $MinimapElementRenderInfo } from "@package/xaero/hud/minimap/element/render";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID_, $UUID } from "@package/java/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $RenderedPlayerTrackerManager, $IRenderedPlayerTracker } from "@package/xaero/hud/minimap/player/tracker/system";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $MultiTextureRenderTypeRenderer } from "@package/xaero/common/graphics/renderer/multitexture";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Iterable } from "@package/java/lang";
export * as synced from "@package/xaero/hud/minimap/player/tracker/synced";
export * as system from "@package/xaero/hud/minimap/player/tracker/system";

declare module "@package/xaero/hud/minimap/player/tracker" {
    export class $PlayerTrackerMinimapElementRenderContext {
        uniqueTextureUIObjectRenderer: $MultiTextureRenderTypeRenderer;
        coloredBackgroundConsumer: $VertexConsumer;
        renderEntityDimId: $ResourceKey<$Level>;
        mapDimId: $ResourceKey<$Level>;
        iconScale: number;
        constructor();
    }
    export class $PlayerTrackerMinimapElementCollector {
        getElements(): $Iterable<$PlayerTrackerMinimapElement<never>>;
        update(arg0: $Minecraft): void;
        resetRenderedOnRadarFlags(): void;
        confirmPlayerRadarRender(arg0: $Player): void;
        playerExists(arg0: $UUID_): boolean;
        constructor(arg0: $RenderedPlayerTrackerManager);
        get elements(): $Iterable<$PlayerTrackerMinimapElement<never>>;
    }
    export class $PlayerTrackerMinimapElementRenderer extends $MinimapElementRenderer<$PlayerTrackerMinimapElement<never>, $PlayerTrackerMinimapElementRenderContext> {
        renderElement(arg0: $PlayerTrackerMinimapElement<never>, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MinimapElementRenderInfo, arg8: $GuiGraphics, arg9: $MultiBufferSource$BufferSource): boolean;
        getCollector(): $PlayerTrackerMinimapElementCollector;
        getPlayerSkin(arg0: $Player, arg1: $PlayerInfo): $ResourceLocation;
        get collector(): $PlayerTrackerMinimapElementCollector;
    }
    export class $PlayerTrackerMinimapElement<P> {
        getY(): number;
        getDimension(): $ResourceKey<$Level>;
        setRenderedOnRadar(arg0: boolean): void;
        wasRenderedOnRadar(): boolean;
        getSystem(): $IRenderedPlayerTracker<P>;
        getZ(): number;
        getX(): number;
        getPlayer(): P;
        getPlayerId(): $UUID;
        constructor(arg0: P, arg1: $IRenderedPlayerTracker<P>);
        get y(): number;
        get dimension(): $ResourceKey<$Level>;
        set renderedOnRadar(value: boolean);
        get system(): $IRenderedPlayerTracker<P>;
        get z(): number;
        get x(): number;
        get player(): P;
        get playerId(): $UUID;
    }
}
