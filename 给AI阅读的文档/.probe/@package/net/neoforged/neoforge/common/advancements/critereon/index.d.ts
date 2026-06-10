import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $EntitySubPredicate, $ItemSubPredicate, $ItemSubPredicate$Type } from "@package/net/minecraft/advancements/critereon";

declare module "@package/net/neoforged/neoforge/common/advancements/critereon" {
    export class $ItemAbilityPredicate extends $Record implements $ItemSubPredicate {
        matches(arg0: $ItemStack_): boolean;
        action(): $ItemAbility;
        static CODEC: $Codec<$ItemAbilityPredicate>;
        static TYPE: $ItemSubPredicate$Type<$ItemAbilityPredicate>;
        constructor(action: $ItemAbility_);
    }
    export class $SnowBootsEntityPredicate implements $EntitySubPredicate {
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        codec(): $MapCodec<$SnowBootsEntityPredicate>;
        static CODEC: $MapCodec<$SnowBootsEntityPredicate>;
        static INSTANCE: $SnowBootsEntityPredicate;
    }
    export class $PiglinCurrencyItemPredicate implements $ItemSubPredicate {
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$PiglinCurrencyItemPredicate>;
        static INSTANCE: $PiglinCurrencyItemPredicate;
        static TYPE: $ItemSubPredicate$Type<$PiglinCurrencyItemPredicate>;
    }
    export class $PiglinNeutralArmorEntityPredicate implements $EntitySubPredicate {
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        codec(): $MapCodec<$PiglinNeutralArmorEntityPredicate>;
        static CODEC: $MapCodec<$PiglinNeutralArmorEntityPredicate>;
        static INSTANCE: $PiglinNeutralArmorEntityPredicate;
    }
}
