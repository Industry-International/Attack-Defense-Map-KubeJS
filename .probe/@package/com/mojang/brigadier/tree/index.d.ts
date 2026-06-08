import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Suggestions, $SuggestionProvider_, $SuggestionsBuilder, $SuggestionProvider } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $AmbiguityConsumer_, $Command_, $StringReader, $Command, $RedirectModifier, $RedirectModifier_ } from "@package/com/mojang/brigadier";
import { $ArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $Collection } from "@package/java/util";
import { $CommandContextBuilder, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Comparable } from "@package/java/lang";
import { $ArgumentType, $ArgumentType_ } from "@package/com/mojang/brigadier/arguments";

declare module "@package/com/mojang/brigadier/tree" {
    export class $ArgumentCommandNode<S, T> extends $CommandNode<S> {
        getType(): $ArgumentType<$CommandNode<S>>;
        isValidInput(arg0: string): boolean;
        getCustomSuggestions(): $SuggestionProvider<S>;
        constructor(arg0: string, arg1: $ArgumentType_<$CommandNode<S>>, arg2: $Command_<S>, arg3: $Predicate_<S>, arg4: $CommandNode<S>, arg5: $RedirectModifier_<S>, arg6: boolean, arg7: $SuggestionProvider_<S>);
        get type(): $ArgumentType<$CommandNode<S>>;
        get customSuggestions(): $SuggestionProvider<S>;
    }
    export class $LiteralCommandNode<S> extends $CommandNode<S> {
        getLiteral(): string;
        isValidInput(arg0: string): boolean;
        constructor(arg0: string, arg1: $Command_<S>, arg2: $Predicate_<S>, arg3: $CommandNode<S>, arg4: $RedirectModifier_<S>, arg5: boolean);
        get literal(): string;
    }
    export class $RootCommandNode<S> extends $CommandNode<S> {
        isValidInput(arg0: string): boolean;
        constructor();
    }
    export class $CommandNode<S> implements $Comparable<$CommandNode<S>> {
        getName(): string;
        compareTo(arg0: $CommandNode<S>): number;
        canUse(arg0: S): boolean;
        parse(arg0: $StringReader, arg1: $CommandContextBuilder<S>): void;
        getChild(arg0: string): $CommandNode<S>;
        getChildren(): $Collection<$CommandNode<S>>;
        getExamples(): $Collection<string>;
        createBuilder(): $ArgumentBuilder<S, never>;
        addChild(arg0: $CommandNode<S>): void;
        findAmbiguities(arg0: $AmbiguityConsumer_<S>): void;
        getRelevantNodes(arg0: $StringReader): $Collection<$CommandNode<S>>;
        getUsageText(): string;
        getRedirectModifier(): $RedirectModifier<S>;
        getRequirement(): $Predicate<S>;
        getRedirect(): $CommandNode<S>;
        isFork(): boolean;
        getCommand(): $Command<S>;
        listSuggestions(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        get name(): string;
        get children(): $Collection<$CommandNode<S>>;
        get examples(): $Collection<string>;
        get usageText(): string;
        get redirectModifier(): $RedirectModifier<S>;
        get requirement(): $Predicate<S>;
        get redirect(): $CommandNode<S>;
        get fork(): boolean;
        get command(): $Command<S>;
    }
}
