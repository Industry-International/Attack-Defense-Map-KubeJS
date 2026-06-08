import { $Serializable } from "@package/java/io";
import { $Set } from "@package/java/util";
import { $Object, $Iterable, $Iterable_ } from "@package/java/lang";

declare module "@package/com/replaymod/replaystudio/lib/guava/base" {
    export class $Optional<T> implements $Serializable {
        get(): T;
        static of<T>(reference: T): $Optional<T>;
        transform<V>(arg0: $Function<T, V>): $Optional<V>;
        isPresent(): boolean;
        or(arg0: $Supplier_<T>): T;
        or(arg0: $Optional<T>): $Optional<T>;
        or(arg0: T): T;
        asSet(): $Set<T>;
        static absent<T>(): $Optional<T>;
        orNull(): T;
        static presentInstances<T>(optionals: $Iterable_<$Optional<T>>): $Iterable<T>;
        static fromNullable<T>(nullableReference: T): $Optional<T>;
        get present(): boolean;
    }
    export class $Supplier<T> {
    }
    export interface $Supplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $Function<F, T> {
    }
    export interface $Function<F, T> {
        equals(arg0: $Object): boolean;
        apply(arg0: F): T;
    }
}
