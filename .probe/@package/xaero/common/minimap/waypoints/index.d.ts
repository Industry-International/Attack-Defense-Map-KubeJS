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
        getInitials(): string;
        getY(): number;
        getX(arg0: number): number;
        getX(): number;
        setDisabled(arg0: boolean): void;
        setVisibility(arg0: $WaypointVisibilityType_): void;
        getZ(): number;
        getZ(arg0: number): number;
        /**
         * @deprecated
         */
        getColor(): number;
        isGlobal(): boolean;
        /**
         * @deprecated
         */
        setSymbol(arg0: string): void;
        setX(arg0: number): void;
        setZ(arg0: number): void;
        setY(arg0: number): void;
        setRotation(arg0: boolean): void;
        setYaw(arg0: number): void;
        getVisibility(): $WaypointVisibilityType;
        /**
         * @deprecated
         */
        setType(arg0: number): void;
        /**
         * @deprecated
         */
        getActualColor(): number;
        setYIncluded(arg0: boolean): void;
        setTemporary(arg0: boolean): void;
        getWaypointColor(): $WaypointColor;
        isYIncluded(): boolean;
        setInitials(arg0: string): void;
        isTemporary(): boolean;
        setWaypointColor(arg0: $WaypointColor_): void;
        /**
         * @deprecated
         */
        getVisibilityType(): number;
        getComparisonName(): string;
        isServerWaypoint(): boolean;
        isRotation(): boolean;
        getPurpose(): $WaypointPurpose;
        setPurpose(arg0: $WaypointPurpose_): void;
        getYaw(): number;
        isDisabled(): boolean;
        isDestination(): boolean;
        getComparisonDistance(arg0: $Camera, arg1: number): number;
        getComparisonAngleCos(arg0: $Camera, arg1: number): number;
        /**
         * @deprecated
         */
        isOneoffDestination(): boolean;
        static getStringFromStringSafe(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        setOneoffDestination(arg0: boolean): void;
        getNameSafe(arg0: string): string;
        /**
         * @deprecated
         */
        getSymbolSafe(arg0: string): string;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getInitialsSafe(arg0: string): string;
        /**
         * @deprecated
         */
        setVisibilityType(arg0: number): void;
        getCreatedAt(): number;
        /**
         * @deprecated
         */
        getWaypointType(): number;
        static ONEOFF_DESTINATION_SAFE_FOR: number;
        static ONEOFF_DESTINATION_REMOVE_DISTANCE: number;
        static RENDER_SORTING_POS: $Vec3;
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_, arg6: $WaypointPurpose_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_, arg6: $WaypointPurpose_, arg7: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_, arg6: $WaypointPurpose_, arg7: boolean, arg8: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number, arg6: number);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number, arg6: number, arg7: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: number, arg6: number, arg7: boolean, arg8: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $WaypointColor_);
        get localizedName(): string;
        get global(): boolean;
        set type(value: number);
        get actualColor(): number;
        get comparisonName(): string;
        get serverWaypoint(): boolean;
        get destination(): boolean;
        get createdAt(): number;
        get waypointType(): number;
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
        updateConnectionsField(arg0: $XaeroMinimapSession): void;
        /**
         * @deprecated
         */
        getSubWorldConnections(): $WaypointWorldConnectionManager;
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
        addConnection(arg0: $WaypointWorld, arg1: $WaypointWorld): void;
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
        setId(arg0: string): void;
        /**
         * @deprecated
         */
        setContainer(arg0: $WaypointWorldContainer): void;
        /**
         * @deprecated
         */
        setCurrent(arg0: string): void;
        /**
         * @deprecated
         */
        getCurrentSet(): $WaypointSet;
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
        getServerWaypoints(): $HashMap<number, $Waypoint>;
        /**
         * @deprecated
         */
        getFullId(): string;
        /**
         * @deprecated
         */
        getSets(): $HashMap<string, $WaypointSet>;
        /**
         * @deprecated
         */
        getInternalWorldKey(): string;
        /**
         * @deprecated
         */
        getServerWaypointsDisabled(): $HashMap<string, boolean>;
        /**
         * @deprecated
         */
        constructor(arg0: $WaypointWorldContainer, arg1: string, arg2: $ResourceKey_<$Level>);
        get currentSet(): $WaypointSet;
        get serverWaypoints(): $HashMap<number, $Waypoint>;
        get fullId(): string;
        get sets(): $HashMap<string, $WaypointSet>;
        get internalWorldKey(): string;
        get serverWaypointsDisabled(): $HashMap<string, boolean>;
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
        getAllWorlds(): $ArrayList<$WaypointWorld>;
        /**
         * @deprecated
         */
        getRootContainer(): $WaypointWorldRootContainer;
        /**
         * @deprecated
         */
        setKey(arg0: string): void;
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
        getFirstWorld(): $WaypointWorld;
        /**
         * @deprecated
         */
        getDirectory(): $File;
        /**
         * @deprecated
         */
        getSubId(): string;
        /**
         * @deprecated
         */
        addWorld(arg0: string): $WaypointWorld;
        /**
         * @deprecated
         */
        addSubContainer(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        getFirstWorldConnectedTo(arg0: $WaypointWorld): $WaypointWorld;
        /**
         * @deprecated
         */
        getEqualIgnoreCaseSub(arg0: string): string;
        /**
         * @deprecated
         */
        constructor(arg0: $IXaeroMinimap, arg1: $XaeroMinimapSession, arg2: string, arg3: $WaypointWorldRootContainer);
        /**
         * @deprecated
         */
        constructor(arg0: $HudMod, arg1: $MinimapSession, arg2: $XaeroPath, arg3: $MinimapWorldRootContainer);
        get allWorlds(): $ArrayList<$WaypointWorld>;
        get rootContainer(): $WaypointWorldRootContainer;
        get firstWorld(): $WaypointWorld;
        get directory(): $File;
        get subId(): string;
    }
    /**
     * @deprecated
     */
    export class $WaypointsManager extends $MinimapSession {
        /**
         * @deprecated
         */
        getWorld(arg0: string, arg1: string): $WaypointWorld;
        /**
         * @deprecated
         */
        getCurrentWorld(arg0: string, arg1: string): $WaypointWorld;
        /**
         * @deprecated
         */
        getCurrentWorld(): $WaypointWorld;
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
        teleportToWaypoint(arg0: $Waypoint, arg1: $WaypointWorld, arg2: $Screen): void;
        /**
         * @deprecated
         */
        teleportToWaypoint(arg0: $Waypoint, arg1: $WaypointWorld, arg2: $Screen, arg3: boolean): void;
        /**
         * @deprecated
         */
        removeContainer(arg0: string): void;
        /**
         * @deprecated
         */
        teleportAnyway(): void;
        /**
         * @deprecated
         */
        getAutoWorldID(): string;
        /**
         * @deprecated
         */
        getWaypointMap(): $HashMap<string, $WaypointWorldContainer>;
        /**
         * @deprecated
         */
        containerExists(arg0: string): boolean;
        /**
         * @deprecated
         */
        setCustomWorldID(arg0: string): void;
        /**
         * @deprecated
         */
        static getCustomWaypoints(arg0: string): $Hashtable<number, $Waypoint>;
        /**
         * @deprecated
         */
        setWaypoints(arg0: $WaypointSet): void;
        /**
         * @deprecated
         */
        getCustomWorldID(): string;
        /**
         * @deprecated
         */
        isMultiplayer(arg0: string): boolean;
        /**
         * @deprecated
         */
        getServerWaypoints(): $List<$Waypoint>;
        /**
         * @deprecated
         */
        addWorldContainer(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        findDimensionKey(arg0: string): $ResourceKey<$Level>;
        /**
         * @deprecated
         */
        updateWorldIds(): void;
        /**
         * @deprecated
         */
        getAutoContainerID(): string;
        /**
         * @deprecated
         */
        getWorldContainer(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        createDeathpoint(arg0: $Player): void;
        /**
         * @deprecated
         */
        getNewAutoWorldID(arg0: $ResourceKey_<$Level>, arg1: boolean): string;
        /**
         * @deprecated
         */
        updateWaypoints(): void;
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
        setCurrentSpawn(arg0: $BlockPos_, arg1: $ClientLevel): void;
        /**
         * @deprecated
         */
        getAutoWorld(): $WaypointWorld;
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
        getDimensionDivision(arg0: $WaypointWorld): number;
        /**
         * @deprecated
         */
        addWorld(arg0: string, arg1: string): $WaypointWorld;
        /**
         * @deprecated
         */
        onServerLevelId(arg0: number): void;
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
        getAutoRootContainerID(): string;
        /**
         * @deprecated
         */
        createTemporaryWaypoints(arg0: $WaypointWorld, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        /**
         * @deprecated
         */
        createTemporaryWaypoints(arg0: $WaypointWorld, arg1: number, arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        createTemporaryWaypoints(arg0: $WaypointWorld, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        /**
         * @deprecated
         */
        ignoreContainerCase(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        getCustomContainerID(): string;
        /**
         * @deprecated
         */
        setCustomContainerID(arg0: string): void;
        /**
         * @deprecated
         */
        isTeleportationSafe(arg0: $WaypointWorld): boolean;
        /**
         * @deprecated
         */
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        /**
         * @deprecated
         */
        getWorldContainerNullable(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        getCurrentOriginContainerID(): string;
        /**
         * @deprecated
         */
        getCurrentOriginContainerID(arg0: string): string;
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
        static customWaypoints: $Hashtable<string, $Hashtable<number, $Waypoint>>;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get autoWorldID(): string;
        get waypointMap(): $HashMap<string, $WaypointWorldContainer>;
        get serverWaypoints(): $List<$Waypoint>;
        get autoContainerID(): string;
        get autoWorld(): $WaypointWorld;
        get autoRootContainerID(): string;
    }
    export class $WaypointVisibilityType extends $Enum<$WaypointVisibilityType> {
        static values(): $WaypointVisibilityType[];
        static valueOf(arg0: string): $WaypointVisibilityType;
        getTranslation(): $Component;
        isGlobal(): boolean;
        static WORLD_MAP_LOCAL: $WaypointVisibilityType;
        static LOCAL: $WaypointVisibilityType;
        static GLOBAL: $WaypointVisibilityType;
        static WORLD_MAP_GLOBAL: $WaypointVisibilityType;
        get translation(): $Component;
        get global(): boolean;
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
