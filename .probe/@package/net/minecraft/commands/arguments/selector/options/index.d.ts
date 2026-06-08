import { $Predicate_ } from "@package/java/util/function";
import { $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EntitySelectorParser } from "@package/net/minecraft/commands/arguments/selector";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/commands/arguments/selector/options" {
    export class $EntitySelectorOptions$Modifier {
    }
    export interface $EntitySelectorOptions$Modifier {
        handle(arg0: $EntitySelectorParser): void;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelectorOptions$Modifier}.
     */
    export type $EntitySelectorOptions$Modifier_ = ((arg0: $EntitySelectorParser) => void);
    export class $EntitySelectorOptions {
        static get(arg0: $EntitySelectorParser, arg1: string, arg2: number): $EntitySelectorOptions$Modifier;
        static register(arg0: string, arg1: $EntitySelectorOptions$Modifier_, arg2: $Predicate_<$EntitySelectorParser>, arg3: $Component_): void;
        static bootStrap(): void;
        static suggestNames(arg0: $EntitySelectorParser, arg1: $SuggestionsBuilder): void;
        static ERROR_LEVEL_NEGATIVE: $SimpleCommandExceptionType;
        static ERROR_LIMIT_TOO_SMALL: $SimpleCommandExceptionType;
        static ERROR_INAPPLICABLE_OPTION: $DynamicCommandExceptionType;
        static ERROR_ENTITY_TYPE_INVALID: $DynamicCommandExceptionType;
        static ERROR_RANGE_NEGATIVE: $SimpleCommandExceptionType;
        static ERROR_GAME_MODE_INVALID: $DynamicCommandExceptionType;
        static ERROR_SORT_UNKNOWN: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_OPTION: $DynamicCommandExceptionType;
        constructor();
    }
    export class $EntitySelectorOptions$Option extends $Record {
    }
}
