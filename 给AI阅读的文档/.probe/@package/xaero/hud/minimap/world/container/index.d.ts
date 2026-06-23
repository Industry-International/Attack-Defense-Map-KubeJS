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
        getSession(): $MinimapSession;
        getWorlds(): $Iterable<$MinimapWorld>;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        getLastNode(): string;
        removeName(arg0: string): void;
        addWorld(arg0: $MinimapWorld): void;
        addWorld(arg0: string): $MinimapWorld;
        removeWorld(arg0: string): void;
        getFullWorldName(arg0: string, arg1: string): string;
        getWorldsCopy(): $List<$MinimapWorld>;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getDirectoryPath(): $Path;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getServerWaypointManager(): $ServerWaypointManager;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        containsSubContainer(arg0: $XaeroPath): boolean;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get session(): $MinimapSession;
        get worlds(): $Iterable<$MinimapWorld>;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get lastNode(): string;
        get worldsCopy(): $List<$MinimapWorld>;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get directoryPath(): $Path;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get serverWaypointManager(): $ServerWaypointManager;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
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
        isTeleportationEnabled(): boolean;
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
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
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
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        updateConnectionsField(arg0: $WaypointSession): void;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
