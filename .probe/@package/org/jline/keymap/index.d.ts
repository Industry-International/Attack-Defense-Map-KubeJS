import { $Terminal } from "@package/org/jline/terminal";
import { $InfoCmp$Capability_ } from "@package/org/jline/utils";
import { $Comparator, $Map, $Collection } from "@package/java/util";
import { $CharSequence, $Iterable_ } from "@package/java/lang";

declare module "@package/org/jline/keymap" {
    export class $KeyMap<T> {
        static del(): string;
        static key(arg0: $Terminal, arg1: $InfoCmp$Capability_): string;
        static display(arg0: string): string;
        static range(arg0: string): $Collection<string>;
        bind(arg0: T, ...arg1: $CharSequence[]): void;
        bind(arg0: T, arg1: $Iterable_<$CharSequence>): void;
        bind(arg0: T, arg1: $CharSequence): void;
        unbind(...arg0: $CharSequence[]): void;
        unbind(arg0: $CharSequence): void;
        setUnicode(arg0: T): void;
        static alt(arg0: string): string;
        static alt(arg0: string): string;
        getBound(arg0: $CharSequence, arg1: number[]): T;
        getBound(arg0: $CharSequence): T;
        static translate(arg0: string): string;
        getAmbiguousTimeout(): number;
        setAmbiguousTimeout(arg0: number): void;
        static ctrl(arg0: string): string;
        static esc(): string;
        getAnotherKey(): T;
        getBoundKeys(): $Map<string, T>;
        bindIfNotBound(arg0: T, arg1: $CharSequence): void;
        getUnicode(): T;
        getNomatch(): T;
        setNomatch(arg0: T): void;
        static KEYMAP_LENGTH: number;
        static DEFAULT_AMBIGUOUS_TIMEOUT: number;
        static KEYSEQ_COMPARATOR: $Comparator<string>;
        constructor();
        get anotherKey(): T;
        get boundKeys(): $Map<string, T>;
    }
}
