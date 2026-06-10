import { $ServerWorldCapabilities } from "@package/xaero/map/capabilities";
import { $SectionPos } from "@package/net/minecraft/core";
import { $WorldMapSession } from "@package/xaero/map";

declare module "@package/xaero/map/core" {
    export class $IWorldMapClientPlayNetHandler {
    }
    export interface $IWorldMapClientPlayNetHandler {
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        getXaero_worldmapSession(): $WorldMapSession;
    }
    export class $IWorldMapServerLevel {
    }
    export interface $IWorldMapServerLevel {
        getXaero_wm_capabilities(): $ServerWorldCapabilities;
        setXaero_wm_capabilities(arg0: $ServerWorldCapabilities): void;
    }
    export class $IWorldMapSMultiBlockChangePacket {
    }
    export interface $IWorldMapSMultiBlockChangePacket {
        xaero_wm_getSectionPos(): $SectionPos;
    }
    /**
     * Values that may be interpreted as {@link $IWorldMapSMultiBlockChangePacket}.
     */
    export type $IWorldMapSMultiBlockChangePacket_ = (() => $SectionPos);
    export class $IWorldMapMinecraftClient {
    }
    export interface $IWorldMapMinecraftClient {
        getXaeroWorldMap_fps(): number;
        get xaeroWorldMap_fps(): number;
    }
    /**
     * Values that may be interpreted as {@link $IWorldMapMinecraftClient}.
     */
    export type $IWorldMapMinecraftClient_ = (() => number);
}
