import { $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/net/fabricmc/fabric/api/command/v2" {
    export class $FabricEntitySelectorReader {
    }
    export interface $FabricEntitySelectorReader {
        getCustomFlag(arg0: $ResourceLocation_): boolean;
        setCustomFlag(arg0: $ResourceLocation_, arg1: boolean): void;
    }
}
