import { $OreConfiguration$TargetBlockState } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ReplacementMatch } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RuleTest } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $List, $List_, $Collection, $Set } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $Object, $Enum, $Record } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/block/state" {
    export class $BlockStatePredicate$OrMatch extends $Record implements $BlockStatePredicate {
        test(state: $BlockState_): boolean;
        list(): $List<$BlockStatePredicate>;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(list: $List_<$BlockStatePredicate_>);
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    export class $BlockStatePredicate$BlockMatch extends $Record implements $BlockStatePredicate {
        test(state: $BlockState_): boolean;
        block(): $Block;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(block: $Block_);
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    export class $BlockStatePredicate$AndMatch implements $BlockStatePredicate {
        test(state: $BlockState_): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlockIds(): $Set<$ResourceLocation>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(list: $List_<$BlockStatePredicate_>);
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    export class $BlockStatePredicate$TagMatch extends $Record implements $BlockStatePredicate {
        test(state: $BlockState_): boolean;
        tag(): $TagKey<$Block>;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlockIds(): $Set<$ResourceLocation>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(tag: $TagKey_<$Block>);
        get blocks(): $Collection<$Block>;
        get blockStates(): $Collection<$BlockState>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    export class $BlockStatePredicate {
        static fromString(s: string): $BlockStatePredicate;
        static wrap(o: $Object): $BlockStatePredicate;
        static wrapRuleTest(o: $Object): $RuleTest;
    }
    export interface $BlockStatePredicate extends $Predicate<$BlockState>, $ReplacementMatch {
        test(state: $BlockState_): boolean;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        getBlockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate}.
     */
    export type $BlockStatePredicate_ = $BlockStatePredicate_[] | { or?: $BlockStatePredicate_, not?: $BlockStatePredicate_,  } | $Block_ | RegistryTypes.BlockTag | RegExp | "*" | "-" | ((state: $BlockState) => boolean);
    export class $BlockStatePredicate$Simple extends $Enum<$BlockStatePredicate$Simple> implements $BlockStatePredicate {
        static values(): $BlockStatePredicate$Simple[];
        test(state: $BlockState_): boolean;
        static valueOf(name: string): $BlockStatePredicate$Simple;
        getBlockStates(): $Collection<$BlockState>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlocks(): $Collection<$Block>;
        getBlockIds(): $Set<$ResourceLocation>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        static ALL: $BlockStatePredicate$Simple;
        static NONE: $BlockStatePredicate$Simple;
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate$Simple}.
     */
    export type $BlockStatePredicate$Simple_ = "all" | "none";
    export class $BlockStatePredicate$StateMatch extends $Record implements $BlockStatePredicate {
        test(s: $BlockState_): boolean;
        state(): $BlockState;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(state: $BlockState_);
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    export class $BlockStatePredicate$RegexMatch implements $BlockStatePredicate {
        test(state: $BlockState_): boolean;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlockIds(): $Set<$ResourceLocation>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        pattern: $Pattern;
        constructor(p: $Pattern);
        get blocks(): $Collection<$Block>;
        get blockStates(): $Collection<$BlockState>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    export class $BlockStatePredicate$NotMatch implements $BlockStatePredicate {
        test(state: $BlockState_): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(predicate: $BlockStatePredicate_);
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
}
