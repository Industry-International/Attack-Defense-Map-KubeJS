import { $JsonElement_ } from "@package/com/google/gson";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
export * as client from "@package/dev/aika/taczjs/neoforge/events/client";
export * as crafting from "@package/dev/aika/taczjs/neoforge/events/crafting";
export * as asset from "@package/dev/aika/taczjs/neoforge/events/asset";
export * as index from "@package/dev/aika/taczjs/neoforge/events/index";
export * as shooter from "@package/dev/aika/taczjs/neoforge/events/shooter";

declare module "@package/dev/aika/taczjs/neoforge/events" {
    export class $AbstractAssetLoadEvent extends $AbstractIndexLoadEvent {
        constructor(id: $ResourceLocation_, json: $JsonElement_);
    }
    export class $AbstractIndexLoadEvent implements $KubeEvent {
        getId(): $ResourceLocation;
        getStdJson(): string;
        setJson(json: string): void;
        getJson(): string;
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
        constructor(id: $ResourceLocation_, json: $JsonElement_);
        get id(): $ResourceLocation;
        get stdJson(): string;
    }
}
