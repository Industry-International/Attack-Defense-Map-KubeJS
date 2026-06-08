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
        getSubName(): string;
        removeName(arg0: string): void;
        setPath(arg0: $XaeroPath): void;
        getSession(): $MinimapSession;
        getLastNode(): string;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        removeWorld(arg0: string): void;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        containsSubContainer(arg0: $XaeroPath): boolean;
        getWorlds(): $Iterable<$MinimapWorld>;
        getDirectoryPath(): $Path;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getWorldsCopy(): $List<$MinimapWorld>;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getFullWorldName(arg0: string, arg1: string): string;
        getServerWaypointManager(): $ServerWaypointManager;
        addWorld(arg0: $MinimapWorld): void;
        addWorld(arg0: string): $MinimapWorld;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get session(): $MinimapSession;
        get lastNode(): string;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get worlds(): $Iterable<$MinimapWorld>;
        get directoryPath(): $Path;
        get worldsCopy(): $List<$MinimapWorld>;
        get serverWaypointManager(): $ServerWaypointManager;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
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
        isUsingDefaultTeleportCommand(): boolean;
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        updateConnectionsField(arg0: $WaypointSession): void;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
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
        toggleSortType(): void;
        renameOldContainer(arg0: $XaeroPath): void;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
