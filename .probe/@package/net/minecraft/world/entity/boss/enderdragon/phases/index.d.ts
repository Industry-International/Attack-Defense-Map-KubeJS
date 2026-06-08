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
        begin(): void;
        end(): void;
        getPhase(): $EnderDragonPhase<$DragonPhaseInstance>;
        isSitting(): boolean;
        onHurt(arg0: $DamageSource_, arg1: number): number;
        getFlyTargetLocation(): $Vec3;
        getFlySpeed(): number;
        onCrystalDestroyed(arg0: $EndCrystal, arg1: $BlockPos_, arg2: $DamageSource_, arg3: $Player): void;
        getTurnSpeed(): number;
        doClientTick(): void;
        doServerTick(): void;
        get phase(): $EnderDragonPhase<$DragonPhaseInstance>;
        get sitting(): boolean;
        get flyTargetLocation(): $Vec3;
        get flySpeed(): number;
        get turnSpeed(): number;
    }
    export class $DragonLandingPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $AbstractDragonSittingPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonHoverPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonStrafePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(arg0: $LivingEntity): void;
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
        set target(value: $LivingEntity);
    }
    export class $DragonSittingFlamingPhase extends $AbstractDragonSittingPhase {
        resetFlameCount(): void;
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $EnderDragonPhaseManager {
        getPhase<T extends $DragonPhaseInstance>(arg0: $EnderDragonPhase<T>): T;
        getCurrentPhase(): $DragonPhaseInstance;
        setPhase(arg0: $EnderDragonPhase<never>): void;
        constructor(arg0: $EnderDragon);
        get currentPhase(): $DragonPhaseInstance;
    }
    export class $EnderDragonPhase<T extends $DragonPhaseInstance> {
        getConstructor(): $Constructor<$DragonPhaseInstance>;
        getId(): number;
        static getCount(): number;
        createInstance(arg0: $EnderDragon): $DragonPhaseInstance;
        static getById(arg0: number): $EnderDragonPhase<never>;
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
        constructor(arg0: $EnderDragon);
    }
    export class $DragonChargePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(arg0: $Vec3_): void;
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
        set target(value: $Vec3_);
    }
    export class $DragonLandingApproachPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonSittingScanningPhase extends $AbstractDragonSittingPhase {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonDeathPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonTakeoffPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonHoldingPatternPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $AbstractDragonPhaseInstance implements $DragonPhaseInstance {
        begin(): void;
        end(): void;
        isSitting(): boolean;
        onHurt(arg0: $DamageSource_, arg1: number): number;
        getFlyTargetLocation(): $Vec3;
        getFlySpeed(): number;
        onCrystalDestroyed(arg0: $EndCrystal, arg1: $BlockPos_, arg2: $DamageSource_, arg3: $Player): void;
        getTurnSpeed(): number;
        doClientTick(): void;
        doServerTick(): void;
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
        get sitting(): boolean;
        get flyTargetLocation(): $Vec3;
        get flySpeed(): number;
        get turnSpeed(): number;
    }
}
