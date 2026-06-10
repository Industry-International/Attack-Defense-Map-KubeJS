import { $AbstractRecipeEvent } from "@package/dev/aika/taczjs/neoforge/events/crafting";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TableRecipe } from "@package/com/tacz/guns/resource/pojo/data/recipe";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/dev/aika/taczjs/neoforge/events/crafting/legacy" {
    export class $RecipeLoadBeginEvent implements $KubeEvent {
        /**
         * @deprecated This is an alias for `event.putRecipe`. Please use `event.putRecipe` instead.
         */
        addRecipe(id: $ResourceLocation_, json: string): void;
        removeAllRecipes(): void;
        putRecipe(id: $ResourceLocation_, json: string): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $RecipeLoadEvent extends $AbstractRecipeEvent {
        setJson(json: string): void;
        /**
         * @deprecated deprecated
         * Get the JSON data in standard format.
         */
        getStdJson(): string;
        /**
         * @deprecated deprecated
         * The returned data may not conform to standard JSON format.
         */
        getJson(): string;
        removeRecipe(): void;
        getTableRecipe(): $TableRecipe;
        constructor(recipeId: $ResourceLocation_, json: string);
        get stdJson(): string;
        get tableRecipe(): $TableRecipe;
    }
    export class $RecipeLoadEndEvent extends $RecipeLoadBeginEvent {
        constructor();
    }
}
