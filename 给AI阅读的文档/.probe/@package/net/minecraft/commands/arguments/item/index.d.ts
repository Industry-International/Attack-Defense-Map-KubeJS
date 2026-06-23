import { $DynamicOps } from "@package/com/mojang/serialization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ImmutableStringReader, $StringReader } from "@package/com/mojang/brigadier";
import { $ResourceLookupRule, $Grammar } from "@package/net/minecraft/util/parsing/packrat/commands";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Predicate, $Function_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $Holder, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Dynamic2CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $Record } from "@package/java/lang";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/arguments/item" {
    export class $ComponentPredicateParser$PredicateLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, P> {
        context: $ComponentPredicateParser$Context<T, C, P>;
    }
    export class $ItemParser {
        parse(reader: $StringReader): $ItemParser$ItemResult;
        parse(reader: $StringReader, visitor: $ItemParser$Visitor): void;
        fillSuggestions(builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static ERROR_UNKNOWN_COMPONENT: $DynamicCommandExceptionType;
        static SYNTAX_END_COMPONENTS: string;
        static SUGGEST_NOTHING: $Function<$SuggestionsBuilder, $CompletableFuture<$Suggestions>>;
        static ERROR_MALFORMED_COMPONENT: $Dynamic2CommandExceptionType;
        static ERROR_EXPECTED_COMPONENT: $SimpleCommandExceptionType;
        registryOps: $DynamicOps<$Tag>;
        static SYNTAX_COMPONENT_SEPARATOR: string;
        static SYNTAX_REMOVED_COMPONENT: string;
        static ERROR_UNKNOWN_ITEM: $DynamicCommandExceptionType;
        static ERROR_REPEATED_COMPONENT: $DynamicCommandExceptionType;
        static SYNTAX_COMPONENT_ASSIGNMENT: string;
        static SYNTAX_START_COMPONENTS: string;
        items: $HolderLookup$RegistryLookup<$Item>;
        constructor(registries: $HolderLookup$Provider);
    }
    export class $ItemParser$State {
    }
    export class $ItemArgument implements $ArgumentType<$ItemInput> {
        static item(context: $CommandBuildContext): $ItemArgument;
        static getItem<S>(context: $CommandContext<S>, name: string): $ItemInput;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ItemInput;
        parse(arg0: $StringReader): $ItemInput;
        constructor(context: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $ComponentPredicateParser$ComponentLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, C> {
        context: $ComponentPredicateParser$Context<T, C, P>;
    }
    export class $ComponentPredicateParser {
        static createGrammar<T, C, P>(context: $ComponentPredicateParser$Context<T, C, P>): $Grammar<$List<T>>;
        constructor();
    }
    export class $ItemPredicateArgument$Result {
    }
    export interface $ItemPredicateArgument$Result extends $Predicate<$ItemStack> {
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicateArgument$Result}.
     */
    export type $ItemPredicateArgument$Result_ = (() => void);
    export class $ComponentPredicateParser$Context<T, C, P> {
    }
    export interface $ComponentPredicateParser$Context<T, C, P> {
        lookupComponentType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): C;
        lookupPredicateType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): P;
        createComponentTest(reader: $ImmutableStringReader, context: C): T;
        createComponentTest(reader: $ImmutableStringReader, context: C, value: $Tag_): T;
        createPredicateTest(reader: $ImmutableStringReader, context: P, value: $Tag_): T;
        negate(value: T): T;
        anyOf(values: $List_<T>): T;
        forTagType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): T;
        forElementType(reader: $ImmutableStringReader, elementType: $ResourceLocation_): T;
        listElementTypes(): $Stream<$ResourceLocation>;
        listPredicateTypes(): $Stream<$ResourceLocation>;
        listTagTypes(): $Stream<$ResourceLocation>;
        listComponentTypes(): $Stream<$ResourceLocation>;
    }
    export class $ComponentPredicateParser$ElementLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, T> {
        context: $ComponentPredicateParser$Context<T, C, P>;
    }
    export class $ItemParser$SuggestionsVisitor implements $ItemParser$Visitor {
        visitComponent<T>(componentType: $DataComponentType_<T>, value: T): void;
        visitSuggestions(suggestions: $Function_<$SuggestionsBuilder, $CompletableFuture<$Suggestions>>): void;
        visitItem(item: $Holder_<$Item>): void;
        visitRemovedComponent<T>(componentType: $DataComponentType_<T>): void;
    }
    export class $ItemParser$ItemResult extends $Record {
        item(): $Holder<$Item>;
        components(): $DataComponentPatch;
        constructor(arg0: $Holder_<$Item>, arg1: $DataComponentPatch_);
    }
    export class $ItemPredicateArgument implements $ArgumentType<$ItemPredicateArgument$Result> {
        getExamples(): $Collection<string>;
        static itemPredicate(context: $CommandBuildContext): $ItemPredicateArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getItemPredicate(context: $CommandContext<$CommandSourceStack>, name: string): $ItemPredicateArgument$Result;
        parse<S>(arg0: $StringReader, arg1: S): $ItemPredicateArgument$Result;
        parse(arg0: $StringReader): $ItemPredicateArgument$Result;
        static ERROR_UNKNOWN_ITEM: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_PREDICATE: $DynamicCommandExceptionType;
        static ERROR_MALFORMED_PREDICATE: $Dynamic2CommandExceptionType;
        static ERROR_UNKNOWN_COMPONENT: $DynamicCommandExceptionType;
        static PSEUDO_COMPONENTS: $Map<$ResourceLocation, $ItemPredicateArgument$ComponentWrapper>;
        static PSEUDO_PREDICATES: $Map<$ResourceLocation, $ItemPredicateArgument$PredicateWrapper>;
        static ERROR_MALFORMED_COMPONENT: $Dynamic2CommandExceptionType;
        static ERROR_UNKNOWN_TAG: $DynamicCommandExceptionType;
        constructor(context: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $ItemPredicateArgument$Context implements $ComponentPredicateParser$Context<$Predicate<$ItemStack>, $ItemPredicateArgument$ComponentWrapper, $ItemPredicateArgument$PredicateWrapper> {
    }
    export class $FunctionArgument$Result {
    }
    export interface $FunctionArgument$Result {
        create(context: $CommandContext<$CommandSourceStack>): $Collection<$CommandFunction<$CommandSourceStack>>;
        unwrap(context: $CommandContext<$CommandSourceStack>): $Pair<$ResourceLocation, $Either<$CommandFunction<$CommandSourceStack>, $Collection<$CommandFunction<$CommandSourceStack>>>>;
        unwrapToCollection(context: $CommandContext<$CommandSourceStack>): $Pair<$ResourceLocation, $Collection<$CommandFunction<$CommandSourceStack>>>;
    }
    export class $ComponentPredicateParser$TagLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, T> {
        context: $ComponentPredicateParser$Context<T, C, P>;
    }
    export class $FunctionArgument implements $ArgumentType<$FunctionArgument$Result> {
        static getFunctionCollection(context: $CommandContext<$CommandSourceStack>, name: string): $Pair<$ResourceLocation, $Collection<$CommandFunction<$CommandSourceStack>>>;
        parse(reader: $StringReader): $FunctionArgument$Result;
        static getFunction(context: $CommandContext<$CommandSourceStack>, id: $ResourceLocation_): $CommandFunction<$CommandSourceStack>;
        static functions(): $FunctionArgument;
        getExamples(): $Collection<string>;
        static getFunctions(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$CommandFunction<$CommandSourceStack>>;
        static getFunctionOrTag(context: $CommandContext<$CommandSourceStack>, name: string): $Pair<$ResourceLocation, $Either<$CommandFunction<$CommandSourceStack>, $Collection<$CommandFunction<$CommandSourceStack>>>>;
        static getFunctionTag(context: $CommandContext<$CommandSourceStack>, id: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        parse<S>(arg0: $StringReader, arg1: S): $FunctionArgument$Result;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ItemPredicateArgument$PredicateWrapper extends $Record {
    }
    export class $ItemInput {
        getItem(): $Item;
        serialize(levelRegistry: $HolderLookup$Provider): string;
        createItemStack(count: number, allowOversizedStacks: boolean): $ItemStack;
        constructor(item: $Holder_<$Item>, components: $DataComponentPatch_);
        get item(): $Item;
    }
    export class $ItemPredicateArgument$ComponentWrapper extends $Record {
    }
    export class $ItemParser$Visitor {
    }
    export interface $ItemParser$Visitor {
        visitComponent<T>(componentType: $DataComponentType_<T>, value: T): void;
        visitSuggestions(suggestions: $Function_<$SuggestionsBuilder, $CompletableFuture<$Suggestions>>): void;
        visitItem(item: $Holder_<$Item>): void;
        visitRemovedComponent<T>(componentType: $DataComponentType_<T>): void;
    }
}
