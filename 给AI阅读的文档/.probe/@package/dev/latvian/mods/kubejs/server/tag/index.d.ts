import { $TagLoader$EntryWithSource, $TagLoader$EntryWithSource_ } from "@package/net/minecraft/tags";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Pattern } from "@package/java/util/regex";
import { $Record, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $EventExceptionHandler, $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ExtraCodecs$TagOrElementLocation_ } from "@package/net/minecraft/util";

declare module "@package/dev/latvian/mods/kubejs/server/tag" {
    export class $TagEventFilter$Namespace extends $Record implements $TagEventFilter {
        namespace(): string;
        testElementId(id: $ResourceLocation_): boolean;
        remove(wrapper: $TagWrapper): number;
        add(wrapper: $TagWrapper): number;
        unwrap(): $Stream<$TagEventFilter>;
        testTagOrElementLocation(element: $ExtraCodecs$TagOrElementLocation_): boolean;
        constructor(namespace: string);
    }
    export class $TagEventFilter {
        static of(event: $TagKubeEvent, o: $Object): $TagEventFilter;
        static unwrap(event: $TagKubeEvent, array: $Object[]): $TagEventFilter;
    }
    export interface $TagEventFilter {
        remove(wrapper: $TagWrapper): number;
        add(wrapper: $TagWrapper): number;
        unwrap(): $Stream<$TagEventFilter>;
        testTagOrElementLocation(element: $ExtraCodecs$TagOrElementLocation_): boolean;
        testElementId(id: $ResourceLocation_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TagEventFilter}.
     */
    export type $TagEventFilter_ = ((id: $ResourceLocation) => boolean);
    export class $PreTagKubeEvent$RemoveAllTagsFromAction extends $Record implements $Consumer<$TagKubeEvent> {
        ignored(): $Object[];
        accept(e: $TagKubeEvent): void;
        andThen(arg0: $Consumer_<$TagKubeEvent>): $Consumer<$TagKubeEvent>;
        constructor(ignored: $Object[]);
    }
    export class $TagEventFilter$Empty implements $TagEventFilter {
        remove(wrapper: $TagWrapper): number;
        add(wrapper: $TagWrapper): number;
        testTagOrElementLocation(element: $ExtraCodecs$TagOrElementLocation_): boolean;
        testElementId(resourceLocation: $ResourceLocation_): boolean;
        unwrap(): $Stream<$TagEventFilter>;
        static INSTANCE: $TagEventFilter$Empty;
        constructor();
    }
    export class $PreTagWrapper$AddAction extends $Record implements $Consumer<$TagKubeEvent> {
        accept(e: $TagKubeEvent): void;
        filters(): $Object[];
        tag(): $ResourceLocation;
        andThen(arg0: $Consumer_<$TagKubeEvent>): $Consumer<$TagKubeEvent>;
        constructor(tag: $ResourceLocation_, filters: $Object[]);
    }
    export class $PreTagKubeEvent extends $TagKubeEvent {
        static handle(tagEventHolders: $Map_<$ResourceKey_<never>, $PreTagKubeEvent>): void;
        registryKey: $ResourceKey<never>;
        totalRemoved: number;
        invalid: boolean;
        static SOURCE: string;
        vanillaRegistry: $Registry<never>;
        totalAdded: number;
        static TAG_EVENT_HANDLER: $EventExceptionHandler;
        actions: $List<$Consumer<$TagKubeEvent>>;
        tags: $Map<$ResourceLocation, $PreTagWrapper>;
        constructor(registryKey: $ResourceKey_<never>);
    }
    export class $TagWrapper {
        getObjectIds(): $List<$ResourceLocation>;
        entries: $List<$TagLoader$EntryWithSource>;
        id: $ResourceLocation;
        event: $TagKubeEvent;
        constructor(e: $TagKubeEvent, i: $ResourceLocation_, t: $List_<$TagLoader$EntryWithSource_>);
        get objectIds(): $List<$ResourceLocation>;
    }
    export class $TagEventFilter$Or extends $Record implements $TagEventFilter {
        remove(wrapper: $TagWrapper): number;
        add(wrapper: $TagWrapper): number;
        unwrap(): $Stream<$TagEventFilter>;
        filters(): $List<$TagEventFilter>;
        testTagOrElementLocation(element: $ExtraCodecs$TagOrElementLocation_): boolean;
        testElementId(resourceLocation: $ResourceLocation_): boolean;
        constructor(filters: $List_<$TagEventFilter_>);
    }
    export class $TagEventFilter$ID extends $Record implements $TagEventFilter {
        add(wrapper: $TagWrapper): number;
        id(): $ResourceLocation;
        testElementId(id: $ResourceLocation_): boolean;
        remove(wrapper: $TagWrapper): number;
        unwrap(): $Stream<$TagEventFilter>;
        testTagOrElementLocation(element: $ExtraCodecs$TagOrElementLocation_): boolean;
        constructor(id: $ResourceLocation_);
    }
    export class $PreTagWrapper$RemoveAllAction extends $Record implements $Consumer<$TagKubeEvent> {
        accept(e: $TagKubeEvent): void;
        tag(): $ResourceLocation;
        andThen(arg0: $Consumer_<$TagKubeEvent>): $Consumer<$TagKubeEvent>;
        constructor(tag: $ResourceLocation_);
    }
    export class $TagEventFilter$Tag extends $Record implements $TagEventFilter {
        remove(wrapper: $TagWrapper): number;
        add(wrapper: $TagWrapper): number;
        tag(): $TagWrapper;
        testTagOrElementLocation(element: $ExtraCodecs$TagOrElementLocation_): boolean;
        testElementId(id: $ResourceLocation_): boolean;
        unwrap(): $Stream<$TagEventFilter>;
        constructor(tag: $TagWrapper);
    }
    export class $TagEventFilter$RegEx extends $Record implements $TagEventFilter {
        pattern(): $Pattern;
        testElementId(id: $ResourceLocation_): boolean;
        remove(wrapper: $TagWrapper): number;
        add(wrapper: $TagWrapper): number;
        unwrap(): $Stream<$TagEventFilter>;
        testTagOrElementLocation(element: $ExtraCodecs$TagOrElementLocation_): boolean;
        constructor(pattern: $Pattern);
    }
    export class $TagKubeEvent implements $KubeEvent {
        getType(): $ResourceLocation;
        getElementIds(): $Set<$ResourceLocation>;
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
        registryKey: $ResourceKey<never>;
        totalRemoved: number;
        static SOURCE: string;
        vanillaRegistry: $Registry<never>;
        totalAdded: number;
        static TAG_EVENT_HANDLER: $EventExceptionHandler;
        tags: $Map<$ResourceLocation, $TagWrapper>;
        constructor(registryKey: $ResourceKey_<never>, vr: $Registry<never>);
        get type(): $ResourceLocation;
        get elementIds(): $Set<$ResourceLocation>;
    }
    export class $PreTagWrapper$RemoveAction extends $Record implements $Consumer<$TagKubeEvent> {
        accept(e: $TagKubeEvent): void;
        filters(): $Object[];
        tag(): $ResourceLocation;
        andThen(arg0: $Consumer_<$TagKubeEvent>): $Consumer<$TagKubeEvent>;
        constructor(tag: $ResourceLocation_, filters: $Object[]);
    }
    export class $PreTagWrapper extends $TagWrapper {
        preEvent: $PreTagKubeEvent;
        entries: $List<$TagLoader$EntryWithSource>;
        id: $ResourceLocation;
        event: $TagKubeEvent;
        constructor(e: $PreTagKubeEvent, i: $ResourceLocation_);
    }
}
