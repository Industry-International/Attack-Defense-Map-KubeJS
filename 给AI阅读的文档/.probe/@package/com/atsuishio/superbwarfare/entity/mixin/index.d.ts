import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $OBB$Part_, $OBB$Part } from "@package/com/atsuishio/superbwarfare/tools";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Stack } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/atsuishio/superbwarfare/entity/mixin" {
    export class $DamageAccess {
        static Companion: $DamageAccess$Companion;
    }
    export interface $DamageAccess {
        superbWarfare$checkTotemDeathProtection(arg0: $DamageSource_): boolean;
        superbWarfare$getDeathSound(): $SoundEvent;
        superbWarfare$actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        superbWarfare$hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        superbWarfare$getSoundVolume(): number;
        superbwarfare$getDamageContainers(): $Stack<$DamageContainer>;
        superbWarfare$playHurtSound(arg0: $DamageSource_): void;
    }
    export class $CupidLove$Companion {
        getInstance(arg0: $Villager): $CupidLove;
    }
    export class $CupidLove {
        static Companion: $CupidLove$Companion;
    }
    export interface $CupidLove {
        superbwarfare$setCupidLove(arg0: boolean): void;
        superbwarfare$getCupidLove(): boolean;
    }
    export class $OBBHitter {
        static getInstance(arg0: $Entity): $OBBHitter;
        static Companion: $OBBHitter$Companion;
    }
    export interface $OBBHitter {
        sbw$getCurrentHitPart(): $OBB$Part;
        sbw$setCurrentHitPart(arg0: $OBB$Part_): void;
    }
    export class $ICustomKnockback {
        static getInstance(arg0: $LivingEntity): $ICustomKnockback;
        static Companion: $ICustomKnockback$Companion;
    }
    export interface $ICustomKnockback {
        superbWarfare$resetKnockbackStrength(): void;
        superbWarfare$setKnockbackStrength(arg0: number): void;
        superbWarfare$getKnockbackStrength(): number;
    }
    export class $BeastEntityKiller$Companion {
        getInstance(arg0: $LivingEntity): $BeastEntityKiller;
    }
    export class $DamageAccess$Companion {
        of(arg0: $LivingEntity): $DamageAccess;
    }
    export class $OBBHitter$Companion {
        getInstance(arg0: $Entity): $OBBHitter;
    }
    export class $ICustomKnockback$Companion {
        getInstance(arg0: $LivingEntity): $ICustomKnockback;
    }
    export class $BeastEntityKiller {
        static Companion: $BeastEntityKiller$Companion;
    }
    export interface $BeastEntityKiller {
        sbw$kill(): void;
    }
    /**
     * Values that may be interpreted as {@link $BeastEntityKiller}.
     */
    export type $BeastEntityKiller_ = (() => void);
}
