import { $Function1_, $Function0 } from "@package/kotlin/jvm/functions";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";

declare module "@package/me/muksc/tacztweaks/core/codec" {
    export class $DispatchCodec$Companion {
        getCodec<T extends $DispatchCodec<never>>(arg0: $Function1_<string, T>): $Codec<T>;
    }
    export class $DispatchCodec<T> {
        static access$codec$jd(arg0: $DispatchCodec<any>): $MapCodec<any>;
        static Companion: $DispatchCodec$Companion;
    }
    export interface $DispatchCodec<T> {
        getKey(): string;
        codec(): $MapCodec<T>;
        getCodecProvider(): $Function0<$MapCodec<T>>;
        get key(): string;
        get codecProvider(): $Function0<$MapCodec<T>>;
    }
}
