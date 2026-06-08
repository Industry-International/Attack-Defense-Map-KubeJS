import { $TagKey } from "@package/net/minecraft/tags";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $BulletCreateEvent } from "@package/mod/chloeprime/gunsmithlib/api/common";
import { $Set } from "@package/java/util";
import { $Throwable } from "@package/java/lang";
import { $InternalEvent } from "@package/mod/chloeprime/gunsmithlib/common/internal";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/mod/chloeprime/gunsmithlib/common/util" {
    export class $SpecialHurtable {
        static USE_SPECIAL_HURT: $TagKey<$EntityType<never>>;
        static UNSUPPORTED_TYPES: $Set<$EntityType<never>>;
    }
    export interface $SpecialHurtable {
        getSpecialSetHealthFunction(): $FloatConsumer;
        getSpecialHurtFunction2(): $HurtFunction2;
        getSpecialHurtFunction1(): $HurtFunction1;
        gunsmith$beginSpecialHurt(): void;
        gunsmith$endSpecialHurt(): void;
        gunsmith$usingSpecialHurt(): boolean;
        gunsmith$addUnsupportedTypeForSpecialHurt(arg0: $EntityType_<never>, arg1: $Throwable): void;
        get specialSetHealthFunction(): $FloatConsumer;
        get specialHurtFunction2(): $HurtFunction2;
        get specialHurtFunction1(): $HurtFunction1;
    }
    export class $HurtFunction1 {
    }
    export interface $HurtFunction1 {
        invoke(arg0: $DamageSource_, arg1: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HurtFunction1}.
     */
    export type $HurtFunction1_ = ((arg0: $DamageSource, arg1: number) => boolean);
    export class $HurtFunction2 {
    }
    export interface $HurtFunction2 {
        invoke(arg0: $DamageSource_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $HurtFunction2}.
     */
    export type $HurtFunction2_ = ((arg0: $DamageSource, arg1: number) => void);
    export class $InternalBulletCreateEvent extends $InternalEvent<$BulletCreateEvent> {
        constructor(arg0: $BulletCreateEvent);
    }
    export class $FloatConsumer {
    }
    export interface $FloatConsumer {
        accept(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FloatConsumer}.
     */
    export type $FloatConsumer_ = ((arg0: number) => void);
}
