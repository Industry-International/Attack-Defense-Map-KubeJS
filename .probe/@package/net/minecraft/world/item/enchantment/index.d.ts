import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Set, $List, $Collection_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $DifficultyInstance } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_, $UnaryOperator, $Consumer, $BiConsumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Object2IntOpenHashMap, $Object2IntMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $HolderSet_, $RegistryAccess, $Registry, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $CrossbowItem$ChargingSounds, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $Stream } from "@package/java/util/stream";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $ResourceKey_, $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $EnchantmentBuilderAccessor } from "@package/net/fabricmc/fabric/mixin/item";
import { $MutableFloat } from "@package/org/apache/commons/lang3/mutable";
import { $EnchantmentLocationBasedEffect, $EnchantmentValueEffect, $DamageImmunity, $EnchantmentAttributeEffect, $EnchantmentEntityEffect, $EnchantmentAttributeEffect_ } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as providers from "@package/net/minecraft/world/item/enchantment/providers";
export * as effects from "@package/net/minecraft/world/item/enchantment/effects";

declare module "@package/net/minecraft/world/item/enchantment" {
    export class $EnchantmentHelper {
        static getComponentType(arg0: $ItemStack_): $DataComponentType<$ItemEnchantments>;
        static has(arg0: $ItemStack_, arg1: $DataComponentType_<never>): boolean;
        static isImmuneToDamage(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $DamageSource_): boolean;
        static getAvailableEnchantmentResults(arg0: number, arg1: $ItemStack_, arg2: $Stream<$Holder_<$Enchantment>>): $List<$EnchantmentInstance>;
        static filterCompatibleEnchantments(arg0: $List_<$EnchantmentInstance>, arg1: $EnchantmentInstance): void;
        static modifyDamage(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        static getHighestLevel<T>(arg0: $ItemStack_, arg1: $DataComponentType_<T>): $Pair<T, number>;
        static processBlockExperience(arg0: $ServerLevel, arg1: $ItemStack_, arg2: number): number;
        static getEnchantmentLevel(arg0: $Holder_<$Enchantment>, arg1: $LivingEntity): number;
        static runLocationChangedEffects(arg0: $ServerLevel, arg1: $LivingEntity): void;
        static runLocationChangedEffects(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $EquipmentSlot_): void;
        static processMobExperience(arg0: $ServerLevel, arg1: $Entity, arg2: $Entity, arg3: number): number;
        static getDamageProtection(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $DamageSource_): number;
        static stopLocationBasedEffects(arg0: $LivingEntity): void;
        static stopLocationBasedEffects(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $EquipmentSlot_): void;
        /**
         * @deprecated
         */
        static getItemEnchantmentLevel(arg0: $Holder_<$Enchantment>, arg1: $ItemStack_): number;
        static forEachModifier(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static forEachModifier(arg0: $ItemStack_, arg1: $EquipmentSlotGroup_, arg2: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static tickEffects(arg0: $ServerLevel, arg1: $LivingEntity): void;
        static modifyKnockback(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        static processDurabilityChange(arg0: $ServerLevel, arg1: $ItemStack_, arg2: number): number;
        static getEnchantmentsForCrafting(arg0: $ItemStack_): $ItemEnchantments;
        static canStoreEnchantments(arg0: $ItemStack_): boolean;
        static processProjectileCount(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: number): number;
        static processProjectileSpread(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: number): number;
        static getFishingLuckBonus(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity): number;
        static getFishingTimeReduction(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity): number;
        static modifyFallBasedDamage(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        static modifyCrossbowChargingTime(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): number;
        static setEnchantments(arg0: $ItemStack_, arg1: $ItemEnchantments_): void;
        static selectEnchantment(arg0: $RandomSource, arg1: $ItemStack_, arg2: number, arg3: $Stream<$Holder_<$Enchantment>>): $List<$EnchantmentInstance>;
        static getEnchantmentCost(arg0: $RandomSource, arg1: number, arg2: number, arg3: $ItemStack_): number;
        static updateEnchantments(arg0: $ItemStack_, arg1: $Consumer_<$ItemEnchantments$Mutable>): $ItemEnchantments;
        static hasAnyEnchantments(arg0: $ItemStack_): boolean;
        static processAmmoUse(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number): number;
        static pickHighestLevel<T>(arg0: $ItemStack_, arg1: $DataComponentType_<$List_<T>>): (T) | undefined;
        static getTridentReturnToOwnerAcceleration(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity): number;
        static doPostAttackEffects(arg0: $ServerLevel, arg1: $Entity, arg2: $DamageSource_): void;
        static processEquipmentDropChance(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $DamageSource_, arg3: number): number;
        static enchantItemFromProvider(arg0: $ItemStack_, arg1: $RegistryAccess, arg2: $ResourceKey_<$EnchantmentProvider>, arg3: $DifficultyInstance, arg4: $RandomSource): void;
        static onProjectileSpawned(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $AbstractArrow, arg3: $Consumer_<$Item>): void;
        static getPiercingCount(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $ItemStack_): number;
        static onHitBlock(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $Entity, arg4: $EquipmentSlot_, arg5: $Vec3_, arg6: $BlockState_, arg7: $Consumer_<$Item>): void;
        static getRandomItemWith(arg0: $DataComponentType_<never>, arg1: $LivingEntity, arg2: $Predicate_<$ItemStack>): ($EnchantedItemInUse) | undefined;
        static hasTag(arg0: $ItemStack_, arg1: $TagKey_<$Enchantment>): boolean;
        static doPostAttackEffectsWithItemSource(arg0: $ServerLevel, arg1: $Entity, arg2: $DamageSource_, arg3: $ItemStack_): void;
        static getTridentSpinAttackStrength(arg0: $ItemStack_, arg1: $LivingEntity): number;
        static modifyDurabilityToRepairFromXp(arg0: $ServerLevel, arg1: $ItemStack_, arg2: number): number;
        static enchantItem(arg0: $RandomSource, arg1: $ItemStack_, arg2: number, arg3: $Stream<$Holder_<$Enchantment>>): $ItemStack;
        static enchantItem(arg0: $RandomSource, arg1: $ItemStack_, arg2: number, arg3: $RegistryAccess, arg4: ($HolderSet_<$Enchantment>) | undefined): $ItemStack;
        static isEnchantmentCompatible(arg0: $Collection_<$Holder_<$Enchantment>>, arg1: $Holder_<$Enchantment>): boolean;
        static runIterationOnItem(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity, arg3: $EnchantmentHelper$EnchantmentInSlotVisitor_): void;
        static runIterationOnItem(arg0: $ItemStack_, arg1: $EnchantmentHelper$EnchantmentVisitor_): void;
        static getTagEnchantmentLevel(arg0: $Holder_<$Enchantment>, arg1: $ItemStack_): number;
        static runIterationOnEquipment(arg0: $LivingEntity, arg1: $EnchantmentHelper$EnchantmentInSlotVisitor_): void;
        static modifyArmorEffectiveness(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        constructor();
    }
    export class $LevelBasedValue$LevelsSquared extends $Record implements $LevelBasedValue {
        added(): number;
        codec(): $MapCodec<$LevelBasedValue$LevelsSquared>;
        calculate(arg0: number): number;
        static CODEC: $MapCodec<$LevelBasedValue$LevelsSquared>;
        constructor(arg0: number);
    }
    export class $Enchantment$Builder implements $EnchantmentBuilderAccessor {
        build(arg0: $ResourceLocation_): $Enchantment;
        withEffect<E>(arg0: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, arg1: $EnchantmentTarget_, arg2: $EnchantmentTarget_, arg3: E, arg4: $LootItemCondition$Builder_): $Enchantment$Builder;
        withEffect<E>(arg0: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, arg1: E): $Enchantment$Builder;
        withEffect<E>(arg0: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, arg1: E, arg2: $LootItemCondition$Builder_): $Enchantment$Builder;
        withEffect(arg0: $DataComponentType_<$Unit_>): $Enchantment$Builder;
        withEffect<E>(arg0: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, arg1: $EnchantmentTarget_, arg2: $EnchantmentTarget_, arg3: E): $Enchantment$Builder;
        withEffect(arg0: $DataComponentType_<$List_<$EnchantmentAttributeEffect_>>, arg1: $EnchantmentAttributeEffect_): $Enchantment$Builder;
        exclusiveWith(arg0: $HolderSet_<$Enchantment>): $Enchantment$Builder;
        withCustomName(arg0: $UnaryOperator_<$MutableComponent>): $Enchantment$Builder;
        withSpecialEffect<E>(arg0: $DataComponentType_<E>, arg1: E): $Enchantment$Builder;
        getDefinition(): $Enchantment$EnchantmentDefinition;
        invokeGetEffectsList<E>(arg0: $DataComponentType_<$List_<E>>): $List<E>;
        getExclusiveSet(): $HolderSet<$Enchantment>;
        getEffectMap(): $DataComponentMap$Builder;
        nameFactory: $UnaryOperator<$MutableComponent>;
        constructor(arg0: $Enchantment$EnchantmentDefinition_);
        get definition(): $Enchantment$EnchantmentDefinition;
        get exclusiveSet(): $HolderSet<$Enchantment>;
        get effectMap(): $DataComponentMap$Builder;
    }
    export class $EnchantedItemInUse extends $Record {
        owner(): $LivingEntity;
        itemStack(): $ItemStack;
        inSlot(): $EquipmentSlot;
        onBreak(): $Consumer<$Item>;
        constructor(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity);
        constructor(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity, arg3: $Consumer_<$Item>);
    }
    export class $EnchantmentInstance extends $WeightedEntry$IntrusiveBase {
        level: number;
        enchantment: $Holder<$Enchantment>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: number);
    }
    export class $LevelBasedValue$Constant extends $Record implements $LevelBasedValue {
        value(): number;
        codec(): $MapCodec<$LevelBasedValue$Constant>;
        calculate(arg0: number): number;
        static CODEC: $Codec<$LevelBasedValue$Constant>;
        static TYPED_CODEC: $MapCodec<$LevelBasedValue$Constant>;
        constructor(arg0: number);
    }
    export class $LevelBasedValue$Fraction extends $Record implements $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue$Fraction>;
        denominator(): $LevelBasedValue;
        numerator(): $LevelBasedValue;
        calculate(arg0: number): number;
        static CODEC: $MapCodec<$LevelBasedValue$Fraction>;
        constructor(arg0: $LevelBasedValue, arg1: $LevelBasedValue);
    }
    export class $LevelBasedValue$Linear extends $Record implements $LevelBasedValue {
        base(): number;
        codec(): $MapCodec<$LevelBasedValue$Linear>;
        perLevelAboveFirst(): number;
        calculate(arg0: number): number;
        static CODEC: $MapCodec<$LevelBasedValue$Linear>;
        constructor(arg0: number, arg1: number);
    }
    export class $Enchantment$Cost extends $Record {
        base(): number;
        perLevelAboveFirst(): number;
        calculate(arg0: number): number;
        static CODEC: $Codec<$Enchantment$Cost>;
        constructor(base: number, perLevelAboveFirst: number);
    }
    export class $Enchantment$EnchantmentDefinition extends $Record {
        slots(): $List<$EquipmentSlotGroup>;
        maxLevel(): number;
        weight(): number;
        primaryItems(): ($HolderSet<$Item>) | undefined;
        supportedItems(): $HolderSet<$Item>;
        maxCost(): $Enchantment$Cost;
        anvilCost(): number;
        minCost(): $Enchantment$Cost;
        static CODEC: $MapCodec<$Enchantment$EnchantmentDefinition>;
        constructor(supportedItems: $HolderSet_<$Item>, primaryItems: ($HolderSet_<$Item>) | undefined, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, slots: $List_<$EquipmentSlotGroup_>);
    }
    export class $EnchantmentHelper$EnchantmentVisitor {
    }
    export interface $EnchantmentHelper$EnchantmentVisitor {
        accept(arg0: $Holder_<$Enchantment>, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentHelper$EnchantmentVisitor}.
     */
    export type $EnchantmentHelper$EnchantmentVisitor_ = ((arg0: $Holder<$Enchantment>, arg1: number) => void);
    export class $LevelBasedValue$Lookup extends $Record implements $LevelBasedValue {
        values(): $List<number>;
        fallback(): $LevelBasedValue;
        codec(): $MapCodec<$LevelBasedValue$Lookup>;
        calculate(arg0: number): number;
        static CODEC: $MapCodec<$LevelBasedValue$Lookup>;
        constructor(arg0: $List_<number>, arg1: $LevelBasedValue);
    }
    export class $ItemEnchantments$Mutable {
        set(arg0: $Holder_<$Enchantment>, arg1: number): void;
        keySet(): $Set<$Holder<$Enchantment>>;
        removeIf(arg0: $Predicate_<$Holder<$Enchantment>>): void;
        getLevel(arg0: $Holder_<$Enchantment>): number;
        toImmutable(): $ItemEnchantments;
        upgrade(arg0: $Holder_<$Enchantment>, arg1: number): void;
        constructor(arg0: $ItemEnchantments_);
    }
    export class $EnchantmentTarget extends $Enum<$EnchantmentTarget> implements $StringRepresentable {
        static values(): $EnchantmentTarget[];
        static valueOf(arg0: string): $EnchantmentTarget;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EnchantmentTarget>;
        static ATTACKER: $EnchantmentTarget;
        static VICTIM: $EnchantmentTarget;
        static DAMAGING_ENTITY: $EnchantmentTarget;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentTarget}.
     */
    export type $EnchantmentTarget_ = "attacker" | "damaging_entity" | "victim";
    export class $LevelBasedValue {
        static lookup(arg0: $List_<number>, arg1: $LevelBasedValue): $LevelBasedValue$Lookup;
        static constant(arg0: number): $LevelBasedValue$Constant;
        static bootstrap(arg0: $Registry<$MapCodec_<$LevelBasedValue>>): $MapCodec<$LevelBasedValue>;
        static perLevel(arg0: number): $LevelBasedValue$Linear;
        static perLevel(arg0: number, arg1: number): $LevelBasedValue$Linear;
        static DISPATCH_CODEC: $Codec<$LevelBasedValue>;
        static CODEC: $Codec<$LevelBasedValue>;
    }
    export interface $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue>;
        calculate(arg0: number): number;
    }
    export class $TargetedConditionalEffect<T> extends $Record {
        matches(arg0: $LootContext): boolean;
        static codec<S>(arg0: $Codec<S>, arg1: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        requirements(): ($LootItemCondition) | undefined;
        effect(): T;
        static equipmentDropsCodec<S>(arg0: $Codec<S>, arg1: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        affected(): $EnchantmentTarget;
        enchanted(): $EnchantmentTarget;
        constructor(arg0: $EnchantmentTarget_, arg1: $EnchantmentTarget_, arg2: T, arg3: ($LootItemCondition) | undefined);
    }
    export class $ConditionalEffect<T> extends $Record {
        matches(arg0: $LootContext): boolean;
        static codec<T>(arg0: $Codec<T>, arg1: $LootContextParamSet): $Codec<$ConditionalEffect<T>>;
        requirements(): ($LootItemCondition) | undefined;
        static conditionCodec(arg0: $LootContextParamSet): $Codec<$LootItemCondition>;
        effect(): T;
        constructor(arg0: T, arg1: ($LootItemCondition) | undefined);
    }
    export class $LevelBasedValue$Clamped extends $Record implements $LevelBasedValue {
        value(): $LevelBasedValue;
        min(): number;
        max(): number;
        codec(): $MapCodec<$LevelBasedValue$Clamped>;
        calculate(arg0: number): number;
        static CODEC: $MapCodec<$LevelBasedValue$Clamped>;
        constructor(arg0: $LevelBasedValue, arg1: number, arg2: number);
    }
    export class $EnchantmentHelper$EnchantmentInSlotVisitor {
    }
    export interface $EnchantmentHelper$EnchantmentInSlotVisitor {
        accept(arg0: $Holder_<$Enchantment>, arg1: number, arg2: $EnchantedItemInUse_): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentHelper$EnchantmentInSlotVisitor}.
     */
    export type $EnchantmentHelper$EnchantmentInSlotVisitor_ = ((arg0: $Holder<$Enchantment>, arg1: number, arg2: $EnchantedItemInUse) => void);
    export interface $Enchantment extends RegistryMarked<RegistryTypes.EnchantmentTag, RegistryTypes.Enchantment> {}
    export class $ItemEnchantments implements $TooltipProvider {
        size(): number;
        isEmpty(): boolean;
        entrySet(): $Set<$Object2IntMap$Entry<$Holder<$Enchantment>>>;
        keySet(): $Set<$Holder<$Enchantment>>;
        getLevel(arg0: $Holder_<$Enchantment>): number;
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        withTooltip(arg0: boolean): $ItemEnchantments;
        static CODEC: $Codec<$ItemEnchantments>;
        enchantments: $Object2IntOpenHashMap<$Holder<$Enchantment>>;
        showInTooltip: boolean;
        static EMPTY: $ItemEnchantments;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemEnchantments>;
        constructor(arg0: $Object2IntOpenHashMap<$Holder_<$Enchantment>>, arg1: boolean);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemEnchantments}.
     */
    export type $ItemEnchantments_ = {[key in RegistryTypes.Enchantment]?: number};
    export class $Enchantment extends $Record {
        tick(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity): void;
        description(): $Component;
        getMinLevel(): number;
        getMaxLevel(): number;
        effects(): $DataComponentMap;
        isImmuneToDamage(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $DamageSource_): boolean;
        getWeight(): number;
        /**
         * @deprecated
         */
        isSupportedItem(arg0: $ItemStack_): boolean;
        modifyDamage(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        definition(): $Enchantment$EnchantmentDefinition;
        static definition(arg0: $HolderSet_<$Item>, arg1: number, arg2: number, arg3: $Enchantment$Cost_, arg4: $Enchantment$Cost_, arg5: number, ...arg6: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        static definition(arg0: $HolderSet_<$Item>, arg1: $HolderSet_<$Item>, arg2: number, arg3: number, arg4: $Enchantment$Cost_, arg5: $Enchantment$Cost_, arg6: number, ...arg7: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        static doPostAttack(arg0: $TargetedConditionalEffect_<$EnchantmentEntityEffect>, arg1: $ServerLevel, arg2: number, arg3: $EnchantedItemInUse_, arg4: $Entity, arg5: $DamageSource_): void;
        doPostAttack(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $EnchantmentTarget_, arg4: $Entity, arg5: $DamageSource_): void;
        static locationContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: boolean): $LootContext;
        /**
         * @deprecated
         */
        isPrimaryItem(arg0: $ItemStack_): boolean;
        static damageContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $DamageSource_): $LootContext;
        static dynamicCost(arg0: number, arg1: number): $Enchantment$Cost;
        modifyAmmoCount(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        getSlotItems(arg0: $LivingEntity): $Map<$EquipmentSlot, $ItemStack>;
        static entityContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $Vec3_): $LootContext;
        exclusiveSet(): $HolderSet<$Enchantment>;
        /**
         * @deprecated
         */
        getSupportedItems(): $HolderSet<$Item>;
        static constantCost(arg0: number): $Enchantment$Cost;
        matchingSlot(arg0: $EquipmentSlot_): boolean;
        static getFullname(arg0: $Holder_<$Enchantment>, arg1: number): $Component;
        static blockHitContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $Vec3_, arg4: $BlockState_): $LootContext;
        static itemContext(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_): $LootContext;
        runLocationChangedEffects(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $LivingEntity): void;
        stopLocationBasedEffects(arg0: number, arg1: $EnchantedItemInUse_, arg2: $LivingEntity): void;
        modifyTridentReturnToOwnerAcceleration(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyKnockback(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        modifyFallBasedDamage(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        static applyEffects<T>(arg0: $List_<$ConditionalEffect_<T>>, arg1: $LootContext, arg2: $Consumer_<T>): void;
        getAnvilCost(): number;
        static areCompatible(arg0: $Holder_<$Enchantment>, arg1: $Holder_<$Enchantment>): boolean;
        static enchantment(arg0: $Enchantment$EnchantmentDefinition_): $Enchantment$Builder;
        /**
         * @deprecated
         */
        canEnchant(arg0: $ItemStack_): boolean;
        modifyPiercingCount(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyMobExperience(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyDamageProtection(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        modifyCrossbowChargeTime(arg0: $RandomSource, arg1: number, arg2: $MutableFloat): void;
        modifyFishingLuckBonus(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyDurabilityChange(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyProjectileSpread(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyProjectileCount(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyDamageFilteredValue(arg0: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg1: $ServerLevel, arg2: number, arg3: $ItemStack_, arg4: $Entity, arg5: $DamageSource_, arg6: $MutableFloat): void;
        modifyEntityFilteredValue(arg0: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg1: $ServerLevel, arg2: number, arg3: $ItemStack_, arg4: $Entity, arg5: $MutableFloat): void;
        modifyFishingTimeReduction(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyBlockExperience(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyItemFilteredCount(arg0: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg1: $ServerLevel, arg2: number, arg3: $ItemStack_, arg4: $MutableFloat): void;
        modifyUnfilteredValue(arg0: $DataComponentType_<$EnchantmentValueEffect>, arg1: $RandomSource, arg2: number, arg3: $MutableFloat): void;
        modifyArmorEffectivness(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        onProjectileSpawned(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity): void;
        onHitBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $BlockState_): void;
        modifyDurabilityToRepairFromXp(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyTridentSpinAttackStrength(arg0: $RandomSource, arg1: number, arg2: $MutableFloat): void;
        getMaxCost(arg0: number): number;
        getMinCost(arg0: number): number;
        getEffects<T>(arg0: $DataComponentType_<$List_<T>>): $List<T>;
        static CODEC: $Codec<$Holder<$Enchantment>>;
        static DIRECT_CODEC: $Codec<$Enchantment>;
        static MAX_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Enchantment>>;
        constructor(description: $Component_, definition: $Enchantment$EnchantmentDefinition_, exclusiveSet: $HolderSet_<$Enchantment>, effects: $DataComponentMap_);
        get minLevel(): number;
        get maxLevel(): number;
        get weight(): number;
        get supportedItems(): $HolderSet<$Item>;
        get anvilCost(): number;
    }
    /**
     * Values that may be interpreted as {@link $Enchantment}.
     */
    export type $Enchantment_ = RegistryTypes.Enchantment;
    export class $EnchantmentEffectComponents {
        static bootstrap(arg0: $Registry<$DataComponentType_<never>>): $DataComponentType<never>;
        static ATTRIBUTES: $DataComponentType<$List<$EnchantmentAttributeEffect>>;
        static HIT_BLOCK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static PROJECTILE_SPREAD: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PREVENT_EQUIPMENT_DROP: $DataComponentType<$Unit>;
        static CROSSBOW_CHARGE_TIME: $DataComponentType<$EnchantmentValueEffect>;
        static FISHING_LUCK_BONUS: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static BLOCK_EXPERIENCE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static TRIDENT_SOUND: $DataComponentType<$List<$Holder<$SoundEvent>>>;
        static SMASH_DAMAGE_PER_FALLEN_BLOCK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static POST_ATTACK: $DataComponentType<$List<$TargetedConditionalEffect<$EnchantmentEntityEffect>>>;
        static EQUIPMENT_DROPS: $DataComponentType<$List<$TargetedConditionalEffect<$EnchantmentValueEffect>>>;
        static KNOCKBACK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PREVENT_ARMOR_CHANGE: $DataComponentType<$Unit>;
        static PROJECTILE_SPAWNED: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static TRIDENT_SPIN_ATTACK_STRENGTH: $DataComponentType<$EnchantmentValueEffect>;
        static COMPONENT_CODEC: $Codec<$DataComponentType<never>>;
        static AMMO_USE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static DAMAGE_PROTECTION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static CODEC: $Codec<$DataComponentMap>;
        static DAMAGE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static REPAIR_WITH_XP: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static ARMOR_EFFECTIVENESS: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static LOCATION_CHANGED: $DataComponentType<$List<$ConditionalEffect<$EnchantmentLocationBasedEffect>>>;
        static ITEM_DAMAGE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static MOB_EXPERIENCE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PROJECTILE_COUNT: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static TICK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static DAMAGE_IMMUNITY: $DataComponentType<$List<$ConditionalEffect<$DamageImmunity>>>;
        static PROJECTILE_PIERCING: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static FISHING_TIME_REDUCTION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static CROSSBOW_CHARGING_SOUNDS: $DataComponentType<$List<$CrossbowItem$ChargingSounds>>;
        static TRIDENT_RETURN_ACCELERATION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
    }
    export interface $EnchantmentEffectComponents {
    }
    export class $Enchantments {
        static bootstrap(arg0: $BootstrapContext<$Enchantment_>): void;
        static PUNCH: $ResourceKey<$Enchantment>;
        static SOUL_SPEED: $ResourceKey<$Enchantment>;
        static FEATHER_FALLING: $ResourceKey<$Enchantment>;
        static LOYALTY: $ResourceKey<$Enchantment>;
        static DEPTH_STRIDER: $ResourceKey<$Enchantment>;
        static BLAST_PROTECTION: $ResourceKey<$Enchantment>;
        static FORTUNE: $ResourceKey<$Enchantment>;
        static VANISHING_CURSE: $ResourceKey<$Enchantment>;
        static INFINITY: $ResourceKey<$Enchantment>;
        static DENSITY: $ResourceKey<$Enchantment>;
        static KNOCKBACK: $ResourceKey<$Enchantment>;
        static BREACH: $ResourceKey<$Enchantment>;
        static SHARPNESS: $ResourceKey<$Enchantment>;
        static SMITE: $ResourceKey<$Enchantment>;
        static PROJECTILE_PROTECTION: $ResourceKey<$Enchantment>;
        static RESPIRATION: $ResourceKey<$Enchantment>;
        static BINDING_CURSE: $ResourceKey<$Enchantment>;
        static EFFICIENCY: $ResourceKey<$Enchantment>;
        static MENDING: $ResourceKey<$Enchantment>;
        static FROST_WALKER: $ResourceKey<$Enchantment>;
        static LURE: $ResourceKey<$Enchantment>;
        static UNBREAKING: $ResourceKey<$Enchantment>;
        static PIERCING: $ResourceKey<$Enchantment>;
        static PROTECTION: $ResourceKey<$Enchantment>;
        static MULTISHOT: $ResourceKey<$Enchantment>;
        static SWIFT_SNEAK: $ResourceKey<$Enchantment>;
        static FIRE_ASPECT: $ResourceKey<$Enchantment>;
        static POWER: $ResourceKey<$Enchantment>;
        static LUCK_OF_THE_SEA: $ResourceKey<$Enchantment>;
        static CHANNELING: $ResourceKey<$Enchantment>;
        static WIND_BURST: $ResourceKey<$Enchantment>;
        static BANE_OF_ARTHROPODS: $ResourceKey<$Enchantment>;
        static SWEEPING_EDGE: $ResourceKey<$Enchantment>;
        static THORNS: $ResourceKey<$Enchantment>;
        static FLAME: $ResourceKey<$Enchantment>;
        static FIRE_PROTECTION: $ResourceKey<$Enchantment>;
        static RIPTIDE: $ResourceKey<$Enchantment>;
        static LOOTING: $ResourceKey<$Enchantment>;
        static SILK_TOUCH: $ResourceKey<$Enchantment>;
        static QUICK_CHARGE: $ResourceKey<$Enchantment>;
        static AQUA_AFFINITY: $ResourceKey<$Enchantment>;
        static IMPALING: $ResourceKey<$Enchantment>;
        constructor();
    }
}
