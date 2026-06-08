import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $Channel } from "@package/io/netty/channel";
import { $ProtocolInfo, $PacketListener } from "@package/net/minecraft/network";

declare module "@package/com/replaymod/recording/mixin" {
    export class $EntityLivingBaseAccessor {
        static getLivingFlags(): $EntityDataAccessor<number>;
        static get livingFlags(): $EntityDataAccessor<number>;
    }
    export interface $EntityLivingBaseAccessor {
    }
    export class $DecoderHandlerAccessor<T extends $PacketListener> {
    }
    export interface $DecoderHandlerAccessor<T extends $PacketListener> {
        getProtocolInfo(): $ProtocolInfo<T>;
        get protocolInfo(): $ProtocolInfo<T>;
    }
    /**
     * Values that may be interpreted as {@link $DecoderHandlerAccessor}.
     */
    export type $DecoderHandlerAccessor_<T> = (() => $ProtocolInfo<T>);
    export class $AddServerScreenAccessor {
    }
    export interface $AddServerScreenAccessor {
        getServerData(): $ServerData;
        get serverData(): $ServerData;
    }
    /**
     * Values that may be interpreted as {@link $AddServerScreenAccessor}.
     */
    export type $AddServerScreenAccessor_ = (() => $ServerData);
    export class $ClientLoginNetworkHandlerAccessor {
    }
    export interface $ClientLoginNetworkHandlerAccessor {
        getServerData(): $ServerData;
        get serverData(): $ServerData;
    }
    /**
     * Values that may be interpreted as {@link $ClientLoginNetworkHandlerAccessor}.
     */
    export type $ClientLoginNetworkHandlerAccessor_ = (() => $ServerData);
    export class $NetworkManagerAccessor {
    }
    export interface $NetworkManagerAccessor {
        getChannel(): $Channel;
        get channel(): $Channel;
    }
    /**
     * Values that may be interpreted as {@link $NetworkManagerAccessor}.
     */
    export type $NetworkManagerAccessor_ = (() => $Channel);
    export class $IntegratedServerAccessor {
    }
    export interface $IntegratedServerAccessor {
        isGamePaused(): boolean;
        get gamePaused(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IntegratedServerAccessor}.
     */
    export type $IntegratedServerAccessor_ = (() => boolean);
}
