import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $DamageReduce, $DefaultGunData, $GunData } from "@package/com/atsuishio/superbwarfare/data/gun";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $EnumEntries } from "@package/kotlin/enums";
import { $PMC, $PropertyModifier } from "@package/com/atsuishio/superbwarfare/data";
import { $Object, $Enum, $Record } from "@package/java/lang";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/atsuishio/superbwarfare/perk" {
    export class $PerkInstance extends $Record {
        copy(arg0: $Perk_, arg1: number): $PerkInstance;
        level(): number;
        component1(): $Perk;
        component2(): number;
        perk(): $Perk;
        static copy$default(arg0: $PerkInstance_, arg1: $Perk_, arg2: number, arg3: number, arg4: $Object): $PerkInstance;
        constructor(arg0: $Perk_, arg1: number);
    }
    export class $Perk$Type extends $Enum<$Perk$Type> {
        static values(): $Perk$Type[];
        static valueOf(arg0: string): $Perk$Type;
        getTypeName(): string;
        static getEntries(): $EnumEntries<$Perk$Type>;
        getColor(): $ChatFormatting;
        static AMMO: $Perk$Type;
        static FUNCTIONAL: $Perk$Type;
        static DAMAGE: $Perk$Type;
        get typeName(): string;
        static get entries(): $EnumEntries<$Perk$Type>;
        get color(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $Perk$Type}.
     */
    export type $Perk$Type_ = "ammo" | "functional" | "damage";
    export interface $Perk extends RegistryMarked<RegistryTypes.SuperbwarfarePerkTag, RegistryTypes.SuperbwarfarePerk> {}
    export class $Perk implements $PropertyModifier<$GunData, $DefaultGunData> {
        getName(): string;
        getType(): $Perk$Type;
        is(arg0: $TagKey_<$Perk>): boolean;
        tick(arg0: $GunData, arg1: $PerkInstance_, arg2: $Entity): void;
        getItem(): $DeferredHolder<$Item, $Item>;
        modifyProperty(arg0: $PMC<$GunData, $DefaultGunData>): void;
        onMeleeAttack(arg0: $GunData, arg1: $PerkInstance_, arg2: $Entity, arg3: $DamageSource_): void;
        onHurtEntity(arg0: number, arg1: $GunData, arg2: $PerkInstance_, arg3: $Entity, arg4: $DamageSource_): void;
        getModifiedDamage(arg0: number, arg1: $GunData, arg2: $PerkInstance_, arg3: $Entity, arg4: $DamageSource_): number;
        onHit(arg0: $LivingEntity, arg1: $GunData, arg2: $PerkInstance_, arg3: $Entity): void;
        postReload(arg0: $GunData, arg1: $PerkInstance_, arg2: $Entity): void;
        onKill(arg0: $GunData, arg1: $PerkInstance_, arg2: $Entity, arg3: $DamageSource_): void;
        preReload(arg0: $GunData, arg1: $PerkInstance_, arg2: $Entity): void;
        getModifiedCustomRPM(arg0: number, arg1: $GunData, arg2: $PerkInstance_): number;
        getModifiedDamageReduceRate(arg0: $DamageReduce): number;
        getModifiedDamageReduceMinDistance(arg0: $DamageReduce): number;
        onChangeSlot(arg0: $GunData, arg1: $PerkInstance_, arg2: $Entity): void;
        modifyProjectile(arg0: $GunData, arg1: $PerkInstance_, arg2: $Entity): void;
        getDescriptionId(): string;
        constructor(arg0: string, arg1: $Perk$Type_);
        get name(): string;
        get type(): $Perk$Type;
        get item(): $DeferredHolder<$Item, $Item>;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $Perk}.
     */
    export type $Perk_ = RegistryTypes.SuperbwarfarePerk;
}
