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
        setComposite(composite: $MinMaxBounds$Ints_): $LightPredicate$Builder;
        static light(): $LightPredicate$Builder;
        constructor();
        set composite(value: $MinMaxBounds$Ints_);
    }
    export class $ItemContainerPredicate extends $Record implements $SingleComponentItemPredicate<$ItemContainerContents> {
        componentType(): $DataComponentType<$ItemContainerContents>;
        matches(stack: $ItemStack_, value: $ItemContainerContents): boolean;
        items(): ($CollectionPredicate<$ItemStack, $ItemPredicate>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemContainerPredicate>;
        constructor(arg0: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined);
    }
    export class $MinMaxBounds$Ints extends $Record implements $MinMaxBounds<number> {
        static atMost(min: number): $MinMaxBounds$Ints;
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(value: number): boolean;
        static between(min: number, max: number): $MinMaxBounds$Ints;
        static atLeast(min: number): $MinMaxBounds$Ints;
        static fromReader(reader: $StringReader, valueFunction: $Function_<number, number>): $MinMaxBounds$Ints;
        static fromReader(reader: $StringReader): $MinMaxBounds$Ints;
        minSq(): (number) | undefined;
        maxSq(): (number) | undefined;
        matchesSqr(value: number): boolean;
        static exactly(min: number): $MinMaxBounds$Ints;
        isAny(): boolean;
        unwrapPoint(): (number) | undefined;
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
        trigger(player: $ServerPlayer, item: $ItemStack_): void;
        constructor();
    }
    export class $EntityTypePredicate extends $Record {
        matches(type: $EntityType_<never>): boolean;
        static of(tag: $TagKey_<$EntityType<never>>): $EntityTypePredicate;
        static of(type: $EntityType_<never>): $EntityTypePredicate;
        types(): $HolderSet<$EntityType<never>>;
        static CODEC: $Codec<$EntityTypePredicate>;
        constructor(arg0: $HolderSet_<$EntityType<never>>);
    }
    export class $MovementPredicate extends $Record {
        matches(x: number, arg1: number, y: number, arg3: number): boolean;
        x(): $MinMaxBounds$Doubles;
        z(): $MinMaxBounds$Doubles;
        y(): $MinMaxBounds$Doubles;
        static verticalSpeed(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        verticalSpeed(): $MinMaxBounds$Doubles;
        static horizontalSpeed(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        horizontalSpeed(): $MinMaxBounds$Doubles;
        static speed(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        speed(): $MinMaxBounds$Doubles;
        static fallDistance(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        fallDistance(): $MinMaxBounds$Doubles;
        static CODEC: $Codec<$MovementPredicate>;
        constructor(arg0: $MinMaxBounds$Doubles_, arg1: $MinMaxBounds$Doubles_, arg2: $MinMaxBounds$Doubles_, arg3: $MinMaxBounds$Doubles_, arg4: $MinMaxBounds$Doubles_, arg5: $MinMaxBounds$Doubles_, arg6: $MinMaxBounds$Doubles_);
    }
    export class $UsedTotemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static usedTotem(item: $ItemLike_): $Criterion<$UsedTotemTrigger$TriggerInstance>;
        static usedTotem(item: $ItemPredicate_): $Criterion<$UsedTotemTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$UsedTotemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    export class $DamagePredicate extends $Record {
        type(): ($DamageSourcePredicate) | undefined;
        matches(player: $ServerPlayer, source: $DamageSource_, dealtDamage: number, takenDamage: number, blocked: boolean): boolean;
        takenDamage(): $MinMaxBounds$Doubles;
        dealtDamage(): $MinMaxBounds$Doubles;
        blocked(): (boolean) | undefined;
        sourceEntity(): ($EntityPredicate) | undefined;
        static CODEC: $Codec<$DamagePredicate>;
        constructor(arg0: $MinMaxBounds$Doubles_, arg1: $MinMaxBounds$Doubles_, arg2: ($EntityPredicate_) | undefined, arg3: (boolean) | undefined, arg4: ($DamageSourcePredicate_) | undefined);
    }
    export class $FluidPredicate extends $Record {
        matches(level: $ServerLevel, pos: $BlockPos_): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        fluids(): ($HolderSet<$Fluid>) | undefined;
        static CODEC: $Codec<$FluidPredicate>;
        constructor(arg0: ($HolderSet_<$Fluid>) | undefined, arg1: ($StatePropertiesPredicate_) | undefined);
    }
    export class $CollectionCountsPredicate$Single<T, P extends $Predicate<T>> extends $Record implements $CollectionCountsPredicate<T, P> {
        test(collection: $Iterable_<T>): boolean;
        entry(): $CollectionCountsPredicate$Entry<T, P>;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $CollectionCountsPredicate$Entry_<T, P>);
    }
    export class $MinMaxBounds<T extends $Number> {
        static fromReader<T extends $Number, R extends $MinMaxBounds<T>>(reader: $StringReader, boundedFactory: $MinMaxBounds$BoundsFromReaderFactory_<T, R>, valueFactory: $Function_<string, T>, commandExceptionSupplier: $Supplier_<$DynamicCommandExceptionType>, formatter: $Function_<T, T>): R;
        static createCodec<T extends $Number, R extends $MinMaxBounds<T>>(codec: $Codec<T>, boundsFactory: $MinMaxBounds$BoundsFactory_<T, R>): $Codec<R>;
        static ERROR_SWAPPED: $SimpleCommandExceptionType;
        static ERROR_EMPTY: $SimpleCommandExceptionType;
    }
    export interface $MinMaxBounds<T extends $Number> {
        min(): (T) | undefined;
        max(): (T) | undefined;
        isAny(): boolean;
        unwrapPoint(): (T) | undefined;
        get any(): boolean;
    }
    export class $EnchantedItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_, levels: number): boolean;
        item(): ($ItemPredicate) | undefined;
        levels(): $MinMaxBounds$Ints;
        player(): ($ContextAwarePredicate) | undefined;
        static enchantedItem(): $Criterion<$EnchantedItemTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$EnchantedItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, levels: $MinMaxBounds$Ints_);
    }
    export class $ItemPotionsPredicate extends $Record implements $SingleComponentItemPredicate<$PotionContents> {
        componentType(): $DataComponentType<$PotionContents>;
        matches(stack: $ItemStack_, value: $PotionContents_): boolean;
        static potions(potions: $HolderSet_<$Potion>): $ItemSubPredicate;
        potions(): $HolderSet<$Potion>;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemPotionsPredicate>;
        constructor(arg0: $HolderSet_<$Potion>);
    }
    export class $PlayerPredicate extends $Record implements $EntitySubPredicate {
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        level(): $MinMaxBounds$Ints;
        lookingAt(): ($EntityPredicate) | undefined;
        stats(): $List<$PlayerPredicate$StatMatcher<never>>;
        codec(): $MapCodec<$PlayerPredicate>;
        gameType(): $GameTypePredicate;
        advancements(): $Map<$ResourceLocation, $PlayerPredicate$AdvancementPredicate>;
        recipes(): $Object2BooleanMap<$ResourceLocation>;
        static CODEC: $MapCodec<$PlayerPredicate>;
        static LOOKING_AT_RANGE: number;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $GameTypePredicate_, arg2: $List_<$PlayerPredicate$StatMatcher_<never>>, arg3: $Object2BooleanMap<$ResourceLocation_>, arg4: $Map_<$ResourceLocation_, $PlayerPredicate$AdvancementPredicate_>, arg5: ($EntityPredicate_) | undefined);
    }
    export class $ItemDurabilityTrigger extends $SimpleCriterionTrigger<$ItemDurabilityTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_, newDurability: number): void;
        constructor();
    }
    export class $ItemTrimPredicate extends $Record implements $SingleComponentItemPredicate<$ArmorTrim> {
        componentType(): $DataComponentType<$ArmorTrim>;
        matches(stack: $ItemStack_, value: $ArmorTrim): boolean;
        pattern(): ($HolderSet<$TrimPattern>) | undefined;
        material(): ($HolderSet<$TrimMaterial>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemTrimPredicate>;
        constructor(arg0: ($HolderSet_<$TrimMaterial>) | undefined, arg1: ($HolderSet_<$TrimPattern>) | undefined);
    }
    export class $ConsumeItemTrigger extends $SimpleCriterionTrigger<$ConsumeItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_): void;
        constructor();
    }
    export class $ItemAttributeModifiersPredicate$EntryPredicate extends $Record implements $Predicate<$ItemAttributeModifiers$Entry> {
        operation(): ($AttributeModifier$Operation) | undefined;
        slot(): ($EquipmentSlotGroup) | undefined;
        test(entry: $ItemAttributeModifiers$Entry_): boolean;
        id(): ($ResourceLocation) | undefined;
        attribute(): ($HolderSet<$Attribute>) | undefined;
        amount(): $MinMaxBounds$Doubles;
        or(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): $Predicate<$ItemAttributeModifiers$Entry>;
        negate(): $Predicate<$ItemAttributeModifiers$Entry>;
        and(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): $Predicate<$ItemAttributeModifiers$Entry>;
        static CODEC: $Codec<$ItemAttributeModifiersPredicate$EntryPredicate>;
        constructor(attribute: ($HolderSet_<$Attribute>) | undefined, id: ($ResourceLocation_) | undefined, amount: $MinMaxBounds$Doubles_, operation: ($AttributeModifier$Operation_) | undefined, slot: ($EquipmentSlotGroup_) | undefined);
    }
    export class $LightningBoltPredicate extends $Record implements $EntitySubPredicate {
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        static blockSetOnFire(blocksSetOnFire: $MinMaxBounds$Ints_): $LightningBoltPredicate;
        entityStruck(): ($EntityPredicate) | undefined;
        codec(): $MapCodec<$LightningBoltPredicate>;
        blocksSetOnFire(): $MinMaxBounds$Ints;
        static CODEC: $MapCodec<$LightningBoltPredicate>;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: ($EntityPredicate_) | undefined);
    }
    export class $InventoryChangeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(inventory: $Inventory, stack: $ItemStack_, full: number, empty: number, occupied: number): boolean;
        slots(): $InventoryChangeTrigger$TriggerInstance$Slots;
        items(): $List<$ItemPredicate>;
        static hasItems(...items: $ItemLike_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...items: $ItemPredicate$Builder[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...items: $ItemPredicate_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $InventoryChangeTrigger$TriggerInstance$Slots_, arg2: $List_<$ItemPredicate_>);
    }
    export class $LootTableTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(lootTable: $ResourceKey_<$LootTable>): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        lootTable(): $ResourceKey<$LootTable>;
        static lootTableUsed(lootTable: $ResourceKey_<$LootTable>): $Criterion<$LootTableTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$LootTableTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $ResourceKey_<$LootTable>);
    }
    export class $KilledTrigger extends $SimpleCriterionTrigger<$KilledTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Entity, source: $DamageSource_): void;
        constructor();
    }
    export class $PlayerPredicate$StatMatcher<T> extends $Record {
    }
    export class $CollectionContentsPredicate<T, P extends $Predicate<T>> {
        static of<T, P extends $Predicate<T>>(tests: $List_<P>): $CollectionContentsPredicate<T, P>;
        static of<T, P extends $Predicate<T>>(...tests: P[]): $CollectionContentsPredicate<T, P>;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec<P>): $Codec<$CollectionContentsPredicate<T, P>>;
    }
    export interface $CollectionContentsPredicate<T, P extends $Predicate<T>> extends $Predicate<$Iterable<T>> {
        unpack(): $List<P>;
    }
    export class $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(reader: $StringReader, min: (T) | undefined, max: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFromReaderFactory}.
     */
    export type $MinMaxBounds$BoundsFromReaderFactory_<T, R> = ((arg0: $StringReader, arg1: (T) | undefined, arg2: (T) | undefined) => R);
    export class $EnterBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(state: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        block(): ($Holder<$Block>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static entersBlock(block: $Block_): $Criterion<$EnterBlockTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$EnterBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($StatePropertiesPredicate_) | undefined);
    }
    export class $PlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static tick(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(entity: $EntityPredicate$Builder): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(location: $LocationPredicate$Builder): $Criterion<$PlayerTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        static avoidVibration(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static sleptInBed(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static raidWon(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static walkOnBlockWithEquipment(block: $Block_, equipment: $Item_): $Criterion<$PlayerTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$PlayerTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined);
    }
    export class $RecipeUnlockedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(recipe: $RecipeHolder_<never>): boolean;
        recipe(): $ResourceLocation;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$RecipeUnlockedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, recipe: $ResourceLocation_);
    }
    export class $ItemJukeboxPlayablePredicate extends $Record implements $SingleComponentItemPredicate<$JukeboxPlayable> {
        componentType(): $DataComponentType<$JukeboxPlayable>;
        matches(stack: $ItemStack_, value: $JukeboxPlayable_): boolean;
        static any(): $ItemJukeboxPlayablePredicate;
        song(): ($HolderSet<$JukeboxSong>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemJukeboxPlayablePredicate>;
        constructor(arg0: ($HolderSet_<$JukeboxSong>) | undefined);
    }
    export class $RecipeCraftedTrigger extends $SimpleCriterionTrigger<$RecipeCraftedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, recipeId: $ResourceLocation_, items: $List_<$ItemStack_>): void;
        constructor();
    }
    export class $EntitySubPredicates$EntityHolderVariantPredicateType$Instance implements $EntitySubPredicate {
    }
    export class $PlayerInteractTrigger extends $SimpleCriterionTrigger<$PlayerInteractTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_, entity: $Entity): void;
        constructor();
    }
    export class $ItemAttributeModifiersPredicate extends $Record implements $SingleComponentItemPredicate<$ItemAttributeModifiers> {
        modifiers(): ($CollectionPredicate<$ItemAttributeModifiers$Entry, $ItemAttributeModifiersPredicate$EntryPredicate>) | undefined;
        componentType(): $DataComponentType<$ItemAttributeModifiers>;
        matches(stack: $ItemStack_): boolean;
        matches(stack: $ItemStack_, value: $ItemAttributeModifiers_): boolean;
        static CODEC: $Codec<$ItemAttributeModifiersPredicate>;
        constructor(modifiers: ($CollectionPredicate_<$ItemAttributeModifiers$Entry_, $ItemAttributeModifiersPredicate$EntryPredicate_>) | undefined);
    }
    export class $RaiderPredicate extends $Record implements $EntitySubPredicate {
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        isCaptain(): boolean;
        hasRaid(): boolean;
        codec(): $MapCodec<$RaiderPredicate>;
        static CODEC: $MapCodec<$RaiderPredicate>;
        static CAPTAIN_WITHOUT_RAID: $RaiderPredicate;
        constructor(arg0: boolean, arg1: boolean);
        get captain(): boolean;
    }
    export class $BredAnimalsTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        parent(): ($ContextAwarePredicate) | undefined;
        matches(parentContext: $LootContext, partnerContext: $LootContext, childContext: $LootContext | null): boolean;
        validate(validator: $CriterionValidator): void;
        child(): ($ContextAwarePredicate) | undefined;
        static bredAnimals(child: $EntityPredicate$Builder): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        static bredAnimals(): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        static bredAnimals(parent: ($EntityPredicate_) | undefined, partner: ($EntityPredicate_) | undefined, child: ($EntityPredicate_) | undefined): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        partner(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$BredAnimalsTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, parent: ($ContextAwarePredicate) | undefined, partner: ($ContextAwarePredicate) | undefined, child: ($ContextAwarePredicate) | undefined);
    }
    export class $ItemSubPredicate {
        static CODEC: $Codec<$Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>>;
    }
    export interface $ItemSubPredicate {
        matches(stack: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSubPredicate}.
     */
    export type $ItemSubPredicate_ = ((arg0: $ItemStack) => boolean);
    export class $SingleComponentItemPredicate<T> {
    }
    export interface $SingleComponentItemPredicate<T> extends $ItemSubPredicate {
        componentType(): $DataComponentType<T>;
        matches(stack: $ItemStack_): boolean;
        matches(stack: $ItemStack_, value: T): boolean;
    }
    export class $CollectionContentsPredicate$Zero<T, P extends $Predicate<T>> implements $CollectionContentsPredicate<T, P> {
        test(contents: $Iterable_<T>): boolean;
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
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        inOpenWater(): (boolean) | undefined;
        static inOpenWater(inOpenWater: boolean): $FishingHookPredicate;
        codec(): $MapCodec<$FishingHookPredicate>;
        static CODEC: $MapCodec<$FishingHookPredicate>;
        static ANY: $FishingHookPredicate;
        constructor(arg0: (boolean) | undefined);
    }
    export class $CollectionPredicate<T, P extends $Predicate<T>> extends $Record implements $Predicate<$Iterable<T>> {
        size(): ($MinMaxBounds$Ints) | undefined;
        test(collection: $Iterable_<$Iterable<T>>): boolean;
        contains(): ($CollectionContentsPredicate<$Iterable<T>, P>) | undefined;
        counts(): ($CollectionCountsPredicate<$Iterable<T>, P>) | undefined;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec<P>): $Codec<$CollectionPredicate<T, P>>;
        or(arg0: $Predicate_<$Iterable<T>>): $Predicate<$Iterable<T>>;
        negate(): $Predicate<$Iterable<T>>;
        and(arg0: $Predicate_<$Iterable<T>>): $Predicate<$Iterable<T>>;
        constructor(arg0: ($CollectionContentsPredicate<$Iterable_<T>, P>) | undefined, arg1: ($CollectionCountsPredicate<$Iterable_<T>, P>) | undefined, arg2: ($MinMaxBounds$Ints_) | undefined);
    }
    export class $EntityFlagsPredicate extends $Record {
        matches(entity: $Entity): boolean;
        isBaby(): (boolean) | undefined;
        isFlying(): (boolean) | undefined;
        isSwimming(): (boolean) | undefined;
        isOnFire(): (boolean) | undefined;
        isCrouching(): (boolean) | undefined;
        isSprinting(): (boolean) | undefined;
        isOnGround(): (boolean) | undefined;
        static CODEC: $Codec<$EntityFlagsPredicate>;
        constructor(arg0: (boolean) | undefined, arg1: (boolean) | undefined, arg2: (boolean) | undefined, arg3: (boolean) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined, arg6: (boolean) | undefined);
        get baby(): (boolean) | undefined;
        get flying(): (boolean) | undefined;
        get swimming(): (boolean) | undefined;
        get onFire(): (boolean) | undefined;
        get crouching(): (boolean) | undefined;
        get sprinting(): (boolean) | undefined;
        get onGround(): (boolean) | undefined;
    }
    export class $BeeNestDestroyedTrigger extends $SimpleCriterionTrigger<$BeeNestDestroyedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, state: $BlockState_, stack: $ItemStack_, numBees: number): void;
        constructor();
    }
    export class $ItemEnchantmentsPredicate$Enchantments extends $ItemEnchantmentsPredicate {
        static CODEC: $Codec<$ItemEnchantmentsPredicate$Enchantments>;
        constructor(arg0: $List_<$EnchantmentPredicate_>);
    }
    export class $ItemUsedOnLocationTrigger extends $SimpleCriterionTrigger<$ItemUsedOnLocationTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_, stack: $ItemStack_): void;
        constructor();
    }
    export class $TameAnimalTrigger extends $SimpleCriterionTrigger<$TameAnimalTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Animal): void;
        constructor();
    }
    export class $StatePropertiesPredicate extends $Record {
        matches(state: $FluidState): boolean;
        matches<S extends $StateHolder<never, S>>(properties: $StateDefinition<never, S>, targetProperty: S): boolean;
        matches(state: $BlockState_): boolean;
        properties(): $List<$StatePropertiesPredicate$PropertyMatcher>;
        checkState(state: $StateDefinition<never, never>): (string) | undefined;
        static CODEC: $Codec<$StatePropertiesPredicate>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StatePropertiesPredicate>;
        constructor(properties: $List_<$StatePropertiesPredicate$PropertyMatcher_>);
    }
    export class $FishingRodHookedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(rod: $ItemStack_, context: $LootContext, stacks: $Collection_<$ItemStack_>): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        rod(): ($ItemPredicate) | undefined;
        static fishedItem(rod: ($ItemPredicate_) | undefined, entity: ($EntityPredicate_) | undefined, item: ($ItemPredicate_) | undefined): $Criterion<$FishingRodHookedTrigger$TriggerInstance>;
        static CODEC: $Codec<$FishingRodHookedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, rod: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    export class $AnyBlockInteractionTrigger extends $SimpleCriterionTrigger<$AnyBlockInteractionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_, stack: $ItemStack_): void;
        constructor();
    }
    export class $InventoryChangeTrigger$TriggerInstance$Slots extends $Record {
        matches(full: number, empty: number, occupied: number): boolean;
        empty(): $MinMaxBounds$Ints;
        full(): $MinMaxBounds$Ints;
        occupied(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance$Slots>;
        static ANY: $InventoryChangeTrigger$TriggerInstance$Slots;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_, arg2: $MinMaxBounds$Ints_);
    }
    export class $BeeNestDestroyedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(state: $BlockState_, stack: $ItemStack_, numBees: number): boolean;
        block(): ($Holder<$Block>) | undefined;
        item(): ($ItemPredicate) | undefined;
        static destroyedBeeNest(block: $Block_, item: $ItemPredicate$Builder, numBees: $MinMaxBounds$Ints_): $Criterion<$BeeNestDestroyedTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        beesInside(): $MinMaxBounds$Ints;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$BeeNestDestroyedTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($ItemPredicate_) | undefined, arg3: $MinMaxBounds$Ints_);
    }
    export class $StatePropertiesPredicate$ExactMatcher extends $Record implements $StatePropertiesPredicate$ValueMatcher {
    }
    export class $ItemDamagePredicate extends $Record implements $SingleComponentItemPredicate<number> {
        componentType(): $DataComponentType<number>;
        matches(stack: $ItemStack_, value: number): boolean;
        damage(): $MinMaxBounds$Ints;
        static durability(damage: $MinMaxBounds$Ints_): $ItemDamagePredicate;
        durability(): $MinMaxBounds$Ints;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemDamagePredicate>;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_);
    }
    export class $CollectionContentsPredicate$Multiple<T, P extends $Predicate<T>> extends $Record implements $CollectionContentsPredicate<T, P> {
        test(contents: $Iterable_<T>): boolean;
        unpack(): $List<P>;
        tests(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $List_<P>);
    }
    export class $FilledBucketTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(stack: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static filledBucket(item: $ItemPredicate$Builder): $Criterion<$FilledBucketTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$FilledBucketTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    export class $ItemSubPredicates {
        static bootstrap(registry: $Registry<$ItemSubPredicate$Type_<never>>): $ItemSubPredicate$Type<never>;
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
        trigger(player: $ServerPlayer, villager: $AbstractVillager, stack: $ItemStack_): void;
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
        trigger(player: $ServerPlayer, startPos: $Vec3_, duration: number): void;
        constructor();
    }
    export class $SummonedEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(lootContext: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        entity(): ($ContextAwarePredicate) | undefined;
        static summonedEntity(entity: $EntityPredicate$Builder): $Criterion<$SummonedEntityTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$SummonedEntityTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    export class $EntitySubPredicate {
        static CODEC: $Codec<$EntitySubPredicate>;
    }
    export interface $EntitySubPredicate {
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$EntitySubPredicate>;
    }
    export class $WrappedMinMaxBounds extends $Record {
        static atMost(min: number): $WrappedMinMaxBounds;
        min(): number;
        max(): number;
        matches(value: number): boolean;
        static between(min: number, max: number): $WrappedMinMaxBounds;
        static atLeast(min: number): $WrappedMinMaxBounds;
        serializeToJson(): $JsonElement;
        static fromReader(reader: $StringReader, isFloatingPoint: boolean): $WrappedMinMaxBounds;
        static fromReader(reader: $StringReader, isFloatingPoint: boolean, valueFactory: $Function_<number, number>): $WrappedMinMaxBounds;
        static fromJson(json: $JsonElement_ | null): $WrappedMinMaxBounds;
        matchesSqr(value: number): boolean;
        static exactly(min: number): $WrappedMinMaxBounds;
        static ERROR_INTS_ONLY: $SimpleCommandExceptionType;
        static ANY: $WrappedMinMaxBounds;
        constructor(min: number | null, max: number | null);
    }
    export class $ItemFireworkExplosionPredicate extends $Record implements $SingleComponentItemPredicate<$FireworkExplosion> {
        componentType(): $DataComponentType<$FireworkExplosion>;
        matches(stack: $ItemStack_, value: $FireworkExplosion_): boolean;
        predicate(): $ItemFireworkExplosionPredicate$FireworkPredicate;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemFireworkExplosionPredicate>;
        constructor(arg0: $ItemFireworkExplosionPredicate$FireworkPredicate_);
    }
    export class $StatePropertiesPredicate$PropertyMatcher extends $Record {
    }
    export class $EnchantmentPredicate extends $Record {
        level(): $MinMaxBounds$Ints;
        containedIn(enchantments: $ItemEnchantments_): boolean;
        enchantments(): ($HolderSet<$Enchantment>) | undefined;
        static CODEC: $Codec<$EnchantmentPredicate>;
        constructor(arg0: ($HolderSet_<$Enchantment>) | undefined, arg1: $MinMaxBounds$Ints_);
        constructor(enchantments: $HolderSet_<$Enchantment>, level: $MinMaxBounds$Ints_);
        constructor(enchantment: $Holder_<$Enchantment>, level: $MinMaxBounds$Ints_);
    }
    export class $ItemFireworksPredicate extends $Record implements $SingleComponentItemPredicate<$Fireworks> {
        componentType(): $DataComponentType<$Fireworks>;
        matches(stack: $ItemStack_, value: $Fireworks_): boolean;
        explosions(): ($CollectionPredicate<$FireworkExplosion, $ItemFireworkExplosionPredicate$FireworkPredicate>) | undefined;
        flightDuration(): $MinMaxBounds$Ints;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemFireworksPredicate>;
        constructor(arg0: ($CollectionPredicate_<$FireworkExplosion_, $ItemFireworkExplosionPredicate$FireworkPredicate_>) | undefined, arg1: $MinMaxBounds$Ints_);
    }
    export class $PickedUpItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(player: $ServerPlayer, stack: $ItemStack_, context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static thrownItemPickedUpByPlayer(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PickedUpItemTrigger$TriggerInstance>;
        static thrownItemPickedUpByEntity(player: $ContextAwarePredicate, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PickedUpItemTrigger$TriggerInstance>;
        static CODEC: $Codec<$PickedUpItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    export class $DistanceTrigger extends $SimpleCriterionTrigger<$DistanceTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, position: $Vec3_): void;
        constructor();
    }
    export class $KilledByCrossbowTrigger extends $SimpleCriterionTrigger<$KilledByCrossbowTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entities: $Collection_<$Entity>): void;
        constructor();
    }
    export class $LightningStrikeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(playerContext: $LootContext, entityContexts: $List_<$LootContext>): boolean;
        validate(validator: $CriterionValidator): void;
        static lightningStrike(lightning: ($EntityPredicate_) | undefined, bystander: ($EntityPredicate_) | undefined): $Criterion<$LightningStrikeTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        lightning(): ($ContextAwarePredicate) | undefined;
        bystander(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$LightningStrikeTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, lightning: ($ContextAwarePredicate) | undefined, bystander: ($ContextAwarePredicate) | undefined);
    }
    export class $MobEffectsPredicate$MobEffectInstancePredicate extends $Record {
        matches(effect: $MobEffectInstance | null): boolean;
        duration(): $MinMaxBounds$Ints;
        visible(): (boolean) | undefined;
        ambient(): (boolean) | undefined;
        amplifier(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$MobEffectsPredicate$MobEffectInstancePredicate>;
        constructor();
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_, arg2: (boolean) | undefined, arg3: (boolean) | undefined);
    }
    export class $SlideDownBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(state: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        block(): ($Holder<$Block>) | undefined;
        static slidesDownBlock(block: $Block_): $Criterion<$SlideDownBlockTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$SlideDownBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($StatePropertiesPredicate_) | undefined);
    }
    export class $ItemUsedOnLocationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        static itemUsedOnBlock(location: $LocationPredicate$Builder, tool: $ItemPredicate$Builder): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static placedBlock(block: $Block_): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static placedBlock(...conditions: $LootItemCondition$Builder_[]): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        static allayDropItemOnBlock(location: $LocationPredicate$Builder, tool: $ItemPredicate$Builder): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static CODEC: $Codec<$ItemUsedOnLocationTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, location: ($ContextAwarePredicate) | undefined);
    }
    export class $EntityEquipmentPredicate$Builder {
        head(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        build(): $EntityEquipmentPredicate;
        body(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        offhand(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        legs(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        mainhand(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        feet(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        chest(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        static equipment(): $EntityEquipmentPredicate$Builder;
        constructor();
    }
    export class $ConstructBeaconTrigger extends $SimpleCriterionTrigger<$ConstructBeaconTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, level: number): void;
        constructor();
    }
    export class $DistancePredicate extends $Record {
        matches(x1: number, arg1: number, y1: number, arg3: number, z1: number, arg5: number): boolean;
        x(): $MinMaxBounds$Doubles;
        z(): $MinMaxBounds$Doubles;
        y(): $MinMaxBounds$Doubles;
        static absolute(absolute: $MinMaxBounds$Doubles_): $DistancePredicate;
        absolute(): $MinMaxBounds$Doubles;
        static vertical(absolute: $MinMaxBounds$Doubles_): $DistancePredicate;
        static horizontal(absolute: $MinMaxBounds$Doubles_): $DistancePredicate;
        horizontal(): $MinMaxBounds$Doubles;
        static CODEC: $Codec<$DistancePredicate>;
        constructor(x: $MinMaxBounds$Doubles_, y: $MinMaxBounds$Doubles_, z: $MinMaxBounds$Doubles_, horizontal: $MinMaxBounds$Doubles_, absolute: $MinMaxBounds$Doubles_);
    }
    export class $SlimePredicate extends $Record implements $EntitySubPredicate {
        size(): $MinMaxBounds$Ints;
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$SlimePredicate>;
        static sized(size: $MinMaxBounds$Ints_): $SlimePredicate;
        static CODEC: $MapCodec<$SlimePredicate>;
        constructor(size: $MinMaxBounds$Ints_);
    }
    export class $GameTypePredicate extends $Record {
        matches(type: $GameType_): boolean;
        static of(...types: $GameType_[]): $GameTypePredicate;
        types(): $List<$GameType>;
        static CODEC: $Codec<$GameTypePredicate>;
        static SURVIVAL_LIKE: $GameTypePredicate;
        static ANY: $GameTypePredicate;
        constructor(arg0: $List_<$GameType_>);
    }
    export class $BrewedPotionTrigger extends $SimpleCriterionTrigger<$BrewedPotionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, potion: $Holder_<$Potion>): void;
        constructor();
    }
    export class $ImpossibleTrigger implements $CriterionTrigger<$ImpossibleTrigger$TriggerInstance> {
        codec(): $Codec<$ImpossibleTrigger$TriggerInstance>;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<$ImpossibleTrigger$TriggerInstance_>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<$ImpossibleTrigger$TriggerInstance_>): void;
        createCriterion(triggerInstance: $ImpossibleTrigger$TriggerInstance_): $Criterion<$ImpossibleTrigger$TriggerInstance>;
        constructor();
    }
    export class $FilledBucketTrigger extends $SimpleCriterionTrigger<$FilledBucketTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, stack: $ItemStack_): void;
        constructor();
    }
    export class $PickedUpItemTrigger extends $SimpleCriterionTrigger<$PickedUpItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, stack: $ItemStack_, entity: $Entity | null): void;
        constructor();
    }
    export class $FluidPredicate$Builder {
        of(arg0: $HolderSet_<$Fluid>): $FluidPredicate$Builder;
        of(fluid: $Fluid_): $FluidPredicate$Builder;
        setProperties(properties: $StatePropertiesPredicate_): $FluidPredicate$Builder;
        build(): $FluidPredicate;
        static fluid(): $FluidPredicate$Builder;
        set properties(value: $StatePropertiesPredicate_);
    }
    export class $EntitySubPredicates$EntityVariantPredicateType$Instance implements $EntitySubPredicate {
    }
    export class $UsingItemTrigger extends $SimpleCriterionTrigger<$UsingItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_): void;
        constructor();
    }
    export class $CollectionCountsPredicate<T, P extends $Predicate<T>> {
        static of<T, P extends $Predicate<T>>(entries: $List_<$CollectionCountsPredicate$Entry_<T, P>>): $CollectionCountsPredicate<T, P>;
        static of<T, P extends $Predicate<T>>(...entries: $CollectionCountsPredicate$Entry_<T, P>[]): $CollectionCountsPredicate<T, P>;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec<P>): $Codec<$CollectionCountsPredicate<T, P>>;
    }
    export interface $CollectionCountsPredicate<T, P extends $Predicate<T>> extends $Predicate<$Iterable<T>> {
        unpack(): $List<$CollectionCountsPredicate$Entry<$Iterable<T>, P>>;
    }
    export class $SlotsPredicate extends $Record {
        matches(entity: $Entity): boolean;
        slots(): $Map<$SlotRange, $ItemPredicate>;
        static CODEC: $Codec<$SlotsPredicate>;
        constructor(arg0: $Map_<$SlotRange, $ItemPredicate_>);
    }
    export class $NbtPredicate extends $Record {
        matches(stack: $ItemStack_): boolean;
        matches(entity: $Entity): boolean;
        matches(tag: $Tag_ | null): boolean;
        tag(): $CompoundTag;
        static getEntityTagToCompare(entity: $Entity): $CompoundTag;
        static CODEC: $Codec<$NbtPredicate>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NbtPredicate>;
        constructor(tag: $CompoundTag_);
    }
    export class $ItemDurabilityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_, durability: number): boolean;
        delta(): $MinMaxBounds$Ints;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        durability(): $MinMaxBounds$Ints;
        static changedDurability(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, durability: $MinMaxBounds$Ints_): $Criterion<$ItemDurabilityTrigger$TriggerInstance>;
        static changedDurability(item: ($ItemPredicate_) | undefined, durability: $MinMaxBounds$Ints_): $Criterion<$ItemDurabilityTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ItemDurabilityTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, durability: $MinMaxBounds$Ints_, delta: $MinMaxBounds$Ints_);
    }
    export class $KilledByCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(contexts: $Collection_<$LootContext>, bounds: number): boolean;
        validate(validator: $CriterionValidator): void;
        static crossbowKilled(uniqueEntityTypes: $MinMaxBounds$Ints_): $Criterion<$KilledByCrossbowTrigger$TriggerInstance>;
        static crossbowKilled(...victims: $EntityPredicate$Builder[]): $Criterion<$KilledByCrossbowTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        victims(): $List<$ContextAwarePredicate>;
        uniqueEntityTypes(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$KilledByCrossbowTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, victims: $List_<$ContextAwarePredicate>, uniqueEntityTypes: $MinMaxBounds$Ints_);
    }
    export class $PlayerPredicate$AdvancementCriterionsPredicate extends $Record implements $PlayerPredicate$AdvancementPredicate {
        or(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
        negate(): $Predicate<$AdvancementProgress>;
        and(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
    }
    export class $PlayerPredicate$Builder {
        build(): $PlayerPredicate;
        setLevel(level: $MinMaxBounds$Ints_): $PlayerPredicate$Builder;
        setLookingAt(lookingAt: $EntityPredicate$Builder): $PlayerPredicate$Builder;
        setGameType(gameType: $GameTypePredicate_): $PlayerPredicate$Builder;
        static player(): $PlayerPredicate$Builder;
        addRecipe(recipe: $ResourceLocation_, unlocked: boolean): $PlayerPredicate$Builder;
        checkAdvancementDone(recipe: $ResourceLocation_, unlocked: boolean): $PlayerPredicate$Builder;
        checkAdvancementCriterions(advancement: $ResourceLocation_, criterions: $Map_<string, boolean>): $PlayerPredicate$Builder;
        addStat<T>(type: $StatType_<T>, value: $Holder$Reference<T>, range: $MinMaxBounds$Ints_): $PlayerPredicate$Builder;
        constructor();
        set level(value: $MinMaxBounds$Ints_);
        set lookingAt(value: $EntityPredicate$Builder);
        set gameType(value: $GameTypePredicate_);
    }
    export class $EffectsChangedTrigger extends $SimpleCriterionTrigger<$EffectsChangedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, source: $Entity | null): void;
        constructor();
    }
    export class $DamageSourcePredicate extends $Record {
        matches(player: $ServerPlayer, source: $DamageSource_): boolean;
        matches(level: $ServerLevel, position: $Vec3_, source: $DamageSource_): boolean;
        isDirect(): (boolean) | undefined;
        tags(): $List<$TagPredicate<$DamageType>>;
        directEntity(): ($EntityPredicate) | undefined;
        sourceEntity(): ($EntityPredicate) | undefined;
        static CODEC: $Codec<$DamageSourcePredicate>;
        constructor(arg0: $List_<$TagPredicate_<$DamageType_>>, arg1: ($EntityPredicate_) | undefined, arg2: ($EntityPredicate_) | undefined, arg3: (boolean) | undefined);
        get direct(): (boolean) | undefined;
    }
    export class $PlayerHurtEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(player: $ServerPlayer, context: $LootContext, damage: $DamageSource_, dealt: number, taken: number, blocked: boolean): boolean;
        validate(validator: $CriterionValidator): void;
        entity(): ($ContextAwarePredicate) | undefined;
        static playerHurtEntity(damage: $DamagePredicate$Builder, entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(damage: ($DamagePredicate_) | undefined, entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        damage(): ($DamagePredicate) | undefined;
        static playerHurtEntityWithDamage(entity: ($DamagePredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntityWithDamage(damage: $DamagePredicate$Builder): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static CODEC: $Codec<$PlayerHurtEntityTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, damage: ($DamagePredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    export class $SummonedEntityTrigger extends $SimpleCriterionTrigger<$SummonedEntityTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Entity): void;
        constructor();
    }
    export class $AnyBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$AnyBlockInteractionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    export class $ConsumeItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static usedItem(item: $ItemPredicate$Builder): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        static usedItem(): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        static usedItem(item: $ItemLike_): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ConsumeItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    export class $UsedEnderEyeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(distanceSq: number): boolean;
        distance(): $MinMaxBounds$Doubles;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$UsedEnderEyeTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, distance: $MinMaxBounds$Doubles_);
    }
    export class $DamageSourcePredicate$Builder {
        isDirect(isDirect: boolean): $DamageSourcePredicate$Builder;
        source(directEntity: $EntityPredicate$Builder): $DamageSourcePredicate$Builder;
        build(): $DamageSourcePredicate;
        direct(directEntity: $EntityPredicate$Builder): $DamageSourcePredicate$Builder;
        tag(tag: $TagPredicate_<$DamageType_>): $DamageSourcePredicate$Builder;
        static damageType(): $DamageSourcePredicate$Builder;
        constructor();
    }
    export class $FishingRodHookedTrigger extends $SimpleCriterionTrigger<$FishingRodHookedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, rod: $ItemStack_, entity: $FishingHook, stacks: $Collection_<$ItemStack_>): void;
        constructor();
    }
    export class $TagPredicate<T> extends $Record {
        matches(value: $Holder_<T>): boolean;
        expected(): boolean;
        static is<T>(tag: $TagKey_<T>): $TagPredicate<T>;
        tag(): $TagKey<T>;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>): $Codec<$TagPredicate<T>>;
        static isNot<T>(tag: $TagKey_<T>): $TagPredicate<T>;
        constructor(tag: $TagKey_<T>, expected: boolean);
    }
    export class $ItemEnchantmentsPredicate$StoredEnchantments extends $ItemEnchantmentsPredicate {
        static CODEC: $Codec<$ItemEnchantmentsPredicate$StoredEnchantments>;
        constructor(arg0: $List_<$EnchantmentPredicate_>);
    }
    export class $TameAnimalTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(lootContext: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        entity(): ($ContextAwarePredicate) | undefined;
        static tamedAnimal(entity: $EntityPredicate$Builder): $Criterion<$TameAnimalTrigger$TriggerInstance>;
        static tamedAnimal(): $Criterion<$TameAnimalTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$TameAnimalTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    export class $ItemFireworkExplosionPredicate$FireworkPredicate extends $Record implements $Predicate<$FireworkExplosion> {
        test(explosion: $FireworkExplosion_): boolean;
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
        test(contents: $Filterable_<$Component_>): boolean;
        contents(): $Component;
        or(arg0: $Predicate_<$Filterable<$Component>>): $Predicate<$Filterable<$Component>>;
        negate(): $Predicate<$Filterable<$Component>>;
        and(arg0: $Predicate_<$Filterable<$Component>>): $Predicate<$Filterable<$Component>>;
        static CODEC: $Codec<$ItemWrittenBookPredicate$PagePredicate>;
        constructor(arg0: $Component_);
    }
    export class $UsedEnderEyeTrigger extends $SimpleCriterionTrigger<$UsedEnderEyeTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_): void;
        constructor();
    }
    export class $CollectionCountsPredicate$Entry<T, P extends $Predicate<T>> extends $Record {
        test(): P;
        test(collection: $Iterable_<T>): boolean;
        count(): $MinMaxBounds$Ints;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec<P>): $Codec<$CollectionCountsPredicate$Entry<T, P>>;
        constructor(arg0: P, arg1: $MinMaxBounds$Ints_);
    }
    export class $ShotCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static shotCrossbow(item: $ItemLike_): $Criterion<$ShotCrossbowTrigger$TriggerInstance>;
        static shotCrossbow(item: ($ItemPredicate_) | undefined): $Criterion<$ShotCrossbowTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ShotCrossbowTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    export class $FallAfterExplosionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(level: $ServerLevel, startPosition: $Vec3_, endPosition: $Vec3_, context: $LootContext | null): boolean;
        cause(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        distance(): ($DistancePredicate) | undefined;
        startPosition(): ($LocationPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static fallAfterExplosion(distance: $DistancePredicate_, cause: $EntityPredicate$Builder): $Criterion<$FallAfterExplosionTrigger$TriggerInstance>;
        static CODEC: $Codec<$FallAfterExplosionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($LocationPredicate_) | undefined, arg2: ($DistancePredicate_) | undefined, arg3: ($ContextAwarePredicate) | undefined);
    }
    export class $TargetBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(context: $LootContext, vector: $Vec3_, signalStrength: number): boolean;
        validate(validator: $CriterionValidator): void;
        signalStrength(): $MinMaxBounds$Ints;
        player(): ($ContextAwarePredicate) | undefined;
        projectile(): ($ContextAwarePredicate) | undefined;
        static targetHit(signalStrength: $MinMaxBounds$Ints_, projectile: ($ContextAwarePredicate) | undefined): $Criterion<$TargetBlockTrigger$TriggerInstance>;
        static CODEC: $Codec<$TargetBlockTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, signalStrength: $MinMaxBounds$Ints_, projectile: ($ContextAwarePredicate) | undefined);
    }
    export class $StatePropertiesPredicate$Builder {
        static properties(): $StatePropertiesPredicate$Builder;
        build(): ($StatePropertiesPredicate) | undefined;
        hasProperty(property: $Property<number>, value: number): $StatePropertiesPredicate$Builder;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>, value: T): $StatePropertiesPredicate$Builder;
        hasProperty(property: $Property<boolean>, value: boolean): $StatePropertiesPredicate$Builder;
        hasProperty(property: $Property<never>, value: string): $StatePropertiesPredicate$Builder;
    }
    export class $ItemWritableBookPredicate$PagePredicate extends $Record implements $Predicate<$Filterable<string>> {
        test(contents: $Filterable_<string>): boolean;
        contents(): string;
        or(arg0: $Predicate_<$Filterable<string>>): $Predicate<$Filterable<string>>;
        negate(): $Predicate<$Filterable<string>>;
        and(arg0: $Predicate_<$Filterable<string>>): $Predicate<$Filterable<string>>;
        static CODEC: $Codec<$ItemWritableBookPredicate$PagePredicate>;
        constructor(arg0: string);
    }
    export class $EnterBlockTrigger extends $SimpleCriterionTrigger<$EnterBlockTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, state: $BlockState_): void;
        constructor();
    }
    export class $CriterionValidator {
        validate(entity: $ContextAwarePredicate, contextParams: $LootContextParamSet, name: string): void;
        validate(entities: $List_<$ContextAwarePredicate>, contextParams: $LootContextParamSet, name: string): void;
        validateEntity(entity: ($ContextAwarePredicate) | undefined, name: string): void;
        validateEntity(entity: $ContextAwarePredicate, name: string): void;
        validateEntities(entities: $List_<$ContextAwarePredicate>, name: string): void;
        constructor(reporter: $ProblemReporter, lootData: $HolderGetter$Provider_);
    }
    export class $EntitySubPredicates$EntityVariantPredicateType<V> {
        static create<V>(codec: $Codec<V>, getter: $Function_<$Entity, (V) | undefined>): $EntitySubPredicates$EntityVariantPredicateType<V>;
        static create<V>(variantRegistry: $Registry<V>, getter: $Function_<$Entity, (V) | undefined>): $EntitySubPredicates$EntityVariantPredicateType<V>;
        createPredicate(variant: V): $EntitySubPredicate;
        codec: $MapCodec<$EntitySubPredicates$EntityVariantPredicateType$Instance>;
        getter: $Function<$Entity, (V) | undefined>;
        constructor(codec: $Codec<V>, getter: $Function_<$Entity, (V) | undefined>);
    }
    export class $DistanceTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(level: $ServerLevel, startPosition: $Vec3_, currentPosition: $Vec3_): boolean;
        distance(): ($DistancePredicate) | undefined;
        startPosition(): ($LocationPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static fallFromHeight(player: $EntityPredicate$Builder, distance: $DistancePredicate_, startPosition: $LocationPredicate$Builder): $Criterion<$DistanceTrigger$TriggerInstance>;
        static rideEntityInLava(player: $EntityPredicate$Builder, distance: $DistancePredicate_): $Criterion<$DistanceTrigger$TriggerInstance>;
        static travelledThroughNether(distance: $DistancePredicate_): $Criterion<$DistanceTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$DistanceTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, startPosition: ($LocationPredicate_) | undefined, distance: ($DistancePredicate_) | undefined);
    }
    export class $ItemCustomDataPredicate extends $Record implements $ItemSubPredicate {
        value(): $NbtPredicate;
        matches(stack: $ItemStack_): boolean;
        static customData(value: $NbtPredicate_): $ItemCustomDataPredicate;
        static CODEC: $Codec<$ItemCustomDataPredicate>;
        constructor(arg0: $NbtPredicate_);
    }
    export class $BredAnimalsTrigger extends $SimpleCriterionTrigger<$BredAnimalsTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, parent: $Animal, partner: $Animal, child: $AgeableMob | null): void;
        constructor();
    }
    export class $StatePropertiesPredicate$RangedMatcher extends $Record implements $StatePropertiesPredicate$ValueMatcher {
    }
    export class $ItemEnchantmentsPredicate implements $SingleComponentItemPredicate<$ItemEnchantments> {
        matches(stack: $ItemStack_, enchantments: $ItemEnchantments_): boolean;
        static storedEnchantments(enchantments: $List_<$EnchantmentPredicate_>): $ItemEnchantmentsPredicate$StoredEnchantments;
        static codec<T extends $ItemEnchantmentsPredicate>(predicateFactory: $Function_<$List<$EnchantmentPredicate>, T>): $Codec<T>;
        static enchantments(enchantments: $List_<$EnchantmentPredicate_>): $ItemEnchantmentsPredicate$Enchantments;
        enchantments(): $List<$EnchantmentPredicate>;
        matches(stack: $ItemStack_): boolean;
        constructor(enchantments: $List_<$EnchantmentPredicate_>);
    }
    export class $BlockPredicate$Builder {
        of(tag: $TagKey_<$Block>): $BlockPredicate$Builder;
        of(blocks: $Collection_<$Block_>): $BlockPredicate$Builder;
        of(...blocks: $Block_[]): $BlockPredicate$Builder;
        setProperties(properties: $StatePropertiesPredicate$Builder): $BlockPredicate$Builder;
        static block(): $BlockPredicate$Builder;
        build(): $BlockPredicate;
        hasNbt(nbt: $CompoundTag_): $BlockPredicate$Builder;
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
    export interface $ItemSubPredicate$Type<T> extends RegistryMarked<RegistryTypes.ItemSubPredicateTypeTag, RegistryTypes.ItemSubPredicateType> {}
    export class $ChanneledLightningTrigger extends $SimpleCriterionTrigger<$ChanneledLightningTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entityTriggered: $Collection_<$Entity>): void;
        constructor();
    }
    export class $LocationPredicate$Builder {
        static location(): $LocationPredicate$Builder;
        build(): $LocationPredicate;
        setFluid(fluid: $FluidPredicate$Builder): $LocationPredicate$Builder;
        static inDimension(dimension: $ResourceKey_<$Level>): $LocationPredicate$Builder;
        setCanSeeSky(canSeeSky: boolean): $LocationPredicate$Builder;
        setBlock(block: $BlockPredicate$Builder): $LocationPredicate$Builder;
        setY(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setX(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setZ(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setLight(light: $LightPredicate$Builder): $LocationPredicate$Builder;
        setDimension(dimension: $ResourceKey_<$Level>): $LocationPredicate$Builder;
        setBiomes(biomes: $HolderSet_<$Biome>): $LocationPredicate$Builder;
        setStructures(biomes: $HolderSet_<$Structure>): $LocationPredicate$Builder;
        static inStructure(biome: $Holder_<$Structure>): $LocationPredicate$Builder;
        static atYLocation(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        static inBiome(biome: $Holder_<$Biome>): $LocationPredicate$Builder;
        setSmokey(canSeeSky: boolean): $LocationPredicate$Builder;
        constructor();
        set fluid(value: $FluidPredicate$Builder);
        set canSeeSky(value: boolean);
        set block(value: $BlockPredicate$Builder);
        set y(value: $MinMaxBounds$Doubles_);
        set x(value: $MinMaxBounds$Doubles_);
        set z(value: $MinMaxBounds$Doubles_);
        set light(value: $LightPredicate$Builder);
        set dimension(value: $ResourceKey_<$Level>);
        set biomes(value: $HolderSet_<$Biome>);
        set structures(value: $HolderSet_<$Structure>);
        set smokey(value: boolean);
    }
    export class $EntityFlagsPredicate$Builder {
        static flags(): $EntityFlagsPredicate$Builder;
        build(): $EntityFlagsPredicate;
        setIsBaby(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setIsFlying(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setOnGround(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setSwimming(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setSprinting(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setOnFire(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setCrouching(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        constructor();
        set isBaby(value: boolean);
        set isFlying(value: boolean);
        set onGround(value: boolean);
        set swimming(value: boolean);
        set sprinting(value: boolean);
        set onFire(value: boolean);
        set crouching(value: boolean);
    }
    export class $CollectionCountsPredicate$Zero<T, P extends $Predicate<T>> implements $CollectionCountsPredicate<T, P> {
        test(collection: $Iterable_<T>): boolean;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor();
    }
    export class $ShotCrossbowTrigger extends $SimpleCriterionTrigger<$ShotCrossbowTrigger$TriggerInstance> {
        trigger(shooter: $ServerPlayer, stack: $ItemStack_): void;
        constructor();
    }
    export class $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(min: (T) | undefined, max: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFactory}.
     */
    export type $MinMaxBounds$BoundsFactory_<T, R> = ((arg0: (T) | undefined, arg1: (T) | undefined) => R);
    export class $ContextAwarePredicate {
        matches(context: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        static create(...conditions: $LootItemCondition[]): $ContextAwarePredicate;
        static CODEC: $Codec<$ContextAwarePredicate>;
        constructor(conditions: $List_<$LootItemCondition>);
    }
    export class $BrewedPotionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(potion: $Holder_<$Potion>): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        potion(): ($Holder<$Potion>) | undefined;
        static brewedPotion(): $Criterion<$BrewedPotionTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$BrewedPotionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Potion>) | undefined);
    }
    export class $EnchantedItemTrigger extends $SimpleCriterionTrigger<$EnchantedItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_, levelsSpent: number): void;
        constructor();
    }
    export class $PlayerHurtEntityTrigger extends $SimpleCriterionTrigger<$PlayerHurtEntityTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Entity, source: $DamageSource_, amountDealt: number, amountTaken: number, blocked: boolean): void;
        constructor();
    }
    export class $DefaultBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$DefaultBlockInteractionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    export class $ItemPredicate$Builder {
        of(tag: $TagKey_<$Item>): $ItemPredicate$Builder;
        of(...items: $ItemLike_[]): $ItemPredicate$Builder;
        build(): $ItemPredicate;
        static item(): $ItemPredicate$Builder;
        withSubPredicate<T extends $ItemSubPredicate>(arg0: $ItemSubPredicate$Type_<T>, arg1: T): $ItemPredicate$Builder;
        withCount(count: $MinMaxBounds$Ints_): $ItemPredicate$Builder;
        hasComponents(components: $DataComponentPredicate): $ItemPredicate$Builder;
    }
    export class $MobEffectsPredicate$Builder {
        build(): ($MobEffectsPredicate) | undefined;
        and(effect: $Holder_<$MobEffect>, predicate: $MobEffectsPredicate$MobEffectInstancePredicate_): $MobEffectsPredicate$Builder;
        and(effect: $Holder_<$MobEffect>): $MobEffectsPredicate$Builder;
        static effects(): $MobEffectsPredicate$Builder;
        constructor();
    }
    export class $LocationPredicate$PositionPredicate extends $Record {
    }
    export class $StartRidingTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static playerStartsRiding(player: $EntityPredicate$Builder): $Criterion<$StartRidingTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$StartRidingTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined);
    }
    export class $PlayerInteractTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_, lootContext: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        entity(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static itemUsedOnEntity(item: $ItemPredicate$Builder, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PlayerInteractTrigger$TriggerInstance>;
        static itemUsedOnEntity(player: ($ContextAwarePredicate) | undefined, item: $ItemPredicate$Builder, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PlayerInteractTrigger$TriggerInstance>;
        static CODEC: $Codec<$PlayerInteractTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    export class $SlideDownBlockTrigger extends $SimpleCriterionTrigger<$SlideDownBlockTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, state: $BlockState_): void;
        constructor();
    }
    export class $LightPredicate extends $Record {
        matches(level: $ServerLevel, pos: $BlockPos_): boolean;
        composite(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$LightPredicate>;
        constructor(composite: $MinMaxBounds$Ints_);
    }
    export class $ConstructBeaconTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(level: number): boolean;
        level(): $MinMaxBounds$Ints;
        player(): ($ContextAwarePredicate) | undefined;
        static constructedBeacon(level: $MinMaxBounds$Ints_): $Criterion<$ConstructBeaconTrigger$TriggerInstance>;
        static constructedBeacon(): $Criterion<$ConstructBeaconTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ConstructBeaconTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, level: $MinMaxBounds$Ints_);
    }
    export class $DefaultBlockInteractionTrigger extends $SimpleCriterionTrigger<$DefaultBlockInteractionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_): void;
        constructor();
    }
    export class $InventoryChangeTrigger extends $SimpleCriterionTrigger<$InventoryChangeTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, inventory: $Inventory, stack: $ItemStack_): void;
        constructor();
    }
    export class $EntityPredicate$Builder {
        flags(flags: $EntityFlagsPredicate$Builder): $EntityPredicate$Builder;
        of(entityTypeTag: $TagKey_<$EntityType<never>>): $EntityPredicate$Builder;
        of(entityType: $EntityType_<never>): $EntityPredicate$Builder;
        slots(slots: $SlotsPredicate_): $EntityPredicate$Builder;
        distance(distanceToPlayer: $DistancePredicate_): $EntityPredicate$Builder;
        build(): $EntityPredicate;
        effects(effects: $MobEffectsPredicate$Builder): $EntityPredicate$Builder;
        static entity(): $EntityPredicate$Builder;
        periodicTick(periodicTick: number): $EntityPredicate$Builder;
        movementAffectedBy(location: $LocationPredicate$Builder): $EntityPredicate$Builder;
        steppingOn(location: $LocationPredicate$Builder): $EntityPredicate$Builder;
        located(location: $LocationPredicate$Builder): $EntityPredicate$Builder;
        vehicle(passenger: $EntityPredicate$Builder): $EntityPredicate$Builder;
        passenger(passenger: $EntityPredicate$Builder): $EntityPredicate$Builder;
        nbt(nbt: $NbtPredicate_): $EntityPredicate$Builder;
        team(team: string): $EntityPredicate$Builder;
        subPredicate(subPredicate: $EntitySubPredicate): $EntityPredicate$Builder;
        targetedEntity(passenger: $EntityPredicate$Builder): $EntityPredicate$Builder;
        moving(movement: $MovementPredicate_): $EntityPredicate$Builder;
        entityType(entityType: $EntityTypePredicate_): $EntityPredicate$Builder;
        equipment(equipment: $EntityEquipmentPredicate$Builder): $EntityPredicate$Builder;
        equipment(equipment: $EntityEquipmentPredicate_): $EntityPredicate$Builder;
        constructor();
    }
    export class $FallAfterExplosionTrigger extends $SimpleCriterionTrigger<$FallAfterExplosionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $Vec3_, entity: $Entity | null): void;
        constructor();
    }
    export class $PlayerTrigger extends $SimpleCriterionTrigger<$PlayerTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer): void;
        constructor();
    }
    export class $UsingItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        static lookingAt(player: $EntityPredicate$Builder, item: $ItemPredicate$Builder): $Criterion<$UsingItemTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$UsingItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    export class $EntityHurtPlayerTrigger extends $SimpleCriterionTrigger<$EntityHurtPlayerTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, source: $DamageSource_, dealtDamage: number, takenDamage: number, blocked: boolean): void;
        constructor();
    }
    export class $KilledTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(player: $ServerPlayer, context: $LootContext, source: $DamageSource_): boolean;
        validate(validator: $CriterionValidator): void;
        killingBlow(): ($DamageSourcePredicate) | undefined;
        entityPredicate(): ($ContextAwarePredicate) | undefined;
        static playerKilledEntity(entityPredicate: $EntityPredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: $EntityPredicate$Builder, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: ($EntityPredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: $EntityPredicate$Builder, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: $EntityPredicate$Builder, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: ($EntityPredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: $EntityPredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: $EntityPredicate$Builder, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        static playerKilledEntityNearSculkCatalyst(): $Criterion<$KilledTrigger$TriggerInstance>;
        static CODEC: $Codec<$KilledTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, entityPredicate: ($ContextAwarePredicate) | undefined, killingBlow: ($DamageSourcePredicate_) | undefined);
    }
    export class $BlockPredicate extends $Record {
        matches(level: $ServerLevel, pos: $BlockPos_): boolean;
        matches(block: $BlockInWorld): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        blocks(): ($HolderSet<$Block>) | undefined;
        nbt(): ($NbtPredicate) | undefined;
        requiresNbt(): boolean;
        static CODEC: $Codec<$BlockPredicate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockPredicate>;
        constructor(arg0: ($HolderSet_<$Block>) | undefined, arg1: ($StatePropertiesPredicate_) | undefined, arg2: ($NbtPredicate_) | undefined);
    }
    export class $ChangeDimensionTrigger extends $SimpleCriterionTrigger<$ChangeDimensionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, fromLevel: $ResourceKey_<$Level>, toLevel: $ResourceKey_<$Level>): void;
        constructor();
    }
    export class $ItemBundlePredicate extends $Record implements $SingleComponentItemPredicate<$BundleContents> {
        componentType(): $DataComponentType<$BundleContents>;
        matches(stack: $ItemStack_, value: $BundleContents): boolean;
        items(): ($CollectionPredicate<$ItemStack, $ItemPredicate>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemBundlePredicate>;
        constructor(arg0: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined);
    }
    export class $LightningStrikeTrigger extends $SimpleCriterionTrigger<$LightningStrikeTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, lightning: $LightningBolt, nearbyEntities: $List_<$Entity>): void;
        constructor();
    }
    export class $StartRidingTrigger extends $SimpleCriterionTrigger<$StartRidingTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer): void;
        constructor();
    }
    export class $LocationPredicate extends $Record {
        position(): ($LocationPredicate$PositionPredicate) | undefined;
        matches(level: $ServerLevel, x: number, arg2: number, y: number): boolean;
        block(): ($BlockPredicate) | undefined;
        dimension(): ($ResourceKey<$Level>) | undefined;
        canSeeSky(): (boolean) | undefined;
        smokey(): (boolean) | undefined;
        light(): ($LightPredicate) | undefined;
        structures(): ($HolderSet<$Structure>) | undefined;
        biomes(): ($HolderSet<$Biome>) | undefined;
        fluid(): ($FluidPredicate) | undefined;
        static CODEC: $Codec<$LocationPredicate>;
        constructor(arg0: ($LocationPredicate$PositionPredicate_) | undefined, arg1: ($HolderSet_<$Biome>) | undefined, arg2: ($HolderSet_<$Structure>) | undefined, arg3: ($ResourceKey_<$Level>) | undefined, arg4: (boolean) | undefined, arg5: ($LightPredicate_) | undefined, arg6: ($BlockPredicate_) | undefined, arg7: ($FluidPredicate_) | undefined, arg8: (boolean) | undefined);
    }
    export class $CuredZombieVillagerTrigger extends $SimpleCriterionTrigger<$CuredZombieVillagerTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, zombie: $Zombie, villager: $Villager): void;
        constructor();
    }
    export class $LootTableTrigger extends $SimpleCriterionTrigger<$LootTableTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, lootTable: $ResourceKey_<$LootTable>): void;
        constructor();
    }
    export class $LevitationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(player: $ServerPlayer, startPos: $Vec3_, duration: number): boolean;
        duration(): $MinMaxBounds$Ints;
        distance(): ($DistancePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static levitated(distance: $DistancePredicate_): $Criterion<$LevitationTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$LevitationTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, distance: ($DistancePredicate_) | undefined, duration: $MinMaxBounds$Ints_);
    }
    export class $EntitySubPredicates {
        static bootstrap(registry: $Registry<$MapCodec_<$EntitySubPredicate>>): $MapCodec<$EntitySubPredicate>;
        static frogVariant(catVariant: $Holder_<$FrogVariant>): $EntitySubPredicate;
        static wolfVariant(wolfVariant: $HolderSet_<$WolfVariant>): $EntitySubPredicate;
        static catVariant(catVariant: $Holder_<$CatVariant>): $EntitySubPredicate;
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
        matches(recipeId: $ResourceLocation_, items: $List_<$ItemStack_>): boolean;
        ingredients(): $List<$ItemPredicate>;
        player(): ($ContextAwarePredicate) | undefined;
        static craftedItem(recipeId: $ResourceLocation_): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        static craftedItem(recipeId: $ResourceLocation_, ingredients: $List_<$ItemPredicate$Builder>): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        recipeId(): $ResourceLocation;
        static crafterCraftedItem(recipeId: $ResourceLocation_): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$RecipeCraftedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, recipeId: $ResourceLocation_, ingredients: $List_<$ItemPredicate_>);
    }
    export class $SimpleCriterionTrigger<T extends $SimpleCriterionTrigger$SimpleInstance> implements $CriterionTrigger<T> {
        trigger(player: $ServerPlayer, testTrigger: $Predicate_<T>): void;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        createCriterion(triggerInstance: T): $Criterion<T>;
        constructor();
    }
    export class $EffectsChangedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(player: $ServerPlayer, lootContext: $LootContext | null): boolean;
        validate(validator: $CriterionValidator): void;
        source(): ($ContextAwarePredicate) | undefined;
        static hasEffects(effects: $MobEffectsPredicate$Builder): $Criterion<$EffectsChangedTrigger$TriggerInstance>;
        effects(): ($MobEffectsPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static gotEffectsFrom(source: $EntityPredicate$Builder): $Criterion<$EffectsChangedTrigger$TriggerInstance>;
        static CODEC: $Codec<$EffectsChangedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, effects: ($MobEffectsPredicate_) | undefined, source: ($ContextAwarePredicate) | undefined);
    }
    export class $RecipeUnlockedTrigger extends $SimpleCriterionTrigger<$RecipeUnlockedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, recipe: $RecipeHolder_<never>): void;
        static unlocked(recipeId: $ResourceLocation_): $Criterion<$RecipeUnlockedTrigger$TriggerInstance>;
        constructor();
    }
    export class $ImpossibleTrigger$TriggerInstance extends $Record implements $CriterionTriggerInstance {
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ImpossibleTrigger$TriggerInstance>;
        constructor();
    }
    export class $TargetBlockTrigger extends $SimpleCriterionTrigger<$TargetBlockTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, projectile: $Entity, vector: $Vec3_, signalStrength: number): void;
        constructor();
    }
    export class $MinMaxBounds$Doubles extends $Record implements $MinMaxBounds<number> {
        static atMost(min: number): $MinMaxBounds$Doubles;
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(value: number): boolean;
        static between(min: number, arg1: number): $MinMaxBounds$Doubles;
        static atLeast(min: number): $MinMaxBounds$Doubles;
        static fromReader(reader: $StringReader, formatter: $Function_<number, number>): $MinMaxBounds$Doubles;
        static fromReader(reader: $StringReader): $MinMaxBounds$Doubles;
        minSq(): (number) | undefined;
        maxSq(): (number) | undefined;
        matchesSqr(value: number): boolean;
        static exactly(min: number): $MinMaxBounds$Doubles;
        isAny(): boolean;
        unwrapPoint(): (number) | undefined;
        static CODEC: $Codec<$MinMaxBounds$Doubles>;
        static ANY: $MinMaxBounds$Doubles;
        constructor(arg0: (number) | undefined, arg1: (number) | undefined, arg2: (number) | undefined, arg3: (number) | undefined);
        get any(): boolean;
    }
    export class $EntityEquipmentPredicate extends $Record {
        matches(entity: $Entity | null): boolean;
        head(): ($ItemPredicate) | undefined;
        body(): ($ItemPredicate) | undefined;
        offhand(): ($ItemPredicate) | undefined;
        legs(): ($ItemPredicate) | undefined;
        mainhand(): ($ItemPredicate) | undefined;
        feet(): ($ItemPredicate) | undefined;
        chest(): ($ItemPredicate) | undefined;
        static captainPredicate(patternRegistry: $HolderGetter<$BannerPattern_>): $EntityEquipmentPredicate;
        static CODEC: $Codec<$EntityEquipmentPredicate>;
        constructor(arg0: ($ItemPredicate_) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: ($ItemPredicate_) | undefined, arg3: ($ItemPredicate_) | undefined, arg4: ($ItemPredicate_) | undefined, arg5: ($ItemPredicate_) | undefined, arg6: ($ItemPredicate_) | undefined);
    }
    export class $TradeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(context: $LootContext, stack: $ItemStack_): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        villager(): ($ContextAwarePredicate) | undefined;
        static tradedWithVillager(): $Criterion<$TradeTrigger$TriggerInstance>;
        static tradedWithVillager(villager: $EntityPredicate$Builder): $Criterion<$TradeTrigger$TriggerInstance>;
        static CODEC: $Codec<$TradeTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, villager: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    export class $EntityHurtPlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(player: $ServerPlayer, source: $DamageSource_, dealtDamage: number, takenDamage: number, blocked: boolean): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        damage(): ($DamagePredicate) | undefined;
        static entityHurtPlayer(damage: $DamagePredicate_): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        static entityHurtPlayer(): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        static entityHurtPlayer(damage: $DamagePredicate$Builder): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$EntityHurtPlayerTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, damage: ($DamagePredicate_) | undefined);
    }
    export class $ItemWrittenBookPredicate extends $Record implements $SingleComponentItemPredicate<$WrittenBookContent> {
        componentType(): $DataComponentType<$WrittenBookContent>;
        matches(stack: $ItemStack_, value: $WrittenBookContent_): boolean;
        resolved(): (boolean) | undefined;
        title(): (string) | undefined;
        pages(): ($CollectionPredicate<$Filterable<$Component>, $ItemWrittenBookPredicate$PagePredicate>) | undefined;
        author(): (string) | undefined;
        generation(): $MinMaxBounds$Ints;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemWrittenBookPredicate>;
        constructor(arg0: ($CollectionPredicate_<$Filterable_<$Component_>, $ItemWrittenBookPredicate$PagePredicate_>) | undefined, arg1: (string) | undefined, arg2: (string) | undefined, arg3: $MinMaxBounds$Ints_, arg4: (boolean) | undefined);
    }
    export class $ItemPredicate extends $Record implements $Predicate<$ItemStack> {
        test(arg0: $ItemStack_): boolean;
        count(): $MinMaxBounds$Ints;
        components(): $DataComponentPredicate;
        items(): ($HolderSet<$Item>) | undefined;
        subPredicates(): $Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $Codec<$ItemPredicate>;
        constructor(arg0: ($HolderSet_<$Item>) | undefined, arg1: $MinMaxBounds$Ints_, arg2: $DataComponentPredicate, arg3: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>);
    }
    export class $EntityPredicate$LocationWrapper extends $Record {
        steppingOn(): ($LocationPredicate) | undefined;
        located(): ($LocationPredicate) | undefined;
        affectsMovement(): ($LocationPredicate) | undefined;
        static CODEC: $MapCodec<$EntityPredicate$LocationWrapper>;
        constructor(arg0: ($LocationPredicate_) | undefined, arg1: ($LocationPredicate_) | undefined, arg2: ($LocationPredicate_) | undefined);
    }
    export class $EntitySubPredicates$EntityHolderVariantPredicateType<V> {
        static create<V>(registryKey: $ResourceKey_<$Registry<V>>, getter: $Function_<$Entity, ($Holder<V>) | undefined>): $EntitySubPredicates$EntityHolderVariantPredicateType<V>;
        createPredicate(variants: $HolderSet_<V>): $EntitySubPredicate;
        codec: $MapCodec<$EntitySubPredicates$EntityHolderVariantPredicateType$Instance>;
        getter: $Function<$Entity, ($Holder<V>) | undefined>;
        constructor(registryKey: $ResourceKey_<$Registry<V>>, getter: $Function_<$Entity, ($Holder<V>) | undefined>);
    }
    export class $EntityPredicate extends $Record {
        flags(): ($EntityFlagsPredicate) | undefined;
        static wrap(builder: $EntityPredicate$Builder): $ContextAwarePredicate;
        static wrap(predicate: ($EntityPredicate_) | undefined): ($ContextAwarePredicate) | undefined;
        static wrap(predicate: $EntityPredicate_): $ContextAwarePredicate;
        static wrap(...builders: $EntityPredicate$Builder[]): $List<$ContextAwarePredicate>;
        matches(entity: $ServerLevel, arg1: $Vec3_ | null, arg2: $Entity | null): boolean;
        matches(player: $ServerPlayer, entity: $Entity | null): boolean;
        location(): $EntityPredicate$LocationWrapper;
        slots(): ($SlotsPredicate) | undefined;
        effects(): ($MobEffectsPredicate) | undefined;
        static createContext(player: $ServerPlayer, entity: $Entity): $LootContext;
        periodicTick(): (number) | undefined;
        vehicle(): ($EntityPredicate) | undefined;
        movement(): ($MovementPredicate) | undefined;
        passenger(): ($EntityPredicate) | undefined;
        nbt(): ($NbtPredicate) | undefined;
        team(): (string) | undefined;
        distanceToPlayer(): ($DistancePredicate) | undefined;
        subPredicate(): ($EntitySubPredicate) | undefined;
        targetedEntity(): ($EntityPredicate) | undefined;
        entityType(): ($EntityTypePredicate) | undefined;
        equipment(): ($EntityEquipmentPredicate) | undefined;
        static ADVANCEMENT_CODEC: $Codec<$ContextAwarePredicate>;
        static CODEC: $Codec<$EntityPredicate>;
        constructor(arg0: ($EntityTypePredicate_) | undefined, arg1: ($DistancePredicate_) | undefined, arg2: ($MovementPredicate_) | undefined, arg3: $EntityPredicate$LocationWrapper_, arg4: ($MobEffectsPredicate_) | undefined, arg5: ($NbtPredicate_) | undefined, arg6: ($EntityFlagsPredicate_) | undefined, arg7: ($EntityEquipmentPredicate_) | undefined, arg8: ($EntitySubPredicate) | undefined, arg9: (number) | undefined, arg10: ($EntityPredicate_) | undefined, arg11: ($EntityPredicate_) | undefined, arg12: ($EntityPredicate_) | undefined, arg13: (string) | undefined, arg14: ($SlotsPredicate_) | undefined);
    }
    export class $MobEffectsPredicate extends $Record {
        matches(entity: $LivingEntity): boolean;
        matches(effects: $Map_<$Holder_<$MobEffect>, $MobEffectInstance>): boolean;
        matches(entity: $Entity): boolean;
        effectMap(): $Map<$Holder<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate>;
        static CODEC: $Codec<$MobEffectsPredicate>;
        constructor(effectMap: $Map_<$Holder_<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate_>);
    }
    export class $CuredZombieVillagerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(zombie: $LootContext, villager: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        zombie(): ($ContextAwarePredicate) | undefined;
        villager(): ($ContextAwarePredicate) | undefined;
        static curedZombieVillager(): $Criterion<$CuredZombieVillagerTrigger$TriggerInstance>;
        static CODEC: $Codec<$CuredZombieVillagerTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, zombie: ($ContextAwarePredicate) | undefined, villager: ($ContextAwarePredicate) | undefined);
    }
    export class $CollectionCountsPredicate$Multiple<T, P extends $Predicate<T>> extends $Record implements $CollectionCountsPredicate<T, P> {
        test(collection: $Iterable_<T>): boolean;
        entries(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $List_<$CollectionCountsPredicate$Entry_<T, P>>);
    }
    export class $DamagePredicate$Builder {
        type(type: $DamageSourcePredicate_): $DamagePredicate$Builder;
        type(typeBuilder: $DamageSourcePredicate$Builder): $DamagePredicate$Builder;
        build(): $DamagePredicate;
        takenDamage(dealtDamage: $MinMaxBounds$Doubles_): $DamagePredicate$Builder;
        static damageInstance(): $DamagePredicate$Builder;
        dealtDamage(dealtDamage: $MinMaxBounds$Doubles_): $DamagePredicate$Builder;
        blocked(blocked: boolean): $DamagePredicate$Builder;
        sourceEntity(sourceEntity: $EntityPredicate_): $DamagePredicate$Builder;
        constructor();
    }
    export class $CollectionContentsPredicate$Single<T, P extends $Predicate<T>> extends $Record implements $CollectionContentsPredicate<T, P> {
        test(contents: $Iterable_<T>): boolean;
        test(): P;
        unpack(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: P);
    }
    export class $ChangeDimensionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(fromLevel: $ResourceKey_<$Level>, toLevel: $ResourceKey_<$Level>): boolean;
        from(): ($ResourceKey<$Level>) | undefined;
        to(): ($ResourceKey<$Level>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static changedDimensionFrom(from: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimension(from: $ResourceKey_<$Level>, to: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimension(): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimensionTo(from: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
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
        matches(victims: $Collection_<$LootContext>): boolean;
        validate(validator: $CriterionValidator): void;
        static channeledLightning(...victims: $EntityPredicate$Builder[]): $Criterion<$ChanneledLightningTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        victims(): $List<$ContextAwarePredicate>;
        static CODEC: $Codec<$ChanneledLightningTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, victims: $List_<$ContextAwarePredicate>);
    }
    export class $ItemWritableBookPredicate extends $Record implements $SingleComponentItemPredicate<$WritableBookContent> {
        componentType(): $DataComponentType<$WritableBookContent>;
        matches(stack: $ItemStack_, value: $WritableBookContent_): boolean;
        pages(): ($CollectionPredicate<$Filterable<string>, $ItemWritableBookPredicate$PagePredicate>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemWritableBookPredicate>;
        constructor(arg0: ($CollectionPredicate_<$Filterable_<string>, $ItemWritableBookPredicate$PagePredicate_>) | undefined);
    }
}
