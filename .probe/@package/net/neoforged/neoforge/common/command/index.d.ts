import { $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntitySelector, $EntitySelectorParser } from "@package/net/minecraft/commands/arguments/selector";

declare module "@package/net/neoforged/neoforge/common/command" {
    export class $EntitySelectorManager {
        static register(arg0: string, arg1: $IEntitySelectorType): void;
        static fillSelectorSuggestions(arg0: $SuggestionsBuilder): void;
        static parseSelector(arg0: $EntitySelectorParser): $EntitySelector;
        constructor();
    }
    export class $IEntitySelectorType {
    }
    export interface $IEntitySelectorType {
        build(arg0: $EntitySelectorParser): $EntitySelector;
        getSuggestionTooltip(): $Component;
        get suggestionTooltip(): $Component;
    }
}
