import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/net/fabricmc/fabric/api/datagen/v1/recipe" {
    export class $FabricRecipeExporter {
    }
    export interface $FabricRecipeExporter {
        getRecipeIdentifier(arg0: $ResourceLocation_): $ResourceLocation;
    }
}
