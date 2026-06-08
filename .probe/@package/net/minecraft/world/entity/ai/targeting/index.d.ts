import { $Predicate_ } from "@package/java/util/function";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/world/entity/ai/targeting" {
    export class $TargetingConditions {
        test(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        copy(): $TargetingConditions;
        range(arg0: number): $TargetingConditions;
        selector(arg0: $Predicate_<$LivingEntity>): $TargetingConditions;
        ignoreLineOfSight(): $TargetingConditions;
        static forNonCombat(): $TargetingConditions;
        static forCombat(): $TargetingConditions;
        ignoreInvisibilityTesting(): $TargetingConditions;
        static DEFAULT: $TargetingConditions;
    }
}
