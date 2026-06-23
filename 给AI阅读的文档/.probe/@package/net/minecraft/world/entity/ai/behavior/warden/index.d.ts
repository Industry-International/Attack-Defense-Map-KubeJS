import { $BehaviorControl, $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Map } from "@package/java/util";
import { $MemoryModuleType, $MemoryStatus } from "@package/net/minecraft/world/entity/ai/memory";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";

declare module "@package/net/minecraft/world/entity/ai/behavior/warden" {
    export class $SetWardenLookTarget {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $Emerging<E extends $Warden> extends $Behavior<E> {
        start(level: $ServerLevel, entity: E, gameTime: number): void;
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: E, gameTime: number): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(duration: number);
    }
    export class $Roar extends $Behavior<$Warden> {
        start(arg0: $ServerLevel, arg1: $Warden, arg2: number): void;
        stop(arg0: $ServerLevel, arg1: $Warden, arg2: number): void;
        tick(arg0: $ServerLevel, arg1: $Warden, arg2: number): void;
        canStillUse(arg0: $ServerLevel, arg1: $Warden, arg2: number): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $SonicBoom extends $Behavior<$Warden> {
        start(level: $ServerLevel, entity: $Warden, gameTime: number): void;
        stop(level: $ServerLevel, entity: $Warden, gameTime: number): void;
        tick(level: $ServerLevel, entity: $Warden, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: $Warden, gameTime: number): boolean;
        static setCooldown(entity: $LivingEntity, cooldown: number): void;
        checkExtraStartConditions(level: $ServerLevel, owner: $Warden): boolean;
        static COOLDOWN: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $TryToSniff {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $ForceUnmount extends $Behavior<$LivingEntity> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor();
    }
    export class $Sniffing<E extends $Warden> extends $Behavior<E> {
        start(level: $ServerLevel, entity: E, gameTime: number): void;
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: E, gameTime: number): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(duration: number);
    }
    export class $Digging<E extends $Warden> extends $Behavior<E> {
        start(level: $ServerLevel, entity: E, gameTime: number): void;
        stop(level: $ServerLevel, entity: E, gameTime: number): void;
        canStillUse(level: $ServerLevel, entity: E, gameTime: number): boolean;
        checkExtraStartConditions(level: $ServerLevel, owner: E): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        constructor(duration: number);
    }
    export class $SetRoarTarget {
        static create<E extends $Warden>(targetFinder: $Function_<E, ($LivingEntity) | undefined>): $BehaviorControl<E>;
        constructor();
    }
}
