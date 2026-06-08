import { $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $List_, $Map_ } from "@package/java/util";

declare module "@package/org/sinytra/connector/mod/mixin/recipebook" {
    export class $RecipeBookCategoriesAccessor {
        static setAGGREGATE_CATEGORIES(arg0: $Map_<$RecipeBookCategories_, $List_<$RecipeBookCategories_>>): void;
        static set AGGREGATE_CATEGORIES(value: $Map_<$RecipeBookCategories_, $List_<$RecipeBookCategories_>>);
    }
    export interface $RecipeBookCategoriesAccessor {
    }
}
