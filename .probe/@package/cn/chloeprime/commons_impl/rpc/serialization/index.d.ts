import { $BiConsumer_, $Function_, $ToIntFunction_, $IntFunction_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/cn/chloeprime/commons_impl/rpc/serialization" {
    export interface $RpcParameterSerializer extends RegistryMarked<RegistryTypes.KuroutilsRpcParameterSerializersTag, RegistryTypes.KuroutilsRpcParameterSerializers> {}
    export class $RpcParameterSerializer<T> {
        static of<T>(arg0: $Class<T>, arg1: $BiConsumer_<$RegistryFriendlyByteBuf, T>, arg2: $Function_<$RegistryFriendlyByteBuf, T>): $RpcParameterSerializer<T>;
        static of<T>(arg0: $Class<T>, arg1: $Codec<T>): $RpcParameterSerializer<T>;
        static of<T>(arg0: $Class<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>): $RpcParameterSerializer<T>;
        static ofArray<A>(arg0: $Class<A>, arg1: $IntFunction_<A>, arg2: $ToIntFunction_<A>, arg3: $BiConsumer_<$RegistryFriendlyByteBuf, A>, arg4: $BiConsumer_<$RegistryFriendlyByteBuf, A>): $RpcParameterSerializer<A>;
        static arrayOf<T>(arg0: $Class<T>, arg1: $BiConsumer_<$RegistryFriendlyByteBuf, T>, arg2: $Function_<$RegistryFriendlyByteBuf, T>): $RpcParameterSerializer<T[]>;
        static forEnum<E extends $Enum<E>>(arg0: $Class<E>): $RpcParameterSerializer<E>;
    }
    export interface $RpcParameterSerializer<T> {
        decode(arg0: $RegistryFriendlyByteBuf): T;
        encode(arg0: $RegistryFriendlyByteBuf, arg1: T): void;
        transform<R>(arg0: $Class<R>, arg1: $Function_<T, R>, arg2: $Function_<R, T>): $RpcParameterSerializer<R>;
        arrayType(): $RpcParameterSerializer<T[]>;
        getBaseClass(): $Class<T>;
        get baseClass(): $Class<T>;
    }
    /**
     * Values that may be interpreted as {@link $RpcParameterSerializer}.
     */
    export type $RpcParameterSerializer_<T> = RegistryTypes.KuroutilsRpcParameterSerializers;
}
