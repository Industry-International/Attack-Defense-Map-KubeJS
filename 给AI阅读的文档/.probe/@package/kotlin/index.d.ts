export * as reflect from "@package/kotlin/reflect";
export * as enums from "@package/kotlin/enums";
export * as jvm from "@package/kotlin/jvm";

declare module "@package/kotlin" {
    export class $Unit {
        static INSTANCE: $Unit;
    }
    export class $Lazy<T> {
    }
    export interface $Lazy<T> {
        getValue(): T;
        isInitialized(): boolean;
        get value(): T;
        get initialized(): boolean;
    }
    export class $Function<R> {
    }
    export interface $Function<R> {
    }
}
