import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object, $Enum } from "@package/java/lang";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";

declare module "@package/com/almostreliable/morejs/features/teleport" {
    export class $EntityTeleportsEventJS implements $KubeEntityEvent {
        getType(): $TeleportType;
        getEntity(): $Entity;
        getY(): number;
        getX(): number;
        getZ(): number;
        setX(arg0: number): void;
        setZ(arg0: number): void;
        setY(arg0: number): void;
        getLevel(): $Level;
        getPlayer(): $Player;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: $TeleportType_);
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: $Level_, arg5: $TeleportType_);
        get type(): $TeleportType;
        get entity(): $Entity;
        get level(): $Level;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $TeleportType extends $Enum<$TeleportType> {
        static values(): $TeleportType[];
        static valueOf(arg0: string): $TeleportType;
        static CHORUS_FRUIT: $TeleportType;
        static ENDER_PEARL: $TeleportType;
    }
    /**
     * Values that may be interpreted as {@link $TeleportType}.
     */
    export type $TeleportType_ = "chorus_fruit" | "ender_pearl";
}
