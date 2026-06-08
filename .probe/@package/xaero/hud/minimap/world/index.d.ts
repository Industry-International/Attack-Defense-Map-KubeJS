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
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        getDimensionDivision(arg0: $MinimapWorld): number;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        constructor();
    }
    export class $MinimapWorldManager {
        getAutoWorld(): $MinimapWorld;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        containerExists(arg0: $XaeroPath): boolean;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        hasCustomWaypoints(): boolean;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
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
        getFullPath(): $XaeroPath;
        setContainer(arg0: $MinimapWorldContainer): void;
        requestRemovalOnSave(arg0: string): void;
        hasSomethingToRemoveOnSave(): boolean;
        addWaypointSet(arg0: string): void;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        cleanupOnSave(arg0: $Path_): void;
        removeWaypointSet(arg0: string): $WaypointSet;
        getLocalWorldKey(): $XaeroPath;
        getSetCount(): number;
        getWaypointSet(arg0: string): $WaypointSet;
        getSlimeChunkSeed(): number;
        setSlimeChunkSeed(arg0: number): void;
        getRootConfig(): $RootConfig;
        setCurrentWaypointSetId(arg0: string): void;
        getCurrentWaypointSetId(): string;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        getCurrentWaypointSet(): $WaypointSet;
        getDimId(): $ResourceKey<$Level>;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        get fullPath(): $XaeroPath;
        get localWorldKey(): $XaeroPath;
        get setCount(): number;
        get rootConfig(): $RootConfig;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
    }
}
