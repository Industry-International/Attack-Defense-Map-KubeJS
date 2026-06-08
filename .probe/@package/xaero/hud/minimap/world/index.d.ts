import { $Level } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HudMod } from "@package/xaero/common";
import { $HashMap } from "@package/java/util";
import { $WaypointSet } from "@package/xaero/hud/minimap/waypoint/set";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as connection from "@package/xaero/hud/minimap/world/connection";
export * as io from "@package/xaero/hud/minimap/world/io";
export * as container from "@package/xaero/hud/minimap/world/container";
export * as state from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/world" {
    export class $MinimapDimensionHelper {
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        getDimensionDivision(arg0: $MinimapWorld): number;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        constructor();
    }
    export class $MinimapWorldManager {
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        removeContainer(arg0: $XaeroPath): boolean;
        hasCustomWaypoints(): boolean;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getAutoWorld(): $MinimapWorld;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        containerExists(arg0: $XaeroPath): boolean;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCurrentWorld(): $MinimapWorld;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get autoWorld(): $MinimapWorld;
        get autoRootContainer(): $MinimapWorldRootContainer;
        get currentRootContainer(): $MinimapWorldRootContainer;
    }
    export class $MinimapWorld {
        getNode(): string;
        setNode(arg0: string): void;
        getContainer(): $MinimapWorldContainer;
        requestRemovalOnSave(arg0: string): void;
        hasSomethingToRemoveOnSave(): boolean;
        getFullPath(): $XaeroPath;
        setContainer(arg0: $MinimapWorldContainer): void;
        getDimId(): $ResourceKey<$Level>;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        setCurrentWaypointSetId(arg0: string): void;
        getCurrentWaypointSetId(): string;
        getCurrentWaypointSet(): $WaypointSet;
        cleanupOnSave(arg0: $Path_): void;
        addWaypointSet(arg0: string): void;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        getLocalWorldKey(): $XaeroPath;
        removeWaypointSet(arg0: string): $WaypointSet;
        getSetCount(): number;
        getWaypointSet(arg0: string): $WaypointSet;
        setSlimeChunkSeed(arg0: number): void;
        getRootConfig(): $RootConfig;
        getSlimeChunkSeed(): number;
        get fullPath(): $XaeroPath;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
        get localWorldKey(): $XaeroPath;
        get setCount(): number;
        get rootConfig(): $RootConfig;
    }
}
