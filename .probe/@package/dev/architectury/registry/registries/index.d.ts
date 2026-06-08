import { $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceKey } from "@package/net/minecraft/resources";
import { $OptionalSupplier } from "@package/dev/architectury/utils";

declare module "@package/dev/architectury/registry/registries" {
    export class $DeferredSupplier<T> {
    }
    export interface $DeferredSupplier<T> extends $OptionalSupplier<T> {
        getKey(): $ResourceKey<T>;
        getId(): $ResourceLocation;
        getRegistryKey(): $ResourceKey<$Registry<T>>;
        getRegistryId(): $ResourceLocation;
        get key(): $ResourceKey<T>;
        get id(): $ResourceLocation;
        get registryKey(): $ResourceKey<$Registry<T>>;
        get registryId(): $ResourceLocation;
    }
}
