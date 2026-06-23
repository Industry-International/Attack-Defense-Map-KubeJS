import { $CustomGameRuleCategory } from "@package/net/fabricmc/fabric/api/gamerule/v1";

declare module "@package/net/fabricmc/fabric/impl/gamerule" {
    export class $RuleKeyExtensions {
    }
    export interface $RuleKeyExtensions {
        fabric_getCustomCategory(): $CustomGameRuleCategory;
        fabric_setCustomCategory(arg0: $CustomGameRuleCategory): void;
    }
}
