import { $Consumer_ } from "@package/java/util/function";
import { $PonderTag } from "@package/net/createmod/ponder/foundation";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $PonderStoryBoard_ } from "@package/net/createmod/ponder/api/scene";
import { $PonderTagRegistrationHelper } from "@package/net/createmod/ponder/api/registration";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PonderSceneRegistry } from "@package/net/createmod/ponder/foundation/registration";
import { $Set_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
export * as mixin from "@package/com/almostreliable/ponderjs/mixin";

declare module "@package/com/almostreliable/ponderjs" {
    export class $PonderRegistryEventJS implements $KubeEvent {
        remove(arg0: $Ingredient_): void;
        create(arg0: $Ingredient_): $PonderBuilderJS;
        printParticleNames(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $PonderSceneRegistry);
    }
    export class $PonderBuilderJS {
        tag(...arg0: $ResourceLocation_[]): $PonderBuilderJS;
        scene(arg0: string, arg1: string, arg2: $ResourceLocation_, arg3: $PonderStoryBoard_, ...arg4: $ResourceLocation_[]): $PonderBuilderJS;
        scene(arg0: string, arg1: string, arg2: $PonderStoryBoard_): $PonderBuilderJS;
        static BASIC_STRUCTURE: $ResourceLocation;
        constructor(arg0: $Set_<$ResourceLocation_>, arg1: $PonderSceneRegistry);
    }
    export class $PonderItemTagEventJS$Builder {
        description(arg0: string): $PonderItemTagEventJS$Builder;
        title(arg0: string): $PonderItemTagEventJS$Builder;
        items(arg0: $Ingredient_): $PonderItemTagEventJS$Builder;
        icon(arg0: $Item_): $PonderItemTagEventJS$Builder;
        noIndex(): $PonderItemTagEventJS$Builder;
        addIconToItems(): $PonderItemTagEventJS$Builder;
    }
    export class $PonderItemTagEventJS implements $KubeEvent {
        remove(arg0: $PonderTag, arg1: $Ingredient_): void;
        add(arg0: $PonderTag, arg1: $Ingredient_): void;
        createTag(arg0: string, arg1: $Consumer_<$PonderItemTagEventJS$Builder>): void;
        createTag(arg0: string, arg1: $Item_, arg2: string, arg3: string, arg4: $Ingredient_ | null): void;
        createTag(arg0: string, arg1: $Item_, arg2: string, arg3: string): void;
        removeTag(...arg0: $PonderTag[]): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $PonderTagRegistrationHelper<$ResourceLocation_>);
    }
}
