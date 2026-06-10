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
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        getDimensionDivision(arg0: $MinimapWorld): number;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        constructor();
    }
    export class $MinimapWorldManager {
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        containerExists(arg0: $XaeroPath): boolean;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getAutoWorld(): $MinimapWorld;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        hasCustomWaypoints(): boolean;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get autoWorld(): $MinimapWorld;
        get autoRootContainer(): $MinimapWorldRootContainer;
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get currentRootContainer(): $MinimapWorldRootContainer;
    }
    export class $MinimapWorld {
        getNode(): string;
        setNode(arg0: string): void;
        getContainer(): $MinimapWorldContainer;
        setContainer(arg0: $MinimapWorldContainer): void;
        getWaypointSet(arg0: string): $WaypointSet;
        getRootConfig(): $RootConfig;
        setSlimeChunkSeed(arg0: number): void;
        getSlimeChunkSeed(): number;
        getFullPath(): $XaeroPath;
        removeWaypointSet(arg0: string): $WaypointSet;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        addWaypointSet(arg0: string): void;
        cleanupOnSave(arg0: $Path_): void;
        getLocalWorldKey(): $XaeroPath;
        getSetCount(): number;
        setCurrentWaypointSetId(arg0: string): void;
        getCurrentWaypointSetId(): string;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        getCurrentWaypointSet(): $WaypointSet;
        getDimId(): $ResourceKey<$Level>;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        hasSomethingToRemoveOnSave(): boolean;
        requestRemovalOnSave(arg0: string): void;
        get rootConfig(): $RootConfig;
        get fullPath(): $XaeroPath;
        get localWorldKey(): $XaeroPath;
        get setCount(): number;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
    }
}
