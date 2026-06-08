import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $Supplier } from "@package/java/util/function";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $RuleTest, $RuleTest_, $RuleTestType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List, $List_ } from "@package/java/util";

declare module "@package/dev/latvian/mods/kubejs/level/ruletest" {
    export class $AnyMatchRuleTest extends $RuleTest {
        static CODEC: $MapCodec<$AnyMatchRuleTest>;
        rules: $List<$RuleTest>;
        constructor();
        constructor(rules: $List_<$RuleTest_>);
    }
    export class $InvertRuleTest extends $RuleTest {
        static CODEC: $MapCodec<$InvertRuleTest>;
        original: $RuleTest;
        constructor(t: $RuleTest_);
    }
    export class $KubeJSRuleTests {
        static register<P extends $RuleTest>(id: string, codec: $MapCodec_<P>): $Supplier<$RuleTestType<P>>;
        static INVERT: $Supplier<$RuleTestType<$InvertRuleTest>>;
        static ALWAYS_FALSE: $Supplier<$RuleTestType<$AlwaysFalseRuleTest>>;
        static ALL_MATCH: $Supplier<$RuleTestType<$AllMatchRuleTest>>;
        static ANY_MATCH: $Supplier<$RuleTestType<$AnyMatchRuleTest>>;
        static REGISTRY: $DeferredRegister<$RuleTestType<never>>;
    }
    export interface $KubeJSRuleTests {
    }
    export class $AllMatchRuleTest extends $RuleTest {
        static CODEC: $MapCodec<$AllMatchRuleTest>;
        rules: $List<$RuleTest>;
        constructor();
        constructor(rules: $List_<$RuleTest_>);
    }
    export class $AlwaysFalseRuleTest extends $RuleTest {
        static CODEC: $MapCodec<$AlwaysFalseRuleTest>;
        static INSTANCE: $AlwaysFalseRuleTest;
    }
}
