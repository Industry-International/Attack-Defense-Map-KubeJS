import { $Either } from "@package/com/mojang/datafixers/util";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $Map_, $Map, $Set, $Set_, $Collection } from "@package/java/util";
import { $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $HolderSet, $HolderSet_, $HolderLookup } from "@package/net/minecraft/core";
import { $Dynamic3CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType, $Dynamic2CommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Comparable_, $Record, $Comparable } from "@package/java/lang";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/arguments/blocks" {
    export class $BlockStateParser {
        static serialize(arg0: $BlockState_): string;
        static parseForTesting(arg0: $HolderLookup<$Block_>, arg1: string, arg2: boolean): $Either<$BlockStateParser$BlockResult, $BlockStateParser$TagResult>;
        static parseForTesting(arg0: $HolderLookup<$Block_>, arg1: $StringReader, arg2: boolean): $Either<$BlockStateParser$BlockResult, $BlockStateParser$TagResult>;
        static parseForBlock(arg0: $HolderLookup<$Block_>, arg1: string, arg2: boolean): $BlockStateParser$BlockResult;
        static parseForBlock(arg0: $HolderLookup<$Block_>, arg1: $StringReader, arg2: boolean): $BlockStateParser$BlockResult;
        static fillSuggestions(arg0: $HolderLookup<$Block_>, arg1: $SuggestionsBuilder, arg2: boolean, arg3: boolean): $CompletableFuture<$Suggestions>;
        static ERROR_EXPECTED_END_OF_PROPERTIES: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_VALUE: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_VALUE: $Dynamic3CommandExceptionType;
        static ERROR_NO_TAGS_ALLOWED: $SimpleCommandExceptionType;
        static ERROR_UNKNOWN_BLOCK: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_PROPERTY: $Dynamic2CommandExceptionType;
        static ERROR_DUPLICATE_PROPERTY: $Dynamic2CommandExceptionType;
        static ERROR_UNKNOWN_TAG: $DynamicCommandExceptionType;
    }
    export class $BlockStateParser$BlockResult extends $Record {
        properties(): $Map<$Property<never>, $Comparable<never>>;
        blockState(): $BlockState;
        nbt(): $CompoundTag;
        constructor(arg0: $BlockState_, arg1: $Map_<$Property<never>, $Comparable_<never>>, arg2: $CompoundTag_);
    }
    export class $BlockPredicateArgument implements $ArgumentType<$BlockPredicateArgument$Result> {
        static parse(arg0: $HolderLookup<$Block_>, arg1: $StringReader): $BlockPredicateArgument$Result;
        getExamples(): $Collection<string>;
        static blockPredicate(arg0: $CommandBuildContext): $BlockPredicateArgument;
        static getBlockPredicate(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Predicate<$BlockInWorld>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $BlockPredicateArgument$Result;
        parse(arg0: $StringReader): $BlockPredicateArgument$Result;
        constructor(arg0: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $BlockPredicateArgument$Result {
    }
    export interface $BlockPredicateArgument$Result extends $Predicate<$BlockInWorld> {
        requiresNbt(): boolean;
    }
    export class $BlockPredicateArgument$TagPredicate implements $BlockPredicateArgument$Result {
        or(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        negate(): $Predicate<$BlockInWorld>;
        and(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
    }
    export class $BlockStateParser$TagResult extends $Record {
        tag(): $HolderSet<$Block>;
        nbt(): $CompoundTag;
        vagueProperties(): $Map<string, string>;
        constructor(arg0: $HolderSet_<$Block>, arg1: $Map_<string, string>, arg2: $CompoundTag_);
    }
    export class $BlockStateArgument implements $ArgumentType<$BlockInput> {
        parse(arg0: $StringReader): $BlockInput;
        static block(arg0: $CommandBuildContext): $BlockStateArgument;
        getExamples(): $Collection<string>;
        static getBlock(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $BlockInput;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $BlockInput;
        constructor(arg0: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $BlockPredicateArgument$BlockPredicate implements $BlockPredicateArgument$Result {
        or(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        negate(): $Predicate<$BlockInWorld>;
        and(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
    }
    export class $BlockInput implements $Predicate<$BlockInWorld> {
        getDefinedProperties(): $Set<$Property<never>>;
        test(arg0: $ServerLevel, arg1: $BlockPos_): boolean;
        test(arg0: $BlockInWorld): boolean;
        getState(): $BlockState;
        place(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number): boolean;
        or(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        negate(): $Predicate<$BlockInWorld>;
        and(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        constructor(arg0: $BlockState_, arg1: $Set_<$Property<never>>, arg2: $CompoundTag_);
        get definedProperties(): $Set<$Property<never>>;
        get state(): $BlockState;
    }
}
