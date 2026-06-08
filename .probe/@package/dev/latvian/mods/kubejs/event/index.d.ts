import { $Consumer_, $Predicate_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Registry } from "@package/net/minecraft/core";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Throwable, $Enum, $Exception, $Record, $Object, $Class } from "@package/java/lang";
import { $HashMap, $Map_, $Map, $Set } from "@package/java/util";
import { $Context, $BaseFunction } from "@package/dev/latvian/mods/rhino";
import { $ScriptTypePredicate, $ScriptType_, $ScriptTypeHolder_, $ScriptTypePredicate_, $ConsoleJS } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/event" {
    export class $EventHandler extends $BaseFunction {
        listen(type: $ScriptType_, extraId: $Object, handler: $IEventHandler_): void;
        post(scriptType: $ScriptTypeHolder_, event: $KubeEvent): $EventResult;
        post(event: $KubeEvent): $EventResult;
        hasListeners(): boolean;
        requiredTarget<E>(type: $EventTargetType<E>): $TargetedEventHandler<E>;
        forEachListener(type: $ScriptType_, callback: $Consumer_<$EventHandlerContainer>): void;
        supportsTarget<E>(type: $EventTargetType<E>): $TargetedEventHandler<E>;
        hasResult(): $EventHandler;
        static DONTENUM: number;
        eventType: $Supplier<$Class<$KubeEvent>>;
        scriptTypePredicate: $ScriptTypePredicate;
        static CONST: number;
        name: string;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        group: $EventGroup;
    }
    export class $EventTargetType<T> {
        toString(factory: $EventTargetType$Transformer_): $EventTargetType<T>;
        identity(): $EventTargetType<T>;
        static create<T>(type: $Class<T>): $EventTargetType<T>;
        transformer(factory: $EventTargetType$Transformer_): $EventTargetType<T>;
        validator(validator: $Predicate_<$Object>): $EventTargetType<T>;
        static registryKey<T>(registry: $ResourceKey_<$Registry<T>>, type: $Class<never>): $EventTargetType<$ResourceKey<T>>;
        static fromEnum<T extends $Enum<T>>(type: $Class<T>): $EventTargetType<T>;
        describeType(describeType: $TypeInfo_): $EventTargetType<T>;
        static STRING: $EventTargetType<string>;
        static ID: $EventTargetType<$ResourceLocation>;
        type: $Class<T>;
        static REGISTRY: $EventTargetType<$ResourceKey<$Registry<never>>>;
    }
    export class $KubeStartupEvent {
        static BASIC: $KubeStartupEvent;
    }
    export interface $KubeStartupEvent extends $KubeEvent {
    }
    export class $EventGroup {
        add(name: string, scriptType: $ScriptTypePredicate_, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        static of(name: string): $EventGroup;
        common(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        getHandlers(): $Map<string, $EventHandler>;
        server(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        client(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        startup(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        name: string;
        get handlers(): $Map<string, $EventHandler>;
    }
    export class $EventExit extends $Exception {
        result: $EventResult;
        constructor(result: $EventResult);
    }
    export class $EventResult$Type extends $Enum<$EventResult$Type> {
        exit(value: $Object): $EventExit;
        static values(): $EventResult$Type[];
        static valueOf(name: string): $EventResult$Type;
        static INTERRUPT_TRUE: $EventResult$Type;
        static PASS: $EventResult$Type;
        static INTERRUPT_FALSE: $EventResult$Type;
        static INTERRUPT_DEFAULT: $EventResult$Type;
        static ERROR: $EventResult$Type;
    }
    /**
     * Values that may be interpreted as {@link $EventResult$Type}.
     */
    export type $EventResult$Type_ = "error" | "pass" | "interrupt_default" | "interrupt_false" | "interrupt_true";
    export class $IEventHandler {
    }
    export interface $IEventHandler {
        onEvent(event: $KubeEvent): $Object;
    }
    /**
     * Values that may be interpreted as {@link $IEventHandler}.
     */
    export type $IEventHandler_ = ((event: $KubeEvent) => $Object);
    export class $EventGroupWrapper extends $HashMap<string, $BaseFunction> {
        constructor(scriptType: $ScriptType_, group: $EventGroup);
    }
    export class $TargetedEventHandler<E> extends $EventHandler {
        post(type: $ScriptTypeHolder_, extraId: E, event: $KubeEvent): $EventResult;
        post(event: $KubeEvent, extraId: E): $EventResult;
        hasListeners(extraId: E): boolean;
        findUniqueExtraIds(type: $ScriptType_): $Set<E>;
        static DONTENUM: number;
        eventType: $Supplier<$Class<$KubeEvent>>;
        scriptTypePredicate: $ScriptTypePredicate;
        static CONST: number;
        name: string;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        group: $EventGroup;
    }
    export class $EventExceptionHandler {
    }
    export interface $EventExceptionHandler {
        handle(event: $KubeEvent, container: $EventHandlerContainer, ex: $Throwable): $Throwable;
    }
    /**
     * Values that may be interpreted as {@link $EventExceptionHandler}.
     */
    export type $EventExceptionHandler_ = ((event: $KubeEvent, container: $EventHandlerContainer, ex: $Throwable) => $Throwable);
    export class $KubeEvent {
    }
    export interface $KubeEvent {
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
    }
    export class $EventResult {
        type(): $EventResult$Type;
        value(): $Object;
        override(): boolean;
        pass(): boolean;
        cx(): $Context;
        interruptDefault(): boolean;
        interruptTrue(): boolean;
        interruptFalse(): boolean;
        applyTristate(consumer: $Consumer_<$TriState>): void;
        applyCancel(event: $ICancellableEvent): boolean;
        static PASS: $EventResult;
    }
    export class $EventGroups extends $Record implements $EventGroupRegistry {
        map(): $Map<string, $EventGroup>;
        register(group: $EventGroup): void;
        static ALL: $Lazy<$EventGroups>;
        constructor(map: $Map_<string, $EventGroup>);
    }
    export class $EventGroupRegistry {
    }
    export interface $EventGroupRegistry {
        register(group: $EventGroup): void;
    }
    /**
     * Values that may be interpreted as {@link $EventGroupRegistry}.
     */
    export type $EventGroupRegistry_ = ((group: $EventGroup) => void);
    export class $EventTargetType$Transformer {
        static IDENTITY: $EventTargetType$Transformer;
    }
    export interface $EventTargetType$Transformer {
        transform(source: $Object): $Object;
    }
    /**
     * Values that may be interpreted as {@link $EventTargetType$Transformer}.
     */
    export type $EventTargetType$Transformer_ = ((source: $Object) => $Object);
    export class $EventHandlerContainer {
        static isEmpty(array: $EventHandlerContainer[]): boolean;
        add(extraId: $Object, handler: $IEventHandler_, source: string, line: number): void;
        handle(console: $ConsoleJS, handler: $EventHandler, event: $KubeEvent): $EventResult;
        handler: $IEventHandler;
        line: number;
        source: string;
        target: $Object;
        constructor(target: $Object, handler: $IEventHandler_, source: string, line: number);
    }
}
