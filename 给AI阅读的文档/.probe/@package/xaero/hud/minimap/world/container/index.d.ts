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
        removeName(arg0: string): void;
        getSession(): $MinimapSession;
        setPath(arg0: $XaeroPath): void;
        removeWorld(arg0: string): void;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        getSubName(): string;
        getDirectoryPath(): $Path;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getFullWorldName(arg0: string, arg1: string): string;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        getWorlds(): $Iterable<$MinimapWorld>;
        getWorldsCopy(): $List<$MinimapWorld>;
        getLastNode(): string;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        containsSubContainer(arg0: $XaeroPath): boolean;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getServerWaypointManager(): $ServerWaypointManager;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get session(): $MinimapSession;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get subName(): string;
        get directoryPath(): $Path;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get worlds(): $Iterable<$MinimapWorld>;
        get worldsCopy(): $List<$MinimapWorld>;
        get lastNode(): string;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get serverWaypointManager(): $ServerWaypointManager;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
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
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        isConfigLoaded(): boolean;
        renameOldContainer(arg0: $XaeroPath): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        updateConnectionsField(arg0: $WaypointSession): void;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
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
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
