import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Set, $Collection } from "@package/java/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemConditionType, $AllOfCondition$Builder, $LootItemCondition, $LootItemCondition$Builder_, $AnyOfCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $CanItemPerformAbilityAccess } from "@package/snownee/jade/mixin";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";

declare module "@package/net/neoforged/neoforge/common/loot" {
    export class $CanItemPerformAbility implements $LootItemCondition, $CanItemPerformAbilityAccess {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static canItemPerformAbility(arg0: $ItemAbility_): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        getAbility(): $ItemAbility;
        static CODEC: $MapCodec<$CanItemPerformAbility>;
        static LOOT_CONDITION_TYPE: $LootItemConditionType;
        constructor(arg0: $ItemAbility_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get ability(): $ItemAbility;
    }
    export class $LootModifier implements $IGlobalLootModifier {
        apply(arg0: $ObjectArrayList<$ItemStack_>, arg1: $LootContext): $ObjectArrayList<$ItemStack>;
    }
    export class $IGlobalLootModifier {
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$IGlobalLootModifier>) | undefined>;
        static LOOT_CONDITIONS_CODEC: $Codec<$LootItemCondition[]>;
        static DIRECT_CODEC: $Codec<$IGlobalLootModifier>;
    }
    export interface $IGlobalLootModifier {
        apply(arg0: $ObjectArrayList<$ItemStack_>, arg1: $LootContext): $ObjectArrayList<$ItemStack>;
        codec(): $MapCodec<$IGlobalLootModifier>;
    }
    export class $LootTableIdCondition implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        static builder(arg0: $ResourceLocation_): $LootTableIdCondition$Builder;
        getType(): $LootItemConditionType;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static UNKNOWN_LOOT_TABLE: $ResourceLocation;
        static CODEC: $MapCodec<$LootTableIdCondition>;
        static LOOT_TABLE_ID: $LootItemConditionType;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $AddTableLootModifier extends $LootModifier {
        table(): $ResourceKey<$LootTable>;
        static CODEC: $MapCodec<$AddTableLootModifier>;
        constructor(arg0: $LootItemCondition[], arg1: $ResourceKey_<$LootTable>);
    }
    export class $LootTableIdCondition$Builder implements $LootItemCondition$Builder {
        build(): $LootItemCondition;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor(arg0: $ResourceLocation_);
    }
    export class $LootModifierManager extends $SimpleJsonResourceReloadListener {
        getAllLootMods(): $Collection<$IGlobalLootModifier>;
        static LOGGER: $Logger;
        constructor();
        get allLootMods(): $Collection<$IGlobalLootModifier>;
    }
}
