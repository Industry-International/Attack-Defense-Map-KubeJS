import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Connection, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PayloadRegistration } from "@package/net/neoforged/neoforge/network/registration";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Map, $Set, $Set_ } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/mixin/networking/accessor" {
    export class $ServerCommonNetworkHandlerAccessor {
    }
    export interface $ServerCommonNetworkHandlerAccessor {
        getServer(): $MinecraftServer;
        getConnection(): $Connection;
        get server(): $MinecraftServer;
        get connection(): $Connection;
    }
    export class $ServerChunkLoadingManagerAccessor {
    }
    export interface $ServerChunkLoadingManagerAccessor {
        getEntityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
        get entityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkLoadingManagerAccessor}.
     */
    export type $ServerChunkLoadingManagerAccessor_ = (() => $Int2ObjectMap<$EntityTrackerAccessor>);
    export class $ServerLoginNetworkHandlerAccessor {
    }
    export interface $ServerLoginNetworkHandlerAccessor {
        getServer(): $MinecraftServer;
        getConnection(): $Connection;
        get server(): $MinecraftServer;
        get connection(): $Connection;
    }
    export class $NetworkRegistryAccessor {
        static getSetup(): boolean;
        static setSetup(arg0: boolean): void;
        static getPayloadRegistrations(): $Map<$ConnectionProtocol, $Map<$ResourceLocation, $PayloadRegistration<never>>>;
        static get payloadRegistrations(): $Map<$ConnectionProtocol, $Map<$ResourceLocation, $PayloadRegistration<never>>>;
    }
    export interface $NetworkRegistryAccessor {
    }
    export class $EntityTrackerAccessor {
    }
    export interface $EntityTrackerAccessor {
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $EntityTrackerAccessor}.
     */
    export type $EntityTrackerAccessor_ = (() => $Set_<$ServerPlayerConnection>);
}
