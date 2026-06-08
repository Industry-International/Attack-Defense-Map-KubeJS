import { $Stream } from "@package/java/util/stream";
import { $Tag } from "@package/net/minecraft/nbt";
import { $Rule, $Dictionary, $ErrorCollector, $Scope, $SuggestionSupplier, $Atom, $Control_, $Term, $ParseState, $Atom_ } from "@package/net/minecraft/util/parsing/packrat";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StringReader, $ImmutableStringReader } from "@package/com/mojang/brigadier";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/util/parsing/packrat/commands" {
    export class $TagParseRule implements $Rule<$StringReader, $Tag> {
        parse(arg0: $ParseState<$StringReader>): ($Tag) | undefined;
        static INSTANCE: $Rule<$StringReader, $Tag>;
    }
    export class $StringReaderParserState extends $ParseState<$StringReader> {
        constructor(arg0: $Dictionary<$StringReader>, arg1: $ErrorCollector<$StringReader>, arg2: $StringReader);
    }
    export class $StringReaderTerms$TerminalCharacter extends $Record implements $Term<$StringReader> {
        value(): string;
        parse(arg0: $ParseState<$StringReader>, arg1: $Scope, arg2: $Control_): boolean;
        constructor(arg0: string);
    }
    export class $ResourceLocationParseRule implements $Rule<$StringReader, $ResourceLocation> {
        parse(arg0: $ParseState<$StringReader>): ($ResourceLocation) | undefined;
        static INSTANCE: $Rule<$StringReader, $ResourceLocation>;
    }
    export class $StringReaderTerms {
        static word(arg0: string): $Term<$StringReader>;
        static character(arg0: string): $Term<$StringReader>;
    }
    export interface $StringReaderTerms {
    }
    export class $ResourceSuggestion {
    }
    export interface $ResourceSuggestion extends $SuggestionSupplier<$StringReader> {
        possibleValues(arg0: $ParseState<$StringReader>): $Stream<string>;
        possibleResources(): $Stream<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceSuggestion}.
     */
    export type $ResourceSuggestion_ = (() => $Stream<$ResourceLocation_>);
    export class $Grammar<T> extends $Record {
        parse(arg0: $ParseState<$StringReader>): (T) | undefined;
        top(): $Atom<T>;
        rules(): $Dictionary<$StringReader>;
        parseForSuggestions(arg0: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parseForCommands(arg0: $StringReader): T;
        constructor(arg0: $Dictionary<$StringReader>, arg1: $Atom_<T>);
    }
    export class $StringReaderTerms$TerminalWord extends $Record implements $Term<$StringReader> {
        value(): string;
        parse(arg0: $ParseState<$StringReader>, arg1: $Scope, arg2: $Control_): boolean;
        constructor(arg0: string);
    }
    export class $ResourceLookupRule<C, V> implements $Rule<$StringReader, V>, $ResourceSuggestion {
        parse(arg0: $ParseState<$StringReader>): (V) | undefined;
        validateElement(arg0: $ImmutableStringReader, arg1: $ResourceLocation_): V;
        possibleValues(arg0: $ParseState<$StringReader>): $Stream<string>;
        context: C;
        constructor(arg0: $Atom_<$ResourceLocation_>, arg1: C);
    }
}
