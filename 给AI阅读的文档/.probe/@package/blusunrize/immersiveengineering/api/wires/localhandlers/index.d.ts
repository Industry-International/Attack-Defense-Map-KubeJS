import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection } from "@package/java/util";

declare module "@package/blusunrize/immersiveengineering/api/wires/localhandlers" {
    export class $ILocalHandlerProvider {
    }
    export interface $ILocalHandlerProvider {
        getRequestedHandlers(): $Collection<$ResourceLocation>;
        get requestedHandlers(): $Collection<$ResourceLocation>;
    }
}
