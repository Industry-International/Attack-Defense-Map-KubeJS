import { $EditGameRulesScreen$RuleEntry } from "@package/net/minecraft/client/gui/screens/worldselection";

declare module "@package/net/fabricmc/fabric/mixin/gamerule/client" {
    export class $EditGameRulesScreenAccessor {
    }
    export interface $EditGameRulesScreenAccessor {
        callMarkValid(arg0: $EditGameRulesScreen$RuleEntry): void;
        callMarkInvalid(arg0: $EditGameRulesScreen$RuleEntry): void;
    }
}
