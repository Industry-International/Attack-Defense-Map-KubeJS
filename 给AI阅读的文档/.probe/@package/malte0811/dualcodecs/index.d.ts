import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Function_ } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/malte0811/dualcodecs" {
    export class $DualMapCodec<S extends $ByteBuf, T> extends $Record {
        map<T1>(arg0: $Function_<T, T1>, arg1: $Function_<T1, T>): $DualMapCodec<S, T1>;
        static unit<S extends $ByteBuf, T>(arg0: T): $DualMapCodec<S, T>;
        streamCodec(): $StreamCodec<S, T>;
        codec(): $DualCodec<S, T>;
        mapCodec(): $MapCodec<T>;
        constructor(mapCodec: $MapCodec_<T>, streamCodec: $StreamCodec<S, T>);
    }
    export class $DualCodec<S extends $ByteBuf, T> extends $Record {
        dispatch<V>(arg0: $Function_<V, T>, arg1: $Function_<T, $DualMapCodec<S, V>>): $DualCodec<S, V>;
        map<T1>(arg0: $Function_<T, T1>, arg1: $Function_<T1, T>): $DualCodec<S, T1>;
        fromNBT(arg0: $Tag_): T;
        toJSON(arg0: T): $JsonElement;
        streamCodec(): $StreamCodec<S, T>;
        listOf(): $DualCodec<S, $List<T>>;
        fieldOf(arg0: string): $DualMapCodec<S, T>;
        codec(): $Codec<T>;
        optionalFieldOf(arg0: string, arg1: T): $DualMapCodec<S, T>;
        optionalFieldOf(arg0: string): $DualMapCodec<S, (T) | undefined>;
        fromJSON(arg0: $JsonElement_): T;
        setOf(): $DualCodec<S, $Set<T>>;
        toNBT(arg0: T): $Tag;
        castStream<S1 extends S>(): $DualCodec<S1, T>;
        constructor(codec: $Codec<T>, streamCodec: $StreamCodec<S, T>);
    }
}
