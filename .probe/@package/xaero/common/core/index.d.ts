import { $SectionPos } from "@package/net/minecraft/core";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $XaeroMinimapSession } from "@package/xaero/common";

declare module "@package/xaero/common/core" {
    export class $IXaeroMinimapSMultiBlockChangePacket {
    }
    export interface $IXaeroMinimapSMultiBlockChangePacket {
        xaero_mm_getSectionPos(): $SectionPos;
    }
    /**
     * Values that may be interpreted as {@link $IXaeroMinimapSMultiBlockChangePacket}.
     */
    export type $IXaeroMinimapSMultiBlockChangePacket_ = (() => $SectionPos);
    export class $IBufferSource {
    }
    export interface $IBufferSource {
        getXaero_lastRenderType(): $RenderType;
        setXaero_lastRenderType(arg0: $RenderType): void;
    }
    export class $IXaeroMinimapClientPlayNetHandler {
    }
    export interface $IXaeroMinimapClientPlayNetHandler {
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
    }
    export class $IXaeroMinimapMinecraftClient {
    }
    export interface $IXaeroMinimapMinecraftClient {
        getXaeroMinimap_fps(): number;
        get xaeroMinimap_fps(): number;
    }
    /**
     * Values that may be interpreted as {@link $IXaeroMinimapMinecraftClient}.
     */
    export type $IXaeroMinimapMinecraftClient_ = (() => number);
}
