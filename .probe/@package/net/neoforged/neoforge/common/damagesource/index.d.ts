import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LivingShieldBlockEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Enum } from "@package/java/lang";
import { $CombatEntry_, $DamageSource_, $CombatEntry, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/common/damagesource" {
    export class $IDeathMessageProvider {
        static DEFAULT: $IDeathMessageProvider;
    }
    export interface $IDeathMessageProvider {
        getDeathMessage(arg0: $LivingEntity, arg1: $CombatEntry_, arg2: $CombatEntry_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IDeathMessageProvider}.
     */
    export type $IDeathMessageProvider_ = ((arg0: $LivingEntity, arg1: $CombatEntry, arg2: $CombatEntry) => $Component_);
    export class $IScalingFunction {
        static DEFAULT: $IScalingFunction;
    }
    export interface $IScalingFunction {
        scaleDamage(arg0: $DamageSource_, arg1: $Player, arg2: number, arg3: $Difficulty_): number;
    }
    /**
     * Values that may be interpreted as {@link $IScalingFunction}.
     */
    export type $IScalingFunction_ = ((arg0: $DamageSource, arg1: $Player, arg2: number, arg3: $Difficulty) => number);
    export class $DamageContainer {
        getSource(): $DamageSource;
        getShieldDamage(): number;
        getOriginalDamage(): number;
        addModifier(arg0: $DamageContainer$Reduction_, arg1: $IReductionFunction_): void;
        setNewDamage(arg0: number): void;
        setBlockedDamage(arg0: $LivingShieldBlockEvent): void;
        getBlockedDamage(): number;
        setReduction(arg0: $DamageContainer$Reduction_, arg1: number): void;
        getNewDamage(): number;
        getReduction(arg0: $DamageContainer$Reduction_): number;
        setPostAttackInvulnerabilityTicks(arg0: number): void;
        getPostAttackInvulnerabilityTicks(): number;
        constructor(arg0: $DamageSource_, arg1: number);
        get source(): $DamageSource;
        get shieldDamage(): number;
        get originalDamage(): number;
    }
    export class $IReductionFunction {
    }
    export interface $IReductionFunction {
        modify(arg0: $DamageContainer, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IReductionFunction}.
     */
    export type $IReductionFunction_ = ((arg0: $DamageContainer, arg1: number) => number);
    export class $DamageContainer$Reduction extends $Enum<$DamageContainer$Reduction> {
        static values(): $DamageContainer$Reduction[];
        static valueOf(arg0: string): $DamageContainer$Reduction;
        static MOB_EFFECTS: $DamageContainer$Reduction;
        static ENCHANTMENTS: $DamageContainer$Reduction;
        static INNATE_RESISTANCE: $DamageContainer$Reduction;
        static ARMOR: $DamageContainer$Reduction;
        static ABSORPTION: $DamageContainer$Reduction;
        static INVULNERABILITY: $DamageContainer$Reduction;
    }
    /**
     * Values that may be interpreted as {@link $DamageContainer$Reduction}.
     */
    export type $DamageContainer$Reduction_ = "invulnerability" | "armor" | "enchantments" | "mob_effects" | "absorption" | "innate_resistance";
}
