import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $Enum } from "@package/java/lang";
import { $Collection } from "@package/java/util";
import { $CommandContext } from "@package/com/mojang/brigadier/context";

declare module "@package/com/mojang/brigadier/arguments" {
    export class $StringArgumentType implements $ArgumentType<string> {
        getType(): $StringArgumentType$StringType;
        static string(): $StringArgumentType;
        static getString(arg0: $CommandContext<never>, arg1: string): string;
        static word(): $StringArgumentType;
        getExamples(): $Collection<string>;
        static greedyString(): $StringArgumentType;
        static escapeIfRequired(arg0: string): string;
        parse<S>(arg0: $StringReader, arg1: S): string;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): string;
        get type(): $StringArgumentType$StringType;
        get examples(): $Collection<string>;
    }
    export class $FloatArgumentType implements $ArgumentType<number> {
        static getFloat(arg0: $CommandContext<never>, arg1: string): number;
        getMaximum(): number;
        getMinimum(): number;
        getExamples(): $Collection<string>;
        static floatArg(arg0: number): $FloatArgumentType;
        static floatArg(arg0: number, arg1: number): $FloatArgumentType;
        static floatArg(): $FloatArgumentType;
        parse<S>(arg0: $StringReader, arg1: S): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): number;
        get maximum(): number;
        get minimum(): number;
        get examples(): $Collection<string>;
    }
    export class $ArgumentType<T> {
    }
    export interface $ArgumentType<T> {
        parse(arg0: $StringReader): T;
        parse<S>(arg0: $StringReader, arg1: S): T;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        get examples(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentType}.
     */
    export type $ArgumentType_<T> = ((arg0: $StringReader) => T);
    export class $StringArgumentType$StringType extends $Enum<$StringArgumentType$StringType> {
        static values(): $StringArgumentType$StringType[];
        static valueOf(arg0: string): $StringArgumentType$StringType;
        getExamples(): $Collection<string>;
        static QUOTABLE_PHRASE: $StringArgumentType$StringType;
        static GREEDY_PHRASE: $StringArgumentType$StringType;
        static SINGLE_WORD: $StringArgumentType$StringType;
        get examples(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $StringArgumentType$StringType}.
     */
    export type $StringArgumentType$StringType_ = "single_word" | "quotable_phrase" | "greedy_phrase";
    export class $DoubleArgumentType implements $ArgumentType<number> {
        static getDouble(arg0: $CommandContext<never>, arg1: string): number;
        getMaximum(): number;
        getMinimum(): number;
        getExamples(): $Collection<string>;
        static doubleArg(arg0: number): $DoubleArgumentType;
        static doubleArg(arg0: number, arg1: number): $DoubleArgumentType;
        static doubleArg(): $DoubleArgumentType;
        parse<S>(arg0: $StringReader, arg1: S): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): number;
        get maximum(): number;
        get minimum(): number;
        get examples(): $Collection<string>;
    }
    export class $LongArgumentType implements $ArgumentType<number> {
        static getLong(arg0: $CommandContext<never>, arg1: string): number;
        getMaximum(): number;
        getMinimum(): number;
        getExamples(): $Collection<string>;
        static longArg(arg0: number): $LongArgumentType;
        static longArg(arg0: number, arg1: number): $LongArgumentType;
        static longArg(): $LongArgumentType;
        parse<S>(arg0: $StringReader, arg1: S): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): number;
        get maximum(): number;
        get minimum(): number;
        get examples(): $Collection<string>;
    }
    export class $IntegerArgumentType implements $ArgumentType<number> {
        static getInteger(arg0: $CommandContext<never>, arg1: string): number;
        static integer(): $IntegerArgumentType;
        static integer(arg0: number, arg1: number): $IntegerArgumentType;
        static integer(arg0: number): $IntegerArgumentType;
        getMaximum(): number;
        getMinimum(): number;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): number;
        get maximum(): number;
        get minimum(): number;
        get examples(): $Collection<string>;
    }
}
