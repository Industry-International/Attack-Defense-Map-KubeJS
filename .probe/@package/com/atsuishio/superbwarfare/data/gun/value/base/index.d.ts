
declare module "@package/com/atsuishio/superbwarfare/data/gun/value/base" {
    export class $TagValue<T> {
    }
    export interface $TagValue<T> {
        reset(): void;
        get(): T;
        set(arg0: T): void;
        getDefaultValue(): T;
        get defaultValue(): T;
    }
}
