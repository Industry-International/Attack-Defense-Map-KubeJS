import { $Predicate_ } from "@package/java/util/function";
import { $BalmConfigSchema, $ConfiguredProperty } from "@package/net/blay09/mods/balm/api/config/schema";
export * as schema from "@package/net/blay09/mods/balm/api/config/schema";

declare module "@package/net/blay09/mods/balm/api/config" {
    export class $LoadedConfig {
    }
    export interface $LoadedConfig {
        getRaw<T>(arg0: $ConfiguredProperty<T>): T;
        mutable(arg0: $BalmConfigSchema): $MutableLoadedConfig;
    }
    export class $MutableLoadedConfig {
    }
    export interface $MutableLoadedConfig extends $LoadedConfig {
        copy(): $MutableLoadedConfig;
        applyFrom(arg0: $BalmConfigSchema, arg1: $LoadedConfig): void;
        applyFrom(arg0: $BalmConfigSchema, arg1: $LoadedConfig, arg2: $Predicate_<$ConfiguredProperty<never>>): void;
        setRaw<T>(arg0: $ConfiguredProperty<T>, arg1: T): void;
    }
}
