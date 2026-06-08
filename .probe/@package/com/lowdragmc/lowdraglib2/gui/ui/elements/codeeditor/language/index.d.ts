import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Style } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $Pattern, $Matcher } from "@package/java/util/regex";
import { $Set_, $List, $List_, $Map, $Set } from "@package/java/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor/language" {
    export class $StyleManager {
        getDefaultStyle(): $Style;
        getStyleForTokenType(arg0: $TokenType): $Style;
        setDefaultStyle(arg0: $Style): void;
        getStyleMap(): $Map<string, $Style>;
        defaultStyle: $Style;
        static DEFAULT: $StyleManager;
        constructor();
        get styleMap(): $Map<string, $Style>;
    }
    export class $SyntaxParser {
        parseLine(arg0: string): $List<$Token>;
        getLanguageDefinition(): $ILanguageDefinition;
        setLanguageDefinition(arg0: $ILanguageDefinition): void;
        constructor();
    }
    export class $Token extends $Record {
        type(): $TokenType;
        endIndex(): number;
        startIndex(): number;
        text(): string;
        constructor(text: string, type: $TokenType, startIndex: number, endIndex: number);
    }
    export class $LanguageDefinition implements $ILanguageDefinition {
        getName(): string;
        getTokenType(arg0: $Matcher): $TokenType;
        getTokenPattern(): $Pattern;
        getTypesInOrder(): $List<$TokenType>;
        getIndentations(): $Set<string>;
        shouldIncreaseIndentation(arg0: string): boolean;
        compileTokenPattern(): $LanguageDefinition;
        constructor(arg0: string, arg1: $List_<$TokenType>, arg2: $Set_<string>);
        get name(): string;
        get tokenPattern(): $Pattern;
        get typesInOrder(): $List<$TokenType>;
        get indentations(): $Set<string>;
    }
    export class $Languages {
        static JAVASCRIPT: $LanguageDefinition;
        static XML: $LanguageDefinition;
        static LSS: $LanguageDefinition;
    }
    export class $TokenType implements $Predicate<$Matcher> {
        test(arg0: $Matcher): boolean;
        setPattern(arg0: string): $TokenType;
        hasPattern(): boolean;
        getPattern(): string;
        getMatcher(): $Predicate<$Matcher>;
        setMatcher(arg0: $Predicate_<$Matcher>): $TokenType;
        or(arg0: $Predicate_<$Matcher>): $Predicate<$Matcher>;
        negate(): $Predicate<$Matcher>;
        and(arg0: $Predicate_<$Matcher>): $Predicate<$Matcher>;
        name: string;
        constructor(arg0: string);
    }
    export class $ILanguageDefinition {
    }
    export interface $ILanguageDefinition {
        getName(): string;
        getTokenType(arg0: $Matcher): $TokenType;
        getTokenPattern(): $Pattern;
        shouldIncreaseIndentation(arg0: string): boolean;
        get name(): string;
        get tokenPattern(): $Pattern;
    }
}
