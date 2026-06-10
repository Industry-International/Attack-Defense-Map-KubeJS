import { $GameRules$Key, $GameRules$Value, $GameRules$Type } from "@package/net/minecraft/world/level";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Map } from "@package/java/util";
export * as client from "@package/net/fabricmc/fabric/mixin/gamerule/client";

declare module "@package/net/fabricmc/fabric/mixin/gamerule" {
    export class $GameRuleCommandAccessor {
        static invokeQueryRule<T extends $GameRules$Value<T>>(arg0: $CommandSourceStack, arg1: $GameRules$Key<T>): number;
    }
    export interface $GameRuleCommandAccessor {
    }
    export class $GameRulesIntRuleAccessor {
    }
    export interface $GameRulesIntRuleAccessor {
        getValue(): number;
        setValue(arg0: number): void;
    }
    export class $GameRulesAccessor {
        static getRuleTypes(): $Map<$GameRules$Key<never>, $GameRules$Type<never>>;
        static get ruleTypes(): $Map<$GameRules$Key<never>, $GameRules$Type<never>>;
    }
    export interface $GameRulesAccessor {
    }
}
