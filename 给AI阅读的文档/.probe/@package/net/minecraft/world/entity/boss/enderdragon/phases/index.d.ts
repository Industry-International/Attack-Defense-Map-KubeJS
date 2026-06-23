import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Constructor } from "@package/java/lang/reflect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/boss/enderdragon/phases" {
    export class $DragonPhaseInstance {
    }
    export interface $DragonPhaseInstance {
        /**
         * Called when this phase is set to active
         */
        begin(): void;
        /**
         * Called when this phase is set to active
         */
        end(): void;
        onHurt(damageSource: $DamageSource_, amount: number): number;
        isSitting(): boolean;
        getPhase(): $EnderDragonPhase<$DragonPhaseInstance>;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getFlySpeed(): number;
        /**
         * Called when this phase is set to active
         */
        doClientTick(): void;
        /**
         * Called when this phase is set to active
         */
        doServerTick(): void;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getTurnSpeed(): number;
        onCrystalDestroyed(crystal: $EndCrystal, pos: $BlockPos_, damageSource: $DamageSource_, player: $Player | null): void;
        /**
         * Returns the location the dragon is flying toward
         */
        getFlyTargetLocation(): $Vec3;
        get sitting(): boolean;
        get phase(): $EnderDragonPhase<$DragonPhaseInstance>;
        get flySpeed(): number;
        get turnSpeed(): number;
        get flyTargetLocation(): $Vec3;
    }
    export class $DragonLandingPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $AbstractDragonSittingPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonHoverPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonStrafePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(attackTarget: $LivingEntity): void;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
        set target(value: $LivingEntity);
    }
    export class $DragonSittingFlamingPhase extends $AbstractDragonSittingPhase {
        /**
         * Called when this phase is set to active
         */
        resetFlameCount(): void;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $EnderDragonPhaseManager {
        getPhase<T extends $DragonPhaseInstance>(phase: $EnderDragonPhase<T>): T;
        getCurrentPhase(): $DragonPhaseInstance;
        setPhase(phase: $EnderDragonPhase<never>): void;
        constructor(dragon: $EnderDragon);
        get currentPhase(): $DragonPhaseInstance;
    }
    export class $EnderDragonPhase<T extends $DragonPhaseInstance> {
        getConstructor(): $Constructor<$DragonPhaseInstance>;
        getId(): number;
        static getCount(): number;
        createInstance(dragon: $EnderDragon): $DragonPhaseInstance;
        /**
         * Gets a phase by its ID. If the phase is out of bounds (negative or beyond the end of the phase array), returns `#HOLDING_PATTERN`.
         */
        static getById(id: number): $EnderDragonPhase<never>;
        static HOVERING: $EnderDragonPhase<$DragonHoverPhase>;
        static STRAFE_PLAYER: $EnderDragonPhase<$DragonStrafePlayerPhase>;
        static SITTING_FLAMING: $EnderDragonPhase<$DragonSittingFlamingPhase>;
        static HOLDING_PATTERN: $EnderDragonPhase<$DragonHoldingPatternPhase>;
        static LANDING: $EnderDragonPhase<$DragonLandingPhase>;
        static CHARGING_PLAYER: $EnderDragonPhase<$DragonChargePlayerPhase>;
        static LANDING_APPROACH: $EnderDragonPhase<$DragonLandingApproachPhase>;
        static DYING: $EnderDragonPhase<$DragonDeathPhase>;
        static SITTING_SCANNING: $EnderDragonPhase<$DragonSittingScanningPhase>;
        static TAKEOFF: $EnderDragonPhase<$DragonTakeoffPhase>;
        static SITTING_ATTACKING: $EnderDragonPhase<$DragonSittingAttackingPhase>;
        get constructor(): $Constructor<$DragonPhaseInstance>;
        get id(): number;
        static get count(): number;
    }
    export class $DragonSittingAttackingPhase extends $AbstractDragonSittingPhase {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonChargePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(targetLocation: $Vec3_): void;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
        set target(value: $Vec3_);
    }
    export class $DragonLandingApproachPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonSittingScanningPhase extends $AbstractDragonSittingPhase {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonDeathPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonTakeoffPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonHoldingPatternPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $AbstractDragonPhaseInstance implements $DragonPhaseInstance {
        /**
         * Called when this phase is set to active
         */
        begin(): void;
        /**
         * Called when this phase is set to active
         */
        end(): void;
        onHurt(damageSource: $DamageSource_, amount: number): number;
        isSitting(): boolean;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getFlySpeed(): number;
        /**
         * Called when this phase is set to active
         */
        doClientTick(): void;
        /**
         * Called when this phase is set to active
         */
        doServerTick(): void;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getTurnSpeed(): number;
        onCrystalDestroyed(crystal: $EndCrystal, pos: $BlockPos_, dmgSrc: $DamageSource_, plyr: $Player | null): void;
        /**
         * Returns the location the dragon is flying toward
         */
        getFlyTargetLocation(): $Vec3;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
        get sitting(): boolean;
        get flySpeed(): number;
        get turnSpeed(): number;
        get flyTargetLocation(): $Vec3;
    }
}
