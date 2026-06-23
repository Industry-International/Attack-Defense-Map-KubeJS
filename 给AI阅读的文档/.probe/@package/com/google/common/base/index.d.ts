import { $Duration } from "@package/java/time";
import { $Predicate as $Predicate$1, $Predicate_, $Supplier as $Supplier$1, $Function as $Function$1 } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $List, $Map } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $Object, $Iterable, $CharSequence } from "@package/java/lang";

declare module "@package/com/google/common/base" {
    export class $Supplier<T> {
    }
    export interface $Supplier<T> extends $Supplier$1<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $Splitter$MapSplitter {
        split(sequence: $CharSequence): $Map<string, string>;
    }
    export class $Predicate<T> {
    }
    export interface $Predicate<T> extends $Predicate$1<T> {
        equals(object: $Object): boolean;
        test(input: T): boolean;
        apply(input: T): boolean;
    }
    export class $Splitter {
        split(sequence: $CharSequence): $Iterable<string>;
        limit(maxItems: number): $Splitter;
        static on(separatorPattern: $Pattern): $Splitter;
        static on(separator: string): $Splitter;
        static on(separatorMatcher: $CharMatcher): $Splitter;
        static on(separator: string): $Splitter;
        withKeyValueSeparator(keyValueSplitter: $Splitter): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        splitToList(sequence: $CharSequence): $List<string>;
        splitToStream(sequence: $CharSequence): $Stream<string>;
        static fixedLength(length: number): $Splitter;
        trimResults(): $Splitter;
        trimResults(trimmer: $CharMatcher): $Splitter;
        omitEmptyStrings(): $Splitter;
        static onPattern(separatorPattern: string): $Splitter;
    }
    export class $Ticker {
        read(): number;
        static systemTicker(): $Ticker;
    }
    export class $Function<F, T> {
    }
    export interface $Function<F, T> extends $Function$1<F, T> {
        equals(object: $Object): boolean;
        apply(input: F): F;
    }
    export class $Stopwatch {
        reset(): $Stopwatch;
        start(): $Stopwatch;
        stop(): $Stopwatch;
        elapsed(desiredUnit: $TimeUnit_): number;
        elapsed(): $Duration;
        isRunning(): boolean;
        static createStarted(): $Stopwatch;
        static createStarted(ticker: $Ticker): $Stopwatch;
        static createUnstarted(): $Stopwatch;
        static createUnstarted(ticker: $Ticker): $Stopwatch;
        get running(): boolean;
    }
    export class $CharMatcher implements $Predicate<string> {
        matches(c: string): boolean;
        /**
         * @deprecated
         */
        apply(character: string): boolean;
        static ascii(): $CharMatcher;
        static noneOf(sequence: $CharSequence): $CharMatcher;
        static is(match: string): $CharMatcher;
        /**
         * @deprecated
         */
        static digit(): $CharMatcher;
        or(other: $CharMatcher): $CharMatcher;
        static inRange(startInclusive: string, endInclusive: string): $CharMatcher;
        negate(): $CharMatcher;
        and(other: $CharMatcher): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLowerCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaUpperCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaDigit(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetter(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetterOrDigit(): $CharMatcher;
        static any(): $CharMatcher;
        static whitespace(): $CharMatcher;
        static none(): $CharMatcher;
        trimAndCollapseFrom(sequence: $CharSequence, replacement: string): string;
        retainFrom(sequence: $CharSequence): string;
        static anyOf(sequence: $CharSequence): $CharMatcher;
        removeFrom(sequence: $CharSequence): string;
        static javaIsoControl(): $CharMatcher;
        /**
         * @deprecated
         */
        static singleWidth(): $CharMatcher;
        static forPredicate(predicate: $Predicate<string>): $CharMatcher;
        precomputed(): $CharMatcher;
        static breakingWhitespace(): $CharMatcher;
        matchesNoneOf(sequence: $CharSequence): boolean;
        replaceFrom(sequence: $CharSequence, replacement: string): string;
        replaceFrom(sequence: $CharSequence, replacement: $CharSequence): string;
        matchesAnyOf(sequence: $CharSequence): boolean;
        matchesAllOf(sequence: $CharSequence): boolean;
        trimLeadingFrom(sequence: $CharSequence): string;
        collapseFrom(sequence: $CharSequence, replacement: string): string;
        lastIndexIn(sequence: $CharSequence): number;
        trimTrailingFrom(sequence: $CharSequence): string;
        /**
         * @deprecated
         */
        static invisible(): $CharMatcher;
        indexIn(sequence: $CharSequence): number;
        indexIn(sequence: $CharSequence, start: number): number;
        static isNot(match: string): $CharMatcher;
        trimFrom(sequence: $CharSequence): string;
        countIn(sequence: $CharSequence): number;
        test(input: string): boolean;
        or(arg0: $Predicate_<string>): $Predicate$1<string>;
        and(arg0: $Predicate_<string>): $Predicate$1<string>;
    }
}
