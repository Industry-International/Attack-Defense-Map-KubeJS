import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $RadarList } from "@package/xaero/hud/minimap/radar/state";
import { $EntityRadarCategory, $EntityRadarCategoryManager } from "@package/xaero/hud/minimap/radar/category";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Iterator } from "@package/java/util";
export * as tracker from "@package/xaero/common/minimap/radar/tracker";

declare module "@package/xaero/common/minimap/radar" {
    /**
     * @deprecated
     */
    export class $MinimapRadar extends $RadarSession {
        /**
         * @deprecated
         */
        updateRadar(arg0: $ClientLevel, arg1: $Player, arg2: $Entity, arg3: $MinimapProcessor): void;
        /**
         * @deprecated
         */
        getEntityColour(arg0: $Player, arg1: $Entity, arg2: number, arg3: boolean, arg4: $EntityRadarCategory, arg5: number, arg6: number, arg7: boolean, arg8: number): number;
        /**
         * @deprecated
         */
        getEntityZ(arg0: $Entity, arg1: number): number;
        /**
         * @deprecated
         */
        getEntityX(arg0: $Entity, arg1: number): number;
        /**
         * @deprecated
         */
        getEntityY(arg0: $Entity, arg1: number): number;
        /**
         * @deprecated
         */
        getMaxDistance(arg0: $MinimapProcessor, arg1: boolean): number;
        /**
         * @deprecated
         */
        setLastRenderViewEntity(arg0: $Entity): void;
        /**
         * @deprecated
         */
        getTeamColour(arg0: $Entity): number;
        /**
         * @deprecated
         */
        getEntityBrightness(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        /**
         * @deprecated
         */
        getEntityCategoryManager(): $EntityRadarCategoryManager;
        /**
         * @deprecated
         */
        getRadarListsIterator(): $Iterator<$MinimapRadarList>;
        /**
         * @deprecated
         */
        constructor(arg0: $EntityRadarCategoryManager);
        set lastRenderViewEntity(value: $Entity);
        get entityCategoryManager(): $EntityRadarCategoryManager;
        get radarListsIterator(): $Iterator<$MinimapRadarList>;
    }
    /**
     * @deprecated
     */
    export class $MinimapRadarList extends $RadarList {
        /**
         * @deprecated
         */
        setClientCategory(arg0: $EntityRadarCategory): $MinimapRadarList;
        /**
         * @deprecated
         */
        constructor();
        set clientCategory(value: $EntityRadarCategory);
    }
}
