import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $DataResult, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Set_, $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable, $ProblemReporter } from "@package/net/minecraft/util";
import { $DistanceTrigger, $EffectsChangedTrigger, $EnterBlockTrigger, $UsedEnderEyeTrigger, $BredAnimalsTrigger, $SlideDownBlockTrigger, $LootTableTrigger, $BrewedPotionTrigger, $ShotCrossbowTrigger, $TameAnimalTrigger, $FilledBucketTrigger, $PlayerHurtEntityTrigger, $KilledTrigger, $PickedUpItemTrigger, $PlayerInteractTrigger, $EntityHurtPlayerTrigger, $SummonedEntityTrigger, $UsingItemTrigger, $RecipeCraftedTrigger, $StartRidingTrigger, $AnyBlockInteractionTrigger, $ConsumeItemTrigger, $ChangeDimensionTrigger, $PlayerTrigger, $ImpossibleTrigger, $DefaultBlockInteractionTrigger, $InventoryChangeTrigger, $ItemDurabilityTrigger, $ConstructBeaconTrigger, $UsedTotemTrigger, $CriterionValidator, $FallAfterExplosionTrigger, $BeeNestDestroyedTrigger, $KilledByCrossbowTrigger, $RecipeUnlockedTrigger, $EnchantedItemTrigger, $CuredZombieVillagerTrigger, $LevitationTrigger, $LightningStrikeTrigger, $TradeTrigger, $ItemUsedOnLocationTrigger, $ChanneledLightningTrigger, $TargetBlockTrigger, $FishingRodHookedTrigger } from "@package/net/minecraft/advancements/critereon";
import { $CacheableFunction } from "@package/net/minecraft/commands";
import { $Instant } from "@package/java/time";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Registry, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $IAdvancementBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $AdvancementNodeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Enum, $Comparable, $Iterable, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as critereon from "@package/net/minecraft/advancements/critereon";

declare module "@package/net/minecraft/advancements" {
    export class $Advancement$Builder implements $IAdvancementBuilderExtension {
        /**
         * @deprecated
         */
        parent(parentId: $ResourceLocation_): $Advancement$Builder;
        parent(parent: $AdvancementHolder_): $Advancement$Builder;
        save(output: $Consumer_<$AdvancementHolder>, id: string): $AdvancementHolder;
        display(display: $DisplayInfo): $Advancement$Builder;
        display(icon: $ItemStack_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        display(icon: $ItemLike_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        build(id: $ResourceLocation_): $AdvancementHolder;
        static advancement(): $Advancement$Builder;
        rewards(rewardsBuilder: $AdvancementRewards$Builder): $Advancement$Builder;
        rewards(rewards: $AdvancementRewards_): $Advancement$Builder;
        static recipeAdvancement(): $Advancement$Builder;
        sendsTelemetryEvent(): $Advancement$Builder;
        requirements(requirements: $AdvancementRequirements_): $Advancement$Builder;
        requirements(requirementsStrategy: $AdvancementRequirements$Strategy_): $Advancement$Builder;
        addCriterion(key: string, criterion: $Criterion_<never>): $Advancement$Builder;
        /**
         * Saves this builder with the given id using the `ExistingFileHelper` to check if the parent is already known.
         */
        save(saver: $Consumer_<$AdvancementHolder>, id: $ResourceLocation_, fileHelper: $ExistingFileHelper): $AdvancementHolder;
        constructor();
    }
    export class $AdvancementRequirements$Strategy {
        static OR: $AdvancementRequirements$Strategy;
        static AND: $AdvancementRequirements$Strategy;
    }
    export interface $AdvancementRequirements$Strategy {
        create(criteria: $Collection_<string>): $AdvancementRequirements;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements$Strategy}.
     */
    export type $AdvancementRequirements$Strategy_ = ((arg0: $Collection<string>) => $AdvancementRequirements_);
    export interface $CriterionTrigger<T> extends RegistryMarked<RegistryTypes.TriggerTypeTag, RegistryTypes.TriggerType> {}
    export class $CriterionTrigger<T extends $CriterionTriggerInstance> {
    }
    export interface $CriterionTrigger<T extends $CriterionTriggerInstance> {
        codec(): $Codec<T>;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        createCriterion(triggerInstance: T): $Criterion<T>;
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTrigger}.
     */
    export type $CriterionTrigger_<T> = RegistryTypes.TriggerType;
    export class $CriteriaTriggers {
        static register<T extends $CriterionTrigger<never>>(name: string, trigger: T): T;
        static bootstrap(registry: $Registry<$CriterionTrigger_<never>>): $CriterionTrigger<never>;
        static ENCHANTED_ITEM: $EnchantedItemTrigger;
        static TRADE: $TradeTrigger;
        static DEFAULT_BLOCK_USE: $DefaultBlockInteractionTrigger;
        static RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static KILLED_BY_CROSSBOW: $KilledByCrossbowTrigger;
        static TAME_ANIMAL: $TameAnimalTrigger;
        static CHANGED_DIMENSION: $ChangeDimensionTrigger;
        static ITEM_DURABILITY_CHANGED: $ItemDurabilityTrigger;
        static ENTITY_KILLED_PLAYER: $KilledTrigger;
        static AVOID_VIBRATION: $PlayerTrigger;
        static BREWED_POTION: $BrewedPotionTrigger;
        static PLAYER_HURT_ENTITY: $PlayerHurtEntityTrigger;
        static ALLAY_DROP_ITEM_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static RAID_WIN: $PlayerTrigger;
        static SHOT_CROSSBOW: $ShotCrossbowTrigger;
        static RIDE_ENTITY_IN_LAVA_TRIGGER: $DistanceTrigger;
        static NETHER_TRAVEL: $DistanceTrigger;
        static BEE_NEST_DESTROYED: $BeeNestDestroyedTrigger;
        static KILL_MOB_NEAR_SCULK_CATALYST: $KilledTrigger;
        static CRAFTER_RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static CODEC: $Codec<$CriterionTrigger<never>>;
        static FILLED_BUCKET: $FilledBucketTrigger;
        static LIGHTNING_STRIKE: $LightningStrikeTrigger;
        static ENTITY_HURT_PLAYER: $EntityHurtPlayerTrigger;
        static RAID_OMEN: $PlayerTrigger;
        static ANY_BLOCK_USE: $AnyBlockInteractionTrigger;
        static SUMMONED_ENTITY: $SummonedEntityTrigger;
        static TICK: $PlayerTrigger;
        static ITEM_USED_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static TARGET_BLOCK_HIT: $TargetBlockTrigger;
        static EFFECTS_CHANGED: $EffectsChangedTrigger;
        static PLAYER_KILLED_ENTITY: $KilledTrigger;
        static LOCATION: $PlayerTrigger;
        static GENERATE_LOOT: $LootTableTrigger;
        static PLAYER_INTERACTED_WITH_ENTITY: $PlayerInteractTrigger;
        static THROWN_ITEM_PICKED_UP_BY_PLAYER: $PickedUpItemTrigger;
        static RECIPE_UNLOCKED: $RecipeUnlockedTrigger;
        static BRED_ANIMALS: $BredAnimalsTrigger;
        static INVENTORY_CHANGED: $InventoryChangeTrigger;
        static SLEPT_IN_BED: $PlayerTrigger;
        static IMPOSSIBLE: $ImpossibleTrigger;
        static USED_TOTEM: $UsedTotemTrigger;
        static CONSUME_ITEM: $ConsumeItemTrigger;
        static PLACED_BLOCK: $ItemUsedOnLocationTrigger;
        static CURED_ZOMBIE_VILLAGER: $CuredZombieVillagerTrigger;
        static USED_ENDER_EYE: $UsedEnderEyeTrigger;
        static START_RIDING_TRIGGER: $StartRidingTrigger;
        static HONEY_BLOCK_SLIDE: $SlideDownBlockTrigger;
        static CONSTRUCT_BEACON: $ConstructBeaconTrigger;
        static ENTER_BLOCK: $EnterBlockTrigger;
        static FISHING_ROD_HOOKED: $FishingRodHookedTrigger;
        static LEVITATION: $LevitationTrigger;
        static CHANNELED_LIGHTNING: $ChanneledLightningTrigger;
        static FALL_AFTER_EXPLOSION: $FallAfterExplosionTrigger;
        static THROWN_ITEM_PICKED_UP_BY_ENTITY: $PickedUpItemTrigger;
        static USING_ITEM: $UsingItemTrigger;
        static FALL_FROM_HEIGHT: $DistanceTrigger;
        constructor();
    }
    export class $AdvancementTree {
        remove(advancements: $Set_<$ResourceLocation_>): void;
        get(id: $ResourceLocation_): $AdvancementNode;
        get(advancement: $AdvancementHolder_): $AdvancementNode;
        clear(): void;
        addAll(advancements: $Collection_<$AdvancementHolder_>): void;
        roots(): $Iterable<$AdvancementNode>;
        nodes(): $Collection<$AdvancementNode>;
        setListener(listener: $AdvancementTree$Listener | null): void;
        constructor();
        set listener(value: $AdvancementTree$Listener | null);
    }
    export class $CriterionProgress {
        isDone(): boolean;
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        grant(): void;
        static fromNetwork(buffer: $FriendlyByteBuf): $CriterionProgress;
        revoke(): void;
        getObtained(): $Instant;
        constructor();
        constructor(obtained: $Instant);
        get done(): boolean;
        get obtained(): $Instant;
    }
    export class $AdvancementRewards$Builder {
        /**
         * Adds the given recipe to the rewards.
         */
        static "function"(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        build(): $AdvancementRewards;
        /**
         * Adds the given recipe to the rewards.
         */
        static recipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        runs(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        addLootTable(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        static loot(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        static experience(experience: number): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        addRecipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        addExperience(experience: number): $AdvancementRewards$Builder;
        constructor();
    }
    export class $AdvancementTree$Listener {
    }
    export interface $AdvancementTree$Listener {
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onAdvancementsCleared(): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
    }
    export class $Criterion<T extends $CriterionTriggerInstance> extends $Record {
        trigger(): $CriterionTrigger<T>;
        triggerInstance(): T;
        static CODEC: $Codec<$Criterion<never>>;
        constructor(arg0: $CriterionTrigger_<T>, arg1: T);
    }
    export class $Advancement extends $Record {
        name(): ($Component) | undefined;
        static name(advancement: $AdvancementHolder_): $Component;
        parent(): ($ResourceLocation) | undefined;
        validate(reporter: $ProblemReporter, lootData: $HolderGetter$Provider_): void;
        display(): ($DisplayInfo) | undefined;
        isRoot(): boolean;
        criteria(): $Map<string, $Criterion<never>>;
        rewards(): $AdvancementRewards;
        sendsTelemetryEvent(): boolean;
        requirements(): $AdvancementRequirements;
        static CODEC: $Codec<$Advancement>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Advancement>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Advancement>;
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean);
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean, name: ($Component_) | undefined);
        get root(): boolean;
    }
    export class $AdvancementRequirements extends $Record {
        size(): number;
        test(predicate: $Predicate_<string>): boolean;
        isEmpty(): boolean;
        count(filter: $Predicate_<string>): number;
        validate(requirements: $Set_<string>): $DataResult<$AdvancementRequirements>;
        write(buffer: $FriendlyByteBuf): void;
        names(): $Set<string>;
        static allOf(requirements: $Collection_<string>): $AdvancementRequirements;
        static anyOf(requirements: $Collection_<string>): $AdvancementRequirements;
        requirements(): $List<$List<string>>;
        static CODEC: $Codec<$AdvancementRequirements>;
        static EMPTY: $AdvancementRequirements;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$List_<string>>);
        get empty(): boolean;
    }
    export class $AdvancementRewards extends $Record {
        "function"(): ($CacheableFunction) | undefined;
        grant(player: $ServerPlayer): void;
        loot(): $List<$ResourceKey<$LootTable>>;
        experience(): number;
        recipes(): $List<$ResourceLocation>;
        static CODEC: $Codec<$AdvancementRewards>;
        static EMPTY: $AdvancementRewards;
        constructor(experience: number, loot: $List_<$ResourceKey_<$LootTable>>, recipes: $List_<$ResourceLocation_>, arg3: ($CacheableFunction) | undefined);
    }
    export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance> extends $Record {
        run(playerAdvancements: $PlayerAdvancements): void;
        trigger(): T;
        criterion(): string;
        advancement(): $AdvancementHolder;
        constructor(arg0: T, arg1: $AdvancementHolder_, arg2: string);
    }
    export class $AdvancementType extends $Enum<$AdvancementType> implements $StringRepresentable {
        static values(): $AdvancementType[];
        static valueOf(arg0: string): $AdvancementType;
        getDisplayName(): $Component;
        getChatColor(): $ChatFormatting;
        getSerializedName(): string;
        createAnnouncement(advancement: $AdvancementHolder_, player: $ServerPlayer): $MutableComponent;
        getRemappedEnumConstantName(): string;
        static CHALLENGE: $AdvancementType;
        static TASK: $AdvancementType;
        static GOAL: $AdvancementType;
        static CODEC: $Codec<$AdvancementType>;
        get displayName(): $Component;
        get chatColor(): $ChatFormatting;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementType}.
     */
    export type $AdvancementType_ = "task" | "challenge" | "goal";
    export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
        compareTo(other: $AdvancementProgress): number;
        update(requirements: $AdvancementRequirements_): void;
        isDone(): boolean;
        getPercent(): number;
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        getFirstProgressDate(): $Instant;
        hasProgress(): boolean;
        getRemainingCriteria(): $Iterable<string>;
        getCompletedCriteria(): $Iterable<string>;
        getCriterion(criterionName: string): $CriterionProgress;
        static fromNetwork(buffer: $FriendlyByteBuf): $AdvancementProgress;
        revokeProgress(criterionName: string): boolean;
        grantProgress(criterionName: string): boolean;
        getProgressText(): $Component;
        static CODEC: $Codec<$AdvancementProgress>;
        constructor();
        get done(): boolean;
        get percent(): number;
        get firstProgressDate(): $Instant;
        get remainingCriteria(): $Iterable<string>;
        get completedCriteria(): $Iterable<string>;
        get progressText(): $Component;
    }
    export class $DisplayInfo {
        getDescription(): $Component;
        isHidden(): boolean;
        getType(): $AdvancementType;
        getY(): number;
        getTitle(): $Component;
        getIcon(): $ItemStack;
        setLocation(x: number, y: number): void;
        getBackground(): ($ResourceLocation) | undefined;
        shouldShowToast(): boolean;
        shouldAnnounceChat(): boolean;
        getX(): number;
        static CODEC: $Codec<$DisplayInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DisplayInfo>;
        constructor(icon: $ItemStack_, title: $Component_, description: $Component_, background: ($ResourceLocation_) | undefined, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean);
        get description(): $Component;
        get hidden(): boolean;
        get type(): $AdvancementType;
        get y(): number;
        get title(): $Component;
        get icon(): $ItemStack;
        get background(): ($ResourceLocation) | undefined;
        get x(): number;
    }
    export class $AdvancementNode implements $AdvancementNodeKJS {
        parent(): $AdvancementNode;
        root(): $AdvancementNode;
        holder(): $AdvancementHolder;
        static getRoot(node: $AdvancementNode): $AdvancementNode;
        children(): $Iterable<$AdvancementNode>;
        addChild(child: $AdvancementNode): void;
        advancement(): $Advancement;
        self(): $AdvancementNode;
        addChild(child: $AdvancementNode): void;
        getParent(): $AdvancementNode;
        getDisplayText(): $Component;
        getDisplay(): $DisplayInfo;
        getDescription(): $Component;
        getChildren(): $Set<$AdvancementNode>;
        hasDisplay(): boolean;
        getTitle(): $Component;
        getId(): $ResourceLocation;
        constructor(holder: $AdvancementHolder_, parent: $AdvancementNode | null);
        get displayText(): $Component;
        get display(): $DisplayInfo;
        get description(): $Component;
        get title(): $Component;
        get id(): $ResourceLocation;
    }
    export class $TreeNodePosition {
        static run(rootNode: $AdvancementNode): void;
        constructor(node: $AdvancementNode, parent: $TreeNodePosition | null, previousSibling: $TreeNodePosition | null, childIndex: number, x: number);
    }
    export class $AdvancementHolder extends $Record {
        value(): $Advancement;
        id(): $ResourceLocation;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AdvancementHolder>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancementHolder>;
        constructor(arg0: $ResourceLocation_, arg1: $Advancement_);
    }
    export class $CriterionTriggerInstance {
    }
    export interface $CriterionTriggerInstance {
        validate(validator: $CriterionValidator): void;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTriggerInstance}.
     */
    export type $CriterionTriggerInstance_ = ((arg0: $CriterionValidator) => void);
}
