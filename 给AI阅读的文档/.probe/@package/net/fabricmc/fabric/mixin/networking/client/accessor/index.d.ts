import { $Connection } from "@package/net/minecraft/network";

declare module "@package/net/fabricmc/fabric/mixin/networking/client/accessor" {
    export class $ConnectScreenAccessor {
    }
    export interface $ConnectScreenAccessor {
        getConnection(): $Connection;
        get connection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $ConnectScreenAccessor}.
     */
    export type $ConnectScreenAccessor_ = (() => $Connection);
    export class $MinecraftClientAccessor {
    }
    export interface $MinecraftClientAccessor {
        getConnection(): $Connection;
        get connection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientAccessor}.
     */
    export type $MinecraftClientAccessor_ = (() => $Connection);
    export class $ClientLoginNetworkHandlerAccessor {
    }
    export interface $ClientLoginNetworkHandlerAccessor {
        getConnection(): $Connection;
        get connection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $ClientLoginNetworkHandlerAccessor}.
     */
    export type $ClientLoginNetworkHandlerAccessor_ = (() => $Connection);
}
