import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $LightningBolt, $EntityType_, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_, $EntityType, $LivingEntity, $AgeableMob } from "@package/net/minecraft/world/entity";
import { $ProblemReporter } from "@package/net/minecraft/util";
import { $CatVariant, $Animal, $FrogVariant, $Fox$Type, $Rabbit$Variant, $MushroomCow$MushroomType, $WolfVariant, $TropicalFish$Pattern, $Parrot$Variant } from "@package/net/minecraft/world/entity/animal";
import { $AdvancementProgress, $CriterionTriggerInstance, $CriterionTrigger$Listener_, $Criterion, $CriterionTrigger } from "@package/net/minecraft/advancements";
import { $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $StateHolder, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SlotRange } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentPredicate } from "@package/net/minecraft/core/component";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ArmorTrim, $TrimPattern, $TrimMaterial } from "@package/net/minecraft/world/item/armortrim";
import { $Axolotl$Variant } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $Item, $Item_, $JukeboxPlayable_, $JukeboxSong, $ItemStack_, $ItemStack, $JukeboxPlayable } from "@package/net/minecraft/world/item";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Filterable, $Filterable_ } from "@package/net/minecraft/server/network";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Zombie } from "@package/net/minecraft/world/entity/monster";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Boat$Type } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StatType_ } from "@package/net/minecraft/stats";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation } from "@package/net/minecraft/world/entity/ai/attributes";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $Map, $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $Variant, $Llama$Variant } from "@package/net/minecraft/world/entity/animal/horse";
import { $Supplier_, $Function, $Predicate_, $Predicate, $Function_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderSet_, $BlockPos_, $Holder$Reference, $Holder, $Registry, $HolderGetter, $Holder_, $HolderSet, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $ItemEnchantments, $Enchantment, $ItemEnchantments_ } from "@package/net/minecraft/world/item/enchantment";
import { $Number, $Comparable, $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $LootTable, $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemLike_, $GameType, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $Fireworks_, $Fireworks, $ItemContainerContents, $WrittenBookContent_, $WritableBookContent, $ItemAttributeModifiers_, $WrittenBookContent, $BundleContents, $ItemAttributeModifiers$Entry, $WritableBookContent_, $FireworkExplosion$Shape, $FireworkExplosion_, $FireworkExplosion$Shape_, $ItemAttributeModifiers$Entry_, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $Villager, $AbstractVillager, $VillagerType } from "@package/net/minecraft/world/entity/npc";
import { $PotionContents_, $PotionContents, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageType, $DamageSource_, $DamageType_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/advancements/critereon" {
    export class $LightPredicate$Builder {
        build(): $LightPredicate;
        static light(): $LightPredicate$Builder;
        setComposite(arg0: $MinMaxBounds$Ints_): $LightPredicate$Builder;
        constructor();
        set composite(value: $MinMaxBounds$Ints_);
    }
    export class $ItemContainerPredicate extends $Record implements $SingleComponentItemPredicate<$ItemContainerContents> {
        componentType(): $DataComponentType<$ItemContainerContents>;
        matches(arg0: $ItemStack_, arg1: $ItemContainerContents): boolean;
        items(): ($CollectionPredicate<$ItemStack, $ItemPredicate>) | undefined;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemContainerPredicate>;
        constructor(arg0: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined);
    }
    export class $MinMaxBounds$Ints extends $Record implements $MinMaxBounds<number> {
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(arg0: number): boolean;
        static between(arg0: number, arg1: number): $MinMaxBounds$Ints;
        static atMost(arg0: number): $MinMaxBounds$Ints;
        static atLeast(arg0: number): $MinMaxBounds$Ints;
        static fromReader(arg0: $StringReader, arg1: $Function_<number, number>): $MinMaxBounds$Ints;
        static fromReader(arg0: $StringReader): $MinMaxBounds$Ints;
        static exactly(arg0: number): $MinMaxBounds$Ints;
        matchesSqr(arg0: number): boolean;
        minSq(): (number) | undefined;
        maxSq(): (number) | undefined;
        unwrapPoint(): (number) | undefined;
        isAny(): boolean;
        static CODEC: $Codec<$MinMaxBounds$Ints>;
        static ANY: $MinMaxBounds$Ints;
        constructor(arg0: (number) | undefined, arg1: (number) | undefined, arg2: (number) | undefined, arg3: (number) | undefined);
        get any(): boolean;
    }
    export class $PlayerPredicate$AdvancementPredicate {
    }
    export interface $PlayerPredicate$AdvancementPredicate extends $Predicate<$AdvancementProgress> {
    }
    /**
     * Values that may be interpreted as {@link $PlayerPredicate$AdvancementPredicate}.
     */
    export type $PlayerPredicate$AdvancementPredicate_ = (() => void);
    export class $UsedTotemTrigger extends $SimpleCriterionTrigger<$UsedTotemTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_): void;
        constructor();
    }
    export class $EntityTypePredicate extends $Record {
        matches(arg0: $EntityType_<never>): boolean;
        static of(arg0: $TagKey_<$EntityType<never>>): $EntityTypePredicate;
        static of(arg0: $EntityType_<never>): $EntityTypePredicate;
        types(): $HolderSet<$EntityType<never>>;
        static CODEC: $Codec<$EntityTypePredicate>;
        constructor(arg0: $HolderSet_<$EntityType<never>>);
    }
    export class $MovementPredicate extends $Record {
        matches(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        x(): $MinMaxBounds$Doubles;
        z(): $MinMaxBounds$Doubles;
        y(): $MinMaxBounds$Doubles;
        static verticalSpeed(arg0: $MinMaxBounds$Doubles_): $MovementPredicate;
        verticalSpeed(): $MinMaxBounds$Doubles;
        static horizontalSpeed(arg0: $MinMaxBounds$Doubles_): $MovementPredicate;
        horizontalSpeed(): $MinMaxBounds$Doubles;
        fallDistance(): $MinMaxBounds$Doubles;
        static fallDistance(arg0: $MinMaxBounds$Doubles_): $MovementPredicate;
        static speed(arg0: $MinMaxBounds$Doubles_): $MovementPredicate;
        speed(): $MinMaxBounds$Doubles;
        static CODEC: $Codec<$MovementPredicate>;
        constructor(arg0: $MinMaxBounds$Doubles_, arg1: $MinMaxBounds$Doubles_, arg2: $MinMaxBounds$Doubles_, arg3: $MinMaxBounds$Doubles_, arg4: $MinMaxBounds$Doubles_, arg5: $MinMaxBounds$Doubles_, arg6: $MinMaxBounds$Doubles_);
    }
    export class $UsedTotemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static usedTotem(arg0: $ItemLike_): $Criterion<$UsedTotemTrigger$TriggerInstance>;
        static usedTotem(arg0: $ItemPredicate_): $Criterion<$UsedTotemTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$UsedTotemTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined);
    }
    export class $DamagePredicate extends $Record {
        takenDamage(): $MinMaxBounds$Doubles;
        type(): ($DamageSourcePredicate) | undefined;
        matches(arg0: $ServerPlayer, arg1: $DamageSource_, arg2: number, arg3: number, arg4: boolean): boolean;
        sourceEntity(): ($EntityPredicate) | undefined;
        blocked(): (boolean) | undefined;
        dealtDamage(): $MinMaxBounds$Doubles;
        static CODEC: $Codec<$DamagePredicate>;
        constructor(arg0: $MinMaxBounds$Doubles_, arg1: $MinMaxBounds$Doubles_, arg2: ($EntityPredicate_) | undefined, arg3: (boolean) | undefined, arg4: ($DamageSourcePredicate_) | undefined);
    }
    export class $FluidPredicate extends $Record {
        matches(arg0: $ServerLevel, arg1: $BlockPos_): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        fluids(): ($HolderSet<$Fluid>) | undefined;
        static CODEC: $Codec<$FluidPredicate>;
        constructor(arg0: ($HolderSet_<$Fluid>) | undefined, arg1: ($StatePropertiesPredicate_) | undefined);
    }
    export class $CollectionCountsPredicate$Single<T, P extends $Predicate<T>> extends $Record implements $CollectionCountsPredicate<T, P> {
        test(arg0: $Iterable_<T>): boolean;
        entry(): $CollectionCountsPredicate$Entry<T, P>;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $CollectionCountsPredicate$Entry_<T, P>);
    }
    export class $MinMaxBounds<T extends $Number> {
        static createCodec<T extends $Number, R extends $MinMaxBounds<T>>(arg0: $Codec<T>, arg1: $MinMaxBounds$BoundsFactory_<T, R>): $Codec<R>;
        static fromReader<T extends $Number, R extends $MinMaxBounds<T>>(arg0: $StringReader, arg1: $MinMaxBounds$BoundsFromReaderFactory_<T, R>, arg2: $Function_<string, T>, arg3: $Supplier_<$DynamicCommandExceptionType>, arg4: $Function_<T, T>): R;
        static ERROR_SWAPPED: $SimpleCommandExceptionType;
        static ERROR_EMPTY: $SimpleCommandExceptionType;
    }
    export interface $MinMaxBounds<T extends $Number> {
        min(): (T) | undefined;
        max(): (T) | undefined;
        unwrapPoint(): (T) | undefined;
        isAny(): boolean;
        get any(): boolean;
    }
    export class $EnchantedItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_, arg1: number): boolean;
        item(): ($ItemPredicate) | undefined;
        levels(): $MinMaxBounds$Ints;
        player(): ($ContextAwarePredicate) | undefined;
        static enchantedItem(): $Criterion<$EnchantedItemTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$EnchantedItemTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: $MinMaxBounds$Ints_);
    }
    export class $ItemPotionsPredicate extends $Record implements $SingleComponentItemPredicate<$PotionContents> {
        componentType(): $DataComponentType<$PotionContents>;
        matches(arg0: $ItemStack_, arg1: $PotionContents_): boolean;
        static potions(arg0: $HolderSet_<$Potion>): $ItemSubPredicate;
        potions(): $HolderSet<$Potion>;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemPotionsPredicate>;
        constructor(arg0: $HolderSet_<$Potion>);
    }
    export class $PlayerPredicate extends $Record implements $EntitySubPredicate {
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        level(): $MinMaxBounds$Ints;
        lookingAt(): ($EntityPredicate) | undefined;
        codec(): $MapCodec<$PlayerPredicate>;
        advancements(): $Map<$ResourceLocation, $PlayerPredicate$AdvancementPredicate>;
        stats(): $List<$PlayerPredicate$StatMatcher<never>>;
        recipes(): $Object2BooleanMap<$ResourceLocation>;
        gameType(): $GameTypePredicate;
        static CODEC: $MapCodec<$PlayerPredicate>;
        static LOOKING_AT_RANGE: number;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $GameTypePredicate_, arg2: $List_<$PlayerPredicate$StatMatcher_<never>>, arg3: $Object2BooleanMap<$ResourceLocation_>, arg4: $Map_<$ResourceLocation_, $PlayerPredicate$AdvancementPredicate_>, arg5: ($EntityPredicate_) | undefined);
    }
    export class $ItemDurabilityTrigger extends $SimpleCriterionTrigger<$ItemDurabilityTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: number): void;
        constructor();
    }
    export class $ItemTrimPredicate extends $Record implements $SingleComponentItemPredicate<$ArmorTrim> {
        componentType(): $DataComponentType<$ArmorTrim>;
        matches(arg0: $ItemStack_, arg1: $ArmorTrim): boolean;
        pattern(): ($HolderSet<$TrimPattern>) | undefined;
        material(): ($HolderSet<$TrimMaterial>) | undefined;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemTrimPredicate>;
        constructor(arg0: ($HolderSet_<$TrimMaterial>) | undefined, arg1: ($HolderSet_<$TrimPattern>) | undefined);
    }
    export class $ConsumeItemTrigger extends $SimpleCriterionTrigger<$ConsumeItemTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_): void;
        constructor();
    }
    export class $ItemAttributeModifiersPredicate$EntryPredicate extends $Record implements $Predicate<$ItemAttributeModifiers$Entry> {
        slot(): ($EquipmentSlotGroup) | undefined;
        test(arg0: $ItemAttributeModifiers$Entry_): boolean;
        id(): ($ResourceLocation) | undefined;
        attribute(): ($HolderSet<$Attribute>) | undefined;
        amount(): $MinMaxBounds$Doubles;
        operation(): ($AttributeModifier$Operation) | undefined;
        or(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): $Predicate<$ItemAttributeModifiers$Entry>;
        negate(): $Predicate<$ItemAttributeModifiers$Entry>;
        and(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): $Predicate<$ItemAttributeModifiers$Entry>;
        static CODEC: $Codec<$ItemAttributeModifiersPredicate$EntryPredicate>;
        constructor(attribute: ($HolderSet_<$Attribute>) | undefined, id: ($ResourceLocation_) | undefined, amount: $MinMaxBounds$Doubles_, operation: ($AttributeModifier$Operation_) | undefined, slot: ($EquipmentSlotGroup_) | undefined);
    }
    export class $LightningBoltPredicate extends $Record implements $EntitySubPredicate {
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        codec(): $MapCodec<$LightningBoltPredicate>;
        blocksSetOnFire(): $MinMaxBounds$Ints;
        entityStruck(): ($EntityPredicate) | undefined;
        static blockSetOnFire(arg0: $MinMaxBounds$Ints_): $LightningBoltPredicate;
        static CODEC: $MapCodec<$LightningBoltPredicate>;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: ($EntityPredicate_) | undefined);
    }
    export class $InventoryChangeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $Inventory, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number): boolean;
        slots(): $InventoryChangeTrigger$TriggerInstance$Slots;
        items(): $List<$ItemPredicate>;
        static hasItems(...arg0: $ItemLike_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...arg0: $ItemPredicate$Builder[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...arg0: $ItemPredicate_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $InventoryChangeTrigger$TriggerInstance$Slots_, arg2: $List_<$ItemPredicate_>);
    }
    export class $LootTableTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ResourceKey_<$LootTable>): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        lootTable(): $ResourceKey<$LootTable>;
        static lootTableUsed(arg0: $ResourceKey_<$LootTable>): $Criterion<$LootTableTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$LootTableTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $ResourceKey_<$LootTable>);
    }
    export class $KilledTrigger extends $SimpleCriterionTrigger<$KilledTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Entity, arg2: $DamageSource_): void;
        constructor();
    }
    export class $PlayerPredicate$StatMatcher<T> extends $Record {
    }
    export class $CollectionContentsPredicate<T, P extends $Predicate<T>> {
        static of<T, P extends $Predicate<T>>(arg0: $List_<P>): $CollectionContentsPredicate<T, P>;
        static of<T, P extends $Predicate<T>>(...arg0: P[]): $CollectionContentsPredicate<T, P>;
        static codec<T, P extends $Predicate<T>>(arg0: $Codec<P>): $Codec<$CollectionContentsPredicate<T, P>>;
    }
    export interface $CollectionContentsPredicate<T, P extends $Predicate<T>> extends $Predicate<$Iterable<T>> {
        unpack(): $List<P>;
    }
    export class $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(arg0: $StringReader, arg1: (T) | undefined, arg2: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFromReaderFactory}.
     */
    export type $MinMaxBounds$BoundsFromReaderFactory_<T, R> = ((arg0: $StringReader, arg1: (T) | undefined, arg2: (T) | undefined) => R);
    export class $EnterBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static entersBlock(arg0: $Block_): $Criterion<$EnterBlockTrigger$TriggerInstance>;
        matches(arg0: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        block(): ($Holder<$Block>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$EnterBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($StatePropertiesPredicate_) | undefined);
    }
    export class $PlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static avoidVibration(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static tick(): $Criterion<$PlayerTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        static located(arg0: ($EntityPredicate_) | undefined): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(arg0: $EntityPredicate$Builder): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(arg0: $LocationPredicate$Builder): $Criterion<$PlayerTrigger$TriggerInstance>;
        static walkOnBlockWithEquipment(arg0: $Block_, arg1: $Item_): $Criterion<$PlayerTrigger$TriggerInstance>;
        static raidWon(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static sleptInBed(): $Criterion<$PlayerTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$PlayerTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined);
    }
    export class $RecipeUnlockedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $RecipeHolder_<never>): boolean;
        recipe(): $ResourceLocation;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$RecipeUnlockedTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $ResourceLocation_);
    }
    export class $ItemJukeboxPlayablePredicate extends $Record implements $SingleComponentItemPredicate<$JukeboxPlayable> {
        componentType(): $DataComponentType<$JukeboxPlayable>;
        matches(arg0: $ItemStack_, arg1: $JukeboxPlayable_): boolean;
        static any(): $ItemJukeboxPlayablePredicate;
        song(): ($HolderSet<$JukeboxSong>) | undefined;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemJukeboxPlayablePredicate>;
        constructor(arg0: ($HolderSet_<$JukeboxSong>) | undefined);
    }
    export class $RecipeCraftedTrigger extends $SimpleCriterionTrigger<$RecipeCraftedTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ResourceLocation_, arg2: $List_<$ItemStack_>): void;
        constructor();
    }
    export class $EntitySubPredicates$EntityHolderVariantPredicateType$Instance implements $EntitySubPredicate {
    }
    export class $PlayerInteractTrigger extends $SimpleCriterionTrigger<$PlayerInteractTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $Entity): void;
        constructor();
    }
    export class $ItemAttributeModifiersPredicate extends $Record implements $SingleComponentItemPredicate<$ItemAttributeModifiers> {
        modifiers(): ($CollectionPredicate<$ItemAttributeModifiers$Entry, $ItemAttributeModifiersPredicate$EntryPredicate>) | undefined;
        componentType(): $DataComponentType<$ItemAttributeModifiers>;
        matches(arg0: $ItemStack_): boolean;
        matches(arg0: $ItemStack_, arg1: $ItemAttributeModifiers_): boolean;
        static CODEC: $Codec<$ItemAttributeModifiersPredicate>;
        constructor(modifiers: ($CollectionPredicate_<$ItemAttributeModifiers$Entry_, $ItemAttributeModifiersPredicate$EntryPredicate_>) | undefined);
    }
    export class $RaiderPredicate extends $Record implements $EntitySubPredicate {
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        codec(): $MapCodec<$RaiderPredicate>;
        isCaptain(): boolean;
        hasRaid(): boolean;
        static CODEC: $MapCodec<$RaiderPredicate>;
        static CAPTAIN_WITHOUT_RAID: $RaiderPredicate;
        constructor(arg0: boolean, arg1: boolean);
        get captain(): boolean;
    }
    export class $BredAnimalsTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        parent(): ($ContextAwarePredicate) | undefined;
        matches(arg0: $LootContext, arg1: $LootContext, arg2: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        child(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        partner(): ($ContextAwarePredicate) | undefined;
        static bredAnimals(arg0: $EntityPredicate$Builder): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        static bredAnimals(arg0: ($EntityPredicate_) | undefined, arg1: ($EntityPredicate_) | undefined, arg2: ($EntityPredicate_) | undefined): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        static bredAnimals(): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        static CODEC: $Codec<$BredAnimalsTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined, arg2: ($ContextAwarePredicate) | undefined, arg3: ($ContextAwarePredicate) | undefined);
    }
    export class $ItemSubPredicate {
        static CODEC: $Codec<$Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>>;
    }
    export interface $ItemSubPredicate {
        matches(arg0: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSubPredicate}.
     */
    export type $ItemSubPredicate_ = ((arg0: $ItemStack) => boolean);
    export class $SingleComponentItemPredicate<T> {
    }
    export interface $SingleComponentItemPredicate<T> extends $ItemSubPredicate {
        componentType(): $DataComponentType<T>;
        matches(arg0: $ItemStack_): boolean;
        matches(arg0: $ItemStack_, arg1: T): boolean;
    }
    export class $CollectionContentsPredicate$Zero<T, P extends $Predicate<T>> implements $CollectionContentsPredicate<T, P> {
        test(arg0: $Iterable_<T>): boolean;
        unpack(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor();
    }
    export class $PlayerPredicate$AdvancementDonePredicate extends $Record implements $PlayerPredicate$AdvancementPredicate {
        or(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
        negate(): $Predicate<$AdvancementProgress>;
        and(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
    }
    export class $FishingHookPredicate extends $Record implements $EntitySubPredicate {
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        codec(): $MapCodec<$FishingHookPredicate>;
        static inOpenWater(arg0: boolean): $FishingHookPredicate;
        inOpenWater(): (boolean) | undefined;
        static CODEC: $MapCodec<$FishingHookPredicate>;
        static ANY: $FishingHookPredicate;
        constructor(arg0: (boolean) | undefined);
    }
    export class $CollectionPredicate<T, P extends $Predicate<T>> extends $Record implements $Predicate<$Iterable<T>> {
        size(): ($MinMaxBounds$Ints) | undefined;
        test(arg0: $Iterable_<$Iterable<T>>): boolean;
        contains(): ($CollectionContentsPredicate<$Iterable<T>, P>) | undefined;
        counts(): ($CollectionCountsPredicate<$Iterable<T>, P>) | undefined;
        static codec<T, P extends $Predicate<T>>(arg0: $Codec<P>): $Codec<$CollectionPredicate<T, P>>;
        or(arg0: $Predicate_<$Iterable<T>>): $Predicate<$Iterable<T>>;
        negate(): $Predicate<$Iterable<T>>;
        and(arg0: $Predicate_<$Iterable<T>>): $Predicate<$Iterable<T>>;
        constructor(arg0: ($CollectionContentsPredicate<$Iterable_<T>, P>) | undefined, arg1: ($CollectionCountsPredicate<$Iterable_<T>, P>) | undefined, arg2: ($MinMaxBounds$Ints_) | undefined);
    }
    export class $EntityFlagsPredicate extends $Record {
        matches(arg0: $Entity): boolean;
        isOnGround(): (boolean) | undefined;
        isSprinting(): (boolean) | undefined;
        isBaby(): (boolean) | undefined;
        isOnFire(): (boolean) | undefined;
        isSwimming(): (boolean) | undefined;
        isCrouching(): (boolean) | undefined;
        isFlying(): (boolean) | undefined;
        static CODEC: $Codec<$EntityFlagsPredicate>;
        constructor(arg0: (boolean) | undefined, arg1: (boolean) | undefined, arg2: (boolean) | undefined, arg3: (boolean) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined, arg6: (boolean) | undefined);
        get onGround(): (boolean) | undefined;
        get sprinting(): (boolean) | undefined;
        get baby(): (boolean) | undefined;
        get onFire(): (boolean) | undefined;
        get swimming(): (boolean) | undefined;
        get crouching(): (boolean) | undefined;
        get flying(): (boolean) | undefined;
    }
    export class $BeeNestDestroyedTrigger extends $SimpleCriterionTrigger<$BeeNestDestroyedTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $BlockState_, arg2: $ItemStack_, arg3: number): void;
        constructor();
    }
    export class $ItemEnchantmentsPredicate$Enchantments extends $ItemEnchantmentsPredicate {
        static CODEC: $Codec<$ItemEnchantmentsPredicate$Enchantments>;
        constructor(arg0: $List_<$EnchantmentPredicate_>);
    }
    export class $ItemUsedOnLocationTrigger extends $SimpleCriterionTrigger<$ItemUsedOnLocationTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $ItemStack_): void;
        constructor();
    }
    export class $TameAnimalTrigger extends $SimpleCriterionTrigger<$TameAnimalTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Animal): void;
        constructor();
    }
    export class $StatePropertiesPredicate extends $Record {
        matches(arg0: $FluidState): boolean;
        matches<S extends $StateHolder<never, S>>(arg0: $StateDefinition<never, S>, arg1: S): boolean;
        matches(arg0: $BlockState_): boolean;
        properties(): $List<$StatePropertiesPredicate$PropertyMatcher>;
        checkState(arg0: $StateDefinition<never, never>): (string) | undefined;
        static CODEC: $Codec<$StatePropertiesPredicate>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StatePropertiesPredicate>;
        constructor(arg0: $List_<$StatePropertiesPredicate$PropertyMatcher_>);
    }
    export class $FishingRodHookedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_, arg1: $LootContext, arg2: $Collection_<$ItemStack_>): boolean;
        validate(arg0: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        rod(): ($ItemPredicate) | undefined;
        static fishedItem(arg0: ($ItemPredicate_) | undefined, arg1: ($EntityPredicate_) | undefined, arg2: ($ItemPredicate_) | undefined): $Criterion<$FishingRodHookedTrigger$TriggerInstance>;
        static CODEC: $Codec<$FishingRodHookedTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: ($ContextAwarePredicate) | undefined, arg3: ($ItemPredicate_) | undefined);
    }
    export class $AnyBlockInteractionTrigger extends $SimpleCriterionTrigger<$AnyBlockInteractionTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $ItemStack_): void;
        constructor();
    }
    export class $InventoryChangeTrigger$TriggerInstance$Slots extends $Record {
        matches(arg0: number, arg1: number, arg2: number): boolean;
        empty(): $MinMaxBounds$Ints;
        full(): $MinMaxBounds$Ints;
        occupied(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance$Slots>;
        static ANY: $InventoryChangeTrigger$TriggerInstance$Slots;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_, arg2: $MinMaxBounds$Ints_);
    }
    export class $BeeNestDestroyedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static destroyedBeeNest(arg0: $Block_, arg1: $ItemPredicate$Builder, arg2: $MinMaxBounds$Ints_): $Criterion<$BeeNestDestroyedTrigger$TriggerInstance>;
        matches(arg0: $BlockState_, arg1: $ItemStack_, arg2: number): boolean;
        block(): ($Holder<$Block>) | undefined;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        beesInside(): $MinMaxBounds$Ints;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$BeeNestDestroyedTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($ItemPredicate_) | undefined, arg3: $MinMaxBounds$Ints_);
    }
    export class $StatePropertiesPredicate$ExactMatcher extends $Record implements $StatePropertiesPredicate$ValueMatcher {
    }
    export class $ItemDamagePredicate extends $Record implements $SingleComponentItemPredicate<number> {
        componentType(): $DataComponentType<number>;
        matches(arg0: $ItemStack_, arg1: number): boolean;
        damage(): $MinMaxBounds$Ints;
        static durability(arg0: $MinMaxBounds$Ints_): $ItemDamagePredicate;
        durability(): $MinMaxBounds$Ints;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemDamagePredicate>;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_);
    }
    export class $CollectionContentsPredicate$Multiple<T, P extends $Predicate<T>> extends $Record implements $CollectionContentsPredicate<T, P> {
        test(arg0: $Iterable_<T>): boolean;
        unpack(): $List<P>;
        tests(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $List_<P>);
    }
    export class $FilledBucketTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static filledBucket(arg0: $ItemPredicate$Builder): $Criterion<$FilledBucketTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$FilledBucketTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined);
    }
    export class $ItemSubPredicates {
        static bootstrap(arg0: $Registry<$ItemSubPredicate$Type_<never>>): $ItemSubPredicate$Type<never>;
        static POTIONS: $ItemSubPredicate$Type<$ItemPotionsPredicate>;
        static STORED_ENCHANTMENTS: $ItemSubPredicate$Type<$ItemEnchantmentsPredicate$StoredEnchantments>;
        static CUSTOM_DATA: $ItemSubPredicate$Type<$ItemCustomDataPredicate>;
        static ARMOR_TRIM: $ItemSubPredicate$Type<$ItemTrimPredicate>;
        static BUNDLE_CONTENTS: $ItemSubPredicate$Type<$ItemBundlePredicate>;
        static DAMAGE: $ItemSubPredicate$Type<$ItemDamagePredicate>;
        static ENCHANTMENTS: $ItemSubPredicate$Type<$ItemEnchantmentsPredicate$Enchantments>;
        static FIREWORKS: $ItemSubPredicate$Type<$ItemFireworksPredicate>;
        static WRITABLE_BOOK: $ItemSubPredicate$Type<$ItemWritableBookPredicate>;
        static ATTRIBUTE_MODIFIERS: $ItemSubPredicate$Type<$ItemAttributeModifiersPredicate>;
        static CONTAINER: $ItemSubPredicate$Type<$ItemContainerPredicate>;
        static WRITTEN_BOOK: $ItemSubPredicate$Type<$ItemWrittenBookPredicate>;
        static JUKEBOX_PLAYABLE: $ItemSubPredicate$Type<$ItemJukeboxPlayablePredicate>;
        static FIREWORK_EXPLOSION: $ItemSubPredicate$Type<$ItemFireworkExplosionPredicate>;
        constructor();
    }
    export class $TradeTrigger extends $SimpleCriterionTrigger<$TradeTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $AbstractVillager, arg2: $ItemStack_): void;
        constructor();
    }
    export class $StatePropertiesPredicate$ValueMatcher {
    }
    export interface $StatePropertiesPredicate$ValueMatcher {
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate$ValueMatcher}.
     */
    export type $StatePropertiesPredicate$ValueMatcher_ = (() => void);
    export class $LevitationTrigger extends $SimpleCriterionTrigger<$LevitationTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Vec3_, arg2: number): void;
        constructor();
    }
    export class $SummonedEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static summonedEntity(arg0: $EntityPredicate$Builder): $Criterion<$SummonedEntityTrigger$TriggerInstance>;
        matches(arg0: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$SummonedEntityTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    export class $EntitySubPredicate {
        static CODEC: $Codec<$EntitySubPredicate>;
    }
    export interface $EntitySubPredicate {
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        codec(): $MapCodec<$EntitySubPredicate>;
    }
    export class $WrappedMinMaxBounds extends $Record {
        min(): number;
        max(): number;
        matches(arg0: number): boolean;
        static between(arg0: number, arg1: number): $WrappedMinMaxBounds;
        static atMost(arg0: number): $WrappedMinMaxBounds;
        static atLeast(arg0: number): $WrappedMinMaxBounds;
        static fromJson(arg0: $JsonElement_): $WrappedMinMaxBounds;
        static fromReader(arg0: $StringReader, arg1: boolean): $WrappedMinMaxBounds;
        static fromReader(arg0: $StringReader, arg1: boolean, arg2: $Function_<number, number>): $WrappedMinMaxBounds;
        serializeToJson(): $JsonElement;
        static exactly(arg0: number): $WrappedMinMaxBounds;
        matchesSqr(arg0: number): boolean;
        static ERROR_INTS_ONLY: $SimpleCommandExceptionType;
        static ANY: $WrappedMinMaxBounds;
        constructor(arg0: number, arg1: number);
    }
    export class $ItemFireworkExplosionPredicate extends $Record implements $SingleComponentItemPredicate<$FireworkExplosion> {
        componentType(): $DataComponentType<$FireworkExplosion>;
        matches(arg0: $ItemStack_, arg1: $FireworkExplosion_): boolean;
        predicate(): $ItemFireworkExplosionPredicate$FireworkPredicate;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemFireworkExplosionPredicate>;
        constructor(arg0: $ItemFireworkExplosionPredicate$FireworkPredicate_);
    }
    export class $StatePropertiesPredicate$PropertyMatcher extends $Record {
    }
    export class $EnchantmentPredicate extends $Record {
        level(): $MinMaxBounds$Ints;
        enchantments(): ($HolderSet<$Enchantment>) | undefined;
        containedIn(arg0: $ItemEnchantments_): boolean;
        static CODEC: $Codec<$EnchantmentPredicate>;
        constructor(arg0: ($HolderSet_<$Enchantment>) | undefined, arg1: $MinMaxBounds$Ints_);
        constructor(arg0: $HolderSet_<$Enchantment>, arg1: $MinMaxBounds$Ints_);
        constructor(arg0: $Holder_<$Enchantment>, arg1: $MinMaxBounds$Ints_);
    }
    export class $ItemFireworksPredicate extends $Record implements $SingleComponentItemPredicate<$Fireworks> {
        componentType(): $DataComponentType<$Fireworks>;
        matches(arg0: $ItemStack_, arg1: $Fireworks_): boolean;
        explosions(): ($CollectionPredicate<$FireworkExplosion, $ItemFireworkExplosionPredicate$FireworkPredicate>) | undefined;
        flightDuration(): $MinMaxBounds$Ints;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemFireworksPredicate>;
        constructor(arg0: ($CollectionPredicate_<$FireworkExplosion_, $ItemFireworkExplosionPredicate$FireworkPredicate_>) | undefined, arg1: $MinMaxBounds$Ints_);
    }
    export class $PickedUpItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static thrownItemPickedUpByEntity(arg0: $ContextAwarePredicate, arg1: ($ItemPredicate_) | undefined, arg2: ($ContextAwarePredicate) | undefined): $Criterion<$PickedUpItemTrigger$TriggerInstance>;
        static thrownItemPickedUpByPlayer(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: ($ContextAwarePredicate) | undefined): $Criterion<$PickedUpItemTrigger$TriggerInstance>;
        static CODEC: $Codec<$PickedUpItemTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: ($ContextAwarePredicate) | undefined);
    }
    export class $DistanceTrigger extends $SimpleCriterionTrigger<$DistanceTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Vec3_): void;
        constructor();
    }
    export class $KilledByCrossbowTrigger extends $SimpleCriterionTrigger<$KilledByCrossbowTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Collection_<$Entity>): void;
        constructor();
    }
    export class $LightningStrikeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static lightningStrike(arg0: ($EntityPredicate_) | undefined, arg1: ($EntityPredicate_) | undefined): $Criterion<$LightningStrikeTrigger$TriggerInstance>;
        matches(arg0: $LootContext, arg1: $List_<$LootContext>): boolean;
        validate(arg0: $CriterionValidator): void;
        bystander(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        lightning(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$LightningStrikeTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined, arg2: ($ContextAwarePredicate) | undefined);
    }
    export class $MobEffectsPredicate$MobEffectInstancePredicate extends $Record {
        matches(arg0: $MobEffectInstance): boolean;
        duration(): $MinMaxBounds$Ints;
        visible(): (boolean) | undefined;
        amplifier(): $MinMaxBounds$Ints;
        ambient(): (boolean) | undefined;
        static CODEC: $Codec<$MobEffectsPredicate$MobEffectInstancePredicate>;
        constructor();
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_, arg2: (boolean) | undefined, arg3: (boolean) | undefined);
    }
    export class $SlideDownBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static slidesDownBlock(arg0: $Block_): $Criterion<$SlideDownBlockTrigger$TriggerInstance>;
        matches(arg0: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        block(): ($Holder<$Block>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$SlideDownBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($StatePropertiesPredicate_) | undefined);
    }
    export class $ItemUsedOnLocationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        static placedBlock(...arg0: $LootItemCondition$Builder_[]): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static placedBlock(arg0: $Block_): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        static itemUsedOnBlock(arg0: $LocationPredicate$Builder, arg1: $ItemPredicate$Builder): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static allayDropItemOnBlock(arg0: $LocationPredicate$Builder, arg1: $ItemPredicate$Builder): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static CODEC: $Codec<$ItemUsedOnLocationTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    export class $EntityEquipmentPredicate$Builder {
        head(arg0: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        build(): $EntityEquipmentPredicate;
        body(arg0: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        static equipment(): $EntityEquipmentPredicate$Builder;
        offhand(arg0: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        chest(arg0: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        feet(arg0: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        mainhand(arg0: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        legs(arg0: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        constructor();
    }
    export class $ConstructBeaconTrigger extends $SimpleCriterionTrigger<$ConstructBeaconTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: number): void;
        constructor();
    }
    export class $DistancePredicate extends $Record {
        matches(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        x(): $MinMaxBounds$Doubles;
        z(): $MinMaxBounds$Doubles;
        y(): $MinMaxBounds$Doubles;
        static absolute(arg0: $MinMaxBounds$Doubles_): $DistancePredicate;
        absolute(): $MinMaxBounds$Doubles;
        static vertical(arg0: $MinMaxBounds$Doubles_): $DistancePredicate;
        static horizontal(arg0: $MinMaxBounds$Doubles_): $DistancePredicate;
        horizontal(): $MinMaxBounds$Doubles;
        static CODEC: $Codec<$DistancePredicate>;
        constructor(arg0: $MinMaxBounds$Doubles_, arg1: $MinMaxBounds$Doubles_, arg2: $MinMaxBounds$Doubles_, arg3: $MinMaxBounds$Doubles_, arg4: $MinMaxBounds$Doubles_);
    }
    export class $SlimePredicate extends $Record implements $EntitySubPredicate {
        size(): $MinMaxBounds$Ints;
        matches(arg0: $Entity, arg1: $ServerLevel, arg2: $Vec3_): boolean;
        codec(): $MapCodec<$SlimePredicate>;
        static sized(arg0: $MinMaxBounds$Ints_): $SlimePredicate;
        static CODEC: $MapCodec<$SlimePredicate>;
        constructor(arg0: $MinMaxBounds$Ints_);
    }
    export class $GameTypePredicate extends $Record {
        matches(arg0: $GameType_): boolean;
        static of(...arg0: $GameType_[]): $GameTypePredicate;
        types(): $List<$GameType>;
        static CODEC: $Codec<$GameTypePredicate>;
        static SURVIVAL_LIKE: $GameTypePredicate;
        static ANY: $GameTypePredicate;
        constructor(arg0: $List_<$GameType_>);
    }
    export class $BrewedPotionTrigger extends $SimpleCriterionTrigger<$BrewedPotionTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Holder_<$Potion>): void;
        constructor();
    }
    export class $ImpossibleTrigger implements $CriterionTrigger<$ImpossibleTrigger$TriggerInstance> {
        codec(): $Codec<$ImpossibleTrigger$TriggerInstance>;
        addPlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<$ImpossibleTrigger$TriggerInstance_>): void;
        removePlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<$ImpossibleTrigger$TriggerInstance_>): void;
        removePlayerListeners(arg0: $PlayerAdvancements): void;
        createCriterion(arg0: $ImpossibleTrigger$TriggerInstance_): $Criterion<$ImpossibleTrigger$TriggerInstance>;
        constructor();
    }
    export class $FilledBucketTrigger extends $SimpleCriterionTrigger<$FilledBucketTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_): void;
        constructor();
    }
    export class $PickedUpItemTrigger extends $SimpleCriterionTrigger<$PickedUpItemTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $Entity): void;
        constructor();
    }
    export class $FluidPredicate$Builder {
        of(arg0: $HolderSet_<$Fluid>): $FluidPredicate$Builder;
        of(arg0: $Fluid_): $FluidPredicate$Builder;
        setProperties(arg0: $StatePropertiesPredicate_): $FluidPredicate$Builder;
        build(): $FluidPredicate;
        static fluid(): $FluidPredicate$Builder;
        set properties(value: $StatePropertiesPredicate_);
    }
    export class $EntitySubPredicates$EntityVariantPredicateType$Instance implements $EntitySubPredicate {
    }
    export class $UsingItemTrigger extends $SimpleCriterionTrigger<$UsingItemTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_): void;
        constructor();
    }
    export class $CollectionCountsPredicate<T, P extends $Predicate<T>> {
        static of<T, P extends $Predicate<T>>(arg0: $List_<$CollectionCountsPredicate$Entry_<T, P>>): $CollectionCountsPredicate<T, P>;
        static of<T, P extends $Predicate<T>>(...arg0: $CollectionCountsPredicate$Entry_<T, P>[]): $CollectionCountsPredicate<T, P>;
        static codec<T, P extends $Predicate<T>>(arg0: $Codec<P>): $Codec<$CollectionCountsPredicate<T, P>>;
    }
    export interface $CollectionCountsPredicate<T, P extends $Predicate<T>> extends $Predicate<$Iterable<T>> {
        unpack(): $List<$CollectionCountsPredicate$Entry<$Iterable<T>, P>>;
    }
    export class $SlotsPredicate extends $Record {
        matches(arg0: $Entity): boolean;
        slots(): $Map<$SlotRange, $ItemPredicate>;
        static CODEC: $Codec<$SlotsPredicate>;
        constructor(arg0: $Map_<$SlotRange, $ItemPredicate_>);
    }
    export class $NbtPredicate extends $Record {
        matches(arg0: $ItemStack_): boolean;
        matches(arg0: $Entity): boolean;
        matches(arg0: $Tag_): boolean;
        tag(): $CompoundTag;
        static getEntityTagToCompare(arg0: $Entity): $CompoundTag;
        static CODEC: $Codec<$NbtPredicate>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NbtPredicate>;
        constructor(arg0: $CompoundTag_);
    }
    export class $ItemDurabilityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_, arg1: number): boolean;
        delta(): $MinMaxBounds$Ints;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        durability(): $MinMaxBounds$Ints;
        static changedDurability(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: $MinMaxBounds$Ints_): $Criterion<$ItemDurabilityTrigger$TriggerInstance>;
        static changedDurability(arg0: ($ItemPredicate_) | undefined, arg1: $MinMaxBounds$Ints_): $Criterion<$ItemDurabilityTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ItemDurabilityTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: $MinMaxBounds$Ints_, arg3: $MinMaxBounds$Ints_);
    }
    export class $KilledByCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static crossbowKilled(arg0: $MinMaxBounds$Ints_): $Criterion<$KilledByCrossbowTrigger$TriggerInstance>;
        static crossbowKilled(...arg0: $EntityPredicate$Builder[]): $Criterion<$KilledByCrossbowTrigger$TriggerInstance>;
        uniqueEntityTypes(): $MinMaxBounds$Ints;
        matches(arg0: $Collection_<$LootContext>, arg1: number): boolean;
        validate(arg0: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        victims(): $List<$ContextAwarePredicate>;
        static CODEC: $Codec<$KilledByCrossbowTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $List_<$ContextAwarePredicate>, arg2: $MinMaxBounds$Ints_);
    }
    export class $PlayerPredicate$AdvancementCriterionsPredicate extends $Record implements $PlayerPredicate$AdvancementPredicate {
        or(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
        negate(): $Predicate<$AdvancementProgress>;
        and(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
    }
    export class $PlayerPredicate$Builder {
        checkAdvancementDone(arg0: $ResourceLocation_, arg1: boolean): $PlayerPredicate$Builder;
        checkAdvancementCriterions(arg0: $ResourceLocation_, arg1: $Map_<string, boolean>): $PlayerPredicate$Builder;
        build(): $PlayerPredicate;
        setLevel(arg0: $MinMaxBounds$Ints_): $PlayerPredicate$Builder;
        static player(): $PlayerPredicate$Builder;
        addRecipe(arg0: $ResourceLocation_, arg1: boolean): $PlayerPredicate$Builder;
        setGameType(arg0: $GameTypePredicate_): $PlayerPredicate$Builder;
        setLookingAt(arg0: $EntityPredicate$Builder): $PlayerPredicate$Builder;
        addStat<T>(arg0: $StatType_<T>, arg1: $Holder$Reference<T>, arg2: $MinMaxBounds$Ints_): $PlayerPredicate$Builder;
        constructor();
        set level(value: $MinMaxBounds$Ints_);
        set gameType(value: $GameTypePredicate_);
        set lookingAt(value: $EntityPredicate$Builder);
    }
    export class $EffectsChangedTrigger extends $SimpleCriterionTrigger<$EffectsChangedTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Entity): void;
        constructor();
    }
    export class $DamageSourcePredicate extends $Record {
        matches(arg0: $ServerPlayer, arg1: $DamageSource_): boolean;
        matches(arg0: $ServerLevel, arg1: $Vec3_, arg2: $DamageSource_): boolean;
        isDirect(): (boolean) | undefined;
        tags(): $List<$TagPredicate<$DamageType>>;
        sourceEntity(): ($EntityPredicate) | undefined;
        directEntity(): ($EntityPredicate) | undefined;
        static CODEC: $Codec<$DamageSourcePredicate>;
        constructor(arg0: $List_<$TagPredicate_<$DamageType_>>, arg1: ($EntityPredicate_) | undefined, arg2: ($EntityPredicate_) | undefined, arg3: (boolean) | undefined);
        get direct(): (boolean) | undefined;
    }
    export class $PlayerHurtEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static playerHurtEntity(arg0: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(arg0: ($DamagePredicate_) | undefined, arg1: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(arg0: $DamagePredicate$Builder, arg1: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        matches(arg0: $ServerPlayer, arg1: $LootContext, arg2: $DamageSource_, arg3: number, arg4: number, arg5: boolean): boolean;
        validate(arg0: $CriterionValidator): void;
        entity(): ($ContextAwarePredicate) | undefined;
        damage(): ($DamagePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static playerHurtEntityWithDamage(arg0: $DamagePredicate$Builder): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntityWithDamage(arg0: ($DamagePredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static CODEC: $Codec<$PlayerHurtEntityTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($DamagePredicate_) | undefined, arg2: ($ContextAwarePredicate) | undefined);
    }
    export class $SummonedEntityTrigger extends $SimpleCriterionTrigger<$SummonedEntityTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Entity): void;
        constructor();
    }
    export class $AnyBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$AnyBlockInteractionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    export class $ConsumeItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static usedItem(arg0: $ItemPredicate$Builder): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        static usedItem(): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        static usedItem(arg0: $ItemLike_): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ConsumeItemTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined);
    }
    export class $UsedEnderEyeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: number): boolean;
        distance(): $MinMaxBounds$Doubles;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$UsedEnderEyeTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $MinMaxBounds$Doubles_);
    }
    export class $DamageSourcePredicate$Builder {
        isDirect(arg0: boolean): $DamageSourcePredicate$Builder;
        source(arg0: $EntityPredicate$Builder): $DamageSourcePredicate$Builder;
        build(): $DamageSourcePredicate;
        direct(arg0: $EntityPredicate$Builder): $DamageSourcePredicate$Builder;
        tag(arg0: $TagPredicate_<$DamageType_>): $DamageSourcePredicate$Builder;
        static damageType(): $DamageSourcePredicate$Builder;
        constructor();
    }
    export class $FishingRodHookedTrigger extends $SimpleCriterionTrigger<$FishingRodHookedTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $FishingHook, arg3: $Collection_<$ItemStack_>): void;
        constructor();
    }
    export class $TagPredicate<T> extends $Record {
        matches(arg0: $Holder_<T>): boolean;
        expected(): boolean;
        static is<T>(arg0: $TagKey_<T>): $TagPredicate<T>;
        tag(): $TagKey<T>;
        static codec<T>(arg0: $ResourceKey_<$Registry<T>>): $Codec<$TagPredicate<T>>;
        static isNot<T>(arg0: $TagKey_<T>): $TagPredicate<T>;
        constructor(arg0: $TagKey_<T>, arg1: boolean);
    }
    export class $ItemEnchantmentsPredicate$StoredEnchantments extends $ItemEnchantmentsPredicate {
        static CODEC: $Codec<$ItemEnchantmentsPredicate$StoredEnchantments>;
        constructor(arg0: $List_<$EnchantmentPredicate_>);
    }
    export class $TameAnimalTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static tamedAnimal(arg0: $EntityPredicate$Builder): $Criterion<$TameAnimalTrigger$TriggerInstance>;
        static tamedAnimal(): $Criterion<$TameAnimalTrigger$TriggerInstance>;
        matches(arg0: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$TameAnimalTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    export class $ItemFireworkExplosionPredicate$FireworkPredicate extends $Record implements $Predicate<$FireworkExplosion> {
        test(arg0: $FireworkExplosion_): boolean;
        trail(): (boolean) | undefined;
        shape(): ($FireworkExplosion$Shape) | undefined;
        twinkle(): (boolean) | undefined;
        or(arg0: $Predicate_<$FireworkExplosion>): $Predicate<$FireworkExplosion>;
        negate(): $Predicate<$FireworkExplosion>;
        and(arg0: $Predicate_<$FireworkExplosion>): $Predicate<$FireworkExplosion>;
        static CODEC: $Codec<$ItemFireworkExplosionPredicate$FireworkPredicate>;
        constructor(arg0: ($FireworkExplosion$Shape_) | undefined, arg1: (boolean) | undefined, arg2: (boolean) | undefined);
    }
    export class $ItemWrittenBookPredicate$PagePredicate extends $Record implements $Predicate<$Filterable<$Component>> {
        test(arg0: $Filterable_<$Component_>): boolean;
        contents(): $Component;
        or(arg0: $Predicate_<$Filterable<$Component>>): $Predicate<$Filterable<$Component>>;
        negate(): $Predicate<$Filterable<$Component>>;
        and(arg0: $Predicate_<$Filterable<$Component>>): $Predicate<$Filterable<$Component>>;
        static CODEC: $Codec<$ItemWrittenBookPredicate$PagePredicate>;
        constructor(arg0: $Component_);
    }
    export class $UsedEnderEyeTrigger extends $SimpleCriterionTrigger<$UsedEnderEyeTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        constructor();
    }
    export class $CollectionCountsPredicate$Entry<T, P extends $Predicate<T>> extends $Record {
        test(): P;
        test(arg0: $Iterable_<T>): boolean;
        count(): $MinMaxBounds$Ints;
        static codec<T, P extends $Predicate<T>>(arg0: $Codec<P>): $Codec<$CollectionCountsPredicate$Entry<T, P>>;
        constructor(arg0: P, arg1: $MinMaxBounds$Ints_);
    }
    export class $ShotCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static shotCrossbow(arg0: $ItemLike_): $Criterion<$ShotCrossbowTrigger$TriggerInstance>;
        static shotCrossbow(arg0: ($ItemPredicate_) | undefined): $Criterion<$ShotCrossbowTrigger$TriggerInstance>;
        matches(arg0: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ShotCrossbowTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined);
    }
    export class $FallAfterExplosionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ServerLevel, arg1: $Vec3_, arg2: $Vec3_, arg3: $LootContext): boolean;
        cause(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        distance(): ($DistancePredicate) | undefined;
        startPosition(): ($LocationPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static fallAfterExplosion(arg0: $DistancePredicate_, arg1: $EntityPredicate$Builder): $Criterion<$FallAfterExplosionTrigger$TriggerInstance>;
        static CODEC: $Codec<$FallAfterExplosionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($LocationPredicate_) | undefined, arg2: ($DistancePredicate_) | undefined, arg3: ($ContextAwarePredicate) | undefined);
    }
    export class $TargetBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $LootContext, arg1: $Vec3_, arg2: number): boolean;
        validate(arg0: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        projectile(): ($ContextAwarePredicate) | undefined;
        signalStrength(): $MinMaxBounds$Ints;
        static targetHit(arg0: $MinMaxBounds$Ints_, arg1: ($ContextAwarePredicate) | undefined): $Criterion<$TargetBlockTrigger$TriggerInstance>;
        static CODEC: $Codec<$TargetBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $MinMaxBounds$Ints_, arg2: ($ContextAwarePredicate) | undefined);
    }
    export class $StatePropertiesPredicate$Builder {
        static properties(): $StatePropertiesPredicate$Builder;
        build(): ($StatePropertiesPredicate) | undefined;
        hasProperty(arg0: $Property<number>, arg1: number): $StatePropertiesPredicate$Builder;
        hasProperty<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T): $StatePropertiesPredicate$Builder;
        hasProperty(arg0: $Property<boolean>, arg1: boolean): $StatePropertiesPredicate$Builder;
        hasProperty(arg0: $Property<never>, arg1: string): $StatePropertiesPredicate$Builder;
    }
    export class $ItemWritableBookPredicate$PagePredicate extends $Record implements $Predicate<$Filterable<string>> {
        test(arg0: $Filterable_<string>): boolean;
        contents(): string;
        or(arg0: $Predicate_<$Filterable<string>>): $Predicate<$Filterable<string>>;
        negate(): $Predicate<$Filterable<string>>;
        and(arg0: $Predicate_<$Filterable<string>>): $Predicate<$Filterable<string>>;
        static CODEC: $Codec<$ItemWritableBookPredicate$PagePredicate>;
        constructor(arg0: string);
    }
    export class $EnterBlockTrigger extends $SimpleCriterionTrigger<$EnterBlockTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $BlockState_): void;
        constructor();
    }
    export class $CriterionValidator {
        validateEntities(arg0: $List_<$ContextAwarePredicate>, arg1: string): void;
        validate(arg0: $List_<$ContextAwarePredicate>, arg1: $LootContextParamSet, arg2: string): void;
        validate(arg0: $ContextAwarePredicate, arg1: $LootContextParamSet, arg2: string): void;
        validateEntity(arg0: $ContextAwarePredicate, arg1: string): void;
        validateEntity(arg0: ($ContextAwarePredicate) | undefined, arg1: string): void;
        constructor(arg0: $ProblemReporter, arg1: $HolderGetter$Provider_);
    }
    export class $EntitySubPredicates$EntityVariantPredicateType<V> {
        static create<V>(arg0: $Registry<V>, arg1: $Function_<$Entity, (V) | undefined>): $EntitySubPredicates$EntityVariantPredicateType<V>;
        static create<V>(arg0: $Codec<V>, arg1: $Function_<$Entity, (V) | undefined>): $EntitySubPredicates$EntityVariantPredicateType<V>;
        createPredicate(arg0: V): $EntitySubPredicate;
        codec: $MapCodec<$EntitySubPredicates$EntityVariantPredicateType$Instance>;
        getter: $Function<$Entity, (V) | undefined>;
        constructor(arg0: $Codec<V>, arg1: $Function_<$Entity, (V) | undefined>);
    }
    export class $DistanceTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static travelledThroughNether(arg0: $DistancePredicate_): $Criterion<$DistanceTrigger$TriggerInstance>;
        matches(arg0: $ServerLevel, arg1: $Vec3_, arg2: $Vec3_): boolean;
        distance(): ($DistancePredicate) | undefined;
        startPosition(): ($LocationPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static fallFromHeight(arg0: $EntityPredicate$Builder, arg1: $DistancePredicate_, arg2: $LocationPredicate$Builder): $Criterion<$DistanceTrigger$TriggerInstance>;
        static rideEntityInLava(arg0: $EntityPredicate$Builder, arg1: $DistancePredicate_): $Criterion<$DistanceTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$DistanceTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($LocationPredicate_) | undefined, arg2: ($DistancePredicate_) | undefined);
    }
    export class $ItemCustomDataPredicate extends $Record implements $ItemSubPredicate {
        value(): $NbtPredicate;
        matches(arg0: $ItemStack_): boolean;
        static customData(arg0: $NbtPredicate_): $ItemCustomDataPredicate;
        static CODEC: $Codec<$ItemCustomDataPredicate>;
        constructor(arg0: $NbtPredicate_);
    }
    export class $BredAnimalsTrigger extends $SimpleCriterionTrigger<$BredAnimalsTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Animal, arg2: $Animal, arg3: $AgeableMob): void;
        constructor();
    }
    export class $StatePropertiesPredicate$RangedMatcher extends $Record implements $StatePropertiesPredicate$ValueMatcher {
    }
    export class $ItemEnchantmentsPredicate implements $SingleComponentItemPredicate<$ItemEnchantments> {
        matches(arg0: $ItemStack_, arg1: $ItemEnchantments_): boolean;
        static codec<T extends $ItemEnchantmentsPredicate>(arg0: $Function_<$List<$EnchantmentPredicate>, T>): $Codec<T>;
        enchantments(): $List<$EnchantmentPredicate>;
        static enchantments(arg0: $List_<$EnchantmentPredicate_>): $ItemEnchantmentsPredicate$Enchantments;
        static storedEnchantments(arg0: $List_<$EnchantmentPredicate_>): $ItemEnchantmentsPredicate$StoredEnchantments;
        matches(arg0: $ItemStack_): boolean;
        constructor(arg0: $List_<$EnchantmentPredicate_>);
    }
    export class $BlockPredicate$Builder {
        of(arg0: $TagKey_<$Block>): $BlockPredicate$Builder;
        of(arg0: $Collection_<$Block_>): $BlockPredicate$Builder;
        of(...arg0: $Block_[]): $BlockPredicate$Builder;
        setProperties(arg0: $StatePropertiesPredicate$Builder): $BlockPredicate$Builder;
        static block(): $BlockPredicate$Builder;
        build(): $BlockPredicate;
        hasNbt(arg0: $CompoundTag_): $BlockPredicate$Builder;
        set properties(value: $StatePropertiesPredicate$Builder);
    }
    export class $ItemSubPredicate$Type<T extends $ItemSubPredicate> extends $Record {
        codec(): $Codec<T>;
        constructor(arg0: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $ItemSubPredicate$Type}.
     */
    export type $ItemSubPredicate$Type_<T> = RegistryTypes.ItemSubPredicateType;
    export interface $ItemSubPredicate$Type extends RegistryMarked<RegistryTypes.ItemSubPredicateTypeTag, RegistryTypes.ItemSubPredicateType> {}
    export class $ChanneledLightningTrigger extends $SimpleCriterionTrigger<$ChanneledLightningTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Collection_<$Entity>): void;
        constructor();
    }
    export class $LocationPredicate$Builder {
        setBiomes(arg0: $HolderSet_<$Biome>): $LocationPredicate$Builder;
        setCanSeeSky(arg0: boolean): $LocationPredicate$Builder;
        static location(): $LocationPredicate$Builder;
        build(): $LocationPredicate;
        setLight(arg0: $LightPredicate$Builder): $LocationPredicate$Builder;
        setBlock(arg0: $BlockPredicate$Builder): $LocationPredicate$Builder;
        setY(arg0: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setZ(arg0: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setX(arg0: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        static inDimension(arg0: $ResourceKey_<$Level>): $LocationPredicate$Builder;
        setFluid(arg0: $FluidPredicate$Builder): $LocationPredicate$Builder;
        setDimension(arg0: $ResourceKey_<$Level>): $LocationPredicate$Builder;
        static inStructure(arg0: $Holder_<$Structure>): $LocationPredicate$Builder;
        setStructures(arg0: $HolderSet_<$Structure>): $LocationPredicate$Builder;
        static atYLocation(arg0: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        static inBiome(arg0: $Holder_<$Biome>): $LocationPredicate$Builder;
        setSmokey(arg0: boolean): $LocationPredicate$Builder;
        constructor();
        set biomes(value: $HolderSet_<$Biome>);
        set canSeeSky(value: boolean);
        set light(value: $LightPredicate$Builder);
        set block(value: $BlockPredicate$Builder);
        set y(value: $MinMaxBounds$Doubles_);
        set z(value: $MinMaxBounds$Doubles_);
        set x(value: $MinMaxBounds$Doubles_);
        set fluid(value: $FluidPredicate$Builder);
        set dimension(value: $ResourceKey_<$Level>);
        set structures(value: $HolderSet_<$Structure>);
        set smokey(value: boolean);
    }
    export class $EntityFlagsPredicate$Builder {
        setIsFlying(arg0: boolean): $EntityFlagsPredicate$Builder;
        static flags(): $EntityFlagsPredicate$Builder;
        build(): $EntityFlagsPredicate;
        setOnFire(arg0: boolean): $EntityFlagsPredicate$Builder;
        setIsBaby(arg0: boolean): $EntityFlagsPredicate$Builder;
        setSprinting(arg0: boolean): $EntityFlagsPredicate$Builder;
        setOnGround(arg0: boolean): $EntityFlagsPredicate$Builder;
        setSwimming(arg0: boolean): $EntityFlagsPredicate$Builder;
        setCrouching(arg0: boolean): $EntityFlagsPredicate$Builder;
        constructor();
        set isFlying(value: boolean);
        set onFire(value: boolean);
        set isBaby(value: boolean);
        set sprinting(value: boolean);
        set onGround(value: boolean);
        set swimming(value: boolean);
        set crouching(value: boolean);
    }
    export class $CollectionCountsPredicate$Zero<T, P extends $Predicate<T>> implements $CollectionCountsPredicate<T, P> {
        test(arg0: $Iterable_<T>): boolean;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor();
    }
    export class $ShotCrossbowTrigger extends $SimpleCriterionTrigger<$ShotCrossbowTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_): void;
        constructor();
    }
    export class $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(arg0: (T) | undefined, arg1: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFactory}.
     */
    export type $MinMaxBounds$BoundsFactory_<T, R> = ((arg0: (T) | undefined, arg1: (T) | undefined) => R);
    export class $ContextAwarePredicate {
        matches(arg0: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        static create(...arg0: $LootItemCondition[]): $ContextAwarePredicate;
        static CODEC: $Codec<$ContextAwarePredicate>;
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $BrewedPotionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static brewedPotion(): $Criterion<$BrewedPotionTrigger$TriggerInstance>;
        matches(arg0: $Holder_<$Potion>): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        potion(): ($Holder<$Potion>) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$BrewedPotionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Potion>) | undefined);
    }
    export class $EnchantedItemTrigger extends $SimpleCriterionTrigger<$EnchantedItemTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: number): void;
        constructor();
    }
    export class $PlayerHurtEntityTrigger extends $SimpleCriterionTrigger<$PlayerHurtEntityTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Entity, arg2: $DamageSource_, arg3: number, arg4: number, arg5: boolean): void;
        constructor();
    }
    export class $DefaultBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$DefaultBlockInteractionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    export class $ItemPredicate$Builder {
        of(arg0: $TagKey_<$Item>): $ItemPredicate$Builder;
        of(...arg0: $ItemLike_[]): $ItemPredicate$Builder;
        build(): $ItemPredicate;
        static item(): $ItemPredicate$Builder;
        withSubPredicate<T extends $ItemSubPredicate>(arg0: $ItemSubPredicate$Type_<T>, arg1: T): $ItemPredicate$Builder;
        hasComponents(arg0: $DataComponentPredicate): $ItemPredicate$Builder;
        withCount(arg0: $MinMaxBounds$Ints_): $ItemPredicate$Builder;
    }
    export class $MobEffectsPredicate$Builder {
        build(): ($MobEffectsPredicate) | undefined;
        and(arg0: $Holder_<$MobEffect>, arg1: $MobEffectsPredicate$MobEffectInstancePredicate_): $MobEffectsPredicate$Builder;
        and(arg0: $Holder_<$MobEffect>): $MobEffectsPredicate$Builder;
        static effects(): $MobEffectsPredicate$Builder;
        constructor();
    }
    export class $LocationPredicate$PositionPredicate extends $Record {
    }
    export class $StartRidingTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        player(): ($ContextAwarePredicate) | undefined;
        static playerStartsRiding(arg0: $EntityPredicate$Builder): $Criterion<$StartRidingTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$StartRidingTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined);
    }
    export class $PlayerInteractTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_, arg1: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static itemUsedOnEntity(arg0: $ItemPredicate$Builder, arg1: ($ContextAwarePredicate) | undefined): $Criterion<$PlayerInteractTrigger$TriggerInstance>;
        static itemUsedOnEntity(arg0: ($ContextAwarePredicate) | undefined, arg1: $ItemPredicate$Builder, arg2: ($ContextAwarePredicate) | undefined): $Criterion<$PlayerInteractTrigger$TriggerInstance>;
        static CODEC: $Codec<$PlayerInteractTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: ($ContextAwarePredicate) | undefined);
    }
    export class $SlideDownBlockTrigger extends $SimpleCriterionTrigger<$SlideDownBlockTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $BlockState_): void;
        constructor();
    }
    export class $LightPredicate extends $Record {
        matches(arg0: $ServerLevel, arg1: $BlockPos_): boolean;
        composite(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$LightPredicate>;
        constructor(arg0: $MinMaxBounds$Ints_);
    }
    export class $ConstructBeaconTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: number): boolean;
        level(): $MinMaxBounds$Ints;
        player(): ($ContextAwarePredicate) | undefined;
        static constructedBeacon(arg0: $MinMaxBounds$Ints_): $Criterion<$ConstructBeaconTrigger$TriggerInstance>;
        static constructedBeacon(): $Criterion<$ConstructBeaconTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ConstructBeaconTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $MinMaxBounds$Ints_);
    }
    export class $DefaultBlockInteractionTrigger extends $SimpleCriterionTrigger<$DefaultBlockInteractionTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        constructor();
    }
    export class $InventoryChangeTrigger extends $SimpleCriterionTrigger<$InventoryChangeTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Inventory, arg2: $ItemStack_): void;
        constructor();
    }
    export class $EntityPredicate$Builder {
        movementAffectedBy(arg0: $LocationPredicate$Builder): $EntityPredicate$Builder;
        flags(arg0: $EntityFlagsPredicate$Builder): $EntityPredicate$Builder;
        of(arg0: $EntityType_<never>): $EntityPredicate$Builder;
        of(arg0: $TagKey_<$EntityType<never>>): $EntityPredicate$Builder;
        slots(arg0: $SlotsPredicate_): $EntityPredicate$Builder;
        distance(arg0: $DistancePredicate_): $EntityPredicate$Builder;
        build(): $EntityPredicate;
        static entity(): $EntityPredicate$Builder;
        periodicTick(arg0: number): $EntityPredicate$Builder;
        vehicle(arg0: $EntityPredicate$Builder): $EntityPredicate$Builder;
        nbt(arg0: $NbtPredicate_): $EntityPredicate$Builder;
        moving(arg0: $MovementPredicate_): $EntityPredicate$Builder;
        team(arg0: string): $EntityPredicate$Builder;
        effects(arg0: $MobEffectsPredicate$Builder): $EntityPredicate$Builder;
        equipment(arg0: $EntityEquipmentPredicate_): $EntityPredicate$Builder;
        equipment(arg0: $EntityEquipmentPredicate$Builder): $EntityPredicate$Builder;
        passenger(arg0: $EntityPredicate$Builder): $EntityPredicate$Builder;
        entityType(arg0: $EntityTypePredicate_): $EntityPredicate$Builder;
        subPredicate(arg0: $EntitySubPredicate): $EntityPredicate$Builder;
        targetedEntity(arg0: $EntityPredicate$Builder): $EntityPredicate$Builder;
        steppingOn(arg0: $LocationPredicate$Builder): $EntityPredicate$Builder;
        located(arg0: $LocationPredicate$Builder): $EntityPredicate$Builder;
        constructor();
    }
    export class $FallAfterExplosionTrigger extends $SimpleCriterionTrigger<$FallAfterExplosionTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Vec3_, arg2: $Entity): void;
        constructor();
    }
    export class $PlayerTrigger extends $SimpleCriterionTrigger<$PlayerTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer): void;
        constructor();
    }
    export class $UsingItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        static lookingAt(arg0: $EntityPredicate$Builder, arg1: $ItemPredicate$Builder): $Criterion<$UsingItemTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$UsingItemTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ItemPredicate_) | undefined);
    }
    export class $EntityHurtPlayerTrigger extends $SimpleCriterionTrigger<$EntityHurtPlayerTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $DamageSource_, arg2: number, arg3: number, arg4: boolean): void;
        constructor();
    }
    export class $KilledTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        entityPredicate(): ($ContextAwarePredicate) | undefined;
        killingBlow(): ($DamageSourcePredicate) | undefined;
        static playerKilledEntity(arg0: ($EntityPredicate_) | undefined, arg1: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(arg0: $EntityPredicate$Builder, arg1: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(arg0: $EntityPredicate$Builder, arg1: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(arg0: ($EntityPredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(arg0: $EntityPredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(arg0: ($EntityPredicate_) | undefined, arg1: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(arg0: ($EntityPredicate_) | undefined, arg1: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(arg0: ($EntityPredicate_) | undefined, arg1: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(arg0: $EntityPredicate$Builder, arg1: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(arg0: $EntityPredicate$Builder, arg1: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(arg0: ($EntityPredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(arg0: $EntityPredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(): $Criterion<$KilledTrigger$TriggerInstance>;
        matches(arg0: $ServerPlayer, arg1: $LootContext, arg2: $DamageSource_): boolean;
        validate(arg0: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        static playerKilledEntityNearSculkCatalyst(): $Criterion<$KilledTrigger$TriggerInstance>;
        static CODEC: $Codec<$KilledTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined, arg2: ($DamageSourcePredicate_) | undefined);
    }
    export class $BlockPredicate extends $Record {
        matches(arg0: $ServerLevel, arg1: $BlockPos_): boolean;
        matches(arg0: $BlockInWorld): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        blocks(): ($HolderSet<$Block>) | undefined;
        nbt(): ($NbtPredicate) | undefined;
        requiresNbt(): boolean;
        static CODEC: $Codec<$BlockPredicate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockPredicate>;
        constructor(arg0: ($HolderSet_<$Block>) | undefined, arg1: ($StatePropertiesPredicate_) | undefined, arg2: ($NbtPredicate_) | undefined);
    }
    export class $ChangeDimensionTrigger extends $SimpleCriterionTrigger<$ChangeDimensionTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>): void;
        constructor();
    }
    export class $ItemBundlePredicate extends $Record implements $SingleComponentItemPredicate<$BundleContents> {
        componentType(): $DataComponentType<$BundleContents>;
        matches(arg0: $ItemStack_, arg1: $BundleContents): boolean;
        items(): ($CollectionPredicate<$ItemStack, $ItemPredicate>) | undefined;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemBundlePredicate>;
        constructor(arg0: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined);
    }
    export class $LightningStrikeTrigger extends $SimpleCriterionTrigger<$LightningStrikeTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $LightningBolt, arg2: $List_<$Entity>): void;
        constructor();
    }
    export class $StartRidingTrigger extends $SimpleCriterionTrigger<$StartRidingTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer): void;
        constructor();
    }
    export class $LocationPredicate extends $Record {
        position(): ($LocationPredicate$PositionPredicate) | undefined;
        matches(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number): boolean;
        block(): ($BlockPredicate) | undefined;
        canSeeSky(): (boolean) | undefined;
        dimension(): ($ResourceKey<$Level>) | undefined;
        light(): ($LightPredicate) | undefined;
        structures(): ($HolderSet<$Structure>) | undefined;
        biomes(): ($HolderSet<$Biome>) | undefined;
        fluid(): ($FluidPredicate) | undefined;
        smokey(): (boolean) | undefined;
        static CODEC: $Codec<$LocationPredicate>;
        constructor(arg0: ($LocationPredicate$PositionPredicate_) | undefined, arg1: ($HolderSet_<$Biome>) | undefined, arg2: ($HolderSet_<$Structure>) | undefined, arg3: ($ResourceKey_<$Level>) | undefined, arg4: (boolean) | undefined, arg5: ($LightPredicate_) | undefined, arg6: ($BlockPredicate_) | undefined, arg7: ($FluidPredicate_) | undefined, arg8: (boolean) | undefined);
    }
    export class $CuredZombieVillagerTrigger extends $SimpleCriterionTrigger<$CuredZombieVillagerTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Zombie, arg2: $Villager): void;
        constructor();
    }
    export class $LootTableTrigger extends $SimpleCriterionTrigger<$LootTableTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $ResourceKey_<$LootTable>): void;
        constructor();
    }
    export class $LevitationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $ServerPlayer, arg1: $Vec3_, arg2: number): boolean;
        duration(): $MinMaxBounds$Ints;
        distance(): ($DistancePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static levitated(arg0: $DistancePredicate_): $Criterion<$LevitationTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$LevitationTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($DistancePredicate_) | undefined, arg2: $MinMaxBounds$Ints_);
    }
    export class $EntitySubPredicates {
        static bootstrap(arg0: $Registry<$MapCodec_<$EntitySubPredicate>>): $MapCodec<$EntitySubPredicate>;
        static wolfVariant(arg0: $HolderSet_<$WolfVariant>): $EntitySubPredicate;
        static frogVariant(arg0: $Holder_<$FrogVariant>): $EntitySubPredicate;
        static catVariant(arg0: $Holder_<$CatVariant>): $EntitySubPredicate;
        static MOOSHROOM: $EntitySubPredicates$EntityVariantPredicateType<$MushroomCow$MushroomType>;
        static FISHING_HOOK: $MapCodec<$FishingHookPredicate>;
        static FROG: $EntitySubPredicates$EntityHolderVariantPredicateType<$FrogVariant>;
        static HORSE: $EntitySubPredicates$EntityVariantPredicateType<$Variant>;
        static LLAMA: $EntitySubPredicates$EntityVariantPredicateType<$Llama$Variant>;
        static LIGHTNING: $MapCodec<$LightningBoltPredicate>;
        static PARROT: $EntitySubPredicates$EntityVariantPredicateType<$Parrot$Variant>;
        static TROPICAL_FISH: $EntitySubPredicates$EntityVariantPredicateType<$TropicalFish$Pattern>;
        static FOX: $EntitySubPredicates$EntityVariantPredicateType<$Fox$Type>;
        static AXOLOTL: $EntitySubPredicates$EntityVariantPredicateType<$Axolotl$Variant>;
        static VILLAGER: $EntitySubPredicates$EntityVariantPredicateType<$VillagerType>;
        static PLAYER: $MapCodec<$PlayerPredicate>;
        static PAINTING: $EntitySubPredicates$EntityHolderVariantPredicateType<$PaintingVariant>;
        static RAIDER: $MapCodec<$RaiderPredicate>;
        static CAT: $EntitySubPredicates$EntityHolderVariantPredicateType<$CatVariant>;
        static RABBIT: $EntitySubPredicates$EntityVariantPredicateType<$Rabbit$Variant>;
        static WOLF: $EntitySubPredicates$EntityHolderVariantPredicateType<$WolfVariant>;
        static SLIME: $MapCodec<$SlimePredicate>;
        static BOAT: $EntitySubPredicates$EntityVariantPredicateType<$Boat$Type>;
        constructor();
    }
    export class $RecipeCraftedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static crafterCraftedItem(arg0: $ResourceLocation_): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        matches(arg0: $ResourceLocation_, arg1: $List_<$ItemStack_>): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        static craftedItem(arg0: $ResourceLocation_): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        static craftedItem(arg0: $ResourceLocation_, arg1: $List_<$ItemPredicate$Builder>): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        recipeId(): $ResourceLocation;
        ingredients(): $List<$ItemPredicate>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$RecipeCraftedTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $ResourceLocation_, arg2: $List_<$ItemPredicate_>);
    }
    export class $SimpleCriterionTrigger<T extends $SimpleCriterionTrigger$SimpleInstance> implements $CriterionTrigger<T> {
        trigger(arg0: $ServerPlayer, arg1: $Predicate_<T>): void;
        addPlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<T>): void;
        removePlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(arg0: $PlayerAdvancements): void;
        createCriterion(arg0: T): $Criterion<T>;
        constructor();
    }
    export class $EffectsChangedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static gotEffectsFrom(arg0: $EntityPredicate$Builder): $Criterion<$EffectsChangedTrigger$TriggerInstance>;
        matches(arg0: $ServerPlayer, arg1: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        source(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        effects(): ($MobEffectsPredicate) | undefined;
        static hasEffects(arg0: $MobEffectsPredicate$Builder): $Criterion<$EffectsChangedTrigger$TriggerInstance>;
        static CODEC: $Codec<$EffectsChangedTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($MobEffectsPredicate_) | undefined, arg2: ($ContextAwarePredicate) | undefined);
    }
    export class $RecipeUnlockedTrigger extends $SimpleCriterionTrigger<$RecipeUnlockedTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $RecipeHolder_<never>): void;
        static unlocked(arg0: $ResourceLocation_): $Criterion<$RecipeUnlockedTrigger$TriggerInstance>;
        constructor();
    }
    export class $ImpossibleTrigger$TriggerInstance extends $Record implements $CriterionTriggerInstance {
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ImpossibleTrigger$TriggerInstance>;
        constructor();
    }
    export class $TargetBlockTrigger extends $SimpleCriterionTrigger<$TargetBlockTrigger$TriggerInstance> {
        trigger(arg0: $ServerPlayer, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        constructor();
    }
    export class $MinMaxBounds$Doubles extends $Record implements $MinMaxBounds<number> {
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(arg0: number): boolean;
        static between(arg0: number, arg1: number): $MinMaxBounds$Doubles;
        static atMost(arg0: number): $MinMaxBounds$Doubles;
        static atLeast(arg0: number): $MinMaxBounds$Doubles;
        static fromReader(arg0: $StringReader, arg1: $Function_<number, number>): $MinMaxBounds$Doubles;
        static fromReader(arg0: $StringReader): $MinMaxBounds$Doubles;
        static exactly(arg0: number): $MinMaxBounds$Doubles;
        matchesSqr(arg0: number): boolean;
        minSq(): (number) | undefined;
        maxSq(): (number) | undefined;
        unwrapPoint(): (number) | undefined;
        isAny(): boolean;
        static CODEC: $Codec<$MinMaxBounds$Doubles>;
        static ANY: $MinMaxBounds$Doubles;
        constructor(arg0: (number) | undefined, arg1: (number) | undefined, arg2: (number) | undefined, arg3: (number) | undefined);
        get any(): boolean;
    }
    export class $EntityEquipmentPredicate extends $Record {
        matches(arg0: $Entity): boolean;
        head(): ($ItemPredicate) | undefined;
        body(): ($ItemPredicate) | undefined;
        offhand(): ($ItemPredicate) | undefined;
        chest(): ($ItemPredicate) | undefined;
        feet(): ($ItemPredicate) | undefined;
        static captainPredicate(arg0: $HolderGetter<$BannerPattern_>): $EntityEquipmentPredicate;
        mainhand(): ($ItemPredicate) | undefined;
        legs(): ($ItemPredicate) | undefined;
        static CODEC: $Codec<$EntityEquipmentPredicate>;
        constructor(arg0: ($ItemPredicate_) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: ($ItemPredicate_) | undefined, arg3: ($ItemPredicate_) | undefined, arg4: ($ItemPredicate_) | undefined, arg5: ($ItemPredicate_) | undefined, arg6: ($ItemPredicate_) | undefined);
    }
    export class $TradeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $LootContext, arg1: $ItemStack_): boolean;
        validate(arg0: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        villager(): ($ContextAwarePredicate) | undefined;
        static tradedWithVillager(): $Criterion<$TradeTrigger$TriggerInstance>;
        static tradedWithVillager(arg0: $EntityPredicate$Builder): $Criterion<$TradeTrigger$TriggerInstance>;
        static CODEC: $Codec<$TradeTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined, arg2: ($ItemPredicate_) | undefined);
    }
    export class $EntityHurtPlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static entityHurtPlayer(arg0: $DamagePredicate_): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        static entityHurtPlayer(): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        static entityHurtPlayer(arg0: $DamagePredicate$Builder): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        matches(arg0: $ServerPlayer, arg1: $DamageSource_, arg2: number, arg3: number, arg4: boolean): boolean;
        damage(): ($DamagePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$EntityHurtPlayerTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($DamagePredicate_) | undefined);
    }
    export class $ItemWrittenBookPredicate extends $Record implements $SingleComponentItemPredicate<$WrittenBookContent> {
        componentType(): $DataComponentType<$WrittenBookContent>;
        matches(arg0: $ItemStack_, arg1: $WrittenBookContent_): boolean;
        resolved(): (boolean) | undefined;
        title(): (string) | undefined;
        pages(): ($CollectionPredicate<$Filterable<$Component>, $ItemWrittenBookPredicate$PagePredicate>) | undefined;
        author(): (string) | undefined;
        generation(): $MinMaxBounds$Ints;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemWrittenBookPredicate>;
        constructor(arg0: ($CollectionPredicate_<$Filterable_<$Component_>, $ItemWrittenBookPredicate$PagePredicate_>) | undefined, arg1: (string) | undefined, arg2: (string) | undefined, arg3: $MinMaxBounds$Ints_, arg4: (boolean) | undefined);
    }
    export class $ItemPredicate extends $Record implements $Predicate<$ItemStack> {
        test(arg0: $ItemStack_): boolean;
        count(): $MinMaxBounds$Ints;
        items(): ($HolderSet<$Item>) | undefined;
        components(): $DataComponentPredicate;
        subPredicates(): $Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $Codec<$ItemPredicate>;
        constructor(arg0: ($HolderSet_<$Item>) | undefined, arg1: $MinMaxBounds$Ints_, arg2: $DataComponentPredicate, arg3: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>);
    }
    export class $EntityPredicate$LocationWrapper extends $Record {
        affectsMovement(): ($LocationPredicate) | undefined;
        steppingOn(): ($LocationPredicate) | undefined;
        located(): ($LocationPredicate) | undefined;
        static CODEC: $MapCodec<$EntityPredicate$LocationWrapper>;
        constructor(arg0: ($LocationPredicate_) | undefined, arg1: ($LocationPredicate_) | undefined, arg2: ($LocationPredicate_) | undefined);
    }
    export class $EntitySubPredicates$EntityHolderVariantPredicateType<V> {
        static create<V>(arg0: $ResourceKey_<$Registry<V>>, arg1: $Function_<$Entity, ($Holder<V>) | undefined>): $EntitySubPredicates$EntityHolderVariantPredicateType<V>;
        createPredicate(arg0: $HolderSet_<V>): $EntitySubPredicate;
        codec: $MapCodec<$EntitySubPredicates$EntityHolderVariantPredicateType$Instance>;
        getter: $Function<$Entity, ($Holder<V>) | undefined>;
        constructor(arg0: $ResourceKey_<$Registry<V>>, arg1: $Function_<$Entity, ($Holder<V>) | undefined>);
    }
    export class $EntityPredicate extends $Record {
        flags(): ($EntityFlagsPredicate) | undefined;
        static wrap(arg0: ($EntityPredicate_) | undefined): ($ContextAwarePredicate) | undefined;
        static wrap(arg0: $EntityPredicate$Builder): $ContextAwarePredicate;
        static wrap(...arg0: $EntityPredicate$Builder[]): $List<$ContextAwarePredicate>;
        static wrap(arg0: $EntityPredicate_): $ContextAwarePredicate;
        matches(arg0: $ServerPlayer, arg1: $Entity): boolean;
        matches(arg0: $ServerLevel, arg1: $Vec3_, arg2: $Entity): boolean;
        location(): $EntityPredicate$LocationWrapper;
        slots(): ($SlotsPredicate) | undefined;
        static createContext(arg0: $ServerPlayer, arg1: $Entity): $LootContext;
        periodicTick(): (number) | undefined;
        vehicle(): ($EntityPredicate) | undefined;
        nbt(): ($NbtPredicate) | undefined;
        team(): (string) | undefined;
        effects(): ($MobEffectsPredicate) | undefined;
        equipment(): ($EntityEquipmentPredicate) | undefined;
        movement(): ($MovementPredicate) | undefined;
        passenger(): ($EntityPredicate) | undefined;
        entityType(): ($EntityTypePredicate) | undefined;
        subPredicate(): ($EntitySubPredicate) | undefined;
        distanceToPlayer(): ($DistancePredicate) | undefined;
        targetedEntity(): ($EntityPredicate) | undefined;
        static ADVANCEMENT_CODEC: $Codec<$ContextAwarePredicate>;
        static CODEC: $Codec<$EntityPredicate>;
        constructor(arg0: ($EntityTypePredicate_) | undefined, arg1: ($DistancePredicate_) | undefined, arg2: ($MovementPredicate_) | undefined, arg3: $EntityPredicate$LocationWrapper_, arg4: ($MobEffectsPredicate_) | undefined, arg5: ($NbtPredicate_) | undefined, arg6: ($EntityFlagsPredicate_) | undefined, arg7: ($EntityEquipmentPredicate_) | undefined, arg8: ($EntitySubPredicate) | undefined, arg9: (number) | undefined, arg10: ($EntityPredicate_) | undefined, arg11: ($EntityPredicate_) | undefined, arg12: ($EntityPredicate_) | undefined, arg13: (string) | undefined, arg14: ($SlotsPredicate_) | undefined);
    }
    export class $MobEffectsPredicate extends $Record {
        matches(arg0: $LivingEntity): boolean;
        matches(arg0: $Map_<$Holder_<$MobEffect>, $MobEffectInstance>): boolean;
        matches(arg0: $Entity): boolean;
        effectMap(): $Map<$Holder<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate>;
        static CODEC: $Codec<$MobEffectsPredicate>;
        constructor(arg0: $Map_<$Holder_<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate_>);
    }
    export class $CuredZombieVillagerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $LootContext, arg1: $LootContext): boolean;
        validate(arg0: $CriterionValidator): void;
        zombie(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static curedZombieVillager(): $Criterion<$CuredZombieVillagerTrigger$TriggerInstance>;
        villager(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$CuredZombieVillagerTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined, arg2: ($ContextAwarePredicate) | undefined);
    }
    export class $CollectionCountsPredicate$Multiple<T, P extends $Predicate<T>> extends $Record implements $CollectionCountsPredicate<T, P> {
        test(arg0: $Iterable_<T>): boolean;
        entries(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $List_<$CollectionCountsPredicate$Entry_<T, P>>);
    }
    export class $DamagePredicate$Builder {
        takenDamage(arg0: $MinMaxBounds$Doubles_): $DamagePredicate$Builder;
        type(arg0: $DamageSourcePredicate_): $DamagePredicate$Builder;
        type(arg0: $DamageSourcePredicate$Builder): $DamagePredicate$Builder;
        build(): $DamagePredicate;
        sourceEntity(arg0: $EntityPredicate_): $DamagePredicate$Builder;
        blocked(arg0: boolean): $DamagePredicate$Builder;
        dealtDamage(arg0: $MinMaxBounds$Doubles_): $DamagePredicate$Builder;
        static damageInstance(): $DamagePredicate$Builder;
        constructor();
    }
    export class $CollectionContentsPredicate$Single<T, P extends $Predicate<T>> extends $Record implements $CollectionContentsPredicate<T, P> {
        test(arg0: $Iterable_<T>): boolean;
        test(): P;
        unpack(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: P);
    }
    export class $ChangeDimensionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static changedDimensionFrom(arg0: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        matches(arg0: $ResourceKey_<$Level>, arg1: $ResourceKey_<$Level>): boolean;
        from(): ($ResourceKey<$Level>) | undefined;
        to(): ($ResourceKey<$Level>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static changedDimension(arg0: $ResourceKey_<$Level>, arg1: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimension(): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimensionTo(arg0: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ChangeDimensionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ResourceKey_<$Level>) | undefined, arg2: ($ResourceKey_<$Level>) | undefined);
    }
    export class $SimpleCriterionTrigger$SimpleInstance {
    }
    export interface $SimpleCriterionTrigger$SimpleInstance extends $CriterionTriggerInstance {
        validate(arg0: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCriterionTrigger$SimpleInstance}.
     */
    export type $SimpleCriterionTrigger$SimpleInstance_ = (() => ($ContextAwarePredicate) | undefined);
    export class $ChanneledLightningTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(arg0: $Collection_<$LootContext>): boolean;
        validate(arg0: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        victims(): $List<$ContextAwarePredicate>;
        static channeledLightning(...arg0: $EntityPredicate$Builder[]): $Criterion<$ChanneledLightningTrigger$TriggerInstance>;
        static CODEC: $Codec<$ChanneledLightningTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $List_<$ContextAwarePredicate>);
    }
    export class $ItemWritableBookPredicate extends $Record implements $SingleComponentItemPredicate<$WritableBookContent> {
        componentType(): $DataComponentType<$WritableBookContent>;
        matches(arg0: $ItemStack_, arg1: $WritableBookContent_): boolean;
        pages(): ($CollectionPredicate<$Filterable<string>, $ItemWritableBookPredicate$PagePredicate>) | undefined;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemWritableBookPredicate>;
        constructor(arg0: ($CollectionPredicate_<$Filterable_<string>, $ItemWritableBookPredicate$PagePredicate_>) | undefined);
    }
}
