import { $AdvancementNode } from "@package/net/minecraft/advancements";
import { $Predicate_ } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/server/advancements" {
    export class $AdvancementVisibilityEvaluator$Output {
    }
    export interface $AdvancementVisibilityEvaluator$Output {
        accept(arg0: $AdvancementNode, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementVisibilityEvaluator$Output}.
     */
    export type $AdvancementVisibilityEvaluator$Output_ = ((arg0: $AdvancementNode, arg1: boolean) => void);
    export class $AdvancementVisibilityEvaluator {
        static isVisible(arg0: $AdvancementNode, arg1: $Predicate_<$AdvancementNode>): boolean;
        static evaluateVisibility(arg0: $AdvancementNode, arg1: $Predicate_<$AdvancementNode>, arg2: $AdvancementVisibilityEvaluator$Output_): void;
        constructor();
    }
    export class $AdvancementVisibilityEvaluator$VisibilityRule extends $Enum<$AdvancementVisibilityEvaluator$VisibilityRule> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementVisibilityEvaluator$VisibilityRule}.
     */
    export type $AdvancementVisibilityEvaluator$VisibilityRule_ = "show" | "hide" | "no_change";
}
