import { $BarrierFlags_ } from "@package/com/github/argon4w/acceleratedrendering/core/backends/programs";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
export * as overrides from "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides";
export * as dispatchers from "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers";
export * as processing from "@package/com/github/argon4w/acceleratedrendering/core/programs/processing";
export * as culling from "@package/com/github/argon4w/acceleratedrendering/core/programs/culling";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs" {
    export class $ComputeShaderDefinition extends $Record {
        location(): $ResourceLocation;
        barrierFlags(): number;
        constructor(location: $ResourceLocation_, barrierFlags: number);
    }
    export class $LoadComputeShaderEvent extends $Event implements $IModBusEvent {
        build(): $Map<$ResourceLocation, $ComputeShaderDefinition>;
        loadComputeShader(arg0: $ResourceLocation_, arg1: $ResourceLocation_, ...arg2: $BarrierFlags_[]): void;
        constructor();
    }
}
