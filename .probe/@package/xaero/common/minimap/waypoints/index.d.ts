import { $File } from "@package/java/io";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointColor, $WaypointColor_, $WaypointPurpose_, $WaypointSharingHandler as $WaypointSharingHandler$1, $WaypointPurpose } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $Component } from "@package/net/minecraft/network/chat";
import { $XaeroMinimapSession, $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Camera } from "@package/net/minecraft/client";
import { $ArrayList, $HashMap, $List, $Hashtable } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientPacketListener, $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $WaypointSet as $WaypointSet$1 } from "@package/xaero/hud/minimap/waypoint/set";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $HudModule } from "@package/xaero/hud/module";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Enum, $Comparable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
export * as render from "@package/xaero/common/minimap/waypoints/render";

declare module "@package/xaero/common/minimap/waypoints" {
    export class $Waypoint implements $Comparable<$Waypoint> {
        /**
         * @deprecated
         */
        isOneoffDestination(): boolean;
        /**
         * @deprecated
         */
        setOneoffDestination(arg0: boolean): void;
        static getStringFromStringSafe(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        setType(arg0: number): void;
        getInitials(): string;
        getY(): number;
        getX(arg0: number): number;
        getX(): number;
        getName(): string;
        compareTo(arg0: $Waypoint): number;
        setName(arg0: string): void;
        /**
         * @deprecated
         */
        getSymbol(): string;
        /**
         * @deprecated
         */
        setColor(arg0: number): void;
        getLocalizedName(): string;
        /**
         * @deprecated
         */
        getColor(): number;
        isDestination(): boolean;
        isDisabled(): boolean;
        isGlobal(): boolean;
        setYaw(arg0: number): void;
        setDisabled(arg0: boolean): void;
        setVisibility(arg0: $WaypointVisibilityType_): void;
        getVisibility(): $WaypointVisibilityType;
        /**
         * @deprecated
         */
        setSymbol(arg0: string): void;
        isRotation(): boolean;
        getPurpose(): $WaypointPurpose;
        setPurpose(arg0: $WaypointPurpose_): void;
        getZ(): number;
        getZ(arg0: number): number;
        setY(arg0: number): void;
        setZ(arg0: number): void;
        setX(arg0: number): void;
        setRotation(arg0: boolean): void;
        /**
         * @deprecated
         */
        getActualColor(): number;
        isYIncluded(): boolean;
        isTemporary(): boolean;
        getWaypointColor(): $WaypointColor;
        setWaypointColor(arg0: $WaypointColor_): void;
        /**
         * @deprecated
         */
        getVisibilityType(): number;
        setYIncluded(arg0: boolean): void;
        setInitials(arg0: string): void;
        setTemporary(arg0: boolean): void;
        isServerWaypoint(): boolean;
        getComparisonName(): string;
        getYaw(): number;
        /**
         * @deprecated
         */
        getWaypointType(): number;
        /**
         * @deprecated
         */
        getSymbolSafe(arg0: string): string;
        getInitialsSafe(arg0: string): string;
        getNameSafe(arg0: string): string;
        /**
         * @deprecated
         */
        setVisibilityType(arg0: number): void;
        getCreatedAt(): number;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getComparisonDistance(arg0: $Camera, arg1: number): number;
        getComparisonAngleCos(arg0: $Camera, arg1: number): number;
        static ONEOFF_DESTINATION_SAFE_FOR: number;
        static ONEOFF_DESTINATION_REMOVE_DISTANCE: number;
        static RENDER_SORTING_POS: $Vec3;
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number, arg6: number, arg7: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number, arg6: number, arg7: boolean, arg8: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number, arg6: number);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_, arg6: $WaypointPurpose_, arg7: boolean, arg8: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_, arg6: $WaypointPurpose_, arg7: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_, arg6: $WaypointPurpose_);
        set type(value: number);
        get localizedName(): string;
        get destination(): boolean;
        get global(): boolean;
        get actualColor(): number;
        get serverWaypoint(): boolean;
        get comparisonName(): string;
        get waypointType(): number;
        get createdAt(): number;
    }
    /**
     * @deprecated
     */
    export class $WaypointWorldRootContainer extends $MinimapWorldRootContainer {
        /**
         * @deprecated
         */
        loadConfig(): void;
        /**
         * @deprecated
         */
        saveConfig(): void;
        /**
         * @deprecated
         */
        getSubWorldConnections(): $WaypointWorldConnectionManager;
        /**
         * @deprecated
         */
        updateConnectionsField(arg0: $XaeroMinimapSession): void;
        /**
         * @deprecated
         */
        constructor(arg0: $IXaeroMinimap, arg1: $XaeroMinimapSession, arg2: string);
        /**
         * @deprecated
         */
        constructor(arg0: $HudMod, arg1: $MinimapSession, arg2: $XaeroPath);
        get subWorldConnections(): $WaypointWorldConnectionManager;
    }
    /**
     * @deprecated
     */
    export class $WaypointWorldConnectionManager extends $MinimapWorldConnectionManager {
        /**
         * @deprecated
         */
        isConnected(arg0: $WaypointWorld, arg1: $WaypointWorld): boolean;
        /**
         * @deprecated
         */
        removeConnection(arg0: $WaypointWorld, arg1: $WaypointWorld): void;
        /**
         * @deprecated
         */
        swapConnections(arg0: $WaypointWorld, arg1: $WaypointWorld): void;
        /**
         * @deprecated
         */
        addConnection(arg0: $WaypointWorld, arg1: $WaypointWorld): void;
        /**
         * @deprecated
         */
        constructor();
        /**
         * @deprecated
         */
        constructor(arg0: boolean);
    }
    /**
     * @deprecated
     */
    export class $WaypointWorld extends $MinimapWorld {
        /**
         * @deprecated
         */
        getId(): string;
        /**
         * @deprecated
         */
        getContainer(): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        setCurrent(arg0: string): void;
        /**
         * @deprecated
         */
        setId(arg0: string): void;
        /**
         * @deprecated
         */
        setContainer(arg0: $WaypointWorldContainer): void;
        /**
         * @deprecated
         */
        getCurrent(): string;
        /**
         * @deprecated
         */
        addSet(arg0: string): void;
        /**
         * @deprecated
         */
        getServerWaypointsDisabled(): $HashMap<string, boolean>;
        /**
         * @deprecated
         */
        getInternalWorldKey(): string;
        /**
         * @deprecated
         */
        getServerWaypoints(): $HashMap<number, $Waypoint>;
        /**
         * @deprecated
         */
        getCurrentSet(): $WaypointSet;
        /**
         * @deprecated
         */
        getSets(): $HashMap<string, $WaypointSet>;
        /**
         * @deprecated
         */
        getFullId(): string;
        /**
         * @deprecated
         */
        constructor(arg0: $WaypointWorldContainer, arg1: string, arg2: $ResourceKey_<$Level>);
        get serverWaypointsDisabled(): $HashMap<string, boolean>;
        get internalWorldKey(): string;
        get serverWaypoints(): $HashMap<number, $Waypoint>;
        get currentSet(): $WaypointSet;
        get sets(): $HashMap<string, $WaypointSet>;
        get fullId(): string;
    }
    /**
     * @deprecated
     */
    export class $WaypointSharingHandler extends $WaypointSharingHandler$1 {
        /**
         * @deprecated
         */
        shareWaypoint(arg0: $Screen, arg1: $Waypoint, arg2: $WaypointWorld): void;
        static WAYPOINT_OLD_SHARE_PREFIX: string;
        static WAYPOINT_ADD_PREFIX: string;
        static WAYPOINT_SHARE_PREFIX: string;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
    }
    /**
     * @deprecated
     */
    export class $WaypointSet extends $WaypointSet$1 {
        /**
         * @deprecated
         */
        getList(): $ArrayList<$Waypoint>;
        /**
         * @deprecated
         */
        constructor(arg0: string);
        get list(): $ArrayList<$Waypoint>;
    }
    /**
     * @deprecated
     */
    export class $WaypointWorldContainer extends $MinimapWorldContainer {
        /**
         * @deprecated
         */
        getKey(): string;
        /**
         * @deprecated
         */
        addName(arg0: string, arg1: string): void;
        /**
         * @deprecated
         */
        getFullName(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        setKey(arg0: string): void;
        /**
         * @deprecated
         */
        getDirectory(): $File;
        /**
         * @deprecated
         */
        getEqualIgnoreCaseSub(arg0: string): string;
        /**
         * @deprecated
         */
        getFirstWorldConnectedTo(arg0: $WaypointWorld): $WaypointWorld;
        /**
         * @deprecated
         */
        getSubId(): string;
        /**
         * @deprecated
         */
        deleteSubContainer(arg0: string): void;
        /**
         * @deprecated
         */
        containsSub(arg0: string): boolean;
        /**
         * @deprecated
         */
        addSubContainer(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        getAllWorlds(): $ArrayList<$WaypointWorld>;
        /**
         * @deprecated
         */
        getRootContainer(): $WaypointWorldRootContainer;
        /**
         * @deprecated
         */
        addWorld(arg0: string): $WaypointWorld;
        /**
         * @deprecated
         */
        constructor(arg0: $IXaeroMinimap, arg1: $XaeroMinimapSession, arg2: string, arg3: $WaypointWorldRootContainer);
        /**
         * @deprecated
         */
        constructor(arg0: $HudMod, arg1: $MinimapSession, arg2: $XaeroPath, arg3: $MinimapWorldRootContainer);
        get directory(): $File;
        get subId(): string;
        get allWorlds(): $ArrayList<$WaypointWorld>;
        get rootContainer(): $WaypointWorldRootContainer;
    }
    /**
     * @deprecated
     */
    export class $WaypointsManager extends $MinimapSession {
        /**
         * @deprecated
         */
        getAutoWorld(): $WaypointWorld;
        /**
         * @deprecated
         */
        teleportAnyway(): void;
        /**
         * @deprecated
         */
        getWorldContainerNullable(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        getCurrentContainerID(): string;
        /**
         * @deprecated
         */
        getCurrentContainerID(arg0: string): string;
        /**
         * @deprecated
         */
        getCustomContainerID(): string;
        /**
         * @deprecated
         */
        isTeleportationSafe(arg0: $WaypointWorld): boolean;
        /**
         * @deprecated
         */
        setCustomContainerID(arg0: string): void;
        /**
         * @deprecated
         */
        ignoreContainerCase(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        getAutoRootContainerID(): string;
        /**
         * @deprecated
         */
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        /**
         * @deprecated
         */
        createTemporaryWaypoints(arg0: $WaypointWorld, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        /**
         * @deprecated
         */
        createTemporaryWaypoints(arg0: $WaypointWorld, arg1: number, arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        createTemporaryWaypoints(arg0: $WaypointWorld, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        /**
         * @deprecated
         */
        isMultiplayer(arg0: string): boolean;
        /**
         * @deprecated
         */
        getAutoContainerID(): string;
        /**
         * @deprecated
         */
        getCustomWorldID(): string;
        /**
         * @deprecated
         */
        addWorldContainer(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        setCurrentSpawn(arg0: $BlockPos_, arg1: $ClientLevel): void;
        /**
         * @deprecated
         */
        getCurrentWorldID(arg0: string): string;
        /**
         * @deprecated
         */
        getCurrentWorldID(): string;
        /**
         * @deprecated
         */
        getWaypointMap(): $HashMap<string, $WaypointWorldContainer>;
        /**
         * @deprecated
         */
        updateWaypoints(): void;
        /**
         * @deprecated
         */
        createDeathpoint(arg0: $Player): void;
        /**
         * @deprecated
         */
        setCustomWorldID(arg0: string): void;
        /**
         * @deprecated
         */
        getAutoWorldID(): string;
        /**
         * @deprecated
         */
        updateWorldIds(): void;
        /**
         * @deprecated
         */
        getNewAutoWorldID(arg0: $ResourceKey_<$Level>, arg1: boolean): string;
        /**
         * @deprecated
         */
        containerExists(arg0: string): boolean;
        /**
         * @deprecated
         */
        getWorldContainer(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        getServerWaypoints(): $List<$Waypoint>;
        /**
         * @deprecated
         */
        setWaypoints(arg0: $WaypointSet): void;
        /**
         * @deprecated
         */
        findDimensionKey(arg0: string): $ResourceKey<$Level>;
        /**
         * @deprecated
         */
        static getCustomWaypoints(arg0: string): $Hashtable<number, $Waypoint>;
        /**
         * @deprecated
         */
        getWorld(arg0: string, arg1: string): $WaypointWorld;
        /**
         * @deprecated
         */
        getCurrentWorld(): $WaypointWorld;
        /**
         * @deprecated
         */
        getCurrentWorld(arg0: string, arg1: string): $WaypointWorld;
        /**
         * @deprecated
         */
        teleportToWaypoint(arg0: $Waypoint, arg1: $WaypointWorld, arg2: $Screen, arg3: boolean): void;
        /**
         * @deprecated
         */
        teleportToWaypoint(arg0: $Waypoint, arg1: $WaypointWorld, arg2: $Screen): void;
        /**
         * @deprecated
         */
        getWaypoints(): $WaypointSet;
        /**
         * @deprecated
         */
        canTeleport(arg0: boolean, arg1: $WaypointWorld): boolean;
        /**
         * @deprecated
         */
        removeContainer(arg0: string): void;
        /**
         * @deprecated
         */
        onServerLevelId(arg0: number): void;
        /**
         * @deprecated
         */
        getDimensionDivision(arg0: $WaypointWorld): number;
        /**
         * @deprecated
         */
        getDimCoordinateScale(arg0: $WaypointWorld): number;
        /**
         * @deprecated
         */
        isWorldTeleportable(arg0: $WaypointWorld): boolean;
        /**
         * @deprecated
         */
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        /**
         * @deprecated
         */
        getCurrentContainerAndWorldID(): string;
        /**
         * @deprecated
         */
        getCurrentContainerAndWorldID(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        getCurrentOriginContainerID(arg0: string): string;
        /**
         * @deprecated
         */
        getCurrentOriginContainerID(): string;
        /**
         * @deprecated
         */
        addWorld(arg0: string, arg1: string): $WaypointWorld;
        static customWaypoints: $Hashtable<string, $Hashtable<number, $Waypoint>>;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get autoWorld(): $WaypointWorld;
        get autoRootContainerID(): string;
        get autoContainerID(): string;
        get waypointMap(): $HashMap<string, $WaypointWorldContainer>;
        get autoWorldID(): string;
        get serverWaypoints(): $List<$Waypoint>;
    }
    export class $WaypointVisibilityType extends $Enum<$WaypointVisibilityType> {
        static values(): $WaypointVisibilityType[];
        static valueOf(arg0: string): $WaypointVisibilityType;
        isGlobal(): boolean;
        getTranslation(): $Component;
        static WORLD_MAP_LOCAL: $WaypointVisibilityType;
        static LOCAL: $WaypointVisibilityType;
        static GLOBAL: $WaypointVisibilityType;
        static WORLD_MAP_GLOBAL: $WaypointVisibilityType;
        get global(): boolean;
        get translation(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $WaypointVisibilityType}.
     */
    export type $WaypointVisibilityType_ = "local" | "global" | "world_map_local" | "world_map_global";
    export class $WaypointsSort extends $Enum<$WaypointsSort> {
        static values(): $WaypointsSort[];
        static valueOf(arg0: string): $WaypointsSort;
        static DISTANCE: $WaypointsSort;
        static SYMBOL: $WaypointsSort;
        static COLOR: $WaypointsSort;
        static ANGLE: $WaypointsSort;
        static NONE: $WaypointsSort;
        optionName: string;
        static NAME: $WaypointsSort;
    }
    /**
     * Values that may be interpreted as {@link $WaypointsSort}.
     */
    export type $WaypointsSort_ = "none" | "name" | "symbol" | "color" | "distance" | "angle";
}
