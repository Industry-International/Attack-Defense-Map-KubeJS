import { $FabricRecipeExporter } from "@package/net/fabricmc/fabric/api/datagen/v1/recipe";

declare module "@package/net/fabricmc/fabric/mixin/datagen/recipe" {
    export class $RecipeOutputMixin {
    }
    export interface $RecipeOutputMixin extends $FabricRecipeExporter {
    }
}
