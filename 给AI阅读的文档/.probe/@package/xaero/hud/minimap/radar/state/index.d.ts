import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $EntityRadarCategory, $EntityRadarCategoryManager } from "@package/xaero/hud/minimap/radar/category";
import { $ObjectCategorySetting } from "@package/xaero/hud/category/setting";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparable, $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/radar/state" {
    export class $RadarState {
        getRadarLists(): $Iterable<$RadarList>;
        getListsGeneratedForSyncedConfig(): $EntityRadarCategory;
        setListsGeneratedForSyncedConfig(arg0: $EntityRadarCategory): void;
        getListsGeneratedForConfig(): $EntityRadarCategory;
        getListsReversedOrder(): boolean;
        constructor();
        get radarLists(): $Iterable<$RadarList>;
        get listsGeneratedForConfig(): $EntityRadarCategory;
        get listsReversedOrder(): boolean;
    }
    export class $RadarList implements $Comparable<$RadarList> {
        getEntities(): $Iterable<$Entity>;
        size(): number;
        get(arg0: number): $Entity;
        compareTo(arg0: $RadarList): number;
        add(arg0: $Entity): boolean;
        getEffective<T>(arg0: $ObjectCategorySetting<T>): T;
        clearEntities(): void;
        getSyncedCategory(): $EntityRadarCategory;
        getClientCategory(): $EntityRadarCategory;
        setClientCategory(arg0: $EntityRadarCategory): $RadarList;
        setSyncedCategory(arg0: $EntityRadarCategory): $RadarList;
        get entities(): $Iterable<$Entity>;
    }
    export class $RadarStateUpdater {
        update(arg0: $ClientLevel, arg1: $Entity, arg2: $Player): void;
        setLastRenderViewEntity(arg0: $Entity): void;
        constructor(arg0: $EntityRadarCategoryManager, arg1: $RadarState);
        set lastRenderViewEntity(value: $Entity);
    }
}
