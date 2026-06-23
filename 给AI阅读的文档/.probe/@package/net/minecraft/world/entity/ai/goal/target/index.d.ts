import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Predicate_ } from "@package/java/util/function";
import { $TamableAnimal, $Mob, $LivingEntity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $Class } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $IronGolem } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/minecraft/world/entity/ai/goal/target" {
    export class $NonTameRandomTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(tamableMob: $TamableAnimal, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
    }
    export class $DefendVillageTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(golem: $IronGolem);
    }
    export class $OwnerHurtByTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $HurtByTargetGoal extends $TargetGoal {
        alertOther(mob: $Mob, target: $LivingEntity): void;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        alertOthers(): void;
        setAlertOthers(...reinforcementTypes: $Class<never>[]): $HurtByTargetGoal;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(mob: $PathfinderMob, ...toIgnoreDamage: $Class<never>[]);
    }
    export class $ResetUniversalAngerTargetGoal<T extends $Mob> extends $Goal {
        constructor(mob: T, alertOthersOfSameType: boolean);
    }
    export class $TargetGoal extends $Goal {
        setUnseenMemoryTicks(unseenMemoryTicks: number): $TargetGoal;
        /**
         * Checks if this is a suitable target.
         */
        canAttack(potentialTarget: $LivingEntity | null, targetPredicate: $TargetingConditions): boolean;
        getFollowDistance(): number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(mob: $Mob, mustSee: boolean);
        constructor(mob: $Mob, mustSee: boolean, mustReach: boolean);
        get followDistance(): number;
    }
    export class $OwnerHurtTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $NearestHealableRaiderTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        /**
         * Execute a one shot task or start executing a continuous task
         */
        decrementCooldown(): void;
        getCooldown(): number;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(mob: $Raider, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        get cooldown(): number;
    }
    export class $NearestAttackableWitchTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        setCanAttack(active: boolean): void;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(mob: $Raider, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
    }
    export class $NearestAttackableTargetGoal<T extends $LivingEntity> extends $TargetGoal {
        setTarget(target: $LivingEntity | null): void;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        findTarget(): void;
        getTargetSearchArea(targetDistance: number): $AABB;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(mob: $Mob, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, mustReach: boolean);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity>);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean);
    }
}
