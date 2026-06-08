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
        getWaypointColor(): $WaypointColor;
        /**
         * @deprecated
         */
        getActualColor(): number;
        isYIncluded(): boolean;
        isTemporary(): boolean;
        /**
         * @deprecated
         */
        setType(arg0: number): void;
        isDisabled(): boolean;
        setY(arg0: number): void;
        setX(arg0: number): void;
        setZ(arg0: number): void;
        isGlobal(): boolean;
        getInitials(): string;
        getY(): number;
        getX(arg0: number): number;
        getX(): number;
        setRotation(arg0: boolean): void;
        /**
         * @deprecated
         */
        getColor(): number;
        /**
         * @deprecated
         */
        setSymbol(arg0: string): void;
        getZ(arg0: number): number;
        getZ(): number;
        setYaw(arg0: number): void;
        getYaw(): number;
        isDestination(): boolean;
        getVisibility(): $WaypointVisibilityType;
        setVisibility(arg0: $WaypointVisibilityType_): void;
        getComparisonAngleCos(arg0: $Camera, arg1: number): number;
        getComparisonDistance(arg0: $Camera, arg1: number): number;
        setInitials(arg0: string): void;
        /**
         * @deprecated
         */
        getVisibilityType(): number;
        setYIncluded(arg0: boolean): void;
        setTemporary(arg0: boolean): void;
        setWaypointColor(arg0: $WaypointColor_): void;
        getComparisonName(): string;
        isServerWaypoint(): boolean;
        setDisabled(arg0: boolean): void;
        isRotation(): boolean;
        getPurpose(): $WaypointPurpose;
        setPurpose(arg0: $WaypointPurpose_): void;
        /**
         * @deprecated
         */
        getSymbolSafe(arg0: string): string;
        getInitialsSafe(arg0: string): string;
        /**
         * @deprecated
         */
        setVisibilityType(arg0: number): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        /**
         * @deprecated
         */
        getWaypointType(): number;
        getCreatedAt(): number;
        getNameSafe(arg0: string): string;
        /**
         * @deprecated
         */
        isOneoffDestination(): boolean;
        /**
         * @deprecated
         */
        setOneoffDestination(arg0: boolean): void;
        static getStringFromStringSafe(arg0: string, arg1: string): string;
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
        get actualColor(): number;
        set type(value: number);
        get global(): boolean;
        get destination(): boolean;
        get comparisonName(): string;
        get serverWaypoint(): boolean;
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
        updateConnectionsField(arg0: $XaeroMinimapSession): void;
        /**
         * @deprecated
         */
        constructor(arg0: $IXaeroMinimap, arg1: $XaeroMinimapSession, arg2: string);
        /**
         * @deprecated
         */
        constructor(arg0: $HudMod, arg1: $MinimapSession, arg2: $XaeroPath);
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
        setCurrent(arg0: string): void;
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
        setContainer(arg0: $WaypointWorldContainer): void;
        /**
         * @deprecated
         */
        addSet(arg0: string): void;
        /**
         * @deprecated
         */
        getCurrent(): string;
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
        getSets(): $HashMap<string, $WaypointSet>;
        /**
         * @deprecated
         */
        getFullId(): string;
        /**
         * @deprecated
         */
        constructor(arg0: $WaypointWorldContainer, arg1: string, arg2: $ResourceKey_<$Level>);
        get serverWaypoints(): $HashMap<number, $Waypoint>;
        get currentSet(): $WaypointSet;
        get internalWorldKey(): string;
        get serverWaypointsDisabled(): $HashMap<string, boolean>;
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
        getSubId(): string;
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
        deleteSubContainer(arg0: string): void;
        /**
         * @deprecated
         */
        getRootContainer(): $WaypointWorldRootContainer;
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
        get subId(): string;
        get firstWorld(): $WaypointWorld;
        get directory(): $File;
        get rootContainer(): $WaypointWorldRootContainer;
        get allWorlds(): $ArrayList<$WaypointWorld>;
    }
    /**
     * @deprecated
     */
    export class $WaypointsManager extends $MinimapSession {
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
        removeContainer(arg0: string): void;
        /**
         * @deprecated
         */
        getWorld(arg0: string, arg1: string): $WaypointWorld;
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
        getServerWaypoints(): $List<$Waypoint>;
        /**
         * @deprecated
         */
        isMultiplayer(arg0: string): boolean;
        /**
         * @deprecated
         */
        findDimensionKey(arg0: string): $ResourceKey<$Level>;
        /**
         * @deprecated
         */
        setWaypoints(arg0: $WaypointSet): void;
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
        getAutoWorldID(): string;
        /**
         * @deprecated
         */
        getAutoContainerID(): string;
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
        updateWaypoints(): void;
        /**
         * @deprecated
         */
        static getCustomWaypoints(arg0: string): $Hashtable<number, $Waypoint>;
        /**
         * @deprecated
         */
        getWorldContainer(arg0: string): $WaypointWorldContainer;
        /**
         * @deprecated
         */
        updateWorldIds(): void;
        /**
         * @deprecated
         */
        getWaypointMap(): $HashMap<string, $WaypointWorldContainer>;
        /**
         * @deprecated
         */
        getCustomWorldID(): string;
        /**
         * @deprecated
         */
        getNewAutoWorldID(arg0: $ResourceKey_<$Level>, arg1: boolean): string;
        /**
         * @deprecated
         */
        setCustomWorldID(arg0: string): void;
        /**
         * @deprecated
         */
        containerExists(arg0: string): boolean;
        /**
         * @deprecated
         */
        createDeathpoint(arg0: $Player): void;
        /**
         * @deprecated
         */
        onServerLevelId(arg0: number): void;
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
        getWaypoints(): $WaypointSet;
        /**
         * @deprecated
         */
        canTeleport(arg0: boolean, arg1: $WaypointWorld): boolean;
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
        addWorld(arg0: string, arg1: string): $WaypointWorld;
        /**
         * @deprecated
         */
        getCurrentContainerAndWorldID(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        getCurrentContainerAndWorldID(): string;
        /**
         * @deprecated
         */
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
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
        isTeleportationSafe(arg0: $WaypointWorld): boolean;
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
        getCustomContainerID(): string;
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
        createTemporaryWaypoints(arg0: $WaypointWorld, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        /**
         * @deprecated
         */
        setCustomContainerID(arg0: string): void;
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
        ignoreContainerCase(arg0: string, arg1: string): string;
        static customWaypoints: $Hashtable<string, $Hashtable<number, $Waypoint>>;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get autoWorld(): $WaypointWorld;
        get serverWaypoints(): $List<$Waypoint>;
        get autoWorldID(): string;
        get autoContainerID(): string;
        get waypointMap(): $HashMap<string, $WaypointWorldContainer>;
        get autoRootContainerID(): string;
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
