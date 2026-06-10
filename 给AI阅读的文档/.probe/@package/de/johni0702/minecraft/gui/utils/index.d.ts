import { $Function_ } from "@package/java/util/function";
import { $List } from "@package/java/util";
export * as lwjgl from "@package/de/johni0702/minecraft/gui/utils/lwjgl";

declare module "@package/de/johni0702/minecraft/gui/utils" {
    export class $Event<T> {
        static create<T>(invokerFactory: $Function_<$List<T>, T>): $Event<T>;
        invoker(): T;
    }
    export class $EventRegistration<T> {
        static register<T>(event: $Event<T>, callback: T): $EventRegistration<T>;
        register(): void;
        static create<T>(event: $Event<T>, callback: T): $EventRegistration<T>;
        unregister(): void;
    }
    export class $EventRegistrations {
        register(): void;
        on<T>(event: $Event<T>, listener: T): $EventRegistrations;
        on<T>(registration: $EventRegistration<T>): $EventRegistrations;
        unregister(): void;
        constructor();
    }
}
