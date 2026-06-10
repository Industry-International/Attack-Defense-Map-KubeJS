import { $JsonObject } from "@package/com/google/gson";
import { $KubeRecipe, $RecipeTypeFunction } from "@package/dev/latvian/mods/kubejs/recipe";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $KubeRecipeFactory } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/recipe/schema/minecraft" {
    export class $ShapedKubeRecipe extends $KubeRecipe {
        newRecipe: boolean;
        static RECIPE_FACTORY: $KubeRecipeFactory;
        type: $RecipeTypeFunction;
        sourceLine: $SourceLine;
        originalJson: $JsonObject;
        removed: boolean;
        creationError: boolean;
        static TYPE_INFO: $TypeInfo;
        json: $JsonObject;
        static CHANGED_MARKER: string;
        changed: boolean;
        constructor();
    }
    export class $ShapelessKubeRecipe extends $KubeRecipe {
        newRecipe: boolean;
        static RECIPE_FACTORY: $KubeRecipeFactory;
        type: $RecipeTypeFunction;
        sourceLine: $SourceLine;
        originalJson: $JsonObject;
        removed: boolean;
        creationError: boolean;
        static TYPE_INFO: $TypeInfo;
        json: $JsonObject;
        static CHANGED_MARKER: string;
        changed: boolean;
        constructor();
    }
}
