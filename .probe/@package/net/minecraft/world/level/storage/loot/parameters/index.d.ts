import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BiMap } from "@package/com/google/common/collect";
import { $Set_, $Set } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootContextUser, $ValidationContext } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $ProblemReporter } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/storage/loot/parameters" {
    export class $LootContextParam<T> {
        getName(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        get name(): $ResourceLocation;
    }
    export class $LootContextParamSet$Builder {
        build(): $LootContextParamSet;
        optional(arg0: $LootContextParam<never>): $LootContextParamSet$Builder;
        required(arg0: $LootContextParam<never>): $LootContextParamSet$Builder;
        constructor();
    }
    export class $LootContextParams {
        static DIRECT_ATTACKING_ENTITY: $LootContextParam<$Entity>;
        static ORIGIN: $LootContextParam<$Vec3>;
        static LAST_DAMAGE_PLAYER: $LootContextParam<$Player>;
        static BLOCK_STATE: $LootContextParam<$BlockState>;
        static BLOCK_ENTITY: $LootContextParam<$BlockEntity>;
        static ATTACKING_ENTITY: $LootContextParam<$Entity>;
        static EXPLOSION_RADIUS: $LootContextParam<number>;
        static THIS_ENTITY: $LootContextParam<$Entity>;
        static DAMAGE_SOURCE: $LootContextParam<$DamageSource>;
        static TOOL: $LootContextParam<$ItemStack>;
        static ENCHANTMENT_LEVEL: $LootContextParam<number>;
        static ENCHANTMENT_ACTIVE: $LootContextParam<boolean>;
        constructor();
    }
    export class $LootContextParamSet {
        static builder(): $LootContextParamSet$Builder;
        getAllowed(): $Set<$LootContextParam<never>>;
        validateUser(arg0: $ProblemReporter, arg1: $LootContextUser): void;
        validateUser(arg0: $ValidationContext, arg1: $LootContextUser): void;
        getRequired(): $Set<$LootContextParam<never>>;
        isAllowed(arg0: $LootContextParam<never>): boolean;
        constructor(arg0: $Set_<$LootContextParam<never>>, arg1: $Set_<$LootContextParam<never>>);
        get required(): $Set<$LootContextParam<never>>;
    }
    export class $LootContextParamSets {
        static ENCHANTED_ITEM: $LootContextParamSet;
        static ENCHANTED_LOCATION: $LootContextParamSet;
        static HIT_BLOCK: $LootContextParamSet;
        static VAULT: $LootContextParamSet;
        static ADVANCEMENT_REWARD: $LootContextParamSet;
        static ARCHAEOLOGY: $LootContextParamSet;
        static ADVANCEMENT_ENTITY: $LootContextParamSet;
        static ENCHANTED_DAMAGE: $LootContextParamSet;
        static EQUIPMENT: $LootContextParamSet;
        static GIFT: $LootContextParamSet;
        static FISHING: $LootContextParamSet;
        static ENTITY: $LootContextParamSet;
        static PIGLIN_BARTER: $LootContextParamSet;
        static COMMAND: $LootContextParamSet;
        static ADVANCEMENT_LOCATION: $LootContextParamSet;
        static SHEARING: $LootContextParamSet;
        static EMPTY: $LootContextParamSet;
        static CODEC: $Codec<$LootContextParamSet>;
        static BLOCK: $LootContextParamSet;
        static CHEST: $LootContextParamSet;
        static SELECTOR: $LootContextParamSet;
        static BLOCK_USE: $LootContextParamSet;
        static ALL_PARAMS: $LootContextParamSet;
        static ENCHANTED_ENTITY: $LootContextParamSet;
        static REGISTRY: $BiMap<$ResourceLocation, $LootContextParamSet>;
        constructor();
    }
}
