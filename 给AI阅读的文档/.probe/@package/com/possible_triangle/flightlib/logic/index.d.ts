import { $FlightKey, $FlightKey_ } from "@package/com/possible_triangle/flightlib/api";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/possible_triangle/flightlib/logic" {
    export class $ISettingsStorage {
        static Companion: $ISettingsStorage$Companion;
    }
    export interface $ISettingsStorage {
        flightlib$set(arg0: $Map_<$FlightKey_, boolean>): void;
        flightlib$get(): $Map<$FlightKey, boolean>;
    }
    export class $ISettingsStorage$Companion {
        getDEFAULT(): $Map<$FlightKey, boolean>;
        getKEYS_CODEC(): $Codec<$Map<$FlightKey, boolean>>;
        static access$filter(arg0: $ISettingsStorage$Companion, arg1: $Map_<any, any>): $Map<any, any>;
        getKEYS_STREAM_CODEC(): $StreamCodec<$FriendlyByteBuf, $Map<$FlightKey, boolean>>;
        get DEFAULT(): $Map<$FlightKey, boolean>;
        get KEYS_CODEC(): $Codec<$Map<$FlightKey, boolean>>;
        get KEYS_STREAM_CODEC(): $StreamCodec<$FriendlyByteBuf, $Map<$FlightKey, boolean>>;
    }
}
