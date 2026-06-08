import { $ParticleProvider } from "@package/net/minecraft/client/particle";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map_, $Map } from "@package/java/util";
export * as accessor from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
export * as kjs from "@package/com/lowdragmc/lowdraglib2/core/mixins/kjs";

declare module "@package/com/lowdragmc/lowdraglib2/core/mixins" {
    export class $ParticleEngineAccessor {
    }
    export interface $ParticleEngineAccessor {
        getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        get providers(): $Map<$ResourceLocation, $ParticleProvider<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngineAccessor}.
     */
    export type $ParticleEngineAccessor_ = (() => $Map_<$ResourceLocation_, $ParticleProvider<never>>);
}
