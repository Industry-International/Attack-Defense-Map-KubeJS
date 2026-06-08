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
        addWorld(arg0: $MinimapWorld): void;
        addWorld(arg0: string): $MinimapWorld;
        getSession(): $MinimapSession;
        getWorlds(): $Iterable<$MinimapWorld>;
        getLastNode(): string;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        getDirectoryPath(): $Path;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getFullWorldName(arg0: string, arg1: string): string;
        removeWorld(arg0: string): void;
        getWorldsCopy(): $List<$MinimapWorld>;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        removeName(arg0: string): void;
        getServerWaypointManager(): $ServerWaypointManager;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        containsSubContainer(arg0: $XaeroPath): boolean;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get session(): $MinimapSession;
        get worlds(): $Iterable<$MinimapWorld>;
        get lastNode(): string;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get directoryPath(): $Path;
        get worldsCopy(): $List<$MinimapWorld>;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get serverWaypointManager(): $ServerWaypointManager;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        updateConnectionsField(arg0: $WaypointSession): void;
        updateDimensionType(arg0: $ClientLevel): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
