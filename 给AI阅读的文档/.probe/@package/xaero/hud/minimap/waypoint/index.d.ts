import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component } from "@package/net/minecraft/network/chat";
import { $HudMod } from "@package/xaero/common";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $WaypointDeleter } from "@package/xaero/hud/minimap/waypoint/render";
export * as render from "@package/xaero/hud/minimap/waypoint/render";
export * as set from "@package/xaero/hud/minimap/waypoint/set";
export * as server from "@package/xaero/hud/minimap/waypoint/server";

declare module "@package/xaero/hud/minimap/waypoint" {
    export class $WaypointPurpose extends $Enum<$WaypointPurpose> {
        static values(): $WaypointPurpose[];
        static valueOf(arg0: string): $WaypointPurpose;
        isDeath(): boolean;
        isDestination(): boolean;
        static OLD_DEATH: $WaypointPurpose;
        static DESTINATION: $WaypointPurpose;
        static DEATH: $WaypointPurpose;
        static NORMAL: $WaypointPurpose;
        get death(): boolean;
        get destination(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WaypointPurpose}.
     */
    export type $WaypointPurpose_ = "normal" | "death" | "old_death" | "destination";
    export class $WaypointTeleport {
        canTeleport(arg0: boolean, arg1: $MinimapWorld): boolean;
        teleportToWaypoint(arg0: $Waypoint, arg1: $MinimapWorld, arg2: $Screen): void;
        teleportToWaypoint(arg0: $Waypoint, arg1: $MinimapWorld, arg2: $Screen, arg3: boolean): void;
        teleportAnyway(): void;
        isWorldTeleportable(arg0: $MinimapWorld): boolean;
        isTeleportationSafe(arg0: $MinimapWorld): boolean;
        static SLASH_TELEPORT_ANYWAY_COMMAND: string;
        static TELEPORT_ANYWAY_COMMAND: string;
        constructor(arg0: $HudMod, arg1: $WaypointSession, arg2: $MinimapSession);
    }
    export class $WaypointSession {
        getSession(): $MinimapSession;
        setSetChangedTime(arg0: number): void;
        getMc(): $Minecraft;
        getSharing(): $WaypointSharingHandler;
        getCollector(): $WaypointCollector;
        getTeleport(): $WaypointTeleport;
        getSetChangedTime(): number;
        getTemporaryHandler(): $TemporaryWaypointHandler;
        getDeleter(): $WaypointDeleter;
        getDeathpointHandler(): $DeathpointHandler;
        getDestinationHandler(): $DestinationHandler;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get session(): $MinimapSession;
        get mc(): $Minecraft;
        get sharing(): $WaypointSharingHandler;
        get collector(): $WaypointCollector;
        get teleport(): $WaypointTeleport;
        get temporaryHandler(): $TemporaryWaypointHandler;
        get deleter(): $WaypointDeleter;
        get deathpointHandler(): $DeathpointHandler;
        get destinationHandler(): $DestinationHandler;
    }
    export class $WaypointColor extends $Enum<$WaypointColor> {
        getName(): $Component;
        static values(): $WaypointColor[];
        static valueOf(arg0: string): $WaypointColor;
        static fromIndex(arg0: number): $WaypointColor;
        getFormat(): string;
        static getRandom(): $WaypointColor;
        getHex(): number;
        static GOLD: $WaypointColor;
        static GRAY: $WaypointColor;
        static AQUA: $WaypointColor;
        static WHITE: $WaypointColor;
        static BLUE: $WaypointColor;
        static DARK_AQUA: $WaypointColor;
        static PURPLE: $WaypointColor;
        static DARK_BLUE: $WaypointColor;
        static GREEN: $WaypointColor;
        static RED: $WaypointColor;
        static DARK_PURPLE: $WaypointColor;
        static DARK_RED: $WaypointColor;
        static BLACK: $WaypointColor;
        static DARK_GREEN: $WaypointColor;
        static YELLOW: $WaypointColor;
        static DARK_GRAY: $WaypointColor;
        get format(): string;
        static get random(): $WaypointColor;
        get hex(): number;
    }
    /**
     * Values that may be interpreted as {@link $WaypointColor}.
     */
    export type $WaypointColor_ = "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "purple" | "yellow" | "white";
    export class $DeathpointHandler {
        createDeathpoint(arg0: $Player): void;
        createDeathpoint(arg0: $Player, arg1: $MinimapWorld, arg2: boolean): void;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
    }
    export class $WaypointSharingHandler {
        shareWaypoint(arg0: $Screen, arg1: $Waypoint, arg2: $MinimapWorld): void;
        onWaypointAdd(arg0: string[]): void;
        onWaypointReceived(arg0: string, arg1: string): void;
        onShareConfirmationResult(arg0: boolean): void;
        static WAYPOINT_OLD_SHARE_PREFIX: string;
        static WAYPOINT_ADD_PREFIX: string;
        static WAYPOINT_SHARE_PREFIX: string;
    }
    export class $TemporaryWaypointHandler {
        createTemporaryWaypoint(arg0: $MinimapWorld, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        createTemporaryWaypoint(arg0: $MinimapWorld, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        createTemporaryWaypoint(arg0: $MinimapWorld, arg1: number, arg2: number, arg3: number): void;
        constructor(arg0: $HudMod);
    }
    export class $DestinationHandler {
        begin(arg0: $Entity, arg1: $MinimapWorld, arg2: boolean, arg3: boolean): void;
        end(): void;
        handle(arg0: $Waypoint): void;
        constructor(arg0: $MinimapSession, arg1: $WaypointDeleter);
    }
    export class $WaypointCollector {
        collect(arg0: $List_<$Waypoint>): void;
        constructor(arg0: $MinimapSession);
    }
}
