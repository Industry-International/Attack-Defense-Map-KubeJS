import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
export * as legacy from "@package/dev/aika/taczjs/neoforge/events/crafting/legacy";

declare module "@package/dev/aika/taczjs/neoforge/events/crafting" {
    export class $AbstractRecipeEvent implements $KubeEvent {
        getId(): $ResourceLocation;
        getRecipeId(): $ResourceLocation;
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
        constructor(recipeId: $ResourceLocation_);
        get id(): $ResourceLocation;
        get recipeId(): $ResourceLocation;
    }
}
