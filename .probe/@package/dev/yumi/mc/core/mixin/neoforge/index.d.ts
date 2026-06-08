import { $RegisterEvent } from "@package/net/neoforged/neoforge/registries";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/dev/yumi/mc/core/mixin/neoforge" {
    export class $RegisterEventAccessor {
        static yumi$init(registryKey: $ResourceKey_<$Registry<never>>, registry: $Registry<never>): $RegisterEvent;
    }
    export interface $RegisterEventAccessor {
    }
}
