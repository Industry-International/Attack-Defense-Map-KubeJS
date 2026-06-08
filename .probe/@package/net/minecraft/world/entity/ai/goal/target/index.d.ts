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
        constructor(arg0: $TamableAnimal, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
    }
    export class $DefendVillageTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(arg0: $IronGolem);
    }
    export class $OwnerHurtByTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(arg0: $TamableAnimal);
    }
    export class $HurtByTargetGoal extends $TargetGoal {
        alertOther(arg0: $Mob, arg1: $LivingEntity): void;
        alertOthers(): void;
        setAlertOthers(...arg0: $Class<never>[]): $HurtByTargetGoal;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(arg0: $PathfinderMob, ...arg1: $Class<never>[]);
    }
    export class $ResetUniversalAngerTargetGoal<T extends $Mob> extends $Goal {
        constructor(arg0: T, arg1: boolean);
    }
    export class $TargetGoal extends $Goal {
        getFollowDistance(): number;
        setUnseenMemoryTicks(arg0: number): $TargetGoal;
        canAttack(arg0: $LivingEntity, arg1: $TargetingConditions): boolean;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(arg0: $Mob, arg1: boolean);
        constructor(arg0: $Mob, arg1: boolean, arg2: boolean);
        get followDistance(): number;
    }
    export class $OwnerHurtTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(arg0: $TamableAnimal);
    }
    export class $NearestHealableRaiderTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
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
        constructor(arg0: $Raider, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
        get cooldown(): number;
    }
    export class $NearestAttackableWitchTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        setCanAttack(arg0: boolean): void;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(arg0: $Raider, arg1: $Class<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>);
    }
    export class $NearestAttackableTargetGoal<T extends $LivingEntity> extends $TargetGoal {
        setTarget(arg0: $LivingEntity): void;
        findTarget(): void;
        getTargetSearchArea(arg0: number): $AABB;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean, arg3: boolean);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean);
    }
}
