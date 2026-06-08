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
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        constructor();
    }
    export class $MinimapWorldManager {
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getAutoWorld(): $MinimapWorld;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        containerExists(arg0: $XaeroPath): boolean;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        hasCustomWaypoints(): boolean;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get currentRootContainer(): $MinimapWorldRootContainer;
        get autoWorld(): $MinimapWorld;
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get autoRootContainer(): $MinimapWorldRootContainer;
    }
    export class $MinimapWorld {
        getNode(): string;
        setNode(arg0: string): void;
        getContainer(): $MinimapWorldContainer;
        cleanupOnSave(arg0: $Path_): void;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        addWaypointSet(arg0: string): void;
        getSetCount(): number;
        getLocalWorldKey(): $XaeroPath;
        removeWaypointSet(arg0: string): $WaypointSet;
        getCurrentWaypointSetId(): string;
        setCurrentWaypointSetId(arg0: string): void;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        getCurrentWaypointSet(): $WaypointSet;
        getWaypointSet(arg0: string): $WaypointSet;
        getSlimeChunkSeed(): number;
        getRootConfig(): $RootConfig;
        setSlimeChunkSeed(arg0: number): void;
        setContainer(arg0: $MinimapWorldContainer): void;
        getFullPath(): $XaeroPath;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        getDimId(): $ResourceKey<$Level>;
        hasSomethingToRemoveOnSave(): boolean;
        requestRemovalOnSave(arg0: string): void;
        get setCount(): number;
        get localWorldKey(): $XaeroPath;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
        get rootConfig(): $RootConfig;
        get fullPath(): $XaeroPath;
    }
}
