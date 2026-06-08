import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        setPath(arg0: $XaeroPath): void;
        getSubName(): string;
        getWorlds(): $Iterable<$MinimapWorld>;
        removeName(arg0: string): void;
        getLastNode(): string;
        getSession(): $MinimapSession;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        getDirectoryPath(): $Path;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getFullWorldName(arg0: string, arg1: string): string;
        getWorldsCopy(): $List<$MinimapWorld>;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        removeWorld(arg0: string): void;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getServerWaypointManager(): $ServerWaypointManager;
        containsSubContainer(arg0: $XaeroPath): boolean;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get worlds(): $Iterable<$MinimapWorld>;
        get lastNode(): string;
        get session(): $MinimapSession;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get directoryPath(): $Path;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get worldsCopy(): $List<$MinimapWorld>;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get serverWaypointManager(): $ServerWaypointManager;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getConfig(): $RootConfig;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        renameOldContainer(arg0: $XaeroPath): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        updateConnectionsField(arg0: $WaypointSession): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
